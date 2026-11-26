#!/usr/bin/env python3
"""Exact independent check of the U71-01 endpoint and low-count guards."""
import json
from fractions import Fraction
from pathlib import Path

GUARDS = Path("experiments/results/u71-247-100-guards.json")


def atanh_log_interval(r: Fraction, terms: int):
    """Enclose log(x) for r=(x-1)/(x+1) by a rational atanh series."""
    assert abs(r) < 1
    partial = sum((2 * r ** (2 * k + 1) / (2 * k + 1) for k in range(terms + 1)), Fraction())
    a = abs(r)
    tail = 2 * a ** (2 * terms + 3) / ((2 * terms + 3) * (1 - a * a))
    if r >= 0:
        return partial, partial + tail
    return partial - tail, partial


def main():
    n = 20
    ln2 = atanh_log_interval(Fraction(1, 3), n)
    ln_119_160 = atanh_log_interval(Fraction(-41, 279), n)
    ln_11_16 = atanh_log_interval(Fraction(-5, 27), n)
    ln_13_16 = atanh_log_interval(Fraction(-3, 29), n)

    # Range reduction keeps all atanh arguments small:
    # 119/10 = 16*(119/160), 11 = 16*(11/16), 13 = 16*(13/16).
    endpoint_lower = 4 * ln2[0] + ln_119_160[0]
    eleven_upper = 4 * ln2[1] + ln_11_16[1]
    thirteen_lower = 4 * ln2[0] + ln_13_16[0]
    h = Fraction(247, 100)
    slack_floor = Fraction(65384, 10_000_000)
    assert eleven_upper < h < thirteen_lower
    assert endpoint_lower - h > slack_floor

    record = json.loads(GUARDS.read_text())
    scale = int(record["scale"])
    assert len(record["rows"]) == 1
    row = record["rows"][0]
    assert row["witnessWindow"] == "119/10"
    assert Fraction(int(row["guardSlackEndpoint"]), scale) > slack_floor

    table = row["guards"]
    assert len(table) == 14
    for guard in table:
        low, odd, mode = guard["low"], guard["odd"], guard["n"]
        assert mode == 2 * low + int(odd)
        lo, hi = map(int, guard["g"])
        assert lo <= hi
        assert guard["positive"] == (lo > 0)
        if low in (44, 45):
            assert hi < 0
        if low == 46:
            assert lo > 0
    for parity in (False, True):
        assert next(g for g in table if g["low"] == 46 and g["odd"] is parity)["positive"]

    print("exact atanh-series enclosure: log(119/10)-247/100 > 65384/10000000")
    print("exact location: log(11) < 247/100 < log(13)")
    print("guard interval signs checked for all 14 parity/low-count entries")
    print("lowCount 46 is the first positive common guard in the stored range")


if __name__ == "__main__":
    main()

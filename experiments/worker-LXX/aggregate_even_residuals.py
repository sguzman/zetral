#!/usr/bin/env python3
"""Exact independent aggregation/audit of the 12 staged LXX even chunks."""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PREFIX = "lxx-123-50-even-t832-finite-"
SCALE = str(10**66)
DIM = 45


def main():
    out = ROOT / "research/workers/LXX-EVEN-AGGREGATE/finite-total.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    total = [[[0, 0] for _ in range(DIM)] for _ in range(DIM)]
    hashes, intervals = [], []
    next_start, mode_count = 90, 0
    for i in range(12):
        start = 90 + 1024*i
        end = min(start + 1022, 12288)
        path = ROOT / f"experiments/results/{PREFIX}{start}-{end}.json"
        blob = path.read_bytes()
        chunk = json.loads(blob)
        count = (end-start)//2 + 1
        assert start == next_start and chunk["start"] == start and chunk["end"] == end
        assert chunk["count"] == count and chunk["scale"] == SCALE
        assert len(chunk["finite"]) == DIM and all(len(row) == DIM for row in chunk["finite"])
        for a in range(DIM):
            for b in range(DIM):
                lo, hi = map(int, chunk["finite"][a][b])
                assert lo <= hi
                total[a][b][0] += lo
                total[a][b][1] += hi
                intervals.append((hi-lo, path.name, a, b))
        hashes.append((path.name, hashlib.sha256(blob).hexdigest(), count))
        mode_count += count
        next_start = end + 2
    assert next_start == 12290 and mode_count == 6100
    result = {"start": 90, "end": 12288, "count": mode_count,
              "scale": SCALE, "finite": [[[str(x) for x in z] for z in row] for row in total]}
    out.write_text(json.dumps(result, separators=(",", ":")))
    worst = max(intervals)
    print(f"chunks: {len(hashes)}; modes: {mode_count}; matrix: {DIM}x{DIM}")
    print(f"largest source interval width: {worst[0]} at {worst[1]}[{worst[2]}][{worst[3]}]")
    print(f"aggregate written: {out.relative_to(ROOT)}")
    print("chunk SHA-256:")
    for name, digest, count in hashes:
        print(f"{name} {count} {digest}")


if __name__ == "__main__":
    main()

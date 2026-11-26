#!/usr/bin/env python3
"""Generate and exactly aggregate the LXX odd M=16384 finite chunks."""
import hashlib
import json
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
RESULTS = ROOT / "experiments/results"
BASE = "lxx-123-50-odd-t832-m16384-"
TRIAL_PARTS = [RESULTS / f"{BASE}trial-part{i}.txt" for i in range(1, 4)]


def main():
    if not all(p.exists() for p in TRIAL_PARTS):
        raw = subprocess.check_output([
            "node", "experiments/lxx-m16384-odd-staged.js", "trial", "odd"
        ], cwd=ROOT)
        trial_new = json.loads(raw)
        assert trial_new["odd"] and trial_new["M"] == 16384
        size = (len(raw) + 2) // 3
        pieces = [raw[i:i + size] for i in range(0, len(raw), size)]
        assert len(pieces) == 3
        for path, piece in zip(TRIAL_PARTS, pieces):
            path.write_bytes(piece)
            assert path.read_bytes() == piece
    trial_bytes = b"".join(p.read_bytes() for p in TRIAL_PARTS)
    trial = json.loads(trial_bytes)
    assert trial["odd"] and trial["M"] == 16384 and trial["T"] == 832
    assert trial["h"] == "123/50" and len(trial["ks"]) == 45

    chunks = []
    with tempfile.TemporaryDirectory(prefix="zetral-lxx-odd-") as tmp:
        stored_path = Path(tmp) / "trial.json"
        stored_path.write_bytes(trial_bytes)
        start = 91
        for index in range(16):
            end = min(start + 1022, 16383)
            path = RESULTS / f"{BASE}finite-{start}-{end}.json"
            if path.exists():
                raw = path.read_bytes()
            else:
                raw = subprocess.check_output([
                    "node", "experiments/lxx-m16384-odd-staged.js",
                    "finite", str(stored_path), str(start), str(end)
                ], cwd=ROOT)
                obj = json.loads(raw)
                assert obj["start"] == start and obj["end"] == end
                assert obj["count"] == (end - start) // 2 + 1
                assert obj["scale"] == trial["scale"]
                assert len(obj["finite"]) == 45 and all(len(row) == 45 for row in obj["finite"])
                for row in obj["finite"]:
                    for lo, hi in row:
                        assert int(lo) <= int(hi)
                path.write_bytes(raw)
            reread = path.read_bytes()
            assert reread == raw
            obj = json.loads(reread)
            assert obj["start"] == start and obj["end"] == end
            chunks.append(obj)
            print(path.name, len(reread), hashlib.sha256(reread).hexdigest(), flush=True)
            start = end + 2
        assert start == 16385

    total = [[ [0, 0] for _ in range(45)] for _ in range(45)]
    expected = 91
    count = 0
    for chunk in chunks:
        assert chunk["start"] == expected
        expected = chunk["end"] + 2
        count += chunk["count"]
        for i in range(45):
            for j in range(45):
                total[i][j][0] += int(chunk["finite"][i][j][0])
                total[i][j][1] += int(chunk["finite"][i][j][1])
    assert expected == 16385 and count == 8147
    assert all(lo <= hi for row in total for lo, hi in row)
    aggregate = {"odd": True, "start": 91, "end": 16383, "count": count,
                 "scale": trial["scale"], "finite": [[[str(x) for x in pair] for pair in row]
                                                          for row in total]}
    out = RESULTS / f"{BASE}finite-total.json"
    data = json.dumps(aggregate, separators=(",", ":")).encode()
    out.write_bytes(data)
    assert json.loads(out.read_bytes()) == aggregate
    print("aggregate", out.name, len(data), hashlib.sha256(data).hexdigest(), flush=True)
    print("covered odd modes", count, "from 91 through 16383", flush=True)


if __name__ == "__main__":
    main()

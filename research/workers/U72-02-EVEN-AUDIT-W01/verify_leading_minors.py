#!/usr/bin/env python3
"""Independent small-order determinant check for the pinned U72-02 raw artifact."""
import itertools
import json
import sys

path = sys.argv[1]
with open(path, encoding="utf-8") as f:
    artifact = json.load(f)
row = artifact["rows"][0]
scale = int(artifact["scale"])
# The artifact stores the integer comparison matrix. Its common scale is positive,
# so it does not change any principal-minor sign.
A = [[int(x) for x in r] for r in row["lowerInteger"]]
assert scale > 0
assert len(A) == 47 and all(len(r) == 47 for r in A)
assert all(A[i][j] == A[j][i] for i in range(47) for j in range(47))
recorded = [int(x) for x in row["principalMinors"]]

def sign_of_perm(p):
    inversions = sum(p[i] > p[j] for i in range(len(p)) for j in range(i + 1, len(p)))
    return -1 if inversions % 2 else 1

def det_by_permutations(B):
    n = len(B)
    return sum(sign_of_perm(p) * __import__("functools").reduce(
        int.__mul__, (B[i][p[i]] for i in range(n)), 1
    ) for p in itertools.permutations(range(n)))

for n in range(1, 6):
    d = det_by_permutations([r[:n] for r in A[:n]])
    r = recorded[n - 1]
    print(f"order={n} det_sign={'+' if d > 0 else '-' if d < 0 else '0'}")
    print(f"  independently_computed={d}")
    print(f"  artifact_recorded={r}")
    print(f"  matches={d == r}")

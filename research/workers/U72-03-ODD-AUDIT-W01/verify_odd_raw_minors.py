#!/usr/bin/env python3
"""Independent permutation-sum check of the first eight U72-03 odd minors."""
import itertools
import json
import math
import sys

with open(sys.argv[1], encoding="utf-8") as f:
    artifact = json.load(f)
row = artifact["rows"][0]
scale = int(artifact["scale"])
A = [[int(x) for x in r] for r in row["lowerInteger"]]
recorded = [int(x) for x in row["principalMinors"]]
assert scale > 0 and row["odd"] is True
assert len(A) == 47 and all(len(r) == 47 for r in A)
assert all(A[i][j] == A[j][i] for i in range(47) for j in range(47))

def permutation_sign(p):
    inversions = sum(p[i] > p[j] for i in range(len(p)) for j in range(i + 1, len(p)))
    return -1 if inversions % 2 else 1

def determinant_by_permutations(B):
    n = len(B)
    return sum(permutation_sign(p) * math.prod(B[i][p[i]] for i in range(n))
               for p in itertools.permutations(range(n)))

for n in range(1, 9):
    d = determinant_by_permutations([r[:n] for r in A[:n]])
    stored = recorded[n - 1]
    print(f"order={n} sign={'+' if d > 0 else '-' if d < 0 else '0'}")
    print(f"  independently_computed={d}")
    print(f"  artifact_recorded={stored}")
    print(f"  matches={d == stored}")

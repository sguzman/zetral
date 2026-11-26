# TC02-W01: Independent reconstruction of the failed even comparison

## Result

An independent exact-integer implementation reconstructs the TC02 even M12288/T768/lowCount44 baseline lower matrix from the saved component intervals. All 1,936 baseline entries and all 44 weighted row radii match.

It also reconstructs all eight selected 44 by 44 lower matrices. All 15,488 entries match the replay. Each saved candidate records two leading determinant values: the first is positive and the second is negative. The independent fraction-free calculation reproduces both values for all eight candidates. The baseline has the same one-positive/second-negative pattern. This verifies the reported failure at 1/44 positive leading minors.

## Reproduction

From the repository root:

```sh
python3 experiments/worker-TC02-W01/rebuild_tc02_failure.py
```

The script concatenates the six committed raw parts and reads the saved constant-factor, joint-allocation, and replay files. It independently applies the rational allocations, interval rounding, symmetrized interval intersections, midpoint/radius steps, and weighted diagonal subtraction. It then uses exact Bareiss elimination through the first nonpositive leading pivot, asserting exact division throughout.

## Scope and limits

This checks reconstruction arithmetic from the saved component interval arrays through the failed lower matrices and their stored leading-minor prefixes. It does not regenerate the component intervals from analytic inputs, independently verify the floating diagnostic that attributes failure to finite residual, or certify a spectral conclusion. It does not evaluate the planned T1024 refinement.

AI-assisted; no human review or formal verification has occurred.

## Provenance

Starting commit: `fa35aca` (LXIX TC02 first even comparison checkpoint and T1024 target).

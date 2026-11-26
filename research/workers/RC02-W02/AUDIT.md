# RC02-W02: Independent stored interval-to-matrix reconstruction

## Result

An independent Python implementation reconstructs the baseline lower matrix and all eight selected lower matrices for the even RC02 replay from its saved component intervals. It reproduces all 1,764 baseline entries and all 42 baseline weighted matrix radii. For the eight selected allocations it reproduces 14,112 matrix entries and recomputes 336 leading principal determinants exactly; every determinant matches the saved list and is positive.

The smallest value among all 336 recomputed leading determinants is `7439033252438570` (allocation index 7).

## Method and reproduction

From the repository root, run:

```sh
python3 experiments/worker-RC02-W02/rebuild_rc02_matrices.py
```

The script concatenates the five committed `rc02-243-100-even-m10240-raw-part*.txt` files, parses the exact integer component intervals, and reads the committed constant-factor, joint-allocation, and replay JSON files. Using Python arbitrary-precision integers, it independently applies the rational tail allocation, directed interval rounding, symmetrized interval intersection, truncation-toward-zero midpoint, weighted row-radius calculation, and diagonal radius subtraction. It then uses Bareiss fraction-free elimination, asserting exact divisibility at each step, to recompute every leading determinant.

## Scope and limits

This verifies reconstruction arithmetic from the **stored component interval arrays** through the saved lower matrices and their leading minors. It does not regenerate or independently certify the component interval arrays from the prime sums, Euler–Maclaurin remainders, moment bounds, or raw analytic inputs. It does not validate the factor derivation, the optimization procedure, or the original-form operator normalization. Therefore this is not an end-to-end independent RC02 replay or an independent proof of the campaign’s analytic bounds.

The audit is AI-assisted and has not received human review or formal verification.

## Provenance

The worktree started at main commit `107661c` (RC03 odd factor persistence). RC02 source data are the committed five-part even raw artifact plus its saved factor, allocation, and replay JSON files.

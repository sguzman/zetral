# SC02-W01: Independent M12288 matrix and margin reconstruction

## Result

An independent exact-integer implementation reconstructs the even SC02 M12288 baseline lower matrix from the saved component intervals. All 1,849 entries and 43 weighted row radii match. For each of the eight saved allocations, it reconstructs the 43 by 43 lower matrix and recomputes the leading principal determinants with Bareiss elimination. All 14,792 selected entries and all 344 determinants match the saved replay, and all determinants are positive.

For allocation zero, the checker also independently searches the fixed-energy grid using Sylvester's criterion. It reproduces margin `37523/1000000` and confirms the next grid value fails, matching the saved independent audit result.

## Reproduction

From the repository root:

```sh
python3 experiments/worker-SC02-W01/rebuild_sc02_matrices.py
```

The script concatenates the five committed M12288 raw parts and reads the saved factor, joint-allocation, replay, and independent-audit JSON. It uses Python arbitrary-precision integers only for the matrix reconstruction, Bareiss determinants, and fixed-energy positivity checks. Exact divisibility is asserted during each fraction-free elimination.

## Scope and limits

This verifies arithmetic from the **stored component interval arrays** through the baseline and selected lower matrices, determinant lists, and the selected allocation's fixed-energy grid margin. It does not regenerate the component interval arrays from the analytic prime and Euler–Maclaurin inputs, prove the factor bounds, validate the allocation search, or verify original-form normalization. It is not an end-to-end independent SC02 proof or an independent operator evaluation.

AI-assisted; no human review or formal verification has occurred.

## Provenance

Starting commit: `78f5a25` (SC02 refined even pass and SC03 target). The comparison inputs are the M12288 even raw parts and saved factor/allocation/replay objects recorded in Campaign LXVIII.

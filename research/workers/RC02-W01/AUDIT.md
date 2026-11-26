# RC02-W01: Stored principal-minor arithmetic audit

## Result

An independent exact-arithmetic check recomputes every reported leading principal minor for the eight stored RC02 allocation matrices. Each matrix is symmetric and 42 by 42. All 42 recomputed determinants for each matrix exactly match the corresponding `principalMinors` list in the replay JSON, and every determinant is positive: 336 matches in total.

## Method

Run `python3 experiments/worker-RC02-W01/replay_principal_minors.py` from the repository root. The script parses the `lowerInteger` matrices and recorded `principalMinors` in `experiments/results/rc02-243-100-even-m10240-constant-replay.json`. It computes leading principal determinants with Bareiss fraction-free elimination using Python arbitrary-precision integers, asserting exact division at each elimination step. It performs no floating-point arithmetic.

## Scope

This checks the determinant arithmetic against the matrices saved in the replay artifact. It does not rebuild those matrices from raw interval data, audit the factor generator, or establish any claim about the original-form operator. The result is an arithmetic audit of stored matrices, not an independent end-to-end replay of RC02.

## Provenance

The audit is based on main commit `40a1f18` (the commit that persists the RC02 constant replay JSON). The script and audit were prepared with AI assistance; no human review has yet occurred.

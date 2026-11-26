# U75-BASE-AUDIT-W01 — original-form finite comparison

## Finding

At (h=5/2), the persisted LXXIV positive allocation does **not** make the 50-direction interval comparison positive definite in the original trial coordinates. Exact Bareiss elimination finds 7 positive leading pivots and a negative eighth pivot in the even sector, and 25 positive pivots followed by a negative 26th pivot in the odd sector. The archived transformed comparisons still have 50/50 positive pivots and margins (127110/10^6) (even) and (211333/10^6) (odd).

This is a finite-certificate result: the row congruence is essential for the archived successful comparison with this trial/allocation. It is not a counterexample to the analytic inequality, the candidate positivity statement, RH, or an operator construction.

## Independent reconstruction

Run from the repository root:

```sh
node experiments/worker-u75-base-audit/original-form.js
```

The driver reconstructs each raw row from its five stored trial parts and full residual aggregate, using the archived U74 staged generator/assembler to recover the interval components. It then performs its own exact comparison replay; it does not invoke `u74-t1024-exact-replay.js`, `u74-t1024-rank-replay.js`, the stored transform, or transformed eighth bounds.

For the original-coordinate candidate it uses the archived proposal's positive rational allocation weights but sets every direction-specific factor multiplier to (1). It forms each interval entry from the original stored finite, upper, and seven rank-component intervals; subtracts the original-coordinate eighth diagonal bounds; intersects the two directed intervals; takes integer midpoints; and subtracts the weighted interval-radius correction. A common denominator (10^6) is used only for the stored energy-grid check. Exact signed integer arithmetic and Bareiss divisions decide all leading-minor signs. The original baseline is independently reconstructed first and matches the archived `lowerInteger` matrix at all 2500 entries and the 50 radius corrections in each parity.

The transformed counts and margins are copied from the archived rank-tightened replay solely as a comparison reference. The audit result is `experiments/worker-u75-base-audit/result.json`.

## Exact output

| Sector | Original baseline SPD pivots | Proposal in original coordinates | Archived transformed comparison |
|---|---:|---:|---:|
| Even | 48/50; pivot 49 negative | 7/50; pivot 8 negative | 50/50; margin 127110/10^6 |
| Odd | 44/50; pivot 45 negative | 25/50; pivot 26 negative | 50/50; margin 211333/10^6 |

The matrix/remainder construction retains the campaign's inherited analytic majorants and interval inputs. This independent check addresses their exact finite assembly in original coordinates, not the truth of those analytic majorants. The staged generator/assembler are reused as data reconstruction; the exact allocation, symmetric interval intersection, radius subtraction, and leading-minor evaluator are implemented in the scoped worker script.

## Status and limits

- Both parity sectors completed.
- Exact integer/rational arithmetic; no floating-point sign decisions.
- No CI, formal proof, RH proof, human review, or originality claim.
- No main/campaign/state/coordination files changed.

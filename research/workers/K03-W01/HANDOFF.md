# K03-W01 — Independent K03 audit handoff

Status: IN_PROGRESS

Baseline: `42bca32` (Campaign XIX active).

## Question and scope

Independently audit the completed Campaign VIII derivation in `research/kernels/K03-entire-phase-characteristic.md`, focusing on the arbitrary-phase characteristic identity, phase-zero normalization, uniform limiting factor, and determinant normalizations. Check source-dependent signs and algebraic transitions against the stated K01/K02 inputs. Do not re-audit K01/K02 or lead-owned Campaign XIX BPF01–04.

## Acceptance criteria

- Record a concrete derivation audit with any discrepancy or its precise scope if none is found.
- Preserve reproducible source checks and exact computations where used.
- Distinguish imported assumptions from deductions; do not claim formal proof, human review, or novelty.
- Bounded stopping condition: trace the characteristic identity and its normalization in both phase cases, then reconcile or report any mismatch.

# U72 original-form probe — worker handoff

- **ID:** U72-ORIGINAL-FORM-PROBE-W01
- **Status:** IN_PROGRESS
- **Base:** `5e076c163bf97f064a49272556145027bc72dbca` (LXXII U72-01 complete)
- **Question:** Independently evaluate a bounded sample of even low-mode diagonal entries from the defining prime-power expression at h=62/25, then compare with the staged exact interval enclosure.
- **Scope:** One independently written high-precision numerical evaluation for a small, predeclared set of low-mode diagonals; no reuse of the generator's interval arithmetic in the evaluation path. This complements U72-04's stored-data reconstruction and does not duplicate its scope.
- **Acceptance:** Record the independent formula derivation, explicit truncations and numerical precision; demonstrate whether each computed value lies in the staged enclosure. Mark this as numerical evidence only unless every approximation receives rigorous outward error bounds.
- **Bounded stopping condition:** Stop after up to three entries if the defining expression cannot be reconstructed independently from documented formulas or if omitted tails cannot be bounded within the available scope.
- **Files:** this handoff and a standalone probe under `experiments/worker-u72-original-form-probe-w01/`.
- **Next:** Inspect the defining formulas, recover exact input intervals from the worker raw artifact, and determine whether an independent numerical path is feasible.

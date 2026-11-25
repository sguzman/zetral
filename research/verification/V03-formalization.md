# V03 — Scalar formalization checkpoint

Date: 2026-11-25 UTC. Status: candidate Lean source persisted, **not kernel-checked**. Target: v0.1 manuscript and V01 direct-trial derivation. Review branch: verify/campaign-02-v03; head b729aa47b6b2dfd439d652e6be1f71eec813b24a. Draft PR: https://github.com/sguzman/zetral/pull/1 . Do not merge until the build and axiom audit are verified.

## Candidate formal lemmas

| Lean theorem | Mathematical obligation | Explicit remaining hypotheses |
|---|---|---|
| Zetral.reciprocal_transfer | 0 <= 1/mu-1/lam <= 2 err/lam^2 | lam>0, 0<=err<=lam/2, lam-err<=mu<=lam |
| Zetral.trial_leakage | w<=2 eps v | 0<=eps<=1/2, u>=0, w<=eps u, (1-eps)u<=v |
| Zetral.trial_leakage_sq | w^2<=4 eps^2 v^2 | same and w>=0 |
| Zetral.rayleigh_defect | energy >= (lam-(lam-lo)defect)*total | orthogonal squared-norm decomposition, leakage bound, spectral energy lower bound |
| Zetral.direct_ritz_transfer | final reciprocal estimate with factor 8 | positive lower eigenvalue, min-max lower and upper bounds, half-lambda threshold |

Source: https://github.com/sguzman/zetral/blob/b729aa47b6b2dfd439d652e6be1f71eec813b24a/formal/Zetral.lean . No admitted proof or custom axiom declarations are included in the authored source. This is not evidence of elaboration or kernel acceptance.

Not formalized: orthogonality/projection geometry in a Hilbert space; compact self-adjoint min-max and Suzuki's compression; Fourier/analytic quotient and tail estimates; weighted sampling summability; multiplicity normalization; RH. The scalar lemmas assume rather than prove the geometric/spectral premises. In particular, even successful CI would verify only these five scalar steps, not the entire candidate theorem.

## Toolchain and verification

- Lean 4.19.0 chosen as a stable matching release rather than importing the large RH development. Mathlib exact revision c44e0c8ee63ca166450922a373c7409c5d26b00b. Upstream lean-toolchain and lake-manifest.json fetched via GitHub at that exact revision and read directly. Root lock constructed using that transitive manifest plus the direct Mathlib dependency. The generated root lock has not been validated by Lake.
- Checked local PATH: lean, lake, elan, nix, cargo, rustc all absent. Direct HTTPS request to GitHub Lean release failed with DNS resolution error. Cannot execute local Lean in this environment.
- CI workflow on the draft branch installs Elan, requests the locked Mathlib cache, checks for lock changes, builds the library and runs #print axioms for all five theorems. Axiom log parser rejects unexpected axioms and sorryAx, and requires a report for each theorem. Workflow installer/action tags are not fully pinned; no Nix environment claimed. No CI execution verified.
- All six files on the draft branch were remotely read back and compared with intended contents. PR creation succeeded. Initial PR-head workflow-run lookup returned an empty list. Do not infer a failure or a passing result.

## Resume

On the next continuation, check the exact PR head for runs and inspect the Lean verification job and axiom log if available. If CI has not returned a usable run, record V03's machine-verification blocker and advance V04 independently; retain draft PR for later inspection within this campaign. If CI gives actionable errors, correct those within V03. Do not substitute a general success status for the five theorem axiom reports. If the scalar proofs pass, record the exact head, toolchain and report, with the remaining unformalized obligations listed above. No change to archived manuscript v0.1.

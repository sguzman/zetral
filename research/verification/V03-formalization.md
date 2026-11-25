# V03 — Scalar formalization checkpoint

Date: 2026-11-25 UTC. Status: five scalar lemmas successfully kernel-checked and axiom-audited at the exact original PR head. Target: v0.1 manuscript and V01 direct-trial derivation. Review branch: verify/campaign-02-v03; head b729aa47b6b2dfd439d652e6be1f71eec813b24a. Draft PR: https://github.com/sguzman/zetral/pull/1 . Do not merge until the build and axiom audit are verified.

## Candidate formal lemmas

| Lean theorem | Mathematical obligation | Explicit remaining hypotheses |
|---|---|---|
| Zetral.reciprocal_transfer | 0 <= 1/mu-1/lam <= 2 err/lam^2 | lam>0, 0<=err<=lam/2, lam-err<=mu<=lam |
| Zetral.trial_leakage | w<=2 eps v | 0<=eps<=1/2, u>=0, w<=eps u, (1-eps)u<=v |
| Zetral.trial_leakage_sq | w^2<=4 eps^2 v^2 | same and w>=0 |
| Zetral.rayleigh_defect | energy >= (lam-(lam-lo)defect)*total | orthogonal squared-norm decomposition, leakage bound, spectral energy lower bound |
| Zetral.direct_ritz_transfer | final reciprocal estimate with factor 8 | positive lower eigenvalue, min-max lower and upper bounds, half-lambda threshold |

Source: https://github.com/sguzman/zetral/blob/b729aa47b6b2dfd439d652e6be1f71eec813b24a/formal/Zetral.lean . All five lemmas elaborated and passed the Lean kernel in CI. No admitted proof or custom axiom dependencies were found.

Not formalized: orthogonality/projection geometry in a Hilbert space; compact self-adjoint min-max and Suzuki's compression; Fourier/analytic quotient and tail estimates; weighted sampling summability; multiplicity normalization; RH. The scalar lemmas assume rather than prove the geometric/spectral premises. In particular, even successful CI would verify only these five scalar steps, not the entire candidate theorem.

## Toolchain and verification

- Lean 4.19.0 chosen as a stable matching release rather than importing the large RH development. Mathlib exact revision c44e0c8ee63ca166450922a373c7409c5d26b00b. Upstream lean-toolchain and lake-manifest.json fetched via GitHub at that exact revision and read directly. Root lock constructed using that transitive manifest plus the direct Mathlib dependency. The successful CI run checked out all pinned revisions and passed the lock-file diff check.
- Checked local PATH: lean, lake, elan, nix, cargo, rustc all absent. Direct HTTPS request to GitHub Lean release failed with DNS resolution error. Cannot execute local Lean in this environment.
- CI workflow on the draft branch installs Elan, requests the locked Mathlib cache, checks for lock changes, builds the library and runs #print axioms for all five theorems. Axiom log parser rejects unexpected axioms and sorryAx, and requires a report for each theorem. Workflow installer/action tags are not fully pinned; no Nix environment claimed. CI run 45624869814 completed successfully; actual job logs inspected.
- All six files on the draft branch were remotely read back and compared with intended contents. PR creation succeeded. Initial lookup returned an empty list; a subsequent lookup reported Lean verification run 45624869814 and Research checks run 45624869538 in progress. No conclusion yet; no passing result asserted.

## Verification outcome (2026-11-25)

Lean job 139242271802 completed successfully. Logs confirm the PR merge checkout includes original head b729aa47b6b2dfd439d652e6be1f71eec813b24a, Lean 4.19.0 commit 6caaee842e94, Lake 5.0.0, exact Mathlib revision and all eight pinned transitive dependencies. The build and subsequent independent elaboration command succeeded. Each of the five named lemmas reports exactly propext, Classical.choice, Quot.sound; the audit step succeeded. Axiom artifact 15027512346 uploaded. Selected verbatim log evidence is in evidence/V03-lean-run-45624869814.txt. No unexpected axiom or sorryAx reported. One harmless unused ring tactic warning; no proof change required.

The separate Rust job 139242270364 failed at compilation with four E0282 type-inference errors in precision.rs (lines 45,92,103,131). The smoke run was skipped. Fixed overloaded numeric literals/type annotations on PR branch at c5e3563838e36d4f692e41def1326dd8761a7c20, verified readback. This does not change the Lean files. New Rust/Research run 45625323534 and Lean run 45625323664 observed in progress. No repaired Rust build claimed. PR remains draft/unmerged pending checks; V03's scalar verification criterion is satisfied at the original exact head. V04 can proceed; inspect the new runs at a later checkpoint within the approved campaign. Full analytic and spectral formalization remains outstanding, as explicitly listed above.

## Follow-up during V04
Both repair-head workflows passed. Rust job 139243855422 ran all three baseline tests and MPFR smoke X=3,N=18,bits=320,order=160,step=100; all six roots agree with the prior displayed reference digits. Lean job 139243855453 repeated the successful five-lemma axiom audit. Selected logs: evidence/V04-job-139243855422.txt and evidence/V04-job-139243855453.txt. PR #1 merged at 7c87731b48f862fe0235f5f7bff8b9ad9970402d; proof source, toolchain, lock, Lean workflow and repaired precision source on main exactly match the tested branch contents. Full Rust table reproduction and certification are not established. No push-triggered main workflow outcome claimed.

# Campaign II — Rigorous verification and novelty assessment

Approved by the owner 2026-11-25. Campaign I remains closed; see research/CAMPAIGN-01-CLOSURE.md. Target is the version 0.1 candidate manuscript, papers/theta-cardinal-bound.tex (blob 6fcdb4c0a3cfe8de0a2986ff04f05a3c20c20952).

## Ordered milestones
- V01: adversarial mathematical proof audit. Check the source imports, hypotheses, signs, multiplicities, tail estimates, projection and reciprocal steps. Seek counterexamples and record unresolved obligations.
- V02: thorough comparison against existing literature, particularly cardinal functions, theta-window estimates and quantitative convergence for the exact phase-pi operator. Record precise overlap and source/access limitations; no priority claim from search absence.
- V03: Lean formalization of essential lemmas. Prefer small reusable lemmas for the Ritz/reciprocal argument and tail estimates, with explicit imports/hypotheses. Pin toolchain and dependencies; execute and audit axioms when possible. If unavailable, record blocker and exact obligations, not an unverified claim of formal proof.
- V04: explicit effective convergence constants. Track constants and thresholds, distinguishing zero-dependent estimates, certified derivative/multiplicity inputs and finite-arithmetic computability. Do not assume simplicity or claim computability without establishing it.
- V05: certified numerical investigation. Separate exact cutoff, finite Fourier approximation and arithmetic/root-isolation errors. Seek a defensible enclosure for specified examples; where unavailable, document the precise missing estimates. Verify Rust/CI and reproducibility if accessible.
- V06: revise manuscript, record publication-readiness assessment, update public atlas and final state, stop. No submission or new campaign without owner decision.

## Infrastructure
Revisit Situs location, Pages, Rust/Lean CI and reproducible Nix environment insofar as required by the approved milestones. Preserve Situs as canonical, no substitute ontology. Do not let an access blocker halt independent mathematics.

## Acceptance
Each V01–V06 has persisted evidence or a specific blocker disposition. A defensible proof with explicit review status, or a documented flaw and its consequences, is a valid outcome. Novelty, full formalization, effective constants, numerical certificates and publication are not guaranteed. Self-review is not independent review. No unrelated research. Stop after V06 or a genuine campaign-wide blocker.

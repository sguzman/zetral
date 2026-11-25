# Zetral research operating protocol

Read STATE.md and research/CAMPAIGN-01.md before every work batch. "Continue" authorizes the next unfinished approved milestone, not scope expansion. Work until a meaningful checkpoint, persist artifacts and state, verify remote readback, then report only actual changes, remaining work, and required human action. Stop at acceptance criteria or a real blocker. No invented progress, extra tasks, or claims of background execution.

Research integrity:
- Distinguish cited theorem, assumption, conjecture, numerical evidence, informal derivation, and machine-checked theorem. Record exact assumptions, sources, theorem identifiers and versions.
- Check prior art before novelty claims; attempt counterexamples; preserve negative results.
- Numerical results require parameters, precision, error analysis, reproducible commands and raw data. Known zeros may be used as external comparison, not hidden inputs to a claimed independent construction.
- Lean proofs must be checked with exact toolchain, dependency lock and axiom audit; no sorry/admit or custom axioms concealed as proof. Conditional lemmas may state hypotheses explicitly.
- Never claim CI or publication succeeded without verification. Do not publish private material. Disclose AI assistance and human review status.
- Situs is canonical for the situated ontology. Do not create a duplicate registry here. Do not generalize beyond the research need.
- Prefer Rust for experiments; use Nix for reproducibility and Lean 4/Mathlib for formal results. No npm. Avoid unrelated infrastructure.

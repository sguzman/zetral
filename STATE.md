# Research state

Status: CAMPAIGN II CLOSED — 5/6 milestones complete; V05 interval/expanded numerical verification blocked. All six dispositioned; acceptance criterion met. No active campaign.
Date: 2026-11-25 UTC.
Campaign I remains closed; see research/CAMPAIGN-01-STATE.md and research/CAMPAIGN-01-CLOSURE.md.
Campaign II plan: research/CAMPAIGN-02.md. Final closure: research/CAMPAIGN-02-CLOSURE.md.

Result: conditional fixed-index exact phase-pi cutoff bound O_n(X^(5/2) exp(-2 pi X)), X=exp(2a), with explicit zero-dependent constants and threshold. Candidate proof self-reviewed, not independently reviewed; originality unestablished. Manuscript v0.2: papers/theta-cardinal-bound.tex, blob aabf597901969bd2ca9d32dcfff1c894f7bef7cf, matches locally compiled four-page PDF source exactly; v0.1 preserved in Git history.

- V01 COMPLETE: adversarial internal proof audit; no flaw identified; alternate direct trial-vector argument and counterexamples to weakened hypotheses. research/verification/V01-adversarial-audit.md.
- V02 COMPLETE WITH ACCESS LIMITATIONS: targeted prior-art comparison; substantial established related techniques, no equivalent exact rate identified in inspected material. No exhaustive search or novelty claim. research/verification/V02-novelty-assessment.md.
- V03 COMPLETE (scalar subset): five lemmas checked by Lean 4.19.0 and pinned Mathlib in runs 45624869814 and 45625323664, standard axiom reports only; source and lock merged in PR #1 (7c87731b48f862fe0235f5f7bff8b9ad9970402d). Full analytic and spectral argument not formalized. Rust baseline and X=3 smoke passed in run 45625323534. Evidence in research/verification/V03-formalization.md and evidence/ logs.
- V04 COMPLETE: explicit theta, tail and cardinal constants, paired product identity M=-A''(0)/A(0), explicit K_n and threshold; non-certified numerical examples. research/verification/V04-effective-constants.md.
- V05 BLOCKED: 50–60 digit diagnostic agrees on n=1, X=11 estimated error bound 3.37195225e-11, NOT an interval certificate. Final head a2547ce44702c98262078becb6bf4447699c8b0b on draft PR #2 returned no runs at final recheck. Prior reusable attempt failed before jobs. Local FLINT unavailable as recorded. Full twelve-case Rust verification and exact/finite Fourier certification not established. PR remains unmerged. research/verification/V05-numerical-certification.md records all attempts and final disposition.
- V06 COMPLETE: v0.2 revised with explicit constants, source comparisons and correct scope of formal and numerical evidence. Final latexmk build successful (four pages, no reported overfull boxes or undefined references); source blob matched. README, public atlas source, closure report and V05 disposition read back. Site source commit 0df7bebfcff49397dd5c753eb64e7dcf2361b6ef. No live Pages or deployed PDF outcome asserted.

Remaining blockers: Situs canonical target unavailable; no duplicate ontology; Nix environment incomplete; Pages deployment unverified; full numerical/analytic formalization and independent review outstanding. No academic submission or originality claim.

Resume on continue: STOP. Campaign II is concluded within the approved acceptance criterion. A new campaign, renewed CI troubleshooting or submission requires explicit owner authorization. Read the closure report; do not create new work merely to prolong continuation.

# Campaign II — Closure report

25 November 2026. All six approved milestones have been dispositioned. Five completed; V05 completed as an investigation with the requested interval and expanded Rust verification still blocked. No new campaign is active.

| Milestone | Disposition | Durable evidence |
|---|---|---|
| V01 | Complete, internal review only | verification/V01-adversarial-audit.md |
| V02 | Complete with literature-access limitations | verification/V02-novelty-assessment.md |
| V03 | Complete for five scalar lemmas | formal/Zetral.lean, verification/V03-formalization.md, CI log excerpts |
| V04 | Complete, explicit zero-dependent constants | verification/V04-effective-constants.md, experiments/reference/v04_constants.py and saved results |
| V05 | Blocked on execution of ball and expanded Rust checks | verification/V05-numerical-certification.md, draft PR #2 |
| V06 | Complete upon final readback | papers/theta-cardinal-bound.tex v0.2, site/index.html, final STATE.md |

## Mathematical result and status

Under RH and the imported sampling/compression theorems of Suzuki, the self-reviewed candidate proof bounds the exact fixed-index cutoff error by K_n X^(5/2) exp(-2 pi X), X=exp(2a). Version 0.2 supplies explicit constants and thresholds; the weighted zero sum is -A''(0)/A(0). The constants still require the selected zero ordinates, exact multiplicities and nonzero xi derivatives. The five machine-verified scalar inequalities do not verify the analytic or operator-theoretic premises. Two successful Lean runs and the corresponding axiom reports are recorded. Rust three baseline tests and one six-root smoke test passed, with merged source readback. Reference numerical results are not exact operator certificates. At X=11, n=1 the illustrative upper-bound estimate is 3.372e-11; a local 50-digit mpmath rerun during closure confirmed the previously recorded diagnostic values. This remains non-certified.

No equivalent exact phase-pi fixed-index theorem was identified in the targeted inspected literature. Divided-function bases, theta-window estimates and quadratic Ritz estimates are established prior art. No exhaustive novelty assessment or independent expert review; originality remains unestablished. No submission, no claim of a new proof of RH, and no claim that the whole theorem is machine verified.

## Remaining blockers

- V05: final draft PR #2 head a2547ce44702c98262078becb6bf4447699c8b0b. Latest workflow lookup again returned no runs. Original standalone trigger did not return a run; reusable attempt failed before jobs with no usable diagnosis. Local FLINT unavailable as recorded in V05. No ball certificate or full 12-case Rust verification established; no further CI redesign authorized in this bounded campaign. Retain unmerged PR for possible later owner-directed verification.
- Exact local versus finite Fourier approximation, validated integration and root counting remain unresolved.
- Situs canonical target unavailable; no duplicate created. Nix environment incomplete. Pages deployment has not been independently confirmed.
- Independent mathematical review, full source comparisons, and formalization of analytic/spectral arguments remain necessary for publication-readiness. Do not represent internal AI review as independent.

## Manuscript

Version 0.2 source at papers/theta-cardinal-bound.tex, blob aabf597901969bd2ca9d32dcfff1c894f7bef7cf, matches the locally compiled source exactly. latexmk/pdflatex produced a four-page PDF without reported overfull boxes or undefined references in the final log. Version 0.1 remains in Git history (blob 6fcdb4c0a3cfe8de0a2986ff04f05a3c20c20952). Updated public site source retains light/dark styling and links the revised manuscript and verification reports. Deployed PDF is not independently verified.

Publication-readiness disposition: suitable for independent mathematical review as a clearly labeled conditional candidate, not yet for a novelty or fully verified claim. Campaign II stops here. A new campaign, academic submission, or renewed infrastructure troubleshooting requires explicit owner direction.

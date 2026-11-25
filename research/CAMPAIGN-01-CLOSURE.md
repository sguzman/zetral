# Campaign I — Closure report

2026-11-25. Disposition: research campaign finished within its approved bounded scope, with infrastructure and external verification blockers. This is not a declaration that the Hilbert–Pólya program is solved.

| Milestone | Disposition | Evidence |
|---|---|---|
| B01 | Complete | README, AGENTS, STATE, campaign plan |
| B02 | Blocked | Situs inaccessible/unidentified; no replacement ontology created |
| B03 | Partial / blocked | Site and CI committed; local LaTeX build verified; push CI, Rust, Lean, live Pages not verified; Nix environment not implemented |
| R01 | Complete with access dispositions | literature/README.md and source-specific audits |
| R02 | Complete | research/reconstruction.md, schematics/spectral-construction.md |
| R03 | Complete with Rust blocker | experiments/reproduction-report.md and reference data/code |
| R04 | Complete | research/quantitative-cutoff.md and quantitative prior-art audit |
| R05 | Complete with formal-verification blocker | research/theta-cardinal-bound.md, proof-audit-r05.md, theta-prior-art.md |
| R06 | Complete when final artifacts are committed/read back | papers/theta-cardinal-bound.tex, this report, public site source, final STATE.md |

## Main candidate result

Under RH and Suzuki's published sampling/compression results, for fixed n and sufficiently large a, with X=exp(2a),
0 <= t_(a,n)-gamma_n <= K_n X^(5/2) exp(-2 pi X).
The proof isolates a distinct ordinate by dividing the classical xi function by the corresponding zero to its full multiplicity, truncates the resulting Fourier kernel, and applies a standard quadratic Ritz estimate. The proof is self-reviewed, not independently reviewed or formally checked. No priority claim, no lower bound, no uniformity in n, no finite-arithmetic computable constants. This is not a new proof of RH.

## Final internal audit

Rechecked primary Suzuki arXiv:2610.32704v1 (2.2), (2.8), (2.13), Theorem 3.3 and Lagarias–Montague arXiv:1106.4348v3. Suzuki's xi lacks the conventional factor 1/2; corrected the R05 note to use classical xi explicitly. The normalized cardinal function is unchanged. Also corrected the statement that an estimate at exponent 2 pi with polynomial factor is equivalent to all smaller exponents: the latter is only an immediate consequence. Manuscript gives the Ritz lemma with delta<1 explicitly, checks the multiplicity normalization and imports, and preserves full weighted-tail summability. No other mathematical gap was identified in this self-audit; that is not independent verification.

Local LaTeX build executed with latexmk/pdflatex, successful 3-page output; all three rendered pages visually inspected. Repository manuscript blob 6fcdb4c0a3cfe8de0a2986ff04f05a3c20c20952 matches the local compiled source exactly. Build is typesetting verification only, not proof verification.

## Numerical evidence

As recorded in R03 (not rerun in R06): 24/24 Table 1 rounded roots, 12/12 sixth-root errors, and 4/4 condition numbers reproduced using mpmath reference calculations. Raw scripts and data are retained. Finite Fourier approximation errors are not exact cutoff errors; agreement is not a numerical certificate. No verified production Rust build.

## Blockers and human review

- Situs: GitHub lookup sguzman/situs previously returned 404; no accessible matching repository. The exact canonical target remains unknown after checking prior project context. Ontology has not been populated.
- GitHub Actions: available combined status is not a complete view of push-triggered workflow runs; no passing result asserted. Pages URL was inaccessible to web retrieval during final audit. Website source is durable; live deployment not confirmed.
- Local PATH checked in R06: no lean, lake, cargo or rustc. LaTeX is available and successfully ran. Lean formalization, Rust build, locked Nix environment and full reproducibility CI remain outstanding.
- Expert review is needed before treating the candidate theorem as established or submitting it academically. The related theta-window literature requires full comparison before any novelty claim.

Stop: R01–R06 work is concluded; no additional research or new campaign is authorized by a bare continue after closure. A human may choose to resolve the infrastructure blockers or authorize a separately scoped next campaign.

# Campaign III — Closure

25 November 2026. D01–D04 dispositioned. Four completed as mathematical investigations; matching asymptotic lower rate not obtained. Historical manuscript v0.2 remains unchanged.

| Milestone | Outcome | Evidence |
|---|---|---|
| D01 | Improved general upper rate by log X/X; multiplicity-sensitive refinement | discovery/D01-density-refinement.md |
| D02 | Two-sided cumulative spectral/defect comparison | discovery/D02-two-sided-defects.md |
| D03 | Individual lower comparison; finite interpolation lower bound; strictness at every finite cutoff | discovery/D03-interpolation-lower-bound.md |
| D04 | Consolidated proof and internal audit; repaired equality example; selected Campaign IV | discovery/campaign-03-spectral-estimates.md; research/CAMPAIGN-04.md |

All results assume RH and Suzuki's imported local-space and compression theorems. None of the Campaign III analytic arguments has been independently reviewed or formally checked; originality unestablished. No matching lower asymptotic in X, and no interval certification of finite Fourier computations. Prior numerical and infrastructure blockers remain as recorded in Campaign II. The research value is a sharpened bound plus a reduction of optimality to the actual local projection defects, and strict finite-cutoff separation.

## Direction decision

The weak link in both the existing numerical solver and the lower bound is a rigorous link between exact local objects and finite arithmetic calculations. Rather than iterate on unconstrained interpolation coefficients or CI troubleshooting, prioritize a mathematical certification framework based on coercivity, Riesz-representer residuals, and complex root enclosures. This can help quantify kernel defects and distinguish exact spectra from Galerkin approximations; it is not a promise of practical all-cutoff certificates. The next campaign is bounded and independently useful even if its computational application is blocked.

Fresh source triage: Zhu arXiv:2608.24827v2, Thms 1.1, 1.4, §5 and §15 (HTML reopened 2026-11-25) provides a finite coercivity reduction and identifies a severe pointwise-envelope size barrier. Its displayed certified even-sector result must not be silently assumed for the whole complex space; inspect parity and normalization. The paper reports failed solve-residual approaches at severe tolerances. The alphaXiv listing 'Localized Weil Operators Across the Spectral Edge: Bottom-Edge Characteristics, Pontryagin Continuation, Spectral Weights, and Schur Comparison for Suzuki’s Differentiation Operators' (https://www.alphaxiv.org/abs/2611.localized-weil-spectral-edge) reports spectral-weight convergence and related comparisons; only the listing was inspected, not a full proof. It is a prior-art lead, not an imported result. Standard coercive residual identities are not novel. Campaign IV should compare these methods before asserting any original contribution.

No routine owner approval is necessary under the standing research authorization. Do not submit externally or claim publication. 

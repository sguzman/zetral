# Suvlu's 2026 Weil-form operator series — targeted literature note

Accessed 2026-11-28. Source: Dylan Suvlu, public repository
[`dsuvlu/weil-form-operators`](https://github.com/dsuvlu/weil-form-operators),
which lists four drafts revised 2026-09-24. This is a targeted source map,
not a full mathematical audit or novelty assessment.

## Four-paper structure (author-stated scope)

1. *An operator-theoretic representation of the Weil quadratic form*:
   represents the localized Weil form through a completed arithmetic
   operator family; includes a critical norm derivative, a finite Fourier
   matrix and a finite characteristic under simple-even ground selection.
2. *Theta correlations and a causal range criterion for the Weil form*:
   represents a positive-rate kernel by a theta correlation operator and
   reduces its positivity to an explicit compact-Hankel range condition.
3. *Arithmetic reconstruction and endpoint regularity of the completed zeta
   response*:
   constructs an arithmetic causal response and states RH-equivalent
   endpoint/range conditions; the first-power (L^2) endpoint remains
   undecided by the reported fractional-range estimates.
4. *Constant-mode transfer and compactness criteria for finite Weil
   characteristics*:
   gives a conditional moving-family theorem from simple-even finite ground
   states plus a uniform complete-characteristic-mean bound to locally
   compact characteristic families retaining all Xi zeros. The selected
   family and mean bound remain open.

These are author-draft summaries taken from the public abstracts and
repository README, not Zetral-verified conclusions. They complement but do
not replace Zetral's ACG, CCM, Suzuki, and canonical-system audits. Paper IV
is directly relevant to the finite characteristic branch of Campaign XCVII;
Paper III is a separate RH-equivalent causal Hankel route.

## Formalization boundary

The repository's `verification/THEOREM_MAP.md` and verification README report
131 Lean implementation modules plus an aggregate, with a frozen dependency
manifest and archived axiom audit. Their map explicitly leaves out the
holomorphic half-line/full-line family, leakage and trace-class source
derivative, repaired arithmetic interpolation, expanded inverse-source
formula, and the entire zero-retaining cluster criterion. The complete-mean
selection premise and RH conclusion are not claimed as kernel-verified.
These are claims in the author's repository documentation; Zetral did not
build or independently audit that snapshot.

The focused B3-45 audit independently verifies Paper IV's elementary
complete-mean-to-Fourier-cutoff lower bound, equations (12), (69)–(71).
B3-46 manually audits the finite all-filter constant-mode transfer, sine-tail
identity and Gaussian heat-filter estimate in equations (13)–(56). Its
Appendix A moving-current/zero-retention argument remains unaudited locally.
No proof of RH or novelty claim is made.

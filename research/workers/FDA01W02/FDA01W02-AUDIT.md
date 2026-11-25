# FDA01W02: independent check of pi, gamma, and alpha enclosures

## Scope and reproduction

The FDA01 finite primitive reference checks pi, atan, logarithm, exponential, trigonometric, and square-root samples, but does not compare the harmonic/Euler constant `gamma` or derived `alpha`. This worker adds an independent exact integer interval replay for those constants and cross-checks pi.

Run from the repository root:

```sh
python experiments/fda01w02-constant-audit.py
```

The candidate implementation is recomputed on the stated (10^{66}) lattice. A separate Python implementation at (10^{100}) uses 200-term arctanh and alternating arctan series; the harmonic sum is accumulated by directed integer floor/ceiling. It encloses the Euler constant using the displayed Bernoulli expansion through (N^{-16}) and the next positive term (43867/(14364N^{18})), with (N=8192). Then it forms α from the independent γ, π, λog 2, and λog π intervals.

## Findings

The independent reference intervals are contained in the candidate (10^{66}) intervals for π, γ, and α. The omitted Euler–Maclaurin term coefficient also matches exactly as (43867/(14364\cdot8192^{18})).

This checks arithmetic containment for the stored constant formulas. It assumes the cited alternating Euler–Maclaurin remainder bound and does not verify the full spectral generator or the original-form normalization.

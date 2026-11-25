# Alpöge–Claude RH — external verification record

Access date: 2026-11-24 Mexico. Sources:
- Joint Lean FRO / Mathlib Initiative statement (2026-11-21): https://leanprover-community.github.io/blog/posts/riemann-hypothesis/
- Andrew Sutherland's evolving independent verification log: https://math.mit.edu/~drew/grh/
- Michael Rubinstein's reader-oriented index: https://www.math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/

External status: joint statement certifies both formal statement and proof. Statement checked against Mathlib's RiemannHypothesis by independent comparisons. Sutherland reports successful full build (Lean/Mathlib 4.33.1), kernel replay and independent kernel checks; only propext, Classical.choice and Quot.sound occur in the audited main theorem dependencies. Full exported proof also accepted by default and paranoid Lean kernels, with final standalone comparator pass reported Nov 23. This is strong external verification, not a Zetral build.

Consequence for campaign: RH may be used as an externally established mathematical result with attribution. Keep an explicit RH hypothesis at the Lean interface until an independently verified import is practical; do not import the entire huge proof as a bootstrap dependency. The external result gives no automatic bound on spectral approximation rates, zero multiplicities, or numerical conditioning. Suzuki's distinct-ordinate convergence is directly relevant; identifying the limiting entire function with normalized xi still needs simplicity. No claim of a new Hilbert–Pólya construction from the November proof itself. Human-readable arithmetic proof reconstruction is outside Campaign I except where relevant to the spectral questions.

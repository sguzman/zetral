# Campaign LXXXII — Liminf of Weil values on paired edge packets

Date opened: 2026-11-27. Status: ACTIVE.

## Precise question

For a fixed real \(g\in C_c^\infty((0,L))\) and
\(f_h=(g+g(h-\cdot))/\sqrt2\), what can be proved about
\(\liminf_{h\to\infty}Q_W(f_h)\) under RH? Is it positive, or can it be
zero despite a positive mean and nonzero oscillation?

## Evidence and hypotheses

Campaign LXXXI/B1-15 gives, under RH,
\[
 Q_W(f_h)=C_g+\sum_{\gamma\ne0}m_\gamma
    \widehat g(-\gamma)^2e^{i\gamma h}+o_g(1),
 \quad C_g=\sum_\gamma m_\gamma|\widehat g(\gamma)|^2>0,
\]
with an absolutely convergent series and nonnegative values from Suzuki's
spectral form. Nonzero coefficients imply a positive variance, but neither
mean nor variance decides the infimum. No rational-independence hypothesis
for the zero ordinates is known or assumed here.

Checkpoint B1-16 proves an exact criterion: the liminf is zero exactly when
the target cancellation phases lie in the closure of the one-parameter
zero-ordinate flow. Finite phase closures are determined by the exact integer
relation lattice. If any relation is incompatible, compactness gives a
positive liminf; if the positive ordinates are Q-linearly independent, the
liminf is zero conditionally. This is an orbit-closure theorem, not evidence
that the LI conjecture holds. See
`research/positivity/B1-16-phase-orbit-liminf-criterion.md`. Lamzouri's
effective LI is explicitly conjectural ([arXiv:2311.04860v2, §1](https://arxiv.org/html/2311.04860v2)); no exact nontrivial relation is currently used.

## First investigation

For each finite set of ordinates, characterize the closure of the one-parameter
phase orbit \(h\mapsto(e^{i\gamma_1h},\ldots,e^{i\gamma_Nh})\) using the
integer relations among the \(\gamma_j\). Express the finite truncation's
minimum as a torus optimization subject to those relations. Bound the
infinite tail by Schwartz decay and the local zero count. Then determine
whether known zeta-zero symmetries or exact relations force either a
positive lower bound or approximate cancellation. Attempt to falsify any
claimed independence by checking which relations are actually proved.

## Information gain and acceptance

A positive lower bound would show this packet family stays uniformly away
from zero; a zero-liminf sequence would quantify degeneration despite RH
positivity. Accept a rigorous torus/Bohr-compactification characterization
plus a proved lower bound or a conditional zero-liminf theorem with its
independence hypotheses explicit. Numerical phase scans are diagnostics only.

## Dependencies and verification

Dependencies: B1-15; absolute convergence of the zero series; exact
multiplicity convention; standard simultaneous approximation results.
Verify the finite orbit closure from the integer relation lattice and pass
to the infinite series with an explicit tail. Do not assert linear
independence of ordinates or a full-space coercivity conclusion.

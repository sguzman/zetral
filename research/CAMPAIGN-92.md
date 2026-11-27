# Campaign XCII — Fixed-window paired positivity

Date opened: 2026-11-27. Status: ACTIVE.

## Precise question

Fix one width `L0>0`. Is RH equivalent to nonnegativity of
`W(f_{g,h}*tilde(f_{g,h}))` for every real `g in C_c^infty((0,L0))` and
every `h>=0`? The unrestricted-width criterion in XCI is classical because
it realizes every even test. A fixed width cannot do that directly.

## Evidence and competing outcomes

For `h=L0`, the family includes every even test supported in a centered
interval of radius less than `L0/2`, after translation. Suzuki's local Weil
framework gives positivity criteria involving all window radii, while
B1-17 shows that for any fixed positive window the *uniform multiplier
boundedness* condition detects RH. Neither result immediately converts
fixed-window packet positivity, a one-sided condition, into RH.

Recent prior art includes Danesh, *A quantitative two-interval criterion
for the Riemann hypothesis* (arXiv:2611.10726, 2026), which proves an
equivalent condition using a normalized Cauchy–Schwarz bound for arbitrary
admissible pairs of separated short-support functions. Zetral's equal-profile
reflection packet condition is weaker in its pointwise test geometry; no
equivalence to that criterion is assumed.

## Information gain and design

A proof would show a single fixed local window, with arbitrary separation,
already suffices for Weil positivity; a counterexample to the implication
or a precise gap would clarify why local positivity is currently formulated
over all radii. First write the fixed-width family on the zero side and
identify which even test transforms it probes. Then try to recover arbitrary
compactly supported even tests by decomposition into smaller pieces and
polarization, tracking whether the packet hypothesis controls the required
cross terms. Compare those exact inequalities with Danesh's normalized
two-interval Cauchy–Schwarz condition. Attempt counterexamples at the level
of abstract Hermitian forms before making zeta-specific claims.

## Dependencies and verification

Use the pinned Suzuki formula, B1-17's fixed-window Laplace criterion,
Yoshida's even-test Weil criterion, and the exact hypotheses of
arXiv:2611.10726. Check support widths, translation invariance and diagonal
normalization. A claimed density argument must be in a norm on which the
Weil form is continuous; distributional support approximation alone is not
enough. No finite computation can establish the implication.

## Acceptance

Prove the fixed-width positivity implication with all cross terms controlled,
or give a rigorous obstruction/countermodel showing which inference fails.
Keep conditional statements and analogies separate from a zeta theorem. No
novelty or RH proof claim is made.

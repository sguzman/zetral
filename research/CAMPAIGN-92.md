# Campaign XCII — Fixed-window paired positivity

Date opened: 2026-11-27. Status: CLOSED (manual analytic deduction).

## Precise question

Fix one width `L0>0`. Is RH equivalent to nonnegativity of
`W(f_{g,H}*tilde(f_{g,H}))` for every real `g in C_c^infty((0,L0))` and
every `H>=0`? The unrestricted-width criterion in XCI is classical because
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

## Result and disposition

The implication is proved in
`research/positivity/B1-24-fixed-width-positivity-RH-criterion.md`. For each
`L0`, Baire category selects one real even profile `h`, supported in
`[-d,d]` for `d<L0/2`, whose bilateral Laplace transform is nonzero at every
nontrivial zero. The fixed packet profile `g(x)=sqrt(2)h(x-L0/2)` makes
the packet at separation `H=L0+t` a translate of `h+tau_t h`. Positivity
forces the translated cross term plus a constant to be nonnegative for all
`t>=0`. Its Laplace transform has poles at every centered zero; the pole
supremum is the convergence abscissa, whether or not attained. The
nonnegative-transform singularity argument forces a singularity at the real
abscissa, where the zero sum is regular, contradicting any off-line zero.

This is a manual deduction from the unconditional zero-side Weil form and
an explicitly proved Laplace singularity lemma. It is not machine checked,
does not prove RH, and carries no novelty claim. Danesh's related criterion
uses arbitrary separated pairs and a normalized bound; this one uses equal
reflected packets and positivity. The campaign acceptance question is
resolved at this scope. Constructive or quantitative profile selection
remains open and would not change the criterion's logical force.

## Dependencies and verification

The zero-side formula, translation law, transform decay and zero count are
given in Danesh, arXiv:2611.10726, equations (1)–(5). Support widths,
packet normalization, Baire nonvanishing, pole residues and the Laplace
singularity step are checked explicitly in B1-24. The zero-free real
interval follows from the alternating eta series and its relation to zeta
for `0<s<1`.

## Acceptance

Closed: prove the fixed-width implication with cross terms controlled, or
give a countermodel locating a missing inference. The result is a criterion
equivalence only; RH itself remains unresolved here.

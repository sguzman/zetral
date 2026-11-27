# Campaign XC — RH criterion from bounded complete packet values

Date opened: 2026-11-27. Status: ACTIVE.

## Precise question

For each fixed real `g in C_c^infty((0,L))`, define
`f_h=(g+g(h-·))/sqrt(2)` and `W_h=W(f_h*tilde(f_h))`. Is RH equivalent
to the pointwise-in-profile condition

    for every fixed g, sup_(h>=0) |W_h| < infinity?

This condition allows the bound to depend on `g`; it is not a uniform bound
over the profile unit sphere.

## Evidence and hypothesis

B1-17 proves RH iff the first-prime endpoint discrepancy has uniformly
bounded logarithmic multiplier norm, and its Laplace-pole argument shows
that boundedness of every fixed autocorrelation pairing excludes each
hypothetical off-line zero. B1-21b gives, under RH, a uniform logarithmic
norm bound for the complete paired-packet form. The suspected converse is
that all other complete-form terms are bounded in `h` for each fixed `g`,
so an off-line zero's unbounded first-prime pairing cannot be hidden by
them. This is a candidate repackaging of a classical explicit-formula
mechanism, not a novelty claim.

## Information gain and design

If valid, this translates an equivalent criterion into complete quadratic
form values, rather than a multiplier norm. It would not provide positivity
or a proof of RH. Re-derive the exact decomposition for all `h`, bound the
archimedean-minus-prime main term, every `k>=2` term, pole and continuous
kernel for fixed `g`, then invoke or re-prove B1-17's pole-detection argument.
Try to falsify the equivalence by finding a remainder with matching
unbounded growth or a profile family for which its constants are not fixed.

## Prerequisites, dependencies, verification

Use Suzuki arXiv:2611.33001v1 direct formula and the prime-zeta continuation
in B1-17. Verify profile support, signs, and all `h<=2L` and `h>2L` ranges.
The converse must state exactly that each fixed profile has its own bound;
uniformity in `g` is not needed for the Laplace transform argument. Audit the
classical prior art, especially Báez-Duarte's Mellin/convolution criterion,
before making any novelty claim. No numerical evidence can establish this
analytic equivalence.

## Acceptance

Either prove both directions with exact hypotheses and bounded-remainder
estimates, or identify a concrete obstruction and retain the result only as
a one-way implication. State whether the criterion is merely a reformulation
of B1-17/classical criteria. Do not infer positivity, coercivity, or RH.

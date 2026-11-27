# Campaign XCI — Positivity on paired packets as a restricted RH criterion

Date opened: 2026-11-27. Status: ACTIVE.

## Precise question

Does

    W((g+g(h-·))/sqrt(2) * tilde((g+g(h-·))/sqrt(2))) >= 0

for every real `g in C_c^infty((0,L))`, every `L>0`, and every `h>=0`
already imply RH? The reverse implication is expected from Weil's criterion
under its usual test-function hypotheses, but must be checked for this
autocorrelation family and exact convention.

## Evidence and competing possibilities

B1-22 proves that boundedness in absolute value for every fixed profile is
equivalent to RH, because the first-prime Laplace transform otherwise has
an off-line pole. Positivity is weaker: `W_h>=0` gives only a one-sided bound
on `D_phi(h)` after the bounded remainder, and does not directly make its
Laplace transform holomorphic. The almost-periodic zero-residue expansion
under RH (B1-15) and the full Weil criterion provide context, but neither
settles this restricted converse.

## Hypotheses and information gain

If the restricted positivity condition implies RH, it gives a sharply
specified subfamily of Weil tests sufficient for the criterion. If it does
not, a countermodel or a demonstrated logical gap would prevent overclaiming
that paired packets inherit the full criterion. No numerical success on
finite profiles can settle this question.

## Design and falsification

1. Verify the RH-implies-positivity direction from the exact Weil explicit
   formula for these real compactly supported autocorrelations.
2. Under a hypothetical off-line zero, use the `-D_phi(h)+O_g(1)` formula
   and the Laplace-pole residue to seek a profile and sequence of shifts
   with negative form values.
3. Do not assume a rightmost zero exists. Treat competing zeros on the
   maximal real-part boundary and possible cancellation of leading residues.
4. Test whether positivity for all profiles gives enough two-sided control
   through polarization or profile perturbations. Any perturbation must
   remain inside the paired family and preserve exact support constraints.
5. If the implication fails to follow, construct an abstract signed
   exponential-polynomial countermodel satisfying one-sided boundedness and
   pole-like growth, clearly separating it from the zeta zero set.

## Prerequisites and verification

Use the pinned direct formula, B1-17's prime-zeta continuation, and the
classical Weil criterion. Check prior literature on restricted test families
before novelty claims. Exact quantifiers over `g,L,h` are essential. Any
conditional zero argument must state multiplicities and cancellation
hypotheses; no actual off-line zero is assumed. Manual analytic proof or a
rigorous obstruction is required; finite computation is exploratory only.

## Acceptance

Prove restricted positivity implies RH, with no hidden rightmost-zero
assumption, or give a rigorous obstruction demonstrating why the pole
argument cannot be upgraded from two-sided boundedness to positivity. State
the established reverse direction separately. No RH proof, novelty claim,
or operator correspondence follows from an unresolved campaign.

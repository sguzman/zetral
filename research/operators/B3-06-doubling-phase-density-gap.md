# B3-06 — What doubling-phase sampling does and does not say about zeta nodes

Date: 2026-11-27. Status: theorem-hypothesis audit; no zeta sampling result.

## Question

Does the nonuniform value-sampling theorem for de Branges spaces with doubling
phase supply a route to sampling zeta ordinates, and can its density hypotheses
be checked from the classical zero-counting formula?

## Theorem actually available

Marzo, Nitzan and Olsen, *Sampling and interpolation in de Branges spaces with
doubling phase*, arXiv:1103.0566v1, Theorems 1–2, pp. 4–5, assume
`mu=phi'(t)dt` is a doubling measure. Their densities are uniform over all
bounded intervals `I` with prescribed `mu(I)=r` as `r` tends to infinity.
For sampling, the theorem requires a `phi`-separated sampling subset with
lower uniform density at least `1/pi` (and gives a converse with strict
inequality); for interpolation it requires `phi`-separation and upper uniform
density at most `1/pi` (again with a strict converse). These are value-sample
theorems, not jet-sampling theorems.

## Critical normalization and the counting issue

Take the comparison density

    phi'(t) = (1/2) log(2+|t|).

It is doubling: `log(2+|t|)` is comparable, with absolute constants, to
`log(e+|t|)`, whose measure is doubling by splitting intervals according to
whether their length is at most or greater than their distance from zero.
Direct integration gives `mu([-T,T])=T log T+O(T)`.
Riemann–von Mangoldt gives the number of nontrivial zeros up to height `T`,
counted with analytic multiplicity, as
`N(T)=T/(2pi) log T+O(T)`. Under RH, counting both signs therefore gives
the centered global ratio `1/pi` for multiplicity-counted ordinates.

This computation does not verify either theorem's uniform density. Its
infimum/supremum ranges over intervals that may move arbitrarily far from the
origin; a centered asymptotic cannot control those intervals. Further, the
node set `Gamma` in the proposed construction consists of distinct ordinates.
Riemann–von Mangoldt counts multiplicity, and Selberg's odd-multiplicity
critical-line result recalled by Heath-Brown supplies only `c T log T` distinct
nodes for some positive `c`, not the coefficient `1/(2pi)`. If instead one
tries to represent analytic multiplicity by jets, this value-sampling theorem
does not apply to those jet data.

There is an additional endpoint issue even under the stronger assumptions RH
and simplicity. The centered `mu`-mass and centered zero count then have ratio
tending to `1/pi`. Since centered intervals are among those in the infimum
defining `D^-_phi`, one has `D^-_phi(Gamma) <= 1/pi`; therefore the theorem's
strict `D^-_phi>1/pi` sufficient condition cannot certify sampling. Equality
would be consistent with the necessary condition, but the theorem gives no
sampling conclusion at equality. This limits that sufficient direction; it
does not show sampling at critical density is impossible.

Thus neither the doubling-phase criterion nor global zero counting presently
establishes that `Gamma` samples any candidate space. This is an evidence gap,
not a theorem that `Gamma` fails to sample: phase separation and uniform
densities for the actual distinct zeta nodes have not been disproved. And even
a value-sampling result would leave both higher-jet reconstruction and the
arithmetic inverse-compression identity open.

## Falsification and verification boundaries

- The exact density definitions and thresholds were checked against the
  primary arXiv text, pp. 1–5, Theorems 1–2.
- The global ratio calculation is conditional on RH and counts multiplicity;
  it is not transferred to distinct nodes.
- The doubling comparison is elementary and is not a construction of a
  Hermite–Biehler function whose phase is this exact comparison weight.
- No computation, Lean proof, zero-gap assertion, or operator correspondence
  is claimed.

Primary sources: Marzo–Nitzan–Olsen,
[arXiv:1103.0566](https://arxiv.org/abs/1103.0566); Titchmarsh, *The Theory of
the Riemann Zeta-Function*, 2nd ed., Theorem 9.4(A); Heath-Brown,
[DOI 10.1007/BF02571652](https://doi.org/10.1007/BF02571652), for Selberg's
distinct odd-multiplicity count.

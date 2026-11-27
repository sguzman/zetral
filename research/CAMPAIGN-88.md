# Campaign LXXXVIII — Shifted-xi systems and de Bruijn-Newman flow

Date opened: 2026-11-27. Status: ACTIVE.

## Precise question

Suzuki's `A^omega` horizontal-shift family and the de Bruijn-Newman family
both deform the critical-line xi function and have real-zero criteria
related to RH. Is there an exact or positivity-preserving spectral relation
between them, or does their Fourier multiplier structure obstruct a direct
transfer of zero-realness results?

## Evidence and prior art

- Suzuki, *A canonical system of differential equations arising from the
  Riemann zeta-function*, equations (1.1), (1.2), Proposition 1.2: defines
  `A^omega` and gives its real-zero relation to RH.
- Polymath, *Effective approximation of heat flow evolution of the Riemann
  xi function*, equations (1)–(4), §1: gives the Fourier representation,
  heat equation, and de Bruijn-Newman parameter.
- Rodgers–Tao, *The de Bruijn-Newman constant is non-negative*, Theorem 1.1;
  RH is equivalent to `Lambda<=0`, while the theorem gives `Lambda>=0`.
- A targeted search found no direct comparison of these two exact Fourier
  multipliers, but this is not a comprehensive novelty search. No novelty
  claim is made.

## Persistent backlog entry

- **Hypothesis:** `A^omega` is the imaginary-translation cosine of the
  critical-line xi function, whereas heat flow is an exponential of the
  second-derivative generator. Their infinitesimal generators match after a
  time rescaling, but higher orders obstruct exact scalar-time identification
  and positive heat-time mixture representations.
- **Prerequisites:** B5-01 Fourier normalization and Taylor expansion; B5-02
  moment comparison; prior sources above.
- **Information gain:** Prevents transferring real-zero conclusions or
  canonical-system statements from one deformation to the other based only
  on matching first/second variations; may identify an alternate operator
  bridge if one survives the symbol obstruction.
- **Experimental design:** Derive the exact transforms and all scaling
  constants; falsify the proposed exact flow by matching Fourier symbols and
  fourth-order terms; test positive-mixture representations by moment
  inequalities; then search for a weaker intertwining or zero-motion law.
- **Dependencies:** Exact Fourier transform of xi, entire continuation for
  imaginary shifts, and precise hypotheses in the two cited source papers.
- **Acceptance:** Either construct a rigorously specified operator/zero-set
  correspondence with domains and hypotheses, or rule out the natural scalar
  time and positive-mixture routes while preserving all other possibilities
  as open.
- **Verification:** Independent scaling/sign derivation; primary-source
  equations; no numerical zeros. Any computation must be reproducible and
  add evidence beyond the exact symbol comparison.

## Checkpoint B5-01

With `F_t(z)=8H_t(2z)` and `F_0(z)=xi(1/2-iz)`, the exact shift multiplier
is `cosh(2 omega u)` and the heat multiplier is `exp(t u^2)`. Their
second-order terms match at `t=2 omega^2`, but the fourth-order coefficients
differ by `-omega^4 F_0''''/12`. Thus the functions are not exactly the same
deformation at any nonzero scalar heat time. See
`research/operators/B5-01-shifted-xi-versus-heat-flow.md`.

## Checkpoint B5-02

There is no positive probability measure on real heat times with an
exponential moment near zero whose mixture of `exp(t u^2)` equals
`cosh(2 omega u)` for nonzero omega: coefficient comparison forces a
negative variance. This blocks a natural positive-mixture route only; it
does not rule out signed mixtures or general intertwiners. See
`research/operators/B5-02-no-positive-heat-mixture.md`.

## Checkpoint B5-03

At a simple zero of the common initial function, the two zero branches have
the same quadratic displacement under `t=2 omega^2`; the quartic coefficient
difference is `F''''(r)/(12F'(r))`. A toy entire function checks the sign and
factor. This is conditional local perturbation theory and does not assert
that any xi zero is simple or that the derivative ratio is nonzero. See
`research/operators/B5-03-simple-zero-motion-comparison.md`.

## Checkpoint B5-04

For a hypothetical order-four zero, the shift and heat zero branches split
on the `delta=omega*x` scale to different quartic polynomials. Their four
limiting scaled roots are explicit and simple; Rouché's theorem transfers
them to local root clusters for small positive shift. This shows the
simple-zero expansion cannot cover the multiple-zero case by continuity.
It is conditional on multiplicity four and says nothing about whether xi has
such a zero. See `research/operators/B5-04-multiple-zero-splitting.md`.

## Checkpoint B5-05

Under RH, replacing Suzuki's `B^omega` by `B^omega/omega` preserves the
Hermite-Biehler property and yields `E_tilde^omega -> F+iF'`. The normalized
inner functions converge locally to a Cayley transform of the Lagarias
Pick function. Their model-space projections in a common `H^2(C+)` converge
strongly to the nonzero limit model space. This is a natural subspace limit,
not a resolvent/operator limit; the limiting kernels are related by an
explicit gauge and are not identical. See
`research/operators/B5-05-normalized-debranges-pair-limit.md`.

Next investigate a canonical-system intertwiner independently of the scalar
Fourier multiplier and distinguish any possible operator relation from
equality of zero sets.

# B3-33 — Operator residual from the smoothed radical split

Date: 2026-11-27. Status: derived polynomial residual estimate from the
source operator formula; no ground-state identification, gap, positivity, or
Hilbert–Pólya correspondence.

## Question

Does the exact global-radical decomposition in B3-32 control the *compressed
operator residual*, rather than only the trial Rayleigh form value?

## Result

Use the B3-32 family `G_lambda=E(f_lambda)`, split into its window part
`v_lambda` on `[lambda^-1,lambda]` and lower tail `w_lambda` on
`(0,lambda^-1)`. Write `ell=log(lambda)` and use global log coordinate
`t=log(u)`, so the window is `[-ell,ell]`. For fixed integer `N>=3`, put
`p=N-3/2` and

    D_lambda = C_N (M_N^0(f_lambda)+M_N^1(f_lambda)) lambda^(-p).

The differentiated Poisson bound in B3-32 implies, for `t<-ell`,

    |w_lambda(t)|+|d w_lambda(t)/dt|
       <= D_lambda exp(p(t+ell)).

For the exact operator decomposition of B3-27, the radical identity and
polarization give, for every window test vector `phi` in the operator form
core,

    QW_lambda(v_lambda,phi) = - QW_global(w_lambda,phi).

The right side is represented on the window by the restricted archimedean
multiplier, the two pole terms, and the shifted prime-power terms. The
following estimates show that this representation is an `L2` vector and
bound its norm:

* The archimedean symbol satisfies `|2 theta'(t)| <= C_alpha(1+|t|)^alpha`
  for any fixed `0<alpha<1/2`. The zero extension of the tail belongs to
  `H^alpha(R)` and `||w_lambda||_(H^alpha) <= C_alpha D_lambda`; hence its compressed multiplier has
  norm at most `C D_lambda`.
* The pole pair has norm at most `C D_lambda lambda`. Indeed the two tail
  functionals against `exp(±t/2)` are bounded respectively by
  `C D_lambda lambda^(-1/2)` and `C D_lambda lambda^(1/2)`, while the
  corresponding window vectors each have norm `O(lambda^(1/2))`.
* For a shift `a=log n>0`, the positive translate of the lower tail has no
  support in the window. The negative translate has window norm at most
  `C D_lambda` for `n<=lambda^2` and at most
  `C D_lambda (n/lambda^2)^(-p)` for `n>lambda^2`. Summing the exact
  coefficients `Lambda(n)/sqrt(n)` gives `O(D_lambda lambda log(lambda+2))`:
  use `sum_(n<=lambda^2) log(n)/sqrt(n)=O(lambda log(lambda+2))` and the
  integral bound for the convergent tail `n>lambda^2`.

Thus the weak form identity is represented by an `L2` vector, and the
operator associated with the closed form satisfies

    ||A_lambda v_lambda||_2
       <= C_N D_lambda lambda log(lambda+2).

The membership `v_lambda in Dom(A_lambda)` follows independently from the
explicit B3-27 operator: `v_lambda` is piecewise `C1` with finitely many
jumps, so its Fourier transform is `O_lambda(1/|s|)` and multiplication by
the logarithmically growing archimedean symbol remains square integrable;
the pole and finite prime-shift perturbations are bounded at each fixed
lambda.

The Rayleigh value `m_lambda=QW_lambda(v_lambda,v_lambda)/||v_lambda||^2`
obeys the B3-32 estimate with arbitrary fixed `N`:

    |m_lambda| <= C_N lambda^(6-N/2).

For the smoothed choice `epsilon=lambda^(-3/4)`, the Fourier seminorm bounds
in B3-32 give `D_lambda=O(lambda^(3-N/4))`. Taking `N=24` therefore yields

    |m_lambda| = O(lambda^(-6)),
    ||(A_lambda-m_lambda)v_lambda||_2 / ||v_lambda||_2
       = O(lambda^(-2) log(lambda+2)),

using the positive lower bound on `||v_lambda||` established in B3-32.
Since `A_lambda` is self-adjoint with compact resolvent, the spectral theorem
then places *some* eigenvalue within `O(lambda^(-2) log(lambda+2))` of
`m_lambda`. This does not identify that eigenvalue as the lowest one.

## Domain and falsification checks

The argument uses the global radical only for the smoothed even Schwartz
input with exact moments zero. Its split pieces are in the Weil form class;
the test identity is first weak, and the displayed component estimates give
the required `L2` representation before inferring operator-domain membership
from the associated-form characterization. The prime sum includes all
prime powers through the von Mangoldt coefficient; it is not a sum only over
primes. The paired translation sign and coefficient are those of B3-27.

This is not a spectral gap estimate. A small residual only puts spectrum
near the trial Rayleigh value; it gives no lower bound on the spectrum,
ground-state overlap, simplicity, parity of the ground state, or Mellin
transform of a ground eigenvector. The exponent is polynomial and not
claimed to improve ACG's published low-eigenvalue upper bound. Constants
depend on fixed `N`, the chosen mollifier and correction bump, and cited
prolate/Poisson estimates.

## Status of assumptions and prior art

The source operator formula and global radical inclusion are imported from
CCM and ACG as listed in B3-27 and B3-32; Zetral has not independently
audited their source proofs. The Sobolev, pole, shift, and Dirichlet-tail
estimates above are derived here. No numerical experiment, Lean proof,
novelty claim, RH proof, or self-adjoint operator with zeta zeros as its
verified spectrum is asserted.

## Sources

- Exact restricted operator formula: `research/operators/B3-27-exact-restricted-Weil-operator-decomposition.md`.
- Smoothed radical input and tail estimates: `research/operators/B3-32-smoothed-prolate-tail-energy.md`.
- Primary sources: CCM, arXiv:2511.22755v1, equations (3.19)–(3.20) and Weil-class definition; ACG, arXiv:2611.13129v1, equations (9), (12)–(15), (21)–(23), and Theorem 3.2.

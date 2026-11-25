# Suzuki — Spectral convergence associated with Weil's quadratic form

Source: Masatoshi Suzuki, arXiv:2610.32704v1, submitted 2026-10-23, 16 pp. https://arxiv.org/abs/2610.32704v1 ; full text https://arxiv.org/html/2610.32704v1 . Read 2026-11-24 Mexico. This corrects the previously informal October 27 date. Status: cited results, not independently reproduced.

## Exact targets
- Theorem 1.1 (RH): for positive eigenvalues t_{a,n} of the distinguished phase-pi extension, t_{a,n} >= gamma_n and t_{a,n} decreases nonstrictly to gamma_n as a -> infinity. gamma_n indexes distinct positive zero ordinates. Local eigenvalues are simple; zeta-zero simplicity is not assumed.
- Theorem 1.2 (RH): W(a,pi;z)/W(a,pi;0) tends locally uniformly to the product over distinct positive gamma of (1-z^2/gamma^2). Corollary 5.2 identifies the limit with normalized xi only with the additional simplicity hypothesis.
- Theorem 3.3: under RH, the inverse local operator is j_a^* C j_a where C=D_{pi/2}^{-1} on the global Weil space. Section 4 uses Hilbert–Schmidt convergence of P_a C P_a to C and max–min.
- Proposition 6.1 (RH, fixed a): finite Fourier Riesz approximations converge in Hilbert norm locally uniformly in the spectral parameter; the resulting spectral functions converge locally uniformly.

## Implementation pointers
Section 6, equations (6.3)–(6.5): solve the arithmetic Gram system at plus/minus i, then evaluate the two resulting Riesz vectors' Fourier transforms. Matrix entries use Yoshida 1992 (5.15),(5.16); retrieve and check the convention before implementation. The prime-power cutoff is exp(2a); boundary equality has zero contribution.
Published settings: X=3,5,7,11; a=log(X)/2; N=14,16,18. Basis dimension 2N+1. Tables 1–2 are reproduction targets. The author reports ill-conditioning and a spurious Fourier-grid zero; convergence is not a certified numerical error bound.

## Zetral's research distinction
Use separate labels for (A) the analytic cutoff error t_{a,n}-gamma_n, (B) Fourier discretization error at fixed a, (C) floating-point/root-isolation error. A small observed difference from a known zero does not bound any of these individually. The paper gives qualitative convergence; a quantitative estimate for A may be approached via projection defects of C, but prior art and arithmetic computability must be checked. No novelty claim.

Next reconstruction: §§2–4, including exact deficiency vector conventions, embedding j_a, and proof of the compression identity. For computation: verify Yoshida formulas, basis normalization, and spurious-root conditions before coding.

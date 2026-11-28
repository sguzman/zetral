# XU26 — Exact audit of the Fejer-kernel simple-zero certificate

Date: 2026-11-27. Status: exact arithmetic independently rederived for the
paper's introductory one-mollifier example; analytic inputs and the main
optimized certificates are not independently audited.

## Source and scope

Yuanda Xu, *Simple zeros of the Riemann zeta-function: a local multiplicity
test and long mixed moments*, arXiv:2611.34546v1, submitted 2026-11-25,
§1.4. The source presents a small certificate under RH, using the Fejer
kernel, one Bui–Heath-Brown mollifier, and the limiting endpoint
`(theta,psi)=(1/2,1)`. This audit checks its displayed rational covariance,
least-squares optimization, feasibility of `t>=0`, and final fraction. It
does not audit the analytic moment theorems that provide the inputs, the
limiting endpoint argument, or the paper's main 0.7127406684 certificate.

## Exact input and independent calculation

The source gives the limiting mean/covariance data

    A = 19/24,       V = Var(F) = 19/72,
    E(J+1/2) = 1/3,
    C = Cov(F,J) = 203/1920,
    V_J = Var(J) = 1/18.

Partial regression of the witness coordinate against `F` gives

    gap = 1/3 - (A/V) C
        = 1/3 - 3*(203/1920)
        = 31/1920 > 0,

and its residual variance is

    D_J = V_J - C^2/V
        = 1/18 - (203/1920)^2/(19/72)
        = 115519/8755200 > 0.

Thus the covariance matrix is positive definite (`V>0`, `D_J>0`), and the
unconstrained minimizing witness coefficient has positive sign, satisfying
the source's constraint `t>=0`. The covariance formula gives

    K = (A,1/3) Sigma^(-1) (A,1/3)^T
      = A^2/V + gap^2/D_J
      = 19/8 + 18259/924152
      = 276640/115519.

The minimized mean-square residual is `1/(1+K)`, so the certified
simple-zero lower proportion in this limiting toy certificate is

    K/(1+K) = 276640/392159 = 0.70542815... .

The positive optimal coefficient is

    t = (gap/D_J)/(1+K) = 141360/392159,

matching the source's displayed value. This independently verifies the
rational arithmetic and that the nonnegative-`t` constraint is active in
the admissible direction. The exact fraction is greater than `19/27`,
because the second term `gap^2/D_J` is strictly positive.

## Falsification checks and limitations

- `D_J>0` rules out a singular covariance degeneracy in this example.
- `gap>0` confirms the optimizer does not violate `t>=0`.
- Reversing the covariance sign would change `gap`; recomputation with the
  source's stated `C=203/1920` reproduces the printed exact output.
- This is the introductory 70.5428% certificate, not the preprint's
  optimized 71.2740668% result or its 85.3682304% distinct-zero bound.
- RH is assumed by the source. Its theorem may be composed with the
  separately externally checked Lean RH result at theorem level, but Zetral
  has not audited either the full source proof or that formal proof.
- No numerical computation or CI run was needed; all calculations above are
  exact rational reductions. No novelty claim is made.

Primary source: [Xu, arXiv:2611.34546v1, §1.4](https://arxiv.org/html/2611.34546).

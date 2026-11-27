# HP-02.5 — Weighted moving-block criterion for Schur transfer

Date: 2026-11-27. Status: exact finite-dimensional sufficient criterion and
tail-block reduction; the required uniform arithmetic bounds are not known.
This sharpens the missing estimate after HP-02.4 but does not establish
Prime–Weil spectral transfer.

## Question

Given convergence of every fixed low corner, what additional estimates would
actually force its Schur correction to vanish when the high block dimension
grows? Can the positive zero tail reduce low-to-high control to a weighted
diagonal tail sum?

## Abstract high-block criterion

Let the reference self-adjoint pencil be diagonal with low part
`Lambda_P` and high part `Lambda_Q=J W`, where `W=diag(|lambda_l|)` is
positive and `J=diag(sign(lambda_l))`. Let the perturbed pencil on a compact
parameter set `K`, `|xi|<=R`, be

    A_N(xi)=Lambda_N-xi I+E_N(xi).

Assume all high reference ordinates satisfy `|lambda_l|>=G_m>R` and

    q_N := sup_(xi in K)
      || W^(-1/2) E_QQ(xi) W^(-1/2) || < 1-R/G_m.

Factoring the high block gives

    W^(-1/2) H_N(xi) W^(-1/2)
      = J-xi W^(-1)+W^(-1/2)E_QQ(xi)W^(-1/2).

Because `J` is unitary, the right side is invertible by a Neumann-series
argument, and hence

    ||W^(1/2) H_N(xi)^(-1) W^(1/2)|| <= (1-R/G_m-q_N)^(-1).

Consequently the Schur correction satisfies

    ||E_PQ H_N(xi)^(-1) E_QP||
      <= (1-R/G_m-q_N)^(-1)
         ||E_PQ W^(-1/2)|| ||W^(-1/2) E_QP||.

Thus for fixed low dimension, fixed-low block convergence plus
`q_N<=q<1-R/G_m` and
`||E_PQ W^(-1/2)|| -> 0` imply uniform convergence of the low Schur
complement on `K`. Rouché's theorem then transfers root counts on contours
around isolated reference eigenvalues. To exclude compact spectral
pollution, the same Schur convergence is required away from those contours.
This is a sufficient criterion; it is not a necessary condition.

## Positive-tail coupling reduction

Use Shi's zero-side comparison coordinates, solely for analysis. Let
`u_z=r(z)/sqrt(g_k)`, `g_k=m_k omega_(k,N,L)`, for `z=±gamma_k`. The
vectors are orthonormal in the finite-zero metric `G^(0)`. Under RH let
`R>=0` be the remaining zero tail and define

    a_z = u_z^T R u_z,
    b   = e^T R e.

For a high signed mode `w=±gamma_l`, the tail part of the relative pencil
has exact entries, by Shi's displacement identity `D r(w)=e+w r(w)`,

    u_z^T R(D-xi I)u_w
      = (u_z^T R e)/sqrt(g_l)
           +(w-xi) u_z^T R u_w.

Positive-tail Cauchy–Schwarz gives

    |u_z^T R e|^2 <= a_z b,
    |u_z^T R u_w|^2 <= a_z a_w.

For `|w|>=2R`, summing the squared entries with the high resolvent weight
`1/|w|` yields

    sum_(|w|>G_m) |u_z^T R(D-xi I)u_w|^2/|w|
      <= 2 a_z [ b sum_(|w|>G_m) 1/(g_l |w|)
                 + C_K sum_(|w|>G_m) |w| a_w ].

The same estimate holds uniformly for `xi in K`; summing over a fixed low
corner multiplies the right side by its finite number of rows. HP-02.4 gives
`a_z -> 0` for every fixed low mode. Therefore the positive-tail part of the
weighted low-to-high coupling vanishes if the two moving-index sums

    T_1(N,m) = b_N sum_(l>m, signs) 1/(g_l |gamma_l|),
    T_2(N,m) = sum_(l>m, signs) |gamma_l| a_l

remain uniformly bounded (or satisfy any weaker bounds whose products with
the fixed-low `a_z` tend to zero). This identifies a concrete target: a
weighted trace of the whitened positive tail, rather than control of each
entry separately.

The scalar ground-state shift `epsilon I` is separate from the positive
tail. Its entry is
`epsilon [r(z)^T e + (w-xi)r(z)^T r(w)]/sqrt(g_k g_l)`.
HP-02.4's estimate `epsilon ||e||^2=O(N/L)` controls fixed low rows and
columns but does not by itself sum this term over moving high `w`. A full
Schur bound must control that weighted shift row too, or absorb it through
high-block coercivity.

## What the source currently supplies

Shi's (5.35) bounds `r(z)^T R r(w)` only for each fixed pair `z,w`; its
implicit constants may depend on those ordinates. Equation (6.21) controls
the least eigenvalue through one interpolation direction, and HP-02.4 uses
it to control each fixed low corner. None of these gives a uniform estimate
for `T_1`, `T_2`, or
`||W^(-1/2) E_QQ W^(-1/2)||` as the high block moves. In particular,
the fixed-low random-offset bound controls sine factors only for indices
`l<=N`; it does not prevent the interpolation numerator
`product_(j!=l)(gamma_l^2-gamma_j^2)` from becoming small at a moving index.

The abstract HP-02.1 coupling countermodel still falsifies any inference
from fixed-corner convergence alone. No actual zeta gap obstruction or
counterexample to the Prime–Weil pencil is shown. The missing estimates must
ultimately come from zero-independent arithmetic data to produce a
Hilbert–Pólya correspondence; RH-conditioned estimates in this comparison
basis cannot establish RH.

## Verification

The high-block factorization and weighted Schur bound are finite-dimensional
operator-norm estimates. The tail reduction is Cauchy–Schwarz for a positive
semidefinite form and the exact displacement identity. Its source formulas
were checked against Shi, [arXiv:2609.04908v12](https://arxiv.org/abs/2609.04908v12),
§§4.9, 5.2–5.3, and 6. No numerical computation or Lean proof was used; no
uniform moving-block arithmetic estimate, RH proof, novelty claim, or
spectral transfer is asserted.

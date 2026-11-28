# B3-57 — A coarse Schur cutoff for the full windowed Weil form

Date: 2026-11-28. Status: unconditional-in-H2-prime coarse analytic
reduction from ACG's form bound; exponential-sized low block, no positivity
or RH consequence.

## Question

Can the coercive-block estimate B3-56 be applied to the *full* windowed Weil
form without assuming ACG's H2′ tail estimate, and what dimension does the
resulting low block require?

## Logarithmic Sobolev operator on the window

Put `I_lambda=[-log(lambda),log(lambda)]`, with length
`ell=2 log(lambda)`, and extend functions on this interval by zero to the
logarithmic line. Define the closed form

    Lambda_lambda[f] = (1/(2 pi)) integral |fhat(s)|^2 log(2+|s|) ds.

Its form embedding into `L^2(I_lambda)` is compact. Indeed, on a set with
bounded `L^2` norm and `Lambda_lambda`, the Fourier tail satisfies

    ||1_(|s|>R) fhat||_2^2/(2 pi)
       <= Lambda_lambda[f]/log(2+R).

For fixed `R`, the map from `L^2(I_lambda)` to the Fourier band `[-R,R]` is
Hilbert–Schmidt, with squared norm `ell R/pi`. Approximation by this compact
band map and the uniform tail estimate prove compactness. Thus the associated
self-adjoint operator `L_lambda` has discrete spectrum tending to infinity.

The same argument gives a crude counting bound. If `E_r` is the spectral
subspace of `L_lambda` for eigenvalues at most `r>=1`, every unit vector in
`E_r` has at least half its Fourier mass in `[-exp(2r),exp(2r)]`. For an
orthonormal basis of `E_r`, summing this low-band mass and using the
Hilbert–Schmidt trace of the band restriction gives

    dim(E_r) <= (2 ell/pi) exp(2r)
              = (4 log(lambda)/pi) exp(2r).

No sharp Weyl law is claimed.

## Bounded perturbation and coercive complement

Complexify the real Weil form; the lower bound extends by applying it to real
and imaginary parts. ACG Lemma 8.13 gives, for `lambda>=2`,

    QW_lambda[f] >= Lambda_lambda[f] - C0 lambda ||f||^2.

The same source formulas show `QW_lambda = L_lambda + K_lambda` with
`K_lambda` bounded and `||K_lambda|| <= C1 lambda`: the archimedean symbol
difference `m(s)-log(2+|s|)` is bounded, the pole term is rank two with norm
`O(lambda)`, and the prime translations have total coefficient norm at most
`2 sum_(p^m<=lambda^2) (log p)p^(-m/2)=O(lambda)`.

Fix `delta>0`, set `r=C0 lambda+delta`, let `P=1_[0,r](L_lambda)`, and put
`Q=1-P`. The low space has finite dimension

    N <= (4 log(lambda)/pi) exp(2 C0 lambda+2 delta).

The high compression of the Weil operator satisfies
`D=Q QW_lambda Q >= delta I` by Lemma 8.13. Its low/high off-diagonal is
`B=Q K_lambda P`, so

    ||B||_HS^2 <= N ||K_lambda||^2.

Applying the coercive-block trace inequality (B3-56), with the low
compression `A=P QW_lambda P`, gives

    Tr((QW_lambda)_-)
      <= Tr(A_-) + delta^(-1)||B||_HS^2
      <= Tr(A_-) + (4 C1^2/pi) delta^(-1) lambda^2 log(lambda)
                              exp(2 C0 lambda+2 delta).

The same right side bounds `Tr(M (QW_lambda)_-)` for every positive
contraction `M`. The bounded perturbation preserves compact resolvent, so
the negative spectral subspace is finite-dimensional and the trace argument
is valid. This construction does not invoke H2′.

For the unbounded high block, the trace inequality follows from the same
eigenvector proof, not from a formal finite-matrix truncation. If
`psi_j=(x_j,y_j)` is a normalized negative eigenvector with eigenvalue
`mu_j`, its form identity and `D>=delta I` give

    -mu_j <= <(A_- + B*D^(-1)B)x_j,x_j>.

The vectors `x_j` are the low projections of an orthonormal family, so
`sum_j |x_j><x_j|<=I` on the finite-dimensional low space. Summing proves
`Tr((QW_lambda)_-)<=Tr(A_-)+Tr(B*D^(-1)B)`. The latter trace is bounded by
`delta^(-1)||B||_HS^2`. The form square completion is valid because `D` is
self-adjoint, `D>=delta`, and `B` is bounded with finite-dimensional domain
`P L^2(I_lambda)`.

## Information and limitations

This instantiates the abstract coercive-block criterion for the full windowed
form, rather than for the raw uncertainty operator. The latter is not a
positive high block: ACG's exact decomposition has eigenvalues `-kappa_n`
along every remaining near-self-dual tail direction (equations (62)–(63)).
The full form's logarithmic Sobolev part is what supplies high-block
coercivity here.

The reduction is too large for the intended polynomial conditioning regime:
the derived cutoff dimension is only bounded by `O(log(lambda) exp(2 C0
lambda))`, and the coupling contribution carries the same exponential scale.
This is a weakness of the coarse Lemma 8.13 route, not a lower bound on the
true dimension. Moreover, `Tr(A_-)` for the low block is still unknown and
may contain the entire positivity problem. The result neither proves
positivity nor replaces H2′; it pinpoints that a useful Schur route needs a
substantially sharper relative-form bound and cross-block estimate.

## Verification and sources

The compactness, counting, and Schur estimates are derived above. The source
inputs are ACG arXiv:2611.13129v1, §8.3 Lemma 8.13, especially its multiplier
asymptotic and `O(lambda)` pole/prime bounds; and equations (62)–(63) for the
negative uncertainty tail. The prime coefficient sum uses the source's
Chebyshev estimate. No numerical computation or formal proof assistant was
used. The source's H2′ remains open; this coarse reduction is not a proof of
it, a positivity result, an RH proof, or a Hilbert–Pólya correspondence.

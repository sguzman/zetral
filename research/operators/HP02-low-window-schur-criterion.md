# HP-02.1 — Low-window Schur criterion and a coupling countermodel

Date: 2026-11-27. Status: standard finite-dimensional reduction, manually
derived; not verified for the Prime–Weil arithmetic matrices.

## Question

Is Shi's global whitened relative norm the only route to convergence of
fixed low generalized eigenvalues, or can high modes be eliminated by a
Schur complement under weaker, window-specific estimates?

## Exact finite-dimensional reduction

Let `D=diag(D_L,D_H)` be Hermitian, and let `E(z)` be a matrix-valued
function analytic on an open set `U`. In block form, write

    A(z)=D-zI+E(z)
        = [[D_L-zI+E_LL, E_LH],
           [E_HL, D_H-zI+E_HH]].

On a set `K` where

    H(z):=D_H-zI+E_HH(z)

is invertible, block Gaussian elimination gives the exact identity

    det A(z)=det H(z) det S(z),

where

    S(z)=D_L-zI+E_LL(z)-E_LH(z)H(z)^(-1)E_HL(z).

Thus zeros of `det A` in `K` are exactly zeros of `det S`, with their
analytic multiplicities. This identity alone does not give convergence.

Suppose along a sequence of pencils the low dimension is fixed, the high
block remains invertible on a fixed compact neighborhood of the target
window, and

    sup_{z in K} ||E_LL(z)|| -> 0,

    sup_{z in K} ||E_LH(z)H(z)^(-1)E_HL(z)|| -> 0.

Then `S(z)` converges uniformly on `K` to `D_L-zI`. On any contour avoiding
the diagonal low eigenvalues, determinant convergence and Rouché's theorem
give the correct number of roots near each low eigenvalue, counted with
multiplicity. If the same estimates hold on the compact set outside these
contours, where `D_L-zI` is invertible, there are no additional roots
there. This is a finite-dimensional analytic lemma. For `z`-dependent
Hermitian pencils, analyticity is understood for the complexified pencil;
the real generalized eigenvalues are recovered from its determinant zeros.

The criterion does not require `||E(z)||` to vanish on the entire growing
space. It does require actual control of the high block resolvent and the
weighted low/high coupling. Those are substantive estimates, not formal
consequences of low-block convergence.

## Countermodel: low-block convergence is insufficient

For `M -> infinity`, take

    D_M=diag(1,M),
    E_M=[[0,sqrt(M)],[sqrt(M),0]].

The low diagonal perturbation is exactly zero, and the high block `M-z` has
uniformly bounded inverse on any fixed compact set. But

    E_LH (M-z)^(-1) E_HL=M/(M-z) -> 1,

so the Schur correction does not vanish. The eigenvalues of `D_M+E_M` are

    (M+1 +/- sqrt((M-1)^2+4M))/2,

and the smaller tends to zero, not to the reference low eigenvalue `1`.
This falsifies the shortcut from low-block convergence plus high-block
resolvent control to eigenvalue convergence. The weighted coupling condition
is indispensable in this example. It is a generic Hermitian countermodel,
not a Prime–Weil matrix or a zeta counterexample.

## Application boundary and next step

For the Prime–Weil pencil, the reference eigenbasis and diagonal `D` come
from the finite zero-side reconstruction, so they are comparison devices
that use the ordinates; the arithmetic operator remains the original
zero-independent matrix pencil. A proof may analyze the pencil in this
basis, but it must derive the block estimates from prime-side data or other
zero-independent bounds. Existing fixed-index tail estimates provide
neither uniform high-block invertibility nor the weighted coupling bound.
Under RH, positivity of the zero tail can aid the analysis, but using it as
a proof of RH would be circular.

The source's exact zero-tail formula gives one concrete low-block reduction.
For fixed `k,l` and signs `s,t in {+1,-1}`, the normalized tail-metric entry
in the reference eigenbasis is bounded, under the source's RH decomposition
and `nu_(N,L)<gamma_1`, by

    |Rhat_(s gamma_k,t gamma_l)|
      <<_(gamma_k,gamma_l)
      [sum_(j>N) m_j/gamma_j^4]
      / [sqrt(m_k m_l) |sin(L gamma_k/2) R'_(gamma_k)
                            sin(L gamma_l/2) R'_(gamma_l)|].

This follows by dividing equation (5.35) by the two metric square roots
`sqrt(m_k omega_k m_l omega_l)` from (5.30); the factors `4/L` cancel.
For fixed low indices the source's implicit constants are fixed, but the
denominator still needs control. More importantly, (5.35) gives no uniform
bound as either index moves into the high block, and it only addresses the
tail metric `Delta G`, not the complete Schur correction involving
`Delta K`. It is therefore a low-block diagnostic, not yet an arithmetic
estimate for the proposed criterion.

Next derive the low/high blocks from the exact arithmetic contrast formulas
and test whether divisor-free/zero-free bounds are available for a fixed
low window. If not, record the failed transfer route and move to a different
operator formulation. No numerical computation or formal proof was run.

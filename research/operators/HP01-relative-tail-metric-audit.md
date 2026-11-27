# HP-01 — What the finite-zero tail estimate must control

Date: 2026-11-27. Status: manual source and linear-algebra audit; no
zeta-matrix estimate proved.

## Question

Do the fixed-index zero-tail matrix-element bounds in Shi's finite
Prime–Weil pencil imply the scale-invariant relative perturbation target in
§4.9, equation (4.51)?

## Pinned source facts

In arXiv:2609.04908v12, §4.9 splits the arithmetic matrix into a first-`N`
zero block and a remainder, then defines the compressed reference metric
`G0` and the perturbations `Delta G`, `Delta K`. The target is

    sup_{|z|<=R} ||G0^(-1/2)(Delta K-z Delta G)G0^(-1/2)|| -> 0.

The paper's finite-zero contrast vectors `r(±gamma_k)` diagonalize the
reference metric by congruence. Its diagonal weights are

    omega_(k,N,L) = (4/L) sin^2(L gamma_k/2) (R'_(N,L)(gamma_k))^2 > 0,

with the zero multiplicity multiplying this weight. The retained-zero
vectors are orthogonal in this metric. In §5.3 the paper gives exact
matrix elements of the omitted zero tail and, for fixed signed `z,w`, a
bound of the form

    |r(z)^T R_(N,L) r(w)| \ll_(z,w) L^(-1) sum_(j>N) m_j/gamma_j^4.

The implied constant is allowed to depend on the fixed spectral points. The
paper itself states that this does not complete spectral transfer: one must
divide by metric normalizations, control couplings to moving high modes, and
handle near-resonance of `sin(L gamma_k/2)`.

## Independent linear-algebra audit

Write `D_(N,L)=diag(m_k omega_(k,N,L))` in the normalized reference
eigenbasis (including both signs). If `A_(N,L)(z)` is the residual form in
that basis, its whitened matrix is

    D^(-1/2) A_(N,L)(z) D^(-1/2),

whose `(k,l)` entry is `A_(k,l)(z)/sqrt(m_k omega_k m_l omega_l)`. For
dimension `2N`, the elementary Frobenius estimate gives

    ||D^(-1/2) A_(N,L)(z) D^(-1/2)||_op
      <= 2N max_(k,l) |A_(k,l)(z)|/sqrt(m_k omega_k m_l omega_l).

Thus a sufficient entrywise condition is that the right-hand side tend to
zero uniformly for `|z|<=R`, together with separate control of the
ground-state-shift terms in `Delta G` and `Delta K`. The fixed-`z,w`
estimate does not supply this: its constants are not uniform when `k,l`
move with `N`, and the weights `omega_k` can be small near a sine resonance
or when the interpolation derivative is small. This is exactly the metric
degeneration the paper identifies; it is not repaired by absolute entrywise
convergence.

## Countermodel to the unwhitened shortcut

Let `G_n=diag(1,epsilon_n)` with `epsilon_n -> 0`, and let
`A_n=diag(0,sqrt(epsilon_n))`. Then `||A_n||_op -> 0`, whereas

    ||G_n^(-1/2) A_n G_n^(-1/2)||_op = epsilon_n^(-1/2) -> infinity.

All matrices are real symmetric and `G_n` is positive definite. This
falsifies the generic inference from ordinary operator-norm convergence to
relative convergence in a degenerating metric. It is not a model of the
Prime–Weil matrices and does not refute their stronger target.

## Disposition and next attempt

The source's fixed-index fourth-power tail estimate is genuinely stronger
than its scalar second-power tail bound, but it is not uniform over the
growing reference basis after metric normalization. No RH-independent
operator follows from this estimate alone. The most direct next attempt is
to estimate the sine/interpolation factors and the prime-side compressed
tail jointly, rather than bounding tail entries before whitening. If
uniform separation from resonance cannot be maintained for a chosen
`N,L` coupling, seek a basis-invariant aggregate estimate that controls the
small metric directions. All formulas in this note are transcribed from the
pinned preprint and the displayed `2N` norm inequality is a direct
finite-dimensional derivation; the original arithmetic estimate has not
been independently reproduced.

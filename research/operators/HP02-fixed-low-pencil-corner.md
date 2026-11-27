# HP-02.4 — Vanishing of each fixed low corner of the shifted pencil

Date: 2026-11-27. Status: RH-conditional manual derivation from Shi's
zero-side decomposition. This proves fixed-corner convergence in the
zero-side comparison basis only; it does not prove Schur transfer or an
arithmetic spectral correspondence.

## Claim

Let `z=±gamma_k` and `w=±gamma_l` be fixed signed ordinates. Along
`L_N=N^2+U`, for almost every single `U in [0,1]`, and under RH, the
matrix element

    r(z)^T (R_(N,L_N)-epsilon_(N,L_N) I)
            (D_(L_N,N)-xi I) r(w)
       / sqrt((m_k omega_(k,N,L_N))(m_l omega_(l,N,L_N)))

tends to zero uniformly for `xi` in each fixed compact subset of `C`.
Here `R` is the positive zero tail, `epsilon` is the least eigenvalue of the
full Weil matrix, `D` is the diagonal Fourier-grid operator, and `r(z)` is
Shi's interpolation vector. The numerator is the `(z,w)` matrix element of
`Delta K-xi Delta G`; the denominator is the product of the exact diagonal
zero-side metric norms.

Consequently, for every fixed `m`, the `2m`-by-`2m` whitened low principal
corner of the relative pencil perturbation tends uniformly to zero on
compact spectral-parameter sets, almost surely under RH. This is a
low-corner result only: it gives no bound on the off-diagonal low/high
blocks, the high-block inverse, or the Schur complement.

## Proof

Use the probability-one offset event and fixed-low weight estimate from
HP-02.3. In particular, `nu_(N,L_N)<gamma_1` eventually. Also
`T_N=e^(L_N)` contains the first `N` critical-line ordinates eventually:
Selberg's `c T log T` lower bound for distinct critical-line ordinates
(cited in the repository's B3-05 source note) gives
`gamma_N=O(N/log(2N))`, while `L_N>=N^2`.

Write

    A_z = r(z)^T R r(z),
    B   = e^T R e,
    g_k = m_k omega_(k,N,L_N).

Under RH, `R` is positive semidefinite. The fixed-point tail formula (Shi,
(5.35)) gives, for fixed `z`,

    A_z <= C_z L_N^(-1) S_4(N),
    S_4(N) = sum_(j>N) m_j/gamma_j^4.

The Riemann–von Mangoldt upper count and dyadic summation give
`sum_j m_j/gamma_j^4<infinity`, hence `S_4(N)` is bounded (and tends to
zero). The interpolation identity (Shi, (6.13)) and
`0<=R_(N,L)(t)<=1/t` for `t>=gamma_(N+1)` yield

    B = (8/L_N) sum_(j>N) m_j sin^2(L_N gamma_j/2)
                               R_(N,L_N)(gamma_j)^2
      <= (8/L_N) S_2(N),
    S_2(N) = sum_(j>N) m_j/gamma_j^2.

Again `sum_j m_j/gamma_j^2<infinity`, so `S_2(N)` is bounded. Positivity
and Cauchy–Schwarz for the form `R` give

    |r(z)^T R e| <= sqrt(A_z B),
    |r(z)^T R r(w)| <= sqrt(A_z A_w).

The interpolation displacement equation (Shi, (5.24)) is
`D r(w)=e+w r(w)`. Therefore the unshifted tail contribution is exactly

    r(z)^T R(D-xi I)r(w)
       = r(z)^T R e + (w-xi) r(z)^T R r(w).

Now control the scalar shift. Set `h=2 pi/L_N`. Directly from Shi's
barycentric formula (5.9)–(5.10), for `n in {-N,...,N}`,

    |P'_(N,L_N)(nu_(n,L_N))|
       = h^(2N) (N+n)! (N-n)!
       >= h^(2N) (N!)^2.

Since `nu_(N,L_N)<gamma_1`, every factor in
`Q_N(nu_n)=product_(j<=N)(nu_n^2-gamma_j^2)` has magnitude at most
`gamma_j^2`. Thus

    ||e||_2^2 <= (2N+1)L_N
                   product_(j<=N)gamma_j^4
                   / (h^(4N)(N!)^4).

The source's least-eigenvalue estimate (Shi, (6.21)) is

    0 <= epsilon <= (8/L_N^2)
       product_(j<=N)(2 pi j/(L_N gamma_j))^4 S_2(N).

Multiplying the two inequalities cancels the products exactly, since
`h=2 pi/L_N` and `product_(j<=N)j=N!`:

    epsilon ||e||_2^2 <= 8(2N+1) S_2(N)/L_N = O(N/L_N)=O(N^(-1)).

For fixed signed `z`, `|nu_n-z|>=|z|-nu_N>=gamma_1/2` eventually, so
`||r(z)||_2 <= 2||e||_2/|z|`. It follows that

    epsilon |r(z)^T e| <= (2/|z|) epsilon ||e||_2^2,
    epsilon |r(z)^T r(w)| <= (4/(|z||w|)) epsilon ||e||_2^2.

The full shifted matrix element expands as

    r(z)^T(R-epsilon I)(D-xi I)r(w)
      = r(z)^T R e +(w-xi)r(z)^T Rr(w)
         -epsilon[r(z)^T e +(w-xi)r(z)^T r(w)].

On a fixed compact set of `xi`, `|w-xi|` is bounded. The two positive-tail
terms are `O_(z,w)(L_N^(-1) sqrt(S_4(N)S_2(N)))` and
`O_(z,w)(L_N^(-1) S_4(N))`, respectively. The shift terms are
`O_(z,w)(N/L_N)`. Each tends to zero. Finally, HP-02.3 gives
`g_k,g_l -> infinity` for every fixed pair, so division by
`sqrt(g_k g_l)` preserves convergence (and strengthens these bounds).
There are finitely many signed pairs in a fixed low corner, hence convergence
is uniform over that matrix corner and over compact `xi` sets.

## What this does not establish

The estimates above use positive-tail structure and the least-eigenvalue
bound under RH. The basis `r(±gamma_k)` also uses the ordinates and serves
only to analyze the arithmetic pencil. The result does not estimate
`P Delta Q`, `Q Delta P`, or `Q Delta Q`; fixed-corner convergence alone
does not imply convergence of roots because the Schur correction can remain
order one. HP-02.1's generic 2-by-2 countermodel still applies to that
logical gap. The actual zero-independent, prime-side estimates needed for
low/high coupling and high-block invertibility remain open.

## Verification and sources

The cancellation in `epsilon ||e||^2` was separately checked from the
factorials and powers of `2 pi/L`; no asymptotic estimate for the zero
ordinates is used in that cancellation. The Riemann–von Mangoldt dyadic
bounds, Selberg distinct-ordinate cutoff, positive-tail Cauchy–Schwarz,
and compact-parameter uniformity were checked independently at the level
of the displayed formulas. Source formulas were verified against Shi,
[arXiv:2609.04908v12](https://arxiv.org/abs/2609.04908v12), equations
(5.9)–(5.10), (5.24), (5.30)–(5.35), (6.13)–(6.16), and (6.21), on
2026-11-27. This remains a manual, RH-conditional derivation, not a Lean
proof, numerical result, novelty claim, or Hilbert–Pólya spectral theorem.

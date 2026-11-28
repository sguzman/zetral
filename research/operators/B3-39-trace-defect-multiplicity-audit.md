# B3-39 — Trace defects detect multiplicity excess, but do not add operator fibers

Date: 2026-11-28. Status: independent analytic audit of a recent source
argument; finite numerical certificate not reproduced in Zetral.

## Question

Does the recently posted finite arithmetic simplicity criterion after
Suzuki give the scalar Weil operator geometric multiplicity, or does it
instead detect the gap between multiplicity-weighted explicit-formula
moments and a compression whose spectral coordinates are distinct zeros?
Is the displayed trace-defect theorem internally consistent?

## Source and prior art

F. Alderliefste, *A finite arithmetic test for simplicity of the Riemann
zeros, after Suzuki*, Hexagon version 1, posted 2026-11-24,
[source](https://hexagonmath.org/2611.00996v1). This is a source audit, not
a novelty claim. The paper attributes the Hilbert space, diagonal operator,
and Hilbert–Schmidt compression convergence to M. Suzuki,
arXiv:2610.32704v1, and the rank-versus-trace principle to Alpöge–Furman,
arXiv:2608.13637v2, Proposition 4.1 and Lemma 3.1.

## Independently checked core identity

Assume RH as in the source. Write the distinct zero ordinates as
`Gamma`, with analytic multiplicities `m_gamma`, and put
`H = ell^2(Gamma,m)` and `(C x)_gamma = x_gamma/gamma`. Although the norm
uses the weights `m_gamma`, each distinct ordinate supplies one coordinate
and one one-dimensional eigenspace. Thus

    tr |C|^(2k) = 2 sum_{gamma>0, distinct} gamma^(-2k),
    S_k = 2 sum_{gamma>0, distinct} m_gamma gamma^(-2k).

For a finite-rank orthogonal compression `C_N=P_N C P_N`, singular-value
contraction gives `tr(C_N^(2k)) <= tr(|C|^(2k))`; the inequality is strict
because `C` has infinitely many nonzero singular values and `C_N` has finite
rank. Therefore

    D_(N,k) := S_k - tr(C_N^(2k))
      > 2 sum_{gamma>0, distinct} (m_gamma-1) gamma^(-2k)
      >= 2 E(T) T^(-2k),

where `E(T)=sum_(0<gamma<=T)(m_gamma-1)`. For the source's nested dense
compression spaces, `C_N -> C` in Hilbert–Schmidt norm; hence for fixed `k`
the trace powers converge in trace norm and `D_(N,k)` decreases to the
displayed multiplicity-excess sum. Taking `2k`-norms of the sequence that
contains `1/gamma` exactly `m_gamma-1` times gives

    sup_(N,k) (2/D_(N,k))^(1/(2k)) = gamma_*,

with value infinity when there are no multiple zeros. This proves the
criterion's analytic core from the stated compression hypotheses. It is
still a criterion for simplicity, not a construction of additional
eigenspace dimensions.

The source's certificate-size proposition also follows from the same
singular-value principle. If `d_N` is even and `gamma_j` are the positive
ordinates listed with multiplicity, then

    tr(C_N^(2k)) <= 2 sum_(j<=d_N/2) gamma_j^(-2k),
    D_(N,k) >= 2 sum_(j>d_N/2) gamma_j^(-2k).

Thus the strict height-`T` test requires `d_N >= 2 n(T)`. By the
Riemann–von Mangoldt count, this is asymptotically a dimension floor of
`(T/pi) log T` (up to lower-order terms). For the source's spline spaces
`d_N=2N 2^N-2`, the minimal eligible `N` is `log_2 T+O(1)`, so the input
prime-power cutoff `e^(2N)` scales at least on the order of
`T^(2/log 2)` for this family. This is a necessary resource scaling, not
an impossibility theorem or a sufficient dimension choice.

## Source discrepancy found

In the displayed statement of Theorem 1, source lines 75–78 state
`D_(N,k) > 2 sum m_gamma gamma^(-2k)`. This cannot be right: by definition
`D_(N,k)=S_k-tr(C_N^(2k)) < S_k`, and if all zeros are simple then
`D_(N,k) -> 0` for fixed `k`, whereas the displayed right side is positive.
The proof at source lines 273–286 derives the correct expression with
`m_gamma-1`, and the rest of the theorem uses the multiplicity-excess bound.
This is an apparent typographical error in the theorem statement; it does
not invalidate the conclusion when corrected to the expression proved.
No author contact was made.

## What it does and does not establish

- The paper's theorem implies that a strict finite inequality certifies
  simplicity up to the corresponding height, conditional on RH.
- The paper reports an Arb interval certificate through height `97.632`,
  using dimension 766, 15,040 prime powers, and two independently written
  programs. Zetral has not run either program or reproduced those intervals;
  we record this as source-reported computation, not our verification.
- The source computes `S_k` from Taylor coefficients of `xi` at `1/2` and
  the compressed trace from prime-power explicit-formula entries. The
  certificate is zero-ordinate-free according to the source, but is not a
  machine-checked theorem in Lean.
- The scalar compression still has one eigendirection per distinct
  ordinate. Multiplicity enters `S_k` as a weight; the defect detects
  `(m_gamma-1)`, rather than converting those weights into geometric fiber
  rank.
- If all zeros were proved simple, this particular mismatch would vanish;
  the source gives no estimate proving simplicity at every height. Thus the
  result does not close the full spectral-correspondence gap.

## Audit status and next question

The trace-ideal argument, the limiting multiplicity-excess identity, and
the `ell^(2k)` limit were rederived here. The finite-dimensional explicit
formula entries, source's interval code, and external RH formalization were
not independently reproduced. No Lean proof, numerical experiment, human
review, or novelty claim is made.

Next: determine whether the arithmetic trace-defect criterion can yield a
useful asymptotic upper bound for `D_(N,k)` at unbounded heights under a
dimension budget, or whether the certificate-size lower bound forces a
barrier; compare that route with a genuinely vector-valued prime-side form.
Keep the latter as the route required for geometric multiplicity if
simplicity is not established.

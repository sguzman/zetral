# PMA63-W08 — boundary-correction norm grows under partition refinement

Status: completed scoped analytic result; ready for lead review.

Baseline: `a7ead1b4695dbb0b2ffde9131d0408ac84ff58aa` (LXIV BC01 complete; BC02 lead-owned). This follows the fixed-partition boundedness result in PMA63-W07 and addresses its stated limitation: no uniform bound was shown as the Neumann partition was refined.

## Setup

Fix a physical interval (I=(0,L)), split it into (m) equal cells of width (h=L/m), and let (L_N^{(m)}) be the direct sum of cell Neumann Laplacians (and the exterior half-line operators), while (L_0) is the full-line Laplacian. Write
\[
\alpha(t)=\alpha_0+\Phi(t),\qquad
\Phi(t)=\sum_{j\ge0}\frac{2}{r_j}\frac{t^2}{t^2+r_j^2},\quad r_j=2j+\tfrac12.
\]
For each fixed partition, let (K^{(m)}=\sum_{j\ge0}2r_jD_{r_j}\) be the positive bounded correction, with (D_r=(L_N^{(m)}+r^2)^{-1}-(L_0+r^2)^{-1}\succeq0). The exact form identity is
\[
q_0(f)=q_N^{(m)}(f)+\langle K^{(m)}f,f\rangle
\]
on their common form domain. This fixed-partition identity follows from the multiplier expansion and resolvent order; boundedness for each m is established in PMA63-W07.

## Alternating cell test vector

Take an even (m\ge4). Define (f_m(x)=(-1)^k/\sqrt L) on cell (k=0,\ldots,m-1), and zero outside I. Then \(\|f_m\|_2=1\), and it is constant on each Neumann cell. Each f_m is a finite step function. Its Fourier transform is bounded near zero and is O_m(1/|xi|) at infinity, so the log-weighted integral q_0(f_m) is finite. Thus f_m belongs to the common form domain in the fixed-partition identity.

Therefore
\[
q_N^{(m)}(f_m)=\alpha_0.
\]
On the interior (0<x<L-h), (f_m(x+h)=-f_m(x)), except at cell endpoints of measure zero. Thus
\[
\|f_m(\cdot+h)-f_m\|_2^2\ge4\frac{L-h}{L}=4(1-1/m).
\]
By Plancherel, with the unit-mass spectral measure (d\mu_m(\xi)=|\widehat f_m(\xi)|^2d\xi),
\[
\|f_m(\cdot+h)-f_m\|_2^2
=\int |e^{i\xi h}-1|^2d\mu_m(\xi).
\]
For (|\xi|\le1/h), the multiplier is (2(1-\cos(\xi h))\le(\xi h)^2\le1); at all frequencies it is at most 4. If (p_m=\mu_m(|\xi|>1/h)), then
\[
4(1-1/m)\le1\cdot(1-p_m)+4p_m=1+3p_m,
\]
so (p_m\ge1-4/(3m)\ge2/3) for (m\ge4).

The series for Φ is increasing in (t\ge0), since each summand is. Hence
\[
\begin{aligned}
\|K^{(m)}\|&\ge\langle K^{(m)}f_m,f_m\rangle
=q_0(f_m)-\alpha_0\\
&=\int\Phi(|\xi|)d\mu_m(\xi)
\ge p_m\Phi(1/h)\ge\tfrac23\Phi(1/h).
\end{aligned}
\]
For (r_j\le t), (t^2/(t^2+r_j^2)\ge1/2), so
\[
\Phi(t)\ge\sum_{r_j\le t}\frac1{r_j}\longrightarrow\infty\qquad(t\to\infty).
\]
Since (h=L/m\to0), it follows that
\[
\|K^{(m)}\|\ge\tfrac23\sum_{r_j\le m/L}\frac1{r_j}\longrightarrow\infty.
\]
Thus no partition-uniform operator-norm bound for the finite-cell boundary correction is possible, even on equal cells of a fixed physical interval. The divergence is at least logarithmic in (m) by the harmonic growth of Σ (1/(2j+1/2)).

## Scope and meaning

This is an analytic lower bound, not a numerical experiment. It does not conflict with the fixed-partition bound (\|K^{(m)}\|\le mC_0); that upper bound is nonuniform and the lower bound shows nonuniformity is real. It does not imply failure of strong convergence at any fixed partition, nor does it obstruct a proof using a fixed physical partition. It does show that one cannot pass to arbitrarily fine Neumann partitions while treating the boundary correction as uniformly bounded. No prime term, pole term, candidate comparison, operator positivity, or RH conclusion is addressed.

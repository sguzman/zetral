# L03-W01 — signed min–max bounds for the phase inverse

Date: 2026-11-25 UTC. Status: ready for lead review. This is a bounded verification of exact rank-one interlacing and its positive-eigenvalue translation, conditional on the imported RH-dependent identities in L01. It does not prove a new phase-dependent large-window limit.

## 1. Exact finite-window formula

Use L01's notation and assumptions. For (0<\theta<2\pi), set
\[
 p=\cot(\theta/2),\qquad \rho_a=\eta_a p,
 \qquad T_{a,\theta}=D_\theta^{-1}=C_a+\rho_a Q_a.
\]
Here (C_a=D_\pi^{-1}) is compact self-adjoint and (Q_a) is the rank-one orthogonal projection onto the unit vector (e_a). L01 proves η_a>0, so the sign of ρ_a is positive for (0<θ<π) and negative for π<θ<2π. The formula is an exact bounded compact self-adjoint inverse for each fixed nonzero phase; no large-window approximation enters this section.

For compact self-adjoint (K), let (p_n(K)) be its positive eigenvalues in nonincreasing order and (r_n(K)) the absolute values of its negative eigenvalues in nonincreasing order. Pad either list by zeros if it is finite. For a unit vector (e), (Q=e\otimes e), and ρ>0, the variational characterization gives
\[
 p_n(K)\le p_n(K+\rho Q)\le p_{n-1}(K)\quad(n\ge2),
 \qquad r_{n+1}(K)\le r_n(K+\rho Q)\le r_n(K)\quad(n\ge1).
\tag{L03.1}
\]
The lower positive bound is Loewner monotonicity. For the upper bound, in the min–max formula for (p_n(K+\rho Q)), choose a codimension-((n-1)) space containing (e) and the top (n-2) positive eigendirections of K. On its orthogonal complement Q vanishes, so the Rayleigh supremum is at most (p_{n-1}(K)). The negative-magnitude inequalities follow by applying the same positive-eigenvalue statement to (-K-\rho Q), a negative rank-one perturbation of (-K). Also (p_1(K+\rho Q)\le p_1(K)+\rho) by the Rayleigh quotient.

For ρ<0 the signs reverse:
\[
 p_{n+1}(K)\le p_n(K+\rho Q)\le p_n(K)\quad(n\ge1),
 \qquad r_n(K)\le r_n(K+\rho Q)\le r_{n-1}(K)\quad(n\ge2).
\tag{L03.2}
\]
These follow from (L03.1) applied to (-K) or by negating the operators. Equalities are allowed; strict interlacing is not a consequence of min–max alone.

## 2. Translation to local differentiation roots

Write (t_{a,n}^{(\theta)}>0) for the positive eigenvalues of (D_\theta) in increasing order, and (t_{a,n}^{(\pi)}) for phase π. Because the inverse is compact and zero-free for θ≠0, (p_n(T_{a,\theta})=1/t_{a,n}^{(\theta)}). Similarly (p_n(C_a)=1/t_{a,n}^{(\pi)}). Reciprocation reverses inequalities:

- If (0<\theta<\pi), then for (n\ge2),
  \[
  t_{a,n-1}^{(\pi)}\le t_{a,n}^{(\theta)}\le t_{a,n}^{(\pi)}.
  \tag{L03.3}
  \]
  For the first positive root,
  \[
  \frac{1}{1/t_{a,1}^{(\pi)}+\rho_a}\n  \le t_{a,1}^{(\theta)}\le t_{a,1}^{(\pi)}.
  \tag{L03.4}
  \]
  The lower endpoint uses (p_1(T)\le p_1(C_a)+\rho_a).
- If (\pi<\theta<2\pi), then for every (n\ge1),
  \[
  t_{a,n}^{(\pi)}\le t_{a,n}^{(\theta)}\le t_{a,n+1}^{(\pi)}.
  \tag{L03.5}
  \]
- At θ=π the spectra agree. At θ=0 the operator has its exact zero eigenvalue and no bounded inverse; apply codimension-one compression interlacing to the reduced inverse (K_a=(I-Q_a)C_a(I-Q_a)|_{e_a^\perp}). Its positive eigenvalues obey (p_{n+1}(C_a)\le p_n(K_a)\le p_n(C_a)), so the positive nonzero phase-zero roots obey the same bracket as (L03.5), with the zero root excluded from positive indexing.

These statements give a one-index phase shift in the positive branch: positive inverse rank adds one positive direction below phase π and moves one positive inverse direction to the negative side above π. The corresponding local differentiation eigenvalues satisfy (L03.3)–(L03.5). They do not claim a strict inequality or a matching limit for each phase.

Under RH and Suzuki's compression (C_a=j_a^*Cj_a), the positive eigenvalues of C are (1/\gamma_n), where γ_n are the distinct positive ordinates in increasing order. Compression min–max gives (p_n(C_a)\le1/\gamma_n), hence (t_{a,n}^{(\pi)}\ge\gamma_n). Combining with (L03.3) gives (t_{a,n}^{(\theta)}\ge\gamma_{n-1}) for (0<\theta<\pi,n\ge2); (L03.5) gives (t_{a,n}^{(\theta)}\ge\gamma_n) for π<θ<2π. The global lower comparison is conditional on RH and the imported compression theorem.

At a fixed window, ρ_a→+∞ as θ→0+, and the Rayleigh quotient on (e_a) shows (p_1(T_{a,\theta})\to+\infty), so (t_{a,1}^{(\theta)}\to0+). For θ→2π-, ρ_a→-∞ and the largest negative inverse magnitude diverges, corresponding to a negative eigenvalue approaching zero from below. At the endpoint θ=0 exactly, the zero mode is present and the reduced inverse must be used. These fixed-a endpoint facts do not quantify simultaneous (a\to\infty) phase drift.

## 3. What is not determined

The exact interlacing inequalities do not locate the extra positive root for (0<θ<π), prove its large-window limit, or decide what happens when the scalar (p=\cot(\theta/2)) resonates with (1/\gamma_j). If L02's block approximation is used, the candidate limiting inverse is (C\oplus[p]); at (p=1/\gamma_j) this direct-sum limit has a repeated eigenvalue even though every finite-phase local extension has simple eigenvalues. The rank-one interlacing proof allows such coalescing limits but does not establish that block approximation or its convergence. Nor does it give uniform-in-n bounds, rates, or a conclusion for moving phases. These remain with the lead's L03 analysis.

## 4. Source comparison and audit status

I read the assigned primary-source passages in context. Suzuki v1 §2.3, (2.8)–(2.9), defines the global sampling isometry and increasing dense local subspaces; §3.3, (3.5), gives inverse compression for the distinguished phase π; §5 proves the corresponding phase-π entire-function limit. These support the global comparison above but do not themselves state the other-phase min–max bounds. Suzuki v4 §7.8 constructs global de Branges deficiency kernels and discusses a possible right-hand-side limit; it supports the phase-vector convention, not a large-window eigenvalue interlacing theorem. The finite-rank inequalities here use standard compact self-adjoint min–max. No claim of a new general extension theorem or originality is made.

No counterexample to L01's exact rank-one formula or its sign was found. This check depends on L01's inverse identity and compression hypotheses; I did not independently re-prove the boundary-form calculation, L02 weak-escape estimates, or any large-window resonance claim. No numerical, interval, or formal computation was needed or run.

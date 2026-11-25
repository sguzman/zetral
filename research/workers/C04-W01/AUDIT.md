# C04-W01: C02 audit and X=2 residual feasibility

Date: 2026-11-25 UTC. Status: ready for lead review. This is an independent audit and non-certified numerical diagnostic, not acceptance of C02 or a spectral certificate.

## Scope and sources actually inspected

Starting commit was `028a5133cb0a238ed365b80d6461c5416cd56725`. I read `AGENTS.md`, `STATE.md`, `COORDINATION.md`, `research/CAMPAIGN-04.md`, C01/C02, `literature/gram-quadrature.md`, and `experiments/src/bin/precision.rs`. I fetched and read the relevant primary HTML sources:

- Suzuki, arXiv:2606.09096v4, §1.1: Weil functional, convolution/correlation convention, and the arithmetic form.
- Suzuki, arXiv:2610.32704v1, §6, especially (6.1)–(6.4), Proposition 6.1 and its proof: Fourier basis normalization, form Gram matrix, Riesz equations, and the form-core statement.
- Zhu, arXiv:2608.24827v2, Theorem 6.2 and Corollary 6.3: the reported lower bound (8.9\times10^{-18}) for all complex functions supported in ([-0.8,0.8]). The corollary states (Q(f)\ge8.9\times10^{-18}\|f\|_2^2), without a parity or reality restriction. I inspected the theorem statement and surrounding source text, not the underlying interval computation or its complete certificate.

URLs: `https://arxiv.org/html/2606.09096v4`, `https://arxiv.org/html/2610.32704v1`, `https://arxiv.org/html/2608.24827v2` (HTML fetched 2026-11-25). No source could establish originality.

## Independent C02 checks

1. **Off-diagonal sign and normalization.** From the centered overlap,
   \[
   S_{mn}(t)=2(-1)^{m-n+1}\frac{\sin(\pi(m-n)t/L)}{\pi(m-n)}\cos(\pi(m+n)t/L).
   \]
   Applying (2\sin A\cos B=\sin(A+B)+\sin(A-B)) gives the difference \(\sin(2\pi mt/L)-\sin(2\pi nt/L)\). Integration against (2\cosh(t/2)-K(t)), and the prime term with the same sine difference, gives exactly the C02 divided difference, including the factor (1/\pi) and parity sign. Direct numerical integration of the unsimplified correlation agrees for ((m,n)=(0,1),(1,2),(2,-1)) to at most (2.8\times10^{-17}); raw output is in `experiments/worker-c04-w01/diagnostics.txt`. These checks support the formula but are not rigorous numerical validation.

2. **Uniform bound on (H_j).** The pole contribution is at most \(\int_0^L2\cosh(t/2)dt=4\sinh(L/2)\), and the prime contribution is at most (P_L\). For the singular term, split at \(1/k\). Before that point, (K(t)\le e^{L/2}/(2t)) and \(|\sin kt|\le kt\), giving (e^{L/2}/2\). Afterward, (K\) is decreasing and the anchored sine primitive is bounded by (2/k\), so integration by parts gives at most (2K(1/k)/k\le e^{L/2}\). The (j=0) case is immediate. This verifies the stated, conservative (B).

3. **Residual tail.** For (|j|>N), the forcing integration-by-parts bound is (F_w/|j|); each off-diagonal form entry is bounded by (2B/(\pi|j-m|)\). Thus the coefficient is bounded by (C/(|j|-N)) with the stated (C). Summing both tails and using \(\sum_{r>J-N}r^{-2}\le1/(J-N)\) gives (2C^2/(J-N)\). The factor of two and cutoff are correct. Together with the cited form core, square summability implies the (L^2) operator residual representation as in C01. This is conditional on exact coefficients and validated bounds; it does not make a finite computed residual a full-space residual.

4. **Finite-block coercivity.** The Fourier multiplier of the discrete kernel (1/(\pi(m-n))\) has modulus at most one, so (\|U[T,H]U\|\le2B\). The tail diagonal lower bound follows from the nonnegative prime term and the truncated ((1-\cos s)/s\) integral; the pole loss (16\sinh(L/2)\) is a valid coarse bound. Both head-tail and tail-block perturbations are bounded by (2B). The two-dimensional quadratic comparison yields the stated determinant condition. It is sufficient, not necessary, and a finite head eigenvalue alone is not a full-space lower bound. I found no counterexample to these estimates. They can be numerically impractical because the diagonal grows only logarithmically while (B) is fixed and the coupling estimate is large.

At (X=2), (L=\log2), and the prime power (q=2) lies exactly at the correlation endpoint. The correlation vanishes there, so its contribution is zero in both diagonal and off-diagonal formulas; all higher prime powers are absent. The experiment therefore uses the finite arithmetic form without any zero data.

## Bounded X=2 diagnostic

The independent script `experiments/worker-c04-w01/x2_residual.py` assembles diagonal entries from the subtracted arithmetic integral and off-diagonal entries from the C02 divided difference, solves the finite representer equation for (f_{+i}(x)=e^{-x}), and computes residual coefficients through (|j|=300). It uses Python 3.12.14, NumPy 2.3.5, SciPy 1.17.0, binary64 arithmetic, and `scipy.integrate.quad` with `epsabs=2e-11`, `limit=300`. Reproduce with:

```sh
python3 experiments/worker-c04-w01/x2_residual.py
```

For (N=2,4,8,12), the computed condition numbers were 422, 1,091, 1,790, 2,143; the partial residual norms over modes (N<|j|\le300) were 14.68, 14.31, 9.24, 6.59. The finite Gram minimum estimates were respectively (3.06\times10^{-3},1.74\times10^{-3},1.42\times10^{-3},1.37\times10^{-3}). These are diagnostics only. In particular, a positive finite minimum is not a certified coercivity bound.

Using the nominal coefficients in C02's tail formula gives (B\approx4.026), (F_w\approx0.5047), and squared-tail bounds at (J=512) of about (4.0\times10^3,1.34\times10^4,2.10\times10^4,2.31\times10^4) as (N) grows through those four values. The cutoff needed to make only this nominal squared-tail bound at most 1 is about (2.06\times10^6) for (N=2) and (1.15\times10^7) for (N=12). This demonstrates the crudeness of the available envelope, not a lower bound on the true tail. Neither the solve nor constants are outward-rounded, so these numbers cannot be used as validated upper bounds.

Zhu's reported (8.9\times10^{-18}) applies to this support by zero extension and matches the all-complex statement inspected. Even if accepted as an imported coercivity constant, C01 would convert a residual norm of order one into an energy error of order (10^9). The observed finite-mode residuals and the current tail envelope do not approach a useful certified representer error. A rigorous attempt would additionally need validated Gram entries/linear solve, validated full residual coefficients, a validated tail constant, and a reproducible accepted coercivity import. No interval arithmetic or Rust toolchain was available on PATH; no Cargo build was attempted. No zero ordinates were used.

## Disposition

C02's formulas survived an independent algebraic and bounded numerical audit; no correction or counterexample was found. The (X=2) attempt does not produce a practical certificate. The main quantitative obstacle is the large coefficient sum in (C), leading to million-scale cutoffs even for a unit tail target, followed by division by a coercivity floor near (10^{-17}). The reproducible evidence is diagnostic, not a rigorous residual enclosure. No claim of certified kernel value, root, positivity, novelty, or formal verification is made.

Suggested follow-up for lead: record the audit as supportive but non-acceptance evidence; if a realistic certificate remains a goal, first seek a sharper asymptotic/off-diagonal residual tail that exploits signed coefficient cancellation and obtain a validated finite solve. The lead's C05 consolidation on current main is separate work; I found no nonconflicting worker package to begin before that campaign review.

# S03-W01: independent finite small-window check

Date: 2026-11-25 UTC. Status: ready for lead review. Numerical evidence only; no theorem or exact spectral certificate is claimed.

## Question and method

I independently checked the Campaign V cosine scaling limit using finite arithmetic data at three prime-free windows, avoiding the lead's S01/S02 derivation and any known-zero inputs. The windows are (a=0.003,0.001,0.0003), so (L=2a<\log2) and there are no prime powers in the geometric form. For (N=20,40,80), and additionally (N=160) at (a=0.001), I assembled the Gram matrix from its subtracted diagonal integral and C02's off-diagonal divided difference; solved the finite Riesz systems for the forcing (e^x); and scanned for the first sign-changing root of the finite phase-π characteristic scalar.

The reusable script is `experiments/worker-s03-w01/small_window.py`; raw results are `experiments/worker-s03-w01/results.csv`. Run from the repository root:

```sh
python3 experiments/worker-s03-w01/small_window.py
```

The environment was Python 3.12.14, NumPy 2.3.5 and SciPy 1.17.0. `scipy.integrate.quad` used absolute tolerance (2\times10^{-11}), limit 500; `brentq` used `xtol=2e-12`. A separate tolerance sensitivity run is preserved at `experiments/worker-s03-w01/quadrature-sensitivity.txt`.

## Results

The column `a*t` is the candidate scaled root; the limit target is π/2 ≈ 1.5707963.

| a | N=20 | N=40 | N=80 | N=160 | abs offset from π/2 at N=80 |
|---:|---:|---:|---:|---:|---:|
| 0.003 | 1.805500 | 1.797676 | 1.793683 | — | 0.222887 |
| 0.001 | 1.760628 | 1.752823 | 1.748849 | 1.746840 | 0.178053 |
| 0.0003 | 1.728448 | 1.720659 | 1.716699 | — | 0.145903 |

All three sequences move toward π/2 as the window decreases. Cutoff movement is smaller than the remaining offset but still measurable: the N=80 to 160 change at a=0.001 is 0.00201, versus an offset 0.17604. The offset decreases by about 0.04 as (a) falls by each factor of three. This is consistent with slow logarithmic convergence but is not a fit or estimate of a correction coefficient.

Changing the quadrature absolute tolerance from (2\times10^{-11}) to (10^{-13}) at (a=0.001), N=40 and 80, did not affect the printed 14-digit roots. This checks numerical stability, not a rigorous integration error. The root scan reports the first sign-changing root; it does not prove there are no earlier even-multiplicity or grid roots. `cond_2` reports matrix condition estimates, which range from 1.77 to 2.62 at the reported N=80 points.

## Limits and disposition

These are roots of finite Fourier characteristic functions. No finite-to-exact representer error is bounded, no Gram entry or solve is interval-enclosed, and no root count/order is proved. The asymptotic theorem provides no useful finite-window error bar at these scales: its stated (O(1/\log(1/a))) constant is very coarse. The evidence supports the direction of the cosine limit and gives reproducible small-window diagnostics, but it cannot test exact local roots to a rigorous tolerance or establish a second-order term. No correction or counterexample to the limit was found.

## Updated work order: comparison with S02 and phase normalization

After refreshing `main`, I read `research/asymptotics/S01-scaled-logarithmic-operator.md`, `research/asymptotics/S02-sine-integral-correction.md`, and the updated S03-W01 work order. The specified windows are (a=e^{-5},e^{-10},e^{-20}). For (s_1=\pi/2) and (s_2=3\pi/2), S02 predicts the limits

\[
 c(a)(a t_{a,1}-s_1)\longrightarrow \tfrac12\operatorname{Si}(\pi)=0.9259685259912331,\qquad
 c(a)(a t_{a,2}-s_2)\longrightarrow \tfrac12\operatorname{Si}(3\pi)=0.8373808994899806.
\]

I independently checked the exact phase normalization against Suzuki, *Weil's quadratic form via the screw function*, arXiv:2606.09096v4, Theorem 1.5 and §6.2 (HTML fetched 2026-11-25). The theorem states that for adjoint eigenvectors (v_+,v_-) at (+i,-i), normalized to equal (T_a)-norm, the characteristic is
\[
W(a,\theta;z)=(z-i)\widehat v_+(z)+e^{i\theta}(z+i)\widehat v_-(z),
\]
whose zeros are exactly the real simple eigenvalues of the self-adjoint extension. For these windows C04's elementary shift coercivity gives (A_a\ge(c-L-8\sinh a)I>0), so λ=0 is admissible. The evaluation/Riesz identity makes (v_+=A_a^{-1}e^x) and (v_-=A_a^{-1}e^{-x}); reflection gives equal norms. Setting θ=π yields the minus sign in the S01 phase-π formula. This check distinguishes the differentiation spectrum from the bottom eigenvalue of the form.

In the finite basis, solving for (e^x) gives coefficient vector (r+iq); reflection gives (r-iq) for (e^{-x}). The Fourier transform of each basis function is a common nonzero factor times \(\operatorname{sinc}(s+\pi k)\). Therefore
\[
 (t-i)\widehat v_+(t)-(t+i)\widehat v_-(t)=2i(t I(s)-R(s)),\quad s=at,
\]
where (R,I) are the real and imaginary sinc sums. The script solves (s I(s)-aR(s)=0), exactly the same zeros after scaling by (a>0). This independently checks the sign used in the numerical characteristic. It is not a root-count argument.

The high-precision arithmetic script is `experiments/worker-s03-w01/displacement_prediction.py`; its complete output is `experiments/worker-s03-w01/s02-comparison.csv`. Reproduce with:

```sh
PYTHONDONTWRITEBYTECODE=1 python3 experiments/worker-s03-w01/displacement_prediction.py
```

It uses mpmath 1.3.0 at 35 decimal digits to assemble the rescaled one-dimensional integrals and solve the finite systems, then binary64 evaluation and SciPy `brentq` for sign-changing candidate roots. The three windows have no prime powers. At the largest reported cutoffs:

| a | cutoff | c(a)(a t1-π/2) | S02 limit | c(a)(a t2-3π/2) | S02 limit |
|---:|---:|---:|---:|---:|---:|
| e^-5 | 32 | 0.527832 | 0.925969 | 0.421405 | 0.837381 |
| e^-10 | 32 | 0.825965 | 0.925969 | 0.808402 | 0.837381 |
| e^-20 | 64 | 0.931497 | 0.925969 | 0.970947 | 0.837381 |

For the first root at (e^{-20}), the displacement agrees with the S02 limit to about 0.006 at (N=64). The second-root displacement remains about 0.134 high. Cutoff convergence is slow: from (N=48) to 64 at (e^{-20}), the first scaled displacement changes by 0.0277 and the second by 0.0813. At (e^{-10}), the N=24 to 32 changes are 0.0223 and 0.0643. At (e^{-5}), they are 0.0062 and 0.0171. Thus these data show a directionally consistent first-root comparison but do not isolate the asymptotic coefficient for the second root, and the (e^{-5}) window is too large for a small-error comparison.

The matrix integrals use 35-digit mpmath quadrature over scaled variable (u=t/L\in[0,1]), split at quarters; the integrands include removable endpoint values and stable `expm1` expressions. At (a=e^{-20},N=64), rerunning with 50 digits gave identical values at the 14 printed digits. This is a precision-stability check only: neither quadrature nor linear solves have rigorous enclosures. The root finder scans (s\in[0,6\pi]) at 8000 points and refines the first two sign changes. It does not rule out missed roots, nor does it bound finite Fourier error. No known zeta zeros are used.

## Final disposition

The independent phase and sign check agrees with Suzuki's local phase-π characterization and the lead's convention. The finite diagnostics support the S02 first-correction prediction for root 1 at the smallest window, with visible cutoff dependence; evidence for root 2 is not yet decisive. They are candidate zeros of finite approximants only. Exact-local error, validated arithmetic, rigorous root counts and an asymptotic remainder comparison remain open. This package gives no correction or counterexample to S01/S02.

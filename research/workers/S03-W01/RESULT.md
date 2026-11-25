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

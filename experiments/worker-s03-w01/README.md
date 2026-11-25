# S03-W01 finite small-window diagnostics

This directory contains two related non-certified diagnostics. Both use only the finite prime-free arithmetic form and no known-zero inputs. Neither proves an exact local root or a root count.

## Initial cutoff check

`small_window.py` tests the cosine scaling direction at `a=0.003, 0.001, 0.0003` for N=20,40,80, plus N=160 at `a=0.001`. The raw results are in `results.csv`. It uses Python 3.12.14, NumPy 2.3.5, SciPy 1.17.0, binary64 arithmetic, `quad` and `brentq`.

## Updated S02 comparison

`displacement_prediction.py` follows the refreshed main work order at `a=exp(-5), exp(-10), exp(-20)`, computes the first two sign-changing finite characteristic roots, and compares `c(a)*(a*t-s_n)` to `Si(2*s_n)/2`. Its output is `s02-comparison.csv`. Reproduce with:

```sh
PYTHONDONTWRITEBYTECODE=1 python3 experiments/worker-s03-w01/displacement_prediction.py
```

This script uses mpmath 1.3.0 at 35 decimal digits for scaled-variable integral assembly and finite solves, then binary64 for the scaled characteristic scan and SciPy root refinement. At `a=exp(-20), N=64`, a separate run at 50 digits matched all 14 printed digits. `quadrature-sensitivity.txt` records the initial experiment's separate tolerance comparison. These are numerical stability checks, not validated errors. The root scan finds sign changes only; finite-to-exact, quadrature, solve and asymptotic errors are not rigorously bounded.

The largest-cutoff first-root scaled displacement is 0.5278, 0.8260, 0.9315 at `a=exp(-5), exp(-10), exp(-20)`, compared with 0.9260 predicted. The second-root values are 0.4214, 0.8084, 0.9709, compared with 0.8374, and remain cutoff-sensitive. See `research/workers/S03-W01/RESULT.md` for derivation, source normalization check and limitations.

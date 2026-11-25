# S03-W01 small-window diagnostic

This is an independent binary64 check of Campaign V's cosine scaling limit using the finite arithmetic phase-pi characteristic. All selected windows satisfy `L=2a < log(2)`, so the prime-power sum is empty. No zeta zeros are inputs.

Run:

```sh
python3 experiments/worker-s03-w01/small_window.py
```

Environment: Python 3.12.14, NumPy 2.3.5, SciPy 1.17.0. The script assembles the finite Gram matrices from the subtracted diagonal integral and C02 divided-difference off-diagonal formula, solves the Riesz systems for `exp(+x)`, and locates the first sign-changing zero of the finite phase-pi scalar. It uses `scipy.integrate.quad` with absolute tolerance `2e-11`, limit 500, and `brentq` with the default `xtol=2e-12` set in the script. `cond_2` is NumPy's 2-norm condition estimate.

Results are raw in `results.csv`. They are first sign-changing candidate roots of finite characteristic functions, not certified zeros of the exact local characteristic. Finite-basis truncation, quadrature error, root scanning/isolation error, and exact asymptotic error are distinct. No validated error enclosure or root count is supplied. The finite N=20-to-80 change in `a*t` is about 0.012–0.016; changing the quadrature absolute tolerance from `2e-11` to `1e-13` at `a=0.001`, N=40 and 80 did not change the printed 14-digit roots, but this is a stability check rather than a rigorous quadrature bound.

The asymptotic target is `pi/2`. At N=80 the scaled roots at N=80 are 1.79368, 1.74885 and 1.71670 for `a=0.003,0.001,0.0003`, with absolute offsets 0.22289, 0.17805 and 0.14590. They trend toward `pi/2` as the window shrinks, but are still far from it and move with N. This is consistent with a slow small-a limit and illustrates that the lead's coarse `O(1/log(1/a))` theorem is not a useful finite-window error bar. At `a=0.001`, N=80 to 160 changes `a*t` by another 0.00201. The three windows do not independently determine a second-order coefficient.

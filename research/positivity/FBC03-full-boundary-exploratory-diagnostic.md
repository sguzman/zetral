# FBC03 — Exploratory full-boundary compression scan

2026-11-25. Float64 research diagnostic only; it is not an outward-rounded certificate. No RH assumption, actual negative restored eigenvalue, priority claim, or independent verification.

The script `experiments/fbc03-full-boundary-float-exploration.py` forms full-boundary scalar entries from the FBC01 F_eta identity, using 4096 explicit rates and the mesh integral as a midpoint approximation for the omitted nonexponential tail. It includes the exact first-prime cosine overlaps, pole, and the Neumann lower comparison. For each parity, W_b is the first four low physical modes and W_p is the first eight modes. It retains the full boundary positive compression E K W_b (W_b* K W_b)^-1 W_b* K E and the positive prime compression E Z W_p (W_p* Z W_p)^-1 W_p* Z E. Trial coefficients are selected by a float64 solve. The prime and full-boundary n^-1 leading terms are combined with explicit smooth remainders, but the tail constants and finite matrix are not interval-enclosed.

Run with Python 3, NumPy and SciPy:

```sh
python3 experiments/fbc03-full-boundary-float-exploration.py
```

Raw output is in `experiments/results/fbc03-full-boundary-float-exploration.json`.

## Result and interpretation

For h=0.8, 0.85 and 0.9, the odd comparison remains numerically positive after the tail. The even comparison has positive finite Schur minima but the float tail allowance is larger: after-tail values are -0.0004512, -0.0005582 and -0.0008150. These are failed sufficient comparisons, not negative eigenvalues. In particular, this simple choice of four boundary columns did not reproduce the prior LPE03 h=4/5 certificate; the full-boundary compression retains exact low and cross columns, but its selected high correction and residual tail were too conservative here.

Adding more high modes to W_b made the double-precision Gram solve ill-conditioned, so that route did not produce interpretable coefficients. This is a solver-conditioning observation, not a mathematical obstruction. A useful next step is a better-conditioned rational trial construction that targets cancellation of the combined boundary and prime leading coefficients before interval evaluation. FBC02 scalar intervals are available for replacing the exploratory full-boundary entries, but a rigorous full-boundary positivity test has not yet been achieved.

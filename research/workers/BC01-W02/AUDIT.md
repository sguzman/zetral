# BC01-W02 — independent exact audit of the h=12/5 high-mode guard

Date: 2026-11-25 UTC. Baseline `58c4bc808fe5e930a613cf65bb85f02f7d964c09` (Campaign LXIV BC03 checkpoint). AI-assisted exact-arithmetic audit; no formal verification or independent derivation of the full spectral comparison is claimed.

## Result

The stored guard is valid at lowCount 41. A separate Python standard-library verifier independently encloses all three endpoint slacks and all 20 parity/index guard intervals reported for lowCount 41–50. The even lower guard at its first retained index `n=82` is positive (about `0.07597313675`); the odd lower guard at its first retained index `n=83` is positive (about `0.08809713326`).

For fixed `h=12/5`, coefficient bound `B=2762/1000`, and fixed lowCount `L`, the guard has the form
\[
g_e(n)=\log\!\frac{n}{2h}-\frac{3h^2}{2\pi^2 n^2}-B,
\qquad
g_o(n)=g_e(n)-\frac{4\cosh^2(h/4)h^4}{3h(2L)^3\pi^4}.
\]
The odd subtraction is constant in the high index `n` at fixed low cutoff `L`. Therefore, for either parity,
\[
g'(n)=\frac1n+\frac{3h^2}{\pi^2n^3}>0\quad(n>0).
\]
The first retained index in each parity is its minimum, so the two positive lower bounds at 82 and 83 prove positivity for every later same-parity high index. This is a guard on the high-mode complement; it does not certify the finite matrix or the complete quadratic form.

## Independent interval arithmetic

`experiments/worker-BC01-W02/verify_guard.py` uses exact `Fraction` arithmetic. It bounds `pi` from Machin's identity with two alternating arctangent series; each remainder is bounded by the magnitude of the next term. It bounds logarithms by dyadic reduction and the atanh series, with the positive geometric remainder
\[
\frac{2r^{2N+1}}{(2N+1)(1-r^2)},\quad r=(y-1)/(y+1),\quad 1\le y\le2.
\]
It bounds `cosh(3/5)` by its positive Taylor series and a geometric bound on the remaining terms. Exact interval operations then reconstruct the three endpoint slacks and every guard value. Each raw interval contains the corresponding independently derived interval, and each raw lower endpoint is positive.

Reproduce from repository root:

```sh
python3 experiments/worker-BC01-W02/verify_guard.py
```

Observed output: `3/3 endpoint slacks; 20/20 guard intervals`; first retained indices 82 and 83 are positive; strict monotonicity extends those minima to all later indices.

## Inputs and limits

- Guard source commit `204d897c96ef3385e5787943509f133906076221`; blob `0c84cef42c43d12a0a40bc80deca5021e9d1bb63` (`experiments/bc01-guard-probe.js`).
- Raw output commit `71bd404aa713b75b9f608d97c7ab59d90c59189f`; blob `9855324299ab059ef0d49b2f4141a4d17a8e14c1` (`experiments/results/bc01-12-5-guard.json`).
- Regime generator blob `e5de03cc7ebba9309ad15d6fa313f823aee7c18b` (`experiments/bc01-log13-regime.js`).

The audit checks the reported guard arithmetic and its monotonic extension for the selected support. It does not certify the BC02/BC03 finite comparison, tail allocation, inherited operator normalization, RH, or a new candidate frontier. No discrepancy was found in scope.

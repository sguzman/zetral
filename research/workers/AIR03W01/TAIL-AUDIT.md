# AIR03W01 — independent midpoint-tail audit

## Finding

The common `126/R^9` allowance in `experiments/air03-refined-em-replay.js` is valid for both rational rate kernels, under the implemented domain `x >= 0`, `R > 0`. The code also adds a separate geometric term `Et`; it must remain present. This checks the analytic tail allowance used by AIR03 and does not review the full positivity certificate.

## Derivation

Set `f_x(t)=1/(t^2+x)` and `g_x(t)=t^2/(t^2+x)^2`. Exact differentiation, with `y=x/t^2 >= 0`, gives

```
f_x^(8)(t) = 8! t^-10 (y-3)(y^3-33y^2+27y-3)/(1+y)^9,

g_x^(8)(t) = -8! t^-10 (4y^5-185y^4+900y^3-966y^2+240y-9)/(1+y)^10.
```

The exact sparse-polynomial recurrence and coefficient comparison are in `experiments/air03w01-tail-bound.py`. For the first kernel,

```
|(y-3)(y^3-33y^2+27y-3)|
 <= (y+3)(y^3+33y^2+27y+3)
 <= 99(1+y)^4,
```
so `integral_R^infinity |f_x^(8)(t)| dt <= 8!*11/R^9`.

For the second kernel, termwise maximization gives

```
sup_{y>=0} |P(y)|/(1+y)^10
 <= sum_{k=0}^5 c_k k^k (10-k)^(10-k)/10^10
 = 33758608193/1250000000 < 28,
```
where `P` has absolute coefficient list `(9,240,966,900,185,4)` and the `k=0` maximum is 1. Therefore `integral_R^infinity |g_x^(8)(t)| dt < 8!*(28/9)/R^9`.

The midpoint Euler–Maclaurin remainder at mesh 2, after the B6 correction, is bounded by `2^7 ||B8||_infinity/8!` times this derivative integral. The Bernoulli Fourier series gives `||B8||_infinity <= 1/30`. The code's exact coefficient `43/201600 = 258/(30*8!)` is larger than `2^7/(30*8!) = 128/(30*8!)`, so it is conservative. Multiplication yields exact remainder coefficients `473/5 = 94.6` for `f_x` and `1451620152299/56250000000 < 26` for `g_x`, both below 126.

The separately coded exponential tail satisfies, for `q_j=e^(-h r_j)`, `r_j >= r_J > 0`, `h>0`, and `x>=0`,

```
sum_{j>=J} q_j/(r_j^2+x) <= sum q_j/r_j^2
 <= e^(-h r_J)/(r_J^2 (1-e^(-2h))) = Et,
```
and the same bound applies to `q_j*g_x(r_j)` because `g_x(r)<=1/r^2`. Thus adding `Et` to both `Ferror` and `Derror` covers the exponential weighted parts.

## Exact check

Command: `python experiments/air03w01-tail-bound.py`

Output:

```
PASS: exact midpoint EM coefficient dominates standard B8 remainder bound
PASS: base-kernel remainder coefficient = 473/5 = 94.6 < 126
PASS: derivative-kernel remainder coefficient = 1451620152299/56250000000 = 25.806580485315557 < 26 < 126
PASS: derivative sup sum = 33758608193/1250000000 = 27.0068865544
```

The check uses `Fraction` arithmetic for the sparse differentiation, polynomial coefficients, extrema bounds, and remainder coefficients. Floating-point values above are display only. The script is an audit aid, not a formal proof assistant artifact.

## Scope and status

- Checked: exact differentiation identities; the derivative integral bounds for all `x>=0`; the midpoint remainder coefficient comparison; the geometric `Et` inequality and its shared applicability to `f_x` and `g_x`.
- Not checked: all AIR03 analytical formulas, primality/logarithm interval generation, saved trial verification, or the final Bareiss/positivity computation. The bounded scope was the rate-tail allowance only.
- Classification: mathematical derivation plus exact rational algebra; AI-assisted; no independent human review, Lean proof, or external source audit. No RH conclusion or novel-priority claim.

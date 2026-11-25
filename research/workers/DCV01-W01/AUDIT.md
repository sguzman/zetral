# DCV01-W01 — Independent audit of the rational periodic benchmark

Date: 2026-11-25 UTC. Scoped audit of `research/positivity/DCV01-rational-periodic-benchmark.md`. No RH, novelty, formal verification, or human-review claim.

## Scope and imported assumptions

I checked the sharp cutoff periodization and corrected archimedean series, rational mode lower bounds, finite negative-index cutoff, and trace certificate. I independently recomputed the integer table and final rational gap using Python arbitrary-precision integers. The NIR04 kernel identity, CPC04 periodization framework, and CPC03 bound \(\alpha(0)>-6\) are treated as imported. This is an analytic/exact-arithmetic audit, not a Rust execution or an inverse-Gram certificate.

## Cutoff and symbol formula

Although \(\mathbf1_{[-L,L]}\) is not smooth, its product with the singular distribution \(D_\alpha\) is well defined by leaving \(D_\alpha\) unchanged near zero and subtracting its ordinary off-origin tail. With \(D_\alpha=-k\) off zero, this corrected compactly supported distribution adds \(+\mathbf1_{|x|>L}k(|x|)\) to the original inverse transform. Its Fourier correction is therefore \(+2\int_L^\infty k(x)\cos(tx)dx\), with the sign in the note. The cutoff pole term is integrable; endpoint values do not affect its distribution. Since \(2A<L\), the support autocorrelation does not meet the periodized copies, so the diagonal Fourier-series identity remains exact. At \(L=1/4\), \(t_n=4\pi n\) and the pole coefficient is
\[
H_n=\frac{2(-1)^n\sinh(1/8)}{t_n^2+1/4}.
\]

Expanding \(k(x)=\sum_{j\ge0}e^{-r_jx}\), \(r_j=2j+1/2\), the corrected archimedean symbol is
\[
\alpha(0)+2\sum_{j\ge0}\left[\frac1{r_j}-
\frac{r_j(1-(-1)^ne^{-r_jL})}{r_j^2+t_n^2}\right],
\]
The summand is nonnegative by its integral representation, and the sum converges after this cancellation. For \(n=0\), the archimedean correction and \(H_0\) are nonnegative, so \(S_0\ge\alpha(0)>-6\).

## Rational mode bounds and independent recomputation

For \(|n|\ge1\), \(t_n^2\ge144n^2\) from \(\pi>3\). In each archimedean summand, write \(d_j=2r_j=4j+1\). Since \(1-(-1)^ne^{-r_jL}\le2\), its lower bound is
\[
\frac{4(4t_n^2-d_j^2)}{d_j(d_j^2+4t_n^2)}.
\]
The expression is increasing in \(4t_n^2\); each negative lower bound can be replaced by zero because the exact summand is nonnegative. Also \(2\sinh(1/8)<1\), so the negative pole contribution is no smaller than \(-1/(144n^2)\). This gives the rational lower bound stated in DCV01. Its terms, positive-part operation, and monotonicity in \(|n|\) are all preserved by taking floors on positive contributions and subtracting the ceiling on the error term.

I recomputed the table with arbitrary-precision integer arithmetic using the stated formula, \(Q=10^6\), and \(j=0,\ldots,63\). Exact output was:

```text
n=0: B=-6000000, deficit=6500000
n=1: B=-681065, deficit=1181065
n=2: B=17413, deficit=482587
n=3: B=423868, deficit=76132
n=4: B=711898, deficit=0
weighted deficit U=9979568
gap numerator=246020432; denominator=512000000
```

The weighted sum is \(6500000+2(1181065+482587+76132)=9979568\). Since \(B_4=711898>Q/2=500000\) and \(B_n\) is nondecreasing for \(n\ge1\), every mode \(|n|\ge4\) has \(S_n\ge\mu\). Thus the seven modes \(-3,\ldots,3\) cover the full deficit set; no assertion about the exact sign of each such mode is needed.

## Trace certificate

Parseval gives \(\sum_n|c_n|^2=\|f\|_2^2\), and Cauchy–Schwarz on \((-A,A)\) gives \(|c_n|^2\le(A/L)\|f\|_2^2=(1/512)\|f\|_2^2\). Therefore
\[
q_A(f)\ge\left(\frac12-\frac{9979568}{512000000}\right)\|f\|_2^2
=\frac{246020432}{512000000}\|f\|_2^2
=0.48050865625\|f\|_2^2>\frac{12}{25}\|f\|_2^2.
\]
The rational cross-multiplication is \(25\cdot246020432>12\cdot512000000\). This sufficient constant-baseline trace test extends by the stated form core. It is not an evaluation of the exact inverse Gram matrix and does not prove a general-window or RH result.

No flaw found in the cutoff, rational lower bounds, mode cutoff, or exact integer certificate under the imported analytic inputs. The arithmetic table is independently reproduced; this does not validate the future Rust implementation or establish the mathematical source identities.

## Reproduction record

- Parameters: \(A=1/2048\), \(L=1/4\), \(\mu=1/2\), \(Q=1{,}000{,}000\), 64 summands.
- Method: Python integer division with outward floors/ceilings; no floating-point arithmetic in the certificate values.
- No Rust compiler, inverse solve, or interval arithmetic was run in this audit.

The integer table calculation was:

```python
Q = 1_000_000
rows = []
for n in range(5):
    B = -6 * Q
    if n:
        for j in range(64):
            d, x = 4*j + 1, 576*n*n
            top, bottom = 4*(x-d*d), d*(d*d+x)
            if top > 0:
                B += Q*top // bottom
        den = 144*n*n
        B -= (Q + den - 1) // den
    deficit = max(0, Q//2 - B)
    rows.append((n, B, deficit))
U = rows[0][2] + 2*sum(row[2] for row in rows[1:])
```

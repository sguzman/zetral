# PPE01 — Reflected cross-form decay for high-carrier packets

Status: READY_FOR_REVIEW

AI-assisted candidate deduction, unconditional conditional on FES02's imported packet and growth bounds. No fresh literature retrieval, numerical work, formal verification, independent human review, or priority claim. No anomalous ordinary state is exhibited.

## 1. A reflected cross-form estimate

Let (R f(x)=f(-x)). Suppose a unit packet has the form
\[
v(x)=e^{-i\omega x}u(x),\qquad \|u\|_2=1,
\]
and its demodulated envelope obeys the fixed relative moment bound
\[
M_p(u):=\int_{\mathbb R}(1+h|\xi|)^p|\widehat u(\xi)|^2d\xi\le M
\]
for some fixed (h>0,p>2), with Fourier normalization absorbed into (M\). The reflected packet has opposite carrier: (Rv(x)=e^{i\omega x}u(-x)\).

For every shift (s\), Plancherel expresses the cross translation integral, up to a unit phase, as a convolution of \(\widehat u(\xi)\) and \(\widehat u(-2\omega-\xi)\). At least one factor has frequency magnitude at least \(|\omega|\). Splitting at that threshold and using the moment bound gives the uniform estimate
\[
\left|\int v(x+s)\overline{Rv(x)}\,dx\right|
\le 2\sqrt M(1+h|\omega|)^{-p/2}.
\]
The same argument with no shift yields
\[
|\langle v,Rv\rangle|\le 2\sqrt M(1+h|\omega|)^{-p/2}.
\]

The prime-shift part of the arithmetic form is a sum of such translations with total coefficient mass
\(\sum_{n\le e^{2A}}\Lambda(n)n^{-1/2}\le C e^A\), (A=a+h\). Hence
\[
|q_{P_A}(v,Rv)|\le C_p e^A\sqrt M(1+h|\omega|)^{-p/2}.
\]
For the pole, use its rank-two kernel (2\cosh((x-y)/2)\). Its defining vectors are (e^{\pm x/2}1_{[-A,A]}(x)\), whose Fourier tails satisfy
\(\|1_{|\xi|>T}\widehat{(e^{\pm x/2}1_{[-A,A]})}\|_2\le C e^{A/2}T^{-1/2}\).
Splitting the pairing at \(|\xi|=|\omega|/2\) gives
\[
|q_{H_A}(v,Rv)|\le C e^A\left(\sqrt M(1+h|\omega|)^{-p/2}+(1+|\omega|)^{-1/2}\right)^2.
\]

The archimedean cross term is
\[
q_\alpha(v,Rv)=\int \alpha(t)\widehat u(t-\omega)\overline{\widehat u(-t-\omega)}\,dt.
\]
Split at \(|t-\omega|=|\omega|\). On one side the first envelope is in its moment tail; on the other the reflected envelope is. Since \(|\alpha(t)|\le C+\log(2+|t|)\), the moment bound absorbs the logarithm at the cost of half the power. For fixed (p>2),
\[
|q_\alpha(v,Rv)|\le C_{h,p,M}(1+\log(2+|\omega|))(1+h|\omega|)^{-p/4}.
\]
Thus the combined reflected cross term has the explicit bound
\[
|q_A(v,Rv)|\le C_{h,p,M}\!\left[e^A(1+h|\omega|)^{-p/2}
+e^A\left((1+h|\omega|)^{-p/2}+(1+|\omega|)^{-1/2}\right)^2
+(1+\log(2+|\omega|))(1+h|\omega|)^{-p/4}\right]. \tag{1}
\]
Constants are uniform in (a,\omega\) when (h,p,M\) are fixed. The estimate uses the full-line translation representation of the prime form; it does not insert a sharp physical interval cutoff into the oscillatory integral.

## 2. Consequence for the FES02 near-limsup packet

Let (N(a)=-\lambda_1(A_a)>0), and assume the FES02 setting in which
\[
S=\limsup_{a\to\infty}\frac{\log N(a)}a>2B,
\]
with (B=\sup|\Im z|\). FES02 selects windows (a_\ell\) and unit packets (v_\ell=e^{-i\omega_\ell x}u_\ell\) in a fixed expansion (A_\ell=a_\ell+h\), with (q_{A_\ell}(v_\ell)\le-N(a_\ell)/2\) and a bounded relative moment (M_p(u_\ell)\le M\). Its escape estimate gives, for every fixed (0<\delta<S-2B\) eventually,
\[
\log(2+|\omega_\ell|)\ge \exp(\delta a_\ell)-O(1).
\]
Also FES02's carrier upper bound gives \(\log(2+|\omega_\ell|)=O(e^{a_\ell})\). Therefore every term on the right side of (1) is (o(N(a_\ell))\): the prime/pole factors contain (e^{A_\ell}\) times a negative fixed power of a doubly exponential carrier, while the archimedean term has only an additional logarithm and a negative fixed power of that carrier.

The reflection (R) commutes with the ordinary Weil form. From (1) and the norm estimate,
\[
q_{A_\ell}(v_\ell\pm Rv_\ell)=2q_{A_\ell}(v_\ell)+o(N(a_\ell)),\qquad
\|v_\ell\pm Rv_\ell\|^2=2+o(1).
\]
The even and odd projections are nonzero for large \(\ell\), and each has negative Rayleigh depth at least \((1-o(1))N(a_\ell)/2\). Since \(\log N(a_\ell)/a_\ell\to S\) and (A_\ell-a_\ell=h\) is fixed, both parity bottom depths have the same exponential rate (S\). Their rates cannot exceed the full bottom rate, so the parity and full bottom exponents agree whenever the FES02 hypothesis (S>2B\) holds.

This is a conditional implication from a hypothesized anomalous exponent; FES02 does not establish that such an exponent exists. The result concerns only the bottom exponent, not a whole negative subspace or subexponential parity prefactors.

## Limits

- The constants in (1) depend on the fixed moment order, support expansion, and moment bound.
- The proof relies on FES02's near-limsup selection and high-carrier lower bound; those are imported candidates and were not independently re-proved here.
- No RH conclusion, actual high-carrier packet, nonreal zero, anomalous state, or parity equality below exponential scale is claimed.

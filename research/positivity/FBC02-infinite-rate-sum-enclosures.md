# FBC02 — Infinite scalar boundary-rate enclosures and explicit tails

2026-11-25. AI-assisted derivation and executed outward-rounded interval experiment. No RH assumption, independent human/formal verification, or priority claim.

## Tail bounds

Set r_j=2j+1/2 and a=r_J. For x=omega^2>=0, split
\[
F_\eta(x)=\sum_{j<J}\frac{1-\eta e^{-r_jh}}{r_j^2+x}+T_0(x)-\eta T_e(x),
\]
where T_0 sums 1/(r_j^2+x) over j>=J and T_e sums e^{-r_jh}/(r_j^2+x). The summand f(r)=1/(r²+x) is positive decreasing on [a,infinity), on a mesh of spacing 2. Integral comparison gives
\[
\frac12\int_a^\infty f(r)dr\le T_0(x)\le f(a)+\frac12\int_a^\infty f(r)dr.
\]
For x>0, the half-integral is atan(omega/a)/(2 omega); at x=0 it is 1/(2a). The exponential tail obeys
\[
0\le T_e(x)\le \frac{e^{-ah}}{(a^2+x)(1-e^{-2h})}.
\]
For eta=+1 subtract this upper endpoint from the lower T_0 endpoint; for eta=-1 add it to the upper T_0 endpoint. These give direct enclosures of F_eta without summing an operator-norm tail.

For the diagonal rate entry use g_x(r)=r²/(r²+x)². Once a>=omega this is decreasing. Its integral tail has half-integral
\[
\frac{\atan(\omega/a)}{4\omega}+\frac{a}{4(a^2+\omega^2)}
\]
for omega>0, and 1/(2a) at omega=0. Bound its mesh sum between this half-integral and that value plus g_x(a). The exponential correction is at most the same geometric numerator bound above, because r²/(r²+x)²<=1/(r²+x). Thus the diagonal K_nn series has a tight positive tail enclosure once J exceeds the largest selected frequency. This avoids cancellation in F+xF' on the diagonal.

## Executed scalar benchmark

Source `experiments/fbc02-infinite-rate-enclosures.js` uses outward-rounded BigInt intervals at scale 10^18, J=4096, h=4/5, and Machin pi. The atan remainder is alternating with its next term as an upper bound; exp(-x) uses halving, an alternating Taylor enclosure, and repeated squaring. The sqrt(2) endpoint interval is checked by exact integer squaring. Reproduce with:

```sh
node experiments/fbc02-infinite-rate-enclosures.js
```

Raw integer endpoints are in `experiments/results/fbc02-infinite-rate-enclosures.json`. For n=0,1,4,16,64,256,512 the even and odd F_eta values and K_nn entries are enclosed. Representative diagonal entry intervals are:

- n=0, even: [3.987251912676209992, 3.987251949924576413]; odd: [17.509409493206280987, 17.509409530454647405].
- n=64, even: [0.007812460342226234, 0.007812534698935011]; odd: [0.007812465138372839, 0.007812539495081616].
- n=512, even: [0.000976529360592774, 0.000976595633416976]; odd: [0.000976529361764399, 0.000976595634588601].

Representative off-diagonal intervals (even parity) include K_(0,8) in [0.086282234880405803,0.086282287556775938], K_(8,32) in [0.024999335533854524,0.024999419944719776], and K_(64,256) in [0.003124958219168314,0.003125041465324186]. These entries use the FBC01 partial-fraction formula; the direct positive diagonal series is used for n=k.

This establishes a practical scalar interval route for constructing the finite full-boundary Gram and low/high columns. It is not itself a positivity test. The omitted-tail interval width is controlled by the first nonexponential mesh term, about 1/a², while the exponential tail is negligible at this J and h. The next step is to feed these entry enclosures into the full-column compression test and combine its high-mode residual with the localized-prime n^-1 cancellation from LPE02. No full-boundary positivity certificate is claimed here.

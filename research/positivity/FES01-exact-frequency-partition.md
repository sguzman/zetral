# FES01 — Exact frequency partition for the paired Weil form

2026-11-25. Internal candidate deduction without RH. Uses GSG01's unconditional paired-zero identity, NIR04's log form domain, and elementary Fourier-series Parseval. No independent human/formal/numerical verification or priority claim. This turn's actual prior-art search returned Suzuki arXiv:2606.09096 abstract and Schubr, Frequency Localization for Weil Operator Certificates, edition 2, 2026-10-26, https://research.luminaryoddities.org/frequency-localization-weil-operator-certificates/v/2 (abstract and scope, lines 32–35,74). The latter concerns frequency-block enclosures for a constrained theta-weighted operator; no full manuscript comparison or claim that its construction is equivalent to ours. The paired formula is imported from previously inspected GSG01, not a new full-text source inspection.

## 1. Compact-support tight window

Let h>0 and eta be a real even C_c^infty(-1,1) function of L2 norm one. Set eta_h(x)=h^(-1/2) eta(x/h), omega_n=pi n/h, n in Z. Define
    p_n(x)=(2h)^(-1/2) eta_h(x) exp(-i omega_n x),
    W_n(z)=F[p_n](z)=2^(-1/2) F[eta](h z-pi n),
    P_n f=p_n*f,
using F[f](z)=int f(x)exp(izx)dx. For f compactly supported in (-a,a), each P_n f has support in (-a-h,a+h) and is smooth even when f is only L2. Physical support expansion is at most h on each side, independent of the carrier n. No Fourier compact support is claimed.

For complex z and w, W_n(z) is the nth Fourier coefficient of eta_h(x)exp(izx) in the normalized Fourier basis on (-h,h). Parseval and polarization give the exact identity
    sum_n W_n(z) conj(W_n(w)) = int_{-h}^h eta_h(x)^2 exp(i(z-conj(w))x) dx.   (1)
The series converges absolutely by Cauchy-Schwarz on Fourier coefficient sequences. In particular
    sum_n |W_n(t)|^2=1 for real t,
    sum_n W_n(z) conj(W_n(conj z))=1 for all complex z,
    sum_n |W_n(z)|^2 <= exp(2h|Im z|).
Also W_n is real on the real axis by the real-even window. Thus sum W_n(z)^2=1 everywhere, with local normal convergence (see section 3). This is the appropriate holomorphic partition identity, not sum |W_n(z)|^2=1 off the real line; the latter is generally false.

## 2. Exact quadratic and bilinear decompositions

By Plancherel and Tonelli,
    sum_n ||P_n f||_2^2=||f||_2^2,
    sum_n L(P_n f)=L(f),
where L(f)=(2pi)^(-1) integral [1+log(2+|t|)] |F[f](t)|^2 dt. Polarization gives the L2 inner-product identity for f,g. The same holds for any nonnegative measurable Fourier weight in place of the logarithmic weight, in the extended sense for quadratic norms.

For compact smooth f,g use the unconditional Weil paired sum q(f,g)=sum_z m_z F[f](z) conj(F[g](conj z)) over the distinct complex ordinates. Multiplicity symmetry, strip |Im z|<=1/2 and Schwartz decay of the two transforms along horizontal directions give absolute convergence. On each ordinate (1) yields
    sum_n |W_n(z) conj(W_n(conj z))| <= exp(2h|Im z|)<=exp(h).
Thus the sum over both n and z of absolute values of m_z F[f](z)conj(F[g](conj z))W_n(z)conj(W_n(conj z)) is finite, bounded by exp(h) times the original absolutely summed pair magnitudes. Fubini and the second identity of (1) prove
    q_a(f,g)=sum_n q_(a+h)(P_n f,P_n g).                    (2)
No RH assumption; every term on the right is the same global paired form on a larger physical window, not a modulated or truncated-prime surrogate.

To extend (2) to the closed form domain V_a, use the compact smooth form core and equivalence of its form norm with L^(1/2) at fixed a. P_n maps V_a to V_(a+h), with sum of output L norms squared equal to input L. The boundedness of the closed sesquilinear form on V_(a+h) in that norm and Cauchy-Schwarz give absolute summability of the right side and continuity of the summed bilinear form:
    sum_n |q_(a+h)(P_n f,P_n g)| <= C_(a+h) sqrt(L(f)L(g)).
The equality follows from smooth approximation in V_a. No assertion that every zero-sum on a nonsmooth domain vector converges absolutely is needed. In fact the sampling-norm partition separately gives sum_n ||V(P_n f)||_K^2<=exp(h)||V f||_K^2 whenever V f is in the positive sample space K, but this extra hypothesis is not needed for (2).

The frame reconstruction f=sum_n P_n^* P_n f holds on the full line, where P_n^* is the L2 adjoint convolution and its Fourier symbol is conj(W_n(t)). Finite exhausting partial sums converge in L2 and, when finite, L by dominated convergence since their symbols lie between zero and one and tend pointwise to one. Each summand expands support by at most 2h, but the limit equals the original f.

## 3. Uniform carrier concentration

For real u and |v|<=1/2, integration by parts in the fixed smooth eta gives, for every integer j>=0,
    |W_n(u+iv)| <= C_(j,h)(1+|hu-pi n|)^(-j).
For real t, C_(j,0) can be chosen independent of h by the scaling formula above. These bounds prove locally normal convergence of the complex identities, since the carrier lattice is discrete and the constants can be made uniform on each compact imaginary strip.

For every p>=0 there is a finite C_p depending only on eta,p such that
    sup_{s in R} sum_n (1+|s-pi n|)^p |F[eta](s-pi n)|^2/2 <= C_p.
Indeed choose j with 2j-p>1 and use uniform summability of (1+|s-pi n|)^(-(2j-p)), reducing s modulo pi. Define carrier-relative packet energy
    E_(p,h,n)(f)=(2pi)^(-1) integral (1+h|t-omega_n|)^p |F[P_n f](t)|^2 dt.
Tonelli then gives
    sum_n E_(p,h,n)(f)<= C_p ||f||_2^2.                    (3)
In particular for every D>=0,
    sum_n (2pi)^(-1) integral_{|t-omega_n|>=D} |F[P_n f](t)|^2 dt
       <= C_p (1+hD)^(-p) ||f||_2^2.
For any fixed h, this yields a finite uniform aggregate bound on any polynomial carrier-relative moment; the packet transforms need not be strictly bandlimited. The constants need not be uniform as p increases. The same weighted summability on bounded imaginary strips, with constants depending on h, follows by integration by parts against eta(x) exp(-hv x).

## 4. Consequence and exact limitation

For a nonzero f with q_a(f,f)<0, (2) implies at least one packet has negative q in the expanded window; indeed q_a(f,f)/||f||^2 is the weighted average of the packet Rayleigh quotients with nonzero packet masses as weights. For every epsilon>0 some packet quotient is at most the original quotient plus epsilon. This is a bottom-level statement, not a k-dimensional minmax transfer. Equation (3) controls aggregate relative moments but not each normalized packet uniformly: a packet with tiny L2 mass can have large relative moments after normalization. Also fast-pair constraints from NIR03 are generally NOT preserved by P_n: if F[f](z)=F[f](conj z), the two window factors may differ. These are actual obstructions to a naive indexed escape argument. We have not shown that negative energy is confined to bounded carriers, or excluded the frequency escape of NIR04.

FES01 complete as internal candidate. FES02 next: exploit (3), the archimedean symbol and the bounded arithmetic remainder to derive carrier-resolved coercivity and a weighted packet selection principle. Investigate boundary expansion and indexed minmax without assuming constraints survive filtering. No RH proof, novelty claim or independent verification. README unchanged.

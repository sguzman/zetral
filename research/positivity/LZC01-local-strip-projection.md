# LZC01 — High-carrier local complex zero measures and their exact strip projection

2026-11-25. AI-assisted candidate deduction without RH. Uses the project's inherited paired/arithmetic Weil form, classical local zero count, and an elementary positive strip kernel derived below. No actual nonreal zero, numerical experiment, independent verification or priority claim. This is a theorem about subsequential local measures at fixed test support, not ordinary spectral convergence on expanding windows.

Use z=u+iv=(rho-1/2)/i with multiplicity m_z, |v|<1/2; the ordinate set is invariant under complex conjugation. Allow deletion of any fixed finite reflection-invariant nonreal subset, and write q_rem for that paired form. Its remaining deviations lie in [-b,b], with b<=1/2. Define the high-carrier measure on R times [-b,b],
    mu_T=(1/L_T) sum_(remaining z) m_z delta_(u-T,v),
    L_T=log(2+|T|).
We let |T|->infinity, with either sign of T allowed.

## 1. Positive local compactness with uniform test tails

For each integer k the classical count gives
    mu_T([k,k+1) times [-b,b])
        <= C log(2+|T+k|)/L_T
        <= C'[1+log(2+|k|)]
for |T|>=1. The last inequality follows from the elementary product bound for 2+|T+k|. Hence every sequence |T|->infinity has a vaguely convergent subsequence on the strip, by local bounded mass and the usual diagonal extraction of positive Radon measures on compact exhaustion. The limit mu is positive and symmetric under v->-v. Moreover its mass on any unit horizontal interval is bounded by an absolute constant independent of the interval: for each fixed k the initial ratio of logs tends to one, and apply the vague convergence bound on a slightly larger open interval before passing to the limit. Thus the limit is translation bounded in the horizontal direction. Finite deletion has no effect on the limiting measures.

For any continuous test with absolute bound C_p(1+|u|)^(-p), uniformly in |v|<=b, p>2, the above initial bin bound provides a uniformly summable tail. Vague convergence therefore implies convergence of its integrals. No tightness of the total infinite mass is asserted.

## 2. Exact analytic test identity in every local limit

For fixed compact smooth f,g on R, use a single physical window containing both supports. Put f_T(x)=exp(-iTx) f(x), g_T likewise, so their Fourier evaluations at z are Ff(z-T), Fg(z-T) with the project's +itx Fourier convention. The paired formula gives exactly
    q_rem(f_T,g_T)/L_T
       = int Ff(u+iv) conj(Fg(u-iv)) dmu_T(u,v).
The integrand is continuous with arbitrarily rapid horizontal decay on the strip by integration by parts, so it passes to the vague limit by section 1.

On this FIXED physical window, the bounded arithmetic part and finite deletion contribute O_(f,g)(1)/L_T. The archimedean symbol satisfies alpha(t)=log(2+|t|)+O(1). The elementary log shift inequality
    |log(2+|T+t|)-L_T|<=log(1+|t|)
and rapid decay of the fixed Fourier transforms give
    q_rem(f_T,g_T)/L_T -> <f,g>_2
by Plancherel. Therefore every subsequential local limit satisfies
    int Ff(u+iv) conj(Fg(u-iv)) dmu(u,v)=<f,g>_2.       (1)
In particular the normalized paired form on fixed envelopes is exactly the ordinary inner product, regardless of possible off-line mass.

For any h in C_c^infty(R), let g_e be a real even normalized smooth approximate identity of support shrinking to zero. The convolution h*g_e converges to h in all C^j norms with supports in a common compact interval. Its entire transform is Fh(z) conj(Fg_e(conj z)); by (1) the integral against mu equals (h*g_e)(0). The uniform rapid strip decay from the common supports and derivative convergence, together with the translation bound on mu, permits passage to the limit. Hence
    int Fh(u+iv) dmu(u,v)=h(0), h in C_c^infty(R).    (2)
This identity uses all complex strip coordinates, not only the real marginal. By conjugation symmetry its left side equals the integral of int h(s) exp(ius) cosh(vs) ds against mu, interpreted with the rapid horizontal decay; the infinite mu integral is not interchanged with an unregularized nonintegrable plane-wave integral.

## 3. Elementary positive strip projection

Choose any c>b with c>0. Define on the real line
    Q_(c,0)(x)=(1/(2c)) sech(pi x/(2c)),
    Q_(c,v)(x)=[Q_(c,0)(x+iv)+Q_(c,0)(x-iv)]/2, |v|<=b.
The analytic extension has no pole in |Im x|<c. Writing X=pi x/(2c), Y=pi v/(2c), the real part of sech(X+iY) is
    cosh X cos Y / [cosh^2 X - sin^2 Y].
It is strictly positive since |Y|<pi/2. Thus Q_(c,v) is a real positive kernel, even in x and v, with uniform exponential horizontal decay for |v|<=b<c.

For completeness its Fourier multiplier is
    F[Q_(c,v)](s)=cosh(vs)/cosh(cs).                 (3)
The base transform follows from the elementary contour integral int_R exp(ikx)/cosh x dx: shift the contour by i pi, enclose the pole i pi/2 of residue exp(-k pi/2)/i, and use cosh(x+i pi)=-cosh x. The vertical integrals vanish as the real endpoints tend to infinity, yielding (1+exp(-k pi)) times the real-line integral =2pi exp(-k pi/2). Scale x to obtain the base transform sech(cs). For the shifts by +/-iv move the contour back to the real line, crossing no pole for |v|<c; the factors are exp(+/-vs). Averaging proves (3), including s=0, so each kernel has integral one.

Define the projected measure on R by its density
    p_c(t)=int Q_(c,v)(t-u) dmu(u,v).
It is bounded and continuous: the uniform kernel decay and translation bound give absolutely convergent uniformly small horizontal tails, and the compact part is continuous by dominated convergence. This is the total harmonic sweep to the two strip boundaries, identified with their common horizontal coordinate; we only need the explicit positive kernel (3), not a boundary regularity theorem.

## 4. The projected measure is exactly uniform

For h in C_c^infty(R), first integrate Fh(t) against p_c(t)dt. Absolute integrability of this iterated integral follows from positivity, the boundedness of p_c, and rapid real-axis decay of Fh. For fixed (u,v), convolution with the integrable kernel and (3) give
    int Fh(t) Q_(c,v)(t-u) dt
        = int h(s) exp(ius) cosh(vs)/cosh(cs) ds.
By the v symmetry of mu, the subsequent mu integral equals
    int F[h(s)/cosh(cs)](u+iv) dmu(u,v).
The bracketed test is smooth compactly supported, so (2) makes this h(0). Therefore
    int Fh(t) p_c(t) dt = h(0)
                         = int Fh(t) dt/(2pi).
The difference of these bounded densities defines a tempered distribution. Its Fourier distribution vanishes on C_c^infty by the last equality, hence vanishes identically. By continuity of p_c,
    p_c(t)=1/(2pi) for every real t and every c>b.     (4)
This is an unconditional necessary identity for every local subsequential complex zero-measure limit, with no RH or zero-density exponent improvement assumed.

The converse analytic-test statement also holds for any positive translation-bounded conjugation-symmetric measure supported in |v|<=b: if (4) holds at one c>b, apply it to the compact test h(s)cosh(cs) and reverse the calculation to get (2), hence (1). Thus (4) characterizes exactly the fixed analytic tests, not the full two-dimensional local measure.

In particular if a limit is supported on v=0, (2) identifies its real marginal as dt/(2pi). In general (4) does not imply that support condition. For example du/(2pi) times any symmetric probability measure on [-b,b] has projection identically 1/(2pi), because every Q_(c,v) integrates to one. Such examples can have substantial off-line mass. They are abstract admissible measures, not evidence that actual zeta zeros have these limits. LZC02 will derive the finite-height projected arithmetic density, and LZC03 will examine nonuniform examples and the moving-support obstruction.

No actual off-line zero, RH proof, numerical experiment, independent verification or priority claim. README unchanged.

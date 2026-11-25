# Uniform phase-dependent small-window differentiation spectrum

Candidate research note v0.1 — 25 November 2026. AI-assisted Zetral research under human direction. No RH assumption in the local results, no established originality, no independent human review, no formal verification. The local operator and its phase family are imported from Suzuki, not claimed as new. This consolidates P01–P03 and uses the preceding Campaign V scaled-operator estimates.

## 1. Setting and theorem

Let A_a be the operator associated with the localized geometric Weil form on L2(-a,a). For sufficiently small a>0 it is positive by the elementary prime-free estimate of C04 and S01. Use Suzuki's natural equal-norm deficiency vectors v_+=A_a^(-1)exp(x), v_-=A_a^(-1)exp(-x) and his extension phase theta in [0,2pi). This is not the ordinary L2 boundary phase. Denote the ordered strictly positive differentiation eigenvalues by t_(a,theta,n), excluding zero. Put ell=log(1/a), and define

    alpha_a(theta)=arg(cos(theta/2)+i a sin(theta/2)) in [0,pi),
    r_n=(n-1)pi+alpha_a(theta) for 0<theta<2pi,
    r_n=n*pi for theta=0,
    D(r)=[Si(2r)-sin(2r)]/2.

Here Si(z)=integral_0^z sin(t)/t dt, with its removable value at zero. For each fixed n>=1 the candidate theorem is

    a t_(a,theta,n)=r_n+D(r_n)/ell+O_n(ell^-2),

uniformly in theta as a decreases to zero. The positivity D(r)>0 for r>0 is proved below. This is an absolute error estimate, not a relative error estimate if r_1 tends to zero. For fixed theta!=pi the separate signed bounded eigenvalue has the sharper original-variable expansion

    t_*(a)=tau-a^2 tau(1+tau^2)/3+O_theta(a^2/ell+a^4),
    tau=tan(theta/2).

It is exactly zero at theta=0, positive for 0<theta<pi and negative for pi<theta<2pi for sufficiently small a. The local spectra at any two distinct phases strictly interlace between consecutive eigenvalues; continuously followed eigenvalues increase with theta for sufficiently small fixed a. The statements require no zeta-zero inputs or RH. The global large-window conclusions of Campaign III remain conditional on RH.

## 2. Exact characteristic and normalized pair

Theorem 1.5 of Suzuki [1], eq. (1.11), identifies the real simple eigenvalues with the zeros of

    W(a,theta;z)=(z-i)F[v_+](z)+exp(i theta)(z+i)F[v_-](z),

where F[g](z)=integral_(-a)^a g(x) exp(izx) dx. The shift lambda=0 is permitted by C04's positivity proof. Reflection gives equal deficiency norms. Set u_e=(v_++v_-)/2, u_o=(v_+-v_-)/2, c=-log(4pi)-gamma_E-log(tanh a), F_1[g](s)=(1/2)integral_(-1)^1 g(y)exp(isy)dy,

    E_a(s)=F_1[c u_e(ay)](s), O_a(s)=F_1[c u_o(ay)/a](s).

With s=az and phi=theta/2, direct expansion of the two coefficients gives

    c W(a,theta;s/a)/(4a exp(i phi))
       =[(s/a)cos phi-sin phi]E_a(s)-i[s sin phi+a cos phi]O_a(s).

Define X_a=s E_a-i a^2 O_a, Y_a=E_a+i s O_a. Multiplying by a gives the equivalent characteristic cos(phi) X_a-a sin(phi) Y_a. On the real axis the pair is real, X_a odd and Y_a even. At theta=pi the even characteristic is the negative of the normalized characteristic of Campaign V. At theta=0 it is odd; E_a(0) tends to 1, so s=0 is a root only at theta=0 modulo 2pi for sufficiently small a.

## 3. Uniform angle expansion

The preceding Campaign V derivation gives, on every fixed complex compact, with f(s)=sinc(s), H=F_1[b_0], b_0(y)=log 2-(1/2)log(1-y^2),

    E_a=f-H/c+O(c^-2),
    O_a=-i[f'-(H'+f')/c]+O(c^-2).

The uniform errors follow from scalar resolvent estimates, not a norm expansion of the unbounded logarithmic operator. Therefore

    X_a=sin s-sH/c+O(c^-2+a^2),
    Y_a=cos s-G/c+O(c^-2),
    G=(sH)'+s f'.

For clarity the symbols here denote scalar functions, not the scaled form operator perturbation. The exact identities proved in S02 are

    sH(s)=[sin s Cin(2s)+cos s Si(2s)]/2,
    G(s)=cos s[1+Cin(2s)/2]-sin s Si(2s)/2,

with Cin(z)=integral_0^z(1-cos t)dt/t. On a fixed bounded real interval, exp(-is)(Y_a+iX_a) is uniformly 1+O(1/c), and for small a lies in the disk of radius 1/2 about 1. The logarithm there gives the continuous angle beta_a(s)=arg(Y_a+iX_a), starting at beta_a(0)=0. Expanding the scalar log gives

    beta_a(s)=s+[sin(s)G(s)-cos(s)sH(s)]/c+O_R(c^-2+a^2)
             =s-D(s)/ell+O_R(ell^-2).

The Cin terms cancel exactly. This independent angle calculation checks the sign of the P02 root expansion. The exact angle equation is beta_a(s)=alpha_a(theta) modulo pi.

## 4. Monotonicity, counting and uniform inversion

There are no common real zeros of X_a,Y_a: otherwise a real coefficient vector annihilates both the characteristic and its derivative at that point, contradicting the real-simple-zero theorem for every phase. For any real s, select the coefficient vector perpendicular to (X_a,Y_a); simplicity then implies the Wronskian V=X_a'Y_a-X_aY_a' never vanishes. It is continuous and has positive sign at zero: Y_a(0)=E_a(0)>0 and X_a'(0)=E_a(0)-i a^2 O_a'(0)>0 by the compact estimates. Thus beta_a'(s)=V/(X_a^2+Y_a^2)>0 everywhere on the real line. The continuous lift exists globally; no assertion of its range at infinity is needed.

On [0,(n+1)pi], beta_a starts at 0 and eventually exceeds n*pi at the right endpoint. It takes each target r_n in (0,n*pi] exactly once, so the angle condition identifies the first n positive roots without any hidden omissions. At theta=0 the zero eigenvalue is excluded by definition. Substituting the root into the angle expansion first bounds |s-r_n|=O_n(1/ell), then bounded D' on this compact yields the theorem with error uniform over the entire phase family. This handles targets approaching zero, though not their relative errors.

For the original deficiency phase use A=X_a/a, B=Y_a. Its continuous phase lift is 2 arg(B+iA); its derivative is 2(A'B-AB')/(A^2+B^2)>0. Consequently the exact local derivative along a continuous eigenvalue branch is

    ds/dtheta=(A^2+B^2)/(2(A'B-AB'))>0.

Between two consecutive roots of one phase the lift increases by exactly 2pi, so exactly one root of each other phase lies in that open interval. A full phase cycle advances to the next root wherever such a root exists. Positive rank is not a continuous branch label at the zero crossing. The flow/interlacing mechanism is standard deficiency-index (1,1) theory, not a novelty claim.

The intrinsic correction is strictly positive. For x=2r in (0,pi], Si(x)-sin x increases from zero because sin x-x cos x has positive derivative x sin x. For x>=pi the successive minima of Si occur at even multiples of pi and increase (the absolute half-period integrals decrease). In particular Si(x)>=Si(2pi)>=pi/2-pi^3/144-1/pi>1, by the elementary sine Taylor lower bound on [0,pi/2], the positive half-period tail and the bound 2/pi on the next negative integral. Thus Si(x)-sin x>0 there also. The conclusion is positivity of the coefficient; an absolute O(ell^-2) remainder does not by itself prove a uniform sign of the displacement when r approaches zero.

## 5. Regimes and bounded branch

If theta(a) approaches pi and kappa_a=cot(theta(a)/2)/a has finite limit kappa, then alpha_a=arccot(kappa_a) in (0,pi), hence the limit is (n-1)pi+arccot(kappa). Equivalently (theta-pi)/a->delta gives kappa=-delta/2. The correction at the moving target is D(r_n). If kappa_a=kappa+b/ell+O(ell^-2), the coefficient relative to the fixed limit acquires the additional term -b/(1+kappa^2); mere convergence without a rate does not imply this expansion. If kappa_a tends to positive or negative infinity, alpha_a tends to 0 or pi, respectively, and the same uniform expansion applies.

For fixed theta!=pi, the noncentral integer-labeled roots satisfy s_k=k*pi+Si(2k*pi)/(2ell)+O_(k,theta)(ell^-2), k!=0. The positive indexing shifts by one when the signed central root is positive. The central branch is resolved by the exact characteristic on the original t scale:

    (t-tau)E_a(at)=i a(t tau+1)O_a(at).

Uniform compact convergence gives a unique bounded root near tau by Rouche and its coincidence with the central branch follows from the sine limit after division by cos(phi)/a (P01). The equation improves t-tau to O_theta(a^2). Parity and Cauchy estimates give E_a(at)=1+O(c^-1+a^2), O_a(at)=i a t/3+O_theta(a/c+a^3). Substitution yields the finer bounded-root formula in §1. As a separate check the local angle derivative beta_a'(0)=1+a^2/3+O(a^2/c), with the odd higher Taylor terms bounded by O((1/c+a^2)|s|^3), and the signed target arctan(a tau) has the same expansion upon inversion (P03).

## 6. Exact elementary illustration and limitations

At a=2^(-2049), choose theta=2 arctan(1/a), so alpha_a=pi/4. C04's coercivity and actual operator residuals for the constant and coordinate functions give |E_a-f|, |O_a+i f'|<.038 on |Im s|<=1/2. On |s|<=2, |O_a|<3. Hence the normalized phase characteristic cos(alpha_a)X_a-sin(alpha_a)Y_a differs from sin(s-pi/4) by less than .190+3a^2<1/3 on the rectangles [0,3/2] and [1/4,3/2] with imaginary sides +/-1/2. The comparison function has modulus >1/3 on each boundary and exactly one zero inside each. Rouche proves the indexed exact enclosure 1/4<a*t_(a,theta,1)<3/2. This uses analytic inequalities, not floating-point intervals, and is an extreme-window illustration rather than a practical numerical certificate.

Internal review of the P01–P03 algebra, angle sign, indexing, derivative and example did not identify a new flaw. The independent Campaign V proof audit S04-W02 is still pending; worker ref lookup returned 404 at this checkpoint. No independent human review, numerical phase sweep, new Lean verification, practical exact Fourier certificate, or established originality. The all-phase expansion relies on the internally derived S01/S02 estimates, so any material correction from the pending audit must be propagated here.

## 7. Source disposition and next direction

[1] M. Suzuki, Weil's quadratic form via the screw function, arXiv:2606.09096v4, https://arxiv.org/html/2606.09096v4. Reopened 25 November 2026, Theorem 1.5 (1.11) and explicit formula §1.1; P01/P03 record earlier inspection of §6. The local extension and characteristic are imported. The small-window fixed-index phase-uniform correction above is our candidate derivation.

[2] M. Suzuki, Spectral convergence associated with Weil's quadratic form, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1. Reopened §2.3, Theorem 3.3 and §5. Under RH it identifies the inverse of the distinguished phase-pi extension with a compression of the global inverse. The model-space representative need not be the local Fourier transform (see (2.12)); global evaluation of that local transform is not assumed bounded. This leaves the arbitrary-phase inverse comparison a concrete next question. [1] §7.8 already discusses a global phase-dependent de Branges boundary expression; compare it rather than claiming the global phase family as novel.

[3] Kim et al., A Numerical Realization of Suzuki's Weil-Quadratic-Form Operator, arXiv:2607.24830v3, https://arxiv.org/html/2607.24830v3. §3.9 reopened; it concerns numerical characteristic roots and a Paley–Wiener constraint, not a verified proof of our fixed-index uniform small-window expansion. No exhaustive priority determination.

Detailed proofs: P01-phase-transition.md, P02-phase-corrections-and-flow.md, P03-uniform-phase-expansion.md, and ../asymptotics/campaign-05-small-window-spectrum.md. The next campaign returns to the large-window Hilbert–Pólya question using the exact phase dependence, not a claim that RH has been advanced or established.

# BFA03 — Singularity-lifted compressed second moments

2026-11-25. AI-assisted candidate derivation, fixed-window arithmetic operators, no RH assumption. Uses CME02–03 and BFA01–02. All estimates below retain the physical support restriction. No originality claim.

Let I=(-a,a), L>2a, and choose a sharp physical cutoff at distance d0=2a, as permitted by CME03. Write k(s)=exp(s/2)/(2 sinh s). Split
    k(s)=1/(2s)+j(s), 0<s<=d0.
The function j extends analytically at zero, with j(0)=1/4. On the circle of length 2L define M(t)=int_0^d0 (1-cos(ts))/s ds, and the constant
    C=alpha0+2 int_0^d0 j(s)ds+2 int_d0^infinity k(s)ds.
Then the exact corrected archimedean symbol is
    alpha_chi(t)=C+M(t)+r(t),  r(t)=-2 int_0^d0 j(s)cos(ts)ds.
For v supported on I in H^s, s>0, the compressed operator has the action
    Bv=Cv+Q M(D)v-Pv+H_B v+Q r(D)v,
where H_B=H for A and zero for T. M(D) is the circle multiplier and Q is the physical support restriction. This follows from the form identity and its log-domain extension. The model M has the full-line zero-extended symmetric difference action int_0^d0 [2v(x)-v(x+s)-v(x-s)]/(2s) ds on I, interpreted by L² convergence for these vectors. Prime and pole actions may be computed separately without Fourier truncation.

By integration by parts,
    |r(t)|<=2(|j(d0)|+int_0^d0 |j'(s)|ds)/|t|, t!=0.
Hence if v has BV zero extension with total variation V, its normalized Fourier coefficients satisfy |c_n|<=V/(sqrt(2L)|t_n|). Define the lifted approximation
    b_N=Cv+Q M(D)v-Pv+H_Bv+Q r(D)R_N v.
The untruncated model, prime shifts and pole term are essential; only the decaying residual multiplier is truncated. With J=2(|j(d0)|+int_0^d0|j'|), the physical L² error is bounded by the full-circle residual tail:
    ||Bv-b_N||²<= J² V² L³/(3 pi^4 N³).
This follows from summing both signs and int_N^infinity x^-4 dx. Consequently, if a certified interval [l,u] encloses ||b_N||², then
    max(0,sqrt(max(0,l))-epsilon_N)² <= <B²v,v>
          <= (sqrt(u)+epsilon_N)²,
where epsilon_N=J V L^(3/2)/(sqrt(3) pi² N^(3/2)).
Here <B²v,v> denotes ||Bv||², and actual domain membership follows from APM01. This improves the crude unlifted norm-tail scale O(log N/sqrt N) to O(N^-3/2) for fixed BV data, provided the model action is evaluable. It is not a uniform high-degree moment estimate.

## Length-one constant seed

Take d0=1, L=2, v=1 on I. In d=x+1/2 coordinates,
    Q M(D)v=-0.5 log(d(1-d)).
From F(d)=atanh(exp(-d/2))+atan(exp(-d/2)) in CME03,
    C=alpha0+lim_(d->0) [2F(d)+log d]
      =alpha0+log 4+pi/2=-gamma-log 2-log pi.
Consequently
    b_N(d)=C-0.5 log(d(1-d))
            -b[1_(d<1-log 2)+1_(d>log 2)]
            +H_B v(d)+Q r(D)R_N v(d),
where b=log 2/sqrt 2 and H_A v=8 sinh(1/4)cosh(x/2).
This has explicit logarithmic endpoint singularities and finite prime jumps; the residual polynomial is smooth. It can be integrated on the physical half-interval with analytic endpoint integrals, rather than replacing the physical squared norm by a full-circle symbol square.

For a conservative explicit residual bound, write g(z)=e^(z/2)/(sinh z/z), j(z)=(g(z)-1)/(2z), removable at zero. On |z|=2, |sinh z/z-1|<=sinh(2)/2-1<0.82, so |g(z)|<3/0.18<17, |j(z)|<4.5<5. Cauchy gives Taylor coefficients |j_m|<=5*2^-m. In particular on [0,1] |j|<=10, |j'|<=10, |j''|<=20. For a sharper real bound on j and j', use g(s)=e^(s/2)/A(s), A(s)=int_0^1 cosh(sx)dx, with A>=1, A'<=sinh(1)/2<0.6, A''<=cosh(1)/3<0.52, e^(s/2)<1.65. Then |g'|<=1.65(0.5+0.6)<2, |g''|<=1.65(0.25+0.6+0.52+2*0.6²)<4. Thus |j(s)|<=1, |j'(s)|<=1 by integrating g' and g'' along the radial segment. Take J=4. For V=2,L=2 the tail is <=sqrt(512/(3 pi^4 N³)). This explicit bound is independent of the pole choice.

Numerical implementation: evaluate the finite residual symbols using the Taylor coefficients of j (division of e^(z/2) by sinh z/z), truncate after degree m with uniform error <=5*2^-m on [0,1], and use composite midpoint quadrature for j(s)cos(t_n s) with second-derivative bound 20+20|t_n|+10 t_n². This gives certified residual symbol intervals using only elementary finite arithmetic. Integrate the lifted action over the physical interval; preserve its actual support. An executed test and exact output are documented separately.

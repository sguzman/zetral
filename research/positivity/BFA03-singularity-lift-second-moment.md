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

## Executed outward-rounded second moment benchmark

Source experiments/bfa03-lifted-second-moments.js, initial commit 4f6e5a0929ab180beac00bc54cf96d8534eb3d9f, refined commit 5b7f8521942a5d8a02416529351a6559822556be. Both versions actually executed in the V8 code runtime and exactly read back. Node reproduction command: node experiments/bfa03-lifted-second-moments.js. Runtime shell check found Node.js but no rustc or cargo; no separate Node process replay is claimed.

The degree-30 coefficients of j are computed by the triangular power series division of exp(z/2) by sinh(z)/z. The Cauchy bound above gives the uniform discarded value bound 5*2^-30 and derivative tail bound 5*(30+2)*2^-30. Instead of J=4, the refined version encloses
    J <= 2(|j(1)|+sum_(m=1)^30 m |j_m|+5*32*2^-30)
      <= 0.604032829660374952.
The real bounds |j|<=1, |j'|<=1, |j''|<=20 yield a midpoint error for r(t) of (20+2|t|+t²)/(12 M²), with M=2048 cells. Each cosine on the rational pi grid is reduced by exact integer symmetry to [0,pi/2] and enclosed by 16 alternating Taylor terms and the next term. All coefficients, logarithms, constants, square roots and arithmetic use outward-rounded BigInt intervals on a scale of 10^18, with logarithm, atan, exp and gamma enclosures inherited from CME03. Integer square roots are rounded outward by squaring.

The lifted residual action polynomial is a_0/2+sum_(n>=1) a_n cos(t_n x), a_n=r(t_n)c_n, since the normalized basis has amplitude 1/2 and the positive/negative coefficients agree. On each half-interval cell bound the trigonometric variation from its midpoint by the cell half-width times sum |a_n| |t_n|. Enclose the remaining regular terms C-0.5 log(1-d), the prime step, and optional pole by endpoint monotonicity; one cell intersects the prime threshold. Integrate the endpoint singular part L(d)=0.5 log(1/d) and L(d)^2 exactly via the primitives
    d(log(1/d)+1)/2,
    d(log²(1/d)+2 log(1/d)+2)/4
with limiting value zero at d=0. For a regular part enclosed in an interval R on a cell of width h, the integral of the square is enclosed by the interval expression int L² + 2 R int L + h R². This includes the boundary cell and keeps the support projection. Finally use the norm-tail bound with the certified refined J. No continuum estimate from CME03 is used in calculating these intervals.

Actual final V8 output (integer endpoints over 10^18):
```json
{"scale":"1000000000000000000","M":2048,"degree":30,"Jupper":"604032829660374952","rows":[{"N":8,"restored":false,"lifted":["3944793882746184928","3951675520635310578"],"epsilonUpper":"8833649826058310","continuum":["3909781999748182267","3986874063969856874"],"uncertain":1},{"N":8,"restored":true,"lifted":["144436469254871540","147493437997486962"],"epsilonUpper":"8833649826058310","continuum":["137800081029240909","154356575613282441"],"uncertain":1},{"N":16,"restored":false,"lifted":["3944395269901759698","3951524172371030126"],"epsilonUpper":"3123166847316679","continuum":["3931999491989165384","3963950664133853718"],"uncertain":1},{"N":16,"restored":true,"lifted":["143720881971963922","146886673798423830"],"epsilonUpper":"3123166847316679","continuum":["141362617493302160","149290385159499255"],"uncertain":1},{"N":32,"restored":false,"lifted":["3944171141384018746","3951598543156551854"],"epsilonUpper":"1104206228257657","continuum":["3939786467338063805","3955989783414825395"],"uncertain":1},{"N":32,"restored":true,"lifted":["143528728801112422","146825797539815630"],"epsilonUpper":"1104206228257657","continuum":["142693286914523747","147673233083609410"],"uncertain":1}]}
```
The restored N=32 continuum enclosure is [0.142693286914523747,0.147673233083609410], strictly within the independent CME03 physical enclosure [0.130675707250318736,0.226354883682088858]. Its width is about 5.2 percent of the earlier width (about 94.8 percent reduction). The old unlifted N=32 second moment interval near 0.0659 bounded only a truncated action and is not a continuum enclosure. The new interval is obtained without substituting full-circle squared symbols. For T the new enclosure overlaps CME03; neither interval is asserted to be contained in the other. The tail error on the action at N=32 is at most 0.001104206228257657; the numerical enclosure of the lifted integral also contributes to the final width. This is an executed fixed-seed second moment, not an eigenvalue, RH certificate, or independently reviewed computation. BFA03 complete as candidate.

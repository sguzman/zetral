# P03 — Uniform phase expansion, intermediate detuning, and analytic check

25 November 2026. Internal candidate derivation, no RH assumption, using the published unconditional local extension theorem and Campaign V estimates. No independent human review, machine verification, or priority claim.

## 1. An independent angle formulation

Use P01/P02 scalar entire functions E_a,O_a, and c=c(a), ell=log(1/a), f=sinc, H=F_1[b_0], G=(sH)'+s f'. Set the scaled real-entire pair

    X_a(s)=s E_a(s)-i a^2 O_a(s),
    Y_a(s)=E_a(s)+is O_a(s).

Thus X_a=a A and Y_a=B in P02's flow notation. For real s, X is odd and Y even. The exact characteristic is proportional to cos(theta/2) X_a-a sin(theta/2) Y_a. P02 proves the pair has no common real zero and X_a'Y_a-X_aY_a'>0 for sufficiently small a. Hence the continuous real angle

    beta_a(s)=arg(Y_a(s)+i X_a(s)), beta_a(0)=0

is strictly increasing, with beta_a'= (X_a'Y_a-X_aY_a')/(X_a^2+Y_a^2)>0. The choice at zero is valid because Y_a(0)=E_a(0)>0. Reflection gives beta_a(-s)=-beta_a(s).

Define alpha_a(theta)=atan2(a sin(theta/2), cos(theta/2)) in [0,pi) for 0<=theta<2pi. The eigenvalue condition on real s is exactly beta_a(s)=alpha_a(theta) modulo pi: the normalized coefficient vector is (cos alpha_a,sin alpha_a). This reformulation avoids dividing by cos(theta/2) or sin(theta/2); no singularity at either special phase.

From S02 and P02, on every fixed complex compact,

    X_a=sin s-sH(s)/c+O(c^-2+a^2),
    Y_a=cos s-G(s)/c+O(c^-2).

For real |s|<=R, factor Y+iX by exp(is) to get 1-exp(-is)[G(s)+i sH(s)]/c+O_R(c^-2+a^2). This is in the disk about 1 of radius 1/2 for all sufficiently small a. The analytic logarithm on that disk, with log(1)=0, supplies the lift (imaginary part zero at s=0); no argument discontinuity arises. Its first-order imaginary part is [sin(s)G(s)-cos(s)sH(s)]/c. Substituting the sine/cosine integral identities in S02 gives

    sin(s)G(s)-cos(s)sH(s)=sin(s)cos(s)-Si(2s)/2=-D(s),
    D(s)=[Si(2s)-sin(2s)]/2.

Consequently

    beta_a(s)=s-D(s)/ell+O_R(ell^-2), |s|<=R.       (P03.1)

The constants depend on R, not on the phase. This is a second route to the critical correction and verifies its orientation independently of P02's root Taylor algebra (it shares the Campaign V input identities).

## 2. Uniform ordered spectrum for all phases

For 0<theta<2pi let r_n=(n-1)pi+alpha_a(theta), n>=1. At theta=0, let r_n=n*pi instead, since the exact zero must be excluded from strictly positive indexing. Fix n. On [0,R] with R=(n+1)pi, beta_a(0)=0 and beta_a(R)>n*pi for sufficiently small a, uniformly over all phases, by (P03.1). The strictly increasing lift gives one and only one root for every level r in (0,n*pi]; the first n positive roots of the given phase are exactly the inverses of these levels. No preceding uncounted positive roots can exist. In particular this proof still works when r_1 tends to zero, unlike a fixed-radius prefix contour with left side zero.

At these roots s, (P03.1) gives |s-r_n|<=C_n/ell. Since D is continuously differentiable with bounded derivative on [0,R], substitute r_n for s in the correction, costing O_n(ell^-2). Thus

    a t_(a,theta,n)=r_n+D(r_n)/ell+O_n(ell^-2)        (P03.2)

uniformly over every theta in [0,2pi), with the stated strictly-positive-index convention. This is stronger than P02's compact-kappa bound. The discontinuity of r_n at the phase-circle seam is the actual positive-rank jump at the exact zero crossing, not an error. No claim of uniformity in n or relative accuracy as r_1 tends to zero. In particular the earlier separate bounded-eigenvalue asymptotic is much sharper than (P03.2) in that regime.

For theta tending to pi with kappa_a=cot(theta/2)/a unbounded, alpha_a=arccot(kappa_a) exactly. If kappa_a tends to positive infinity, the positive first limiting scaled eigenvalue tends to zero, and higher levels approach (n-1)pi; if kappa_a tends to negative infinity, all positive levels approach n*pi. No required rate for kappa_a. For bounded kappa_a this recovers P02 including the phase drift term alpha'(kappa)=-1/(1+kappa^2). For fixed nonzero phase away from pi, alpha_a approaches 0 or pi according to sign, with error O_theta(a); for theta=0 the positive lattice is n*pi. D(k*pi)=Si(2k*pi)/2 recovers P02's noncentral correction. The half-integer case alpha=pi/2 recovers Campaign V.

## 3. Central branch check using the local angle derivative

Here retain c rather than ell in the derivation. For small real s, the exact angle derivative at zero is

    beta_a'(0)=1-i a^2 O_a'(0)/E_a(0)=1+a^2/3+O(a^2/c).

Indeed E_a(0)=1+O(c^-1) and O_a'(0)=i/3+O(c^-1) by the compact analytic expansion and Cauchy's estimates. For a fixed small disk |s|<rho, the holomorphic log of exp(-is)(Y+iX) is defined as above; so is its conjugate-reflected holomorphic log. Taking their difference divided by 2i gives the holomorphic extension of beta_a(s)-s to that disk (agreeing on the real axis). It is odd by parity, and bounded by O(1/c+a^2) on a slightly larger disk. Taylor's estimate then yields

    beta_a(s)=(1+a^2/3+O(a^2/c))s+O((1/c+a^2)|s|^3)

uniformly for |s|<=rho/2. The odd remainder starts at cubic order; the coefficient of s is the exact derivative above, not the coarse uniform O(c^-2) from (P03.1).

For fixed theta!=pi the signed central target level is arctan(a tau), with tau=tan(theta/2), including negative tau and zero. The central s=a t_* is O_theta(a) by P01. The expansion arctan(a tau)=a tau-a^3 tau^3/3+O_theta(a^5) now gives

    t_*=tau-a^2 tau(1+tau^2)/3+O_theta(a^2/c+a^4),

in agreement with P02 by a different argument. At theta=0 the target and the exact root are zero. At fixed theta on either side of pi this signed level is the bounded central branch, not necessarily the first positive eigenvalue.

## 4. Explicit analytic transition example

Use the deliberately tiny window a=2^(-2049) of C04, with c>1020, kappa_coercivity>1000 and c a^2<1. C04's actual operator residual estimates for 1 and x/a imply separately, on |Im s|<=1/2,

    |E_a(s)-f(s)|, |O_a(s)+i f'(s)|
          <= exp(1/2)(18+c a^2)/kappa_coercivity < 38/1000.

Here kappa_coercivity is the local lower form bound, unrelated to phase detuning. On |s|<=2, |f'|<=exp(1/2) by its integral representation, so |O_a|<3. Hence

    |X_a-sin s| < 2*38/1000+3a^2,
    |Y_a-cos s| < 3*38/1000.

Take theta=2 arctan(1/a), so alpha_a=pi/4 and kappa_phase=1 exactly. The normalized characteristic cos(alpha_a) X_a-sin(alpha_a)Y_a differs from sin(s-alpha_a) by less than 190/1000+3a^2<1/3 on the boundaries of both rectangles [0,3/2] x [-1/2,1/2] and [1/4,3/2] x [-1/2,1/2] in complex s (all |s|<2). The horizontal sides have |sin(s-alpha_a)|>=sinh(1/2)>1/2. On the vertical sides x=0,1/4,3/2, the distances |x-pi/4| lie between 1/2 and 1 (using 3<pi<22/7), with strict lower bound except that 1/2 suffices. Therefore their moduli are >=sin(1/2)>1/3, by the elementary Taylor lower bound. Each rectangle contains exactly one zero of sin(s-pi/4). Rouché and the imported real simple spectral correspondence give

    1/4 < a t_(a,theta,1) < 3/2.

The outer count proves the index and inner count the enclosure. This is an exact elementary analytic check at a nontrivial phase in the transition, not a realistic-window numerical certificate. It uses no interval library, zero inputs, or numerical solver. The bound is intentionally broad.

## 5. Source comparison and limitations

Actually accessed 25 November: Suzuki, arXiv:2606.09096v4 HTML https://arxiv.org/html/2606.09096v4, Theorem 1.5 (1.9)–(1.11) and §6.4–6.5 (6.2)–(6.3), confirming the shift, deficiency phase and simple real characteristic zeros. The phase representation itself is established; the asymptotic calculation above is not attributed to the source. The ordinary L2 boundary phase in the comparison following Theorem 1.5 is not the natural Weil-form deficiency phase. Kim et al., arXiv:2607.24830v3 HTML https://arxiv.org/html/2607.24830v3, §3.9, inspected the explicit deficiency-vector solve and reported approximately pi/a spacing at a=3 and 6. That is a different regime from a->0 at fixed ordered index. The inspected passage does not provide the uniform small-window phase expansion or the transition width. Their zero-density discussion does not by itself prove any fixed-index limiting obstruction, and is not used. A targeted search also returned Suzuki's RH-dependent global convergence paper and a related function-field paper, neither inspected in full here. No exhaustive priority determination.

S04-W02 branch lookup again returned 404; no independent worker proof audit available. This is a separate internal route checking the algebra and indexing, not independent human or worker review. No new numerical or Lean verification; the example is analytic under the stated local theorem and C04 derivation. No novelty claim. P03 complete under the campaign's allowed analytic alternative. P04 should consolidate P01–P03, explicitly incorporate the all-phase estimate and its indexing caveat, and carry forward the pending Campaign V proof audit.

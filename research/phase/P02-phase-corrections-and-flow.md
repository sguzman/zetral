# P02 — Phase-dependent corrections and exact spectral flow

25 November 2026. Internal candidate derivation, unconditional in the sense of no RH assumption, using the published positive local form and extension theorems imported in S01/P01. No independent human review, machine verification or novelty claim. The pending S04-W02 audit has not appeared on GitHub (ref fetch returned 404).

## 1. Critical moving phase: explicit first correction

Retain P01 conventions: s=a t, c=c(a)=-log(4pi)-gamma_E-log(tanh a), ell=log(1/a), f(s)=sinc(s), H(s)=F_1[b_0](s), G(s)=(sH(s))'+s f'(s). The scalar functions E_a,O_a of P01 have the expansions, locally uniformly in complex s,

    E_a=f-H/c+O_K(c^-2),
    O_a=-i[f'-(H'+f')/c]+O_K(c^-2).

Indeed F_1[y g]=-i(d/ds)F_1[g] for integrable g; use S01/S02's scalar resolvent estimate for 1,y. For bounded real kappa_a=cot(theta(a)/2)/a the exact normalized characteristic is

    J_a(s)=(kappa_a s-1)E_a(s)-i(s+a^2 kappa_a)O_a(s).

Substitute the expansions (the product (-i)(-i)=-1) to obtain

    J_a(s)=kappa_a sin s-cos s
           -[kappa_a s H(s)-G(s)]/c+O_(K,M)(c^-2+a^2),  |kappa_a|<=M.

Let alpha(kappa)=arccot(kappa) in (0,pi), and r_n(kappa)=(n-1)pi+alpha(kappa). P01 gives ordered positive roots z_n=a*t_(a,theta(a),n)=r_n(kappa_a)+O_(n,M)(1/c+a^2), with uniform moving contour separation on bounded kappa. The derivative of the leading characteristic at r=r_n(kappa) equals (1+kappa^2)sin r, whose modulus is sqrt(1+kappa^2). Taylor expansion using the uniform estimate yields

    z_n=r_n(kappa_a)+D(r_n(kappa_a))/c+O_(n,M)(c^-2+a^2),

where the correction is the ratio [kappa*r*H(r)-G(r)]/[(1+kappa^2)sin r]. The identity from S02,

    s H(s)=[sin s Cin(2s)+cos s Si(2s)]/2,
    G(s)=cos s[1+Cin(2s)/2]-sin s Si(2s)/2,

and cos r=kappa sin r give cancellation of Cin:

    D(r)=Si(2r)/2-kappa/(1+kappa^2)
        =[Si(2r)-sin(2r)]/2.                         (P02.1)

Thus for every bounded moving phase parameter, replacing c by ell and absorbing a^2,

    a*t_(a,theta(a),n)=r_n(kappa_a)+D(r_n(kappa_a))/ell+O_(n,M)(ell^-2).

This reduces at kappa=0 to S02. The formula uses the actual moving parameter, not just its limit. If kappa_a=kappa+beta/ell+O(ell^-2), differentiating alpha gives an additional first-order term -beta/(1+kappa^2) at fixed r_n(kappa). More generally kappa_a=kappa+beta/ell+o(ell^-1) gives the same first coefficient with an o(ell^-1) remainder instead of O(ell^-2). Merely assuming kappa_a->kappa does not justify either first-order replacement. For theta(a)=pi+delta*a+eta*a/ell+O(a/ell^2), cot(pi/2+x)=-tan x implies kappa=-delta/2, beta=-eta/2.

The intrinsic D(r) is positive for all r>0. For x=2r in (0,pi], d/dx[Si(x)-sin x]=(sin x-x cos x)/x>0 since the numerator has derivative x sin x and starts at zero. For x>=pi, the minimum of Si on that half-line is Si(2pi): consecutive absolute half-period integrals decrease strictly, so subsequent local minima increase. Bound Si(2pi) from below using sin t/t>=1-t^2/6 on [0,pi/2], 1/t>=1/pi on [pi/2,pi], and the absolute negative half-period at most 2/pi. This yields

    Si(2pi)>=pi/2-pi^3/144-1/pi>1

(the last strict inequality follows, for example, from 3.14<pi<22/7). Hence Si(x)>sin x also there. This proves positivity relative to the instantaneous limiting lattice; phase motion of order 1/ell can change the sign relative to a fixed limiting lattice. No uniform-in-index or unbounded-kappa remainder claim.

## 2. Fixed-phase refinements

For fixed theta != pi, set tau=tan(theta/2). P01's characteristic normalized by cos(theta/2)/a is

    L_a(s)=(s-a tau)E_a(s)-i(a s tau+a^2)O_a(s).

Since a=o(c^-m) for each fixed m, on compact sets L_a(s)=sin s-s H(s)/c+O_(K,theta)(c^-2). The same simple-root Taylor argument around each fixed k*pi, k in Z excluding zero, gives

    s_(a,k)=k*pi+Si(2k*pi)/(2ell)+O_(k,theta)(ell^-2).

Indeed at k*pi, sH(s)=cos(s)Si(2s)/2. The lattice labels here are integer k, not positive rank n; use P01's sign-dependent indexing. This correction is independent of fixed theta at logarithmic order; it is not uniform for theta approaching pi.

The central root is on a different scale. P01 proves t_*=tau+O_theta(a^2), and its exact equation is

    (t_*-tau) E_a(a t_*)= i a(t_* tau+1) O_a(a t_*).

By parity and compact-uniform analytic bounds, E_a(0)=1+O(1/c), E_a(s)=E_a(0)+O(s^2); O_a'(0)=i/3+O(1/c) by Cauchy's estimate applied to O_a+i f', and O_a(s)=s O_a'(0)+O(s^3) uniformly on a fixed small disk. For bounded t_* this gives

    O_a(a t_*)/E_a(a t_*) = i a t_*/3+O_theta(a/c+a^3).

Substitute into the exact equation and replace t_* by tau in the resulting coefficient, costing O_theta(a^4). Therefore

    t_*(a)=tau-a^2 tau(1+tau^2)/3+O_theta(a^2/ell+a^4).  (P02.2)

At theta=0 the root is exactly zero by oddness, as in P01. For 0<theta<pi the first bounded eigenvalue lies below tau eventually, while for pi<theta<2pi the bounded negative branch lies above tau eventually. This concerns the original unscaled variable t and does not assert a uniform expansion as tau grows.

## 3. Exact monotonic spectral flow and interlacing

For a fixed sufficiently small positive a, put

    A(s)=(s/a)E_a(s)-i a O_a(s),
    B(s)=E_a(s)+is O_a(s).

These are real entire functions (A odd, B even) and the general-phase P01 characteristic is P_theta(s)=cos(theta/2)A(s)-sin(theta/2)B(s). The local extension theorem (Suzuki arXiv:2606.09096v4, Theorem 1.5, equation (1.11)) says all zeros of every such P_theta are real and simple. We use only that imported fact; the following is a direct argument for the orientation in the natural phase normalization.

There is no real common zero of A,B. If A(s)=B(s)=0, every theta would give a root at s; some real half-angle also annihilates the derivative cos(theta/2)A'(s)-sin(theta/2)B'(s), contradicting simplicity. For any real s, choose the half-angle vector proportional to (B(s),A(s)), modulo simultaneous sign (which does not affect roots). The derivative at this root is nonzero, hence

    V(s)=A'(s)B(s)-A(s)B'(s) != 0

for all real s. Its sign is constant by continuity. At zero A(0)=0, B(0)=E_a(0)>0, and A'(0)=E_a(0)/a-i a O_a'(0)>0 for all sufficiently small a by the above asymptotic bounds. Thus V>0 everywhere on the real axis.

The implicit function theorem at a root gives the exact local derivative, with s the rescaled eigenvalue,

    ds/dtheta = [A(s)^2+B(s)^2]/[2 V(s)] > 0.       (P02.3)

For an unscaled eigenvalue divide by a. This is valid for every root and every phase at a sufficiently small fixed a, including modulo-2pi phase crossings when branches are followed continuously (not necessarily by positive rank). A continuous lift Phi(s)=2 arg(B(s)+i A(s)) exists on the real line because the pair never vanishes. Its derivative is 2V/(A^2+B^2)>0. Roots of P_theta are precisely Phi(s)=theta modulo 2pi. Between consecutive roots of any one phase the lift increases by exactly 2pi: a larger increase would contain another root of that same phase, contradicting consecutiveness. Therefore there is exactly one root of every distinct phase in each such open gap. For a root with a next root of the same phase, continuously increasing the phase through a full 2pi carries it to that next root, since the lift is a strictly increasing continuous bijection on the closed gap. This proves strict interlacing on each consecutive gap and a one-level phase-cycle advance wherever a next root exists, without assuming an unproved global range of the lift. At theta=0 the zero crossing is positive by (P02.3). Ordered strictly positive ranks can jump at the crossing; continuous branch flow must not be confused with that indexing.

The interlacing and flow mechanism is standard for deficiency-index (1,1) extensions, not claimed as a new general theorem. The quantitative critical-phase and bounded-branch corrections above are the candidate contributions. The sign is consistent with kappa_a=cot(theta/2)/a decreasing as theta increases, and alpha'(kappa)<0.

## 4. Verification and next checkpoint

Source directly reopened this turn: Suzuki v4 HTML https://arxiv.org/html/2606.09096v4, Theorem 1.5 and (1.11), explicitly giving the entire characteristic and real simple zeros for each phase without RH. Natural deficiency convention and positive local form were checked in S01/P01; no new global spectral assumption. Internal checks: kappa=0 recovers S02; theta=0 gives exact central zero; reflection theta->2pi-theta matches (P02.2) and lattice indexing; fixed-phase correction uses k!=0 only. No numerical coefficient computation, finite-root solve, independent worker proof, or formal check performed in P02. S04-W02 ref still absent. Originality of the explicit corrections remains unestablished. P03 should independently verify algebra and signs, compare relevant source literature, and examine a bounded transition example or derive a quantitative contour bound, not repeat the same derivation. If worker audit becomes available, review before claiming independent corroboration.

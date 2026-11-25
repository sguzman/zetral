# P01 — Phase-dependent spectrum and the critical small-window transition

25 November 2026. Internal candidate derivation, not independently reviewed or formally verified. No RH assumption: use the unconditional local positive-form setup established in S01, with the published local extension theorem. No novelty claim.

## 1. Conventions and exact characteristic

Primary source reopened in this turn: Suzuki, arXiv:2606.09096v4, https://arxiv.org/html/2606.09096v4, Theorem 1.5 (1.11), §6.3–6.5. The source gives v_z=T_a^(-1)exp(-izx), T_a=A_a-lambda I, and the characteristic (1.11) for equal-norm deficiency vectors. It explicitly distinguishes the ordinary derivative boundary phase from this deficiency-vector phase. C04/S01 give A_a>0 for all sufficiently small a, so lambda=0 is admissible unconditionally. Set v_+=A_a^(-1)exp(x), v_-=A_a^(-1)exp(-x); reflection makes their form norms equal. Relative phases of these vectors are fixed by these exact formulas. Write u_e=(v_++v_-)/2, u_o=(v_+-v_-)/2. These are respectively real even and real odd. The spectral variable z is the eigenvalue in the original interval, s=a z the rescaled variable.

Let phi=theta/2 for theta in [0,2pi), C=cos(phi), S=sin(phi), c=c(a) as in S01, and

    E_a(s)=F_1[c u_e(ay)](s),
    O_a(s)=F_1[c u_o(ay)/a](s),
    F_1[g](s)=(1/2) integral_(-1)^1 g(y)exp(isy)dy.

Here E_a,O_a denote scalar entire functions, not S01's bounded operator perturbation E_a; the latter is not used by name below. Equation (1.11) gives W=(z-i)F[v_+]+exp(i theta)(z+i)F[v_-]. Taking sum/difference of the coefficients and using F[u_e](s/a)=2a E_a(s)/c, F[u_o](s/a)=2a^2 O_a(s)/c, we find

    P_(a,theta)(s)=c W(a,theta;s/a)/(4a exp(i phi))
          = [(s/a)C-S]E_a(s)-i[s S+a C]O_a(s).       (P01.1)

All normalizations divide only by nonzero scalars for small a. This is entire and real on the real axis, since E_a is even and real there and O_a is odd and purely imaginary there. The exact real simple zeros are the scaled local eigenvalues by Theorem 1.5. At theta=pi, P=-E_a-is O_a=-C_a from Campaign V. At theta=0, P=(s/a)E_a-ia O_a is odd. Reflection gives P_(a,2pi-theta)(s)=P_(a,theta)(-s) for theta in (0,2pi), hence the spectra reflect. At theta=0 reflection is the same phase modulo 2pi.

By S01/S02 the two scalar functions obey locally uniformly on the complex plane

    E_a(s)=f(s)+O_K(c^-1),
    O_a(s)=-i f'(s)+O_K(c^-1), f(s)=sin(s)/s,

with removable values at zero. This follows already from the first-order strong L2 expansion on 1 and y; the Fourier integral gives compact-uniform bounds. In particular E_a(0)->1. Cauchy estimates on a fixed disk, parity and boundedness yield E_a(s)=E_a(0)+O(|s|^2), O_a(s)=O(|s|) for small |s|, uniformly as a->0. No claim of a uniform bound on the whole complex plane.

## 2. Fixed phase theta != pi: integer lattice and bounded exceptional branch

Fix theta with C!=0 and let tau=tan(phi)=S/C. Divide P by C/a:

    L_(a,theta)(s)=(s-a tau)E_a(s)-i[a s tau+a^2]O_a(s)
                  =sin s+O_(K,theta)(c^-1+a).

In particular L tends to sin uniformly on compacts. Each fixed integer k has a unique zero s_(a,k) near k*pi for all sufficiently small a, by Rouche on a small disk; it is real and simple. On any fixed rectangle avoiding integer multiples of pi on its boundary, Rouche gives precisely the limiting count. This excludes extra real roots on bounded rescaled intervals. For k!=0, simplicity and the uniform error give s_(a,k)=k*pi+O_(k,theta)(c^-1+a). The same count gives a unique central branch k=0.

To resolve that central branch, use the original t variable, s=a t, and divide P_(a,theta)(at) by C:

    M_(a,theta)(t)=(t-tau)E_a(at)-ia(t tau+1)O_a(at).

On compact t-sets E_a(at)->1 and O_a(at)=O(a); hence M->t-tau uniformly. Rouche on any fixed disk about tau gives exactly one root t_*(a)->tau. Since its scaled root lies near zero it is the same central branch as above. At this root E_a(at) is bounded away from zero and O_a(at)=O(a), so the equation itself yields

    t_*(a)=tan(theta/2)+O_theta(a^2).               (P01.2)

This O(a^2) is stronger than the generic compact convergence estimate; the leading E_a error cancels in the equation. It does not assert a coefficient for a^2, which belongs to P02. For theta=0 the exact characteristic is odd, so t_*=0 exactly, and it is simple by the source theorem. For any fixed theta in (0,pi) the central branch is positive for small a, and for theta in (pi,2pi) it is negative. Moreover from P01.1 at s=0, P(0)=-S E_a(0); for all small a, zero is an eigenvalue only for theta=0 modulo 2pi, even for varying phases.

For ordered *strictly positive* eigenvalues t_(a,theta,n), fixed theta:
- 0<theta<pi: first positive eigenvalue is the bounded branch t_*; for n>=2, a*t_(a,theta,n)->(n-1)pi.
- pi<theta<2pi: central branch is negative, so a*t_(a,theta,n)->n*pi for n>=1.
- theta=0: exact zero excluded from positive indexing, so a*t_(a,0,n)->n*pi.
- theta=pi: use Campaign V, a*t_(a,pi,n)->(n-1/2)pi.

To justify the index assertions use a symmetric prefix rectangle enclosing the central disk and finitely many positive/negative lattice disks, with boundary avoiding sin zeros. Its zero count equals the number of disks. Each disk has count one; all exact roots real. The sign of the central root determines the positive count, not a convention about a zero limit. In particular a small positive central eigenvalue is not to be silently dropped. Fixed-phase estimates are not uniform as theta approaches pi.

## 3. Critical transition: detuning of order a

For theta=theta(a) tending to pi define the exact real parameter

    kappa_a=cot(theta(a)/2)/a.

Here S>0 for small a. Dividing (P01.1) by S gives the exact characteristic

    J_a(s)=(kappa_a s-1)E_a(s)-i(s+a^2 kappa_a)O_a(s).   (P01.3)

For bounded kappa_a, the limiting expression at the current value of the parameter is

    J_a(s)=kappa_a sin s-cos s+O_(K,M)(c^-1+a^2),
    |kappa_a|<=M.

Indeed -i times -i is -1, so the terms independent of kappa combine to -f-s f'=-cos. If kappa_a->kappa in R, we obtain compact-uniform convergence to kappa sin s-cos s. Equivalently if (theta(a)-pi)/a->delta, then kappa=-delta/2 by cot(pi/2+x)=-tan x. The critical scale is therefore order a in the natural deficiency-vector phase, not the ordinary derivative's boundary phase.

Let alpha(kappa) be the unique angle in (0,pi) with cot alpha=kappa. The entire limiting function equals sqrt(1+kappa^2) sin(s-alpha); all zeros are alpha+k*pi, k in Z, simple and real. For bounded kappa the positive and negative nearest roots stay a definite distance from 0. Thus a prefix rectangle from real part 0 to a number strictly between the n-th and (n+1)-st positive limiting roots gives n zeros; isolating disks identify each. The same argument applies to negative roots. If kappa_a->kappa finite, for each fixed n>=1,

    a*t_(a,theta(a),n) -> (n-1)pi+alpha(kappa).       (P01.4)

Quantitative version (uniform for kappa_a in any fixed compact real interval): compare directly with the limiting function at kappa_a. Choose a fixed disk radius smaller than both the lattice half-spacing and the minimum distance of the closest lattice root to zero over this parameter interval. For any fixed finite group of roots, on each such moving disk boundary the limiting function has modulus sqrt(1+kappa_a^2)|sin(s-s_0)| bounded below independently of kappa_a. Prefix rectangles with right side halfway between successive positive roots likewise have uniform positive boundary minima (on horizontal sides use the imaginary part, and on left side use min |sin alpha|>0). All contours lie in a fixed compact set. Rouche gives the ordered root and the bound

    a*t_(a,theta(a),n)=(n-1)pi+alpha(kappa_a)+O_(n,M)(c^-1+a^2).

For finite kappa, |alpha'(kappa)|=1/(1+kappa^2)<=1, so the error relative to alpha(kappa) additionally includes O(|kappa_a-kappa|). No assumption about a rate of convergence of kappa_a is hidden here. P02 will derive the first-order correction at the moving parameter; replacing kappa_a by a limit at that precision requires an explicit phase-detuning rate.

At kappa=0, alpha=pi/2 recovers Campaign V. As kappa tends to positive infinity, alpha tends to zero; as kappa tends to negative infinity, alpha tends to pi. These are limits of the limiting family, not a uniform estimate for unbounded kappa_a. They explain how the fixed-phase integer lattice and its exceptional central branch fit the transition. A separate argument would be required for phases whose detuning grows relative to a while still tending to pi.

## 4. Status and next step

P01 meets the fixed-phase and critical-scale objectives, including the exceptional root and positive index shift. Source actually inspected: Suzuki v4 (1.11) and §§6.3–6.5, including the explicit deficiency vectors and real/simple zero proof. These local theorems are imported, not newly proved. The limiting sine/cosine calculation uses Campaign V's internally derived estimates; independent S04-W02 audit remains pending (GitHub ref worker/s04-w02 again returned 404). No worker execution or results inferred. No numerical experiment, formal proof or originality assessment was performed in P01. In particular the general phase extension itself is Suzuki's established construction, not a new operator.

P02: use E_a=f-H/c+O(c^-2), O_a=-i[f'-(H'+f')/c]+O(c^-2), where H=F_1[b_0]. Derive explicit correction for critical moving kappa_a, tracking phase errors; derive the coefficient in (P01.2) using uniform parity estimates at s=at. Investigate spectral-flow/interlacing from the exact characteristic or boundary form, distinguishing standard extension theory from any new quantitative statements.

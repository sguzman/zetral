# CZG01 — Exact separated-endpoint carrier identity

2026-11-25. AI-assisted candidate deduction, unconditional in RH. Imports the paired/arithmetic Weil formula, the classical local zero count O(log(2+|u|)) and TPH01. No actual off-line zero, independent proof verification, numerical execution or priority claim. The paired-form source verification and its limitations are documented in research/SOURCE-PROVENANCE-CORRECTION.md. No new source retrieval in this milestone.

## 1. Cross identity for smooth profiles

Use Ff(z)=int f(x) exp(izx)dx, inner products linear in the first argument, and distinct ordinates z=(rho-1/2)/i=u+id with multiplicities m_z, |d|<1/2. Thus u=Im rho and d=1/2-Re rho. Fix compact smooth half-line profiles g_R,g_L supported strictly in (0,infinity), and let a contain their supports. Use physical vectors
    f_R(x)=exp(i omega x) g_R(a-x),
    f_L(x)=exp(i omega x) g_L(x+a),
zero outside the respective supports. For a sufficiently large their physical supports are disjoint. Define their ordinary convolution test W=g_R*conj(g_L) on the positive half-line. Direct substitution yields
    Ff_R(z) conj(Ff_L(conj z))
        =exp(2ia(z+omega)) int W(r) exp(-i(z+omega)r)dr.     (1)
In particular the right-edge cross orientation selects d<0, not d>0. If d<0 the prefactor has magnitude exp(2a|d|); reversing the two endpoints conjugates the form and selects the opposite orientation. The Fourier convention accounts for the carrier-relative real coordinate u+omega rather than u-omega.

The archimedean multiplier alpha(t) has off-diagonal kernel -k(|x-y|), k(s)=exp(-s/2)/(1-exp(-2s)), from the digamma difference form. Because the supports are disjoint, the diagonal constant does not contribute and the singularity is avoided. The pole kernel is 2cosh((x-y)/2), and the prime shift term has minus sign. In the cross form q(f_R,f_L), x=-a+t is the output coordinate, y=a-s the input, so y-x=2a-r with r=t+s. The modulation factor in each kernel term is exp(i omega(2a-r)). Define mu_(a,omega) as in TPH01, i.e. the twisted prime measure with r_n=2a-log n. The arithmetic form therefore gives
    exp(-a) q_a(f_R,f_L)
       = -int W(r) dmu_(a,omega)(r)
         +exp(-a) int W(r) exp(i omega(2a-r))
                     [2cosh((2a-r)/2)-k(2a-r)]dr.        (2)
Here the second integral is over the compact support of W, and 2a-r>0. Each positive prime shift is counted once. Combining (1), (2) and the exact paired zero form gives an identity with no archimedean diagonal or carrier-energy subtraction term.

## 2. Distribution identity for arbitrary compact smooth positive tests

For any W in C_c^infty(0,infinity), choose g_L=conj W and g_R a real positive-side smooth approximate identity of mass one supported in (epsilon,2epsilon). Then g_R*conj(g_L)->W in all C^j norms with supports in a common compact subset of (0,infinity). For fixed a exceeding this compact support and fixed omega the right side of the paired sum is absolutely convergent: repeated integration by parts gives rapid decay in |u+omega| uniformly in |d|<=1/2, and the classical local zero count makes the sum finite. The same estimates with uniform constants for the approximating tests justify dominated convergence in the paired sum, and the arithmetic integrals converge by uniform convergence. Consequently the identity extends to all such W:
    int W dmu_(a,omega)
       = exp(-a) int W(r) exp(i omega(2a-r))
                     [2cosh((2a-r)/2)-k(2a-r)]dr
         -sum_z m_z exp[-a+2ia(z+omega)]
                      int W(r) exp(-i(z+omega)r)dr.      (3)
This is an exact scalar test-function form of the off-diagonal explicit formula. It is not an absolutely convergent pointwise expansion of the atomic measure in r. The paired formula is invoked only on smooth compact vectors before taking the fixed-window approximation.

On the support of W, the scaled pole factor is exp(-r/2)+exp(-2a+r/2), and the scaled archimedean kernel is O_W(exp(-2a)) for large a. Thus for every fixed W and integer p>=1 the boundary integral in (3) is
    exp(2ia omega) int W(r) exp(-r/2-i omega r)dr
          + O_W(exp(-2a)),
of magnitude <=C_(W,p)(1+|omega|)^(-p)+O_W(exp(-2a)).
In particular it tends to zero for any divergent carrier, even if the carrier is much larger than doubly exponential in a. For bounded carriers the leading boundary integral must be retained; dropping it would wrongly predict disappearance of the untwisted PNT density.

## 3. Carrier-centered weighted counting bound

Write delta_z=1/2+d=1-Re rho>0 and v_z=u+omega. Repeated integration by parts against W(r)exp(d r) gives
    |int W(r) exp(-i(z+omega)r)dr|
         <= C_(W,p)(1+|v_z|)^(-p)
uniformly over the strip. Taking absolute values of the zero sum in (3) gives the explicit inequality
    |int W dmu_(a,omega)|
       <= C_(W,p)[(1+|omega|)^(-p)+exp(-2a)
                         + Z_(a,omega,p)],
    Z_(a,omega,p)=sum_z m_z exp(-2a delta_z)(1+|u+omega|)^(-p).   (4)
We retain all zeros, including critical-line ones; no cancellation is assumed. The weight exp(-2a delta_z) is exactly the attenuation by distance of rho from the right boundary of the strip. For fixed p>1 the local count gives
    sum_z m_z (1+|u+omega|)^(-p) <= C_p log(2+|omega|).
Indeed group by integer bins of u+omega, use comparability log(2+|u|)<=log(2+|omega|)+log(2+|u+omega|), and sum the resulting convergent weights. For R>=1 the tail obeys
    sum_(|u+omega|>R) m_z (1+|u+omega|)^(-p)
       <= C_p [log(2+|omega|)+log(2+R)] (1+R)^(1-p).   (5)
This follows by the same binning and integral comparison, with a constant depending on p. Since exp(-2a delta_z)<=1, (5) bounds the weighted tail too.

If delta_min(a,omega,R) is the minimum delta_z among zeros with |u+omega|<=R, with the empty case interpreted as +infinity, then
    Z_(a,omega,p) <= C_p log(2+|omega|) exp(-2a delta_min)
                     + C_p[log(2+|omega|)+log(2+R)](1+R)^(1-p).
The minimum exists for a nonempty finite window by discreteness. These are local weighted bounds, not a density theorem and not a uniform estimate in W or p.

CZG01 supplies the exact separated-endpoint explicit formula and the local zero attenuation needed for CZG02. In particular every nonzero attainable phase density has some fixed compact smooth detecting test W with nonzero integral against phi(r)exp(-r/2)dr; along its realizing sequence, (4) forces a nonvanishing weighted zero sum. No actual such phase density or off-line zero is exhibited. README unchanged.

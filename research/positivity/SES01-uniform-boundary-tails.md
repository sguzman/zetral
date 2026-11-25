# SES01 — Uniform trace-norm boundary tails in the Sobolev metric

2026-11-25. AI-assisted candidate deduction, without RH or a finite maximal-group hypothesis. Uses STS01's trace-class Sobolev form and the classical local zero count. No actual off-line zero, numerical experiment, fresh external source inspection, independent human/formal review or priority claim. This is a different generalized metric from ordinary L2.

## 1. Explicit half-line evaluation metric

Let H_+=H_0^1(0,infinity), the closure of compact smooth positive-half-line tests in the norm ||f||_S^2=int_0^infinity(|f|^2+|f'|^2). Use zero extensions, inner products linear in the first argument, and Ff(z)=int f(x)e^(izx) dx. For z=u+i d with 0<d<=1/2 put alpha=d+i u. The half-line Riesz representer of Ff(z) is
    k_alpha(s)=[exp(-alpha s)-exp(-s)]/(1-alpha^2), s>0.    (1)
Indeed its trace at zero vanishes, it and its derivative are square-integrable, and (-d^2/ds^2+1)k_alpha=exp(-alpha s), the ordinary L2 evaluation density. Integration by parts on compact smooth tests and density give the asserted Riesz identity. Such smooth decaying functions with zero endpoint trace belong to H_0^1 by cutoff and mollification (or the standard Sobolev trace characterization). No denominator vanishes in the stated d-strip.

For finitely many exponents, the Gram is exactly
    G_(ij)=<k_(alpha_j),k_(alpha_i)>_S
           =<k_(alpha_j),exp(-alpha_i s)>_2
           =1/[(1+conj(alpha_i))(1+alpha_j)(conj(alpha_i)+alpha_j)].
This follows by integrating the two exponentials in (1) and cancelling the factor 1-alpha_j. Thus the Gram is a diagonal congruence of the ordinary Cauchy Gram with factors kappa_j=1/(1+alpha_j), and is strictly positive for distinct exponents. In particular
    ||k_alpha||_S^2=1/[2d |1+alpha|^2].
The right endpoint uses k_(conj alpha). This is the elementary Sobolev analogue of LBS03's analytic factor, without an outer-function integral.

## 2. Uniform half-line truncation

Fix 0<delta<=1/2. For delta<=d<=1/2 and u real,
    |1-alpha^2|=|1-alpha||1+alpha| >= (1+u^2)/2,
    |alpha|<=sqrt(1+u^2).
Because exp(-s)<=exp(-ds), equation (1) gives
    |k_alpha(s)|+|k_alpha'(s)| <= C exp(-d s)/sqrt(1+u^2).
Let P_R be the orthogonal projection in H_+ onto the closed zero-extended subspace H_0^1(0,R). For R>=1 choose a smooth cutoff equal one before R-1 and zero at and beyond R, with uniformly bounded derivative (for R=1 use the same transition). The cut-off k has zero endpoint trace and lies in the projected subspace. The preceding pointwise bound and product rule give
    ||(I-P_R) k_alpha||_S <= C_delta exp(-d R)/sqrt(1+u^2).    (2)
The projection is at least as good as this explicit cutoff in norm. The constant is uniform in u,d,R in the stated range. The factor 1/sqrt(1+u^2) and the uniform exponential decay are both needed when summing infinitely many pairs.

## 3. Exact physical representers and local split-window isometry

Write H_S(a)=H_0^1(-a,a). For a pair z=u+i d, conj z, let k_(z,a) be its physical evaluation Riesz vector as in STS01. With S_c f(x)=f(x-c), R reflection, put
    v_(L,z,a)=exp(-d a-i u a) k_(z,a)=S_(-a) P_(2a) k_alpha,
    v_(R,z,a)=exp(-d a+i u a) k_(conj z,a)=S_a R P_(2a) k_(conj alpha).
Both equalities follow by testing the ordinary evaluation densities ell(s)=exp(-alpha s), conj ell(s) under translation/reflection and using the metric Riesz projection. The selected pair contributes exactly
    O_(z,a)=m_z exp(2da) [
             exp(2iua) v_L tensor v_R+exp(-2iua) v_R tensor v_L ],
where (v tensor w)f=<f,w>_S v. This sign follows from the scalar conjugation in the second slot, as in BPF03/LBS02.

In the fixed Hilbert space H_*=H_+ direct sum H_+, define
    J_a(g,h)=S_(-a) P_a g+S_a R P_a h.
The two terms are supported in disjoint half-intervals and have zero trace at the midpoint. The Sobolev metric is local, so these subspaces are exactly orthogonal (both functions and weak derivatives have disjoint supports a.e.). Thus J_a^*J_a=P_a direct sum P_a, and J_a J_a^* is the orthogonal projection onto the physical subspace of functions vanishing at x=0. The latter characterization follows by splitting a Sobolev function with zero midpoint trace and gluing zero extensions. No false isometry of arbitrary midpoint restrictions is used.

Define boundary vectors l_z=(k_alpha,0), r_z=(0,k_(conj alpha)) and
    D_(z,a)=m_z [exp(2iua) l_z tensor r_z+exp(-2iua) r_z tensor l_z].
For d>=delta, the difference between v_L and J_a l_z is bounded by ||(I-P_a)k_alpha||, since the projections are nested; similarly for v_R. By (2) and the norm formula in section 1,
    || exp(-2da)O_(z,a)-J_a D_(z,a) J_a* ||_1
       <= C_delta m_z exp(-d a)/(1+u^2), a>=1.           (3)
Here ||.||_1 denotes trace norm, and we used ||v tensor w||_1=||v||||w|| plus adding/subtracting one factor at a time. Likewise
    ||D_(z,a)-(J_a*J_a)D_(z,a)(J_a*J_a)||_1
       <= C_delta m_z exp(-d a)/(1+u^2).
These comparisons do not depend on the phases.

## 4. Uniform high-ordinate and small-deviation bounds

By the classical local count, the sum M=sum_(upper nonreal pairs) m_z/(1+u^2) is finite. More quantitatively its tail for |u|>=U>=3 is <=C(1+log U)/U by comparison with the integral of log(2+x)/x^2. For d>=delta each normalized pair operator exp(-2da)O_(z,a), as well as D_(z,a), has trace norm <=C_delta m_z/(1+u^2): use the finite-interval Riesz norm estimate from STS01 with
    exp(-2da) I_a(d)=(1-exp(-4da))/(2d)<=1/(2delta),
or use the projection bound in section 3. Therefore any subseries of normalized pairs with d>=delta converges absolutely in trace norm, uniformly in a and phases, and the high-ordinate tail is <=C_delta(1+log U)/U. The difference estimates (3) also sum, with bound C_delta exp(-delta a) M. This is a stronger form of compact control than finite-set Gram convergence.

For real ordinates and all lower pairs with |d|<=delta, no endpoint normalization per pair is needed: STS01 gives the full trace norm upper bound
    ||Q_low(a)||_1 <= C a exp(2delta a)
by summing m_z/(1+u^2) over the corresponding full ordinate set. This includes real zeros even if RH is true. The constant need not be uniform over alternate zeta-like zero sets, but is finite for the classical count under discussion.

SES01 completes the uniform summable endpoint approximation. SES02 can now scale the full trace-class operator at any B=sup |Im z|>0, choose fixed 0<delta<B and separate real/small deviations by the last bound. For the remaining terms, exp(-2(B-d)a) is bounded by one and tends to zero for d<B; dominated convergence in the trace-norm majorant does not require a strict gap or a finite maximal group. The actual ordered spectral conclusion is reserved for SES02. No ordinary L2 result, actual off-line zero or RH proof. README unchanged.

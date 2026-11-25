# QIR02 — Sampled Hankel-pencil recovery with deterministic error enclosures

2026-11-25. AI-assisted internal candidate. Conditional on BPF04/QIR01's selected group and certified error budget. Classical Prony/matrix-pencil and Vandermonde perturbation methods, not claimed as new. No fresh literature inspection, numerical experiment, actual spectral observations, actual off-line zero, independent human/formal verification or RH proof.

## 1. Finite samples and alias restriction

Let a_n=a_0+nh, n=0,...,2P-1, with h>0, a_0 sufficiently large and P an a priori upper bound on the number r of distinct signed frequencies in one selected group. QIR01 gives the model
    y_n=sum_(j=1)^r b_j z_j^n+e_n, |e_n|<=epsilon,
    z_j=exp(i omega_j h), b_j=c_j exp(i omega_j a_0),
when the deviation d is known and y_n=exp(-2d a_n) Dtilde(a_n). Here c_j are the BPF04 coefficients; all are nonzero. The error epsilon includes the asymptotic remainder and spectral observation error. An estimated deviation can instead use QIR01's normalization budget.

More generally normalize by a fixed trial d_0, not necessarily the true deviation:
    z_j=exp(2(d-d_0)h+i omega_j h),
    b_j=c_j exp(2(d-d_0)a_0+i omega_j a_0).
In this exact exponential model all nodes have the same radius, and the error is the remainder and observation error multiplied by the actual trial-normalization factor (bound it using an independent interval for d). This version permits joint estimation of d and omega rather than treating the whole exponent mismatch as noise. All the finite-matrix estimates below apply with certified bounds
    |z_j|<=R, R>=1, |z_j|>=rho_min>0,
    |z_i-z_j|>=delta>0 for i!=j, 0<delta<=1+R,
    |b_j|>=m>0, r<=P.
For a single node the separation constraint is vacuous; one may choose any delta in the given range. For r=0 use the pure-noise case. These are hypotheses or externally certified enclosures, not quantities inferred from a clean-looking plot.

Uniform samples cannot distinguish omega and omega+2pi k/h if coefficients are freely fitted, because the initial phase may be absorbed in b. Thus assume a known signed frequency interval [−Omega,Omega] with Omega h<pi. With a certified angular guard pi-Omega h>0, no alias ambiguity occurs under small enough perturbations. If physical frequency separation is Delta and Omega h<=pi/2, then h|omega_i-omega_j|<=pi, and
    |z_i-z_j|>= (2/pi)rho_min h Delta
by the elementary lower bound on sin on [0,pi/2]. In the less restrictive guard case use the minimum chord distance over the allowed frequency-difference interval, not h Delta blindly. The zeta ordinates are unbounded, so an a priori band for a selected group is an additional hypothesis, not a consequence of sampling.

## 2. Certifying the number of modes

Let V_q be the q-by-r Vandermonde matrix (V_q)_(n,j)=z_j^n for n=0,...,q-1. For q>=r, a uniform lower singular bound follows from the first r rows. Indeed the columns of (V_r^T)^-1 are coefficients of Lagrange polynomials
    L_j(z)=prod_(i!=j)(z-z_i)/(z_j-z_i).
Their coefficient l1 norms are <=((1+R)/delta)^(r-1) (multiply polynomial coefficient l1 bounds). Hence ||V_r^-1||_2<=sqrt(r)((1+R)/delta)^(r-1) by the Frobenius bound; transpose preserves singular values even over complex scalars. Define
    v= (delta/(1+R))^(P-1)/sqrt(P).
Then sigma_min(V_q)>=v for every q>=r, including q=P. This conservative lower bound deteriorates rapidly at near collisions or large P; no optimal conditioning claim.

Define exact P-by-P Hankel matrices H_0=(y^0_(i+j)) and H_1=(y^0_(i+j+1)), where y^0_n is the signal without e_n, indices 0<=i,j<P. Factorizations are
    H_0=V_P diag(b_j) V_P^T,
    H_1=V_P diag(b_j z_j) V_P^T.
These are transpose, not conjugate-transpose, factorizations. H_0 has rank r because V_P has full column rank and V_P^T is surjective. Its smallest nonzero singular value is >=m v^2=:g: V_P^T on its kernel complement has lower singular bound v, multiplication by diag(b) has bound m, and V_P has bound v on all coefficient vectors. The observed matrices Y_0,Y_1 differ in operator norm by at most P epsilon (entrywise bound via Frobenius). Thus if
    g>2P epsilon,
any singular-value threshold strictly between P epsilon and g-P epsilon counts exactly r singular values of Y_0 above threshold. For pure noise all singular values are <=P epsilon, so the same threshold yields r=0 under the assumed model class. No inference about r outside this class, no conclusion from a failure of the margin. Verified numerical singular-value errors must be added to the perturbation or the threshold margin; ordinary floating-point SVD is not by itself a certificate.

## 3. Recovering nodes with a matching error bound

When r>=1 is known or certified, use the leading r-by-r blocks of Y_0,Y_1, denoted Y_0r,Y_1r (all required samples already available). Set
    v_r=(delta/(1+R))^(r-1)/sqrt(r),
    U_r=(r sum_(n=0)^(r-1) R^(2n))^(1/2),
    kappa=U_r/v_r, g_r=m v_r^2.
Then ||V_r||<=U_r, ||V_r^-1||<=1/v_r and ||H_0r^-1||<=1/g_r. In particular Y_0r is invertible if r epsilon<g_r, with inverse norm <=1/(g_r-r epsilon) by the Neumann series. The exact matrix pencil reduces to
    C=H_1r H_0r^-1=V_r diag(z_j) V_r^-1.
The observed matrix Chat=Y_1r Y_0r^-1 satisfies
    Chat-C=[(Y_1r-H_1r)-C(Y_0r-H_0r)]Y_0r^-1,
    ||Chat-C||<=r epsilon (1+R kappa)/(g_r-r epsilon).
Conjugating to the diagonal basis yields the enclosure radius
    q=kappa r epsilon (1+R kappa)/(g_r-r epsilon).         (1)
Every eigenvalue of Chat is within q of some z_j: outside the union of closed q-disks, the resolvent of the diagonal matrix has norm <1/q and a Neumann argument excludes an eigenvalue. If 2q<delta, enlarge q by an arbitrarily small amount while keeping disks disjoint. The same exclusion applies to C+t(Chat-C) for 0<=t<=1; continuous characteristic roots cannot cross the disk boundaries. Thus each disk contains exactly one observed root (counted algebraically), and there is a bijective matching with |zhat_j-z_j|<=q. This avoids assuming that a one-sided eigenvalue inclusion proves correct pairing. Computed-root enclosures, if used, must contribute their own error to q or be proved by a validated polynomial/root count.

If q<rho_min, zhat_j is nonzero and
    ||zhat_j|-|z_j||<=q,
    |arg(zhat_j)-arg(z_j)| modulo 2pi <= arcsin(q/rho_min).
For the angular bound the tangent lines from the origin to the disk of radius q about a center of modulus >=rho_min enclose its possible angles (equivalently minimize Euclidean distance from the center to a ray). If this bound is less than the angular guard, the principal argument is unambiguous and
    |omegahat_j-omega_j|<=arcsin(q/rho_min)/h.             (2)
For the jointly scaled version estimate d by d_0+log|zhat_j|/(2h). The mean-value theorem gives
    |dhat_j-d|<=q/[2h(rho_min-q)].
All true nodes have the same radius, so intersect the resulting intervals across j; disjoint certified intervals would contradict at least one hypothesis or the error budget. This joint estimate may avoid QIR01's direct scale-as-noise distortion, but the amplitude b_j still contains the possibly badly conditioned gain exp(2(d-d_0)a_0). The input lower bound m and error epsilon must account for it.

## 4. Coefficient recovery and absolute phase

Given matched nodes, solve the leading square Vandermonde system Vhat b_hat=(y_0,...,y_(r-1)). Put R_1=R+q and
    L_v=(r sum_(n=1)^(r-1) n^2 R_1^(2(n-1)))^(1/2).
The factorization of x^n-y^n gives ||Vhat-V_r||<=q L_v. If q L_v<v_r then Vhat is invertible and
    ||b_hat-b||_2 <= [sqrt(r)epsilon + q L_v ||b||_2]/(v_r-q L_v).    (3)
Use a certified upper bound on ||b||_2 or the amplitude sum. For r=1 the sum is zero and the single sample directly estimates b. This is a sufficient error bound; overdetermined least squares may be better but is not analyzed here.

When d is known, b_j=c_j exp(i omega_j a_0), so multiplication by exp(-i omegahat_j a_0) introduces absolute coefficient error at most
    |b_hat_j-b_j|+|b_j|min(2,a_0|omegahat_j-omega_j|).
However the modulus |c_j|=|b_j| has error at most |b_hat_j-b_j|, with no large-window phase factor. This matters for QIR03: the positive integer multiplicity is m_j=2|d+iu_j||c_j|/|beta_j|^2. Absolute phase is not necessary for multiplicity certification if scale/gain and geometry can be enclosed. If d is jointly estimated, |c_j|=exp(-2(d-d_0)a_0)|b_j|; the error of the recovered d must be propagated through this real factor. The phase-free shortcut does not eliminate the gain issue.

## 5. Failure modes and scope

The estimates apply to finite sampled normalized traces; no integration, analytic continuation of noisy data, or simple-root assumption on the original ordinary spectrum is required. The Hankel signal model already sums through crossings. Input restrictions are material:
- Uniform-grid aliases cannot be resolved in the unrestricted exponential-sum class. An independent frequency band or additional sampling design is required; no such unconditional band has been established for zeta's possible off-line ordinates.
- Without a nonzero amplitude lower bound, adding a tiny mode changes every finite sample by less than epsilon (take unit-circle nodes), so the count is not uniformly identifiable.
- Without separation, in the generic model b exp(i omega nh)-b exp(i(omega+xi)nh) has magnitude <=|b| |xi| nh and approaches zero uniformly on any fixed finite sample range as xi tends to zero despite nonzero amplitudes. Reflecting the two terms by conjugation gives the same obstruction for real traces. This is a counterexample to uniform recovery in the generic sample model, NOT an assertion that arbitrary coefficients can arise from actual zeta zero sets.
- The bound (1) may be extremely pessimistic: delta can be tiny, P large, and attenuated amplitudes m small. No necessity of this particular margin or guaranteed practical sample cost. A smaller epsilon may also require arithmetic spectral computations that remain unavailable.
- The error budget of QIR01 requires finite, verified constants; neither an unknown o(1) nor a small fitted residual proves the hypotheses. No sample data or numerical result has been manufactured in this milestone.

QIR02 complete as conditional candidate: finite 2P samples, certified Hankel rank under a margin, matched node disks via a perturbed diagonal pencil, frequency and joint deviation errors under alias guards, and coefficient bounds. QIR03 next: exploit phase-free multiplicity recovery, bound the recursive Cauchy attenuation and gain uncertainty, derive integer-certification margins and meaningful counterexamples/limits. No novelty or independent verification claim. README unchanged.

# MVI03 — Finite-time heat matrix bounds and certified moment approximation

2026-11-25. AI-assisted internal candidate without RH. Uses MVI02's finite arithmetic seeds and quantitative visibility, CPC04 and APM01. No numerical calculation or independent review. The elementary min-max and generating function arguments below are derived directly; no novelty claim.

Fix B,z,mu>0 and V:C^m->H as in MVI02, with B-z=P-VV*, P>=mu I. The notation mu here is the coercivity constant, not a spectral measure. Write W=||V||² (a computable upper bound W>=||V||² may be used throughout). If V=0 there is no negative eigenvalue below z; assume otherwise. Let lambda_1<=lambda_2<=... be the ordinary eigenvalues with multiplicities, r=#{lambda_j<z}, and for t>0 define the finite positive matrix
    G(t)=V* exp(-t(B-z)) V.
It is well defined even at times when the full heat operator is not trace-class. Let g_j(t) be its decreasing eigenvalues, including zero padding through m.

## 1. Uniform spectral-depth enclosure

For j<=r, let E_j project onto any first j orthonormal eigenvectors (within a repeated eigenvalue choose an arbitrary subspace). MVI02 implies E_j V V* E_j>=mu E_j, since ran E_j is in the full negative subspace. The j nonzero eigenvalues of V* E_j V are thus >=mu. Spectral comparison gives G(t)>=exp(t(z-lambda_j)) V* E_j V. Hence
    g_j(t)>=mu exp(t(z-lambda_j)), j<=r.
For the upper bound remove the positive matrix contribution of the first j-1 orthonormal eigenvectors; its rank is <=j-1. On the remaining spectral subspace exp(-t(B-z))<=exp(t(z-lambda_j)) I. Min-max on C^m therefore gives
    g_j(t)<=W exp(t(z-lambda_j)), 1<=j<=m.
In particular r<=m, and g_j(t)<=W for j>r. For each j<=r we have the rigorous finite-time enclosure
    [log(g_j(t)/W)]/t <= z-lambda_j <= [log(g_j(t)/mu)]/t.    (1)
The width is log(W/mu)/t, independent of j. If r>0 then W>=mu automatically. For j<=r the log growth rate of g_j(t) is exactly the negative depth z-lambda_j, including repeated eigenvalues. No infinite-time approximation of eigenvectors is required.

At any finite time the number of g_j(t)>W is a certified LOWER bound on r. If r>0 and delta=z-lambda_r>0, equality holds for all t>log(W/mu)/delta. Equivalently for any fixed d>0, all eigenvalues lambda_j<=z-d are detected by t>log(W/mu)/d. This does not certify absence of an eigenvalue arbitrarily close to z from below. A two-sided count would require independent control of a spectral gap or a positive complement as in CPC04. With a numerical interval [g_j^-,g_j^+] the lower depth in (1) uses g_j^- and the upper uses g_j^+ (positive lower endpoint required).

## 2. All positive times accessible from finite moments with explicit error

APM02's Taylor series is local. Here a generating-function method gives convergent certified polynomial approximations for G(t) at arbitrary fixed t>0, using the block moments. Take a certified ell<=inf B and X=B-ell I>=0. APM01 gives an exponential-moment radius and bound: choose b>0 and C_b<infinity such that
    tr(V* exp(b X) V)<=C_b.
For example for each column v the factorial estimate ||B^n v||<=||Ev||_(1/4) K_a^n n! gives int exp(b |lambda|)dmu_v<=||v||²+||v||||Ev||_(1/4) b K_a/(1-b K_a) for b K_a<1; multiply by exp(-b ell) and sum. These constants are symbolic until the Sobolev multiplier and symbol constants have certified numerical values. The shifted matrix moments N_j=V*X^j V are binomial combinations of M_j.

Fix c>0 with c<=b. Define the degree-k polynomial
    L_k(y)=sum_(j=0)^k binom(k,j)(-y)^j/j!.
By summing the binomial series for |w|<1 (or expanding the exponential), its generating function is
    sum_(k>=0) L_k(y) w^k=(1-w)^-1 exp[-y w/(1-w)].
Let q=t/(t+c) in (0,1). Substitution gives
    exp(-t x)=(1-q) sum_(k>=0) q^k L_k(c x), x>=0.
Choose any rho with q<rho<1. On |w|=rho, Re(w/(1-w))>=-rho/(1+rho): this follows by writing its real part as (rho cos theta-rho²)/(1-2rho cos theta+rho²), an increasing function of cos theta. Cauchy's coefficient bound gives
    |L_k(c x)| <= rho^-k (1-rho)^-1 exp(c x rho/(1+rho)).
Consequently for p_N(x)=(1-q) sum_(k=0)^N q^k L_k(c x),
    |exp(-t x)-p_N(x)|
      <= [(1-q)/((1-rho)(1-q/rho))] (q/rho)^(N+1) exp(b x).
Indeed c rho/(1+rho)<=b. This pointwise bound also justifies spectral integration of the truncated series and its limit. For any unit coefficient vector h, the scalar measure of Vh is dominated in exponential integral by C_b (positive matrix norm <= trace). Therefore the finite matrix
    G_N(t)=exp(t(z-ell)) V* p_N(X) V
has an explicit operator-norm error
    ||G(t)-G_N(t)|| <= exp(t(z-ell)) C_b
             [(1-q)/((1-rho)(1-q/rho))] (q/rho)^(N+1).    (2)
The right side tends to zero for fixed t,c,rho, and G_N uses moments only through degree N. Weyl inequalities then enclose each g_j(t) by the computed matrix eigenvalues plus/minus this error, with any additional certified moment/rounding error added. The argument is not a formal Taylor extrapolation and works even for arbitrarily large fixed positive time. It uses a standard Laguerre polynomial generating function with a directly proved bound; no special-function quadrature theorem is needed.

The result yields a constructive, finite moment witness of any strict negative eigenvalue for the actual arithmetic seed family: choose t large enough that the heat matrix eigenvalue exceeds W, then choose N large enough to preserve that strict margin. This is a mathematical existence and convergence result, not an efficient algorithm: seed count, C_b, exp(t(z-ell)), q near one, and moment conditioning can all be prohibitive. Actual arithmetic moment enclosures and their computational costs have not been executed. It gives no unconditional RH positivity certificate. MVI03 complete as candidate; next audit and assess a sharper arithmetic implementation direction.

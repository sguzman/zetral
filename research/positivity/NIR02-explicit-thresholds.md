# NIR02 — Separation-dependent thresholds and robust negative Gram certificates

2026-11-25. Internal candidate deduction, without RH, extending NIR01 (3269932f09dec298971978047b069f4f75f44bf4). No human/formal/numerical verification or priority claim. Paired-zero form and smooth core imported from NIR01/GSG01. Current literature search returned Bombieri (2000) abstract (https://www.bdim.eu/item?fmt=pdf&id=RLIN_2000_9_11_3_183_0) and Hasanalizade–Shen–Wong, Counting zeros of the Riemann zeta function (https://www-math.nsysu.edu.tw/~pjwong/stuff/CountingRiemannZeros.pdf), search snippets on explicit zero counts; no full PDF proof inspected and no numerical zero-count constant imported. We use a specified upper bound C_Z for the classical unconditional unit-interval zero count with multiplicity.

## 1. Finite certified data and explicit smooth interpolants

Keep Gamma, m_z, V, J, q and Fourier convention of NIR01. Let R>=2 be an integer. Assume the complete list of distinct ordinates in |Re z|<=R, including multiplicities and conjugation pairing, is available with certified approximations vhat, one per distinct ordinate. For exact data take location error e=0. For approximate data require |v-vhat|<=e, approximate conjugation pairing, |Im vhat|<=1/2, e<=1, distinct approximate nodes, and known multiplicities m_v. These are hypotheses, not claims that any actual off-line zero exists or has been certified. The chosen k nonreal pairs must remain nonreal at their approximate nodes. Denote the number of distinct band nodes M>=2, total band multiplicity W=sum_band m_v, Z=R+2, and Delta=min_(vhat != uhat)|vhat-uhat|>0. Then |vhat|<=Z. Sharper target-specific products may replace the worst-case Delta^(M-1).

Choose h0=1/(4Z), q0=M+1, l=h0/[2(q0+1)]. Let phi be a fixed nonnegative compact smooth bump supported in (-1,1), integral one, and phi_l(x)=l^-1 phi(x/l). Let rho_l=(2l)^-1 1_[-l,l]. Take
    chi=phi_l*rho_l^{*q0}.
It is smooth with support in [-h0/2,h0/2], integral one. For 0<=j<=q0, distribute derivatives over j separate box factors; the distributional derivative of a box is a signed measure of total variation 1/l. Young's inequality for finite measures proves
    ||chi^(j)||_1<=l^(-j),
    ||chi^(j)||_2<=l^(-j-1/2)||phi||_2.
At each vhat, |F[chi](vhat)-1|<=Z h0 exp(Z h0)<1/2, by |exp(iwx)-1|<=|wx|exp(|wx|). For each selected target what put
    p_w(z)=prod_(vhat != what)(z-vhat),
    k_w=p_w(iD)chi/[p_w(what)F[chi](what)].
Its transform takes exact cardinal values at all approximate band nodes. Expanding the polynomial by elementary symmetric products and using the derivative bounds gives, for j=0,1,2,
    ||k_w^(j)||_1<=D l^(-j),
    ||k_w^(j)||_2<=D l^(-j-1/2)||phi||_2,
    D=2[(Z+l^-1)/Delta]^(M-1).
Indeed the sum of absolute coefficients weighted by l^-degree is at most prod_(vhat != what)(l^-1+|vhat|); the denominator is at least Delta^(M-1)/2. This turns NIR01's otherwise implicit derivative constants into finite-data bounds. All supports lie strictly inside (-h0,h0).

## 2. Tail and window threshold

Take h>0, r in (0,1), Uhat=max selected |Re what|, and choose the band so R-Uhat>exp(h/2)/(hr). Define g_w(x)=exp(-i Re(what)x)/(2h) on [-h,h], zero elsewhere. Its transform is G_w(z)=sinc(h(z-Re what)); at what its value L_w=sinh(h |Im what|)/(h |Im what|)>1. Put L=min selected L_w and a_n=h0+nh, b_w=k_w*g_w^{*n}/L_w^n, n>=0. The b_w are compact smooth, supported strictly in (-a_n,a_n); their transforms take cardinal values at approximate nodes, and
    ||b_w||_1<=D L^-n,
    ||b_w||_2<=D l^-1/2 ||phi||_2 L^-n.
For actual ordinates outside the complete band, |G_w(z)|<=r. Two integrations by parts bound |F[k_w](z)|<=exp(h0/2)D l^-2/|Re z|^2. Let C_Z be any certified number satisfying sum_(j<=|Re z|<j+1) m_z <= C_Z log(j+3) for all integers j>=1. It exists by the classical local zero count. Then
    sum_(|Re z|>R) m_z/|Re z|^4 <= T_R,
    T_R=C_Z [log(4(R-1))/3+1/9]/(R-1)^3.
Indeed bound the tail by sum_(j>=R) C_Z log(j+3)/j^4 <= C_Z integral_(R-1)^infinity log(4x)x^-4 dx, using monotonicity for x>=1. Thus the tail sampling norm of each b_w is <=D l^-2 exp(h0/2) sqrt(T_R)(r/L)^n. The formula is explicit given a certified C_Z; no actual numeric constant or zero list was evaluated in this milestone.

For the selected conjugate pairs j define f_j=(b_(z_j)-b_(conj z_j))/sqrt(2m_j) using their matched approximate labels. Define
    S=(sum_(j=1)^k 2/m_j)^1/2,
    A0=D l^-1/2 ||phi||_2 S,
    C0=D l^-2 exp(h0/2) sqrt(T_R) S.
Then the L2 synthesis operator c -> sum c_j f_j has norm <=A0 L^-n, and its sampling tail outside the band has norm <=t_n=C0(r/L)^n. For exact data the samples on the band are exactly the orthonormal negative vectors Yc of NIR01; J preserves the band and complement, so q<=-(1-t_n^2)||c||^2. A sufficient explicit window is
    n=max(0,ceil(log(max(1,4C0))/log(L/r))), a>=h0+nh,
which gives t_n<=1/4 and q<=-15||c||^2/16 in the exact-data case. The bound is not optimized; the finite band and h,r must be mutually consistent and the whole band must be certified.

## 3. Error in approximate zero locations

Use the same tests built from the approximate centers, not from the exact nodes. On the strip |Im z|<=1/2, differentiation under the integral gives
    |F[b_w]'(z)|<=a_n exp(a_n/2) D L^-n
from support and L1 bounds. The segment from vhat to v stays in that strip. The interpolation error at each actual band node is at most e a_n exp(a_n/2)D L^-n. Summing weighted squared errors over the band and taking the coefficient synthesis bound gives
    ||E_in|| <= u_n=e sqrt(W) a_n exp(a_n/2) D S L^-n.
Thus actual samples in the band equal Yc+E_in c, where Y is the exact orthonormal negative target map indexed by actual ordinates. The tail remains bounded by t_n irrespective of approximate finite interpolation errors, because it was estimated directly at actual tail ordinates. Since the two regions are invariant under conjugation,
    |q(sum c_j f_j)+||c||^2| <= (2u_n+u_n^2+t_n^2)||c||^2.
In particular, if t_n<=1/4 and
    e <= L^n/[8 sqrt(W) a_n exp(a_n/2) D S],
then u_n<=1/8 and 2u_n+u_n^2+t_n^2<=21/64. Consequently q<=-43||c||^2/64. Strict negativity implies linear independence of the tests even with location errors. Minmax, together with the L2 synthesis upper bound, yields for all a>=a_n
    n_-(A_a)>=k,
    lambda_k(A_a)<=-(43/64) L^(2n)/A0^2.
This estimate is a sufficient robust certificate under the stated finite-data and tail hypotheses. The location error tolerance is not monotone in n in general; it must be checked at the chosen n. Because L<=exp(h/2), the displayed tolerance can shrink as windows grow. Missing or incorrectly paired nodes, unknown multiplicities, and unverified completeness of the band are NOT covered by this error estimate. For a given certified approximate list, use its actual Delta and L in the calculation, rather than pretending the unknown true separations are numerically known. Approximation-independent uniform constants could be obtained by lower bounds for Delta and d_min and upper bounds for Uhat and W.

## 4. Disposition and limitations

NIR02 complete as internal candidate. Explicit gap dependence D, support threshold, negative Gram margin, and a separate location-error tolerance are established. Very conservative conditioning, especially the power Delta^-(M-1), is a genuine limitation. No practical numerical certification, actual zero data, or new RH result. Next NIR03: matching indexed growth exponents and parity. NIR01 already supplies the lower exponent; investigate removing finitely many faster-growing pairs by a codimension argument and controlling the remainder under the appropriate bounded-density or log-energy hypotheses, rather than redoing the lower bound. No novelty claim or independent verification. README unchanged.

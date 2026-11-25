# DZO01 — Fixed lacunary complex-strip densities and exact cancellation

2026-11-25. AI-assisted candidate construction of an ABSTRACT zero system, not the zeros of zeta. No actual off-line zeta zero, RH proof, numerical experiment, independent verification or priority claim. Uses elementary Fourier analysis and LZC01's strip multipliers. Fix 0<b<1/2 and any desired exponent s in (2b,1]. Put kappa=s-2b>0.

## 1. A fixed positive counting measure with sparse off-line mass

Fix r>0 and delta>0. Let psi be a nonzero real even nonnegative compact smooth function supported in (-delta/2,delta/2). Put p(u)=Fpsi(u)^2, where F uses exp(iux). It is nonnegative, even, Schwartz on the real line and entire, with
    Fp(v)=2pi (psi*psi)(v)>=0, supp Fp subset [-delta,delta].
It is also rapidly decreasing in u uniformly on each fixed imaginary strip, by integration by parts in psi. Define p_b(u)=Re p(u+ib), equivalently [p(u+ib)+p(u-ib)]/2. Contour shifts, justified by that decay, give Fp_b(v)=cosh(bv) Fp(v). Thus p_b is a real even Schwartz function, not necessarily nonnegative.

Choose a_l=a_0+l A, l>=1, with fixed A sufficiently large that consecutive k_l=2a_l-4r are separated by more than 4r+2delta, and L_l=exp(kappa a_l) obeys L_(l+1)>=2L_l. Choose a_0 large so k_1>4r+2delta and T_1=exp(L_1)>10. Put T_l=exp(L_l); hence T_(l+1)>=T_l^2. These sequences are fixed once and for all, NOT chosen for each later test window.

Use the real counting baseline
    beta(u)=log(2+|u|/(2pi))/(2pi).
Then int_0^T beta(u)du = T/(2pi) log(T/(2pi))-T/(2pi)+O(log(2+T)) as T->infinity. Also 2pi beta differs by a bounded function from the project's log weight and from the actual archimedean alpha.

Fix 0<eta<1. For a common small constant eps>0 define even horizontal densities
    r_off(u)=eps sum_l L_l sum_(sigma=+/-1)
          p(u-sigma T_l)[1+eta cos(k_l(u-sigma T_l))],
    r_0(u)=beta(u)-eps sum_l L_l sum_(sigma=+/-1) p_b(u-sigma T_l).
The off-line density is nonnegative. The second density can be made strictly positive by choosing eps small uniformly in u.

Here is a useful domination lemma. For each fixed gamma in [0,1] and N>=2,
    sum_l L_l^gamma sum_(sigma=+/-1) (1+|u-sigma T_l|)^(-N)
       <= C_(gamma,N) [log(2+|u|)]^gamma.              (1)
For U=|u| large split T_l into <=U/2, between U/2 and 2U, and >=2U. The middle range has at most a bounded number of terms by lacunarity, with L_l=O(log U). In the lower range the distance is >=U/2; for gamma>0 the sum of L_l^gamma up to 2U is O((log U)^gamma) by geometric growth, and for gamma=0 the number is O(1+log log(2+U)). The factor U^-N controls both. In the upper range the distance is >=T_l/2 and the convergent tail sum L_l^gamma T_l^-N is bounded uniformly. The opposite sign is covered by the same estimates. Bounded U is immediate from convergence. This proves (1), including gamma=0. Applying it to the Schwartz envelopes proves |r_0-beta|+r_off<=C eps log(2+|u|), and hence r_0>=beta/2 after reducing eps. The sums converge locally uniformly; rapid tails also justify all fixed-test integrations below.

Let nu_b be the vertical probability measure with masses 1/2 at +/-b. Define the fixed positive strip measure
    mu_cont(du,dv)=r_0(u)du delta_0(dv)+r_off(u)du nu_b(dv).
It is invariant under both conjugation and reflection, with all nonreal mass at deviation b. It has local total density O(log(2+|u|)).

Moreover the total off-line mass on 0<=u<=T is O(log(2+T)): for T_l<=2T use the finite envelope L1 norms and sum L_l<=C log(2+T); for T_l>2T use distance >=T_l/2 and bound the contribution by C T sum L_l/T_l^2, uniformly bounded. The same absolute integral estimate holds for r_0-beta with p_b in place of p. Consequently the positive-ordinate total mass satisfies the Riemann-von Mangoldt main term with O(log(2+T)) error, and the off-line mass is only logarithmic globally. This does not claim the exact zeta counting function or its arithmetic origin.

## 2. Exact cancellation of the nonoscillatory population

For a compact smooth scalar test h(s), use the paired analytic sampling functional int Fh(u+iv) dmu_cont. The vertical average at +/-b replaces h(s) by h(s)cosh(bs). The contour-transform identity for p_b implies
    int p_b(u-T) Fh(u) du
        = int p(u-T) F[h(s)cosh(bs)](u) du.
Indeed both sides equal int h(s) cosh(bs) exp(iTs) Fp(s) ds, with absolute integrations for the fixed shifted Schwartz envelopes. Thus the entire nonoscillatory off-line contribution cancels its subtracted real density EXACTLY at every physical support length. The absolute integrability of the original sums follows from (1) and rapid strip decay of Fh; one may first use finite sums and then pass to the limit.

Define the oscillatory translated envelopes
    r_(l,sigma)(u)=p(u-sigma T_l)cos(k_l(u-sigma T_l)).
Their Fourier transforms in the physical difference coordinate v are
    Fr_(l,sigma)(v)=exp(i sigma T_l v)
                     [Fp(v+k_l)+Fp(v-k_l)]/2.
They vanish except in the two narrow bands of radius delta about +/-k_l. The remaining paired form of mu_cont on compact smooth f, with h_f(v)=int f(y+v) conj f(y)dy, is therefore exactly
    q_cont,a(f)=int beta(u)|Ff(u)|^2 du
        +eps eta sum_(l,sigma) L_l
              int h_f(v) cosh(bv) Fr_(l,sigma)(v) dv.  (2)
For support in (-a,a), h_f vanishes for |v|>=2a, so only finitely many bands with k_l-delta<2a can contribute. No convergence of an untruncated high-shift physical kernel is needed.

## 3. Bounded ordinary long-shift perturbation

The first term of (2) is the positive log multiplier with ordinary symbol 2pi beta, differing from L_1 only by a bounded multiplier. The autocorrelation satisfies |h_f(v)|<=||f||_2^2 by Cauchy-Schwarz, including the zero extension. For each active l the total contribution has absolute value at most
    C eps eta L_l exp(b(k_l+delta)) ||f||^2
       <= C' exp(s a_l)||f||^2,
since L_l=exp(kappa a_l) and k_l=2a_l-4r. An active l has a_l<a+2r+delta/2; the a_l form an arithmetic progression of fixed spacing, so their exponentials sum to at most C exp(s a). Thus
    |q_cont,a(f)-int beta |Ff|^2|
          <= C exp(s a)||f||_2^2.                     (3)
By polarization this is a bounded Hermitian ordinary form difference. In particular the continuous paired form on every fixed window has a closed semibounded realization on the support-constrained log form domain, with compact inclusion as in the original ordinary operator. No bound on pointwise negative squares alone was used: the large positive and negative nonoscillatory samples cancel exactly.

DZO01 completes the fixed continuous density construction, count bounds and long-shift cancellation. DZO02 must discretize with integer point masses, show the ordinary quadrature error is lower order, and prove the matching lower exponent on modulated endpoint trials. DZO03 will verify the projected discrepancy and entire-product realization. The constructed measure is not a zeta zero set. README unchanged.

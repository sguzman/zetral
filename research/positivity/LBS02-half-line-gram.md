# LBS02 — Log-metric boundary Gram and multiscale prefactors

2026-11-25. AI-assisted candidate deduction. Conditional on a finite selected set of all off-critical-line conjugate pairs with deviation greater than b, 0<=b<1/2, and a strictly positive gap from b. Uses LBS01 and BPF03. No assumption of uniform local weighted off-line density for the lower remainder. No actual off-line zeros, independent proof review, numerical experiment, fresh literature inspection, priority claim or RH proof. The eigenvalues in this note belong to the log-energy metric, not the ordinary L2 operator.

## 1. Exact boundary evaluation representers

Use the Hilbert space H_w with inner product linear in its first argument, Fourier convention Ff(t)=int f(x)e^(itx)dx, and positive weight w(t)=1+log(2+|t|). For an open interval I let H_(w,I) be the H_w closure of C_c^infty(I), and P_I the orthogonal projection in H_w onto this subspace. These are support-constrained Hilbert spaces of zero-extended functions. Define W^(-1):L2(R)->H_w by Fourier multiplier 1/w; its norm is bounded since w>=1. For any g in L2 and f in H_w,
    <f,W^(-1)g>_w=<f,g>_2.
Consequently the Riesz representer on H_(w,I) of the functional on the right is P_I W^(-1)g. In general it is NOT the restriction of the full-line inverse multiplier to I.

Let alpha_j=d_j+i u_j, d_j>0, enumerate the selected upper ordinates z_j=u_j+i d_j. Put
    ell_j(s)=1_(s>0) exp(-alpha_j s),
    r_j(s)=conj(ell_j(s)).
Define full-line q_(L,j)=W^(-1)ell_j and q_(R,j)=W^(-1)r_j, and the half-line representers
    k_(L,j)=P_(0,infinity) q_(L,j),
    k_(R,j)=P_(0,infinity) q_(R,j).
The truncations k_(L,j,a)=P_(0,2a)q_(L,j) and k_(R,j,a)=P_(0,2a)q_(R,j) converge in H_w norm to the corresponding half-line representers as a->infinity. Indeed the projected spaces increase and their union is dense in H_(w,(0,infinity)): every compact smooth positive-half-line test is contained in one of the finite intervals. The projection convergence follows from the orthogonal decomposition and approximation of the limiting projection by vectors in the increasing spaces. No quantitative rate is asserted.

Let S_c f(x)=f(x-c), and Rf(x)=f(-x). Both are unitary on H_w (w even). Set the physical Riesz columns
    v_(L,j,a)=S_(-a) k_(L,j,a),
    v_(R,j,a)=S_a R k_(R,j,a).
Their Riesz identities, for f in H_(w,(-a,a)), are exactly
    <f,v_(L,j,a)>_w=exp(-d_j a+i u_j a) Ff(z_j),
    <f,v_(R,j,a)>_w=exp(-d_j a-i u_j a) Ff(conj(z_j)).
For verification the corresponding ordinary L2 representers on (-a,a) are ell_j(x+a) and r_j(a-x), respectively. The conjugation of the scalar in the second slot of the inner product produces the displayed signs. Equivalently the normalized ordinary evaluation vectors are exp(-d_j a-i u_j a)e_z and exp(-d_j a+i u_j a)e_conj(z), as in BPF03. Thus the selected paired form is represented exactly in the log metric by O_(w,a)=E_a D_a E_a*, where E_a synthesizes these physical columns and D_a is the BPF03 block diagonal matrix:
    t_k=exp(2d^(k)a), D_a=diag_k(t_k H_k(a)),
    H_k(a)=[0 M_k(a); M_k(a)* 0],
    M_k(a)=diag_(j in k)(m_j exp(2i u_j a)).
The d^(k) are distinct selected deviations in decreasing order. Each block has r_k negative and r_k positive eigenvalues bounded in absolute value between min m_j and max m_j. The exact sign of the phase is tied to the specified Fourier convention.

## 2. Half-line Gram limit and opposite-side decoupling

The same-side Gram limit is
    (G_w,L)_ij=<k_(L,j),k_(L,i)>_w,
    G_w,R=conj(G_w,L).
The second identity uses the antiunitarity of complex conjugation in the even log weight. For opposite-side columns, replacing the truncated half-line representers by their limits makes an o(1) error in the scalar product by Cauchy-Schwarz and their norm convergence. The remaining cross scalar product has the form
    <S_a Rg,S_(-a)h>_w=<S_(2a) Rg,h>_w.
For any fixed g,h in H_w this tends to zero: its Fourier integral is the transform at 2a of the integrable function w(t)F[Rg](t)conj(Fh(t))/(2pi), which is in L1 by Cauchy-Schwarz; use the Riemann-Lebesgue lemma. No localization of the log-metric representer in physical L2 or exact support of its full-line inverse is needed for this argument.

Therefore G_a=E_a*E_a converges in norm to G_w=diag(G_w,L,G_w,R), before reordering by deviation groups. The left Gram is strictly positive. If a linear combination of its Riesz vectors vanished, the corresponding linear combination of ordinary exponential functionals would vanish on all C_c^infty(0,infinity). Its ordinary L2 density, a finite sum of distinct exponentials, would then vanish as a distribution on the positive half-line, and hence identically there. Derivatives at one point give the Vandermonde proof of independence. This applies to every finite selected set, though the minimum Gram eigenvalue need not be uniform over different sets. Thus G_a and its inverse are uniformly bounded and positive for all sufficiently large a (constants depend on the set).

A useful comparison: for any coefficient vector c, the left Gram quadratic form is the squared dual norm of the ordinary profile sum g_c. Hence
    c*G_w,L c <= (1/inf w) ||g_c||_2^2
               =(1/inf w) c*G_L c,
where G_L is the ordinary Cauchy Gram of BPF03. This is an upper form comparison, not a lower bound on conditioning or an equality of singular values. The half-line projection can change the geometry.

## 3. Multiscale generalized spectrum without the lower density hypothesis

Let r_k be the number of distinct selected conjugate pairs at deviation d^(k), R_<k=sum_(i<k) r_i, and R_total=sum r_i. With H the faster indices and C the current indices (both endpoint columns), define the positive Schur Gram
    S_(w,k)=(G_w)_CC-(G_w)_CH [(G_w)_HH]^-1 (G_w)_HC,
using the unprojected block for an empty H. Let -s_(w,k,j)(a), j=1,...,r_k, in increasing order, be the negative eigenvalues of
    S_(w,k)^(1/2) H_k(a) S_(w,k)^(1/2).
Congruence and uniform invertibility give exactly r_k negatives, all uniformly separated from zero for the fixed set and uniformly bounded. Since G_a->G_w, the exact finite-rank pencil D_a-lambda G_a^-1 satisfies precisely the hypotheses of BPF03's two-stage elimination at lambda=t_k x on compact negative threshold intervals. The fast inverse has norm tending to zero; the slow block tends to the positive matrix -x (G_w^-1)_LL. Its elimination leaves H_k(a)-x S_(w,k)^-1+o(1), uniformly in phases and x on these intervals. The inertia squeeze proves that the selected operator has
    -exp(-2d^(k)a) lambda_(R_<k+j)(O_(w,a))
           =s_(w,k,j)(a)+o(1).
The argument needs only convergence of the metric Gram, not its error to be smaller than the separation of physical exponential scales. It avoids subtracting large eigenvalues. The exact physical pencil is used before taking each scaled limit.

By LBS01 the full bounded self-adjoint form operator Q_a in H_(w,(-a,a)) satisfies
    ||Q_a-O_(w,a)|| <= C a exp(2ba).
The lower remainder includes real ordinates and all unselected pairs. This is a two-sided norm bound from the classical local O(log(2+|u|)) count alone, rather than the additional uniform weighted local density assumption in BPF03's ordinary-metric extension. For the jth full Hilbert minmax values, a bounded self-adjoint norm perturbation changes each value by at most its norm. Thus for every selected group,
    -exp(-2d^(k)a) mu_(R_<k+j)(Q_a)
          =s_(w,k,j)(a)+o(1).                            (1)
The additive comparison error divided by exp(2d^(k)a) vanishes by the strict deviation gap. Each of these selected eigenvalues is eventually strictly negative. The next minmax value satisfies mu_(R_total+1)(Q_a)>=-C a exp(2ba). The metric operator is I+compact by LBS01, so all negative values in (1) are genuine discrete eigenvalues. If the selected set contains all off-line pairs, the remainder form is nonnegative; hence the negative count eventually equals R_total exactly. In the infinite-remainder case there may be more, slower negative eigenvalues. No conclusion for an infinite maximal group or an unattained supremum, and no ordinary L2 prefactor theorem without its extra hypotheses.

## 4. Products, parity and the explicit-metric question

The left/right limit blocks are conjugate, and Schur projection respects that split. Consequently s_(w,k,j) are the singular values of
    S_(w,L,k)^(1/2) M_k(a) S_(w,R,k)^(1/2),
    S_(w,R,k)=conj(S_(w,L,k)).
Their product is det S_(w,L,k) times the product of the current multiplicities. The successive Schur determinant identity therefore gives
    lim_(a->infinity) exp(-2a sum_(selected j)d_j)
        prod_(j=1)^R_total [-mu_j(Q_a)]
          =det G_w,L * prod_(selected j)m_j >0.
This is the generalized-metric counterpart of BPF03's invariant product.

For a reflection-symmetric selected set, conjugation of profiles sends u to -u and physical reflection interchanges the left column at u with the right column at -u. The metric and form both preserve parity; their coefficient involution commutes with the exact Gram and all deviation blocks. Thus the BPF04 sector-wise pencil argument applies at every selected scale, with projected log-metric profiles replacing ordinary exponentials. The parity trace is a sum of terms with the same frequencies 2u, but its coefficients involve inner products of these projected metric Riesz vectors. Nonvanishing and a simple formula for those coefficients are not proved here merely from positivity of the Gram. LBS03 should resolve this via half-line spectral factorization if possible.

LBS02 complete as internal conditional candidate: positive half-line metric Gram, decoupling of opposite sides, all selected multiscale generalized prefactors and invariant product without a uniform lower-remainder density hypothesis. Explicit factorization and inverse recovery in the new metric remain to be established. README unchanged.

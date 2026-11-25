# APM03 — Monotone finite-moment capacity enclosures and their domain of validity

2026-11-25. AI-assisted internal candidate, no RH assumption. Actual literature search this turn returned NIST DLMF §18.40 https://dlmf.nist.gov/18.40 (classical moment problem), and *Computation of error bounds via generalized Gauss–Radau and Gauss–Lobatto rules*, DOI 10.1016/j.cam.2021.113604 (search abstract explicitly describes Golub–Meurant bounds on Stieltjes integrals). The general moment/quadrature framework is classical, not claimed new. Below is a direct variational implementation for the parity pole measure, with no dependence on a numerical quadrature theorem.

## 1. Determinacy and weighted polynomial density

Let T be the pole-free parity operator, u the corresponding pole vector, and choose an explicit certified lower bound ell<=inf sigma(T). For example ell=alpha0-2 sum_(n<exp(2a)) Lambda(n)/sqrt n works in either parity. The spectral measure of X=T-ell I at u is a finite positive measure mu on [0,infinity), with moments M_j=<X^j u,u> given by binomial combinations of APM02's m_j. APM01 gives int exp(r x)dmu<infinity for some r>0.

This proves determinacy directly. Any other positive measure on [0,infinity) with the same moments has the same exponential integral for sufficiently small positive r, by Tonelli applied to its exponential series. The two Laplace transforms agree near zero by their convergent power series, then on the right half-plane by analyticity, and the uniqueness argument of RHI03 gives equal measures. No numerical stability follows.

For any positive polynomial weight w(x) (also allowing w=x(x+d), which vanishes at zero), polynomials are dense in L²(w dmu). Indeed if v in that space is orthogonal to every polynomial, its signed or complex measure conj(v) w dmu has a finite exponential absolute moment at some positive radius by Cauchy–Schwarz and the exponential moment of mu (polynomial factors can be absorbed in a slightly smaller radius). All its moments vanish. Its transform is identically zero by local analyticity and Laplace uniqueness, so v=0 almost everywhere for w dmu.

## 2. Two monotone bounds using only finite moments

For z<ell put d=ell-z>0 and C(d)=<u,(T-z)^-1u>=int 1/(x+d)dmu. For every real polynomial p,
    2 int p dmu - int (x+d)p² dmu
       = C(d)-int (x+d)(p-1/(x+d))² dmu.
Let L_n(d) be the supremum of the left side over degree at most n. It uses moments through degree 2n+1. The finite Gram matrix G_ij=M_(i+j+1)+d M_(i+j) and b_i=M_i for i,j=0,...,n give L_n=b^T G^+ b, with the ordinary inverse when G is nonsingular. If singular, its null polynomials vanish mu-a.e. since x+d>0, and b is orthogonal to the nullspace, so the pseudoinverse expression is exact. Density from section 1 shows L_n increases to C(d).

For the positive measure x dmu use the same construction, with moments M_(j+1), and denote its lower bound by L_n^(x)(d). The exact identity
    d C(d)=M_0-int x/(x+d)dmu
gives the upper bound U_n(d)=(M_0-L_n^(x)(d))/d. Thus
    0<=L_n(d)<=C(d)<=U_n(d)<=M_0/d,
and L_n is nondecreasing while U_n is nonincreasing; both converge to C(d). The upper bound uses moments through 2n+2. An atom at zero is allowed; if x dmu vanishes identically the upper formula is exact. These are finite-moment Stieltjes enclosures derived without assuming the spectrum is bounded above.

An alternative a posteriori certificate is useful when trial vectors are available: for v=p(X)u,
    C(d) - [2 Re<u,v>-<(T-z)v,v>]
       = <u-(T-z)v,(T-z)^-1[u-(T-z)v]>
       <= ||u-(T-z)v||²/d.
All terms are computable from moments through degree 2n+2, and the equality follows by completing the positive quadratic form. The bound requires the certified distance d, not an estimated Ritz gap.

For example at n=0 the lower and upper inequalities read
    M_0²/(M_1+d M_0) <= C(d)
       <= (M_0-M_1²/(M_2+d M_1))/d,
with the second fraction zero if M_1=0. The first inequality is Jensen's bound; the second uses the first two nontrivial moments. No evaluation of M_2 for actual zeta claimed here.

## 3. What can be certified at zero

If one has an independently certified ell>0 for the odd pole-free T_o, set z=0, d=ell. AJP02 gives strict positivity of the restored odd sector iff 2 C(d)<1. Therefore 2 U_n(d)<1 certifies it, while 2 L_n(d)>1 certifies a negative direction. Equality requires separate treatment. For any fixed strict inequality, sufficiently many exact moments eventually certify its sign by convergence. This is a conditional finite arithmetic certificate, not a proof that ell>0 for large windows.

The large-window even T_e has a negative eigenvalue by AJP01, and its required secular test is at z=0 INSIDE the spectral range, where the positive Stieltjes variational argument above is invalid. One must first separate the negative eigenvalue and bound the positive residual or use a signed interior resolvent certificate. Also the lower bound ell derived merely from the crude arithmetic sum is typically negative, so it cannot be used to certify positivity of either sector at zero. Uncoupled spectrum remains invisible to mu. These limitations are intrinsic to the input, not removed by moment determinacy.

APM03 complete as candidate. No actual numerical enclosure, zeta anomaly, RH proof or independent review. APM04 next assess finite-data interior obstructions and a justified direction.

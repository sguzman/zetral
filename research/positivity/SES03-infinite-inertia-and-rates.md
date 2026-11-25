# SES03 — Infinite maximal-set inertia, uniform fixed-index prefactors and exact Sobolev rates

2026-11-25. AI-assisted candidate deduction. Uses SES01–02, STS01 and NIR01/NIR03's compact-support interpolation argument. The paired explicit-formula source is now directly checked as documented in research/SOURCE-PROVENANCE-CORRECTION.md. No RH, finite maximal-group, deviation-gap, weighted-density or maximal-attainment assumption for the indexed growth rates. No observed off-line zero, independent human/formal verification, numerical experiment or priority claim. The metric is H0^1, not ordinary L2.

## 1. Injective synthesis for a possibly infinite maximal set

Assume B=sup |Im z|>0 and let M be the distinct signed real ordinates u with u+iB in the zero set. Each represents one maximal conjugate pair. Multiplicities m_u=m_-u, M=-M, and 0 is absent (the elementary eta-function argument in NIR03). The set may be finite, countably infinite, or empty. Consider the nonempty case here. With alpha_u=B+iu and k_u(s)=[exp(-alpha_u s)-exp(-s)]/(1-alpha_u^2), define
    E:ell2(M)->H0^1(0,infinity), E c=sum_u sqrt(m_u)c_u k_u.
It is Hilbert-Schmidt because sum_u m_u||k_u||_S^2=sum_u m_u/[2B|1+alpha_u|^2]<infinity by the local zero count. The series converges in H0^1. It is injective even when the Gram is a compact operator without a bounded inverse.

Proof: for c in ell2(M), set b_u=sqrt(m_u)c_u/(1-alpha_u^2). Cauchy-Schwarz gives
    sum_u |b_u| <= ||c||_2 (sum_u m_u/|1-alpha_u^2|^2)^(1/2)<infinity.
Hence the explicit profile series converges uniformly on s>=0 and equals the H0^1 sum pointwise: convergence in H0^1 implies convergence in L2, and the uniformly convergent series has the same L2 limit on every compact interval. If E c=0, continuity gives for every s>=0
    sum_u b_u exp(-iu s)=exp(-(1-B)s) sum_u b_u.
Here 1-B>=1/2. For each fixed v in M, multiply by exp(iv s), average from 0 to T, and let T tend to infinity. On the left the absolutely summable series permits termwise Cesaro limits; the result is b_v. On the right the absolute average is <=|sum b_u|/[T(1-B)] and tends to zero. Thus b_v=0 for every v, and c=0. This proof requires neither separation of high ordinates nor a Hardy interpolation theorem. It proves injectivity, not surjectivity, closed range, or uniform invertibility.

## 2. Inertia and compact phase family

For phases theta=(theta_u) on the product of unit circles with theta_-u=conj(theta_u), define on ell2(M) the self-adjoint unitary
    (J_theta c)_u=theta_u c_-u.
On the two coordinates of each signed pair ±u it has eigenvalues +1 and -1. With E as above the maximal boundary coupling of SES02 is exactly
    T(theta)=E J_theta E*,
    T_B(a)=T(theta(a)), theta_u(a)=exp(2iua).
This follows by expanding the coefficient permutation with the multiplicity symmetry. Since E is Hilbert-Schmidt, T is trace-class. Since E is injective, E* has dense range. Consequently its positive and negative indices are both the number of signed pairs ±u, including infinity as a possible value.

For the lower bound on either index, take any finite orthonormal set of eigenvectors of J_theta of the relevant sign and approximate those vectors by elements of ran E*. Their J_theta form Gram matrices converge to ±I, so the corresponding preimages in H0^1 are linearly independent and have the strict sign on their span. The upper bound in the finite case follows from the fact that a strictly sign-definite subspace injects, under the projection of E* onto the corresponding sign subspace of J_theta, into that subspace. For an infinite set the finite lower bounds already imply infinitely many eigenvalues of each sign by compact self-adjointness. In fact ker T(theta)=ker E*: if E J_theta E*f=0, injectivity of E and invertibility of J_theta force E*f=0; the converse is immediate.

For every fixed index j within one of these sign counts, the jth positive magnitude p_j(T(theta)) and jth negative magnitude n_j(T(theta)) are strictly positive for every allowed theta. They are uniformly positive over all theta. Indeed the phase space is compact: there are finitely or countably many independent circles, and in the countable case sequential compactness follows by diagonal subsequences. The map theta->T(theta) is continuous in trace norm for coordinatewise convergence by the uniform summability of m_u||k_u||||k_-u|| and finite truncation. The eigenvalue magnitudes are continuous in operator norm by minmax. A positive continuous function on this compact phase space has a positive minimum. This minimum may be extremely small and depends on the entire maximal set and j; no uniform bound over varying sets or over all j is claimed.

It follows from SES02(2) that, when the maximal set is infinite, for every fixed j the full Sobolev positive and negative depths have exact nonvanishing, uniformly bounded maximal-scale prefactors. The same holds in each parity separately. If the maximal set is finite with r signed u values, precisely r full positive and r full negative prefactors survive at scale exp(2Ba), and r/2 of each sign in each parity. All higher fixed indices have scaled magnitudes tending to zero by SES02. The nonattained case M empty is genuinely different: every scaled magnitude and the scaled trace norm tend to zero, even when the growth exponent is maximal.

The trace of T(theta(a)) is
    sum_(u in M) m_u exp(2iua)/[2 alpha_u(1+alpha_u)^2].
This absolutely convergent Fourier series has a nonzero coefficient at each distinct frequency 2u. It cannot tend to a constant, since time averaging against exp(-2iua) would then give zero at a nonzero frequency, contradicting the actual coefficient. Moreover the signed trace equals the sum of positive magnitudes minus negative magnitudes. The positive and negative spectral tails are uniformly small by the trace-norm finite-rank truncations (as in SES02). Therefore not all fixed-index parity-resolved prefactors can converge: otherwise their trace sums would converge by uniform tails. This assertion also holds for the corresponding scaled ordinary-in-H0^1 eigenvalues by SES02. It does NOT prove that every individual magnitude or any particular full sorted singular value oscillates for arbitrary infinite sets.

## 3. Exact all-window indexed exponential rates, including nonattainment

Let b_j be NIR03's order statistic over all distinct nonreal conjugate pairs:
    b_j=sup_(S finite, |S|=j) min_(pair in S) d_pair,
with empty-family supremum zero. No assumption that a decreasing ordering of the infinite deviation set exists. Write n_j(a)=n_j(Q_S(a)) for the jth generalized Sobolev negative magnitude, zero padded.

Upper bound: choose b>b_j. There are at most j-1 pairs with deviation >b. Their finite-rank signed contribution has negative index at most this number. Equivalently impose one complex constraint Ff(z)-Ff(conj z)=0 per fast pair; on the constraint space their contribution is nonnegative. By STS01 the remaining absolute form norm is <=C a exp(2ba) for b<=1/2, and if b>1/2 use the whole-strip bound with b=1/2. Every j-dimensional subspace intersects the constraints nontrivially. Minmax therefore gives
    n_j(a)<=C a exp(2ba),
and limsup_(a->infinity) log(1+n_j(a))/a<=2b_j. If b_j=0, fewer than j nonreal pairs exist in total; the same one-constraint argument applied to all pairs gives n_j(a)=0 for every a. This uses no conjectural uniform local off-line density.

Lower bound: for a fixed finite set S of j distinct pairs, choose the exact compact smooth cardinal seeds k_w and modulated box filters g_w from NIR01 (commit 3269932f09dec298971978047b069f4f75f44bf4, whose diff was read in this recovery turn). For a fixed filter width h>0, set L_w=sinh(h d_w)/(h d_w)>1, L=min_w L_w, and b_(w,n)=k_w*g_w^{*n}/L_w^n. The surrounding finite zero band and seed polynomials ensure exact cardinal samples on that band and exponentially small sample tails outside it. The band is conjugation invariant, so the negative test Gram has margin
    q(f_c,f_c)<=-(1-epsilon)||c||_2^2
for a sufficiently large n, on the j-dimensional span built by taking the differences of conjugate-pair cardinal functions as in NIR01. The same estimates hold in the H1 norm: convolution with g_w is contractive on both L2 and the first weak derivative, since ||g_w||_1=1 and differentiation commutes with convolution of the compact smooth seed. Hence
    ||b_(w,n)||_S<=||k_w||_S L_w^-n.
The seeds are compact smooth, so these constants are finite; the convolved tests remain compact smooth with supports in (-h0-nh,h0+nh). Their synthesis norm is at most C_S L^-n, independent of n. Minmax gives
    n_j(a)>=(1-epsilon)L^(2n)/C_S^2
for all a>=h0+nh and n sufficiently large. Choose n=floor((a-h0)/h), then let a tend to infinity with h fixed, then h tend to infinity. Since log(sinh(h d_min)/(h d_min))/h tends to d_min, the lower exponent is at least 2 min_(pair in S)d_pair. Supremizing over S proves
    lim_(a->infinity) log(1+n_j(Q_S(a)))/a = 2 b_j.         (1)

The parity argument of NIR03 applies in H1: reflection is unitary, parity projection is contractive, and exact cardinal interpolation can use a symmetric band and parity-project the test functions. Each quartet contributes one negative direction per parity. The one-constraint codimension bound in each sector counts its fast negative sample directions, not both members of each conjugate pair separately. Thus with b_(p,j) defined by selecting j quartets in parity p, both parity rates exist and equal 2b_(p,j); b_(even,j)=b_(odd,j)=b_(2j-1)=b_(2j). This proof uses the cardinal construction as a theoretical existence argument with exact nearby zero data; it is NOT a zero-independent algorithm for constructing the trial functions.

In particular if the supremum B>0 is unattained, for every b<B there must be infinitely many distinct pairs above b (if finitely many, their maximum would be B). Hence b_j=B for every finite j. Equation (1) shows that every fixed negative magnitude grows at exponential rate 2B despite SES02 proving exp(-2Ba)n_j(a)->0. More generally if B is attained infinitely often then b_j=B and the prefactors are bounded away from zero by sections 1–2. This resolves the distinction between growth exponent and prefactor under arbitrary possible off-line geometry in the Sobolev metric. Nothing here proves the corresponding ordinary L2 upper exponent.

SES03 complete as an internal candidate: injective infinite maximal synthesis, exact sign counts and uniform phase-stable fixed-index lower prefactors, nonconvergence of at least one parity prefactor, and exact unconditional indexed Sobolev exponential rates including nonattainment. SES04 next: audit and assess the metric limitation and a genuinely useful next direction. No RH proof, independent verification, numerical experiment or originality claim. README unchanged.

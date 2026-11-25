# NIR03 — Indexed exponential rates and reflection sectors

2026-11-25. Internal candidate deductions, without assuming RH. Uses paired-zero identity, compact smooth core and log-energy estimates imported from GSG01/GSG03, and exact interpolation NIR01. Current prior-art search returned Bombieri (2000) abstract (https://www.bdim.eu/item?fmt=pdf&id=RLIN_2000_9_11_3_183_0), reporting negative inertia for sufficiently large truncations when finitely many zeros are off-line. Also search summaries of recent scale-resolved positivity and uncertainty-operator work; no full comparison or priority claim. No formal/numerical/human verification.

## 1. Order statistics, including nonattainment

For each distinct nonreal conjugate pair of ordinates let d=|Im z|>0. Count one value per pair, irrespective of multiplicity. Define
    b_k = sup_{S: |S|=k} min_{pair in S} d,
where the supremum of the empty family is defined as 0. Then 0<=b_k<=1/2. For every b>b_k at most k-1 pairs have d>b; otherwise k such pairs contradict the definition. This handles infinite sets, ties and unattained suprema without sorting an infinite sequence into an invalid decreasing enumeration. If b_k=0 there are fewer than k nonreal pairs, since any k selected positive deviations would have positive minimum. GSG04 then implies n_-(A_a)<k at every a.

Write N_k(a)=max(0,-lambda_k(A_a)), ordinary L2 eigenvalue index. NIR01 gives liminf a^-1 log(1+N_k(a))>=2b_k by taking the supremum over finite choices of k pairs. The trivial unconditional upper rate is 1 by GSG03.

## 2. Remove fast pairs by codimension, not two conditions per pair

Write K=ell^2(Gamma,m_z), J conjugation-permutation and V the Fourier sample map. Fix b>b_k, and let F_b be the finite collection of pairs with d>b, cardinality r_b<=k-1. On the compact smooth test space impose, for each such pair, F[f](z)-F[f](conj z)=0. Equivalently the projection of Vf to the r_b-dimensional negative sample space supported on fast pairs is zero. Each imposes at most ONE complex linear condition. This is crucial: imposing both individual values zero would waste a factor of two in the codimension. The pair contribution remaining is nonnegative by the plus/minus decomposition of GSG03. Real ordinates are nonnegative as well. Thus on the constrained test space
    -q(f,f) <= 2 sum_{upper z: 0<d<=b} m_z d^2 sup_{|v|<=b}|F'[f](Re z+iv)|^2.
For b<=1/2, repeat GSG03's radius-1/a holomorphic disk estimate and log-weighted convolution estimate with B replaced by b; all constants may be taken finite, independent of a>=1. With L(f)=(2pi)^-1 integral (1+log(2+|t|))|F[f](t)|^2 dt, this yields
    -q(f,f) <= C (a+1)^6 exp(2ba) L(f).
Under the additional density assumption
    sup_{j in Z} sum_{upper z: Re z in [j,j+1), 0<d<=b} m_z d^2 < infinity,
the unweighted version of GSG03 gives
    -q(f,f) <= C_b (a+1)^3 exp(2ba)||f||_2^2.
The same assumption for all nonreal pairs suffices simultaneously for every b. For b>1/2 use b=1/2 in GSG03 instead; there are no fast pairs.

Every k-dimensional test subspace contains a nonzero vector satisfying the r_b constraints. Thus the indicated upper bound for the k-th negative variational quotient follows without assuming the constrained space is a form core. For the L2 result, if lambda_k<-C_b(a+1)^3 exp(2ba), approximate the first k eigenvectors in the form norm by tests; their Gram and form matrices converge and preserve this strict inequality uniformly on their span. Intersect that k-dimensional span with the constraints to contradict the bound. This proves the same ordinary eigenvalue bound for the closed operator. Under the stated uniform density hypothesis for all pairs, take b downward to b_k (or use GSG03 when b_k=1/2) to obtain the full exact exponent
    lim a^-1 log(1+N_k(a))=2b_k.
Without this hypothesis the matching ordinary upper bound for 0<b_k<1/2 remains unresolved. If b_k=0, N_k=0 by GSG04; if b_k=1/2, the unrestricted upper exponent 1 already matches.

## 3. Exact unconditional log-energy-normalized indexed rates

Define the nonnegative variational quantity
    M_k(a)=max(0, sup_{dim X=k} inf_{0!=f in X} [-q(f,f)/L(f)]),
where X ranges over k-dimensional subspaces of C_c^infty(-a,a). This is a log-energy-normalized minmax, not the ordinary L2 spectrum; no compactness or eigenvector existence asserted for this modified problem. Section 2 gives limsup a^-1 log(1+M_k(a))<=2b_k. For b_k=0 no such strictly negative space exists and M_k=0; for b_k=1/2 use GSG03. For the matching lower rate fix any k pairs and use NIR01's cardinal tests b_(w,n)=k_w*g_w^{*n}/L_w^n. On the real line |F[g_w](t)|<=1, so L(b_(w,n))^(1/2)<=L(k_w)^(1/2) L_w^(-n). Consequently the log-energy synthesis norm of the k negative-pair tests is <=A_log L_min^(-n), with finite constant A_log given by the same sum of pairwise triangle bounds as NIR01, replacing L2 norms by log-energy norms. The Gram margin q<=-(1-epsilon)||c||^2 still holds. It follows that
    M_k(a)>=(1-epsilon)L_min^(2n)/A_log^2
for a>=h0+nh and n sufficiently large. Set n=floor((a-h0)/h), take a->infinity with all parameters fixed, then h->infinity, to obtain lower exponent 2 min d on the selected pairs. Supremize over selections, proving
    lim a^-1 log(1+M_k(a))=2b_k
unconditionally for every fixed k. This strengthens GSG03's log-normalized bottom-only result; it does NOT assert bounded log energy of L2-normalized true eigenvectors.

## 4. Reflection and parity-resolved rates

Reflection R f(x)=f(-x) acts on K as P y(z)=y(-z), a unitary self-adjoint permutation commuting with J. The form and L2 and log-energy norms are reflection invariant. The test and closed form spaces split into even and odd sectors; parity projection is contractive in both positive norms, and intertwines V with (I +/- P)/2. A four-element orbit {z,conj z,-z,-conj z} contributes one negative J direction to each parity: use the normalized sum and difference of a negative-pair vector y and its image Py (orthogonal because distinct pairs). A purely imaginary nonreal pair contributes one odd and zero even direction, since Py=-y. For zeta no purely imaginary ordinates occur: these would correspond to real rho in (0,1), where eta(rho)=sum_{n>=1}(-1)^(n-1)n^-rho is strictly positive by the alternating series (first paired term positive), and zeta(rho)=eta(rho)/(1-2^(1-rho))<0. This identity follows by continuation of the eta series from Re rho>1 to Re rho>0. Hence each off-line quartet gives one value d in each parity, and two copies in the full pair multiset.

For p=even or odd define b_(p,k) by the same finite-subset supremum over the negative directions counted in that parity. The two parity sequences agree for zeta, and b_(2k-1)=b_(2k)=b_(even,k)=b_(odd,k); the equalities follow from finite counts above any threshold, valid even for infinite multisets with no maximal element. On either sector discard all negative fast directions by orthogonal projection in K; their rank in the sector is the number of parity directions above b, so the codimension argument of section 2 applies unchanged.

For the lower bound choose k orthonormal negative vectors of parity p from finitely many complete reflection/conjugation orbits, each with deviation at least d_min. In NIR01 take a symmetric band containing these orbits and construct a cardinal b_(w,n) for each target node w in their union. Map a finite negative vector y to f_y=sum_w y_w b_(w,n). The sample map on the band is y exactly; Cauchy-Schwarz over the finite weighted node set gives uniform bounds on its tail norm <=C (r/L_min)^n ||y||_K and L2/log-energy norms <=A L_min^-n ||y||_K (replace constants by finite sums of squared individual norms divided by m_w). Project f_y to parity p; its exact band samples remain y, tail remains bounded because the symmetric band is P-invariant, and both positive norms decrease. The negative Gram margin and minmax then hold for the k-dimensional projected span. Taking limits as in sections 1 and 3 gives exact unconditional parity log-normalized rates 2b_(p,k), lower ordinary parity rates 2b_(p,k), and matching ordinary parity rates under the stated uniform density hypothesis. No claim that actual even and odd eigenvalues coincide at finite a; only their exponential rates are related.

## 5. Disposition

NIR03 complete as an internal candidate: exact order-statistic log-energy growth including nonattainment, one constraint per faster negative direction, parity refinement, matching full L2 rates conditional on density (and unconditional endpoint cases). Full ordinary upper exponent in the interior remains unresolved. No actual off-line zeros observed; no proof of RH. NIR04 consolidate, audit and identify a productive next route. Do not repeat the already proved lower bounds; consider quantifying frequency escape of negative eigenspaces or comparing a positive log-metric regularization with the full L2 form. README unchanged.

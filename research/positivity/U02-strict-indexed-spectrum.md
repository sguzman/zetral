# U02 — Strict indexed spectrum and quantitative translation bounds

2026-11-25. Unconditional internal candidate deductions, not an RH proof, formal verification or priority claim. Actual primary-source HTML retrieved this turn: Suzuki arXiv:2606.09096v4, https://arxiv.org/html/2606.09096v4, §1.1 (autocorrelation and Weil criterion, parity comments), Theorem 1.1, Corollary 1.2, (1.7)–(1.8), Theorem 1.3, §§4.2–4.4 (4.4)–(4.9); Connes–Consani–Moscovici arXiv:2511.22755v1, https://arxiv.org/html/2511.22755v1, Theorem 3.6 (discrete lower bounded spectrum) and concluding discussion at line 1024 (simplicity/evenness remain missing). Bombieri's 2000 paper abstract (https://www.bdim.eu/item?fmt=pdf&id=RLIN_2000_9_11_3_183_0) appeared in search results, describing negative-eigenvalue counting in his finite truncations if finitely many off-line zeros exist; journal landing page returned 502. The full paper and exact transfer to A_a were not audited, so no equality of negative counts is imported. The external research note https://zeta.teal-sea.com/read/hunts/weil_propagation/theory/RESULTS.html was inspected in returned excerpts for context only. No exhaustive novelty assessment.

## 1. Strict decrease of every indexed eigenvalue

Let lambda_k(a) be the increasing eigenvalues of A_a, counted with multiplicity, k>=1. U01 supplies the translation isometry J_t of form domains for |t|<a-b, using the common autocorrelation form on the compact smooth core. For all form-domain f, q_a(J_t f)=q_b(f) and ||J_t f||_2=||f||_2. The full core property follows from the Friedrichs construction and compact smooth approximation, not just the existence of a core for the bottom vector.

For a nonzero compactly supported L2 function f on R, let ell(f)=ess inf supp(f). For any finite-dimensional subspace S of such functions supported in a common bounded interval, the set L(S)={ell(f):0!=f in S} has cardinality at most dim S. Indeed, functions with pairwise distinct left endpoints are linearly independent: order them, and restrict any zero linear combination to the portion strictly before the second endpoint, where the first is nonzero on a set of positive measure. Its coefficient vanishes; repeat. Thus for finite-dimensional S,E, J_t S intersects E nontrivially only when t lies in the finite difference set L(E)-L(S), since translation shifts ell by t. Here all spaces are extended by zero to R.

Fix a>b and k. Minmax and the translated first k eigenvectors of A_b give lambda_k(a)<=lambda_k(b). Suppose equality with value mu. Let S be their k-dimensional span, E_< the spectral space of A_a for values strictly less than mu, and E_= the eigenspace at mu. Then dim E_<<k. For every t in the allowed interval there is a unit v in J_t S perpendicular to E_<. It obeys q_a(v)<=mu, but the spectral theorem gives q_a(v)>=mu; equality forces v in E_=. This contradicts the finite exceptional shift set above. Therefore

    lambda_k(a)<lambda_k(b) for every a>b>0 and k>=1.    (U02.1)

Multiplicity does not invalidate the argument. No parity restriction or simplicity is required.

A quantitative version: let mu=lambda_k(a), E_<= be the spectral space at values <=mu, and g>0 the gap to the next distinct eigenvalue. Choose a shift avoiding L(E_<=)-L(S). Define d_t=min_{f in S, ||f||=1} ||(I-P_<=)J_t f||, strictly positive by finite-dimensional compactness and disjointness. Choosing a unit v in J_t S perpendicular to E_< as before, the spectral decomposition gives

    lambda_k(b)-lambda_k(a) >= g d_t^2 > 0.              (U02.2)

This is an angle estimate, not an effective bound on d_t in terms of primes. It is stronger in scope than U01, not claimed numerically sharper.

## 2. Uniform translate Gram bound for U01

Here the dependence on the unknown ground eigenfunction can be removed at the cost of a very small explicit bound. Write m=dim ker(A_a-lambda_1(a)), m>=1. Choose equally spaced shifts t_j=(j-m/2)d, j=0,...,m, d=(a-b)/m, all strictly in the allowed interval. Let T be translation by d on L2(R), and let f be any unit vector supported in [-b,b]. For any coefficient vector c with Euclidean norm one, the squared norm of sum c_j J_(t_j)f is ||p(T)f||^2, p(z)=sum c_j z^j.

Choose integer N=ceil(2b/d)+m+1. For any g supported in an interval of length at most 2b+md and |alpha|<=1, and either U=T or U=T^-1, the supports of g and U^N g have disjoint interiors. From

    sum_{j=0}^{N-1} alpha^j U^j (I-alpha U)g = g-alpha^N U^N g

and restriction to the original support, ||(I-alpha U)g|| >= ||g||/N. If r is a complex root, T-rI = T(I-r T^-1) for |r|<=1 and = -r(I-T/r) otherwise. Hence ||(T-rI)g|| >= max(1,|r|)||g||/N. Factoring p of degree l<=m, successive intermediate supports are contained in intervals of lengths at most 2b+ld, so all steps use this same N. For nonzero leading coefficient c_l,

    ||p(T)f|| >= |c_l| prod_i max(1,|r_i|) N^-l.

The coefficient l1 norm of p is bounded above by |c_l| prod_i (1+|r_i|), which is at most 2^l |c_l| prod_i max(1,|r_i|). Since ||c||_1>=||c||_2=1, this proves ||p(T)f|| >= (2N)^-l >= (2N)^-m, including constant polynomials. Thus

    lambda_min(G) >= (2N)^(-2m)
    lambda_1(b)-lambda_1(a) >= g_a / [(m+1)(2N)^(2m)].  (U02.3)

The second inequality uses the verified U01 trace argument. This is uniform in f; the distinct gap g_a and multiplicity m still depend on the actual operator. For a simple bottom, m=1, d=a-b, this gives a quadratic-in-small-margin lower bound proportional to g_a. It cannot by itself prohibit a zero crossing: it bounds how much the bottom decreases, not how slowly it must decrease or how large it remains. No lower bound for g_a is obtained.

## 3. Negative index and continuity

Let n_-(a) and n_0(a) count negative and zero eigenvalues with multiplicity. They are finite at each finite a. Strict indexed decrease implies for a>b

    n_-(a)>=n_-(b)+n_0(b).

In particular every zero eigenspace at b contributes its entire multiplicity to the negative spectrum in every larger window (counting indices, not tracking eigenvectors). This does not assert that the negative count increases strictly between all pairs of windows. Each indexed eigenvalue has at most one zero. The known first-window RH criterion is not a proof of RH.

The source proves continuity only for the bottom in Theorem 1.3. Its scaling proof extends to every fixed k as follows. Under the unitary rescaling to (-1,1), the closed forms have a common domain, equal to the completion of the compact core for the logarithmic form L of (4.4), because (4.5) expresses the difference from this common closed form as a bounded quadratic perturbation R_a. On compact a-neighborhoods, R_a is uniformly bounded in L2 (finite prime sum with continuous truncated shifts, scalar -log a, continuous remainder kernel) and strongly continuous as an operator: translations are strongly continuous on zero extensions, a threshold shift at distance 2 vanishes strongly on the fixed interval, and the smooth remainder kernel converges in L2 of the square. Formula (4.6) and the compact embedding Proposition 4.1 give compactness of form-bounded sets in L2.

For a_n->a_0, the fixed first k eigenvectors at a_0 span a test subspace on which the quadratic perturbation converges uniformly by finite dimension; minmax gives limsup lambda_k(a_n)<=lambda_k(a_0). For the liminf, pass to a subsequence realizing it. The first k orthonormal eigenvectors at a_n have uniformly bounded common form norm (uniform lower bound, upper bound just established, and bounded perturbations). Extract a further subsequence converging in L2 simultaneously for these k vectors, whose limits remain orthonormal. For any fixed linear combination of the k vectors with coefficient norm one, its form value at a_n is <=lambda_k(a_n). Lower semicontinuity of the common closed form and convergence of the bounded perturbation on strongly convergent vectors give limit form value <=liminf lambda_k(a_n). This holds for every coefficient vector using the same subsequence and yields lambda_k(a_0)<=liminf by minmax. Hence all indexed eigenvalues are continuous. This is an internal extension of the source argument, not attributed to the source theorem.

Thus the finite-window negative spectrum changes by discrete index crossings, each of which is strictly sign-changing; simultaneous crossings correspond to a multiple zero eigenvalue. On a compact interval of positive windows, only finitely many indices can cross, bounded by the number of nonpositive eigenvalues at the right endpoint. No bound on the number of crossings over the whole half-line is established, and no identification with Bombieri's finite truncation negative index is made.

## 4. Next

U02 meets its quantitative and negative-index objective. Translation gives strict descent and exact gap/Gram or subspace-angle inequalities, but cannot certify positivity propagation without additional arithmetic information. U03 should examine the positive-side inverse near a hypothetical first zero, including spectral weights and detectability by evaluation functions, without assuming a simple even bottom. No independent human review, numerical or formal verification, originality claim, or external submission. Worker branch appeared during this checkpoint. Actual K02-W04/HANDOFF.md read on worker/k02-w04, blob e810b943540d58624249d4d92e28d70bd4f60bc2: IN_PROGRESS, acknowledged at starting commit 3444bb1, proof/source audit not yet complete. No audit accepted.

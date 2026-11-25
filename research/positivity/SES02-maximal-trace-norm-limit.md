# SES02 — Maximal-scale trace-norm boundary spectrum without a gap

2026-11-25. AI-assisted internal candidate deduction. Uses SES01's explicit Sobolev boundary Gram and summable endpoint estimates and STS01's full paired-zero trace-class operator. The paired explicit-formula input has now been checked directly against Suzuki arXiv:2606.09096v4, (3.1), as documented in research/SOURCE-PROVENANCE-CORRECTION.md (recovery verification commit ea9f794ce12c806b7e406c30384fa421d33142db). No RH assumption, finite maximal-group assumption, deviation gap, uniform weighted off-line density, actual off-line zero discovery, independent review, numerical experiment or originality claim. All eigenvalues here belong to the H0^1 Sobolev metric, not ordinary L2.

## 1. Common Hilbert space and the midpoint complement

Let B=sup_z |Im z|. The nontrivial maximal-scale question is B>0; under B=0 the form is nonnegative and there is no positive-deviation endpoint model. Fix 0<delta<B. On H_S(a)=H0^1(-a,a) use the metric int(|f|^2+|f'|^2). In the fixed boundary space H_*=H0^1(0,infinity) direct sum itself, SES01 defined the partial isometry J_a(g,h)=S_(-a)P_a g+S_a R P_a h. Its initial projection is P=P_a direct sum P_a; its final range consists of the physical functions vanishing at the midpoint. The final orthogonal complement is one-dimensional because midpoint evaluation is a continuous nonzero functional on H_S(a). Its unit Riesz direction w_a can be chosen even: midpoint evaluation is reflection-invariant. Define
    V_a f = (J_a* f, <f,w_a>_S) in H_* direct sum C.
Then V_a is an isometry onto ran P direct sum C, and intertwines reflection with the endpoint swap on H_* and +1 on the last coordinate. The midpoint direction is not omitted. We extend V_a Q_S(a) V_a* by zero on its orthogonal complement. The nonzero eigenvalues, signs and multiplicities are exactly those of Q_S(a).

## 2. Arbitrary maximal set and trace norm

Let M_B be all distinct upper ordinates z=u+iB (one per maximal conjugate pair), possibly empty or infinite, and m_z their multiplicities. The half-line Riesz profiles are k_alpha of SES01, alpha=B+iu. Put
    T_B(a)=sum_(z in M_B) m_z exp(2iua) k_alpha tensor k_(conj alpha),
    D_B(a)=[0 T_B(a); T_B(a)* 0] on H_*.
Empty sums mean zero. These are absolutely trace-norm convergent; in particular the norms of the omitted high-ordinate terms are bounded uniformly in a by C_B(1+log U)/U for |u|>=U>=3. No uniform invertibility of an infinite Gram is asserted.

Partition the physical paired expansion into d<=delta (including real ordinates), delta<d<B, and d=B. For the first block, SES01 gives a trace norm bound C a exp(2delta a); multiplying by exp(-2Ba) makes it tend to zero. For the middle block, SES01 gives
    || exp(-2Ba) Q_middle(a)||_1
       <= C_delta sum_(delta<d_z<B) m_z exp[-2(B-d_z)a]/(1+u_z^2).
The sum tends to zero by dominated convergence, because each exponent has strictly positive B-d_z and the majorant sum is finite. This argument requires neither a common positive gap nor finiteness near B. It does not supply a universal decay rate if the deviations accumulate at B.

For the top block, sum SES01(3) at d=B, with the uniform trace-norm majorant, to obtain
    || exp(-2Ba) Q_top(a)-J_a D_B(a) J_a* ||_1
       <= C_B exp(-Ba).
Conjugating by the isometry V_a preserves trace norm and sends the approximating operator to P D_B(a) P direct sum 0. The other truncation estimate in SES01 gives
    || D_B(a)-P D_B(a)P ||_1<=C_B exp(-Ba).
Thus on the single fixed enlarged space,
    || exp(-2Ba)V_a Q_S(a)V_a* - (D_B(a) direct sum 0)||_1
       <= C_delta [a exp(-2(B-delta)a)
               + sum_(delta<d_z<B) m_z exp(-2(B-d_z)a)/(1+u_z^2)
               + exp(-Ba)]
       =: E_B(a) ->0.                                   (1)
Constants depend on B,delta and the counting bound, not phases. This is approximation by an a-dependent trace-class boundary operator, not necessarily convergence to one fixed operator. If B is not attained, M_B is empty and the whole scaled operator tends to zero in trace norm.

## 3. Ordered spectral prefactors and sums

For any compact self-adjoint operator A on an infinite-dimensional Hilbert space let p_j(A) be its ordered positive eigenvalues padded by zeros when there are fewer than j, and n_j(A)=p_j(-A) its ordered negative magnitudes padded in the same way. These are nonnegative and obey the usual minmax formula (zero lies in the essential spectrum of a compact operator). For the off-diagonal block D_B the nonzero spectrum consists of ± the singular values of T_B, counting multiplicity. Indeed singular vectors are paired by the off-diagonal block; equivalently D_B^2=diag(T_BT_B*,T_B*T_B). Denote the singular values in decreasing order by sigma_j(a), zero padded.

From (1) and the operator norm bound by the trace norm,
    | exp(-2Ba)n_j(Q_S(a))-sigma_j(a)| <= E_B(a),
    | exp(-2Ba)p_j(Q_S(a))-sigma_j(a)| <= E_B(a),         (2)
uniformly for every j>=1. This proves the maximal-scale pairing of positive and negative generalized eigenvalues without a gap or finite maximal set. At this stage (2) alone does not establish a uniform positive lower bound for the jth singular value when the maximal set is infinite; SES03 addresses that.

The sum of all positive eigenvalues of a self-adjoint trace-class A equals sup over finite-rank orthogonal projections F of tr(FA); the spectral projections onto finite subsets of positive eigenvectors approach the sum, and negative contributions cannot increase it. Hence the positive sums of two self-adjoint trace-class operators differ by at most their trace-norm distance, and likewise for negative sums. This gives
    | exp(-2Ba) sum_j n_j(Q_S(a)) - ||T_B(a)||_1 | <= E_B(a),
    | exp(-2Ba) sum_j p_j(Q_S(a)) - ||T_B(a)||_1 | <= E_B(a).
In particular the signed ordinary trace divided by exp(2Ba) tends to zero; the parity trace need not do so. One can also obtain convergence of the ordered positive and negative sequences in l1 to their a-dependent singular-value sequences: for each fixed N, use (2) for the first N terms and the positive/negative sum bounds; the tails of sigma_j(a) are uniformly small as N increases because the series defining T_B is uniformly approximable in trace norm by finite-rank truncations. To justify that last tail fact, the sum of singular values after rank r is bounded by the trace-norm error of any rank-r approximation, the classical trace-class approximation-number inequality. Alternatively apply the singular-value minmax inequality sigma_(r+j)(T)<=sigma_j(T-F) for rank F<=r and sum it. Thus no fixed-index estimate is silently promoted to a sum without tail control.

If M_B is empty, all scaled positive and negative depths and their sums vanish. This does not show that their exponential limsup rates are below 2B; a subexponential prefactor can vanish at that maximal rate. In particular nonattainment must be distinguished from the case B=0, where all negative depths vanish identically by the paired formula.

## 4. Parity-resolved model

The set M_B is symmetric under u->-u, and multiplicities agree. Since k_(conj alpha)=conj(k_alpha), summands at opposite signed ordinates are adjoints; thus T_B(a) is Hermitian. Endpoint swap reduces D_B(a) to +T_B(a) in the even sector and -T_B(a) in the odd sector via (g,±g)/sqrt(2). The approximations in (1) intertwine parity, including the even midpoint coordinate, so
    exp(-2Ba)n_j(Q_S(a)|even)=n_j(T_B(a))+O(E_B(a)),
    exp(-2Ba)n_j(Q_S(a)|odd)=p_j(T_B(a))+O(E_B(a)),
with identical positive-sum/negative-sum comparisons in the sectors. The sector signs follow from the explicit definition of reflection, not a relabeling of the signed trace.

The trace-norm estimate also gives the leading reflection trace directly:
    exp(-2Ba) tr(R Q_S(a)) = 2 tr(T_B(a))+O(E_B(a)).
The scalar trace in STS02 has the same coefficient: tr(k_alpha tensor k_(conj alpha))=1/[2alpha(1+alpha)^2], so 2 tr T_B=sum m_z exp(2iua)/[alpha(1+alpha)^2]. Reindex u->-u and compare alpha=B-iu=-iz for z=u+iB; this becomes i/[z(1-iz)^2] times exp(-2iua), precisely STS02. This is an algebraic consistency check, not a numerical experiment.

SES02 complete as a candidate: trace-norm maximal-scale approximation for arbitrary maximal sets, symmetric positive/negative prefactors, parity split and explicit nonattainment limit. SES03 next: prove infinite-set nondegeneracy by an injective synthesis map, quantify fixed-index phase stability, and investigate exact exponential rates in this Sobolev metric. README unchanged.

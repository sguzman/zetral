# SES02 — Arbitrary maximal-deviation boundary spectrum

2026-11-25. AI-assisted internal candidate. No RH assumption, finite maximal group, deviation-gap or uniform weighted off-line density hypothesis. If RH holds B=0 and there is no negative spectrum; the nontrivial maximal-scale result below concerns B>0. Uses SES01's exact Sobolev boundary estimates. No observed off-line zero, numerical experiment, fresh source inspection, independent human/formal verification or originality claim. The spectrum belongs to the generalized H0^1 metric, not ordinary L2.

## 1. Trace-norm limit without finite-set or gap assumptions

Let B=sup_(z in Gamma)|Im z| in (0,1/2], and enumerate upper nonreal conjugate pairs z=u+i d, d>0, one per pair, multiplicity m_z. On the fixed boundary Hilbert space H_*=H_+ direct sum H_+, define the a-dependent operator
    D_B(a)=sum_(z: d=B) D_(z,a)
          =[0 T_B(a); T_B(a)* 0],
    T_B(a)=sum_(z: d=B) m_z exp(2iua)
                           k_(B+i u) tensor k_(B-i u).       (1)
Here H_+=H_0^1(0,infinity), k_alpha is SES01(1), and an empty maximal set gives D_B=T_B=0. These are absolutely trace-norm-convergent series because sum m_z/(1+u^2)<infinity and B>0. The trace norms are uniformly bounded in a, and truncating to |u|<=U incurs an error <=C_B(1+log U)/U. No fixed phase limit of T_B is asserted.

Choose 0<delta<B, e.g. B/2. Split Q_S(a) into all real and nonreal pairs with d<=delta, and those with d>delta. SES01 bounds the former after scaling by C a exp(-2(B-delta)a) in trace norm. For delta<d<B, SES01 bounds their total scaled trace norm by
    C_delta sum_(delta<d<B) [m_z/(1+u^2)] exp(-2(B-d)a).
This tends to zero by dominated convergence: for each fixed selected summand d<B, the exponential tends to zero and is bounded by one, and the weights are summable. There is no need for the gap B-d to be uniformly positive. If B is not attained, these two parts exhaust the full operator.

For d=B use the partial isometry J_a of SES01. Its normalized pair comparison (3) sums to O_B(exp(-Ba)) in trace norm. Combining the three contributions proves
    ||exp(-2Ba) Q_S(a)-J_a D_B(a) J_a*||_1 <= eta(a),      (2)
where one may take
    eta(a)= C_delta [a exp(-2(B-delta)a)+exp(-Ba)
           +sum_(delta<d<B) m_z exp(-2(B-d)a)/(1+u^2)]
      ->0.
Constants may depend on delta and the fixed zeta count. No numerical value or general rate for the subordinate sum is asserted; if deviations accumulate at B it can vanish arbitrarily slowly within the abstract estimate. For the boundary-side projection J_a*J_a=P_a direct sum P_a, SES01 also gives
    ||D_B(a)-(J_a*J_a)D_B(a)(J_a*J_a)||_1
        <=C_B exp(-Ba).                               (3)
On the range of J_a*J_a, J_a is isometric, identifying the nonzero spectra of the compressed boundary operator and its physical image. The two Hilbert spaces are not globally identified by an isometry of arbitrary midpoint restrictions; extra zero eigenvalues are immaterial for the lists below.

## 2. Ordered signed spectral prefactors

For a compact self-adjoint X, denote by n_j(X) the decreasing magnitudes of its negative eigenvalues and by p_j(X) its decreasing positive eigenvalues, each counting multiplicity and padded with zeros if necessary. The minmax characterization gives |n_j(X)-n_j(Y)|<=||X-Y|| and likewise for p_j on a common Hilbert space (zero padding is valid in infinite dimension). The off-diagonal self-adjoint block D_B(a) has nonzero eigenvalues ±sigma_j(T_B(a)): singular-vector factorization, or squaring the block, proves this for compact T_B, including multiplicities. Write sigma_j=0 past its rank if finite. Using (2)-(3) and the partial-isometry identification gives, for every fixed j,
    exp(-2Ba) n_j(Q_S(a)) = sigma_j(T_B(a))+o(1),
    exp(-2Ba) p_j(Q_S(a)) = sigma_j(T_B(a))+o(1).           (4)
In fact the error bound eta(a)+C_B exp(-Ba) is uniform in j, since the minmax perturbation bound is uniform in the index. This is a detailed maximal-scale generalized spectrum for possibly infinitely many maximal off-line pairs, not just a growth exponent or a scalar trace.

There is also l1 convergence of the entire signed lists:
    sum_(j>=1) |exp(-2Ba)n_j(Q_S(a))-sigma_j(T_B(a))| ->0,
    sum_(j>=1) |exp(-2Ba)p_j(Q_S(a))-sigma_j(T_B(a))| ->0.     (5)
For a self-adjoint trace-class X the sum of its first r negative depths is the supremum of -tr(PX) over orthogonal projections P of rank at most r, by the compact spectral decomposition; the total negative sum is the supremum of these finite-rank expressions. The analogous positive formula uses tr(PX). Each functional is Lipschitz in trace norm with constant one, since |tr(P(X-Y))|<=||X-Y||_1. If Y has rank at most r, the sum of either signed list of X beyond r is consequently at most 2||X-Y||_1: compare the total and first-r sums separately and use equality for Y. For a given U, truncate (1) to the finitely many maximal pairs with |u|<=U, obtaining rank at most r_U twice their count. It approximates D_B uniformly in trace norm by epsilon_U->0 and its J_a image approximates exp(-2Ba)Q_S within epsilon_U+eta(a), by (2) and ||J_a||<=1. The signed tails beyond r_U of the two lists in (5) are bounded by 2epsilon_U and 2(epsilon_U+eta(a)). For the first r_U terms use the uniform bound in (4). First let a->infinity with U fixed, then U->infinity, proving (5) without invoking an unproved eigenvalue matching inequality.

If B is not attained, (2) yields the stronger statement
    exp(-2Ba)||Q_S(a)||_1 ->0.
Thus all normalized eigenvalues and their absolute sum vanish at the supremum scale, even though STS02's scalar trace has exact limsup exponent 2B. The latter exponent is consistent with a subexponentially small scaled trace, not a nonzero leading coefficient. If RH holds, B=0 and the paired-zero form on H0^1 is nonnegative; the positive-spectrum asymptotics at B=0 are not asserted by this argument.

## 3. Reflection sectors and relation to the parity trace

Zeta's maximal set is reflection symmetric: if u+iB occurs then -u+iB occurs with equal multiplicity. Since k_(B-iu)=conj(k_(B+iu)), the summands of T_B at ±u are adjoints, so T_B=T_B*. Physical reflection intertwines J_a with endpoint swap on H_*, and the boundary projection J_a*J_a commutes with swap. On the even/odd boundary subspaces g->(g,±g)/sqrt(2), the block D_B restricts to ±T_B. All trace-norm comparisons (2)-(3) therefore hold on the corresponding sectors (compression cannot increase trace norm). The same minmax and trace-tail argument gives in l1, with zero-padded lists,
    exp(-2Ba)n_j(Q_S(a)|even) = n_j(T_B(a))+o_l1(1),
    exp(-2Ba)n_j(Q_S(a)|odd)  = p_j(T_B(a))+o_l1(1),
and the corresponding positive lists exchanged. This does not yet show that T_B has infinitely many eigenvalues of both signs if its maximal set is infinite, nor uniform lower bounds for each fixed depth; that requires a nondegeneracy argument, reserved for SES03. Reflection symmetry alone does not justify an infinite-dimensional inertia count.

As a consistency check, the scaled full parity trace satisfies
    exp(-2Ba) P(a)=2 tr T_B(a)+o(1)
by the sector trace-norm comparison, since P=tr(Q_even)-tr(Q_odd). Using SES01's Gram,
    2 tr T_B(a)
       =sum_(d=B) 2 m_z exp(2iua) /
              [2(B+iu)(1+B+iu)^2]
       =sum_(d=B) m_z exp(2iua) /
              [(B+iu)(1+B+iu)^2].
To compare with STS02's sign convention, reindex u->-u; i/z=1/(B-iu) and 1-iz=1+B-iu for z=u+iB. The resulting series is precisely STS02(7). Absolute trace summability justifies the reindexing even for an infinite maximal set. This is an independent spectral-side consistency check on the scalar inverse trace.

SES02 completes the arbitrary-maximal-scale generalized negative/positive spectrum with trace-norm and l1 control and no finite/gap/density assumption. Nondegeneracy of infinite maximal sets, possible lower deviation scales, and ordinary L2 transfer are not solved by (4) alone. SES03 next: establish fixed-index nonvanishing via an appropriate half-line interpolation or phase-compactness argument if possible, and examine subordinate scales without a uniform gap. No actual off-line zero or RH proof. README unchanged.

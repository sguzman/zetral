# PBC02 — Strong prime/pole cancellation, exact norm defect and sharp coarse bound

2026-11-25. AI-assisted candidate deduction without RH. Uses PBC01's PNT boundary limit and the inherited arithmetic Weil form. No actual off-line zero, numerical experiment, fresh source retrieval in this milestone, independent verification or priority claim. The recurrence argument is proved directly. Distinguish the bounded arithmetic shift/pole part from the full unbounded ordinary operator.

## 1. The pole boundary limit is norm-convergent

Let H_a be the ordinary integral operator with kernel 2cosh((x-y)/2) on I_a=(-a,a). It is the rank-at-most-two pole term in the arithmetic form. Use PBC01's fixed two-half-line isometry U_a, which identifies endpoint coordinates t,s in (0,a). Write h(t)=exp(-t/2), ||h||_2=1, K=h tensor h, and h_a=1_(0,a)h.

In the cross block x=-a+t, y=a-s, the normalized pole kernel is exactly
    exp(-a) 2cosh((2a-t-s)/2)
       =exp(-(t+s)/2)+exp(-2a+(t+s)/2).
The first term is h_a tensor h_a and converges in norm to K by the exponential L2 tail of h. The second is rank one on (0,a) with norm exp(-2a)(exp(a)-1)=O(exp(-a)). For the same-half blocks |x-y|<=a, a crude Hilbert-Schmidt bound gives O(a exp(-a/2)) after scaling. Thus
    exp(-a) U_a H_a U_a* -> C=[0 K; K 0] in operator norm.  (1)
By PBC01 the normalized prime-shift operator has the same strong limit C but has not been proved norm-convergent to it.

Define R_a=P_a-H_a, so the ordinary arithmetic operator has form A_a=H_alpha,compressed-R_a. Equations (1) and PBC01 yield
    exp(-a) U_a R_a U_a* ->0 strongly.                     (2)

## 2. The sharp norm of the cancellation defect

In the half-line cross block, K_a is self-adjoint, ||K_a||<=1+o(1) and K_a h->h. Decompose L2(0,infinity)=span{h} direct sum h^perp. The diagonal entry of K_a-K on span{h} tends to zero, and the off-diagonal block has norm <=||(K_a-K)h||->0. On h^perp the compression of K_a-K is just the compression of K_a, with norm <=1+o(1). Therefore
    limsup ||K_a-K||<=1.
Together with the vanishing same-half prime blocks and (1), this gives limsup exp(-a)||R_a||<=1.

For the reverse inequality, use the discrete shifts themselves. Fix a>0. There are finitely many nonzero weights in P_a, and denote their shift lengths by s_1,...,s_m. There exist arbitrarily large positive omega for which all exp(i omega s_l) approach 1 simultaneously. A direct proof: the sequence of phase vectors for integer omega lies in the compact product of m circles, so it has a convergent subsequence. Differences of two indices far apart in the subsequence tend to infinity while the phase-vector ratios tend to the identity. This proves the recurrence without a rational-independence assumption or a quantitative bound on how soon it occurs.

With M_omega f(x)=exp(i omega x)f(x),
    M_omega* T_s M_omega=exp(i omega s) T_s
exactly on I_a with zero extension. Consequently along the recurrence sequence
    ||M_omega* P_a M_omega-P_a|| ->0.                    (3)
For each fixed f in L2(I_a), M_omega f converges weakly to zero by the Riemann-Lebesgue lemma (products with L2 test vectors are L1 on I_a). Any compact operator C_a therefore has ||C_a M_omega f||->0. For unit f,
    lim ||(P_a-C_a)M_omega f|| = ||P_a f||.
Taking the supremum over unit f proves ||P_a-C_a||>=||P_a|| for every compact C_a. In particular the essential norm of P_a equals its full norm; compact subtraction of the pole cannot reduce that essential norm. Taking C_a=H_a and using PBC01's limit exp(-a)||P_a||->1 gives the reverse bound. Thus
    lim_(a->infinity) exp(-a)||P_a-H_a||=1.              (4)
The same argument applied to the rank-two fixed boundary block (compressed to the physical space) shows that the prime boundary convergence itself cannot be norm-convergent to C: its difference has norm tending to one after normalization. More directly (4) and (1) already imply this on the fixed boundary space. Equation (2) is strong convergence to zero with a nonzero limiting norm.

For clarity the bounded residual also retains both signs at that scale. Let p_a=sup sigma(P_a), l_a=inf sigma(P_a). In endpoint coordinates the cross block has symmetric signed extremal values ±||K_a|| (a self-adjoint block with off-diagonal K_a); the diagonal blocks are o(1) in normalized norm. Thus exp(-a)p_a->1 and exp(-a)l_a->-1. On each fixed a, approximate extremal unit vectors of P_a can be modulated using (3) to be weakly null and to retain their Rayleigh quotients, while the compact pole term tends to zero on them. Hence sup sigma(R_a)>=p_a and inf sigma(R_a)<=l_a. In combination with (4) the normalized upper and lower spectral extrema of the bounded residual tend to +1 and -1. This is not a statement about ordinary negative eigenvalues of the unbounded full form: the high modulations pay an archimedean energy cost.

## 3. Ordinary spectral implication

The compressed archimedean multiplier alpha(t) is bounded below by its finite alpha(0), from the positive digamma difference representation in GSG03. Therefore
    q_a(f,f)>= (alpha(0)-||R_a||)||f||_2^2,
and the actual ordinary negative depth satisfies
    limsup_(a->infinity) exp(-a) N_1(a)<=1.               (5)
This sharpens the unspecified O(exp a) constant in the coarse arithmetic bound, but does not prove any lower bound or a smaller exponent for ordinary negative eigenvalues. In particular it is consistent with RH and N_1=0.

The bounded perturbation B_a in the logarithmic form decomposition q=L+B_a differs from -R_a by the fixed bounded Fourier multiplier alpha-w, compressed to I_a. Its norm differs from ||R_a|| by at most a constant independent of a. Consequently
    exp(-a)||B_a|| ->1,
which refines the arithmetic norm constant in VMR01's metric comparison. The norm defect is a specific feature of the actual arithmetic translations and not merely the abstract diagonal countermodel of VMR03. It demonstrates why replacing the discrete prime measure by its PNT density in an unrestricted operator-norm argument is invalid. The recurrence proof supplies no frequency bound relative to exp(exp(a)), so it neither constructs an anomalous ordinary negative state nor rules one out.

PBC02 complete as candidate: exact strong cancellation, nonvanishing normalized operator-norm defect and essential norm mechanism, sharp coarse ordinary upper constant. PBC03 next: spatial tail estimates and necessary weak/frequency escape for hypothetical ordinary eigenstates at scale exp(a); examine quantitative frequency restrictions where PNT cancellation is uniform. No RH proof or actual off-line zero. README unchanged.

# NIR04 — Frequency escape obstruction and Campaign XV closure

2026-11-25. Internal candidate deductions, without RH. No formal/numerical verification, human review or priority claim. Sources directly checked this turn: Suzuki arXiv:2606.09096v4 https://arxiv.org/html/2606.09096v4 §2.4 (Fourier form and digamma integral, near (2.8)), §2.5 (distributional interpretation). The Carleman bound is proved below rather than imported from a search snippet. GSG03 and NIR03 supply the prior rate bounds.

## 1. A uniform logarithmic graph-norm bound

Write I=(-a,a), a>=1, f extended by zero, F[f](t)=integral f(x)e^(itx)dx. Let alpha(t)=Re psi(1/4+it/2)-log pi, and let H_alpha be its self-adjoint Fourier multiplier on the line. The closed form on I has domain V with norm equivalent, for fixed a, to L(f)^(1/2), where L(f)=(2pi)^-1 integral w(t)|F[f](t)|^2 dt and w(t)=1+log(2+|t|). The arithmetic remainder B_a is a bounded self-adjoint operator on L2(I), consisting of the truncated prime shifts and rank-two pole form. GSG03's Chebyshev bound and the cosh/sinh norms give ||B_a||<=C e^a with an absolute constant, and A_a>=-C e^a I.

Claim: if f belongs to Dom A_a, then its zero extension belongs to Dom H_alpha and
    ||H_alpha f||_2 <= ||A_a f||_2 + (||B_a||+C0)||f||_2,       (1)
where C0 does not depend on a. In the interior I, the distribution H_alpha f equals A_a f-B_a f, by testing against compact smooth tests and using the closed-form representation. On the exterior, the digamma integral gives
    alpha(t)-alpha(0)=2 integral_0^infinity k(s)(1-cos(ts))ds,
    k(s)=exp(-s/2)/(1-exp(-2s)).
Thus away from the diagonal the multiplier kernel equals -k(|x-y|); for x outside I the resulting distribution is the integral -integral_I k(|x-y|) f(y)dy. To justify this for nonsmooth f, first use compact smooth approximants in L2(I); H_alpha maps L2 continuously to H^(-sigma)(R) for every sigma>0 (logarithmic growth), while the exterior integral map is bounded on L2 as follows. For s>0, k(s)<=C/s, since s k(s) is bounded at both 0 and infinity. On the right exterior put u=x-a>0, v=a-y>0, then |x-y|=u+v. The kernel is dominated by C/(u+v), with input extended by zero from (0,2a) to R_+. Weighted Schur with weight u^-1/2 gives norm <=C pi since integral_0^infinity v^-1/2/(u+v)dv=pi u^-1/2; the same holds for the left exterior. This provides a uniform C0 for both exterior pieces. Interior and exterior together define an L2 function. The difference between this function and H_alpha f is a distribution supported at the two endpoints, belonging to H^(-sigma) for 0<sigma<1/2. No nonzero distribution supported at finitely many points belongs to this space: such a distribution is a finite sum of derivatives of point masses, each ruled out by the Fourier characterization (one may localize to an individual point by smooth multiplication). Hence the difference is zero. Plancherel proves the claimed full multiplier domain and (1).

Since alpha(t)=log|t|-log(2pi)+O(t^-2) at infinity and is bounded near zero, w(t)<=C(1+|alpha(t)|). For any unit f in the negative spectral subspace of A_a, the spectral bound implies ||A_a f||<=C e^a, so (1) yields the uniform second moment
    (2pi)^-1 integral w(t)^2 |F[f](t)|^2 dt <= C1 e^(2a).      (2)
The entire negative spectral subspace is in Dom A_a by compact resolvent and finite negative index. This is an estimate on the zero-extended Fourier transform, not merely the graph norm of a compressed multiplier. It also gives the upper tail bound P_f(|t|>=R)<=C1 e^(2a)/w(R)^2, where P_f(dt)=|F[f](t)|^2dt/(2pi) is a probability measure.

## 2. Necessary escape if an ordinary rate exceeds the normalized rate

Use NIR03's order statistic b_k, N_k(a)=max(0,-lambda_k(A_a)), and exact log-energy-normalized rate 2b_k. Fix b_k<b<=1/2. There are r_b<=k-1 fast negative sample directions (pairs with d>b). Let X_a be the first k ordinary eigenvectors' span whenever lambda_k<0. The finite fast-pair negative sample map is defined and bounded on L2(I), since complex Fourier evaluation is bounded for fixed a. Its kernel intersects X_a nontrivially. Choose a unit f_a in that intersection, so -q(f_a)>=N_k(a).

NIR03's estimate extends to the closed form domain without a constrained-core assumption: for every test f the bound is
    -q(f) <= sum_fast (m_z/2)|F[f](z)-F[f](conj z)|^2
               + C_b(a+1)^6 exp(2ba)L(f).
The first sum is finite and L2-continuous for fixed a, the last norm is form-continuous by equivalence, so approximate by arbitrary smooth tests. Apply it to f_a, whose fast components vanish. Then
    L(f_a)>=N_k(a)/[C_b(a+1)^6 exp(2ba)].                     (3)
If limsup a^-1 log(1+N_k(a))>2b_k, select 2b_k<2b<s strictly below that limsup. On a sequence a_j->infinity one has N_k(a_j)>=exp(s a_j) (choose an intermediate exponent if needed). Put
    H_j=exp((s-2b)a_j)/[C_b(a_j+1)^6].
Thus H_j->infinity exponentially, and E_{P_f} w>=H_j. Choose R_j=exp(H_j/4). For large j, w(t)<=H_j/2 on |t|<=R_j. Consequently the contribution to E w from |t|>R_j is >=H_j/2. Cauchy-Schwarz and (2) give
    P_(f_a_j)(|t|>R_j) >= H_j^2/[4 C1 exp(2a_j)].            (4)
The cutoff R_j is doubly exponential in window scale (log log R_j=(s-2b)a_j-O(log a_j)). The lower bound on tail mass may itself be exponentially small, but not arbitrarily smaller than (4). No assertion about a single eigenvector rather than a linear combination for k>1. For k=1, there are no fast constraints and the result concerns a bottom eigenvector. If b_k=0 or 1/2 the full rate was already settled by NIR03; the obstruction concerns interior values only. Equation (4) is a necessary condition, not an exclusion of escape.

A sufficient criterion for exact ordinary rate is subexponential growth of the largest L(f) on the unit sphere of the first k negative eigenvectors, or merely existence of such a log-energy-controlled vector in each fast-constraint intersection for every fixed b>b_k. Equation (3) proves the criterion by limsup, NIR01 supplies liminf. We have not established it; (2) alone allows exponential growth.

## 3. Campaign XV closure

NIR01 3269932f09dec298971978047b069f4f75f44bf4: explicit cardinal interpolation with exponentially controlled tails, finite window negative index and kth lower rate. NIR02 6f963389139b0c9565155fcf8453f613a1067f68: separation/conditioning and location-error certificate under complete finite data. NIR03 a28799d32e39457c45fe92f474455f874a9e4b95: exact unconditional log-normalized indexed rate 2b_k, parity duplication, conditional ordinary upper rate. NIR04: logarithmic graph-norm bound and quantified necessary frequency escape. Ordinary matching interior exponent remains open; no RH proof or detection of actual off-line zeros.

## 4. Next route

Campaign XVI: Frequency localization and escape. First concrete question: construct a frequency partition with compactly supported convolution filters that expands the physical support by a controlled amount and preserves total L2 and Weil form exactly (or with an explicit error). Investigate translated sinc-type windows whose squared sum is one on the real line; extend the identity to complex ordinates and justify exchange with the unconditional paired-zero sum. This may isolate the high-carrier contribution and permit local density or arithmetic phase estimates. Then quantify localization/escape in negative subspaces, assess whether the ordinary upper rate can be improved or give a precise obstruction, and consolidate. No result presumed. Preserve README as stable overview.

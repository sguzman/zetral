# SWD01 — Near-isometric ordinary form splitting without a fast inverse

2026-11-25. AI-assisted candidate deduction without RH. Uses FZE02's smooth dual profiles and mixed residual bound, and VMR02's finite ordinary boundary Gram. No actual off-line zero, anomalous state, numerical execution, independent review or priority claim. All spaces and spectral depths here use the original ordinary L2 metric.

Fix a finite reflection-invariant set F of distinct nonreal conjugate pairs and full multiplicities; remaining nonreal deviations are <=b in [0,1/2]. Let q=q_F+q_rem on the ordinary log-form domain V_a. The finite selected form is represented by the bounded finite-rank ordinary operator O_a=C_a*D_a C_a, where C_a is the normalized evaluation map of FZE02 and D_a the exact finite signed coefficient matrix. Write S_a=ran C_a*, K_a=ker C_a, so L2(-a,a)=S_a orthogonal direct sum K_a. For an empty F, all comparisons below are immediate with S_a={0}; assume it is nonempty.

## 1. Arbitrarily accurate smooth orthogonal right inverse

The exact ordinary minimum-norm right inverse is
    W_a^0=E_a G_a^-1, E_a=C_a*, G_a=C_a E_a.
Then C_a W_a^0=I, W_a^0 C_a=Pi_(S_a) is the ordinary orthogonal projection onto S_a. By the positive endpoint Cauchy Gram limit, G_a and G_a^-1 are uniformly bounded for all sufficiently large a. Also ||E_a||,||C_a||,||W_a^0|| are uniformly bounded.

For any prescribed accuracy 0<epsilon<1/4, choose fixed compact smooth approximations of the finite limiting endpoint exponentials so close in half-line L2 that the corresponding translated smooth synthesis E_a^s obeys
    ||E_a^s-E_a||<=delta
for all sufficiently large a, where delta>0 can be chosen arbitrarily small before the window limit. This follows from the exponential tails of E_a's profiles, their finite number, and the fixed compact support of the approximants: the physical same-endpoint norm is bounded by the half-line approximation error plus the exponentially small omitted tail, with any opposite-endpoint overlap estimated by the triangle inequality. The finite matrix M_a=C_a E_a^s satisfies ||M_a-G_a||<=C_F delta. Its inverse is uniformly bounded for small delta by the Neumann estimate, and ||M_a^-1-G_a^-1||<=C_F delta by the inverse identity. Set
    W_a^epsilon=E_a^s M_a^-1.
It is a compact-smooth right inverse and
    ||W_a^epsilon-W_a^0||<=C_F delta.
Taking delta small enough yields
    ||(W_a^epsilon-W_a^0)C_a||<=epsilon                 (1)
for all sufficiently large a. Constants in the later smooth-profile estimates may deteriorate as epsilon decreases; no uniform approximation-rate assertion is made. If parity is needed, average W_a^epsilon with its reflected coordinate counterpart as in FZE02. W_a^0 is already equivariant, so averaging preserves (1) and the smooth right-inverse property.

## 2. Near-identity change of ordinary coordinates

On the ordinary Hilbert space S_a orthogonal direct sum K_a define
    J_a(x+k)=W_a^epsilon C_a x+k.
Then C_a J_a=C_a and
    J_a=I+(W_a^epsilon-W_a^0) C_a,
    ||J_a-I||<=epsilon.
It is invertible, with ||J_a^-1||<=(1-epsilon)^-1, and
    (1-epsilon)||v||<=||J_a v||<=(1+epsilon)||v||.       (2)
Indeed its ordinary norm closeness already gives invertibility by the Neumann series; the evaluation identity also gives an explicit inverse in the direct-sum coordinates. Importantly J_a maps the reference form domain S_a direct sum (V_a intersect K_a) bijectively onto V_a. For the forward map W_a^epsilon C_a x is smooth; for the reverse map decompose f as W_a^epsilon C_a f+(f-W_a^epsilon C_a f). The second term lies in V_a intersect K_a and the first has the required finite coordinate. This does not rely on exact ordinary evaluation columns themselves having smooth endpoint behavior.

Define the reference direct-sum closed form
    p_a(x+k)=<O_a x,x>_2+q_rem(k,k)
on that reference domain, with representing self-adjoint operator
    P_a=O_a|S_a direct sum A_(rem,K_a).
Here A_(rem,K_a) is the ordinary kernel-restricted remainder operator of FZE01, NOT a restriction of the operator domain of the full remainder. The finite selected form of J_a(x+k) is exactly <O_a x,x>, since C_a J_a=C_a and C_a k=0. This exactness avoids a term of order epsilon times the largest selected exponential scale.

## 3. Ordinary-norm form error only at the residual mixed scale

Put L_a=1+exp(ba)sqrt(I_a(b)) as in FZE02. Since W_a^epsilon has a fixed finite compact smooth envelope family with bounded coefficients at the chosen accuracy, FZE02's ordinary mixed estimate gives
    |q_rem(W_a^epsilon c,f)|<=C_(F,epsilon) L_a ||c||||f||
for all f in V_a. The same bound with f=W_a^epsilon c controls its finite block. Expanding q(J_a(x+k)) therefore proves
    |q_a(J_a v,J_a v)-p_a(v,v)|
         <= D_(a,epsilon)||v||^2,
    D_(a,epsilon)=C_(F,epsilon) L_a.                    (3)
The Hermitian difference extends to a bounded self-adjoint ordinary operator E_(a,epsilon) with norm <=D, by polarization and the norm characterization of bounded Hermitian forms. There is no mixed-form error depending on the unknown residual ordinary negative depth. For b>0, L_a=O_b(exp(2ba)); for b=0, L_a=O(sqrt(a)+1).

At every nonnegative depth threshold t, (2)-(3) give the two-sided shifted form comparison
    p_a(v,v)+[(1-epsilon)^2 t-D]||v||^2
       <= q_a(J_a v,J_a v)+t||J_a v||^2
       <= p_a(v,v)+[(1+epsilon)^2 t+D]||v||^2.
As the coordinate change is bijective on form domains, negative indices satisfy
    n_p(a,(1+epsilon)^2 t+D) <= n_full(a,t)
                            <= n_p(a,(1-epsilon)^2 t-D)            (4)
when the latter argument is nonnegative. The minmax comparison for zero-padded negative depths, valid for every j even without that threshold condition, is
    (N_(p,j)-D)_+/(1+epsilon)^2 <= N_(full,j)
                              <= (N_(p,j)+D)/(1-epsilon)^2.         (5)
For the lower bound map a p-negative trial span using J_a and the upper norm bound. For the upper bound pull a full negative spectral span back via J_a^-1 and use the lower norm bound. If the comparison depth is below D the corresponding zero-padded inequality is immediate.

No assumption of a gap between t and the finite selected modes is used. In particular (4)-(5) apply at thresholds matching their own scales, even if some other finite selected scales are much larger. They are same-window comparisons, unlike the excision filter's support enlargement. The p-depths are the ordered union of the actual finite selected ordinary O_a depths and the kernel remainder depths. SWD02 will replace the latter by unrestricted residual depths at the same window. All statements restrict to parity using the equivariant W_a^epsilon.

SWD01 complete as candidate: arbitrarily accurate near-identity ordinary form comparison, with exact finite selected part and residual-scale bounded error, uniform in all spectral indices and tested thresholds. No actual off-line zero, independent review, numerical experiment or RH proof. README unchanged.

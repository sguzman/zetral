# NIR01 — Constructive finite-pair interpolation and negative Gram margin

2026-11-25. Internal candidate deduction, without RH. No formal/numerical verification, independent human review or priority claim. Source inspected this turn: Suzuki arXiv:2606.09096v4 §3.1 (3.1), §3.2 compact smooth core argument, https://arxiv.org/html/2606.09096v4. Bombieri (2000) abstract and HTML transcription search results confirm related finite truncation inertia work; no new full proof comparison. Classical unconditional unit-interval zero count with multiplicity O(log(2+|t|)) is an imported estimate.

## Setup

Let Gamma be the distinct complex ordinates z=(rho-1/2)/i, m_z their multiplicities; |Im z|<=1/2. For F[f](z)=integral f(x)exp(izx)dx and V f=(F[f](z))_z, write K=ell^2(Gamma,m_z), J y at z = y at conj z. The paired form q(f,g)=<Vf,J Vg> holds on compact smooth tests, J is a self-adjoint unitary. Fix k distinct nonreal conjugate pairs and let S be their union of 2k ordinates. For each pair choose its upper member z_j and set y_j=(e_(z_j)-e_(conj z_j))/sqrt(2m_(z_j)). These are orthonormal negative directions of J.

## 1. Exact interpolation with an exponentially small tail

Fix h>0 and 0<r<1. Let U=max_(w in S)|Re w|. Choose R>max(1,U+exp(h/2)/(hr)), let Gamma_R={z in Gamma: |Re z|<=R}, a finite set containing S and invariant under conjugation. Choose a nonnegative integral-one smooth bump chi supported strictly in (-h0,h0), with h0 sufficiently small that |F[chi](w)-1|<1/2 on S. This follows from the bound |exp(iwx)-1|<=|w x|exp(|w x|). For each w in S, put
    p_w(z)=prod_(v in Gamma_R excluding w)(z-v),
    k_w=p_w(i D_x)chi/[p_w(w) F[chi](w)].
Then K_w=F[k_w] takes value 1 at w and 0 at every other ordinate of Gamma_R. All k_w are compact smooth with support strictly in (-h0,h0); their constants may be very large, but fixed. The construction uses the exact nearby zero locations, not just the selected off-line pairs.

Let g_w(x)=exp(-i Re(w)x)/(2h) on [-h,h], zero elsewhere. Its transform is G_w(z)=sinc(h(z-Re w)), L1 norm 1. At w,
    L_w=G_w(w)=sinh(h |Im w|)/(h |Im w|)>1.
For z outside Gamma_R, |G_w(z)|<=exp(h/2)/(h(R-U))<r, since |sin(x+iy)|<=exp(|y|) and |z-Re w|>=|Re z-Re w|. For integer n>=0 form the compact smooth test
    b_(w,n)=k_w*g_w^{*n}/L_w^n
(with n=0 meaning k_w).
Support lies strictly in (-h0-nh,h0+nh). Its transform B_(w,n)=K_w (G_w/L_w)^n takes the same cardinal values on Gamma_R and satisfies
    ||1_(Gamma outside Gamma_R) V b_(w,n)||_K <= C_w (r/L_w)^n,
    ||b_(w,n)||_2 <= A_w L_w^(-n),
where C_w=||1_(Gamma outside Gamma_R) V k_w||_K is finite and A_w=||k_w||_2, by the strip Schwartz bounds, zero count and Young's inequality. In particular C_w can be bounded using
    C_w^2 <= exp(h0)||k_w''||_1^2 sum_(|Re z|>R) m_z / |Re z|^4.
Indeed two integrations by parts on the compact smooth k_w give |K_w(z)|<=exp(h0/2)||k_w''||_1/|z|^2. The last sum is O(log(2+R)/R^3) by the unconditional local zero count (with its constant), or may be retained as an explicit positive convergent tail. No empirical numerical evaluation is claimed.

## 2. Negative-definite Gram margin and window condition

Define f_(j,n)=(b_(z_j,n)-b_(conj z_j,n))/sqrt(2m_(z_j)). On Gamma_R their sample vectors are exactly y_j, with no perturbation on that finite conjugation-invariant band. Put L=min_(w in S)L_w>1 and
    C_j=(C_(z_j)+C_(conj z_j))/sqrt(2m_(z_j)),
    A_j=(A_(z_j)+A_(conj z_j))/sqrt(2m_(z_j)),
    C=(sum_j C_j^2)^(1/2), A=(sum_j A_j^2)^(1/2)>0.
For coefficients c in C^k and f=sum_j c_j f_(j,n), the sample vector equals Yc+E_n c, where Yc=sum c_j y_j and E_n c is supported outside Gamma_R, with ||E_n||<=C(r/L)^n. Since J preserves the band and its complement, cross terms vanish exactly. Thus
    q(f,f)=-||c||^2+<E_n c,J E_n c>
       <= -[1-C^2(r/L)^(2n)]||c||^2.
In particular the Gram matrix differs from -I in operator norm by at most C^2(r/L)^(2n). The tests are independent already by exact samples on S. Their L2 synthesis norm is <=A L^(-n) by triangle inequality and Cauchy-Schwarz. For any 0<epsilon<1 choose a nonnegative integer n with C^2(r/L)^(2n)<=epsilon, for example
    n=max(0,ceil(log(max(1,C^2/epsilon))/(2log(L/r)))).
Then for every a>=h0+nh, support is strictly inside (-a,a) and minmax gives
    n_-(A_a)>=k,
    lambda_k(A_a)<= -(1-epsilon)L^(2n)/A^2.
The threshold is sufficient and depends on selected pairs, the finite surrounding band, interpolation constants and a zero-count bound. It is not necessarily sharp or numerically practical. It makes the qualitative density proof of GSG04 constructive without using an infinite zero list in the polynomial. The error criterion also supplies a certified negative Gram margin in the ideal exact-data model. Sensitivity to finite zero location uncertainty and explicit gap-dependent constants belong to NIR02.

## 3. Consequence for higher eigenvalue growth

For fixed h,r,R,h0 and all large a, take n=floor((a-h0)/h). The same estimates imply
    liminf_(a->infinity) a^-1 log(1+max(0,-lambda_k(A_a))) >= (2/h) log L.
For the selected finite S let d_min=min_(w in S)|Im w|>0. Since sinh(x)/x increases for x>0, L=sinh(h d_min)/(h d_min), and as h->infinity, log L/h->d_min. Constants and threshold may depend on h, which is fixed before taking a->infinity. Hence the liminf is at least 2d_min. This is a lower bound for each fixed finite number of resolved pairs, not just the bottom. No upper bound for individual indexed negative eigenvalue exponents, no determination of pair ordering when a supremum is not attained, and no parity-resolved quantitative result claimed here. NIR03 should investigate matching bounds under stated hypotheses and parity, rather than repeat this lower bound. NIR01 complete as internal candidate; next NIR02 explicit separation/conditioning and robustness.

No RH proof, observed off-line zero, numerical certification, priority claim, or independent human review. Related Bombieri finite-matrix inertia results must be distinguished from these localized test-space inequalities.

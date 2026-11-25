# FES02 — Carrier coercivity, finite truncation and packet selection

2026-11-25. Internal candidate deduction without RH. Imports FES01 exact partition, GSG03 paired-zero/log-energy bound and arithmetic remainder estimate, NIR04 frequency-escape obstruction. No fresh external source inspection in this batch, no priority claim, formal/numerical verification or human review.

## 1. Carrier coercivity

Fix h>0, a>=1, A=a+h. Use FES01's convolution frame P_n with carriers omega_n=pi*n/h, packet g_n=P_n f, m_n=||g_n||_2^2, and relative moments
    E_n=(2pi)^-1 integral (1+h|t-omega_n|)^p |F[g_n](t)|^2 dt
for fixed p>=1. For every form vector f on (-a,a), sum m_n=||f||^2, sum q_A(g_n)=q_a(f), sum E_n<=C_p||f||^2. All sums of forms are absolutely convergent by FES01. The constants C_p depend on the fixed smooth window and p, not a,h.

Let B_A denote the bounded arithmetic remainder of A_A (prime shifts and pole form); its norm is O(exp A) by GSG03. The digamma symbol satisfies alpha(t)>=log(2+|t|)-c for a fixed c>=0. Put K_A=1+c+||B_A||, so
    q_A(g)>= (2pi)^-1 integral [log(2+|t|)-K_A]|F[g](t)|^2 dt.
Since 2+|omega| <= (2+|t|)(1+|t-omega|), and log(1+s)<=D_h(1+hs)^p for a finite D_h (e.g. max(1,h^-1) for p>=1), it follows that
    q_A(g_n) >= [log(2+|omega_n|)-K_A] m_n-D_h E_n.       (1)
This is carrier-specific but does not require individual normalized moments to be bounded. Summing yields q_a(f)>=sum_n log(2+|omega_n|)m_n-(K_A+D_h C_p)||f||^2, with finite weighted sum on form vectors (by the same elementary log inequality and FES01). It cannot yet replace K_A by O(exp(2B a)) for B=sup|Im z|.

## 2. High-carrier truncation with controlled negative error

Let Omega>0 satisfy H=log(2+Omega/2)>=K_A. Write high={n:|omega_n|>Omega}, low its finite complement. For n high let l_n=(2pi)^-1 integral over |t|<Omega/2 of |F[g_n](t)|^2 dt. From the Fourier lower bound,
    q_A(g_n) >= (H-K_A)m_n-H l_n,
and also q_A(g_n)>=-K_A l_n, because the multiplier lower bound is nonnegative for |t|>=Omega/2 and at least -K_A elsewhere. For these low-frequency leakages, |t-omega_n|>=Omega/2. FES01's aggregate moment inequality therefore gives
    sum_high l_n <= C_p(1+h Omega/2)^(-p)||f||^2,
    sum_high max(0,-q_A(g_n)) <= epsilon_A ||f||^2,
    epsilon_A=K_A C_p(1+h Omega/2)^(-p).                 (2)
In particular q_low=sum_low q_A(g_n)<=q_a(f)+epsilon_A||f||^2. A choice Omega=2 exp(2K_A), for example, makes H>=2K_A, epsilon_A very small as K_A grows, and yields from the first bound on high
    sum_high q_A(g_n)>=(H-K_A)sum_high m_n-H C_p(1+h Omega/2)^(-p)||f||^2.
This is an estimate for the frame coefficients, not a sharp support restriction on F[f].

Suppose X is a k-dimensional subspace on which q_a(f)<=-gamma||f||^2 with gamma>epsilon_A. The linear map T_low f=(P_n f)_low into the finite Hilbert direct sum of L2(-A,A) is injective on X: otherwise q_low=0 contradicts q_low<=-(gamma-epsilon_A)||f||^2 for nonzero f. Also ||T_low f||^2<=||f||^2, so on the k-dimensional image,
    sum_low q_A(g_n) <= -(gamma-epsilon_A)||T_low f||^2.
Thus the direct sum compressed to the actual image retains k negative directions with the stated margin. This does not establish k directions in one packet or improve the ordinary kth eigenvalue bound: the direct sum permits multiple copies of the same negative mode, and fast-pair constraints are not invariant under the frame. The finite carrier cutoff is of order exp(O(exp A)), not sub-doubly-exponential, so (2) does not exclude NIR04's escape.

## 3. A selected packet with controlled normalized spread

Write N(a)=max(0,-lambda_1(A_a)) and take N(a)>0. Monotonicity gives N(A)>=N(a). Let f be a normalized ground state on (-a,a). For tau=N(a)/(4C_p),
    sum_n [q_A(g_n)+tau E_n] <= -3N(a)/4.
Since the masses sum to one, there exists a nonzero packet with
    [q_A(g_n)+tau E_n]/m_n <= -N(a)/2.
For its normalized version v=g_n/sqrt(m_n), we have
    q_A(v)<=-N(a)/2,
    (2pi)^-1 integral (1+h|t-omega_n|)^p |F[v](t)|^2 dt
       <= 4 C_p N(A)/N(a).                               (3)
Here the second bound uses q_A(v)>=-N(A). No assumption about a lower bound on individual packet mass is used. For any p fixed, a uniform ratio bound N(a+h)/N(a) along a sequence therefore gives a uniform pth carrier-relative moment. One should not conclude uniformity simultaneously in all p from choosing different packets for each p. The half-depth loss is harmless for exponential growth rates.

## 4. Selecting near-limsup windows with bounded ratio

If RH fails, N is positive eventually by GSG01 and unbounded; GSG02 gives a positive lower exponent. Define S=limsup_(a->infinity) a^-1 log N(a) in (0,1], by GSG03. Fix h and any sigma>S. There is a sequence a_j->infinity with log N(a_j)/a_j->S and N(a_j+h)/N(a_j)<=exp(sigma h). Proof: choose t_j->infinity with log N(t_j)>=(S-e_j)t_j, log N(t)<=(S+e_j)t for all t>=t_j, where e_j->0 positive (choose t_j beyond the corresponding upper-envelope threshold). Put L_j=ceil(sqrt(e_j)*t_j/h)+1. If the ratio exceeded exp(sigma h) at every t_j+mh, 0<=m<L_j, telescope to obtain
    (S-e_j)t_j+sigma L_j h < log N(t_j+L_j h)
       <=(S+e_j)(t_j+L_j h).
This requires (sigma-S-e_j)L_j h<2e_j t_j, impossible for sufficiently small e_j. Select a_j=t_j+mh at a bounded-ratio step. Since L_j h/t_j->0, monotonicity and the upper envelope give log N(a_j)/a_j->S. This does not require differentiability or a global growth-ratio bound.

Apply (3) on these windows with any fixed p>=1. For A_j=a_j+h obtain unit compact smooth packets v_j in (-A_j,A_j), carriers omega_j, q_Aj(v_j)<=-N(a_j)/2, and relative moment <=4C_p exp(sigma h), independent of j. Their negative Rayleigh depths have limsup exponential rate S (indeed a limit along this sequence, since bounded above by N(A_j)). Boundary expansion by fixed h changes no exponent.

## 5. If S exceeds 2B, escape occurs through tightly localized carriers

Assume S>2B, where B=sup|Im z|. GSG03 gives -q_Aj(v_j)<=C(A_j+1)^6 exp(2B A_j)L(v_j). By (3) and log(2+|t|)<=log(2+|omega_j|)+log(1+|t-omega_j|),
    L(v_j)<=1+log(2+|omega_j|)+4D_h C_p exp(sigma h).
Combining with the negative depth gives
    log(2+|omega_j|) >= N(a_j)/[2 C(A_j+1)^6 exp(2B A_j)]-O(1).
For every delta in (0,S-2B), the right side eventually exceeds exp(delta a_j). Thus |omega_j|>=exp(exp(delta a_j))-2. Conversely (1) and q_Aj(v_j)<0 imply log(2+|omega_j|)<=K_Aj+4D_h C_p exp(sigma h)=O(exp a_j). The carrier lies at doubly exponential scale, and its relative spread is uniformly bounded in the selected p moment: the probability of |t-omega_j|>D is at most 4C_p exp(sigma h)(1+hD)^(-p). This upgrades NIR04's small-tail escape to localized negative packets retaining a fixed fraction of the bottom depth along a near-limsup sequence. It concerns the bottom, not individual eigenvectors or higher-index fast constraints. If RH holds N=0 and the escape antecedent is false.

FES02 complete as internal candidate. FES03 next: examine carrier-shifted arithmetic forms and whether prime-phase cancellation, local zero density or another arithmetic estimate excludes these high-carrier packets. Do not claim the escape impossible merely from the double-exponential cutoff: the bounds are compatible. No independent verification, RH proof or priority claim. README unchanged.

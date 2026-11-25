# C04 — An analytic prime-free exact-local certificate

25 November 2026 UTC. Lead investigation independent of C04-W01 (which studies X=2). Conditional on the imported local Weil form/domain and phase-pi spectral characterization of Suzuki. The estimates here use exact elementary inequalities, not numerical sampling or floating-point interval arithmetic. Internally checked, not peer-reviewed or formally verified. No assertion of novelty.

## 1. Prime-free form and direct coercivity

Let L=2a with 0<L<log 2. Write I=(-a,a) and S_t=T_t+T_t^*, where (T_t u)(x) is u(x-t) with zero extension outside I and restriction to I. Both truncated shifts are contractions on L2(I). Thus S_t is self-adjoint, ||S_t||<=2, and 2I_op-S_t>=0. Use I_op for the identity operator, not the interval.

For test vectors the correlation sum in the geometric Weil functional equals <S_t u,u>_2. Reopened Suzuki arXiv:2606.09096v4 section 1.1 (explicit formula and definition of Q_W), and arXiv:2610.32704v1 equation (2.4), section 3.2 (3.3), Lemma 3.2. No prime-power term occurs for L<log 2. Splitting the archimedean subtraction at L, as in literature/gram-quadrature.md, gives the sesquilinear form

    q(u,v)=c <u,v>_2
        + integral_0^L K(t)<(2I_op-S_t)u,v>_2 dt
        + integral_0^L 2 cosh(t/2)<S_t u,v>_2 dt
        + d <u,v>_2,

    K(t)=exp(t/2)/(2 sinh t),
    c=-log(4 pi)-gamma_E-log(tanh(L/2)),
    d=integral_0^L 2(exp(-t/2)-1)K(t)dt.

The sign of d is negative. The term -log(tanh(L/2)) comes from the tail integral of 1/sinh(t). This identity follows by polarization of the geometric formula; the off-diagonal correlation convention is harmless since S_t contains both signs. For L<=1/2, K(t)<=1/t (exp(L/2)<2, sinh t>=t), so -L<=d<=0. The pole integral defines a bounded self-adjoint operator of norm at most 8 sinh(L/2). Positivity of the shift difference then implies

    A_a >= kappa I_op,  kappa=c-L-8 sinh(L/2),

whenever kappa>0, extending the inequality from compact smooth tests by the form core. This lower bound covers the full complex space, without known zeros or an imported numerical coercivity constant.

## 2. Actual operator residual on two simple vectors

Let g0(x)=1 and g1(x)=x/a on I, both zero-extended. They are in the form domain: their Fourier transforms are O(1/|z|) on the real line by integration by parts, which is integrable in the squared logarithmic Fourier weight. The domain characterization follows from Suzuki v4 section 2.4 (2.8) and the closed form/core identification; equivalently approximate these two functions by smooth interior cutoffs, whose uniformly bounded variation gives a uniform O(1/|z|) Fourier bound and whose L1 convergence gives pointwise Fourier convergence, then apply dominated convergence in the logarithmically weighted norm. For each fixed a the form norm is equivalent to that weighted norm under positive coercivity, by the bounded remainder in (2.8) and the form closure. Endpoint jumps do not require endpoint-zero traces for this logarithmic form.

For either g, sup|g|<=1 and Lipschitz constant at most 1/a on I. Truncation loses at most a strip of length t at either end. Thus for 0<t<L,

    ||(2I_op-S_t)g||_2 <= 2 (t/a) sqrt(L)+2 sqrt(t).

The norm estimate is obtained separately for each shifted difference using the interior Lipschitz bound and the boundary strip; the triangle inequality suffices. Since K<=1/t, the vector integral of K(t)(2I_op-S_t)g converges in L2 with norm at most 2(L/a)sqrt(L)+4sqrt(L)=8sqrt(L). For smooth compact test v the vector integral represents the shift term of q(g,v): use the geometric formula by approximating g with interior cutoffs as above, or its correlation formula directly (the subtracted integrals converge). More explicitly, the positive shift form Q_shift is bounded relative to the shifted q norm by the displayed identity on compact tests and the bounded scalar/pole terms. Cauchy–Schwarz in Q_shift extends the identity to form limits; the integral of <(2I_op-S_t)g,v> converges by the vector bound. To justify the extension, the functions (2I_op-S_t)^(1/2)g_k converge in the weighted L2((0,L),Kdt;L2) norm when g_k is form-Cauchy, and for each t their L2 limits are (2I_op-S_t)^(1/2)g. Thus the extended shift form is exactly the displayed integral. The form representation theorem and test-core density imply g belongs to Dom A_a and

    ||(A_a-c I_op)g||_2 <= [8+L+8 sinh(L/2)] sqrt(L)
                         <= 18 sqrt(L).                         (C04.1)

This is a full-space operator residual bound, not an estimate on a finite Gram solve. It is coarse but sufficient as L decreases.

## 3. Rescaled characteristic function: cosine limit

Let u_e=A_a^(-1)cosh x and u_o=A_a^(-1)sinh x. These are the even and odd parts of the two evaluation representers for +/-i. Suzuki's phase-pi function is

    W(z)=2z F[u_o](z)-2i F[u_e](z).

Define the nonzero scalar normalization and rescaled argument

    C_a(s)=c W(s/a)/(-2i L)
          =(1/L)F[c u_e](s/a)+(i s/L)F[c u_o/a](s/a).

The letter C_a(s) here denotes an entire scalar function, not the inverse-compression operator of R02. For a<=1/4, Taylor's series gives |cosh x-1|<=a^2 and |sinh x/a-x/a|<=a^2 on I. By C04.1 and inverse coercivity,

    ||c u_e-g0||_2, ||c u_o/a-g1||_2
       <= (18+c a^2) sqrt(L)/kappa,    if c>0, kappa>0.

Indeed apply A_a to the respective differences and use c times the forcing error plus (cI_op-A_a)g. On a compact |s|<=S, |Im s|<=Y, the evaluation bound after rescaling is |F[h](s/a)|<=sqrt(L) exp(Y)||h||_2. Since

    (1/L)F[g0](s/a)=sinc(s),
    (i s/L)F[g1](s/a)=s (d/ds)sinc(s),

the sum equals cos(s), including removable values at zero. Hence

    |C_a(s)-cos s| <= exp(Y)(1+S)(18+c a^2)/kappa.            (C04.2)

As a->0, c=log(1/a)+O(1), kappa=c-O(a), so the right side is O_(S,Y)(1/log(1/a)). This proves compact-uniform convergence to cosine under the stated form and characteristic imports. For each fixed n, the positive rescaled exact eigenvalue satisfies

    a t_(a,n) = (n-1/2) pi + O_n(1/log(1/a)).

Proof: choose a rectangle enclosing the first n positive cosine roots and no others, plus disjoint small disks around them. Rouché on the rectangle and disks proves ordering and convergence as a->0. In each fixed disk around a simple cosine root s_n, the quotient cos(s)/(s-s_n) has a strictly positive lower modulus on its closure if no other cosine zeros are included. At the corresponding exact zero C_a(s)=0, (C04.2) then bounds |s-s_n| by O_n(1/log(1/a)). Reality, simplicity, and absence of a zero at the origin follow from the imported phase-pi characterization. This concerns the differentiation spectrum, not the bottom eigenvalue of the L2 form. No implication for the large-window convergence rate or RH itself.

## 4. A fully explicit analytic contour example

Select L=2^(-2048), a=2^(-2049). This deliberately tiny prime-free window is independent of the worker's X=2 numerical experiment. It is chosen for a clean elementary certificate, not as a physically or computationally practical window.

Since tanh(L/2)<L/2, log 2>1/2, log(4 pi)<3 and 0<gamma_E<1,

    c>2049/2-4>1020.
    
For L<=1/2, sinh(L/2)<1 and L<1, so kappa>1011>1000. Conversely tanh(L/2)>=L/4 (sinh t>=t, cosh t<=2 for t<=1/4), giving c<log(4/L)<2050 since log 2<1. Consequently c a^2<1. These are strict exact elementary estimates, not rounded numerical evaluations.

Consider the two rectangles in s: outer [0,2] x [-1/2,1/2] and inner [1,2] x [-1/2,1/2]. On both boundaries |s|<3, exp(|Im s|)<2. Equation C04.2 implies

    |C_a(s)-cos s| < 2*4*19/1000 = 19/125 < 1/3.

On horizontal edges |cos(x+iy)|^2=cos^2 x+sinh^2 y gives modulus >=sinh(1/2)>1/2. On vertical edges x=0,1,2 the modulus is at least |cos x|; cos 0=1, cos 1>=1/2 and cos 2< -1/3 (alternating Taylor series through degree four). Hence min boundary |cos s|>=1/3. Each rectangle contains exactly one cosine zero (pi/2, using 3<pi<4). Rouché proves each contains exactly one zero of C_a(s), counted with multiplicity. The exact local spectral correspondence implies this is the first positive eigenvalue, not simply an unidentified root. In particular

    1 < a t_(a,1) < 2,
    2^2049 < t_(a,1) < 2^2050.                              (C04.3)

This is a rigorous analytic enclosure conditional on the explicitly imported form and spectral theorems, with no floating-point or zero-input dependency. It certifies the exact local spectrum at an extreme small window, not a numerical Fourier solve or any Riemann zero. No software interval run or Lean proof is asserted. The bound is intentionally broad.

## 5. Prior art and limits

Primary sources actually reopened 2026-11-25: Suzuki, arXiv:2606.09096v4, section 1.1, section 2.4 (2.8), Theorem 1.4 (small-window L2 form bottom asymptotic); Suzuki, arXiv:2610.32704v1, section 3.2 (3.3), Lemma 3.2 (phase-pi spectral characteristic). The former small-window theorem is not the differentiation eigenvalue asymptotic derived here. A targeted search found a numerical small-a study of the L2 form at https://huggingface.co/datasets/VIDraft/riemann-zeta-sonification/blob/main/SUZUKI_technical_note.md (search excerpt only); also Skelly's spectral-edge listing https://www.alphaxiv.org/abs/2611.localized-weil-spectral-edge (search excerpt only). No exhaustive comparison; the exact cosine limit and its rate are candidate observations, not a priority claim. Zhu's reported small-window positivity is not required for the direct bound in this proof. The proof does not require the C02 Fourier tail; it tests the residual-to-contour principle via explicit analytic trial vectors. The existing X>=2 solver's practically relevant numerical certification is still outstanding.

Worker handoff fetched at this checkpoint: research/workers/C04-W01/HANDOFF.md on worker/c04-w01, blob ba0555cee65f50a30bb0c755f4a8417863886b44. Status IN_PROGRESS; assignment acknowledged, baseline 028a5133cb0a238ed365b80d6461c5416cd56725, Rust not on PATH, no independent audit or numerical results submitted yet. No worker result accepted. C04 lead has met its alternative explicit-example objective; the independent worker audit and realistic-window experiment remain open for later review. No duplicate experiment run.

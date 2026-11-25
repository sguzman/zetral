# N01 — Differentiated theta witness and a sufficient coercivity threshold

25 November 2026. Conditional on RH for the real weighted sampling norm and positive local form. The bounds below are internal candidate deductions, not a proof of RH, independent human review, formal certification, or established originality.

**N02 follow-up (25 November 2026):** The sufficient coercivity criterion in §4 is mathematically valid as an implication but incompatible with the even-sector upper bound in Andrews–Connes–La Gatta, arXiv:2611.13129v1, Theorem 3.1. Do not pursue that criterion as an attainable estimate. See [N02 coercivity audit](N02-coercivity-audit.md) for the normalization check, obstruction, and improved conditional prolate witness.

## 1. Source inputs and normalization

Direct primary-source retrieval in this turn:
- Lagarias–Montague, arXiv:1106.4348v3, https://arxiv.org/html/1106.4348v3, equations (1.1)–(1.2), Lemma 3.1 (evenness and analyticity).
- Suzuki, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, introduction and §§2.2–2.3, especially (2.5), (2.8), (2.9), and the evaluation bound preceding (2.5).
The actual HTML returned these passages. No new quantitative lower coercivity estimate was imported. The exact repository L02 note and active campaign/state were read.

Let F[f](z)=integral f(x) exp(izx) dx, q_a linear in its first argument, and lambda_a=inf spec(A_a)>0 under the imported RH framework. On C_c^infty(-a,a), the squared form norm is sum_(gamma in Gamma) m_gamma |F[f](gamma)|^2, with Gamma the distinct signed ordinates and m_gamma their multiplicities. The local evaluation vector is u_z=A_a^-1 exp(-izx), so q_a(f,u_z)=F[f](conj z). The map z->u_z is entire into the form space by local positive coercivity. Differentiating along real z at zero (so no conjugation sign is lost) gives

    u'_0=A_a^-1(-ix), q_a(f,u'_0)=F[f]'(0)=integral ix f(x) dx.

Write M_a=||u_0||_q and N_a=||u'_0||_q. The R03 scalar L_a=N_a^2/M_a=M_a||C_a e_a||^2 uses the inherited exact evaluation-resolvent identity and evenness of P_a; the bound on N_a below does not require that identity.

## 2. Odd theta witness and derivative envelopes

Use A_0(z)=xi_0(1/2-iz), xi_0(s)=s(s-1) pi^(-s/2) Gamma(s/2) zeta(s)/2, one half of Suzuki's xi normalization. The classical smooth real even inverse Fourier kernel Phi satisfies F[Phi]=A_0 and, for x>0,

    Phi(x)=sum_(k>=1) [4 pi^2 k^4 exp(9x/2)-6 pi k^2 exp(5x/2)]
                              exp(-pi k^2 exp(2x)).

The kernel is even and analytic on the real axis by the source. Each summand is positive on x>0 because 2 pi k^2 exp(2x)>3. Thus A_0(0)>0. For y=exp(2|x|), and j=0,1,2, termwise differentiation on the positive half-line gives

    |Phi^(j)(x)| <= K_j y^(9/4+j) exp(-pi y).

Indeed d/dx=2y d/dy for x>0. Applied j times to y^p exp(-pi k^2 y), the result is a finite sum of constants times k^(2l)y^(p+l)exp(-pi k^2 y), 0<=l<=j. The original prefactors have k powers at most four and p<=9/4. For y>=1 factor out y^(9/4+j)exp(-pi y); the remaining series is bounded by a fixed convergent sum of k^(4+2j)exp(-pi(k^2-1)). This also justifies local termwise differentiation. Evenness extends the bound to the negative side and analyticity covers zero. The superexponential tails justify integration by parts and differentiation under the Fourier integral for all complex z on compacts.

For the odd real function Psi=Phi', we have exactly

    F[Psi](z)=-iz A_0(z), F[Psi]'(0)=-i A_0(0)!=0.

In particular F[Psi](gamma)=0 at every sampled ordinate, including multiple zeros. No individual zero input is needed to form the witness. Only its compact truncations will be placed in the local form space.

## 3. Tail estimates and the weighted sampled norm

Put X=exp(2a), h=1/X, and take an even smooth cutoff chi_a with values in [0,1], identically one on |x|<=a-h, zero for |x|>=a-h/2, and |chi_a'|<=K/h. Such a cutoff follows by translating and scaling a fixed smooth transition on each half-line, with constant value near zero. Define w_a=chi_a Psi in C_c^infty(-a,a) (odd), and r_a=(1-chi_a)Psi.

At the inner edge of the tail, y_0=X exp(-2/X)>=X-2 and y_0 is comparable to X. For any fixed p>=0, substitution y=y_0+s and exponential integrability give integral_(y_0)^infty y^p exp(-pi y)dy=O_p(y_0^p exp(-pi y_0)) for y_0>=1; the analogous bound for the negative powers needed after substitution also holds by monotonicity. Using dx=dy/(2y) on the positive side and both symmetric tails, we obtain

    ||r_a||_1 = O(X^(9/4) exp(-pi X)),
    ||(1-chi_a)Phi''||_1 = O(X^(13/4) exp(-pi X)).

The derivative of r_a has the extra term -chi_a' Phi'. On the two strips, total length O(1/X), |chi_a'|=O(X), and the envelope for Phi' is O(X^(13/4)exp(-pi X)). Thus

    ||r_a'||_1=O(X^(13/4) exp(-pi X)).

The error in the derivative at zero of the witness Fourier transform is bounded by integral |x r_a(x)|dx. It is O((log X) X^(9/4)exp(-pi X)): under y substitution, |x|=(log y)/2 and log(y_0+s)<=log y_0+s/y_0. Therefore F[w_a]'(0)=-i A_0(0)+o(1), with modulus bounded below by A_0(0)/2 eventually. In particular the witness is nonzero.

For real gamma, F[w_a](gamma)=-F[r_a](gamma); absolute integration and integration by parts imply

    |F[w_a](gamma)| <= min(||r_a||_1, ||r_a'||_1/|gamma|).

The classical Riemann–von Mangoldt estimate gives sum_(|gamma|<=X)m_gamma=O(X log X); summing over dyadic shells gives sum_(|gamma|>X)m_gamma/gamma^2=O(log X/X). These estimates count multiplicities and include both signs. Hence splitting the exact squared form norm at X yields

    ||w_a||_q^2 <= O(X log X)||r_a||_1^2
                    +O(log X/X)||r_a'||_1^2
                 = O(X^(11/2) log X exp(-2 pi X)).       (N01.1)

The powers are 1+2(9/4)=11/2 and -1+2(13/4)=11/2. No numerical summation over zeta zeros has been performed.

By the Riesz identity and Cauchy–Schwarz, the positive local norm of w_a is nonzero, and for a fixed c>0 and all sufficiently large a,

    N_a^2 >= |F[w_a]'(0)|^2/||w_a||_q^2
          >= c exp(2 pi X)/(X^(11/2) log X).             (N01.2)

Thus the derivative evaluation norm grows at least superexponentially in a. This is not an asymptotic equivalent or a claim about the relative magnitude of N_a and M_a alone.

## 4. Sufficient condition for the actual fixed-phase regime

By the local coercivity q_a(f,f)>=lambda_a||f||_2^2, evaluation at zero obeys |F[f](0)|<=sqrt(2a/lambda_a)||f||_q. Taking the supremum gives M_a<=sqrt(2a/lambda_a). Combining with (N01.2), and using 2a=log X, proves

    L_a=N_a^2/M_a >= c sqrt(lambda_a) exp(2 pi X)/
                            [X^(11/2)(log X)^(3/2)].    (N01.3)

In particular a sufficient condition is

    lambda_a exp(4 pi X)/[X^11 (log X)^3] -> infinity. (N01.4)

For any fixed epsilon>0, the eventual lower bound lambda_a>=exp(-(4 pi-epsilon)X) suffices, because the resulting numerator after taking square roots grows as exp(epsilon X/2). A positive multiplicative constant or fixed polynomial/log loss in that exponential bound does not change the conclusion. At the exact exponential threshold 4 pi the polynomial and log factors matter; merely lambda_a>=exp(-4 pi X) does not prove divergence via this argument.

A weaker sufficient input uses only the even sector. Reflection is an isometry for q_a by the signed sample symmetry, and fixes the integral functional. Consequently M_a is the supremum of |F[f](0)|/||f||_q over even test functions, by orthogonal decomposition into even and odd parts. If lambda_a^ev is the positive infimum of the form Rayleigh quotient on even compact tests, the same upper bound for M_a holds with lambda_a^ev in place of lambda_a. Thus (N01.4) need hold only in the even sector; no odd-sector lower estimate is required. More directly an upper bound

    M_a=o(exp(2 pi X)/(X^(11/2) log X))

suffices, without controlling the full bottom eigenvalue. These are sufficient conditions, not necessary conditions. The lower bound on M_a from L02 cannot be substituted into a denominator to deduce a lower bound for L_a.

Under RH AND any of these extra sufficient conditions, L_a->infinity, so the inherited R03 classification gives fixed tau=gamma negative detuning sigma_a=M_a(gamma-tau_0)->-infinity. More precisely gamma-tau_0 ~ -gamma(1+gamma^2)d_a^2, where d_a=||C_a e_a||. The escaping eigenvalue is the lower one and the retained eigenvalue the upper one; their gap is asymptotic to gamma(1+gamma^2)d_a^2. This conclusion is conditional on the new quantitative input as well as the earlier candidate resonance deductions. No assertion of that lower coercivity bound under RH alone has been established.

## 5. Status and next step

N01 completes the witness and precise sufficient threshold, including the weaker even-sector or direct evaluation formulation. No numerical, formal or independent verification of this new deduction. No priority claim, explicit optimized constants, or unconditional fixed-phase result.

K02-W04 lookup returned 404 again; no acknowledgment or worker evidence. Primary source access above is supported by actual current web results. Historical descriptions of lead inspections or numerical reruns without available supporting results remain unverified; no retroactive verification is claimed. N02 must audit the exact hypotheses and window/normalization scaling in arXiv:2611.13129v1 and Mori's Paper IV, without promoting conjectural estimates or abstracts to proved coercivity. If no applicable bound is established, retain (N01.3) as an explicitly conditional implication and proceed to the direct relative approach in N03. No external submission.

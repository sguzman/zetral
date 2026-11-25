# FES03 — Arithmetic symbol and exceptional high carriers

2026-11-25. Internal candidate deduction without RH. Imports the exact arithmetic form and digamma asymptotics from GSG03, plus FES02's selected packet theorem. No independent human/formal/numerical verification, no priority claim. Current web search returned Guth–Maynard arXiv:2405.20552 abstract, https://arxiv.org/abs/2405.20552, and search snippets from mean/large-value Dirichlet polynomial literature. No advanced large-value theorem is imported; the elementary high-moment estimate below is proved directly. No PDF proof analyzed.

## 1. Exact cutoff symbol

Let A>=1 be a half-window. Choose a real even smooth cutoff chi_A, equal to one on [-2A,2A], between zero and one, zero outside [-2A-1,2A+1], with first two derivatives bounded independently of A (translate a fixed smooth transition at the two ends). Put X=exp(2A+1). Define
    P_A(t)=2 Re sum_(n<=X) Lambda(n)n^(-1/2) chi_A(log n) exp(it log n),
    H_A(t)=integral_R 2cosh(s/2) chi_A(s) exp(its) ds,
    S_A(t)=alpha(t)-P_A(t)+H_A(t).
All are real on the real line; H_A is rapidly decreasing for fixed A. For compact smooth f in (-A,A), its autocorrelation is supported on [-2A,2A]. The arithmetic form in GSG03 therefore equals exactly
    q_A(f)=(2pi)^(-1) integral_R S_A(t)|F[f](t)|^2 dt.       (1)
Indeed cutoff insertion changes neither the prime correlations nor the double-integral pole term; Fourier inversion of the even cutoff pole kernel gives its contribution. The apparent additional primes with log n>2A have zero autocorrelation. This formula extends to the closed form domain by log-norm continuity. It is a scalar symbol representation on the support-constrained test space, not a claim that A_A acts as multiplication by S_A on an unrestricted Fourier space. In particular pointwise negativity of S_A alone does not imply a negative eigenvalue.

Chebyshev's bound gives |P_A(t)|<=C exp A. The cutoff pole kernel and its second derivative have L1 norms <=C exp A, by the fixed-width transition and integral of cosh(s/2), so
    |H_A(t)|<=C exp A/(1+t^2),
    S_A(t)>=-C exp A                                           (2)
uniformly, using alpha's lower bound. At large |t|, alpha(t)=log|t|-log(2pi)+O(t^-2).

## 2. A deeply negative localized packet forces a large prime sum

Let v be unit, supported in (-A,A), with q_A(v)<=-D for D>0. Suppose its carrier omega and relative moment satisfy
    (2pi)^(-1) integral (1+h|t-omega|)^p |F[v](t)|^2 dt<=M
for fixed h>0,p>=1,M. For radius L the Fourier mass outside |t-omega|<=L is at most M(1+hL)^(-p). If C exp A M(1+hL)^(-p)<D/2, there must exist t within |t-omega|<=L with S_A(t)<=-D/2. Otherwise (1),(2) give q_A(v)>-D (using the mass bound and the pointwise lower bound inside). Taking L=exp(kappa A), p*kappa>1 suffices for all large A along FES02's escaping packet sequence, whose D grows exponentially. FES02 supplies fixed h,p,M on that sequence.

If |omega| is doubly exponential in A, the selected t has |t|/|omega|->1. Then H_A(t)=o(1), and S_A(t)<=-D/2 implies
    P_A(t)>=log|t|+D/2-C.                                  (3)
Thus an escaping packet requires a prime polynomial resonance at some nearby frequency, with threshold at least a fixed fraction of log|t|. This is stronger than applying a mean bound to an arbitrary envelope, because (1) reduces all envelopes to a single scalar polynomial. No claim that a single point satisfying (3) suffices for escape.

## 3. Elementary high-moment bound

Write P_A=2 Re (Q_A+R_A), where Q_A contains the primes alone, Q_A(t)=sum_(p<=X) a_p exp(it log p), a_p=(log p)/sqrt(p) chi_A(log p); R_A contains proper prime powers. Chebyshev partial summation gives
    V=sum_p |a_p|^2<=C (log X)^2,
    sup_t |R_A(t)|<=C log X.
The latter follows from the squares' sum log p/p=O(log X) and the convergent contribution of exponents >=3. For integer m>=1 write Q_A^m=sum_(n<=Y) b_n n^(it), Y=floor(X^m). Unique factorization implies
    sum_n |b_n|^2 <= m! V^m.
Indeed if a prime multiset has multiplicities r_p with sum m, its coefficient is (m!/prod r_p!) prod a_p^r_p, and squaring the multinomial coefficient costs at most m! times the multinomial expansion of V^m.

For any interval of length T, integrating the squared polynomial and using |log(n/k)|>=|n-k|/Y, followed by 2|b_n b_k|<=|b_n|^2+|b_k|^2, bounds the off-diagonal integrals by 4Y(1+log Y) sum|b_n|^2. Hence
    integral_T^(2T) |Q_A(t)|^(2m)dt
       <=[T+4Y(1+log Y)] m! V^m.                           (4)
This proof uses no deep large-value estimate and works on any translated interval of length T. If m=floor(log T/(2 log X))>=1 then Y<=sqrt(T), and for all sufficiently large T the bracket is <=2T. For H>=4 sup|R_A|, the event P_A(t)>=H implies |Q_A(t)|>=H/4. Markov and m!<=m^m yield
    meas{t in [T,2T]: P_A(t)>=H}/T
       <= 2 (16 m V/H^2)^m.                               (5)
The same statement holds on negative dyadic intervals by evenness of P_A.

For fixed delta>0 and loglog T>=delta A, choose H=c log T with fixed c>0. Then H>=4 sup|R_A| for sufficiently large A, and (5) is at most
    2 [C_c A/log T]^floor(log T/(2(2A+1))).
In particular it is <=2 T^(-delta/20) for all sufficiently large A (a conservative constant: m>=log T/(5A) eventually and log(log T/(C_c A))>=delta A/2). The sharper raw expression (5) should be used for finite parameters. This is a quantitative rarity statement in Lebesgue measure, not absence of points or an estimate on the particular carrier selected by a variational problem.

## 4. Why this does not exclude escape

Combining (3) and (5), any anomalous escaping packet of FES02 would need a resonance in an exceptionally small relative-measure subset of the relevant dyadic frequency interval. This is unconditional as an implication. Nevertheless those intervals have doubly exponential length; the absolute bound T^(1-delta/20) is generally huge and does not exclude isolated resonances. Even adding the crude derivative estimate |P_A'|<=C A exp A (by the same Chebyshev bound) supplies only a neighborhood of radius comparable to H/(A exp A) for a large value at a point. The moment estimate does not contradict that lower measure. It also cannot simply be interpreted as a count of possible packet carriers, because (3) allows a neighborhood of each carrier and no independence between the carrier and P_A. An exclusion would require a uniform pointwise bound with a deficit, or a sufficiently strong bound on averaged P_A against admissible packet measures. No such bound follows from (5), from the classical local zero count, or from generic almost-everywhere cancellation.

FES03 partially resolves the intended arithmetic exclusion: exact cutoff symbol, rigorous prime-resonance necessity, and high-carrier exceptional-set estimate; uniform exclusion remains open. Do not claim that the rare event has probability zero for a maximizing sequence. FES04 consolidate and pivot rather than repeat moment estimates: a distinct avenue is low-rank approximation of the real-frequency cutoff symbol or explicit sign certificates on support-constrained Fourier spaces. No RH proof, new observed zeros, priority claim, or independent verification. README unchanged.

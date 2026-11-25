# L03 — Ordered arbitrary-phase large-window spectral limit

25 November 2026. Conditional on RH, Suzuki's sampling and distinguished-phase inverse compression, and the internally derived L01–L02 identities. Candidate mathematical result; no independent human review, formal verification, or established originality.

## 1. Signed lists and comparison estimate

Use the global weighted sample Hilbert space H, diagonal compact self-adjoint C with distinct signed nonzero eigenvalues 1/gamma (one eigenvector per distinct ordinate), and L02's B_a=Pi_a C Pi_a, h_a, Q_a, K_a=(I-Q_a)B_a(I-Q_a), d_a=||B_a h_a||. Then K_a->C in Hilbert–Schmidt norm, d_a->0, eta_a->1. For theta!=0 modulo 2pi define p_a=cot(theta/2), b_a=eta_a p_a. The zero-extended local inverse T_a=B_a+b_a Q_a obeys

    ||T_a-(K_a+b_a Q_a)|| <= 2 d_a.

K_a annihilates h_a; on h_a^perp its nonzero signed eigenvalues are precisely those of K_a on H. For a compact self-adjoint operator M on infinite-dimensional H, let lambda_n^+(M) list positive eigenvalues decreasing with multiplicity, padded by zero if finite; lambda_n^-(M)=lambda_n^+(-M) lists magnitudes of negative eigenvalues. The signed min–max principle gives |lambda_n^sign(M)-lambda_n^sign(N)|<=||M-N|| for both signs. There are infinitely many positive and negative eigenvalues of C, so each fixed index is strictly positive. Set mu_n=1/gamma_n (gamma_n the increasing distinct positive ordinates); both signed lists for C equal mu_n.

Define I_n(mu;b) to be the nth decreasing entry of the list mu with the one scalar b inserted if b>0, otherwise unchanged. Insertion is 1-Lipschitz in each list in sup norm: for n=1 it is max(mu_1,b_+); for n>=2 it is max(mu_n,min(mu_(n-1),b_+)), with b_+=max(b,0). This follows by counting the entries above a threshold, or directly by considering the scalar's insertion rank. The formula includes equal entries, with multiplicity. Apply this to the direct sum K_a|h_a^perp plus scalar b_a, and compare K_a with C by min–max. Thus for either sign epsilon in {+1,-1} and every n,

    |lambda_n^epsilon(T_a)-I_n(mu;epsilon*b_a)|
      <= 2 d_a+||K_a-C|| =: E_a ->0.                 (L03.1)

The estimate is uniform in theta and inverse-list index n (absolute inverse error, not uniform differentiation error); the scalar is the actual b_a, not its proposed limit. If p_a is bounded we may replace b_a by p_a with extra error |p_a| |eta_a-1|. If p_a->p finite, replace by p with extra error |b_a-p|. Inverse eigenvalues bounded away from zero may be reciprocated: when comparison value u>0 and total error E<u, |1/lambda-1/u|<=E/[u(u-E)]. Nonzero spectrum of the zero extension is exactly that of the local inverse. Infinite positive and negative lists at each a follow from those of B_a (Suzuki v1 §4) and rank-one interlacing, or eventual positivity for each fixed index suffices for limits.

## 2. Fixed phase and finite moving limit

For p_a->p finite, (L03.1) yields lambda_n^epsilon(T_a)->I_n(mu;epsilon*p). These limiting inverse values are all positive for fixed n. Hence the strictly positive differentiation eigenvalues, in increasing order, converge to the increasing multiset of distinct positive zeta ordinates gamma_n, with the extra value 1/p inserted if p>0; the magnitudes of the negative eigenvalues have the same base list and extra value -1/p if p<0. For p=0 neither list contains an extra finite value.

Equivalently for fixed 0<theta<2pi, theta!=pi, the limiting signed spectrum on bounded real intervals with endpoints outside the limiting set is

    Gamma multiset-union {tan(theta/2)}.            (L03.2)

Every gamma in Gamma has multiplicity one in the base list even if xi has a multiple zero. At a collision tan(theta/2)=gamma the limiting multiplicity is two: the adjacent ordered local eigenvalues converge to the same limit, although the local eigenvalues are simple. This is not a claim of finite-window degeneracy or of multiplicity of the Riemann zero. For theta=pi the extra inverse scalar is zero and the additional finite differentiation value is absent. When p>0 the positive rank shifts by one beyond the insertion position; if 1/p lies strictly between gamma_k and gamma_(k+1) (k=0 allowed), the first k positive limits are gamma_1..gamma_k, the next is 1/p, and subsequent limits are gamma_(n-1). At equality the two adjacent values agree. If p<0 the positive limit list is unchanged and the analogous shift occurs on the negative side. Reflection agrees with the sign convention.

The fixed-index convergence also gives local counts, not only subsequences of approximate roots. Indeed for any finite upper bound on the magnitude choose N with gamma_(N-1) larger than that bound; the Nth signed differentiation limit exceeds it (for finite p), so all later values are outside. On each finite list convergence decides counts at endpoints not equal to limiting values. At theta=pi or p_a->0 there is no additional finite value; this statement does not specify where in the unbounded spectrum a disappearing extra mode goes.

## 3. Phase zero and divergent moving phase

At exactly theta=0, L01 gives the isolated simple zero and the bounded reduced inverse with zero extension K_a. Since K_a->C in norm, signed min–max and reciprocation give the unshifted positive and negative lists of zeta ordinates, along with the exact zero. Thus the limiting signed spectrum, counting multiplicity, is Gamma multiset-union {0} at this phase.

If p_a->+infinity or -infinity with invertible phases, then b_a has the same sign and |b_a|->infinity. For the corresponding signed list epsilon=sign(p_a), eventually |b_a|>mu_1; (L03.1) gives lambda_1^epsilon(T_a)=|b_a|+O(E_a), and lambda_n^epsilon(T_a)->mu_(n-1) for n>=2. The opposite list converges to mu_n. The near-zero differentiation eigenvalue therefore has sign epsilon and signed value

    t_*(a)=1/b_a+O(E_a/b_a^2),  t_*(a) p_a -> 1.

All other fixed signed indices have the indicated shifted/unshifted limits. The finite signed spectrum tends to Gamma multiset-union {0} in either case, though strictly positive rank differs depending on which side approaches zero. No assumption that |p_a| |eta_a-1| tends to zero is needed; using the actual scalar avoids that invalid estimate. No strong convergence of T_a asserted for unbounded p_a. Sequences alternating exact phase zero and invertible phases near zero require tracking the zero/near-zero value separately; signed local multiset convergence follows from the respective cases, not a common strictly positive rank formula.

## 4. Eigenvector distinction and resonance

For fixed nonzero p not in the spectrum of C, choose a positive distance from p to {0} union spec(C). Norm convergence K_a->C separates the block K_a|h_a^perp from p. L02 block error tends to zero; the spectral subspace of T_a near p has dimension one by signed counts above. For a unit eigenvector x_a with eigenvalue lambda_a->p, project the equation (K_a+b_a Q_a)x_a-lambda_a x_a=-(T_a-K_a-b_a Q_a)x_a onto h_a^perp. The inverse of K_a|h_a^perp-lambda_a has uniformly bounded norm by the spectral gap. Thus ||(I-Q_a)x_a||->0. Up to a unit complex scalar x_a approaches h_a and escapes weakly. There is no additional nonzero eigenvector of C.

At resonance p=1/gamma, the limiting local cluster has dimension two, by (L03.1), while C has only a one-dimensional eigenspace there. This argument does not assign separate convergent eigenvectors or prove a splitting rate for the pair. In particular the limiting multiplicity-two multiset is not the operator spectrum of the strong limit counted with its eigenspace multiplicities.

## 5. Source comparison and scope

Reopened Suzuki arXiv:2610.32704v1 primary HTML https://arxiv.org/html/2610.32704v1, Theorem 1.1, Theorem 3.3 (3.5), §4 and §5.1 (distinguished phase convergence and inverse compression). Reopened arXiv:2606.09096v4 https://arxiv.org/html/2606.09096v4 §7.8 (7.5)–(7.6) and §7.9 (7.8). The former discusses a global de Branges boundary expression with phase-dependent coefficients involving xi and xi prime, not a proof of arbitrary-phase local spectral convergence. The latter explicitly raises possible divergence of the local reproducing kernels through null vectors of the global form and leaves its boundary-form consequences open. L02 provides a concrete witness at zero and L01–L03 give an inverse-space consequence. The global de Branges phase expression must not be identified with a limit of the unrenormalized local Fourier characteristic for arbitrary phases. October v1 establishes convergence at phase pi; the present argument extends the spectral comparison using its result, not a proof without RH. No comprehensive prior-art search or originality claim.

All arguments are exact analytic comparisons; no numerical or formal verification performed for L03. Codex's S04-W02 audit concerns Campaign V, not L01–L03. Its findings are accepted only within that scope in the separate lead review. The large-window theorem is a candidate derivation requiring independent scrutiny. No claim of convergence rate for d_a or of a uniform-in-index reciprocal bound. No external submission.

Next L04: consolidate L01–L03 and evaluate a justified next direction, particularly quantitative escape or normalized kernel/entire-characteristic limits, in light of Suzuki §7.9. Preserve the local unconditional theorem separately.

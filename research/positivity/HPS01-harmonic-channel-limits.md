# HPS01 — Joint harmonic phase families and simultaneous channel Rayleigh limits

2026-11-25. AI-assisted candidate deduction without RH. Uses TPH01–03, PBC01–02, and the arithmetic Weil form. No new literature retrieval, numerical experiment, actual off-line zero, actual anomalous mode, independent review or priority claim. Source-provenance correction applies. All spectral statements concern the ordinary L2 form.

## 1. Joint phase limits and moment positivity

Fix a sequence a_l->infinity, |omega_l|->infinity with exp(-a_l)log(2+|omega_l|)->tau<infinity. Put r_n=2a_l-log n, w_n=exp(-a_l)Lambda(n)/sqrt(n), and define the finite positive measure on [0,infinity) times the unit circle
    M_l=sum_(n<=exp(2a_l)) w_n delta_(r_n, exp(i omega_l log n)).
Its r-marginal is the positive untwisted prime measure of PBC01 and TPH01, with uniformly bounded mass and exponentially small r-tails. A diagonal compact-test extraction on the product gives a positive finite limit M, with marginal exp(-r/2)dr. The positivity and marginal follow from convergence of continuous tests and tightness. For every integer k its phase moments give the limit of the twisted measures at carrier k omega_l:
    int F(r) z^k dM(r,z) = int F(r) phi_k(r) exp(-r/2)dr
for each compact continuous F. Existence of phi_k with |phi_k|<=1 follows from domination by the marginal; use Radon-Nikodym as in TPH01. In particular phi_0=1 and phi_-k=conj(phi_k) a.e. Since there are countably many k these identities can hold on a common full-measure set. No claim is made that arbitrary admissible moment families occur for primes.

For any finite complex vector c=(c_0,...,c_m), the function of r given by
    sum_(i,j=0)^m c_i conj(c_j) phi_(i-j)(r)
is nonnegative a.e.: its integral against any nonnegative compact continuous F is the limit of int F(r)|sum c_i z^i|^2 dM_l>=0. Apply this first to a countable dense set of coefficient vectors with rational real and imaginary parts and all integer m; continuity of each finite quadratic form yields all complex vectors on one common full-measure set. Thus the pointwise Toeplitz moment matrices are positive semidefinite. This is a necessary compatibility restriction stronger than separate bounds |phi_k|<=1. In particular it does not presume independence of primes or phase harmonics.

For each fixed k!=0,
    exp(-a_l)log(2+|k omega_l|)->tau,
since the log difference is bounded by a constant depending on k. All nonzero harmonic channels are attainable in TPH01's sense with the same cost. The k=0 channel is not: its normalized pole cancels the prime limit, so it must be omitted from the positive-gain model.

## 2. Same-channel and cross-channel limits

Let H_*=L2(0,infinity) direct sum itself and U_a be the ordinary endpoint isometry. For fixed smooth compact positive-side profiles G, define
    f_(k,l)(G)=M_(k omega_l) U_a_l* G
for sufficiently large windows. Consider a fixed finite set of distinct nonzero integers k and a fixed finite family of profiles in each channel. We establish convergence of both their ordinary Gram and normalized form matrices.

Within a single k, the Gram is exactly the endpoint Gram once the supports fit. Between k!=j, the inner product is a sum of integrals of fixed L1 products on the left and right endpoints against exp(±i(k-j)omega_l t), with constant unit phases. By Riemann-Lebesgue it tends to zero. More generally U_a_l M_((j-k)omega_l) U_a_l* G converges weakly to zero for every fixed compact profile G: test against an arbitrary fixed H_* vector and use the same L1 product estimate. This weak-null fact also holds if the constant phases themselves fail to converge.

For the prime term, TPH01 gives
    B_(k,l)=exp(-a_l) U_a_l M_(k omega_l)* P_a_l M_(k omega_l) U_a_l*
            -> D_(phi_k)
strongly, with uniformly bounded norms. Within the same channel this gives the desired form limit. For k!=j, write the normalized cross prime matrix element as
    < B_(k,l) G, U_a_l M_((j-k)omega_l) U_a_l* H >.
The first vector converges strongly and the second weakly to zero and is bounded, so the product tends to zero. This uses strong convergence for fixed demodulated profiles, NOT unrestricted norm convergence.

For the pole term, the normalized unmodulated pole is norm-close to the fixed finite-rank endpoint block of PBC02. For each nonzero k the physical modulated profile has weakly null endpoint coordinates, so the scaled pole applied to that vector tends to zero in norm. All normalized pole matrix elements in the finite family therefore vanish, including cross channels.

For the archimedean term one needs more than the scalar expectation of TPH01. Let H_alpha be the full-line multiplier alpha(t)=log(2+|t|)+O(1). Fixed compact smooth endpoint envelopes have uniformly bounded log-squared Fourier norm after physical translation/reflection, by the triangle inequality. The elementary shift inequality
    |alpha(t-k omega_l)-log(2+|k omega_l|)|<=C+log(1+|t|)
then proves the full-line operator estimate
    ||H_alpha f_(k,l)(G)-log(2+|k omega_l|) f_(k,l)(G)||_2<=C_G
on zero extensions. Compression to the physical interval can only decrease the error norm. The smooth vectors belong to the ordinary operator domain by the form representation (full multiplier action is L2 and the bounded remainder is L2). Dividing by exp(a_l) gives an o(1) vector error, while the scalar multiplier tends to tau after scaling. Thus the archimedean cross matrix elements vanish when k!=j by Gram orthogonality, and the within-channel limit is tau times the Gram. This step explicitly handles the growing carrier cost rather than claiming it is always negligible.

Combining the three arithmetic terms, for fixed profiles G,H and nonzero integer k,j,
    lim <f_(k,l)(G), f_(j,l)(H)>_2
       = 1_(k=j)<G,H>,
    lim exp(-a_l) q_a_l(f_(k,l)(G), f_(j,l)(H))
       = 1_(k=j) [tau<G,H>-<D_(phi_k)G,H>].             (1)
All convergence is uniform on each fixed finite-dimensional coefficient space by convergence of finitely many matrix entries. No claim is made about a growing number of channels with l, or about arbitrary moving endpoint envelopes.

## 3. Reflection compatibility

Let S swap the two endpoints on H_* and R reflect the physical interval. Then R f_(k,l)(G)=f_(-k,l)(S G) exactly. The conjugate density relation gives K_(phi_-k)=conj(K_(phi_k)); because the Hankel kernel is symmetric in its arguments, K_(phi_k)*=conj(K_(phi_k)) as kernels. Hence
    D_(phi_-k)=S D_(phi_k) S.
This agrees with the exact physical reflection invariance of the arithmetic form. It is not a claim that a single nonzero carrier channel preserves parity.

HPS01 proves joint harmonic moment constraints and simultaneous finite-channel ordinary Gram/form convergence. HPS02 will use the actual direct-sum finite trial spaces and reflection symmetrization to derive indexed bounds and the saturation implication. No actual anomalous state, RH proof or computed phase family. README unchanged.

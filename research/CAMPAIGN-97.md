# Campaign XCVII — Prolate-to-Weil eigenvector bridge

Date opened: 2026-11-27. Status: ACTIVE.

## Precise question

Can the finite-prime/prolate candidate vector for the restricted Weil form
be proved close enough to its true lowest eigenvector, and can the finite
Fourier truncation be controlled strongly enough, that the Mellin transforms
(and hence the self-adjoint spectral determinants) converge locally
uniformly to the Riemann Xi function?

The concrete objects are the lower-bounded compact-resolvent operator
`A_lambda` representing the restricted Weil form `QW_lambda` on
`L²([lambda^-1,lambda],du/u)`, its lowest normalized eigenvector
`theta_x` with `x=lambda²` (the survey's notation), and the prolate-derived
candidate `k_lambda=E(h_lambda)`. Separately, CCM uses the finite-dimensional
Fourier truncation `QW_lambda^N` on `E_N` and its lowest vector
`xi_{lambda,N}` to construct a rank-one perturbed operator and determinant.
The parameter conventions and normalization must be pinned from the source
before combining estimates; `lambda`, `x=lambda²`, and `N` are not
interchangeable.

## Recent primary literature and existing evidence

1. A. Connes, *The Riemann Hypothesis: Past, Present and a Letter Through
   Time*, [arXiv:2602.04022](https://arxiv.org/abs/2602.04022), v1
   (2026-02-03), §§6.4–6.6 and §7.4. Fact 6.4 reports locally uniform
   convergence of the transform of `k_lambda` to Xi in the stated strip,
   with an error controlled by the prolate-to-Hermite approximation. The
   paper explicitly leaves the effective comparison of the actual lowest
   eigenvector `theta_lambda` with `k_lambda` open; it also lists simplicity
   and evenness of the lowest `QW_lambda` eigenvector as unresolved.
2. A. Connes, C. Consani, H. Moscovici, *Zeta Spectral Triples*,
   [arXiv:2511.22755](https://arxiv.org/abs/2511.22755), v1 (2025-11-27),
   Theorem 1.1. It constructs a self-adjoint rank-one perturbation and its
   determinant from a finite-form ground vector, under simplicity/evenness
   hypotheses. §§6–7 give numerical convergence motivation and state that
   rigorous convergence remains to be shown.
3. Zetral has substantial related but distinct work on Suzuki compression,
   prolate limits, Weil positivity, and theta cardinal estimates. In
   particular, the current finite positivity frontier does not itself prove
   the required full-space ground-vector approximation for this `QW_lambda`
   family. The conditional R04/R05 theta-cardinal bounds in
   `research/quantitative-cutoff.md` and `research/theta-cardinal-bound.md`
   concern Suzuki's phase-pi differentiation-extension spectrum, not the
   ordinary `L²` ground eigenvector of `A_lambda`; their rates cannot be
   transferred by notation alone. Check all exact objects before reusing any
   estimate.
4. Andrews–Connes–La Gatta, *The uncertainty operator, the Weil ground
   state and the zeros of zeta*, [arXiv:2611.13129](https://arxiv.org/abs/2611.13129),
   v1 (2026-11-09), is now the closest direct source. Its Hypothesis 3.4
   assumes lower as well as upper comparison of low Weil eigenvalues with
   the Fuchs/prolate ladder. The lower bound for the lowest even and odd
   sector values makes the full bottom nonnegative for all sufficiently
   large windows; monotonicity extends positivity to smaller windows, so
   this hypothesis already contains an RH-strength assertion by Weil's
   criterion (the source explicitly says it is strictly stronger than
   window positivity). Under it, §6 proves ground-state simplicity/evenness
   and quantitative convergence to prolate and Hermite targets.
   The manuscript therefore supplies a conditional bridge, not an
   unconditional operator construction or proof of RH. Its numerical
   evidence is explicitly distinct from Hypothesis 3.4. Section 8 reduces
   its conditional positivity program to a finite Schur-complement block
   near ladder-edge and pole modes; §8.8 lists the sign of this block as
   unresolved.
5. Mori's public repositories [windowed-form bounds](https://github.com/moriryota/weil-window-upper-bounds)
   and [prolate-vector bounds](https://github.com/moriryota/prolate-weil-bounds)
   report unconditional explicit upper bounds for the bottom Rayleigh
   value, including a Lean formalization of one general test-function
   estimate. These upper bounds supply neither a lower bound nor a spectral
   gap, so do not imply ground-eigenvector convergence. The repository
   explicitly says its Rayleigh-principle transfer to the spectral
   statement is not formalized; stronger sequel estimates are paper and
   ball-arithmetic claims, not that Lean theorem.

These are author-reported theorem statements and open steps; this campaign
has not independently audited those source proofs. No novelty claim is made.

## First derived criterion: residual, gap, and transform norm

Here is a general quantitative bridge to be specialized or falsified in the
actual Weil-form setting. Let `A` be self-adjoint with compact resolvent,
simple lowest eigenvalue `a_0`, next eigenvalue `a_1>a_0`, and normalized
ground vector `e_0`. Let `v` be a normalized vector in `Dom(A)` with Rayleigh
quotient `m=<Av,v><a_1`, and residual `r=||(A-m)v||`. By the spectral theorem,

    r² = sum_j |<e_j,v>|² (a_j-m)²
       >= (a_1-m)² (1-|<e_0,v>|²).

Thus

    dist(v, C e_0) = sqrt(1-|<e_0,v>|²) <= r/(a_1-m).

This inequality is useful only if a lower bound for `a_1` and an upper bound
for `m` are available; the known bottom energy of a trial vector alone does
not supply a gap or eigenvector convergence. If `A_lambda` commutes with
reflection, simplicity/evenness additionally require a sector comparison
and simplicity inside the even sector.

There is a second loss in passing from Hilbert-vector convergence to Mellin
transform convergence. On `[lambda^-1,lambda]` with measure `du/u`, set

    T_z f = integral_(lambda^-1)^lambda f(u) u^z du/u.

For `sigma=Re(z)`, Cauchy–Schwarz gives the exact functional norm

    ||T_z||² = integral_(lambda^-1)^lambda u^(2 sigma) du/u
             = sinh(2 sigma log(lambda))/sigma,

with limiting value `2 log(lambda)` at `sigma=0`. On a closed vertical
strip `|Re(z)|<=b`, `0<b<1/2`,
`sup ||T_z|| = [sinh(2b log(lambda))/b]^(1/2)`, which grows on the order
of `lambda^b`. Therefore an `L²(du/u)` eigenvector error `eta_lambda`
implies transform error at most `eta_lambda [sinh(2b log(lambda))/b]^(1/2)`;
for local uniform convergence on this strip, this product must tend to zero.
For the full-vector leg, combining with the residual criterion gives the
sufficient target

    r_lambda/(a_1(lambda)-m_lambda) = o(lambda^(-b))

for every fixed strip-width `b` sought. This is for unit Hilbert
normalization. The rank-one determinant in CCM uses a boundary evaluation
normalization (`delta_N(xi)=1`), so a separate uniform bound away from zero
and control of that normalization factor are still needed before this
criterion yields determinant convergence. The finite truncation leg has its
own residual: the extended `xi_{lambda,N}` must be placed in the full form's
operator domain (or a justified form-domain substitute), and its residual,
ground gap, and boundary normalization must satisfy the analogous estimate.
Neither leg follows merely from the Rayleigh eigenvalue reported for a trial
space.

## PWPB-02 — Candidate convergence in the ambient Hilbert norm

This strengthens the candidate-side approximation only; it does not show
that the candidate is close to the actual ground eigenvector. Use the
survey's normalization in §6.5: `h_lambda` is supported in `[-lambda,lambda]`
and, by its prolate-to-Hermite estimate and the zero-integral coefficient
adjustment in the proof of Lemma 7.2, satisfies

    delta_lambda := sup_(|t|<=lambda) |h_lambda(t)-h(t)| <= C lambda^(-2),
    h(t) = P_4(t) exp(-pi t^2),

where `P_4` is a fixed polynomial of degree at most four. Define
`k_lambda(u)=E(h_lambda)(u)` on `[lambda^-1,lambda]` and extend it by zero
outside that interval. Let `k(u)=E(h)(u)`, the Riemann kernel whose Mellin
transform is Xi.

For `u` in `[lambda^-1,lambda]`, split the defining sum at `nu=lambda`:

    |k_lambda(u)-k(u)|
      <= delta_lambda lambda u^(-1/2)
         + sqrt(u) sum_(n>lambda/u) |h(nu)|.

The second term is needed because `h` is not compactly supported. Since
`|h(t)|<=C(1+t^4)exp(-pi t^2)`, the envelope is decreasing for `t>=2`.
With `m=floor(lambda/u)+1`, monotone sum-integral comparison gives

    sqrt(u) sum_(n>=m)|h(nu)|
       <= C exp(-pi lambda^2)
            (lambda^(9/2)+lambda^3 u^(-1/2))
       <= C lambda^(9/2) exp(-pi lambda^2),

uniformly for `lambda>=2` and `u` in the interval. Integrating the square
against `du/u`, and using the source bound on `delta_lambda`, yields

    integral_(lambda^-1)^lambda |k_lambda-k|^2 du/u
       <= C delta_lambda^2 lambda^2 (lambda-lambda^-1)
          + C lambda^9 exp(-2 pi lambda^2) log(lambda)
       <= C/lambda.

Outside this interval `k_lambda=0`. The Poisson identity `k(u)=k(u^-1)`
and the Gaussian decay of `E(h)(u)` for `u>=lambda` give

    integral_(0)^(lambda^-1) |k|^2 du/u
       + integral_lambda^infinity |k|^2 du/u
       <= C lambda^8 exp(-2 pi lambda^2).

Therefore the zero-extended candidate satisfies
`||k_lambda-k||_(L²(du/u))=O(lambda^(-1/2))`. Since `k` is nonzero, its
normalized version also converges in this Hilbert norm to `k/||k||`.
Combining this with the exact Mellin-functional norm from PWPB-01 gives,
uniformly for `|Re(s)|<=b<1/2`,

    |M(k_lambda-k)(s)| <= C_b lambda^(b-1/2) -> 0,

where `M f(s)=integral f(u)u^s du/u`. Thus the corrected L² estimate also
implies locally uniform convergence of the candidate transforms on every
closed substrip strictly inside `|Re(s)|<1/2` (equivalently, the corresponding
horizontal strips for the Fourier variable `z` in Connes's convention).

### Source audit and scope

Connes's 2026 survey, §6.5, states a transform-convergence bound derived
from the same uniform prolate-to-Hermite approximation. In the displayed
pointwise estimate at lines 994–1013 of the arXiv HTML, the count
`n<=lambda/u` controls only the part with `nu<=lambda`; the omitted terms
`nu>lambda` are not covered by `delta_lambda` as defined there. The explicit
Gaussian-tail term above repairs that step for the fixed Hermite profile.
This is a localized repair, not a refutation of Fact 6.4 or its conclusion:
the missing tail is Gaussian-small in `lambda` and does not
change the stated polynomial error scale on closed substrips. The
prolate-to-Hermite estimate itself is imported and has not been independently
proved here.

The result gives a nonzero strong limit for the candidate vectors in one
fixed ambient Hilbert space. This is a manual derivation under an imported
uniform prolate-to-Hermite estimate, not a novelty claim. A literature
refresh found the stronger candidate and conditional ground-state estimates
in arXiv:2611.13129 §§6–7; those claims subsume the main candidate-convergence
purpose here under their explicit hypotheses. PWPB-02 is currently a
transparent ambient-space derivation and localized missing-tail correction
to the earlier survey's displayed estimate, pending independent audit and
prior-art comparison. It does not establish
`||theta_x-k_lambda|| -> 0`, a spectral gap, simplicity/evenness of the
`QW_lambda` ground state, convergence of the finite truncations
`xi_{lambda,N}`, or determinant normalization. In particular, strong
convergence of trial vectors is not operator or eigenvector convergence.

## PWPB-03 — Audit the Fuchs-ladder hypothesis and finite Schur bottleneck

### Precise question

Can the lower half of Hypothesis 3.4 in arXiv:2611.13129, or the finite
transition-and-pole Schur-complement inequalities in its §8, be derived
from the prime-side/uncertainty-operator structure without assuming Weil
positivity? Which exact sub-block is the first irreducible obstacle?

### Existing evidence and design

The source's upper ladder bounds are test-vector estimates. Its lower ladder
bounds for the lowest eigenvalue imply positivity of the restricted Weil
form for all sufficiently large windows; monotonicity then extends it to
all windows. Thus the lower half of Hypothesis 3.4 already implies RH by
Weil's criterion (and is strictly stronger, as the source remarks). Under
that hypothesis, §6 derives a ground-state gap and Mellin transform
convergence. Mori's unconditional Rayleigh upper bounds sharpen
only the upper side and cannot provide the missing lower gap. Section 8
isolates a finite Schur block (edge modes and two pole directions), while
uniform Gram/localization bounds remain open.

First audit the exact definitions, scale conventions, and quantifiers in
(32), the §8 finite-dimensional space, and inequalities (73)–(74). Separate
which claimed positivity is RH-equivalent from any potentially weaker
coercivity statement. Then attempt a lower bound for the Schur block that
does not use unknown zero locations; test first ladder-entry boundaries,
the two pole directions, degenerating Gram matrices, and equality cases.
Construct an abstract finite countermodel if upper ladder bounds plus the
semilocal uncertainty principle alone do not imply a lower estimate.
Finally compare its conditional ground-vector rate with PWPB-01's
residual/gap threshold and the finite Fourier compression theorem, keeping
operators and normalizations separate.

### Acceptance and verification

Accept either an unconditional noncircular lower bound with all constants
and domains, or a precise dependency/countermodel showing why the published
hypotheses do not follow from the upper estimates. Verify by line-by-line
source audit and an independent derivation of the key block inequalities;
numerical eigenvalues and conditional source claims are not proofs. No RH
conclusion or novelty claim is permitted without the full argument and
prior-art review.

## PWPB-03.1 — Mellin audit of the transition/pole prime estimate

### Source claim under audit

In arXiv:2611.13129v1, §2.1 equation (7) defines `W_p` with all prime
powers `p^m`; §8.6 (HTML around lines 1138–1145) then discusses the even
pole direction and writes its first-prime contribution with main sum

    2 sum_(p<=lambda^2) log(p) (2 log(lambda)-log(p)).

and states that this equals `2 lambda^2 + O(lambda log(lambda))` by
Chebyshev estimates (the `m>=2` terms are placed in an
`O(lambda log(lambda))` remainder). This is prose in the proposed route to
Proposition 8.18, not a proved proposition establishing the
transition-and-pole block sign.

### Exact reduction and conditional obstruction

Put `X=lambda^2`, let `Theta(x)=sum_(p<=x) log(p)`, and set

    S(X)=sum_(p<=X) log(p) log(X/p).

Stieltjes partial summation gives the exact identity

    S(X)=integral_(2^-)^X log(X/t) dTheta(t)
        =integral_2^X Theta(t) dt/t.

Suppose the displayed-strength error held for this sum:

    S(X)=X+O(sqrt(X) log(X)).                 (H)

Define `A(X)=S(X)-X`. For `Re(s)>1`, Tonelli/Fubini and
`integral_1^infinity log(y)y^(-s-1)dy=1/s^2` give

    integral_2^infinity A(X) X^(-s-1) dX
       = s^(-2) sum_p log(p) p^(-s) - 2^(1-s)/(s-1).

Under (H), the integral on the left converges locally uniformly and defines
a holomorphic function for `Re(s)>1/2`. Consequently
`P(s)=sum_p log(p)p^(-s)` has a meromorphic continuation to that half-plane
with no singularities there except possibly at `s=1`.

For `Re(s)>1`, the Euler product identity is

    -zeta'(s)/zeta(s) = P(s) + H_2(s),
    H_2(s)=sum_p sum_(k>=2) log(p) p^(-ks).

The double sum `H_2` converges normally for `Re(s)>1/2`, since
`sum_p log(p)p^(-2 sigma)` converges for `sigma>1/2`. Therefore a zero
`rho` of zeta with `Re(rho)>1/2` would give a pole of `P` at `rho`,
contradicting the continuation above. By the functional equation, (H)
implies RH. This is a rigorous conditional implication, not evidence for
RH and not a proof that the source's asymptotic is false.

Thus, if both displayed `O(lambda log(lambda))` estimates are uniform
unconditional bounds, subtracting the higher-prime-power remainder from
the asserted total prime contribution forces (H), and imports an
RH-strength assertion. Standard Chebyshev/PNT asymptotics
`Theta(x)~x` yield only `S(X)~X`, not (H). The source presents this in
discussion on the route to Proposition 8.18, not as a proved lemma; whether
the error estimate is intended as a heuristic, conditional estimate, or
rigorously derived bound still needs source-context audit. Its paragraph
also describes the net pole value through a zero sum, so the full route may
expose the RH-level dependence rather than claim to remove it.

### Status, falsification, and next check

Status: manual derivation checked algebraically here; not Lean-formalized and
not independently reviewed. No novelty claim. Next inspect the exact
source's intended status of the `O` constants and whether the estimate is
used beyond this discussion. The source definition of `W_p` (equation (7))
confirms that it sums all powers; §8.6 isolates the `m=1` term and places the
higher powers in the stated remainder. Its introduction describes §8 as a
strategy, and Proposition 8.18 explicitly assumes the unresolved
transition-and-pole lower bound before deriving RH. Thus no proved theorem
in the article is shown to rely on the square-root-error estimate; the
source-error allegation is not confirmed. If the `O` estimate is intended
as unconditional proof rather than heuristic context, it is RH-strength
and needs a derivation beyond ordinary Chebyshev/PNT asymptotics. The
prior-art scan found
Johnston, *On variants of Chebyshev's conjecture* (Ramanujan Journal, 2025),
which records other RH-equivalent sign criteria for integrals of
`Theta(x)-x`; those are related but do not establish novelty or identity
with this logarithmically weighted integral. Determine whether the
RH-strength estimate is asserted as a theorem, merely an illustrative
heuristic, or canceled inside the complete Schur block. Acceptance requires
resolving that distinction from the source and comparing this weighted
Chebyshev criterion with existing literature. Bounded source-audit
milestone complete; keep PWPB-03 active for a separate audit of the uniform
low-block estimate (R2) and the Gram lower bound at the edge of the Fuchs
ladder. Do not label a source error unless the source uses (H) as an
unconditional proved estimate.

### PWPB-03.2 — independent audit of the growing arithmetic Gram route

#### Literature refresh and precise question

The 15 November 2026 rStation working draft *Uniform prolate spaces and
multiplicity in the near-zero spectrum of the Weil form*
([Paper 163 v1](https://rstation.ai/problems/riemann_hypothesis/papers/163/v1))
claims a uniform lower bound for the canonical arithmetic prolate map on a
growing concentrated space. Its page labels the draft “Independent
verification pending”; the page's attached automated reviewer report is
not independent verification. The draft explicitly says this canonical
space is not identified with the convolved conditioning families in
Andrews–Connes–La Gatta (ACG), and that its result does not prove the
transition/pole Schur sign. This is relevant new literature, but does not
by itself close ACG's R2.

Question: does the new uniform arithmetic Gram argument imply the Gram
bound required for ACG's convolved low block, or does it establish a
different result? Audit its exact common-interval inverse and its relation
to the two spaces before transferring any estimate.

#### Independent check of the common-interval inverse

For the draft Lemma 5, set J=[r,lambda], G(u)=sqrt(u)f(u), and D_nG(u)=G(nu), with zero extension above lambda. On L2(J,du/u), each D_n is a contraction, D_m D_n=D_mn, and D_n=0 for n>N=floor(lambda/r). Thus E f=sum_{n<=N} n^(-1/2)D_nG. Finite Dirichlet convolution gives the exact inverse G=sum_{n<=N} mu(n)n^(-1/2)D_n E f. Its norm is at most sum n^(-1/2)<=2sqrt(N), so ||E f||^2_{L2(J,du/u)} >= (4N)^(-1) integral_r^lambda |f(u)|^2 du.

Take r=R/lambda and let B_lambda be Fourier projection to [-lambda,lambda]. Scaling gives ||1_{[-r,r]}B_lambda||=kappa_R<1: the restricted band projection is compact, and norm one would give a nonzero function both band-limited and compactly supported. If ||(1-B_lambda)f||<=eta_R||f|| with eta_R=(1-kappa_R)/2, then ||1_{[-r,r]}f||<||f|| by a fixed factor. Evenness leaves a fixed positive fraction of mass on r<=|u|<=lambda. Since N<=lambda^2/R, the claimed lower bound ||1_[R/lambda,lambda] E f||^2 >= c_R lambda^(-2)||f||_2^2 follows. This independently checks the inverse algebra and fixed-product concentration step of Lemma 5, not the whole draft endpoint ODE, tail, or operator-residual argument.

The rStation construction instead gives a common linear repair and a
uniform lower norm for its own canonical \(\mathcal E(H_{\lambda,\tau})\)
space, with polynomial losses; its conclusion is a near-zero spectral
count. Because no map from that space to ACG's convolved families
\(e_m^\lambda*e_n^*\) is established, the transfer needed for R2 remains
open. Nor does a lower Gram bound alone prove the Schur complement's sign.
Disposition: close this bounded source-and-lemma audit as a useful
independent verification and scope distinction; do not count it as a
resolution of R2 or as a new Zetral theorem. No novelty or paper-readiness
claim.

#### Next question

Test for an explicit intertwining or bounded synthesis map from the ACG
convolved low-mode span to the canonical arithmetic prolate span, retaining
the full form norm and pole directions. Acceptance is either (i) a
quantified map with polynomially controlled norm and inverse/Gram bound
strong enough to transfer R2, or (ii) a precise obstruction explaining
why these spans cannot be identified by the proposed common repair. Then
continue to the transition/pole block; neither result alone closes PWPB-03.

### PWPB-03.3 — Mellin factorization of the convolved arithmetic model

In the arithmetic model, define

    E h(u) = sqrt(u) sum_{n>=1} h(nu),
    M_s f = integral_0^infinity f(u) u^s du/u.

For compactly supported h and Re(s)>1/2, absolute convergence and the
change of variables x=nu give

    M_s(E h) = zeta(s+1/2) M_{s+1/2} h.

For multiplicative convolution, M_s(f*g)=(M_s f)(M_s g), and
M_s(e_n^*)=conjugate(M_{-conjugate(s)} e_n) wherever the integrals
converge. Consequently, if the ACG vector e_m^lambda is exactly E h_m,
then

    M_s(e_m^lambda * e_n^*)
      = zeta(s+1/2) M_{s+1/2}h_m M_s(e_n^*).

Writing q_n(u)=u^(-1/2)e_n^*(u), this is the transform of E g_{m,n}
with g_{m,n}=h_m *_x q_n, where *_x denotes multiplicative convolution
on the positive half-line. This gives a precise candidate synthesis map
in the exact arithmetic model; it does not prove that g_{m,n} belongs to
the concentrated prolate span. In fact e_n^* generally has an unbounded
upper support tail when e_n is supported toward zero, so compact support
and prolate leakage require separate estimates or a common repair.

Scope is essential: ACG §8 describes e_m^lambda as semilocal pair vectors
and says their identification with the arithmetic E-images of prolate
functions is still open in the semilocal setting. Thus the displayed map
is an exact factorization only under the stated arithmetic-model premise;
it is not an identity for the unresolved semilocal family. Also, at the
transform level it gives no lower bound for the map: zeros or small values
of M_s(e_n^*) can make inversion ill-conditioned, and truncating q_n can
alter the pole components. Acceptance for a transfer requires uniform
polynomial bounds for the common repair, full operator residual, smallest
Gram eigenvalue, and both pole directions over n<=n_0(lambda). None are
established here. This is a precise candidate map plus identified analytic
requirements, not closure of R2, no-go, new theorem, or paper-ready result.

Primary-source anchors: ACG equations (1) and (67), §8.8 item 1, and
Remark 8.15(c)-(d); the new rStation draft's Appendix A gives a uniform
canonical arithmetic-space construction but explicitly does not identify
it with the ACG convolved families. The next investigation is to quantify
the Mellin multiplier and tail uniformly, first in the archimedean model,
then determine whether the semilocal identification can be proved without
using RH-strength positivity.

### PWPB-03.4 — Audit the formal RH proof and operator relevance

**Question.** Given the independently checked Alpöge–Claude Lean proof of
RH/Dirichlet GRH, what is its decisive mathematical mechanism, and can its
arithmetic/theta-lift construction be reformulated as a self-adjoint operator
with a proved spectral correspondence to the zeta zeros? The question is
operator extraction and explanatory reconstruction, not whether the formal
RH theorem has been established by the checked Lean development.

**Evidence (checked 2026-11-27).** Alpöge's announcement says the RH and GRH
arguments were formalized without assumptions. Michael Rubinstein's
independent verification page reports for the original release: 175,187
modules compiled and kernel-replayed; the five main theorems depend only on
`propext`, `Classical.choice`, and `Quot.sound`; and independent Rust kernel
nanoda checked 1,484,729 declarations. It hand-checks that the RH theorem is
Mathlib's `RiemannHypothesis`. The shorter 794-module release has also passed
compilation and replay, and `lake comparator --paranoid` reports acceptance
by multiple kernels. Zetral has not independently rerun those computations.
These results constitute strong independent formal verification, conditional
on the soundness of the trusted kernels and intended Mathlib definitions.

Rubinstein's 22 November conventional exposition is explicitly a working
draft. It derives RH from the main inequality (M) and two character estimates,
but reports that (M) is not proved in the exposition and reduces it to
thirteen classical hypotheses. This is an exposition/reconstruction gap, not
a defect in the kernel-checked proof. The original proof's stated route uses
long chains of theta lifts, arithmetic divisibility and a prime-power sum;
the exposition describes a prime-sum upper bound with square-root scale.
The formal proof itself is not a Hilbert–Pólya construction: it supplies no
self-adjoint operator with zero spectrum and no operator/zero correspondence.

**First investigation.** Extract the exact formal statement and dependency
closure for (M), classify each of the thirteen classical inputs as proved in
the exposition, cited/assumed there, or still unreconstructed, then formulate
a candidate operator from the theta-lift/Gram data. Attempt falsification:
check whether its natural Gram or transfer operator has compact resolvent,
whether its eigenvalues encode zero ordinates rather than auxiliary arithmetic
scales, and whether multiplicity and the functional equation are preserved.
Do not infer spectral correspondence merely from the RH theorem.

**Acceptance.** A source-pinned and independently checked operator plus an
explicit theorem identifying its spectrum with the nontrivial zero ordinates,
or a rigorous obstruction for the natural theta-lift operator class. A useful
intermediate milestone is an exact operator/Gram identity and a precise list
of additional spectral hypotheses. Any candidate contingent on RH or on the
formal theorem must label that dependence.

**Verification and provenance.** Sources checked: Alpöge's announcement
([remark](https://alpo.ge/remark.pdf)); Rubinstein's independent checks of
the [original](https://mrubinst.github.io/grh-lean-verification/) and
[short](https://mrubinst.github.io/grh-lean-compact-check/) formalizations;
Rubinstein's [22 November working exposition](https://www.math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/zeta-paper_v2.pdf).
This is a targeted source audit, not a claim that Zetral reproduced the Lean
build, that the exposition is complete, or that an operator was obtained.
No large archive was downloaded. Next: inspect the proof's main inequality
and theta-lift definitions at source level, identify which data could form a
canonical Hilbert space/operator, and compare that object with PWPB and the
existing Suzuki/Weil constructions.

### PWPB-03.5 — Exact scope of the proof's comparison operator

At the pinned compact-source revision
`lsernau/grh-lean@72fead102f663d5c7a407964a13dc0cf9d977207`, the file
`grh/src/New/OneLift/LiftVolumeHeight.lean` defines, for each lift index
`j` and twist `vartheta`,

    U_vartheta = c_j B_vartheta B_vartheta*,
    c_j = chosenGroupOrder * hookNumberMinus(j)^2,

where `B_vartheta = glue j vartheta` maps tuples of forms on a smaller
definite space into forms on the finite-dimensional definite space `V_j`.
Thus `U_vartheta` is positive semidefinite and self-adjoint:
`<x,U_vartheta x> = c_j ||B_vartheta* x||^2`. The source proves the exact
lift-space identity

    <Theta_vartheta y', U_vartheta Theta_vartheta y>
      = c_j / |twistFactor(j,vartheta)|^2
        * <periodLift(j)y', periodLift(j)y>.

It also proves a rank-one-frame expansion and orthogonality of its image to
the false-lift subspace. Separately, `MainInequality.lean` compares a
covolume upper bound plus an index cost against a lower bound from long
integral forms; cancelling the common main amount yields
`m * totalRemainder <= f * a * logB^5`. These exact source statements
clarify the operator's role: it is a finite arithmetic comparison and
Gram-determinant device, not an operator whose eigenvalues are asserted to
be zeta-zero ordinates. The determinant product's twist dependence enters
through Hecke values, a potentially useful spectral-determinant lead, but a
scalar determinant identity alone does not give a zero divisor.

**Falsification / boundary.** A single `U_vartheta` cannot be the desired
Hilbert–Pólya operator: it acts on a finite-dimensional space and is positive
semidefinite, whereas the target is the unbounded two-sided set of zero
ordinates (or its Xi spectral determinant). Positivity itself is not a
global obstruction, since one could transform or take a limit of positive
operators. A family limit would require specified embeddings of the changing
`FormV` spaces into a common Hilbert space, normalization, a self-adjoint
limit, and a theorem identifying its spectral measure/eigenvalues with the
zero divisor. The proof source provides none of these correspondences. This
rules out only the literal individual comparison operator as an HP operator;
it does not rule out a limit or another construction from the theta-lift
data.

The planned direct determinant test is completed in PWPB-03.6 below; it
falsifies the proposed zero encoding on the admissible twist set.

### PWPB-03.6 — Falsify direct zero encoding by the comparison determinant

The pinned `LiftVolumeHeight.lean` states and proves

    Z_j(vartheta) * Delta_vartheta = C * rho_vartheta^d,

where `Z_j(vartheta)` is the Gram determinant of the twisted lift,
`Delta_vartheta = det(liftCompression (comparisonOp j) vartheta)`,
`rho_vartheta = heckeValueProd(j,vartheta)/heckeValueProd(j,1)`,
`d = finrank(goodForms)`, and `C != 0` is twist-independent. The source
proves `rho_vartheta != 0`, then explicitly derives
`Delta_vartheta != 0` for every admissible twist. Its header identifies the
Hecke product as three factors of partial Hecke L-values at integer
parameters. The variable is an automorphic twist; this identity supplies no
complex spectral parameter and no entire interpolation.

Independent algebra check: on lifted vectors, `B_vartheta* Theta_vartheta`
is `twistFactor(j,vartheta)^(-1)` times `periodLift(j)`. Therefore
`Theta_vartheta* U_vartheta Theta_vartheta` is the ratio
`rho_vartheta` times a fixed positive definite form `U_0`. The finite
dimensional compression identity
`det(Theta)^2 det(P_range U|_range)=det(Theta* U Theta)` gives the displayed
formula with `C=det(U_0) != 0`. Since `Theta` is injective, its Gram
determinant is nonzero; since `rho_vartheta != 0`, the compression determinant
is nonzero as well. This independently reproduces the algebraic reason for
`hDelta_ne` rather than treating the Lean determinant conclusion as a black
box.

Thus the direct proposal that `Delta_vartheta` itself is a spectral
determinant with zeta zeros is falsified on the admissible twist set: it is
proved nonzero there. The identity instead converts between a lift Gram
determinant, a compression determinant and Hecke-value ratios. A continuation
outside the admissible family could in principle have zeros, but no such
family, topology, normalization, continuation, or relation to Xi is in this
source. This is a precise negative finding for the direct construction, not
a no-go for a renormalized limit or other operator built from the lifts.

**Next direction.** Pivot from using this determinant as Xi to testing
whether the prime-sum endgame or the theta-lift family admits a common
Hilbert-space realization through a separate trace/transfer operator. First
pin the exact arithmetic parameter scales and identify a candidate family
whose resolvent or trace has a complex spectral variable. Acceptance needs a
proved explicit-formula/trace identity linking that variable to zeta zeros;
if no canonical common space or trace appears, preserve that obstruction and
move to an independent HP route. Source anchor:
`LiftVolumeHeight.lean`, theorem
`IsComparisonOperator.exists_normDet_sq_mul_det_eq` and its use in
`heightLe_liftDeterminant_ratio` at the pinned compact revision above.

### PWPB-03.7 — Prime-defined half-line canonical-system candidate

**Question.** Does Suzuki's local Weil-form/de Branges chain give one
prime-side-defined self-adjoint spectral realization of the zeta ordinates,
rather than only zero-defined sampling models or finite-window operators?

**Finding (source-grounded synthesis; not an independent source-proof audit).**
Suzuki, arXiv:2611.33001v1 (version 2026-11-24), constructs local RKHS
kernels `J_a` from arithmetic Weil forms and recovers the canonical
Hamiltonian coefficient from these kernels in Theorem 6.2. Under RH,
Proposition 7.2 identifies the Weyl function of the common half-line system
as `Q_xi(z)=i xi'(1/2-iz)/xi(1/2-iz)`. The corresponding global spectral
measure is `mu_xi=sum_gamma m_gamma delta_gamma`. The Hadamard product checks
the normalization:

    Q_xi(z) = sum_(gamma in Gamma) m_gamma/(gamma-z),

with symmetric summation, simple poles of residue `-m_gamma`, and positive
atomic masses `m_gamma`. Thus the arithmetic-defined half-line spectral
model has support exactly the set of distinct signed ordinates. Its scalar
eigenspaces are simple; analytic multiplicities occur as spectral weights,
not eigenspace dimensions. The finite-window extension spectra are not the
zero set: Proposition 7.1 gives phase interlacing and says the global zero
measure is nonorthogonal on every finite local space. The correspondence is
at the common half-line system/spectral-measure level.

The Hamiltonian is defined from local Weil forms, not by inserting zero
ordinates into a diagonal operator. The separate RH premise is available
from the independently kernel-checked Lean theorem and Weil's criterion,
subject to trust in the audited kernels and Mathlib semantics. Zetral has not
formally composed these results or independently audited Suzuki's proof.
This is an existing literature construction, not a Zetral novelty claim or
an independent proof of RH. It advances the portfolio from the zero-defined
B3-01 model to a prime-defined operator candidate with a theorem-level
RH-conditional Weyl identity; exact analytic multiplicities as eigenspace
dimensions remain unmatched.

**Next.** Audit the common Hilbert space, boundary realization, limit-point
domain, and prove the Hamiltonian's definition is independent of zero data.
Then test whether multiplicity-sensitive fibers can preserve the arithmetic
form chain. Detailed chain and limits are in
`research/operators/B3-13-prime-defined-canonical-system.md`.

### PWPB-03.8 — Arithmetic inputs and canonical operator realization

Suzuki's defining Weil functional is explicitly
`W(u)=integral u(x)(e^(x/2)+e^(-x/2))dx - sum_n Lambda(n)n^(-1/2)
(u(log n)+u(-log n))`. The local form, its closure, and `J_a` are therefore
defined without zero ordinates as input. Theorem 6.2 recovers
`H(a)=diag(eta(a)^(-1),eta(a))` from `eta=alpha'_a/beta_a=beta'_a/alpha_a`
almost everywhere, with `alpha_a=J_a(i,0)` and `beta_a=J_a(i,i)/alpha_a`.
`eta` is positive, so the canonical Hamiltonian is positive definite a.e.
This pins zero-independent *definition* separately from the RH-dependent
proof that all local forms are positive and the Weyl function is `i xi'/xi`.

For a tail beginning at any `a0>0`, the standard canonical-system
realization acts in `L2_H((a0,infinity))`, where
`||y||²=integral y*H y da`, by `T_H y=-H^(-1)J y'`. Its maximal domain
requires local absolute continuity and `T_H y` in `L2_H`; a separated
self-adjoint boundary condition is imposed at `a0`. No boundary condition
is imposed at infinity because the system is limit point. The source's
determinant-one Hamiltonian gives `integral_a^b tr H >= 2(b-a)`, which
ensures this endpoint classification. The self-adjoint spectral measure is
the Nevanlinna measure of the Weyl function; the partial fraction expansion
in PWPB-03.7 shows that it is purely atomic on `Gamma` with weights
`m_gamma`. This imports classical canonical-system spectral theory; the
operator domain is now identified at that level, but no Zetral Lean proof or
independent full-source proof audit has been made.

This closes the bounded *source-chain identification* question: the
literature supplies an arithmetic-defined Hamiltonian and an RH-conditional
set-level spectral correspondence; the RH premise is available from the
separately checked formal theorem. It remains an existing literature
construction, not a novelty claim. It does not establish equality of
eigenspace dimensions with analytic zero multiplicities. Next examine
whether multiplicity-sensitive matrix channels can be derived from the same
prime-side data while preserving the local embeddings, or prove a precise
obstruction for a natural operator class. Detailed statement and limits are
in `research/operators/B3-13-prime-defined-canonical-system.md`.

### PWPB-03.9 — Audit the imported global screw/Weyl link

Reopened Suzuki arXiv:2206.03682v4 (version 2026-08-24), Theorems 1.1–1.2.
Its prime-defined `Psi` satisfies
`integral_0^infinity Psi(t)e^(izt)dt=-xi'(1/2-iz)/(z^2 xi(1/2-iz))`
for `Im(z)>1/2`. With `g=-Psi` and `Q_xi=i xi'/xi`, this gives exactly
`integral g e^(izt)dt=-i Q_xi(z)/z^2`, the source's Krein–Langer
normalization. Under RH, `Q_xi` is Nevanlinna, and the source checks its
required growth at infinity; uniqueness identifies the arithmetic `g` with
the global screw function for `Q_xi`. The sign and factor of `i` in the
dependency cited by Proposition 7.2 of arXiv:2611.33001v1 agree. This is a
source-to-source dependency audit and algebraic normalization check, not an
independent proof of either source's analytic theorems. The integral starts
as an ordinary convergent transform only in `Im(z)>1/2`; the Weyl function
on the full upper half-plane comes from the screw/Nevanlinna correspondence.
Next derive the explicit left-boundary line for the canonical operator and
investigate multiplicity-sensitive arithmetic channels. Details in
`research/operators/B3-13-prime-defined-canonical-system.md`.

### PWPB-03.10 — Exact endpoint scope of the Weyl-limit formula

Re-read Suzuki arXiv:2611.33001v1 §§4.2–4.3 and Proposition 7.2. The source
defines `U·Omega=(U11 Omega+U12)/(U21 Omega+U22)`; `Omega=0` gives `U12/U22`
and `Omega=infinity` gives `U11/U21`. Proposition 7.2 takes the `Omega=0`
quotient of the transfer matrix `U_a^{-1}U_b` and lets `b` tend to infinity,
obtaining the Weyl function of the tail normalized at `a`. This is an exact
source-convention result. It does not itself translate that tail quotient to
a separated left-end boundary line for `T_H=-H^{-1}Jd/da`; the `Omega` there
is the remaining-tail Weyl function, not a constant left-boundary angle.
Thus the boundary-line task requires an explicit Green boundary form and
boundary-triple derivation, including the row/column and sign conversion.
No boundary line is claimed. Detailed audit and exact next step are in
`research/operators/B3-13-prime-defined-canonical-system.md` (PWPB-03.10).

### PWPB-03.11 — Green boundary form for the candidate operator

For `T_H=-H^(-1)Jd/da` in `L2_H` on `(a0,infinity)`, `a0>0`, direct
integration by parts yields the boundary form `[y*Jz]_(a0)^infinity`.
The left trace is `-conj(y1)z2+conj(y2)z1`; its maximal isotropic lines are
`cos(theta)y1(a0)+sin(theta)y2(a0)=0`, `theta mod pi`. Since `a0` is regular
and infinity is limit point, these give the separated self-adjoint endpoint
family under standard first-order system theory. This computes the operator
side but does not identify which line has Suzuki's `mu_xi`; matching requires
the boundary-triple Weyl function and exact source ratio orientation. No
line selection or novelty claim is made. Full derivation and limits:
`research/operators/B3-13-prime-defined-canonical-system.md` (PWPB-03.11).

### PWPB-03.12 — Boundary triple and the zeta Weyl measure

Use the full half-line `(0,infinity)`, whose left endpoint is regular because
both diagonal entries of `H` are integrable on `[0,R]`; infinity is limit
point. For `T_H=-H^(-1)Jd/da`, the boundary maps
`Gamma_0 y=y1(0)`, `Gamma_1 y=-y2(0)` satisfy the Green identity and form an
ordinary boundary triple (using inner products conjugate-linear in the first
slot). The self-adjoint extension `Gamma_0=0` has line
`y1(0)=0`. For the finite truncation with right-end `y2(b)=0`, the row
solution `r(b)=(1,0)` gives `r(0)=r(b)U(b)^(-1)=(U22,-U12)`, so its Weyl
quotient `Gamma_1 r/Gamma_0 r=U12/U22=U(b)·0`. Taking the limit using
Suzuki's limit-point result yields `M(z)=Q_xi(z)`. Thus this explicit line
has the source's Nevanlinna measure `mu_xi=sum m_gamma delta_gamma` in
boundary-triple normalization. This realizes the distinct ordinates as
spectral support; masses remain weights, not eigenspace dimensions.

The tail at `a0>0` instead has Weyl function `Omega_a0`; transforming through
the initial segment gives global `Q_xi`. The boundary algebra and Green
identity are directly derived; regular-endpoint boundary-triple theory and
the source's analytic Weyl theorem are imported, not formally composed or
independently audited. No novelty claim. Full derivation and qualifications:
`research/operators/B3-13-prime-defined-canonical-system.md` (PWPB-03.12).
An exact `H=I` sign check independently confirms the convention:
`tan(bz)->i` in `C_+`, matching `-y2(0)/y1(0)=i` for the decaying defect
solution. This checks signs only, not zeta-specific claims.

### PWPB-03.13 — Scalar multiplicity obstruction; matrix-lift target

For any eigenvalue `t`, uniqueness of the initial-value problem for
`Jy'=-tHy` and the left line `y1(0)=0` show directly that its eigenspace
has dimension at most one. The Weyl atoms at zero ordinates therefore encode
analytic multiplicities `m_gamma` as weights, not geometric multiplicities;
no multiple zero is assumed or known here. General matrix canonical systems
are established theory (Sakhnovich, Documenta Math. 26 (2021), 583–615),
but no matrix-valued local Weil-form lift is supplied by that framework. A
noncircular lift would need arithmetic-defined matrix forms, positivity and
compatible kernel embeddings, and a matrix Weyl/measure identity without
zero multiplicities as input. The exact requirements and limits are in
`research/operators/B3-13-prime-defined-canonical-system.md` (PWPB-03.13).

### PWPB-03.14 — Independent operator-side audit of the boundary triple

Re-derived the endpoint trace estimate from `f=T_H y`, proving `y'=JHf`
is integrable near zero by Cauchy–Schwarz and `integral tr H<infinity`.
Compactly tapering constant vectors away from zero proves trace surjectivity.
Direct integration by parts verifies the boundary-triple sign; row transfer
`r(0)=r(b)U(b)^(-1)` independently reproduces `U12/U22`. No coordinate or
sign error was found. Limit-point operator theory, ordinary boundary-triple
theory, and Suzuki's cutoff convergence/spectral theorem remain imported;
this is not an independent proof of Proposition 7.2. Full audit boundary:
`research/operators/B3-13-prime-defined-canonical-system.md` (PWPB-03.14).

### PWPB-03.15 — Fresh RH-conditional zero-multiplicity bounds

Literature refresh found Yuanda Xu, arXiv:2611.34546v1, submitted
2026-11-25. Its Theorems 1–2 claim, assuming RH,
`liminf N_s(T)/N(T) >= 0.7127406684` and
`liminf N_d(T)/N(T) >= 0.8536823046`; the stated constants arise from exact
rational certificates, long mixed moments and a separate packing argument.
Composing only the RH premise with the external Lean RH theorem gives these
density bounds at theorem level, subject to trust in both sources. This is
relevant to PWPB-03.13: the scalar operator's one-dimensional eigenspaces
match simple zeros on the guaranteed density subset, but the result does not
establish simplicity for every zero or eliminate the need to understand
multiplicity weights. Zetral has not audited Xu's proofs or certificates;
this is an external preprint result, not a Zetral discovery. Source and
scope: `research/operators/B3-13-prime-defined-canonical-system.md`.

### PWPB-03.16 — Exact audit of Xu's introductory certificate

Independently recomputed the exact covariance regression and constrained
least-squares arithmetic in Xu §1.4. The residual variance is
`115519/8755200 > 0`, the regression gap is `31/1920 > 0`, and the optimizer
is feasible with `t=141360/392159`. The resulting toy simple-zero bound is
`276640/392159 = 0.70542815...`, matching the displayed certificate. This
audits only the rational arithmetic and feasibility, not the analytic moment
inputs, endpoint limit, or the paper's main 71.2740668% certificate. It is a
source audit, not a Zetral theorem or novelty claim. Full exact derivation
and falsification checks: `research/operators/XU26-fejer-certificate-audit.md`.

### PWPB-03.17 — Growing-interval Weyl convergence audit

Independently checked the transfer convention and trace-length argument for
the finite left-to-right quotient `U_a·0=U_a,12/U_a,22`. The determinant-one
Hamiltonian gives `L_a=integral_0^a tr H >= 2a`, so trace normalization
produces a half-line whose length tends to infinity. The cited limit-point
theorem gives pointwise Weyl convergence, and a Cayley/Montel argument gives
locally uniform convergence on compact subsets of the upper half-plane.
This is the quotient used by the boundary triple. It is distinct from
`(U_a^(-1)U_b)·0`, the tail quotient in Proposition 7.2. No sign mismatch
was found. Standard canonical-system convergence and Suzuki's RH-conditional
Weyl identification remain imported; no quantitative rate is established.
Full audit: `research/operators/B3-14-cutoff-weyl-convergence-audit.md`.

### PWPB-03.18 — Finite matrix multiplicity barrier

For a definite order-`2n` canonical system with a separated self-adjoint
left boundary condition, initial-value uniqueness injects each eigenspace
into an `n`-dimensional Lagrangian initial-data subspace. Thus geometric
multiplicity is at most `n`. A construction matching every analytic zero
multiplicity geometrically requires `n >= sup_gamma m_gamma`; scalar Suzuki
systems can match atom weights but not geometric multiplicities above one.
This is a necessary condition, not a no-go: simplicity remains open, no
uniform multiplicity bound is established here, and infinite-dimensional or
weight-based correspondences remain possible. Matrix canonical systems are
prior art; no arithmetic matrix lift was found. Full scope and tests:
`research/operators/B3-15-finite-matrix-multiplicity-barrier.md`.

### PWPB-03.19 — Derivative-kernel rank collapse

Tested the direct matrix lift formed from fixed-order derivatives of the
local RKHS kernel. Since Suzuki's normalized kernels converge locally
uniformly to `conjugate(A_infinity(w))*A_infinity(z)`, Cauchy estimates give
the same convergence for all fixed derivative orders. The limiting jet Gram
matrix is an outer product and has rank at most one, including at a distinct
zero ordinate if its analytic multiplicity exceeds one. Thus the
direct normalized jet lift cannot encode higher geometric multiplicity.
Finite-window positivity is preserved; the obstruction is only in the
limiting rank. Other rescalings and independent arithmetic feature families
remain open. Full derivation: `research/operators/B3-16-jet-kernel-rank-collapse.md`.

### PWPB-03.20 — Function-field finite-endpoint transfer obstruction

Fresh literature review found Suzuki's October 2026 function-field spectral
theory: for finitely many zero classes modulo `2 pi/log q`, it obtains an
exact endpoint at `a_*=d log(q)/2`, with simple operator eigenvalues and
analytic multiplicities in the sampling norm. A direct transfer to zeta
cannot have finitely many periodic classes: a finite union modulo any fixed
period has `O(T)` points, while Riemann–von Mangoldt plus Conrey's positive
proportion of simple zeros gives `Omega(T log T)` distinct ordinates. Thus
this specific endpoint formula becomes infinite for zeta. This is not a
no-go for another finite-endpoint mechanism or for a number-field geometric
pairing. Source and derivation:
`research/operators/B3-17-function-field-endpoint-transfer.md`.

### PWPB-03.21 — Finite-trace obstruction in the geometric model

Audited the Rosati/Frobenius construction in Suzuki's function-field paper.
Its finite-dimensional algebra has `tau(1)=2g`; its exact pairing uses
finite power moments. A direct zeta analogue assigning the zero-counting
measure to a unitary would require `tau(1)=sum_gamma m_gamma=infinity`, by
Riemann–von Mangoldt, so no finite trace can implement that identification.
This does not rule out a semifinite or regularized trace, nor the Weil form
on rapidly decaying test functions. The bounded outcome is a precise
architecture requirement for any number-field geometric lift, not a global
no-go. Full derivation and follow-up criteria:
`research/operators/B3-18-finite-trace-geometric-obstruction.md`.

### PWPB-03.22 — Reconcile finite trace with the global Weil model

Prior-art check against Suzuki's 2025 paper shows that the prime-side global
Weil completion and a self-adjoint operator with distinct zero ordinates as
simple eigenvalues already exist under RH. Therefore PWPB-03.21 obstructs
only representing the infinite zero-counting measure by a finite trace; it
does not obstruct this infinite-mass Hilbert completion. The source explicitly
does not encode analytic multiplicities as eigenspace dimensions. Zetral has
not independently audited the full source proof. This is a corrected
literature synthesis, not a new operator construction. Follow up on a
noncircular arithmetic construction and a multiplicity-sensitive
correspondence; do not repeat the known scalar model. Recorded in
`research/operators/B3-18-finite-trace-geometric-obstruction.md`.

### PWPB-03.23 — Countermodel to deriving a lower ladder from qualitative uncertainty

Built an explicit family of orthogonal projection pairs whose compressed
product is compact, whose ranges have zero intersection, and whose common
kernel is infinite-dimensional. The associated positive operator
`2-P-Q` has a smallest eigenvalue `delta_4(lambda)^2`, while all prescribed
upper Fuchs-ladder bounds remain satisfied. Its ratio to `delta_4` tends to
zero. Thus upper bounds plus this qualitative two-projection/Sonin geometry
cannot alone imply a uniform lower ladder comparison. This is an abstract
countermodel, not a counterexample to the arithmetic Weil form: the prime
map, trace identity, and quantitative semilocal hypotheses are absent. The
next question is which exact arithmetic input in ACG §8 rules out this model.
Full construction and scope:
`research/operators/B3-19-two-projection-ladder-countermodel.md`.

### PWPB-03.24 — Local tail bounds do not imply the required rate

Audited ACG §8.3's exact dependency: Lemma 8.9 gives polynomial growth of
local Mellin mass, while Lemma 8.8 gives convergence of each fixed-window
tail with no rate; Remark 8.10 says a separate relative-density estimate is
needed for H2′ and polynomial conditioning. An explicit moving-bump density
has both qualitative properties but relative tail size only
`1/log(n0)`, slower than every power. Thus those two bounds alone cannot
provide the polynomial rate. The model is not a spectral density of the
actual semilocal Hankel operator, so H2′ remains open. Details:
`research/operators/B3-20-local-tail-no-rate.md`.

### PWPB-03.25 — Exact finite-prime symbol expansion

Expanded each finite-prime local ratio exactly as a one-sided geometric
Fourier series. Its squared coefficients form a probability law with mean
absolute shift `2/p`. For primes `p<=X`, Chebyshev's bound gives expected
total log-shift `O(log X)`, so retaining shifts of total absolute log-height
at most `T` gives Bohr mean-square error squared `O(log X/T)` and at most
`exp(2T+O(1))` candidate rational frequencies. This provides a reproducible
exact-arithmetic approximation in a specified mean-square norm. It does not
give uniform symbol or operator-norm control, nor H2′: log-dilation shift
indices are not the source's Mellin-frequency scale. Full derivation:
`research/operators/B3-21-finite-prime-symbol-expansion.md`.

### PWPB-03.26 — Uniform finite-prime operator-norm truncation

Improved the coefficient-level Bohr-mean-square approximation to a uniform
symbol estimate by truncating each prime factor separately and retaining the
product in factored form. For all sufficiently large primes, keeping modes
`k=1,0,-1,-2` leaves a summable local sup-norm tail
`p^(-3/2)+p^(-2)`. Only finitely many small primes need an
epsilon-dependent longer truncation. Product telescoping yields error below
epsilon uniformly in the Mellin variable, with O_epsilon(|S|) factor terms;
the compressed Hankel operator has the same operator-norm error. This controls
fixed approximation numbers but not the infinite singular-value tail or
H2′. Full bound and caveats:
`research/operators/B3-22-uniform-finite-prime-operator-approximation.md`.

### PWPB-03.27 — Trace control requires localization beyond operator norm

Proved the standard Hilbert–Schmidt criterion for converting operator-norm
error into a weighted trace bound, then falsified any norm-only inference
with a fixed bounded non-Hilbert–Schmidt diagonal weight and positive
finite-rank residuals whose operator norms vanish while their weighted
traces stay one. In the Mellin model, nonzero `theta(f)` is a multiplication
operator and is not compact/HS on the full space, so the global HS shortcut
does not apply. The actual ACG trace remains structured and may still have
quantitative decay. Next seek localized Schatten bounds or prove H2′ directly.
Details: `research/operators/B3-23-operator-norm-does-not-control-weighted-trace.md`.

### Falsification check

Small Rayleigh energy error does not imply eigenvector convergence without a
gap. For `A_n=diag(0,d_n)` with `d_n->0` and
`v_n=sqrt(1-e_n²)e_0+e_n e_1`, where `e_n->0` arbitrarily slowly,
`<A_n v_n,v_n>=d_n e_n²->0` while
`dist(v_n,C e_0)=e_n`. The residual-to-gap ratio equals
`e_n sqrt(1-e_n²)`, correctly retaining the missing information. This is
an abstract countermodel, not a counterexample about `QW_lambda`.

## Backlog, dependencies, and experiments

### PWPB-03.28 — Fixed-window Galerkin limit and boundary-normalization gap

For fixed `lambda`, CCM Proposition 3.4 states that the union of the Fourier
spaces `E_N` is a form core, so the lowest restricted Weil-form eigenvalues
decrease to the full form bottom. Compact resolvent then implies subsequential
strong `L²` convergence of normalized finite-window minimizers to the ground
eigenspace; if the full ground state is simple, their projective distance to
it tends to zero. The argument is qualitative and fixed-window only. The
varying Dirichlet boundary evaluation is not L²-continuous: the exact
sequence `delta_N/||delta_N||²` tends to zero in L² while its represented
endpoint value stays one. Thus the Galerkin limit does not control CCM's
boundary normalization. No rate, simplicity/evenness result, or joint
cutoff/window limit follows. Full derivation and limits:
`research/operators/B3-24-fixed-window-galerkin-limit.md`.

### PWPB-03.29 — Endpoint evaluation is unbounded in the Weil form norm

Strengthened the previous L2 obstruction at each fixed window. The normalized
Dirichlet kernel `g_N=delta_N/||delta_N||²` has endpoint value one, while its
zero extension has `H^s(R)` norm squared
`O_{L,s}(N^(2s-1) log²N)` for every `0<s<1/2`. From the explicit CCM form,
the archimedean multiplier grows logarithmically and the fixed-window pole
and prime contributions are bounded, so the shifted Weil form norm of
`g_N` tends to zero. Thus endpoint evaluation has no continuous extension
from the Fourier core in the Weil form norm. This rules out a general
form-norm-only normalization argument, but says nothing adverse about the
special sequence of minimizing vectors; a sequence-specific trace estimate
could still hold. Details and proof:
`research/operators/B3-25-boundary-trace-not-form-continuous.md`.

### PWPB-03.30 — Candidate domain membership, residual still open

For each fixed window, `k_lambda=E(h_lambda)` is piecewise smooth with
finitely many cutoff jumps. Its zero extension has Fourier decay `O_lambda`
`(1+|t|)^(-1)`, so the logarithmic archimedean multiplier sends it to L2.
The finitely many prime and pole terms are bounded for that fixed window;
therefore `k_lambda` lies in `Dom(A_lambda)`. This settles a domain
prerequisite for the residual criterion only. No estimate tending to zero
for `||(A_lambda-m_lambda)k_lambda||`, and no ground-state gap bound, follows.
Detailed argument and limits:
`research/operators/B3-26-prolate-candidate-operator-domain.md`.

### PWPB-03.31 — Exact residual decomposition and source normalization check

Rewrote the CCM form as a compressed Fourier multiplier, a rank-two pole
operator, and finitely many paired translations by `±log n` with coefficient
`Lambda(n)/sqrt(n)`. This gives a fixed-normalization expression for the
prolate candidate residual. Direct conversion of CCM equation (3.19) to the
unitary Fourier transform gives multiplier `2 theta'(t)`. The discrepancy
with the `theta'(t)` wording in Theorem 3.6 is reconciled in PWPB-03.32 below:
it is an internal factor-of-two inconsistency, while the compactness argument
survives by equivalent shifted form norms. Exact residuals use `2 theta'`.
No cancellation, decay estimate, or spectral gap has been established. Derivation:
`research/operators/B3-27-exact-restricted-Weil-operator-decomposition.md`.

### PWPB-03.32 — Archimedean multiplier normalization reconciled

Direct Plancherel conversion of CCM equation (3.19) gives the exact
unitary-Fourier multiplier `2 theta'(t)`. This agrees with the displayed
asymptotic and the proof's comparison multiplier `log|t|`; the isolated
`theta'(t)` in the Theorem 3.6 prose is an internal factor-of-two
inconsistency, most likely an omitted factor, not a confirmed author erratum.
Because `2 theta'-ell` is bounded for `ell(t)=1` on `|t|<=e` and
`ell(t)=log|t|` otherwise, the compact-form norms remain equivalent after a
fixed lower-bound shift. The compact-resolvent conclusion is unaffected,
while exact residual calculations must use `2 theta'`. No residual decay,
gap or ground-state convergence follows. Full calculation and source limits:
`research/operators/B3-28-archimedean-normalization-reconciliation.md`.

### PWPB-03.33 — Exact two-moment correction and its domain gap

Using the prolate Fourier eigenrelation, the two-mode trial's exact integral
zero, and a third even prolate mode with separated Fourier eigenvalue, solved
the two linear moment constraints explicitly. The correction has exact
`L2` cost `sqrt(|c_4|^2+|c_j|^2)` and is small if the selected mode's value at
zero is bounded below; the source gives the uncorrected point value
`O(delta_4)`. This does not yet yield a radical vector: ACG's global radical
inclusion is stated for Schwartz inputs, while zero-extended prolate modes
are not globally smooth, and their arithmetic images are not exactly
supported in the finite Weil window. Smoothing and lower-window-tail control
remain open. No residual or ground-state estimate follows. Exact algebra and
the domain limits:
`research/operators/B3-29-radical-moment-correction.md`.

### PWPB-03.34 — Smooth radical approximation in a fixed window

For fixed `lambda` and any `0<s<1/2`, constructed exact-moment even
`C_c^infinity((-lambda,lambda))` approximants to the B3-33
piecewise-smooth corrected prolate vector, converging in `H^s`. The finite
windowed arithmetic map is bounded on this Sobolev space, and `H^s` controls
the logarithmic Weil-form norm at fixed window. Thus the projected arithmetic
images of genuine Schwartz-radical vectors converge to the projected
piecewise-smooth candidate in the fixed-window form topology. This removes
the Schwartz-regularity gap only for approximation. Projection need not
preserve the global radical identity; the lower arithmetic tail and
global-form cross terms remain uncontrolled, and all constants may depend on
`lambda`. Proof and precise limits:
`research/operators/B3-30-smooth-radical-approximation.md`.

### PWPB-03.35 — Explicit Schwartz lower-tail estimate

Poisson summation and both exact moments give
`E(f)(u)=(2 sqrt(u))^-1 sum_(k!=0) hat f(k/u)` for even Schwartz `f`.
If `M_N(f)=sup_y (1+|y|)^N |hat f(y)|` and `N>1`, then
`||1_(0,lambda^-1) E(f)||_2 <= zeta(N)M_N(f)/(sqrt(2N-1) lambda^(N-1/2))`.
The upper tail is identically zero for support in `[-lambda,lambda]`.
This gives an explicit family-level condition on Fourier seminorm growth for
the lower **L2** tail to vanish. It gives no global Weil-form tail estimate;
the constants for smoothed prolate inputs may grow with the smoothing and
window parameters. Derivation and exact constants:
`research/operators/B3-31-poisson-arithmetic-tail.md`.

### PWPB-03.36 — Smoothed-family tail form and Rayleigh estimate

Constructed an explicit growing family by compressing and mollifying the
normalized two-mode prolate vector with `epsilon=lambda^(-3/4)`, then
correcting its point moment with a fixed zero-integral bump. Both moments
vanish exactly, and the family converges locally through the arithmetic map
to the Hermite/Riemann kernel. ACG's global radical identity and CCM's Weil
test class give an exact inside/outside identity
`QW_lambda[v_lambda]=QW[w_lambda]`. Differentiated Poisson estimates, the
archimedean logarithmic bound, pole estimates, and an absolutely convergent
prime-shift sum yield
`|QW_lambda(v_lambda)| <= C lambda^(-2)` for the explicit N=16 smoothing.
The window vector norm stays bounded below, hence its Rayleigh quotient is
`O(lambda^(-2))` in absolute value. This is weaker than ACG's published
exponentially small eigenvalue upper bound and proves no positivity,
operator-residual decay, or spectral gap. It is an independently derived
tail-transfer mechanism, not a novelty claim. Full construction, constants,
domain audit, and limits:
`research/operators/B3-32-smoothed-prolate-tail-energy.md`.

### PWPB-03.37 — Smoothed trial operator residual

The exact radical split now gives a weak window-operator identity. The lower
tail's zero-extended `H^s` bound controls the logarithmic archimedean
multiplier; direct exponential integrals control the rank-two pole term by
`O(D_lambda lambda)`; paired prime-power translations sum to
`O(D_lambda lambda log(lambda+2))`. For the B3-32 smoothing and Fourier order
`N=24`, `D_lambda=O(lambda^-3)`, yielding normalized residual
`O(lambda^-2 log(lambda+2))` and Rayleigh value `O(lambda^-6)`. Domain
membership is checked against B3-27's explicit multiplier and bounded
fixed-window perturbations. Compact resolvent puts some spectrum this close
to the Rayleigh value, but there is no identification with the bottom, no
gap, no positivity, and no spectral correspondence. Imported inputs are
ACG's radical/prolate estimates and CCM's operator formula; component bounds
are derived in Zetral. See
`research/operators/B3-33-smoothed-prolate-operator-residual.md`.

Next: independently audit the weighted shift tail and weak-form-to-operator
step; then test whether any source-supported lower spectral bound or gap
estimate can identify the nearby eigenvalue. Do not infer ground-state
convergence from residual decay alone.

### PWPB-03.38 — Direct residual audit

A second derivation checks the endpoint jump in the zero-extended tail,
evaluates both pole functionals with the log-window scaling, and integrates
the paired prime-power shifts on their exact supports. The jump prevents an
`H^1(R)` claim, but the tail is in `H^alpha(R)` for each `alpha<1/2`; the
second pole functional is the dominant `D_lambda lambda` term; and both
prime-sum ranges contribute at most `O(D_lambda lambda log(lambda+2))`.
The form-core identity extends by the closed-form representation theorem
once the `L2` component bounds are established. No discrepancy was found in
the B3-33 exponent. This is a same-project derivation, not external or human
review, and imported ACG/CCM theorems remain unaudited. Full details and
falsification checks: `research/operators/B3-34-residual-estimate-audit.md`.

Next priority: investigate whether the available lower bound that separates
this approximate spectral point from the bottom is equivalent to Weil
positivity/RH. If so, record the circularity obstruction and pivot to the
Suzuki operator/multiplicity correspondence audit.

### PWPB-03.39 — Local spectral measures recover multiplicity by cluster mass

For Suzuki's arithmetic-defined canonical-system family under RH, the
finite-end Weyl functions `q_a` converge locally uniformly to
`Q_xi=i xi'/xi`, and their spectral measures have atoms
`J_a(gamma_a,gamma_a)^(-1)` at simple local eigenvalues. Weighting these
measures by `(1+t^2)^(-1)`, convergence at `z=i` fixes their total mass;
weak compactness on the one-point compactification and the absence of a
linear term in the limit Weyl representation rule out mass escaping to
infinity. Uniqueness of the Poisson representation gives weak convergence
of the weighted measures, hence vague convergence of the original measures.
For any bounded interval with zero-free endpoints, its spectral mass tends
to the sum of analytic zero multiplicities inside. This is a measure-level
multiplicity correspondence, not geometric eigenspace multiplicity. Suzuki
already states convergence of selected local roots and their weights to each
zero and multiplicity; this result repackages and aggregates that source
theorem rather than claiming novelty. Details:
`research/operators/B3-35-vague-spectral-measure-limit.md`.

Next: determine whether the same argument yields a quantitative cluster-mass
rate from any source-proved Hamiltonian/Weyl tail estimate. If not, preserve
the rate obstruction and return to a multiplicity-sensitive arithmetic
operator lift; do not identify the prolate-window residual with these
canonical-system local eigenvalues without a proven intertwiner.

### PWPB-03.40 — No rate from qualitative Weyl convergence alone

The two-atom Herglotz model
`mu_n=(m/2)(delta_(gamma+delta_n)+delta_(gamma-delta_n))` has simple finite
atoms and locally uniform Weyl convergence to a mass-`m` atom, but the pole
splitting `delta_n` can tend to zero arbitrarily slowly. The exact transform
error is `m delta_n^2/(a(a^2-delta_n^2))`, `a=gamma-z`. Thus Montel/locally
uniform convergence alone gives no universal power-law rate for local
spectral clusters, even though the cluster mass is exactly `m`. This is an
abstract obstruction only; arithmetic Hamiltonian estimates could improve
it. Details: `research/operators/B3-36-no-universal-rate-for-qualitative-weyl-limits.md`.

Next: inspect Suzuki's quantitative kernel/Hamiltonian estimates for a
specific rate; if none control the tail Weyl error, record the limitation and
select the arithmetic multiplicity-lift question as the next distinct
operator investigation.

### PWPB-03.41 — Source-specific Weyl-rate audit and pivot

Inspection of Suzuki arXiv:2611.33001v1 §8 finds monotone root convergence
and locally uniform Weyl/kernel limits, plus the quantitative bound
`m_a>=a^2/ell_infinity`. It supplies no modulus for `q_a-Q_xi`, the string
length deficit, or the kernel-weight error. Theorem 8.2's proof uses a
fixed-cutoff / then cutoff-to-infinity weighted-average argument with no
tail modulus, so it is qualitative as written. This does not prove no rate
exists for the arithmetic system. The quantitative-rate path is therefore
not advanced by the inspected estimates; the next campaign question is a
prime-defined positive matrix-valued local Weil form that could encode
multiplicity fibers without inserting zeros. Details:
`research/operators/B3-37-suzuki-rate-audit.md`.

### PWPB-03.42 — Scalar-observation rank obstruction

For a scalar multiplicity-one self-adjoint model and any bounded map from
finitely many observation channels, the induced matrix spectral atom is
`V^*P_gamma V`, hence has rank at most one. Applied to Suzuki's scalar
`L^2(mu_xi)` model, bounded finite-channel Gram constructions cannot turn
the scalar atom mass `m_gamma` into geometric fiber rank. This generalizes
the specific rank-one derivative-jet collapse in B3-16 to the full bounded
observation class, while leaving genuinely new arithmetic matrix-valued
forms open. The proof is elementary spectral-projection rank algebra and
makes no novelty claim. Details:
`research/operators/B3-38-scalar-observation-rank-obstruction.md`.

### PWPB-03.43 — Recent trace-defect simplicity criterion audited

A newly posted source (Alderliefste, Hexagon v1, 2026-11-24) compares
multiplicity-weighted Taylor moments of `xi` with trace powers of Suzuki's
finite compressions. The independent trace-ideal derivation confirms that
the limiting defect is
`2 sum_(gamma>0)(m_gamma-1) gamma^(-2k)`, and its `ell^(2k)` limit detects the
first multiple ordinate. This is a simplicity criterion, not geometric
multiplicity for the scalar operator. The source-reported Arb certificate
through 97.632 has not been independently reproduced in Zetral.

An apparent typographical error occurs in the displayed Theorem 1 statement:
its first lower-bound sum is printed with `m_gamma`, while the proof derives
`m_gamma-1`. As printed, it contradicts `D_(N,k)<S_k` and even the all-simple
limit. Correcting that summand makes the displayed proof support the claimed
criterion; no other contradiction was found in this bounded analytic audit.
The finite explicit-formula matrices and the source's interval programs
remain unaudited. Full note:
`research/operators/B3-39-trace-defect-multiplicity-audit.md`.

The same singular-value argument verifies the source's certificate-size
barrier `d_N >= 2 n(T)` for its strict height test. Combining this with
Riemann–von Mangoldt and `d_N=2N 2^N-2` gives `N=log_2 T+O(1)` at the
necessary dimension scale, and a prime-power cutoff `e^(2N)` of order
`T^(2/log 2)` for that spline family. This is a complexity lower scaling,
not a no-go or sufficient cost estimate.

Next investigate whether the trace-defect route admits an unbounded-height
upper bound within the compression dimension forced by Proposition 8. In
parallel as a distinct follow-up, test an arithmetic-defined vector-valued
prime-side form for genuinely new fibers; scalar copies and bounded scalar
observations remain excluded by B3-38.

### PWPB-03.44 — Hidden-spectrum concern checked against canonical-system hypotheses

The Suzuki source data for the global operator are consistent with the
standard simple canonical-system spectral representation: Theorem 6.2 gives
`H=diag(gamma,gamma^(-1))` with `det H=1`; the trace-normalized length
satisfies `L_a>=2a`; Proposition 4.2 gives the limit-point endpoint; and
Proposition 4.3 identifies the system's spectral measure with the Weyl
Nevanlinna measure. The independently derived PWPB-03.12/14 boundary maps
match the selected `U_12/U_22` line. Under RH and the imported Proposition
7.2, `Q_xi` has pure atomic measure with masses `m_gamma`, so the canonical
operator has no hidden continuous summand in that spectral representation.
Each fiber remains one-dimensional; weights are not geometric
multiplicities. This is an assumption/normalization audit, not an
independent proof of Proposition 7.2 or of the general spectral theorem.
Details: `research/operators/B3-40-canonical-system-completeness-audit.md`.

Next: independently audit the analytic extension-parameter and Weyl-limit
step in Suzuki Proposition 7.2. Pin the global screw function to the
prime-defined local forms and track all boundary/transfer conventions.

### PWPB-03.45 — Prime-side screw function and global Weyl normalization

The source-to-source equation audit confirms that the triangular profile
`Delta_t` is exactly the correlation of both papers' half-width rectangular
test. The prime functional gives `W(Delta_t)=Psi(t)`, hence the global
function is `g=-Psi`; Suzuki's transform formula gives
`integral g(t)e^(izt)dt=-i Q_xi(z)/z^2` for `Im z>1/2`. In the 2026
canonical system, concatenation gives `q=U(a) dot Omega_a`; determinant one
inverts this to `Omega_a=U(a)^(-1) dot Q_xi`, and finite-tail quotients
converge to `Omega_a` by limit-point theory. Symmetric Hadamard pairing and
the growth condition leave no unrecorded real or linear Nevanlinna term.
No normalization mismatch was found. This is a source-chain and algebra
audit, not an independent proof of the explicit transform or the source's
canonical-system theorems. Full note:
`research/operators/B3-41-global-weyl-extension-audit.md`.

Completed next as PWPB-03.46: the explicit transform is derived term by
term, with sum/integral exchanges justified for `Im(z)>1/2`. See
`research/operators/B3-42-explicit-transform-derivation.md`. This remains a
manual audit of an existing theorem; it does not establish the source's
canonical-system or spectral-transform results.

Completed the certificate-transfer audit as PWPB-03.47; the evidence boundary
and exact variational implication are recorded in
`research/operators/B3-43-finite-certificate-transfer-boundary.md`.

Next: attempt a quantitative, frequency-localized trace bound for ACG's
semilocal tail condition (H2′), focusing on the polynomial-rate localized
estimate (66). The local trace-class limit and operator-norm obstruction are
already audited in B3-20–23; use the structured semilocal Hankel operator and
keep the transition/pole Schur-sign problem separate.

### PWPB-03.46 — Direct prime/archimedean transform derivation

The explicit formula's prime term transforms to `-z^(-2) zeta'(s)/zeta(s)`;
the rational/exponential term supplies `-z^(-2)(1/s+1/(s-1))`; and the
linear gamma plus Hurwitz–Lerch terms combine to
`-z^(-2)(psi(s/2)-log(pi))/2`, where `s=1/2-iz`. Together these are exactly
`-z^(-2) xi'(s)/xi(s)`. The prime sum is absolutely integrable after
termwise transform for `Im(z)>1/2`; the Lerch-series majorant is summable.
This is a hand-checked derivation of Suzuki Theorem 1.1(1), not an independent
new theorem or RH result. Full derivation and scope:
`research/operators/B3-42-explicit-transform-derivation.md`.

### PWPB-03.47 — Finite positivity certificates and the full Weil spectrum

At fixed `lambda`, positivity of every nested Fourier Galerkin compression
of the same closed Weil form is equivalent to positivity of the full form,
by the source-pinned `mu_N(lambda) downarrow mu(lambda)` limit in B3-24. A
single finite cutoff does not suffice; an explicit diagonal countermodel is
recorded in B3-43. The LXXV candidate certificate has no independently
verified evaluation of the ACG original Weil form, and no common-form
identity/dense-core map to ACG `QW_lambda` is established in Zetral. ACG
Hypothesis 3.4's lower bounds for both lowest parity sectors imply window
positivity and hence RH, per its Remark 3.5. This is a source/repository
scope audit, not a transfer theorem or an RH proof. Full note:
`research/operators/B3-43-finite-certificate-transfer-boundary.md`.

Next (PWPB-03.48) quantitative target: ACG's localized semilocal tail estimate (66),
which supplies the H2′ high-index/frequency control and is not implied by the
fixed-frequency trace-class convergence or the finite-prime operator-norm
approximation in B3-20–23.

### PWPB-03.48 — Real modulation probes for the H2′ tail (partial)

For a fixed real smooth test `f`, the two admissible real modulations
`f cos(T log u)` and `f sin(T log u)` combine by the parallelogram identity
into the symmetric moving average of the tail Mellin density at frequencies
`+T` and `-T`. H2′ therefore implies the exact averaged inequality (1) in
`research/operators/B3-44-H2prime-real-modulation-probe.md`, with right side
`epsilon_t(n0)(log(2+T)+O_f(1))`. Conversely, the pointwise majorant
`rho_tail(s)<=epsilon_t(n0)log(2+|s|)` suffices for H2′ but is stronger than
necessary. This provides a real-test criterion, not a quantitative estimate
for the actual arithmetic density. Next derive the needed decay in `n0`
uniformly over these frequency translates using the semilocal Hankel symbol;
otherwise give a source-structured counterexample to the proposed bound.

Bounded-input obstruction (2026-11-28): B3-48 constructs an abstract
orthogonal tail with `kappa_n ~ n^(-1/2)`, local trace `O(sqrt(R))` and
fixed-window tail convergence, but low-frequency tail mass only
`~1/log(n0)`. Thus those qualitative operator facts cannot imply a polynomial
tail-index rate by themselves. This is not a Hankel or arithmetic-local
factor model and does not refute H2′ for the actual semilocal operator. The
remaining target is specifically a quantitative low-frequency leakage bound
using the product `u=u_infinity product_p u_p`.

Two-sided singular-vector reduction (2026-11-28): B3-49 uses
`a_n=(e_n+U* g_n)/sqrt(2(1+kappa_n))` and positive-form Cauchy–Schwarz to
bound the localized negative-tail trace by right- and left-Hankel leakage
sums, each with first-moment weight `kappa_n`. Direct Hilbert–Schmidt
smoothing controls only the squared-angle moment `kappa_n^2`; the missing
half-power is not supplied by the current trace-class estimates. Next derive
the first-moment leakage for one prime factor, then track it through the
finite prime product. Details:
`research/operators/B3-49-two-sided-hankel-localization-reduction.md`.

Finite-symbol refinement (2026-11-28): B3-50 derives the exact exponential
moment of total log-shift coefficients and a finite truncation whose operator
error is at most `C_(S,theta) exp(-theta T)`, `0<theta<1/2`. Its explicit
constant depends on all primes in `S`, and operator-norm control still does
not imply first-moment singular-vector localization. The next step is a
single shifted archimedean Hankel block and its two-sided frequency leakage.
Details: `research/operators/B3-50-total-log-shift-tail-bound.md`.

Literature pivot (2026-11-28): targeted search found Suvlu's four-paper
*Weil form operators* draft series, including a separate conditional
finite-characteristic zero-retention route. B3-45 independently checks only
the elementary consequence that bounded complete characteristic mean forces
`N >= L^2/(128 pi^2 M)` for sufficiently large `L`; it does not verify the
series' main moving theorem. The ACG H2′ route remains active in the backlog,
but the finite constant-mode filtered-energy transfer is now audited as
PWPB-03.50 (B3-46). It yields a cutoff-uniform Gaussian bound without a
spectral-gap denominator, conditional on the source's finite identities and
the open bounded-mean/simple-even family premises. PWPB-03.51 (B3-47) then
checked the moving zero-retention proof in §7 and Appendix A.2–A.7; no gap
was found in the audited bridges, conditional on those same open premises.
Next resume PWPB-03.48's quantitative H2′ localization from the actual
semilocal tail. See
`literature/suvlu-2026-weil-operator-series.md`.

1. Pin and normalize the exact definition of `QW_lambda`, `A_lambda`,
   `theta_x`, `QW_lambda^N`, `xi_{lambda,N}`, `k_lambda`, and the Mellin
   transform in Connes §§6–7 and CCM Theorem 1.1. Check source version and
   every change of variable.
2. Determine whether `k_lambda` lies in `Dom(A_lambda)`; derive its Rayleigh
   quotient and a form/operator residual using the semilocal trace formula
   or the Weil prime/archimedean kernels. If only a form residual is
   available, use a form-domain residual estimate with explicit resolvent
   hypotheses.
3. Seek an independent lower bound on the next spectral level and prove
   even-sector simplicity / odd-sector exclusion. Attempt counterexamples
   from degeneracy and parity crossing before assuming the ground state.
4. Bound the boundary functional `delta_N` on the true ground vector and
   candidate uniformly; quantify how its normalization affects the entire
   transform and determinant.
5. Compare against Zetral's own positivity certificates and established
   prolate convergence results, distinguishing the exact Weil-form family
   from Suzuki's inverse-compression and Hedenmalm's theta pencil.

**Expected information gain:** Either obtain a rigorous route from the
prime-defined finite Weil forms to a Xi limit, or isolate the sharp missing
gap/residual/normalization estimate. The result would directly affect a
recent candidate operator construction.

**Dependencies:** Primary-source definitions and cited prolate asymptotics;
standard compact-resolvent spectral theory; semilocal trace-form identities.
No large data or expensive local numerical work is needed for the initial
audit. Use exact symbolic inequalities where feasible and leave large
experiments to the existing CI workflow.

**Acceptance:** A source-pinned, independently checked inequality for the
actual `QW_lambda` family that proves the needed ground-vector and
normalization convergence, hence local uniform transform/determinant
convergence on every compact subset of the target domain; or a rigorous
countermodel/gap showing why the cited available bounds do not imply it.
Numerical agreement alone does not pass. Convergence to Xi would imply RH
because every approximating determinant has real zeros, so no such
conclusion is claimed without the full proof.

**Verification:** Re-derive the residual and transform inequalities
independently; audit exact operator/form domains and parity sectors; check
the source version and use of the semilocal trace formula; preserve a compact
failure certificate if an implication is false. No Lean theorem, external
expert review, or independent reproduction of source numerics is claimed at
campaign opening.

## XCVII PWPB-03.52 — Exact scale law for one prime shift (2026-11-28)

For the `m`-th geometric mode of one local prime factor, exact support-
projection conjugation shows that the shifted archimedean Hankel block is
unitarily equivalent to the unshifted prolate block at scale
`T=t p^(m/2)`. The coefficient scales its singular values by
`(1-p^(-1))p^(-m/2)`, giving about `4t^2p^m` Slepian modes, consistent with
the source's isolated-block heuristic. This is a direct derivation, not a
new spectral correspondence. It does not control singular-vector mixing in
the sum over shifts, nor does ordinary Fourier concentration imply the
Mellin-band estimate required by H2′ for radialized profiles. The next
question is to prove or falsify a uniform Mellin-band bound across the moving
scale and then quantify stability under finite-prime summation. Details and
transform conventions are in
`research/operators/B3-51-single-prime-shift-prolate-scale.md`.

## XCVII PWPB-03.53 — Exact isolated-shift localization transfer (2026-11-28)

For one geometric shift, the Hankel block factors as
`Gamma_(t,m)=L Gamma_infinity(T) R` with `T=t p^(m/2)` and both `L,R`
unitary Mellin multipliers. The left and right singular vectors and the
companion `U* g` vector transform so that the normalized negative-pair vector
is carried by the same Mellin-multiplier unitary. It commutes with every
Mellin-band cutoff, giving exact equality of the localized tail traces for
all index cutoffs. This transfers ACG's explicitly stated fixed-scale
archimedean Mellin-tail result to each isolated block. The source tail is
imported; its dependence on the moving scale is not independently derived.
Summability over shifts and stability under operator addition remain open.
Full calculation: `research/operators/B3-52-exact-single-shift-localization-transfer.md`.

## XCVII PWPB-03.54 — Scale-explicit tail past the Slepian bulk (2026-11-28)

A rank-`N` Taylor approximation of the finite-Fourier kernel gives the
uniform singular-value bound `kappa_n(T)<=2T*2^(-(n-1))` once
`n-1>=4 pi e T^2`. Thus the Mellin-localized tail of one block is at most
`4T*2^(-n0)` for `n0>=4 pi e T^2`. The local geometric weight
`(1-p^-1)p^-m/2` cancels `T=t p^(m/2)`, so the sum of separately estimated
geometric shifts lying below the cutoff scale is exponentially small, with
only `O(log_p n0)` terms. This does not control shifts whose Slepian bulk is
above `n0`, and separate block estimates do not control the operator sum.
The Taylor bound is independently derived; its one-dimensional rectangle
form also appears in Azimifard arXiv:2610.09406v1, Lemma 2.3. Full derivation:
`research/operators/B3-53-scale-explicit-isolated-tail-bound.md`.
## XCVII PWPB-03.55 — One-prime isolated-shift tails are summable (2026-11-28)

B3-54 uses ACG Lemma 8.9/(65): the archimedean Mellin-localized negative
tail at any scale `T` is bounded by `C R^A`, uniformly in index cutoff.
Exact dilation conjugacy makes this bound independent of `T`; B3-52 transfers
it to each isolated shift. For one fixed prime, split geometric shifts at
`p^m=n0/(4 pi e t^2)`. B3-53 handles smaller scales with an exponentially
small bound; the ACG estimate and coefficient `p^-m/2` sum the larger scales
to `O(R^A t/sqrt(n0))`. The exceptional shift is exponentially small for
large `n0`. Thus the sum of the individual localized traces for all shifts
in one prime factor tends to zero with `n0`.

This closes the isolated one-prime summability gap only. It does not estimate
the negative trace of the sum of shifted blocks, because their singular
subspaces can mix. The dependence on the number of primes is not summable
uniformly from this estimate. Next seek a localized Schatten/trace stability
bound under block addition, and quantify finite-prime dependence. Derivation
and caveats: `research/operators/B3-54-prime-shift-tail-summability.md`.

## XCVII PWPB-03.56 — Localized negative trace can increase under addition (2026-11-28)

B3-55 constructs exact rational `3x3` self-adjoint matrices `A,B` and a
rank-one projection `M` such that `Tr(M A_-)=Tr(M B_-)=0`, but
`Tr(M(A+B)_-)=2(sqrt(33)-3)/(33+5sqrt(33))>0`. This disproves generic
subadditivity of localized negative trace, while ordinary unlocalized trace
subadditivity remains valid. The example is not an arithmetic model and does
not refute a special inequality for shared Mellin-shift structure. It shows
why the isolated bounds in B3-54 do not control the sum. Next target
cross-block low/high Mellin couplings or a verified positive Schur block.
Exact derivation: `research/operators/B3-55-localized-negative-trace-not-subadditive.md`.

## XCVII PWPB-03.57 — Coercive-block cross-term bound (2026-11-28)

B3-56 proves the finite-dimensional criterion
`Tr(T_-) <= Tr(A_-) + ||D^(-1/2)B||_HS^2` for a self-adjoint block matrix
`T=[[A,B*],[B,D]]` with `D>=delta I`. The low-block localized negative trace
is no larger than the total negative trace. Thus a positive low block reduces
the problem to a weighted Hilbert–Schmidt estimate on the low/high coupling,
avoiding the false localized subadditivity exposed in B3-55. ACG §8.6 has a
conditional Schur reduction under H2′; this criterion does not verify its
hypotheses for the actual semilocal form and may be circular if high-block
positivity already assumes H2′. Infinite-dimensional domains and trace-class
extension are also open. Next check whether the source's form decomposition
can independently supply coercivity and coupling bounds. Full proof and
scope: `research/operators/B3-56-coercive-block-negative-trace-bound.md`.

## XCVII PWPB-03.58 — Coarse full-form Schur cutoff without H2′ (2026-11-28)

B3-57 applies the coercive-block trace argument to the full windowed Weil
form. Restricting the logarithmic Sobolev form `Lambda` to the log-window
gives a compact-resolvent operator; a sharpened band-projection argument
bounds its spectral subspace below `r` by
`(2 log(lambda)/pi)(r+1)exp(r+1)`. ACG Lemma 8.13
implies coercivity of the complementary Weil-form block once
`r=C0 lambda+delta`. The remaining low/high coupling is bounded because the
Weil form differs from `Lambda` by an `O(lambda)` bounded operator. The
infinite-dimensional Schur trace argument then reduces the total negative
trace to a finite low-block negative trace plus a weighted HS coupling term.
This does not assume H2′, but yields only an exponential-dimensional bound;
the low-block sign and sharper coupling remain unresolved. It neither proves
positivity nor supplies a polynomial conditioning regime. Derivation:
`research/operators/B3-57-windowed-form-coarse-schur-cutoff.md`.

## XCVII PWPB-03.59 — Optimized low-mode count in the Schur cutoff (2026-11-28)

Refined the band-projection argument in B3-57. Taking `R=exp(r+1)` leaves
at least `1/(r+1)` of each unit vector with logarithmic-form energy at most
`r` in that Fourier band. The exact band-trace bound then gives
`dim(E_r)<= (2 log(lambda)/pi)(r+1)exp(r+1)`, improving the earlier
`O(log(lambda)exp(2r))` estimate to `O(log(lambda)r exp(r))`. The Schur
coupling bound improves accordingly, but remains exponential when
`r=C0 lambda+delta`; no polynomial-size reduction or positivity follows.
This is an optimization of a coarse estimate, not a lower bound on the true
dimension. Details: `research/operators/B3-57-windowed-form-coarse-schur-cutoff.md`.

## XCVII PWPB-03.60 — Multiplicity lift from the arithmetic Weyl measure (2026-11-28)

For a positive discrete atomic measure with positive integer masses and
`sum_x w_x/(1+x^2)<infinity`, the direct sum of fibers `C^(w_x)` with
multiplication by `x` is self-adjoint with compact resolvent and geometric
multiplicities `w_x`. Applying this standard construction to Suzuki's
RH-conditional arithmetic Weyl measure gives a multiplicity-sensitive
operator and `det_2(I-z H_xi^(-1))=xi(1/2-iz)/xi(1/2)`; the zero-free
center and convergence follow from the eta identity and the cited Herglotz
integrability. This resolves the scalar measure-weight/eigenspace-multiplicity
mismatch only by post-processing an already identified spectral measure. It
does not give a local differential extension, prove RH, independently audit
Suzuki's analytic chain, or establish novelty. The next operator question is
an intrinsic arithmetic multiplicity lift with a noncircular Weyl/spectral
correspondence. Detailed proof, assumptions, and scope:
`research/operators/B3-58-arithmetic-measure-multiplicity-lift.md`.

## XCVII PWPB-03.61 — Local spectral weights converge to zero multiplicities (2026-11-28)

Refreshed and read the full revised Skelly preprint, not just its previously
recorded abstract. Under its Hypothesis 1.5 (finitely many off-line zeros;
RH is the zero case), Theorems 1.6–1.7 prove that each zero has an associated
eventually simple local eigenvalue branch `t_a(zeta)->zeta` and its local
reciprocal-norm spectral weight tends to the analytic multiplicity
`m_zeta`. The paper's proof uses an isometric embedding into a global
Pontryagin space and convergence of transported Riesz projections; the
projection-to-weight implication was independently checked in B3-59, while
those global hypotheses remain imported. This is stronger than vague
cluster-mass convergence for the `lambda=0` family. At finite `a` the
eigenspaces remain one-dimensional: the multiplicity is a limiting weight,
not geometric multiplicity. This is a material local approximation to the
B3-58 limiting measure, but not a single local multiplicity-`m_zeta`
differential operator or an independent RH proof. The result is prior art;
no novelty claim. The edge quotient QER01–04 uses `lambda=lambda_1(a)` and
cannot inherit this pointwise result without identifying its operator and
metric with Skelly's `lambda=0` family. Detailed scope and checked argument:
`research/operators/B3-59-local-spectral-weight-multiplicity-audit.md`.

## XCVII PWPB-03.62 — Compression limit misses multiplicity fibers (2026-11-28)

Checked the local-operator convergence mechanism after its hypotheses are
assumed. Uniformly bounded nested Pontryagin projections converge strongly;
Hilbert–Schmidt compactness of the global inverse upgrades the compressed
inverse convergence to Hilbert–Schmidt/operator norm; compact spectral
perturbation then gives rank-one Riesz projections at each distinct zero.
This is valid conditional on the zero-indexed global sampling embedding.
Under RH, the scalar global space `ell^2(Gamma,m)` embeds diagonally into the
B3-58 fiber operator `direct_sum_gamma C^(m_gamma)`. Its image has only one
direction per fiber, and every local compression remains in that image.
Thus when a multiple zero exists, the extra `m_gamma-1` eigendirections are
unreached and rank-one Riesz projections cannot converge to the rank-`m_gamma`
projection. The existing compression cannot by itself produce B3-58's full
geometric multiplicity lift; a different local channel/matrix construction
would be required. This is a conditional structural limitation, not a
no-go theorem for other constructions. Moreover, the common global space is
defined from zeros and multiplicities, so the proof is not a zero-independent
construction of its limit. Details:
`research/operators/B3-60-compression-limit-and-fiber-obstruction.md`.

Next investigate the zero-independent de Branges/canonical-system direct
limit from prime-side kernels for common maps or extra multiplicity channels.
Acceptance requires explicit operator domains, compatible embeddings and a
topology; scalar spectral-measure convergence alone does not establish it.

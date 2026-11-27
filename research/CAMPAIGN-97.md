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

### Falsification check

Small Rayleigh energy error does not imply eigenvector convergence without a
gap. For `A_n=diag(0,d_n)` with `d_n->0` and
`v_n=sqrt(1-e_n²)e_0+e_n e_1`, where `e_n->0` arbitrarily slowly,
`<A_n v_n,v_n>=d_n e_n²->0` while
`dist(v_n,C e_0)=e_n`. The residual-to-gap ratio equals
`e_n sqrt(1-e_n²)`, correctly retaining the missing information. This is
an abstract countermodel, not a counterexample about `QW_lambda`.

## Backlog, dependencies, and experiments

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

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

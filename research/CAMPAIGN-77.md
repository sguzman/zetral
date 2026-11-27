# Campaign LXXVII — Audit of the formally checked RH proof claim

Date opened: 2026-11-26. Status: ACTIVE. This is a research-direction pivot,
not a closure of LXXVI or B1 and not a claim by Zetral to have independently
proved RH.

## Precise question

What exact mathematical and formal result is established by Levent Alpöge's
November 2026 Lean development, which parts have independent machine-check
evidence, and what remains for an independently understandable mathematical
audit? In particular, can one critical step in the classical reduction to
the main inequality be reconstructed and falsification-tested from pinned
sources without downloading or building the full large archive locally?

## Current evidence and status (source review, not Zetral verification)

1. On 2026-11-21, the Lean FRO and Mathlib Initiative jointly stated that
   they had full confidence in the proof and certified the RH statement and
   proof. Their published rationale reports: the statement matches Mathlib's
   RH definition, the source compiles, and exported proof terms were accepted
   by Lean's kernel and several independent checkers. Primary source:
   [joint statement](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/).
2. The independent verification repository reports that its build, axiom
   inspection and checker matrix passed on the released artifact; its
   comparator process was interrupted by shared-server memory exhaustion.
   This is an external report we have read, not a Zetral replay:
   [verification record](https://github.com/Hertaspace/alpoge-rh-lean-verification).
3. The community-maintained readable development is a separate, condensed
   representation. Its README says the current main branch was switched to
   the readable edition on 2026-11-25. An issue opened 2026-11-26 reports
   that a later kernel re-check on that moving branch fails after a toolchain
   change; that issue does not by itself refute the original frozen export or
   the Lean FRO's checks. Track the exact commit and checker in any follow-up:
   [community repository](https://github.com/leanprover-community/riemann-hypothesis),
   [kernel-recheck issue #7560](https://github.com/leanprover-community/riemann-hypothesis/issues/7560).
4. A public human-readable guide describes itself as a work in progress. It
   reduces the RH argument to a main inequality (M) and thirteen classical
   hypotheses, and explicitly says (M) is not proved in that guide. This is
   evidence of an exposition/reconstruction gap, not evidence of a formal
   gap in the Lean proof:
   [Rubinstein's guide and status](https://www.math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/).
5. The exact theorem statements in the maintained repository include Mathlib's
   `RiemannHypothesis` and several Dirichlet L-function claims. Statement
   correspondence and proof-term checking are distinct from a human audit of
   the mathematical construction. The maintained README documents its
   comparator and checker intent; pin a commit before relying on it.

## Scope and evidence labels

- **Externally reported formal result:** the joint Lean/Mathlib statement
  asserts the proof has been checked. Zetral has not re-run those checks.
- **Human mathematical verification:** incomplete in the cited readable
  guide; the proof's central mathematical argument remains to be reconstructed
  and scrutinized independently.
- **Moving-branch regression:** reported for the later maintained branch and
  toolchain, not yet independently reproduced here and not conflated with the
  frozen released proof.
- **Zetral results:** LXXVI's direct positive 2-by-2 block, B1's endpoint
  asymptotics, and prior conditional spectral results remain valid within
  their recorded scopes. None served as input to, or verifies, the Alpöge
  proof.

## Methods and falsification plan

1. Pin the announced proof artifact, the readable edition, its toolchain and
   Mathlib dependencies by immutable commit/hash. Record source provenance;
   do not download the 17-million-line archive locally.
2. Read the human guide's exact definitions and the 13 hypotheses feeding
   (M). Trace one mathematically central, finite-sized hypothesis to the
   corresponding Lean declaration, its imports and the statement used by
   the final theorem. Independently derive the classical implication or find
   a counterexample to the inference under its stated assumptions.
3. Compare the exact final theorem statement to Mathlib's RH definition from
   pinned primary source. Distinguish the zeta RH theorem from the broader
   Dirichlet L-function statements.
4. Treat external build/checker reports as evidence about their specific
   artifact and commit. If computational replay is warranted, use a bounded
   free GitHub Actions workflow only after determining that the source/cache
   is accessible without secrets or excessive artifacts; no local large build.
5. Preserve discrepancies, hidden hypotheses, and dead ends. Do not infer
   validity or invalidity from code size, a successful ordinary build, an
   isolated moving-branch failure, or lack of a readable paper.

## Acceptance criteria

A meaningful checkpoint is either (a) a scoped independent proof audit of a
critical bridge with exact assumptions and a successful falsification attempt,
or (b) a reproducible formal/source discrepancy identifying a precise theorem,
statement, dependency or checker failure. The campaign is not complete merely
because external communities report formal checks. Full mission completion
still requires the owner's requested multi-route review, independent Zetral
audits, and a comprehensive report; do not use this campaign to issue an
overall completion claim.

## First checkpoint — source-status audit

The source review establishes a high-confidence community-reported formal
proof result and an unfinished human-readable reconstruction. The original
proof and the maintained condensed branch must be kept separate. Next inspect
the guide's central inequality and exact Lean dependency at a pinned revision;
the lead has not yet independently derived (M) or rechecked any Lean proof
term. In parallel, LXXVI's original-form mapping and B1's uniform remainder
remain open.

## RHA-01 — Independent derivation audit of Suzuki's kernel criterion

**Question.** Does the proof of the RKHS diagonal criterion actually follow
from the local form bounds and the cited threshold theorem, with the stated
quantifiers and no assumption that a finite compression controls the full
operator?

**Source review.** Compared Suzuki, arXiv:2611.33001v1, §2.1, Theorem 1.3,
Corollary 3.1 and §3 proof with Suzuki, arXiv:2606.09096v4, Theorems 1.3 and
1.4 (especially its equivalence between RH failure and some negative
`lambda_a`). The second source explicitly gives continuity of `lambda_a`,
strict positivity for sufficiently small `a`, and the negative-value
criterion when RH fails. The first source defines `lambda_a=inf sigma(A_a)`;
zero extension from `(-a,a)` to `(-b,b)` preserves the form and L2 norm, so
`lambda_a >= lambda_b` for `a<b`.

**Independent proof check (internal derivation).** Under RH, Weil's criterion
gives `Q_W^R >= 0`; the nondegeneracy assertion is imported from Yoshida
(1992, Theorem 2, as cited by Suzuki v1). The local form operator has compact
resolvent, so nonnegative spectrum and zero kernel imply `lambda_R>0`. For
`0<a<R`, extension by zero gives `Q_W^a(u,u) >= lambda_R ||u||_2^2`. For
real `t`, Cauchy–Schwarz on `(-a,a)` gives
`|u_hat(t)|^2 <= 2a ||u||_2^2 <= (2R/lambda_R) Q_W^a(u,u)`. The test functions
are a form core, so the inequality extends to the completion. The RKHS
evaluation norm identity then yields `J_a(t,t) <= 2R/lambda_R` uniformly in
`a<R,t`.

Conversely, if RH fails, the cited v4 result supplies a negative `lambda_b`;
continuity and small-window positivity give a first `a_*` with `lambda_(a_*)=0`
and `lambda_a>0` below it. Compact resolvent gives a nonzero zero-eigenvector
`u_*`. Approximate it in the form norm by core functions `u_n`; each has
support in some `(-a_n,a_n)` with `a_n<a_*`. A uniform kernel bound for
`R=a_*` forces `u_hat_n(t)->0` for each real `t`, while L2 convergence on the
bounded interval implies uniform convergence of the Fourier transforms to
`u_hat_*(t)`. Thus `u_hat_*` vanishes on the real axis, contradicting Fourier
injectivity. This confirms the criterion's proof structure and quantifiers
conditional on the named source inputs.

**Falsification and limits.** The derivation uses the full operator lower
bound `lambda_R`, not any finite principal block. No direction transfers the
LXXV/LXXVI matrix certificate to `lambda_R`. The RH-implies-nondegeneracy
input was not independently re-proved from Yoshida's original text, and the
continuity/negative-value theorem was checked against Suzuki v4, not
re-proved from first principles. The result is a scoped audit of Suzuki's
criterion, not a formalized proof or an audit of the Alpöge RH artifact.

**Disposition.** RHA-01 passes as an internal derivation with imported
assumptions explicitly isolated. RHA-02 below pins the readable source and
checks the finite cancellation and exponent bookkeeping. Next audit the
analytic zero-exclusion criterion. Do not start a full local build or fetch
the original 17-million-line archive.

## RHA-02 — Main-inequality cancellation and exponent transfer

**Pinned object.** The readable edition is `lsernau/grh-lean` commit
`72fead102f663d5c7a407964a13dc0cf9d977207`, Lean 4.35.0 with Mathlib commit
`56a00585` (repository README). The exact `star_inequality` declaration is in
`grh/src/New/Reduction/MainInequality.lean`; the exponent transfer is in
`grh/src/New/Reduction/OneSidedBound.lean`. Source links:
[main inequality](https://github.com/lsernau/grh-lean/blob/72fead102f663d5c7a407964a13dc0cf9d977207/grh/src/New/Reduction/MainInequality.lean),
[one-sided bound](https://github.com/lsernau/grh-lean/blob/72fead102f663d5c7a407964a13dc0cf9d977207/grh/src/New/Reduction/OneSidedBound.lean),
[reading guide](https://github.com/lsernau/grh-lean/blob/72fead102f663d5c7a407964a13dc0cf9d977207/grh/GUIDE.md).

The guide identifies the route `enough_forms` + `span_short_integralRamified_eq_top`
+ `indexLe_normalizedPoincare` + `integral_forms_long` + Hadamard/covolume
control -> `star_inequality` -> one-sided prime-remainder bound ->
`LFunction_ne_zero_of_primeRemainder_le` -> RH/GRH. It reports the exact
main theorem as `D.m * D.totalRemainder <= D.f * D.a * D.logB^5` under the
parameter constraints in the file.

**Independent algebra check.** Set `d=targetDim`, `n=family size`, `M=mainAmount`,
`r=totalRemainder`, `L=f*a*logB^4`, and `I=indexPerDim`. The code's lower
comparison is
`d*(M-3L) <= n*(M-m*r+L)+2*d*I`, and its upper comparison is
`n*(M+L) <= d*(M+L)` because `n<=d` and `M+L>=0`. Subtracting gives
`n*m*r <= d*(4L+2I)`. The filling estimate gives
`n >= (1-4/b^2)d`; the stored guard `4/b^2 <= 1/2` therefore yields
`d <= 2n`. With the positive error allowance `E=4L+2I`, this implies
`m*r <= 2E`. The remaining bound `|2E| <= f*a*logB^5` uses the encoded
parameter/log estimates; its order is consistent with
`I=10 log(1+2b^2)*f*a*logB^3` and large `logB`, but the whole `HasLogBound`
calculation was not independently reconstructed from the data definitions.
This checks the cancellation algebra, not the geometric inputs A/B/C.

**Independent exponent check.** From the file's intermediate inequality
`R(x) <= phi(q0)*logB^6/m + |R(x1)| + logB*|R_1(x1)|`, use
`logB<=2*x^epsilon`, `m>=sqrt(x)`, and both remainder tails `<=x^-2` to get
`R(x) <= (64 phi(q0)+3)x^(-1/2+6 epsilon)`. For real `y>=2`, the floor
correction is at most `26/y`; since `floor(y)>=y/2`, for `-1<=t<=0` one has
`floor(y)^t<=2y^t`. Given target `epsilon>0`, take
`delta=min(1/200,epsilon/7)` and `t=-1/2+6delta`. Then `t∈[-1,0]`,
`y^-1<=y^t`, and eventually `2C+26<=y^delta`; hence the real-variable bound
is `R(y)<=(2C+26)y^t<=y^(-1/2+7delta)<=y^(-1/2+epsilon)`. This matches the
exponent and constant bookkeeping in `OneSidedBound`.

**Disposition and remaining gap.** The finite algebraic cancellation and
exponent conversion pass this manual audit at the pinned source revision.
Still unaudited are the derivations of the geometric A/B/C estimates, the
parameter-dependent `HasLogBound` dominance, and especially the criterion
`LFunction_ne_zero_of_primeRemainder_le` that turns the one-sided bound into
zero exclusion. No independent Lean build or proof-term check was run. Next
audit that analytic criterion and its hypotheses before deciding whether to
attack a geometric input theorem.

## RHA-03 — One-sided prime-remainder zero exclusion

Pinned source files: `New/Reduction/Zeros/Criterion.lean`,
`Lib/Analytic/Landau.lean`, `New/Reduction/Zeros/PrimeError.lean`, and
`Lib/Analytic/QuadraticTwist.lean` at
`lsernau/grh-lean@72fead102f663d5c7a407964a13dc0cf9d977207`.

The criterion assumes `8 | q₀`, `d₀ ≡ 7 (mod 8)`, `(d₀,q₀)=1`,
`β>1/2`, and, for every prime in that class, the eventual one-sided bound
`R_d,q₀(x) ≤ x^(β−1)`. It concludes `L(ρ,ψ)≠0` for all characters modulo
`q₀` when `ρ≠1` and `Re ρ>β`.

**Manual implication audit.** For fixed target `ρ`, the quadratic-twist
selection lemma chooses a prime in the class whose twists have no zeros in
`β≤Re s`, `|Im s|≤|Im ρ|`. The prime-remainder transform has simple-pole
residue equal to the sum of untwisted entire-L orders minus twisted orders,
divided by `φ(q₀)s(1−s)`. In the target rectangle the twist orders vanish,
leaving the nonnegative integer sum `n(s)` of untwisted orders. At real
`x>β`, the residue has nonnegative real part: its denominator is positive
for `β<x<1`; for `x≥1`, every entire-L order is zero. Substituting
`x=e^v` transfers the one-sided bound to Landau's lemma's hypothesis
`E(v)≤exp((β−1)v)`. Landau then forces the residue at `ρ` to vanish.
Since `Re ρ>β>1/2`, `ρ` is neither 0 nor 1; the residue denominator is
nonzero, so `n(ρ)=0`. Every summand is a nonnegative order, hence the target
order vanishes. The principal-character normalization `(s−1)L(s,χ₀)` is
removed using `ρ≠1`.

This checks the displayed implication, sign, and normalization bookkeeping
against the pinned Lean source. It does not independently reprove the
quantitative zero-density estimate that selects a good twist prime, its
zero-counting and analytic inputs, the prime-class divergence argument, or
the prime-remainder transform derivation. No local Lean rebuild or axiom
audit was performed. The result is conditional on the stated uniform-in-prime
remainder bound, which Zetral has not established. No Zetral RH proof is
claimed.

## RHA-04 — Quadratic-twist prime selection (partial dependency audit)

The pinned source defines a bad prime by the existence of a zero for some
character in the closed box `Re s ≥ β`, `|Im s| ≤ H`. For primitive twist
character of conductor `M`, `exists_card_zero_quadTwist_le` applies the
per-zero lower bound `J(d,T)>T^(2δ)` and the mean estimate
`Σ_{0<d≤T²}J(d,T)≤C T^(2+δ)`, yielding at most `C T^(2−δ)` bad primes.
The mean estimate is reduced by Cauchy–Schwarz and integration to a
pointwise second moment for theta series twisted by Jacobi symbols. The
source says that second moment expands into pairs, with square odd parts
bounded trivially and nonsquare pairs bounded by Pólya–Vinogradov.

The lift from modulus `N` to its finitely many primitive inducing characters
is coherent: at `T=√(NX)`, `M d≤T²` holds for every `d≤X` because `M|N`;
the nonvanishing Euler factors preserve a zero when changing levels. The
fixed-modulus count is therefore `O(X^(1−δ/2))`. If every prime of an
invertible class were bad, the bound implies convergence of the weighted
prime series `Σ log(p)/p` by partial summation (the exponent is strictly
below one), contradicting its divergence in that class. This supports the
prime-selection quantifiers and exponent transfer in RHA-03.

**Audit boundary.** This is an independent algebra/quantifier check of the
counting scaffold, not a proof of the two analytic inputs. The key theorem
`eventually_rpow_lt_thetaTailIntegral` relies on a three-lines argument and
the Gaussian Mellin factor's positive minimum on a compact rectangle; the
key mean-square theorem `sum_sq_thetaSeries_jacobiSym_le` relies on a
uniformly summable pair majorant with the Pólya–Vinogradov cancellation
estimate. Neither has yet been independently rederived or checked against
all imported lemmas. The next task is to audit that second-moment estimate,
including its square/nonsquare split and uniformity for `u≥1/T`.

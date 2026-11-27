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

**RHA-04 second-moment derivation.** Let `r=ordCompl[2](nm)`. If `r` is a
square, the character sum over `v≤T²` is bounded trivially by `T²`; Gaussian
decay with `A=1/2+δ` bounds the remaining factor by
`C u^(−2δ)(nm)^(−1/2−δ)`. On pairs with square odd part, write
`nm=l²` or `2l²`. For fixed `k∈{1,2}`, `knm` square implies a
parameterization `kn=a b²`, `m=a c²` with `a,b,c≥1`. Therefore
`(knm)^(−σ)=(abc)^(−2σ)` for `σ=1/2+δ`; summing this weight over all
triples gives a finite majorant because `2σ>1`. This verifies the summability
mechanism used for the square branch, including the factor `2^σ` when
`nm=2l²`.

If `r` is not a square, it is an odd positive nonsquare. Its Jacobi symbol is
a nonprincipal Dirichlet character modulo `r`, so Pólya–Vinogradov gives
`|Σ_{v≤T²}(-v/r)|≤2√r(1+log r)`. The elementary inequality
`1+log n ≤ (1+2/δ)n^(δ/2)` for `n≥1` weakens this to
`2(1+2/δ)(nm)^(1/2+δ/2)`. Gaussian decay with `A=3/2+δ` then leaves
the pair weight `(nm)^(−1−δ/2)` and the factor
`u^(−2)u^(−2δ)`. Since `u≥1/T`, `u^(−2)≤T²`. The pair weights are
summable because `Σ n^(−1−δ/2)` converges. Thus both branches give one
summable majorant independent of `T,u,α`; expanding the theta-series square
and applying Tonelli/HasSum justifies the second-moment bound. Cauchy–Schwarz
and integrating `T²u^(−δ)/u` from `1/T` to infinity produce the stated
`O(T^(2+δ))` total-integral estimate.

This independent derivation checks the exponent budget, edge case `r=1`
(which belongs to the square branch), uniform range `u≥1/T`, and absolute
summability architecture against the source. It treats Pólya–Vinogradov,
Gaussian Mellin/weight identities, and the countable-sum interchange as
standard imported results rather than reproving them. The per-zero estimate
is separately audited below, with its functional-equation and three-lines
inputs retained as explicit dependencies.

**RHA-04 per-zero estimate.** The pinned `three_lines_bound_of_LFunction_eq_zero`
uses `Ψ(z)=Γ_j(z)L(z,χ)𝓜(z,T)−Γ_j(z)^2`. On `Re z=1/2`, the functional-equation
folding of the theta integral bounds `|Γ_jL|≤2J`; the mollifier satisfies
`|𝓜|≤J`. Under `J≤T^(2δ)`, `T≥1`, and boundedness of `Γ_j` in the strip,
these give `|Ψ|≤C T^(4δ)`. On `Re z=2`, the truncated Mellin identity
approximates `Γ_j/L` with error `O(1/T)`; together with `|Γ_jL|≤3`, this gives
`|Ψ|≤C/T`. Three-lines interpolation across width `3/2`, at a zero with
`σ≥1/2+9δ`, uses weight `(σ−1/2)/(3/2)≥6δ`. Its exponent is
`4δ(1−w)−w ≤ −2δ`, hence `|Γ_j(s)|²=|Ψ(s)|≤C T^(−2δ)`.
For a zero, `1/2≤σ≤1` (zeros are absent for `σ≥1`), and bounded height puts
`s` in a compact rectangle where the Gaussian Mellin factor has a positive
minimum `c`. Choosing `T` so `C T^(−2δ)<c²` is a contradiction. Thus every
zero in the specified box forces `J>T^(2δ)`.

This closes the algebraic and quantifier audit of RHA-04's selection scaffold,
conditional on the pinned functional-equation folding, mollifier approximation,
Gaussian Mellin nonvanishing/compact minimum, and three-lines theorem. Those
analytic lemmas and the Lean proof term were not independently re-proved or
rechecked by a kernel build. The investigation is accepted at this scoped
manual-audit level; it is not a complete independent verification of the
formal proof. RHA-05 subsequently audited the final parameter dominance, and
RHA-06 audited the short-span to ramified-range reduction; the underlying
short-basis estimate is the next geometric input.

## RHA-05 — Main-inequality parameter dominance

At the pinned source, `star_inequality` uses `D.le_of_hasLogBound` for two
final scalar claims: `4/b²≤1/2` and `|2 err|≤f a (log b)^5`, where
`err=4 loss+2 indexPerDim`, `loss=f a L^4`,
`indexPerDim=10 log(1+2b²) f a L^3`, and `L=log b`.

**Independent reduction.** The scale constraints give `L>100` without using
the encoded `HasLogBound` engine: the size lemma has `m≥10000`, while
`m≤2 exp(logX/2)`, so `logX>2`; then `logX₁≥10^6 logX` and
`L≥10^6 logX₁`. In particular `L>100`. Since `b=e^L`,
`log(1+2b²)≤log 3+2L<2+2L`. Dividing the desired absolute error bound by
the positive factor `f a L³` reduces it to
`8L+40 log(1+2b²)≤L²`; the left side is less than `88L+80`, which is at
most `L²` for `L≥100`. Also `4/b²=4e^(−2L)≤1/2` for `L≥100`. These recover
the two final inequalities used after cancellation and filling.

This independently checks the parameter-dominance arithmetic and supplies a
simple explicit sufficient threshold, rather than replaying instance search.
It relies on the pinned scale inequalities and lower bound `m≥10000`; it does
not audit the derivation of those scale facts from existence of admissible
data. The dominant unresolved work is now geometric: audit one of the
main-inequality inputs, beginning with the span/dimension statement
`span_short_integralRamified_eq_top`.

## RHA-06 — Short forms span the ramified source subspace

**Question.** Does `span_isShort_ramifiedSourceForms_eq_top` produce a
spanning family at cutoff `exp(errorUnit)`, under the source-space and
ramification definitions used downstream?

**Pinned evidence.** The readable source is pinned at
[`lsernau/grh-lean@72fead102f663d5c7a407964a13dc0cf9d977207`,
`ShortColumns.lean`](https://github.com/lsernau/grh-lean/blob/72fead102f663d5c7a407964a13dc0cf9d977207/grh/src/New/UpperBound/Size/ShortColumns.lean).
`IsShort B` requires p-adic integrality at every prime and
`weylNormSq (σ ∘ φ.val g) ≤ B` for every complex automorphism `σ` and every
finite adelic argument `g` (lines 133–137). The bound is globally quantified,
not only at the identity or for the un-conjugated form.

**Independent source-level derivation.** The generic lemma
`span_isShort_eq_top` spans `D.SourceForm` with short forms at
`B=exp(errorUnit)/4^f` (lines 912–928). Its call supplies the free-level
condition, conductor-in-different hypothesis, the box-count estimate
`boxes ≤ f*a`, and the scalar inequality from `D.le_of_hasLogBound`. The
generic proof reduces to delta forms on free-level cosets, constructs short
lattice bases, and uses Weyl evaluation vectors; the full
`exists_short_basis_stdSpace` derivation and Hadamard estimate remain
unaudited.

Each factor `(1-z_w)` maps a `B`-short form to a `4B`-short form. The squared
norm estimate is the parallelogram inequality for the difference of the
form and its translate; p-adic integrality is preserved because the
translating scalar lies in the integral level. Iterating over `f` places
gives `4^f B=exp(errorUnit)` (lines 894–906 and `card_piNPlaces=f`). The
ramified subspace is exactly the range of the product `∏(1-z_w)` (lines
686–705). Under `T^(N−1)=1` in characteristic zero, vanishing of the sum of
the first `N−1` powers is equivalent to belonging to `range(1−T)`; the
finite commuting family gives the range identity for the product. Thus the
image of the spanning short source set spans the full ramified range, and
the image map preserves the claimed cutoff. The final theorem packages these
steps (lines 929–941).

**Falsification and boundary.** A possible cutoff error would be to confuse
norm with squared norm, which would alter the factor per place; the source's
`IsShort` and parallelogram estimate both use squared norm, so the factor is
`4`. The image-of-span step is valid because the image map is linear and the
source set spans the whole source space. I found no counterexample to this
reduction under its stated hypotheses. This remains a manual source audit,
not a Lean build. The lattice-short-basis estimate, its number-field
geometry, and admissible-data scale derivation are still outside the audit.
RHA-06 is accepted only for the short-span-to-ramified-range reduction. Next
inspect the short-basis existence lemma and explicit Hadamard constants.

## RHA-07 — Geometry-of-numbers short basis and constant audit

**Question.** Do the short-basis construction and Weyl-norm estimate supply
the explicit uniform bound used by RHA-06, and do the constants match?

**Pinned sources.** The proof is pinned at the same readable commit:
[`FirstMinimumShortBases.lean`](https://github.com/lsernau/grh-lean/blob/72fead102f663d5c7a407964a13dc0cf9d977207/grh/src/Lib/Adelic/Reduction/FirstMinimumShortBases.lean)
and [`ShortColumns.lean`](https://github.com/lsernau/grh-lean/blob/72fead102f663d5c7a407964a13dc0cf9d977207/grh/src/New/UpperBound/Size/ShortColumns.lean).
The source explicitly identifies the covering-radius argument as a weak
transference bound and cites Lagarias–Lenstra–Schnorr (1990) and Banaszczyk
(1993) as related geometry-of-numbers results; no novelty is claimed.

**Constant derivation.** Put `m=2fn`, the real dimension of the archimedean
coordinate space, and let `λ` be the first minimum cut off at 1. The source
proves that every nonzero vector in the dual of the scaled lattice
`(2/N)·baseLattice` has norm at least `λ`, using integrality of the pairing,
trace-dual recovery over the CM field, and the hypothesis `N∈different(E)`.
Weak transference then gives covering radius at most `m²/λ=(2fn)²/λ`.
The geometric lemma says a set covering every point within `r` has its
vectors of norm at most `3r` spanning the real space: if a nonzero vector
were orthogonal to all such short vectors, take a vector of length `2r` in
that direction; a covering point lies within `r`, has length at most `3r`,
and is orthogonal to the direction, making its distance at least `2r`, a
contradiction. Rescaling from `(2/N)·baseLattice` gives a spanning set of
original lattice vectors of norm at most
`(N/2)·3·(2fn)²/λ = 6N(fn)²/λ`. A full spanning set contains an `E`-basis,
so the columns can be chosen as a matrix in `GL_n(E)`.

At the standard definite space moved by `g`, the source proves `λ=1`:
an integral vector shorter than 1 would be isotropic, impossible for a
definite form. The resulting basis is integral after applying `g⁻¹` and has
every complex-embedding entry bounded by `R=6N(fn)²`. This is exactly
`shortBasisConst E n N` in the source. In `weylNormSq_det_smul_weylRep_mulVec_weylEval_le`, each determinant contribution across the `f` places costs exponent `6fn`, while the Schur/Weyl contribution costs exponent `6·boxes`; their product is at most `R^(6(fn+boxes))`. The input `M≥fn+boxes` yields `R^(6M)`. The specialized call uses `N=q₁d`, `n=k`, and `M= f k+f a`, with the box count at most `f a`. Its `HasLogBound` inequality includes the compensating `4^f` from RHA-06.

**Falsification and assumptions.** I checked the dimension conversion, the
covering-to-spanning `3r` argument, the rescaling factor `N/2`, and the
determinant-plus-Schur exponent count. The `n=0` branch is handled separately;
for nonempty rank the first minimum is positive by discreteness, and in the
standard definite space it equals 1. The dual-lattice estimate depends on
the number-field trace/codifferent lemmas (including `N∈different(E)`), which
were inspected in the pinned proof but not independently re-proved from
algebraic number theory. Weak transference is an imported general
geometry-of-numbers argument; the source itself notes stronger known
transference bounds. No counterexample to the stated estimate was found.
This is a scoped manual derivation, not a kernel build, axiom audit, or
independent reconstruction of all number-field infrastructure. RHA-07 is
accepted at that scope. Next pivot to the analytic prime-remainder transform,
whose derivation remains the strongest open link in the zero-exclusion route.

## RHA-08 — Prime-remainder Laplace transform

**Question.** Does the pinned source derive the Laplace transform and zero
residues with the correct character normalization and multiplicities?

**Pinned source and prior art.** The proof is in
[`PrimeError.lean` at the readable commit](https://github.com/lsernau/grh-lean/blob/72fead102f663d5c7a407964a13dc0cf9d977207/grh/src/New/Reduction/Zeros/PrimeError.lean).
Its source comment identifies character orthogonality and partial summation
as the classical method and cites Davenport, *Multiplicative Number Theory*.
No novelty is claimed.

**Independent derivation.** Write
`λ(n)=Λ(n)·1_{n≡1 mod q}·(1−χ_d(n))`, which is nonnegative for prime `d`.
Character orthogonality writes its Dirichlet series as the mean over
characters `ψ mod q` of the difference of the `ψ` and `ψχ_d` von Mangoldt
series. In `Re(s)>1`, the Euler-product identity
`Σ ψ(n)Λ(n)n^(−s)=−L'/L(s,ψ)` gives the twisted-minus-untwisted logarithmic
derivative. Replacing each L-function by `E_ψ=entireL(ψ)` removes the
principal pole: the principal character contributes `1/(s−1)` from the
Euler product, while the `−1` in the definition of `G_q` adjusts the
regular part. The result is exactly
`Σ λ(n)n^(−s)=s/(φ(q)(s−1))+G_q(s)`.
The relation is first needed for `Re(s)>1`; partial summation is applied in
the narrower safe region `Re(s)>2`.

For `S_r(y)=y^(−r)Σ_{n≤y}λ(n)n^(r−1)`, partial summation and `y=e^v` give
`L(s)=(s+r−1)∫₀∞ S_r(e^v)e^((1−s)v)dv`. Hence the transforms of `S_0` and
`S_1` are `L(s)/(s−1)` and `L(s)/s`. The remainder is
`R_q(e^v)=S_0(e^v)−S_1(e^v)−v/φ(q)−c_q`, with
`c_q=Re G_q(1)`. Using `∫v e^((1−s)v)dv=1/(s−1)^2` and
`∫e^((1−s)v)dv=1/(s−1)`, the main term and the `v/φ(q)` term cancel,
leaving the exact transform
`(G_q(s)/s−c_q)/(s−1)` for `Re(s)>2`.

At real `s>2`, this expression is real because the original remainder is
real. The source extends that reality to `s=1` by analyticity on the real
ray `s≥1`, and obtains `G_q(1)=c_q`; therefore the apparent pole at `1` is
removable. This analyticity uses the imported theorem that the regularized
`entireL` factors have no zeros for `Re(s)≥1` (and that the principal factor
is nonzero at `1`). At any `ρ≠0,1`, the residue of `G_q` is
`Σ(ord_ρ E_{ψχ_d}−ord_ρ E_ψ)/φ(q)`, since a logarithmic derivative has
residue the zero order. Dividing by `ρ(ρ−1)` gives
`Σ(ord_ρ E_ψ−ord_ρ E_{ψχ_d})/[φ(q)ρ(1−ρ)]`, matching the source and RHA-03.
The continuation is meromorphic and has at most simple poles; on the open
half-plane `Re(s)>0`, the possible denominator point `s=0` is outside the
domain, and `s=1` is removable.

**Falsification and boundary.** I checked the principal-character `−1`
normalization, both partial-summation factors, cancellation of the
`1/(s−1)^2` term, the residue sign, and the distinction between convergence
in `Re(s)>2` and meromorphic continuation to `Re(s)>0`. This matches the
pinned statement; no counterexample was found. Imported dependencies are the
Euler-product logarithmic-derivative identity, character orthogonality,
partial summation, nonvanishing of Dirichlet L-functions on `Re(s)≥1`, and
the analytic-order residue theorem. The formal proof source encodes these
dependencies, but this was neither a local Lean build nor a re-proof of those
classical theorems. The one-sided prime-remainder bound required to apply
Landau remains unestablished by Zetral. RHA-08 is accepted as a manual audit
of the transform derivation only. The next selected investigation is B1-08's
uniform endpoint cancellation on bounded H1 profiles; the zero-exclusion
route remains open alongside it.

# Campaign LXXX — High-frequency size of the signed prime endpoint multiplier

Date opened: 2026-11-27. Status: CLOSED within stated scope. This follows Campaign LXXIX, which
closed after deriving the exact transform and an RH-conditional regularity
bound.

## Precise question

For

    c_h = sup_(ξ∈ℝ) |Δ_hat_h(ξ)|/log(2+|ξ|),

does the actual signed multiplier admit a useful uniform bound in `h`, or
must `c_h` grow? Distinguish the true multiplier from the crude
`O(h²(1+|ξ|))` upper bound and from the total-variation bound.

## First mathematical route

Write the prime-only smoothed Dirichlet sum in terms of the prime-zeta
derivative. In the absolute-convergence half-plane `Re(s)>1`, the classical
Möbius identity is

    P(s)=Σ_(k≥1) μ(k) log ζ(ks)/k,
    -P'(s)=Σ_(k≥1) μ(k)(-ζ'/ζ)(ks),

where `P(s)=Σ_p p^(−s)`. The logarithmic derivative separates zero poles
from the pole at one, while `k≥2` terms encode the prime-only correction.
See Hasegawa–Saito, *On a prime zeta function of a graph*, Remark 6 and its
cited classical relation to Glaisher/Fröberg/Titchmarsh
([Pacific J. Math. 273 (2015), PDF](https://msp.org/pjm/2015/273-1/pjm-v273-n1-p.pdf)).
This identity is initially used only for `Re(s)>1`. The campaign must not
substitute it termwise at `Re(s)=1/2` without proving convergence,
continuation, branch, and contour hypotheses.

Checkpoint B1-11 carried out this route under RH: it isolates and subtracts
the main pole, then proves a subexponential upper bound for `c_h` using the
fixed-strip logarithmic-derivative estimate. B1-12 and B1-13 supersede its
open subquestions by proving uniform boundedness and a positive limsup,
respectively.

## Checkpoint B1-12 — zero-residue shift

`research/positivity/B1-12-zero-residue-explicit-formula.md` shifts the
B1-11 pole-removed integral to `Re(s)=b`, `1/8<b<1/6`. Under RH the only
crossed singularities are the nontrivial zero poles from the `k=1` prime-zeta
term and the additional `q=1/2` pole from `k=2`. Their residues give an
absolutely convergent smoothed zero sum plus a Schwartz correction. The
Riemann–von Mangoldt local zero count controls that sum by
`O_η(log(2+|ξ|))`; the right-line remainder is
`O_(b,η)(exp(-b h) log(2+|ξ|))`. Thus `c_h=O_η(1)` uniformly for `h≥0`,
conditional on RH and the cited fixed-strip logarithmic-derivative and
zero-counting estimates. This is only the smoothed first-prime component;
it gives no sign or full-form positivity. The contour proof has not been
formalized or independently machine-checked. Next seek a lower-bound
counterexample route or incorporate the compensating archimedean term.

## Checkpoint B1-13 — non-decay along a sequence

For fixed `ξ`, B1-12 expresses `Δ_hat_h(ξ)` as an absolutely convergent
Fourier series in `h` plus an exponentially decaying remainder. Choose a
nonzero zeta-zero ordinate and then a real `ξ` where its cutoff-transform
coefficient is nonzero. Long-interval mean square of the series is the sum
of squared coefficients, so `limsup_(h→∞) c_h>0`, conditional on RH. This
rules out convergence `c_h→0`, but proves neither a positive lower bound for
all large h nor full-form sign/positivity. The frequency is existential and
no numerical constant is claimed. See
`research/positivity/B1-13-almost-periodic-lower-limsup.md`.

## Checkpoint B1-14 — fixed paired-packet full-form bound

For each fixed smooth paired edge profile, B1-12 bounds the first-prime
discrepancy in the logarithmic dual norm. Direct PNT analysis gives the
prime-square endpoint limit `1/2 ∫(g*g)` and shows prime powers `k≥3`
decay. Together with the leading archimedean/first-prime cancellation and
the bounded continuous/pole terms recorded in B1-06, this yields
`Q_W(f_h)=O_g(1)` under RH for this family. It gives no sign or coercivity.
See `research/positivity/B1-14-bounded-full-form-edge-packets.md`.

## Closure and next campaign

The bounded question is resolved within scope: conditional on RH, `c_h` is
uniformly bounded and has positive limsup. The fixed smooth paired packets
also have bounded full-form values, without a sign conclusion. See
`research/CAMPAIGN-80-CLOSURE.md`. The next question is whether the
almost-periodic zero-residue coefficients cancel in the full direct form;
Campaign LXXXI is active in `research/CAMPAIGN-81.md`.

## Information gain and falsification

A uniform bound for `c_h` extends first-prime cancellation to bounded
`H^log` profiles under RH; the positive limsup shows that the isolated
component does not decay. Both results concern only one component; full Weil
positivity still requires the other arithmetic and archimedean terms.

Try model frequencies near zero ordinates and scales comparable to the
inverse spacing of prime log-support atoms. Preserve any apparent resonance
as numerical evidence only until exact error bounds control the unsmoothed
prime sum. An upper bound whose right side is unbounded relative to the log
weight does not show that the true multiplier grows.

## Dependencies and acceptance

Dependencies: B1-09/B1-10 exact definitions; prime-zeta identity in its
valid half-plane; a justified smoothed explicit formula or direct
exponential-sum estimate; pinned zero-counting bounds and all branch/pole
normalizations. RH may be used only when clearly stated as a conditional
diagnostic, not in any unconditional RH proof.

Accept a proved estimate for `c_h` with explicit `h` dependence, or a
rigorous lower bound along an explicit sequence. Finite numerical scans do
not pass. Use hosted free CI for computational work; no expensive local
datasets or builds.

## Checkpoint B1-11

`research/positivity/B1-11-prime-zeta-contour-shift.md` shifts the Mellin
contour past only the main pole, subtracts the exact smooth main measure, and
uses the RH logarithmic-derivative bound on `Re(q)=1/2+δ`. It proves
`c_h=O_ε(exp(εh))` for every fixed `ε>0`, hence a subexponential
logarithmic-dual bound under RH. It does not show boundedness of `c_h`, a
lower bound, or positivity. Next control constants as `δ→0` or obtain an
actual lower bound.

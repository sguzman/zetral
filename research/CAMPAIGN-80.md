# Campaign LXXX — High-frequency size of the signed prime endpoint multiplier

Date opened: 2026-11-27. Status: ACTIVE. This follows Campaign LXXIX, which
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

The first task is to express the compact log-window cutoff through Mellin
inversion, isolate the `k=1` zero contribution, the `k≥2` singularities and
the main pole, and state an explicit remainder valid for the desired
frequency range. Then estimate `c_h` or produce an actual sequence of
frequencies/endpoints falsifying a proposed bound.

## Information gain and falsification

A uniform bound for `c_h` would extend first-prime cancellation to bounded
`H^log` profiles. Growth would quantify why that endpoint piece alone cannot
be controlled by the logarithmic norm. Either result concerns only one
component; full Weil positivity still requires the other arithmetic and
archimedean terms.

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

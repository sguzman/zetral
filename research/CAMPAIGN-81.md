# Campaign LXXXI — Full-form endpoint zero-frequency cancellation

Date opened: 2026-11-27. Status: CLOSED within the fixed-packet scope.

## Precise question

For the fixed paired edge packets \(f_h(x)=(g(x)+g(h-x))/\sqrt2\), does the
almost-periodic zero-residue part of the smoothed first-prime endpoint
discrepancy survive in the complete direct Weil quadratic form, or is it
canceled by the other arithmetic, archimedean, pole, and continuous-kernel
terms?

## Evidence and current boundary

Campaign LXXX established under RH that the first-prime multiplier is
uniformly bounded but has positive limsup. B1-14 gives only
\(Q_W(f_h)=O_g(1)\), not a limit or sign. Its first-prime term alone has
oscillatory zero residues; an upper bound for the total form does not tell
whether those coefficients cancel. The direct arithmetic formula in
Suzuki v4 §1.1 (source details recorded in `research/CAMPAIGN-76.md`) is the
canonical starting point. The prime-square endpoint has a PNT main term
\(\frac12\int(g*g)\); higher powers decay. The continuous and pole terms
are bounded on this family, but their limiting constants have not been
isolated against the zero residues.

## Design and falsification

1. Re-derive the full direct formula on paired packets, keeping separate the
   two endpoints, first-prime residual, prime powers k≥2, archimedean term,
   pole, and subtracted continuous kernel.
2. Prove convergence or a quantified almost-periodic expansion for every
   bounded component as h→∞. Do not infer convergence from an O(1) bound.
3. Test cancellation coefficient-by-coefficient at nonzero zeta ordinates.
   Any use of RH, the zero-residue contour identity, or the prime number
   theorem must be stated explicitly.
4. Attempt a counterexample to cancellation using an arbitrary fixed smooth
   profile g, while preserving the requirement that the full quadratic form
   includes all terms.

## Dependencies and acceptance

Dependencies: B1-12/B1-13; B1-14 and B1-06 packet formulas; the exact direct
arithmetic definition and normalizations in Suzuki v4 §1.1; PNT for the
prime-square limit; RH only for the zero-residue representation.

Accept a rigorous limiting decomposition proving coefficient cancellation,
or a rigorous nonzero coefficient in the full-form limit/mean-square
expansion. Either result concerns this packet family only; positivity needs
a lower bound uniform over the full form domain. Keep all contour and source
results manually classified unless independently verified. No large local
computation is required; use hosted free CI only if a reproducible numerical
diagnostic becomes useful.

## Closure and next campaign

B1-15 resolves the cancellation question for a suitable chosen profile: the
nonzero zero-residue coefficient survives in the full direct form. The
spectral formula independently confirms the coefficient and gives
nonnegativity under RH. See `research/CAMPAIGN-81-CLOSURE.md`. The remaining
question is the liminf of these nonnegative oscillatory values; Campaign
LXXXII is active in `research/CAMPAIGN-82.md`.

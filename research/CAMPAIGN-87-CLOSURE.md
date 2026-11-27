# Campaign LXXXVII closure — Pick-kernel witnesses and finite tests

Date: 2026-11-27. Disposition: completed within the stated analytic scope.

## Accepted results

1. B4-01 rewrites Lagarias's classical RH criterion as holomorphy and
   positive semidefiniteness of the Nevanlinna kernel of
   `h(z)=i xi'(1/2-iz)/xi(1/2-iz)`. This is established prior art, not a new
   criterion.
2. B4-02 shows that any hypothetical off-line zero gives a mapped pole with
   residue `-m`; sufficiently close points below that pole have negative
   diagonal kernel. The witness is conditional and ineffective without a
   zero-isolating disk and a bound for the regular part.
3. B4-03 shows quantitatively that any one finite Pick matrix can remain
   strictly positive under a meromorphic perturbation that adds an
   unsampled upper-half-plane pole. The bound depends on that finite matrix
   and perturbation kernel. This rules out a global inference from finite
   matrix positivity alone for general meromorphic functions.

## Limits

The generic finite-matrix obstruction is not an xi-specific impossibility
theorem. It does not preclude finite data combined with a separate theorem
bounding all unsampled regions and excluding poles. No rational point was
numerically evaluated, no off-line zero was supplied, and no RH conclusion
was drawn. All derivations are manual, not machine-checked.

Sources and derivations are in `research/operators/B4-01-*` and
`research/operators/B4-02-*`. The next investigation is LXXXVIII,
comparing Suzuki's horizontal-shift family with the de Bruijn-Newman heat
flow.

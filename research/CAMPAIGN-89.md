# Campaign LXXXIX — Full Weil form on the logarithmic profile domain

Date opened: 2026-11-27. Status: ACTIVE.
Starting repository commit: `50884e1b35f6cb32536aa7cc93d98b1c388c4f85`.

## Precise question

For the paired endpoint packets from B1-06, after the leading
archimedean/first-prime cancellation, do the prime-square, higher-prime-power,
pole and continuous-kernel terms extend uniformly as quadratic forms to the
same logarithmic Fourier domain `H^log`? If not, can a named component's
unboundedness be proved, and does that obstruction survive in the combined
form or disappear through cancellation?

## Evidence and prior art

- B1-09 identifies the local form domain and proves the exact Fourier-duality
  inequality for the first-prime endpoint discrepancy.
- B1-12 proves an RH-conditional uniform logarithmic multiplier bound for
  that discrepancy; B1-20 records the resulting `H^log`-dual estimate.
- B1-14 bounds the complete direct Weil form on one fixed smooth packet
  profile, but not uniformly over the profile unit sphere.
- B1-15 writes the exact direct-form decomposition for paired packets and
  isolates the persistent zero frequencies; it does not control arbitrary
  high-frequency profiles.
- Use the source normalization in Suzuki, arXiv:2611.33001v1, equation
  (1.2), and verify it against the exact test-function conventions before
  deriving estimates. No novelty claim is made.

## Persistent backlog entry

See B1-21 in `research/BACKLOG.md` for prerequisites, expected information
gain, dependencies, and acceptance criteria.

## Hypothesis and information gain

The first-prime residual alone is uniformly bounded in the logarithmic form
norm under RH, but the other terms may not admit separate bounds on that
domain. Establishing termwise bounds would extend fixed-profile estimates to
a common form-domain class. A rigorous obstruction would identify exactly
where any full-form extension must preserve cancellation.

## Experimental and analytical design

1. Re-derive the paired-packet autocorrelation and every term of the direct
   formula with exact endpoint factors.
2. Express each remaining term as a Fourier multiplier or a discrete/kernel
   form on the profile `g`.
3. Seek uniform `H^log` bounds with constants independent of the endpoint
   shift. Track separately unconditional PNT inputs and RH-conditional
   zero-residue inputs.
4. Falsify proposed separate bounds using explicit high-frequency or
   concentrating smooth profiles and their exact/logarithmic norms.
5. If a component bound fails, test the sum of terms before claiming the
   complete form is unbounded; cancellation remains possible.

## Dependencies and verification

Dependencies include convergence of the prime sums and continuous integral
on the chosen test class, the exact source-form normalization, and density of
smooth profiles in the logarithmic completion. Verify constants and Fourier
signs independently from Suzuki's pinned source. Numerical sampling alone is
not an acceptance result; no finite checks can establish the form bound.

## Acceptance

Either prove a shift-uniform `H^log` bound for every remaining component, or
give a rigorous, reproducible obstruction for a named component and state
whether cancellation in the complete form is still open. No sign, coercivity,
or RH conclusion is inferred from boundedness alone.

## Checkpoint B1-21a — non-first-prime arithmetic terms

The direct prime-power sum over `k>=3` is absolutely and uniformly bounded:
including both signs, it is at most four times a convergent prime series.
The `k=2` term is also uniformly `O_L(1)` for all
normalized profiles: self terms use only finitely many primes, and the
cross-term prime range has fixed multiplicative width `exp(L)`, so
Chebyshev plus partial summation bounds `sum log(p)/p` independently of `h`.
This is unconditional and requires only the packet L2 norm. Full derivation:
`research/positivity/B1-21-prime-power-log-domain-bound.md`.

The remaining open pieces for the campaign are the pole and continuous terms
on the `H^log` unit ball, and integration with the first-prime discrepancy.
The prime-square and higher-power arithmetic terms themselves do not obstruct
a uniform upper bound on normalized paired packets.

## Starting evidence

B1-20 closes the first-prime term only, under RH. B1-14 supplies boundedness
of the full form for fixed profiles, not for varying profiles. The
prime-square and higher-power terms are now bounded uniformly; the active
work is the pole and continuous-kernel terms on the `H^log` unit ball. The
working tree and exact accepted starting commit are recorded with this
checkpoint.

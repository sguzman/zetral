# Campaign LXXXIV — Stability limits for multiplicity-sensitive sampling

Date opened: 2026-11-27. Status: ACTIVE.

## Precise question

Can a multiplicity-sensitive sampling model be obtained from the existing
global Weil completion by an equivalent change of Hilbert norm, while keeping
ordinary derivative samples at repeated ordinates continuous and preserving
the local-to-global isometry?

## Evidence and hypothesis

Under RH and the distinct-ordinate sampling model, B3-01 gives one scalar
coordinate per ordinate. B3-03 shows that ordinary derivative evaluation at
each fixed ordinate is unbounded in the existing Weil norm. Equivalent Hilbert
norms preserve boundedness of linear functionals, so a multiplicity repair
using those derivative coordinates cannot work under any norm equivalent to
the existing norm. This stability consequence is the first bounded question;
it is a precise obstruction, not a no-go for genuinely new completions.

## Design and falsification

1. State and prove the equivalent-norm invariance with explicit two-sided
   norm constants, then apply it to the B3-03 sequence of local restrictions.
2. Audit whether the derivative functional is defined consistently on the
   compact-test union and whether the local embeddings retain the same norm
   after completion.
3. Test the boundary of the obstruction: a graph norm that controls one
   derivative is not equivalent to the old norm. Determine the exact property
   of Suzuki's local-to-global compression identity that such a norm change
   would have to preserve; do not posit it without a source theorem.
4. Search primary literature for multiplicity-sensitive de Branges or
   Hermite sampling constructions and record whether they supply the missing
   arithmetic compression relation.

## Information gain and acceptance

The first part establishes a stable impossibility result for all equivalent
renormings. The larger route either identifies a source-supported construction
with domain and compression identity, or records a concrete missing theorem
that separates abstract operator models from a Hilbert–Pólya correspondence.
Do not claim a zero multiplicity greater than one or RH.

## Verification

Independent functional-analysis proof audit; source audit for any candidate
sampling theorem; no computation is needed. Evidence levels and assumptions
must remain explicit. Dependencies: B3-01/B3-03, Suzuki's pinned sampling
theorem, and local kernel estimates K02/L02.

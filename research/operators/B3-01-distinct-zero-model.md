# B3-01 — What the global sampling operator realizes

Date: 2026-11-27. Status: conditional operator audit under RH; no claim that
the Riemann hypothesis or zero simplicity is established.

## Precise question

Does the global self-adjoint operator in the localized-Weil sampling
construction realize the nontrivial zeta zeros with their analytic
multiplicities, or only their distinct ordinates? Is its compact-resolvent
operator construction independent of the zero data?

## Source and setting

Suzuki, *Spectral convergence associated with Weil's quadratic form*,
arXiv:2610.32704v1 (2026-10-23), states that under RH the global space is
built from sampling on the set `Γ` of distinct zeros; its global operator has
spectrum `Γ`. The abstract explicitly says the limiting product is over
distinct ordinates. In §1, lines surrounding Theorems 1.1–1.2, the paper says
that the zeros are listed without multiplicity, that local eigenvalues are
simple without assuming zero simplicity, and that `Δ_Γ` includes each
distinct positive zero once. Primary source:
[arXiv:2610.32704v1, §§1–2](https://arxiv.org/html/2610.32704v1).

Under RH, write `Γ_+={γ_1<γ_2<…}` for distinct positive ordinates and let
`m_γ` denote the analytic multiplicity of the zero at `1/2+iγ`. The signed
Suzuki §2.3 makes this exact: the sample map is a unitary isomorphism
`S:H_W→ℓ²(Γ,m)`, with one scalar coordinate for each signed distinct
ordinate. The weight `m_γ` in the norm changes coordinate normalization, not
the dimension of that coordinate. The same section gives an orthonormal
basis indexed by `Γ` for the de Branges model and identifies the global
operator with multiplication by `γ` on those basis vectors.

## Operator calculation

On the signed sequence space, define

    (C x)_γ = γ^(-1) x_γ,
    Dom(C)=the whole weighted ℓ² space.

Then `C` is bounded, self-adjoint, compact and injective because `|γ|→∞` and
each bounded interval contains finitely many ordinates. Its range is dense
(it contains every finitely supported sequence). Define

    D=C^(-1),
    Dom(D)=Ran(C)={x: Σ_(γ∈Γ) m_|γ| |γ x_γ|² < ∞},
    (Dx)_γ=γ x_γ.

The diagonal multiplication operator `D` is densely defined and self-adjoint:
its adjoint domain is exactly the displayed weighted square-summability
domain. Its eigenvectors are the normalized coordinate vectors, and its
spectrum is `Γ`, with eigenspace dimension one at every `γ`. The resolvent is
diagonal with entries `(γ−z)^(-1)` and is compact for nonreal `z`; indeed it is
Hilbert–Schmidt when the usual zero-counting estimate is used. The inverse
`C` is compact. This verifies domain, self-adjointness, completeness and
compact-resolvent claims for this *abstract global model* directly.

The regularized even product of `C` is

    det₂(I−zC)=∏_(γ∈Γ_+) (1−z²/γ²)=Δ_Γ(z),

where the signed pair cancels the linear regularization factors. Each distinct
ordinate contributes one factor, irrespective of `m_γ`. This agrees with the
source's definition of `Δ_Γ` and its explicit statement that `A/Δ_Γ` need not
be constant when zeros are multiple.

## Result and limitation

**Proved for this candidate:** assuming RH and the stated distinct-ordinate
sampling model, `D=C^(-1)` is a self-adjoint compact-resolvent operator whose
complete spectrum is the set of distinct signed ordinates. The local
distinguished-phase operators converge to those distinct ordinates as in
Suzuki's Theorem 1.1. This is an exact set-level spectral realization, not an
independent derivation of the zero locations: the global Hilbert space and
diagonal operator are defined using `Γ`.

**Multiplicity obstruction:** if some zero has analytic multiplicity
`m_γ>1`, then `D` still has a one-dimensional eigenspace at `γ`. Thus this
candidate fails a multiplicity-preserving Hilbert–Pólya correspondence in
that case. No multiple nontrivial zero is known here, so this is a conditional
structural limitation, not a counterexample to RH or to simplicity. The
weighted norm cannot repair it: changing a positive coordinate weight does
not create additional eigenvectors. A multiplicity-sensitive repair would
need extra fiber coordinates or derivative/Hermite sampling data and a new
proof that the localized Weil embeddings and inverse-compression identity
survive that change. No such repair is established.

There is a precise no-go for the simplest fiber repair while preserving the
existing sample map. If one replaces each scalar coordinate by
`C^(m_γ)` but lets the new map depend only on the old value `S[h]_γ`, its
image in that fiber lies in the one-dimensional span of a fixed vector. It
cannot be onto when `m_γ>1`; hence it cannot remain a unitary sampling
isomorphism. Adding derivatives or other independent data could avoid this
linear-algebra obstruction, but would change the sampling map and requires a
new continuity, completeness, and inverse-compression proof.

**Independence limitation:** the global construction assumes RH to obtain the
positive sampling space and uses the zero ordinates in its definition. It
therefore does not itself prove RH or supply a zero-independent operator
whose self-adjointness forces the zeros to be real. Suzuki's local forms are
defined from finite arithmetic data, but their positivity and the stated
global correspondence are conditional on RH.

## Falsification and evidence class

The dimension-one conclusion is falsified only by a different candidate
space/operator, not by changing coordinate weights. The conditional mismatch
is falsified if all zeros are simple; that simplicity is unresolved. The
domain and resolvent calculation above is elementary diagonal operator
theory. The attribution of `Γ`, the weighted sampling representation, and the
conditional local-to-global compression are imported from the pinned source,
not independently rebuilt here. No novelty claim, Lean check, or numerical
experiment is made.

## Next precise question

Are derivative/Hermite data at repeated ordinates continuous in the Weil
completion norm and compatible with local Riesz evaluation? The source's
scalar sample isometry and one-vector-per-ordinate basis rule out mere
coordinate-weight changes or fiber replication. A genuine derivative-enriched
space would need a new isometry and a revised local inverse-compression
identity. Test continuity first; absent a counterexample or positive bound,
leave that repair unresolved. Keep the distinct-set correspondence as a valid
conditional result.

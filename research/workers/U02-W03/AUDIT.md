# U02-W03 — Bombieri negative-index source audit

Date: 2026-11-25 UTC. Independent bounded source audit; no novelty, RH, formal-verification, or human-review claim.

## Source and scope

Enrico Bombieri, “Remarks on Weil’s quadratic functional in the theory of prime numbers, I,” Rend. Mat. Acc. Lincei (9) 11 (2000), 183–233. Primary PDF: [BDIM journal archive](https://www.bdim.eu/item?fmt=pdf&id=RLIN_2000_9_11_3_183_0). A direct Python `urllib` request to the PDF URL and two URL variants returned HTTP 503. The search service exposed extracted text of the primary PDF (2498 lines). The abstract and §§4, 8–11 were inspected, including Theorems 8–11. The full proofs were not reread line by line.

This audit answers a narrow question raised by U02: can Bombieri’s finite negative-eigenvalue count be treated as an exact negative-index theorem for Zetral’s A_a? The answer from the inspected source is no, not without additional identifications and a limit argument.

## What the finite theorems count

In §4 Bombieri states two variational problems for the Weil functional T[f*bar f*]: Problem 1 minimizes it on the unit sphere of W_0^{1,2}([M^{-1},M]), with norm ∫|Df|²dx, D=x d/dx; Problem 2 minimizes it in L²(E), where E is a finite union of intervals, with norm ∫_E|f|²dx. These are distinct normalizations/domains.

In §8, Theorem 8 identifies the negative eigenvalue count of Bombieri’s finite matrix H(Γ;t) with the number of distinct conjugate pairs in the finite multiset Γ. This matrix belongs to Problem 1. In §9, Theorem 9 gives the corresponding count for the finite matrix K_E(Γ) associated to Problem 2; its entries are interval Gram integrals of exponentials, ∫_E e^{i(γ−γ′)u}du, with parity refinements in the theorem. The hypotheses are a finite multiset/truncation of zeros and the stated interval setup. These are finite-dimensional matrix inertia results.

The abstract’s statement about finitely many off-critical-line zeros is likewise explicitly a sufficiently-large-*finite-truncation* conclusion. It does not say that an infinite-dimensional localized operator has exactly that negative index.

## Infinite-limit qualification

Sections 10–11 pass from finite multisets toward the infinite zero set. The text explicitly discusses the possibility that a negative eigenvalue of a truncation tends to zero. In that case the limiting object can vanish on the chosen interval, producing a linear relation, instead of furnishing a strictly negative value of the limiting Weil functional. Theorem 10 (Problem 1) and Theorem 11 (Problem 2) formulate this alternative in the infinite-limit argument. Thus the finite strict negative count does not automatically survive as the same count in the limit: strict negativity separated from zero is materially different from negativity whose magnitude collapses to zero.

This is the key limitation for importing the result into U02. The argument would need, at minimum, a proved correspondence between Zetral’s closed form/operator and the specific Bombieri variational problem, together with control of the truncation limit strong enough to exclude loss of negative directions at zero (and to control any additional negative directions). Neither follows merely from Theorems 8–9.

## Relation to A_a: plausible transform, no asserted identity

The coordinate change x=e^u is suggestive. For a function on the multiplicative interval, F(u)=e^{u/2}f(e^u) is the usual L²(dx)→L²(du) isometry, and the Mellin line 1/2+iγ becomes a Fourier transform in u. This explains why interval Fourier Gram matrices naturally arise in Bombieri’s Problem 2.

But that observation alone does not identify the finite matrix K_E(Γ), which is built from a selected finite multiset of zero frequencies, with Zetral’s A_a, whose definition is the localized arithmetic Weil form and whose spectral operator is defined by its own closed-form construction. No equality of forms, domains, or spectral projections was derived in this audit. In particular, the coordinate change is not evidence that the negative index of A_a equals the count of off-line zero pairs.

## Conclusion for U02

Keep the U02 note’s non-importation of an exact Bombieri negative-index equality. A safe conditional statement is: Bombieri proves exact finite-truncation matrix inertia counts; transferring these to A_a requires a separately proved operator/form equivalence and a limit theorem that handles eigenvalues tending to zero. The inspected §§10–11 identify precisely why the latter issue cannot be omitted.

## Reproducibility and limitations

- Source URL: https://www.bdim.eu/item?fmt=pdf&id=RLIN_2000_9_11_3_183_0
- Journal PDF direct fetch: HTTP 503, including `?id=...&fmt=pdf` and landing URL variants.
- Primary-source text access: search service PDF extraction; abstract and Sections 4, 8, 9, 10, 11; Theorems 8–11. Theorem statements/lines inspected in the extraction: Theorem 8 around PDF text line 1599; Theorem 9 around 1824; Theorem 10 around 2024–2062; Section 11 starts around 2063. Theorem 11’s exact clause-by-clause text was not retained in the worker context, so no more detailed quotation is made here.
- No numerical experiment, formal proof, exhaustive literature search, or independent complete proof audit was performed.

# U02-W04 — Yoshida source-qualified negative-index audit

Date: 2026-11-25 UTC. This is a bounded audit of what can be established from accessible source text. No novelty, RH, formal-verification, or human-review claim.

## Sources and access level

Primary reference: H. Yoshida, “On Hermitian forms attached to zeta functions,” *Zeta Functions in Geometry* (Tokyo, 1990), Advanced Studies in Pure Mathematics 21 (1992), 281–325. Bibliographic data are confirmed in Suzuki’s bibliography. The Yoshida chapter itself was not available in directly accessible full text during this pass, so its results below are attributed as **Suzuki’s account**, not as direct primary-source verification.

Accessible source: M. Suzuki, “Aspects of the screw function corresponding to the Riemann zeta-function,” *Journal of the London Mathematical Society* (2023), DOI [10.1112/jlms.12785](https://doi.org/10.1112/jlms.12785), full text [Wiley](https://londmathsoc.onlinelibrary.wiley.com/doi/full/10.1112/jlms.12785). Inspected §§4.2 and 5.4, Theorems 1.3–1.4, and pp. 698–700 of the extracted text.

## Yoshida’s form and spaces as reported by Suzuki

Suzuki §4.2 says Yoshida studied the Weil-distribution Hermitian form
\[
\langle\phi,\psi\rangle_W=W(\phi*\widetilde\psi)
\]
on compactly supported smooth functions. For \(a>0\), \(K(a)\) consists of functions equal on \([-a,a]\) to a smooth \(2a\)-periodic function and extended by zero outside. The subspace \(K_N(a)\) imposes vanishing of Fourier coefficients for \(|n|\le N\).

Suzuki reports the following Yoshida results:

1. (Lemma 2) Without an RH assumption, the Weil form is positive definite on \(K(a)\) for all sufficiently small \(a>0\).
2. (Lemma 3) For each \(a_0>0\) and \(\mu>0\), there is an \(N\) such that \(\langle\phi,\phi\rangle_W\ge\mu\|\phi\|_{L^2}^2\) on \(K_N(a)\), uniformly for \(0<a\le a_0\). For fixed \(a\), this gives a positive-definite tail of finite codimension.
3. In §5.4, Suzuki uses this positive tail to complete \(K_N(a)\) in the Weil norm and adjoin a finite-dimensional complement \(W(a)\). Suzuki reports Yoshida’s Theorem 2: RH is equivalent to nondegeneracy of the extended form on this completion for every \(a>0\). Suzuki also reports Propositions 2 and 7 as nondegeneracy results on the uncompleted spaces \(C(a)\) and \(K(a)\), respectively.

Suzuki separately proves an analogous statement for the continuous-kernel form \(\langle\cdot,\cdot\rangle_{G_g,a}\) on \(L^2(-a,a)\): Theorems 1.3–1.4 identify RH with positivity on the relevant mean-zero test space and with nondegeneracy (equivalently, absence of a zero eigenvalue) of the operator \(\mathsf G_g[a]\). These are Suzuki’s theorems, not Yoshida’s theorem on the same Hilbert-space realization.

## Consequences for negative index

The positive-tail decomposition gives a finite-dimensional reduction of the **inertia** of the completed Yoshida form, provided the completion and direct-sum decomposition are as stated: the tail contributes no negative or null directions, so any negative index and any degeneracy are confined to the finite-dimensional complement. This is structurally useful and is consistent with a finite computation at fixed window.

However, the accessible source does not state a formula equating that finite negative index to the number of off-critical-line zero pairs. The reported RH criterion concerns nondegeneracy of the completion for every window, while the reported raw-space results concern nondegeneracy on \(C(a)\) and \(K(a)\). Neither statement alone is a negative-index count. In particular:

- “nondegenerate” does not mean “positive definite”; a nondegenerate Hermitian form may have negative directions.
- A criterion that detects a zero vector in a completed form does not itself count negative directions before or after the zero crossing.
- Finite codimension implies finiteness of the negative index under the positive-tail hypothesis, but does not identify its value with an arithmetic zero count.

The finite bound follows from a short abstract argument. Let \(B\) be a Hermitian form on a complex vector space \(H\), and suppose a subspace \(V\) has codimension \(d<\infty\) and satisfies \(B(v,v)>0\) for every nonzero \(v\in V\). Any negative-definite subspace \(L\) has \(L\cap V=\{0\}\); hence its projection into \(H/V\) is injective and \(\dim L\le d\). The radical \(\{x:B(x,y)=0\;\forall y\in H\}\) also intersects \(V\) trivially, since any radical vector has \(B(x,x)=0\). Thus its dimension is at most \(d\) as well. Applied to Suzuki’s account of \(K_N(a)\subset K(a)\), this gives \(n_-(K(a))\le \operatorname{codim}K_N(a)\le 2N+1\) and radical dimension at most \(2N+1\), for an \(N\) supplied by the positive-tail estimate. The argument is independent of the completion; it gives a bound, not an exact inertia formula.

This is distinct from Bombieri’s Theorems 8–9, which explicitly count negative eigenvalues of specified finite truncation matrices. Bombieri’s infinite-limit sections further warn that a negative truncation eigenvalue may converge to zero, producing a linear-relation alternative. No comparison in this audit proves equality between either author’s forms and Zetral’s \(A_a\).

## Relevance to U02 and limits

The source-qualified conclusion is: Yoshida provides prior structure for fixed-window positivity and a finite-codimension positive tail; Suzuki reports an RH-equivalent nondegeneracy criterion on the completed form. These facts motivate a finite-dimensional inertia analysis but do not license importing an exact negative-index/off-critical-zero formula into Zetral’s \(A_a\). Such an import would require the original theorem’s exact hypotheses, the exact form and completion identification, and a separate proof that the relevant inertia survives the completion/truncation process.

No direct (A_a)-to-Yoshida form/domain equivalence was derived. The 1992 chapter’s details, including any additional negative-index claims not reproduced by Suzuki, remain unchecked. The conclusion is therefore limited to the statements available in Suzuki’s account and is not an exhaustive audit of Yoshida.

## Reproducibility

- Wiley full text: https://londmathsoc.onlinelibrary.wiley.com/doi/full/10.1112/jlms.12785
- Inspected: §§4.2, 5.4; Theorems 1.3–1.4; extracted text lines 397–407, 698–700, and bibliography line 1017.
- Not obtained: direct full text of Yoshida (1992).
- No numerical work, formal verification, or complete proof audit was performed.

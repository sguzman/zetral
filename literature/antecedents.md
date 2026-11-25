# Focused antecedent audit — R01

Date: 2026-11-24 Mexico. No novelty claim.

## Suzuki, arXiv:2606.09096v4 (2026-11-15)
Primary full text: https://arxiv.org/html/2606.09096v4 . Revision history: https://arxiv.org/abs/2606.09096 . The October convergence paper cites an earlier revision; theorem numbers below refer to v4.

- §1.1 specifies the arithmetic functional and convolution convention; this yields the independent Gram quadrature in gram-quadrature.md.
- Thm 1.1 and Cor 1.2 concern the closure of the local Weil form and its associated semibounded L2 operator A_a. Thm 1.3 is continuity of its lowest eigenvalue; Thm 1.4 is a small-interval asymptotic, with an even simple ground state.
- §1.2, (1.9)–(1.11), Lemmas 6.1–6.2, Thm 1.5: for shift lambda below the bottom of A_a, complete test functions in the positive shifted form norm; i d/dx has deficiency indices (1,1). Phase-parametrized self-adjoint extensions have an entire characteristic function with real simple zeros. This is unconditional for the shifted norm.
- Distinguish A_a on L2 from the differentiation extension on the form completion. Their eigenvalues are not interchangeable. The October paper studies the latter at zero shift and phase pi, assuming RH.

## Yoshida
H. Yoshida, On Hermitian forms attached to zeta functions, ASPM 21 (1992), 281–325. The primary chapter and its (5.15),(5.16) were not retrievable in this session. Bibliographic identity verified in Suzuki's references. No formula attributed directly to Yoshida. A derivation from Suzuki v4 §1.1 supplies an alternative, pending numerical cross-check; do not label it a literal reproduction of Yoshida.

## Gonek
S. M. Gonek, Finite Euler products and the Riemann Hypothesis, arXiv:0704.3448 (2007 preprint), https://arxiv.org/abs/0704.3448 ; published Trans. AMS 364 (2012), 2157–2191, DOI https://doi.org/10.1090/S0002-9947-2011-05546-7 . Preprint full text inspected; publication version not compared. Thm 4.1 bounds Dirichlet truncation error under RH in the right half strip; Thms 7.5 and 8.1 give zero count and simplicity results for a different symmetrized approximation under constraints on X relative to height. These do not bound the Ritz/compression error for Suzuki's phase-pi operator. Relevant comparison but not a direct solution.

## Numerical prior art
Kim et al., arXiv:2607.24830. v2 dated July 29, 2026 inspected via https://paperity.org/p/379258783/a-numerical-realization-of-suzukis-weil-quadratic-form-operator-the-archimedean-spectral ; v3 indexed at https://scirate.com/?date=2026-08-04&page=165&range=31 but full v3 text inaccessible at https://arxiv.org/html/2607.24830v3 . v2 abstract reports P1 finite element approximations to A_a, and additionally computation of W(a,theta;z) (R8). Thus numerical W construction is prior art; do not claim first numerical realization. No verified quantitative convergence bound for the specific zero-shift phase-pi compression was identified in the inspected material. This is not evidence that none exists. Full v3 inspection remains a targeted R04 novelty dependency.

## Disposition
R01 focused source map sufficient to start R02 with explicit access limitations. R04 must revisit novelty before any original claim. The existing primary theorem and local-space antecedent are pinned. No external result has been independently formalized here.

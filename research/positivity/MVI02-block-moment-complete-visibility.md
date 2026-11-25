# MVI02 — Block moment inertia and complete visibility from finite arithmetic seeds

2026-11-25. AI-assisted candidate deduction without RH, using APM01–03, MVI01 and CPC04's exact discrete finite-rank decomposition. Classical Krylov and matrix moment methods are not claimed new. Actual prior-art search returned *Distributions on matrix moment spaces*, DOI 10.1016/j.jmva.2014.06.015 (block Hankel matrices), and arXiv:2404.19698 (Krylov approximation for unbounded self-adjoint operators). No full-paper novelty assessment.

Let B be the ordinary full or pole-free operator on a fixed window (or a parity restriction), and let V:C^m->H have finitely many columns v_i supported in X_(1/4) of APM01. All are analytic vectors for B. For each distinct eigenvalue lambda let E_lambda be its spectral projection. The block cyclic subspace C_V is the closure of the span of B^k v_i, k>=0. Exactly
    C_V=orthogonal direct sum over lambda of ran(E_lambda V).
To see this, each polynomial vector is in the right side. Conversely for each i the scalar spectral measure at v_i has an exponential moment, so by APM03 the characteristic function of {lambda} is approximable by polynomials in the norm weighted by 1+|lambda|. Applying these polynomials to v_i gives form-norm approximation of E_lambda v_i. Finite sums of the projected vectors are form dense in the right side by spectral truncation. This also proves that block polynomial vectors form a form core of B restricted to C_V.

Define matrix moments M_k=V*B^k V. On vector polynomials of degree <=n the Gram block matrix is H_n=(M_(i+j)), and the shifted form is L_n(z)=(M_(i+j+1)-z M_(i+j)), i,j=0,...,n. Null vectors of H_n represent zero vectors and are in ker L_n. Exactly as in MVI01, using form density and compact resolvent,
    n_-(L_n(z)) increases and eventually equals
    sum_(lambda<z) rank(E_lambda V).
The limit counts visible multiplicities, not merely distinct values. This argument does not assume the matrix spectral measure has invertible Hankel matrices.

## Finite arithmetic choice that sees all eigenvalues below z

Use CPC04's exact periodized-symbol decomposition (replace the arithmetic distribution by its pole-free version if B=T). For fixed threshold z and arbitrary mu>0, it gives
    B-z=P-K,       P>=mu I,       K=V V*,
    V columns sqrt(w_j) e_j,    w_j=(mu+z-S_chi(t_j))_+,
where e_j are restricted Fourier modes of an enlarged circle and only finitely many weights are nonzero. The symbol grows like log|j|, so the set is finite; no tractable size bound is assumed. In a parity sector, project those columns to that parity, preserving the decomposition by symmetry. The seed vectors have bounded-BV zero extensions, hence are in X_(1/4) and analytic by APM01.

Write E_-=1_(B<z). If f is in ran E_- then
    ||V* f||²=<Kf,f>=<Pf,f>-<(B-z)f,f> >=mu||f||²,
since E_- has finite rank and consists of operator-domain eigenvectors. Thus E_- K E_- >= mu E_- on its range. In particular for each lambda<z, E_lambda V is onto the entire corresponding eigenspace: its adjoint V* is bounded below there. More strongly E_-V is onto the whole negative spectral subspace, simultaneously across eigenvalues. Its nonzero squared singular values are >=mu. If no weights occur then K=0 and there are no eigenvalues below z. Consequently for this explicit finite arithmetic family the block moment inertia above eventually equals the FULL count n_-(B-z), including all multiplicities:
    n_-(L_n(z))=n_-(B-z) for all sufficiently large n.
It gives finite negative witnesses for any nonzero count, without knowing a spectral gap or solving a singular interior inverse. It does not yet give a finite stopping test for zero count, or a practicable Krylov degree. The number of seed modes may be doubly exponential in the physical window as in CPC04.

## Dense test family alternative

A simpler countable family is the Dirichlet sine basis on I (or its even/odd subsets). Each zero-extended vector is H^1 and hence analytic by APM01. Its finite spans approximate compact smooth functions in H^1 by ordinary sine expansion; the H^1 norm dominates the log form norm. Hence increasing both the number of seeds and polynomial degree exhausts full form inertia. In fact finite sine spans alone already do so by Rayleigh–Ritz. This part is classical Galerkin density; the finite visibility result above is stronger in that the seed family is fixed by the arithmetic negative split and provably sees every sub-threshold eigenvalue. It is not an originality assertion.

MVI02 complete as candidate. MVI03 next exploit the quantitative visibility bound to derive finite-time heat-matrix enclosures of the actual negative eigenvalues, not just asymptotic moment inertia. No actual numerical run or RH proof.

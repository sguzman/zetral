# C03 — A posteriori characteristic-function and ordered-root certification

2026-11-25 UTC. Conditional mathematical framework, not a numerical certificate. Assumes RH and Suzuki's local form/core and phase-pi spectral theorems; C01–C02 supply the preceding candidate residual and coercivity bounds. The following uses standard Rouché/argument-principle methods and does not claim originality. No independent or machine verification of this new derivation.

## 1. Correct phase and evaluation convention

Reopened Suzuki arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, equations (2.1), (2.3)–(2.5), (3.3), Lemmas 3.1–3.2, and (6.1)–(6.4), Proposition 6.1. In the author's notation u_(s,a)=A_a^(-1) exp(-isx), with inner product linear in the first argument. The C01 evaluation representer k_w equals u_(conjugate(w),a). In particular k_(-i)=u_(i,a) solves A_a k_(-i)=exp(x), and k_i=u_(-i,a) solves A_a k_i=exp(-x). Thus the exact function is

    W(z)=(z-i) F[k_(-i)](z) - (z+i) F[k_i](z),

where F[v](z)=integral_(-a)^a v(x)exp(izx)dx. This is precisely the author's phase-pi expression, not the phase-zero expression or the Fourier transform of the lowest Gram eigenvector. It is even, has no zero at zero, and all its zeros are real, simple, and are precisely the eigenvalues of the exact self-adjoint phase-pi differentiation extension. These facts are imported, not newly proved here. The kernel argument convention in C01 is reversed relative to Suzuki's J_a(w,z).

## 2. Uniform exact-function error

Choose arbitrary finite trigonometric trial vectors v_-, v_+ for k_(-i), k_i respectively. By C02, both lie in Dom A_a. Suppose validated full residual bounds and a positive coercivity lower bound are

    ||exp(x)-A_a v_-||_2 <= R_-,
    ||exp(-x)-A_a v_+||_2 <= R_+,
    A_a >= kappa I, kappa>0.

By C01, ||k_(-i)-v_-||_2<=R_-/kappa and ||k_i-v_+||_2<=R_+/kappa. Define the entire finite trial function

    P(z)=(z-i)F[v_-](z)-(z+i)F[v_+](z).

For b_a(z)^2=integral_(-a)^a exp(-2x Im z)dx (C01),

    |W(z)-P(z)| <= b_a(z)/kappa [|z-i| R_-+|z+i| R_+].       (C03.1)

This follows by Cauchy–Schwarz for each Fourier integral and the triangle inequality. On any compact set contained in |Im z|<=Y and |z|<=Z, a convenient uniform bound is

    E= sqrt(2a) exp(aY) (Z+1) (R_-+R_+)/kappa.                 (C03.2)

The full residual, not a finite Galerkin solve residual, is essential. An alternative valid bound uses the energy dual residual eta and replaces R/kappa by eta/sqrt(kappa). Scaling W and P by the same nonzero constant scales the error by its modulus. Do not silently normalize by W(0) without a nonzero enclosure for that quantity.

Reflection x->-x commutes with A_a by the even Weil form; hence k_i(x)=k_(-i)(-x). One may choose v_+(x)=v_-(-x), giving equal full residual norms and an even P, reducing the number of solves. This does not remove the need to validate the remaining full residual. Real coefficients in the physical-space expansion can also be enforced by taking the real part (A_a commutes with conjugation under the real symmetric sampling form). Neither symmetry is required for the enclosure.

## 3. Finite contour test including evaluation and roundoff

Let C be a positively oriented simple polygon bounding a bounded Jordan domain, and use E from C03.2 for the whole contour. All terms in E must be bounded outward. The finite trial P is evaluated by the entire sinc basis phi_j(z)=sqrt(2a) sinc(az+pi j), using the removable value at zero. For v_-,v_+ fixed exactly (e.g. rational real/imaginary coefficients), let M_-,M_+ be validated upper bounds for their L2 norms. By differentiating under the integral,

    |F[v](z)| <= sqrt(2a) exp(aY)||v||_2,
    |(F[v])'(z)| <= a sqrt(2a) exp(aY)||v||_2.

Hence a uniform derivative bound on every contour segment is

    |P'(z)| <= D = sqrt(2a) exp(aY) [1+a(Z+1)] (M_-+M_+).

Subdivide the polygon into straight subsegments [z_j,z_(j+1)], with lengths l_j. At each vertex compute a rational complex center p_j with rigorous |P(z_j)-p_j|<=epsilon_j. A sufficient finite test is, for every j,

    |p_j| > epsilon_j + D l_j + E,                            (C03.3)
    |p_(j+1)-p_j| < |p_j|.                                    (C03.4)

Use upper bounds for lengths/errors/derivative and lower bounds for moduli; strict margins must survive roundoff. For any z on the segment, |P(z)-p_j|<=epsilon_j+D l_j, so |P(z)|>E>=|W(z)-P(z)|. Rouché gives equal zero counts of W and P inside C, with multiplicity. For a second independent count step, each curve P([z_j,z_(j+1)]) and straight chord [p_j,p_(j+1)] lies in the same open disk centered at p_j of radius |p_j|, which excludes zero. Linear interpolation between the two curves gives a continuous closed-curve homotopy avoiding zero (endpoints match across segments). Therefore the winding number of the rational polygon p_j about zero equals that of P(C), hence equals the zero count of W. It may be computed exactly by signed crossings of a ray chosen to avoid all polygon vertices and collinear degeneracies, using rational orientation tests. No principal-argument branch ambiguity or unchecked numerical quadrature is necessary. Conditions are sufficient not necessary. Subdivide further, improve evaluation precision or reduce residual bounds if they fail. A failed test is inconclusive.

This provides an explicit discrete certificate including arithmetic rounding, finite representer approximation and continuum contour control. In practice, tighter segmentwise E and D or certified complex interval evaluations may be preferable. Known zeta zeros are not inputs.

## 4. Ordering and artificial Fourier-grid roots

For T>0 and h>0 take a rectangle with real sides 0,T and imaginary sides +/-h, certifying its full boundary. Exact W has only real simple zeros and W(0)!=0. The count in this rectangle is exactly the number of positive local eigenvalues strictly below T, provided the certificate proves no boundary zero. For ordered disjoint intervals (l_j,r_j) inside (0,T), certify corresponding smaller rectangles with real sides l_j,r_j and height h. If each count is one and the enclosing count equals the number of intervals, they isolate the first consecutive positive eigenvalues in order. More generally prefix counts at left/right endpoints establish the index; simply finding a root in a disk or seeing a sign change does not establish its index. A rectangle starting at zero is legitimate because W has no zero there.

All finite Fourier trial functions vanish at grid locations z=pi m/a with |m|>N if all trial modes have |j|<=N; the sinc numerator vanishes and no denominator has a removable nonzero term there. P inherits these spurious grid roots. Never count only selected real scan roots and discard the others while asserting a rigorous count. The unmodified P is entire and the full winding test counts all its roots, real or complex, including spurious ones. If an unwanted grid root lies inside a successfully certified contour, equality of counts still holds, but it is not an identification of that artificial zero with an exact eigenvalue. For practical certification select a compact target region strictly inside the Fourier band or increase N; do not remove factors from P without re-deriving a compatible error bound. A zero on the boundary causes the strict Rouché test to fail, as it should.

## 5. Conditional eventual certificate existence, separate from practical feasibility

C02 gives the finite matrix identity G=D_diag+V_bounded with real diagonal d_j bounded below and d_j->infinity as |j|->infinity, and self-adjoint bounded V_bounded. On Fourier coefficient ell2 define the self-adjoint operator B=D_diag+V_bounded on Dom D_diag, using the standard bounded self-adjoint perturbation theorem. Its lower-bounded closed form is the closure of the finite-coordinate form: the diagonal form after a sufficiently large positive shift is a weighted ell2 norm with finite sequences dense, and adding bounded V_bounded preserves that form domain and equivalent shifted norm. The finite-coordinate form agrees with the arithmetic q by C02. The imported Fourier form-core property in Suzuki Proposition 6.1 and uniqueness of closed form closure therefore identify B with the Fourier representation of A_a. Finite vectors are also graph-norm dense in Dom B, because coordinate truncation converges in the graph norm of D_diag and the bounded perturbation preserves graph-norm equivalence.

Consequently for either exact k in Dom A_a and any epsilon>0 a finite trial v can be chosen with ||A_a(k-v)||_2<epsilon. Its finitely many coefficients can be approximated by rational complex numbers with arbitrarily small residual change because A_a restricted to that finite space is bounded into L2. This is an existence statement; the ordinary energy Galerkin sequence need not be assumed graph-norm convergent. For fixed rational trial, the residual bound from C02 can approach the actual norm arbitrarily closely by extending the computed Fourier head and taking sufficiently accurate outward arithmetic; its tail bound tends to zero. For fixed computable a and available rigorous arithmetic for the exact Gram entries and forcing, enumerate finite rational trials and head sizes/precisions by dovetailing; under RH and a certified kappa>0, a trial with any requested residual tolerance can eventually be certified. C02 gives a separate in-principle search for such kappa. Cutoffs at exact prime-power thresholds may be handled with a known finite prime-power list including equality (the equality contribution is zero), rather than requiring decidability of equality of arbitrary computable reals.

On a fixed polygon free of exact zeros, min_C |W|>0. Taking residuals small enough makes E arbitrarily small and P uniformly close to W. With sufficiently fine subdivisions and precision, C03.3–4 follow. Since the exact zeros are isolated, simple and real, there exist rational rectangles isolating any finite set and certifying prefix counts. Thus, conditional on the imported hypotheses and validated finite arithmetic, the framework admits an exhaustive finite-search certificate for each fixed finite collection of local eigenvalues. No efficiency or uniform rate is asserted. This is stronger than relying on compact-uniform convergence alone; the graph-core argument justifies arbitrarily small full residuals for appropriate finite trials. An actual finite validated solve and contour count are still required for a numerical result.

## 6. Status

The contour and graph-core derivation is internally checked, not independently reviewed or formalized. Rouché and bounded perturbation/closed form theory are standard; no novelty claim. Suzuki proves locally uniform Galerkin convergence in Proposition 6.1 and gives the characteristic formula; our proposed certificate supplies conditional quantitative residual-to-count steps rather than a claim to replace that theorem. C04 will use the worker's independent C02 audit and feasibility investigation when available, and attempt a modest example or record the numerical obstruction. Published coercivity may be very small; the crude C02 residual tail may demand impractical computation. No certified root, no independently verified coercivity number, and no claim about the limiting zeta ordinate from this local certificate alone. The separate Campaign III bounds would be needed to relate local eigenvalues to zeta zeros.

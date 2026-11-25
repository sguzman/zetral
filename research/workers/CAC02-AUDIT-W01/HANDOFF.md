# CAC02 independent Schur-form audit

2026-11-25. Independent derivation check of `research/positivity/CAC02-exact-cell-schur-inertia.md` at main commit `707d152`. I found the finite Schur formulas and comparison directions consistent, conditional on CAC01's certified complement lower bound and on the stated form-domain assumptions. No finite Schur matrix was numerically evaluated in this audit.

## Form completion and inertia

With (Q=VV^*), (E=\operatorname{ran}(I-Q)), and (D\ge dI>0) the operator of the restricted complement form, write (R=(I-Q)BV). Since (Vc\in\operatorname{Dom}B), the cross term in the (B-z) form is exactly (2\Re\langle Rc,g\rangle); the (zVc) part vanishes against (g\in E). The shear (g\mapsto g+D^{-1}Rc) preserves the form domain because (D^{-1}Rc\in\operatorname{Dom}D\subset\operatorname{Dom}D^{1/2}). Completing the square gives
\[
 q_{B-z}(Vc+g)=c^*(H-zI-R^*D^{-1}R)c+
 q_D(g+D^{-1}Rc).
\]
The shear is bounded and invertible in (L^2\oplus E) (the cell component is finite dimensional and (D^{-1}R) is bounded), so the negative index and threshold nullity reduce to the finite Schur matrix (S(z)). The radical is exactly (c\in\ker S(z),\;g=-D^{-1}Rc).

Because (0<D^{-1}\le d^{-1}I), one has (H-zI-d^{-1}R^*R\le S(z)\le H-zI). Thus (n_-(H-zI)\le n_-(S(z))\le n_-(H-zI-d^{-1}R^*R)). Strict positivity of the lower comparison is sufficient for positivity; a zero comparison endpoint alone does not certify threshold nullity.

## Error propagation checks

For an isometric (V), (M_2=(BV)^*(BV)) and (R^*R=M_2-H^2). If ​\(\|H-H_0\|\le e_1\) and \(\|M_2-G_0\|\le e_2\), then
\[
 \|R^*R-(G_0-H_0^2)\|
 \le e_2+e_1(2\|H_0\|+e_1),
\]
as claimed. For the lifted action (Z), (\|R\|\le\|(I-Q)Z\|+\epsilon); combining this with a certified lower bound for \(\lambda_{min}(H)\) gives the stated direct-residual positivity criterion. The approximate-solve identity also checks algebraically: with (F=R-DU),
\[
R^*D^{-1}R=R^*U+U^*R-U^*DU+F^*D^{-1}F,
\]
and (0\le F^*D^{-1}F\le d^{-1}F^*F).

These are sufficient finite-subspace/complement criteria, not an executed full-operator certificate. A positive finite Ritz block alone remains insufficient.

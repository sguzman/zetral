# SWD02 — Same-window residual-to-kernel inertia transfer

Status: READY_FOR_REVIEW

AI-assisted candidate deduction without RH. It uses SWD01's near-orthogonal smooth right inverse and FZE02's ordinary-norm mixed residual bound. No numerical computation, formal verification, new source retrieval, or priority claim.

## Projection into the selected-evaluation kernel

Let (C_a\) be the finite selected-evaluation map, (K_a=\ker C_a\), and let (W_a\) be a smooth right inverse with (C_aW_a=I\). Define
\[
\Pi_a=I-W_aC_a.
\]
Then (\Pi_a^2=\Pi_a\), \(\operatorname{ran}\Pi_a=K_a\), and (\ker\Pi_a=\operatorname{ran}W_a\). It maps the form domain into (K_a\) at the same window. If (W_a\) is within \(\eta\) of the orthogonal right inverse (W_a^0=E_a(E_a^*E_a)^{-1}\), then
\[
\|\Pi_a-P_{K_a}\|\le\eta\|C_a\|,
\qquad \|\Pi_a\|\le1+\eta\|C_a\|,
\]
where (P_{K_a}\) is the ordinary orthogonal projection. The evaluation maps are uniformly bounded, so this is a uniform near-contraction when (\eta\) is small.

Let (q_a^{\rm rem}\) be the form with the selected finite zero contribution removed. FZE02's smooth-dual estimate implies, for (c=C_af\),
\[
|q_a^{\rm rem}(W_ac,f)|+|q_a^{\rm rem}(W_ac,W_ac)|
\le C_{F,\eta}L_a\|f\|_2^2,
\quad L_a=1+e^{ba}\sqrt{I_a(b)},
\]
where (b\) bounds the remaining nonreal deviations. Expanding (q_a^{\rm rem}(\Pi_af,\Pi_af)\) therefore gives the ordinary-norm perturbation estimate
\[
|q_a^{\rm rem}(\Pi_af,\Pi_af)-q_a^{\rm rem}(f,f)|
\le C_{F,\eta}L_a\|f\|_2^2. \tag{1}
\]
For (b>0\), (L_a=O(e^{2ba})\); for (b=0\), (L_a=O(\sqrt a)\). No estimate on the residual form's unrestricted negative part is used.

If an (m\)-dimensional subspace (X\) satisfies
\(q_a^{\rm rem}(f,f)\le-t\|f\|_2^2\) with (t>C_{F,\eta}L_a\), then (\Pi_a\) is injective on (X\): a nonzero vector in its kernel would lie in the smooth finite range of (W_a\), where the same expansion forces the residual form to be bounded below by (-C_{F,\eta}L_a\|f\|^2\), a contradiction. Its image is (m\)-dimensional, lies in (K_a\), and by (1) has residual depth at least
\[
\frac{t-C_{F,\eta}L_a}{(1+\eta\|C_a\|)^2}.
\]
Indeed (q^{\rm rem}(\Pi_af)\le-(t-CL_a)\|f\|^2\), while \(\|\Pi_af\|\le(1+\eta\|C_a\|)\|f\|\). Conversely, restriction to (K_a\) cannot increase any residual negative depth. Thus for fixed accuracy the same-window kernel and unrestricted residual depths agree up to a multiplicative (1+O_F(\eta)\) loss and additive (O_{F,\eta}(L_a)\), with no dimension loss or support enlargement.

## Combining with the selected finite block

In SWD01 coordinates the full form is the direct sum of the selected finite block and the residual-kernel form, up to an ordinary-norm perturbation (O_{F,\eta}(L_a)\) and a metric distortion (1\pm O_F(\eta)\). The preceding projection comparison replaces the residual-kernel depth counts by those of the unrestricted residual form at the same window, with the same scale of additive error and an arbitrarily small fixed multiplicative distortion. Applying this to strict depth thresholds (t\gg L_a\) gives the ordered-union comparison of the selected finite block and unrestricted residual counts, up to (1\pm O_F(\eta)\) in threshold and (O_{F,\eta}(L_a)\) additive error. The finite block must retain its exact ordinary Gram metric; it is not the Euclidean coordinate norm unless the Gram is first orthonormalized.

When the selected set is reflection invariant, choose the smooth right inverse equivariantly as in FZE02. Then (\Pi_a\) preserves both parity sectors, so the same argument holds parity by parity.

## Limits

- This is a same-window comparison above the residual mixed-form scale, with fixed selected nodes and fixed approximation accuracy.
- It does not bound residual ordinary depths or prove a residual upper exponent.
- Constants depend on the finite node set and chosen smooth profiles; no growing-set uniformity is claimed.
- FZE02's right-inverse and mixed-form estimates are inherited candidate inputs.

# SWD01 — Near-orthogonal smooth right inverse

Status: READY_FOR_REVIEW

AI-assisted candidate deduction without RH. Uses FZE02's finite evaluation columns and ordinary-norm residual mixed-form estimate. No new literature retrieval, numerical computation, formal verification, or priority claim.

## 1. Smooth right inverse close to the orthogonal one

Let (E_a:\mathbb C^m\to L^2(-a,a)\) synthesize the normalized selected-evaluation Riesz columns and (C_a=E_a^*\). Their Gram matrix (G_a=E_a^*E_a\) converges to a positive definite matrix (G\). The exact orthogonal right inverse and kernel projection are
\[
W_a^0=E_aG_a^{-1},\qquad P_a^0=E_aG_a^{-1}E_a^*.
\]
Thus (C_aW_a^0=I\), \(\operatorname{ran}W_a^0=\operatorname{ran}E_a=\ker(C_a)^\perp\), and
\[
\|W_a^0c+k\|_2^2=c^*G_a^{-1}c+\|k\|_2^2,\qquad k\in\ker C_a.
\]

Approximate each limiting half-line exponential column in (L^2\) by a fixed compact smooth endpoint profile, with error (\eta>0\), and translate/reflect those profiles to form (E_a^s\). The approximation error is uniform for all sufficiently large (a\). Its cross Gram (M_a=C_aE_a^s\) differs from (G_a\) by (O_F(\eta)\) and is uniformly invertible if (\eta\) is small. Set
\[
W_a=E_a^sM_a^{-1}.
\]
Then (C_aW_a=I\), the range consists of a fixed finite family of smooth endpoint profiles, and
\[
\sup_{a\ge a_0}\|W_a-W_a^0\|_{\mathbb C^m\to L^2}\le C_F\eta.
\]
The last estimate follows by writing
\(W_a-W_a^0=(E_a^s-E_a)M_a^{-1}+E_a(M_a^{-1}-G_a^{-1})\).
The constants are uniform in (a\) but may depend on the selected finite set and smooth profiles.

## 2. Near-isometric coordinates and block-form comparison

Use the algebraic bijection
\[
\Phi_a(c,k)=W_ac+k,\qquad c\in\mathbb C^m,\ k\in K_a:=\ker C_a.
\]
The orthogonal reference map \(\Phi_a^0(c,k)=W_a^0c+k\) has squared norm
\(\|(c,k)\|_0^2=c^*G_a^{-1}c+\|k\|_2^2\). From the closeness above and uniform equivalence of \(G_a\) to (G\), for any requested (\varepsilon>0\) the profiles can be chosen so that
\[
(1-\varepsilon)\|(c,k)\|_0^2\le\|\Phi_a(c,k)\|_2^2
\le(1+\varepsilon)\|(c,k)\|_0^2
\]
for all sufficiently large (a\).

Write the Weil form as (q_a=q_F+q_{\rm rem}\), where (q_F\) is the selected finite zero contribution and (q_{\rm rem}\) is the residual form. In these coordinates, (q_F(\Phi(c,k),\Phi(c,k))=q_F(W_ac,W_ac)) depends only on (c=C_a\Phi(c,k)\); it is the unchanged finite block from FZE02. The residual form gives
\[
q_{\rm rem}(\Phi(c,k),\Phi(c,k))
=q_{\rm rem}(k,k)+2\Re q_{\rm rem}(W_ac,k)+q_{\rm rem}(W_ac,W_ac).
\]
FZE02's smooth-dual estimate bounds the last two terms in absolute value by
\[
C_{F,\varepsilon}L_a\bigl(\|c\|_{G_a^{-1}}^2+\|k\|_2^2\bigr),
\qquad L_a=1+e^{ba}\sqrt{I_a(b)}.
\]
Here (b\) bounds the remaining nonreal deviations; for (b>0\), (L_a=O(e^{2ba})\), and for (b=0\), (L_a=O(\sqrt a)\). Consequently the full form, in the near-orthogonal coordinates, differs from the direct sum of the selected finite form and the residual form restricted to (K_a\) by an ordinary-norm bounded perturbation of size (C_{F,\varepsilon}L_a\).

Let \(Q_a^0\) denote that direct-sum form measured in the orthogonal reference norm \(\|(c,k)\|_0\), and let (N_j(Q)\) denote its (j\)-th negative depth. Minmax and the two metric inequalities give the same-window comparison
\[
\frac{(N_j(Q_a^0)-C_{F,\varepsilon}L_a)_+}{1+\varepsilon}
\le N_j(q_a)
\le\frac{N_j(Q_a^0)+C_{F,\varepsilon}L_a}{1-\varepsilon}.
\]
The depths of (Q_a^0\) are precisely the ordered union of the finite selected block depths and the residual-kernel depths, in the correct ordinary metric. This is at the same window (a\); no support enlargement is used. For a threshold much larger than (C_{F,\varepsilon}L_a\), it yields a multiplicative (1\pm O(\varepsilon)\) comparison. The approximation accuracy must be fixed before the window limit; constants in (L_a\) can depend on that accuracy.

## Limits

- This compares the full form to the selected block plus the residual form on the evaluation kernel, not yet to the unrestricted residual spectrum.
- The result is meaningful above the residual mixed-form scale; it does not bound that residual spectrum or eliminate its possible anomalous modes.
- Constants depend on the fixed selected node set and chosen smooth profiles. No uniform growing-set statement follows.
- The evaluation Gram limit and FZE02 mixed-form estimate are inherited candidates; no independent source, numerical, or formal verification was performed.

# BSL01 independent singular-model formula derivation

2026-11-25. Auxiliary derivation for Campaign XLIII's BSL01, from main commit `583ba7b`. It gives a convenient exact representation for the logarithmic model on piecewise affine seeds and a uniform finite-block residual bound. This is a worker candidate, not a formal verification of CPC04's periodized form identity.

## Exact model action from jumps

Let
\[
 (M f)(x)=\int_0^{d_0}\frac{2f(x)-f(x+s)-f(x-s)}{2s}\,ds,
\]
and assume the physical interval and every knot of a compactly supported piecewise affine (f) lie in a region where no periodized copy can meet (x\in I). Include the zero-extension endpoints among the knots (\xi_j). Write (J_j=f(\xi_j+)-f(\xi_j-)\) for value jumps and (K_j=f'(\xi_j+)-f'(\xi_j-)\) for slope jumps. Then, a.e. on (I),
\[
 f(y)=\sum_j\{J_j\mathbf1_{y>\xi_j}+K_j(y-\xi_j)_+\}.
\]
For (r=x-\xi), the two elementary model responses are
\[
 M\mathbf1_{y>\xi}(x)=\begin{cases}\tfrac12\operatorname{sgn}(r)\log(d_0/|r|),&0<|r|<d_0,\\0,&|r|>d_0,\end{cases}
\]
and
\[
 M(y-\xi)_+(x)=\begin{cases}\tfrac{|r|}{2}\log(d_0/|r|)-\tfrac{d_0-|r|}{2},&0\le |r|<d_0,\\0,&|r|\ge d_0.\end{cases}
\]
The step response is logarithmically singular at its knot (an a.e. formula); the ramp response has finite value (-d_0/2) at (r=0). These follow by splitting the defining integral at (s=|r|). Thus (Mf=\sum_j(J_j M H_j+K_j M R_j)), with all physical and zero-extension jumps explicit. As a check, for (f=1_{(-a,a)}), (d_0=2a), this reduces to (-\tfrac12\log((a-x)(a+x)/(2a)^2)), matching BFA03. For (f(x)=x1_{(-a,a)}), it reduces to (x+\tfrac{x}{2}\log((2a)^2/(a^2-x^2))).

For each arithmetic shift (s=\log n), the prime action is exactly the finite sum of affine pieces
\[
 (P_s f)(x)=f(x+s)+f(x-s).
\]
A segment ((\alpha+\beta y)1_{[u,v]}(y)) contributes segments on ([u-s,v-s]\cap I) and ([u+s,v+s]\cap I), with values ​\(\alpha+\beta(x+s)\) and \(\alpha+\beta(x-s)\), respectively. Their clipped endpoints account for every shifted jump; overlapping pieces are added. This avoids dropping prime-shift boundary jumps when forming arithmetic seed blocks.

## Uniform block residual bound

Let (v_1,\ldots,v_m) be BV supported seeds with zero-extension variations (V_j), and let (b_N(v_j)) be the BFA03 lifted actions truncating only the residual (r(D)). Put (\kappa_N=J L^{3/2}/(\sqrt3\pi^2N^{3/2})), where (J) is the residual-symbol constant from BFA03. Columnwise (\|Bv_j-b_N(v_j)\|_2\le\kappa_N V_j). For the action maps (\mathcal Bz=\sum_jz_jBv_j) and (\widetilde{\mathcal B}_Nz=\sum_jz_jb_N(v_j)), Cauchy–Schwarz gives
\[
 \|\mathcal B-\widetilde{\mathcal B}_N\|_{\mathbb C^m\to L^2(I)}
 \le \varepsilon_N:=\kappa_N\Big(\sum_jV_j^2\Big)^{1/2}.
\]
Consequently the block Gram matrices obey
\[
 \|\mathcal B^*\mathcal B-\widetilde{\mathcal B}_N^*\widetilde{\mathcal B}_N\|
 \le \varepsilon_N(2\|\widetilde{\mathcal B}_N\|+\varepsilon_N).
\]
This is a uniform finite-block bound; it does not certify positivity on the full Hilbert space or control unseen directions.

No numerical block benchmark was run. The formulas are intended as an independent derivation aid for BSL01/02, not a novelty or spectral claim.

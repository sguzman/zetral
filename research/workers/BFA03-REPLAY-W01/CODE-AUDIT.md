# BFA03 interval implementation audit

2026-11-25. Additional source-level check of `experiments/bfa03-lifted-second-moments.js` at main commit `4a03bdf`. No inconsistency found in the reviewed implementation path.

- The residual Taylor polynomial uses (j_m=g_{m+1}/2); the Cauchy tail (5\,2^{-30}) and derivative tail (5(32)2^{-30}) bound discarded coefficients on ([0,1]). The accumulated (J_r) upper endpoint applies absolute values to (j(1)), all retained derivative terms, and the derivative tail before multiplying by 2.
- The midpoint symbol error for (r(t)=-2\int_0^1j(s)\cos(ts)ds) is the composite midpoint bound (2(20+2|t|+t^2)/(24M^2)=(20+2|t|+t^2)/(12M^2)). The trigonometric variation on each physical cell is bounded by its half-width times (\sum |a_n||t_n|).
- The residual action is reconstructed with normalized circle coefficients: its zero-mode contribution is (a_0/2), and each (n>0) pair contributes (a_n\cos(t_nx)). The physical interval norm is integrated on one half and doubled by even symmetry; the prime threshold and monotone pole term are interval-enclosed on each cell.
- The singular part (L(d)=\tfrac12\log(1/d)) and (L^2) use their exact primitives at the endpoint. For interval (R) enclosing the regular action, (\int(L+R)^2\) is enclosed using (\int L^2+2R\int L+hR^2), with interval multiplication and a square enclosure that includes zero if needed.
- The final action error uses (J_r^2V^2L^3/(3\pi^4N^3)) with (V=2,L=2), and the resulting square-root interval is enlarged by the certified norm error before squaring. This is the physical support norm; the code does not substitute a full-circle symbol square.

This is a code-path audit, not a formal proof of all low-level BigInt interval primitives or external special-function bounds. No full-operator or spectral conclusion follows.

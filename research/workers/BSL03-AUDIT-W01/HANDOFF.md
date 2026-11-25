# BSL03 parity benchmark replay and sign check

2026-11-25. Ran `node experiments/bsl03-two-cell-parity-moments.js` in a separate Node.js 24.22.3 process from main commit `707d152`. It exited successfully and reproduced the four reported first/second moment intervals, residual upper bounds, and tail constants exactly. I also independently checked the odd-sector model and shift signs.

On the left half (d=x+1/2\in(0,1/2)), the odd seed's jumps are (+1,-2,+1) at (d=0,1/2,1). Applying the BSL01 step response gives
\[
 \tfrac12\log(1/d)+\log(1/(1/2-d))+\tfrac12\log(1-d),
\]
matching the documented model action. The prime shift with (s=\log2) has (u_o(x+s)=-1) exactly for (d<1-\log2) on this half-window; the arithmetic operator's negative shift coefficient therefore contributes (+\log2/\sqrt2) on that cell. The odd pole action is (8(\cosh(1/4)-1)\sinh(x/2)), which is negative on the left half. For positive-exponential Fourier coefficients, (c_n=-i(1-\cos(\pi n/4))/t_n); pairing (n,-n) gives the stated negative sine residual polynomial.

The replay confirms the two restored finite Ritz entries are positive. The residual inclusion radii remain larger than the trial centers, so they do not sign-locate nearby spectrum. This is a two-vector Ritz check, not a full-space positivity certificate; the odd calculation still lacks a separate independent physical-space implementation.

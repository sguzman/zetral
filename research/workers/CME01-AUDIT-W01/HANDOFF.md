# CME01 independent arithmetic audit

2026-11-25. Independent line-by-line estimate audit of `research/positivity/CME01-explicit-sobolev-and-analytic-constants.md` at `origin/main` commit `364cc73`. This is an internal worker check, not a formal proof verification or an audit of the imported classical identities. I found no numerical-constant error in the displayed chain; the result remains a candidate deduction.

## Checks made

1. **Fractional Hardy estimate.** Averaging over (16x\le y\le32x), the difference term is bounded by \((2/16)32^{3/2}D_+(f)=16\sqrt2D_+(f)<24D_+(f)\). Interchanging the nonnegative second term gives \((\sqrt2-1)y^{-1/2}<\tfrac12 y^{-1/2}\); absorption yields (I_+(f)\le48D_+(f)). Reflection and translation supply the endpoint estimates.

2. **Interval cutoff.** The ordered inside/outside pairs contribute (4\int_l^r|f(x)|^2[(x-l)^{-1/2}+(r-x)^{-1/2}]dx). Applying the two Hardy estimates and (D_{inside}\le D) gives (D(Qf)\le385D(f)). Adding the (L^2) term gives squared (H^{1/4}) norm at most (386\|f\|^2), hence operator norm below 20. Interpolation is on full-line Bessel spaces, so it does not require interpolation of support-constrained spaces.

3. **Archimedean symbol bound.** From (k(u)\le4/(3u)) for (u\le1), split at (r=1/\max(1,|\omega|)) and 1. The small interval contributes at most (2/3), the middle at most \((16/3)\log\max(1,|\omega|)\), and the tail at most (32/3). Together with \(|\alpha_0|<7\), these imply the stated (19+6\log\sqrt{1+\omega^2}\) envelope. For (0<\delta\le1/4), multiplying the envelope by (e^{-\delta y}) gives (\delta\sup_y(19+6y)e^{-\delta y}\le19/4+6/e<7), as required for the (7/\delta) loss.

4. **Prime and pole constants.** Two directed shifts per prime coefficient give at most (40S); multiplying by (\delta\le1/4) gives (10S\). A rank-one term with coefficient magnitude 2 contributes at most (2\delta\|u\|_2\|u\|_{H^{1/4}}\le\tfrac12\|u\|_2\|u\|_{H^{1/4}}\). This matches the stated (C_a\) contribution. Equal losses (\delta=1/(4n)\) then give the ( (4eC_a)^n n!\) factor used from APM01.

5. **BV seed estimate.** Splitting the Fourier Sobolev integral at frequency 1 and using (|\widehat v|\le\min(J,V/|\omega|)) gives (2J^2/\pi+4V^2/\pi), consistent with the stated normalization. The bounds are conservative, not practical degree estimates.

## Limits and handoff

This audit does not verify the imported digamma integral representation, the APM01 operator-domain iteration, the cited classical multiplier context, or any periodic-space cutoff estimate. CME01 itself correctly flags that its real-line constant cannot be transferred to the circle without a separate argument. No numerical benchmark was run and no actual spectral moment was evaluated. CME02's periodic symbol and intermediate support projections therefore remain the next technical point requiring independent scrutiny.

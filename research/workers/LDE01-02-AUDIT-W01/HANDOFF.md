# LDE01–02 independent audit

Status: READY_FOR_REVIEW

Scope: audit of the fractional weighted-sampling estimate, ordinary energy budget, compact deviation envelope, and indexed threshold deductions in `LDE01-fractional-log-density.md` and `LDE02-deviation-density-envelope.md`. The paired Weil identity and local zero-count input are inherited and were not independently source-verified here.

## Findings

The bin estimate in LDE01 has the stated scale under its explicit local hypothesis. The (d^2\)-weighted pair deficit is bounded by (W_{k,I}\) times the local supremum of \(|F'|^2\). The radius-(1/a\) disk estimate contributes (O(a^2)\); the weighted convolution estimate contributes (O(a^4e^{2|v|(a+1)}L_\theta(f))\); and the (v\)-strip has bounded length with \(|v|(a+1)\le ba+O(1)\). This gives the displayed (O(a^6e^{2ba}L_\theta)\) bound. The ordinary energy budget is also in the correct direction: on a negative unit vector, (L_1=q_\alpha\le\|B_{\rm rem,a}\|=O_F(e^a)\). Jensen then gives (L_\theta\le L_1^\theta\), including the θ=0 convention. Combining the two yields the conditional rate (\min(1,\max_i(2b_i+\theta_i))\).

For LDE02, (\theta(J)\) is monotone under inclusion, so the neighborhood profile \(\theta_*\) is upper semicontinuous by the stated containment argument. Compactness of the deviation closure then justifies the finite-cover upper bound; the cover need not have uniform constants as its radius shrinks because it is fixed before the window limit. The tail closure is nested compact, and upper semicontinuity gives convergence of its envelope to (H_{\rm tail}\). Finite removal does not change the local limsup profile because it changes only finitely many ordinate bins.

The strict-threshold rate-count argument is consistent with FZE03: thresholds are taken away from finite selected rates, bounded lower-rate terms are negligible there, and fixed support shifts are harmless for rates with a strict exponential margin. The indexed upper argument correctly intersects a (j\)-dimensional negative space with at most (j-1\) fast-pair evaluation constraints; on that intersection the fast pair's negative square is removed. The original negative-space log-energy budget remains available for the residual-bin estimate. The lower bound is imported from NIR03. I found no decisive exponent, count, or threshold-direction error under these inputs.

## Limits

- The fractional local-density bounds and tail-profile hypothesis are conditional; no such improvement over the classical θ=1 count is established for zeta here.
- The results give upper rate bounds, not existence of a negative residual mode or an evaluated ordinary exponent.
- The local zero count, paired identity, FZE03 comparison, and NIR03 lower rates were not independently source-verified or formally checked.
- No RH conclusion, actual off-line zero, numerical experiment, or priority claim.

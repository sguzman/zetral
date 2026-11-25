# LDE03 independent audit

Status: READY_FOR_REVIEW

Scope: audit of packet selection, carrier-scale extraction, unit-bin concentration, and the deviation-cluster envelope argument in `research/positivity/LDE03-carrier-local-density-necessity.md`. FES01/02 and LDE01/02 are treated as inherited candidates; no external sources were retrieved.

## Findings

The FES02 selection extends to the fixed residual form because finite zero removal preserves the exact frame identity, the form-domain core, and the ordinary coarse lower bound. With fixed moment order, the near-limsup ratio gives a uniform packet moment; the moment order may depend on the chosen \(\epsilon\), as the note correctly states.

The carrier cost bounds are consistent. LDE01's \(\theta=1\) estimate and the packet's relative moment imply \(\log(2+|\omega_\ell|)\ge\exp((s-2B_r-o(1))A_\ell)\). Conversely, negativity and the ordinary arithmetic remainder bound yield \(L_1(v_\ell)=O(e^{A_\ell})\), while the bounded relative moment gives \(L_1(v_\ell)\ge\log(2+|\omega_\ell|)-O(1)\). Thus the subsequential \(\kappa\) lies in the stated interval.

The conjugate-evaluation difference retains the small-deviation factor \(\min(1,A d)e^{Ad}\). The packet's relative Sobolev moment controls the derivatives after demodulation; integrating by parts at carrier-relative frequency gives (2). The positive paired squares can be discarded, so a negative packet forces the weighted tilted sum (3). The classical local count bounds the tail outside \(R_\ell=e^{\epsilon A_\ell}\); choosing the fixed moment order with the stated strict exponent margin makes it negligible. Since the bin weight envelope is summable for (2m>1\), a single unit interval within that radius must carry the lower exponent in (4).

For the final profile step, fixed finite covers are taken before the window limit. The nested tail closures ensure deviations at ordinates tending to infinity approach \(D_\infty\); the local density exponent is monotone under set inclusion. Applying the fixed-cover estimate to (4) and then shrinking the cover radius yields
\(s\le\max_{d\in D_\infty}(2d+\kappa\theta_*(d))\). The diagonal cluster interpretation is compatible with the definition of \(\theta_*\), because the selected carrier bins tend to infinity and the same lower population applies in each fixed neighborhood of the limiting deviation.

I found no decisive sign or exponent error under the inherited inputs.

## Limits

- The local density at the selected carrier bin is a necessary condition, not a contradiction or a construction of a negative mode.
- Packet moment constants and sequences depend on the chosen fixed order; no simultaneous all-orders control is asserted.
- No actual off-line zero, RH conclusion, numerical or formal verification, or priority claim.

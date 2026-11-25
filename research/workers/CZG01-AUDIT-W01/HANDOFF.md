# CZG01 independent audit

Status: READY_FOR_REVIEW

Scope: independent algebraic and estimate audit of `research/positivity/CZG01-separated-cross-identity.md`, especially the separated-endpoint Fourier identity, the cross-form kernel scaling, the sign of the selected zero half-plane, and the carrier-centered weighted zero sum. This is an AI-assisted scoped review, not formal verification or human review.

## Findings

I found no algebraic discrepancy in the audited identities.

For the stated Fourier convention, substituting (x=a-t) in the right profile and (x=-a+s) in the left profile gives
\[
\mathcal F f_R(z)\,\overline{\mathcal F f_L(\bar z)}
=e^{2ia(z+\omega)}\int (g_R*\overline{g_L})(r)e^{-i(z+\omega)r}\,dr.
\]
Thus this orientation has factor magnitude (e^{-2ad}), so it amplifies (d<0), as stated. In the cross kernel, (y-x=2a-r); multiplication by the two physical carrier factors contributes (e^{i\omega(2a-r)}). The scaled pole term is (e^{-r/2}+e^{-2a+r/2}), while the archimedean off-diagonal kernel contributes (O_W(e^{-2a})) for fixed support bounded away from (r=0).

The zero coefficient has magnitude (e^{-a-2ad}=e^{-2a\delta_z}) for \(\delta_z=1/2+d=1-\Re\rho\). The carrier-relative Fourier variable is \(u+\omega\). Repeated integration by parts gives the displayed rapid-decay factor uniformly in the strip for fixed smooth compactly supported (W). Binning ordinates using the classical local zero count gives the stated logarithmic total and tail bounds for fixed (p>1). In particular, the tail estimate is a bound after discarding the attenuation factor, so it applies to the attenuated sum as well.

The approximate-identity passage is plausible under the stated paired-form identity and its uniform rapid-decay bounds: on a common compact support, convergence in smooth seminorms supplies a summable majorant against the local zero count. This audit did not independently retrieve or re-prove that imported paired-form identity or the local zero-count theorem.

## Limits

- No counterexample or sign error found within the stated conventions.
- The conclusion is conditional on the source identities and local zero-count input as documented by the author; they were not independently source-verified here.
- Bounds are fixed-test/fixed-(p) bounds. They do not by themselves exclude nonzero twisted limits at all carrier scales or prove an ordinary spectral upper bound.
- No numerical, interval, or formal verification; no RH conclusion, actual off-line zero, or priority claim.

No source retrieval or execution was performed for this audit.

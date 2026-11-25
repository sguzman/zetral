# LZC01–02 independent audit

Status: READY_FOR_REVIEW

Scope: audit of subsequential local-measure compactness, the analytic test identity, the positive strip kernel projection, and the arithmetic sweep/continuation in `LZC01-local-strip-projection.md` and `LZC02-arithmetic-sweep.md`. The paired Weil identity and classical local count are treated as inherited inputs; no external source retrieval was performed.

## Findings

For LZC01, the translated zero measures have uniformly bounded mass on each fixed relative unit interval, and their tails against the fixed analytic test kernels are uniformly summable by the local count and rapid decay. Modulating by (e^{-iTx}\) shifts evaluations to (u-T\); the fixed-window arithmetic remainder is (O_A(1)\), while \(\alpha(t-T)/\log(2+|T|)\to1\) under an integrable majorant. This yields the stated limit identity with the correct normalization. The approximate-identity step to the one-variable transform uses real-even (g_\epsilon\), so \(\overline{F g_\epsilon(\bar z)}=F g_\epsilon(z)\), as required.

The kernel (Q_{c,v}\) has Fourier multiplier \(\cosh(vs)/\cosh(cs)\); it is positive for \(|v|<c\) by the displayed real-part formula and has unit mass. Convolution with it converts the strip identity to (p_c\)'s Fourier tests. The Jacobian under (t=x-y,s=x+y\) leaves the kernel identity (G(t,s)=\delta(t)\) with the correct (1/(2\pi)\) marginal. Positivity and translation-boundedness justify the iterated integrals. The uniform marginal conclusion is consistent with, and does not force, concentration on (v=0\); the translation-invariant examples in LZC01 are valid.

For LZC02, the (c>1/2\) test is integrable throughout the zero strip, the prime expansion is absolutely convergent, and the pole/prime constants in (1) agree with the Fourier transform normalization. For fixed sufficiently large \(|T|\), continuation along real (c>b\) avoids remaining zero poles by the residual deviation bound; the finite removed terms avoid their kernel poles by the ordinate separation. The log-derivative exponent obtained by the zero-free rectangle and Gaussian maximum-modulus interpolation is \((1-\sigma)/(1-\sigma_0)\) up to \(\epsilon\), and the (k=0\) term dominates the continued series. This gives the stated fractional discrepancy exponent.

The final rate calculation is also consistent: solving \(X\le C e^{2ca}X^{\theta_c}\) gives exponent (2c/(1-\theta_c)=2c(1/2-b)/(c-b)\), which is at least one and is strictly larger when (b>0\), (c<1/2\). Thus the signed saving does not by itself improve the coarse ordinary exponent.

I found no decisive sign or normalization error within this scope.

## Limits

- The results concern fixed-support test limits and projected density; they do not determine the unswept off-line population.
- The zero-free continuation and local count are imported classical inputs; their source provenance was not independently checked here.
- No actual off-line zero, RH conclusion, numerical/formal verification, or priority claim.

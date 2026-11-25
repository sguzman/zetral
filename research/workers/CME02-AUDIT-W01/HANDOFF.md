# CME02 independent periodic truncation audit

2026-11-25. Independent audit of `research/positivity/CME02-periodic-moment-truncation.md` at `origin/main` commit `aca0b27`. The displayed periodic cutoff constants, loss allocation for fixed powers, and finite matrix formula are consistent. One cross-boundary explanation uses an ambiguous/incorrect variable description; the estimate itself has a direct repair. This is an internal candidate audit, not formal verification.

## Cross-boundary correction

The note says that for (x\in I), “all (h) with (x+h) in the periodic complement lie outside the unwrapped interval (I).” Read literally as a statement about the increment (h), this is false: for example, (x=0.9a), (h=0.2a\in I) gives (x+h=1.1a\notin I). The relevant variable is the destination (y=x+h), not the increment.

For fixed (x\in I), the destinations (y=x+h) whose periodic representative lies outside (I) form a subset of the real-line complement (\mathbb R\setminus I), since (I\subset(-L,L)) and all other period copies of the complement also avoid (I). Change variables from (h) to (y); then
\[
 \int_{\{h:(x+h)\bmod 2L\notin I\}} |h|^{-3/2}\,dh
 \le \int_{\mathbb R\setminus I}|y-x|^{-3/2}\,dy
 =2\big((x+a)^{-1/2}+(a-x)^{-1/2}\big).
\]
This justifies the subsequent endpoint Hardy estimate and the stated (385D_{per}+16\sqrt{32/L}\|f\|_2^2) bound. Recommend replacing “all (h) ... lie outside” with this destination-variable argument.

## Other checks

- The periodic difference seminorm Fourier constant is bounded below by restricting its integral to (1\le h\le2), where (2(1-\cos h)>0.8) and (h^{3/2}<3); this gives (C_*>0.26>1/4).
- The truncated-endpoint Hardy estimate absorbs the (J/2) term to give (J\le48D_{per}+2\sqrt{32/L}\|f\|_2^2). Applying it at both ends and multiplying the cross-pair contribution by 4 yields the stated factors 385 and 16.
- In the moment error telescope, (k-1) ordinary factors each lose \(\delta\), the tail factor loses (2\delta\), and ((k+1)\delta=1/4). The deepest input to the tail has exactly (2\delta\) regularity, within its stated range.
- (B_N=QDR_N) is self-adjoint on the supported subspace: in pairings of supported vectors, (Q) drops out and (R_ND=DR_N), so the pairing reduces to the symmetric low-frequency form. The finite formula correctly inserts (Q_N=R_NQR_N) between each pair of diagonal factors; (k=0) remains the physical inner product.

No benchmark was run as part of this audit. The analytic error remains degree-dependent and potentially impractical, as the note states.

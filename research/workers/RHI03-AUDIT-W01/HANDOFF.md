# RHI03-AUDIT-W01 — relative spectral-shift audit

- **ID:** RHI03-AUDIT-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `37778b0` (Campaign XXXIX activation)
- **Scope:** Independently audit RHI03's rank-one counting-function sign, relative-heat Laplace representation, uniqueness recovery, and resolvent/determinant identity. Check the all-(z)-below-spectrum convergence justification.
- **Acceptance question:** Do the relative spectral-shift formulas hold in this setting, and does the cited trace bound cover the stated range of (z)?

## Findings

The counting-function sign is correct. With \(\xi=N_T-N_B\), integration by parts gives
\[
F(t)=\operatorname{tr}(e^{-tB}-e^{-tT})=-t\int e^{-t\lambda}\xi(\lambda)\,d\lambda.
\]
The rank-one min–max principle gives fixed sign for \(\xi\): nonnegative for \(\sigma=+2\), nonpositive for \(\sigma=-2\), and \(|\xi|\le1\). RHI01's short-time coefficient and monotone convergence then yield \(\int|\xi|=|\sigma|\|u\|^2\). The stated uniqueness argument is valid: weight the bounded difference by an exponential to form a finite signed measure, map the lower-bounded half-line to a compact interval by an exponential change of variable, and use polynomial density. Right-continuity of the counting functions recovers their difference at every point from its a.e. class.

The analytic continuation of the relative trace identity into \(\Re z>0\) is sound for semibounded self-adjoint (B,T) and finite-rank (H\): the complex Duhamel integrand is trace class with a locally uniform bound on compact subsets, and the scalar spectral-shift Laplace expression is holomorphic there. For real (z\) below both spectra, the rank-one resolvent identity gives
\[
\operatorname{tr}[(B-z)^{-1}-(T-z)^{-1}]
=-\sigma m'(z)/(1+\sigma m(z))=-d'(z)/d(z),
\]
where (m'(z)=\|(T-z)^{-1}u\|^2\). The denominator is positive below both spectral bottoms. Integration from \(-\infty\), using (d(z)\to1\), gives the stated logarithmic transform and determines (m) on that real interval. No inference about common uncoupled eigenvalues or positivity of the ordinary operator follows.

### Trace-bound range gap and repair

RHI03 says the RHI01 Duhamel trace-norm bound permits the resolvent Laplace integral for every real (z\) below both spectra. The displayed coarse RHI01 estimate is
\[
\|e^{-tB}-e^{-tT}\|_1\le t\|H\|_1 e^{tC},\qquad C=\max(0,-\inf\sigma B,-\inf\sigma T).
\]
By itself this only guarantees convergence of \(\int e^{tz}F(t)/t\,dt\) when (z+C<0). If the common spectral bottom is positive, there are (z\) below both bottoms with (z\ge-C=0\), so that stated estimate alone does not cover the whole claimed range.

The claim is repaired by the sharper elementary estimate already recorded in RHI04. With (m_0=\min(\inf\sigma B,\inf\sigma T)), Duhamel gives directly
\[
\|e^{-tB}-e^{-tT}\|_1\le t\|H\|_1e^{-tm_0}.
\]
Then the weighted integrand is (O(e^{-t(m_0-z)})\), integrable for every (z<m_0), exactly the region below both spectra. Thus the RHI03 conclusion is valid with this sharper bound; the cross-reference to RHI01's coarse estimate should be made explicit/corrected.

## Evidence and limits

- Reviewed `research/positivity/RHI03-relative-spectral-shift.md`, `RHI01-relative-heat-trace.md`, and `RHI04-audit-and-moment-pivot.md` at `37778b0`.
- Exact commands: `git show origin/main:research/positivity/RHI03-relative-spectral-shift.md` and corresponding RHI01/RHI04 paths.
- No numerical or formal computation was run. The classical Krein theory citations were not independently re-opened; this is an internal derivation audit.
- **Finding:** The spectral-shift and determinant identities check out. One narrow estimate-reference gap is present, repaired by the sharper Duhamel bound in RHI04. This does not affect the conclusion once that bound is cited.
- AI-assisted scoped audit, not human review; no RH or Hilbert–Pólya conclusion.

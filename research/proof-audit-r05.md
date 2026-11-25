# R05 proof audit (self-review)

Scope: R04 quantitative-cutoff.md and R05 theta-cardinal-bound.md. Same AI-assisted research process; not independent external review.

R04: verified the projection identity ||(I-Q)Pu||^2=< (A-A^2)u,u> from P,Q orthogonal and u in E. Spectral bounds on A imply the squared defect inequality. Max-min is used on an n-dimensional projected leading invariant subspace and the positive reciprocal threshold is explicit. The convolution support calculation gives strict support inside (-a,a); weighted tail finite by the source's reciprocal-square sum. No gap found in this audit.

R05: checked exact phase sign in (i d/dx-gamma) f_(r+1)=f_r under the +izx Fourier convention. Both-sided tail cancellation requires F[f_r](gamma)=0 for r<m, ensured by analytic division; it must not be used at r=m. Normalizer includes sqrt(m); other sample coordinates vanish irrespective of their own multiplicities. No claim of local membership for the untruncated kernel. Only smooth compact truncation enters the local Hilbert space.

Checked cutoff exponent: h=X^-1 gives Y=X exp(-2/X)>=X-2; derivative transition term is bounded by its support length times its sup derivative, not an additional uncontrolled factor X. Integrating q'_gamma reduces power by one; both terms are O(X^(9/4-m) exp(-pi X)). The full sampled defect is bounded using the derivative L1 norm and the source's sum of weighted inverse squares. Squared defect and reciprocation give X^(9/2-2m), at most X^(5/2). Positive eigenvalue ordering and fixed n are essential. No lower bound obtained.

Potential external-review targets: normalization of classical theta kernel, smoothness at zero, all imports in Suzuki's model, and any prior explicit spectral convergence rate for the exact same phase-pi extension. No numerical experiment in R05 certifies the estimate. R03 finite-Fourier values do not measure exact cutoff error separately.

Tool verification: container command -v lean/lake/cargo/rustc returned no paths. Formal verification is blocked in this runtime. No Lean artifact is claimed. Novelty remains open; see literature/theta-prior-art.md. R05's bounded mathematical goal is satisfied with a conditional derivation and documented limitations, ready for R06 consolidation.

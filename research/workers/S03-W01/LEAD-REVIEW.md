# S03-W01 lead review — accepted as numerical diagnostics only

25 November 2026. Pinned worker head 574788c30bd0aad63940f0e2004900d5ba34edc2, baseline 99ce5c98cee71c49a878cd199fd4f2cd17ee7e46. GitHub compare returned three commits, exactly six added files, all inside the assigned scope. All six files were inspected and integrated by exact blob identity into main; worker branch preserved.

The script uses the prime-free arithmetic form, C02's divided difference and finite Riesz equation. The real and imaginary RHS correspond to the conjugated Fourier basis pairing with exp(+x): the endpoint difference at frequency pi*j/a is 2(-1)^j sinh(a), divided by 1-i*pi*j/a. The stored imaginary auxiliary component is precisely the imaginary part of this RHS (positive for positive frequency after accounting for the parity sign). Reflection gives the phase-pi scalar t*ii-rr up to nonzero normalization, consistent with the C03 convention. No zero inputs. The scan finds the first detected sign change, not a certified first root. The code and archived results support the stated trends. The sensitivity check is useful but is not a quadrature error bound.

Lead independently recomputed the scaled first-root displacements from the archived CSV, using ordinary binary64 arithmetic:
a, N, c(a), c(a)*(a*t-pi/2), c(a)^2*(a*t-pi/2-d_1/c(a))
0.003,80,2.700906078436904,0.6019958268550674,-0.8750198323444804
0.001,160,3.7995157004445694,0.6688789121786449,-0.9768160241021602
0.0003,80,5.00348820143725,0.7300221951640561,-0.9804151544087006

S02 prediction d_1=0.925968525991233...; S03 e_1=-1.467988388462551... (both in c convention). These values are qualitatively consistent with the first correction but do not certify the coefficients, especially because the N cutoffs differ, the finite error is uncontrolled, and c is modest. The lead did not rerun the full worker solver sweep in this batch; acceptance is based on source/code/output inspection and independent arithmetic recomputation from the archived values, not a claimed full replication. The worker's earlier numerical tolerance checks are reported as worker evidence only.

Accepted as a bounded independent AI numerical investigation and qualitative support for the cosine limit. The explicit source audit of S01/S02 was not supplied by the worker in this package; the lead's source comparison is recorded in S03. No new rigorous numerical certificate, exact root count, independently reviewed theorem or novelty determination. The baseline handoff's phrase "No numerical computation yet" is stale relative to its Completed section; preserve the original rather than silently modify it. S04-W02 will independently audit the actual analytic proof and source conventions, in parallel with lead consolidation.

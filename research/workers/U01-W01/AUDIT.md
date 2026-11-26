# U01-W01 — Translation strictness and finite-translate bound

Date: 2026-11-26. Baseline: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2`.

## Scope and conclusion

Independently checked U01's strict bottom monotonicity and quantitative finite-translate inequality. **Both deductions are valid under the stated form-core, translation-invariance, and discrete-spectrum imports.** The finite-translate estimate follows from a rank-nullity choice and a trace bound; no conditioning estimate or lower bound on the Gram eigenvalue is supplied, so the inequality is exact but not effective without additional data. This does not prove positivity, RH, or strict monotonicity of higher eigenvalues.

## Form-domain translation and strict monotonicity

Fix `0<b<a` and a shift `t` with `|t|<a-b`. On compact smooth `f` supported in `(-b,b)`, let `J_t f(x)=f(x-t)` on `(-a,a)`, with zero extension outside. This is an `L2` isometry and sends the test core into `C_c^infty(-a,a)`. The Weil test form depends on the autocorrelation and is translation invariant, so

`q_a(J_t f,J_t g)=q_b(f,g)`.

Choose one constant `c` making both `q_a+c||.||_2^2` and `q_b+c||.||_2^2` positive form norms. The identity and the `L2` isometry extend `J_t` to an isometry of the completed form domains; in particular the form identity holds for a normalized bottom eigenvector at `b`. Its translate is admissible at `a`, hence `lambda_a<=lambda_b`.

Assume equality. Then every `J_t f` attains the bottom at `a`; by the spectral theorem each lies in `E_a=ker(A_a-lambda_a I)`. Let `m=dim E_a` and choose `m+1` distinct allowed shifts. These translates are linearly independent: if `sum_j c_j J_(t_j)f=0`, the Fourier transform gives

`F_f(z) sum_j c_j exp(i z t_j)=0`.

Because `f` is nonzero and compactly supported, `F_f` is entire and not identically zero. The exponential polynomial vanishes on an open subset of the real axis where `F_f` is nonzero, hence identically. Its derivatives of orders `0,...,m` at zero give a Vandermonde system on the distinct `t_j`, so all coefficients vanish. This contradicts `dim E_a=m`. Therefore `lambda_a<lambda_b`.

This proof uses the finite multiplicity and eigenvector characterization of bottom-attaining form vectors. It does not require simplicity, RH, an improving semigroup, or differentiability in `a`.

## Finite-translate gap inequality

Let `f` be a normalized bottom eigenvector at `b`; choose `k=m+1` distinct admissible shifts and let `v_j=J_(t_j)f`. Their independence makes `G=V^*V` positive definite, where `V c=sum_j c_jv_j`. Let `P` be orthogonal projection onto `E_a`. Since `rank(PV)<=m<k`, choose a unit `c in ker(PV)`. Then `Vc=(I-P)Vc`, and

`tr(V^*(I-P)V) >= c^*V^*(I-P)Vc = ||Vc||_2^2 = c^*Gc >= lambda_min(G)`.

If `g_a` is the gap from the bottom to the next distinct eigenvalue, the spectral theorem gives, for each normalized `v_j`,

`q_a(v_j)-lambda_a >= g_a ||(I-P)v_j||_2^2`.

Each `q_a(v_j)=lambda_b`. Summing over `j` and using the trace inequality yields

`lambda_b-lambda_a >= g_a lambda_min(G)/(m+1) > 0`.

The trace dominates the chosen unit-vector quadratic value because `V^*(I-P)V` is positive semidefinite. This verifies the stated factor `m+1` and the direction of the inequality. It is not an effective numeric estimate unless `g_a`, `m`, and a lower bound for the actual translate Gram minimum are controlled.

## Assumptions and limits

Imported, not reproved: the closed localized Weil forms are lower semibounded and have compact smooth form cores; their test forms agree under common translations of supported functions; bottom eigenvalues are attained with finite multiplicity and discrete spectrum; the next distinct level has positive gap. These are the source/setup claims recorded in U01's Suzuki v4 Theorem 1.1/Corollary 1.2 and operator-theoretic imports. No independent primary-source retrieval or prior-art audit was performed in this bounded proof check. The global Weil criterion and positivity-transition consequence in U01 were not audited here.

No RH conclusion, effective Gram estimate, numerical calculation, formal verification, human review, or novelty claim.

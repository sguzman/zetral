# NIR03-W01 — Independent audit of indexed growth

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/NIR03-indexed-growth.md`. No RH, novelty, formal verification, numerical certification, or human-review claim.

## Scope and imported inputs

I checked the finite-subset order statistics, codimension argument removing faster negative directions, transfer from test inequalities to ordinary eigenvalues, log-energy normalized min-max bounds, and parity counts/constructions. The audit treats as imported the paired-zero form identity and local operator setup from GSG01, the global/log-energy estimates from GSG03, and the finite-pair interpolation/tail bounds from NIR01. In particular, the growth estimates in the derivative/convolution bounds are not independently reproved here.

## Order statistics and lower bounds

For the multiset with one deviation \(d>0\) per distinct nonreal conjugate pair, the definition
\[
b_k=\sup_{|S|=k}\min_{j\in S}d_j
\]
handles ties, nonattainment, and infinite collections without requiring an enumeration. If \(b>b_k\), there cannot be \(k\) distinct pairs with \(d>b\); hence the fast set has at most \(k-1\) elements and is finite. If \(b_k=0\), there are fewer than \(k\) pairs, since any finite choice of \(k\) positive deviations would have a positive minimum.

For any fixed selection of \(k\) pairs, NIR01 supplies the lower exponential rate \(2\min d_j\) for the kth L2 eigenvalue magnitude. Taking the supremum over such finite selections gives \(\liminf a^{-1}\log(1+N_k(a))\ge 2b_k\). This inference does not require the supremum to be attained. The trivial upper rate 1 transfers from the bottom eigenvalue because \(N_k(a)\le N_1(a)\).

## Fast-pair codimension and ordinary L2 upper bound

On each fast conjugate pair, the negative coordinate of \(J\) is proportional to \(\widehat f(z)-\widehat f(\bar z)\). Imposing that this difference vanish is one complex-linear condition per pair, not two; it removes the entire negative component on that pair. Thus a k-dimensional test subspace has a nonzero vector satisfying all constraints, since the fast-set cardinality is at most \(k-1\). On the remaining pairs, the negative form is bounded using
\[
|\widehat f(\gamma+id)-\widehat f(\gamma-id)|
\le 2d\sup_{|v|\le d}|\widehat f'(\gamma+iv)|,
\]
which accounts for the factor \(2m_zd^2\) in the squared bound. Summing this estimate and applying the imported GSG03 derivative bounds gives the claimed test-space upper estimates.

For the conditional L2 estimate, if \(\lambda_k\) were strictly below the proposed negative threshold, the span of the first \(k\) eigenvectors would have a uniform strict Rayleigh margin below it. Simultaneous approximation of this finite-dimensional span by the compact smooth form core preserves that strict margin. Intersecting with the at most \(k-1\) constraints yields a nonzero test vector, contradicting the constrained test inequality. Thus the closed-operator conclusion does not require the constrained subspace itself to be a form core. Letting \(b\downarrow b_k\) gives the stated matching rate under the uniform local weighted density hypothesis; the endpoints \(b_k=0\) and \(b_k=1/2\) are covered separately as in NIR03.

## Log-energy rate

The modified quantity \(M_k\) is defined directly by a variational supremum on test subspaces, so the same codimension intersection gives its upper estimate without asserting an operator or eigenvectors for the log-energy norm. For the lower estimate, on real frequencies the box multiplier satisfies \(|G_w(t)|=|\sin(h(t-\Re w))/(h(t-\Re w))|\le1\). Therefore convolution damping multiplies the log-energy norm of each cardinal test by at most \(L_w^{-n}\), just as needed for the finite synthesis estimate. Combining it with the same negative Gram margin gives the lower exponent for every selected finite set. Supremizing over selections proves the claimed exponent \(2b_k\). At \(b_k=0\), the global inertia result precludes a k-dimensional negative test space; at \(b_k=1/2\), the global bottom upper rate and \(M_k\le M_1\) give the endpoint upper rate.

## Parity refinement

Reflection acts on sample space by \(P:y_z\mapsto y_{-z}\), commuting with \(J\). For a generic four-point orbit, the two negative pair directions are exchanged by \(P\), so their sum and difference yield one negative direction in each parity. For a purely imaginary conjugate pair, \(Py=-y\), giving one odd and no even negative direction. The finite-subset definition then gives the order-statistic duplication identities whenever the pure-imaginary case is absent; for zeta, NIR03 excludes it by the nonvanishing of \(\zeta(x)\) on \(0<x<1\). The interpolation lower-bound construction preserves parity by choosing a reflection-symmetric band and projecting the finite synthesis; because the target vector already has parity \(p\), this projection leaves its in-band samples unchanged and contracts the positive L2/log-energy tail norms. The conditional fast-direction upper argument restricts to each parity sector with codimension equal to the fast negative dimension in that sector.

No flaw found in these deductions under the imported GSG01/GSG03/NIR01 inputs. The ordinary interior upper exponent remains conditional on the stated density hypothesis; no finite-window equality of even and odd eigenvalues is implied. This audit does not verify prior art, the imported analytic estimates, or the claimed RH-free source framework.

## Source record

- Audited: `research/positivity/NIR03-indexed-growth.md` at the starting commit recorded in the handoff.
- Cross-checked internally: NIR01 interpolation note and GSG01/GSG03 dependencies as cited by NIR03.
- No external sources, numerical computations, or formal verifier used.

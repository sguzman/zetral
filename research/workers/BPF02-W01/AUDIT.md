# BPF02-W01 — Independent parity and oscillation audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I checked the finite-dimensional algebra in BPF02: Hermitian pairing of signed ordinates, Gram-matrix representation and inertia, even/odd endpoint restrictions, the single-quartet eigenvalue formulas and their ranges, and the general trace / squared-trace nonconvergence argument. I found no discrepancy in this scope.

The comparison between the endpoint model and the actual operator relies on BPF01's uniform minmax error and finite maximal-group hypothesis. I did not independently rederive BPF01, nor the physical form continuity argument used to assert conditional crossings. No actual off-critical-line zero is known or assumed. This is an AI-assisted audit, not human review, formal verification, or a novelty assessment.

## Algebra checks

For each signed pair, the coefficient matrix is
\[
H_a=\operatorname{diag}(m_u e^{2iua})J_0,
\]
whose \(\{u,-u\}\) block is Hermitian with eigenvalues \(\pm m_u\). With the positive Gram matrix \(G=E^*E\), the nonzero spectrum of \(E H_a E^*\) is that of \(G^{1/2}H_aG^{1/2}\); congruence preserves inertia. Endpoint swap gives \(T_a\) on the even subspace and \(-T_a\) on the odd subspace. Consequently the negative even depths are the magnitudes \(n_j\) of negative eigenvalues of \(T_a\), while negative odd depths are the positive eigenvalues \(p_j\).

For one pair \(\{u,-u\}\), direct integration gives diagonal Gram entries \(1/(2B)\), off-diagonal squared magnitude \(1/(4(B^2+u^2))\), hence \(D=m^2\det G=m^2u^2/[4B^2(B^2+u^2)]\). The trace is
\[
\tau(a)=2m\Re\frac{e^{2iua}}{2B+2iu}
=\frac{m(B\cos(2ua)+u\sin(2ua))}{B^2+u^2}.
\]
The two eigenvalues solve \(x^2-\tau x-D=0\). Thus \(p-n=\tau\), \(pn=D\), and \(\sqrt{\tau^2+4D}=m/B\) at the extrema \(|\tau|=m/\sqrt{B^2+u^2}\). This yields the stated parity ranges. Sorting their union replaces \(\tau\) by \(|\tau|\), producing period \(\pi/(2u)\) and the stated two full-prefactor ranges.

For general finite symmetric \(J\), the signed trace is a nonconstant real trigonometric polynomial: each nonzero ordinate contributes a nonzero coefficient at its frequency. The squared trace is
\[
\operatorname{tr}(T_a^2)=\sum_{u,v\in J}m_um_v\frac{e^{2i(u+v)a}}{(2B+i(u+v))^2}.
\]
For fixed sum \(u+v\), the denominator is fixed and multiplicity products are positive; hence terms at that frequency cannot cancel. In particular the coefficient at the largest positive frequency \(4u_{\max}\) comes only from \((u_{\max},u_{\max})\) and is nonzero. A finite trigonometric polynomial with a nonzero nonconstant coefficient cannot converge at positive infinity, as follows by averaging against that frequency. These identities establish the claimed “at least one” nonconvergence conclusions, not that every ordered prefactor oscillates.

Finally, \(|\det H_a|=\prod_{u\in J}m_u\), so the product of all finite-model singular values is \(\det(G)\prod m_u\), independent of phase. Transfer to actual scaled depths uses BPF01's vanishing uniform errors and boundedness of the finite-model prefactors.

## Limitations

No new numerical experiment or external source retrieval was needed for the finite matrix identities. Imported assumptions and operator-level limitations are stated above. Exact crossing times remain conditional on the parity-continuity argument as BPF02 itself records. No statement here proves existence of off-line zeros, RH, or asymptotic convergence of any individual general-group prefactor beyond what the source claims.

# QER03-W01 — Defect-vector compactness under the edge transport

Date: 2026-11-26. Baseline: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2`.

## Scope and conclusion

Audited the fixed-window defect-vector step in §2 of `research/positivity/QER03-edge-limits.md`: the defect equation, nonzero bottom-space evaluation, normalized (s\downarrow0) asymptotic under (U_s), and phase-uniform compactness of extension complements. **The stated mechanism is valid for each fixed window (a)** under QER01's evaluation-kernel result and U03/U04's no-common-nonreal-zero consequence. The transported unit defects converge into the finite-dimensional (E) coordinate. This does not yield estimates uniform in (a) and does not identify the phase-selected finite block.

## Defect equation and exact norm

Fix (a), let (T=A_a-\lambda_1(a)I\ge0), (E=\ker T), and let (q_s=q_T+s\langle\cdot,\cdot\rangle_2) on the original form domain (V). Let (S_s) be the closure of (f\mapsto i f'\) on (C_c^\infty(-a,a)) in the (q_s) Hilbert space. For (z\in\{i,-i\}), write

`e_z(x)=exp(-i z x)`, `u_(s,z)=(T+s)^(-1)e_z`.

QER01's evaluation-kernel calculation identifies this vector, up to scalar, as the unique defect vector for eigenvalue `z`. The sign is checked directly: with inner product linear in the first slot and (F_f(\zeta)=\int f(x)e^{i\zeta x}dx),

`q_s(f,u_(s,z))=<f,e_z>_2=F_f(conj(z))`,

and for test (f), integration by parts gives

`q_s(i f',u_(s,z))=<i f',e_z>_2=conj(z)F_f(conj(z))=q_s(f,z u_(s,z))`.

Thus (S_s^*u_{(s,z)}=z u_{(s,z)}), not `conj(z)u`. The evaluation-kernel result supplies the one-dimensionality of each defect space.

Decompose (e_z=p_z+r_z) with (p_z=P_Ee_z), (r_z=(I-P_E)e_z). Then

`u_(s,z)=s^(-1)p_z+(T|_(E^perp)+s)^(-1)r_z`,

and the form norm is exactly

`||u_(s,z)||_(q_s)^2=||p_z||_2^2/s + <(T|_(E^perp)+s)^(-1)r_z,r_z>_2`.

The second term stays bounded as (s\downarrow0), since (T|_{E^\perp}\ge gI) for the fixed-window spectral gap (g>0). U03's no-common-nonreal-zero fact implies (p_z\ne0): if (P_Ee_z=0), every (F\in E) would vanish at the nonreal point `conj(z)`. For clarity, this consequence follows from division closure: division by `(xi-conj(z))` would be an injective endomorphism of finite-dimensional `E`, hence surjective; iterating its inverse forces every member to have an arbitrarily high order zero there, impossible for a nonzero entire function.

Therefore

`sqrt(s)||u_(s,z)||_(q_s) -> ||p_z||_2`.

For the normalized defect `phi_(s,z)=u_(s,z)/||u_(s,z)||_(q_s)`, its (E^\perp) quotient norm is (O(\sqrt{s})). Under the transport

`U_s f=(L_s[f], sqrt(s)P_E f)`, `L_s=(I+sT^+)^(1/2)`,

(L_s\to I) in operator norm on the fixed quotient Hilbert space, so the first component is (O(\sqrt{s})). The second component converges:

`sqrt(s)P_E phi_(s,z) -> p_z/||p_z||_2`.

Thus `U_s phi_(s,z) -> (0,p_z/||p_z||_2)` in (H\oplus E). In particular the two normalized defect directions form a precompact family as (s\downarrow0).

## Uniformity over self-adjoint extension phases

For a closed symmetric operator, von Neumann's decomposition is orthogonal in the graph inner product:

`Dom(S_s^*) = Dom(S_s) ⊕ N_i(S_s^*) ⊕ N_(-i)(S_s^*)`.

Each normalized defect vector has graph norm \\(\sqrt{1+|z|^2}=\sqrt2\\). Hence any graph-bounded sequence in the domain of any self-adjoint extension has uniformly bounded coefficients along these two normalized directions; this bound is independent of the extension's phase. The extension domain is a subspace of the same two-defect complement, so varying its phase only changes a bounded vector within this fixed two-dimensional span. Since both transported basis vectors converge to finite-dimensional (E)-vectors, all such phase-selected complements are collectively precompact. Combining this with compactness of the transported minimal-domain part proves the defect contribution asserted in QER03 §2.

The constants depend on `||P_E e_(±i)||`, which can depend on the window (a). The calculation is for fixed (a); it gives no lower bound uniform over varying windows. It also does not imply that the finite (E)-block has a unique limit or that full resolvents converge in norm.

## Assumptions and limits

Imported, not reproved: the positive gap on (E^\perp), bounded Moore–Penrose inverse (T^+), unitary transport (U_s), QER01's evaluation/defect representation, and U03's division/no-common-zero result. The audit checks the asymptotic normalization and extension-phase argument after those facts. The minimal-domain collective compactness proof and all norm-resolvent/spectral-count conclusions elsewhere in QER03 are out of scope. The U03 no-common-zero lemma is itself only an internal candidate result awaiting review; this report does not certify the full dependency chain.

No RH assumption is used in this fixed-window defect step. No large-window conclusion, numerical/formal verification, human review, or novelty claim is made.

## Sources

Repository sources at baseline: `research/positivity/QER03-edge-limits.md` §2, `QER01-edge-quotient.md`, and `U03-critical-inverse.md`. Primary-source/version context cited by QER03 is Suzuki arXiv:2606.09096v4 §§6.2–6.4. No new external source claim or prior-art search was made for this bounded audit.

# K02-W04 — independent K01/K02 proof and source audit

Date: 2026-11-25 UTC. Baseline `3444bb1` (Campaign XI main; carried K02-W04 assignment). AI-assisted internal audit, not human review, formal verification, numerical certification or a novelty assessment.

## Primary sources actually opened

- Suzuki, *Spectral convergence associated with Weil's quadratic form*, arXiv:2610.32704v1, `https://arxiv.org/html/2610.32704v1`. I fetched the primary HTML directly and inspected §2.2 (2.5)–(2.7), §2.3 (2.8)–(2.9), §3.1 (3.1), §3.2 (3.3), Theorem 3.3/(3.5), and Theorem 1.2/(1.3). The source confirms: inner product linear in the first variable; (q(f,u_z)=\widehat f(\bar z)); the weighted sample space has weights equal to zero multiplicities; its evaluation coordinate has norm squared (1/m_\gamma); (3.3) is the conjugate of the adjoint boundary form; phase-\(\pi\) characteristic convergence to the product over distinct ordinates is locally uniform under RH; and the distinguished inverse is the compression in Theorem 3.3.
- Suzuki, *Weil's quadratic form via the screw function*, arXiv:2606.09096v4, `https://arxiv.org/html/2606.09096v4`. I fetched the primary HTML and located §7.9 and its discussion of the conjectural boundary/entire-function limit. It is context for the campaign, not a proof of the specific K01/K02 kernel asymptotics.

Reproducible fetch / text-inspection command (Python standard library only):

```sh
python - <<'PY'
import urllib.request,re,html
for u in ['https://arxiv.org/html/2610.32704v1','https://arxiv.org/html/2606.09096v4']:
    raw=urllib.request.urlopen(u,timeout=20).read().decode('utf-8')
    text=re.sub(r'\\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',raw)))
    print(u,len(raw),text[:300])
PY
```

The first and second HTML responses were 511310 and 1215591 bytes in this retrieval. Earlier BeautifulSoup was absent; no package was installed. The actual inspections used standard-library stripping and searches for the equation/theorem labels above.

## Independent mathematical checks

### K01: scalar, conjugation and removable poles

I recalculated the boundary identity with (B(x,y)=q(S^*x,y)-q(x,S^*y)), (q) linear first, (C_a f=g+k w_\pi), and (k=q(f,v)/(2ib)). Then

\[
q((zC_a-I)u_z,f)=B(u_z,C_af)=\overline{k}\,B(u_z,w_\pi).
\]

Suzuki (3.3) gives (W(a,\pi;z)=\overline{B(u_{\bar z},w_\pi)}), hence (B(u_z,w_\pi)=\overline{W(a,\pi;\bar z)}). Since (W(a,\pi;0)=-2ib), (b\in\mathbb R\setminus\{0\}), and (P_a=W/W(a,\pi;0)) is real entire, \,\(\overline{W(a,\pi;\bar z)}=-W(a,\pi;z)\). It follows that (q((zC_a-I)u_z,f)=-P_a(z)q(v,f)), equivalently

\[
(I-zC_a)u_z=P_a(z)v.
\]

This checks the otherwise easy-to-miss minus sign coming from the *imaginary* denominator (W(a,\pi;0)). At (z=0), the identity reduces to (u_0=v). At a local eigenvalue (t), the pole of ((I-zC_a)^{-1}) at (z=t) has singular part ((1-z/t)^{-1}E_t); the simple zero (P_a(t)=0) cancels it and gives (u_t=-tP'_a(t)E_tv). This follows by isolating the eigenspace and taking the analytic limit. Nonvanishing (E_tv) follows from the identity and (u_t\ne0). These checks agree with K01.

### K02: compact continuation and projection constants

The vector estimate off the global ordinate set is (V_a(z)=u_z/M_a-P_a(z)e_a=O_K(d_a)). The difference is entire as an (H_a)-valued map. Enclosing any compact in a larger circle whose boundary avoids the discrete set \(\Gamma\), applying scalar maximum modulus to each inner product with a unit vector and taking the supremum gives the same bound inside. The same argument in each variable extends the scalar two-resolvent (O(d_a^2)) estimate to all compact products. Cauchy estimates then justify the fixed-order derivative bounds used in the microscopic expansion. This does not require a resolvent bound at the ordinates themselves.

For a distinct ordinate \(\gamma\) of multiplicity \(m_\gamma\), define the weighted coordinate vector \(g_\gamma\) to have coordinate \(1/m_\gamma\) at \(\gamma\) and zero elsewhere. Then

\[
\|g_\gamma\|^2=m_\gamma|1/m_\gamma|^2=1/m_\gamma,
\quad j_a u_\gamma=\Pi_a g_\gamma.
\]

Thus
\[
J_a(\gamma,\rho)=\langle\Pi_a g_\gamma,\Pi_a g_\rho\rangle
\to\delta_{\gamma,\rho}/m_\gamma.
\]

The multiplicity is present in the weight once and therefore appears as (1/m_\gamma), not (1/m_\gamma^2). The diagonal deficit (1/m_\gamma-J_a(\gamma,\gamma)=\|(I-\Pi_a)g_\gamma\|^2) and off-diagonal Cauchy–Schwarz bound follow from orthogonal projection. This independently verifies the sampled constants.

For the microscopic profile, derivative convergence gives
\[
u_{\gamma+\bar\eta/M_a}=u_\gamma+\bar\eta\Delta'(\gamma)e_a+o(1)
\]
uniformly for bounded \(\eta\); the Taylor remainder is (O(M_a^{-1})) because the normalized second derivative is bounded on a fixed disk. Under \(j_a\), the base vectors converge to \(g_\gamma\) while (h_a=j_ae_a\) has norm one and converges weakly to zero. In the inner product, linearity in the first argument and conjugate-linearity in the second turn the two coefficients into \(\bar\eta\zeta\). Hence the limit is
\[
\delta_{\gamma,\rho}/m_\gamma+\bar\eta\zeta\Delta'(\gamma)\Delta'(\rho),
\]
with the asserted uniformity on bounded offset sets. For \(\gamma=\rho\), \(\Delta'(\gamma)\ne0\) because the canonical product has a simple zero at each distinct ordinate. This confirms a nonconstant boundary layer independently of the note's statement.

I also checked the exact sampled resolvent projection identity: (C g_\gamma=g_\gamma/\gamma), so
\[
(I-\gamma B_a)\Pi_a g_\gamma=\gamma\Pi_a C(I-\Pi_a)g_\gamma=P_a(\gamma)M_a h_a.
\]
The displayed rate for (P_a(\gamma)M_a) follows by norms. Likewise the mixed (o(M_a)) estimate follows from the compact vector approximation and \(\langle g_\gamma,h_a\rangle\to0\); it is not an unnormalized finite-limit claim.

## Findings and limits

No counterexample, conjugation error, boundary sign error, maximum-modulus gap, projection error, or multiplicity-constant error was found in the scoped K01/K02 claims. K02's leading normalized limit is an absolute estimate; the audit does not infer a relative estimate at zeros or a fixed-separation unnormalized mixed-kernel limit. All spectral conclusions remain conditional on RH and the cited sampling/compression/characteristic imports. I did not independently reproduce the full theta-tail proof behind weak escape, run numerical/interval experiments, formalize the lemmas, rederive every determinant claim in K03, or perform an exhaustive prior-art search. No novelty claim is made.

Recommendation: lead may accept this only as a scoped independent AI audit after review. Campaign VIII is concluded; any subsequent worker task should follow the current Campaign XI ledger and avoid lead-owned U01–U04.

## Completion of the assigned source-range check (2026-11-26)

The original work order explicitly requested Suzuki v1 (2.3)–(2.9), (3.1)–(3.5), and Theorem 1.2. The earlier audit recorded detailed checks for (2.5)–(2.9), (3.1), (3.3), (3.5), and Theorem 1.2, but did not document (2.3)–(2.4), (3.2), or (3.4). I fetched `https://arxiv.org/html/2610.32704v1` again with Python's standard-library `urllib.request`, stripped HTML tags, normalized whitespace, and inspected those omitted labels as well as Lemma 3.2. No package was installed.

The newly recorded source statements are:

- (2.3) defines the spectral-side sesquilinear Weil form with multiplicity weights (m_\gamma), and states its nonnegativity under RH. (2.4) imports the local coercivity (Q_W(u)\ge\lambda_a\|u\|_2^2), (\lambda_a=\inf\sigma(A_a)>0), and identifies the form completion with the square-root form domain using the cited core result. These are framework inputs to K01/K02, not consequences proved by the worker audit; in particular the coercivity/core facts are imported from the cited earlier work.
- (3.2) gives the von Neumann extension domain (\mathfrak D(\overline{\mathscr D}_{a,\theta})=\mathfrak D(\overline{\mathscr D}_a)\dotplus\mathbb Cw_{a,\theta}) and the boundary-form characterization. At (\theta=\pi), (w_{a,\pi}=u_{i,a}-u_{-i,a}), matching the vector used in K01's sign calculation.
- (3.4) states the exponential-type bound on (W(a,\theta;z)) and proves that its zeros are precisely the eigenvalues of the corresponding self-adjoint extension. This supports the local characteristic interpretation; the bound has an (a)-dependent constant and supplies no uniform-in-(a) kernel or derivative estimate used in K01/K02.
- Lemma 3.2 states that (W(a,\pi;\cdot)) is even entire, nonzero at zero, and has simple zeros exactly at the phase-\(\pi\) eigenvalues. This is the source import used for (P_a=W(a,\pi;\cdot)/W(a,\pi;0)), removable resolvent cancellation, and the local simple-zero assertion. Theorem 1.2 separately supplies only locally uniform convergence (P_a\to\Delta_\Gamma) under RH; no rate is asserted there.

These checks complete the requested equation/section coverage at the level of source inspection. The independent calculations and their limitations remain as stated above: the scoped K01/K02 deductions checked here have no identified sign, projection, multiplicity, analytic-continuation, or microscopic-scaling flaw. The full proof of imported coercivity/core facts, the Campaign VII theta-tail/weak-escape derivation, formal or interval verification, K03 determinant details, exhaustive prior art, and human review remain outside this completed scope. This is still a scoped AI audit and does not constitute lead acceptance.

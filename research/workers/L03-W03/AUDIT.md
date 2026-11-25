# L03-W03 — independent adversarial audit

Date: 2026-11-25 UTC. Baseline: `93d17ac` (Campaign VIII main). This is an AI-assisted internal proof/source audit, not human review, formal verification, or a novelty assessment.

## Sources actually opened

- Suzuki, *Spectral convergence associated with Weil's quadratic form*, arXiv:2610.32704v1, HTML `https://arxiv.org/html/2610.32704v1`. I fetched and read the source HTML directly. Relevant passages: §2.3, (2.8) sampling into the multiplicity-weighted distinct-ordinate space and (2.9) density; §3.1, (3.1) adjoint evaluation vectors and reflection; Theorem 3.3, especially (3.5), identifies the phase-\(\pi\) local inverse with the compression of the global inverse; §4 gives Hilbert–Schmidt compression convergence; Theorem 1.2, (1.3), gives locally uniform convergence of the normalized phase-\(\pi\) characteristic to the product over *distinct* positive ordinates. This is conditional on RH where stated in that paper.
- Suzuki, *Weil's quadratic form via the screw function*, arXiv:2606.09096v4, HTML `https://arxiv.org/html/2606.09096v4`. I fetched and read the primary HTML, including Theorem 1.5 (1.11), §7.8, and §7.9. The latter is presented as heuristics for the conjectural entire-function formula; the paper explicitly allows a possible exponential normalization to compensate for singularities in the limit. It is useful context for the open normalization/boundary problem, but it does not establish the arbitrary-phase limit in L03.

Reproducible source-fetch command (Python standard library only):

```sh
python - <<'PY'
import urllib.request
for u in ['https://arxiv.org/html/2610.32704v1', 'https://arxiv.org/html/2606.09096v4']:
    b = urllib.request.urlopen(u, timeout=20).read()
    print(u, len(b), b[:40])
PY
```

Both returned HTML successfully (516541 and 1230273 bytes, respectively). A text extraction attempt requiring BeautifulSoup failed because that optional package is absent; I then inspected matching passages using Python's standard-library HTML-tag stripping. No package was installed.

## Independent checks

### L01 boundary coefficient and sign

With the stated convention (q) linear in its first argument and (W(f,g)=q(S^*f,g)-q(f,S^*g)), write (v=g+d w_0) and (C_af=h+k w_\pi). The stated boundary values yield (d=b/(2N)) and (q(f,v)=2ibk), hence (k=q(f,v)/(2ib)). A solution of (S^*x=f) is (x=C_af+lv); its two deficiency coefficients are (k+ld,-k+ld). Enforcing the phase-(\theta) boundary condition gives (ld=i\cot(\theta/2)k), and therefore

\[
D_{a,\theta}^{-1}f=C_af+\frac{N}{b^2}\cot(\theta/2)q(f,v)v.
\]

This independently confirms the sign, coefficient, and positive/negative phase direction in L01. The denominator is nonzero by the imported nonvanishing phase-π characteristic at zero (equivalently the distinct-extension-domain argument, given the stated extension setup). The formula is consistent with reflection sending \(\theta\) to \(2\pi-\theta\) and negating the spectrum. No boundary-sign counterexample found.

The identity for \(\eta_a\) follows from \((I-iC_a)u_+\in\ker S^*\), reflection oddness of \(C_a(I+C_a^2)^{-1}v\), and the spectral theorem. The bound \(0\le\eta_a-1\le(1+\|C_a\|^2)\|C_ae_a\|^2\) is valid; weak escape plus compactness then implies \(\eta_a\to1\). These are internal deductions from the cited compression import, not statements attributed to Suzuki.

### L02 escape witness and block estimate

The truncation argument is internally consistent at the level of powers recorded: with (X=e^{2a}), a transition strip of width (X^{-1}) starts at (y=e^{2|x|}\ge Xe^{-2/X}\ge X-2). The stated theta-kernel envelope gives \(\|r_a\|_1=O(X^{5/4}e^{-\pi X})\) and the product-rule derivative bound \(\|r'_a\|_1=O(X^{9/4}e^{-\pi X})\). Splitting the multiplicity-weighted sample sum at (X), using (N_*(X)=O(X\log X)) and the dyadic tail \(\sum_{|\gamma|>X}m_\gamma/\gamma^2=O(\log X/X)\), gives the stated squared norm order (O(X^{7/2}\log X e^{-2\pi X})). This supports a divergent lower bound for (M_a), hence weak escape by density. I did not independently rederive every theta-series derivative constant or the earlier cutoff lemma; only the scaling and logical use in L02 were audited. No full-space numerical error certificate is claimed.

For (B_a=B_a^*\), (Q_a=|h_a\rangle\langle h_a|\), and (K_a=(I-Q_a)B_a(I-Q_a)), the decomposition
\[
B_a-K_a=Q_aB_a+(I-Q_a)B_aQ_a
\]
gives operator and Hilbert–Schmidt error at most (2\|B_ah_a\|). Thus (K_a\to C) in Hilbert–Schmidt norm and the phase-zero reduced inverse comparison is sound.

### L03 signed ordering, collisions, and escape

For compact self-adjoint operators, applying ordinary positive-eigenvalue min–max separately to (M) and (-M) gives the claimed Lipschitz bound for each signed list. Inserting one positive scalar into a decreasing positive list gives
\[
I_1=\max(\mu_1,b_+),\qquad I_n=\max(\mu_n,\min(\mu_{n-1},b_+)),\quad n\ge2.
\]
The formula handles equality with multiplicity and is 1-Lipschitz in sup norm. Applying it to the signed block scalar \(\epsilon b_a\), then adding the block error, yields (L03.1). Reciprocal conversion is correctly restricted to comparison values bounded away from zero; the estimate is not a uniform differentiation-eigenvalue bound.

The finite-(p) extra inverse scalar is (p=\cot(\theta/2)), so the extra differentiation value is (1/p=\tan(\theta/2)), with the sign-specific list shift. Collision with a distinct base ordinate produces two convergent adjacent simple local eigenvalues and a limiting multiset count of two; it does not imply a double eigenspace for (C). For unbounded (p_a), retaining (b_a=\eta_ap_a) avoids the unsupported estimate \(|p_a||\eta_a-1|\to0\); the near-zero root relation (t_*p_a\to1) follows since \(\eta_a\to1\) and the inverse-list error is (o(1)\). At exact phase zero, the comparison concerns the reduced inverse and the separate exact zero mode. These distinctions are mathematically necessary and are stated in the notes.

The eigenvector argument away from resonance uses a genuine gap between fixed (p\ne0) and \(\{0\}\cup\operatorname{spec}(C)\), plus the vanishing off-diagonal block error. It does not establish an individual eigenvector limit at resonance, which the note correctly leaves open.

## Result and limits

I found no counterexample or sign/index error in the audited L01–L03 identities and ordered spectral argument. The exact rank-one and min–max steps check internally. The global Hilbert-space imports and phase-π entire-function convergence are source-backed as above; the arbitrary-phase conclusion remains an internal conditional deduction, not a theorem established by the cited sources. The tail estimate was checked for scaling and structure, not every constant. No numerical experiment, interval certificate, or formal proof was run. I did not conduct an exhaustive prior-art search; no originality claim is supported. The source's phase-π characteristic theorem does not by itself settle the normalized off-diagonal kernel or the arbitrary-phase entire-characteristic problem now in Campaign VIII.

Recommendation: accept only as a scoped independent AI audit if the lead's own review agrees. Keep K01/K02 with the lead; once dispositioned, any follow-up should target a genuinely distinct K03 question.

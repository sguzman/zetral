# K02-MIXED-W01 — limits of the abstract mixed-kernel estimate

Date: 2026-11-26 UTC. Independent mathematical diagnostic of the open mixed-kernel question in K02 §3. Conditional scope only; this is not a counterexample to Suzuki's Weil-form model.

## Question

K02 proves, for fixed sampled \(\gamma\) and compact \(K\),
\[
 |J_a(\gamma,z)|/M_a \le |P_a(z)|\,|\langle g_\gamma,h_a\rangle|+O_K(d_a),
 \qquad d_a=\|C_a e_a\|\to0,
\]
so \(J_a(\gamma,z)=o(M_a)\). Is a bounded (or finite-limit) conclusion forced by only compactness of \(C\), strong convergence \(\Pi_a\to I\), weak escape \(h_a\rightharpoonup0\), and \(d_a\to0\)?

## Abstract obstruction

No. The listed qualitative inputs have no rate tying \(M_a\) to the overlap \(\langle g_\gamma,h_a\rangle\) or to \(d_a\). Let \(H=\ell^2(\mathbb N_0)\), \(C e_j=c_j e_j\) with positive \(c_j\downarrow0\) (for example \(c_j=2^{-j}\)), and \(\Pi_n\) projection onto \(\operatorname{span}\{e_0,\ldots,e_n\}\). Then \(C\) is compact, \(\Pi_n\to I\) strongly, and \(B_n=\Pi_n C\Pi_n\). Fix a unit vector \(g\in H\) with positive coordinates \(g_n\to0\), for example \(g_n=K/(n+1)\), with \(K\) normalizing the sequence. Set \(h_n=e_n\), so \(h_n\in\operatorname{ran}\Pi_n\), \(\|h_n\|=1\), \(h_n\rightharpoonup0\), and \(\|B_nh_n\|=c_n\to0\). For any positive scale \(M_n\), the model mixed quantity \(Q_n=M_n\langle g,h_n\rangle=M_ng_n\) can be held at 1 by choosing \(M_n=1/g_n\), or made divergent by choosing \(M_n=1/g_n^2\). All listed qualitative compactness/projection/escape conditions still hold.

More generally, \(g_n\) can tend to zero arbitrarily slowly among square-summable sequences, so qualitative strong/weak convergence supplies no universal decay rate. This is a rate countermodel for the abstract inputs, not a realization of \(u_z\), \(P_a\), a characteristic function, or the Weil form; it does not contradict any theorem about the actual \(J_a\).

## Consequence and remaining route

The hypotheses used by K02's proof cannot by themselves improve \(o(M_a)\) to \(O(1)\), convergence, or divergence. A sharper result for the actual mixed kernel must use additional structure coupling \(M_a\) to the projection defect/overlap, such as a quantitative estimate for \(\langle g_\gamma,h_a\rangle\), \(d_a\), or the characteristic derivative at \(\gamma\). The K02 identity
\[
 P_a(\gamma)M_a h_a=(I-\gamma B_a)\Pi_a g_\gamma
\]
provides one possible entry point, but the audited note supplies no rate sufficient for this purpose.

## Status and limits

This is an exact abstract construction, not numerical evidence. No claim is made that the chosen \(M_n\) and \(h_n\) arise from the local Weil-form construction or obey its omitted identities. No primary source or new property of the actual kernel was established. No RH conclusion, novelty claim, or human/formal review is claimed. A concrete next step would be to derive a quantitative coupling from the local evaluation norm and the endpoint/Volterra representation, or to produce an actual-model sequence disproving boundedness.

## Refinement: retain the sampled-point vector identity

The rate obstruction can also be arranged to respect the single sampled-point identity from K02. Let \(C e_0=c_0e_0\), \(C e_n=c_ne_n\) for \(n\ge1\), where \(c_0>0\) and \(c_n>0\) tends to zero, so \(C\) is compact and self-adjoint. Let \(\Pi_n\) project onto \(\operatorname{span}\{e_0,\ldots,e_n\}\), \(g=e_0\), \(\gamma=c_0^{-1}\), and
\[
 h_n=\epsilon_n e_0+(1-\epsilon_n^2)^{1/2}e_n,
 \qquad \epsilon_n\downarrow0.
\]
Then \(h_n\in\operatorname{ran}\Pi_n\), \(\|h_n\|=1\), \(h_n\rightharpoonup0\), and
\[
 \|\Pi_n C\Pi_n h_n\|^2=\epsilon_n^2c_0^2+(1-\epsilon_n^2)c_n^2\longrightarrow0.
\]
Since \(g\in\operatorname{ran}\Pi_n\) and \(Cg=c_0g\), one has exactly
\[
 (I-\gamma\Pi_n C\Pi_n)\Pi_n g=0
   =P_n(\gamma)M_n h_n
\]
for every scale \(M_n>0\), on taking the normalized entire scalar \(P_n(z)=1-z/\gamma\). Yet
\(M_n\langle g,h_n\rangle=M_n\epsilon_n\) can be bounded or divergent by the choice of \(M_n\). Thus even compactness, strong projection convergence, weak escape, vanishing \(\|B_nh_n\|\), and this one sampled-point identity do not force a bounded mixed scale.

This refinement still omits the full analytic family \(u_z\), the relation between \(h_n\), the evaluation norm \(M_n\), and the local Weil form, and the resolvent/kernel identities away from \(\gamma\). It is therefore a sharper abstract rate obstruction only, not evidence for unboundedness of the actual mixed kernel.

## Actual-model overlap estimate from the exact vector identity

The preceding abstract examples show why qualitative convergence alone supplies no rate. In the actual K01/K02 setting, however, the exact vector identity yields a more explicit bound on the weak-escape coefficient. Fix a real sample ordinate \(\gamma\), put \(g=g_\gamma\), \(\delta_a=\|(I-\Pi_a)g\|\), and \(d_a=\|B_a h_a\|\), with \(h_a\in\operatorname{ran}\Pi_a\), \(\|g\|=m_\gamma^{-1/2}\). Pair
\[
 P_a(\gamma)M_a h_a=(I-\gamma B_a)\Pi_a g
\]
with \(h_a\). Since \(\Pi_a h_a=h_a\) and \(B_a\) is self-adjoint,
\[
 \langle g,h_a\rangle
   =P_a(\gamma)M_a+\gamma\langle\Pi_a g,B_a h_a\rangle.
\]
K02's projection-defect estimate \(|P_a(\gamma)|M_a\le\gamma\|C\|\delta_a\) then gives the exact quantitative consequence
\[
 |\langle g_\gamma,h_a\rangle|
 \le \gamma\|C\|\delta_a
       +\frac{\gamma}{\sqrt{m_\gamma}}d_a.
\]
Substituting in K02's mixed estimate, for compact \(K\subset\mathbb C\),
\[
 \sup_{z\in K}\frac{|J_a(\gamma,z)|}{M_a}
 \le \gamma\|C\|\delta_a\sup_{z\in K}|P_a(z)|
    +\frac{\gamma d_a}{\sqrt{m_\gamma}}\sup_{z\in K}|P_a(z)|
    +O_K\!\left(\frac{d_a}{\sqrt{m_\gamma}}\right).
\]
Because \(P_a\) is locally uniformly bounded, this is \(O_{K,\gamma}(\delta_a+d_a)\), hence recovers the known \(o(1)\) after division by \(M_a\) while identifying the two exact quantities that control the rate. Equivalently \(J_a(\gamma,z)=O_{K,\gamma}(M_a(\delta_a+d_a))\). This does **not** imply \(O(1)\), convergence, or divergence: no bound on \(M_a\delta_a\) or \(M_a d_a\) is obtained from these identities. It also does not contradict the abstract countermodels, which omit the full coupled characteristic/projection structure. The result is a conditional deduction from the displayed K01/K02 imports, not a new source theorem or a formal verification.

## Commuting spectral-projection control model

There is a simple model satisfying the full scalar resolvent identity and all retained sample identities in which the fixed-sample mixed kernel has a finite limit. Let
\[
 H=\ell^2(\{\pm1,\pm2,\ldots\}),\quad C e_{\pm k}=\pm k^{-1}e_{\pm k},\quad
 \Pi_N H=\operatorname{span}\{e_{\pm1},\ldots,e_{\pm N}\}.
\]
Then \(C\) is compact self-adjoint, \(\Pi_N\to I\) strongly, and \(B_N=\Pi_NC\Pi_N\) is the diagonal restriction. Put
\[
 P_N(z)=\prod_{j=1}^N(1-z^2/j^2),\quad
 (v_N)_{+k}=(v_N)_{-k}=-\frac1{kP_N'(k)}\quad(1\le k\le N),
\]
and define the entire vector-valued function by removable continuation of
\[
 u_N(z)=P_N(z)(I-zB_N)^{-1}v_N.
\]
Every apparent pole cancels because the zeros of \(P_N\) are precisely the reciprocal nonzero eigenvalues of \(B_N\). Direct evaluation at each \(\pm k\), \(k\le N\), gives
\[
 u_N(\pm k)=e_{\pm k}=\Pi_N e_{\pm k},
 \qquad (I-zB_N)u_N(z)=P_N(z)v_N.
\]
Thus the sample identity and the exact vector resolvent identity both hold. Also \(P_N\to\Delta(z)=\sin(\pi z)/(\pi z)\) locally uniformly. For each fixed \(k\), \(P_N'(k)\to\Delta'(k)=(-1)^k/k\), hence \((v_N)_{\pm k}\to(-1)^{k+1}\). It follows that \(M_N=\|v_N\|\to\infty\), while \(h_N=v_N/M_N\rightharpoonup0\). Compactness then gives \(\|B_Nh_N\|\to0\).

For any fixed positive sample \(k\) and real \(z\notin\mathbb Z\), the +k coordinate is explicitly
\[
 \langle u_N(z),e_k\rangle
   =-\frac{P_N(z)}{kP_N'(k)(1-z/k)}
   \longrightarrow-\frac{\Delta(z)}{k\Delta'(k)(1-z/k)},
\]
a finite value; the analogous negative-coordinate formula is also finite. This gives an exact positive control: the general qualitative operator and interpolation identities do not force mixed-kernel divergence. Here the projections commute with \(C\), so no off-diagonal compression error occurs. The model is not a local Weil-form realization and says nothing about whether the actual Paley–Wiener projections' noncommutation produces a finite, divergent, or oscillatory mixed limit. It identifies that compression geometry, or additional local-form structure, as necessary input for resolving the actual question.

### Exact scale in the control model

The previous finite-limit model also has an explicit normalization scale. For \(1\le k\le N\), elementary factorial cancellation gives
\[
 P_N'(k)=\frac{(-1)^k}{k}R_{N,k},\qquad
 R_{N,k}=\frac{(N-k)!(N+k)!}{(N!)^2}\ge1,
 \quad (v_N)_{\pm k}=\frac{(-1)^{k+1}}{R_{N,k}}.
\]
Thus
\[
 M_N^2=2\sum_{k=1}^N R_{N,k}^{-2}.
\]
For \(k=x\sqrt N\) with \(x\) in a fixed compact interval, expanding the factorial ratio (or its logarithmic product) gives \(\log R_{N,k}=k^2/N+O(N^{-1/2})\), uniformly there. For \(k\le N/2\), the product formula
\[
 R_{N,k}=\prod_{j=1}^k\left(1+\frac{k}{N-k+j}\right)
\]
and \(\log(1+t)\ge t/(1+t)\) give \(\log R_{N,k}\ge (2/3)k^2/N\). Monotonicity in \(k\) then makes the contribution from \(k>N/2\) exponentially small. These bounds justify the Gaussian Riemann-sum limit
\[
 \frac{M_N^2}{\sqrt N}\longrightarrow
 2\int_0^\infty e^{-2x^2}\,dx=\sqrt{\frac\pi2},
 \qquad M_N\sim(\pi/2)^{1/4}N^{1/4}.
\]
Meanwhile, since \(R_{N,k}^{-2}\le1\) and it tends to 1 for each fixed \(k\), dominated convergence yields
\[
 \|B_Nh_N\|^2
 =\frac{2\sum_{k=1}^N R_{N,k}^{-2}/k^2}{M_N^2}
 \sim \frac{\pi^2/3}{\sqrt{\pi/2}\,\sqrt N},
 \qquad M_N\|B_Nh_N\|\longrightarrow\frac\pi{\sqrt3}.
\]
For each fixed \(k\), \(M_N\langle e_k,h_N\rangle=(v_N)_k\to(-1)^{k+1}\), and the explicit sample-to-fixed-real-\(z\) kernel limit above is finite. This illustrates that decay of \(d_N\) at the reciprocal scale \(1/M_N\) can produce a bounded mixed kernel; qualitative compactness alone does not decide whether the actual Weil model has this balance.

### Microscopic sample transition in the control model

The same explicit model reproduces K02's sample boundary layer (multiplicity one) directly. Fix \(k\) and bounded complex \(\eta\), and use the source convention \(z_N=k+\overline\eta/M_N\). Locally uniformly, \(M_NP_N(z_N)\to\overline\eta\,\Delta'(k)\). The non-k coordinates of \(u_N(z_N)-M_NP_N(z_N)h_N\) are
\[
 M_NP_N(z_N)\frac{z_N B_N}{I-z_NB_N}h_N
\]
with the k coordinate omitted; the resolvent on that complement is uniformly bounded in a fixed disk around k, so their norm is \(O(\|B_Nh_N\|)=o(1)\). The k coordinate itself tends to 1 because \(u_N(k)=e_k\) and the canceled quotient \(P_N(z)/(1-z/k)\) converges locally uniformly to \(\Delta(z)/(1-z/k)\). Meanwhile the k coordinate of \(M_NP_N(z_N)h_N\) tends to zero, since \((h_N)_k=O(M_N^{-1})\). Thus
\[
 u_N(k+\overline\eta/M_N)=e_k+\overline\eta\,\Delta'(k)h_N+o(1)
\]
in norm, with \(\langle e_k,h_N\rangle\to0\). Consequently
\[
 \langle u_N(k+\overline\eta/M_N),u_N(k+\overline\zeta/M_N)\rangle
 \to 1+\overline\eta\zeta|\Delta'(k)|^2.
\]
The finite mixed limit at fixed nonzero separation and the nonconstant microscopic diagonal profile coexist exactly as in the K02 statement; the latter alone does not force the former to diverge.

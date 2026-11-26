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

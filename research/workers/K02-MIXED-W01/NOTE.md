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

## Synthetic (T\log T)-counting control with weak escape

The linear-node model has the wrong leading zero count for zeta. The commuting construction can be strengthened to a synthetic signed node set with the Riemann–von Mangoldt leading count, while retaining a finite fixed-sample mixed limit. This is still not a zeta model: the deliberately engineered near-collisions and absence of arithmetic data are essential limitations.

Let \(F(T)=T\log T/(2\pi)\) for sufficiently large \(T\), and choose centers \(t_j\) by \(F(t_j)=2j\). Choose \(0<\varepsilon_j<(t_{j+1}-t_j)/3\) and define
\[
 \gamma_{2j-1}=t_j,\qquad \gamma_{2j}=t_j+\varepsilon_j,
 \qquad \Gamma=\{\pm\gamma_n:n\ge1\}.
\]
Then the positive counting function satisfies \(N_+(T)=T\log T/(2\pi)+O(1)\). Also \(\sum_n\gamma_n^{-2}<\infty\), so
\[
 \Delta(z)=\prod_{n\ge1}(1-z^2/\gamma_n^2)
\]
is an even real entire genus-zero product with these simple signed nodes and order one (infinite type). For each fixed \(n\), the product over all other nodes in \(\gamma_n\Delta'(\gamma_n)=-2\prod_{m\ne n}(1-\gamma_n^2/\gamma_m^2)\) converges to a nonzero value when its paired factor is omitted. As \(\varepsilon_j\downarrow0\), the paired factor is asymptotic to \(2\varepsilon_j/t_j\). With all other gaps fixed, either reciprocal residue in pair \(j\) can be made arbitrarily large by reducing \(\varepsilon_j\), because its own twin factor is asymptotic to \(2\varepsilon_j/t_j\) and the remaining product has a nonzero zero-gap limit. The targets can be imposed simultaneously as follows. For each fixed node, the logarithmic change in the product from a distant pair is \(O(\gamma_n^2\eta_j/t_j^3)\); choose upper bounds \(\eta_j\) diagonally small enough that the total change from all other pair gaps in every such product is less than \(\log 2\). This is possible since the tails are summable and each finite set of nonpaired factors is nonzero. Next shrink each \(\eta_j\) further so that, with all other gaps at their zero-gap limits, both residues in pair \(j\) exceed \(2j\) for every \(0<\varepsilon_j<\eta_j\). Finally choose any \(\varepsilon_j\in(0,\eta_j)\). The factor-of-two control leaves both actual residues at least \(j\), so \( |1/(\gamma_{2j-1}\Delta'(\gamma_{2j-1}))|\ge j\) for all \(j\).

Now use \(H=\ell^2(\{\pm n:n\ge1\})\), \(Ce_{\pm n}=\pm e_{\pm n}/\gamma_n\), and coordinate projections \(\Pi_N\) onto \(\{e_{\pm1},\ldots,e_{\pm N}\}\). Define \(P_N(z)=\prod_{n=1}^N(1-z^2/\gamma_n^2)\), and set
\[
 (v_N)_{+n}=(v_N)_{-n}=-\frac1{\gamma_nP_N'(\gamma_n)}\quad(n\le N),\qquad
 u_N(z)=P_N(z)(I-z\Pi_NC\Pi_N)^{-1}v_N
\]
with removable pole values. As before, \((I-z\Pi_NC\Pi_N)u_N=P_Nv_N\) and \(u_N(\pm\gamma_n)=e_{\pm n}=\Pi_Ne_{\pm n}\) for every \(n\le N\). The fixed-coordinate limit of \((v_N)_n\) is the reciprocal residue of \(\Delta\); the engineered residues imply \(M_N=\|v_N\|\to\infty\). Hence \(h_N=v_N/M_N\rightharpoonup0\); compactness of \(C\) gives \(\|\Pi_NC\Pi_Nh_N\|\to0\). Yet for each fixed \(k\) and real \(z\notin\Gamma\),
\[
 \langle u_N(z),e_k\rangle
 =-\frac{P_N(z)}{\gamma_kP_N'(\gamma_k)(1-z/\gamma_k)}
 \longrightarrow-\frac{\Delta(z)}{\gamma_k\Delta'(\gamma_k)(1-z/\gamma_k)},
\]
which is finite.

This countermodel adds the classical leading count, a symmetric order-one entire product, compact diagonal inverse, strong projection convergence, exact resolvent identity, sample interpolation, divergent normalization, weak escape and vanishing compressed inverse on the escaping direction. Thus even these abstract constraints do not force divergence of the fixed-sample mixed kernel. The construction intentionally manufactures arbitrarily close pairs; it has no Euler product, Weil form, or prime-power coefficients and does not assert that zeta ordinates exhibit such pairs. It only isolates additional arithmetic/local-form restrictions as necessary for a conclusion about the actual kernel.

### Growth check for the synthetic canonical product

For completeness, the claimed order/type follows directly from the counting law. Write \(N_+(t)=ct\log t+O(1)\), \(c=1/(2\pi)\), above a fixed lower cutoff. Jensen's formula for the paired genus-zero product gives
\[
 \frac1{2\pi}\int_0^{2\pi}\log|\Delta(re^{i\theta})|\,d\theta
   =2\sum_{\gamma_n<r}\log(r/\gamma_n)
   =2\int^{r}\frac{N_+(t)}{t}\,dt+O(\log r)
   =2c r\log r+O(r).
\]
Thus \(\log M_\Delta(r)\ge 2c r\log r+O(r)\). For the upper bound, \(|1-z^2/\gamma_n^2|\le1+r^2/\gamma_n^2\) on \(|z|=r\), and Stieltjes integration by parts yields
\[
 \log M_\Delta(r)\le\sum_n\log(1+r^2/\gamma_n^2)
 =2r^2\int_0^\infty\frac{N_+(t)}{t(t^2+r^2)}\,dt
 =O(r\log r).
\]
Consequently \(\log M_\Delta(r)\asymp r\log r\): the canonical product has order one and infinite exponential type. The finite set below the asymptotic counting range changes only lower-order terms.

## Residue-sequence lemma (close pairs are only one mechanism)

The commuting construction does not depend on the paired-node recipe. Let any strictly increasing positive sequence \((\gamma_n)\) satisfy \(\sum_n\gamma_n^{-2}<\infty\), define \(\Delta(z)=\prod_n(1-z^2/\gamma_n^2)\), and assume only that its zeros are simple (automatic for distinct nodes and a convergent canonical product). For each \(N\), set \(P_N(z)=\prod_{n\le N}(1-z^2/\gamma_n^2)\), \(C e_{\pm n}=\pm e_{\pm n}/\gamma_n\), and let \(\Pi_N\) project onto the first \(N\) signed pairs. With
\[
 a_{n,N}=-\frac{1}{\gamma_nP_N'(\gamma_n)},\quad
 (v_N)_{+n}=(v_N)_{-n}=a_{n,N},\quad
 u_N(z)=P_N(z)(I-z\Pi_NC\Pi_N)^{-1}v_N,
\]
all poles are removable and \(u_N(\pm\gamma_n)=e_{\pm n}\) for \(n\le N\). For every fixed \(n\), \(a_{n,N}\to a_n=-1/(\gamma_n\Delta'(\gamma_n))\). Therefore, for fixed \(k\) and real \(z\notin\Gamma\),
\[
 \langle u_N(z),e_k\rangle\longrightarrow
 -\frac{\Delta(z)}{\gamma_k\Delta'(\gamma_k)(1-z/\gamma_k)},
\]
a finite limit, regardless of whether the residue sequence \((a_n)\) is square-summable. If \(\sum_n|a_n|^2=\infty\), then \(M_N=\|v_N\|\to\infty\): for each fixed K, \(\liminf_N M_N^2\ge2\sum_{n\le K}|a_n|^2\), and K is arbitrary. Consequently \(h_N=v_N/M_N\rightharpoonup0\), and compactness of C gives \(\|\Pi_NC\Pi_Nh_N\|\to0\). Thus a non-\(\ell^2\) residue sequence is a sufficient condition in this model for simultaneous divergent normalization and weak escape; no necessity claim is made. Near-collisions are a convenient sufficient way to produce one. This lemma is entirely a diagonal spectral construction and does not impose a Weil-form or arithmetic identity.

## Regular-counting diagnostic (numerical evidence only)

To test whether close-pair clustering is essential even in the abstract canonical-product lemma, consider the regular quantiles F(t_n)=n, F(t)=t log(t)/(2 pi), with no deliberately introduced close pairs. For P_M(z)=prod_{j<=M}(1-z^2/t_j^2), the node residue magnitude is

    |a_{n,M}| = |1/(t_n P'_M(t_n))|
               = (1/2) exp(-sum_{j<=M,j!=n} log|1-t_n^2/t_j^2|).

I evaluated the finite sum in binary64 and approximated the omitted j>M tail by integrating its power-series expansion against the continuous density dF=(log(t)+1)dt/(2 pi), through 20 terms. With the Newton inverse of F, the resulting natural logarithms of residue magnitudes were:

| n | M=1000 | M=2000 | M=4000 | M=8000 |
|---:|---:|---:|---:|---:|
| 1 | 1.467980 | 1.467972 | 1.467970 | 1.467969 |
| 10 | 13.954557 | 13.954378 | 13.954325 | 13.954309 |
| 50 | 54.885695 | 54.883464 | 54.882801 | 54.882606 |
| 100 | 98.819041 | 98.812021 | 98.809948 | 98.809340 |

The computed residues grow strongly with the node index over this range, and the cutoff drift for these fixed nodes decreases with M. This suggests that regular T log(T) quantiles may already have non-square-summable canonical-product residues, so artificial close pairs might not be needed to make M_N diverge in the commuting model. This is not established: the density-integral tail omits sum-integral corrections, binary64 was used, and no uniform-in-n error bound or asymptotic for the infinite-product residues was derived. It is a diagnostic and candidate asymptotic question, not a theorem or evidence about zeta ordinates. A proof would require controlling the singular discrete sum near j=n and the tail uniformly as n grows.

## Regular quantiles: residue asymptotic (analytic derivation)

Define $F(t)=t\log t/(2\pi)$ for $t\ge1$, and let $t_n=F^{-1}(n)$. Then $N_+(T)=\lfloor F(T)\rfloor=T\log T/(2\pi)+O(1)$ and $\sum_n t_n^{-2}<\infty$. Thus
$$
\Delta(z)=\prod_{n\ge1}(1-z^2/t_n^2)
$$
converges locally uniformly and has simple zeros $\pm t_n$. Its residue magnitude is
$$
|a_n|=\left|\frac1{t_n\Delta'(t_n)}\right|
=\frac12e^{-S_n},\quad
S_n=\sum_{j\ne n}\log|1-t_n^2/t_j^2|.
$$

Put $c=1/(2\pi)$, $g=t_n$, $T(u)=F^{-1}(u)$, and $Q_g(u)=\log|1-g^2/T(u)^2|$. The corresponding integral is
$$
I(g)=\int_0^\infty Q_g(u)\,du
=cg\int_{1/g}^\infty(\log g+\log x+1)f(x)\,dx,\quad
f(x)=\log|1-x^{-2}|.
$$
Direct integration gives $\int_0^\infty f(x)\,dx=0$. Splitting the logarithmic moment at $1$ and expanding the logarithms into series gives
$$
\int_0^1\log x\log(1-x^2)\,dx=4-2\log2-\frac{\pi^2}{4},
\quad
\int_1^\infty\log x\log(1-x^{-2})\,dx=-\frac{\pi^2}{4}+2\log2.
$$
The remaining term is $-2\int_0^1\log^2x\,dx=-4$, so $\int_0^\infty\log x\,f(x)\,dx=-\pi^2/2$. Since $f(x)=-2\log x+O(x^2)$ near zero, extending the lower limit to zero costs $O((\log g)^2)$ after multiplication by $cg$. Therefore
$$
I(g)=-\frac{\pi g}{4}+O((\log g)^2).
$$

The sum-integral error is $S_n-I(g)=O(\log g)$. The function $Q_g$ decreases on $[0,n)$ and increases on $(n,\infty)$. Compare the sample $Q_g(j)$ with its integral over the unit cell $[j-1/2,j+1/2]$, omitting the singular sample $j=n$. Outside the central cell, total variation is $O(\log g)$: $Q_g(0)=2\log g+O(1)$ and $Q_g(n\pm1/2)=-\log n+O(1)$, since $gF'(g)=n(1+1/\log g)$. The omitted initial half-cell has integral $O(\log g)$. Taylor expansion of $F^{-1}$ at $n$ gives $Q_g(n+s)=\log|s|-\log n+O(1)$ for $0<|s|\le1/2$, so the central-cell integral is also $O(\log g)$. Bounded-variation rectangle estimates on the remaining cells yield the claimed error. Hence
$$
\boxed{\log|a_n|=\frac{\pi t_n}{4}+O((\log t_n)^2).}
$$
In particular $|a_n|\to\infty$, so $(a_n)\notin\ell^2$. The commuting-projection construction already given then has $M_N\to\infty$, weak escape, and $\|B_Nh_N\|\to0$, while each fixed-sample mixed kernel has a finite limit. This is an analytic canonical-product model, not a Weil-form or zeta construction. The computer table above is diagnostic corroboration only; the proof does not use it. The derivation is not formalized or independently reviewed.

### Smooth counting laws with a linear term

The same calculation applies to exact quantiles of
$$
F_{c,d,b}(t)=c\,t\log t+d\,t+b,\qquad c>0,
$$
on a half-line where $F'>0$, with $F(t_0)=0$. In the density integral, the scaled weight is $cg(\log g+\log x+1+d/c)$. The constant and $\log g$ terms vanish because $\int_0^\infty f(x)\,dx=0$, leaving the logarithmic moment $-\pi^2/2$. The lower-tail and quadrature errors remain $O((\log g)^2)$ and $O(\log g)$ respectively. Therefore
$$
\log\left|\frac1{t_n\Delta'(t_n)}\right|
=\frac{c\pi^2}{2}t_n+O((\log t_n)^2).
$$
For $c=1/(2\pi)$ this is $\pi t_n/4+O((\log t_n)^2)$, independent of $d$. The smooth Riemann–von Mangoldt main term has this form, with $d=-(1+\log(2\pi))/(2\pi)$. This concerns exact smooth quantiles; an $O(\log T)$ counting discrepancy alone does not transfer the result to actual zeros.

## Stability under bounded node displacements; conditional zeta application

Let $F(t)=c\,t\log t+d\,t+b$, $c>0$, and $t_n=F^{-1}(n)$ for large $n$. Suppose a strictly increasing positive sequence has $\gamma_n=t_n+O(1)$. Put $g=\gamma_n$, $q_g(t)=\log|1-g^2/t^2|$, and
$$
S_n^\gamma=\sum_{j\ne n}q_g(\gamma_j).
$$
Choose a fixed sufficiently large $L$ and split at $|j-n|\le L\log g$. In this local block, $|t_j-t_n|=O(1)$ and hence $|\gamma_j-g|=O(1)$. Thus $0<|1-g^2/\gamma_j^2|<1$ for large $g$, so every local logarithm is nonpositive. This remains true for arbitrarily small positive gaps.

For the far indices compare $q_g(\gamma_j)$ with $q_{t_n}(t_j)$. The interpolation path stays away from the singular diagonal when $L$ is large, and
$$
|\partial_xq_x(y)|=\frac{2x}{|y^2-x^2|},\qquad
|\partial_yq_x(y)|=\frac{2x^2}{|y(y^2-x^2)|}.
$$
Bounded displacements change the far sum by $O((\log g)^2)$. Indeed, for $j<n/2$ the derivative sums are bounded by $\sum O(1/t_j)$; for $n/2\le j\le2n$ they are bounded by $\sum_{|j-n|>L\log g}O((\log g)/|j-n|)$; for $j>2n$ they are bounded by $\sum O(g/t_j^2+g^2/t_j^3)$. Each is $O((\log g)^2)$ since $t_j\asymp j/\log j$.

The removed baseline block also has total absolute value $O((\log g)^2)$: uniformly for $1\le|j-n|\le L\log g$,
$$
q_{t_n}(t_j)=\log(|j-n|/n)+O(1).
$$
Using the smooth-quantile asymptotic above and discarding the nonpositive actual local terms gives
$$
S_n^\gamma\le-\frac{c\pi^2}{2}t_n+O((\log g)^2)
=-\frac{c\pi^2}{2}g+O((\log g)^2).
$$
Consequently, for $\Delta_\gamma(z)=\prod_j(1-z^2/\gamma_j^2)$,
$$
\boxed{\log\left|\frac1{\gamma_n\Delta_\gamma'(\gamma_n)}\right|
\ge\frac{c\pi^2}{2}\gamma_n-O((\log\gamma_n)^2).}
$$
Thus bounded displacement, without any positive lower bound on neighboring gaps, forces these residues to diverge and prevents square summability. This is a one-sided estimate; close pairs can make residues larger.

Under RH and simplicity of all nontrivial zeros, the Riemann–von Mangoldt formula for their positive ordinates is
$$
N(T)=\frac{T}{2\pi}\log T-\frac{1+\log(2\pi)}{2\pi}T+O(\log T).
$$
Since $N(\gamma_n)=n$ and $F'(T)\asymp\log T$, the mean-value theorem gives $\gamma_n=t_n+O(1)$ for the quantiles of the displayed main terms. With $c=1/(2\pi)$, the bound becomes
$$
\log\left|\frac1{\gamma_n\Delta_\Gamma'(\gamma_n)}\right|
\ge\frac{\pi}{4}\gamma_n-O((\log\gamma_n)^2).
$$
So, conditionally on RH plus simplicity, the canonical-product residue sequence for the distinct zeta ordinates is not in $\ell^2$. This does not prove either hypothesis or identify the commuting toy operator with the local Weil-form operator. The bounded-displacement proof is analytic but has not been machine-checked or independently reviewed.


### Direct completed-zeta cross-check under RH and simplicity

There is a shorter conditional route to non-square-summability for the actual ordinate product. Assume RH and that all nontrivial zeros are simple. Define $\Xi(z)=\xi(1/2+iz)$. It is even and entire, with zeros exactly $\pm\gamma_n$. Since $\sum_n\gamma_n^{-2}<\infty$, its paired Hadamard product is
$$
\Xi(z)=\Xi(0)\Delta_\Gamma(z),\qquad
\Delta_\Gamma(z)=\prod_n(1-z^2/\gamma_n^2).
$$
At $\rho=1/2+i\gamma_n$,
$$
\gamma_n|\Delta_\Gamma'(\gamma_n)|
=\frac{\gamma_n|\Xi'(\gamma_n)|}{|\Xi(0)|}
=\frac{\gamma_n|\xi'(\rho)|}{|\Xi(0)|}.
$$
Using $\xi(s)=\tfrac12s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s)$ and $\zeta(\rho)=0$,
$$
|\xi'(\rho)|
=\tfrac12|\rho(\rho-1)|\pi^{-1/4}
|\Gamma(1/4+i\gamma_n/2)|\,|\zeta'(\rho)|.
$$
Stirling gives $|\Gamma(1/4+iT/2)|\asymp T^{-1/4}e^{-\pi T/4}$. A crude polynomial bound for $\zeta'$ suffices: for $N\asymp T$ and $\Re s>0$, Euler summation gives
$$
\zeta(s)=\sum_{m\le N}m^{-s}
+\frac{N^{1-s}}{s-1}+O(|s|N^{-\Re s}+N^{-\Re s}),
$$
uniformly on a fixed strip away from $s=1$. On the circle $|s-\rho|=1/8$, one has $\Re s\ge3/8$, so this formula bounds $|\zeta(s)|\ll T^{5/8}$. Cauchy's estimate then gives $|\zeta'(\rho)|\ll T^{5/8}$. Therefore
$$
|\xi'(\rho)|\ll T^{19/8}e^{-\pi T/4},
\qquad
\left|\frac1{\gamma_n\Delta_\Gamma'(\gamma_n)}\right|
\gg \gamma_n^{-27/8}e^{\pi\gamma_n/4}.
$$
Thus the actual canonical-product residues diverge exponentially under RH plus simplicity, independently of the bounded-displacement proof. This derivation uses the standard completed-zeta Hadamard product, Euler summation and Stirling; it is a conditional deduction, not a proof of RH or simplicity. It still says nothing about realizing the product residues as the actual local Weil-form evaluation data or about an operator construction.


### Slope-normalized fixed-ordinate kernel profile

K02's fixed-ordinate boundary-layer limit for a simple ordinate is
$$
J_a(\gamma+\eta/M_a,\gamma+\zeta/M_a)
\longrightarrow 1+\bar\eta\zeta\,|\Delta_\Gamma'(\gamma)|^2
$$
uniformly for bounded $\eta,\zeta$, with $\gamma$ fixed and $a\to\infty$. Since $\Delta_\Gamma'(\gamma)\ne0$, reparameterizing the offsets gives
$$
J_a\left(\gamma+\frac{\eta}{M_a|\Delta_\Gamma'(\gamma)|},
\gamma+\frac{\zeta}{M_a|\Delta_\Gamma'(\gamma)|}\right)
\longrightarrow 1+\bar\eta\zeta.
$$
Thus the offset scale that normalizes the rank-one microscopic term is $(M_a|\Delta_\Gamma'(\gamma)|)^{-1}$. Under RH plus simplicity, the direct completed-zeta estimate above gives
$$
\frac1{|\Delta_\Gamma'(\gamma)|}
\gg \gamma^{-19/8}e^{\pi\gamma/4}.
$$
This is a fixed-$\gamma$ consequence of K02; it is not uniform as $\gamma\to\infty$. The lower bound alone does not determine whether this scale tends to zero when $\gamma=\gamma(a)$ grows with $a$, because no matching upper bound for $M_a$ or uniform joint kernel estimate is supplied.


### Growing-index mixed rows in the commuting model

The regular-node commuting model also gives an exact obstruction to inferring uniform high-index behavior from its fixed-index limits. For the finite cutoff $N$, let $a_{k,N}=-1/(t_kP_N'(t_k))$ for $k\le N$. The construction has $u_N(0)=v_N$ and $u_N(t_k)=e_{+k}$, so its sample-to-origin kernel row satisfies
$$
|J_N(t_k,0)|=|a_{k,N}|.
$$
For each fixed $k$, $a_{k,N}\to a_k=-1/(t_k\Delta'(t_k))$ as $N\to\infty$, and the regular-node asymptotic proves $|a_k|\to\infty$ as $k\to\infty$. For every $k$, choose an increasing cutoff $N_k\ge k$ large enough that $|a_{k,N_k}-a_k|\le1$; this is possible by the fixed-$k$ convergence. Then
$$
|J_{N_k}(t_k,0)|\ge |a_k|-1\longrightarrow\infty.
$$
Thus every fixed sample-to-origin row has a finite limit as the cutoff tends to infinity, but a diagonal sequence of growing sample indices has diverging rows. The limit is not uniform over the sample index, even in this exact model with commuting projections and the exact vector resolvent/interpolation identities. This is not a counterexample to the actual local Weil-form kernel. It shows that a growing-index conclusion requires a uniform estimate beyond the fixed-index compact convergence in K02.


### Conditional uniform bound through a growing ordinate window

The exact K01/K02 identities give a useful finite-window criterion without assuming a minimum gap. Let
$$
\delta_a(\gamma)=\|(I-\Pi_a)g_\gamma\|,\qquad
D_a(G)=\sup_{\substack{\gamma\in\Gamma\\0<\gamma\le G}}\delta_a(\gamma),
\qquad d_a=\|B_ah_a\|.
$$
For a compact $K\subset\mathbb C$, the K02 vector approximation $u_z/M_a=P_a(z)e_a+r_a(z)$ has $\sup_{z\in K}\|r_a(z)\|\le C_Kd_a$. Pairing with the sample vector $g_\gamma$ of norm $m_\gamma^{-1/2}$ yields, uniformly in $\gamma$ and $z\in K$,
$$
\frac{|J_a(\gamma,z)|}{M_a}
\le |P_a(z)|\,|\langle g_\gamma,h_a\rangle|
+C_Kd_a/\sqrt{m_\gamma}.
$$
The exact sampled vector identity gives
$$
P_a(\gamma)M_ah_a=(I-\gamma B_a)\Pi_ag_\gamma
=\gamma\Pi_aC(I-\Pi_a)g_\gamma.
$$
Pairing with $h_a$ and using self-adjointness of $B_a$ gives
$$
|\langle g_\gamma,h_a\rangle|
\le \gamma\|C\|\delta_a(\gamma)
+\frac{\gamma}{\sqrt{m_\gamma}}d_a.
$$
Since $m_\gamma\ge1$ and $P_a$ is uniformly bounded on fixed $K$, for every $G\ge\gamma_1$,
$$
\sup_{\substack{0<\gamma\le G\\\gamma\in\Gamma}}\quad
\sup_{z\in K}\frac{|J_a(\gamma,z)|}{M_a}
\le C'_K\,G\bigl(D_a(G)+d_a\bigr).
$$
Therefore any choice $G=G_a\to\infty$ satisfying
$G_a(D_a(G_a)+d_a)\to0$ gives uniform decay of the normalized mixed kernel over all sampled ordinates up to $G_a$ and all $z\in K$. The stronger condition
$M_aG_a(D_a(G_a)+d_a)\to0$ implies uniform unnormalized convergence to zero on the same set; an $O(1)$ version gives a uniform boundedness criterion. These are conditional deductions from K01/K02, not estimates on $D_a(G_a)$ or $d_a$. Strong convergence of $\Pi_a$ only gives $\delta_a(\gamma)\to0$ for each fixed ordinate, so it does not by itself verify the growing-window hypothesis. No minimum gap is used in the displayed implication; all unresolved input is isolated in the projection-defect and escape rates.


### A test-function bound for growing-window projection defects

The unresolved quantity $D_a(G)$ has a direct approximation interpretation. Assume for this paragraph that the signed sample set in $[-2G,2G]$ has minimum distinct-node spacing at least $\sigma_G>0$, multiplicities there are at most $M_G$, and the global weighted counting function satisfies
$$
N_\Gamma(T):=\sum_{|\lambda|\le T}m_\lambda
\le C(1+T)\log(2+T).
$$
For each positive sample $\gamma\le G$, choose a fixed $\psi\in C_c^\infty(-1,1)$ with $\widehat\psi(0)=1$ and define
$$
f_{a,\gamma}(x)=\frac{1}{a\,m_\gamma}\psi(x/a)e^{i\gamma x}.
$$
This is a local test function supported in $(-a,a)$, and its Fourier transform at a sample $\lambda$ is
$\widehat f_{a,\gamma}(\lambda)=m_\gamma^{-1}\widehat\psi(a(\lambda-\gamma))$.
At $\lambda=\gamma$ it agrees exactly with the coordinate of $g_\gamma$. Therefore
$$
\delta_a(\gamma)^2
=\operatorname{dist}(g_\gamma,\operatorname{ran}\Pi_a)^2
\le \frac{1}{m_\gamma^2}
\sum_{\lambda\ne\gamma}m_\lambda
|\widehat\psi(a(\lambda-\gamma))|^2.
$$
For any integer $p\ge2$, smoothness gives
$|\widehat\psi(y)|\le C_p(1+|y|)^{-p}$. In $[-2G,2G]$, ordering the nodes to either side of $\gamma$ and using the spacing and multiplicity assumptions bounds the near sum by
$$
C_p M_G\sum_{r\ge1}(1+a r\sigma_G)^{-2p}
\le C_p\frac{M_G}{a\sigma_G}
\quad(a\sigma_G\ge1).
$$
For $|\lambda|>2G$ and $\gamma\le G$, one has $|\lambda-\gamma|\ge|\lambda|/2$. A dyadic decomposition and the stated counting bound give a far sum at most
$C_p a^{-2p}G^{1-2p}\log(2G)$ for $a,G\ge2$. Since $m_\gamma\ge1$, for $a\sigma_G\ge1$ this proves the conditional estimate
$$
D_a(G)^2\le C_p\left(
\frac{M_G}{a\sigma_G}
+a^{-2p}G^{1-2p}\log(2G)
\right).
$$
Combining with the previous growing-window criterion gives a sufficient condition for normalized mixed-kernel decay:
$$
G_a\left[
\sqrt{C_p\left(
\frac{M_{G_a}}{a\sigma_{G_a}}
+a^{-2p}G_a^{1-2p}\log(2G_a)
\right)}
+d_a\right]\longrightarrow0.
$$
This is a test-function deduction under explicit minimum-spacing and multiplicity hypotheses; it does not assert those hypotheses for zeta ordinates. In particular, the zero-counting upper bound alone does not control the local spacing term $M_G/\sigma_G$, so this has not yet established any actual growing-window range.


## Close-pair obstruction for projection approximation

This gives a local lower bound complementary to the bump-function upper estimate above. It uses only compact support and the local coercivity hypothesis already used to define the form norm. Let \(\lambda_a>0\) satisfy \(Q_W(f)\ge \lambda_a\|f\|_{L^2(-a,a)}^2\) on the smooth core, and put
\[
K_a=\sqrt{\frac{2a^3}{3\lambda_a}}.
\]
For a core function \(f\), its Fourier transform \(F(t)=\int_{-a}^a f(x)e^{-itx}\,dx\) obeys
\[
|F'(t)|\le \left(\int_{-a}^a x^2\,dx\right)^{1/2}\|f\|_2
\le K_a\|f\|_q.
\]
The estimate extends to the form completion: coercivity gives convergence in \(L^2\), and both evaluation and derivative evaluation are continuous in that norm on the bounded interval.

Suppose distinct simple sample locations \(\gamma,\beta\) have weights \(m_\gamma,m_\beta>0\), and write \(\epsilon=|\beta-\gamma|\). In the weighted sample space, the coordinates of \(g_\gamma\) and \(g_\beta\) are respectively \(1/m_\gamma\) and \(1/m_\beta\) at their own locations, with zero at the other. Let \(j=\Pi_a g_\gamma\), represented by its form-domain function \(f\), and let \(\delta_a(\gamma)=\|g_\gamma-j\|\). Contractivity gives \(\|f\|_q=\|j\|\le \|g_\gamma\|=1/\sqrt{m_\gamma}\). The two coordinate errors therefore imply
\[
|F(\gamma)-1/m_\gamma|\le \delta_a(\gamma)/\sqrt{m_\gamma},
\qquad
|F(\beta)|\le \delta_a(\gamma)/\sqrt{m_\beta}.
\]
Combining them with the derivative bound between \(\beta\) and \(\gamma\) yields
\[
\boxed{\displaystyle
\delta_a(\gamma)\ge
\frac{[1-\epsilon K_a\sqrt{m_\gamma}]_+}
{\sqrt{m_\gamma}+m_\gamma/\sqrt{m_\beta}}.}
\]
For unit weights this is \(\delta_a(\gamma)\ge (1-\epsilon K_a)_+/2\). Thus any pair with \(\epsilon K_a\ll1\) prevents the target sample vector from being well approximated by the local Fourier subspace, with a defect bounded away from zero. This is a conditional geometric obstruction: it does not assert that zeta has such close pairs in the relevant range, nor does it determine the behavior of \(\lambda_a\) as \(a\) grows. In particular, it supplies no actual growing-window conclusion without those inputs.


## Higher-order cluster obstruction

The pair estimate is the first case of a divided-difference bound. Fix \(k\ge1\) distinct simple sample locations \(x_0=\gamma,x_1,\ldots,x_k\) (unit multiplicities), and let \(c_j=\prod_{\ell\ne j}(x_j-x_\ell)^{-1}\) be their order-\(k\) divided-difference coefficients. Put
\[
K_{a,k}=\sqrt{\frac{2a^{2k+1}}{(2k+1)\lambda_a}}.
\]
For the projection \(j=\Pi_a g_\gamma\), represented by \(f\), we have \(\|f\|_q\le1\), and each sampled coordinate error is at most \(\delta_a(\gamma)\). Since
\[
|F^{(k)}(t)|\le \left(\int_{-a}^a |x|^{2k}\,dx\right)^{1/2}\|f\|_2
\le K_{a,k},
\]
the Hermite–Genocchi formula for divided differences (also valid for complex-valued \(F\), by taking absolute values in its integral formula) gives
\[
\left|\sum_{j=0}^k c_jF(x_j)\right|\le \frac{K_{a,k}}{k!}.
\]
On the other hand, the sampled target equals \(1\) at \(\gamma\) and \(0\) at the other selected nodes, so its divided difference is \(c_0\); coordinate errors imply
\[
\left|\sum_{j=0}^k c_jF(x_j)-c_0\right|
\le \delta_a(\gamma)\sum_{j=0}^k|c_j|.
\]
Consequently
\[
\boxed{\displaystyle
\delta_a(\gamma)\ge
\frac{\bigl[\,|c_0|-K_{a,k}/k!\,\bigr]_+}
{\sum_{j=0}^k|c_j|}
=
\frac{\bigl[\,1-(K_{a,k}/k!)\prod_{j=1}^k|\gamma-x_j|\,\bigr]_+}
{\sum_{j=0}^k|c_j|/|c_0|}.}
\]
The \(k=1\) case recovers the unit-weight pair bound. For clusters, the exact denominator records their internal geometry; merely bounding all nodes by a radius does not control this ratio if some cluster points nearly collide with one another. This is a conditional geometric obstruction, not a claim about the existence or distribution of zeta clusters, and the constants still depend on the unknown coercivity lower bound \(\lambda_a\).


### Multiplicity-weighted cluster version

The same argument does not require the selected sample locations to be simple. Let \(x_0=\gamma,x_1,\ldots,x_k\) be distinct locations with multiplicities \(m_0=m_\gamma,m_1,\ldots,m_k\), and define \(c_j\) as above. The target vector \(g_\gamma\) has value \(1/m_\gamma\) at \(\gamma\), and projection error \(\delta_a(\gamma)\) gives pointwise coordinate errors at most \(\delta_a(\gamma)/\sqrt{m_j}\). Also \(\|f\|_q\le1/\sqrt{m_\gamma}\), so the divided-difference derivative bound is \(K_{a,k}/(k!\sqrt{m_\gamma})\). Therefore
\[
\boxed{\displaystyle
\delta_a(\gamma)\ge
\frac{\bigl[\,|c_0|/m_\gamma-K_{a,k}/(k!\sqrt{m_\gamma})\,\bigr]_+}
{\sum_{j=0}^k |c_j|/\sqrt{m_j}}.}
\]
For \(k=1\), this reduces exactly to the unequal-multiplicity pair inequality above. Thus the cluster obstruction remains valid without assuming RH-level simplicity, though the locations must be distinct and the coercivity constant remains an input.


### Intrinsic derivative-evaluation formulation

The cluster inequality can be stated without inserting a coercivity constant. Let \(\mathcal H_a\) be the local form Hilbert space and \(E_t(f)=\widehat f(t)\) its sample functional. For a real interval \(I\), assume \(t\mapsto E_t\) is \(k\)-times differentiable in \(\mathcal H_a^*\) and define
\[
\mathcal D_{a,k}(I)=\sup_{t\in I}\|E_t^{(k)}\|_{\mathcal H_a^*}<\infty.
\]
For distinct selected sample locations \(x_0=\gamma,\ldots,x_k\in I\) with multiplicities \(m_j\), the same divided-difference argument gives the intrinsic estimate
\[
\boxed{\displaystyle
\delta_a(\gamma)\ge
\frac{\bigl[\,|c_0|/m_\gamma-\mathcal D_{a,k}(I)/(k!\sqrt{m_\gamma})\,\bigr]_+}
{\sum_{j=0}^k |c_j|/\sqrt{m_j}}.}
\]
This follows directly from \(|F^{(k)}(t)|\le\mathcal D_{a,k}(I)\|f\|_q\) and \(\|f\|_q\le1/\sqrt{m_\gamma}\). It isolates the exact local quantity needed for a quantitative obstruction: the norm of derivative evaluation in the local form space. In the compact-support model, the earlier coercivity argument supplies only the upper estimate
\[
\mathcal D_{a,k}(I)\le
\sqrt{\frac{2a^{2k+1}}{(2k+1)\lambda_a}},
\]
when \(I\subset\mathbb R\). Thus the intrinsic statement is independent of a named \(\lambda_a\), while estimating its derivative norm remains the unresolved quantitative input.


### Kernel identity and fixed-compact derivative scale

For real \(t\), the local evaluation representer is \(u_t\), since \(q(f,u_t)=\widehat f(t)\). Differentiating in \(t\), the Riesz representer of \(E_t^{(k)}\) is \(u_t^{(k)}\). Thus
\[
\|E_t^{(k)}\|_{\mathcal H_a^*}^2
=q(u_t^{(k)},u_t^{(k)})
=\left.\partial_{\bar w}^{\,k}\partial_z^{\,k}J_a(w,z)\right|_{w=z=t},
\]
using K02's convention \(J_a(w,z)=q(u_{\bar w},u_{\bar z})\), with the form inner product linear in its first argument. K02's locally uniform derivative convergence therefore gives, on every fixed compact real interval \(I\),
\[
\sup_{t\in I}\left|
\frac{\|E_t^{(k)}\|_{\mathcal H_a^*}^2}{M_a^2}
-|\Delta^{(k)}(t)|^2
\right|\longrightarrow0.
\]
In particular, at any fixed simple zero \(\gamma\) of the canonical product, \(\|E_\gamma'\|/M_a\to|\Delta'(\gamma)|>0\). This identifies the fixed-ordinate scale in the intrinsic cluster criterion from the known normalized-kernel limit. It does not give a uniform estimate for \(t=\gamma_a\to\infty\), nor can it be applied to a shrinking pair of sample nodes unless such pairs actually occur in the fixed sample set. Hence it closes the fixed-compact derivative-norm asymptotic, but not the growing-window projection-defect problem.


### Unquantified expanding-window consequence

K02 proves local uniform convergence on \(\mathbb C^2\) of
\[
H_a(w,z)=J_a(w,z)/M_a^2-\overline{\Delta(w)}\Delta(z),
\]
and local uniform convergence of every fixed mixed derivative. This implies a slowly growing expanding-window statement, although it supplies no explicit rate. For each integer \(n\), local uniform convergence on the bidisk \(|w|,|z|\le n\) lets us choose \(A_n\), increasing with \(n\) and tending to infinity, such that for every \(a\ge A_n\),
\[
\sup_{\substack{|w|,|z|\le n\\0\le j,k\le n}}
\left|\partial_{\bar w}^{\,j}\partial_z^{\,k}H_a(w,z)\right|\le 1/n.
\]
Set \(R(a)=\max\{n:A_n\le a\}\), taking \(R(a)=0\) before \(A_1\). Then \(R(a)\to\infty\), and for all derivative orders \(j,k\le R(a)\),
\[
\sup_{|w|,|z|\le R(a)}
\left|\partial_{\bar w}^{\,j}\partial_z^{\,k}H_a(w,z)\right|
\le 1/R(a).
\]
In particular, for each fixed \(k\), the intrinsic derivative-evaluation identity gives
\[
\sup_{|t|\le R(a)}
\left|
\frac{\|E_t^{(k)}\|_{\mathcal H_a^*}^2}{M_a^2}
-|\Delta^{(k)}(t)|^2
\right|\longrightarrow0.
\]
This is an existential diagonal window extracted from compact convergence, not an explicit arithmetic range. It controls normalized kernel jets (and hence normalized derivative-evaluation norms) only. It does not bound projection defects uniformly there, nor does it imply an unnormalized mixed-kernel limit or any explicit relation between \(R(a)\) and \(a\).


### Existential normalized mixed-kernel decay on a growing window

Under the K02 hypotheses, strong convergence \(\Pi_a\to I\) implies \(D_a(n)\to0\) for each fixed integer \(n\): only finitely many positive ordinates lie below \(n\), so the supremum is a maximum over a finite set of pointwise convergent defects. Also \(d_a\to0\). Hence for every fixed \(n\),
\[
n\bigl(D_a(n)+d_a\bigr)\longrightarrow0.
\]
Choose increasing thresholds \(A_n\to\infty\) so that \(n(D_a(n)+d_a)\le1/n\) for all \(a\ge A_n\), and put \(G_a=\max\{n:A_n\le a\}\) (zero before \(A_1\)). Then \(G_a\to\infty\) and
\[
G_a\bigl(D_a(G_a)+d_a\bigr)\le1/G_a\longrightarrow0.
\]
The previously established K02 finite-window criterion now gives, for every fixed compact \(K\subset\mathbb C\),
\[
\sup_{\substack{\gamma\in\Gamma\\0<\gamma\le G_a}}\ \sup_{z\in K}
\frac{|J_a(\gamma,z)|}{M_a}\longrightarrow0.
\]
Thus qualitative pointwise projection convergence does imply existence of some growing ordinate window with uniform *normalized* mixed-kernel decay. This is an RH/source-conditional, existential diagonal result; it gives no effective lower bound on \(G_a\), no conclusion for an owner-prescribed window, and no unnormalized boundedness or decay.


### A single diagonal window for both kernel conclusions

The two existential diagonal arguments can be synchronized. For each integer \(n\), take the mixed-kernel constant \(C_n=C'_{\overline D_n}\) in the finite-window criterion, where \(D_n=\{z:|z|\le n\}\). For fixed \(n\), \(D_a(n)\to0\) and \(d_a\to0\), so choose a threshold \(A_n\) after which
\[
C_n n\bigl(D_a(n)+d_a\bigr)\le 1/n.
\]
Also choose a threshold \(B_n\) after which the normalized kernel jets of orders \(j,k\le n\) differ from those of \(\overline{\Delta(w)}\Delta(z)\) by at most \(1/n\) on \(\overline D_n\times\overline D_n\). Increase \(T_n=\max(A_n,B_n)\) if needed so that \(T_n\) is strictly increasing and tends to infinity, and set \(H_a=\max\{n:T_n\le a\}\). Then \(H_a\to\infty\) and simultaneously
\[
\sup_{\substack{0<\gamma\le H_a\\ \gamma\in\Gamma,\ |z|\le H_a}}
\frac{|J_a(\gamma,z)|}{M_a}\le \frac1{H_a}
\]
and
\[
\sup_{\substack{|w|,|z|\le H_a\\0\le j,k\le H_a}}
\left|\partial_{\bar w}^{\,j}\partial_z^{\,k}
\left(\frac{J_a(w,z)}{M_a^2}-\overline{\Delta(w)}\Delta(z)\right)\right|
\le\frac1{H_a}.
\]
This is one existential expanding window for both the mixed row and the normalized kernel jets. It remains non-effective: no lower bound for \(H_a\), no unnormalized mixed-kernel control, and no projection-defect estimate at a prescribed ordinate range is obtained.

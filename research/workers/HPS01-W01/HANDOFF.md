# HPS01 — Joint harmonic phase limits and finite-channel Rayleigh limits

Status: READY_FOR_REVIEW

AI-assisted candidate deduction, without RH. Uses the TPH01 fixed-carrier block convergence, ordinary-form decomposition, and PNT limit for the untwisted prime measure. No new source retrieval, numerical experiment, formal verification, or priority claim. This is an independent worker handoff, not lead acceptance.

## 1. Joint extraction and pointwise moment positivity

Let (a_\ell\to\infty), \(|\omega_\ell|\to\infty\), and suppose
\[
 e^{-a_\ell}\log(2+|\omega_\ell|)\longrightarrow\tau<\infty.
\]
For each integer (k\), form the same weighted prime measure as in TPH01 with phase (e^{ik\omega_\ell\log n}\). The uniform total-variation and endpoint-tail bounds in TPH01 apply for every fixed (k). A diagonal subsequence over the countably many integers gives vague limits for all harmonics simultaneously. The negative harmonics are conjugates, and the zeroth harmonic has the PNT limit. Thus there are densities (\phi_k\), relative to (d\lambda(r)=e^{-r/2}dr), with
\[
\phi_0(r)=1,\qquad \phi_{-k}(r)=\overline{\phi_k(r)}\quad\lambda\text{-a.e.}
\]

These densities obey pointwise Toeplitz moment positivity: for every finite set of integer indices (I\),
\[
 [\phi_{i-j}(r)]_{i,j\in I}\succeq0
 \quad\text{for }\lambda\text{-a.e. }r.
\]
Indeed, for any finitely supported complex coefficients (c_j\) and every nonnegative compactly supported continuous (F\), the prelimit identity
\[
\int F(r)\left|\sum_j c_j e^{ij\omega_\ell\log n}\right|^2d\mu_{a_\ell,0}(r)
=\sum_{i,j}c_i\overline{c_j}\int F(r)d\mu_{a_\ell,(i-j)\omega_\ell}(r)\ge0
\]
passes to the limit. The limiting density tested against (F\,d\lambda\) is nonnegative. Taking a countable dense set of coefficient vectors (rational real and imaginary parts) and then using continuity of each finite quadratic form gives positivity simultaneously almost everywhere for all finite integer-indexed matrices. In particular \(|\phi_k(r)|\le1\).

By Herglotz's theorem, for almost every (r\) the sequence (k\mapsto\phi_k(r)\) is the Fourier moment sequence of a probability measure \(\nu_r\) on the circle. The measures can be selected as a weakly measurable probability kernel: trigonometric polynomials have measurable integrals by the measurable coefficients \(\phi_k(r)\), and are uniformly dense in the continuous circle functions. This is a pointwise compatibility constraint on jointly attainable harmonic limits; it does not assert that every measurable probability kernel is arithmetically attainable.

## 2. Simultaneous fixed-channel ordinary Rayleigh convergence

Fix a finite set (I\subset\mathbb Z\setminus\{0\}\) of distinct harmonics and fixed compact smooth two-endpoint profiles (G_k\) for (k\in I\). Let (V_{\ell,k}=U_{a_\ell}M_{k\omega_\ell}^{*}U_{a_\ell}^{*}\), and use the physical trial vector
\[
 f_{\ell,k}=M_{k\omega_\ell}^{*}U_{a_\ell}^{*}G_k.
\]
Each fixed channel (k\) has carrier cost
\[
e^{-a_\ell}\log(2+|k\omega_\ell|)\longrightarrow\tau,
\]
and its twisted prime block converges strongly, by TPH01, to (D_{\phi_k}\). For the common norm and ordinary quadratic form, all off-diagonal channel entries vanish:
\[
\langle f_{\ell,k},f_{\ell,j}\rangle\longrightarrow0,\qquad
e^{-a_\ell}q_{a_\ell}(f_{\ell,k},f_{\ell,j})\longrightarrow0\quad(k\ne j).
\]
Consequently the finite Gram and form matrices converge to diagonal matrices, with diagonal entries
\[
\|G_k\|^2,\qquad \tau\|G_k\|^2-\langle D_{\phi_k}G_k,G_k\rangle,
\]
respectively. The same conclusion holds for every fixed finite span and its polarized form.

Here are the off-diagonal checks. In endpoint coordinates, (V_{\ell,k}^{*}V_{\ell,j}) is multiplication on the two components by phases with frequency \((k-j)\omega_\ell\), up to constant endpoint phases. It therefore converges weakly to zero. The normalized prime operator conjugated to channel (k) is uniformly bounded and converges strongly to (D_{\phi_k}\); hence its off-diagonal pairing against (V_{\ell,k}^{*}V_{\ell,j}G_j\) tends to zero. The pole blocks converge in norm to a fixed finite-rank endpoint block, so the same weak-modulation argument makes their cross entries vanish. For the archimedean multiplier, the Fourier transforms of fixed smooth endpoint profiles are Schwartz functions shifted to distinct centers (k\omega_\ell) and (j\omega_\ell); splitting frequency space into neighborhoods of those centers and their complement, using \(\alpha(t)=O(1+\log(2+|t|))\), gives an off-diagonal pairing (O_N((1+|\omega_\ell|)^{-N}(1+\log(2+|\omega_\ell|)))) for any fixed (N\). After multiplication by (e^{-a_\ell}\), this tends to zero. The diagonal entries are exactly the fixed-envelope TPH01 limit (2).

This establishes genuine finite-dimensional Rayleigh convergence for the fixed harmonic channels along one common realizing sequence. By finite-dimensional minmax it can feed indexed ordinary lower bounds; it does not by itself give an upper characterization or justify treating arbitrary packets as independent channels.

## Limits

- The moment-kernel constraint is necessary only; no converse realization theorem is proved.
- The Rayleigh statement is for a fixed finite set of nonzero integer harmonics and fixed smooth endpoint profiles. No uniformity as the number or size of harmonics grows is claimed.
- It proves no RH statement, actual anomalous ordinary mode, actual off-line zero, or evaluated value of (S\).
- No tests were run; no numerical or formal verification was performed.

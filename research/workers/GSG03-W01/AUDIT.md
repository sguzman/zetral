# GSG03-W01 — Independent audit of upper growth estimates

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/GSG03-upper-growth.md`. No RH, novelty, formal verification, numerical certification, or human-review claim.

## Scope and imported inputs

I checked the coarse unrestricted upper rate, weighted pair decomposition and holomorphic derivative estimate, exact restricted/log-energy exponent deductions, and the conditional ordinary upper rate. I treat the paired Weil formula, the archimedean/prime/pole decomposition, the classical local Riemann–von Mangoldt count, and GSG02's lower-rate trials as imported. I do not independently retrieve or reprove those source inputs.

## Coarse unrestricted upper rate

The archimedean term is bounded below by \(\alpha(0)\|f\|_2^2\). Each truncated translation has norm at most one, while partial summation from \(\sum_{n\le X}\Lambda(n)=O(X)\) gives \(\sum_{n\le X}\Lambda(n)/\sqrt n=O(\sqrt X)=O(e^a)\) for \(X=e^{2a}\). The pole quadratic form's negative part is at most \(2\|\sinh(x/2)\|_2^2\|f\|_2^2=O(e^a)\|f\|_2^2\). Thus \(q(f)\ge-Ce^a\|f\|_2^2\), and the form-core extension gives \(N(a)\le Ce^a\). The bracket with GSG02's lower bound is consequently as stated; it does not identify the interior exponent.

## Weighted pair estimate

For \(z=u+id\), adding the two conjugate terms gives
\[
\frac{m_z}{2}\big(|F(z)+F(\bar z)|^2-|F(z)-F(\bar z)|^2\big).
\]
The negative part is bounded by \(\frac{m_z}{2}|F(z)-F(\bar z)|^2\le2m_zd^2\sup_{|v|\le B}|F'(u+iv)|^2\). The local zero count gives \(W_k\le Cw(k)\). For \(r=1/a\le1\), every radius-r disk around \(u+iv\), \(u\in[k,k+1]\), \(|v|\le B\), lies in the enlarged rectangle in GSG03; the holomorphic mean-value inequality and finite overlap yield the stated \(a^2\) factor and weighted derivative integral.

To audit the weighted Young step, write
\[
F'(u+iv)=\widehat{ix e^{-vx}f}(u)
=\frac1{2\pi}\int \widehat m_v(s)F[f](u-s)\,ds,
\quad m_v(x)=ix e^{-vx}\eta_a(x).
\]
The cutoff makes \(m_v\) compactly supported and equal to \(ix e^{-vx}\) on the support of \(f\). Its L1 norm and second-derivative L1 norm have the stated \(C(a+1)^2e^{|v|(a+1)}\) bound. Integrating by parts twice controls \(\int\sqrt{w(s)}|\widehat m_v(s)|ds\): use the L1 bound on \(|s|\le1\) and the \(|s|^{-2}\|m_v''\|_1\) bound outside. The submultiplicative inequality for \(w\) then gives the weighted Young estimate. Integrating over \(|v|\le B+1/a\), of uniformly bounded length, contributes \(O((a+1)^4e^{2Ba})\); combined with the disk factor this is the claimed \(C(a+1)^6e^{2Ba}L(f)\). This proves the stated upper bound only in terms of log energy; it does not bound \(L(f)\) by \(\|f\|_2^2\).

## Restricted and conditional rates

For fixed \(M\), the upper rate for \(N_M\) follows directly from the preceding estimate. The lower-rate trial vectors from two disjoint translates have unit norm and pointwise Fourier magnitude squared at most \(2|F[f_0]|^2\), so their log energy stays bounded independently of the separation. This gives the lower rate for every \(M\ge2L(f_0)\); the same trials yield the lower rate for the normalized variational quotient. No bound on log energy of actual bottom eigenvectors follows.

Under \(\sup_k W_k<\infty\), use the same disk estimate without the weight \(w(k)\), then Plancherel:
\[
\int_{\mathbb R}|F'(u+iv)|^2du=2\pi\|xe^{-vx}f\|_2^2
\le2\pi a^2e^{2a|v|}\|f\|_2^2.
\]
The \(v\)-integral over \([-B-1/a,B+1/a]\) is \(O(e^{2Ba}/a)\); the disk factor and this integral yield \(C(a+1)^3e^{2Ba}\|f\|_2^2\). Form-core approximation transfers this test bound to the closed form. Combined with GSG02's lower rate, the conditional exponent is exact. If only finitely many off-line pairs occur, one can also bound each pair's Fourier difference directly by the L2 norm of \(e^{izx}-e^{i\bar z x}\); summing finitely gives at least the claimed coarser polynomial upper factor. No unconditional uniform bound on \(W_k\) is inferred.

No flaw found in these deductions under the imported source and zero-count inputs. The unrestricted interior matching rate remains open absent the extra density/log-energy control. This audit establishes neither that hypothesis nor any RH conclusion.

## Source record

- Audited: `research/positivity/GSG03-upper-growth.md` at the starting commit recorded in the handoff.
- Cross-checked internally: GSG02 lower-rate inputs cited by GSG03.
- No fresh external source retrieval, numerical computation, or formal verifier used.

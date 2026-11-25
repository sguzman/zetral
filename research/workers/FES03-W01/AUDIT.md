# FES03-W01 — Independent audit of the prime-phase exceptional set

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/FES03-prime-phase-exceptional-set.md`. No RH, novelty, formal verification, numerical certification, or human-review claim.

## Scope and imported assumptions

I checked the support-cutoff identity, the necessity of a large prime polynomial value for a deep localized packet, the unique-factorization coefficient estimate, the elementary mean-square bound, and the exceptional-set exponent. I treat as imported the GSG03 Weil-form formula and digamma asymptotics, the FES02 selected-packet result, Chebyshev bounds, and the zero-count/operator setup. No advanced large-value estimate is used or independently sourced here.

## Exact cutoff symbol and packet resonance

For \(\operatorname{supp}f\subset(-A,A)\), the autocorrelation is supported in \((-2A,2A)\); hence multiplication of the prime and pole kernels by \(\chi_A\equiv1\) there does not change the form. The primes with \(\log n>2A\) contribute zero to the compactly supported correlation, while the cutoff's support ends at \(2A+1\), giving the stated finite sum. The cutoff pole kernel Fourier transforms to \(H_A\). Chebyshev's bound gives \(|P_A|\le Ce^A\); two integrations by parts on the compactly supported smooth pole kernel give \(|H_A(t)|\le Ce^A/(1+t^2)\). Together with the lower bound for \(\alpha\), this gives \(S_A\ge-Ce^A\).

For a unit packet with \(q_A(v)\le-D\), if no point within \(L\) of its carrier has \(S_A(t)\le-D/2\), the inside contribution is at least \(-D/2\), and the outside contribution is at least \(-Ce^A M(1+hL)^{-p}\). When the latter magnitude is less than \(D/2\), the total form is greater than \(-D\), a contradiction. Along FES02's escaping sequence, \(D\) grows exponentially and choosing \(L=e^{\kappa A}\) with \(p\kappa>1\) makes this tail term tend to zero. For doubly exponential carrier size, \(|t-\omega|\le L\) implies \(|t|/|\omega|\to1\); then \(H_A(t)=o(1)\) and \(\alpha(t)=\log|t|-\log(2\pi)+o(1)\). Since \(S_A=\alpha-P_A+H_A\), the necessary threshold \(P_A(t)\ge\log|t|+D/2-O(1)\) follows.

## Prime-polynomial high moment

For \(Q_A(t)=\sum_{p\le X}a_pp^{it}\), expansion of \(Q_A^m\) groups ordered prime tuples by their multiplicities \(r_p\), with coefficient \(m!\prod_p a_p^{r_p}/\prod_pr_p!\). Squaring and comparing termwise with \(m!V^m\), where \(V=\sum|a_p|^2\), is valid because each \(r_p!\ge1\); thus \(\sum_n|b_n|^2\le m!V^m\). Partial summation gives \(V=O((\log X)^2)\). The prime-power remainder is \(O(\log X)\): squares contribute \(\sum_{p\le\sqrt X}\log p/p=O(\log X)\), and exponents at least three contribute a convergent sum.

For \(n,k\le Y\), \(|\log(n/k)|\ge|n-k|/Y\). Integrating off-diagonal exponentials over any interval of length \(T\), then using \(2|b_nb_k|\le|b_n|^2+|b_k|^2\) and the harmonic sum, bounds the off-diagonal contribution by \(4Y(1+\log Y)\sum|b_n|^2\). Adding the diagonal gives (4). With \(m=\lfloor\log T/(2\log X)\rfloor\), \(Y\le\sqrt T\), and for sufficiently large \(T\) the bracket is at most \(2T\). If \(P_A\ge H\ge4\|R_A\|_\infty\), then \(2\Re Q_A\ge H-2\|R_A\|_\infty\ge H/2\), hence \(|Q_A|\ge H/4\); Markov gives precisely the factor \(2(16mV/H^2)^m\) in (5).

For fixed \(\delta,c>0\), \(\log\log T\ge\delta A\) gives \(H=c\log T\gg\log X\), and the base is at most \(C_cA/\log T\). For all sufficiently large \(A\), its logarithm is at most \(-\delta A/2\), while \(m\ge\log T/(5A)\). Consequently the bound is at most \(2T^{-\delta/10}\), which implies the weaker stated \(2T^{-\delta/20}\). The asymptotic qualification is needed; the raw bound (5) is the appropriate finite-parameter expression. Evenness gives the same result on negative dyadic intervals.

No flaw found in the cutoff, resonance implication, or exceptional-set calculation under the stated imported assumptions. The measure estimate still allows rare pointwise resonances on very long intervals and does not bound the variationally selected carrier; no escape exclusion follows. This audit makes no priority determination and does not verify the original GSG03 formula.

## Source record

- Audited: `research/positivity/FES03-prime-phase-exceptional-set.md` at the starting commit recorded in the handoff.
- No external source, numerical computation, or formal verifier used.

# PMA63-W07 — fixed-partition boundary correction audit

Status: completed scoped analytic audit; ready for lead review.

Baseline: `7e7c6dc3a8d048b0ad1c57c18ee16cc12f0afd4b` (LXIV open). This extends the unchecked fixed-partition boundedness/domain claim in `research/positivity/DNB02-exact-positive-boundary-resolvent.md`. It does not redo PMA63-W02's individual one-cell boundary and pole normalizations, and it does not audit prime shifts or any campaign matrix.

## Multiplier coefficient and exact correction

DNB01's exact series is
\[
\alpha(t)=\alpha_0+\sum_{j\ge0}\frac{2}{r_j}\frac{t^2}{t^2+r_j^2},\qquad r_j=2j+\tfrac12.
\]
For (L=-d^2/dx^2), (L(L+r^2)^{-1}=I-r^2(L+r^2)^{-1}). Subtracting the Neumann and full-line multipliers term by term gives
\[
\frac2r\,r^2\big((L_N+r^2)^{-1}-(L_0+r^2)^{-1}\big)=2rD_r,
\]
where (D_r=(L_N+r^2)^{-1}-(L_0+r^2)^{-1}\succeq0). The identity (2rD_r=U_rC_rU_r^*\) is thus the exact coefficient in the multiplier correction, not a rescaled approximation. The resolvent order follows from the Neumann/full-line form-domain inclusion or its variational resolvent formula.

## Uniform bound at a fixed finite partition

Fix a cell ((0,h)). Write (u(x)=e^{-rx}), (v(x)=e^{-r(h-x)}), and (q=e^{-rh}). The diagonal cell kernel of (2rD_r) is
\[
\frac{u(x)u(y)+v(x)v(y)+q(u(x)v(y)+v(x)u(y))}{1-q^2}.
\]
For (r=r_j\ge1/2), (1-q^2\ge1-e^{-h}>0). Summing the numerator kernels over (j) gives four geometric kernels with arguments (x+y), (2h-x-y), (2h+x-y), and (2h-x+y). The last two are bounded above by the same kernels with arguments (h+x-y) and (h-x+y), respectively, since these arguments lie in ([0,2h]) and the geometric kernel is decreasing.

Define
\[
k(s)=\sum_{j\ge0}e^{-r_js}=\frac{e^{-s/2}}{1-e^{-2s}},\qquad
C_h=\frac{1}{1-e^{-h}}\sup_{0<s\le2h}\frac{s e^{-s/2}}{1-e^{-2s}}<\infty.
\]
Then (k(s)/(1-e^{-h})\le C_h/s). Each of the four resulting (1/s) kernels is a unitary reflection of the Carleman kernel (1/(x+y)) on ((0,h)). The weighted Schur test with weight (x^{-1/2}) gives
\[
\int_0^h\frac{y^{-1/2}}{x+y}\,dy\le\pi x^{-1/2},
\]
so each has operator norm at most π. Thus every finite partial sum of the diagonal-cell compressions has norm at most (C_0(h)=4\pi C_h), independent of the number of rates.

For a fixed finite partition with (m) cells, let (K_J=\sum_{j<J}2r_jD_{r_j}\succeq0). Each diagonal compression is bounded by (C_0=\max_i C_0(h_i)). Positivity gives the block Cauchy–Schwarz inequality
\[
|\langle (K_J)_{ik}f_k,f_i\rangle|\le
\langle(K_J)_{ii}f_i,f_i\rangle^{1/2}
\langle(K_J)_{kk}f_k,f_k\rangle^{1/2}.
\]
Summing and applying ​Cauchy–Schwarz over the (m) cells yields
\[
0\le\langle K_Jf,f\rangle\le
\left(\sum_i\sqrt{C_0}\,\|f_i\|\right)^2\le m C_0\|f\|^2.
\]
Hence (K_J\) is an increasing, uniformly bounded sequence of positive operators. Its quadratic forms increase to a bounded positive form and define a bounded operator (K\preceq mC_0 I). Moreover (K_J\to K) strongly: with (A_J=K-K_J\succeq0),
\[
\|A_Jf\|^2\le\|A_J\|\langle A_Jf,f\rangle\le mC_0\big(\langle Kf,f\rangle-\langle K_Jf,f\rangle\big)\to0.
\]
This proves the fixed-partition strong-limit claim without an operator-norm tail estimate.

### Form-domain identity, including the infinite rate sum

For L >= 0, set `phi_j(L) = L(L+r_j^2)^-1 = I-r_j^2(L+r_j^2)^-1` and `c_j=2/r_j>0`. Let

    q_{L,J}(f) = alpha_0 ||f||^2 + sum_{j<J} c_j <phi_j(L)f,f>,

and define `q_L(f)=lim_{J->infinity} q_{L,J}(f)`, allowing +infinity. Resolvent order gives `q_{L_N,J}(f) <= q_{L_0,J}(f)`. The exact resolvent difference and `c_j*r_j^2=2*r_j` give

    q_{L_0,J}(f) - q_{L_N,J}(f) = <K_J f,f>,

where `K_J=sum_{j<J} 2*r_j*D_{r_j}`. The fixed-partition estimate proves `0 <= K_J <= C I`, with `C=m*C_0`, for all J. Therefore, in the extended sense, for every f in L2(R),

    q_{L_N}(f) <= q_{L_0}(f) <= q_{L_N}(f) + C ||f||^2.

These inequalities show `D(q_{L_N})=D(q_{L_0})`: finiteness of either form forces finiteness of the other. For f in this common domain, strong convergence `K_J -> K` gives

    q_{L_0}(f) = q_{L_N}(f) + <K f,f>.

Taking f to be the zero extension of a physical-window vector gives the equality between the compressed archimedean form and its cellwise Neumann form plus the bounded boundary correction. The argument is for each fixed finite partition; `C=m*C_0` is not uniform over arbitrary refinements.

## Operator-norm convergence fails

Fix one cell of length (h>0). For integers (N>1/h), take the unit vector (f_N(x)=\sqrt N\,1_{(0,1/N)}(x)) in that cell and zero in other cells. For every (j=N,\ldots,2N-1), (r_j<4N), so
\[
\langle u_j,f_N\rangle=\sqrt N\int_0^{1/N}e^{-r_jx}dx\ge e^{-4}/\sqrt N.
\]
The cell compression of (2r_jD_{r_j}=U_{r_j}C_{r_j}U_{r_j}^*) contains the positive term |⟨u_j,f_N⟩|²/(1-q_j^2), with (1/(1-q_j^2)\ge1); all other contributions to this quadratic form are nonnegative. Therefore the tail after (J=N) obeys
\[
\langle(K-K_N)f_N,f_N\rangle\ge N\,e^{-8}/N=e^{-8},
\]
so (\|K-K_N\|\ge e^{-8}) for arbitrarily large (N). The finite-rate corrections converge strongly but not in operator norm. This does not invalidate their use as monotone lower forms or for fixed test vectors.

## Limits

The proof assumes the DNB01 digamma expansion and DNB02 resolvent-kernel identity, both written in the repository, and checks their coefficient relation and the fixed-partition operator estimates. It is an analytic deduction, not machine verification or a new independent primary-source audit. It does not bound the correction uniformly over refining partitions, certify the prime-plus-pole operator, or establish positivity/RH.

## Explicit bound for the campaign's one-cell windows

The kernel constant admits a simple global estimate. From (e^{2s}\ge1+2s),
\[
1-e^{-2s}\ge\frac{2s}{1+2s},\qquad
s k(s)\le\frac{1+2s}{2}e^{-s/2}.
\]
The right side has its maximum at (s=3/2), with value (2e^{-3/4}<1) (for example, (e^{3/4}>1+3/4+(3/4)^2/2>2)). Hence (C_h<1/(1-e^{-h})). For (h\ge2), (e^{-h}\le e^{-2}<1/4), so a one-cell correction satisfies
\[
\|K\|<\frac{4\pi}{1-e^{-h}}<\frac{16\pi}{3}.
\]
In particular, the boundary correction is uniformly bounded over all current candidate windows (h\in[2,12/5]), even though the convergence (K_J\to K) is not in operator norm. This constant is a coarse analytic bound, not a numerical estimate of the correction's actual norm.

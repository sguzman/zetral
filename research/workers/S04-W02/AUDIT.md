# S04-W02 — independent audit of the small-window derivation

Date: 2026-11-25 UTC. Status: ready for lead review. This is a source-grounded AI proof audit, not independent human review, machine proof, or novelty determination.

## Sources actually inspected

- Suzuki, *Weil's quadratic form via the screw function*, arXiv:2606.09096v4, primary HTML fetched 2026-11-25: §1.1; §2.3 (2.3)–(2.4); §6.2; Theorem 1.5 (1.11); §6.5 proof. URL: `https://arxiv.org/html/2606.09096v4`.
- Suzuki, *Spectral convergence associated with Weil's quadratic form*, arXiv:2610.32704v1, §3.2 and §6: read for the separate RH-conditional global spectral comparison; it is not needed for the local small-window result.
- Kim et al., arXiv:2607.24830v3, primary HTML fetched 2026-11-25: §3.9. URL: `https://arxiv.org/html/2607.24830v3`.

I read `AGENTS.md`, the current `STATE.md`, `COORDINATION.md`, Campaign VI, Campaign V's standalone manuscript, S01/S02/S03, C04, and the worker's previously accepted S03 review. The inspected source passages support the theorem imports stated below; I did not rerun or audit Suzuki's entire paper proof or any source's numerical certificate.

## Findings

### 1. Local spectral theorem and phase convention

Suzuki v4 Theorem 1.5 states that for (v_+,v_-in\ker(\mathscr D_a^*\mp i)) with equal (T_a)-norm, the function
\[
W(a,\theta;z)=(z-i)\widehat v_+(z)+e^{i\theta}(z+i)\widehat v_-(z)
\]
has precisely the real, simple eigenvalues of the self-adjoint extension as its zeros. In §6.2 the Riesz vector satisfies (v_z=T_a^{-1}e^{-izx}) and (mathscr D_a^*v_z=zv_z). Thus at λ=0, (v_+=A_a^{-1}e^x) and (v_-=A_a^{-1}e^{-x}). Reflection commutes with the geometric form and exchanges these vectors, proving equal norms with no additional phase. At θ=π, (1.11) gives the required minus sign. The theta=π characteristic in S01 is therefore conventionally consistent.

The use of λ=0 is conditional on (A_a>0), which C04 supplies directly for all sufficiently small (a): for (L=2a\le1/2), (A_a\ge[c(a)-L-8\sinh a]I); the right side is positive as (a\downarrow0). No RH assumption is introduced by this local theorem or bound. S01 correctly separates this unconditional local statement from Suzuki's RH-dependent global comparison.

### 2. Scaled form and domain checks

Under (U_af(y)=\sqrt a f(ay)), the prime-free shift form has singular coefficient (aK(ah)=1/(2h)+a r(ah)), where (r(t)=K(t)-1/(2t)) is bounded at zero. The other archimedean and scalar terms have norm (O(a)). Hence the common-core form identity
\[
U_a A_a U_a^{-1}=c(a)I+B+E_a,\qquad
B\text{ from }b(u,v)=\tfrac12\int_0^2\langle(2I-S_h)u,v\rangle\,dh/h,
\]
with (E_a=E_a^*), ‖(E_a)‖=O(a), has the stated factor and sign. Bounded form perturbation and uniqueness of the closure of the shared compact-test form justify a common closed form and operator domain; this is not an equality of only finite matrices.

For (g=1), the missing-shift intervals are (h>1-y) and (h>1+y), so (Bg=\frac12[\log(2/(1-y))+\log(2/(1+y))]=b_0(y)). For (g=y), the one-sided boundary interval (1-y<h<1+y) contributes (y+\frac y2\log((1+y)/(1-y))), and the final interval (1+y<h<2) contributes (y\log(2/(1+y))). Their sum is (y[b_0(y)+1]). These logarithmic endpoint singularities are in (L^2(-1,1)). Thus the displayed B actions and (1,y\in\mathrm{Dom}(B)) are consistent with the form representation argument in S01/C04.

### 3. Resolvent identity and signs

With inner product linear in the first variable and (R_c=(cI+B)^{-1}), spectral calculus gives (cR_c\to I) strongly and ‖(cR_c)‖\le1. For (g,h\in\mathrm{Dom}(B)),
\[
\langle cR_cg-g+Bg/c,h\rangle
=\langle Bg,(I-cR_c)h\rangle/c
=\langle Bg,cR_cBh\rangle/c^2.
\]
The sign is positive. Uniformity for (h=h_s=e^{-i\bar{s}y}) on a compact follows because (s\mapsto Bh_s) is norm-continuous with compact image; uniformly bounded strong convergence is uniform on a compact set by a finite-net argument. The (O(a)) bounded perturbation contributes (O(a/c)), and forcing replacements contribute (O(a^2)); both are (o(c^{-2})). No operator-norm Neumann series or (B^2g) assumption is used.

For (F_1[g](s)=\frac12\int g(y)e^{isy}dy), one has (F_1[yg]=-i(F_1[g])'). Therefore the first-order characteristic is (\cos s-G(s)/c), with (G=(sH)'+s\operatorname{sinc}'), (H=F_1[b_0]); the (i) factors and sign agree with S02. Expanding a root (s_n+d_n/c+e_n/c^2) gives (d_n=G(s_n)/\cos'(s_n)) and (e_n=(d_nG'(s_n)-H_2(s_n))/\cos'(s_n)), since (\cos''(s_n)=0). Differentiating S02's explicit G yields (G'(s_n)=-\sin(s_n)[1+\operatorname{Cin}(2s_n)/2]), so S03's expression for (e_n) follows. Finally (c=\ell-K_0+O(a^2)), (K_0=\log(4\pi)+\gamma_E), implies (q_n=e_n+K_0d_n); the convention conversion is correct.

### 4. Independent (H_2) check from the difference quotient

Rather than use S03's closed (\operatorname{Cin}/\operatorname{Si}) expression for (B e^{isy}), I evaluated the defining difference quotient directly:
\[
(Bg)(y)=b_0(y)g(y)+\tfrac12\int_{-1}^1\frac{g(y)-g(v)}{|y-v|}\,dv.
\]
For (g(v)=e^{isv}), split at (v=y) and substitute (t=|v-y|). The two regularized terms are
\[
\int_0^{1+y}\frac{1-e^{-ist}}t\,dt,
\qquad
\int_0^{1-y}\frac{1-e^{ist}}t\,dt.
\]
This independently fixes the signs in the (Q_s) formula. I numerically integrated the resulting nested integral for (H_2(s_n)), then evaluated (e_n,q_n) from S03.1–S03.2. The reproducible script is `experiments/worker-s04-w02/h2_direct_check.py`; actual output is `experiments/worker-s04-w02/h2_direct_check.txt`. Command: `PYTHONDONTWRITEBYTECODE=1 python3 experiments/worker-s04-w02/h2_direct_check.py`. Python 3.12.14, mpmath 1.3.0, 35 decimal working precision.

The direct nested calculation returned:

| n | H2(s_n) | d_n | e_n | q_n |
|---:|---:|---:|---:|---:|
| 1 | -3.15708352222154579519 | 0.925968525991233085181 | -1.46798838846255116260 | 1.41014394115959564377 |
| 2 | 4.26255313656084647220 | 0.837380899489980632974 | -2.24867818430865238651 | 0.354102548924396055851 |
| 3 | -4.81135104005796953527 | 0.816982423051417606655 | -2.63514586798251891520 | -0.0957684933571686865094 |
| 4 | 5.18268059909224335910 | 0.808042758725821994296 | -2.89357117937338387173 | -0.381980426203577695370 |

These agree with S03's displayed values. This is a high-precision quadrature cross-check, not an interval enclosure. The outer integrand is (O(1+|\log(1-|y|)|^2)), integrable at the endpoints; no divergent boundary term was found.

### 5. Prior-art distinction and limits

Kim et al. v3 §3.9 explicitly computes Suzuki's same finite-(a), phase-dependent characteristic from finite-element matrices and numerically reports real roots and generic-phase spacing for (a=3,6). This is materially relevant overlap in operator, characteristic, and numerical method. The inspected section concerns large/moderate windows and does not state the (a\downarrow0) fixed-index logarithmic correction or S03's second-order integral. That is a limited source comparison, not exhaustive prior-art research, and it supports no novelty claim.

No flaw or counterexample was found in the checked algebra or source normalization. Unchecked: a full independent proof of source theorems, every functional-analytic domain detail beyond the arguments above, rigorous quadrature/interval bounds, formal verification, exhaustive literature search, and originality. The candidate asymptotic remains subject to lead review and human mathematical review.

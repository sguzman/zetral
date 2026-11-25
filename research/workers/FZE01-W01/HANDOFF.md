# FZE01 — Compact even annihilator and residual-kernel inertia transfer

Status: READY_FOR_REVIEW

AI-assisted candidate deduction without RH. It uses the compact multiplier and local zero-count framework of PPE02–03. No source retrieval, numerical computation, formal verification, independent human review, or priority claim.

## 1. Finite-set annihilator

Let (Z_f\) be a finite set of distinct nonreal ordinate nodes, invariant under (z\mapsto-z\) and conjugation. Thus
\(d_{\min}=\min_{z_j\in Z_f}|\operatorname{Im}z_j|>0\). Use PPE03's real-odd compact-support base multiplier
\[
m_o(z)=2\int_0^z c\left(\frac{\sin(w/4)}{w/4}\right)^4dw,
\]
normalized so \(\int_{\mathbb R}c(\sin(t/4)/(t/4))^4dt=1\). On the real axis (m_o\) is odd, 
\(|m_o(t)|<1\), and (1-|m_o(t)|\asymp(1+|t|)^{-3}\). Its inverse Fourier transform is a compactly supported principal-value distribution. Set (m_b=m_o^2\). Then (m_b\) is real-even, compactly supported in the convolution sense, (0\le m_b(t)<1\) for finite real (t), and
\[
c_-(1+|t|)^{-3}\le1-m_b(t)\le c_+(1+|t|)^{-3}.
\]

At each node prescribe (d_j=-m_b(z_j)\). These data satisfy (d_{-z_j}=d_{z_j}\) and (d_{\bar z_j}=\overline{d_{z_j}}\). Take a real even compactly supported smooth bump with Fourier-Laplace transform (H\), chosen by shrinking its support so (H(z_j)\ne0\) for every node. If (L_j\) is the finite-set Lagrange polynomial, define
\[
C_T(z)=\sum_j d_jL_j(z)\frac{H(z)}{H(z_j)}e^{-i\operatorname{sgn}(\operatorname{Im}z_j)T(z-z_j)}.
\]
This interpolates (d_j\) exactly. On real (t), the (j\)-th exponential contributes (e^{-T|\operatorname{Im}z_j|}\); since (L_j(t)H(t)\) is rapidly decreasing,
\[
\sup_{t\in\mathbb R}(1+|t|)^3|C_T(t)|\le C_{Z_f}e^{-Td_{\min}}.
\]
Symmetrize (C_T\) under conjugation and then under (z\mapsto-z\). The symmetries of (Z_f,d_j\) preserve the interpolation values and this real-axis bound. For a fixed sufficiently large (T\), the even-real correction (C\) satisfies
\(|C(t)|\le(1-m_b(t))/2\). Therefore
\[
m_f(z)=m_b(z)+C(z)
\]
is real-even, satisfies \(|m_f(t)|\le1\) for real (t\), and vanishes exactly at every prescribed node (additional zeros are harmless). It tends to (1\) as \(|t|\to\infty\), so it is not identically zero and its real zero set is discrete. Its multiplier is injective on (L^2\). Its inverse Fourier transform is a compactly supported distribution, with a finite support radius (H_f\) depending on the node set and chosen (T\).

Convolution (T_f\) by this distribution is an ordinary/log-energy contraction, commutes with reflection because (m_f\) is even, maps the support interval ((-a,a)\) into ((-a-H_f,a+H_f)\), and sends every form vector into the evaluation kernel
\[
\mathcal K_f=\{f:Ff(z)=0\text{ for every }z\in Z_f\}.
\]
These statements first hold on compact smooth functions by the Fourier-Laplace transform and then extend to the closed form domain by core approximation.

## 2. Residual-form comparison

Let (q_a^f\) denote the Weil form with only the zero-pair terms at (Z_f\) omitted from its paired zero representation; all other terms are retained. On \(\mathcal K_f\), the omitted evaluations vanish, so (q_a^f=q_a\).

Because (m_f\) is real-even,
\[
q_{a+H_f}^f(T_ff,T_fg)-q_a^f(f,g)
=\sum_{z\notin Z_f}m_z\bigl(m_f(z)^2-1\bigr)Ff(z)\overline{Fg(\bar z)}.
\]
The base deficit has order \((1+|\Re z|)^{-3}\) in the fixed strip \(|\Im z|\le1/2\). The correction (C\) is the transform of a fixed compact smooth function (with finitely many translations/derivatives), so it is rapidly decreasing in \(|\Re z|\) on this strip. Hence
\[
|1-m_f(z)^2|\le C_f(1+|\Re z|)^{-3}.
\]
If every omitted-fast node has been selected so all remaining nonreal nodes satisfy \(|\Im z|\le b\), the classical local zero count gives
\(\sum_{z\notin Z_f}m_z|1-m_f(z)^2|<\infty\). Evaluation on support ((-a,a)\) obeys \(|Ff(z)|\le I_a(\Im z)^{1/2}\|f\|_2\), where (I_a(d)=\int_{-a}^a e^{-2dx}dx\) is increasing in \(|d|\). Thus
\[
q_{a+H_f}^f(T_ff,T_ff)\le q_a^f(f,f)+E_f(a)\|f\|_2^2,
\qquad E_f(a)=C_f I_a(b).
\]
For (b>0\), (E_f(a)=O_f(e^{2ba})\). When (b=0\), all remaining zeros are real: their terms have \(m_f(t)^2-1\le0\), so the form inequality holds with (E_f(a)=0\).

Write (N_j(q_a^f)\) for the (j\)-th negative depth of the unrestricted residual form, and (N_j(q_a|_{\mathcal K_f})\) for that of the full form restricted to the fast-evaluation kernel. The contraction, injectivity, and minmax principle give
\[
N_j(q_{a+H_f}|_{\mathcal K_f})
=N_j(q_{a+H_f}^f|_{\mathcal K_f})
\ge\bigl(N_j(q_a^f)-E_f(a)\bigr)_+.
\]
The reverse comparison of counts at the same window is the elementary restriction inequality (the kernel cannot have greater negative index than the unrestricted residual form). The support enlargement (H_f\) is fixed for this finite set, not uniform as the selected set changes.

## Limits

- The result is an inertia transfer for the residual form after excising a fixed finite symmetric set. It does not identify the finite removed modes or prove their existence.
- Constants and support radius depend on the selected zero nodes; no uniform limit as the set grows is claimed.
- The paired zero representation, form-domain core, and local zero count are inherited inputs and need lead review.
- No actual off-line zero, RH conclusion, numerical or formal verification, or priority claim.

# Small-window asymptotics of the Weil-form differentiation spectrum

Candidate research manuscript v0.1 — 25 November 2026. Zetral, AI-assisted research under human direction. No independent human review, formal verification or established originality. This manuscript is separate from the conditional large-window theta-cardinal manuscript v0.2.

## Abstract

We investigate the local phase-pi self-adjoint differentiation extension associated with the Weil form on (-a,a). For each fixed positive spectral index n, we derive an unconditional candidate expansion as a decreases to zero,
[
a t_{a,n}=s_n+\frac{d_n}{\ell}+\frac{q_n}{\ell^2}+o_n(\ell^{-2}),\qquad
s_n=(n-\tfrac12)\pi,\quad \ell=\log(1/a).
]
Here d_n=Si(2s_n)/2>0, and q_n is given by a convergent one-dimensional integral of classical sine and cosine integrals. The proof uses the prime-free explicit formula, the scaled logarithmic operator and scalar resolvent expansions; it does not use the Riemann hypothesis. The spectrum studied is the local differentiation spectrum, not the ordinary L2 form spectrum or the zeta-zero spectrum.

## 1. Local extension and positive form

Use the Fourier convention F[u](z)=integral_(-a)^a u(x) exp(izx) dx, inner products linear in the first argument. Let A_a be the self-adjoint operator of the geometric Weil form on L2(-a,a), as in Suzuki [1], Theorem 1.1 and §3. For 2a<log 2, the prime sum in the explicit formula vanishes. With L=2a, K(t)=exp(t/2)/(2sinh t), S_t the sum of the two truncated zero-extended shifts, and I the identity, the geometric form on compact tests is
[
\langle A_a u,v\rangle=c(a)\langle u,v\rangle+
\int_0^L K(t)\langle(2I-S_t)u,v\rangle dt+
\int_0^L2\cosh(t/2)\langle S_tu,v\rangle dt+d_a\langle u,v\rangle,
]
where the left side denotes the form pairing when u is only in the form domain, and
[
c(a)=-\log(4\pi)-\gamma_E-\log\tanh a,\qquad
d_a=\int_0^L2(e^{-t/2}-1)K(t)dt.
]
The formula follows by splitting the subtraction integral at L; its scalar tail is -log(tanh a). The truncated shifts are contractions, hence 2I-S_t is nonnegative. For L<=1/2, K(t)<=1/t, -L<=d_a<=0 and the pole term has norm <=8sinh(a). Therefore A_a>= [c(a)-2a-8sinh(a)]I by compact-test form density. This lower bound is positive for all sufficiently small a and needs no RH.

Suzuki [1], Theorem 1.5 and §§6.3–6.5, apply with shift lambda=0, since lambda<inf spec A_a. Reflection commutes with the form, so the natural deficiency vectors v_+=A_a^(-1)exp(x), v_-=A_a^(-1)exp(-x) have equal form norms. Fix these vectors to fix the phase convention. For theta=pi, the entire characteristic
[
W_a(z)=(z-i)F[v_+](z)-(z+i)F[v_-](z)
]
has precisely the real simple eigenvalues of the local extension as its zeros. These are imported unconditional local theorems. The RH-dependent global sampling and compression of [2] are not needed below. For sufficiently small a, W_a(0) is nonzero by the normalized limit proved in §3, and the positive roots are indexed in increasing order.

## 2. Scaled logarithmic operator and domains

Apply U_a f(y)=sqrt(a) f(ay) on (-1,1). Use S_h now for the truncated shifts in this scaled interval. The form identity becomes
[
U_a A_a U_a^{-1}=c(a)I+B+E_a,\qquad
b(u,v)=\frac12\int_0^2\langle(2I-S_h)u,v\rangle\frac{dh}{h}.
]
Here B is the nonnegative self-adjoint operator of the closure of b on compact tests. Indeed K(t)-1/(2t) extends continuously at zero; after scaling t=ah the difference of the singular integrals is bounded in norm by O(a). The other two terms above also have norm O(a). Thus E_a is bounded self-adjoint with ||E_a||=O(a). To justify the common form and operator domains, fix one sufficiently small a_0 and subtract c(a_0)I+E_(a_0) from its closed form. Bounded form perturbation preserves closedness and the compact-test core; the resulting form agrees with b on that core and is nonnegative there. Uniqueness of closure for every a then gives the displayed operator identity on Dom B by bounded self-adjoint perturbation. This avoids an assumption about a maximal integral domain.

Every bounded Lipschitz g on (-1,1) lies in this form domain: its zero extension has a real-axis Fourier transform of size O(1/(1+|z|)) by bounded variation, hence finite logarithmically weighted Fourier norm. The domain identification and compact-test core in [1], §3 and (2.8), apply after scaling. Equivalently use interior smooth approximations of uniformly bounded variation and dominated convergence in that norm. Moreover
[
\|(2I-S_h)g\|_2\le 2\sqrt2\,\mathrm{Lip}(g)h+2\|g\|_\infty\sqrt h.
]
Thus the vector integral against dh/(2h) exists in L2. To identify it with B g, extend the form from its core: the maps (2I-S_h)^(1/2)u converge in the weighted L2 space under form convergence, and their pointwise L2 limits identify the extended form. Pairing the convergent vector integral with any form-domain vector then gives b(g,v). The representation theorem implies g belongs to Dom B. Splitting the shift integrals at the boundary yields
[
(Bg)(y)=b_0(y)g(y)+\frac12\int_{-1}^1\frac{g(y)-g(v)}{|y-v|}dv,\qquad
b_0(y)=\log2-\frac12\log(1-y^2).
]
In particular B1=b_0 and By=y(b_0+1). The endpoint logarithms are square integrable. The logarithmic form has an antecedent in [1], (2.3): on compact tests B corresponds to that limiting form with a scalar log 2 shift. We do not claim the operator itself as new.

## 3. Scalar resolvent expansion

Let c=c(a), R_c=(cI+B)^(-1), R_a=(cI+B+E_a)^(-1). Since B>=0, ||R_c||<=1/c and, for small a, ||R_a||<=1/(c-||E_a||). The resolvent identity gives ||cR_a-cR_c||=O(a/c). Spectral calculus gives cR_c->I strongly and ||cR_c||<=1. For g,h in Dom B the exact identity is
[
\langle cR_cg-g+Bg/c,h\rangle=c^{-2}\langle Bg,cR_cBh\rangle.
]
Indeed cR_cg-g=-R_cBg and (I-cR_c)h=R_cBh. This gives a quadratic scalar remainder without assuming g in Dom B^2.

For h_s(y)=exp(-i conjugate(s)y), the preceding Lipschitz estimate is uniform over each complex compact K of s. The map s->h_s is continuous in C^1, so s->B h_s is norm continuous and its image of K is compact. Strong convergence of uniformly bounded cR_c is uniform on this image by a finite net. Therefore
[
\langle cR_cg,h_s\rangle=\langle g,h_s\rangle-c^{-1}\langle Bg,h_s\rangle+c^{-2}\langle Bg,Bh_s\rangle+o_K(c^{-2}).
]
Write u_e=A_a^(-1)cosh x and u_o=A_a^(-1)sinh x, and F_1[g](s)=(1/2)integral_(-1)^1 g(y)exp(isy)dy. In scaled coordinates u_e(ay)=R_a cosh(ay), u_o(ay)/a=R_a[sinh(ay)/a]. The forcing errors relative to 1,y are O(a^2) in L2, and c=log(1/a)+O(1), so they and the resolvent perturbation are o(c^-2) in the normalized outputs. Because W_a(z)=2zF[u_o](z)-2iF[u_e](z), set
[
C_a(s)=\frac{c W_a(s/a)}{-4ia}
=F_1[c u_e(ay)](s)+isF_1[c u_o(ay)/a](s).
]
The leading term is sinc(s)+s sinc'(s)=cos(s). We obtain uniformly on every compact K in C:
[
C_a(s)=\cos s-c^{-1}G(s)+c^{-2}H_2(s)+o_K(c^{-2}),
]
where
[
G=F_1[b_0]+isF_1[y(b_0+1)],\quad
H_2(s)=\tfrac12\langle B1,Bh_s\rangle+\tfrac{is}{2}\langle By,Bh_s\rangle.
]
The functions are entire: the defining integrals are locally uniformly convergent, including the vector shift integral defining B exp(isy). Parity and real coefficients make them real on the real axis and even. This is a scalar expansion; no operator-norm Neumann expansion for unbounded B is invoked.

## 4. Explicit coefficients

Define the entire functions Si(z)=integral_0^z sin(t)dt/t and Cin(z)=integral_0^z(1-cos t)dt/t. With H=F_1[b_0], symmetry and t=1-y give H(s)=-(1/2)integral_0^2 log(t/2)cos(s(1-t))dt. Integration by parts with the primitive [sin s-sin(s(1-t))]/s (which vanishes to first order at t=0) yields
[
sH(s)=\tfrac12[\sin s\,\operatorname{Cin}(2s)+\cos s\,\operatorname{Si}(2s)].
]
The endpoint at t=2 vanishes from log(t/2); s=0 is removable. Differentiating and adding s sinc'(s) gives
[
G(s)=\cos s[1+\tfrac12\operatorname{Cin}(2s)]-\tfrac12\sin s\,\operatorname{Si}(2s).
]
For the second coefficient, use the explicit action of B on exp(isy):
[
Q_s(y)=e^{isy}\{b_0(y)+\tfrac12[\operatorname{Cin}(s(1+y))+\operatorname{Cin}(s(1-y))]
+\tfrac i2[\operatorname{Si}(s(1+y))-\operatorname{Si}(s(1-y))]\}.
]
This follows by splitting at v=y and integrating the differences 1-exp(-ist) and 1-exp(ist), respectively. Then
[
H_2(s)=\tfrac12\int_{-1}^1[b_0(y)+is y(b_0(y)+1)]Q_s(y)dy .
]
Its endpoint singularity is at worst logarithm squared, integrable. For real s the integral equals the real part of the integral over (0,1).

## 5. Ordered spectral asymptotic

Fix n. Choose a prefix rectangle with left real side 0 and right side between s_n and s_(n+1), and disjoint disks about s_1,...,s_n with closures inside that rectangle. The boundary minima of |cos| are positive. Compact-uniform convergence and Rouche give n zeros in the prefix rectangle and one in each disk, counting multiplicity. The local extension theorem ensures real simple zeros. Thus these are the first n positive eigenvalues in the rescaled variable, not merely selected nearby zeros. Since cos has simple roots and C_a-cos=O_K(c^-1), z_n=a t_(a,n)=s_n+O_n(c^-1). Taylor expansion with cos''(s_n)=0 first gives z_n=s_n+d_n/c+O_n(c^-2), then
[
z_n=s_n+\frac{d_n}{c}+\frac{e_n}{c^2}+o_n(c^{-2}),\qquad
d_n=\frac{G(s_n)}{\cos'(s_n)}=\frac12\operatorname{Si}(2s_n),
]
[
e_n=\frac{d_nG'(s_n)-H_2(s_n)}{\cos'(s_n)}
=d_n[1+\tfrac12\operatorname{Cin}(2s_n)]+\frac{H_2(s_n)}{\sin s_n}.
]
Since c=ell-log(4pi)-gamma_E+O(a^2), q_n=e_n+(log(4pi)+gamma_E)d_n, establishing the abstract's expansion. The first coefficient is strictly positive: the absolute sine integrals on successive half-periods decrease strictly, and at (2n-1)pi their alternating signed sum consists of positive pairs and a last positive term. Thus z_n>s_n eventually for fixed n. No assertion of a uniform-in-index remainder or all-window inequality.

## 6. Evidence and scope

The coefficient integrals were evaluated with ordinary high-precision quadrature in S02/S03 (not interval arithmetic). Approximate values are:

| n | d_n | q_n |
|---|---:|---:|
| 1 | 0.925969 | 1.410144 |
| 2 | 0.837381 | 0.354103 |
| 3 | 0.816982 | -0.095768 |
| 4 | 0.808043 | -0.381980 |

The signs of q_n are numerical observations, not a theorem. An independent AI worker's finite arithmetic experiment at a=.003,.001,.0003 reported first sign-changing roots trending toward the cosine limit, but omitted-mode, quadrature and root-count errors are not rigorously controlled. These are not validated exact roots or confirmation of the second-order coefficient. Original worker files and acceptance limitations: research/workers/S03-W01/LEAD-REVIEW.md. The lead did not repeat the full solver sweep. A separate worker proof audit S04-W02 was assigned but no branch existed at the S04 check; it is still pending.

Internal audit: rechecked phase and deficiency-vector conventions against [1] Theorem 1.5 and §6.3–6.5, the scalar subtraction and perturbation, closure and domain argument, Fourier conjugation, integration by parts, resolvent identity, root Taylor expansion and c versus ell. No new flaw identified in this internal pass. The global RH-dependent estimate in the historical manuscript is a distinct result. None of the new arguments is machine checked.

## 7. References and originality status

[1] M. Suzuki, *Weil's quadratic form via the screw function*, arXiv:2606.09096v4, 15 November 2026, https://arxiv.org/html/2606.09096v4 (primary HTML reopened 25 November; §1.1, Theorems 1.1, 1.4, 1.5, (2.3), (2.8), §3, §6.3–6.5). Theorem 1.4 concerns the ordinary form bottom; Theorem 1.5 gives the local differentiation characteristic and allows the positive unshifted form. The latter is used explicitly, not re-proved.
[2] M. Suzuki, *Spectral convergence associated with Weil's quadratic form*, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1 (source trail in S01 and Campaign III). Distinct global large-window convergence, under RH.
[3] T. Kim et al., *A Numerical Realization of Suzuki's Weil-Quadratic-Form Operator: The Archimedean Spectral Law, its Universality, and an Operator Form of Weil's Positivity Criterion*, arXiv:2607.24830v3, 28 September 2026, https://arxiv.org/html/2607.24830v3. Reopened abstract and §3.9 in S04: ordinary form spectrum and numerical differentiation characteristic including generic-phase spacing, but no fixed-index prime-free sine-integral expansion in the inspected passages. This is not an endorsement of all their spectral claims or an exhaustive comparison.
[4] NIST DLMF §6.2, https://dlmf.nist.gov/6.2, classical special-function notation.

The related spectral-edge literature and other source access limits are in S01–S03 and Campaign IV closure. The ingredients are established; the specific local differentiation-root expansion is a candidate contribution not identified in the limited inspected material. Originality and independent human review remain outstanding; this is suitable for mathematical scrutiny, not an established publication claim or an RH proof. No external submission authorized.

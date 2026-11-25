# S03 — Second-order spectral correction and independent checks

25 November 2026. Unconditional candidate result under the published local theorems imported in S01; no RH assumption. Internal AI derivation, not independent human review, formal verification or established originality.

## 1. Scalar expansion to second order

Retain S01/S02: c=-log(4pi)-gamma_E-log(tanh a), ell=log(1/a), positive self-adjoint B, scaled operator cI+B+E_a with ||E_a||=O(a). Let R_c=(cI+B)^(-1), h_s(y)=exp(-i conjugate(s)y), g_0=1, g_1=y. Inner product linear in its first argument. S02 establishes g_0,g_1,h_s in Dom B and the exact identity

    <c R_c g-g+Bg/c,h_s> = c^(-2)<Bg,c R_c B h_s>.

For any complex compact K, s->B h_s is continuous in L2. Indeed the vector-integral formula for B on bounded Lipschitz functions has an integrable bound linear in the supremum and Lipschitz norms. The map s->h_s is continuous in the C^1([-1,1]) norm, so the image under B is continuous. Thus {B h_s:s in K} is norm-compact. Strong convergence of the contractions cR_c to I is uniform on a norm-compact set, by a finite epsilon-net. Consequently

    <c R_c g,h_s>=<g,h_s>-<Bg,h_s>/c+<Bg,Bh_s>/c^2+o_K(c^-2).

The perturbed resolvent and forcing changes from S01 are O(a/c+a^2)=o(c^-2) uniformly in these outputs. Therefore the normalized characteristic is

    C_a(s)=cos s-G(s)/c+H_2(s)/c^2+o_K(c^-2),
    H_2(s)=(1/2)<B1,Bh_s>+(is/2)<By,Bh_s>.

H_2 is entire: the vector integral defining B exp(isy) is locally uniformly convergent in L2 by the same bounds on the shift differences, and its truncated integrals are holomorphic in s. It is even and real on the real axis by parity and conjugation. No B^2 domain assumption or norm Neumann series is used. This proves a scalar second-order coefficient, not a second-order strong operator expansion.

## 2. Explicit convergent one-dimensional integral

For bounded Lipschitz g on (-1,1), the shift-integral representation gives almost everywhere

    (Bg)(y)=b_0(y)g(y)+(1/2) integral_(-1)^1 [g(y)-g(v)]/|y-v| dv,
    b_0(y)=log 2-(1/2)log(1-y^2).

The boundary term follows by integrating the missing zero-extended shifts, as in S01. Splitting at v=y with g(y)=exp(isy) gives

    Q_s(y)= B exp(isy)
       = exp(isy){b_0(y)+(Cin(s(1+y))+Cin(s(1-y)))/2
                + (i/2)[Si(s(1+y))-Si(s(1-y))]}.

Here Cin(z)=integral_0^z (1-cos t)dt/t, Si(z)=integral_0^z sin(t)dt/t, both entire. Signs follow from 1-exp(-ist) on v<y and 1-exp(ist) on v>y. Since the inner product conjugates its second vector and B has real coefficients,

    H_2(s)=(1/2) integral_(-1)^1 [b_0(y)+is y(b_0(y)+1)] Q_s(y) dy.   (S03.1)

All endpoint singularities are at worst O_K(1+|log(1-|y|)|^2), hence integrable. On real s use the real part of the integral over [0,1] by parity. This is explicit in standard special functions, not merely a formal B^2 matrix element.

## 3. Ordered second-order root coefficient

Let s_n=(n-1/2)pi and d_n=Si(2s_n)/2. S02 gives z_n=a t_(a,n)=s_n+d_n/c+O_n(c^-2) with the ordered positive root established by prefix contours. Expand at s_n using the uniform expansion in §1, analyticity of G,H_2 and cos''(s_n)=0. Then

    z_n=s_n+d_n/c+e_n/c^2+o_n(c^-2),
    e_n=[d_n G'(s_n)-H_2(s_n)]/cos'(s_n)
       =d_n[1+Cin(2s_n)/2]+H_2(s_n)/sin(s_n).       (S03.2)

The last equality uses G'(s_n)=-sin(s_n)[1+Cin(2s_n)/2] because sin(2s_n)=0. Thus in the logarithmic convention ell,

    z_n=s_n+d_n/ell+q_n/ell^2+o_n(ell^-2),
    q_n=e_n+(log(4pi)+gamma_E)d_n.

The distinction matters: second-order coefficients change with the additive convention for the large scalar; the first-order coefficients do not. Do not use e_n with ell or q_n with c. The first-order displacement remains positive for all fixed n by S02. No uniform-in-n statement, sign theorem for all second-order coefficients, or O(ell^-3) remainder is claimed.

## 4. Numerical coefficient evaluation (not interval-certified)

Actually executed in lead Python environment with mpmath, 35 decimal digits. The following reproducible calculation evaluates S03.1 without any finite Fourier solver or known Riemann zeros. It is a bounded diagnostic of the new coefficient, separate from the worker's spectrum experiment.

    import mpmath as m
    m.mp.dps=35
    for n in range(1,5):
        s=(n-m.mpf('.5'))*m.pi
        b=lambda y:m.log(2)-m.log(1-y*y)/2
        cin=lambda x:m.euler+m.log(x)-m.ci(x) if x else m.mpf(0)
        def be(y):
            l=s*(1+y); r=s*(1-y)
            return m.exp(1j*s*y)*(b(y)+(cin(l)+cin(r))/2+1j*(m.si(l)-m.si(r))/2)
        H=m.quad(lambda y:m.re((b(y)+1j*s*y*(b(y)+1))*be(y)),[0,m.mpf('.5'),m.mpf('.9'),1])
        d=m.si(2*s)/2
        e=d*(1+cin(2*s)/2)+H/m.sin(s)
        print(n,*[m.nstr(v,21) for v in (H,d,e,e+(m.log(4*m.pi)+m.euler)*d)])

Actual output, columns n,H_2(s_n),d_n,e_n,q_n:
    1 -3.15708352222154579519 0.925968525991233085181 -1.4679883884625511626 1.41014394115959564377
    2 4.2625531365608464722 0.837380899489980632974 -2.24867818430865238651 0.354102548924396055851
    3 -4.81135104005796953527 0.816982423051417606655 -2.6351458679825189152 -0.0957684933571686865094
    4 5.1826805990922433591 0.808042758725821994296 -2.89357117937338387173 -0.38198042620357769537

Digits are displayed quadrature output, not rigorous precision bounds. The first four suggest negative e_n and a sign change in q_n; no all-index inference. The exact integrals and asymptotic argument, not this numerical calculation, establish the candidate expansion.

## 5. Independent worker and source comparison

S03-W01 completed at pinned head 574788c30bd0aad63940f0e2004900d5ba34edc2, six added files, baseline 99ce5c98cee71c49a878cd199fd4f2cd17ee7e46. The separate lead review records acceptance scope and numerical limits. It used prime-free arithmetic Galerkin roots at a=.003,.001,.0003 and multiple cutoffs, before S02's explicit coefficient was available. The scaled first-root offsets decrease with a, and multiplying them by c gives nominal values .6020,.6689,.7300 (using N=80,160,80 respectively), approaching the predicted .92597 from below in these three finite diagnostics. Computing c^2(z-s_1-d_1/c) gives -.8750,-.9768,-.9804, to be compared with e_1=-1.46799; not an estimate of its limit because omitted-mode and higher-order errors remain. The moderate c values 2.70,3.80,5.00 are not asymptotically large. No claim of numerical confirmation of the second-order coefficient or exact root ordering.

Primary HTML actually reopened: Suzuki arXiv:2606.09096v4 §2.3 (2.3), Theorems 1.4 and 1.5, and arXiv:2610.32704v1 introduction. In particular the positive limit form B is not claimed new: on compact tests its quadratic form equals Suzuki's L_1 plus log(2)||u||^2, by symmetrizing the shift-integral and boundary term in §2. Thus the underlying logarithmic operator is present in his work on the ordinary form bottom. Our local differentiation-root expansion uses a different spectral quantity. Kim, Hong, Kim, Choi, Jang, Kim, arXiv:2607.24830v3, https://arxiv.org/html/2607.24830v3, abstract and §§1.3,2.2,3.9 inspected. R1 concerns the form operator's small-window spectrum; R8 computes the differentiation characteristic and discusses generic-phase spacing, but the inspected §3.9 does not give the fixed-index prime-free sine-integral correction or its second-order integral. This is a directly relevant prior-art distinction, not an endorsement of all claims in that paper. No exhaustive literature search or independent human review. No new Lean or interval check. S04 should consolidate and prioritize manuscript review of this distinct unconditional result, rather than claim discovery solely from lack of search hits.

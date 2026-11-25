# C02 — Arithmetic Fourier residual tails and finite coercivity reduction

2026-11-25 UTC. Conditional candidate derivation, not independently reviewed or machine-checked. Same RH, arithmetic form and Fourier form-core imports as C01. No new numerical certificate executed. The interrupted turn's derivation is reconstructed here and persisted.

## 1. Exact off-diagonal structure

Let L=2a, k_j=2 pi j/L, chi_j=exp(i k_j x)/sqrt(L) on (-a,a), K(t)=exp(t/2)/(2 sinh t), and P_L=sum_(2<=q<=exp L) Lambda(q)/sqrt(q). Use the arithmetic Gram formula in literature/gram-quadrature.md, derived from Suzuki arXiv:2606.09096v4 section 1.1 and the Fourier form core in arXiv:2610.32704v1 section 6. It uses no zero input. Write G_mn=q(chi_m,chi_n), d_j=G_jj. For m!=n the correlation simplifies by the sine addition identity to

    S_mn(t)=(-1)^(m-n+1) [sin(k_m t)-sin(k_n t)]/[pi(m-n)].

Thus, defining

    H_j=integral_0^L [2 cosh(t/2)-K(t)] sin(k_j t) dt
        -sum_q Lambda(q)/sqrt(q) sin(k_j log q),

we obtain exactly

    G_mn=(-1)^(m-n+1) (H_m-H_n)/[pi(m-n)],  m!=n.

Here H_0=0 and H_-j=-H_j. The integral is convergent at zero. The expression agrees with the off-diagonal assembly in experiments/src/bin/precision.rs. The diagonal is separately computed using the subtracted archimedean integral; omitting its subtraction would invalidate the form.

## 2. Uniform sine-integral bound

A deliberately conservative uniform bound is

    |H_j| <= B = 4 sinh(L/2)+(3/2) exp(L/2)+P_L.

The pole and prime terms are bounded in absolute value by the first and last terms. For j!=0 write k=|k_j|. Since K(t)<=exp(L/2)/(2t), on 0<t<=min(L,1/k) the bound |sin kt|<=kt gives an integral at most exp(L/2)/2. On the remaining interval, if any, K is decreasing (logarithmic derivative 1/2-coth t<0). Integrate by parts using the sine primitive anchored at 1/k, of modulus at most 2/k. The resulting bound is 2K(1/k)/k<=exp(L/2). This proves the bound including j=0. No asymptotic approximation or numerical quadrature used here.

## 3. Full residual tail and operator domain

For the trial v=sum_(|m|<=N) v_m chi_m and evaluation forcing f_w=exp(-i conjugate(w)x), C01 defines c_j=<f_w,chi_j>_2-q(v,chi_j). Integration by parts on (-a,a) gives for j!=0

    |<f_w,chi_j>_2| <= F_w/|j|,
    F_w=sqrt(L)/(2 pi) (2+L |w|) exp(a |Im w|).

Indeed the endpoint terms have combined modulus at most 2 exp(a |Im w|), and the derivative L1 norm is at most L |w| exp(a |Im w|); divide by |k_j| sqrt(L).

For |j|>N, the off-diagonal identity gives

    |c_j| <= [F_w+(2B/pi) sum_(|m|<=N)|v_m|]/(|j|-N).

Set C=F_w+(2B/pi) sum |v_m|. For any integer J>N, summing both tails and bounding sum_(l>J-N) l^(-2) by its integral gives

    sum_(|j|>J)|c_j|^2 <= 2 C^2/(J-N).                  (C02.1)

This establishes square summability for every finite trigonometric trial vector, hence membership in Dom A_a and the full L2 residual representation by C01.6 and the imported form-core density. If finite c_j and constants are enclosed outward, the actual residual obeys

    ||f_w-A_a v||_2^2 <= sum_(|j|<=J) upper(|c_j|)^2 + 2 C_hi^2/(J-N).

This is a finite-arithmetic bound: only the archimedean integrals, finite prime powers and coefficients of the chosen trial enter. The tail estimate is independent of the numerical integration error in each entry. The latter must be bounded separately. The 1/J squared-norm tail is crude and may be prohibitive at small coercivity margins; it is not a claim of an efficient algorithm.

## 4. A bounded off-diagonal operator and a coercivity proof search

Let D be diagonal with d_j, H diagonal with H_j, U diagonal with (-1)^j. On ell2(Z) use the discrete Hilbert transform T with entries T_mn=1/[pi(m-n)] off the diagonal and zero on it. It is bounded of norm at most 1: the Fourier series sum_(l!=0) exp(i l theta)/(pi l)=i(1-theta/pi) for 0<theta<2pi gives its bounded multiplier (the sign reverses with transform convention but not its norm). Therefore

    G = D + V, V=U[T,H]U, ||V||<=2B,

as a matrix identity on finite vectors. V is self-adjoint since T is skew-adjoint and H self-adjoint. No assumption about the sign of D or its entries is needed for this identity.

Subtract the exact diagonal d_0 from d_j using the arithmetic form:

    d_j-d_0 =
       2 integral_0^L (1-t/L)(1-cos(k_j t))[K(t)-2 cosh(t/2)]dt
       +2 sum_q Lambda(q)/sqrt(q)(1-log(q)/L)(1-cos(k_j log q)).

The prime sum is nonnegative. Choose b=min(1,L/2)>0. For t<=b, 1-t/L>=1/2 and K(t)>=1/(2t cosh b), since sinh t<=t cosh b. The negative pole contribution is bounded below by -16 sinh(L/2), using 1-cos<=2. For u=|k_j|b>=1,

    integral_0^u (1-cos s)/s ds >= log u-3.

To see this discard the nonnegative integral below 1 and bound the cosine integral on [1,u] by integration by parts; its absolute value is at most 1/u+1+integral_1^u s^(-2)ds<=3. Therefore

    d_j >= d_0-16 sinh(L/2)+[log(|k_j|b)-3]/(2 cosh b).     (C02.2)

Take a head of all |j|<=J with |k_(J+1)|b>=1. Let h_J be a rigorously verified lower eigenvalue bound on its finite Gram block. Let d_0^lo<=d_0 and define

    tau_J=d_0^lo-16 sinh(L/2)
       +[log(2 pi (J+1)b/L)-3]/(2 cosh b)-2B.

Use outward bounds in all expressions. The tail block has lower bound tau_J by C02.2 and ||V||<=2B. The head-tail coupling has norm at most 2B because the diagonal has no coupling. For finite vectors with head norm x and tail norm y, the form is at least h_J x^2+tau_J y^2-4B xy. Consequently if

    h_J>kappa, tau_J>kappa,
    (h_J-kappa)(tau_J-kappa)>=(2B)^2,

then q>=kappa ||u||_2^2 on finite Fourier combinations and, by the imported core property, on the full form domain. This is a sufficient finite-block certificate, not a claim that h_J itself is a whole-space lower bound. It covers the complex space, including both parities; no restricted-sector inference.

Under RH the exact form has strictly positive lower bound kappa_a by Suzuki. For any fixed 0<kappa<kappa_a, choose certified h_J bounded below by (kappa+kappa_a)/2 (possible in principle with sufficiently precise finite entries since the exact head minimum is >=kappa_a). Since tau_J tends to infinity, the block test eventually succeeds. Thus, with validated finite arithmetic and an exhaustive search over J and rational positive candidate kappa, a finite certificate exists under the imported hypotheses. This is a termination/existence argument, not an efficient size estimate or unconditional proof of RH. It uses the Fourier block structure rather than only a pointwise symbol envelope. The required J can be astronomical because the diagonal lower bound grows logarithmically and the coupling bound is crude.

## 5. Published small-window coercivity

Zhu, Weil positivity in compact windows, arXiv:2608.24827v2, https://arxiv.org/html/2608.24827v2, Theorem 6.2 and Corollary 6.3 explicitly report a geometric-side lower bound 8.9e-18 for all complex test functions supported in [-0.8,0.8]; the real odd sector has a separately certified lower bound 8.206e-15. The theorem uses the usual multiplicity-counted Weil quadratic form; under RH its zero-sum normalization agrees with Suzuki's form (no division by the zero count). This supports using a conservative kappa=8e-18 at a<=0.8 by zero extension, subject to the stated source imports. The parity/reality restriction of Zhu Theorem 1.2 alone would not be sufficient. The v2 paper also retracts the earlier larger-window claim; do not use it. We inspected the source statements, not the full certificate execution. This is a published input, not our independent numerical proof. The current turn reopened the HTML and confirmed Corollary 6.3. X=3,4 satisfy log(X)/2<=0.8; X=5 does not.

## 6. Disposition and next step

C02.1 supplies the missing summable full residual bound and operator-domain justification. The block comparison provides a conditional finite coercivity verification route; the published small-window constant gives a possible C04 input. Neither the discrete Hilbert-transform estimate nor the block quadratic comparison is new in isolation. Novelty of this specific application is unestablished; no external review, Lean check, numerical interval assembly or spectral-root enclosure executed. The current algebra depends on the repo arithmetic Gram formula and imported form-core theorem, not a fresh audit of all primary-source proofs. The previous failed V05 interval CI remains a separate historical blocker. C03 should derive uniform characteristic-function errors from C01/C02 full residuals and establish a contour root-count/ordering criterion without using known zero ordinates as inputs. Preserve the historical manuscript.

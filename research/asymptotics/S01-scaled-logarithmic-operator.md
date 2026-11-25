# S01 — Scaled logarithmic operator and unconditional local expansion

25 November 2026. Internally derived candidate result; no independent human review, machine verification or originality claim. The mathematical result below does not assume RH. We invoke the unconditional local-form and extension theorems of Suzuki, arXiv:2606.09096v4; the global large-window theorems remain conditional on RH.

## 1. Unconditional local setup

Suzuki v4, https://arxiv.org/html/2606.09096v4, reopened in this turn: §1.1 geometric Weil functional; §2.4 (2.8) and §3 form domain and compact-test core; Theorem 1.1 and Theorem 1.5, (1.9)–(1.11), §6.3–6.5. These statements do not assume RH. Theorem 1.5 uses T_a=A_a-lambda I with lambda<inf spec A_a. C04's elementary geometric-side prime-free coercivity, rechecked directly against §1.1, gives A_a>=c(a)-2a-8sinh(a)>0 for all sufficiently small a. Thus lambda=0 is admissible, not a limiting shift; T_a is exactly A_a. The form/core proof in §3 is unconditional. No use of a positive global sampling norm is required.

The natural deficiency vectors v_+=A_a^(-1)exp(x), v_-=A_a^(-1)exp(-x) have equal form norms by reflection, which commutes with the geometric form. By §6.3 they are the adjoint eigenvectors at +i and -i, respectively. Choose precisely these vectors, not arbitrary relative phases. With theta=pi in (1.11) the resulting characteristic is W_a(z)=(z-i)F[v_+](z)-(z+i)F[v_-](z), identical to C03/C04. Theorem 1.5 says its zeros are real, simple and precisely the local extension eigenvalues. This is the same phase convention as the later arXiv:2610.32704v1 construction when RH holds, not an assertion of a global inverse compression without RH.

The rescaled characteristic tends to cos(s) below; at s=0 it tends to 1, so zero is not an eigenvalue for all sufficiently small a. Reflection gives evenness; Rouché on prefix and isolating rectangles then orders the first n positive roots for each fixed n. It is unnecessary to invoke the global compression to do so. The C04 explicit analytic example also uses only these local facts and therefore its RH qualification can be removed, subject to the same elementary proof. We leave historical notes unchanged and record the strengthened conclusion here.

## 2. Rescaling and common operator domain

For 0<a<log(2)/2, use the unitary U_a:L2(-a,a)->L2(-1,1), (U_a f)(y)=sqrt(a) f(ay). Write S_h for the sum of the two truncated shifts on (-1,1) with zero extension, and I for the identity. Each shift is a contraction, S_h self-adjoint with norm <=2, and 2I-S_h>=0.

C04's exact geometric formula on compact tests yields

    U_a A_a U_a^(-1) = c(a) I + B + E_a,           (S01.1)
    c(a)=-log(4 pi)-gamma_E-log(tanh a),
    b(u,v)=(1/2) integral_0^2 <(2I-S_h)u,v> dh/h.

Here B is the self-adjoint nonnegative operator of the closed form b (defined by closing compact tests); the equality is initially of forms. The bounded perturbation E_a consists of:
- integral_0^2 [a K(ah)-1/(2h)](2I-S_h) dh,
- integral_0^2 2a cosh(ah/2) S_h dh,
- d_a I, with d_a=integral_0^(2a)2(exp(-t/2)-1)K(t)dt,
where K(t)=exp(t/2)/(2sinh t).

Since K(t)=1/(2t)+1/4+O(t) at zero, K(t)-1/(2t) extends continuously there and is bounded for t in [0,1/2]. For 0<a<=1/4 the first integral has norm O(a), by ||2I-S_h||<=4 and h in [0,2]. The pole term has norm <=8sinh(a)=O(a); |d_a|<=2a as in C04. Thus ||E_a||<=C a with an absolute constant for a<=1/4. All these operators are self-adjoint, the vector integrals can be taken strongly (bounded norm integral), and parity is preserved.

For rigor, fix one small a_0. The pulled-back closed form of A_(a_0), minus c(a_0)I+E_(a_0), is closed lower bounded with compact-test core by the bounded perturbation of a closed form. On this core it equals the nonnegative b; hence it is nonnegative on the completion. This constructs B without a claim about a maximal integral-form domain. Repeating for each a and using uniqueness of the closure of the same core form shows the common form domain and, by bounded self-adjoint perturbation, exact operator equality (S01.1) on Dom B for every a in this range. In particular A_scaled>= (c-||E_a||)I. The logarithmic Fourier-weight characterization in Suzuki §3 and scaling show that 1 and y belong to the common form domain: their zero extensions have bounded Fourier transforms decaying as O(1/|z|). No boundary-zero trace is assumed.

## 3. Explicit action on 1 and y

For g=1 or g=y the shift differences satisfy ||(2I-S_h)g||_2<=2h sqrt(2)+2 sqrt(h), by interior Lipschitz control and boundary strips. Thus the integral of (2I-S_h)g/(2h) converges in L2. As in C04, the integral form extends from compact tests by the isometric form-norm completion of the functions (2I-S_h)^(1/2)u in the weighted L2 space dh/(2h); pointwise L2 limits identify the extended form. The vector integral represents b(g,v) for all v in the form domain, hence g in Dom B. Direct integration at -1<y<1 gives

    b_0(y):=(B 1)(y)=log 2 -(1/2)log(1-y^2),
    (B y)(y)=y[b_0(y)+1].                        (S01.2)

For the constant, the two zero-extended shifts lose values at h>1+y and h>1-y, giving half the sum of log(2/(1+y)) and log(2/(1-y)). For the linear function, on the two retained intervals the differences are +h and -h; their integrals divided by 2h sum to y, while the boundary-loss terms give y b_0. The endpoint logarithms are in L2. These formulas refer to B acting on the coordinate function y; b_0 is a function, not the quadratic form.

## 4. Genuine inverse expansion

Put c=c(a), R_c=(cI+B)^(-1), R_a=(cI+B+E_a)^(-1), for sufficiently small a so c>0 and c>||E_a||. Then c->infinity, ||R_c||<=1/c and ||R_a||<=1/(c-||E_a||). The resolvent identity gives

    ||c R_a-c R_c|| <= ||E_a||/(c-||E_a||)=O(a/c).

For g in Dom B, use the spectral theorem, not a norm Neumann expansion:

    c R_c g = g - (1/c)(c R_c) B g
            = g - B g/c + o(1/c) in L2,

since c/(c+b)->1 and is bounded by 1 for b>=0, so c R_c->I strongly on all L2. Combining yields

    c R_a g = g - B g/c + o(1/c), for g in Dom B.  (S01.3)

The error is not claimed O(c^-2) without further domain control. The forcing functions on the scaled coordinate are cosh(ay)=1+O(a^2) and sinh(ay)/a=y+O(a^2) uniformly. As ||c R_a|| is bounded and a^2=o(1/c), replacing g by either forcing changes the expansion only by o(1/c). Thus the normalized even and odd representers in C04, written as functions of y without the common sqrt(a) unitary factor, are

    c u_e(ay)=1-b_0(y)/c+o_L2(1/c),
    c u_o(ay)/a=y-y(b_0(y)+1)/c+o_L2(1/c).

## 5. Characteristic expansion and unconditional leading theorem

With F_1[g](s)=(1/2)integral_(-1)^1 g(y)exp(isy)dy and u_e=A_a^-1 cosh(x), u_o=A_a^-1 sinh(x), normalize C_a(s)=c W_a(s/a)/(-4ia). Then

    C_a(s)=F_1[c u_e(a y)](s)+i s F_1[c u_o(a y)/a](s)
          =cos(s)-G(s)/c+o_K(1/c),                 (S01.4)
    G(s)=F_1[b_0](s)+i s F_1[y(b_0+1)](s).

The remainder is uniform on each compact K in C, because L2(-1,1) Fourier evaluation has bounded norm there, and multiplication by s is bounded on K. Leading terms combine sinc(s)+s sinc'(s)=cos(s). G is entire, real on the real axis and even. C_a(0)->1. Using the unconditional local characterization in §1, Rouché gives one real simple zero near each fixed positive cosine root and the exact prefix count as in C04. Therefore unconditionally for fixed n as a->0,

    a t_(a,n)=(n-1/2) pi+O_n(1/log(1/a)).

Moreover (S01.4) supplies the first-order characteristic correction. Its explicit evaluation at the roots, sign, closed form and stronger remainder are S02's next work. Do not infer any RH or global spectral claim from this local result. The proof uses the established local explicit formula and extension theorems but does not rely on all zeros being real.

## 6. Verification status

Primary HTML v4 §1.1, (2.8), §3 (3.1)-(3.2), Theorem 1.5, §6.3–6.5 and v1 opened in current turn. In particular v4 states lambda<lambda_a and gives v_z=T_a^-1 exp(-izx) explicitly; theta=pi and lambda=0 follow from the verified local positivity and chosen equal-norm vectors. This is an unconditional candidate derivation using published local theorems, not independently accepted research or a novelty claim. No numerical or Lean check of S01 itself. The worker C04-W01 separate audit and binary64 evidence concern C02, not S01.

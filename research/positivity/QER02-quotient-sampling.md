# QER02 — Exact spectral-edge sampling and interpolation
2026-11-25. Internal candidate deductions building on recovered QER01 (71d19b2506235fbe4d936e2ef7cd8e96b7a91fd2), U03/U04. No RH assumption, originality claim, formal verification or human review. Related edge/de Branges literature comparison remains incomplete; no fresh source inspection claimed in this turn.

Fix a, T=A_a-lambda_1(a)I, E=ker T of dimension m, and H=V/E with the shifted form inner product linear first. Write F[f](z)=int f(x)e^(izx)dx. By U04 F[E]=H_a times polynomials of degree <m; by QER01 D=closure of test-class if' is self-adjoint with compact resolvent, simple eigenvalues t exactly the simple real zeros of H_a. Use H_a for the entire generator, H for the Hilbert space.

## Gauge and bounded evaluation
Choose m distinct nonreal nodes w_1,...,w_m, and Q(z)=prod(z-w_j). Since H_a(w_j)!=0, for f in V there is a unique polynomial P_f of degree <m interpolating F[f](w_j)/H_a(w_j). Define G_[f](z)=F[f](z)-H_a(z)P_f(z). Adding e in E adds a polynomial multiple of H_a to F and that same polynomial to P_f, so G depends only on [f]. The representative f-e_f, with F[e_f]=H_a P_f, has zero evaluations at all w_j. This gauge is a bounded linear map H->V: choose the L2-orthogonal representative to E (bounded by the gap and form-norm equivalence), apply its bounded evaluations and finite-dimensional interpolation, then subtract a bounded finite-rank map. Thus evaluation of G at z is a bounded functional, locally uniformly in z; its Riesz representer depends anti-holomorphically on z in norm (bounded power series for the Fourier transform on the fixed support and finite interpolation). At each real zero t of H_a, G(t)=F[f](t). 

## Exact weights
For t a zero of H_a, e_t(x)=exp(-itx) lies in E^perp by Fourier evaluation. Let v_t=[T^+ e_t], with T^+ the bounded Moore–Penrose inverse on E^perp, zero on E. Then q_T([f],v_t)=<f,e_t>_L2=F[f](t) and Dv_t=t v_t by QER01. Put kappa_t=||v_t||_T^2=<T^+e_t,e_t>_L2>0. The normalized v_t form an orthonormal basis; distinct real t are orthogonal by self-adjointness. Thus
q_T([f],[g])=sum_t F[f](t) conj(F[g](t))/kappa_t,
with absolute convergence by Cauchy–Schwarz. Every sequence with finite weighted square norm occurs as samples of a class by expansion in the eigenbasis.

## Cardinal formula and local uniformity
For a compact smooth test f, F[if'](z)=zF[f](z). At the gauge nodes, the interpolation data for if' are w_j P_f(w_j); hence P_(if') is the interpolation of z P_f(z), and zP_f-P_(if')=c_f Q where c_f is the leading coefficient of P_f in degree m-1. Exactly
G_(S[f])(z)=z G_[f](z)+c_f H_a(z)Q(z).
For any u in Dom D approximate by test classes in graph norm. The G maps converge locally uniformly, both for u and Du. Choose a fixed z0 with H_a(z0)Q(z0)!=0 to solve for c_f from the identity, so c_f converges and the identity extends to Dom D. This argument does not assume that physical differentiation acts on arbitrary quotient representatives.

Take u=v_t, so Du=t u. Then (t-z)G_(v_t)(z)=c H_a(z)Q(z). Since G_(v_t)(t)=kappa_t and H_a'(t)Q(t)!=0, the removable value determines c. Consequently
G_(v_t)(z)=kappa_t L_t(z),
L_t(z)=H_a(z)Q(z)/((z-t)H_a'(t)Q(t)).
In particular L_t(s)=delta_(t,s) at all real spectral nodes s. The gauge gives exact interpolation
G_[f](z)=sum_t F[f](t)L_t(z).
The series converges in the gauged Hilbert norm and locally uniformly, even for arbitrary exhausting finite subsets: the norm of the tail is bounded by the weighted square-sum tail, and evaluation norms are bounded on each compact. In fact the series is locally uniformly absolutely convergent by Cauchy–Schwarz and sum kappa_t |L_t(z)|^2=||evaluation representer||^2. The latter bound is uniform on compact z sets.

With the convention K(w,z) anti-holomorphic in w and holomorphic in z, the gauge kernel is
K(w,z)=sum_t kappa_t conj(L_t(w)) L_t(z).
It converges absolutely and locally uniformly on compact products. Indeed Riesz evaluation representers form a norm-continuous compact family as z varies over a compact; finite eigenbasis projections converge uniformly on this family (finite net argument). Cauchy–Schwarz controls the two-variable tails. The gauge choice changes off-node evaluations and cardinal functions, but not spectral nodes or weights kappa_t. All formulas concern the shifted local arithmetic metric at its actual bottom, not the RH-only global zeta sampling space.

## Limits and next
QER02 establishes an exact unitary weighted sampling map, canonical sample weights independent of gauge, and a finite-node gauge giving entire cardinal interpolation. No convergence to zeta ordinates or zeta multiplicity weights established. QER03 should compare the positive-shift approximation with the edge quotient, where null directions diverge; examine large-window limit only under explicit quantitative conditions. No new numerical or formal check. Main recovery incomplete: DCR01–03 full recovery documents and worker reviews still need integration.
# Exact-local certification and the small-window regime
## Campaign IV consolidated candidate note

25 November 2026. AI-assisted internal mathematical work. No independent human review, originality determination or new machine-checked proof. The detailed C01–C04 derivations are the authoritative evidence; this note connects their hypotheses and conclusions. The earlier large-window manuscript v0.2 and Campaign III note are unchanged.

### 1. Residual-to-kernel bridge

Let A_a be the positive self-adjoint local Weil form operator in L2(-a,a), with q its closed form and A_a>=kappa I for kappa>0. We retain the RH and Suzuki local-space imports for the general-window results. The representer k_w=A_a^(-1) exp(-i conjugate(w)x) represents evaluation of the Fourier transform F[u](w)=integral u(x)exp(iwx)dx. Our kernel notation J(z,w)=F[k_w](z) reverses Suzuki's arguments.

For a conforming trial v_w, set L_w=2 Re F[v_w](w)-q(v_w,v_w). Then J(w,w)=L_w+||k_w-v_w||_q^2. If v_w is in Dom A_a, the full L2 residual r_w=f_w-A_a v_w gives ||k_w-v_w||_q^2<=||r_w||_2^2/kappa and ||k_w-v_w||_2<=||r_w||_2/kappa. The corrected output is valid without exact Galerkin orthogonality. For a collection of evaluation points the corrected kernel matrix L has 0<=J-L<=G_res/kappa in Loewner order. Under the weighted sampling isometry the normalized coordinate defect is delta_gamma^2=1-m_gamma J(gamma,gamma). This connects to the individual and cumulative bounds of Campaign III, with actual zero and multiplicity inputs for that application only. The local characteristic-function solve itself requires no zero inputs.

### 2. Finite arithmetic and full-space residuals

For L=2a and chi_j(x)=exp(2pi i j x/L)/sqrt(L), the arithmetic Gram entries have an exact off-diagonal divided difference of the real odd sine-integral sequence H_j (C02). In particular the matrix is a diagonal D plus the bounded self-adjoint commutator U[T,H]U; T is the discrete Hilbert transform with norm <=1, U_jj=(-1)^j. The uniform bound |H_j|<=B from C02 gives commutator norm <=2B. The diagonal grows at least logarithmically with |j|. For finite trial v with |j|<=N, full Fourier residual coefficients c_j obey the explicit tail bound

    sum_(|j|>J)|c_j|^2 <= 2 C^2/(J-N), J>N,

with C=F_w+(2B/pi)sum_m |v_m| and F_w specified in C02. This is a squared L2 norm tail, not an entry quadrature error. Parseval and the imported Fourier form core imply finite trials are in Dom A_a. A finite head plus a validated tail bounds the full residual. The head minimum alone never supplies whole-space coercivity; the sufficient block test of C02 additionally needs a lower tail bound tau_J and coupling norm bound 2B. If h_J,tau_J>kappa and (h_J-kappa)(tau_J-kappa)>=(2B)^2, the entire form is >=kappa. Under imported positive coercivity and validated finite arithmetic, a finite proof search eventually succeeds, but its size may be enormous.

The diagonal plus bounded decomposition also identifies the closed operator by uniqueness of the form closure. Finite sequences are graph-norm dense for the diagonal, hence for its bounded perturbation. This justifies existence of arbitrary small full residuals using suitable finite trials (not a claim of graph-norm convergence of every ordinary Galerkin sequence).

### 3. Exact ordered root counts

The phase-pi characteristic is W(z)=(z-i)F[k_(-i)](z)-(z+i)F[k_i](z), with forcing exp(+x), exp(-x) respectively. Let P replace both representers with finite trials and R_-,R_+ be full residual upper bounds. Then

    |W(z)-P(z)| <= b_a(z)[|z-i|R_-+|z+i|R_+]/kappa,
    b_a(z)^2=integral_(-a)^a exp(-2x Im z)dx.

C03 supplies a uniform contour bound E and a derivative bound D_P. For rational vertex centers p_j, validated evaluation errors epsilon_j and segment lengths l_j, the strict conditions |p_j|>epsilon_j+D_P l_j+E and |p_(j+1)-p_j|<|p_j| ensure Rouché and a homotopy to the rational polygon avoiding zero. Signed ray crossings give its winding number exactly. A prefix rectangle starting at real coordinate zero plus smaller disjoint isolating rectangles certifies the ordered positive roots when counts agree. All artificial Fourier-grid zeros of P must be included in its count; no unproved division or discarded scan roots. Under RH and the stated computational hypotheses, graph-core density and compact contour separation imply eventual existence of finite certificates for any finite set of exact local roots. Not an efficiency bound or an executed interval certificate.

### 4. Small-window analytic alternative

For L=2a<log 2, the prime sum vanishes. Let S_t be the sum of the two zero-extended truncated shifts. The explicit formula gives

    A_a=c I + positive shift-form operator + bounded pole operator + d I,
    c=-log(4pi)-gamma_E-log(tanh(a)),
    d=integral_0^L 2(exp(-t/2)-1)K(t)dt, K(t)=exp(t/2)/(2sinh t).

The positive form is the integral of K(t)(2I-S_t); for L<=1/2, -L<=d<=0, the pole operator has norm <=8sinh(a), hence A_a>=kappa I with kappa=c-L-8sinh(a) when positive. C04 justifies the operator domain and full residual for g0=1 and g1=x/a, using the logarithmic form core and the Bochner integral bound ||(A_a-cI)g_j||<=18 sqrt(L). With u_e=A_a^(-1)cosh x and u_o=A_a^(-1)sinh x, define C_a(s)=c W(s/a)/(-2iL). On |s|<=S, |Im s|<=Y,

    |C_a(s)-cos s| <= exp(Y)(1+S)(18+c a^2)/kappa.

The cosine arises from sinc(s)+s sinc'(s). The simple cosine roots and Rouché on prefix/isolating contours yield, for fixed n as a decreases to zero,

    a t_(a,n) = (n-1/2)pi + O_n(1/log(1/a)).

An exact elementary example at a=2^(-2049) gives 2^2049<t_(a,1)<2^2050, under the imported local spectral characterization. The proof uses two rectangles in the rescaled variable and strict analytic bounds, not floating-point computations. This extreme window is not practical for approximating zeta zeros. No realistic-window numerical certificate was obtained.

### 5. Internal audit and source disposition

Rechecked C01's conjugate-linear residual, kernel Gram orientation and variational signs; C02's shift correlation, commutator sign, sine integral and logarithmic lower bound; C03's phase convention, contour homotopy and graph core; C04's scalar subtraction, pole sign, operator domain and cosine rescaling. The detailed notes retain all estimates and assumptions. No new flaw requiring correction was found in this internal pass. No independent mathematical verification or Lean check of these results. Earlier Campaign II scalar lemmas remain the only verified formal subset.

Reopened sources 2026-11-25: Suzuki arXiv:2606.09096v4 (15 November 2026), Theorems 1.1, 1.4, 1.5 and (2.8); arXiv:2610.32704v1 (23 October 2026), introduction, (3.3), Lemma 3.2. The earlier Theorem 1.4 is about the bottom of A_a, not the differentiation eigenvalues; Theorem 1.5 establishes the local spectral characteristic unconditionally for a positive shifted form, and the October introduction explicitly distinguishes local unconditional theory from RH-dependent global convergence. This is a route to removing RH from the small-window cosine result, not yet an audited unconditional theorem in this note. Need pin phase and zero-count conventions for the positive unshifted form using the original local theory in Campaign V.

Zhu arXiv:2608.24827v2 reopened; finite positivity reduction and reported small-window numerical certificate are related but target the L2 form, not the differentiation root enclosure. C02 records its normalization and parity check; no independent rerun. Skelly's alphaXiv listing (6 November 2026), https://www.alphaxiv.org/abs/2611.localized-weil-spectral-edge, was reopened; its summary concerns continuation across positivity edges, weights and Schur comparison, not a verified full-text comparison of our rate. Search excerpts of the VIDraft small-a technical note and related numerical realization concern A_a form eigenvalues. No equivalent differentiation cosine rate identified in the limited material inspected; no priority conclusion. Standard residual, Hilbert transform and Rouché methods are not themselves novel. Next campaign will target the first nontrivial correction and its source comparison.

C04-W01 independent worker handoff remains IN_PROGRESS, same blob ba0555cee65f50a30bb0c755f4a8417863886b44 as last checkpoint. Only worker branch found in current branch search was worker/c04-w01. No evidence or audit submitted beyond assignment acknowledgment. Its realistic-window experiment remains active separately; do not treat it as a completed independent review.

# PPE02 — Compact sign intertwiner and whole-subspace parity comparison

2026-11-25. AI-assisted candidate deduction without RH. Uses the paired Weil identity, classical local zero count and the closed log-form domain of the project. The proof of the compact multiplier and its estimates is given directly. No new actual zero or spectrum, numerical experiment, priority claim or independent verification. This strengthens PPE01 from one selected carrier packet to arbitrary finite negative subspaces.

## 1. A compactly supported convolution implementing approximate frequency sign

Choose a fixed real even eta in C_c^infty(-1/2,1/2) with ||eta||_2=1. Let A=eta*eta, so A is real even smooth, supported in [-1,1], A(0)=1. With Ff(z)=int f(x)exp(izx)dx, put
    k(z)=(F eta(z))^2/(2pi)=F A(z)/(2pi),
    m(z)=2 int_0^z k(w) dw.
The primitive is entire and odd; k is even, real and nonnegative on the real axis. By Plancherel int_R k(t)dt=1, so m(t) is real, -1<=m(t)<=1, tending to +/-1 as t tends to +/-infinity. In fact m(t)>0 for t>0 because k is nonnegative and not identically zero on any real interval (analyticity); by oddness m(t)<0 for t<0.

For 0<h<=1 set m_h(z)=m(hz). The distribution
    K_h(x)=(1/(pi i)) pv[A(x/h)/x]
is supported in [-h,h]. Its Fourier-Laplace transform is exactly m_h: differentiation in z multiplies by ix in the distribution, so (F K_h)'(z)=h F A(hz)/pi=m_h'(z), and both vanish at z=0 by oddness. This proves compact support without an appeal to an unverified entire-function factorization. Convolution T_h f=K_h*f on compact smooth f therefore expands physical support by at most h on each side and has transform m_h(z)Ff(z). It is odd under reflection, R T_h=-T_h R, and extends to a contraction on L2 and on the full-line log-energy norm L because |m_h(t)|<=1. It is injective on L2 because the multiplier is nonzero away from t=0, a null set. Its distribution convolution maps compact smooth functions to compact smooth functions. Approximating in L proves that it maps the project form domain V_a continuously into V_(a+h), with the same contraction and parity properties. No boundary trace condition beyond the existing support closure is imposed.

## 2. Uniform strip localization of the multiplier deficit

For each integer p>1, repeated integration by parts in eta gives
    |k(u+iv)|<=C_p(1+|u|)^(-p-1), |v|<=1/2.
For real u>0 the difference 1-m(u)=2 int_u^infinity k(t)dt decays as (1+u)^(-p); for u<0 use oddness. The vertical segment from u to u+iv contributes at most 2|v| sup_|s|<=1/2 |k(u+is)|. Hence, enlarging the constant for bounded u,
    |1-m_h(u+iv)^2| <= C_p (1+h|u|)^(-p), 0<h<=1, |v|<=1/2. (1)
The constants are independent of h in this range, because the scaled imaginary part hv stays within the strip. Squaring the multiplier uses a bounded strip supremum of m_h, which follows from the same argument. The estimate is for the complex entire square, not just |m_h|^2 on the real line.

The local zero counting bound sum_(u in [j,j+1)) multiplicities <=C log(2+|j|), with all signed ordinates, now gives
    sum_z m_z |1-m_h(z)^2| <= C h^-1 log(2/h).          (2)
Here m_z denotes zero multiplicity, not the filter m. To see the scaling, group into unit bins and compare the resulting sum with int_0^infinity (1+h x)^(-p) log(2+x) dx; substitute y=h x and use log(2+y/h)<=log(2/h)+log(1+y). Take any fixed p>1. Bounded-u bins are absorbed in the constant. This sum includes real zeros as well as nonreal ones.

## 3. Uniform form comparison in the ordinary metric

Write B=sup_z |Im z| in [0,1/2], and
    I_a(d)=int_(-a)^a exp(-2dx) dx
          =sinh(2ad)/d (d!=0), I_a(0)=2a.
It is nondecreasing in |d| by its even cosh integral representation. For compactly supported unit f, Fourier evaluation has |Ff(z)|<=sqrt(I_a(Im z)) by Cauchy-Schwarz. The same bound times ||f|| applies generally. Since m_h is real on the real axis it satisfies m_h(conj z)=conj(m_h(z)). The exact paired formula on smooth tests therefore gives
    q_(a+h)(T_h f,T_h g)-q_a(f,g)
       =sum_z m_z [m_h(z)^2-1] Ff(z) conj(Fg(conj z)).    (3)
The form is evaluated on different windows but is the same global Weil expression on compact tests. Combining (2) and the evaluation norm yields
    |q_(a+h)(T_h f,T_h g)-q_a(f,g)|
        <= E(a,h)||f||_2||g||_2,
    E(a,h)=C I_a(B) h^-1 log(2/h).                      (4)
The difference series converges absolutely even on ordinary L2 support vectors because of the multiplier deficit. The identity on the closed form domain follows by smooth approximation in L, T_h's log contraction, and boundedness of the right-hand difference in the ordinary norm. We do not claim that the undifferenced paired sum always converges on arbitrary L2 vectors.

For B>0, I_a(B)<=exp(2Ba)/(2B). Thus at each fixed h the error in (4) is O_(B,h)(exp(2Ba)), with no extra polynomial factor in a. For B=0 it is O_h(a); in that case RH holds and the form has no negative spectrum by the paired identity. This comparison is unconditional in the zero geometry: no local off-line density assumption or frequency concentration of the input is needed.

## 4. Indexed parity transfer, including a shrinking support enlargement

Let N_(p,j)(a) be the jth ordinary negative magnitude in parity p, padded with zero, and p' the opposite parity. If N_(p,j)(a)>E(a,h), apply T_h to the span of the first j negative eigenvectors in that sector. The map is linear and injective, flips parity, and contracts the ordinary norm. On the resulting actual j-dimensional trial space (4) gives
    q_(a+h)(T_h f,T_h f)
        <=-[N_(p,j)(a)-E(a,h)]||f||^2
        <=-[N_(p,j)(a)-E(a,h)]||T_h f||^2.
Minmax, with the zero case automatic, proves
    N_(p',j)(a+h) >= (N_(p,j)(a)-E(a,h))_+.            (5)
The inequality holds in both directions, for all j and all a>=1, 0<h<=1, with the same error independent of j. It is not a transfer of auxiliary packet multiplicities.

The full negative spectrum is the ordered union of the two parity spectra. If N_(2j-1)(a)>0, at least one sector has j negative depths at least this value. Monotonicity under domain inclusion and (5) then imply, for every j,
    min[N_(even,j)(a+h),N_(odd,j)(a+h)]
            >= (N_(2j-1)(a)-E(a,h))_+,
    N_(2j)(a+h) >= (N_(2j-1)(a)-E(a,h))_+.            (6)
In the reverse direction full ordering and parity counts always give N_(2j)(a)>=min(N_even,j(a),N_odd,j(a)) and N_(2j-1)(a)<=max(N_even,j(a),N_odd,j(a)).

In particular for B>0 any anomalous exponential limsup rate s>2B of any one of these four indexed depths forces the same rate for all four. Indeed select a sequence with that rate, transfer at fixed h and discard the O(exp(2Ba)) error, then use the ordering inequalities or the reverse transfer to obtain equality of limsups. This yields the indexed version of PPE01 without any selected-packet assumption. The same comparison gives equality of the liminf rates whenever one of the four liminf rates exceeds 2B: a fixed shift of the window does not change the exponential liminf or limsup of a nonnegative depth, and the error is negligible relative to the lower exponential margin. These are statements about growth exponents; equality of prefactors at the same physical window is not implied.

One may even take h(a)=exp(-kappa a) for any kappa>0. Then E(a,h)=O_B((1+a)exp((2B+kappa)a)). Thus for depths with exponential margin s>2B+kappa the parity transfer is possible after an exponentially small enlargement of the window and with relative error tending to zero along that sequence. This gives no uniform local modulus of continuity of the depths on intervals of length h(a); that additional information would be needed to remove the enlargement at relative prefactor precision.

PPE02 complete as candidate: explicit compact-support sign intertwiner, uniform strip deficit and dimension-preserving parity transfer at the natural zero-deviation error scale. PPE03 next: isolate finite fast pairs by a dimension budget, and distinguish the sharper indexed lower thresholds from actual same-window pairing. No actual anomalous state or RH proof. README unchanged.

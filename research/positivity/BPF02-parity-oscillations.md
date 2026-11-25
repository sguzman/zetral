# BPF02 — Parity-resolved oscillations and exact quartet prefactors

2026-11-25. AI-assisted internal candidate deduction, conditional on BPF01's finite nonempty off-line conjugate-pair hypothesis and the zeta reflection symmetry. No actual off-line zero, RH proof, independent mathematical verification, or priority claim. Uses BPF01's endpoint operator and minmax, and elementary finite-dimensional spectral algebra. No fresh external source inspection or numerical experiment in this batch.

## 1. Reflection reduces the two-endpoint block to one Hermitian matrix

Use exactly BPF01's sign convention. Write J for the maximal-deviation group, indexed by signed distinct real ordinates u, with B>0, multiplicities m_u=m_{-u}, and no u=0 (NIR03's elementary real-axis argument). Put
    ell_u(s)=exp(-(B+i u)s), r_u=ell_{-u}, theta_u=2ua,
    T_a=sum_(u in J) m_u exp(i theta_u) ell_u tensor ell_{-u}.
The summands at u and -u are adjoints of one another, so T_a=T_a*. Let E synthesize the ell_u, let G=E*E be their positive Cauchy Gram matrix, and let J_0 be the permutation matrix taking the coordinate at u to -u. Then
    T_a=E H_a E*, H_a=diag(m_u exp(i theta_u)) J_0.
Each ±u block of H_a has eigenvalues ±m_u, independent of a, and H_a is Hermitian. The isometry E G^(-1/2) identifies the nonzero spectrum of T_a with the spectrum of G^(1/2) H_a G^(1/2). Congruence preserves inertia (by the invertible change of variables in the quadratic form). Thus, for r=2h signed pairs, T_a has exactly h positive and h negative eigenvalues, with uniform absolute lower bound c_* as in BPF01. Label the positive eigenvalues decreasingly p_1>=...>=p_h>0 and the magnitudes of the negative eigenvalues decreasingly n_1>=...>=n_h>0.

The physical reflection f(x)->f(-x) becomes endpoint swap on H_* via U_a. Since T_a is Hermitian, BPF01's block D_a=[0 T_a; T_a 0] restricts, under g->(g,±g)/sqrt(2), to ±T_a on the even/odd subspaces. The truncation projections commute with swap, and the fixed BV trial space of BPF01 splits into parity sectors. Applying precisely its lower and upper minmax estimates separately (each real-zero contribution is nonnegative, each trial estimate is unchanged) gives, uniformly in a,
    -exp(-2Ba) lambda_(even,j)(A_a)=n_j(a)+O(delta_a),
    -exp(-2Ba) lambda_(odd,j)(A_a)=p_j(a)+O(delta_a),
for 1<=j<=h, where delta_a=exp(-Ba)+exp(-2(B-b)a) and the second term is omitted if no subordinate group exists. The next eigenvalue in each sector is >=-O(exp(2Ba)delta_a). The leading full negative prefactors are the sorted union of p_j and n_j. Equal parity growth exponents do not imply equal prefactors or equal eigenvalues.

## 2. Single maximal quartet: exact oscillation, range, crossings

Assume J consists of u and -u with u>0 and common multiplicity m; subordinate pairs may exist with strictly smaller deviation. Define
    tau(a)=tr T_a
          =2m Re [exp(2iua)/(2B+2iu)]
          =m[B cos(2ua)+u sin(2ua)]/(B^2+u^2),
    D=m^2 det G=m^2 u^2/[4 B^2 (B^2+u^2)]>0.
Indeed the diagonal Gram entries are 1/(2B), and the off-diagonal entries have absolute square 1/[4(B^2+u^2)]. The determinant of H_a is -m^2, so the product of the two nonzero eigenvalues of T_a is -D. The roots of z^2-tau z-D=0 give
    p(a)=(sqrt(tau(a)^2+4D)+tau(a))/2,
    n(a)=(sqrt(tau(a)^2+4D)-tau(a))/2.
These are the odd and even negative prefactors, respectively. In particular p*n=D is constant, and p-n=tau. Both are nonconstant periodic functions of a with period pi/u, and each has the same exact range
    [m/(2B)-m/(2 sqrt(B^2+u^2)),
     m/(2B)+m/(2 sqrt(B^2+u^2))].
To verify the extrema, tau has amplitude m/sqrt(B^2+u^2), p is strictly increasing in tau and n strictly decreasing. At the extremal tau, sqrt(tau^2+4D)=m/B. Their difference has alternating signs at unbounded sequences of a. At tau=0 they are equal to sqrt(D). The ordered full prefactors are
    sigma_1=(sqrt(tau^2+4D)+|tau|)/2,
    sigma_2=(sqrt(tau^2+4D)-|tau|)/2.
Their period is pi/(2u); sigma_1 has range [sqrt(D), upper endpoint above], sigma_2 has range [lower endpoint above,sqrt(D)]. Thus neither ordinary scaled leading eigenvalue has a limit as a->infinity, even in the smallest reflection-symmetric off-line model. Their product after scaling tends to D.

Transfer to the actual operator: BPF01 gives vanishing uniform errors, so the stated ranges are the exact liminf/limsup of the scaled depths (not merely finite-model bounds). At alternating maxima/minima of tau, the sign of the difference of actual even and odd bottom eigenvalues eventually agrees with the sign of tau for lambda_even-lambda_odd. To infer actual parity crossings between these sequences one additionally uses continuity of the two parity bottoms in a. This follows by the same form-core/dilation argument used for the ordinary eigenvalues in U02: under unitary scaling to (-1,1), the archimedean multiplier alpha(t/a) varies continuously in bounded difference on compact a-ranges; the prime shifts vary strongly with shift length and the pole form continuously, hence the form family is strongly continuous on each fixed trial space, giving upper semicontinuity by minmax. Monotonicity under physical inclusion and compactness plus a uniform log-energy bound for normalized eigenvectors give the opposite semicontinuity (alternatively apply U02's continuity proof restricted to the invariant parity spaces). Since this auxiliary argument has not been independently re-audited here, the unconditional-within-hypothesis claim made in BPF02 is alternating strict ordering at arbitrarily large windows; exact crossing times are asserted only conditional on the parity continuity lemma. No equality at tau=0 for the actual operator is implied by the leading approximation.

## 3. General maximal symmetric group: nonconvergence and invariant product

For any finite symmetric J with h>=1, the signed trace is
    tr T_a=sum_(u in J) m_u exp(2iua)/(2B+2iu).
The sum of odd prefactors minus the sum of even prefactors is this trace. It is a nonconstant real trigonometric polynomial: its distinct frequencies are nonzero and all coefficients nonzero. For the full sorted singular values, use instead
    sum_(j=1)^(2h) sigma_j(a)^2=tr T_a^2
       =sum_(u,v in J) m_u m_v exp(2i(u+v)a)/(2B+i(u+v))^2.    (1)
For verification, the rank-one product trace of (ell_u tensor ell_-u)(ell_v tensor ell_-v) is <ell_v,ell_-u><ell_u,ell_-v>; both factors equal 1/(2B+i(u+v)). Terms with the same sum have a common denominator, so their positive multiplicity numerators cannot cancel. In particular at the highest frequency 4u_max the sole contribution u=v=u_max is nonzero. Hence (1) is also a nonconstant real trigonometric polynomial.

A finite trigonometric polynomial with a nonzero nonconstant Fourier coefficient cannot converge as a->+infinity. If it converged to L, then its time average against exp(-i omega a), omega!=0, would tend to zero (split off a fixed initial interval, use uniform closeness to L thereafter, and the explicit average of the pure exponential); the exact finite sum instead gives that coefficient. It follows at least one parity-resolved leading prefactor fails to converge, and independently at least one full sorted leading prefactor fails to converge. Because the actual scaled depths differ by o(1) uniformly and all prefactors are uniformly bounded, the corresponding claims transfer to the ordinary spectrum. This does NOT prove each individual full prefactor or even the largest oscillates for arbitrary many quartets.

The product of all full leading prefactors is invariant:
    prod_j sigma_j(a)=|det(G^(1/2)H_a G^(1/2))|
                    =det G * prod_(u in J) m_u >0.
Consequently the product of the actual first r scaled negative depths tends to this constant, despite nonconvergence of at least one factor. These statements require no rational independence of ordinates. The family is continuous in finitely many phases on a compact torus; ordered eigenvalues and singular values are continuous by minmax, so their joint cluster set is the image of the closure of the positive-time phase orbit. More explicitly this closure is recurrent: for any epsilon>0, pigeonhole the phase vectors of integer times on a finite partition of the torus into sets of diameter epsilon, obtaining arbitrarily large positive time differences in the identity neighborhood by one infinite cell. As epsilon tends to zero, choose such differences tending to infinity. Adding any fixed a recovers its phase vector along arbitrarily large windows; therefore all points in the closure of the orbit are cluster points at infinity. No claim of density in the whole torus without a rational-independence condition.

## 4. Disposition

BPF02 complete as a conditional internal candidate. Single maximal quartet: closed-form even/odd prefactors, exact liminf/limsup, alternating parity dominance, and nonconvergence of both full leading coefficients. General finite maximal group: signed and squared spectral trace oscillation, nonconvergence of at least one full and parity prefactor, constant determinant product, joint phase-orbit cluster description. No numerical experiment, independent verification, actual off-line zero or RH proof. BPF03 next: seek smaller-deviation prefactors after eliminating leading boundary directions; distinguish finite-model Schur reduction from a genuine ordinary-operator asymptotic, and examine possible infinite-off-line extensions.

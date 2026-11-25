# STS01 — Trace-class Sobolev form and exact parity trace kernel

2026-11-25. AI-assisted internal candidate, without RH, finite off-line-set, deviation-gap or weighted-density assumptions. Uses the paired Weil form/core and classical local O(log(2+|u|)) count as in GSG03/LBS01. No actual off-line zero, fresh source inspection in this milestone, numerical experiment, independent proof verification or priority claim. The generalized Sobolev spectrum below is not the ordinary L2 spectrum.

## 1. Absolute trace-class representation

On H_S(a)=H_0^1(-a,a), use
    <f,g>_S=int_(-a)^a [f conj(g)+f' conj(g')] dx,
linear in the first argument, and Fourier transform Ff(z)=int f(x)e^(izx) dx. For each distinct ordinate z=u+id=(rho-1/2)/i let k_z be the Riesz representer of Ff(z) on this Hilbert space. The Sobolev endpoint trace vanishes, so integration by parts gives F(f')(z)=-iz Ff(z), first on smooth tests and then by H_0^1 density. Write
    I_a(d)=int_(-a)^a exp(-2dx) dx
          =sinh(2ad)/d for d!=0, and 2a for d=0.
Cauchy-Schwarz applied both to f and to f' yields
    (1+|z|^2)|Ff(z)|^2 <= I_a(d) ||f||_S^2.
Hence ||k_z||_S^2 <= I_a(d)/(1+|z|^2). In particular for |d|<=1/2,
    ||k_z||_S^2 <= 2a exp(a)/(1+|u|^2).
The bound on the sum of zero multiplicities in each unit real-ordinate interval, O(log(2+|u|)), makes sum_z m_z/(1+|u|^2) finite. The paired rank-one series therefore converges absolutely in trace norm:
    Q_S(a)=sum_(z in Gamma) m_z (k_(conj z) tensor k_z),
    (v tensor w) f=<f,w>_S v,
    sum_z m_z ||k_(conj z)||_S ||k_z||_S < infinity.       (1)
Conjugate pairs have the same multiplicities, so the operator is self-adjoint. On compact smooth tests (1) represents the paired Weil form, since its diagonal term is Ff(z) conj(Ff(conj z)); by continuity it represents that same form on H_0^1. For the latter extension the arithmetic explicit formula is also bounded in this norm at each fixed a (archimedean multiplier has logarithmic growth, finite shifts and pole form are bounded in L2). No formal zero-sum trace manipulation without convergence is needed.

Consequences: Q_S(a) is trace-class, hence compact, and its nonzero eigenvalues are absolutely summable. The Hilbert minmax quotient is q_a(f,f)/(||f||^2+||f'||^2). Its negative index equals the ordinary negative index: H_0^1 embeds continuously into the ordinary form domain and cannot have a larger negative subspace, while approximation of any finite-dimensional ordinary strictly negative subspace by compact smooth tests in the ordinary form norm preserves its strict negative margin. Equality of nonzero spectra is not claimed. Nullity equality is not needed or claimed, since a zero vector of the ordinary form might not belong to H_0^1.

## 2. Reflection trace

Let Rf(x)=f(-x), a unitary self-adjoint involution in H_S. The Riesz identity implies R k_z=k_(-z) since F(Rf)(z)=Ff(-z). The paired zero set is reflection symmetric, so Q_S commutes with R. Define the real parity trace
    P(a)=tr(R Q_S(a))
        =tr(Q_S(a)|even)-tr(Q_S(a)|odd).                  (2)
This is the difference of full eigenvalue sums, including positive eigenvalues, NOT the difference of only negative depths. Absolute trace summability justifies the identity regardless of degeneracies or parity crossings. By (1),
    P(a)=sum_z m_z Theta_z(a),
    Theta_z(a)=<k_(-conj z),k_z>_S=F[k_(-conj z)](z).     (3)
This sign convention differs from some of the negative-depth traces used in BPF04; (2) specifies it explicitly.

The representer k_z is the Dirichlet Green inverse of e^(-i conj(z)x) for the operator D=-d^2/dx^2+1. Indeed its weak identity int f conj(k_z)+f' conj(k_z')=int f e^(izx) holds for every H_0^1 test. Thus D k_(-conj z)=e^(izx), with both endpoint values zero. For z!=±i the elementary solution is
    k_(-conj z)(x) =
      [ exp(izx) - cos(za) cosh(x)/cosh(a)
                 - i sin(za) sinh(x)/sinh(a) ]/(1+z^2).
The exceptional ±i are outside the zeta ordinate strip. The displayed solution satisfies the ODE and both boundary conditions, and uniqueness follows from positivity of D.

## 3. Closed formula per ordinate

Integrate the preceding solution against exp(izx), without conjugating this last exponential. The required integrals are
    int_(-a)^a exp(2izx) dx = sin(2za)/z,
    int_(-a)^a exp(izx) cosh(x) dx
       =2[sinh(a) cos(za)+z cosh(a) sin(za)]/(1+z^2),
    int_(-a)^a exp(izx) sinh(x) dx
       =2i[cosh(a) sin(za)-z sinh(a) cos(za)]/(1+z^2).
The first expression has its removable value 2a at z=0; the latter two follow by differentiating their elementary antiderivatives or even/odd decomposition.

Substitution gives
    Theta_z(a)= [ (1-z^2) sin(2az)/z
                 -2 coth(2a) cos(2az)+2 csch(2a) ]/(1+z^2)^2.     (4)
For clarity, before simplification the subtracted term from the two Dirichlet endpoint corrections is
    2[tanh(a) cos^2(za)-coth(a) sin^2(za)+z sin(2za)]/(1+z^2)^2.
Use tanh(a)+coth(a)=2coth(2a) and tanh(a)-coth(a)=-2csch(2a); combining the sin terms yields (4). The removable z=0 value of (4) is 2a-2tanh(a), agreeing with the integral of the solution of Dk=1 (a symbolic consistency check, not a numerical experiment). Actual zeta has no z=0 ordinate by the alternating eta argument used in NIR03.

The kernel obeys Theta_(-z)=Theta_z and Theta_(conj z)=conj(Theta_z), consistent with the reality of (2). The absolute convergence established in section 1 applies to (3) for each a. On compact a-intervals contained in (0,infinity), the explicit formula is also normally absolutely convergent by local zero counting and its O_a((1+|u|)^-3) tails. The finitely many bounded-u terms cause no difficulty.

No finite off-line hypothesis or actual location data have been used to obtain (1)-(4). The exact trace identity is a new candidate deduction for this project, not an established novelty claim: classical trace identities and the explicit formula are relevant prior art.

STS01 complete: trace-class full Sobolev operator, ordinary negative-index equality, exact full parity trace and elementary per-ordinate Dirichlet kernel. STS02 will separate the exponentially decaying boundary corrections in (4), construct the meromorphic Laplace transform and audit its pole residues. README unchanged.

# STS02 — Meromorphic parity-trace inverse and an exact scalar growth criterion

2026-11-25. AI-assisted internal candidate, without RH, finite off-line-set, maximal-deviation attainment, deviation-gap or uniform density assumptions. Uses STS01's trace-class identity and classical local zero count. No actual off-line zero, numerical spectrum, fresh source inspection, independent proof verification or originality claim. The trace is that of the generalized H_0^1 Sobolev form operator, not the ordinary L2 spectrum. This is an inverse theorem from exact spectral trace data, not a computation of those data.

## 1. Separate the elementary boundary corrections

Let Gamma be the distinct zeta ordinates z=u+id=(rho-1/2)/i, with multiplicities m_z, |d|<=1/2, and the symmetries z->-z and z->conj z. The ordinate zero is absent by NIR03's real-axis eta argument. STS01 gives
    P(a)=tr(R Q_S(a))=sum_z m_z Theta_z(a),
    Theta_z(a)=[(1-z^2) sin(2az)/z
                  -2 coth(2a) cos(2az)+2 csch(2a)]/(1+z^2)^2.
For a>=1, write Theta_z as its expression with coth(2a) replaced by 1 and csch(2a) replaced by 0, plus E_z(a). This is a separation of an exact remainder, not a discard of the Dirichlet boundary correction. Directly,
    E_z(a)=[-2(coth(2a)-1) cos(2az)+2 csch(2a)]/(1+z^2)^2.
Since |cos(2az)|<=exp(2a|d|)<=exp(a), coth(2a)-1=O(exp(-4a)), csch(2a)=O(exp(-2a)), and
    |1+z^2|=|1+iz||1-iz| >= u^2+1/4,
the local zero count gives
    E(a):=sum_z m_z E_z(a)=O(exp(-2a)).                  (1)
Here sum_z m_z/|1+z^2|^2 is finite, by comparison with sum_k log(2+|k|)/(1+|k|)^4. No unknown zero locations are used to establish convergence. The constant may depend on the zero set through this finite sum, not on a.

The two elementary exponential coefficients simplify:
    [(1-z^2) sin(2az)/z-2 cos(2az)]/(1+z^2)^2
       = -i exp(2iza)/[2z(1+iz)^2]
          +i exp(-2iza)/[2z(1-iz)^2].
For the second coefficient the numerator before cancellation is i(1-z^2)-2z=i(1+iz)^2; the first is its corresponding opposite-sign identity. Neither surviving denominator vanishes for an actual ordinate in the strip. The series of absolute coefficient magnitudes converges by the local count, since each coefficient is O((1+|u|)^-3) for large |u|, and the bounded-u set is finite with z!=0. Reflection symmetry z->-z therefore allows reindexing the first exponential sum, giving the exact identity
    P(a)=sum_(z in Gamma) m_z C_z exp(lambda_z a)+E(a),
    lambda_z=-2iz=1-2rho,
    C_z=i/[z(1-iz)^2].                                 (2)
All C_z are nonzero. There is no cancellation between distinct lambda_z, because z->lambda_z is one-to-one. The reflection symmetry doubles, rather than cancels, each corresponding exponential coefficient. In terms of lambda itself, C_z=2/[lambda_z(1+lambda_z/2)^2] (since z=i lambda_z/2). The possible exceptional lambda=0,-2 are absent from the actual ordinate set. Equation (2) is normally convergent on every bounded a-range in [1,infinity), even if infinitely many off-line pairs occur.

## 2. Laplace transform and recovery of all zeros

Fix any a0>=1. Define for Re s>1
    H_(a0)(s)=int_(a0)^infinity exp(-s a) P(a) da.
The integral converges absolutely: |Re lambda_z|<=1 and sum_z m_z |C_z|<infinity, with E bounded by (1). Termwise integration is justified by this same absolute majorant. It gives
    H_(a0)(s)=sum_z m_z C_z exp[-(s-lambda_z)a0]/(s-lambda_z)
                       +H_E(s),                        (3)
where H_E=int exp(-s a) E(a) da is analytic for Re s>-2. The exponential series of rational terms on the right defines a meromorphic function on the complex plane: on a compact set avoiding the discrete lambda_z, only finitely many lambda_z lie near the compact set, and the remaining terms are uniformly dominated by a constant times m_z |C_z| (their denominators eventually have modulus >=1; the exponential factors are uniformly bounded because Re lambda_z lies in [-1,1]). Thus (3) gives a meromorphic continuation of H_(a0) to Re s>-2.

Every lambda_z in the strip -1<=Re s<=1 is a simple pole of this continuation, with exact residue
    Res_(s=lambda_z) H_(a0)=m_z C_z
                           =2 m_z/[lambda_z(1+lambda_z/2)^2].     (4)
All other terms are analytic in a sufficiently small disk about this point, and H_E is analytic there. The residue is nonzero and independent of a0; multiplicities of zeros affect the residue, not the pole order. There are no additional poles in Re s>-2. The statement is a uniqueness consequence of meromorphic continuation of the exact function, not an algorithm for analytically continuing noisy data.

Consequently the exact full Sobolev parity trace P(a) for all sufficiently large a uniquely determines the entire nontrivial zero multiset:
    rho=(1-lambda)/2,
    m=(lambda/2)(1+lambda/2)^2 Res_(s=lambda) H_(a0)(s).
This includes the real ordinates (critical-line zeros), unlike the negative-depth-only inverse of BPF04. It uses neither a nonempty finite off-line hypothesis nor a known maximal-deviation group. The parity trace in (2) must include positive eigenvalues as well as negative eigenvalues. Meromorphic inversion of this trace does not establish the existence or location of an off-line zero without actually determining the trace's poles.

## 3. Exact scalar criterion and unrestricted exponential rate in the new metric

Let B=sup_(z in Gamma)|Im z| in [0,1/2]. Symmetry gives sup_z Re lambda_z=2B even if the supremum is not attained. By (2),
    |P(a)|<=C exp(2Ba)+C exp(-2a), a>=1.
Therefore limsup_(a->infinity) a^-1 log(1+|P(a)|)<=2B. If B>0 and the limsup were strictly smaller than 2B, choose c strictly between the limsup and 2B. Then |P(a)|<=C exp(c a) for all sufficiently large a. The Laplace integral would be analytic on Re s>c (finite initial interval contributes an entire function). Its agreement with (3) on Re s>1 and uniqueness of analytic continuation would contradict a pole lambda_z with Re lambda_z>c, which exists by the definition of B. If B=0, nonnegativity of log(1+|P|) gives the reverse inequality immediately. Hence
    limsup_(a->infinity) log(1+|P(a)|)/a = 2B.            (5)
This is a scalar trace rate, not an ordinary lowest-eigenvalue rate or a liminf assertion. It does not require a uniform density condition, finite leading group, or a hypothesis that cancellation cannot occur at individual windows.

In particular RH implies bounded P(a) on a>=1 by the absolutely summable purely oscillatory series (2). Conversely bounded P(a) would give a Laplace transform analytic for Re s>0; any off-line zero gives a reflected pole with positive real part by (4), a contradiction. Thus, in this generalized Sobolev metric,
    RH iff sup_(a>=1)|tr(R Q_S(a))|<infinity.            (6)
This is a reformulation/equivalence, not proof of boundedness and not a proof of RH. It may be closely related to explicit-formula criteria; no originality asserted.

## 4. Maximal-deviation oscillations without a finite group

If B>0, dominated convergence in the absolutely summable coefficients yields
    exp(-2Ba) P(a)
       =sum_(z: Im z=B) m_z C_z exp(-2i Re(z) a)+o(1).  (7)
Indeed each other term has decaying factor exp(-2(B-Im z)a), bounded by 1; the sum of their absolute coefficients is finite. If B is unattained, the leading sum is empty and the scaled trace tends to zero, consistently with the limsup exponential rate (5). If the maximal set is infinite, the leading series is still uniformly absolutely convergent, with no finite-group/gap assumption. For any signed ordinate u, its mean Fourier coefficient is m_z C_z at frequency -2u if z=u+iB occurs, zero otherwise: interchange the time averages with the summable series and use the elementary average of each exponential. This yields maximal-group identifiability by real-frequency means even in the infinite case. No uniform lower bound on individual amplitudes or finite-window recovery is implied. For B=0 equation (2) already describes the full critical-line oscillatory trace if RH is true.

STS02 complete as internal candidate: exact exponential expansion with controlled boundary error, full meromorphic inverse and multiplicity residues, scalar RH boundedness criterion, exact limsup growth rate, and attained/nonattained maximal-scale alternatives. STS03 next: compute an independent arithmetic-side parity trace and rigorous finite truncation bounds; distinguish arithmetic computation from the zero-side identity and check relevant prior art. README unchanged.

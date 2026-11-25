# LBS01 — Log-energy form operator and absolute sampling bound

2026-11-25. AI-assisted candidate deduction. No RH assumed, no actual off-line zero, fresh literature inspection, numerical experiment, priority claim or independent human/formal verification. Imports the paired Weil form, arithmetic explicit formula, digamma growth and classical local O(log(2+|u|)) zero count used in GSG03 and NIR03. All new estimates below are elementary Fourier and Hilbert-space arguments. The metric differs from ordinary L2.

## 1. Positive kernel representation of the log energy

Use Ff(t)=int f(x)e^(itx) dx and Fourier measure dt/(2pi). Let
    w(t)=1+log(2+|t|),  L(f)=int w(t)|Ff(t)|^2 dt/(2pi).
Let H_w be the full-line Hilbert space with this norm (identify functions in L2 by Plancherel). For s>0 the Cauchy probability kernel P_s(h)=s/[pi(s^2+h^2)] has Fourier multiplier exp(-s|t|); this follows by inverse Fourier integration of exp(-s|t|) over the positive and negative half-lines. By integrating the derivative with respect to x>=0 or by Tonelli,
    log(2+x)-log 2=int_0^infty e^(-2s)(1-e^(-sx)) ds/s.
Combining this with Plancherel and the symmetric difference identity for P_s gives exactly
    L(f)=(1+log 2)||f||_2^2
       +(1/2) int_R J(h)||f(.+h)-f||_2^2 dh,
    J(h)=(1/pi) int_0^infty e^(-2s)/(s^2+h^2) ds, h!=0.     (1)
The interchange is Tonelli for the nonnegative expressions, valid even for infinite energy. Direct upper estimates give J(h)<=1/(2|h|) and J(h)<=1/(2pi h^2). In particular int J(h) min(h^2,1) dh is finite.

For any bounded Lipschitz multiplier m on R, with supremum M and Lipschitz bound D,
    ||(mf)(.+h)-(mf)||_2^2
      <=2 M^2 ||f(.+h)-f||_2^2 +2 min(D^2 h^2,4M^2)||f||_2^2.
Insert in (1); for |h|<=1 use the D term and for |h|>1 the M term. This proves
    L(mf) <= C (M^2+D^2) L(f).                            (2)
The constant is absolute. Unlike a crude weighted Fourier convolution bound, this estimate is uniform in the length of the interval on which m is specified. For a>=1 and |v|<=3/2, take a smooth or Lipschitz cutoff eta_a equal one on [-a,a], supported in [-a-1,a+1], with uniformly bounded derivative; set m(x)=eta_a(x)e^(-v x). Its supremum and Lipschitz constants are <=C exp(|v|(a+1)). Thus for f supported in [-a,a],
    L(e^(-v x) f) <= C exp(2|v|(a+1)) L(f).               (3)
This is the uniform multiplier estimate needed below; no control of L(f) by ||f||^2 is asserted.

## 2. Absolute strip sampling using only the local zero count

Let Gamma be the distinct ordinates z=(rho-1/2)/i, with multiplicities m_z. For b in [0,1/2], take any subset Gamma_b of the ordinates in |Im z|<=b. The unconditional classical local count, counting multiplicity and both signs, gives
    sum_(z: Re z in [k,k+1)) m_z <= C w(k), k in Z.
For f in C_c^infty(-a,a), a>=1, its transform is entire. The holomorphic disk mean-value inequality for |Ff|^2, of radius r=1/a<=1 around z, bounds each sample by (a^2/pi) times the integral over that disk. For Re z in [k,k+1) and |Im z|<=b, the disk is in [k-1,k+2] x [-b-1/a,b+1/a]. Summing over k, using the local count, finite overlap and comparability of w(t) with w(k) on each rectangle, yields
    sum_(z in Gamma_b) m_z |Ff(z)|^2
       <= C a^2 int_(|v|<=b+1/a) L(e^(-v x)f) dv.
Apply (3). For A=a+1,
    int_(-b-1/a)^(b+1/a) exp(2A|v|) dv
       =[exp(2A(b+1/a))-1]/A <= C exp(2ba)/a
uniformly in a>=1, 0<=b<=1/2. Consequently
    sum_(z in Gamma_b) m_z |Ff(z)|^2
       <= C a exp(2ba) L(f).                            (4)
This is an absolute square-sampling bound, not just a bound on the negative part; it uses no uniform unweighted local off-line density hypothesis. The constant depends on the classical local count bound, not on b or a. For a conjugation-invariant remainder set of pairs plus real ordinates with |Im z|<=b, Cauchy-Schwarz (or 2|xy|<=|x|^2+|y|^2) gives absolute paired form bound
    |q_remainder(f,f)| <= C a exp(2ba) L(f).              (5)
The associated sesquilinear form is Hermitian and bounded in the H_w norm by the same quadratic bound via the bounded-form Riesz theorem (or polarization first and the self-adjoint norm characterization). The sample map itself is bounded into weighted ell2 by (4), so it extends continuously to the completed support space. Its components agree with the actual Fourier evaluations there, since on bounded physical support each complex evaluation is L2-continuous and H_w dominates L2.

Compared with GSG03.1/NIR03, (4)-(5) replace a higher polynomial bound for the negative part by a linear-a bound for the absolute strip contribution in the log-energy metric. No claim of a corresponding ordinary-L2 estimate.

## 3. The generalized operator and its discrete negative spectrum

Define H_(w,a) as the closure of C_c^infty(-a,a) (zero extensions) in H_w. It is a closed Hilbert subspace, with support in [-a,a], and is invariant under reflection. Let j_a:H_(w,a)->L2(-a,a) be the inclusion. It is compact: truncate Fourier frequencies at |t|<=T; the map from L2(-a,a) into L2([-T,T],dt/(2pi)) has square-integrable kernel exp(itx), hence is Hilbert-Schmidt. The high-frequency tail of a unit H_w vector has L2 norm <=[inf_(|t|>T) w(t)]^(-1/2), tending to zero. Thus Fourier-composed inclusion is a norm limit of compact maps, and j_a is compact.

By (5) with b=1/2, the whole arithmetic form q_a extends to a bounded Hermitian form on H_(w,a), for a>=1 (for smaller a extend the tests into a=1). Write its representing self-adjoint operator Q_a via
    <Q_a f,g>_w=q_a(f,g).
The arithmetic formula on smooth tests also gives q_a-L equal to the bounded ordinary L2 form consisting of the multiplier alpha(t)-w(t), the finite prime-shift sum and the pole kernel. The digamma asymptotic alpha(t)=log|t|-log(2pi)+o(1) makes alpha-w bounded globally; boundedness of the shifts and pole on fixed support is elementary. Hence for a bounded ordinary self-adjoint B_a,
    Q_a=I+j_a* B_a j_a.                                 (6)
By compactness of j_a the second term is compact. H_(w,a) is infinite-dimensional, so the only essential spectral point is 1. In particular the negative spectrum consists of finitely many isolated finite-multiplicity eigenvalues; the same holds for zero, and all other spectrum outside 1 can accumulate only at 1. These are actual generalized eigenvalues, not merely formal variational quantities. The Rayleigh quotient is q_a(f,f)/L(f), not the ordinary L2 quotient.

For fixed a the closed ordinary form domain is the same set H_(w,a) with equivalent norms: on tests q_a-L is bounded by C_a||f||^2, so q_a+(C_a+1)||f||^2 and L(f) bound one another up to finite positive constants, and the completions coincide by the given compact smooth core of A_a. Thus the negative index (maximal dimension of a strictly negative subspace) of Q_a equals that of A_a by the same form, and their nullspaces coincide as sets: q_a(f,g)=0 for all form-domain g means f belongs to Dom A_a with A_af=0, and conversely. No equality of nonzero eigenvalues is asserted. Negative variational depths max(0,-mu_j(Q_a)), with the usual full Hilbert minmax values if no jth negative eigenvalue exists, agree exactly with NIR03's M_j(a) by core density on finite-dimensional spaces. Therefore the already obtained exact indexed logarithmic-energy growth exponents are now associated with a bounded operator having a finite negative spectrum at every fixed window.

## 4. Consequence for a separated finite set

Suppose all pairs with |Im z|>b form a fixed finite selected set, and their deviations are separated from b by a positive gap. Every selected evaluation is bounded on H_(w,a) at each fixed a, so its paired contribution is a finite-rank self-adjoint operator O_(w,a). The remaining real and lower off-line terms satisfy
    ||Q_a-O_(w,a)|| <= C a exp(2ba).                     (7)
This is a two-sided operator-norm comparison in H_(w,a) with only the classical local count; it eliminates the additional uniform weighted-density hypothesis used for the ordinary L2 extension in BPF03(5). For any selected deviation d>b the right side divided by exp(2da) tends to zero. Weyl/minmax comparisons at all such scales will therefore transfer finite-rank asymptotics if the normalized evaluation Gram has a positive limit. That is LBS02's concrete task, not asserted here. The assumption of a separated finite selected top set is still necessary for this proposed finite-rank route. No result about actual off-line zeros or unconditional ordinary L2 growth follows from the metric change.

LBS01 complete as an internal candidate: exact log-energy kernel, uniform multiplier bound, improved absolute strip estimate, actual bounded self-adjoint generalized operator and equality of negative index/nullspace with A_a, plus the finite-rank remainder bound. No independent verification, numerical execution, source priority or RH proof. README unchanged.

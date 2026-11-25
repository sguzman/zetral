# CPC01 — Exact compact preconditioning and threshold inertia

2026-11-25. AI-assisted internal candidate derivation, no RH assumption, no independent human/formal/numerical verification. Uses FES03's cutoff symbol and FES04's positive concentration operator. Classical Birman–Schwinger principle is established prior art, not a novelty claim. Current search inspected search excerpts for Laptev–Solomyak (https://www.ma.ic.ac.uk/~alaptev/Papers/LapSol1.pdf), Quantitative Bounds Versus Existence of Weakly Coupled Bound States (https://link.springer.com/article/10.1007/s00023-022-01228-3), and The Generalized Birman-Schwinger Principle (https://arxiv.org/abs/2005.01195). No full PDF proof analyzed, no theorem identifier imported. All operator arguments needed below are supplied directly.

## 1. Exact positive/negative splitting on a fixed physical window

Let I=(-A,A), A>=1, H=L2(I), and U:H->L2(R,dt/(2pi)) be the isometric Fourier transform of the zero extension, with convention F[f](t)=int_I f(x)e^(itx)dx. Let S_A be FES03's real even cutoff symbol. It is continuous, bounded below, and S_A(t)=log|t|+O_A(1) at infinity. Fix s real (testing the threshold -s) and mu>0. Set
    p(t)=max(S_A(t)+s,mu), W(t)=(mu-s-S_A(t))_+.
Then p>=mu and W is bounded, continuous, nonnegative, even, compactly supported. The form
    p_H(f,g)=int p(t) F[f](t) conj(F[g](t)) dt/(2pi)
on V={f in H: integral (1+log(2+|t|)) |F[f](t)|^2 dt<infinity} is densely defined, closed and coercive: p is comparable above and below to the logarithmic weight for fixed A,s,mu. Closedness follows by completeness of the weighted Fourier space intersected with the closed range of U. Its associated self-adjoint operator P satisfies P>=mu I, and Dom P^(1/2)=V. By FES04 let K=U* M_W U>=0; K is bounded trace class, tr K=(A/pi) integral W. Exactly, in form sense,
    A_A+sI=P-K.                                              (1)
The two self-adjoint operators have the same operator domain since K is bounded (bounded perturbation theorem, or directly by the form representation). No full-line inverse multiplier substitution is used.

## 2. Exact compact inertia and threshold nullity

Define C=P^(-1/2) K P^(-1/2), a positive trace-class operator with tr C<=mu^-1 tr K. P^(1/2):V->H is bijective with bounded inverse into V in the form norm. On setting u=P^(1/2)f, (1) becomes
    q_A(f)+s||f||^2 = <(I-C)u,u>.
The dimension of a maximal strictly negative form subspace is unchanged under this bijection. The compact-resolvent minmax principle for A_A and the spectral theorem for C give
    #{lambda_j(A_A)<-s}=#{lambda_j(C)>1}.                    (2)
The nullity identity is equally exact: f is in ker(A_A+sI) iff its shifted form pairing vanishes against every g in V, iff (I-C)P^(1/2)f=0, since P^(1/2)V=H. The converse uses the representation theorem: the zero form functional is represented by 0 in H, so f belongs to the operator domain. Thus
    dim ker(A_A+sI)=dim ker(I-C),                           (3)
and P^(-1/2) gives the bijection of kernels. Counts include multiplicities. In particular
    A_A>=-s I iff ||C||<=1;
    A_A>-s I with a uniform positive gap iff ||C||<1.
For the last claim, ||C||<1 yields q_A+s||.||^2 >=mu(1-||C||)||.||^2. Conversely if A_A+sI has a positive gap then C<=I and C cannot have eigenvalue 1 by (3); compactness excludes accumulation at 1. For s=0 this reformulates finite-window Weil positivity exactly, unlike the sufficient constant-baseline test in FES04. It is not a proof of positivity or RH.

## 3. Continuous compact frequency-side kernel

Let dnu(t)=W(t)dt/(2pi), a finite measure with compact support, and define B:H->L2(nu) by (Bf)(t)=F[f](t)=<f,e_t>, e_t(x)=exp(-itx). Then K=B*B, B is Hilbert–Schmidt with ||B||_HS^2=2A nu(R). Put D=B P^(-1/2). The frequency operator T=D D*=B P^(-1) B* has the same nonzero eigenvalues and multiplicities as C=D*D, by the usual bijection of nonzero eigenspaces via D and D*. It is positive trace class on L2(nu) with kernel (inner product linear in first variable)
    T(t,u)=<P^(-1)e_u,e_t>.
The inverse is the inverse of the compressed positive operator, not compression of the scalar inverse. Continuity follows from t->e_t in H and ||P^(-1)||<=mu^-1. Explicit bounds:
    |T(t,u)|<=2A/mu,
    |T(t,u)-T(t',u')| <= (2 A^2/(sqrt(3) mu)) (|t-t'|+|u-u'|),
using ||e_t-e_t'||<=sqrt(2 A^3/3)|t-t'|. Also
    tr T=int <P^(-1)e_t,e_t> dnu(t) <= 2A nu(R)/mu.
These statements follow from the HS factorization and its rank-one integrals, not an assumption about pointwise traces of arbitrary continuous kernels. The representation provides a compact Hermitian positive kernel on a finite measure space; exact counts at 1 in (2),(3) carry over to T. Even and odd physical subspaces are invariant under P and K by evenness of the symbols; B intertwines reflection with t->-t, so the count also holds separately in each parity sector.

## 4. Useful inverse-compression bracket

There is a computable upper comparison for P^(-1), not equality. For g in H the coercive form variational identity is
    <P^(-1)g,g> = sup_(f in V) [2 Re <g,f>-p_H(f,f)].
Proof by completing the square in P^(1/2)f; maximum at P^(-1)g. Embed by U and enlarge the supremum to the full weighted Fourier space on R. Since p>=mu, the unrestricted maximum occurs at (Ug)/p and equals int |Ug|^2/p dt/(2pi). Hence
    0 <= P^(-1) <= U* M_(1/p) U.                            (4)
For a finite trial subspace V_m in V with basis v_1,...,v_m and positive form matrix P_m, the restricted supremum yields a lower operator R_m=J_m P_m^(-1) J_m*<=P^(-1), where J_m synthesizes the basis and P_m=J_m* P J_m interpreted as form matrix. No orthonormality required, only independent basis. If V_m nested with union dense in the p-form norm, these lower quadratic forms increase pointwise to the exact inverse form. Applying B on both sides gives
    B R_m B* <= T <= B U* M_(1/p) U B*.                     (5)
The upper comparison retains the actual full positive symbol rather than mu^-1 I. It is still not exact; the physical support constraint matters. The lower bound certifies negative eigenvalues when its indexed eigenvalues exceed 1, and the upper can certify nonnegativity when its norm is <=1. The gap between comparisons has not been bounded numerically. CPC02 should derive explicit residual and quadrature estimates converging to T, including verified mass integrals and linear-system errors. No successful positivity certificate or numerical run claimed here.

CPC01 complete as internal candidate: exact threshold count/nullity, compact frequency kernel, parity and two-sided inverse bracket. No novelty claim for classical Birman–Schwinger theory, no RH proof. README unchanged.

# AJP02 — Exact parity inertia for pole restoration, including null spaces

2026-11-25. Internal candidate; no RH assumption. The parity rank-one reduction and regular pole-capacity criteria already occur in the external unreviewed teal-sea note (https://zeta.teal-sea.com/read/hunts/weil_propagation/theory/RESULTS.html, §2.6). The following includes singular spectral parameters and exact index bookkeeping. No originality claim.

Let R be reflection, T=A-H as in AJP01, and c(x)=cosh(x/2), s(x)=sinh(x/2). On the even and odd subspaces respectively,
    A_e=T_e+2 c tensor c, A_o=T_o-2 s tensor s.
Use a generic parity sector, T self-adjoint semibounded compact-resolvent, B=T+sigma u tensor u, sigma=+2 or -2, u=c or s. All scalar products below real on real vectors and Hermitian on complex vectors.

At any real z define D=T-z, K=ker D, k=dim K, u0=projection_K u, u1=u-u0, D1=D restricted to K^perp, m=n_-(D1). D1 is invertible on K^perp, with bounded inverse there because z is isolated from remaining spectrum. Let r=-1/sigma-<u1,D1^-1 u1>. Negative index and nullity are finite.

Case u0=0. Kernel K survives unchanged. On K^perp the bordered quadratic form with block matrix [D1,u1; u1*, -1/sigma] is congruent both to diag(B1-z,-1/sigma) and to diag(D1,r). This follows by completing the square, using D1^-1 u1 in its operator domain; these bounded invertible shears preserve the closed form domain. Therefore
    n_-(B-z)=m+1_(r<0)-1_(-1/sigma<0),
    dim ker(B-z)=k+1_(r=0).
This includes u1=0, in which case r=-1/sigma.

Case u0 !=0. Write f=v+w+alpha e0 with v in K^perp, w in K orthogonal to u0, e0=u0/||u0||. Then
    q_(B-z)(f)=q_D1(v)+sigma |<u1,v>+alpha ||u0|| |².
An invertible bounded shear in alpha removes <u1,v>. Hence
    n_-(B-z)=m+1_(sigma<0),
    dim ker(B-z)=k-1.
These are exact formulas even if T is singular and even at a multiple unperturbed eigenvalue. At a regular z, the new eigenvalues are precisely roots of 1+sigma<u,(T-z)^-1u>=0. A root is simple since the derivative of the inner product is ||(T-z)^-1 u||²>0, and its eigenvector is proportional to (T-z)^-1u. At singular z the formulas give nullity without a spurious pole or cancellation. Rank-one min-max interlacing follows independently from the codimension-one restriction to u^perp.

For the full operator at z=0, strict positivity is equivalent to zero negative index and zero nullity in both sectors (compact resolvent). Explicitly:
- Even, T_e invertible: if n_-(T_e)=0 it is automatic; if n_-=1 it is equivalent to 1+2<c,T_e^-1 c><0; if n_->=2 it is impossible. Equality of the scalar to zero gives a surviving zero, not strict positivity.
- Even, singular: strict positivity requires dim ker T_e=1, c has nonzero projection on that kernel, and no negative T_e eigenvalue. If the kernel is orthogonal to c it survives; if T_e has a negative direction and c has nonzero kernel component, the shear leaves that negative direction unchanged.
- Odd: strict positivity of A_o implies strict positivity of T_o since T_o=A_o+2 s tensor s. For T_o>0 it is equivalent to 2<s,T_o^-1 s><1. If T_o is singular or negative strict positivity is impossible.

AJP01 proves that T's global ground state is simple and even, with positive overlap with c, and its bottom is eventually negative. Hence for all sufficiently large windows full positivity demands exactly one negative even T eigenvalue and no even kernel (the singular formula excludes a zero), and positive odd T, together with both scalar strict capacity inequalities above. No uniform gap above that negative mode follows from simplicity of the ground state. U01 gives that RH would imply strict positivity on every finite window, so these necessary conditions would then hold for every sufficiently large a; conversely verifying positivity at an unbounded sequence of windows suffices for RH by nesting. No such verification obtained.

AJP02 complete as candidate; next quantify the actual pole-free gap and explain what can and cannot be transferred through pole restoration.

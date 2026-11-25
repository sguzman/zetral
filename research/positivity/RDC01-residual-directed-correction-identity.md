# RDC01 — Residual-directed rational correction identity

2026-11-25. Candidate analytic deduction in the ECR01/RRC01 setting, without RH. Completion of squares and quadratic optimization are classical; no originality claim.

## Exact objective

Let the fixed-window block operator be [A R*; R C], with C self-adjoint, C>=G>=g_*I>0, G diagonal. Work on finitely many low directions (an arbitrary invertible rational congruence is allowed), and let X map them into a finite high trial span contained in Dom C. Put
    U(X)=A-R*X-X*R+X*CX, F(X)=R-CX,
    L(X)=U(X)-F(X)*G^-1 F(X).
The exact Schur complement S=A-R*C^-1 R obeys L(X)<=S. With X_*=C^-1 R,
    L(X)=S-(X-X_*)*[C G^-1 C-C](X-X_*),
where the bracket is interpreted on Dom C as a quadratic form; C G^-1 C itself need not be an operator on all of Dom C. Indeed C^-1<=G^-1 and ||C^(1/2)y||²=<(Cy),C^-1(Cy)> show the bracket is nonnegative. Thus the lower comparison, not only the Galerkin energy, is a concave matrix quadratic in the trial.

## Restricted correction

Let Y be any finite set of high trial directions in Dom C and Z a rational coefficient matrix. In the same low coordinates,
    U(X+YZ)=U(X)-Z*Y*F-F*YZ+Z*Y*CY Z,
    F(X+YZ)=F-CY Z.
Consequently
    L(X+YZ)=L(X)+Z*B+B*Z-Z*H Z,
    B=(CY)*G^-1 F-Y*F,
    H=(CY)*G^-1 CY-Y*CY >=0.
No inverse of C or G beyond the already known diagonal G is needed to define B,H. If H>0, the unrestricted coefficient maximizer is Z*=H^-1 B, and for every Z
    L(X+YZ)=L(X)+B*H^-1 B-(Z-Z*)*H(Z-Z*).
The improvement at Z* is positive semidefinite in ALL low directions simultaneously. If H is semidefinite, ker H is orthogonal to range B: write H=Y* C(G^-1-C^-1) C Y and B=Y* C(G^-1-C^-1) F, using F=R-CX. Then a kernel vector has zero image under the square root of the positive bounded operator G^-1-C^-1 applied to CY, and hence pairs to zero with every B column. The pseudoinverse maximizer exists on the finite correction range; null directions have no effect. The singular case requires no hidden coercivity assertion.

A rational approximate maximizer need not improve every low direction, but is always an admissible trial. A sufficient improvement criterion is B*H^-1B >= (Z-Z*)*H(Z-Z*) if H>0; in practice directly re-evaluate the complete certified lower comparison instead of trusting a heuristic inverse. The sign of a failed comparison gives no sign conclusion for the actual restored form.

## Finite computable surrogate

Use high indices through M, and the seven signed moment rows of PPW03 with their fixed, verified weights. These are linear functions of finite trial coefficients. Their weighted Gram majorant is quadratic and can be added to the finite weighted residual Gram. The corresponding approximate correction Hessian and right-hand side are obtained by the same expansion with each linear row included. The eighth-order diagonal absolute-moment remainder is nonquadratic in the trial; omit it only in the optimization surrogate, never in final certification, or bound it on a stated finite trust region. A truncated surrogate Hessian is not guaranteed positive, even when the infinite H is positive. Check conditioning and use bounded correction or a positive ridge if necessary; do not identify a surrogate objective improvement with a certified one.

The existing high Galerkin trial makes F vanish approximately in the trial rows but not beyond them. Even when Y uses only trial modes, the outside residual can make B nonzero. Select a bounded correction subspace from the most influential weighted high columns, existing residual directions, or signed moment sensitivity. A small Y avoids the O(M T²) cost of a dense all-column Gram. All corrections and low bases must be frozen as exact rational coefficients before outward interval evaluation; every high row and all analytic tails are recomputed. No improvement at h=2.2 is claimed yet.

## Exact finite example

Take a one-dimensional low block A=9/10, R=(1,1)^t, C=[[2,1],[1,2]], G=I/2, and trial span Y=(1,0)^t. C>=G and the exact Schur complement is 7/30. The Galerkin trial X=(1/2,0)^t gives L=-1/10, inconclusive. Here H=8, B=1, so Z*=1/8 and X'=(5/8,0)^t gives L=1/40>0. The same one-dimensional trial span changes a failed sufficient comparison to a successful one, with no increase in cutoff. This example is a synthetic algebra check, not a result for the restored operator.

RDC02 will execute an exact finite algebra diagnostic and then a bounded correction on the fixed physical h=2.2 case. Do not extrapolate the example to that operator without evidence.

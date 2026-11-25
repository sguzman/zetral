# CAC02 — Exact finite cell Schur inertia and residual positivity criteria

2026-11-25. AI-assisted candidate deduction without RH. Uses CAC01 and BSL01–02. The form Schur complement is classical; no general originality claim or independent review. No full positivity certificate or actual negative restored eigenvalue.

Let B be A or T on a fixed interval, with a cell partition as in CAC01. Let V:C^m->L²(I) be the isometry of normalized cell indicators and Q=VV* the orthogonal projection onto the cell space. The indicators are analytic vectors by APM01, so V maps into Dom B. Let E=ran(I-Q), and fix a real threshold z below the certified complement bound delta from CAC01. The restricted closed form of B-z on E has associated self-adjoint operator D>=d I with d=delta-z>0. It is densely defined on E: Q preserves the form domain since its range lies there, so projecting a form-dense family gives a dense family on E. The form is closed as the intersection of its domain with the L²-closed subspace E, and has compact resolvent from the original compact form embedding.

Set H=V*BV, R=(I-Q)BV:C^m->E. For f=V c+g with g in the restricted form domain the full shifted form is exactly
    q_(B-z)(f)=c*(H-z I)c+2 Re< R c,g>+q_D(g).
The cross term is legitimate because Vc lies in Dom B. The bounded invertible triangular shear g -> g+D^-1 R c preserves the form domain (D^-1 R c lies in Dom D). Completing the square gives
    q_(B-z)(f)=c* S(z)c+q_D(g+D^-1 R c),
    S(z)=H-z I-R*D^-1 R.
Thus the negative index of B-z equals the negative inertia of the finite Hermitian S(z). The nullity at threshold equals dim ker S(z), since the positive complement form is strictly coercive and the radical of the completed form consists of g=-D^-1 R c with c in ker S(z). Equivalently this yields the actual eigenvectors at threshold by form representation. No eigenvalue separation inside the cell space is required.

In particular
    H-z I-d^-1 R*R <= S(z) <= H-z I.                    (1)
Both comparisons are in Loewner order. If the lower matrix is strictly positive, the full operator is strictly above z (compact resolvent or the bounded inverse shear gives a positive form margin). If the upper matrix has a negative direction, the actual operator has a negative direction below z, as usual Rayleigh–Ritz. More generally negative counts of the upper and lower matrices respectively bound the true count from below and above (strict negativity counts; at a zero endpoint nullity must not be inferred without separate bounds). This reduces the full threshold certificate to a finite cell block plus independently certified complement coercivity, without forming CPC04's periodic negative-mode seed set.

## Certified sufficient criterion from lifted actions

For the isometric cell synthesis, R*R=M2-H², with M2=(BV)*(BV). If H0,G0 are certified approximations to H,M2 with norm errors e1,e2, then
    ||R*R-(G0-H0²)||<=e2+(2||H0||+e1)e1.
Hence an explicitly computable sufficient certificate is
    lambda_min[H0-z I-d^-1(G0-H0²)]
       > e1+d^-1[e2+(2||H0||+e1)e1].
All approximate matrices should be Hermitian. Use a certified lower bound on the displayed minimum eigenvalue, not a floating-point estimate. A direct residual norm bound can be tighter: for Z=B_N^lift V and ||BV-Z||<=epsilon,
    ||R||<=||(I-Q)Z||+epsilon.
Then lambda_min(H0)-e1-z > (||(I-Q)Z||+epsilon)²/d suffices. The latter residual Gram is Z*Z-(V*Z)*(V*Z), with arithmetic uncertainty enclosed. The projection Q is the exact cell-average projection, not the Fourier cutoff. BSL01 supplies explicit uniform action errors and its continuous affine variant for auxiliary test functions; cell averages remain the chosen complement here.

## Improved correction by an approximate complement solve

The bound d^-1 R*R may be too large. For any synthesis U:C^m->E∩Dom D, write residual F=R-DU. Completion of squares yields
    R*D^-1 R - (R*U+U*R-U*DU)=F*D^-1 F,
    0<=F*D^-1F<=d^-1 F*F.
Thus if complement trial solves can be evaluated with certified lifted actions (project their outputs to E, including the exact Q), the true Schur matrix is enclosed from both sides by finite matrices. Choosing approximate U is optional; U=0 recovers (1). This may refine the certificate where the crude bound is inconclusive. A form-domain approximation alone does not certify a small operator residual. The actual existence/cost of suitable approximate complement solves is not established here.

CAC02 complete as candidate. At a=1/2 CAC01 certifies positive complement bounds already for 24 cells, with more margin at 32 or 64, but BSL03's two-cell Ritz data cannot be substituted for those larger cell matrices. CAC03 must attempt a consistent finite-cell benchmark if practical, reporting whether the sufficient test succeeds or fails without implying a negative eigenvalue from a failed certificate. No numerical full Schur test or RH proof in this note.

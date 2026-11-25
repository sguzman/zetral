# BSL02 — Block moment enclosures and certified Ritz residuals

2026-11-25. Internal AI-assisted candidate deduction, unconditional in RH. Uses BSL01, MVI02–03 and CPC02–04. Rayleigh–Ritz residual and spectral-projection bounds are classical; no general originality claim. No actual eigenvalue computation or independent review.

Fix B equal to the actual restored or pole-free operator on I (or one parity), and V:C^m->L²(I) with piecewise affine columns, all in Dom B. Write W=B V, Z=B_N^lift V and suppose ||W-Z||<=epsilon from BSL01, with any additional certified numerical action error included in epsilon. The moment matrices are M0=V*V, M1=V*W, M2=W*W. Here M2 represents the physical second moment by self-adjointness and analytic-vector domain membership; the norm Gram identity also works for columns in Dom B only.

## 1. Moment and residual propagation

Set A1=(V*Z+Z*V)/2 and A2=Z*Z. Exact operator inequalities give
    ||M1-A1||<=||V|| epsilon,
    ||M2-A2||<=2||Z|| epsilon+epsilon².
The first follows by symmetrizing the error; the second by expanding W=Z+(W-Z). If certified arithmetic approximations to these finite Grams have additional errors eta1,eta2, add those respectively to the right sides. Use a certified upper bound on ||Z|| (e.g. its Gram norm). In particular the second-moment error is not computed by squaring the first-moment compression.

For any coefficient vector c and real lambda, the exact residual is
    ||(B-lambda)V c||²=c*(M2-2lambda M1+lambda² M0)c.
One can enclose it using the lifted residual directly:
    max(0,|| (Z-lambda V)c ||-epsilon||c||)
       <= ||(B-lambda)Vc||
       <= ||(Z-lambda V)c||+epsilon||c||.
The direct formula avoids multiplying first-moment error by |lambda|. The finite lifted residual norm itself is computable by the physical integral of the explicit logarithms, hinges, shifted primes, pole terms and residual Fourier polynomial. Numerical Gram uncertainty must still be enclosed. No endpoint singularity is ignored.

When V is an isometry (or after orthonormalization by a certified positive M0), let H=M1 be the actual finite Ritz matrix and R=W-VH. Then V*R=0 and
    R*R=M2-H².
If an approximate Ritz matrix H0 is used instead, the lifted matrix residual Z-VH0 differs from W-VH0 by at most epsilon, independently of the Ritz matrix approximation error. In particular for any unit Ritz trial f=Vc, a certified upper residual rho implies dist(lambda,sigma(B))<=rho by the spectral theorem. This certifies existence of spectrum within [lambda-rho,lambda+rho], not identification of its index or absence of other negative eigenvalues.

For a cluster of k orthonormal trial vectors with synthesis U and an approximate Hermitian Ritz block H0, suppose ||BU-UH0||<=rho and sigma(H0) is contained in [lambda-r,lambda+r]. For delta>r+rho, let E project onto [lambda-delta,lambda+delta]. Then
    ||(I-E) U|| <= (r+rho)/delta <1.
Indeed ||(B-lambda)U||<=r+rho and the spectral theorem bounds the complement by 1/delta times this norm. Thus E U is injective and the actual spectral interval contains at least k eigenvalues counting multiplicity. This handles clustered or repeated eigenvalues without asserting a gap within the cluster. It is a lower counting certificate, not a full enclosure of the entire spectrum.

## 2. Coupling to an independent coercive complement

CPC04 gives an exact finite-rank splitting B-z=P-K, P>=mu I, K=Y Y*. Here P is an operator (not the prime shift symbol of BSL01) and Y contains restricted Fourier seed modes. To approximate the inverse Gram G=Y*P^-1Y, choose a piecewise affine synthesis V and finite coefficient matrix C, and let U=VC. Its actual inverse residual is
    E=Y-PU=Y-(B-z)VC-KVC.
The singularity lift yields the computable approximation
    E_N=Y-(Z-zV)C-KVC,
    ||E-E_N||<=epsilon ||C||.
All terms except the known error involve finite Gram data, the explicit piecewise-affine action, exact shifted primes/pole, and the finite-rank K. The K action must be included; estimating only B-z would solve a different problem.

CPC02's completion of squares gives exactly
    G-G_lo=E*P^-1 E>=0,
    G_lo=Y*U+U*Y-U*PU.
Thus 0<=G-G_lo<=mu^-1 ||E||² I, with a certified bound from ||E_N||+epsilon||C||. The first-moment error in U*PU is <=||C||² ||V|| epsilon (or use the exact M1 expression if independently enclosed); numerical Gram errors are added. Weyl inequalities and the known finite rank then yield the full threshold-count certificate of CPC04 whenever the enclosed eigenvalues of G are strictly separated from 1. No such strict separation has been demonstrated in this campaign.

This combines the lifted action with an independently coercive complement. Finite Ritz positivity alone, even with arbitrarily accurate moment entries, remains insufficient to establish positivity of B. The finite inverse problem may also be very large because the CPC04 negative split can contain doubly exponentially many seed modes. BSL03 next execute a small nontrivial parity/block benchmark. No actual numerical run, RH proof, or priority claim.

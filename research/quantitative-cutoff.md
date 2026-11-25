# R04 — Quantitative cutoff estimates

Date: 2026-11-24 Mexico / 2026-11-25 UTC. Status: conditional human-readable derivation, pending independent review and formalization. Not claimed novel. Source: Suzuki, arXiv:2610.32704v1, §§2.1,2.3,3.3,4, https://arxiv.org/html/2610.32704v1 (checked this session). Assume RH and the published sampling/compression results. Distinct ordinates only. All quantities below concern the exact operator, not finite Fourier discretizations.

## A. Quadratic Ritz bound (standard approximation theory)

Let C be a bounded compact self-adjoint operator, let lambda_1 >= ... >= lambda_n > 0 be its leading positive eigenvalues, E their n-dimensional invariant subspace, and L=inf spectrum(C). Let P be the orthogonal projection onto a closed trial space M. Write Q for the orthogonal projection onto E and delta=||(I-P)|_E||. If delta<1, Y=P E has dimension n. Define A=(Q P)|_E; on E it is self-adjoint with (1-delta^2)I <= A <= I. For u in E and v=P u,
    ||v||^2=<Au,u>,
    ||(I-Q)v||^2=< (A-A^2)u,u> <= delta^2 ||v||^2.
The invariant decomposition E + E-perp therefore gives
    <Cv,v> >= lambda_n ||Qv||^2 + L ||(I-Q)v||^2
             >= [lambda_n-(lambda_n-L)delta^2] ||v||^2.
If this lower bound is positive, the compression to M has at least n positive eigenvalues. Max-min on Y and the global upper bound give
    0 <= lambda_n - mu_n <= (lambda_n-L)delta^2.
If mu_n is already known to exist the inequality remains true when delta<1 even if the lower bound is nonpositive. At delta=1 the estimate is trivial whenever mu_n exists, since mu_n>=L.

Specialize to Suzuki: lambda_n=1/gamma_n, L=-1/gamma_1, P=P_a. Let B_n=lambda_n+1/gamma_1. Whenever B_n delta^2<lambda_n,
    0 <= t_(a,n)-gamma_n <= B_n delta^2/[lambda_n(lambda_n-B_n delta^2)].
In particular if B_n delta^2<=lambda_n/2 the right side is <=2 B_n gamma_n^2 delta^2.
This follows by reciprocation, not by directly compressing the unbounded differentiation operator.

The squared-angle phenomenon is established prior art: Knyazev–Argentati, Rayleigh–Ritz majorization error bounds with applications to FEM, arXiv:math/0701784, SIAM J Matrix Anal Appl 31 (2010), https://doi.org/10.1137/08072574X ; see also arXiv:math/0610498 and arXiv:0705.1023. Our elementary proof uses the special top-of-spectrum case. A two-dimensional example C=diag(2,-3), M=span(cos theta,sin theta) attains equality for positive Ritz values. The squared-defect coefficient cannot be improved in general using only lambda_n and L.

## B. Exponentially localized trial vectors

Let Gamma be the distinct real nonzero ordinates, m_gamma positive finite integer multiplicities. Suzuki eq. (2.2) supplies sum m_gamma/gamma^2<infinity. For fixed n set
    d = min_{1<=j<=n} inf_{gamma in Gamma, gamma != gamma_j}|gamma-gamma_j| > 0,
    b=2/d,
    S_j = sum_{gamma != gamma_j} m_gamma/[m_(gamma_j) |gamma-gamma_j|^2],
    S=sum_{j=1}^n S_j.
Discreteness of Gamma ensures each gap is positive, and the weighted square-reciprocal summability plus finitely many nearby ordinates ensures S<infinity. No simplicity assumption.

Choose a fixed nonnegative smooth bump psi of integral one supported strictly in (-b/2,b/2). Let h_b=(1/(2b)) 1_[-b,b]. For a>=2b, k=floor(a/b)-1>=1. Form the test function
    u_(j,a)(x)= exp(-i gamma_j x) (psi * h_b^{*k})(x)/sqrt(m_(gamma_j)).
Convolution with psi is smooth, and support is contained in [-(k+1/2)b,(k+1/2)b] strictly inside (-a,a). In the global weighted sampling model the image v_j lies in M_a. Its coordinate at gamma_j equals 1/sqrt(m_(gamma_j)), identical to the normalized eigenvector e_j. At any other gamma, writing w=gamma-gamma_j, the coordinate is
    m_(gamma_j)^(-1/2) F[psi](w) sinc(bw)^k,
where |F[psi](w)|<=1 and sinc(y)=sin(y)/y. Because b|w|>=2,
    |sinc(bw)|^(2k) <= [1/(b^2 w^2)] 4^{-(k-1)}.
Thus
    ||v_j-e_j||^2 <= (S_j/b^2) 4^{-(k-1)}.
Orthogonal projection is best approximation. Cauchy–Schwarz on the n normalized eigenvectors yields
    delta_a^2 <= sum_j ||(I-P_a)e_j||^2 <= (S/b^2) 4^{-(k-1)}
               <= (64 S/b^2) exp[-(log 4)a/b].
Here k-1=floor(a/b)-2 >= a/b-3. This proves a fixed-index bound with explicit gap-dependent constants.

## C. Consequence for exact cutoff

Let K=64 S/b^2 and c=log(4)/b=d log 2. For a>=2b large enough that B_n K exp(-ca)<=lambda_n/2,
    0 <= t_(a,n)-gamma_n <= 2 B_n gamma_n^2 K exp(-ca).
Equivalently for arithmetic cutoff X=exp(2a), the error is O_n(X^(-d log(2)/2)).
This gives an exponential-in-a upper bound conditional on RH; it does not identify the optimal exponent, give a uniform rate in n, or bound the numerical errors from R03. The constants depend on actual distinct zero gaps and weighted tails, not just finite arithmetic data. Trial functions using zero ordinates are proof witnesses, NOT inputs to the existing arithmetic spectral solver. No circular computational claim. The proof applies to fixed indices even if zeta zeros have higher multiplicity.

## D. Stress tests and limitations

A fixed projection convergence hypothesis by itself implies no exponential rate: C=diag(2,-3), trial lines rotated by theta(a) tending arbitrarily slowly to zero demonstrate the issue (not nested). The exponential bound comes from the special sampled Fourier test functions, not abstract strong convergence. A positive compression is not assumed; the negative spectral endpoint is used explicitly. A bound on inverse eigenvalue differences cannot be reciprocated without a positive lower bound on mu_n. The 500-case seeded numerical stress test of the abstract lemma had zero observed violations and the sharp 2D example agrees to binary64 rounding; see experiments/reference/ritz_bound_check.py. Numerical tests do not prove the lemma.

## E. R05 bounded follow-up

Audit every step and compare to specialized spectral approximation literature before any novelty claim. Investigate whether a sharper compact-support frequency filter (or elimination of finitely many nearby ordinates) improves the exponent; make the support, tail summability and constants explicit. If pursuing a finite-arithmetic error certificate, clearly distinguish the missing certified gaps/tails and conditioning. Formalize a suitable elementary bound if Lean tooling can actually be verified. Do not broaden into unrelated spectral conjectures.

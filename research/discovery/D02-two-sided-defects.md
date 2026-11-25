# D02 — Two-sided spectral error and approximation defects

2026-11-25. Human-readable derivation using standard variational theory; not independently reviewed or machine-checked. No novelty claim for the abstract lemma. Applies to the exact phase-pi operator under the same RH and Suzuki sampling/compression imports as manuscript v0.2.

## 1. Abstract trace comparison

Let C be compact self-adjoint on a Hilbert space, with at least n+1 positive eigenvalues lambda_1 >= ... >= lambda_n > lambda_(n+1)>0 (repeated by operator multiplicity). Let E be the leading n-dimensional spectral subspace, Q its projection, L=inf spectrum(C), M a closed trial space, P its projection. Suppose the compression to M has n positive eigenvalues mu_1 >= ... >= mu_n>0. Write

    D_n = sum_(j=1..n) ||(I-P)e_j||^2 = tr[Q(I-P)Q],
    F_n = sum_(j=1..n) (lambda_j-mu_j),
    g_n = lambda_n-lambda_(n+1)>0,

where e_j form an orthonormal eigenbasis of E. For the upper estimate assume P restricted to E is injective (in particular this holds if D_n<1). Then

    g_n D_n <= F_n <= (lambda_1-L) D_n.

Proof: for any rank-n orthogonal projection R, define d_R = tr[Q(I-R)Q]. The equality of ranks gives tr[(I-Q)R(I-Q)]=d_R. Since Q reduces C, the off-diagonal contributions to tr(CR) vanish. In the top eigenbasis,
    tr(CQ)-tr(CR)
      = sum_(j<=n) lambda_j (1-<Re_j,e_j>)
        - tr[C_(E-perp) (I-Q)R(I-Q)].
The finite-rank positive operator in the second trace has trace d_R. The spectral bounds on C_(E-perp) are L and lambda_(n+1). Therefore
    (lambda_n-lambda_(n+1)) d_R
      <= tr(CQ)-tr(CR)
      <= (lambda_1-L) d_R.
These traces are well-defined even if C is not trace-class: all the multiplied projections are finite rank.

For the lower bound take R=R_* onto the first n compression eigenvectors in M. By the Ky Fan maximum principle tr(CR_*)=sum mu_j, and R_*<=P implies d_R*>=D_n. For the upper bound let R_0 project onto PE, which has rank n by the injectivity assumption. For u in E, R_0 u=Pu because u-Pu is perpendicular to M and Pu belongs to PE. Hence d_R0=D_n exactly. Ky Fan gives tr(CR_*)>=tr(CR_0), so the upper estimate follows. If n positive compression eigenvalues are not yet known to exist, the previous R04 max-min lemma ensures existence when the operator-norm defect is small enough. All these conditions hold eventually in Suzuki's nested local spaces.

The eigenvalues need not be nonnegative outside the leading cluster. L cannot be replaced by zero in general. For n=1, C=diag(lambda_1,L) and a line making angle theta with the first eigenvector achieves the upper bound (where its Ritz value stays positive). A three-dimensional diagonal C with eigenvalues lambda_1>lambda_2>0 and L<=0, and trial line rotated toward the second eigenvector, achieves the lower bound. Thus neither coefficient is generally improvable using only those endpoints. If lambda_n=lambda_(n+1), rotating within the degenerate eigenspace can produce positive D_n but zero F_n; the gap hypothesis matters. An individual interior Ritz error can vanish while D_n>0: C=diag(4,3,1), M=span(cos(theta)e_1+sin(theta)e_3,e_2), with cos(theta)^2>2/3. The second Ritz value remains 3 while the first decreases. The cumulative comparison is essential.

## 2. Application to the exact differentiation spectrum

In Suzuki's weighted sampling space use normalized coordinate vectors e_gamma, C diagonal with entries 1/gamma, lambda_j=1/gamma_j, L=-1/gamma_1. Distinct positive ordinates give a strict positive gap g_n=1/gamma_n-1/gamma_(n+1). No simplicity of the zeta zeros is required: a multiplicity changes the coordinate norm, not the number of inverse-operator eigenvectors.

Let
    D_n(a)=sum_(j<=n) dist(e_(gamma_j), M_a)^2,
    T_n(a)=sum_(j<=n) (t_(a,j)-gamma_j).

By nesting/density, or D01's explicit defect estimate, D_n(a)->0. For large a, R04 ensures mu_j>=lambda_j/2 for j<=n. Since mu_j<=lambda_j, reciprocation gives
    gamma_j^2 (lambda_j-mu_j)
      <= t_(a,j)-gamma_j
      <= 2 gamma_j^2 (lambda_j-mu_j).

All terms are nonnegative. Therefore for sufficiently large a,

    gamma_1^2 (1/gamma_n-1/gamma_(n+1)) D_n(a)
      <= T_n(a)
      <= (4 gamma_n^2/gamma_1) D_n(a).

For n=1 this is a two-sided bound on the first exact eigenvalue error itself. For general fixed n it gives order-equivalence between cumulative errors and the sum of actual squared coordinate approximation distances. Since all summands are nonnegative, the largest individual error among the first n is also order-equivalent to D_n(a). It does NOT identify the rate of each individual error. D01 controls D_n(a) from above; a lower bound for the best-approximation distance (not merely for one chosen trial vector) is needed to match it.

## 3. Dual formulation for D03

Let H=ell2(Gamma,m) with inner product linear in its first argument. Then for any target coordinate,

    dist(e_gamma,M_a)^2
      = sup_(0!=w in M_a^perp) m_gamma |w_gamma|^2 / ||w||_H^2,

with supremum zero if the complement is zero. This follows from the orthogonal residual and Cauchy–Schwarz, with equality attained by the residual when nonzero.

A vector w in H is in M_a^perp exactly when the distribution
    T_w(u)=sum_rho m_rho conjugate(w_rho) F[u](rho)
vanishes on C_c^infinity(-a,a). The sum is absolutely convergent for each Schwartz test u by Cauchy–Schwarz and the weighted zero counting bound; the same argument with Schwartz seminorms makes T_w tempered. The formula is a Fourier-series distribution with frequencies rho (signs fixed by F[u]=integral u(x)exp(i rho x)dx). Conversely the annihilation condition on test functions extends to their closed sample span by continuity. Therefore D03 can seek spectral-gap distributions with nonzero target coefficient and controlled weighted norm. Finding a vector orthogonal only to a finite discretization is insufficient. A lower bound on a specific truncation's error is also insufficient, because projection may improve on that witness.

A second possible approach is to exclude exact coordinate membership using the finite exponential type of the local Fourier transform, provided the number of distinct required zeros grows superlinearly. Multiplicity-counted Riemann–von Mangoldt alone does not imply this; a distinct-zero estimate or a suitable multiplicity bound is needed. This is a lead for D03, not an established quantitative estimate here.

## 4. Prior-art and status

The trace comparison is standard spectral approximation geometry. Targeted web search 2026-11-25 retrieved the abstracts of Knyazev–Argentati, Rayleigh–Ritz majorization error bounds with applications to FEM (https://arxiv.org/abs/math/0701784, DOI 10.1137/08072574X), and Argentati et al., Bounds on changes in Ritz values for a perturbed invariant subspace of a Hermitian matrix (https://arxiv.org/abs/math/0610498, DOI 10.1137/070684628). These establish the squared-principal-angle upper-bound mechanism. Related trace-gap bounds are familiar from PCA excess-risk theory: Reiss and Wahl, Non-asymptotic upper bounds for the reconstruction error of PCA (https://arxiv.org/abs/1609.03779), and the search excerpt of Lanthaler, JMLR 24 (2023), appendix A (https://www.jmlr.org/papers/volume24/23-0478/23-0478.pdf). Full texts of the latter were not inspected; no claim that the exact lemma is new. The proof above is self-contained apart from standard compact spectral and Ky Fan variational theorems. No numerical experiment or Lean check performed for this milestone. Its research value is the exact reduction of the arithmetic sharpness question to a dual approximation problem, not a novel general trace inequality.

Next: D03, attempt a genuine arithmetic lower-bound witness or document why the available approaches do not control the optimal distance.

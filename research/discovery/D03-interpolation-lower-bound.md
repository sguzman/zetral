# D03 — Strict spectral separation and interpolation dual witnesses

2026-11-25. Conditional human-readable candidate derivation; not independently reviewed or machine-checked, novelty unestablished. Same RH and Suzuki sampling/compression assumptions as v0.2. D03 obtains a positive lower bound at every fixed cutoff, including each individual eigenvalue, but does not establish a matching asymptotic lower rate.

## 1. Individual spectral lower comparison

D02 bounded cumulative spectral errors by the total leading-subspace defect. A stronger individual lower comparison is also possible; its defect involves only the corresponding eigenvector, not the whole leading space.

Let C be compact self-adjoint, with positive leading eigenvalues lambda_1 >= ... >= lambda_n > lambda_(n+1)>0, and assume lambda_n is simple. Let e_n be its unit eigenvector, M a closed subspace, P its projection, mu_n>0 the nth positive compression eigenvalue. Let Y be the span of the first n orthonormal compression eigenvectors. Choose a unit v in Y perpendicular to the first n-1 global eigenvectors; such a vector exists by dimension. Since its Rayleigh quotient is at least mu_n, the spectral decomposition on the orthogonal complement of the first n-1 eigenvectors gives

    mu_n <= <Cv,v>
          <= lambda_n |<v,e_n>|^2
               + lambda_(n+1)(1-|<v,e_n>|^2).

Because v belongs to M, |<v,e_n>| <= ||P e_n||, so

    lambda_n-mu_n >= (lambda_n-lambda_(n+1)) dist(e_n,M)^2.

The argument works even when the ambient operator has negative spectrum. It does not contradict D02's example in which an interior eigenvalue has no error while the cumulative defect is positive: in that example the corresponding individual eigenvector is already in the trial space. It does not imply the analogous lower bound involving the whole leading defect for an individual error.

In Suzuki's model each distinct ordinate labels a single unit coordinate even if the zero is multiple. Put delta_gamma(a)=dist(e_gamma,M_a), lambda_n=1/gamma_n. Since mu_n<=lambda_n and mu_n>0, reciprocation gives, for every finite a>0,

    t_(a,n)-gamma_n >= gamma_n^2 (1/gamma_n-1/gamma_(n+1)) delta_(gamma_n)(a)^2.   (1)

There is no large-a threshold in this lower estimate. The upper estimate from D01 still applies asymptotically. The gap factor is sharp in general for n=1: rotate the leading eigenvector towards the second eigenvector of a diagonal operator, and use the trial line as M. The inverse-eigenvalue comparison is equality. This abstract step is elementary min-max, not claimed original.

## 2. A finite interpolation functional that nearly annihilates the full local space

Fix a>0 and a target real ordinate gamma with multiplicity m. Suzuki arXiv:2610.32704v1, equation (2.4), supplies positive coercivity

    Q_W(u) >= kappa_a ||u||_2^2,   kappa_a>0,

where kappa_a may be any positive lower bound for the bottom of the ordinary L2 Weil-form operator A_a. We use coercivity, not an upper bound for its bottom. The actual bottom is positive under RH. By continuity this bound holds on the local form completion; every sample vector v in M_a has a representative u supported in [-a,a] with ||v||_H^2=Q_W(u). Its Fourier transform F is entire with

    |F(z)| <= sqrt(2a/kappa_a) exp(a |Im z|) ||v||_H.    (2)

This follows from Cauchy–Schwarz on the Fourier integral and is also stated in a slightly sharper form in Suzuki's proof of Proposition 2.1. The local F, not a global model-space representative, is used.

Choose R>0 and k distinct real ordinates rho_1,...,rho_k, none equal to gamma, with |rho_j-gamma|<=R. Define

    omega(z)=prod_(j=1..k)(z-rho_j),
    l_j=omega(gamma)/[(gamma-rho_j) omega'(rho_j)],
    W^2=1/m+sum_(j=1..k) |l_j|^2/m_(rho_j).

The complex Lagrange interpolation remainder is

    F(gamma)-sum_j l_j F(rho_j)
      = (1/(2 pi i)) integral_(|z-gamma|=3R)
           F(z) omega(gamma)/[(z-gamma) omega(z)] dz.

This follows directly from residues at gamma and the distinct nodes rho_j. On the contour, |omega(gamma)|<=R^k and |omega(z)|>=(2R)^k. The contour length 2 pi(3R) cancels the denominator factor |z-gamma|=3R. By (2),

    |F(gamma)-sum_j l_j F(rho_j)| <= E ||v||_H,
    E = sqrt(2a/kappa_a) exp(3aR) 2^(-k).              (3)

The estimate holds uniformly over the entire local space, not just a finite Galerkin subspace.

In H=ell2(Gamma,m), inner product linear in the first argument, let h have coordinate 1/m at gamma, coordinate -conjugate(l_j)/m_(rho_j) at rho_j, and zero elsewhere. The left side of (3) is |<v,h>|. Thus ||h||=W, <e_gamma,h>=1/sqrt(m), and ||P_a h||<=E by duality on M_a.

Set w=(I-P_a)h. This is an exact vector in M_a^perp (though its coordinates are not explicitly evaluated). Its norm is at most W, and

    |<e_gamma,w>| >= 1/sqrt(m)-E.

If E<1/sqrt(m), w is nonzero and has a nonzero target coefficient. D02's dual characterization now gives the finite lower bound

    delta_gamma(a)^2 >= (1/sqrt(m)-E)^2/W^2.             (4)

In particular if E<=1/(2 sqrt(m)),

    delta_gamma(a)^2 >= 1/[4(1+m sum_j |l_j|^2/m_(rho_j))].    (5)

The corresponding tempered distribution T_w of D02 annihilates every compact test in (-a,a) exactly. The finite vector h itself is only an almost-annihilator. A nonzero finite-support vector cannot be an exact annihilator: a finite exponential sum is entire in the time variable, and vanishing on an interval would make it identically zero; distinct frequencies imply all coefficients vanish. Projecting h is the essential exact correction, not solving a finite numerical nullspace problem.

## 3. Existence at every finite cutoff, without assuming simple zeros

The classical positive proportion of simple zeros under RH (Montgomery's 1973 corollary, at least two thirds asymptotically; only a positive proportion is needed) together with Riemann–von Mangoldt implies that the count of distinct real ordinates in |rho-gamma|<=R, excluding gamma, is bounded below by c R log R for all sufficiently large R, with c>0. This statement concerns distinct ordinates, so it is stronger than merely counting multiplicity. The argument uses all real ordinates under RH and permits an arbitrary multiplicity for the target.

For fixed a and gamma, choose all those distinct nodes as k(R). Then

    log E = (1/2) log(2a/kappa_a) + 3aR - k(R) log 2 -> -infinity.

Thus some finite R always satisfies E<=1/(2 sqrt(m)); W is finite since every node is distinct and different from the target. Equations (1) and (5) imply

    t_(a,n)-gamma_n >=
      gamma_n^2 (1/gamma_n-1/gamma_(n+1)) /
      [4(1+m_(gamma_n) sum_j |l_j|^2/m_(rho_j))] > 0.    (6)

This is a genuine strictly positive lower bound for each individual exact eigenvalue at every finite a, not just for the cumulative error or for a particular truncation. It is parameterized by finite interpolation nodes satisfying (3). A certified positive lower bound for kappa_a and rigorous zero/multiplicity data would suffice to evaluate it. It does not assert that those inputs are computationally available at all cutoffs. The chosen node set may be enormous.

Independent qualitative cross-check: if e_gamma belonged to M_a, its local entire Fourier representative would be nonzero at gamma and vanish at all other distinct ordinates. Jensen's formula at the center gamma bounds the number of its zeros in |z-gamma|<=R by O_a(R) (apply at radius 2R, using the exponential-type bound and nonzero central value). The lower count c R log R is incompatible with this. Therefore delta_gamma(a)>0. This also shows why a multiplicity-counting asymptotic alone would not justify strictness.

## 4. What remains unresolved

Neither (4) nor (6) gives a matching asymptotic lower bound in X=exp(2a). As a grows, the necessary R is affected by the local coercivity kappa_a, and the Lagrange coefficients may grow extremely quickly, especially for nearly coincident nodes. No quantitative asymptotic lower bound for kappa_a or uniform coefficient-growth estimate has been established here. Choosing a small eigenvalue of a finite Galerkin Gram matrix as kappa_a would reverse the required inequality: its minimum is an upper bound on the exact form infimum. Do not use it as a certified lower bound. Zhu's certified fixed-window result is relevant for one small window, not a uniform growing-a lower estimate. Thus the earlier upper bound's power and exponential scale remain unproved as optimal. This is a finite-parameter inequality and strictness result, not a matching rate.

A possible follow-on is to study the size of interpolation coefficients for carefully separated node sets, or derive projection-defect estimates by the reproducing kernel identity delta_gamma(a)^2=1-m J_a(gamma,gamma), where J_a is the local kernel evaluated at the target. The identity follows since the restriction to M_a of the weighted coordinate functional <v,e_gamma>=sqrt(m)F(gamma) has squared norm m J_a(gamma,gamma). Neither route is claimed solved here.

## 5. Source checks and prior art

- Suzuki, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1 : reopened primary HTML on 2026-11-25; section 2.2 equation (2.4), proof of Prop. 2.1, and local sampling/compression context support the coercivity and entire-function inputs. These are imported, not re-proved.
- J. B. Conrey, A. Ghosh and S. M. Gonek, Simple zeros of the Riemann zeta-function, Proc. London Math. Soc. 76 (1998), DOI 10.1112/S0024611598000306: publisher abstract retrieved, explicitly confirms Montgomery's classical conditional simple-zero result. Montgomery's primary paper was located at https://www-personal.umich.edu/~hlm/paircor1.pdf (search result only; full PDF not examined in this batch). X. Wu, Distinct zeros of the Riemann zeta-function, QJM 66 (2015), 759–771, DOI 10.1093/qmath/hav014: publisher abstract inspected, provides another established positive distinct proportion. No need to rely on newer claims about optimal proportions.
- NIST DLMF section 3.3, https://dlmf.nist.gov/3.3, search excerpt retrieved on contour remainder; the residue proof is supplied above. Related interpolation of exponential-type functions, https://dml.cz/handle/10338.dmlcz/134475 : abstract located, full text not checked.
- A. Poltoratski, Spectral gaps for sets and measures, arXiv:0908.2079, https://arxiv.org/abs/0908.2079 : abstract retrieved. Established spectral-gap/type theory is directly related to D02's dual formulation. We do not invoke a theorem from that work or claim the gap-distribution idea as new. Full specialized novelty comparison of (4)-(6) remains outstanding.
- X. Zhu, arXiv:2608.24827v2, https://arxiv.org/html/2608.24827v2 : abstract reopened, establishes a reported certified positive form lower bound at half-window 0.8; not a growing-window bound. Distinct operator/quantity from the differentiation eigenvalue.

No numerical experiment or formal verification executed for D03. The interpolation and variational ingredients are standard; the specific application to strict separation and a finite-parameter spectral lower bound is a candidate result, not an originality claim. D04 should consolidate D01–D03, note the missing asymptotic lower rate, and select the next productive research question without treating this finite bound as sharpness.

# HPS03 — Indexed ordinary converse via smooth endpoint localization

2026-11-25. AI-assisted candidate deduction, without RH. Uses TPH01's strong twisted limits, PBC01–03, WPR01's weighted marginals, HPS01's channel argument, and the inherited arithmetic form. No fresh literature retrieval, numerical execution, actual off-line zero, anomalous mode, independent proof verification or priority claim. The proof below supplies the dimension argument missing from the original FES01 packet transfer. It does not assert that the attainable arithmetic limit set has been computed.

## 1. Joint separated-carrier families and lower bound

A finite family of channels is realized along common windows a_l->infinity by real carriers omega_(r,l), r=1,...,m, such that each |omega_(r,l)|->infinity, every difference |omega_(r,l)-omega_(s,l)|->infinity for r!=s, the twisted measures converge to phi_r(r') exp(-r'/2) dr', and exp(-a_l)log(2+|omega_(r,l)|)->tau_r<infinity. Different costs are allowed. Define the positive gains of the family to be the multiset of positive numbers sigma_i(K_(phi_r))-tau_r over all its channels.

For fixed smooth endpoint profiles the proof of HPS01(1) applies to these arbitrary separated carriers: the normalized diagonal archimedean action approaches the corresponding scalar tau_r, the same-channel prime block converges strongly, other carrier profiles are weakly null after demodulation, and the pole vanishes. Thus the finite-channel Gram and scaled form matrices converge to the direct sum of the model Grams and forms. Ordinary finite-dimensional minmax, using smooth approximations of model eigenvectors, proves the lower bound
    liminf exp(-a_l) N_j(a_l) >= c
whenever the family has at least j gains strictly greater than c>0.

Let V_j be the supremum of such thresholds c over all finite jointly realized separated-carrier families (empty supremum zero). Then V_j<=S_j:=limsup exp(-a) N_j(a)<=1. We prove S_j<=V_j. All cutoffs and thresholds below are fixed before taking the relevant limits.

## 2. Uniform approximation of the bounded arithmetic part by smooth endpoint cutoffs

Use oriented endpoint coordinates in the doubled full-line Hilbert space H=L2(R) direct sum L2(R): the left component is f(-a+t) on 0<t<a, the right component f(a+s) on -a<s<0, and both zero extended. Denote this isometric embedding by U'_a. It is the previous endpoint isometry with the second coordinate reflected. The cross prime operator before compression is convolution by the finite positive measure mu_(a,0) of TPH01, from right to left, since s=t-r_n. The reverse block is its adjoint. Each cross compression has norm <=1+o(1), the same-half terms are o(1) in normalized norm, and the normalized pole has the fixed rank-two norm limit from PBC02.

We need control near t=0, not merely the large-endpoint-distance tail. In the previous positive-positive coordinates, let h(t)=exp(-t/2) and K_a be the cross prime block. WPR01's two-sided row marginals show K_a h/h<=1+o(1) uniformly. For 0<delta<1, the analogous column row factor with the output restricted to 0<t<delta is
    1/X sum_(X exp(-delta)<n<X) Lambda(n)
       <= 1-exp(-delta)+o(1), X=exp(2a-s)>=exp a,
uniformly over s in (0,a), by PNT at both endpoints. Endpoint atoms are immaterial a.e. The weighted Schur estimate with unequal row and column bounds (the same Cauchy-Schwarz proof as PBC01) gives
    limsup ||1_(0,delta) K_a|| <= sqrt(1-exp(-delta)).
The symmetric input bound is identical. The large-coordinate tail when either coordinate exceeds R is O(exp(-R/2)) by TPH01. The pole limit has small norm tails at both ends by the L2 tails of h.

Given epsilon>0, choose delta small and R large, and a fixed real smooth cutoff chi with 0<=chi<=1, supported strictly in (0,infinity) inside a bounded interval, equal one on [delta,R], with 1-chi supported in (0,delta) union (R,infinity). For example choose transitions within (delta/2,delta) and (R,R+1). In oriented coordinates use chi_L(t)=chi(t), chi_R(s)=chi(-s), zero outside their half-lines. Let C_a be the off-diagonal full-line convolution matrix with cross mu_(a,0) and adjoint reverse. Let C_pole be the fixed rank-two endpoint pole block in these oriented coordinates, extended by zero. Define on the whole doubled line
    B_a=chi_diag (C_a-C_pole) chi_diag.
For all sufficiently large a, its fixed compact supports lie within the physical two halves. The preceding estimates and PBC02 give
    ||exp(-a) U'_a (P_a-H_a) U'_a* - B_a|| <= epsilon   (1)
on the enlarged space, by first choosing delta,R appropriately, then taking a large. The prime full-line convolution norm is uniformly bounded by total measure mass, so ||B_a||<=C independently of a. In particular the range of B_a has fixed compact physical support. No claim that the *unmodulated* B_a has small operator norm is made.

The positive log metric w(t)=1+log(2+|t|) gives a full-line Fourier multiplier W. The ordinary archimedean form of f differs by a bounded constant times ||f||^2 from the sum of the W forms on the two oriented components. Here the split at the physical midpoint causes no unbounded error: on compact smooth physical f, its restrictions to each half, zero extended, have finite log energy by BV Fourier decay; the off-diagonal archimedean kernel between the halves is -k(u+v), u,v>0, with k(s)<=C/s. The Carleman Schur weight u^(-1/2) bounds that cross operator by C pi independently of a. The equality of the full archimedean quadratic form with the two half forms plus this cross term follows first by the digamma difference formula (or separation followed by the integrable cross bound) and alpha-w is bounded. The resulting two-sided norm inequality also applies to differences of smooth f and proves that the midpoint split extends continuously from the ordinary form core into the direct sum log-form domain. Translation of each half preserves its log form. Hence for every ordinary form vector,
    |exp(-a)q_a(f,f) - <(D_a-B_a) U'_a f,U'_a f>_form|
       <= (epsilon+O(exp(-a))) ||f||^2,                 (2)
where D_a is the diagonal full-line multiplier exp(-a)w(t) in each component. In this note D_a denotes this positive diagonal operator, not the off-diagonal model D_phi.

We use the enlarged self-adjoint operator L_a=D_a-B_a on the full doubled space for an upper bound on negative depths. At each fixed a, B_a is a bounded self-adjoint perturbation relatively compact with respect to D_a: chi_diag(D_a+I)^-1 is compact by a finite frequency truncation (its kernel is Hilbert-Schmidt) and the vanishing high-frequency multiplier tail, and B_a factors through this map on the right. Equivalently the compact Birman-Schwinger form for thresholds below zero gives finite negative spectral subspaces. The resolvent identity and compact perturbation of the essential spectrum, or this compact form argument, ensure all spectrum below zero is discrete with finite multiplicity and at most finitely many eigenvalues below any fixed negative threshold. Thus (2) transfers any j-dimensional ordinary negative subspace at normalized margin c to an actual j-dimensional negative spectral subspace of L_a with margin c-epsilon-o(1). We do not identify the rest of the enlarged spectrum with the physical one.

## 3. A uniform Fourier localization identity

Work in Fourier coordinates on H, using the unitary transform with the project's sign convention. D_a is then multiplication by exp(-a)w(t). Choose a real compact smooth function b on R with integral b(t)^2 dt=1, and for a band scale L>=1 and center xi define X_xi to be multiplication by b((t-xi)/L) on both components. Use center measure dxi/L. Exactly,
    int ||X_xi f||^2 dxi/L=||f||^2,
    int <D_a X_xi f,X_xi f>_form dxi/L=<D_a f,f>_form.
The latter follows by Tonelli. For the bounded B_a we have a uniform localization error
    |int <B_a X_xi f,X_xi f> dxi/L-<B_a f,f>|
        <= C_chi/L ||f||^2.                            (3)
Here is a direct proof, rather than an appeal to a band-dominated limit-operator theorem.

Multiplication by chi in physical coordinates is convolution by a Schwartz kernel in Fourier coordinates. If C_chi denotes such convolution, then
    [X_xi,C_chi]f(t)=int khat(v)
                   [b((t-xi)/L)-b((t-v-xi)/L)] f(t-v) dv
with the Fourier normalization absorbed into khat. In L2(t,xi,dxi/L), Minkowski and the translation bound on the fixed b give
    (int ||[X_xi,C_chi] f||^2 dxi/L)^(1/2)
      <= ||f|| int |khat(v)| min(2, |v| ||b'||_2/L) dv
      <= C_chi/L ||f||.
All two-component versions follow by finite sums. The full-line prime convolution C_a is diagonal (a bounded matrix-valued multiplier) in Fourier and commutes with X_xi; its norm is uniformly bounded. The product commutator for chi_diag C_a chi_diag and the preceding integrated bound therefore give the same O(1/L) estimate. For the cut-off pole, its Fourier kernel J(t,s) is a finite sum of products of Schwartz functions. The integrated Hilbert-Schmidt commutator bound follows from
    int |b((t-xi)/L)-b((s-xi)/L)|^2 dxi/L
         <= ||b'||_2^2 |t-s|^2/L^2
and int int |t-s|^2 |J(t,s)|^2 dtds<infinity. Thus the same integrated commutator estimate holds for B_a. Finally write the left difference of (3) as the integral of the commutator matrix elements against X_xi f (the terms with X_xi^2 integrate to the original form); Cauchy-Schwarz in xi and the exact Gram identity prove (3).

This establishes localization of the enlarged form without expanding the physical support or requiring a compact-support frequency projection on the original form domain. We enlarged the space only after controlling its discrepancy in (2).

## 4. Negative spectral subspace and local limits near chosen carriers

Assume S_j>0 and fix a target threshold c<S_j. Choose c<c_0<S_j and choose the approximation error epsilon in (2) sufficiently small that along some a_l->infinity realizing depths above c_0+epsilon, L_(a_l) has j eigenvalues <=-c_0. Fix the corresponding cutoff chi. Choose a small delta>0 with c_0-2delta>c and then L so large that C_chi/L<delta/2 in (3).

Take orthonormal eigenvectors f_(l,i), 1<=i<=j, of the enlarged operator with eigenvalues lambda_(l,i)<=-c_0. Their eigenvalues lie in a fixed compact negative interval because D_a>=0 and B_a is uniformly bounded. Pass to a subsequence so lambda_(l,i)->lambda_i<=-c_0. Let X_l be their span.

In Fourier coordinates these eigenvectors have uniformly bounded H1 norm. Indeed the eigen-equation is
    f_(l,i)(t) = [exp(-a_l)w(t)-lambda_(l,i)]^-1 (B_a_l f_(l,i))(t).
The vector B_a_l f_(l,i), in physical coordinates, has support in the fixed compact cutoffs and uniformly bounded L2 norm. Its Fourier transform has uniformly bounded first weak derivative (multiplication by the bounded physical coordinate). The reciprocal multiplier in the displayed equation has norm <=1/c_0 and Lipschitz bound <=C/c_0^2, since w is globally Lipschitz. The product rule in H1 gives the asserted uniform bound. Consequently every unit vector of X_l has a uniformly bounded Fourier H1 norm (with constant depending on j). Its translates in Fourier have local compactness on any fixed interval.

We explain the modulated model of the enlarged operator. In oriented physical coordinates common modulation M_omega=exp(i omega t) conjugates the cross convolution by the factor exp(-i omega r) in its measure. Compared to the physical twist mu_(a,omega) this lacks the scalar exp(2ia omega); these differ by a unit scalar and the corresponding self-adjoint blocks are unitarily equivalent by a constant diagonal endpoint phase. Along any chosen carrier sequence we may pass to a subsequence so that scalar converges, as well as the physical twisted measure. For divergent carriers with finite cost tau, TPH01's strong convergence (and its adjoint version) implies the modulated B_a tends strongly to a compact cut-off model B_infty=chi_diag D_phi' chi_diag, in oriented coordinates, where phi' differs from the actual attainable phi by only that unit phase. The fixed finite-rank pole vanishes strongly after conjugation by divergent modulation, since a modulated fixed vector is weakly null; for bounded carriers the prime and pole modulated limits coincide, giving zero residual. The orientation reflection is unitary and does not affect the model's singular values. In Fourier coordinates modulation translates the center; the Fourier convention changes the sign of the physical carrier corresponding to xi, which is harmless as we keep the actual sign when defining its attainable phase. On every bounded demodulated frequency interval, exp(-a)w(t+xi_l) tends uniformly to tau if the cost exp(-a)log(2+|xi_l|)->tau. This uses the log shift inequality in TPH01.

At any previously selected divergent carrier center xi_l of finite cost, translate each of the original enlarged eigenvectors f_(l,i) to that center. After a common subsequence their weak limits F_i exist in the full doubled Fourier space, with strong local convergence by the uniform H1 bound. The translated eigen-equations imply
    (tau I-B_infty) F_i=lambda_i F_i.                  (4)
Indeed test against compactly supported Fourier functions; the diagonal term converges locally uniformly, and the conjugated B_a has strong adjoint convergence, so one may pass to the weak limit in its matrix elements. Density gives the equality in L2. Thus all limits F_i lie in the finite-dimensional span Y of eigenvectors of B_infty with gain eigenvalue strictly greater than c_0-2delta (since nonzero F_i has gain -lambda_i>=c_0). Zero limits are permitted. This is the key dimension-control step absent from the original packet transfer.

## 5. Iterative extraction of enough separated channels

Start with no centers and no model spaces. Suppose finitely many pairwise diverging-difference centers have already been extracted, with cut-off model gain spaces Y_r above threshold c_0-2delta as in (4). Put d=sum dim Y_r. If d>=j stop.

Otherwise choose for each l a unit vector g_l in X_l orthogonal to the translates back to the original Fourier coordinates of every basis vector of every Y_r. There are at most d<j linear constraints, so this is possible even if those translated vectors are not exactly orthogonal. After taking a subsequence the coefficient vectors of g_l in the fixed j eigenbasis converge. Near each selected center, its translated weak limit is therefore a combination of the corresponding limits F_i in Y_r by (4). The imposed orthogonality makes this limit orthogonal to Y_r, hence zero. Uniform Fourier H1 bounds give strong local convergence to zero near each selected center. Consequently for any fixed radius the mass of g_l in the corresponding union of carrier bands tends to zero. By diagonal selection choose radii R_l->infinity slowly so the mass in the union of bands of radius R_l+L times the fixed support radius of b still tends to zero.

Use (3) on g_l: its localized packet forms have total <=-c_0+delta/2 because g_l belongs to X_l. The total packet mass with centers lying in the bands of radius R_l about the previous centers tends to zero, by the support of b and the preceding mass estimate. Each packet form is bounded below by -C times its mass since D_a>=0 and B_a is uniformly bounded. Therefore there must be a nonzero packet with center xi_l outside those bands and normalized Rayleigh quotient <=-c_0+delta. Otherwise the total packet form would be at least -(c_0-delta) minus a vanishing term, contradicting the total upper bound. For the initial step the same argument simply has no forbidden bands. This selection uses actual X_l vectors and does not count packets as additional dimensions.

Normalize this selected packet and translate its Fourier center to zero. Its Fourier support lies in a fixed bounded interval (depending on L,b), so it is uniformly bounded in H1 in physical coordinates. It is unit norm. Negative Rayleigh depth at least c_0-delta, together with B_a uniformly bounded, forces bounded carrier cost: on its frequency support the diagonal multiplier differs from exp(-a)log(2+|xi_l|) by O_L(exp(-a)). Extract the cost limit tau and a twisted model along a subsequence. The normalized demodulated packet has weak limit G and strong local convergence in physical coordinates by its uniform physical H1 bound. In the expectation of the cut-off B_a this suffices: both input/output have the fixed compact support of chi, so replace the moving packet by its local strong limit there and use the strong modulated operator convergence. For bounded centers the modulated residual limit is zero, impossible at the positive depth. Therefore the new center diverges in absolute value, and its distance from all previous centers diverges by construction. Its limit satisfies
    <B_infty G,G>-tau >= c_0-delta.
The diagonal cost uses the full unit packet mass, not ||G||^2, and ||G||<=1. This implies a positive model eigenvalue of B_infty with gain >=c_0-delta, so the new cut-off gain space Y has dimension at least one above the threshold c_0-2delta. Extract also the original eigenvector limits at this center as in section 4, to prepare the next step. Subsequence restrictions preserve all previous model limits and separation conditions.

Each extraction increases d by at least one. Thus after at most j steps we have a finite family of jointly realized separated divergent carriers with sum dim Y_r>=j. We do not require that the normalized packet limits themselves form an orthogonal family within one carrier; the count comes from the full finite-dimensional model gain spaces.

## 6. Transfer to the uncut models and equality

For each channel the cut-off model is B_infty=chi_diag D_phi' chi_diag with 0<=chi_diag<=1. A positive threshold subspace on which B_infty has Rayleigh quotient >tau+c_0-2delta maps injectively by chi_diag into the original boundary Hilbert space, and on that image the D_phi' Rayleigh quotient is >tau+c_0-2delta: the numerator is the original cut-off numerator and the image norm is no larger than the original norm. Ordinary minmax for the compact self-adjoint D_phi' then shows that its number of eigenvalues above this threshold is at least dim Y. The phase scalar and coordinate reflection do not change those positive eigenvalues, which are the singular values of K_phi for the actual physical twisted limit. Thus the constructed family has at least j gains strictly above c_0-2delta>c.

We have proved V_j>=c for every c<S_j, with epsilon and delta selected strictly inside that margin. Together with section 1 this yields the candidate exact indexed characterization:
    limsup_(a->infinity) exp(-a) N_j(a)
       = sup_{finite jointly realized separated-carrier families}
             sup{c>0 : sum_r #{i: sigma_i(K_phi_r)>tau_r+c}>=j}.     (5)
An empty supremum is zero. The supremum is over actual arithmetic phase limits, not arbitrary measurable densities, and the families use common windows with pairwise divergent carrier differences. Formula (5) concerns fixed j; no uniform growing-index estimate or evaluated coefficient is claimed. A parity-resolved upper counterpart would require a symmetric version of the extraction and accounting of the zero-carrier cluster; no such counterpart is asserted here. For j=1 the equality agrees with TPH02. At saturation HPS02 supplies the stronger common-sequence conclusion including both parities.

The proof uses only fixed smooth cutoff approximation, elementary integrated Fourier localization, local Sobolev compactness, and actual enlarged spectral subspace dimension. It avoids the known FES01 overcounting issue. This is a substantial candidate requiring independent scrutiny, especially the domain split and modulated enlarged-model convergence; no independent verification or novelty claim. README unchanged.

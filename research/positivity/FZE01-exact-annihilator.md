# FZE01 — Exact finite-zero annihilator and residual-kernel depth comparison

2026-11-25. AI-assisted candidate deduction without RH. Uses PPE03's explicit interpolation construction and the paired Weil form. No actual nonreal zero data, numerical computation, independent verification or priority claim. The filter is existential and depends on a finite selected zero set; it is not a zero-independent arithmetic solver.

Let F be a fixed finite collection of distinct nonreal conjugate pairs, including both signed ordinates in each reflection quartet, with their full multiplicities. Let Z_F be the corresponding node set. For each a define
    q_a=q_(F,a)+q_(rem,a),
where q_F is the finite paired contribution at Z_F and q_rem is the original form with precisely those terms removed. Since finite point evaluation is ordinary-L2 bounded on finite support, q_F is a bounded finite-rank Hermitian form. Consequently q_rem is closed and semibounded on the same log-form domain V_a, has compact resolvent by the compact inclusion of V_a, and preserves reflection. The remainder form is the same global paired expression on compact tests when a changes, so its negative depths are nondecreasing by domain inclusion.

Assume all nonreal remaining nodes satisfy |Im z|<=b, 0<=b<=1/2. No uniform unweighted local off-line density assumption. Define
    K_(F,a)={f in L2(-a,a): Ff(z)=0 for every z in Z_F}.
It is a closed ordinary subspace, invariant under reflection. Its intersection with V_a is form-closed and dense in K_(F,a): the evaluation map at the finite distinct nodes is surjective on C_c^infty(-a,a), since a linear dependence of its functionals would give a finite linear combination of distinct exponentials vanishing on an open interval, impossible by differentiating and the Vandermonde determinant. Pick any finite smooth right inverse at this fixed a. Approximation of a kernel vector by compact smooth tests, followed by subtracting this right inverse applied to their evaluation error, gives ordinary-L2 density. We do not yet claim this right inverse is uniformly controlled as a grows; FZE02 supplies that.

Thus the restriction of q_rem to the kernel is also a closed semibounded compact-resolvent form on that closed subspace. Write N_(rem,j)(a) and N_(ker,j)(a) for the respective negative magnitudes padded by zero, and use additional parity subscripts when restricting to a sector.

## 1. Compact real-even annihilator

Use the base real odd multiplier m_0 from PPE03, with |m_0(t)|<1, m_0(t)->+/-1 at real infinities, compact convolution distribution support radius <=1, and two-sided polynomial real-axis margin 1-|m_0(t)| comparable to (1+|t|)^-3. Start now from the even real-entire function
    v_0(z)=m_0(z)^2.
Its inverse Fourier distribution has support in [-2,2] by convolution of compactly supported distributions. Its real values lie in [0,1), tend to one at both infinities, and its margin 1-v_0(t)=(1-|m_0(t)|)(1+|m_0(t)|) is likewise comparable to (1+|t|)^-3. On the strip |Im z|<=1/2, 1-v_0(z)=O((1+|Re z|)^-3) by PPE03.

Prescribe the finite correction data d_j=-v_0(z_j) at z_j in Z_F. These data are real-entire symmetric and EVEN under reflection. Use the same cardinal-polynomial and shifted smooth-transform interpolation as in PPE03:
    C_L(z)=sum_j d_j L_j(z) H(z)/H(z_j)
                         exp[-i sign(Im z_j)L(z-z_j)].
Here L_j are Lagrange cardinal polynomials on the distinct nodes, H is a fixed real-even compact smooth Fourier transform nonzero on the finite set, and L is a positive shift parameter. The proof in PPE03 gives
    sup_(t real) (1+|t|)^3 |C_L(t)| <= C_F exp(-L d_min),
where d_min>0 is the smallest absolute imaginary deviation of a selected node. Each term has compact Fourier distribution support because polynomial multiplication differentiates the smooth bump and the exponential shifts it. Symmetrize first by conjugation and then by EVEN reflection, using a plus sign in the latter average. This preserves the interpolation data and the same bound on the real axis. For an empty selected set no correction is needed.

Choose L sufficiently large that the weighted sup error is less than half the lower margin of v_0. The resulting real-even entire function v=v_0+C_even then has
    v(z)=0 for z in Z_F,
    |v(t)|<=1 for real t,
    v(t)->1 as |t|->infinity,
    |1-v(z)^2|<=C_F (1+|Re z|)^-3, |Im z|<=1/2.        (1)
The contraction follows from |v_0(t)+C_even(t)|<=v_0(t)+|C_even(t)|<=1; even if v becomes negative at some real points this bound remains valid. The strip estimate follows from the polynomial base decay and rapid strip decay of the fixed smooth corrections. Let H_F be its finite convolution support radius, at most the larger of 2 and L plus the bump radius. It depends on the exact finite nodes, not on a.

Define T_F by the multiplier v on Fourier transforms. The compact convolution, real-axis contraction and analytic nontriviality imply exactly as in PPE02 that T_F is injective on L2, preserves parity, contracts both L2 and log energy, and maps V_a continuously into V_(a+H_F). For smooth tests the Fourier-Laplace identity F(T_F f)(z)=v(z)Ff(z) is exact; it extends to the support-constrained form domain by log approximation and continuity of point evaluation in L2 on both fixed finite support intervals. In particular
    T_F(V_a) subset V_(a+H_F) intersect K_(F,a+H_F).    (2)

## 2. Uniform residual-form comparison

On smooth tests the paired form of the remainder yields
    q_(rem,a+H_F)(T_F f,T_F f)-q_(rem,a)(f,f)
      =sum_(z notin Z_F) m_z [v(z)^2-1] Ff(z)conj(Ff(conj z)).
The real-ordinate terms are nonpositive, as v is real on R and |v|<=1. For nonreal remaining nodes, (1), classical local counting and the point-evaluation bound I_a(b) from PPE02 give
    q_(rem,a+H_F)(T_F f,T_F f)
          <= q_(rem,a)(f,f)+E_F(a)||f||^2,
    E_F(a)=C_F I_a(b).                                  (3)
If b=0 no nonreal terms remain and E_F(a)=0 may be used exactly. If b>0 this is O_F,b(exp(2ba)). The difference is absolutely bounded on ordinary L2 by the strip deficit, including real terms, so (3) extends to the closed domain by density and contraction. The omitted finite terms vanish on T_F f, hence its full-form value equals its remainder-form value as well.

Applying T_F to an actual j-dimensional negative trial subspace of the remainder, using injectivity and norm contraction, proves the quantitative comparison
    N_(rem,j)(a) >= N_(ker,j)(a),
    N_(ker,j)(a+H_F) >= (N_(rem,j)(a)-E_F(a))_+.         (4)
All inequalities hold separately in either parity too. The first uses the subspace inclusion; the second has no reduction in j despite imposing all finite fast evaluations exactly. Also N_(full,j)(a+H_F) >= N_(ker,j)(a+H_F) since the two forms agree on the kernel. No reverse inequality for the full spectrum is asserted here, because genuine fast-zero modes may add their own negative directions.

For each fixed j, the remainder and its fast-kernel restriction thus have the same limsup exponential growth rate whenever either exceeds 2b; the same holds for liminf rates with that strict margin, and in each parity. This is a consequence of the constant support expansion and negligible additive error at such rates. At the boundary rate 2b the error need not be negligible, and no claim of same-window prefactor equality follows. At b=0 the remainder is nonnegative anyway, consistent with the comparison.

FZE01 complete as candidate: exact compact annihilation of all selected fast evaluations with no negative-dimension cost at the larger window. FZE02 will construct uniformly controlled smooth dual evaluation profiles and derive the finite-block inertia reduction for the full form. No observed nonreal zero, RH proof, independent review or numerical result. README unchanged.

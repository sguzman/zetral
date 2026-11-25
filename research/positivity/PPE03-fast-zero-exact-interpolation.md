# PPE03 — Exact interpolation at finitely many fast zeros without dimension loss

2026-11-25. AI-assisted candidate deduction without RH. Uses PPE02's compact odd multiplier principle, paired Weil form, classical local counting and reflection symmetry. No actual off-line zero data, numerical spectrum, independent verification or priority claim. The construction is existential and uses hypothetical exact coordinates of a finite fast set; it is not an arithmetic-only computable filter for unknown zeros.

## 1. Why the ordinary fast-pair constraints are insufficient

The constraint Ff(z)=Ff(conj z) removes the negative direction of the corresponding conjugate pair in the original form. For a general real-entire multiplier m, multiplication of these two evaluations by m(z) and conj(m(z)) does not preserve this equality. The earlier frequency partition has this same defect. A crude alternative is to impose Ff(z)=0 on one member of each fast pair; in a parity sector reflection makes one such constraint per quartet sufficient to kill its whole paired contribution. But that spends dimensions.

Here we construct a compactly supported, real-odd entire multiplier m with |m(t)|<=1 on R and m(z)^2=1 exactly on a given finite set of nonreal ordinates, invariant under z->-z and conjugation. Then its parity-transfer form difference vanishes on these terms for every input f, with no additional constraint or dimension cost.

## 2. A base sign multiplier with an explicit polynomial-size real-axis margin

Use the entire even function
    k_0(z)=c (sin(z/4)/(z/4))^4,
with the removable value at zero, and c>0 chosen so int_R k_0(t)dt=1. On the real axis k_0 is nonnegative and integrable; on every fixed horizontal strip it is O((1+|u|)^-4). Put
    m_0(z)=2 int_0^z k_0(w)dw.
Then m_0 is real-entire odd, and on real t its absolute value is strictly below one, with limits +/-1 at +/-infinity. More importantly there are fixed positive constants c_-,c_+ such that
    c_-(1+|t|)^-3 <= 1-|m_0(t)| <= c_+(1+|t|)^-3.     (1)
For t>=0 the deficit is exactly 2 int_t^infinity k_0(s)ds. The upper bound follows from s^-4. For t sufficiently large, integrate over [t,2t], where s^-4>=(2t)^-4 and sin^4(s/4) has a positive mean on each full period, with total integral >=c' t. The bounded-t interval has a positive minimum deficit by continuity. Oddness gives negative t. On the complex strip |Im z|<=1/2, integration along the vertical segment and the k_0 decay similarly give
    |1-m_0(z)^2|<=C (1+|Re z|)^-3.
The base is compactly supported in the distribution-convolution sense: sinc(z/4) is the Fourier-Laplace transform of a normalized box on [-1/4,1/4]. Its fourth power is the transform of the fourfold convolution, a real even compactly supported Lipschitz function A_0 on [-1,1]. Multiplying by c fixes the normalization. The inverse transform of the primitive m_0 is (2c/i) pv[A_0(x)/x], as differentiation of its transform gives 2 k_0(z), and the value at zero vanishes by oddness. Thus its support radius is at most 1. This uses only a principal value distribution, not a formal pointwise convolution at its singularity.

## 3. Exponentially small real-axis interpolation corrections

Let Z_f be the finite set of distinct nonreal ordinate nodes to be corrected, invariant under reflection and conjugation. Assume no node has Re z=0, as is true for nontrivial zeta ordinates by the elementary real-axis eta argument in NIR03. For each z_j in Z_f prescribe
    d_j=sign(Re z_j)-m_0(z_j).
These targets obey conjugation symmetry and odd reflection. If the set is empty the base multiplier already suffices.

Choose a fixed real even compact smooth bump with integral one, with support so small that its Fourier-Laplace transform H satisfies H(z_j)!=0 at all the finitely many nodes: shrinking a normalized bump to the origin makes its transforms tend to one at each fixed node by dominated convergence. Let L_j(z) be the ordinary Lagrange cardinal polynomial on Z_f, equal to one at z_j and zero at all other nodes.

For L>=0 define the entire function
    C_L(z)=sum_j d_j L_j(z) H(z)/H(z_j)
                  exp[-i sign(Im z_j) L (z-z_j)].
At z_j it has the exact prescribed value d_j. For real t the absolute value of the last exponential is exp(-L |Im z_j|). Since each L_j H decays faster than any inverse power on R, we get
    sup_(t real) (1+|t|)^3 |C_L(t)| <= C_Z exp(-L d_min),
    d_min=min_j |Im z_j|>0.                             (2)
All constants depend on the fixed finite node set and bump, not L. Each term is the transform of a compact smooth function or distribution: the polynomial means derivatives of the bump and the exponential means a translation by at most L, plus a constant scalar. Thus the support radius of the sum is at most L plus the bump radius.

Symmetrize first for reality C_real(z)=[C_L(z)+conj(C_L(conj z))]/2 and then oddness C_odd(z)=[C_real(z)-C_real(-z)]/2. The exact interpolation data are preserved by both symmetries, because the prescribed values have those symmetries. The real-axis bound (2) is preserved as well. Choose a fixed L sufficiently large that the right side of (2) is <=c_-/2, using (1). Then
    m_f(z)=m_0(z)+C_odd(z)
is real-entire and odd, with
    |m_f(t)| <= |m_0(t)|+(1-|m_0(t)|)/2 <=1, t real,
    m_f(z_j)=sign(Re z_j), z_j in Z_f.
It tends to +/-1 at the corresponding real infinities and is therefore not identically zero. Its real zero set is discrete and null, so the associated real-axis Fourier multiplier is injective on L2. Its convolution distribution has some finite support radius H_f=max(1,L+bump radius). This radius can be very large and depends on the fast nodes; no uniform bound over zero sets is claimed.

For this now FIXED multiplier, the correction C_odd has rapid inverse-power decay on |Im z|<=1/2 by the compact smooth bump's Fourier decay there; the finite exponential shifts change constants but not decay in Re z. Together with the base estimate,
    |1-m_f(z)^2| <= C_f (1+|Re z|)^-3, |Im z|<=1/2.    (3)
Thus the local counting bound makes the multiplicity-weighted deficit sum finite, as in PPE02. The entire construction is exact and algebraic/analytic; no numerical fitting at unknown zeta nodes is claimed.

## 4. Improved ordinary parity transfer

Fix b in [0,1/2] such that only finitely many distinct nonreal conjugate pairs have deviation d>b. Take their complete reflection/conjugation invariant node set as Z_f. Let T_f be convolution by the just constructed odd multiplier m_f. It contracts L2 and log energy and maps V_a into V_(a+H_f), injectively, flipping parity. These follow by the same Fourier and form-core argument as PPE02; no assumptions on the actual input's zero samples or carrier concentration.

The paired identity gives exactly
    q_(a+H_f)(T_f f,T_f f)-q_a(f,f)
        =sum_z m_z (m_f(z)^2-1) Ff(z)conj(Ff(conj z)).
The terms at Z_f vanish by interpolation. For real z the contribution is NONPOSITIVE, since m_f(z)^2<=1 is real and the product is |Ff(z)|^2. Discard those terms for an upper bound. The remaining nonreal terms have |Im z|<=b, and (3) and the evaluation bound of PPE02 give
    q_(a+H_f)(T_f f,T_f f) <= q_a(f,f)+C_f I_a(b)||f||^2. (4)
If b=0 the remaining nonreal set is empty and the error on the right can be taken EXACTLY zero. The difference series is ordinary-norm absolutely bounded for fixed a and extends by log-form density, as before. In particular this comparison does not require a uniform bound on unweighted off-line local density.

Hence for all a>=1 and all j,
    N_(opposite parity,j)(a+H_f)
        >= (N_(parity,j)(a)-C_f I_a(b))_+,               (5)
with zero error when b=0. The entire dimension is transferred because T_f is injective and norm-contracting. The count of fast pairs does not reduce the index. The full odd/even ordering comparison (6) of PPE02 follows with the same error and enlargement. For b>0 the error is O_f(exp(2ba)), without an a-polynomial factor, by I_a(b)<=exp(2ba)/(2b).

Define B_tail=lim_(T->infinity) sup_{z: |Re z|>=T}|Im z|, where the sup is zero when there are no nonreal zeros in the tail. It is well defined by monotonicity and lies in [0,1/2]. For every b>B_tail with b<=1/2 there are finitely many faster nodes (bounded real-ordinate range and discreteness). Thus any exponential limsup rate strictly above 2 B_tail for any of the four fixed-index quantities in PPE02 forces equality of their rates: choose b with 2b below that rate, apply (5) at its fixed enlargement, and use the same ordering and window-shift argument. The same statement holds for liminf rates strictly above 2 B_tail. If B_tail=1/2 the claim above threshold is vacuous by the coarse bound. When all nonreal pairs are finite, b=0 gives the exact monotone comparison without additive error after a fixed enlargement. It is compatible with differing oscillatory same-window parity prefactors, since the fixed enlargement cannot be removed from this argument.

This improves the earlier threshold 2B to the tail deviation threshold and removes the finite-fast dimension loss completely. It also explains the limitation: the filter depends on the finite fast set, and its support radius can grow with that set. We do not infer a uniform h(a)->0 from this interpolation construction, or equality of same-window prefactors below exp(a).

PPE03 complete as a candidate: compact real-odd contraction with exact finite-fast interpolation, no dimension loss, sharper tail-threshold parity rate comparison. PPE04 should audit these estimates and explore whether the same construction gives useful non-parity comparisons of ordinary spectral rates to forms with a finite set of zero pairs removed. No actual nonreal zero or RH proof. README unchanged.

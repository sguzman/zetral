# Campaign XCV — Theta differential pencil and sesquilinear realization

Date opened: 2026-11-27. Status: ACTIVE.

## Precise question

Can Hedenmalm's theta-based boundary-value pencil be realized as a genuine
self-adjoint operator pair in a positive Hilbert space without defining the
space from the zeta zeros? In particular, does the natural gauge-weighted
space make the pair symmetric, and what exact domain, kernel quotient,
completeness and spectral-correspondence conditions remain?

## Literature and evidence

Primary source: Hedenmalm, *Spectral interpretation of Riemann zeta zeros*,
arXiv:2606.17494v1 (2026-06-16), §§2.2–4.2. The Mellin identity represents
`Xi(alpha)` as the transform of the positive theta-derived kernel. The paper
sets `D^x f=(t/i)f'`, `L_phi f=D^x f+f D^x phi`, and proves a boundary-value
solution exists precisely at zeros of `Xi`, including complex parameters in
the critical strip. It then explicitly leaves the construction of a suitable
sesquilinear structure open. Its `H_finite` is defined as the finite span of
functions indexed by the zeros themselves; consequently that space is
zero-dependent as currently formulated.

The proposed `L_phi` is gauge-conjugate to dilation differentiation. In
logarithmic coordinate `x=log t`, put `D=-i d/dx` and
`phi(x)=phi_00(e^x)`. Then `L=e^(-phi) D e^(phi)`. The natural weight
`H_2=L^2(R,e^(2phi) dx)` makes `L` unitarily equivalent to `D`. It does not
automatically make the pair `(L D,L)` symmetric in the paper's seminorm
`<u,v>_1=<Lu,Lv>_2`.

## HP-03.1 — Natural-weight formal symmetry test

On compactly supported smooth functions, the unitary `U f=e^phi f` maps
`L` to `D` and `D` to `A=D-Dphi`. Hedenmalm's symmetry identity becomes

    <D A g, D h> = <D g, D A h>.

For the standard `L^2(dx)` inner product and formal self-adjoint `D`, this
requires

    A* D^2 = D^2 A.

Since `V=Dphi=-i phi'` is imaginary-valued, `A=D-V` and `A*=D+V`; hence the
difference is

    A*D^2-D^2A = V D^2 + D^2 V.

Its second-order principal coefficient is `2V`, nonzero wherever `phi'` is
nonzero. The source's theta asymptotics show `phi` is nonconstant, so the
identity fails as a differential-operator identity on `C_c^infinity(R)`.
This rules out the most direct formal local realization with that core. It
does **not** rule out Hedenmalm's identity restricted only to `H_finite`, since
density/core inclusion of that zero-defined space has not been established.
No other positive weight or nonlocal inner product has been excluded.

## HP-03.2 — Classification of positive local weights on a test core

The calculation extends to any strictly positive smooth local density
`rho(x) dx`. Put `s=(1/2)log rho`, so multiplication by `e^s` is unitary
from the weighted space to ordinary `L²(dx)`. Under this map,

    L -> B=D-iq,       D -> A=D+i s',       q=phi'-s'.

The pair identity on `C_c^infinity` is equivalent to
`A* B* B = B* B A`. Since

    B*B = D² + q²-q',

the difference of the two sides is

    -i [ (q²-q')' + s'(D²+q²-q') + (D²+q²-q')s' ].

The coefficient of `D²` in this differential expression is `2s'`; hence
formal symmetry forces `s'=0`, so the density must be constant. With
`s'=0`, it further requires `(phi'^2-phi'')'=0`, or equivalently that
`phi'^2-phi''` be constant. The theta series and its differentiated
large-`t` asymptotics give, for `x=log t -> +infinity`,
`phi'(x)~2 pi e^(2x)` and `phi''(x)~4 pi e^(2x)`, so
`phi'^2-phi''~4 pi^2 e^(4x)` is not constant. Thus no strictly positive
smooth local `L²(rho dx)` weight makes the pair formally symmetric on the
common compactly supported smooth core.

This is a formal no-go for that local-weight/test-core class, not a no-go for
arbitrary nonlocal Hilbert metrics or for the identity restricted to
`H_finite`. Domain boundary conditions can change identities on a smaller
domain, but cannot make a differential identity hold on all compact tests if
that core is included. The derivation is manual and needs independent
operator review; no numerical work or Lean formalization was used.

## HP-03.3 — Geometric multiplicity of the boundary problem

The reduction in the source's proof is
`L_phi(Du+alpha u)=0`, hence
`Du+alpha u=C exp(-phi)`. This is a first-order inhomogeneous equation.
For real `alpha`, the condition at `0+` fixes the homogeneous integration
constant and the condition at infinity imposes `C Xi(alpha)=0`; the complex
variant uses weighted endpoint conditions. In both theorems the solution is
unique up to scalar at each zero location, independently of the analytic
order of that zero. The equation detects the
zero set, but the proof does not encode its multiplicity in eigenspace
dimension. Hedenmalm himself notes that uniqueness of the eigenfunction lends
weak support to simplicity (Remark 3.3.2(a)); this is not a proof of
simplicity. Exact spectral multiplicity would require either a simplicity
input or an augmented construction. This is a conditional structural
limitation, not a claim that any zeta zero is multiple and not a proof that
the analytic pencil has no other notion of algebraic multiplicity.

## HP-03.4 — Closability and kernel of the natural gauge form

In `H_2=L²(e^(2phi)dx)`, the map `Uu=e^phi u` is unitary and
`U L U^(-1)=D=-i d/dx`. The form

    q[u]=||L u||_(H_2)^2

therefore becomes `q[g]=||Dg||_(L²)^2` with form domain `H¹(R)`. It is a
closed nonnegative form because `q[g]+||g||²` is the usual `H¹` norm; its
associated self-adjoint operator is `D²=-d²/dx²`. The form has trivial kernel
inside `H_2`: `Dg=0` forces `g` constant, and the only constant in
`L²(R,dx)` is zero. The formal vector `e^(-phi)` is not in `H_2`, since its
weighted squared norm is `integral_R 1 dx=+infinity`.

This resolves closability for the natural gauge choice but does not solve the
zeta pencil: the induced comparison operator is the free Laplacian, and
HP-03.1 shows `(L D,L)` is not symmetric in this form on the test core. The
source's zero-defined `H_finite` and its null-vector discussion concern a
different, not-yet-specified ambient domain. No spectral correspondence
follows from this form calculation.

## HP-03.5 — Kernel-vector domain obstruction for arbitrary positive metrics

Let `k=e^(-phi)`, so `Lk=0`. Suppose `H_2` has a positive-definite inner
product and the pair identity

    <L D u,L v>_2 = <L u,L D v>_2

is required for `u=k` and `v=Dk`, with `k,Dk,D²k` in the operator domain
and the positive `H_2` realization faithfully representing nonzero functions.
Then the identity gives

    ||L Dk||_2² = <Lk,L D²k>_2 = 0.

But direct calculation with `D=-i d/dx` and `L=D-i phi'` gives
`Dk=i phi' k` and `L Dk=phi'' k`. The theta asymptotics imply
`phi''` is not identically zero, so `L Dk` is a nonzero function, a
contradiction. Thus no choice of positive (including nonlocal) `H_2` metric
can satisfy the pair identity on a domain containing these three vectors.

This is a domain obstruction, not a universal no-go: the source defines
`H_finite` from zero-indexed eigenfunctions, and it is not known here whether
that smaller space contains or approximates `k,Dk,D²k` in the relevant graph
topology. Any construction that evades this lemma must make that domain
exclusion explicit and still establish density, closability and full spectral
correspondence. The argument is an exact manual calculation; no Lean proof
was used.

## HP-03.6 — The zero-generated span evades the pointwise kernel test

For a zero `Xi(alpha)=0`, the source's formula in `x=log t` is

    u_alpha(x)=e^(-i alpha x) integral_(-infinity)^x e^(i alpha y)k(y)dy.

Using the full Mellin integral `Xi(alpha)=0` rewrites this as the negative
upper tail. Hence

    u_alpha(x)/k(x)
      = - integral_0^infinity e^(i alpha r)
             exp(-(phi(x+r)-phi(x))) dr.

The theta asymptotics imply `phi''(x)>0` eventually and `phi'(x)->infinity`.
For `alpha` fixed, convexity and `|e^(i alpha r)|<=e^(|Im alpha|r)` give,
for large `x`,

    |u_alpha(x)/k(x)| <= 1/(phi'(x)-|Im alpha|) -> 0.

Every finite linear combination in `H_finite` therefore has ratio to `k`
tending to zero. Meanwhile `k/k=1`, `(Dk)/k=i phi'` is unbounded, and
`(D²k)/k=phi''-phi'^2` is unbounded. Thus none of the three vectors used in
HP-03.5 lies in the literal finite span. This makes the domain escape real,
not merely hypothetical, and explains why HP-03.5 does not directly rule out
Hedenmalm's proposed restricted identity.

It does not show `H_finite` is dense, closed, or a core in any zero-independent
Hilbert space, nor that its completion retains the pair identity. Those are
the next tests. This is a source-based manual estimate, not a novelty claim.

## HP-03.7 — The similarity metric does not factor through `L`

In the gauge variable `g=e^phi u`, the differential part is
`A=e^phi D e^(-phi)`. The transported metric
`||g||_M²=integral e^(-2phi)|g|² dx` makes `A` formally equivalent to the
self-adjoint `D`. But Hedenmalm's first form must factor through `Lu`, which
becomes `Dg`; it therefore annihilates constants. The transported metric does
not: the constant function has finite, strictly positive `M`-norm because
`e^(-2phi)` is integrable. Thus it cannot be written as
`<Dg,Dh>_(H_2)` on a domain containing constants.

Subtracting the rank-one projection onto constants produces a semidefinite
quotient form, but `A1=i phi'` is nonconstant, so `A` does not descend to that
quotient. This natural similarity-based nonlocal candidate therefore fails
the required factorization/domain invariance. It is another restricted
negative result, not a no-go for every nonlocal metric or for the source's
zero-defined space.

## Falsification and next designs

1. Independently re-derive the boundary-value/zero correspondence, including
   complex parameters, endpoint conditions and multiplicities; separate this
   from a spectral theorem.
2. **Completed as HP-03.2:** all positive smooth local weights fail formal
   pair symmetry on the common compactly supported smooth core. Extend this
   audit only if the candidate domain does not contain that core; in that case
   compute the exact boundary form on the proposed domain.
3. **Completed for the natural gauge space as HP-03.4:** the graph form is
   closed and its kernel is trivial because `e^(-phi)` is excluded from
   `H_2`. Determine whether any zero-independent domain containing the
   source's eigenfunctions can also accommodate the formal null vector and
   yield a positive quotient.
4. Clarify the boundary problem's multiplicity notion and whether a
   self-adjoint realization can match analytic zero multiplicity without
   assuming simplicity.
5. **HP-03.5–.7:** the literal finite span excludes the kernel test vectors
   pointwise, while the simple transported similarity metric fails to factor
   through `L`. Determine whether that zero-defined domain is dense and can
   be completed with a closable pair in a zero-independent topology.
6. Seek a Mellin/Fourier or de Branges representation in which the pair
   identity becomes an explicit positive kernel identity. Check whether its
   construction imports the zero set or RH.
7. Search prior literature on weighted dilation operators, Sturm–Liouville
   pencils, generalized self-adjoint operator pairs and the exact theta
   kernel before any novelty statement.

## Expected information gain

Either obtain an explicit positive space/domain and genuine spectral
correspondence, or rule out natural local realizations and sharpen the exact
remaining functional-analytic problem. This route is analytically distinct
from the finite Prime–Weil matrices and the normalized Clark endpoint models.

## Acceptance and verification

Acceptance requires a precise densely defined operator pair (or a rigorous
no-go for a stated class of weights), positivity/closability, boundary-domain
analysis, the full zero-spectrum correspondence with multiplicity and no
extraneous spectrum, and a clear account of dependence on unknown zeros/RH.
For any positive construction, prove the operator's self-adjointness and
completeness rather than infer it from the boundary-value equation. Verify
the integration-by-parts algebra independently; formalize compact algebraic
identities in Lean only after the analytic domains are settled. Current
HP-03.1 is a manual formal-operator calculation, not a realization theorem.

# Campaign XCV — Theta differential pencil and sesquilinear realization

Date opened: 2026-11-27. Status: CLOSED WITHIN THE TESTED REALIZATION CLASSES.

Closure note: `research/CAMPAIGN-95-CLOSURE.md`. This closure does not assert
a global no-go or resolve the remaining nonlocal/domain questions.

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

### Literature radar (checked 2026-11-27)

- Kim et al., [arXiv:2607.24830](https://arxiv.org/abs/2607.24830), posted
  2026-07-23, report finite-element computations for Suzuki's Weil-form
  operator and explicitly say the work does not prove RH. It appears relevant
  to the repository's Suzuki/Weil positivity campaigns and numerical
  reproducibility; it does not address the present theta-pair domain problem.
  Treat its numerical and operator claims as preprint claims pending a
  separate source/derivation audit.
- Liu, [arXiv:2605.17645](https://arxiv.org/abs/2605.17645), posted
  2026-05-17, studies local degree-two Euler-factor pencils on a branched
  spectral curve; its abstract expressly records an obstruction to descent
  to zeta. This is not a global self-adjoint zeta operator, but is relevant
  background for distinguishing local L-factor models from a global
  Hilbert–Pólya correspondence.
- Meyer, [arXiv:math/0412277](https://arxiv.org/abs/math/0412277), constructs
  a nuclear Fréchet-space operator whose spectrum encodes the nontrivial
  zeros with algebraic multiplicity. This predates the current campaign and
  is a necessary comparison for broad “spectral interpretation” claims; its
  topological-vector-space setting is distinct from the positive Hilbert
  self-adjoint realization sought here.

This scan found no result that supplies the missing positive Hilbert-space
realization for Hedenmalm's pair. A manuscript literature review still needs
the full sources, references and versions checked; this short scan is not a
novelty assessment.

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

## HP-03.8 — No core-preserving self-adjoint correction on the natural metric

The gauge variable gives a precise affine form of the theta eigenproblem.
With `g=e^phi u` and `A=e^phi D e^(-phi)=D+i phi'`, one has

    U L u = Dg,             U L D u = DAg.

Thus the source equation `L(Du+alpha u)=0` becomes
`D(A+alpha)g=0`. For the source's normalized integral solution,
direct differentiation gives `(A+alpha)g=-i`; HP-03.6 gives
`g(x)->0` as `x->+infinity`. Hence `Ag->-i` there. A tempting homogeneous
operator correction is

    T g = A g + i ell(g) 1,       ell(g) = i lim_(x->+infinity) A g(x),

because `ell(g_alpha)=1` would imply `T g_alpha=-alpha g_alpha`. This is
only a formal eigenvector identity: it does not establish that `ell` is
defined on a dense domain, that `1` belongs to the chosen Hilbert space, or
that `T` is symmetric or self-adjoint.

There is a stronger obstruction for the natural similarity metric
`M=L²(e^(-2phi) dx)`. Multiplication by `e^(-phi)` is unitary from `M` to
`L²(dx)` and conjugates `A` to `D`; it maps `C_c^infinity(R)` onto itself.
Since `D|C_c^infinity(R)` is essentially self-adjoint, so is this restriction
of `A`, and its unique self-adjoint closure is unitarily equivalent to `D`.
Under Fourier transform, `D` is multiplication by the real frequency `xi`;
an eigenfunction would have Fourier support in the singleton `{lambda}`, a
null set, and hence must vanish in `L²`. Thus the closure has no point
spectrum.
For every compactly supported test function, the proposed boundary correction
vanishes, so any self-adjoint `T` on `M` that contains this test core and
agrees there with `A` must equal that unique closure. But `D` on the line has
no point spectrum. Therefore no such `T` can have any normalized theta
solution in its domain as an eigenvector. In particular the displayed
rank-one boundary correction cannot turn this core into a self-adjoint
operator with the desired Xi-zero eigenvectors.

Equivalently, the proposed trace `ell` vanishes on the operator core. A
graph-continuous extension to the full domain of `A` must vanish everywhere,
so it cannot equal 1 on a normalized theta solution. This continuity argument
is weaker than essential self-adjointness but also diagnoses the failure of
the proposed correction. The no-go is restricted to the same Hilbert metric
and a self-adjoint operator extending this core action. A construction that
changes the Hilbert metric or excludes/modifies this core is not covered; nor
is it established here that the theta solutions belong to the natural domain.

The derivation is manual. It uses the source's boundary equation and standard
unitary-conjugation/core facts; no formal proof or independent external audit
has been completed.

### Scoped algebra recheck (2026-11-27)

A separate derivation of the common-core local-weight calculation gives
`B=D-iq`, `A=D+i s'`, and `C=B*B=D²+q²-q'`; the symmetry defect is
`A*C-CA=-i((q²-q')'+s'C+Cs')`. Its `D²` coefficient is `-2i s'`, matching
HP-03.2's forced constant density. Direct differentiation also reproduces
`Dk=i phi' k` and `LDk=phi''k`, and the gauge conjugation in HP-03.8 sends
`A` to `D`. No sign error was found in these algebraic steps. This recheck
does not independently verify differentiated theta asymptotics, Hedenmalm's
complex endpoint theorem, or the relevant source-domain hypotheses; it is
not a second-person or machine-checked audit.

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
6. **HP-03.8:** the natural similarity expression is essentially
   self-adjoint on the compact core, so no different self-adjoint extension
   on that metric can realize the theta eigenfunctions while preserving the
   core action. Test genuinely different metrics or a domain not extending
   that core, while proving density and preventing extraneous spectrum.
7. Seek a Mellin/Fourier or de Branges representation in which the pair
   identity becomes an explicit positive kernel identity. Check whether its
   construction imports the zero set or RH.
8. Search prior literature on weighted dilation operators, Sturm–Liouville
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

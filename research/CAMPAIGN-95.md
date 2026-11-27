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

## Falsification and next designs

1. Independently re-derive the boundary-value/zero correspondence, including
   complex parameters, endpoint conditions and multiplicities; separate this
   from a spectral theorem.
2. **Completed as HP-03.2:** all positive smooth local weights fail formal
   pair symmetry on the common compactly supported smooth core. Extend this
   audit only if the candidate domain does not contain that core; in that case
   compute the exact boundary form on the proposed domain.
3. Next investigate the natural quotient by `ker L=span{e^(-phi)}` and whether the
   induced seminorm is closable and positive definite on a zero-independent
   core.
4. Seek a Mellin/Fourier or de Branges representation in which the pair
   identity becomes an explicit positive kernel identity. Check whether its
   construction imports the zero set or RH.
5. Search prior literature on weighted dilation operators, Sturm–Liouville
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

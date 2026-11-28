# B3-13 — Prime-defined canonical system as a Hilbert–Pólya candidate

Date: 2026-11-27. Status: source-grounded operator extraction under RH;
independent audit of the cited Suzuki theorems remains open.

## Question

Does the local Weil-form/de Branges chain give one prime-side-defined
self-adjoint spectral model for the zeta zeros, rather than only a family of
zero-defined sampling models or finite-window operators?

## Evidence and construction chain

Suzuki, *The Local Weil Explicit Formula and Related Structures*,
arXiv:2611.33001v1 (version 2026-11-24), provides a candidate framework. Its
starting data are the Weil distribution and the local quadratic forms
`Q_W^a` on `C_c^infinity(-a,a)`. The prime and archimedean terms define these
forms without using zero locations. When `Q_W^a` is strictly positive, the
paper closes the form, constructs the associated RKHS kernel `J_a`, and
obtains self-adjoint differentiation extensions with compact resolvent and
the local explicit formula (Theorem 1.1). Its Theorem 6.2 recovers the
canonical Hamiltonian coefficient from these kernels:

    gamma(a) = J_a(i,0) / J_a(i,i) * d/da J_a(i,0)  a.e.

Thus the local Hamiltonian is specified from the arithmetic local-form chain,
not by inserting the zero ordinates into a diagonal multiplication operator.

The source's Proposition 7.2 then says that, under RH, the common half-line
canonical system has Weyl function

    Q_xi(z) = i * xi'(1/2 - i z) / xi(1/2 - i z).

It proves the tail systems are limit point and the corresponding finite-tail
Weyl functions converge locally uniformly in the upper half-plane to
`Q_xi`. Under RH, `Q_xi` is the Herglotz transform of the atomic measure

    mu_xi = sum_(gamma in Gamma) m_gamma delta_gamma,

where `Gamma` is the set of distinct signed ordinates and `m_gamma` is the
analytic multiplicity. This also follows from logarithmic differentiation
of the even Hadamard product: with symmetric summation,
`Q_xi(z) = sum_gamma m_gamma/(gamma-z)`. Its poles have residues
`-m_gamma`; the positive spectral masses are `m_gamma`.

The source's canonical-system spectral theorem identifies the half-line
system's spectral measure with the Nevanlinna measure of its Weyl function.
The Hamiltonian is positive definite almost everywhere and the system is
limit point, so the standard multiplicity-one spectral representation
applies. The explicit atomic formula therefore gives pure point spectrum
with support exactly `Gamma`; no additional continuous spectrum is present
in this realization. This theorem-level correspondence imports standard
canonical-system spectral theory and is not a Zetral formal proof. A scalar
canonical system has simple eigenspaces; the masses `m_gamma` are spectral
weights, not eigenspace dimensions. The paper makes this distinction visible
in Section 8: its limiting product `A_infinity(z)=prod_(gamma>0 distinct)
(1-z^2/gamma^2)` equals `xi(1/2-iz)/xi(1/2)` iff every zero is simple.
Thus the construction realizes the zero set as simple spectrum with
multiplicity-sensitive spectral weights; it does not match analytic
multiplicities as operator multiplicities unless all zeros are simple.

## What changes after the formal RH result

The positivity premise is not merely hypothetical: Weil's criterion and the
independently kernel-checked Alpöge–Claude formal theorem imply
`Q_W >= 0`. Suzuki's local theory states that under RH each finite local
form is strictly positive, so the kernels and canonical Hamiltonian exist
along the full half-line. This implication is mathematical conditional
composition of cited results; Zetral has not formally composed the Lean
proof with Suzuki's analysis, nor independently audited the full Suzuki
proof. The repository therefore records a source-grounded operator route,
not a Zetral-verified theorem.

This is stronger than the earlier zero-defined diagonal construction in
B3-01 in one specific respect: the Hamiltonian is defined from the Weil
forms, while the zero divisor enters through the proved Weyl-function
identity. It is not a new construction by Zetral and makes no novelty claim.
It also does not turn every finite-window differentiation extension into
the zeta-zero operator. Proposition 7.1 says local spectra at different
phases interlace; under RH the zero measure is nonorthogonal on every finite
local de Branges space, so no one finite phase spectrum is the global zero
set. The correspondence occurs at the common half-line system / spectral
measure level.

## Audit and limits

- **Construction data:** prime-side Weil distribution, local form closures,
  kernels, and the Hamiltonian formula are source-stated and source-derived.
  Their detailed proofs have not been independently audited here.
- **Spectral identification:** conditional on RH in the source; after the
  externally checked formal RH result, the premise is available at theorem
  level, with trust in Lean kernels and Mathlib semantics. The bridge still
  imports Suzuki's global screw-function/Weyl theorem and canonical-system
  inverse spectral theory.
- **Spectrum:** the measure support gives the distinct zero ordinates. Its
  atom mass `m_gamma` is not the geometric multiplicity of the simple scalar
  canonical-system eigenvalue.
- **Independence:** the Hamiltonian's definition uses arithmetic forms, but
  establishing the exact Weyl function uses RH. It therefore cannot now be
  presented as an independent proof of RH; it is a spectral realization
  whose RH condition has been discharged by the separate formal theorem.
- **Verification:** hand-checked the logical chain and the sign/residue
  identity from the Hadamard product. No Lean formalization, independent
  audit of Suzuki's source proof, or numerical computation was performed.

## Next investigation

Independently audit the endpoint/operator theorem chain used in PWPB-03.12,
including the standard boundary-triple spectral-measure normalization. Then
investigate whether a multiplicity-sensitive extension is compatible with
the arithmetic form chain; the derivative-jet Jordan obstruction in
MHS-03.4 rules out only Meyer's unchanged dilation action, not all
alternatives.

## PWPB-03.8 — Zero-independent input and operator realization audit

The defining functional is explicitly arithmetic. In the source's (1.2),

    W(u) = integral u(x)(e^(x/2)+e^(-x/2)) dx
           - sum_(n>=1) Lambda(n)n^(-1/2)(u(log n)+u(-log n)).

For fixed `a`, the form is `Q_W^a(u,v)=W(u*conjugate(v)(-·))` on the
local test core; its closure and RKHS kernel are built from that form. The
canonical Hamiltonian then uses only those kernels. In the source's `a`
coordinate, Theorem 6.2 writes

    H(a) = diag(eta(a)^(-1), eta(a)),
    eta(a) = alpha_a' / beta_a = beta_a' / alpha_a,

where `alpha_a=J_a(i,0)>0` and `beta_a=J_a(i,i)/alpha_a`; derivatives are
almost everywhere. I use `eta` to avoid confusing this coefficient with a
zero ordinate. Thus the *definition* of `H` is zero-independent; RH is used
to ensure strict positivity of all local forms and to identify the Weyl
function with `Q_xi`.

The operator framework can be stated explicitly using the source's system
convention. For any `a0>0`, use

    L2_H = {y : integral_(a0)^infinity y(a)^* H(a)y(a) da < infinity},
    T_H y = -H(a)^(-1) J y'(a),

with maximal differential domain (locally absolutely continuous `y` and
`T_H y` in `L2_H`) plus one separated self-adjoint boundary condition at
the regular left endpoint `a0`. At infinity the system is limit point:
Theorem 6.2 gives `det H=1`, and the source obtains
`integral_a^b tr H(c) dc >= 2(b-a)`. Hence there is no right-end boundary
parameter. For the global function `Q_xi`, use the full half-line starting
at `0`: Theorem 6.2 makes `H` integrable near zero, so that is a regular
endpoint. PWPB-03.12 derives `Gamma_0=y1(0)`, `Gamma_1=-y2(0)` and identifies
`y1(0)=0` as the line whose boundary-triple Weyl function is `Q_xi`. On a
tail beginning at `a0>0`, the Weyl function is instead `Omega_a0`, related
to `Q_xi` by the initial transfer matrix. This imports standard
canonical-system/boundary-triple theory and is not formally verified by
Zetral.

The zero-side identity independently checks the spectral measure. Under RH,
the even Hadamard product and `sum_(gamma>0) m_gamma/gamma^2 < infinity` give
locally uniform convergence away from poles of

    Q_xi(z) = sum_(gamma>0) 2m_gamma z/(gamma^2-z^2)
            = sum_(gamma in Gamma) m_gamma/(gamma-z),

with symmetric pairing. For `Im(z)>0`, each paired term has positive
imaginary part; the Herglotz representation has exactly the atoms
`m_gamma delta_gamma` and no continuous part. The canonical-system spectral
theorem identifies this measure with the operator's spectral measure. The
system is scalar/multiplicity one, so the spectral support is exactly the
distinct ordinate set, with simple eigenspaces and masses `m_gamma`.

This closes the bounded source-chain question at theorem level: a
zero-independent arithmetic Hamiltonian definition and an RH-conditional
spectral correspondence are both present in the literature, and the RH
premise is supplied by the separately checked Lean result. It does not
provide multiplicity-preserving eigenspaces when a zero is multiple, and
does not constitute an independent audit or formal composition of the
source theorems. No novelty claim is made. The remaining HP question is
whether an arithmetic-derived higher-multiplicity operator can preserve
the local form/de Branges embeddings; the existing Jordan-jet obstruction
only excludes one natural action.

## PWPB-03.9 — Sign and dependency audit of the global Weyl identity

Reopened Suzuki, *Aspects of the screw function corresponding to the
Riemann zeta-function*, arXiv:2206.03682v4 (version 2026-08-24), Theorems
1.1–1.2 and equations (1.2), (1.7), (1.8). The source defines the prime-side
function `Psi`, proves in its initial half-plane that

    integral_0^infinity Psi(t)e^(izt) dt
        = - xi'(1/2-iz)/(z^2 xi(1/2-iz)),

and sets `g=-Psi`, `Q_xi=i xi'/xi(1/2-iz)`. Therefore

    integral_0^infinity g(t)e^(izt) dt = -i Q_xi(z)/z^2,

which is exactly the Krein–Langer transform convention used to associate a
screw function to a Nevanlinna function. Under RH, Lagarias's criterion
makes `Q_xi` Nevanlinna; its growth condition at infinity is verified
unconditionally in the source. The uniqueness in the Krein–Langer
correspondence then identifies the prime-defined `g` with the global screw
function attached to `Q_xi`. This is the imported step used by Suzuki
2611.33001v1, Proposition 7.2. The sign and factor of `i` agree; no
normalization discrepancy was found in this link.

This is a source-to-source dependency audit and a direct algebraic sign
check, not an independent proof of the analytic theorems in either paper.
The transform identity is initially an ordinary convergent integral only
for `Im(z)>1/2`; the Weyl function on all of the upper half-plane comes from
the screw-function/Nevanlinna correspondence, not from claiming that this
integral converges there. Exact left boundary-line translation and the
multiplicity-sensitive operator remain open.

Primary source: [Suzuki, arXiv:2611.33001v1](https://arxiv.org/html/2611.33001).
Formal RH verification scope is summarized in `STATE.md`; no novelty or
human-review claim is made here. Screw-function source:
[Suzuki, arXiv:2206.03682v4](https://arxiv.org/html/2206.03682).

## PWPB-03.10 — What Proposition 7.2 does and does not specify about endpoints

**Question.** Does Suzuki's explicit Weyl-limit formula directly give the
separated left-end boundary line for the differential operator
`T_H=-H^{-1}J d/da` in the convention recorded above?

**Source check.** Re-read §§4.2–4.3 and Proposition 7.2 of
arXiv:2611.33001v1. The source defines its canonical system by
`JY'=-zHY`, with fundamental matrix satisfying `U'J=zUH`, and defines the
fractional action
`U·Omega=(U11 Omega+U12)/(U21 Omega+U22)`. For a finite right endpoint,
`Omega=0` therefore gives `U12/U22`; `Omega=infinity` gives `U11/U21`.
Proposition 7.2 applies exactly the former convention to the transfer matrix
`U_a^{-1}U_b`, then sends `b` to infinity. Its limit is the Weyl function of
the tail system normalized to identity at `a`.

**Finding / correction to the open question.** This pins the source's
right-end approximant convention and the normalized tail Weyl function. It
does not itself state a boundary trace map for the operator domain
`T_H=-H^{-1}J y'`, nor translate the quotient convention into a concrete
line in the `y(a0)` coordinates of that operator. In particular, the
parameter `Omega` in Proposition 7.2 is the Weyl function of the remaining
tail, not a constant separated left-boundary angle. The previous shorthand
that the source's Weyl normalization alone “determines” the left line should
be read as requiring an additional boundary-triple / operator-convention
identification; that step is not in the quoted proposition. No explicit line
is claimed here.

**Falsification / next step.** A sign or coordinate swap in passing from
the source's row-fundamental-matrix convention to the column operator can
exchange the two endpoint lines. The next defensible step is to construct the
Green boundary form for this exact `T_H`, state a boundary triple, and derive
its Weyl function from the canonical-system transfer formula. Then compare
that triple's spectral measure with the source's `mu_xi`. Until this is done,
the source-level Weyl/spectral-measure correspondence is established, but an
explicit operator-domain boundary line in Zetral's chosen convention is not.

**Classification.** Source formula and endpoint-ratio algebra checked;
operator boundary-line translation remains unresolved. This is a scope
correction and a precise next proof obligation, not a new operator theorem or
novelty claim.

Primary source: [Suzuki, arXiv:2611.33001v1, §§4.2–4.3 and Proposition 7.2](https://arxiv.org/html/2611.33001).

## PWPB-03.11 — Green form and separated endpoint family

Fix `a0>0`, take `H=diag(eta^(-1),eta)` as in Theorem 6.2, and use the
operator expression `T_H y=-H^(-1)J y'` in `L2_H`. At `a0`, both `H` and
`H^(-1)` are locally essentially bounded by the source's local regularity
statement for `eta` and `eta^(-1)`, so this is a regular endpoint. For
this operator calculation use the Hilbert inner product conjugate-linear in
the first slot. For locally absolutely continuous maximal-domain vectors
`y,z`, direct
integration by parts gives

    <T_H y,z>_(L2_H) - <y,T_H z>_(L2_H)
       = [y(x)^* J z(x)]_(a0)^infinity.

Indeed, the two integrands reduce respectively to `y'^*Jz` and
`-y^*Jz'`, and `(y^*Jz)'=y'^*Jz+y^*Jz'`. With
`J=[[0,-1],[1,0]]`, the left endpoint form is
`y(a0)^*Jz(a0)=-conj(y1)z2+conj(y2)z1`. Its one-dimensional maximal
isotropic subspaces are exactly the real separated lines

    cos(theta) y1(a0) + sin(theta) y2(a0) = 0,  theta mod pi.

Under the standard limit-point hypothesis at infinity, the right endpoint
contributes no independent boundary condition; these lines give the
self-adjoint separated realizations. This is the operator-side Green-form
calculation, using standard first-order system theory. It does **not** yet
identify which `theta` has Weyl measure `mu_xi`: that still requires matching
the boundary triple's Weyl function to Suzuki's projective convention,
including the transpose and ratio orientation. No formalization or
independent source-theorem audit is claimed.

**Classification at this stage.** The direct Green-form calculation is
complete; the line matching `Q_xi` is resolved in PWPB-03.12 below. This is a
standard structural lemma, not a novelty claim.

Primary source for local regularity, `det H=1`, and limit-point facts:
[Suzuki, arXiv:2611.33001v1, Theorem 6.2 and Proposition 7.2](https://arxiv.org/html/2611.33001).

## PWPB-03.12 — Boundary triple selects the global Weyl measure

**Question.** Which self-adjoint left boundary line of the arithmetic
canonical operator has the Weyl function `Q_xi`?

**Endpoint choice.** Use the full half-line `(0,infinity)`, not a tail
`(a0,infinity)` with arbitrary `a0>0`. Theorem 6.2 gives
`H=diag(eta^(-1),eta)` with both diagonal entries integrable on each
`[0,R]`. Thus zero is a regular canonical endpoint. For a maximal-domain
vector, put `f=T_H y`; then `y'=JHf` and
`integral_0^R |y'| <= (integral_0^R tr H)^(1/2)||f||_(L2_H(0,R))`, so the
finite trace `y(0)` exists. Constant vectors near zero, cut off later where
`H` and `H^(-1)` are locally bounded, show the joint trace map is onto
`C^2`. Infinity is limit point. Use the maximal
domain realization

    T_H y = -H^(-1) J y',
    L2_H = L2((0,infinity), H(a) da).

Use inner products conjugate-linear in the first slot and define the
boundary maps

    Gamma_0 y = y_1(0),       Gamma_1 y = -y_2(0).

The Green identity is
`<T_Hy,z>-<y,T_Hz> = <Gamma_1 y,Gamma_0 z>_C - <Gamma_0 y,Gamma_1 z>_C`:
the endpoint contribution is
`-[y(0)^*Jz(0)] = -(-conj(y1)z2+conj(y2)z1)`, exactly the right-hand
side. These maps therefore form an ordinary boundary triple for the maximal
operator, and the extension
`A_0=T_H|ker Gamma_0` is self-adjoint with the explicit line

    y_1(0)=0.

**Weyl-function calculation.** Write `U(b)` for the source fundamental
matrix normalized by `U(0)=I`, whose rows are fundamental row solutions.
On the truncated interval impose the right-end condition `y_2(b)=0` and
take the nonzero row solution `r(b)=(1,0)`. Its value at zero is

    r(0)=r(b) U(b)^(-1) = (U_22(b), -U_12(b)),

since `det U(b)=1`. Therefore, whenever `U_22(b) != 0`,

    Gamma_1 r / Gamma_0 r = -r_2(0)/r_1(0) = U_12(b)/U_22(b).

The last ratio is precisely `U(b)·0` in source equation (4.3), and is
`q_b` in Proposition 8.1. At poles the identity is interpreted
projectively. Limit point at infinity and Proposition 7.2 (or Proposition
8.1) give locally uniform convergence to `Q_xi` on `C_+`. Thus the boundary
triple Weyl function of this full-line operator is `M(z)=Q_xi(z)`, and its
Nevanlinna measure is `mu_xi=sum_gamma m_gamma delta_gamma`. The spectral
measure statement is in the boundary-triple normalization; it establishes
the zero ordinates as spectral support, with weights `m_gamma`, not
eigenspace multiplicities.

**Independent sign sanity check.** For the constant model `H=I`, the source
normalization gives `U(b)=exp(-bzJ)`, so `U_12/U_22=tan(bz)` and
`tan(bz)->i` as `b->infinity` for each `z` in `C_+`. For the same operator
`T=-Jd/dx`, the `L2` defect solution is proportional to
`e^(izx)(1,-i)`, and the proposed boundary maps give
`Gamma_1/Gamma_0=-y_2(0)/y_1(0)=i`. The two independent calculations agree.
If the sign in `Gamma_1` were reversed, the resulting value would be `-i`,
which is not Nevanlinna on `C_+`; this catches the most immediate sign
convention error. This is an exactly solvable model check, not zeta evidence.

This also clarifies the tail distinction: for a fixed `a0>0`, Proposition
7.2's quotient is the Weyl function of the restricted tail and is generally
`Omega_a0`, not the global `Q_xi`; the global function is recovered after
the segment `[0,a0]` by its fractional transformation.

**Verification status and limits.** The boundary algebra, Green identity,
and transfer-matrix inversion are derived directly. Regular-endpoint
boundary-triple facts and the canonical-system Weyl spectral theorem are
imported standard results, not formalized or independently reproved in
Zetral. The source's analytic hypotheses behind Proposition 7.2 also remain
un-audited. No novelty claim is made. This closes the explicit boundary-line
translation at source-theorem level; next audit the endpoint/operator theorem
chain and investigate whether a scalar multiplicity-one model can be
upgraded without losing the arithmetic form realization.

Primary source: [Suzuki, arXiv:2611.33001v1, Theorem 6.2, §§4.2–4.3, Propositions 7.2 and 8.1](https://arxiv.org/html/2611.33001).

## PWPB-03.13 — Scalar multiplicity obstruction and matrix-lift target

**Question.** Does the selected scalar self-adjoint realization encode
analytic zero multiplicity as geometric eigenspace dimension?

**Direct obstruction.** For an eigenvalue `t`, an eigenfunction satisfies
`J y'=-t H y`. The coefficient matrix is locally integrable, and the
initial-value problem is unique from `y(0)`. The boundary condition
`y_1(0)=0` restricts the initial vector to the one-dimensional subspace
`C(0,1)`. Therefore every eigenspace of this scalar realization has
dimension at most one. The positive atoms of `M=Q_xi` at ordinates
`gamma` establish those points as eigenvalues in the standard spectral
representation; the atom masses `m_gamma` are spectral weights. They cannot
be geometric multiplicities greater than one. This rederives the scalar
limitation without assuming zero simplicity.

**Matrix route / prior art.** Matrix-valued canonical systems with
`2p x 2p` Hamiltonians and `p x p` Weyl–Titchmarsh functions are established
theory; see Sakhnovich, *On the Class of Canonical Systems Corresponding to
Matrix String Equations*, Documenta Math. 26 (2021), 583–615. This is
general framework, not a zeta or Weil-form construction. A legitimate
arithmetic lift would need (i) a matrix local Weil form defined without
zero ordinates/multiplicities, (ii) positivity and a compatible nested
reproducing-kernel chain, (iii) a matrix Weyl identity whose spectral
measure has the required atomic ranks, and (iv) a proved transfer from that
measure to `Q_xi` or its zero divisor. Simply taking `Q_xi I_p` or placing
rank `m_gamma` at each known zero is circular and does not meet (i).

**Finding / limits.** The scalar candidate gives an exact arithmetic-defined
operator with the zero set as spectral support and multiplicities as
weights, but it cannot be multiplicity-preserving at the level of
eigenspace dimensions when a zero is multiple. No known multiple zero is
asserted, and RH alone does not assert simplicity. The matrix framework
offers a mathematically distinct next direction, but no arithmetic matrix
lift has been found or proved. This is a structural obstruction and
research specification, not a novel theorem claim.

Primary framework source: [Sakhnovich, Documenta Mathematica 26 (2021), 583–615](https://ems.press/content/serial-article-files/26601?nt=1).

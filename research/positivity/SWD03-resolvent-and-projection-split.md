# SWD03 — Ordinary norm-resolvent and separated spectral-band decomposition

2026-11-25. AI-assisted candidate deduction without RH. Uses SWD01–02 and FZE02's ordinary mixed estimate. No actual nonreal zero, anomalous state, numerical spectrum, independent review or priority claim. All operator norms and spectral projections use ordinary L2, not a generalized metric.

Use the fixed finite selected set F, remaining deviations <=b, and spaces S_a and K_a of SWD01. Write A_a for the full ordinary operator, A_rem,a for the unrestricted remainder, O_a for the finite selected operator, and A_K,a for the operator associated with the closed kernel remainder form. Thus O_a vanishes on K_a. Define ordinary direct sums on the SAME physical Hilbert space
    P_a=O_a|S_a direct sum A_K,a,
    P_rem,a=0|S_a direct sum A_K,a.
Let t_a>0 satisfy t_a/L_a->infinity, where L_a=1+exp(ba)sqrt(I_a(b)) is the mixed scale of FZE02.

## 1. Scaled norm-resolvent comparisons

For fixed 0<epsilon<1/4, SWD01 gives an invertible J=J_a on the physical Hilbert space, with ||J-I||<=epsilon, taking the reference form domain S_a direct sum (V_a intersect K_a) onto V_a. In sesquilinear form notation,
    q_a(Jv,Jw)=p_a(v,w)+<E_a v,w>,
    ||E_a||<=D_(a,epsilon)=C_(F,epsilon)L_a.
The same expansion of q_rem on Jv, without the selected term, gives
    q_rem(Jv,Jw)=p_rem,a(v,w)+<E_a v,w>,
with the same E_a: the selected form of Jv is exactly the selected part of p_a. This uses only the ordinary mixed bound, not a small norm for the unrestricted remainder.

For fixed nonreal z, form representation and the invertible coordinate map give
    (A_a/t_a-z)^-1
       =J [P_a/t_a+E_a/t_a-z J*J]^-1 J*.                (1)
For justification, the operator in brackets is the operator of the transformed form for J*(A_a/t_a-z)J. Its domain consists of the v for which Jv belongs to Dom A_a, by the form representation and the surjectivity of J on the two form domains. Equivalently the bounded inverse in brackets is J^-1(A_a/t_a-z)^-1(J*)^-1. Thus it exists and has norm <=(1-epsilon)^-2/|Im z|. It is also a bounded perturbation of P_a/t_a-z on Dom P_a, because the form difference and metric change are bounded ordinary forms. These identities avoid any use of an inverse of an indefinite real-threshold block.

Subtract (P_a/t_a-z)^-1 from (1). The resolvent identity for the bounded perturbation E_a/t_a-z(J*J-I), together with ||J*J-I||<=3epsilon, ||J-I||<=epsilon and the ordinary self-adjoint resolvent bound 1/|Im z|, gives
    ||(A_a/t_a-z)^-1-(P_a/t_a-z)^-1||
       <= C_z [epsilon+D_(a,epsilon)/t_a].              (2)
The identical proof for A_rem,a and P_rem,a gives the same estimate. All constants C_z can be chosen independently of the possibly very large finite selected eigenvalues or the remainder's ordinary negative depth.

For each fixed epsilon the last error D/t tends to zero. Then let epsilon decrease to zero. Consequently
    ||(A_a/t_a-z)^-1-(P_a/t_a-z)^-1|| ->0,
    ||(A_rem,a/t_a-z)^-1-(P_rem,a/t_a-z)^-1|| ->0.       (3)
The Hilbert space depends on a, but each compared pair acts on the same H_a; (3) is an asymptotic norm difference, not convergence of each operator to one fixed operator on a common infinite space. It requires no spectral gaps or fixed number of deep negative modes.

## 2. Functional-calculus additive decomposition

For every fixed continuous f:R->C vanishing at both infinities, (3) implies the corresponding norm difference for f of the scaled self-adjoint operators. A direct argument uses the resolvents at i and -i: their continuous functions of the real spectral variable generate a uniformly dense subalgebra of C_0(R) (adjoin constants on the one-point compactification, apply Stone-Weierstrass, then subtract the value at infinity). For a fixed polynomial in these bounded resolvents, the norm difference tends to zero by telescoping products and the uniform resolvent norm bound. Approximate f uniformly by such polynomials and use the self-adjoint functional calculus sup norm. This proof works on the varying H_a because the approximating scalar polynomial is fixed before taking the limit.

If in addition f(0)=0, the reference direct sums give the exact identity
    f(P_a/t_a)=f(O_a/t_a)+f(P_rem,a/t_a).
The first term vanishes on K_a, the second on S_a, because f(0)=0. Combining both comparisons from (3) yields
    ||f(A_a/t_a)-f(O_a/t_a)-f(A_rem,a/t_a)|| ->0.       (4)
Thus the finite selected ordinary spectrum and the actual unrestricted residual spectrum decouple not just in their ordered negative depths, but in every fixed continuous spectral-band observable away from zero and infinity at the tested scale. The assertion for C_0 functions does not by itself include half-line spectral projections or functions with distinct limits at +/-infinity.

## 3. Projection and rank addition for a separated finite band

Fix a compact interval I=[-M,-c] with 0<c<M<infinity. Suppose along a sequence of windows the two endpoints of I have uniform positive spectral distance from both O_a/t_a and A_rem,a/t_a. This is a hypothesis about the actual spectra, not an assertion that such gaps are always available for unknown residual modes. All comparisons below are on that sequence. Reduce the common gap width if necessary so the neighborhoods remain disjoint from zero and each other.

First transfer the gap from A_rem,a/t_a to P_rem,a/t_a. Choose fixed continuous bump functions supported in the endpoint gaps, equal one on smaller closed neighborhoods of each endpoint. Their functional calculus on A_rem,a/t_a is zero; the norm comparison in section 2 makes their norm on P_rem,a/t_a tend to zero. If any spectrum lay in the smaller neighborhoods that norm would be one, a contradiction for large a. Thus A_K,a/t_a has corresponding smaller gaps. The same is already assumed for O_a/t_a, so P_a/t_a has them. Apply the bump argument to A_a/t_a using (3) to transfer still smaller uniform gaps to the full operator.

Now choose one fixed continuous compactly supported f with f(0)=0 that agrees with the indicator of I outside those common smaller endpoint gaps, with its transitions entirely inside the gaps. On all four relevant spectra its functional calculus equals the exact spectral projection onto I. In particular, with Q_full,Q_F,Q_rem denoting the projections of A_a/t_a,O_a/t_a,A_rem,a/t_a,
    ||Q_full-Q_F-Q_rem|| ->0,
    ||Q_F Q_rem|| ->0.                                 (5)
The second conclusion follows because Q_rem is norm-close to the projection of P_rem,a/t_a, which is supported on K_a, whereas Q_F is supported on S_a. In fact Q_full is norm-close to the exact orthogonal sum Q_F plus the kernel-remainder projection. All these band projections have finite rank for every fixed a: A_a,A_rem,a,A_K,a have compact resolvent and O_a is finite rank with zero outside the negative band. Two orthogonal projections at norm distance <1 have equal ranks (restriction of each projection to the other's range is injective). Therefore for all sufficiently large windows in this sequence,
    rank Q_full=rank Q_F+rank Q_rem.                    (6)

If the residual has no spectrum in this band, then Q_full is norm-close to Q_F itself. Hence a separated finite genuine spectral band retains its actual ordinary subspace even in the presence of possible much deeper residual modes at other scales. If the selected and residual spectra overlap within the same band, (5)-(6) concern their combined band; no canonical assignment of individual eigenvectors across arbitrarily close or crossing eigenvalues is asserted. Without endpoint gaps (4) and SWD02's depth comparison remain valid, but a sharp projection can be unstable under an arbitrarily small spectral displacement.

## 4. Orthogonality of the entire deep residual subspace without band gaps

There is a separate useful statement for an unbounded negative band, obtained from the smooth dual estimate rather than by extending the C_0 functional calculus. Let Q_deep be the ordinary remainder spectral projection onto depths >=c t_a for fixed c>0. For any fixed epsilon use the smooth right inverse W_a^epsilon of SWD01. FZE02's mixed bound against all form vectors implies its range lies in Dom A_rem,a and
    ||A_rem,a W_a^epsilon||<=C_(F,epsilon)L_a.
Indeed the bounded ordinary linear functional represented by the mixed form gives the operator-domain criterion. The negative restricted inverse on ran Q_deep therefore yields
    ||Q_deep W_a^epsilon||<=C_(F,epsilon)L_a/(c t_a).
Since W_a^0 C_a is the ordinary orthogonal projection Pi_(S_a), and W_a^epsilon C_a approximates it within epsilon,
    ||Q_deep Pi_(S_a)|| <= epsilon+C_(F,epsilon)L_a/(c t_a).
Take the limit at fixed epsilon and then let epsilon decrease. This proves
    ||Q_deep Pi_(S_a)|| ->0.                           (7)
The estimate is uniform across the whole deep residual spectral subspace regardless of its dimension or the existence of spectral gaps. It gives a direct geometric separation of residual escaping modes from the finite selected evaluation space at depths above the mixed scale. It does not compare the corresponding unbounded-band projection of the full operator by (4); that would need a separate argument or uniform gaps and tail control.

Every result restricts to either parity by the equivariant smooth right inverse. SWD03 completes the scaled ordinary norm-resolvent comparison, continuous spectral observable additivity, gapped finite-band subspace/rank addition, and gap-free residual orthogonality. No actual anomalous mode, independent verification, numerical spectrum or RH proof. README unchanged.

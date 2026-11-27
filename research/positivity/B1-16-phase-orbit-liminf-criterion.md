# B1-16 — Exact phase-orbit criterion for the packet liminf

Date: 2026-11-27. Status: RH-conditional structural theorem; the arithmetic
phase-compatibility question remains open.

## Setup

Fix real \(g\in C_c^\infty((0,L))\), and write
\(G(\gamma)=\widehat g(\gamma)=\int g(x)e^{i\gamma x}dx\). Let \(\Gamma\)
be the signed set of distinct zeta-zero ordinates, with multiplicities
\(m_\gamma\), under RH. Suzuki's Weil formula (arXiv:2611.33001v1,
equations (1.2)–(1.3)) gives exactly

\[
 Q_W(f_h)=\sum_{\gamma\in\Gamma}m_\gamma
 \left|\frac{G(\gamma)+e^{i\gamma h}G(-\gamma)}{\sqrt2}\right|^2,
 \qquad
 f_h=\frac{g+g(h-\cdot)}{\sqrt2}.
 \tag{1}
\]

The sum converges uniformly in h because \(G\) is Schwartz on the real
axis and the zero count on unit intervals is \(O(\log(2+|\gamma|))\).
Thus (1) is a nonnegative uniformly almost-periodic function of h.

For each \(\gamma\) with \(G(\gamma)\ne0\), define the target phase

\[
 z_\gamma^*=-G(\gamma)/G(-\gamma),
 \tag{2}
\]

which has modulus one because g is real. If \(G(\gamma)=0\), the
corresponding summand in (1) vanishes for every phase, and that coordinate
imposes no condition. The signed coordinates satisfy
\(z_{-\gamma}^*=\overline{z_\gamma^*}\).

## Orbit-closure theorem

Let \(H\) be the closure in the product torus \(\mathbb T^\Gamma\) of
\(h\mapsto(e^{i\gamma h})_{\gamma\in\Gamma}\), for \(h\ge0\), and set
\(z_\gamma^*=1\) at unconstrained zero-coefficient coordinates. Then

\[
 \liminf_{h\to\infty}Q_W(f_h)=0
 \quad\Longleftrightarrow\quad z^*\in H.
 \tag{3}
\]

If \(z^*\notin H\), compactness and continuity of the sum in (1) imply a
strictly positive liminf. No rational-independence hypothesis is needed for
this equivalence.

For any finite set of ordinates \(\gamma_1,\ldots,\gamma_N\), the projected
phase orbit has closure

\[
 H_N=\{z\in\mathbb T^N:
       \prod_{j=1}^N z_j^{n_j}=1\text{ whenever }
       (n_1,\ldots,n_N)\in\mathbb Z^N,
       \sum_{j=1}^N n_j\gamma_j=0\}.
 \tag{4}
\]

This is the character-annihilator description of a closed subgroup of a
finite torus. The infinite-product condition \(z^*\in H\) is equivalent
to satisfying (4) for every finite set and every exact integer relation
among its ordinates. The closure of the forward orbit has the same
omega-limit set: compactness of torus rotations supplies arbitrarily large
near-return times.

The infinite tail causes no loss in finite approximations. For a cutoff
\(T\), replacing the sum (1) by \(|\gamma|\le T\) changes its value
uniformly in h by at most

\[
 2\sum_{|\gamma|>T}m_\gamma|G(\gamma)|^2,
 \tag{5}
\]

which tends to zero by Schwartz decay and the local zero count. Therefore
finite constrained-torus minima approximate the exact liminf with the
explicit tail bound (5), once the exact relation lattice for that finite
set is known.

## Conditional consequences and obstruction

If the positive zero ordinates are linearly independent over \(\mathbb Q\),
then their finite phase orbits are dense in every corresponding torus by
Kronecker's theorem. Equations (3)–(4) then imply
\(\liminf_{h\to\infty}Q_W(f_h)=0\) for every real compactly supported
profile g, despite the positive Bohr mean and nonzero oscillation established
in B1-15. This is a conditional implication only; ordinate independence is
not assumed or claimed.

Conversely, one exact integer relation whose target phases violate (4)
forces a positive liminf for that profile. Translation of g changes
\(G(\gamma)\) by \(e^{i\gamma a}\), but relation phases from the translation
cancel because \(\sum n_j\gamma_j=0\); translation alone cannot repair a
failed compatibility condition. The outstanding mathematical task is to
establish a relevant exact relation, rule out all such relations, or prove
the target compatibility directly for the zeta ordinates and a chosen g.

Prior-art check: the positive ordinates' rational linear independence is the
classical Linear Independence conjecture used in explicit-formula
limiting-distribution work. Lamzouri formulates an effective strengthening
as a conjecture, not a theorem, in [arXiv:2311.04860v2, §1](https://arxiv.org/html/2311.04860v2).
The present criterion needs only the exact relation lattice and gives no
new evidence for LI; the conditional consequence above is not a result
about the actual ordinates unless LI is assumed.

## Verification boundaries

Equation (1) is Suzuki's cited source theorem applied under RH. Equations
(3)–(5) follow from compact-group orbit closure, Fourier character theory,
and uniform tail convergence; these are paper derivations, not a Lean proof.
No numerical scan can establish an exact integer relation or independence.
No conclusion about full-space coercivity follows from a fixed-profile
liminf.

**Next:** determine whether any exact low-ordinate integer relation is
currently provable and whether it can be paired with a profile whose target
phase violates the relation. If not, preserve the obstruction and derive
conditional bounds in terms of the relation lattice.

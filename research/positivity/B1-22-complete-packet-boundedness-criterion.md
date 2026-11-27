# B1-22 — Bounded complete packet values as an RH criterion

Date: 2026-11-27. Status: analytic equivalence from the direct formula and
B1-17's pole-detection argument; not an RH proof or novelty claim.

## Statement

Fix `L>0`. For each real `g in C_c^infty((0,L))`, let
`phi=g*g`, `Phi(z)=integral phi(v)e^(-zv)dv`,
`f_h=(g+g(h-·))/sqrt(2)`, and
`W_h=W(f_h*tilde(f_h))`. Then

    RH iff for every fixed g, sup_(h>=0) |W_h| < infinity.

The bound may depend on `g`; this is not a uniform bound over profiles.

## Fixed-profile decomposition

For `h>2L`, Suzuki's direct formula (B1-15, equation (1)) separates into
the first-prime cross term and its archimedean main term, plus bounded
remainders. In B1-17 notation

    D_phi(h)=sum_p (log p)/sqrt(p) phi(h-log p)-e^(h/2) Phi(1/2),

the signs in the direct formula give

    W_h = -D_phi(h) + R_g(h),   sup_(h>2L)|R_g(h)|<infinity.

Indeed, the archimedean cross term is
`e^(h/2) integral e^(-v/2)phi(v)dv + O_g(e^(-h/2))`, and this integral is
`Phi(1/2)`. The first-prime self terms sample only finitely many primes.
The prime-square cross term is uniformly `O_L(1)` by B1-21a; higher powers
are absolutely bounded. The continuous-kernel cross term is `O_g(e^(-h/2))`
since its kernel decays like `e^(-x/2)` at infinity, while its self part
and the pole term are independent of `h`. The remaining archimedean terms
are fixed-profile constants plus a decaying term. For `0<=h<=2L`, compact
support leaves only finitely many prime terms, and all other direct terms
are bounded. Thus the bounded-remainder conclusion holds for all `h>=0`.

## Equivalence

If RH holds, Campaign LXXXIX gives
`|W_h|<=C_L||g||_log^2` uniformly in `h`, proving the criterion's forward
direction.

Conversely, suppose each fixed profile has bounded `W_h`. The decomposition
implies each fixed autocorrelation pairing `D_phi(h)` is bounded. B1-17's
Laplace identity continues it as

    L D_phi(z)=Phi(z)F(z+1/2)-Phi(1/2)/(z-1/2),

where `F(q)=sum_p (log p)p^(-q)` continues by the prime-zeta Möbius identity.
If a zero `rho` had `Re rho>1/2`, choose a nonnegative smooth bump `g`
whose support is narrow enough that
`integral g(x)e^(-(rho-1/2)x)dx != 0`. Then
`Phi(rho-1/2)` is nonzero, and the continued Laplace expression has a
nonremovable pole at `z=rho-1/2`; the `k>=2` prime-zeta terms are regular
there. Boundedness of this fixed `D_phi` makes its Laplace transform
holomorphic on `Re z>0`, contradiction. The functional equation excludes
zeros left of `1/2` as well. This is the same fixed-profile pole-detection
logic audited in B1-17, now transferred through the bounded remainder.

## Prior art, scope, and verification

This criterion is structurally a repackaging of B1-17 and the classical
Mellin/convolution RH criteria, including Báez-Duarte, *Möbius-convolutions
and the Riemann hypothesis*, Theorem 3.1
([arXiv:math/0504402](https://arxiv.org/abs/math/0504402)). No novelty or
computational advantage is asserted. The complete-form boundedness
formulation does not imply positivity: absolute values are used, and under
RH the known explicit formula gives nonnegativity on the autocorrelation
class separately. It gives no uniform profile constant, coercivity, or
independent Hilbert–Pólya operator.

The sign and normalization were checked against Suzuki,
[arXiv:2611.33001v1, equation (1.2)](https://arxiv.org/html/2611.33001v1),
and B1-17's Laplace identity. The proof is a manual analytic derivation;
no Lean verification or numerical computation was used. The zero-pole
argument depends on the classical prime-zeta continuation and the pinned
B1-17 audit.

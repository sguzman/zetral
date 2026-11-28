# B3-14 — Audit of the growing-interval Weyl limit

Date: 2026-11-27. Status: the finite-interval reduction and qualitative
locally uniform limit have been independently rederived from the cited
canonical-system theorem. That theorem remains imported; this is not an
independent proof of the full Suzuki source chain.

## Precise question and source

For Suzuki's arithmetic Hamiltonian

    H(a) = diag(gamma(a)^(-1), gamma(a)),   det H(a)=1 a.e.,

does the finite left-to-right quotient used by the differential-operator
boundary triple converge locally uniformly to

    Q_xi(z) = i xi'/xi(1/2 - iz)

under RH, with all changes of endpoint and normalization accounted for?
The source is M. Suzuki, *The Local Weil Explicit Formula and Related
Structures*, arXiv:2611.33001v1, §§4.2–4.3, 5.5, 6.2 and 8, especially
Proposition 4.2 and Proposition 8.1.

## Re-derivation

The fundamental matrix convention is

    partial_a U_a(z) J = z U_a(z) H(a),   U_0(z)=I.

By Proposition 5.5, `U_a,22=A_a`; consequently the interval `[0,a]`, with
right boundary parameter zero, has Weyl quotient

    q_a(z) = U_a(z)·0 = U_a,12(z)/U_a,22(z) = U_a,12(z)/A_a(z).

This is the growing-interval quotient in Proposition 8.1. The different
quotient `(U_a^(-1) U_b)·0` belongs to the interval `[a,b]`; its limit with
fixed `a` is a tail Weyl function (Proposition 7.2). The two limits have
different left endpoints and must not be interchanged.

Reparameterize the first interval by trace length

    x(a) = integral_0^a tr H(c) dc = ell_a + m_a = L_a.

Since `det H=1` and `H` is positive definite almost everywhere,
`tr H = gamma + gamma^(-1) >= 2`; hence `L_a >= 2a` and `L_a -> infinity`.
The reparameterized Hamiltonian `H_tr(x)=H(a(x))/tr H(a(x))` has trace one
almost everywhere. Reparameterization preserves the transfer matrix and
the right boundary quotient. Proposition 4.2 therefore gives the
limit-point Weyl function of the half-line as the pointwise limit of `q_a`
on the upper half-plane. Under RH, the source identifies that function with
`Q_xi`.

Each `q_a` is Nevanlinna. Its Cayley transform

    c_a(z) = (q_a(z)-i)/(q_a(z)+i)

is a bounded holomorphic function on the upper half-plane. Pointwise
convergence to the finite Weyl function `Q_xi` and Montel's theorem imply
locally uniform convergence of the Cayley transforms; inversion gives
locally uniform convergence of `q_a` on compact subsets of the upper
half-plane. This verifies the source's qualitative convergence step and
its applicability to the left-end boundary-triple quotient.

## Falsification and scope

- The transfer identity and `A_a=U_a,22` give the same quotient; no sign or
  endpoint mismatch was found.
- `L_a -> infinity` follows from the determinant-one condition, not from an
  unproved assumption that the unnormalized canonical length diverges.
- The tail quotient `(U_a^(-1)U_b)·0` is not the finite `[0,a]` quotient.
  Treating them as identical would be an endpoint error; this audit keeps
  their roles separate.
- The Weyl convergence theorem for trace-normalized canonical systems and
  Suzuki's RH-conditional identification of the half-line Weyl function
  remain imported. No rate of convergence is obtained.
- RH is the only arithmetic premise in the global identification; the
  result is a conditional operator correspondence, not a new RH proof or
  an independent proof of Suzuki's analytic source results.

## Backlog

Next, investigate whether an arithmetic-defined finite-rank matrix-valued
local Weil kernel can encode analytic multiplicities as eigenspace
multiplicity without inserting zero data. Quantify the dimension barrier
for finite-dimensional matrix canonical systems first. Separately seek a
quantitative cutoff-Weyl error bound; no universal rate follows from the
qualitative argument above alone.

Primary source: [Suzuki, arXiv:2611.33001v1](https://arxiv.org/html/2611.33001v1).

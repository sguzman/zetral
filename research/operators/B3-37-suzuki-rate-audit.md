# B3-37 — Quantitative-rate audit of Suzuki's Weyl limit

Date: 2026-11-27. Status: source audit; the cited convergence is qualitative
in the version inspected. This does not prove that no rate can be derived.

## Question

Do Suzuki's 2026 local-Weil/canonical-system theorems provide a quantitative
modulus for convergence of finite-end spectral masses to zeta-zero
multiplicities, beyond the qualitative limits used in B3-35?

## Source inspection

In arXiv:2611.33001v1 (2026-11-24):

1. Equation (8.1) cites `gamma_(a,n) >= gamma_n` and monotone convergence
   `gamma_(a,n) down gamma_n`, without a rate.
2. Proposition 8.1 proves `q_a -> Q_xi` locally uniformly by limit-point
   Weyl convergence and Montel's theorem. It also proves
   `ell_a -> ell_infinity` and the explicit lower bound
   `m_a >= a^2/ell_infinity`, but states no error bound for `q_a-Q_xi`,
   `ell_infinity-ell_a`, or the kernel-weight limits.
3. The proof of Theorem 8.2 establishes locally uniform convergence of
   `A_a` using product convergence and dominated bounds. For normalized
   weighted averages, it first fixes `b_0`, sends `a` to infinity, and then
   sends `b_0` to infinity. Without a modulus for the tail convergence of
   `A_b` and `U_(b,12)`, this order-of-limits argument yields no explicit
   rate. The theorem's full matrix and normalized kernel limits are likewise
   stated locally uniformly but without a rate.

## Conclusion

The inspected source gives important quantitative information, especially
`m_a >= a^2/ell_infinity`, but it does not state a quantitative Weyl or
spectral-mass error sufficient to rate B3-35's cluster convergence. The
two-atom countermodel B3-36 therefore remains only a general warning: it
does not show that a rate is impossible for this arithmetic Hamiltonian.
Obtaining one would require additional estimates on the approach of the
finite-end Weyl functions or on the Hamiltonian's tail, not merely the
published compactness argument.

## Next route

The source-rate path is not currently actionable from the inspected theorem
statements. Pivot to a precise arithmetic multiplicity-lift question: can
the local Weil form be replaced by a positive matrix-valued form whose
fiber rank records the zero-counting atom masses, while keeping its
definition prime-side and avoiding insertion of zeros? Test positivity,
local explicit formula, and compatibility with the nested de Branges chain;
reject constructions whose matrix rank is chosen from `m_gamma`.

## References

- Suzuki, *The Local Weil Explicit Formula and Related Structures*,
  arXiv:2611.33001v1, equations (8.1), (8.3)–(8.4), Proposition 8.1,
  Theorem 8.2 and its proof.
- B3-35 measure limit:
  `research/operators/B3-35-vague-spectral-measure-limit.md`.
- B3-36 abstract no-rate countermodel:
  `research/operators/B3-36-no-universal-rate-for-qualitative-weyl-limits.md`.

No independent audit of Suzuki's full proofs, numerical experiment, Lean
formalization, or novelty claim is made.

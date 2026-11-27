# B5-06 — Herglotz masses converge to xi-zero multiplicities

Date: 2026-11-27. Status: conditional vague convergence under RH.

Use B5-05's normalized pair and define its Herglotz quotient

    q_omega(z) = B^omega(z)/(omega A^omega(z)),
    q_0(z) = -F'(z)/F(z),  F(z)=xi(1/2-iz).

Under RH, `q_omega` is a meromorphic Herglotz function for every
`omega>0`, and `q_omega -> q_0` locally uniformly on `C+`. On any real
interval where the quotient continues holomorphically, its Herglotz measure
has no mass. At a simple real zero `lambda` of `A^omega`, strict
Hermite-Biehler theory prevents cancellation by `B^omega`; the measure has
the positive atom

    w_(omega,lambda) = -Res_(z=lambda) q_omega(z)
                     = -B^omega(lambda)/(omega (A^omega)'(lambda)) > 0.

Because `A^omega` has only simple real zeros under RH, these atoms give the
whole locally finite Herglotz measure `mu_omega`.

Let `r` be a zero of `F` of analytic multiplicity `m`. Choose a small disk
`D` around `r` whose boundary contains no zero of `F` and whose interior
contains no other zero. Local uniform convergence `A^omega -> F` and
Hurwitz's theorem give exactly `m` simple zeros of `A^omega` in `D` for all
sufficiently small positive `omega`. Since `q_omega -> q_0` uniformly on
`partial D`, the residue theorem yields

    mu_omega(D)
      = -1/(2 pi i) integral_(partial D) q_omega(z) dz
      -> -1/(2 pi i) integral_(partial D) q_0(z) dz
      = m,

because `q_0=-F'/F` has residue `-m` at `r`. The atoms in `D` all
converge to `r`, so for any continuous test function supported in a compact
set, summing over its finitely many zero clusters proves

    mu_omega -> sum_(F(r)=0) m_r delta_r

vaguely on the real axis. This is convergence of positive Herglotz atom
measures, not just convergence of unweighted root counts. For a multiple
limiting zero, only the total mass of the cluster is determined; individual
weights may split among the simple shifted roots. No strong-resolvent
convergence follows from this measure limit.

## Cross-checks and limits

- Positivity of the weights follows both from the Herglotz representation
  and from the strict HB pair; the residue sign is `-`, not `+`.
- The limiting measure is exactly B3-09's signed zero-divisor measure with
  analytic multiplicities as atom weights. This is independent confirmation
  of the normalization in the rescaled derivative kernel.
- RH is assumed to make all positive-shift spectra real and the quotients
  Herglotz. No zero location or multiplicity beyond the zero divisor is
  numerically supplied.
- The proof uses local contours and Hurwitz only. It establishes neither
  convergence of domains nor operator or resolvent convergence.

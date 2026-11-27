# B3-07 — Shifted xi canonical systems and the degenerate critical endpoint

Date: 2026-11-27. Status: source-based operator audit; no new operator claim.

## Question

Does the established canonical-system construction from shifted Riemann xi
functions provide a Hilbert–Pólya operator at the critical shift, or does the
shift-zero endpoint require a new limiting construction?

## Existing construction and exact hypotheses

Suzuki, *A canonical system of differential equations arising from the
Riemann zeta-function*, RIMS Kôkyûroku Bessatsu B34 (2012), 397–435,
defines, for `omega>0`,

    E^omega(z) = xi(1/2 + omega - i z),
    Theta_omega(z) = xi(1/2 - omega - i z) / xi(1/2 + omega - i z),
    A^omega = (E^omega + E^omega#)/2,
    B^omega = (E^omega - E^omega#)/(2i).

The paper's Proposition 1.2 identifies `Theta_omega` being meromorphic inner
for every `omega>omega_0` with zero-freeness of zeta in
`Re(s)>1/2+omega_0`. In particular, it is inner for `omega>=1/2`
unconditionally; for `0<omega<1/2`, RH is a sufficient input. When inner,
`E^omega` is Hermite–Biehler and generates a de Branges space. The symmetric
multiplication operator has deficiency indices `(1,1)` under the stated dense
domain condition; its self-adjoint extensions have discrete spectra at the
zeros of `A^omega` and `B^omega`. The paper also constructs the canonical
system explicitly for `omega>1` (Theorem 2.3); its introduction identifies
the extension to smaller `omega` as the RH-related problem.

Thus there is meaningful existing positive-shift spectral theory. It is not
an operator whose spectrum is already the nontrivial zeta ordinates: the
spectra are the zeros of the shifted-sum functions `A^omega,B^omega`.
Under RH, those zero sets are real for every positive shift and the functions
converge locally uniformly to the critical-line xi function as
`omega -> 0+`; the source does not thereby prove convergence of the varying
Hilbert spaces, Hamiltonians, or self-adjoint operators.

## Endpoint obstruction to direct substitution

At `omega=0`,

    E^0(z) = xi(1/2 - i z) = E^0#(z).

This follows from xi's conjugation symmetry. Hence `E^0` is real-entire and
`|E^0(z)|=|E^0#(z)|`; it fails the strict Hermite–Biehler inequality. Also
`Theta_0` is identically one after cancellation, not a nonconstant inner
function generating a nontrivial model space. Consequently, substituting
`omega=0` into this construction does not yield a de Branges space or its
self-adjoint extension. Any endpoint Hilbert–Pólya candidate needs an
additional normalization/scaling and a theorem proving operator or resolvent
convergence, together with the exact spectral correspondence and any needed
multiplicity data.

## Falsification and evidence boundaries

- The source's definitions, Proposition 1.2, de Branges extension statement,
  and canonical-system description were checked directly in the primary PDF,
  pp. 397–403; the explicit canonical-system result is Theorem 2.3.
- The degeneracy at zero is an algebraic consequence of xi's functional and
  conjugation symmetries. It obstructs direct substitution only; it does not
  rule out a renormalized limiting operator.
- No strong-resolvent limit, common-space realization, arithmetic
  compression identity, numerical computation, or formal proof is claimed.
- This construction and its RH dependence are established prior art; no
  novelty claim is made.

Primary source: M. Suzuki,
[A canonical system of differential equations arising from the Riemann
zeta-function](https://www.kurims.kyoto-u.ac.jp/~kenkyubu/bessatsu/open/B34/pdf/B34_023.pdf),
RIMS Kôkyûroku Bessatsu B34 (2012), 397–435, especially Proposition 1.2,
Theorem 2.3, and §§1.1–1.2.

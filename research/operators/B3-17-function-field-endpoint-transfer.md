# B3-17 — Why the function-field finite endpoint does not transfer directly

Date: 2026-11-27. Status: rigorous obstruction to one specific transfer
mechanism; not an obstruction to other finite-endpoint models.

## Question

Can the finite-parameter endpoint in Suzuki's 2026 function-field spectral
theory be used directly for the Riemann zeta function by treating its zero
ordinates as finitely many periodic classes?

## Source framework

For a curve over `F_q`, Suzuki writes the distinct ordinates as a finite
union

    Gamma = disjoint_union_(j=1)^d (beta_j + (2 pi/log q) Z)

and defines the endpoint `a_* = d log(q)/2`. At `a=a_*`, the selected
self-adjoint local differentiation operator has spectrum exactly the
distinct zero ordinates, and its normalized spectral function has an exact
locally uniform product limit. The construction distinguishes simple
operator eigenvalues from analytic zero multiplicities, which are stored in
the sampling norm. See arXiv:2610.41115v1, §§1, 6, 9–10.

## Direct-transfer obstruction

Fix any period `h>0`. A union of finitely many residue classes modulo
`2 pi/h` contains at most `d(T h/(2 pi)+O(1))=O(T)` positive ordinates up
to height `T`.

For Riemann's zeta function, the Riemann–von Mangoldt formula gives
`N(T) ~ (T/(2 pi)) log T`, with zeros counted with multiplicity. Conrey's
unconditional theorem gives a positive limiting proportion (at least
`0.401`) of zeros that are simple and on the critical line. Those zeros are
distinct, so the number of distinct positive ordinates is `>= c T log T`
for some `c>0`. This contradicts `O(T)`. Therefore, for every fixed `h`,
the Riemann zero set has infinitely many residue classes modulo `2 pi/h`.

Consequently, the function-field parameter `d` is infinite for any direct
periodic-class encoding of the Riemann zero ordinates, and the formula
`a_*=d h/2` gives no finite endpoint. This explains, for that specific
mechanism, why the number-field approximation is an infinite-parameter
limit rather than the finite-endpoint identity available over finite fields.

## Falsification and scope

- The growth contradiction uses only the cited zero-counting theorem and
  Conrey's positive proportion of simple critical-line zeros; it does not
  assume RH or use computed zeros.
- A finite union of arithmetic progressions has linear counting growth,
  independently of overlaps; zeta has superlinear distinct-zero growth.
- This does not rule out other arithmetic parameters, a nonperiodic finite
  endpoint mechanism, or a different geometric realization. It only rules
  out a direct finite-residue-class transplant of the function-field
  endpoint formula.
- The function-field spectral theorem is author-reported arXiv work and is
  not independently audited here. Its function-field RH input is already
  established by Weil's theorem.
- No novelty claim is made; the corollary is a direct comparison of the
  source's endpoint formula with classical zero-counting results.

## Follow-up

Investigate which parts of the function-field construction survive without
periodicity: the explicit local operator, spectral kernel, and the global
translation/Frobenius identification. Seek a number-field analogue of the
geometric pairing without trying to force a finite endpoint. Compare its
operator with the already recorded canonical-system Weyl model and Connes–
Consani–Moscovici's ground-vector route.

Primary sources: [Suzuki, arXiv:2610.41115v1](https://arxiv.org/html/2610.41115v1);
[Conrey, J. reine angew. Math. 399 (1989), 1–26](https://aimath.org/~kaur/publications/24.pdf).

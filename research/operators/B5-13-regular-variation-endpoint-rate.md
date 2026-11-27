# B5-13 — Regular-variation rate for the rank-one endpoint

Date: 2026-11-27. Status: RH-conditional asymptotic for the primitive of the
trace-normalized limit Hamiltonian; no operator convergence conclusion.

## Question

Can the rank-one Cesaro endpoint limit in B5-12 be sharpened to an asymptotic
rate for the vanishing diagonal component, using the high-energy asymptotic
of the swapped Weyl function?

## Result

Assume RH and use B5-12's trace-normalized canonical Hamiltonian

    H_0(x) = [[a(x), b(x)], [b(x), c(x)]]

for `m_0=-F'/F`. Let

    H_0^*(x) = [[c(x), -b(x)], [-b(x), a(x)]],
    M_0^*(x) = integral_0^x H_0^*(t) dt.

Its Weyl function is `m_0^*=-1/m_0`. From the Stirling estimate already
recorded in B5-11,

    m_0(iy) = (i/2) log(y/(2 pi)) + O(1/y),
    m_0^*(iy) = 2i/log(y/(2 pi)) + O(1/log^2 y).

Thus `m_0^*(iy) ~ i f(y)` with the slowly varying function
`f(y)=2/log(y/(2 pi))`, of regular-variation index zero.

Apply Langer–Pruckner–Woracek, Theorem 1.5 and equations (1.15), (1.19),
to `H_0^*`. Its hypotheses hold: it is positive semidefinite, trace one,
and has infinite total trace. Neither diagonal entry vanishes a.e. on an
initial interval. Indeed, the paper's Remark 1.6(ii) identifies such
vanishing with respectively maximal growth `m^*(iy)~i b y` or minimal
growth `m^*(iy)~i/(b y)` for some `b>0`; both contradict the displayed
slowly varying asymptotic. The theorem also yields regular variation of
the two diagonal primitives. Since their sum is exactly `x`, their indices
must both be one. The Weyl coefficient has index zero, so the theorem's
formula (1.15) gives

    omega_(0,delta) = sqrt(1-delta^2) - i delta.

The coefficient in `m_0^*(iy) ~ i f(y)` is positive real. Since the
scale function in the theorem is positive, this forces
`omega_(0,delta)=1`, hence `delta=0`; its modulus is one. Equations
(1.11) and (1.19) then give

    a_H(r) = sqrt(M^*_(11)(t_r)/M^*_(22)(t_r))
           = r M^*_(11)(t_r)
           = 1/(r M^*_(22)(t_r))
           ~ 2/log r,
    M^*_(11)(t_r) M^*_(22)(t_r) = 1/r^2.

Trace normalization gives `t_r=M^*_(11)(t_r)+M^*_(22)(t_r)`, so
`t_r ~ log r/(2r)`. Consequently `log r ~ log(1/t_r)` and

    M^*_(11)(x) ~ 4x/log^2(1/x),
    M^*_(22)(x) ~ x                 (x -> 0+).

In the original coordinates this is

    integral_0^x c(t) dt ~ 4x/log^2(1/x),
    integral_0^x a(t) dt ~ x,
    integral_0^x b(t) dt = o(x/log(1/x)).

The last relation follows from the theorem's `delta=0` limit and
positive-semidefinite trace normalization. In particular, the Cesaro
average's lower-right entry is asymptotic to `4/log^2(1/x)`, sharpening
B5-12's convergence-to-zero statement.

## Falsification and scope checks

- The two excluded endpoint cases in Theorem 1.5 are checked against the
  actual asymptotic, not assumed away: `2/log y` is neither proportional to
  `y` nor to `1/y`.
- The index-zero case is explicitly covered by Theorem 1.5; it is the case
  where the general constant formula (1.15) simplifies to
  `sqrt(1-delta^2)-i delta`. The phase is zero here, which fixes `delta=0`.
- The constant `4` comes from `a_H~2/log r` and the exact trace relation;
  it is not inferred from finite samples.
- This is a statement about primitives of the inverse-spectral Hamiltonian.
  It supplies no explicit density, common-domain estimate, uniform spectral
  tail bound, or strong-resolvent convergence for the shifted systems.

## Literature and verification

The implication is an application of existing canonical-system regular-
variation theory, not a novelty claim. The theorem is stated in the current
arXiv v2 (2025-08-13); Theorem 1.5, Remark 1.6(ii), equations (1.11),
(1.15), and (1.19) were checked directly. The asymptotic input is B5-11's
Stirling calculation. The algebra converting the scale function to the
primitive asymptotics was independently recomputed above. No numerical
calculation, Lean proof, or new spectral correspondence is used.

Source: M. Langer, R. Pruckner, H. Woracek, “Canonical systems whose Weyl
coefficients have regularly varying asymptotics,” arXiv:2201.01522v2,
Theorem 1.5, Remark 1.6(ii), equations (1.11), (1.15), (1.19),
https://arxiv.org/abs/2201.01522.

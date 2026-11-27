# B3-09 — The rescaled kernel as a zero-counting Cauchy-transform space

Date: 2026-11-27. Status: conditional analytic identification under RH.

## Question

Can the first-order kernel in B3-08 be identified explicitly, and what
operator does its RKHS naturally carry?

## Canonical-product calculation

Assume RH. Write the nontrivial zeros as `1/2 +/- i gamma`, with distinct
positive ordinates `gamma` and analytic multiplicities `m_gamma`. Define
`X(w)=xi(1/2+w)`. It is even and entire of order one. Under RH its zeros are
`+/- i gamma`; its genus-zero even canonical product is

    X(w) = X(0) product_(gamma>0) (1 + w^2/gamma^2)^(m_gamma),
    sum_(gamma>0) m_gamma/gamma^2 < infinity.

Here `X(0) != 0`: for real `0<s<1`, the alternating-series representation
gives `eta(s)>0` and `zeta(s)=eta(s)/(1-2^(1-s))<0`, in particular
`zeta(1/2)<0`.

This is the even form of Hadamard factorization (Titchmarsh, *The Theory of
the Riemann Zeta-Function*, 2nd ed., §§2.12–2.13). Logarithmic
differentiation, locally uniformly away from zeros, gives

    xi'(1/2+w)/xi(1/2+w)
      = sum_(gamma>0) m_gamma [1/(w-i gamma)+1/(w+i gamma)].

Put `s_z=1/2-i z` and `h(z)=i xi'(s_z)/xi(s_z)`. Since `w=-iz`, direct
substitution yields

    h(z) = sum_(gamma>0) m_gamma
             [1/(gamma-z) + 1/(-gamma-z)],       z in C+.

Let the symmetric positive measure on the real line be

    mu = sum_(gamma>0) m_gamma (delta_gamma + delta_(-gamma)).

The zero-counting bound implies `integral (1+t^2)^(-1) d mu(t)<infinity`.
The symmetric paired sum above is the Herglotz representation of `h` with
measure `mu` and zero affine term. In particular, the measure records
analytic multiplicity as atom mass.

## Exact identification of the B3-08 kernel

The limit kernel found in B3-08 is

    K_0(z,w) = i [L(s_z)+conjugate(L(s_w))]
                 / [pi (z-conjugate(w))],
    L = xi'/xi.

Because `h=i L`, the paired partial fractions give exactly

    K_0(z,w) = (h(z)-conjugate(h(w))) / [pi (z-conjugate(w))]
             = (1/pi) integral_R
                 1/[(t-z)(t-conjugate(w))] d mu(t).

The last identity follows term-by-term from
`(1/(t-z)-1/(t-conjugate(w)))/(z-conjugate(w))`
and extends by locally uniform convergence. It independently verifies
positive definiteness and fixes the normalization.

Consequently, the limiting RKHS is the Cauchy-transform image of `L^2(mu)`:
feature vectors are `t -> 1/(sqrt(pi)(t-z))`. Their span is dense. Indeed,
if `g in L^2(mu)` is orthogonal to all feature vectors, its Cauchy transform
vanishes on `C+`; the series is locally normally convergent off the discrete
support by Cauchy–Schwarz and `sum m_gamma/gamma^2<infinity`, so its residues
at each atom force every coordinate of `g` to vanish. This gives a unitary
identification of the RKHS with `L^2(mu)` (up to the stated `sqrt(pi)`
normalization).

On `L^2(mu)`, multiplication

    (Tg)(t)=t g(t),
    Dom(T)={g: integral t^2 |g(t)|^2 d mu(t)<infinity}

is self-adjoint. It has pure point spectrum equal to the signed distinct
ordinates and one-dimensional eigenspace at each support point. The
multiplicity `m_gamma` is atom mass, not eigenspace dimension; scalar weights
do not repair the multiplicity issue from B3-01. The operator and measure are
defined from xi's zeros and the whole construction assumes RH, so this is a
conditional spectral repackaging, not an independent Hilbert–Pólya proof.

## Falsification and verification boundaries

- The paired-product and logarithmic-derivative identities were differentiated
  directly; the factor `i`, signed support, and `1/pi` kernel normalization
  were checked independently against the diagonal formula in B3-08.
- Absolute convergence of the weighted zero measure follows from the
  classical zero-count `N(T)=O(T log T)` by dyadic summation.
- RH is required both for zeros to lie on the stated support and for the
  B3-08 half-plane logarithmic derivative. Multiplicities are retained as
  atom masses; no simplicity assumption is made.
- No claim of a novel construction, arithmetic Weil-form identity, or RH proof
  is made. No computation or formal verification was performed.

Prior art: Suzuki's shifted-xi canonical systems (2012), and the standard
Hadamard/Herglotz representations cited above. The independent contribution
here is the explicit identification of the B3-08 first-order kernel and its
limits within this project.

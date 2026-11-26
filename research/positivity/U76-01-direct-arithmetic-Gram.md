# U76-01 — Direct arithmetic Gram reduction

Date: 2026-11-26. Status: exact symbolic reduction from the arithmetic Weil
functional; no numerical entry comparison or certificate yet.

## Conventions

Let a>0, L=2a, k_m=2 pi m/L=pi m/a, and

    chi_m(x) = L^(-1/2) exp(i k_m x) 1_[-a,a](x)
    G_mn = Q_W(chi_m,chi_n) = W(chi_m * tilde(chi_n)).

The Fourier transform convention is F[f](t)=integral f(x) exp(i t x) dx.
Box functions are used for convenient calculations; any transfer to the
admissible test-function domain needs the form-core/continuity justification.

For 0<=t<=L, direct integration over the overlap interval [-a+t,a] gives

    C_mn(t) = (chi_m * tilde(chi_n))(t)
            = (1-t/L) sinc((k_m-k_n)(L-t)/2) exp(i(k_m+k_n)t/2),

where sinc(u)=sin(u)/u and sinc(0)=1. Conjugation and index swap give
C_mn(-t)=conj(C_nm(t)). For this centered exponential basis,

    S_mn(t) = C_mn(t)+C_mn(-t) = 2 Re C_mn(t),  0<=t<=L,

and S vanishes outside [-L,L].

## Direct explicit-formula entry

Set K(t)=exp(t/2)/(exp(t)-exp(-t))=exp(-t/2)/(1-exp(-2t)), and
delta_mn=1 if m=n and zero otherwise. Substitution into Suzuki's arithmetic
definition of W yields

    G_mn = integral_0^L 2 cosh(t/2) S_mn(t) dt
           - sum_{2<=q<=exp(L)} Lambda(q)/sqrt(q) S_mn(log q)
           - (log(4 pi)+gamma_E) delta_mn
           - integral_0^L (S_mn(t)-2 exp(-t/2) delta_mn) K(t) dt
           - delta_mn log(tanh(L/2)).

The prime-power sum is finite and includes every q=p^r<=exp(L), with
Lambda(q)=log p. The final diagonal term is the tail of the subtraction:

    2 integral_L^infinity exp(-t/2) K(t) dt
      = 2 integral_L^infinity exp(-t)/(1-exp(-2t)) dt
      = 2 artanh(exp(-L))
      = -log(tanh(L/2)).

During the first audit pass I simplified K(t) incorrectly to
1/(2 sinh(t/2)), omitting exp(-t/2); this produced a false apparent
discrepancy in the tail. The corrected algebra agrees with the prior
repository derivation. Preserve this failed falsification to prevent its
recurrence.

## Parity polarization

For m,n>0 define normalized even and odd vectors

    chi_m^+ = (chi_m+chi_-m)/sqrt(2)
    chi_m^- = (chi_m-chi_-m)/(i sqrt(2)).

Reflection invariance gives exact identities

    Q_W(chi_m^+,chi_n^+) = G_mn + G_m,-n
    Q_W(chi_m^-,chi_n^-) = G_mn - G_m,-n.

The mixed parity block vanishes, and chi_0 occurs only in the even block.
These formulas expose parity and factor-of-two errors independently of the
compressed representation. They do not yet identify LXXV's every-other-
frequency ks arrays with these bases or match the common entry scaling.

For direct checks of the first diagonal entries, the correlation simplifies:

    S_00(t) = 2(1-t/L)
    S_11(t) = 2(1-t/L) cos(2 pi t/L)
    S_1,-1(t) = -sin(2 pi t/L)/pi.

Consequently, the normalized constant even entry is G_00, and the first
normalized odd diagonal is G_11-G_1,-1. These are explicit one-dimensional
arithmetic-form evaluations using the displayed integral and finite prime-
power sum. They provide the first numerical targets, but they have not yet
been evaluated or matched to the production entries.

## Disposition

The direct tail and parity polarization agree symbolically with the prior
arithmetic Gram derivation. This is not a numerical validation. Next evaluate
the chi_0 even entry and first nonzero odd diagonal independently, compare
against the compressed formulas, and resolve basis scaling and the
every-other-frequency support before scaling up.

Source: Suzuki, arXiv:2606.09096v4, §1.1 (arithmetic W and Q_W). This
source states that positivity of the original Weil form on all compactly
supported smooth tests is equivalent to RH. The present finite symbolic
reduction proves neither positivity nor RH.

## Initial wrong-window comparison (2026-11-26; superseded)

The first direct diagnostic used support [-2.51,2.51], length 5.02, in an
exponential basis. Its midpoint values appeared different from the
same-index compressed entries. This was an invalid same-window comparison:
the campaign parameter h=2.51 is the support length, not the half-width.
Preserve the numbers and script as a failed convention check; do not treat
them as evidence against the compressed entries.

For the doubled support, the local IEEE-754 midpoint refinement used
N=2^12, 2^14, 2^16, 2^18, and 2^20. At the final mesh:

    G_00                  = 0.019197802326197156
    G_11                  = 0.019352169298925016
    G_1,-1                = 0.019249031648779225
    G_11 - G_1,-1         = 0.00010313765014579104

These are correct only for that length-5.02 interval. The exact compressed
probe, at Q=10^66, h=251/100, J=128, T=4, M=6, lowCount=1, KEM=20, gave:

    even A[0,0] = [39010612883096363023510418276624185312940219011026208353945855967,
                   39010612883096363023510418276624185312940219011026208353948085882] / Q
    odd  A[0,0] = [69482970314056417111772062543954534383073523169947604567622812363,
                   69482970314056417111772062543954534383073523169947604567627307544] / Q

These exact intervals come from the existing compressed implementation and
are a comparator, not an independent calculation. The apparent discrepancy
was caused first by comparing different support lengths.

## Campaign window and cosine-basis map

The LXXV parameter h is the support length. By translation invariance, use
[0,h] instead of the centered interval [-h/2,h/2]. The orthonormal cosine
basis on [0,h] is

    phi_0(x)=1/sqrt(h)
    phi_n(x)=sqrt(2/h) cos(pi*n*x/h), n>=1.

Reflection about h/2 sends phi_n to (-1)^n phi_n. Thus the even-index and
odd-index spans are invariant orthogonal sectors for the reflection-invariant
Weil form. After translating to [-h/2,h/2], even n=2m gives
(-1)^m cos(2*pi*m*y/h), while odd n=2m+1 gives
(-1)^(m+1) sin((2m+1)*pi*y/h). This is the sector split used by LXXV's
every-other-frequency supports.

For t>=0 define

    I_nk(t)=integral_t^h cos(pi*n*y/h) cos(pi*k*(y-t)/h) dy.

The correlation in the Weil functional is
S_nk(t)=nu_n*nu_k*(I_nk(t)+I_kn(t)), where nu_0=1/sqrt(h) and
nu_n=sqrt(2/h) for n>0. If n and k have the same parity, direct integration
gives I_nk=I_kn. For n!=k,

    I_nk(t) =
      [omega_k sin(omega_k*t)-omega_n sin(omega_n*t)]
      /(omega_n^2-omega_k^2),  omega_j=pi*j/h.

For n=k>0,

    I_nn(t)=(h-t)cos(omega_n*t)/2 - sin(omega_n*t)/(2*omega_n),

and I_00(t)=h-t. Therefore S_nk=2*nu_n*nu_k*I_nk within each sector.
The prime-power part of the direct form is exactly

    -sum_{q<=exp(h)} Lambda(q)/sqrt(q)
       * 2*nu_n*nu_k*I_nk(log(q)),

which is the expression P(n,k) in the compressed generator. The exact source
guards place h strictly between log(11) and log(13); hence the prime powers
in the sum are exactly 2,3,4,5,7,8,9,11, the eight selected shifts. This
proves the prime-term and basis-normalization match symbolically within each
parity sector. The continuous terms still need a complete entrywise
derivation.

The direct full-form entries on [0,h] were evaluated by midpoint refinement
in experiments/u76-support-h-direct-diagnostic.js. At N=2^22 on local Node
v22.23.4, the even constant entry was 0.03901061288350416 and the first odd
entry was 0.06948297031382022. The exact compressed intervals lie near
0.03901061288309636 and 0.06948297031405642. The differences are about
4.1e-13 and 2.4e-13; midpoint refinement is consistent with convergence but
does not rigorously enclose either entry. The output is
experiments/results/u76-support-h-direct-diagnostic.json.

Next derive the archimedean and subtracted-kernel entry identity, replace
midpoint estimates with outward-rounded quadrature, and extend to principal
blocks. No original-form certificate or full 52-by-52 match is established.

## U76-03: exact series for the constant even continuous component

For the normalized constant basis vector on [0,h], the correlation is
`S_00(t)=2(1-t/h)`. The archimedean term therefore has the elementary exact
value

    A_00 = integral_0^h 4 cosh(t/2)(1-t/h) dt
          = 16 (cosh(h/2)-1)/h.

Using `K(t)=exp(-t/2)/(1-exp(-2t))`, the subtracted-kernel integral is

    D_00 = integral_0^h [S_00(t)-2 exp(-t/2)] K(t) dt
          = 2 sum_{j>=0} [J_h(2j+1/2)-E_h(2j+1)],

where

    J_h(a) = 1/a - (1-exp(-a h))/(h a^2),
    E_h(b) = (1-exp(-b h))/b.

This follows by expanding `(1-exp(-2t))^-1=sum_{j>=0} exp(-2jt)` for `t>0`
and integrating each paired summand. The pairing is essential: the two
separate sums diverge, while their difference is O_h(j^-2). The integral is
locally finite because `S_00(t)-2exp(-t/2)=O(t)` cancels the `1/(2t)` kernel
singularity. The formula is an exact series representation of this one
continuous component; it is not yet a numerical enclosure. A certified
implementation must bound the paired-series tail uniformly and enclose the
exponentials, then combine this result with the exact archimedean term, pole,
tail, and prime terms. No interval computation is claimed here.

An explicit absolute tail bound follows from writing each pair as

    J_h(a)-E_h(b) = 1/(2ab)-1/(h a^2)
                     + exp(-a h)/(h a^2)+exp(-b h)/b,
    a=2j+1/2, b=a+1/2.

For every h>0, `exp(-a h)<=1` and `exp(-b h)<=1/(b h)`, so

    |J_h(a)-E_h(b)| <= (1/2+3/h)/a^2.

Consequently, truncating D_00 after j=0,...,J-1 leaves absolute error at
most

    2(1/2+3/h) [1/(2J+1/2)^2 + 1/(2(2J+1/2))].

Here the final bracket bounds the decreasing sum by its first omitted term
plus the integral from J to infinity. This tail estimate is rigorous but
coarse; it does not enclose the finite partial sum, whose exponentials still
need outward-rounded evaluation. At h=251/100, the constant is finite and
explicit, so the bound can be made arbitrarily small as J grows.

### Accelerated exact decomposition

The algebraic part of each summand can instead be summed exactly:

    J_h(a)-E_h(b)
      = (1/a-1/b) - 1/(h a^2)
        + exp(-a h)/(h a^2) + exp(-b h)/b,
    a=2j+1/2, b=2j+1.

The first infinite sum is

    sum_{j>=0} (1/(2j+1/2)-1/(2j+1)) = pi/4 + (log 2)/2.

For a direct verification, write it as the integral
`integral_0^1 (x^(-1/2)-1)/(1-x^2) dx`; setting `u=sqrt(x)` reduces the
integrand to `2/((u+1)(u^2+1))`, whose elementary integral is
`pi/4+(log 2)/2`. The second sum is

    sum_{j>=0} 1/(2j+1/2)^2 = (pi^2+8G)/4,

where `G=sum_{j>=0}(-1)^j/(2j+1)^2` is Catalan's constant. This follows by
splitting the odd reciprocal-square sum into residue classes 1 and 3 modulo
4; their sum is `pi^2/8` and their difference is `G`.

Consequently the entire subtracted-kernel component has the exact form

    D_00 = 2 [ pi/4 + (log 2)/2 - (pi^2+8G)/(4h) + R(h) ],

    R(h)=sum_{j>=0} [ exp(-h(2j+1/2))/(h(2j+1/2)^2)
                     + exp(-h(2j+1))/(2j+1) ].

This representation has a geometric tail. With `q=exp(-2h)`, the remainder
after j=0,...,J-1 is at most

    [ exp(-h(2J+1/2))/(h(2J+1/2)^2)
      + exp(-h(2J+1))/(2J+1) ] / (1-q).

Both terms are positive and their denominators increase with j, so this is
an immediate comparison with geometric series. Unlike the earlier O(1/J)
bound, the exponential tail is practical at h=251/100. This is an exact
analytic reduction; evaluation of `pi`, `log 2`, `G`, and the finite
exponential sum still requires outward-rounded arithmetic before it can be
compared with the compressed entry interval.

This is the first explicit continuous-term reduction independent of the
compressed entry routine. The odd first diagonal and general off-diagonal
entries still require separate formulas. The reduced problem now has a
specific falsification target: independently enclose `A_00-D_00` and compare
it with the compressed code's `K(0,0)` plus its pole and diagonal corrections,
keeping the prime contribution separate.

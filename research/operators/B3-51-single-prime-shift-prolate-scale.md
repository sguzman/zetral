# B3-51 — A single prime shift has an exact effective prolate scale

Date: 2026-11-28. Status: exact unitary-scaling identity for each Fourier
shift block; the Mellin-leakage estimate and full-product transfer remain open.

## Conventions and block

Use logarithmic coordinate `x=log u` and Fourier convention
`fhat(s)=integral f(x) exp(-isx) dx`. Thus
`T_tau f(x)=f(x-tau)` is unitary and its Fourier multiplier is
`exp(-is tau)`. Let `P_a` be multiplication by `1_(0,a]` in the positive
multiplicative model. The scaling unitary `theta(c)` satisfies

    theta(c) P_a theta(c)^* = P_(ca),
    theta(c) U_infinity = U_infinity theta(c),

because `U_infinity` is a Mellin multiplier. For the `m`-th geometric mode of
one prime `p`, the local coefficient is
`d_(p,m)=(1-p^(-1))p^(-m/2)` and the translation is
`T_(m log p)`, for `m>=0`. Its contribution to the Hankel operator is

    d_(p,m) Gamma_(t,m),
    Gamma_(t,m)=(1-P_(1/t)) U_infinity T_(m log p) P_t.

Since `T_(m log p) P_t = P_(t p^m) T_(m log p)`,

    Gamma_(t,m) = G_(t p^m,1/t) T_(m log p),
    G_(a,b) := (1-P_b) U_infinity P_a.

The right factor is unitary and does not affect singular values.

## Exact balancing identity

For any `a,b>0`, scaling gives

    theta(c) G_(a,b) theta(c)^* = G_(ca,cb).

Choose `a=t p^m`, `b=1/t`, and `c=p^(-m/2)`. Then

    ca = t p^(m/2) =: T_m,
    cb = 1/(t p^(m/2)) = 1/T_m.

Therefore

    G_(t p^m,1/t)
       = theta(p^(m/2)) G_(T_m,1/T_m) theta(p^(-m/2)),

so `Gamma_(t,m)` has exactly the singular values of the archimedean block
`Gamma_infinity(T_m)=(1-P_(1/T_m))U_infinity P_(T_m)`. Its singular vectors
are the corresponding archimedean prolate vectors after scaling and a
log-translation. Both operations are Mellin multipliers of modulus one, so
they preserve the modulus of each vector's Mellin transform.

The `m`-th prime coefficient consequently scales the singular values to

    (1-p^(-1)) p^(-m/2) kappa_n^infinity(t p^(m/2)).

ACG's archimedean prolate count is about `4 T_m^2`, hence about
`4 t^2 p^m` modes for this shift. This matches the paper's predicted
`p^m`-mode / `p^(-m/2)`-angle scale for an individual prime contribution.

## What the identity establishes, and the missing bridge

This is an exact result for each isolated shift block. It explains the
effective scale behind the source heuristic and gives a way to import
archimedean prolate singular-value estimates with explicit dependence on
`p,m,t`. It does **not** make the singular vectors of the sum of all shifted
blocks equal to the singular vectors of its summands; those modes can mix.

It also does not prove (66). The standard archimedean Slepian identities
control ordinary Fourier leakage of prolate profiles `h_(n,T_m)` outside
`[-T_m,T_m]`. H2′ instead localizes the Mellin transforms of singular vectors
in the `L^2(R_+,d*u)` model. Under the unitary radial map `w`, these are
radialized prolate profiles; their Mellin transform is a Fourier transform
after `x=log u` and includes the radial weight. It is not the ordinary
Fourier transform whose Slepian leakage is given by ACG equation (14). The
arithmetic map `E` and its zeta-weighted Mellin formula are a separate,
nonunitary map and do not identify these singular vectors; that formula
cannot be inserted into this operator estimate.

The missing work is therefore (i) a quantitative Mellin-band bound for the
radialized prolate profiles, uniform in the moving scale `T_m`, and (ii)
stability of that bound under summation of the local-factor blocks. This
pinpoints the gap between the exact scale law and the source's expected
frequency-localization heuristic without conflating ordinary Fourier,
Mellin, and arithmetic-map transforms.

Clarification from a direct rereading of ACG §8.3: Remark 8.10 does explicitly
state the archimedean Mellin-tail estimate (66), with a super-exponential
tail in the singular-vector index. B3-51's distinction above is only that
ordinary Fourier leakage by itself is not that Mellin estimate. B3-52 proves
an exact transfer of the archimedean localized pair trace to each isolated
prime shift at scale `T_m`; the constants' dependence on `T_m` and stability
under summing shifts are still unproved.

## Verification

The scale identity follows by direct conjugation of the two support
projections; the coefficient and translation are the one-prime expansion in
B3-21/B3-50. The prolate count is imported from ACG §2.5 and Theorem 2.1.
The distinction between the unitary radial model and arithmetic `E` map
follows their equations (10), (53), and the definition preceding Theorem 8.1.
No numerical or formal verification was used. This is not an H2′ proof, a
full semilocal singular
correspondence, an RH result, or a novelty claim.

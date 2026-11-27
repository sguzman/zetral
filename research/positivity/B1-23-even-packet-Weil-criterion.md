# B1-23 — Paired packets realize all even Weil tests

Date: 2026-11-27. Status: exact reduction to the established even-test Weil
criterion; no novelty claim and no RH proof.

## Statement

For the family
`f_{g,h}(x)=(g(x)+g(h-x))/sqrt(2)`, with real
`g in C_c^infty((0,L))`, positivity of
`W(f_{g,h}*tilde(f_{g,h}))` for every `g,L,h` is equivalent to positivity
of the Weil form on every real even compactly supported smooth test
autocorrelation. By Yoshida's even-test version of Weil's criterion, this is
equivalent to RH.

## Exact packet realization

Let `q` be any real even member of `C_c^infty(R)`. Choose `A` strictly
larger than the radius of its support and put `h=2A`, `L=2A`, and

    g(x)=q(x-A)/sqrt(2).

Then `supp(g) subset (0,L)`. Evenness gives
`g(h-x)=q(A-x)/sqrt(2)=q(x-A)/sqrt(2)=g(x)`, and therefore

    f_{g,h}(x)=q(x-A).

Translation leaves the autocorrelation unchanged:
`f_{g,h}*tilde(f_{g,h})=q*tilde(q)`. Thus the paired family contains every
even test form exactly, including even tests nonzero at the origin. There is
no approximation, limiting process, or finite-window restriction in this
reduction.

## RH directions and prior art

Under RH, the Weil explicit formula writes the autocorrelation value as the
sum of nonnegative squared transforms over critical-line zeros, proving
nonnegativity. Conversely, the established Weil criterion restricted to
even compactly supported smooth tests (Yoshida, *On Hermitian Forms attached
to Zeta Functions*, 1992, Proposition 1(2), as cited in later accounts)
implies RH from positivity on all such tests. A recent exposition of the
trace formula explicitly records that even tests detect every nonreal
off-line zero and that the zeta xi-function has no real zero
([source](https://www.alphaxiv.org/abs/2611.trace-semilocal-idele-classes.pdf));
Bombieri also presents a necessary and sufficient Weil positivity criterion
([Theorem 1](https://www.bdim.eu/item?fmt=pdf&id=RLIN_2000_9_11_3_183_0)).
Suzuki's direct and zero-side explicit formulas fix the project normalization
([arXiv:2611.33001v1, equations (1.2)–(1.3)](https://arxiv.org/html/2611.33001v1)).

The converse here is an application of that cited classical criterion, not
an independent reproof of Yoshida's theorem. The algebraic packet reduction
is direct. No numerical computation, Lean proof, or new operator
correspondence is involved. This restricted-positivity result is therefore
not a new RH criterion; its value is to show that the paired-packet family
already contains the full even test class, so it is not a genuinely smaller
positivity family.

# PMA63-W06 — geometric-block parity tail proof

Status: completed scoped analytic audit; ready for lead review.

Baseline: `d444b28` (LXIII LB04 odd geometric replay). Scope: the bound produced by `experiments/lb03-dyadic-tail-factors.js` and consumed by `experiments/lb03-geometric-tail-replay.js`. This is a proof of the high-mode scalar tail majorant only; it does not recheck component moment bounds, generated interval matrices, or determinants.

## Target inequality

Fix campaign (h=239/100), (M=8192), and (m=M-1=8191). For each power (p\in\{2,4,6,8,10,12,14,16\}), let (t=p-1\ge1), and consider either parity progression of integers (n>M). The source uses

\[
g(n)=\log\!\frac{n}{2h}-\frac{3h^2}{2\pi^2n^2}-P-L,
\]

where (P) is the selected prime norm upper bound and (L) is the fixed pole loss for that sector. On (n>0),

\[
g'(n)=\frac1n+\frac{3h^2}{\pi^2n^3}>0.
\]

Thus (g) is increasing. The guard in the source establishes a positive lower enclosure at the first omitted index (M+1), and at every subsequent block start. Positivity at (M+1) plus monotonicity ensures all actual tail denominators are positive.

Define (a_0=m) and (a_{k+1}=\lceil9a_k/8\rceil) for (0\le k<64). Write (a=a_k,b=a_{k+1}). The source's block contribution is the interval evaluation of

\[
\frac{m^t}{g(a)}(a^{-t}-b^{-t}),
\]

using (g(M+1)) in the first block and (g(a_k)) thereafter. Since the first actual tail term is (n=M+1), this is a valid denominator lower bound and is tighter than (g(m)). The final infinite block contributes (m^t/[g(a_{64})a_{64}^t]).

## Finite geometric blocks

For a fixed parity, let (n_0<n_1<\cdots) be the terms in ((a,b]). The first term satisfies (n_0\ge a+1); for every later term, the intervals ([n_j-2,n_j]), (j\ge1), are disjoint, lie in ([a,b]), and

\[
\int_{n_j-2}^{n_j}x^{-(t+1)}\,dx\ge2n_j^{-(t+1)}.
\]

Thus

\[
\sum_{a<n\le b,\,n\equiv\epsilon\ (2)}n^{-(t+1)}
\le (a+1)^{-(t+1)}+\frac12\int_a^b x^{-(t+1)}dx.
\]

Since (b\ge9a/8),

\[
\int_a^b x^{-(t+1)}dx\ge\frac{a^{-t}}t\left(1-(8/9)^t\right)\ge\frac{a^{-t}}{9t}.
\]

At this campaign's powers (1\le t\le15), and every block start has (a\ge8191\ge18t). Hence the first term is at most (a^{-t}/(18t)\le\frac12\int_a^b x^{-(t+1)}dx). We conclude

\[
\sum_{a<n\le b,\,n\equiv\epsilon\ (2)}n^{-(t+1)}\le\int_a^b x^{-(t+1)}dx.
\]

The source's block numerator is
\[
m^t(a^{-t}-b^{-t})=t m^t\int_a^b x^{-(t+1)}dx.
\]
For actual omitted terms in each block, (g(n)\ge g(a)), so the source block contribution bounds (t m^t) times the weighted parity sum over that block. In the first block, actual tail terms have (n\ge M+1), and the code uses the certified lower bound (g(M+1)>0). The integral argument applies to this subset too.

## Final infinite block

For (n>a=a_{64}),

\[
\sum_{n>a,\,n\equiv\epsilon\ (2)}n^{-(t+1)}
\le(a+1)^{-(t+1)}+\frac{a^{-t}}{2t}
\le\frac{a^{-t}}t,
\]

because (a\ge8191\ge2t). The right side is (\int_a^\infty x^{-(t+1)}dx). Monotonicity gives (g(n)\ge g(a)>0), so the final source term (m^t/[g(a)a^t]) bounds (t m^t) times the remaining weighted sum.

## Consequence and limits

Summing the blocks proves `total` encloses

\[
tm^t\sum_{n>M,\,n\equiv\epsilon\ (2)}\frac{1}{n^{t+1}g(n)}.
\]

The constant-(g(M+1)) baseline obeys
\[
\sum_{n>M,\,n\equiv\epsilon\ (2)}\frac{1}{n^{t+1}g(M+1)}\le\frac{1}{t m^t g(M+1)},
\]
by bounding the parity sum by the full integral from (m=M-1) to infinity. Therefore multiplying `total` by the outward enclosure of (g(M+1)) yields a ratio bound to that baseline. If its upper endpoint is below one, the new tail allowance is strictly smaller. This comparison is valid conditional on the directed fixed-point primitives and positive lower enclosures. Each `g(a)` is evaluated with interval arithmetic; using its lower endpoint in a positive denominator is conservative.

This proof is analytic and was not machine checked. It assumes the written (g) formula, correct outward evaluation of (g), and the retained positive guards. It does not establish the upstream moment inequalities or the complete operator comparison. No RH, negative-spectrum, or Hilbert–Pólya construction claim follows.

# TC02-M01: M sensitivity of the T832 eighth-only obstruction

## Result

The stored eighth-only loss on the fixed vector `(390867,-100000,0,...)` is
`143518844513765636642685361`, against an upper-energy endpoint
`115349470474011610351304240`. The loss/energy ratio is about `1.24421`.

The generator does not have a simple `M^-15` eighth scaling. In
`experiments/rc01-post-log11-em.js`, `den = 1-(Kmax/(M+1))^2`; with the
high-index set reaching the selected parity endpoint `M`, `Kmax=M`, so
`den=(2M+1)/(M+1)^2`, which decreases like `2/M`. Also
`C8=((CL/M)r8+rd)/(den*delta^3*|ph|)`, and the eighth allowance is
proportional to `(C8+1)^2/((M-1)^15*g(M+1))`. Thus the guard can add roughly
two powers of M to the numerator, while `g` and the tail sums change too.

I evaluated a deliberately conditional frozen-tail model: hold each stored
`r8`, `rd`, `ph`, the witness, basis and upper energy fixed; replace the
guard by its exact new value; retain the `+1`; and omit the `g(M+1)` ratio.
The first integer M where the modeled eighth loss falls below the stored
upper-energy endpoint is `12497` (modeled loss ratio `0.8031006683` relative
to the T832 loss; at `12496`, `0.8039366543`). The model is reproducible with
`experiments/worker-TC02-M01/frozen_tail_threshold.py`.

## Scope and limitation

This is a planning sensitivity only, not evidence that regeneration at
`M=12497` will pass. At a true rerun, extending M changes the set of high
indices, `r8`, `rd`, `ph`, `CL`, `g`, the finite complement, and potentially
the upper-energy form. The stored T832 artifact cannot bound these changes.
Consequently no certified M threshold follows from this calculation. It does
show that the naive fixed-numerator `M^-15` estimate is structurally wrong;
any regeneration decision needs refreshed tails and energy data (or a proved
uniform bound on their changes).

No source terms or physical tail were altered, and no claim is made about the
underlying operator. The next mathematically sound step is a targeted
two-coordinate sensitivity derivation bounding the changes in `r8`, `rd`,
`ph`, and the upper-energy form as M grows; absent such bounds, a trial rerun
can only be exploratory and must be certified from its complete regenerated
data.

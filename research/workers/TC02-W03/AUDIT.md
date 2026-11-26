# TC02-W03 — independent T832 eighth-only obstruction audit

## Result

I independently reproduced the exact two-coordinate certificate added at main
`d87ed0b` and preserved at starting commit `449203e`. For
$x=(390867,-100000,0,\ldots,0)$, the interval upper-energy quadratic is

```text
[115349469004477312621952585,
 115349470474011610351304240]
```

The two eighth-order diagonal losses, after relaxing every joint allocation by
the bound that each normalized direction weight is at most one, have exact
integer lower bounds

```text
45636977251108733182163491
97881867262656903460521870
sum = 143518844513765636642685361.
```

Their sum exceeds the upper-energy endpoint by
`28169374039754026291381121`. The finite and all seven rank component
quadratic lower endpoints along this vector are nonnegative. Therefore the
stored lower-comparison quadratic is strictly negative along $x$ for every
positive joint allocation in the inherited fixed diagonal eighth comparison.

This is an exact obstruction to the comparison scheme at these stored
parameters. It is not a lower bound on the physical tail loss and implies
nothing about the sign of the original infinite-dimensional form.

## Allocation cancellation

Let $D_0$ be the old share denominator, $s_8$ the old eighth share, and
\(\rho_8/Q\) the saved eighth factor upper endpoint. For a new joint allocation
with denominator $D_1$, let $w_i>0$ be the direction weights assigned to
the eighth diagonal term and $W=\sum_i w_i$ its grouped share. The joint
scheme uses seven rank shares plus all $w_i$, so their sum is $D_1$, and
therefore each $p_i=w_i/D_1\le1$.

The saved replay forms the direction allowance with outward ceilings, starting
from \(E_iW\rho_8/(w_iQ)\), then scales by \(s_8D_1/(WD_0)\). Dropping the
ceilings gives the exact real lower bound

\[
\frac{E_iW\rho_8}{w_iQ}\frac{s_8D_1}{WD_0}
=\frac{E_is_8\rho_8}{D_0Qp_i}
\ge\frac{E_is_8\rho_8}{D_0Q}.
\]

The diagonal contribution in direction $x$ is multiplied by $x_i^2$. The
script floors each positive rational contribution after that multiplication,
so its integer lower bounds remain conservative. This argument does not depend
on $D_1$, on how the rank shares are distributed, or on a specific optimizer.

## Independent arithmetic

From the repository root:

```sh
python3 experiments/worker-TC02-W03/reproduce_t832_eighth_obstruction.py
```

The Python script independently concatenates the six raw parts (lengths
600000, 600000, 600000, 600000, 600000, 204173), parses the exact scale
\(Q=10^{66}\), and computes quadratic interval endpoints with integer
arithmetic on the symmetric interval intersections. It also checks the finite
and seven rank signs, verifies all eight saved allocation weight layouts, and
confirms the exact two-coordinate lower-matrix quadratic is negative for each
saved replay.

The reproduced outputs match the lead's JS certificate exactly. No flaw was
found in the allocation cancellation or endpoint arithmetic in the checked
scope.

## Limits

The raw analytic component bounds were not regenerated. The proof excludes the
fixed T832 diagonal comparison only; a coupled eighth remainder, tighter bound,
new trial space, or changed cutoff is outside scope. No independent original
form evaluation, RH conclusion, formal proof, or novelty claim is made.
AI-assisted work; no human review is claimed.

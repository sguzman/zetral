# U72 finite-block exponential-tail audit

Worker: `U72-FINITE-TAIL-AUDIT-W01`  
Status: READY_FOR_REVIEW  
Branch: `worker/u72-finite-tail-audit-w01`

## Finding

The preceding `U72-ORIGINAL-FORM-FINITE-W01` evaluator calculated and reported a tail bound for its 100-term exponential sums but did not include the omitted positive tail in the interval values. Thus its printed intervals were not, as written, enclosures for the full infinite sums. This audit corrects that omission without changing the formula or other interval computations.

For `r_j=2j+1/2`, each omitted summand in both exponential sums satisfies

`exp(-h r_j)/(r_j^2+x) <= exp(-h r_j)/r_j^2`

and

`exp(-h r_j) r_j^2/(r_j^2+x)^2 <= exp(-h r_j)/r_j^2`,

where `x>=0`. Since `r_j>=r0=2N+1/2` and increments by 2, the omitted tail is bounded by

`B = exp(-h r0)/(r0^2 * (1-exp(-2h)))`.

The corrected evaluator adds the interval `[0,B]` to each truncated sum before subtraction. At `N=100`, the interval bound is approximately `2.8199374170770711e-221`.

## Rerun result

On the same four even residual modes `94,96,98,100`, all 2,209 corrected projected matrix intervals remain inside the staged exact enclosures. Exact fraction checks of serialized endpoints give minimum staged-boundary clearance `1.49e-64` and maximum corrected/staged width ratio `9.756032363681083e-89`. Every prior serialized interval is contained in its corrected interval. The correction is negligible at the staged grid scale, but necessary for the claimed interval inclusion.

Reproduction command from the repository root, with the raw input from the recorded source branch:

```sh
python3 experiments/worker-u72-finite-tail-audit-w01/certify_first_finite_block_tail.py /path/to/u72-62-25-even-t832-raw.json experiments/results/u72-original-form-finite-w01/staged-94-100.json > experiments/results/u72-finite-tail-audit-w01/independent-94-100-tail-included.json
```

The raw input was retrieved from `worker/u72-02-even-reconstruction`, blob `b6000240e5f35913c5371fa2675faa6ab168bbe0`. The staged chunk and previous evaluator are on `worker/u72-original-form-finite-w01`; staged chunk blob `82539aecfd92d1242dbb6cf5e5ac0ee20991ceac`, previous evaluator commit `c04b9a5eef660f3dc19662fa29fe1072d135f6ac`.

## Limits

This corrects only the exponential-series truncation enclosure in the four-mode probe. It does not independently verify the other Euler–Maclaurin remainder derivations or certify the entire finite residual sum, its remaining tail, positivity, an operator construction, or RH. The result remains a machine interval computation conditional on the mathematical remainder bounds and `mpmath.iv` outward arithmetic. No human or formal verification has been performed.

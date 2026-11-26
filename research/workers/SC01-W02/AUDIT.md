# SC01-W02: Independent exact guard audit

## Result

An independent rational interval implementation reproduces enclosing intervals for all 20 saved parity/cutoff guards at low counts 41–50. Their positivity signs agree with the saved guard JSON. At the proposed common cutoff 43, both parity guards are strictly positive; the even guard at 42 is strictly negative.

The independently computed scaled intervals for the three decisive cases (with `Q=10^66`) are:

| low count | parity | independent interval for `Q*g` |
|---:|:---|:---|
| 42 | even | `[-5456657798726254464537843816909640599765217881589462691287489862, -5456657798726254464537843816909640599765217881589462691287489861]` |
| 43 | even | `[18079734758057179029231889628658386073663169049967298705366624423, 18079734758057179029231889628658386073663169049967298705366624424]` |
| 43 | odd | `[29642909340986702358391450051584753045916257929259901050303596353, 29642909340986702358391450051584753045916257929259901050303596354]` |

The guard expressions are increasing in the cutoff for each parity: the logarithm increases with mode; the subtracted inverse-square term decreases; and the odd pole-loss term, proportional to the inverse cube of low count, decreases. Thus the two positive guards at 43 imply positivity at every larger cutoff. The negative even guard at 42, together with the same monotonicity, rules out any smaller common cutoff. Within the recorded guard criterion, 43 is therefore the least common passing cutoff.

## Reproduction

From the repository root:

```sh
python3 experiments/worker-SC01-W02/check_guard_intervals.py
```

All calculations use exact `Fraction` arithmetic. The checker independently encloses pi using Machin's identity and alternating arctangent series; logarithms use the positive atanh series with an explicit geometric tail; and the hyperbolic cosine uses positive Taylor bounds for `exp(x)` and reciprocal bounds for `exp(-x)`. It compares its rational enclosures with all saved guard intervals and verifies the positivity signs.

## Scope and limits

This audits the finite SC01 guard calculation using the saved exact witness constant `2851/1000` and the stated guard expression. It does not rederive the witness constant, the prime-norm estimate, the operator bound represented by the guard, or the SC01 piecewise witness. It does not audit the subsequent SC02 matrix comparison or establish an original-form spectral claim.

AI-assisted; no human review or formal verification has occurred.

## Provenance

Starting commit: `ede875d` (Campaign LXVIII SC01 completion and SC02 target).

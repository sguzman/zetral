# DSC02 diagnostics and DSC03 directional certificate

2026-11-25. Numerical interval certificate conditional on the ECR/DNB identities and bounds recorded below. No RH proof, priority claim, or independent formal verification is claimed.

## Scope and frozen comparison

This run isolates Campaign LI's h=21/20, even-parity ECR03 comparison. It uses the frozen ECR03 rational finite high trial (`J=256`, `M=768`, `S=33`, `T=64`, low indices `0,2,4,6,8,10`) and the existing fixed-point interval scale `Q=10^18`. At this h only the prime-2 term is active (`h<log 3`); the high weight is enclosed by `[1.251676622855956853, 1.251676622855957044]`, hence is strictly positive.

The ordinary ECR03 enclosure fails its max-row-radius LDL test: the final reported pivot is negative (about `-10.56`). This is a failure of that sufficient enclosure, not a negative eigenvalue claim. The symmetric midpoint matrix has smallest floating eigenvalue about `2.68e-7`, while the uniform row radius is about `3.99e-7`; these floating diagnostics explain why the global radius subtraction is inconclusive but are not used in the certificate.

## Directional accounting

The rational near-null direction is

```
q = (-779387, 623233, -63570, -9728, -749, -367)
||q||^2 = 999999942632
```

The direct, normalized interval accounting from the saved run is:

| Quantity | Enclosure |
|---|---:|
| upper Schur comparison `qᵀ(A-basicCost)q / ||q||²` | `[2.03259221461e-7, 3.57151503826e-7]` |
| finite residual penalty (dependency interval) | `[-2.862429e-9, 2.463633e-8]` |
| leading matrix tail | about `1.03454619e-9` |
| second matrix tail | about `4.74e-12` |
| third remainder tail | `4.64779503e-10` |
| raw lower comparison in this direction | `[1.77118768404e-7, 3.58509871613e-7]` |
| lower bound after old uniform row-radius subtraction | about `-1.31527765916e-7` |

Thus the chosen direction does not produce a negative Schur upper bound. The old global radius loses the directional positivity margin; the analytic tail terms are substantially smaller. The finite residual penalty interval straddles zero because it is evaluated with dependency, while the exact finite Gram is positive semidefinite.

## Congruence LDL result

Apply the exact integer congruence `V=[q,e_1,e_2,e_3,e_4,e_5]`, with determinant `-779387`. The source forms `Vᵀ mat V` from the full outward interval matrix *before* the old max-row-radius subtraction. The resulting interval LDL has six strictly positive pivots. Their lower endpoints are approximately:

```
177118.7582433546
0.22875612416949218
0.16467510192841757
0.19800141365590196
0.9875925836486772
1.0711494237345043
```

This certifies strict positive definiteness of the enclosed low comparison for this frozen h=21/20 even trial, provided the ECR03 decomposition, finite residual Gram, and analytic tail formulas are applied as specified. It consequently certifies the corresponding exact even Schur lower comparison under those identities. It does not establish positivity of other parity/length cases, prove RH, or yield a full noncircular Hilbert–Pólya construction.

As an independent arithmetic replay, `experiments/dsc02-verify-directional-ldl.py` reads the saved endpoint integers and computes congruence plus interval LDL using Python `Fraction` endpoints, without the JavaScript fixed-point multiply/divide routines. All six lower pivot endpoints remain strictly positive. This is an independent implementation check, not an independent audit of the analytic inequalities or their derivation.

## Reproduction and artifacts

From the repository root:

```
node experiments/dsc02-directional-interval-certificate.js > experiments/results/dsc02-directional-interval-certificate.json
python3 experiments/dsc02-verify-directional-ldl.py
```

The raw JSON retains the source matrices, directional decomposition, transformed intervals, and pivot bounds. The source is a bounded h=21/20, even-only instrumentation of the ECR03 calculation.

## Next research step

This result is sufficient to proceed to DSC04's audit/selection rather than widening the same diagnostic sweep. First obtain independent review of the interval certificate and ECR identities. Then test whether the same fixed trial and rational congruence extend to a modest h above `log 3`, where the prime-3 term becomes active; retain the prime threshold and all tail/rate enclosures explicitly. Until reviewed, treat this as a conditional computational certificate rather than a settled campaign result.

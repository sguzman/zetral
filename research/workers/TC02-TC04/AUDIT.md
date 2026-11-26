# TC02-TC04: independent stored-minor replay of the even transformed certificate

## Verified

Using a separate Python integer Bareiss implementation, I replayed the 44
leading principal minors saved in
`tc02-49-20-even-m12288-t832-transformed-certificate.json`. Every division was
exact, all 44 pivots were positive, and every pivot string matched the
certificate. The first pivot is `929226141064924700398`; the final pivot has
2,676 decimal digits.

I also rebuilt the fixed-energy grid matrix from the stored lower integer
matrix and its 44 positive energy upper endpoints. The reported grid value
`45449/1000000` gives 44 positive pivots. At `45450/1000000`, the leading
minor test fails at pivot 44. The 51 allocation weights are positive and sum
to the stated denominator `10^12`. The reconstructed source record has the
claimed even `h=49/20`, `M=12288`, `T=832`, and 44-dimensional low basis.

Reproduction:

```sh
python3 experiments/worker-TC02-TC04/replay_transformed_minors.py
```

## Scope

This is an independent arithmetic replay of the *stored final matrix*, not a
fresh reconstruction of that matrix from the six raw parts. In particular, I
did not independently rederive the transformed eighth-tail coefficient,
outward interval congruence, or all matrix entries from source coefficients.
The exact positive minors therefore verify the final certificate's integer
positivity computation, conditional on its saved lower matrix and stated
energy endpoints. The row transform itself has determinant `100000`, hence
preserves the finite trial span; this fact does not independently verify the
tail majorant.

No conclusion is drawn about the original form beyond the stated comparison,
and this audit is not a full independent original-form evaluation, RH result,
or formal proof review.

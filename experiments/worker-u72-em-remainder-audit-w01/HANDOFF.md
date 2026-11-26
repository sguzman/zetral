# U72 Euler–Maclaurin radius audit

Worker: `U72-EM-REMAINDER-AUDIT-W01`  
Status: READY_FOR_REVIEW  
Branch: `worker/u72-em-remainder-audit-w01`

## Scope and result

I checked whether the order-40 Euler–Maclaurin radii in the corrected four-mode evaluator dominate standard integral remainder bounds for its digamma, trigamma, and Euler-constant expansions. Exact rational arithmetic confirms the implemented radii are conservative by factors 80, 2, and 80, respectively.

Let `Bbar_40` denote the periodic Bernoulli polynomial. Its absolutely convergent Fourier series and the triangle inequality give

`|Bbar_40(t)| <= 2*40!/(2*pi)^40*zeta(40) = |B_40|`.

For `Re Z >= R > 0`, the Euler–Maclaurin integral remainder after the `B_40` term for the digamma expansion has modulus at most

`|B_40| * integral_0^infinity (R+t)^(-41) dt = |B_40|/(40 R^40)`.

For trigamma, applying the same formula to `(Z+t)^(-2)` contributes the derivative factor 41; integration of `(R+t)^(-42)` cancels that factor, giving `|B_40|/R^41`. For the harmonic/Euler-constant expansion at cutoff `N`, the corresponding bound is `|B_40|/(40 N^40)`.

The implementation instead uses `2|B_40|/R^40`, `2|B_40|/R^41`, and `2|B_40|/N^40`, so the ratios are exactly 80, 2, and 80. Here `R=512+1/4=2049/4`, `N=8192`, and `|B_40|=261082718496449122051/13530`. The exact computations are reproducible with:

```sh
python3 experiments/worker-u72-em-remainder-audit-w01/check_em_radii.py > experiments/results/u72-em-remainder-audit-w01/radii.json
```

## Conclusion and limitations

No underestimation was found in these three stated Euler–Maclaurin radii. Together with the preceding exponential-tail correction, this closes the specific omission and radius-size checks for the four-mode numerical probe. It is still a machine interval calculation conditional on the Euler–Maclaurin integral remainder formulas and `mpmath.iv` outward arithmetic; this work does not formally verify those library operations or audit every analytic identity in the original-form evaluator. It covers neither the full residual sum nor the remaining infinite-mode tail, positivity, an operator construction, or RH. No human or formal review has been performed.

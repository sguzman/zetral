# SC02-W02: Parity-aware eighth-tail bound

## Bound

For a fixed parity, let `q` be the first index in that parity strictly above the cutoff `M`. Suppose the campaign weight `g(x)` is positive and increasing for `x >= q`. Then

\[
\sum_{j\ge 0}\frac{1}{(q+2j)^{16}g(q+2j)}
\le \frac{1}{g(q)}\left(q^{-16}+\frac{1}{30q^{15}}\right).
\]

Indeed, monotonicity gives `g(q+2j) >= g(q)`. For the remaining powers, `x^-16` decreases, so

\[
\sum_{j\ge1}(q+2j)^{-16}
\le \frac12\int_q^\infty x^{-16}\,dx
=\frac{1}{30q^{15}}.
\]

For the SC02 even sector, `M` is even and `q=M+2`. The source currently bounds this parity tail by the looser all-integer estimate `1/(15 (M-1)^15 g(M+1))`. With `h=61/25` and the saved `primeNormUpper`, `g(x)=log(x/(2h))-3h^2/(2x^2 pi^2)-primeNormUpper` is increasing because

\[
g'(x)=x^{-1}+\frac{3h^2}{\pi^2x^3}>0.
\]

An exact rational interval calculation bounds the ratio of the new tail scalar to the old one by less than `0.499256` at `M=10240` and less than `0.499381` at `M=12288`. The numerator uses a lower bound for `g(q)`; for safe rescaling of the old stored bound, the ratio uses an upper bound for exact `g(M+1)`, which also bounds above the source interval lower endpoint used in the old denominator. The implementation replaces only the eighth-tail scalar in the saved component intervals; the saved `C8` values and all other component bounds remain as inputs. It multiplies each saved upper integer by this exact rational upper ratio and rounds upward, so the result remains a certified upper bound despite the earlier fixed-point rounding.

## Exact replay findings

- At `M=10240`, the sharper tail bound does not rescue any of the eight saved allocations: each has nine positive leading pivots and then fails at the tenth. Reoptimizing allocations under the sharper bound was not attempted.
- At `M=12288`, all eight saved allocations remain positive through all 43 leading pivots. For allocation zero, exact Sylvester checks give a fixed-energy grid margin of `41278/1000000`; the next grid value fails. The campaign's existing bound gives `37523/1000000` for that allocation.

Thus this refinement improves the existing M12288 certificate, but the tested unchanged allocations do not eliminate the M10240 cutoff increase.

## Reproduction

From the repository root:

```sh
python3 experiments/worker-SC02-W02/parity_aware_eighth_tail.py 10240
python3 experiments/worker-SC02-W02/parity_aware_eighth_tail.py 12288
python3 experiments/worker-SC02-W02/check_lxix_tail_scale.py
```

The ratio and guard calculations use exact `Fraction` arithmetic. `pi` is bounded above and below using Machin's identity and alternating arctangent series. Logarithms are bounded after power-of-two scaling with the positive atanh series and its explicit geometric remainder; the lower and upper endpoints are used in the appropriate directions for `g(q)` and `g(M+1)`. Matrix reconstruction and determinant/grid checks use arbitrary-precision integers with exact divisibility assertions. Decimal ratios in console output are display approximations only; the script asserts the rational cutoffs stated above.

## Scope and limits

This derives and applies a tighter upper bound for the parity-restricted scalar tail in the stored even SC02 interval-to-matrix certificate. It does not rederive the campaign's `C8` amplitude estimate, the other factor bounds, or the component interval arrays from analytic inputs. The M10240 negative result applies only to its eight saved allocations under this refinement; no new allocation search was done. No odd-sector result, original-form normalization, or operator claim is established.

In the odd sector, the additional pole-loss contribution to `g` is constant in the mode variable, so the same derivative and parity-tail argument applies whenever the sector's high-mode guard gives `g(q)>0`. That odd-sector application was not computed here. This bound is a candidate refinement for LXIX's planned M12288 comparisons, with parity-specific factors and allocations still requiring fresh exact replay.

For the planned LXIX TC02 even parameters (`h=49/20`, `C=2873/1000`, `M=12288`, lowCount 44), `check_lxix_tail_scale.py` certifies `g(12290)>0` and bounds the new-to-old eighth-tail scalar ratio by `4994/10000`. This is only a scalar transfer check; it does not evaluate a TC02 matrix.

AI-assisted; no human review or formal verification has occurred.

## Provenance

Starting commit: `3d2f4d5` (SC03 odd raw part 6 persisted). Inputs: committed SC02 even M10240 and M12288 raw interval parts, factor objects, joint allocations, and replay objects.

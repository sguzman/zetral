# U72 original-form probe — worker handoff

- **ID:** U72-ORIGINAL-FORM-PROBE-W01
- **Status:** READY_FOR_REVIEW
- **Base:** `5e076c163bf97f064a49272556145027bc72dbca` (LXXII U72-01 complete)
- **Question:** Independently evaluate a bounded even low-mode quadratic-form direction at h=62/25 and compare it with the staged interval.

## Result

A separate Python/mpmath implementation evaluated the defining matrix entries for the stored first rational comparison direction. The vector is reconstructed as the first stored low-mode basis row concatenated with the negative first stored trial row, each divided by Q=10^66. The probe computes the full quadratic form over the 417 supported even modes (47 low modes plus 370 trial modes) from the defining sums and shift integrals.

The 90-decimal numerical result is

`2.62994336835243566956280614367071830089748380503466424440235657096111797898e-35`.

The staged exact enclosure for the same comparison direction is

`[2.6299433683524356695628055324595e-35, 2.6299433683524356695628067678324e-35]`.

The computed value lies inside the stored interval. This is an independent numerical consistency check of one direction, not an exact proof and not an independent audit of the full matrix.

## Independent formula path

For even modes, set `r_j=2j+1/2`, `omega_n=pi*n/h`, and `nu_0=1`, `nu_n=sqrt(2)` for n>0. The probe evaluates

- `F_n = sum_j (1-exp(-h*r_j))/(r_j^2+omega_n^2)`;
- `D_n = sum_j (1-exp(-h*r_j))*r_j^2/(r_j^2+omega_n^2)^2`;
- `da_n = Re(psi(1/4+i*omega_n/2))-psi(1/4)`;
- the finite shifted-prime integral `P(n,k)` directly from its sine/cosine integral formula;
- `pole_n = nu_n*sinh(h/4)/(omega_n^2+1/4)` and `alpha=-(gamma+pi/2+3log(2)+log(pi))`.

It then forms the diagonal/off-diagonal matrix entries from these expressions and contracts them against the stored rational vector. The unweighted infinite sum is evaluated through the digamma identity (trigamma at omega=0); the exponential sum uses 100 terms. Its omitted tail is bounded by `2.8199374e-221` at omega=0, which dominates all other omega tails. The digamma, logarithm, trigonometric and contraction calculations use mpmath at 90 decimal digits; their rounding was not outward certified. The result is therefore only numerical evidence.

## Reproduction

The raw source artifact is on `origin/worker/u72-02-even-reconstruction` at `experiments/results/u72-62-25-even-t832-raw.json`; its Git blob is `b6000240e5f35913c5371fa2675faa6ab168bbe0`.

```sh
git show origin/worker/u72-02-even-reconstruction:experiments/results/u72-62-25-even-t832-raw.json > /tmp/u72raw.json
python experiments/worker-u72-original-form-probe-w01/evaluate_even_00.py /tmp/u72raw.json
```

Recorded environment: Python 3.12.14, mpmath 1.3.0. The script and output are `experiments/worker-u72-original-form-probe-w01/evaluate_even_00.py` and `experiments/results/u72-original-form-probe-w01/entry-00.json`.

## Limits

Only the first stored comparison direction was checked. The input direction and comparison interval are taken from the worker artifact; only the evaluation of the form is independent. No RH conclusion, original-form coercivity result, full audit, or human/formal review is claimed. No worker acceptance is implied.

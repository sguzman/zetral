# U72 original-form finite block probe

Worker: `U72-ORIGINAL-FORM-FINITE-W01`  
Status: READY_FOR_REVIEW  
Branch: `worker/u72-original-form-finite-w01`

## Scope and result

Independently evaluate the first four even finite residual modes `n = 94, 96, 98, 100` for the 47-dimensional comparison family, and compare the resulting finite Cauchy matrix with the staged exact chunk. The direct original-form evaluation covers all 417 supported modes `k` for each of these four residual rows. The comparison coefficients and staged enclosure come from the stored raw input and the staged chunk computation.

All 2,209 projected matrix entries are contained in the corresponding staged intervals. The run reported minimum endpoint clearance `1.49e-64` and maximum independent/staged interval-width ratio `9.756032363681083e-89`. Reproduction command:

```sh
python3 experiments/worker-u72-original-form-finite-w01/certify_first_finite_block.py /path/to/u72-62-25-even-t832-raw.json /path/to/staged-94-100.json > independent-94-100.json
```

The script requires `mpmath`. Stored outputs are `experiments/results/u72-original-form-finite-w01/staged-94-100.json` and `independent-94-100.json`.

## Method and limits

The evaluator uses 100-digit `mpmath.iv` interval arithmetic. It independently evaluates the original-form entries using Euler–Maclaurin digamma/trigamma recurrences shifted by 512, order 20, with explicit stated remainder radii, and a 100-term exponential sum with a stated tail bound. It contracts each row against the stored rational coefficient vectors and sums `r[n,a] r[n,b] / g(n)` over the four modes, where `g(n)=log(n/(2h))-3h^2/(2 n^2 pi^2)-2.930` for this even-sector setup.

This is a bounded component comparison, not the entire finite residual sum or its remaining tail. It does not establish the full audit, positive definiteness, an operator construction, or RH. The machine interval conclusion is conditional on the displayed Euler–Maclaurin remainder derivations and outward behavior of `mpmath.iv`; no human or formal verification has been performed.

## Input provenance

Raw input blob: `b6000240e5f35913c5371fa2675faa6ab168bbe0`  
Original-form source blob used for the staged chunk: `2f9035722076c6c8e96bf01b00901191c3466c52`  
Staged driver blob: `53ec575457964f00183a10db2a75e395d2bc6ff9`  
Staged chunk blob: `82539aecfd92d1242dbb6cf5e5ac0ee20991ceac`

The staged chunk was produced from the identified staged driver and source on the raw input's first row, for inclusive bounds 94 through 100. The independent evaluator does not import or execute the staged generator.

# U72 original-form diagonal interval audit — worker handoff

- **ID:** U72-ORIGINAL-FORM-DIAGONAL-W01
- **Status:** READY_FOR_REVIEW
- **Base:** 5e076c163bf97f064a49272556145027bc72dbca
- **Question:** Can independent outward interval evaluation of original-form entries certify all 47 diagonal comparison directions against their staged exact enclosures?

## Result

The independent interval computation evaluates all 47 rational comparison directions from their defining even matrix entries, each supported on 417 modes (47 low modes and 370 trial modes). All 47 outward intervals are contained in their corresponding staged exact enclosures.

The minimum clearance from a computed interval to either endpoint of its staged enclosure is approximately 2.80e-60. The largest ratio of computed interval width to staged enclosure width is approximately 1.36e-32. The Bernoulli remainder radii were 1.62e-92 for digamma, 3.15e-95 for trigamma and 1.13e-140 for Euler's constant. The exponential-series remainder is below 2.82e-221.

This is a scoped interval check of all 47 diagonal values. It does not check off-diagonal entries, certify positive definiteness, or verify the full campaign certificate or RH.

## Method and error bounds

The implementation in experiments/worker-u72-original-form-diagonal-w01/certify_even_diagonals.py uses mpmath.iv at 100 decimal digits for elementary interval operations. Complex digamma and trigamma are independently computed using the recurrences

    psi(z)=psi(z+512)-sum_{j<512}1/(z+j)
    psi1(z)=psi1(z+512)+sum_{j<512}1/(z+j)^2

with asymptotic terms through B_40. The Fourier representation of the periodic Bernoulli polynomial gives |Bbar_40(t)| <= 2|B_40|. Integrating the Euler–Maclaurin reciprocal-power remainder kernels and using |t+Z| >= t+Re(Z) yields the conservative radii

    2|B_40|/(Re(Z))^40
    2|B_40|/(Re(Z))^41

for digamma and trigamma. Euler's constant is computed from the exact rational harmonic sum through 8192 and its Bernoulli expansion through B_40, with remainder radius 2|B_40|/8192^40. The exponential sums use 100 terms; for r_j=2j+1/2, their remaining terms are bounded geometrically by the first omitted e^(-h r_j)/r_j^2 term divided by 1-e^(-2h). The same bound controls the derivative sum.

These are machine interval enclosures conditional on the stated Euler–Maclaurin bounds and mpmath.iv's outward elementary functions. The code and derivation have not received human or formal review.

## Evidence and reproduction

experiments/results/u72-original-form-diagonal-w01/all-47-diagonals.json stores every outward interval, its exact rational staged endpoints, exact containment endpoints, remainder radii and containment flag. All 47 flags are true.

Input: experiments/results/u72-62-25-even-t832-raw.json on origin/worker/u72-02-even-reconstruction, Git blob b6000240e5f35913c5371fa2675faa6ab168bbe0. Formula source consulted: experiments/tc01-post-log11-em.js, blob 2f9035722076c6c8e96bf01b00901191c3466c52. The evaluator does not execute the generator or reuse its interval arithmetic; only the rational direction vectors and stored enclosure endpoints are inputs.

From repository root:

    git show origin/worker/u72-02-even-reconstruction:experiments/results/u72-62-25-even-t832-raw.json > /tmp/u72raw.json
    python experiments/worker-u72-original-form-diagonal-w01/certify_even_diagonals.py /tmp/u72raw.json

Recorded environment: Python 3.12.14, mpmath 1.3.0. Run time was about two minutes.

## Limits

This verifies only the 47 diagonal quadratic-form values. It does not verify off-diagonal matrix entries, full positive definiteness, the source normalization independently, arbitrary original-form vectors, or any RH/operator conclusion. It is not a full matrix audit and does not imply worker acceptance.

# U72 original-form matrix interval audit — worker handoff

- **ID:** U72-ORIGINAL-FORM-MATRIX-W01
- **Status:** READY_FOR_REVIEW
- **Base:** 5e076c163bf97f064a49272556145027bc72dbca
- **Question:** Can an independent outward interval implementation evaluate the full 47×47 comparison matrix from the defining expressions and fit every stored exact enclosure?

## Result

The standalone interval implementation evaluated the defining even matrix entries on all 417 supported modes (47 low modes plus 370 trial modes), then contracted the resulting matrix against all 47 stored rational comparison directions. All 2,209 bilinear entries lie inside their corresponding staged exact enclosures.

The minimum clearance from a computed interval to either staged endpoint is approximately 1.38e-60. The largest ratio of computed interval width to staged enclosure width is approximately 1.36e-32. The run completed in about two minutes.

This is an independent arithmetic evaluation of the stored defining expressions, not a derivation from the analytic source normalization. It supports the correctness of the staged projected upper matrix at these inputs. It does not verify the lower rank-term enclosures, Gershgorin radii, positive definiteness of the full comparison, the complete campaign, or RH.

## Method and error bounds

The evaluator is experiments/worker-u72-original-form-matrix-w01/certify_even_matrix.py. It uses mpmath.iv at 100 decimal digits for rational interval arithmetic and elementary functions, and independently implements the complex digamma/trigamma recurrences

    psi(z)=psi(z+512)-sum_{j<512}1/(z+j)
    psi1(z)=psi1(z+512)+sum_{j<512}1/(z+j)^2

with asymptotic terms through B_40. The periodic Bernoulli Fourier bound |Bbar_40(t)| <= 2|B_40| and integration of the Euler–Maclaurin remainder kernels give conservative radii 2|B_40|/(Re(Z))^40 and 2|B_40|/(Re(Z))^41 for digamma and trigamma. Euler's constant uses the exact rational harmonic sum through 8192 and its Bernoulli expansion through B_40, with radius 2|B_40|/8192^40. Exponential sums use 100 terms and a geometric bound below 2.82e-221.

The resulting 417×417 interval matrix is contracted with the stored rational basis/trial vectors using interval matrix multiplication. No generator interval arithmetic is imported or executed. These are machine interval enclosures conditional on the stated Euler–Maclaurin inequalities and mpmath.iv outward elementary functions; no human or formal review has occurred.

## Evidence and reproduction

experiments/results/u72-original-form-matrix-w01/all-2209-entries.json stores all computed interval endpoints, corresponding exact rational staged endpoints, exact containment endpoints and flags. Every containment flag is true.

Raw input: experiments/results/u72-62-25-even-t832-raw.json on origin/worker/u72-02-even-reconstruction, Git blob b6000240e5f35913c5371fa2675faa6ab168bbe0. Formula source consulted: experiments/tc01-post-log11-em.js, blob 2f9035722076c6c8e96bf01b00901191c3466c52. Stored vectors and staged enclosure endpoints are inputs.

From repository root:

    git show origin/worker/u72-02-even-reconstruction:experiments/results/u72-62-25-even-t832-raw.json > /tmp/u72raw.json
    python experiments/worker-u72-original-form-matrix-w01/certify_even_matrix.py /tmp/u72raw.json

Recorded environment: Python 3.12.14, mpmath 1.3.0.

## Limits

This is a full check of the 47×47 projected upper component only. It does not evaluate arbitrary original-form vectors, independently derive the analytic source normalization, verify lower rank-term matrices or radii, certify the full comparison matrix as positive, or prove RH or an operator construction. It is not a formal proof and does not imply worker acceptance.

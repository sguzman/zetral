# U72 original-form interval probe — worker handoff

- **ID:** U72-ORIGINAL-FORM-INTERVAL-W01
- **Status:** READY_FOR_REVIEW
- **Base:** 5e076c163bf97f064a49272556145027bc72dbca
- **Question:** Can independent outward interval evaluation of original-form entries certify the first three U72 even comparison directions against the staged exact enclosures?

## Result

The standalone interval implementation evaluates the full quadratic form on each of the first three stored rational comparison directions, supported on 417 even modes (47 low modes and 370 trial modes). All three computed outward intervals are contained in the staged exact enclosures. An independent 120-digit point computation also lies inside each outward interval; the output is on `origin/worker/u72-original-form-probe-w01` at `experiments/results/u72-original-form-probe-w01/entries-00-02-120dps.json` (blob `be1dc31eacec3682f3750716f9c839251555d339`).

This is a scoped machine interval check of three directions, not a full matrix audit or an RH/operator proof. It depends on mpmath.iv's outward rounding for elementary functions and the Euler–Maclaurin remainder inequalities below; the software and derivation have not received human or formal verification.

## Interval and remainder method

The script uses mpmath.iv at 100 decimal digits for rational arithmetic, pi, logarithm, square root, exponential, sine, cosine and arctangent. It implements complex digamma and trigamma independently using the recurrences

    psi(z)=psi(z+512)-sum_{j<512}1/(z+j)
    psi1(z)=psi1(z+512)+sum_{j<512}1/(z+j)^2

At Z=z+512, it uses the asymptotic expansion through Bernoulli number B_40.

The Euler–Maclaurin periodic Bernoulli remainder has Fourier bound |Bbar_40(t)| <= 2|B_40|. Using |t+Z| >= t+Re(Z), the script encloses the digamma, trigamma and Euler-constant remainders by the conservative radii

    2|B_40|/(Re(Z))^40
    2|B_40|/(Re(Z))^41
    2|B_40|/8192^40

respectively. The first two bounds follow by integrating the corresponding reciprocal-power Euler–Maclaurin remainder kernels; the looser powers omit favorable integer factors. The Euler constant is computed from the exact rational harmonic sum through 8192 and its Bernoulli expansion through B_40.

The exponentially decaying sums use 100 terms. For r_j=2j+1/2, the omitted tail is bounded by the first omitted e^(-h r_j)/r_j^2 term divided by 1-e^(-2h), giving less than 2.82e-221; this also bounds the derivative sum tail. The nondecaying sums use the digamma/trigamma identities, avoiding a large finite cutoff.

## Evidence

See experiments/results/u72-original-form-interval-w01/entries-00-02.json for the exact interval endpoints, staged rational endpoints, remainder radii and containment results. All three inside_staged flags are true.

The raw artifact is experiments/results/u72-62-25-even-t832-raw.json on origin/worker/u72-02-even-reconstruction, Git blob b6000240e5f35913c5371fa2675faa6ab168bbe0. The source formula version consulted is experiments/tc01-post-log11-em.js, blob 2f9035722076c6c8e96bf01b00901191c3466c52. Formula evaluation is independently implemented; the stored rational vectors and staged enclosure endpoints are inputs.

Reproduce from repository root:

    git show origin/worker/u72-02-even-reconstruction:experiments/results/u72-62-25-even-t832-raw.json > /tmp/u72raw.json
    python experiments/worker-u72-original-form-interval-w01/certify_even_directions.py /tmp/u72raw.json

Recorded environment: Python 3.12.14, mpmath 1.3.0.

## Limits

Only the first three stored comparison directions were checked. This does not validate remaining matrix entries, the trial generator, the whole staged certificate, the analytic source normalization, or the original quadratic form on arbitrary vectors. No worker acceptance is implied.

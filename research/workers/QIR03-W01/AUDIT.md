# QIR03-W01 — Independent multiplicity-interval audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I checked the phase-free multiplicity identity, the positive real interval propagation for the Cauchy attenuation, the integer-square exclusion rule, and the exact synthetic example. An independent Python `fractions.Fraction` implementation reproduces the reported attenuation interval and both exact squared-multiplicity intervals; the narrow case contains only the square 4 and the wide case contains squares 4 and 9. No discrepancy was found in this scope.

The result is conditional on the selected-group coefficient model, QIR02's certified node/amplitude enclosures, and BPF03–04 spectral asymptotics. The synthetic coordinates and observation boxes are illustrative only and are not actual zeta data or an executed Hankel-pencil observation.

## Identity and interval checks

From \(c_j=m_j\beta_j^2/[2(d+iu_j)]\) and \(b_j=c_j e^{2(d-d_0)a_0+i\omega_j a_0}\), taking squared absolute values removes the phase and gives
\[
m_j^2=\frac{4(d^2+u_j^2)|b_j|^2}{G|\beta_j|^4},\qquad G=e^{4(d-d_0)a_0}.
\]
Each factor in \(|\beta_j|^2\) is the positive ratio of squared distances in (2), lies in \((0,1)\), and is enclosed by numerator lower/upper divided by denominator upper/lower when the denominator lower endpoint is positive. Multiplication of positive intervals and the final endpoint order in (3) are directionally correct. Intersecting the interval for \(m^2\) with integer squares gives a sufficient exact certification; an interval meeting multiple squares is unresolved, not evidence against the model.

The synthetic geometry gives exact \(B=37505/53489\). Script `audit.py` uses an independent interval implementation with Python `Fraction` to reproduce:

- attenuation interval: `[9103364879689/13140221683689, 9209896401689/12977815097689]`;
- narrow squared-multiplicity interval exactly as in the source, with sole candidate \(m=2\);
- wide squared-multiplicity interval exactly as in the source, with candidates \(m=2,3\).

Run from the repository root:

```sh
python3 research/workers/QIR03-W01/audit.py
```

The script asserts exact rational endpoints and candidate sets. No floating-point arithmetic is used in its interval calculations.

## Limits

The magnitude data preserve a common-gain ambiguity: multiplying all multiplicities by an integer factor and compensating by the inverse square in \(G\) leaves those magnitudes unchanged. The report correctly treats additional gain or integer information as necessary. No actual spectral data, full pencil solver, numerical certification, primary-source inspection, formal verification, human review, or novelty check was performed.

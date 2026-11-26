# U72 original-form matrix interval audit — worker handoff

- **ID:** U72-ORIGINAL-FORM-MATRIX-W01
- **Status:** IN_PROGRESS
- **Base:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Question:** Can an independent outward interval implementation evaluate the entire 47×47 comparison matrix from the original defining expressions and fit every stored exact enclosure?
- **Scope:** Reconstruct all bilinear entries on the 47 stored rational low/trial directions using independent interval formulas. Use mpmath.iv and explicit Euler–Maclaurin / exponential-tail bounds. Do not execute the generator's interval code. This complements the lead's stored-data audit.
- **Acceptance:** For all 2,209 entries, output exact interval endpoints and verify containment in staged exact enclosures, or document a bounded failure. This is not a positive-definiteness or RH proof.
- **Bounded stopping condition:** One full 47×47 interval run at the settings already used for the diagonal audit; stop if resources or interval widths prevent useful output.
- **Next:** Implement two-stage interval matrix multiplication to avoid recomputing form entries, then run and compare all entries.

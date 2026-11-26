# U72 original-form finite residual probe — worker handoff

- **ID:** U72-ORIGINAL-FORM-FINITE-W01
- **Status:** IN_PROGRESS
- **Base:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Question:** Does an independent outward interval evaluation of the first four even residual-mode contributions to the finite Cauchy matrix match the staged exact chunk?
- **Scope:** Evaluate modes n=94,96,98,100 directly from the defining form entries, contract against all 47 stored rational comparison directions, divide by exact upper-weight bounds, and compare the resulting 47×47 partial finite matrix with the generator's interval chunk for the same modes.
- **Acceptance:** All 2,209 entries contained, or report a bounded mismatch/dependency failure. This is only a four-mode component check and does not audit the full tail or comparison.
- **Bounded stopping condition:** One run on the four-mode block at existing 100-digit interval precision.
- **Next:** Regenerate only the staged first-block finite chunk for a pinned comparison target; implement independent direct evaluation from the form expressions.

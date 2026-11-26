# U72 original-form diagonal interval audit — worker handoff

- **ID:** U72-ORIGINAL-FORM-DIAGONAL-W01
- **Status:** IN_PROGRESS
- **Base:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Question:** Can the independent interval formula check all 47 diagonal comparison directions from the original-form expressions?
- **Scope:** Extend the successful three-direction outward evaluation to each of the 47 stored rational comparison directions at h=62/25. Reuse only the stored vectors and staged exact diagonal endpoints as inputs. This checks diagonal form values, not off-diagonal matrix entries or positivity of the full matrix.
- **Acceptance:** Exact interval output for each diagonal direction, contained in its staged interval or a documented bounded failure. Keep the limitation that this is not a full matrix or RH proof explicit.
- **Bounded stopping condition:** One all-direction interval run with the existing 100-digit settings; stop if resource/runtime limits or dependency widths prevent useful output.
- **Next:** Generalize the three-direction contraction and run the 47-direction enclosure.

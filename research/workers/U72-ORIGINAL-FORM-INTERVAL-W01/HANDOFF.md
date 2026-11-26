# U72 original-form interval probe — worker handoff

- **ID:** U72-ORIGINAL-FORM-INTERVAL-W01
- **Status:** IN_PROGRESS
- **Base:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Question:** Can an independently implemented outward interval evaluation certify the first three U72 even comparison directions from the defining infinite sums, matching the staged exact enclosures?
- **Scope:** Reuse only the stored rational direction vectors and target enclosures as inputs. Implement the analytic matrix entries independently using interval arithmetic and explicit Euler–Maclaurin remainder bounds for digamma/trigamma; no generator interval routines.
- **Acceptance:** Exact interval outputs either lie inside each staged enclosure, or document a bounded failure (for example interval dependency width or inability to justify remainder bounds). This would be a scoped three-direction verification only, not a full matrix audit.
- **Bounded stopping condition:** One implementation attempt at fixed arithmetic settings; stop if the error derivation or interval widths cannot establish containment.
- **Next:** Implement the interval special-function recurrences and test one direction before extending to all three.

# CPC01-W01 worker handoff

- ID: CPC01-W01
- Status: READY_FOR_LEAD_REVIEW
- Starting commit: `83c56cc` (Campaign XVII through CPC01 checkpoint)
- Scope: independently audit CPC01's positive/negative form split, coercive form and bounded perturbation, compact Birman–Schwinger inertia/nullity, frequency kernel factorization/parity, and inverse-compression bracket.
- Scientific relevance: CPC01 is the exact threshold formulation that CPC02 will approximate numerically/certifiably.
- Acceptance: verify the form congruence and nullity mapping, compact-kernel estimates, and variational order bounds; identify a gap or submit a scoped proof audit.
- Bounded stopping condition: finish the analytic audit without implementing CPC02 or claiming a numerical certificate.
- Evidence: `research/workers/CPC01-W01/AUDIT.md` records the form congruence, nullity, kernel, parity, and inverse-bracket checks.
- Not checked: independent source audit of FES03/FES04 symbols, full prior art, numerical/formal verification.
- Findings: no flaw found under imported FES03/FES04 assumptions. The compact threshold count and nullity are exact, but the inverse comparison bracket still needs residual/error control before it yields a certificate.
- Next: lead review; CPC02 remains lead-owned.

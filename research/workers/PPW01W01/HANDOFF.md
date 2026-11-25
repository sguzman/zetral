# PPW01W01 handoff

- ID: PPW01W01
- Status: READY_FOR_REVIEW
- Starting commit: 0a68373bb6179446185f2a4305f0ffd54e82bf80
- Scope: Independently audit the exact rational step-function norm witnesses in PPW01 for windows through log 9 and log 11. Do not edit shared campaign/state files or lead's PPW02 artifacts.
- Question: Do the saved partition witnesses verify the advertised upper bounds 2.303 and 2.714, including every transformed interval under prime-power shifts and endpoint conventions?
- Acceptance criteria: Recompute the integer inequalities independently with Python Fraction/rational breakpoints, verify each cell and reported bound, and test all shift images/endpoints. Identify any mismatch.
- Bounded stopping condition: Audit the two saved PPW01 witnesses with a separate implementation and record counts/checksums/results.
- Completed work: Independently rechecked all rational witness cells and arithmetic coefficient upper bounds for N=9 and N=11; both reported bounds are exact worst ratios.
- Evidence: `research/workers/PPW01W01/REPLAY.md` and exact checker `experiments/ppw01w01-independent-audit.py`.
- Commands: 
- Checked vs unchecked: Saved rational witness inequalities, transformed breakpoints, endpoints, actual coefficient upper bounds all checked independently. The operator-to-Schur reduction and campaign classification are not reviewed.
- Blockers: None known.
- Next recommendation: PPW02 may use the N=9 norm upper bound as an independently replayed candidate input; the N=11 bound likewise passes its finite witness checks.

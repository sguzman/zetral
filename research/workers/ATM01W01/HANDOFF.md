# ATM01W01 handoff

- ID: ATM01W01
- Status: IN_PROGRESS
- Starting commit: 5380d1d57c0b91ea163102ab2b7566bdc4d57762
- Scope: Independently audit the saved rational multiplicative norm witness on [1,19/2], including exact transformed breakpoints at a non-integer endpoint. Do not edit lead ATM01 artifacts or shared state.
- Question: Does the saved step function verify the advertised rational Schur bound across every active shift with the implemented zero-extension endpoint convention?
- Acceptance criteria: Reconstruct the transformed breakpoint partition independently with Fraction arithmetic, check each cell inequality and endpoint images, and independently verify arithmetic coefficient upper bounds.
- Bounded stopping condition: Audit only the saved N=19/2 witness; do not reproduce its heuristic search or the full spectral certificate.
- Completed work: Assignment claim only.
- Evidence: This handoff.
- Commands: 
- Checked vs unchecked: Latest main/Campaign LX read; saved rational-endpoint witness not independently checked.
- Blockers: None known.
- Next recommendation: Complete exact cell replay and report whether ATM01's endpoint witness may be relied on as a bounded candidate input.

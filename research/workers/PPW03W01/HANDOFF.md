# PPW03W01 handoff

- ID: PPW03W01
- Status: READY_FOR_REVIEW
- Starting commit: 5e1b2b1dc2f98867449a8cb3b1c694e6ef5222ce
- Scope: Independently audit PPW03's seventh-derivative correction polynomials and tenth-derivative Euler–Maclaurin remainder bounds for the three rate kernels. Do not edit shared campaign/state files or PPW03 lead artifacts.
- Question: Do exact differentiation and elementary polynomial inequalities imply the stated F/D coefficient 855/11 and the alpha allowance 855, on x>=0 and R>0?
- Acceptance criteria: Implement an independent exact polynomial recurrence, verify the formulas, prove/check the scaled polynomial bounds, and recompute exact constants from B10 and the midpoint mesh.
- Bounded stopping condition: Limit work to these analytic tail identities and coefficients; preserve any discrepancy or the precise proof if they pass.
- Completed work: Independent exact sparse-polynomial recurrence verifies PPW03 correction/remainder derivatives; elementary inequalities and exact constants reproduce the stated F/D bound and show the alpha code allowance includes its factor two.
- Evidence: `research/workers/PPW03W01/TAIL-AUDIT.md`; exact checker `experiments/ppw03w01-tenth-tail-audit.py`.
- Commands: 
- Checked vs unchecked: Seventh- and tenth-derivative formulas, polynomial sup bounds, B8/B10 coefficients and tail constants checked exactly for x>=0,R>0. Full source normalization and overall certificate not independently audited.
- Blockers: None known.
- Next recommendation: Lead may treat the tenth-order rate tail constants as independently checked under the stated domain; full PPW03 review remains needed.

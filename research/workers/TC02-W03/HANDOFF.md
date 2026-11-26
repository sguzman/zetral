# TC02-W03 — independent audit of T832 eighth-only obstruction

- ID: TC02-W03
- Status: READY_FOR_REVIEW
- Starting commit: `449203e` (LXIX obstruction continuation)
- Scope: independently verify the exact T832 two-coordinate eighth-only obstruction in `experiments/tc02-t832-allocation-obstruction.js`, including the allocation-share cancellation, endpoint arithmetic, positive finite/rank signs, and strict gap.
- Acceptance criteria: reproduce the exact quadratic intervals and eighth lower bound from the saved split raw payload and factor file using a separate implementation; derive why the bound holds for every positive joint allocation; record any assumption or discrepancy.
- Bounded stopping condition: stop after the exact arithmetic and allocation derivation have been independently reproduced or a concrete flaw has been isolated.
- Completed: independently verified the exact upper-energy interval, positive finite/rank directional signs, eighth-only lower bound and strict gap. Derived the share cancellation explicitly and checked all eight saved replay layouts and their negative two-coordinate lower forms. No flaw found in the checked scope.
- Evidence: `research/workers/TC02-W03/AUDIT.md`; `experiments/worker-TC02-W03/reproduce_t832_eighth_obstruction.py`.
- Reproduction command: `python3 experiments/worker-TC02-W03/reproduce_t832_eighth_obstruction.py`.
- Not checked: fresh analytic regeneration of the T832 raw components, a coupled remainder bound, or any claim about the underlying operator.
- Blockers: none within the scoped audit.
- AI-assisted independent arithmetic audit; no human review or formal verification claimed.

# AIR03W01 handoff

- ID: AIR03W01
- Status: READY_FOR_REVIEW
- Starting commit: 0a975c6655f88112f37fe402f7cbfdb64f3a29b7
- Scope: Independently audit the AIR03 tighter Euler–Maclaurin tail used for frozen even/odd h=1.95 replay. Do not edit shared campaign/state files or the lead's AIR03 artifacts.
- Question: Does the derived tail enclosure rigorously bound the omitted prime-power/rate contribution on the implemented domain, including all endpoint and remainder terms?
- Acceptance criteria: Derive an independent inequality, check its assumptions against the implementation, identify any counterexample or certify the stated bound under explicit hypotheses; preserve exact commands and status.
- Bounded stopping condition: Audit the actual formulas and run a high-precision or exact spot-check of the integral/remainder; stop at a precise reviewable result, including a negative finding if applicable.
- Completed work: Independently bounded both eighth-derivative midpoint remainders and checked the common 126/R^9 allowance; verified separate exponential Et bound.
- Evidence: `research/workers/AIR03W01/TAIL-AUDIT.md`; exact rational checker `experiments/air03w01-tail-bound.py`.
- Commands: `python experiments/air03w01-tail-bound.py`
- Checked vs unchecked: Rate tail allowance independently derived and checked under x>=0, R>0, h>0. Broader AIR03 replay and full certificate not audited.
- Blockers: None known.
- Next recommendation: Lead may cite this scoped tail audit when recording AIR03 status; review remains needed for all other analytic bounds.

# U75 original allocation search W01

- Status: IN_PROGRESS
- Parent result: `worker/u75-m24576-original-form-w02` at `4df2a8c3297307d450aeccbd15c74b83d62f7e23`.
- Scope: search for an exact positive energy-grid margin in the original-coordinate U75 h=251/100 even M24576 finite comparison, starting from its zero-margin 52/52 allocation.
- Motivation: the stored allocation gives a positive Bareiss replay but no grid margin; find whether changing only positive allocation shares improves the finite certificate.
- Exclusive files: `research/workers/U75-ORIG-ALLOC-M24576-W01/` and `experiments/worker-u75-m24576-original-allocation/`.
- Methods: exact interval/diagonal/radius assembly and exact Bareiss positivity for each candidate. Any float-based score or optimizer is only a search heuristic; report exact rational allocations and exact replay.
- Limits: no claim of optimality over all allocations, analytic positivity, RH, or operator construction. Do not inspect/edit U75-03 files or shared state.

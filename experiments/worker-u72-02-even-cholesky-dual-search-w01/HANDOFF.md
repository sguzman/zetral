# U72-02 even Cholesky Cauchy direction search

- **ID:** U72-02-EVEN-CHOLESKY-DUAL-SEARCH-W01
- **Status:** IN_PROGRESS
- **Starting commit:** `5e076c1` (current main)
- **Scope:** On the fixed 10^12 midpoint-Cholesky basis, heuristically search directions supported on the first 10 coordinates for one whose finite, energy, seven rank, and eighth quadratic costs are all positive, then exact-check the best rationalized direction with the inherited Cauchy bound.
- **Acceptance:** Record search method/starts and exact candidate cost signs/ratio; no global optimization claim. No U72-04 raw reconstruction overlap.
- **Completed:** Work claimed; no search performed yet.
- **Evidence paths:** `experiments/worker-u72-02-even-cholesky-dual-search-w01/`; `experiments/results/u72-62-25-even-cholesky-dual-search-w01/`.
- **Checked vs unchecked:** None yet. Other directions, larger support, other bases, and global obstruction are outside scope.
- **Blockers:** None.
- **Next:** Pin basis data, run constrained multistart objective search, rationalize and exact-check.

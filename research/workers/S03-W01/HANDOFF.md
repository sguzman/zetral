# S03-W01 worker handoff

- ID: S03-W01
- Status: IN_PROGRESS
- Starting commit: `99ce5c98cee71c49a878cd199fd4f2cd17ee7e46` (`main`, 2026-11-25)
- Scope: independent finite-arithmetic numerical check of the prime-free small-window cosine scaling limit, without deriving the lead's S01/S02 operator or first-correction results.
- Acceptance criterion: reproducible finite Galerkin phase-pi roots at three windows with `0 < L=2a < log(2)`, compared across at least two basis cutoffs and against `(n-1/2) pi`; clearly separate discretization, quadrature and asymptotic errors. If stable roots cannot be obtained, document a specific numerical obstruction and one bounded diagnostic.
- Baseline: fetched current `origin/main`; read current AGENTS.md, STATE.md, COORDINATION.md, CAMPAIGN-05.md and the lead's C04 analytic note. Python 3.12.14, NumPy 2.3.5, SciPy 1.17.0. Rust is unavailable on PATH. No numerical computation yet.
- Completed: claimed this unique worker ID and selected an independent diagnostic lane; no result claimed.
- Evidence: pending.
- Exact commands: `git rev-parse HEAD` -> `99ce5c98cee71c49a878cd199fd4f2cd17ee7e46`; `python3 --version`; `python3 -c 'import numpy,scipy; print(numpy.__version__,scipy.__version__)'`.
- Blockers: none established.
- Next: implement a small reproducible script using the prime-free arithmetic Gram form and finite Riesz characteristic, then assess cutoff convergence and limits.

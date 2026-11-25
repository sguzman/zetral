# S03-W01 worker handoff

- ID: S03-W01
- Status: READY_FOR_REVIEW
- Original starting commit: `99ce5c98cee71c49a878cd199fd4f2cd17ee7e46` (`main`, 2026-11-25); merged refreshed `origin/main` at the S01/S02 work-order checkpoint into the worker branch without conflict.
- Scope: independent finite arithmetic diagnostics and phase-normalization/source check for Campaign V's cosine limit and S02 first correction; no duplication of S01/S02 derivations.
- Completed: tested the finite characteristic at three small prime-free windows, first two sign-changing roots and multiple Fourier cutoffs; compared `c(a)(a*t-s_n)` against `Si(2*s_n)/2`; independently read Suzuki v4 Theorem 1.5/§6.2 and derived the theta=pi minus sign and finite characteristic sign. Values trend toward S02 targets, with slow cutoff convergence and no exact certificate.
- Evidence: `research/workers/S03-W01/RESULT.md`; scripts/results in `experiments/worker-s03-w01/` including `displacement_prediction.py` and `s02-comparison.csv`.
- Exact commands: `PYTHONDONTWRITEBYTECODE=1 python3 experiments/worker-s03-w01/displacement_prediction.py`; `PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=experiments/worker-s03-w01 python3 - <<'PY' ... one_window(mp.exp(-20),(64,)) ... PY`. Environment: Python 3.12.14, mpmath 1.3.0, NumPy 2.3.5, SciPy 1.17.0. Primary source: `https://arxiv.org/html/2606.09096v4`, fetched and read 2026-11-25.
- Checked: exact phase theorem statement, local forcing convention, reflection normalization, and finite characteristic sign; 35-digit and 50-digit runs at a=e^-20,N=64 match to printed digits; scripts reproduce the recorded candidate roots.
- Not checked/certified: rigorous quadrature or solve bounds, finite-to-exact error, root count/order, exact local root values, or a second-order asymptotic coefficient. Sign scanning can miss non-crossing roots. No known zeta zeros were used.
- Blockers: no mathematical blocker; available evidence is diagnostic only and Fourier cutoff convergence is slow, especially for the second root.
- Next: lead review. No further nonconflicting S03 package identified while S03/S04 campaign review remains active.

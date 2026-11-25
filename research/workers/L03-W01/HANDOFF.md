# L03-W01 worker handoff

- ID: L03-W01
- Status: READY_FOR_REVIEW
- Starting commit: `e06d17b9f3a0f227b52054dd881199a5901cc9c8` (`origin/main`, 2026-11-25)
- Scope: independent min–max verification of the exact rank-one inverse perturbation in L01, with translation to positive local eigenvalue bounds. Do not duplicate L02 weak escape or derive the full large-window limit.
- Acceptance: state and prove signed positive/negative eigenvalue interlacing for a compact self-adjoint rank-one perturbation; translate it with careful reciprocal order into bounds relative to phase-pi local roots and, under Suzuki's compression theorem, zeta ordinates. Address the singular theta endpoints and explain what these inequalities do not prove about an extra limiting mode or resonance.
- Baseline: read current AGENTS.md, STATE.md, COORDINATION.md, Campaign VII, L01/L02; Rust unavailable. No proof result claimed yet.
- Evidence: `research/workers/L03-W01/INTERLACING.md`.
- Exact command: `git rev-parse HEAD` -> `e06d17b9f3a0f227b52054dd881199a5901cc9c8`.
- Blockers: none established.
- Completed: proved signed rank-one min–max inequalities, translated them to exact finite-window positive-root interlacing for phases below and above pi, treated the phase-zero reduced inverse, and combined phase-pi compression with RH to give global lower comparisons. No counterexample found.
- Checked: sign of the L01 coefficient, positive/negative eigenvalue order, reciprocal order, first-root bound, phase-zero compression, and scope of Suzuki source results.
- Not checked: L02 weak escape independently, large-window extra-mode convergence/resonance, moving-phase limits, quantitative rates, numerical/interval/Lean verification, or exhaustive prior art.
- Blockers: none.
- Next: lead review; full L03 limit/resonance analysis remains with the lead. No separate nonconflicting worker package identified.

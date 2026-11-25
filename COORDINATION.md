# Zetral — research coordination

Protocol established 2026-11-25 UTC. This file is the lead's assignment ledger, not a substitute for STATE.md. Repository main is the authoritative accepted state.

## Roles

- **Lead (ChatGPT):** selects mathematical direction and campaign boundaries, owns STATE.md and this ledger, integrates results, independently reviews proofs and evidence, decides whether to accept or reject worker submissions. Lead does not claim to supervise or run continuously between conversation turns.
- **Worker (local Codex):** executes the assigned bounded independent work package, runs local tools and checks, records negative results as faithfully as positive ones, and submits a branch plus handoff. No need for owner approval for ordinary work within the assignment. Worker may propose next work but must not silently extend scope or self-assign conflicting tasks.
- **Owner:** starts the local worker session and provides access when necessary. No routine relay of mathematical results; use GitHub for handoff.

## Active assignments

| ID | Owner | Status | Task | Exclusive write scope |
|---|---|---|---|---|
| C03 | Lead | READY | Exact characteristic-function error and root-count theorem | research/certification/C03-*; STATE.md; coordination ledger |
| C04-W01 | Codex | ASSIGNED, not yet acknowledged | Independent C02 audit and bounded small-window residual feasibility experiment | research/workers/C04-W01/; experiments/worker-c04-w01/ |

C04-W01 is preparatory evidence for C04, not ownership or completion of C04 itself. C03 and C04-W01 can proceed independently. No worker execution or result is asserted yet.

## C04-W01 work order

Read AGENTS.md, STATE.md, research/CAMPAIGN-04.md, research/certification/C01-kernel-residuals.md, research/certification/C02-arithmetic-residuals.md, literature/gram-quadrature.md and the existing precision solver. Base on current main; record exact starting commit and tool versions.

1. Independently check C02's off-diagonal formula, sign/normalization, uniform sine-integral estimate, residual tail, and finite-block coercivity argument. Try to falsify the bounds. Reopen primary sources when accessible; distinguish actually inspected sources from repository claims.
2. At X=2 (a=log(2)/2), investigate feasibility of certifying the exact local evaluation representer for w=+i or -i using C01–C02. Use the finite arithmetic form; do not feed known zeta zeros into the solve. Estimate the actual full Fourier residual using independently computed coefficients and a provable tail bound if feasible. A better tail estimate is welcome if justified. If useful, compare against X=3, but do not expand into a sweep.
3. Separate non-certified diagnostics from validated interval results. A small finite-system residual is not a full-space residual. A finite Gram minimum is not a certified whole-space coercivity bound. The imported published small-window constant is conditional on matching normalization and verified source assumptions.
4. Deliver a concise audit with any corrected formulas or counterexamples, exact reproducible commands, parameters and actual outputs. If rigorous certification is impractical or blocked, give quantitative evidence of the barrier and the best bounded alternative. Do not require a successful certificate to complete the assignment.

Prefer Rust for reusable code; use existing tooling and pinned environments where available. Respect the user's local build coordinator (mbx) and one Cargo build per workspace; do not start background jobs, install global packages, change system configuration, or incur expenses without owner direction. Do not redesign CI or merge the existing draft verification PR.

## Handoff and conflict prevention

- Start by fetching main. Use a separate Git branch and, if another process uses the checkout, a separate worktree: worker/c04-w01. Do not overwrite unrelated local changes. Acknowledge the task by committing research/workers/C04-W01/HANDOFF.md to that branch and pushing it.
- Only the lead edits main's STATE.md, AGENTS.md, COORDINATION.md, manuscript, and accepted campaign notes. Worker edits only its assigned paths on its branch, not shared files. To propose a change elsewhere, write the recommendation in the handoff. Do not force-push, merge, or alter repository permissions.
- Handoff must contain ID, status (IN_PROGRESS / READY_FOR_REVIEW / BLOCKED), starting commit, scope, completed work, evidence paths, exact commands, checked vs unchecked claims, blockers, and next recommendation. Update it at meaningful checkpoints, commit and push. Put a draft PR against main when review-ready if permitted, or leave the pushed branch and report the exact head.
- Before each new work batch, fetch main and read this ledger. The lead fetches the worker branch/handoff or PR on subsequent research turns, reviews evidence, and updates acceptance/assignments. A worker may not mark a campaign milestone complete. Avoid simultaneous edits to the same file; Git commits are the handoff mechanism, not a real-time messaging service.
- On completion or a genuine blocker, persist and stop the worker's current assignment. If the next assignment is not yet published, wait for an explicit new turn/session instruction; no idle polling loop. No claim of autonomous background coordination by ChatGPT.

## Acceptance

Lead reviews the exact submitted commit, verifies claims against artifacts and checks, then records ACCEPTED / REVISION_REQUESTED / BLOCKED in this ledger. Only accepted work enters main and research state; negative findings are acceptable evidence. No external submission or novelty claim without the established review process.

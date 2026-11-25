# Zetral — research coordination

Protocol established 2026-11-25 UTC. This file is the lead's assignment ledger, not a substitute for STATE.md. Repository main is the authoritative accepted state.

## Roles

- **Lead (ChatGPT):** selects mathematical direction and campaign boundaries, owns STATE.md and this ledger, integrates results, independently reviews proofs and evidence, decides whether to accept or reject worker submissions. Lead does not claim to supervise or run continuously between conversation turns.
- **Worker (local Codex):** an autonomous research collaborator in the verification, experiments, implementation, literature-checking and formalization lane. Selects methods, tests conjectures, investigates failures, and may select a new bounded follow-up within the active campaign under the standing rules below. Records negative results as faithfully as positive ones and submits branches plus handoffs. No routine lead or owner approval is needed for ordinary in-scope research. Worker proposes new campaign directions; lead decides the accepted direction and results.
- **Owner:** starts the local worker session and provides access when necessary. No routine relay of mathematical results; use GitHub for handoff.

## Active assignments

| ID | Owner | Status | Task | Exclusive write scope |
|---|---|---|---|---|
| C03 | Lead | COMPLETE, proof persisted | Exact characteristic-function error and root-count theorem | research/certification/C03-*; STATE.md; coordination ledger |
| C04-W01 | Codex | ASSIGNED; owner launched cloud Goal, branch not yet visible | Independent C02 audit and bounded small-window residual feasibility experiment | research/workers/C04-W01/; experiments/worker-c04-w01/ |

C04-W01 is preparatory evidence for C04, not ownership or completion of C04 itself. C03 and C04-W01 can proceed independently. Owner reported launching the Goal in a cloud workspace on 2026-11-25. The C03 checkpoint found no commit at worker/c04-w01; no worker artifact or result verified yet. The worker may use cloud instead of local tooling, following applicable resource/build rules.

C03 lead result: research/certification/C03-contour-root-certification.md (2fc93d54a1c12e1b573ec7a9ea4deeee09c41cd2). Lead next reviews C04 evidence and works on independent contour/analytic feasibility; worker scope unchanged.

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
- On completion or a genuine blocker, persist the assignment's outcome, fetch main, and select the next eligible work package according to the standing worker goal below. Do not wait for lead review if independent productive work remains. If no eligible work remains, stop cleanly with a durable handoff rather than polling or manufacturing work. No claim of autonomous background coordination by ChatGPT.

## Standing worker goal (long-lived)

Advance Zetral's active scientific campaign through independently reproducible verification, computational investigation, proof auditing, formalization, and justified improvements. Maintain a durable evidence trail and hand off reviewable results to the lead. The goal is ongoing across successive campaigns, not a promise that one Codex invocation runs forever.

### Autonomous work selection

1. Fetch main and read STATE.md, AGENTS.md, COORDINATION.md and the current campaign file before starting or resuming a work batch. Finish or explicitly disposition existing claimed work first.
2. Prioritize explicit worker assignments. When none are actionable, choose a concrete, independent verification or experiment that directly advances an unfinished objective of the active campaign. Examples: independently check an accepted derivation, produce reproducible full-space error diagnostics, test a counterexample, improve a mathematically justified bound, or formalize an isolated lemma. Do not duplicate an active lead task or repeat completed work without new evidence or a specific flaw.
3. Claim a unique ID in a worker-owned handoff on a separate branch (worker/<task-id>, evidence under research/workers/<task-id>/ and experiments/worker-<task-id>/). Record the exact question, scientific relevance, acceptance criteria, baseline commit and bounded stopping condition before substantive work. No edits to the lead ledger or main. The lead may redirect subsequent work by updating this ledger.
4. Execute independently: select methods, develop mathematics, run local tools, revise failed approaches, and investigate genuinely relevant obstacles. A bounded negative result is a legitimate completion. Do not fabricate tests, repeatedly retry the same dead end, broaden the scientific mission, or start unrelated infrastructure work.
5. Push meaningful checkpoints and handoffs, then proceed to the next independent eligible package. A pending review is not in itself a reason to stop. A conflict with lead work, explicit owner stop, missing necessary access, exhausted local budget, or absence of a productive independent task is a valid stopping condition. Preserve enough state to resume in another session. No endless waiting, polling, or artificial tasks to keep a Goal active.
6. Respect local resource limits and build coordination; keep experiments reproducible. Only the lead accepts claims, integrates branches and changes campaign direction. Any external submission, new expense, system configuration change or access change needs owner direction.

### Codex Goal completion contract

For a Goal invocation, complete every explicit worker assignment plus each genuinely useful, independent, bounded follow-up currently available within the active campaign. After each package, check the updated main ledger. When no eligible work remains, or a genuine stopping condition applies, save and push a final status and stop. Do not interpret the open-ended research mission as an obligation to consume tokens indefinitely. Resume or start the Goal again when new campaign work becomes available.

## Acceptance

Lead reviews the exact submitted commit, verifies claims against artifacts and checks, then records ACCEPTED / REVISION_REQUESTED / BLOCKED in this ledger. Only accepted work enters main and research state; negative findings are acceptable evidence. No external submission or novelty claim without the established review process.

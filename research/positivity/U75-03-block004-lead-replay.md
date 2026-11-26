# U75-03 — lead replay of Actions block 004

Date: 2026-11-26 UTC. Scope: independent execution of the same staged interval algorithm, not an independent derivation of the original quadratic form.

The Actions-produced odd block at h=251/100, J128/KEM20/T1024/M24576/lowCount52 was replayed in a separate JavaScript execution environment using pinned inputs. Source: experiments/tc01-post-log11-em.js at commit 908903a98d2b934b2d7854722f272bc6af0f8179 (blob 2f9035722076c6c8e96bf01b00901191c3466c52); staged module at 5c0103f2f9ad47a94c6eec157aa99da0826b4479 (blob 33e10d108e01cfa9ea8a9944c54932fdd21fc215). Concatenate six trial parts pinned in STATE.md (a68c91861c1d00bbe9b99393d5234c58c8f25c27, 7ba4276aff484749bd5bc1b5b720a83ff64a558b, 5d974e745fb31a16e03c3132652b87a72dec10ad, 9012cb03fd24b04eb6865a3bc83227c5f3322ce8, ed3a1148b02e83bd07385275d7e85d5294335e75, abc8cc0c86fc1ec58bde60d2a4804f1599c6328a); JSON.parse; call finite(source, trial, 3177, 4199).

Results:
- 512 modes, 52×52 interval matrix at the expected fixed-point scale.
- Exact JSON serialization matched the pinned Actions file after removal of its trailing newline; no numeric tolerance or floating-point comparison used.
- All 2704 intervals ordered, matrix symmetric endpoint-by-endpoint, all 52 lower diagonal endpoints nonnegative.
- Target: experiments/results/u75-251-100-odd-t1024-m24576-finite-004.json at 908903a98d2b934b2d7854722f272bc6af0f8179; blob 90665579362b9df198f0320ffd15289da4fbe550, 343933 bytes including newline.

This is a cross-environment reproduction of the computation, not a new residual block, proof of full odd-sector positivity, independent source-form evaluation, or final U75-04 audit. Candidate frontier remains h=2.50. Avoid concurrent writes to residual blocks while the Actions/Codex lane is progressing. Next residual block after 004 is 005, modes 4201..5223, unless subsequently persisted by that lane.

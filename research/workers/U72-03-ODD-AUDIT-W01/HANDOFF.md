# U72-03 odd raw comparison: bounded exact audit

- **ID:** U72-03-ODD-AUDIT-W01
- **Status:** READY_FOR_REVIEW
- **Starting main:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Target worker head:** `5acb2522e5a66e91e0aa187749821d84822a5d0c` (`worker/u72-03-odd-reconstruction`)
- **Scope:** Independently check the odd raw artifact's first eight leading principal minors with a separate exact-integer implementation. This is a narrow raw-matrix consistency check, not the lead-owned U72-04 full reconstruction and not an audit of the transforms or allocation sweep.
- **Question:** Does a direct exact determinant calculation from the stored odd raw matrix reproduce the artifact's positive signs through order 7 and negative sign at order 8?
- **Acceptance criteria:** Reconstruct the first 8x8 integer matrix from the pinned raw JSON; compute each leading determinant independently without using the worker's replay routine; compare exact values to stored principal minors; record resource use and limitations.
- **Completed:** Read current instructions, main campaign/coordination, and the U72-03 handoff. Remote branch inventory showed no existing odd audit. Initial metadata inspection found a 47-by-47 matrix and stored sign sequence `+` through order 7 then `-` at order 8; independent determinants remain unchecked.
- **Evidence:** `verify_odd_raw_minors.py` and `leading-minors-output.txt` under this directory.
- **Commands:** `git ls-remote --heads origin 'worker/*u72*'`; fetched and inspected `worker/u72-03-odd-reconstruction` raw JSON.
- **Checked:** Target head and raw artifact blob; metadata, 47-by-47 symmetric integer matrix, positive common scale `10^66`; direct exact determinants for orders 1–8 by a separate permutation sum; exact equality to every stored principal-minor integer. The direct sign sequence is positive for orders 1–7 and negative for order 8.
- **Not checked:** Independent reconstruction of the matrix from residual chunks; transformed matrices, allocation sweeps or their reported 7/47, 4/47, and 0/47 replay counts; all possible transforms/allocations; witness/guard source or the original analytic form. This does not replace U72-04.
- **Blockers:** None.
- **Status:** READY_FOR_REVIEW.
- **Recommendation:** Lead may treat this as a narrow exact cross-check of the stored odd raw matrix's first eight minors only, not as validation of the transformed candidate failure or the whole campaign.

## Exact artifact and calculation

- Target branch head: `5acb2522e5a66e91e0aa187749821d84822a5d0c`.
- Raw JSON Git blob: `036bfe26a716cf3ac759b5cae9faed422e6db56d`.
- Command: `git show origin/worker/u72-03-odd-reconstruction:experiments/results/u72-62-25-odd-t832-raw.json > /dev/shm/u72-03-odd-raw.json`; `python3 research/workers/U72-03-ODD-AUDIT-W01/verify_odd_raw_minors.py /dev/shm/u72-03-odd-raw.json`.
- Artifact SHA-256: `e9246d09180616e7660b17a76213ab71978872529b8fcc9faecace383fda554c`.
- Result: order 1–8 signs are `+,+,+,+,+,+,+,-`; all eight independently computed integer determinants match the artifact's stored `principalMinors` exactly. The verifier uses the Leibniz permutation sum through order 8, Python arbitrary-precision integers, and does not invoke U72 worker replay code.

# U72-03 odd raw comparison: bounded exact audit

- **ID:** U72-03-ODD-AUDIT-W01
- **Status:** IN_PROGRESS
- **Starting main:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Target worker head:** `5acb2522e5a66e91e0aa187749821d84822a5d0c` (`worker/u72-03-odd-reconstruction`)
- **Scope:** Independently check the odd raw artifact's first eight leading principal minors with a separate exact-integer implementation. This is a narrow raw-matrix consistency check, not the lead-owned U72-04 full reconstruction and not an audit of the transforms or allocation sweep.
- **Question:** Does a direct exact determinant calculation from the stored odd raw matrix reproduce the artifact's positive signs through order 7 and negative sign at order 8?
- **Acceptance criteria:** Reconstruct the first 8x8 integer matrix from the pinned raw JSON; compute each leading determinant independently without using the worker's replay routine; compare exact values to stored principal minors; record resource use and limitations.
- **Completed:** Read current instructions, main campaign/coordination, and the U72-03 handoff. Remote branch inventory showed no existing odd audit. Initial metadata inspection found a 47-by-47 matrix and stored sign sequence `+` through order 7 then `-` at order 8; independent determinants remain unchecked.
- **Evidence:** This handoff; planned exact verifier and output under this directory.
- **Commands:** `git ls-remote --heads origin 'worker/*u72*'`; fetched and inspected `worker/u72-03-odd-reconstruction` raw JSON.
- **Checked:** Target branch head and artifact metadata/signs as stored.
- **Unchecked:** Independent exact determinants and all higher-level input generation/replay claims.
- **Blockers:** None.
- **Next:** Implement permutation-sum determinants through order 8; update status and push the exact outputs.

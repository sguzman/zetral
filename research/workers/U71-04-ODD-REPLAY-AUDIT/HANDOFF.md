# U71-04 odd-sector replay audit handoff

- ID: U71-04
- Status: READY_FOR_REVIEW
- Starting main commit: 8f76f8142bdb0ff201865b21aa193055e8593d0b
- Related staged work: [U71-03 branch](https://github.com/sguzman/zetral/tree/worker/u71-03-odd-staged-data), handoff at `research/workers/U71-03-ODD-STAGED/HANDOFF.md`.
- Scope: independent exact reconstruction of the stored odd transformed replay and the (10^{-6}) grid decision. No campaign/state files were changed.

## Audit result

I fetched the committed five-direction replay summary and lower integer matrix from the U71-03 branch, then independently checked the matrix using a fresh BigInt fraction-free Bareiss elimination.

- Matrix is symmetric, (46\times46).
- All 46 pivots are positive.
- All 46 independently computed pivot integers equal the stored replay's `principalMinors` exactly.
- The stored transform's diagonal product is (10^{35}).
- For the first normalized grid step, I independently formed (10^6 A-\operatorname{diag}(E)), where (A) is the stored lower integer matrix and (E) is the stored energy upper vector. Bareiss elimination fails at pivot 2 with a negative exact pivot. This independently confirms the exact grid margin is 0; base positive definiteness alone does not establish the campaign guard.
- Remote blob SHAs checked: lower matrix `6c838add3febd163519668ce2efd78a7d3931649`; replay `8edd521c67c7574a9629a28b5f837c08869d2bf6`.

The U71-03 branch's stored chunks, trial parts, aggregate, transformed component intervals, replay, and handoff were also compared byte for byte against the runtime objects used to generate them. One transform metadata file initially paired 350-step proposal metadata with a 1200-step replay; that mismatch was corrected and the updated blob read back exactly. The recorded coefficient scan is finite and does not prove no other transform works.

## Claims not audited

This checks the stored transformed interval result and grid arithmetic only. It does not independently derive the prime-power certificate, tail inequalities, arithmetic entries, original-form comparison, or an analytic reason that the sampled transform family has zero margin. No candidate pass, frontier extension, RH claim, or novelty claim is made.

## Recommendation

Keep U71-03 open. Use the failing exact pivot and scan results to guide a new odd-sector congruence or energy allocation. Re-run the independent exact grid audit on any proposed positive-margin candidate before U71-04 can support campaign closure.

## Coordination update

Main advanced to `f4a293f9af98465642a8b62d92c992cb8e00ebbf` during the audit and is adding U71-03 odd artifacts. The U71-03 data branch referenced above has a divergent file at the same path as main's `trial-part1.txt`; its handoff now records the collision. Keep the worker branch separate and reconcile/rename artifacts before any integration. This audit handoff itself adds a unique path.

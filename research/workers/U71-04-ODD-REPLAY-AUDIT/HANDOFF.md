# U71-04 odd-sector replay audit handoff

- ID: U71-04
- Status: READY_FOR_REVIEW
- Starting main commit: 8f76f8142bdb0ff201865b21aa193055e8593d0b
- Latest reviewed main checkpoint: 556c59e14ee703dadb99bd275f279e9fd564dda1
- Related worker evidence: [U71-03 staged branch](https://github.com/sguzman/zetral/tree/worker/u71-03-odd-staged-data) and [witness reconstruction](WITNESS-RECONSTRUCTION.md).
- Scope: independent stored reconstruction of odd trial/chunks, exact baseline and transformed replay, exact grid margin audit, and witness/guard byte reconstruction. No shared campaign/state files were edited.

## U71-03 input reconstruction

The independently generated U71 odd trial and residual chunks were compared with main's artifacts. Main's three trial shards concatenate byte-for-byte to the worker's five shards (1,412,272 characters). All 16 disjoint residual chunks match byte-for-byte, and the corrected aggregate is byte-identical to main (blob `9ee1e2da3461362388acea78dc015beb69dc8862`). This resolves the earlier apparent shard collision as a segmentation difference; the worker branch should still not be merged as-is because its shard filenames overlap main.

Using those inputs, I independently executed the main-source assembly, factor, proposal, and exact replay routines:

- Baseline proposal and full replay match main's `baseline-replay.json` exactly, including the zero grid margin.
- The two-row exact transform source at blob `1a4769ca8685cead5d71d82301e72a435fa54ee7` was applied to the reconstructed raw data. The computed transform, determinant, refreshed tails, proposal and complete replay match the main transformed result exactly (replay blob `0137fd0eef0ea227105e50f0901fe267038df776`).
- The exact transform determinant is (10^{18}); 46 original and 44 unchanged eighth-tail bounds reproduce.
- Transformed replay has 46/46 positive leading pivots and stored generalized grid margin (8/10^6).

## Independent exact grid check

I fetched the committed lower integer matrix and energy vector and ran a separate BigInt Bareiss implementation:

- The (46\times46) lower matrix is symmetric; all 46 exact pivots are positive and equal the stored pivot integers.
- (10^6 A-8\operatorname{diag}(E)) has 46 positive pivots.
- (10^6 A-9\operatorname{diag}(E)) fails at pivot 10 with a negative exact pivot.

Thus the positive grid margin is independently confirmed as (8/10^6), with the next grid step failing. This supersedes the earlier worker five-row diagnostic, whose margin was zero; the two-row transform in the latest main checkpoint is the candidate result.

## Witness and guard reconstruction

The witness handoff records an exact byte reconstruction of all 1,115,799 witness characters and the 3,015-byte guard artifact. That reconstruction invokes the repository's exact generator; it does not provide a second implementation of all witness-cell inequalities.

## Limits and recommendation

This audit independently reconstructs the stored trial, chunks, aggregate, transform, and exact replay, and independently checks the Bareiss pivot/grid decision. It does not derive the prime-power certificate or tail inequalities from the original Weil-form definitions, establish imported analytic assumptions, or perform an independent original-form evaluation. The (h=2.47) odd candidate now has a reproducible positive exact margin, but campaign closure/frontier extension still requires the lead's scoped analytic review. No RH, novelty, or mission-completion claim is made.

The U71-03 worker branch contains overlapping artifact names and remains unsafe to merge unchanged. Its computed inputs match main after concatenation; reconcile paths before integration.

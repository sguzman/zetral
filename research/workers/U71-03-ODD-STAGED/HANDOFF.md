# U71-03 odd staged data handoff

- ID: U71-03
- Status: IN_PROGRESS
- Starting main commit: 8f76f8142bdb0ff201865b21aa193055e8593d0b
- Worker branch: `worker/u71-03-odd-staged-data`
- Scope: generate parity-odd trial and finite residual arithmetic at the Campaign LXXI U71-03 regime; no shared campaign or state edits.

## Completed

Using the repository's `experiments/u71-staged.js` against the pinned main source `experiments/tc01-post-log11-em.js` (blob `2f9035722076c6c8e96bf01b00901191c3466c52`), exact integer/rational JS arithmetic generated the odd trial for (h=247/100), (J=128), (KEM=20), (M=16384), (T=832), lowCount (46). Trial has 46 low-support directions and 370 trial directions. The output is split losslessly across five files `experiments/results/u71-247-100-odd-t832-m16384-trial-part{1..5}.txt`.

The exact finite residual routine was run for 16 disjoint odd-index chunks covering every mode (n=93,95,ldots,16383), with 512 modes per chunk except the final 466. Chunk outputs are `experiments/results/u71-247-100-odd-t832-m16384-finite-<start>-<end>.json`; their interval matrices were summed entrywise as exact integers and saved in `experiments/results/u71-247-100-odd-t832-m16384-finite-total.json`. Chunk supports are exhaustive and disjoint.

## Not yet established

This is staged arithmetic only. I have not assembled the exact prime-power certificate, regenerated/checked its eighth tail coefficients, applied an odd-specific congruence transform, replayed principal-minor intervals, or established a positive grid margin. Therefore U71-03 is not a candidate pass, and the campaign frontier has not been extended. No standalone CLI, CI, RH claim, original-form evaluation, or novelty claim is made.

## Reproduction / next step

With `experiments/tc01-post-log11-em.js` and `experiments/u71-staged.js` at the starting commit, use `trial(source,true)`, then `finite(source,trial,start,end)` for the 16 stored ranges. The currently full local filesystem prevented use of the repository checkout; execution used the exact fetched source strings in the JS tool runtime. Next regenerate the odd raw certificate from the stored trial and aggregate, derive or adapt a parity-odd exact transform, then replay interval principal minors and grid margin. If the margin fails, optimize or revise the odd transform before U71-04.

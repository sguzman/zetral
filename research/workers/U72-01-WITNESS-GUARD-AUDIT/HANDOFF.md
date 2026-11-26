# U72-01 witness and guard audit

- ID: U72-01 independent audit
- Status: READY_FOR_REVIEW
- Starting main: 5e076c163bf97f064a49272556145027bc72dbca
- Scope: exact reconstruction of the committed endpoint-12 witness and guard output. This is a review of U72-01 artifacts only; no shared state or campaign files were edited.

## Witness reconstruction

From main, I fetched `experiments/tc01-post-log11-em.js` (blob `2f9035722076c6c8e96bf01b00901191c3466c52`) and called its exact `rationalElevenWitness(12n,1n)` routine. The JSON serialization matches the concatenation of the two committed witness parts exactly: 551,338 characters.

- Part 1 blob: `eb453939fd7a425a62b5992ae1cd2ba4f405e2dc`, 275,669 characters.
- Part 2 blob: `762f478dfc77bbf486acb87896ba40dcaf702375`, 275,669 characters.
- Recomputed metadata: window 12/1, weight denominator 1000, bound numerator 2930/1000, checked-cell count 29,897.

This verifies byte-level reproducibility from the repository's generator. It is not an independent implementation of the cellwise witness inequalities.

## Guard reconstruction

I fetched `experiments/u72-witness-guard.js` (blob `0c1c349cc5d3361ccb8637d3ebb29a16102f0a5c`) and re-executed its exact guard-generation path against the same arithmetic source, at (h=62/25), (J=128), (M=16384), (T=832). The pretty-printed JSON matches `experiments/results/u72-62-25-guards.json` byte-for-byte (4,695 characters; blob `c4aa7fd8bfef384909625fea0b3587b0d7c99ac9`).

There are 14 guard rows. LowCount 46 fails the even guard and passes the odd guard. LowCount 47 passes both, so 47 is the first common adequate support in the stored regime. The exact outward slacks are:
- (62/25-\log(11)>0.0821047272016294559);
- (\log(12)-62/25>0.0049066497880003102);
- (\log(13)-62/25>0.0849493574615367360).

The guard artifact's rational interval scale is (10^{66}). The values above are decimal renderings of its integer endpoint slacks, not floating-point proof inputs.

## Limits and recommendation

This confirms the stored generator outputs and their metadata. It does not independently derive the witness or endpoint guard bounds, audit the EM/residual estimates from original-form definitions, or supply the U72-02 comparison. The next useful worker task is an independent audit of the U72-02 even candidate once its exact trial and residual artifacts are available; avoid writing the lead's active trial/result paths.

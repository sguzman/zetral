# LXX03 odd M=16384 staged replay

This worker branch stages and replays the odd LXX sector at
`h=123/50`, `J=128`, `KEM=20`, `T=832`, `M=16384`, `lowCount=45`.

## Stored inputs and regeneration

- Trial: 45 directions, 1,344,109 bytes in
  `lxx-123-50-odd-t832-m16384-trial-part{1..3}.txt`.
- Finite residual: 16 disjoint chunks cover every odd mode from 91 through
  16,383, 8,147 modes total. The last chunk has 467 modes; the other 15 have
  512 each. The exact aggregate is
  `lxx-123-50-odd-t832-m16384-finite-total.json`.
- Generation/re-summing source:
  `experiments/worker-LXX/generate_odd_m16384_chunks.py` uses the committed
  `experiments/lxx-m16384-odd-staged.js` source and verifies each chunk's
  interval ordering, shape, coverage, and byte readback.
- Exact factors, full-energy proposal, and replay:
  `node experiments/worker-LXX/replay_odd_m16384.js`.
- Independent determinant replay:
  `python3 experiments/worker-LXX/audit_odd_m16384_replay.py`.

## Result and limits

The exact replay has 45/45 positive leading principal minors for its stored
integer lower matrix, with no failed pivot. The independent Python Bareiss
calculation reproduces all 45 principal minors. Thus this stored odd
comparison is strictly positive for its selected allocation.

The normalized energy grid check at denominator `1,000,000` has margin
`0/1,000,000`: the comparison passes at grid value zero and fails at the first
positive grid step, at pivot 2. This does not negate strict positive
definiteness of the exact lower matrix, but it means this replay establishes
no positive margin at that grid resolution. The float proposal score
`0.9137442417783108` is diagnostic only.

This is a replay of stored staged intervals, not an independent evaluation of
the original arithmetic form, a RH proof, or a campaign closure. It leaves
the broader frontier at `2.45` pending the campaign's scoped review.

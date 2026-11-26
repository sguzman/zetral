# TC03: independent stored reconstruction of the odd T832 comparison

## Verified

I independently summed the 12 stored finite-residual chunks in Python using
integer endpoint addition. Their ranges are disjoint consecutive odd-mode
intervals covering `89..12287`, with total count 6,100. The resulting 44x44
interval matrix matches `finite-total.json` entrywise.

Using the staged assembler's raw component intervals, parity-specific factor
ratios, proposal weights, and the stored exact replay certificate, a separate
Python implementation reconstructed the baseline and selected comparison
matrices. It matches all 1,936 entries and 44 radii in each matrix, the
certificate's exact Bareiss pivot strings, and all 44 positive leading minors.
The fixed-energy margin `131760/1000000` passes; the next grid point fails at
the last leading minor.

Reproduce with:

```sh
python3 experiments/worker-TC03/replay_odd_certificate.py
```

## Scope

The finite chunks are independently summed and their exact coverage checked.
For the remaining component intervals, this audit consumes the object built
by the committed staged assembler; it does not independently regenerate the
trial components or evaluate the original form. This verifies stored interval
assembly, allocation rounding, symmetric radius correction, and integer
positive-definiteness replay. It is not an RH result or a formal proof review.

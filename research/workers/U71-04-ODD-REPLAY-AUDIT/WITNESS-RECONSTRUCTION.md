# U71-04 — stored witness and guard reconstruction

- Date: 2026-11-26 UTC
- Baseline main at the start of this reconstruction: b49608c2358121854279debe16be769a112d7ed3; lead's latest commit at readback was the U71-03 chunk `u71-247-100-odd-t832-m16384-finite-10333-11355`.
- Scope: reconstruct the U71-01 witness and guard artifacts byte-for-byte, and record what that confirms and does not confirm.

## Witness reconstruction

I fetched `experiments/tc01-post-log11-em.js` at blob `2f9035722076c6c8e96bf01b00901191c3466c52` and the three committed witness parts from main:

- part 1 blob `b5cb748986fc16117475496f66ea2d75fc2bad0a`, 371,933 bytes;
- part 2 blob `59986120d36ac8957145e4801548d00fef9a97f8`, 371,933 bytes;
- part 3 blob `46e1909eb9858026ebff854a755540d4613706a3`, 371,933 bytes.

I evaluated `rationalElevenWitness(119n,10n)` from the fetched source and compared `JSON.stringify(result)` with the concatenated remote parts. The bytes matched exactly: 1,115,799 characters. The result reports `best.boundNumerator = "2923"` and `best.checked = 58855`.

This reconstructs the stored output from the same generator used by the repository. It is a byte-level reproducibility check, not an independent implementation of all 58,855 rational cell inequalities.

## Guard reconstruction

The current main guard artifact has blob `c0492416069b5277b91851c706e780c2ba053f9a`; its generating commit is `1c767d0e187980d58b4e9f84036fc55ba579fc3b`. I fetched the current driver and arithmetic source, reran its exact guard routine at (h=247/100), and the compact JSON output matched the committed artifact byte-for-byte (3,015 bytes). It reports 14 parity/lowCount rows; lowCount 44 and 45 fail for both parities, and lowCount 46 is the first positive guard (even (n=92), odd (n=93)). The outward log endpoint slack is positive.

## Combined interpretation

Together with the independent BigInt Bareiss audit in [HANDOFF.md](HANDOFF.md), the stored witness and guard bytes are reproducible and the odd transformed interval matrix is positive definite. The exact normalized (10^{-6}) grid test still fails at its first nonzero grid step, so the guarded extension to (h=2.47) is not established by this worker's odd replay.

Checked here: artifact identity, exact metadata, exhaustive guard row count and first passing support as recorded by the generator, and the separate stored-matrix pivot/grid replay.

Not checked here: a second implementation of the cellwise witness inequalities, a fresh derivation of the EM/residual estimates, the arithmetic entries from original-form definitions, source theorem imports, or a successful odd-sector grid margin. No RH, novelty, or candidate-pass claim is made.

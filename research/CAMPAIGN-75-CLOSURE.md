# Campaign LXXV closure — candidate frontier h=2.51

Date: 2026-11-26. Status: closed as a finite exact candidate certificate. The
candidate frontier advances from 2.50 to 2.51. No claim of RH, independent
original-form evaluation, human review, formal verification, or mathematical
novelty is made.

## Result

- **U75-01 witness and guards:** endpoint 62/5, exact rational witness bound
  3024/1000 over 67,777 checked cells. All endpoint slacks are positive.
  Low support 51 fails the common guard; 52 passes in both parity sectors.
- **U75-02 even comparison:** h=251/100, J=128, KEM=20, T=1024, M=24576,
  low support 52. The exact replay has 52/52 positive leading minors, margin
  95427/10^6, and rejects the adjacent grid point.
- **U75-03 odd comparison:** the corresponding fresh odd trial and 24 disjoint
  residual blocks cover all 12,236 modes 105..24575. Exact aggregate and replay
  have 52/52 positive leading minors, margin 180730/10^6, and reject the
  adjacent grid point. The fraction-free diagnostic has 52 positive transformed
  energy diagonals; all seven rank components narrow 2,263 entries each.
- **U75-04 scoped audit:** the Actions artifact
  [u75-04-closing-audit.json](../experiments/results/u75-04-closing-audit.json)
  was committed at `a8705e1fb86d656fcf9effa2c42cc6ec632ccd6f`, blob
  `08a086e1dad3811906af69e45e4e25533718c826`, 9,572 bytes. Its runner
  independently re-summed all 24 odd blocks and matched 16,224 aggregate
  endpoints; reconstructed all 2,704 odd matrix entries and 52 radii from the
  stored interval components; matched all 52 exact LDL principal minors and
  verified 52 positive pivots at the claimed grid and 51 at the adjacent grid.
  It regenerated the witness and guard artifacts, checked the 51/52 support
  threshold, regenerated the M=24576 even trial from the M=20480 trial patch,
  reproduced the old low residual block byte-for-byte, and matched the 2,048-mode
  extension sum across 5,408 aggregate endpoints.
- **Reproducibility:** Nix flake lock pins nixpkgs revision
  `ac62194c3917d5f474c1a844b6fd6da2db95077d`; the closing audit completed on a
  free GitHub Actions runner using Node 22.20.0 from that locked environment.

## Scope and limitations

The independent audit starts from stored residual interval blocks, trial data,
and transformed component intervals. It independently reconstructs their
aggregate, interval intersection, radii, and stored-matrix LDL comparison. It
does **not** independently reevaluate the original Weil quadratic form from a
separate representation. The finite candidate certificate and its audit do not
prove RH. They are not a formal Lean proof or a human review. Earlier failed
comparisons, including the initial 51/52 even replay, remain in `STATE.md`.

## Disposition

Close LXXV without changing the public README. Next campaign LXXVI begins with
an independent original-form audit of the strongest stored certificate. Analytic
continuation in the window parameter remains the next portfolio route after
that verification gap is addressed.

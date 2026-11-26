# U72 cosine smooth-core audit

Worker: `U72-COSINE-SMOOTH-CORE-AUDIT-W01`  
Status: READY_FOR_REVIEW  
Branch: `worker/u72-cosine-smooth-core-audit-w01`

A zero-extended truncated cosine has Fourier decay `O(1/|t|)`, hence belongs to `H^s` for every `s<1/2` and to `H^log`. Inward compression followed by mollification gives an explicit sequence from `C_c^infinity(-a,a)` converging in `H^s`, therefore in the logarithmic form norm. This independently verifies smooth-core admissibility for the finite cosine span under Suzuki’s stated form-domain identification.

The proof is in `SMOOTH-CORE.md`. It does not establish the full domain theorem or the campaign’s matrix/tail/positivity conclusions. No human or formal verification has been performed.

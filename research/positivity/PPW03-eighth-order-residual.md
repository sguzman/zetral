# PPW03 — Eighth-order signed residual refinement

2026-11-25. Candidate deduction within the previously audited restored-form normalization, not independent review or originality claim.

The actual h=43/20 even test at J=4096,T=448,M=5120,24 low modes and 10^54 arithmetic (experiments/results/ppw03-43-20-even.json, commit 58dcdc32d5ad7cbbc4b75d7293c1f7838eae5f66) is inconclusive. First upper energy lower numerator 3548931493338668019, sixth block allowance 304084426446196851473, first row radius 2184778230050753. The sixth residual allowance now dominates, not arithmetic width. Relative diagnostic 85.87 is approximate only.

Extend P7W03's exact common rational expansion by two signed rows. In its notation
    F_n=L_n S0+V2/n²+L_n S2/n²+V4/n⁴+L_n S4/n⁴+V6/n⁶+L_n S6/n⁶+E8_n,
    S6=sum a_j j^6, V6=delta² V_H-D4, D4=sum a_j d_j j^4.
The exact remainder is
    E8_n = (L_n/n^8) sum a_j j^8/(1-j²/n²)
          -(1/n^8) sum a_j d_j j^6/(1-j²/n²)
          -delta³ V_H/[n^8(1+delta/n²)].
This follows by a finite geometric expansion; it retains signs and the common leading frequency function. For m=M+1, D=1-(K/m)^2>0 and |L_n|<=C_L/n, each direction has
    C8_i=[(C_L/m) sum |a_ji| j^8 + sum |a_ji d_j| j^6]/D + delta³ |V_H_i|,
    |E8_ni|<=C8_i/n^8.
Weighted Cauchy on eight terms with factors 2,4,8,16,32,64,128,128 (reciprocal sum one) and the parity integral bound preserve the first five existing rank matrices, then add
    32/[11(M-1)^11 g] V6*V6
    +64 C_L²/[13(M-1)^13 g] S6*S6
    +64 q/[15(M-1)^15 g] diag(A_i²),
where A_i>=C8_i are positive rational upper bounds and g=g_(M+1). The residual remainder decreases as M^-15 at fixed trial support. The q factor is directional Cauchy, not an assumption that remainders are orthogonal. No finite omitted row or other prime/pole term is discarded.

First test identical h=43/20 parameters to isolate the residual-tail change; if successful attempt both parities and only then a bounded log9 crossing. No positivity beyond 2.1 established in this derivation.

## Executed eighth-order residual comparison

Source experiments/ppw03-eighth-residual-regimes.js commit 5e1b2b1dc2f98867449a8cb3b1c694e6ef5222ce, exact readback. Identical J=4096,T=448,M=5120,24 low modes and 10^54 lattice at h=43/20, actual shifts through 8 and norm upper 2.303. Actual V8 executions:
- even raw experiments/results/ppw03-43-20-eighth-even.json 4268d5f9d39e9603276fcc5cb381fab537106c83, all 24 exact leading minors positive, first 2894228406561947971/10^54. First upper/finite intervals unchanged from failed sixth-order test; first diagonal remainder allowance drops from 304084426446196851473 to 10933051891 on the same lattice. Seven rank-one allowances retained. Approximate relative diagnostic 0.93879 (was 85.87).
- odd raw experiments/results/ppw03-43-20-eighth-odd.json f1bb61835575c1c1bf975df8a31737141500de7b, all 24 positive minors, first 12949750047165093883906/10^54, relative diagnostic 0.87618.

Large even raw readback via normal file endpoint returned empty; deterministic repeat of even execution matched the entire 1,201,473-character raw data via repository contents endpoint. Odd raw also exact matched via contents endpoint. No missing artifact. Reproduce node experiments/ppw03-eighth-residual-regimes.js --even 43 20 4096 5120 448 24 and --odd. Candidate length 2.15, no negative actual spectrum, independent review, separate runtime or literature record. Next bounded prime-nine crossing, possibly tighter window-specific Schur norm.

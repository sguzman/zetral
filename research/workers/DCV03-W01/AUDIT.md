# DCV03-W01 — Independent DCV03 audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

Audited the completed DCV03 coefficient and trace/parity calculations on main baseline `f638a08`. I found no discrepancy in the checked formulas or the nine printed rows. This is a scoped independent arithmetic and derivation audit, not a formal proof or human review.

The check used a separate Python `fractions.Fraction` implementation, rather than the source's JavaScript BigInt. It reproduced the entire integer sequence (B_0,\ldots,B_{32}), all nine constant-trace and parity gaps (as reduced exact fractions), and the rational `log 2` and `-alpha(0)` enclosure comparisons. Run:

```sh
python3 research/workers/DCV03-W01/audit.py
```

The output is deterministic and contains the 33 coefficients and nine rows. In particular, at (d=8), it gives (B_1=365628), (U=704857), and trace/parity lower gap (26399/2000000). At (d=2048), the reduced trace gap is (1422503463/512000000), equivalent to the unreduced table entry (5690013852/2048000000).

## Derivation checks

- With (d_j=4j+1), (E_j=128+16d_j+d_j^2), the exponential-series inequality (e^{d_j/8}\ge E_j/128) implies (e^{-d_j/8}\le128/E_j). After substituting (x_n=576n^2), the resulting rational lower summand is increasing in (x_n) wherever its numerator is positive: its derivative has positive numerator. Taking its positive part, floor, and adding the monotone pole-loss term preserves nondecrease in (n\ge1).
- The Taylor polynomial (T_5(y)=\sum_{m=0}^5(-y)^m/m!) is a lower bound for (e^{-y}) on (y\ge0) by the integral remainder. Discarding nonpositive terms and flooring only nonnegative rational terms is directionally valid. (8\sinh(1/8)>1) supplies the stated zero-mode pole bound.
- For the parity trace, (t_n=4\pi n). The odd trace is (L^{-1}\int_{-A}^A\sin^2(t_nx)\,dx). The bounds ​(​sin^2 y\le y^2) and, for ​(|y|\le\pi/2), ​(​sin^2 y\ge(2y/\pi)^2) yield the reported coefficients (8(4\pi)^2/3<8\cdot7744/147) and (32(4\pi)^2/(3\pi^2)=8\cdot3136/147), respectively. The condition (8n\le d) ensures ​(|t_nx|\le\pi/2) because (4\pi n/d\le\pi/2). The zero mode is even; each nonzero pair has combined trace (8/d). Thus the even upper / odd upper bounds are directionally consistent.
- The rational `log 2` inequalities follow from the first four positive atanh terms and the stated tail bound. Combined with the imported identity ​(​alpha(0)=-\gamma-\pi/2-3\log2-\log\pi), the enclosure gives (-\alpha(0)<11/2).
- At (A=L/2), a compactly supported smooth test in ((-A,A)) has autocorrelation support strictly inside ((-L,L)). Consequently its periodization has no overlap with nonzero (2L)-translates. The exact periodic identity therefore holds on the smooth core; extending the lower bound uses the closed-form/core premise of the source argument.

## Assumptions and limitations

The corrected symbol expansion, its exact relationship to the Weil form, and the identity for ​(​alpha(0)) are imported from DCV01/CPC03 rather than re-proved here. The periodic Parseval / closed-form extension is checked at the level described above, not machine-verified. This does not evaluate the inverse Gram operator or establish scalability past the prime-free endpoint. No Rust compiler was run, and no Rust execution is claimed.

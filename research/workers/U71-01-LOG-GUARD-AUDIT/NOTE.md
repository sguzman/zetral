# U71-01 exact logarithmic guard audit

I independently checked the exact endpoint and the stored common low-count guard signs for the 119/10 witness.

Reproduce the rational checks with:

    python3 experiments/worker-U71/audit_u71_log_guards.py

For \(x>0\), set \(r=(x-1)/(x+1)\). The identity
\[
\log x=2\sum_{k=0}^{\infty}\frac{r^{2k+1}}{2k+1}
\]
has exact rational truncation bounds. After \(N+1\) terms, the absolute tail is at most
\[
\frac{2|r|^{2N+3}}{(2N+3)(1-r^2)}.
\]
Use the range reductions
\[
119/10=16(119/160),\qquad 11=16(11/16),\qquad 13=16(13/16),
\]
so the four atanh arguments are \(1/3,-41/279,-5/27,-3/29\). With \(N=20\) and exact fractions, the resulting lower bound \(L\) satisfies
\[
\left\lfloor 10^{10}(L-247/100)\right\rfloor=65{,}384{,}001.
\]
Thus \(\log(119/10)-247/100>0.0065384\), and the same enclosures verify \(\log(11)<247/100<\log(13)\). The stored outward endpoint slack in u71-247-100-guards.json also exceeds \(0.0065384\).

I checked all 14 stored guard intervals against their exact integer scale and parity labels. Both lowCount 44 and 45 have strictly negative upper endpoints in both parities. At lowCount 46, the lower endpoints are positive for even \(n=92\) and odd \(n=93\); all larger stored low counts also have positive lower endpoints. Thus 46 is the smallest common supported lowCount in the stored table.

This is an independent check of the logarithmic endpoint and guard selection. It does not rerun the 58,855-cell witness construction or certify the full even/odd comparisons. No independent original-form evaluation, RH proof, novelty claim, or campaign closure is implied.

# PC65-W01 — global one-sided bound for the order-40 diagonal

Date: 2026-11-26 UTC. Baseline: `e904939dace9106292530a5a0460a65a991beaec` (LXIV closure / LXV activation). Symbolic-algebra-assisted audit; not Lean/formal verification and not a full comparison replay.

## Finding

The source's seventh-derivative polynomial is exact, but its midpoint Euler–Maclaurin coefficient has the wrong sign. Its third- and fifth-derivative polynomials, contrary to the two discrepancies reported in the unreviewed PMA63-W03 audit, **already have the exact signs in the pinned baseline source** and in current main. The W03 note's explicit three-term center-bias formula therefore does not equal the source-minus-correct-center difference. Its broader warning that the displayed symmetric `widen` is not established as a two-sided enclosure remains appropriate.

The actual coefficient error alone makes the source center a rigorous one-sided underestimate for every frequency (x=\omega_n^2\ge0), including the higher frequencies in the planned LXV low-(J) regime. Thus the center minus the stated twelfth-order remainder is a valid lower bound for the exact diagonal, conditional on the Euler–Maclaurin remainder derivation below. The corresponding upper endpoint is not certified by this argument.

## Exact derivatives and midpoint coefficients

Write
\[
g_x(r)=\frac{x}{r(r^2+x)}=\frac1r-\frac{r}{r^2+x},\quad u=R^2,\quad d=u+x.
\]
For (q(r)=r/(r^2+x)), set (P_0=r) and
\[
P_{k+1}=(r^2+x)P_k'-2(k+1)rP_k.
\]
Then (q^{(k)}=P_k/(r^2+x)^{k+1}). This recurrence, or direct exact differentiation, gives
\[
\begin{aligned}
g_x^{(3)}(R)&=6\frac{u^2-6ux+x^2}{d^4}-\frac6{u^2},\\
g_x^{(5)}(R)&=120\frac{u^3-15u^2x+15ux^2-x^3}{d^6}-\frac{120}{u^3},\\
g_x^{(7)}(R)&=5040\frac{u^4-28u^3x+70u^2x^2-28ux^3+x^4}{d^8}-\frac{5040}{u^4},\\
g_x^{(9)}(R)&=362880\frac{u^5-45u^4x+210u^3x^2-210u^2x^3+45ux^4-x^5}{d^{10}}-\frac{362880}{u^5}.
\end{aligned}
\]
The `fa3`, `fa5`, `fa7`, and `fa9` expressions at current `experiments/bc01-log13-regime.js` lines 175, 180, 186, and 191 agree exactly with these derivatives. The Bernoulli-polynomial midpoint formula for step two gives coefficients (-2^{2m}B_{2m}(1/2)/(2m)!) on (g^{(2m-1)}(R)), namely
\[
\frac16,\quad-\frac7{360},\quad\frac{31}{15120},\quad-\frac{127}{604800},\quad\frac{511}{23950080}.
\]
The code matches all but the seventh-derivative coefficient: it uses (+127/604800) in `diag` at line 193.

Put (t=x/u\ge0) and
\[
Q(t)=36-42t+84t^2+69t^3+56t^4+28t^5+8t^6+t^7.
\]
Since
\[
(1+t)^8-(1-28t+70t^2-28t^3+t^4)=tQ(t),
\]
the derivative factors as
\[
g_x^{(7)}(R)=-5040\frac{x u^3 Q(t)}{d^8}.
\]
Here (Q(t)>0): (36-42t+84t^2) has negative discriminant and positive leading coefficient, and the remaining coefficients are positive. Therefore (g_x^{(7)}(R)<0) for (x>0), and it is zero at (x=0).

If (C_{EM}) is the correctly truncated midpoint center and (C_{src}) is the source center, the only coefficient difference is
\[
C_{src}-C_{EM}=\left(\frac{127}{604800}+\frac{127}{604800}\right)g_x^{(7)}(R)
=-\frac{127}{60}\frac{x u^3Q(x/u)}{(u+x)^8}\le0.
\]
This global sign does not require (x<15u).

## Remainder and the LXV cutoff

The source uses
\[
\epsilon=\frac{36812334}{2730}\frac{x}{R^{14}}.
\]
For (t=x/r^2\ge0), exact differentiation yields
\[
g_x^{(12)}(r)=12!\frac{x}{r^{15}}\frac{p(t)}{(1+t)^{13}},
\]
where
\[
p(t)=91-637t+2002t^2-572t^3+1573t^4+1703t^5+1716t^6+1287t^7+715t^8+286t^9+78t^{10}+13t^{11}+t^{12}.
\]
Coefficientwise \,(|p(t)|\le91(1+t)^{13}), hence \,(|g_x^{(12)}(r)|\le14!x/(2r^{15})) for all (x\ge0). The combined step-one/step-two trapezoid remainder has (C_{12}=2(1+2^{11})|B_{12}|/12!), so
\[
2C_{12}\int_R^\infty\frac{14!x}{2r^{15}}dr
=\frac{36812334}{2730}\frac{x}{R^{14}}.
\]
Thus, if (D=C_{EM}+\rho), \,(|\rho|\le\epsilon), then `lo = C_src - epsilon` obeys `lo <= D` because (C_{src}\le C_{EM}). This proves a lower enclosure at every (x\ge0); it does not prove `hi = C_src + epsilon` is an upper enclosure.

For the planned LXV parameters (J=128,T=768,h=241/100), the source sets (R=(4J-1)/2=511/2) and evaluates diagonal terms through (n<2(\lfloor T/2\rfloor+1)=770). At (n=768), (x/R^2=(\pi n/(hR))^2>15) (the exact symbolic check uses \,\(\pi>157/50\)). The previous W03 note's restricted (x<15R^2) argument therefore cannot cover this cutoff, while the global factorization above does.

The lower-endpoint result may support a finite-matrix lower bound only if downstream assembly treats the diagonal intervals as a box containing a clipped diagonal (D_{clip}=\min(D,hi)\), or otherwise proves the same Loewner order. Since (D\ge lo), this clipped diagonal lies in the reported interval and is no larger than the exact diagonal. This audit does not execute the generator or verify that all downstream assembly and other intervals satisfy that condition.

## Reproduction and provenance

Run from repository root:

```sh
python3 experiments/worker-PC65-W01/verify_em_bias.py
```

The exact SymPy calculation reports 4/4 derivative identities, confirms the sole midpoint coefficient mismatch, factors the global bias, checks the 12th-derivative polynomial/remainder constant, and verifies the planned cutoff reaches (x/R^2>15). It is symbolic-algebra evidence, not a machine-checked proof.

- Current regime source blob: `e5de03cc7ebba9309ad15d6fa313f823aee7c18b`, `experiments/bc01-log13-regime.js`; source commit `90b510fe59a9f57c0ca68971b7be9174fc590322`. It remains byte-identical at latest main `a9aee29ffa371319cf2e3cdc56fc51b7fbf6adf8` (PC03 even pass; odd work order).
- PMA63-W03 baseline commit: `78d511de1e8ed53cbbf589d49ad56cc7d70a2b71`.
- PMA63-W03 audit remains on its worker branch; this note corrects its fa3/fa5 source comparison and the resulting bias formula. No full original-form or Campaign LXV positivity claim follows.

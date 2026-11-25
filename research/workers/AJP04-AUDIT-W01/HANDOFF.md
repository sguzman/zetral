# AJP04-AUDIT-W01 — capacity certificate and pivot audit

- **ID:** AJP04-AUDIT-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `db331c4` (Campaign XXXVII/PTI01 checkpoint)
- **Scope:** Independently check AJP04's sufficient even/odd scalar criteria and its two-dimensional example showing that near alignment alone does not control residual capacity.
- **Acceptance question:** Are the Schur-complement bounds and the stated finite-dimensional counterexample internally correct?

## Check

For the even block (T_e+2c\otimes c), write (c=\beta\phi+v), (T_e\phi=\mu\phi), and (D=T_e|_{\phi^\perp}\ge\delta I>0). Minimizing

\[
\mu|x|^2+\langle Dy,y\rangle+2|\beta x+\langle v,y\rangle|^2
\]

over (y\) gives the Schur coefficient
\[
\mu+2|\beta|^2/(1+2\langle v,D^{-1}v\rangle).
\]
Since (0\le\langle v,D^{-1}v\rangle\le\|v\|^2/\delta\), the displayed condition in AJP04 is a sufficient strict positivity condition. Equality cannot be counted as strict positivity. In the odd block, (T_o-2s\otimes s\), the sufficient condition (T_o\ge\delta I) and (\delta>2\|s\|^2) follows directly from Cauchy–Schwarz. It is only a crude bound, as the note says.

For the example (T=\operatorname{diag}(-1,\varepsilon)), (c=(\sqrt{(1+d)/2},\sqrt{d/2})), the vector has squared norm (1/2+d) (it need not be normalized). Its ground-state coordinate gives restored Rayleigh value 
\(-1+2|c_1|^2=d>0\). The Schur coefficient after eliminating the positive residual coordinate is
\[
-1+\frac{2|c_1|^2}{1+2|c_2|^2/\varepsilon}
=-1+\frac{1+d}{1+d/\varepsilon}<0\quad(0<\varepsilon<1).
\]
As (d\downarrow0), the normalized direction of (c) approaches the negative ground direction, while the restored form still has a negative direction. This verifies the stated obstruction to inferring positivity from small alignment defect alone.

## Finding and limits

- No algebraic error found in AJP04's sufficient criteria or 2D capacity diagnostic.
- The example is finite-dimensional only; it is not an arithmetic operator or zeta counterexample.
- This check does not establish the needed actual arithmetic gap/capacity or ordinary upper rate. No numerical, formal, primary-source, or exhaustive prior-art check was performed.
- AI-assisted scoped audit, not human review; no priority claim.

## Evidence

- Reviewed `research/positivity/AJP04-audit-and-prime-tower-pivot.md` at `db331c4`.
- Exact repository command: `git show origin/main:research/positivity/AJP04-audit-and-prime-tower-pivot.md`.
- The checks above are direct two-by-two and Schur-complement algebra; no experiment was run.

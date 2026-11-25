# RHI02-AUDIT-W01 — relative heat threshold coefficient audit

- **ID:** RHI02-AUDIT-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `37778b0` (Campaign XXXIX activation)
- **Scope:** Independently recalculate the (t^2) relative heat coefficient, its prime-power derivative jumps, and the parity-resolved factors in RHI02. No inference about positivity or RH.
- **Acceptance question:** Are the prime weights, factor two, signs, and threshold jumps consistent with the translation and pole kernels?

## Recalculation

For (H=2c\otimes c-2s\otimes s), its kernel is (2\cosh((x-y)/2)). The trace of a compressed shift against (H) is the diagonal integral over the overlap interval:
\[
\operatorname{tr}(T_uH)=\int_{I\cap(I-u)}2\cosh(u/2)\,dx=2\cosh(u/2)(L-|u|)_+.
\]
Thus each von Mangoldt term contributes
\[
\frac{\Lambda(n)}{\sqrt n}\operatorname{tr}((T_{\log n}+T_{-\log n})H)
=2\Lambda(n)(1+1/n)(L-\log n)_+,
\]
with the negative sign in (B(L)) because (P\) is subtracted. Also 
\(\tfrac12\operatorname{tr}(H^2)=4\sinh^2(L/2)+L^2\), consistent with the stated coefficient.

For the archimedean contribution, the difference-energy form gives
\[
G(L)=2L\alpha_0+4\int_0^\infty k(u)[L-\cosh(u/2)(L-u)_+]\,du.
\]
On (u<L), the first derivative of the bracket is (1-\cosh(u/2)); on (u>L), it is (1). The bracket is continuous at (u=L), so no boundary delta appears in (G'\). Differentiating once more yields (G''(L)=-4k(L)\cosh(L/2)\), with no atomic term. The smooth pole contribution has second derivative (2\cosh L+2\). The only atoms in (B''\) are therefore
\[
-2\sum_{n\ge2}\Lambda(n)(1+1/n)\delta_{\log n},
\]
and the derivative jump at (L=\log n\) is exactly (-2\Lambda(n)(1+1/n)\).

For parity, direct product-to-sum integration gives
\[
\operatorname{tr}(T_uH_e)=(L-u)\cosh(u/2)+2\sinh((L-u)/2),
\]
\[
\operatorname{tr}(T_uH_o)=(L-u)\cosh(u/2)-2\sinh((L-u)/2)
\quad(0\le u<L).
\]
Their right derivatives at the threshold are (\cosh(u/2)+1\) and (\cosh(u/2)-1\). Multiplication by the two signed shifts and (\Lambda(n)/\sqrt n\) gives jumps
\(-2\Lambda(n)n^{-1/2}(\cosh(u/2)\pm1)\), exactly as recorded; their sum recovers the full jump, and their difference is (-4\Lambda(n)/\sqrt n\).

## Finding and limits

- No sign or factor error found in RHI02's full or parity-resolved coefficient formulas.
- The statement is a relative operator-pair invariant; it does not recover prime data from zero ordinates alone and gives no positivity certificate.
- Not checked: RHI01 domain/source assumptions; RHI03's Krein spectral-shift and Laplace arguments; numerical heat-trace values, formal verification, or exhaustive prior art.
- AI-assisted scoped audit, not human review. No RH or Hilbert–Pólya conclusion.

## Evidence

- Reviewed `research/positivity/RHI02-prime-threshold-invariants.md` and RHI01 at `37778b0`.
- Exact command: `git show origin/main:research/positivity/RHI02-prime-threshold-invariants.md`.
- The checks are direct integral and distributional derivative calculations; no numerical experiment was run.

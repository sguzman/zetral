# DZO-AUDIT-W01 — independent audit of fixed discrete obstruction

- **ID:** DZO-AUDIT-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `8bbf9ae` (Campaign XXXV DZO04)
- **Scope:** Independent internal audit of DZO01–DZO04's positive density construction, quantile discretization, anomalous carrier trial, strip projection discrepancy, and entire-product argument. This is a mathematical consistency check, not verification of an arithmetic zeta construction.
- **Acceptance question:** Are there visible sign, normalization, support, convergence, or rate errors in the claimed abstract model?

## Completed

Read the current DZO01–04 notes and independently recomputed the key carrier and rate factors. No decisive error was found in scope.

1. With the transform convention (Ff(u)=\int f(x)e^{iux}dx), the product (p=(F\psi)^2) has compact transform (2\pi(\psi*\psi)); taking the real part of the vertical shifts multiplies it by \(\cosh(bv)\). This confirms the stated cancellation multiplier against the strip factor \(1/\cosh(cv)\).
2. Quantile rounding of continuous cumulative masses gives bounded cumulative discrepancy. For the ordinary paired test (G_d(u)=Ff(u+id)\overline{Fg(u-id)}), integration by parts and the shifted Plancherel bounds yield an error (O(ae^{2a|d|})\|f\|_2\|g\|_2), uniform in carrier height. This is lower exponential order than (e^{sa}) since (s>2b).
3. For the two-packet trial, the autocorrelation has three disjoint bands. At the selected positive carrier, the modulation cancels its phase; the cosine transform and cross-correlation each contribute a factor (1/2), giving the negative main term 
   \[-\frac{\epsilon\eta L_l}{2}\cosh(bk_l)J,\qquad J=\int \widehat p(v)h_g(v)\cosh(bv)\,dv>0.\]
   Since (L_l=e^{(s-2b)a_l}), (k_l=2a_l-4r), and the reference and quantile terms are (o(e^{sa_l})), the stated positive limiting depth coefficient follows. The opposite carrier is nonstationary and integration by parts gives a negligible term.
4. The additional DZO04 interpolation from the fixed-spaced sequence (a_l) to all (a\) is valid if the form domains embed by zero extension as stated: the negative depth is monotone under support enlargement. Thus the upper and lower bounds imply a full logarithmic rate (s), not only a limsup.
5. The discrepancy exponent calculation (L_l e^{-(c-b)k_l}\asymp e^{(s-2c)a_l}=L_l^{(s-2c)/(s-2b)}) for (s>2c), and zero exponent otherwise, is algebraically consistent. The comparison with the stated zeta-scale exponent uses (s\le1).
6. The paired canonical product has \,\(\sum |\gamma|^{-2}<\infty\) under the stated (O(T\log T)\) count, and the (O(R\log R)\) maximum-growth estimate together with the lower count establishes order one. The product supplies symmetry, not an Euler product or arithmetic explicit formula.

## Evidence and reproducibility

As a follow-up import check, I also read LZC01 §§2–4. The kernel multiplier \(\cosh(vs)/\cosh(cs)\), positivity for \(|v|<c\), and mass one are mutually consistent. Given LZC01's analytic-test identity, Fubini against the positive kernel and Fourier uniqueness yield a constant projection density \(1/(2\pi)\). This verifies the local-projection input DZO03 uses; it does not verify LZC01's inherited arithmetic form identity or classical-count assumptions.

- Evidence reviewed: `research/positivity/DZO01-lacunary-continuous-construction.md`, `DZO02-discrete-rate-counterexample.md`, `DZO03-projection-and-entire-product.md`, and `DZO04-audit-and-arithmetic-boundary.md` at starting commit `8bbf9ae`.
- Exact review commands: `git show origin/main:research/positivity/DZO01-lacunary-continuous-construction.md` (and corresponding DZO02–04 paths); in the worker worktree, `cat research/positivity/DZO02-discrete-rate-counterexample.md` and `cat research/positivity/DZO03-projection-and-entire-product.md`.
- No numerical or formal verification was run or needed for this symbolic audit.

## Checked / unchecked

- **Checked:** Internal Fourier signs and cosh factors; density positivity/count scaling at the stated level; quantile error exponent; selected-trial band factors; fixed-spaced interpolation; discrepancy exponent algebra; canonical-product convergence/order estimates; LZC01's local kernel/projection calculation as used by DZO03.
- **Not checked:** Every tail estimate line-by-line in the full lacunary lemma; a full independent derivation of the local-limit transfer; primary-source arithmetic identities and inherited classical-count assumptions; any claim that the model is zeta or satisfies its Euler product; formal proof, numerical experiment, exhaustive literature search, or human review.
- **Finding:** No flaw identified in this scoped AI-assisted audit. The construction remains an abstract zero system, not a zeta counterexample or Hilbert–Pólya operator construction.
- **Next recommendation:** Lead review the handoff. The research frontier is now arithmetic-specific: identify which prime-power/Euler-product constraint excludes (or fails to exclude) the abstract density mechanism. Do not describe the present model as an arithmetic realization.

# DNB03 mode-weighted Schur audit and replay

- ID: DNB03-AUDIT-W01
- Status: READY_FOR_REVIEW
- Starting commit: `33f1d92` (`Activate monotone boundary lower operator campaign`)
- Scope: audit of DNB03 mode couplings and replay of its arithmetic witness program.

## Result

`node experiments/dnb03-weighted-witness.js` ran in Node.js 24.22.3 and returned the stored intervals. It reproduces five negative Rayleigh witnesses for the specific diagonal-weight Schur lower test, at (m=6,8,16,24,32). This is a failure of that sufficient test, not a negative eigenvalue or a sign conclusion for the true Schur complement.

## Formula checks

- For a constant on a cell, the two boundary-exponential overlaps are ((1-q)/(r\sqrt h)). For the normalized cosine mode (n\ge1), the left overlap is (\sqrt{2/h}\,r(1-(-1)^nq)/(r^2+\omega_n^2)), and the right overlap is ((-1)^n) times this. Contracting with the single-cell rank-two boundary matrix ([\begin{smallmatrix}1&q\\q&1\end{smallmatrix}]/(1-q^2)) gives the diagonal term in DNB03(1). DNB02's off-diagonal exponential factors reduce to the displayed geometric recurrences (L_i,U_i).
- The per-rate coefficient row/column estimate is bounded by (4\sqrt2/[h(r_j^2+\omega_n^2)]). Integral comparison gives \(\sum_j(r_j^2+\omega^2)^{-1}\le\omega^{-2}+\pi/(4\omega)\), hence \(\|R_{\alpha,n}\|\le\sqrt2/n+4\sqrt2h/(\pi^2n^2)\). The omitted-rate bound used by the script is the corresponding (1/r_J^2+1/(2r_J)) tail.
- Direct cell overlap of a shift (s/h=k+f) gives the sine/fractional-offset formula in DNB03(2); at exact alignment (f=0), the cosine-mode coupling vanishes. Its global sign from the arithmetic operator is applied in the script; signs do not affect the norm bound.
- Integration by parts gives each cell's (n)-th cosine coefficient of a smooth function (u) bounded collectively by (h\|u'\|/(\pi n)). Applying this to both rank-one pole terms yields (2h\|c\|\|s\|/(\pi n)), matching the stated pole-mode error.
- The key denominator treatment is sound: the arithmetic code fixes the lower endpoint of each positive (w_n^{lo}) interval as the exact rational weight in the *comparison model*. The exact Schur correction is bounded above using that diagonal model; for the negative-witness diagnostic, a lower bound on the finite correction suffices to prove that this already conservative comparison matrix has a negative Rayleigh direction. It does not bound the true (D^{-1}) correction from below or imply (S(z)<0).

The candidate vectors originate from earlier finite Ritz diagnostics, but their weights are rationalized and every reported quotient is re-evaluated with outward-rounded intervals. The floating-point candidate search therefore affects only witness selection, not the certified sign of the selected comparison quotient.

## Limits

No issue was found in the reviewed mode formulas or the comparison direction. I did not independently verify every BigInt interval primitive, the DLMF remainder citation, or the source derivation of every imported CAC/DNB constant. The test does not establish positivity of a full finite lower operator or of the actual arithmetic operator.

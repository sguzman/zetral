# HPS03 independent audit

Status: READY_FOR_REVIEW

Scope: independent proof-structure audit of `research/positivity/HPS03-separated-carrier-indexed-converse.md`, focusing on the dimension extraction and Fourier localization argument. The TPH/PBC/WPR inputs are treated as inherited; I did not retrieve or independently prove those source estimates.

## Findings

The argument addresses the matrix-selection obstruction from scalar packet localization by a different route: it first approximates the original negative form by a fixed-physical-support bounded operator plus a positive diagonal log multiplier, then localizes that enlarged operator in frequency. The integrated localization identity preserves the diagonal cost exactly and controls the bounded-term error by (O(L^{-1})\). This is the key extra structure beyond the scalar FES packet average.

The dimension accounting in the iterative extraction is internally consistent. The (j)-dimensional negative spectral subspace of the enlarged operator has uniformly bounded Fourier (H^1\) norm because its eigen-equation divides the fixed-support bounded term by a multiplier bounded away from zero on the negative spectrum. At each previously extracted center, translated subsequential limits lie in the finite-dimensional model gain space. Orthogonality to those spaces leaves a unit vector in the original (j)-dimensional subspace when their total dimension is below (j\). Its local limits vanish at previous centers; the localization identity and boundedness of the localized term then force a new negative packet outside growing neighborhoods of those centers. The new model contributes at least one further gain dimension. Since this happens at most (j\) times, the separated-carrier family has enough total model multiplicity. The final transfer from a positive subspace of \(\chi D_\phi\chi\) to \(D_\phi\) is valid because multiplication by \(\chi\) is contractive and preserves the cut-off quadratic numerator.

I found no decisive algebraic or dimension-counting counterexample in the stated proof. The main dependencies are the global fixed-support approximation (2), the uniform integrated commutator estimate (3), and the local convergence of the enlarged modulated operators. These are the places where a lead review or a formal estimate-by-estimate check would be most valuable.

## Limits

- This review did not independently verify the weighted marginal estimates used to control the boundary strip, the Weil-form split-domain extension, or the inherited strong twisted limits.
- The theorem remains a candidate indexed limsup characterization over actual joint separated-carrier families; it does not evaluate those families or give a uniform growing-index result.
- No RH conclusion, actual anomalous mode, off-line zero, numerical computation, or formal verification.

# QIR02-W01 — Independent sampled-pencil audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I checked the exact Hankel factorizations and rank threshold, the deterministic conditioning bounds, the perturbed pencil identity and disk matching argument, the frequency/deviation conversions, and the Vandermonde coefficient error. I found no discrepancy in these calculations under the stated amplitude, separation, radius, alias-band, and noise hypotheses.

This is a conditional finite-dimensional audit. The spectral exponential-sum model, certified QIR01 error budget, physical frequency band, and lower amplitude/separation bounds are inputs; none is inferred from actual zeta data. The conclusion does not establish a practical algorithm for the Weil spectrum or an observed off-line zero.

## Checks

- With \(V_q=(z_j^n)_{n,j}\), the transpose factorization \(H_0=V_P\operatorname{diag}(b)V_P^T\) has rank \(r\) because \(V_P\) has full column rank and \(V_P^T\) is onto. The Lagrange polynomials bound \(\|V_r^{-1}\|_2\le\sqrt r((1+R)/\delta)^{r-1}\); extra rows cannot decrease the minimum singular value. The conservative \(v\) therefore bounds \(\sigma_{min}(V_P)\) below. Singular-value multiplication gives \(\sigma_r(H_0)\ge m v^2=g\). Entrywise Hankel errors bounded by \(\epsilon\) have Frobenius/operator norm at most \(P\epsilon\), so \(g>2P\epsilon\) leaves a nonempty threshold interval that separates the signal rank from noise.
- For the leading square blocks, \(H_{1r}H_{0r}^{-1}=V_r\operatorname{diag}(z_j)V_r^{-1}\). The exact perturbation identity \(\widehat C-C=[(Y_1-H_1)-C(Y_0-H_0)]Y_0^{-1}\) has the stated sign. Using \(\|C\|\le R\kappa\), \(\|Y_0^{-1}\|\le(g_r-r\epsilon)^{-1}\), and conjugating into the node basis gives the disk radius (1). Once disks are disjoint, the homotopy \(C+t(\widehat C-C)\) preserves their root counts; a small radius enlargement supplies the strict Neumann margin at the boundary. Thus the claimed one-to-one node match is supported, including repeated observed roots counted algebraically.
- The angular error follows from the tangent rays from the origin to a radius-\(q\) disk around a center of modulus at least \(\rho_{min}\). The logarithmic radius perturbation is at most \(q/(\rho_{min}-q)\), giving the deviation bound. The alias guard and chord-separation conversion are valid only on the stated band/arc; the report explicitly disallows applying the local \(h\Delta\) inequality across a longer arc.
- For coefficient recovery, \(\|\widehat V-V\|\le q L_v\) follows entrywise from \(|\widehat z^n-z^n|\le n(R+q)^{n-1}q\). The inverse perturbation bound gives (3), requiring \(qL_v<v_r\). For multiplicity recovery, taking absolute values removes the large phase factor but leaves the positive gain and \(|\beta_j|\) uncertainty exactly as QIR02 states.
- The no-separation counterexample is valid on a fixed finite grid: the difference of two nearby unit-circle exponentials is bounded by \(|b||\xi|nh\), tending uniformly to zero for the finitely many samples. The amplitude and alias obstructions also correctly delimit the guarantees.

## Limitations

No numeric experiment or source inspection was needed for the exact finite-matrix algebra. I did not verify the inherited operator asymptotics or any certified constants, and I did not run a validated SVD/root-count implementation. Standard floating-point output alone would not meet the stated certification conditions. No human-review, formal-verification, or novelty claim is made.

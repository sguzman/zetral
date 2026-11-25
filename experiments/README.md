# R03 experiments

Source targets: Suzuki arXiv:2610.32704v1 §6, Tables 1–2, https://arxiv.org/html/2610.32704v1#S6 . X=3,5,7,11; N=14,16,18; first six positive roots on [0,40], source grid spacing .01. The source used 140/180 decimal digits and archimedean series tail <1e-188.

The default binary is a binary64 diagnostic baseline (arithmetic Gram assembly and Cholesky). A separate MPFR-backed precision binary is now authored; its build is not yet verified. Run:
    cargo test --manifest-path experiments/Cargo.toml
    cargo run --release --manifest-path experiments/Cargo.toml --bin zetral-experiments -- 3 18 32

The command prints the matrix as CSV. No zeta zeros are inputs. Tests check exact cutoff convention, independent direct midpoint correlation integral, matrix symmetry/reflection, quadrature refinement, and successful X=3 Cholesky. The execution environment lacked cargo/rustc; Rust tests are authored but not yet executed. CI is being extended to execute them.

## Independent binary64 reference experiment (executed 2026-11-24 Mexico)
SciPy/NumPy diagnostic with composite 16-point Gauss–Legendre quadrature (32 equal panels), eigenvalue estimates, positive-definite solve where possible, and sign scan 0..40 in steps .01 with Brent roots. G formula matches literature/gram-quadrature.md; c=G^-1 phi(i), scalar W/i=2(t Im(phi(t)^T c)-Re(phi(t)^T c)). Results:
- X=3,N=18: estimated condition 4.703018609e7, first roots 14.134727456606349,21.02263788970429,25.01921899154745,30.627249132438955,33.605131990049465,38.61584056561252. All six differ from the source's rounded values by at most 1.1e-8.
- X=5,N=18: spurious sign root at 9.25290748; numerical condition estimate 1.88e15 instead of published 1.85e17.
- X=7,N=18: spurious roots at 4.48720288 and 8.87448268; numerical condition estimate 1.23e16 instead of published 8.24e25.
- X=11,N=18: estimated smallest eigenvalue negative (-1.96e-15) due to loss of numerical reliability; solve skipped. Published condition 2.33e34.

This was an independent reference run, not execution of the Rust crate. No certified error or full reproduction claimed. The binary64 failures are expected given the condition estimates. Preserve them as negative controls. Next: arbitrary-precision Rust arithmetic, Riesz solve, root isolation and precision/refinement sweeps. A fixed 32-panel Gauss rule with binary64 nodes cannot deliver 140-digit accuracy; use an arbitrary-precision rule, with a separate independent comparison and refinement. Exclude structural grid zeros where every basis transform vanishes; flag sign-scan limitations.

## Arbitrary-precision checkpoint
See [moment reduction and reproduction instructions](moment-reduction.md), [24 reproduced roots](results/n18-precision.csv), and [independent diagnostic](reference/independent_check.py). Two mpmath reference runs agree at the displayed precision and match published Table 1 rounding for all X at N=18. Rust MPFR implementation is pending compilation; Table 2 and independent entry comparison remain pending.

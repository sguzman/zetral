# Gram matrix moment reduction

Status: algebraic rearrangement of the previously derived quadrature, not a novelty claim. Numerical reference checks executed.

Let u=t/L, H(t)=2 cosh(t/2)-K(t), K(t)=exp(t/2)/(2 sinh(t)). For unequal m,n the product-to-sum identity gives
S_mn(t)=(-1)^(m-n+1)[sin(2 pi m u)-sin(2 pi n u)]/[pi(m-n)].
Consequently define h_j=integral_0^L H(t) sin(2 pi j t/L) dt - sum_{q<X} Lambda(q)/sqrt(q) sin(2 pi j log(q)/L).
Then G_mn=(-1)^(m-n+1)(h_m-h_n)/(pi(m-n)) for m != n, with h_-j=-h_j. Diagonal entries retain the regularized integral from literature/gram-quadrature.md. This reduces expensive quadrature from O(N^2 Q) to O(N Q), followed by O(N^2) assembly, where Q is quadrature order. High precision is necessary because divided differences and the solve can amplify error.

Reference run: mpmath 1.3.0, 80 decimal digits/order 160 and 100 decimal digits/order 192. Newton-generated Gauss-Legendre nodes; no binary64 nodes or supplied zeros. Cholesky succeeded for all four X values. Complex Riesz vector solved by LU; real W scan with spacing 0.1, 85 bisections, first six accepted sign roots, structural-grid exclusion. Both runs agree on all 25 printed significant digits; every Table 1 entry matches to its stated rounding (10 decimal places). No rigorous quadrature bound or root completeness certificate. Both reference runs used the same moment reduction, so agreement is not independent validation of that algebra. The higher-precision Rust version is authored but not compiled in this environment. It uses real Cholesky solves, generated nodes and adjustable scan step.

Reproduce reference:
    python experiments/reference/independent_check.py 80 160
    python experiments/reference/independent_check.py 100 192
Reference data: experiments/results/n18-precision.csv. Primary production command:
    cargo run --release --manifest-path experiments/Cargo.toml --bin precision -- 11 18 384 192 100

Remaining: compile and test Rust; independently compare a selection of entries without moment reduction; use source grid .01 and a refined grid; reproduce Table 2 N=14,16,18 sixth-root errors and condition numbers. The 85 bisections bound bracket width, not errors in function evaluation; observed digits not certified. 

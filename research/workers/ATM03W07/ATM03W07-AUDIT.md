# ATM03W07: symbolic check of the twelfth-order rate algebra

## Scope and reproduction

I independently checked the derivative and constant algebra stated in `research/positivity/ATM03-twelfth-order-rate-enclosure.md`. The checker uses only Python's standard library and exact sparse polynomials / `Fraction` arithmetic:

```sh
python experiments/atm03w07-symbolic-rate-audit.py
```

## Exact symbolic method

For (D(t)=(r+t)^2+x), write

\[
D(t)^{-1}=\sum_{n\ge0} P_n(r,x)t^n/(r^2+x)^{n+1},
\]

where (P_0=1), (P_1=-2r), and (P_n=-2rP_{n-1}-(r^2+x)P_{n-2}). Then compare (9!P_9) with the claimed numerator for (f=(r^2+x)^{-1}). For (f_d=r^2/(r^2+x)^2), use the Cauchy product and the Taylor numerator ((r+t)^2). For (f_a=x/[r(r^2+x)]=1/r-r/(r^2+x)), use the same reciprocal series and differentiate (1/r) separately.

This gives exact polynomial identity checks, rather than evaluation at finitely many rational sample points.

## Results

- The displayed (f^{(9)}), (f_d^{(9)}), and (f_a^{(9)}) numerator polynomials match exactly.
- With (B_{10}=5/66), the added coefficient (B_{10}(2^9-1)/10!) reduces exactly to (511/47900160).
- Using (|B_{12}|=691/2730), the integrated twelfth-order constants reduce exactly to (2831718/2730) for the (F,D) rate terms and (36812334/2730) for the doubled α term.

This checks the displayed algebra only. It does not independently prove the pointwise derivative bounds, Euler–Maclaurin remainder application, exponential-tail term, physical-form normalization, or the full interval matrix generation.

# RMT02 — Higher-order matrix tail and sixth-order rate arithmetic

2026-11-25. AI-assisted candidate deduction and implementation, no RH assumption or independent review. Uses RMT01 and DSC03. Classical Taylor and matrix Cauchy inequalities, no priority claim.

## Matrix residual implementation

Use all actual low-minus-high rational trial coefficients in each parity, including the full boundary and every active prime shift. Compute d_j, S0, S2, V and the fourth-order remainder C4_i exactly as RMT01, with outward arithmetic. For n>M the factors 2,4,8,8 in weighted Cauchy give the leading, second and third rank-one penalties and fourth-order directional allowance. The latter uses a_i=C4_i upper plus one lattice unit, and |sum_i E_ni v_i|²<=q sum_i a_i²|v_i|²/n^8. The three rank-one matrices must ALL be retained, not just the small fourth-order scalar diagnostic. The first two factors remain unchanged from ECR03; the third is 4 C_L²/[5(M-1)^5 g_(M+1)], and the directional fourth bound is 4q a_i²/[7(M-1)^7 g_(M+1)]. Symmetric entry radius row sums and exact rational LDL follow DSC01. The first actual program is experiments/rmt03-rational-moment-tail.js; results in RMT03.

## Sixth-order rate tail

The first execution showed that after retaining the third signed moment, the row arithmetic width again dominates the even directions at h>=1.5. Improve DSC03's midpoint formula by two derivative orders.

For the length-two cells with midpoint r_j and starting point R=r_J-1, Taylor expansion through degree five, integrating the even powers, gives
    |(1/2) int_cell f - f(r_j) - f''(r_j)/6 - f''''(r_j)/120|
        <= (1/1440) int_cell |f^(6)|.
The integrated sixth derivative kernel has upper bound 1/(2*6!). Apply DSC03's fourth-order formula to f'' and FBC02's second-order formula to f''''. Assuming the required derivatives vanish at infinity and the sums/integrals converge, substitution gives
    sum_(j>=J) f(r_j) = (1/2)int_R^infty f
                         + f'(R)/12 - 7 f'''(R)/720 + error,
    |error| <= (19/1440) int_R^infty |f^(6)|.
Indeed the f''' coefficient is -1/72+1/240=-7/720, and the absolute error coefficient is 1/1440+1/96+1/480=19/1440.

For x=t²>=0 and d=R²+x use the reciprocal product derivative estimates of DSC03. For f=1/(r²+x) and f_d=r²/(r²+x)² the sixth derivative is bounded by 7!/r^8. The absolute nonexponential tail error is <=19/(2 R^7) for each, with third derivatives
    f'''(R)=24R(x-R²)/d^4,
    f_d'''(R)=24R(-R^4+5R²x-2x²)/d^5.
Keep the same exponentially weighted geometric tail as FBC02. For f_a=x/[r(r²+x)], the sixth derivative is bounded by x*8!/(2r^9), so after the alpha factor two the absolute error is <=133x/(2R^8). Use
    f_a'''(R)=6(R^4-6R²x+x²)/d^4 - 6/R^4.
This follows by writing f_a=1/r-r/(r²+x). The extra correction to the alpha tail is -7 f_a'''(R)/360, on top of the DSC03 integral and first derivative term. At x=0 the alpha tail is exactly zero.

For gamma use the classical harmonic expansion with next positive remainder:
    gamma = H_N-log N-1/(2N)+1/(12N²)-1/(120N^4)+epsilon,
    0<=epsilon<=1/(252N^6).
Source actually retrieved as a search excerpt: D. E. Knuth, *The Art of Computer Programming*, Vol. 1, sec. 1.2.7, p. 75, eq. (3), https://lib.ysu.am/disciplines_bk/4732e1290b8206aff08cacb0f27aa8c7.pdf. No full PDF inspected and no novelty claim. Use N=4096 and 10^30 outward lattice. Extend logarithm and Machin atan to 40 terms, reduced atan to 48, exp to 30 terms; the next-term/geometric remainder formulas use the updated indices. Square-root endpoints obtained by integer square root and checked by squaring.

The derivative corrections are classical scalar rate enclosures, not a claim of norm convergence of the boundary-rate sum. The second actual program experiments/rmt03-sixth-order-rate.js incorporates these bounds; exact results and limitations in RMT03. RMT02 complete as candidate.

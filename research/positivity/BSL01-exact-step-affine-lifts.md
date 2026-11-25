# BSL01 — Exact step and affine model actions; uniform block tails

2026-11-25. AI-assisted candidate deduction without RH, building on BFA03's exact split and CPC04. Singularity subtraction and spline representations are classical. No originality claim, new numerical result or independent review.

Let I=(-a,a), d0=2a, circle length 2L with L>d0. As in BFA03, write k(s)=1/(2s)+j(s), and split the exact sharply cut arithmetic symbol into constant C, singular multiplier M(t)=int_0^d0 (1-cos(ts))/s ds, regular residual r(t)=-2 int_0^d0 j(s)cos(ts)ds, exact finite prime shift operator P and optional pole H. Write J_r=2(|j(d0)|+int_0^d0 |j'|), so |r(t)|<=J_r/|t|. The lift is
    B_N^lift v=Cv+Q M(D)v-Pv+H_Bv+Q r(D)R_N v.
This is not the compression of a truncated full symbol: only the regular residual is truncated.

## 1. Explicit model action for every supported piecewise affine seed

Let v be piecewise affine on the line, zero outside I. At each breakpoint y_j (including both physical endpoints), let J_j be the value jump and K_j the slope jump, using the zero exterior values/slopes. Then, away from the knots,
    v(x)=sum_j [J_j 1_(x>y_j)+K_j (x-y_j)_+].
Indeed the right-hand side has the specified jumps and slopes, is zero to the left, and agrees interval by interval. Compact support implies the rightmost affine function also vanishes. The formula is valid for complex coefficients. Every such v is BV with compact support and belongs to H^s for s<1/2.

The singular model is the physical integral
    Q M(D)v(x)=int_0^d0 [2v(x)-v(x+s)-v(x-s)]/(2s) ds,
where the values are of the zero-extended line function, and x is inside I. No wraparound occurs for the nonzero evaluations since L>d0. The integral is finite at every point away from knots. It represents the L² multiplier action by the truncated integrals as the lower limit tends to zero: for each Fourier frequency the truncated multiplier increases to M(t), and the bound by M(t)=O(1+log(2+|t|)) gives L² convergence on supported H^s. The finite sum representation below also gives an L² majorant near the finitely many knots.

For a step at y with z=x-y and 0<|z|<d0, the integrand numerator vanishes for s<|z| and equals sign(z) for s>|z|. Thus its action is
    S(z)=0.5 sign(z) log(d0/|z|).
For a hinge (x-y)_+ the numerator vanishes for s<|z| and equals |z|-s otherwise. Its action is
    D(z)=0.5 [|z| log(d0/|z|)-d0+|z|].
Both functions vanish for |z|>=d0. D extends continuously to z=0 with value -d0/2; S has a logarithmic singularity at zero and its value at that point is immaterial. Applying the finite linear decomposition pointwise on the line before compression yields
    Q M(D)v(x)=sum_j [J_j S(x-y_j)+K_j D(x-y_j)], x in I.
The step and hinge functions individually are not supported L² vectors; the formula uses their elementary finite-range differences, not an unjustified spectral-domain assertion for those functions. For a piecewise constant seed all K_j=0.

The prime shift terms are exact shifted piecewise affine functions, clipped to I. Their breakpoints occur among y_j±log n lying in I, including shifted physical endpoints. The pole action is given by the two physical integrals against cosh(x/2), sinh(x/2), which are elementary on affine cells. Hence no singular model, prime discontinuity or rank-two pole term is approximated by a full-circle diagonal square.

## 2. A block tail bound in terms of knot matrices

Let V:C^m->L²(I) have a finite family of piecewise affine columns and choose a union of all q distinct knots. Let matrices U and W of size q by m map a coefficient vector h to its value and slope jumps respectively, with zero entries where a column has no jump. The normalized Fourier coefficient of Vh is, for nonzero t_n,
    c_n = [sum_j (K_j-i t_n J_j)exp(i t_n y_j)]/((-it_n)^2 sqrt(2L)).
This is the distributional second derivative formula; taking absolute values gives
    |c_n| <= (||Uh||_1/|t_n|+||Wh||_1/t_n²)/sqrt(2L).
Minkowski in the two-sided Fourier sequence, then restriction by Q, yields the explicit uniform operator bound
    ||B V-B_N^lift V|| <= J_r [
      L^(3/2) sqrt(q)||U||/(sqrt(3) pi² N^(3/2))
      + L^(5/2) sqrt(q)||W||/(sqrt(5) pi³ N^(5/2)) ].
Here we used sum_(n>N)n^-4<=1/(3N³), sum n^-6<=1/(5N^5), and ||Uh||_1<=sqrt(q)||U||||h||. In particular a continuous piecewise affine seed (all value jumps zero, including endpoints) has a lifted action norm error O(N^-5/2). No rate uniform in refinement of the seed mesh is claimed, because the knot matrix norms grow.

There is a sharper alternative to the sqrt(q) factor when knot separations are known. For p=4 or 6 the two-sided positive Fourier Gram has entries
    G_p(i,j)=sum_(n>N) cos(pi n(y_i-y_j)/L)/n^p.
Its diagonal is <=1/((p-1)N^(p-1)); by the geometric sum and Abel summation the absolute off-diagonal entry is <=1/(|sin(pi(y_i-y_j)/(2L))|(N+1)^p). All distinct knots differ by less than 2L, so no denominator is zero. Taking the maximum absolute row sum gives a certified operator norm bound C_p. Applying it to the two signed Fourier tails after |r(t_n)|<=J_r/|t_n| gives the sharper estimate
    ||B V-B_N^lift V|| <= J_r [
         L^(3/2)/pi² sqrt(C_4)||U||
        +L^(5/2)/pi³ sqrt(C_6)||W|| ].
For a fixed finite knot set its leading diagonal contribution recovers the individual tail powers with no sqrt(q) prefactor. Near-coincident knots can make the off-diagonal bound large; one may take the minimum of this estimate and the earlier one. This is a uniform block action estimate, not a claim of uniform eigenvalue positivity.

BSL01 complete as candidate. BSL02 will propagate these action enclosures into first and second moment matrices and certified residuals, keeping the independent complement machinery separate.

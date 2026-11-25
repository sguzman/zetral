# D01 — A zero-density refinement of the theta-cardinal cutoff bound

2026-11-25. Human-readable candidate derivation; not independently reviewed, not machine-checked, and not claimed novel. Extends the v0.2 theta-cardinal bound under the same RH and Suzuki sampling/compression imports. The classical counting estimate used below is established prior art.

## Statement

For every fixed index n of distinct positive ordinates, as X=exp(2a) tends to infinity,

    0 <= t_(a,n)-gamma_n = O_n(X^(3/2) log X exp(-2 pi X)).

More precisely, if m_* is the minimum exact multiplicity among the first n distinct positive ordinates, the upper bound is

    O_n(X^(7/2-2m_*) log X exp(-2 pi X)).

This improves the v0.2 upper-bound order by log(X)/X in the general case, and does not assume simple zeros. It is an estimate for the exact phase-pi differentiation spectrum, not for the ordinary L2 Weil-form minimum or the finite Fourier characteristic roots. The estimate does not claim a matching lower bound.

## Proof

Use the notation and constructions of research/theta-cardinal-bound.md, sections 1–4, and the original unsimplified multiplicity-sensitive theta tail bounds. In particular y=exp(2|x|), and for a fixed ordinate gamma of multiplicity m,

    |q_gamma(x)| <= C_gamma y^(9/4-m) exp(-pi y),
    |q'_gamma(x)| <= C'_gamma y^(13/4-m) exp(-pi y).

For X=exp(2a), a>=1, let chi_a be the smooth cutoff with inner edge a-X^(-1), outer edge a-(2X)^(-1), and |chi'_a|=O(X). As before Y=X exp(-2/X) >= X-2 >= X/2 and Y>=1. Let r=(1-chi_a)q_gamma. The derivative estimate of R05 yields

    ||r'||_1 <= C_1(gamma) X^(9/4-m) exp(-pi X).

The additional direct L1 estimate, using the same tail lemma on both half-lines and dx=dy/(2y), is

    ||r||_1 <= C_0(gamma) X^(5/4-m) exp(-pi X).

Here the integral starts at Y and Y^(5/4-m) is comparable to X^(5/4-m) even for negative powers. The exponential comparison costs a fixed factor e^(2pi). Both constants depend on the fixed ordinate and its multiplicity, but not X.

For every nonzero real sample rho, Fourier integration by parts and the direct L1 estimate together give

    |F[r](rho)| <= min(||r||_1, ||r'||_1/|rho|).

Instead of summing the reciprocal-frequency estimate over all samples, split at |rho|=X. Let

    N_*(T)=sum_(0<|rho|<=T) m_rho.

Under RH this is twice the usual positive-height zero counting function with multiplicities. The classical Riemann–von Mangoldt formula implies N_*(T)<=C T log T for T>=2, with fixed C. See NIST DLMF section 25.10 (https://dlmf.nist.gov/25.10), Titchmarsh, The Theory of the Riemann Zeta-function (2nd ed.), Chapter 9; and the multiplicity-counting formula discussed in https://sas.rochester.edu/mth/people/faculty/gonek-steve/assets/pdf/simplezeros.pdf. Search excerpts checked on 2026-11-25; the full texts of the last two references were not inspected during this batch. We need only the standard big-O consequence, not numerical values of its constant.

For X>=2, dyadically decompose the tail into (2^k X,2^(k+1) X], k>=0. On each interval

    sum_(2^k X<|rho|<=2^(k+1) X) m_rho/rho^2
      <= C 2^(1-k) log(2^(k+1) X)/X.

The series of 2^(-k) and (k+1)2^(-k) converge. Explicitly their sums are 2 and 4, so the total is <= (4 C log X + 8 C log 2)/X <= 12 C log X/X for X>=2. This counts all multiplicities and both signs.

The full weighted error is therefore

    sum_rho m_rho |F[r](rho)|^2
      <= ||r||_1^2 N_*(X) + ||r'||_1^2 sum_(|rho|>X) m_rho/rho^2
      <= C(C_0(gamma)^2 + 12 C_1(gamma)^2)
            X^(7/2-2m) log X exp(-2 pi X).

Check the powers: (5/4-m)*2+1=7/2-2m for low frequencies; (9/4-m)*2-1=7/2-2m for high frequencies. For m=1 the exponent is 3/2.

The sampled vector of chi_a q_gamma lies in the local subspace M_a. Its difference from the unit weighted coordinate e_gamma is exactly the sampled omitted tail. Projection minimizes distance, and the finite leading-subspace squared defect is at most the sum of these coordinate squared defects. Since X>=1 and n is fixed, their sum is O_n(X^(7/2-2m_*) log X exp(-2 pi X)). The R04 quadratic Ritz bound and positive half-lambda threshold apply as this expression tends to zero. Reciprocating gives the claimed bound under the same hypotheses as v0.2.

## Interpretation and limits

The earlier proof paid for every sample using ||r'||_1/|rho| even when the much smaller ||r||_1 estimate is available. The natural crossover is frequency of order X, the inverse time width of the theta tail. Counting low samples and bounding the high-frequency tail yields the extra factor log(X)/X without changing the kernel or the spectral operator.

This is a strict improvement of the previous asymptotic upper-bound expression, not proof of the true error's order. No novelty search specifically for this refinement has been completed; zero counting, the two elementary Fourier inequalities and the Ritz estimate are standard. The upper bound still has fixed-index zero-dependent constants. No certified numerical error or lower estimate follows. The v0.2 manuscript is preserved until the campaign consolidation.

Next D02: identify the converse estimate in terms of the actual approximation defect, and use it to distinguish the sharpness of the trial construction from that of the spectrum.

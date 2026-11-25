# DSC03 — Derivative-corrected midpoint rate tails

2026-11-25. AI-assisted candidate deduction, without RH. Motivated by DSC02's dominant arithmetic error. Classical quadrature correction; no originality or independent-review claim.

Let r_j=2j+1/2, R=r_J-1. The tail is sampled at midpoints of consecutive length-two intervals. For f with four continuous derivatives, f and its relevant derivatives vanishing at infinity and integrable f,f'',f'''', Taylor's formula through degree three on each interval gives
    |(1/2)int_cell f - f(mid) - f''(mid)/6|
        <= (1/48)int_cell |f''''|.
The constant follows by integrating the fourth-derivative Taylor kernel (1-|u|)^4/24 on either side of the midpoint and dividing by two. Apply the second-derivative midpoint bound of FBC02 to f'':
    |sum f''(r_j) - (1/2)int_R^infinity f''| <= (1/4)int_R^infinity |f''''|.
Since int f''=-f'(R), the corrected rate sum obeys
    |sum_(j>=J) f(r_j) -(1/2)int_R^infinity f - f'(R)/12|
          <= (1/16)int_R^infinity |f''''|.
Indeed 1/48+(1/6)(1/4)=1/16. This avoids the earlier O(R^-3) uncertainty.

For x=t²>=0 set f=(r²+x)^-1, f_d=r²/(r²+x)². Factor f=(r+it)^-1(r-it)^-1 and f_d=[((r+it)^-1+(r-it)^-1)/2]². Every m-th derivative of either individual reciprocal factor (or their average) is bounded by m!/r^(m+1). Leibniz therefore bounds |f^(m)|,|f_d^(m)| by (m+1)!/r^(m+2). In particular their corrected midpoint tails have error <=3/(2R^5). Their exact derivative corrections are
    f'(R)/12=-R/[6(R²+x)²],
    f_d'(R)/12=R(x-R²)/[6(R²+x)³].
Add the respective half-integrals from FBC02 and the same exponentially weighted tail enclosure. Both parities are covered; no full operator-norm tail is assumed.

For the alpha summand f_a=x/[r(r²+x)], the three reciprocal product gives |f_a^(m)|<=x (m+2)!/(2r^(m+3)). Including alpha's coefficient two, the corrected tail is
    (1/2)log(1+x/R²)+f_a'(R)/6 ± 15x/(2R^6),
    f_a'(R)=-x(3R²+x)/[R²(R²+x)²].
At x=0 this is exactly zero. These errors are independent of high-mode truncation and converge at fixed x. The harmonic gamma estimate of FBC02 may also use N=4096 instead of 256; its remainder is <=1/(120N^4). Increasing the fixed-point arithmetic scale is optional but useful when the quadrature error approaches rounding error. All transcendental evaluations still require actual interval enclosures.

This correction directly addresses the dominant error measured in DSC02, while preserving the exact same Schur and residual-tail inequalities. No numerical result yet.

## Executed corrected-rate test

Source experiments/dsc03-corrected-rate-directional.js commit a555c0cacce9a51627a4e13f6854c2a9aa42ed66; raw experiments/results/dsc03-corrected-rate-directional.json commit d9fd4235b1a36a40a0e00e47de8d00c5ba1aec3d. Actual V8 execution and exact remote readbacks. Reproduce: node experiments/dsc03-corrected-rate-directional.js. No separate Node or Rust run.

Same six low modes per parity and high trial T=64, evaluation M=768, rate cutoff J=256 as DSC02. The only changes are the derivative-corrected F, F_d and alpha rate tails derived above, gamma harmonic sum N=4096 and outward fixed-point scale 10^24 instead of 10^18; square root constant endpoints checked by integer squaring. The rational basis and trial are reselected from the improved interval midpoints, and all actual transformed Gram/residual terms, tail and row radius are reverified. Both prime shifts and combined norm upper 0.91 are retained where applicable.

Actual results: all six tested lengths h=21/20,11/10,23/20,6/5,5/4,13/10 pass both parity sectors. At h=13/10 the even lower rational matrix LDL pivots have lower endpoints on scale 10^24:
    12236246717018,2994892433652714189,30850646794754707532352,
    858009245023385930498435,1582326300114113593761585,1749216712214717597770219.
Odd lower endpoints:
    17343470130990023,464443353159357178914,374027462216968316415294,
    971150018419366657163398,1389005440810753381390738,1623447465739099336187382.
The positive high comparison lower weights are unchanged from ECR03. At h=13/10 the first approximately smallest even direction has upper form interval [45942091838709,46475272252015]/10^24, finite weighted residual interval [9198666362283,9198679645480]/10^24, leading tail upper 978478023572/10^24, individual directional lower 35697146620829/10^24, block row radius 2723703415322/10^24. The first block pivot is approximately 1.2236e-11 and is NOT an ordinary eigenvalue margin. At h=21/20 the first even row radius decreases from 3.64667849463e-7 (DSC02) to 3.014187258310e-12, about five orders of magnitude; the new trial/basis differs slightly. The upper form is not an eigenvalue.

By DSC01 and ECR01, strictly positive lower LDL pivots and coercive high comparison imply full strict positivity at each tested length. The longest internal candidate certificate advances from h=1 to 13/10, including primes 2 and 3. This is not a literature record or independently verified result. The smaller near-null directions beyond this length may require tighter residual and arithmetic controls. No negative actual spectrum or RH proof.

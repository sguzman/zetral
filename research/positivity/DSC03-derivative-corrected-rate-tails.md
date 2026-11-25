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

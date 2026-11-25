# P7W03 — Further signed residual moments and eighth-order rate enclosure

2026-11-25. AI-assisted candidate deduction, not independent mathematical or formal review. Uses RMT01–02 and P7W02. No new numerical certificate in this note. Classical geometric and Taylor expansions; no priority claim.

## Sixth-order directional residual

In RMT01 notation, define S_(2r)=sum_j a_j j^(2r), D_(2r)=sum_j a_j d_j j^(2r), where a_j=nu_j c_j, and let V_H and delta=h²/(4pi²) be the pole row and its denominator constant. For n>M>K, expand the common rational denominator through the quadratic term for the leading L_n and through the linear term for d_j. The exact residual becomes
    F_n=L_n S0+V2/n²+L_n S2/n²+V4/n⁴+L_n S4/n⁴+E_n,
    V2=V_H-D0,   V4=-delta V_H-D2,
    E_n=(L_n/n⁶) sum_j a_j j⁶/(1-j²/n²)
        -(1/n⁶) sum_j a_j d_j j⁴/(1-j²/n²)
        +delta² V_H/[n⁶(1+delta/n²)].
The pole expansion uses 1/(1+x)=1-x+x²/(1+x). Thus the fourth-order signed row combines boundary, prime and pole terms, while the fifth-order leading-frequency row S4 is again shared by every active shift.

For m=M+1 and D=1-(K/m)^2>0, the per-direction sixth-order remainder is bounded by C6_i/n⁶, with
    C6_i=[(C_L/m) sum_j |a_ji| j⁶+sum_j |a_ji d_j| j⁴]/D
            +delta² |(V_H)_i|.
Let q be the low dimension and A_i a positive rational upper bound on C6_i. Weighted Cauchy on the six terms with factors 2,4,8,16,32,32 (reciprocal sum one), plus the same parity power-tail sum as RMT01, yields the matrix upper bound
    F_tail*G^-1 F_tail <=
        C_L²/[(M-1)g] S0*S0
      + 2/[3(M-1)^3 g] V2*V2
      + 4 C_L²/[5(M-1)^5 g] S2*S2
      + 8/[7(M-1)^7 g] V4*V4
      + 16 C_L²/[9(M-1)^9 g] S4*S4
      + 16q/[11(M-1)^11 g] diag(A_i²),
where g=g_(M+1). All five signed rank-one matrices must be retained. The scalar/directional remainder now decreases as M^-11 at fixed trial support. This directly targets the fourth block allowance larger than the even upper energy in P7W02. No uniform rate with growing K is asserted.

## Eighth-order scalar rate sum

Use the length-two midpoint cells of RMT02. Taylor through degree seven yields
    |(1/2)int_cell f - f(mid) - f''(mid)/6
          - f''''(mid)/120 - f^(6)(mid)/5040|
        <= (1/80640)int_cell |f^(8)|.
Apply RMT02's sixth-order rule to f'', DSC03's fourth-order rule to f'''', and FBC02's second-order rule to f^(6), with the required derivative integrability and vanishing conditions. Substitution gives
    sum_(j>=J) f(r_j)=(1/2)int_R^infinity f
                 + f'(R)/12 -7 f'''(R)/720 +31 f^(5)(R)/30240 +error,
    |error| <= (1/320) int_R^infinity |f^(8)|.
The new coefficient is 7/4320-1/1440+1/10080=31/30240. The error coefficient before relaxing is 1/80640+19/8640+1/1920+1/20160 < 1/320.

For x=t², u=R², d=u+x, the reciprocal product bounds of DSC03 give |f^(8)|,|f_d^(8)|<=9!/r^10, so each nonexponential rate sum has error <=126/R^9. The fifth derivative corrections are
    f^(5)(R)=-240 R(3u²-10ux+3x²)/d^6,
    f_d^(5)(R)=-240 R(3u³-35u²x+49ux²-9x³)/d^7.
The second identity also follows by differentiating f+x partial_x f. Keep the exact same exponential geometric error of FBC02. For f_a=x/[r(r²+x)], |f_a^(8)|<=x*10!/(2r^11). Including alpha's factor two gives error <=1134 x/R^10, and
    f_a^(5)(R)=120(u³-15u²x+15ux²-x³)/d^6 -120/R^6.
Add 31 f_a^(5)(R)/15120 to the previous alpha tail expression. This is exactly zero for x=0.

For Euler gamma, from DLMF 5.11.2 and 5.11(ii) (HTML lines 220–239 actually retrieved, https://dlmf.nist.gov/5.11#ii), the positive-real digamma remainder has the sign and magnitude bound of the first omitted term. Using H_N=psi(N)+gamma+1/N therefore gives
    gamma=H_N-log N-1/(2N)+1/(12N²)-1/(120N⁴)
          +1/(252N⁶)-1/(240N⁸)+epsilon,
    0<=epsilon<=1/(132N^10).
This is a classical expansion, not a new gamma estimate. With N=4096 it removes the previous O(N^-6) analytic width. The eighth-order rate sum reduces the scalar rate uncertainty without increasing J; retain sufficiently fine fixed-point arithmetic and verify all elementary series remainders.

The next execution should combine these two derived refinements at h=9/5 first, using the already checked four-shift bound, then attempt h=37/20 and h=39/20 only if the diagnostics justify it. No claim that these refinements suffice, no new positivity result or actual negative eigenvalue. P7W03 derivation committed; implementation and numerical test pending.

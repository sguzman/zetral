# RMT01 — Common rational denominator and third signed residual moment

2026-11-25. AI-assisted candidate deduction without RH. Uses ECR03, DSC03 and PGF02. Elementary geometric expansion, no independent review or originality claim.

Fix one parity and finite low-minus-high trial coefficient rows c_j over the transformed low coordinate space, supported on j<=K. Set a_j=nu_j c_j, nu_0=1, nu_j=sqrt2 otherwise. For n>M>K use x_n=(pi n/h)^2, F_eta(x) as in FBC01, and for the finite set of actual active shifts s_i let p_i=2 b_i sqrt2/pi, theta_(i,j)=pi j s_i/h. Define
    L_n=(2 sqrt2/h) F_eta(x_n)+sum_i p_i sin(theta_(i,n))/n,
    d_j=(2 sqrt2/h) j² F_eta(x_j)+sum_i p_i j sin(theta_(i,j)).
These are exact scalar real functions/constants. The boundary K and negative prime -P entries in the residual have the COMMON rational expression
    sum_j c_j (K_nj-P_nj)
      = sum_j a_j [L_n-d_j/n²]/(1-j²/n²).
Indeed the boundary divided difference uses x_j/x_n=j²/n², while the prime Wronskian formula uses the identical denominator n²-j². This identity applies to every actual shift; no special phase cancellation or disjoint strip assumption is needed for the entry formula. The high diagonal comparison still requires a valid combined prime norm.

Let
    S0=sum_j a_j, S2=sum_j j² a_j, D0=sum_j d_j a_j.
For the pole, set q_h=sinh(h/4) in even parity and -cosh(h/4) in odd, eta=(-1)^n, delta=h²/(4pi²), and
    V_H=(2 eta/h) sqrt2 q_h h²/pi² sum_j c_j pole(j),
where pole(j) is the scaled physical overlap of ECR03. Then the exact pole contribution is V_H/[n²(1+delta/n²)]. Define V=V_H-D0. The exact residual row is
    F_n=L_n S0+V/n²+L_n S2/n²+E_n.
Using 1/(1-r)=1+r+r²/(1-r), r=j²/n², gives the explicit remainder
    E_n=(L_n/n⁴) sum_j a_j j⁴/(1-j²/n²)
        -(1/n⁴) sum_j a_j d_j j²/(1-j²/n²)
        -delta V_H/[n⁴(1+delta/n²)].
In particular the new third-order row S2 is shared by ALL boundary and prime terms, and multiplies the SAME leading frequency function L_n divided by n². It is not a collection of independent absolute-value tails.

As in ECR03, |L_n|<=C_L/n with C_L=sqrt2/2+sum_i p_i+[2 sqrt2 h/pi²](1+E_h)/(M+1), E_h=exp(-h/2)/(1-exp(-2h)). Let m=M+1, D=1-(K/m)^2>0. For transformed low direction k,
    |E_(n,k)|<= C4_k/n⁴,
    C4_k = [ (C_L/m) sum_j |a_jk| j⁴
              + sum_j |a_jk d_j| j² ]/D + delta |(V_H)_k|.
All constants can be computed by the same FBC02/DSC03 outward arithmetic. The signed sums are taken before absolute values for S0,S2,V. This is a fourth-order residual remainder, not an operator-norm truncation claim.

An immediate matrix bound follows by weighted Cauchy with four terms and factors 2,4,8,8 (reciprocal sum one), and the parity sum bound from LPE02. For q low directions, let A_k>=C4_k be strictly positive rational upper bounds. Then
    F_tail* G^-1 F_tail <=
       [C_L²/((M-1)g_(M+1))] S0* S0
       + [2/(3(M-1)^3 g_(M+1))] V* V
       + [4 C_L²/(5(M-1)^5 g_(M+1))] S2* S2
       + [4q/(7(M-1)^7 g_(M+1))] diag(A_k²).
The first two terms are the same factors as ECR03; the third is now rank one rather than a trace loss, and the diagonal remainder decays as the seventh power of the cutoff at fixed trial support. The factor q comes from |sum E_k v_k|²<=q sum A_k² |v_k|²/n^8. No assumption that any row vanishes. More general allocations follow as in DSC01.

The new exact formula is a special case of an arbitrary finite expansion of 1/(1-j²/n²): at successive orders retain signed rows sum a_j j^(2l) and sum a_j d_j j^(2l), plus the pole geometric expansion. For fixed K<M each additional order has explicit remainder. Large K and interval cancellation may limit practical gains; no claim of uniform convergence as window/support grow. RMT02 will implement and verify the displayed third-row comparison, and RMT03 test h=1.5 and larger where justified. No new numerical result or RH proof in RMT01.

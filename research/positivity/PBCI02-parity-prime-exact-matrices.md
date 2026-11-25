# PBCI02 — One-cell parity arithmetic and an explicit prime-inclusive tail

2026-11-25. AI-assisted candidate deduction without RH. Uses PBCI01 and MBL02. No numerical run, priority claim or independent verification.

Use a single physical cell [0,h] with h>0, reflection about h/2, and e_n(x)=k_n cos(omega_n x), omega_n=n pi/h, k_0=h^-1/2, k_n=sqrt(2/h) for n>0. Parity eta_n=(-1)^n. All operators preserve the two parity sectors. In the first prime-inclusive regime log 2<h<=log 3 the only nonzero prime-power shift is s=log 2, weight b=log 2/sqrt 2. Since 2s>h, the left and right overlap strips are disjoint. On them the two shifts form a two-by-two exchange, with zero on the middle strip, so ||P||=b (not 2b). At h=log 2 the shift is zero a.e.

## Exact prime entries

For n,k of opposite parity the entry is zero. For equal parity,
    P_nk=2 b k_n k_k I_nk,
    I_nk=int_0^(h-s) cos(omega_n x) cos(omega_k(x+s)) dx.
Reflection maps the negative shift to the positive one with factor eta_n eta_k. For n!=k, the Wronskian identity gives
    I_nk=[omega_k sin(omega_k s)-omega_n sin(omega_n s)]/
          (omega_n²-omega_k²).
Indeed the derivative of f'g-fg', f=cos(omega_k(x+s)), g=cos(omega_n x), is (omega_n²-omega_k²)fg. At x=h-s, f'=0 and f=eta_k; use sin(omega_n(h-s))=-eta_n sin(omega_n s). The same-parity factor makes the result symmetric under n,k exchange. For n=k>0 product-to-sum yields
    I_nn=(h-s) cos(omega_n s)/2-sin(omega_n s)/(2 omega_n).
For n=k=0, I_00=h-s. Thus all low/high prime entries require only elementary real functions and exact physical intersections; there is no sampled continuous-symbol approximation.

For a low cutoff k<=K and high n>M>=K, the off-diagonal formula implies
    |P_nk| <= 2 b k_n k_k/(omega_n-omega_k).
If M>=2K (with M>=1), this gives |P_nk|<=4 b k_n k_k/omega_n<=8b/(pi n). The actual normalizations give a sharper constant for k=0. Therefore the weighted squared tail of the prime column after M is at most
    (8b/pi)^2/[M g_(M+1)]
if g_n are positive increasing lower weights on the omitted high modes. Summing across the finite low columns bounds the block tail norm squared. Retaining parity improves this conservative all-integer sum but is not required.

## Rank-one rate columns without square-root arithmetic

For parity eta, use real columns v_r(n)=k_n r/(r²+omega_n²) and positive coefficients d_r=2(1-eta exp(-rh)), so K_r=d_r v_r v_r*. This is exactly MBL02. Select a subset of rates and optionally the positive even pole column, writing the complementary retained positive term as V D_c V* with diagonal strictly positive coefficients D_c. This avoids square-root evaluations: equation (1) of PBCI01 becomes
    R*(G+V D_c V*)^-1 R
       <= (R-VY)*G^-1(R-VY)+Y*D_c^-1 Y.
The proof is the substitution U=V D_c^1/2, Y_old=D_c^-1/2 Y. The finite projected minimizer solves
    (D_c^-1+V_M*G_M^-1V_M)Y=V_M*G_M^-1R_M,
a positive definite system. Any rational approximate solution suffices for the upper bound; certify only the final finite Gram and tail.

The entire retained boundary cross column has the form sum_r d_r v_r(n)v_r(k) for n high. In the residual R-VY its coefficient for a selected rate becomes d_r v_r(k)-Y_(r,k). If the rate is not selected the coefficient remains d_r v_r(k). Thus the high tail for this combined residual can be bounded by its combined coefficient majorant
    C_k = sum_r |d_r v_r(k)-Y_(r,k)| sqrt(2/h) r h²/pi²
          + (pole contribution constant).
Here Y is padded by zeros for omitted rates. The boundary and pole part is <= C_k/n². The pole term is exact by MBL02's f''=f/4 overlap formula and obeys n^-2 decay. For the even sector the pole can be selected as a positive rank-one correction in exactly the same manner; the odd pole is negative and cannot be selected. Its high part may instead be bounded by 2||E s_hyp||² I using its projected norm, not its full norm if the latter is too conservative.

For a prime-inclusive window choose the diagonal high weights
    g_n = w_n-z-b-2||E s_hyp||²
in odd parity, and omit the last term in even parity, with w_n as in MBL02 for n>=1. At prime-free lengths replace b by zero. The odd high projected norm can be bounded explicitly by summing the squared n^-2 coefficients beyond the low cutoff. If min g_n<=0, this comparison fails and no inverse certificate is obtained. For positive increasing g_n, the total weighted squared tail per low column is bounded by
    (C_k/sqrt(3 M³ g_(M+1)) + (8b/pi)/sqrt(M g_(M+1)))²
by Minkowski. This retains any cancellation in the selected rate coefficients before taking absolute values. Sum over columns to bound the residual tail Gram by a scalar identity. In the prime-free case the slower n^-1 tail is absent. For larger windows there are multiple shifts and the exact strip-exchange norm no longer applies; use the general triangle norm and explicit per-shift overlaps unless a sharper bound has been proved.

## Finite certification protocol

At fixed J, low block and rational Y, form the exact low block A using all retained rates, actual prime overlaps and pole entries. Bound below
    A - Y*D_c^-1Y - (R_M-V_MY)*G_M^-1(R_M-V_MY)
      - (sum of column tail bounds) I.
Outward-rounded entry intervals can be converted to an operator-norm error by maximum absolute row sum of the radius matrix; a rational positive definite test of the midpoint matrix minus that error times identity suffices. For example exact rational LDL with strictly positive pivots is sufficient and requires no floating eigenvalue claim. Positive high weights and the positive finite Schur lower matrix certify the full lower operator, hence actual restored positivity by monotone lower-form order. No conclusion follows from a failed matrix test. No numerical certification was performed in PBCI02. PBCI03 next attempt bounded lengths near h=1/2 and, if justified, beyond log 2. The finite inverse and tail costs may still be prohibitive; this note does not claim a prime-inclusive certificate.

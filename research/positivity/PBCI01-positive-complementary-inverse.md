# PBCI01 — Retaining positive boundary corrections in the complementary inverse

2026-11-25. AI-assisted candidate derivation for Campaign XLVII. This records an exact Schur/Woodbury reduction and its scope; no numerical certificate, novelty claim, RH proof, actual off-line zero, or independent human/formal verification is claimed.

## 1. Lower model and block split

Fix a physical interval and a finite partition. For a finite rate cutoff (J), DNB02 gives the lower form
\[
 B_J=D+K_J-P+H,
\]
where (D) is the cellwise Neumann multiplier, (K_J\ge0) is the sum of the first (J) exact boundary-resolvent corrections, (P) is the actual prime-shift operator, and (H=2|c\rangle\langle c|-2|s\rangle\langle s|) is the pole term. This is a lower form for the restored operator; omitted boundary rates are positive.

Split the Neumann basis into a finite low block (L) and its infinite complement (T). Write
\[
 B_J=\begin{pmatrix}A_L&R\\R^*&D_T+V V^*\end{pmatrix},
\]
where (D_T\) is the diagonal Neumann comparison on (T), and factor the retained positive boundary block as (K_J|_T=VV^*\). The cross block (R) includes the prime, pole, and low-to-high boundary entries, with their actual signs. Assume (D_T\ge d I\) for some (d>0\), and that the displayed cross columns belong to the weighted space needed for (D_T^{-1/2}R^*\).

The high block is positive and its inverse is exactly
\[
 (D_T+VV^*)^{-1}=D_T^{-1}-D_T^{-1}V(I+V^*D_T^{-1}V)^{-1}V^*D_T^{-1}.
\]
This is the Woodbury identity in a factorized form; it needs no inverse of a potentially singular coefficient matrix. Consequently the low Schur complement is
\[
 S_L=A_L-RD_T^{-1}R^*
 + (R D_T^{-1}V)(I+V^*D_T^{-1}V)^{-1}(V^*D_T^{-1}R^*).
\]
The last term is positive semidefinite. Dropping it recovers the usual diagonal-complement sufficient test. Keeping it is an exact improvement for this finite-(J), infinite-complement lower model. If (S_L>0), then (B_J>0), and hence the actual restored form is strictly positive on this window.

## 2. One-cell parity specialization

On one cell of length (h), reflection parity diagonalizes each rate correction. In parity \\(\epsilon\\in\{+1,-1\}\\), the (j)-th rate is rank one with entries
\[
 K_{j,\epsilon}(n,k)=v_{j,\epsilon,n}v_{j,\epsilon,k},\qquad
 v_{j,\epsilon,n}=\frac{\sqrt{2(1-\epsilon e^{-r_jh})}\,k_n r_j}{r_j^2+(n\pi/h)^2},
\]
where (k_0=h^{-1/2}), (k_n=(2/h)^{1/2}) for (n>0), and (r_j=2j+1/2). Thus for (J) rates, (V_T) has at most (J) columns per parity. The Woodbury core (I+V_T^*D_T^{-1}V_T) is a positive (J\times J) matrix. This is a finite cost reduction at fixed (J), although dense arithmetic is (O(J^3)) unless further structure is used.

For the actual arithmetic operator, parity is preserved by the pole but generally not by shifted prime terms. Therefore a prime-inclusive certificate must use the coupled parity blocks (or the full basis); applying the one-cell parity formula to the prime term would be invalid. Exact prime overlaps remain the restricted physical-interval integrals in MBL02.

## 3. What remains to turn this into a certificate

The identity alone does not bound the prime and pole couplings, certify the signs of interval entries, or establish that any finite choice passes. A reproducible certificate needs: (i) a positive lower bound for the diagonal high comparison (D_T); (ii) outward-rounded enclosures for the finite low block, (R), and the Woodbury core; (iii) a rigorously weighted tail for the infinitely many high-mode rows of each prime/pole/boundary coupling; and (iv) a certified strict lower eigenvalue bound for the resulting finite (S_L). The high-mode boundary vectors decay like (n^{-2}) at fixed rate, so their (D_T^{-1})-weighted Gram entries are summable; their tail can be bounded directly by integral comparison. Prime-shift rows need their own endpoint-aware oscillatory integral tail bound and are not covered by this boundary estimate.

The complement correction is monotone: increasing the retained positive boundary subspace decreases the inverse and increases (S_L). This gives a principled sequence of stronger sufficient tests. It does not imply that a finite (J) passes, and the constants are not uniform as (J	o\infty). The next bounded step is to implement exact parity Woodbury blocks for the prime-free case, then add the first shifted-prime block with explicit tail bounds before attempting a prime-inclusive claim.

## 4. Validation scope

The derivation is conditional only on the lower-form identity and the stated domain/weighted-summability assumptions. It is an algebraic Schur-complement argument, not a new theorem about the location of zeta zeros. No arithmetic computation was performed for this note.

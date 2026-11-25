# PTI01 — Exact finite-chain inverse of each prime-power tower

2026-11-25. Internal candidate algebraic deduction, no RH assumption. The full-line inverse was explicitly suggested in the unreviewed teal-sea note, https://zeta.teal-sea.com/read/hunts/weil_propagation/theory/RESULTS.html line 248. This derives the exact interval boundary correction and pole-exponential transport; no originality claim or independent review.

Fix p prime, s=log p, r=p^-1/2=exp(-s/2), L=2a and I=(-a,a). The finite-window tower is
    K_p=I+sum_(k>=1) r^k(T_(ks)+T_(-ks)).
Terms with ks>=L vanish a.e. and are omitted. The actual prime perturbation is exactly P_a=sum_(p<exp L) log p (K_p-I), with no missing multiplicity or factor two. If s>=L, K_p=I.

Represent x=-a+t+js with 0<=t<s and integers j>=0 satisfying x<a; ignore t>=L and measure-zero endpoints. Put m(t)=ceil((L-t)/s) for 0<=t<min(s,L). Fubini gives the unitary direct integral of C^m(t) with Lebesgue dt. T_s becomes the unilateral finite-chain shift and K_p becomes the matrix (r^|i-j|)_(0<=i,j<m). This is exact, not a prime-density replacement.

For m>=2 define B_m with diagonal 1 at both endpoints, 1+r² in the interior, and adjacent off-diagonal -r. For m=1 define B_1=1-r². Direct multiplication gives B_m K_m=(1-r²)I: for interior rows the three geometric entries cancel off diagonal and give 1-r² on diagonal; first/last rows use the two-entry cancellation. Equivalently for m>=1,
    <B_m v,v>=(1-r²)|v_0|²+sum_(j=1)^(m-1)|v_j-r v_(j-1)|².
This proves strict positivity. For m=1 the sum is empty. Reversing the chain gives the same formula anchored at its last point.

In physical coordinates define E_L and E_R as multiplication by indicators of points whose left and right shift respectively leave I. Then
    B_p=(1+r²)I-r(T_s+T_-s)-r²(E_L+E_R),
    K_p=(1-r²) B_p^-1.                                    (1)
Overlap of E_L,E_R correctly counts the singleton fiber twice. On the full line the analogous inverse has no endpoint correction. Compression of that inverse without the correction would therefore be wrong. Each K_p is the compression of the full-line positive Fourier multiplier (1-r²)/(1-2r cos(st)+r²), so
    (1-r)/(1+r) I <= K_p <= (1+r)/(1-r) I.
This also gives a uniform positive inverse for each individual tower (not for the sum over primes). Hence the exact ordinary pole-free form can be written as the archimedean compression minus
    sum_(p<exp L) log p [(1-p^-1) B_p^-1-I].
It is a finite sum of local tridiagonal inverse operators on mutually different chain foliations, not an inverse of a common local operator.

## Exact transport of the pole exponentials

Write w_+(x)=exp(x/2), w_-(x)=exp(-x/2). In a chain, w_+(x+s)=w_+(x)/r and w_-(x+s)=r w_-(x). Thus B_p w_+ vanishes except at the right endpoint, where it equals (1-r²) w_+; B_p w_- vanishes except at the left endpoint, where it equals (1-r²) w_-. The singleton case agrees with both statements. Consequently
    K_p E_R w_+ = w_+,      K_p E_L w_- = w_-,
    K_p^-1 w_+ = E_R w_+,   K_p^-1 w_- = E_L w_- .       (2)
These identities hold in L²(I), including prime lengths exceeding the interval (then both indicators are one). They give exact boundary-supported inverse images of the rank-two pole span separately for each prime. For example
    <w_+,K_p^-1 w_+> = int_(max(-a,a-s))^a exp(x) dx
                     = exp(a)(1-exp(-min(s,L))),
    <w_-,K_p^-1 w_-> is the same by reflection,
    <w_-,K_p^-1 w_+> = min(s,L).
The cross entry is symmetric as required. This is a prime-specific relationship, not yet a joint inverse identity: the endpoint strips vary with p and the B_p need not commute on I. It does not evaluate the inverse of T_e or T_o in AJP02. PTI02 next: use (2) and the chain energy to test joint capacity inequalities; preserve any cross-prime obstruction.

No numerical run, actual zeta anomaly, RH proof, or new worker acceptance.

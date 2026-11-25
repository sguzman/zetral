# DNB01 — Mode-resolved Dirichlet–Neumann bracketing for the digamma multiplier

2026-11-25. AI-assisted candidate deduction without RH. Fresh search retrieved the abstract of *Dirichlet--Neumann bracketing for nonlocal operators*, arXiv:2609.24892, which explicitly establishes the general complete Bernstein function bracketing. No claim of novelty for that general theorem. We give a direct proof in the precise arithmetic normalization, including the cellwise form comparison and pole loss.

Write alpha(t)=Re psi(1/4+it/2)-log pi, alpha0=alpha(0). Put a_j=j+1/4, r_j=2a_j=2j+1/2. The digamma series gives exactly
    alpha(t)=alpha0+sum_(j>=0) (1/a_j) t²/(t²+r_j²).
Thus Phi(x)=alpha(sqrt x)-alpha0 is a complete Bernstein function on x>=0: each positive summand is x/(x+r_j²) and sum (1/a_j)/(1+r_j²)<infinity. We only need its explicit series, not a general functional calculus theorem.

Let a finite partition of I=(-a,a) have cells J_i of lengths h_i, and partition the whole line into those cells and its two exterior half-lines. Let L_N be the direct sum of their nonnegative Neumann Laplacians, L_D the direct sum of Dirichlet Laplacians, and L_0 the full-line Laplacian. The corresponding nonnegative derivative forms satisfy the variational order L_N<=L_0<=L_D: their derivative energies agree on the smaller domains, and the domains are respectively direct sums of H¹, global H¹, and direct sums of H¹_0. The resolvent variational identity for any r>0,
    <(L+r²)^-1 f,f>=sup_g [2 Re<f,g>-||g'||²-r²||g||²],
on the appropriate form domain, gives
    (L_N+r²)^-1 >= (L_0+r²)^-1 >= (L_D+r²)^-1.
Consequently I-r²(L+r²)^-1 has the reverse order. Summing the positive series of these bounded nonnegative forms, then using monotone convergence, gives the extended form inequalities
    alpha(sqrt(L_N)) <= alpha(sqrt(L_0)) <= alpha(sqrt(L_D)).
Apply to f extended by zero on the two exterior half-lines. The middle form is the actual archimedean compression on I. For each f in the ordinary log form domain, the Neumann comparison is finite and the Dirichlet upper bound is interpreted as +infinity if its own form diverges. No substitution of a differential operator for the compressed Fourier multiplier has been made; these are form inequalities.

On J_i=(l_i,l_i+h_i) the normalized Neumann basis is the constant h_i^-1/2 and sqrt(2/h_i) cos(n pi(x-l_i)/h_i), n>=1. Denote its coefficients by f_(i,n). The actual archimedean form satisfies
    q_alpha(f)>=sum_(i,n>=0) alpha(n pi/h_i)|f_(i,n)|².
In particular on E, the zero-cell-average complement of CAC01, all n=0 coefficients vanish. For the actual restored operator B=A and real threshold z,
    q_(B-z)(f) >= sum_(i,n>=1) [alpha(n pi/h_i)-2 S_a-z]|f_(i,n)|²
                      -2|<s,f>|²,       s=sinh(x/2).
For the pole-free operator omit the last term, and in the even sector it vanishes on a symmetric partition. Retaining the exact negative rank-one term is legitimate and potentially sharper than its norm bound. If a scalar bound suffices, alpha is strictly increasing on t>0 by its positive series, and with h=max h_i,
    q_A(f)>= [alpha(pi/h)-2 S_a - h²(sinh a+a)/(2pi²)]||f||².
This replaces CAC01's global symbol loss 3/2 by an actual large-frequency digamma value. Using its previously checked complex remainder yields the fully explicit weaker bound for pi/h>=1,
    delta_N(a,h)=log(1/(2h)) - (3 h²)/(2 pi²) -2 S_a
                           - h²(sinh a+a)/(2pi²).
It is strictly stronger than CAC01's bound for h<pi. The Neumann comparison also gives a mode-dependent diagonal weight growing as log n rather than a single scalar. A weighted Schur inverse estimate can exploit that fact, but requires actual cosine coefficients of the residual and correct treatment of the pole. This is developed separately.

At a=1/2, h=1/m, S_a=log 2/sqrt 2. The earlier coarse bound lost 1.5 irrespective of m. The new explicit error loss 1.5/(pi m)^2 tends to zero; the cell count for positive complement drops from the earlier tested 24 to a much smaller scale (exact threshold to be computed, not assumed here). Neither estimate alone certifies full positivity. No off-line zero, numerical spectrum, RH proof, or independent review.

## Executed stronger-complement diagnostic

Actual V8 run of experiments/dnb01-stronger-complement-witness.js commit e16b89d915c375f2030ee5325b0d79724787652f, raw exact output and rational witnesses experiments/results/dnb01-stronger-complement-witness.json commit 304ef2a690714d591193a64c06352033f8938160. Both exact readbacks. Reproduce: node experiments/dnb01-stronger-complement-witness.js. Uses the CAC03 exact nested-cell moment intervals and rational witness evaluations, now with d equal to the lower endpoint of delta_N. All rows use a=1/2; the coefficient -3/(2 pi² m²) follows from CAC01's already checked high-frequency digamma estimate. No separate Node process run or Rust execution claimed.

m | lower endpoint of delta_N (rounded down) | upper bound on cheap Schur quotient (rounded up)
---|---:|---:
6 | 0.112695504423294722 | -1.9443
8 | 0.402853232214692761 | -0.70064
16 | 1.098387651852125986 | -0.03727
24 | 1.504294841270936270 | -0.01536
32 | 1.792131642181443260 | -0.006175
64 | 2.485428025183731546 | -0.001103
128 | 3.178612506354262585 | -0.00006766

Thus a six-cell partition already has a strictly positive complement with this bound, compared with the previous 24-cell tested threshold. At every tested resolution, the new lower Schur matrix H-d^-1 R*R still has a negative direction, as certified by the fine contrast lower bound on R*R and exact rational witness. At m=128 its witness quotient upper endpoint is -0.000067669181678969. The smaller magnitude of this failed-test quotient is not a spectral eigenvalue estimate. A stronger scalar bound alone has not certified positivity. This motivates a genuinely mode-weighted inverse estimate or retaining positive boundary corrections. DNB01 complete as candidate.

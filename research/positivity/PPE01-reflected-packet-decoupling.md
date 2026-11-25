# PPE01 — Quantitative reflected-carrier decoupling

2026-11-25. AI-assisted candidate deduction without RH. Uses FES02's selected-packet construction and FES03's exact cutoff scalar symbol. No new numerical experiment, observed off-line zero, anomalous eigenstate, priority claim or independent proof verification. Earlier source provenance qualifications apply.

Let A>=1, h>0 fixed, and let v be a unit form-domain vector supported in (-A,A), with fourth carrier-relative moment
    int (1+h|t-omega|)^4 |Fv(t)|^2 dt/(2pi) <= M.
The real Fourier convention is Ff(t)=int f(x)exp(itx)dx. Write Rf(x)=f(-x); F(Rv)(t)=Fv(-t). By FES03 and polarization, the support-constrained sesquilinear form has the exact expression
    q_A(v,Rv)=int S_A(t) Fv(t) conj(Fv(-t)) dt/(2pi),
where S_A is real even and |S_A(t)|<=C exp(A)+C w(t), w(t)=1+log(2+|t|). The same formula with symbol 1 gives the ordinary overlap.

Assume omega>=0, exchanging v with Rv otherwise. On t>=0 the reflected transform Fv(-t) has carrier distance t+omega. By Cauchy-Schwarz,
    int_(t>=0) |Fv(t) Fv(-t)| dt/(2pi)
        <= sqrt(M) (1+h omega)^(-2).
Since w(t)^2<=C_h(1+h(t+omega))^2 for t>=0, the weighted version gives
    int_(t>=0) w(t) |Fv(t) Fv(-t)| dt/(2pi)
        <= C_h sqrt(M) (1+h omega)^(-1).
On the other half-line substitute t->-t. Consequently
    |<v,Rv>| <= 2 sqrt(M) (1+h|omega|)^(-2)=:b,
    |q_A(v,Rv)| <= C_h sqrt(M)[ exp(A)(1+h|omega|)^(-2)
                                     +(1+h|omega|)^(-1) ]=:e.    (1)
Both cross quantities are real because R is a self-adjoint involution preserving q. The estimates include the archimedean multiplier, not just the bounded prime/pole perturbation.

If q_A(v,v)<=-D, D>e and b<1, the vectors v+Rv and v-Rv are nonzero, in opposite parity sectors, and satisfy
    -q_A(v±Rv,v±Rv)/||v±Rv||^2 >= (D-e)/(1+b).              (2)
Their span is an actual two-dimensional strictly negative trial space, not a direct-sum packet count. Indeed their ordinary and form cross terms vanish by parity.

Now let B=sup_z |Im z| and S=limsup a^-1 log(1+N_1(a)), with N_1 the ordinary negative depth. If S>2B, FES02 sections 3–5 with fixed p=4 supply a sequence of windows A=a+h and smooth unit packets with q_A(v,v)<=-N_1(a)/2, uniformly bounded M, and |omega|>=exp(exp(delta a))-2 for any fixed 0<delta<S-2B eventually on that sequence. The cross errors in (1) tend to zero faster than any exp(-K a), K fixed. Equation (2), monotonicity and minmax then imply
    limsup a^-1 log(1+N_(even,1)(a))
     =limsup a^-1 log(1+N_(odd,1)(a))
     =limsup a^-1 log(1+N_2(a)) = S.                     (3)
The opposite inequality in each case follows from the ordinary bottom bound N_1. This proves parity duplication of a hypothetical anomalous bottom exponent, without asserting that S>2B occurs.

The packet proof is not by itself an indexed transfer: a selected packet from each negative eigenvector need not yield independent trials, and FES01 does not preserve the fast-pair difference constraints. PPE02 instead uses a compact-support odd multiplier to transfer an entire parity subspace with a uniform form error at the natural zero-deviation scale. README unchanged.

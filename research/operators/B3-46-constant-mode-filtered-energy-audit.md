# B3-46 — Audit of Suvlu's finite constant-mode filtered-energy estimate

Date: 2026-11-28. Status: manual verification of the finite algebra and
Gaussian estimate in the 2026-09-24 Paper IV draft; the moving arithmetic
limit remains unaudited.

## Source and precise scope

Dylan Suvlu, *Constant-mode transfer and compactness criteria for finite
Weil characteristics*, Paper IV of [*Weil form operators*](https://github.com/dsuvlu/weil-form-operators),
draft 2026-09-24. Checked equations (6), (13)–(31), (36)–(44), (47)–(56),
and Theorem 5. The question here is whether the paper's finite cutoff-uniform
heat-difference energy estimate follows under its stated hypotheses, without
a spectral-gap estimate.

The hypotheses used are: a finite symmetric Fourier section with frequencies
`xi_j=2 pi j/L`, `L>=1`; Hermitian `H` commuting with reflection; the rank-two
displacement identity `[D,H]=b delta* - delta b*` with `b` odd; and a simple
full least eigenvalue `E` with an even eigenvector `v`, endpoint-normalized
`delta* v=1`. Let `K=H-EI>=0`, `D=diag(xi_j)`, and
`D_c=D-Dv delta*`.

## Corrected derivative and transfer identity

Applying the displacement identity to `v`, and using its even parity against
odd `b`, gives

    [D,K]v = -K Dv = b,       hence b=-K Dv.

It follows directly that `D_c v=0`. Expanding the commutator gives

    [D,K] = -K Dv delta* + delta Dv* K,
    K D_c = D_c* K.

Thus `D_c` is symmetric for the shifted positive form. Put `S=K^(1/2)` and
let `S†` be the finite Moore–Penrose inverse. Since the ground line is the
whole kernel of `K`, `Ran(S)=v^perp`; also `D_c` kills the ground line.
Therefore `A=S D_c S†` on `Ran(S)` is self-adjoint in the inherited
physical inner product and `AS=SD_c`. The constant Fourier mode `e0` obeys

    D_c e0 = -Dv/sqrt(L),       A S e0 = -S Dv/sqrt(L).

For an entire function `phi`, define

    r_(phi,v)(z) = sum_j delta_j v_j
                    (phi(xi_j)-phi(z))/(z-xi_j).

The divided differences are entire at `z=xi_j`. For `phi(z)=z^n`, the
ordered telescoping identity

    D^n-D_c^n = sum_(k=0)^(n-1) D_c^k (D-D_c) D^(n-1-k)

and `D_c v=0` give

    phi(D)v = phi(0)v + sqrt(L) D_c r_(phi,v)(D_c)e0.

Power-series convergence in finite dimension extends this to every entire
`phi`; no eigenvalue simplicity of the corrected derivative is needed.
Applying `S` and the spectral theorem to `A` yields the exact positive
measure identity

    <phi(D)v,K phi(D)v>
       = L integral |lambda r_(phi,v)(lambda)|^2 d nu_0(lambda),
    nu_0(R)=||S e0||^2=H_00-E.

This proves the paper's constant-mode transfer and the bound

    <phi(D)v,K phi(D)v>
       <= L(H_00-E) sup_(lambda real)|lambda r_(phi,v)(lambda)|^2.

The dependence is on the shifted-energy mass `H_00-E`; no inverse spectral gap
or comparison between the physical and shifted norms appears.

## Sine-tail and heat-filter bound

For `phi_s(z)=exp(-(s+1)z^2)-exp(-(s+2)z^2)`, write
`U=F^(-1)(phi_s C)` with inverse Fourier factor `1/(2 pi)` and let
`tau(t)=sum_(k>=0) U(L/2+t+kL)`. Exact periodization of the finite Fourier
series gives `phi_s(D)v=per_L U` with no truncation remainder. Pairing the
exterior cells and telescoping their cosine terms gives

    r_s(z)=2 integral_0^infinity tau(t) sin(zt) dt,
    lambda r_s(lambda)=2 tau(0)+2 integral_0^infinity tau'(t)cos(lambda t)dt

for real `lambda`, including zero by continuity. Hence
`sup_real |lambda r_s(lambda)| <= 2(|tau(0)|+||tau'||_1)` and the shifted
energy is at most

    4 L(H_00-E)(|tau(0)|+||tau'||_1)^2.

Suppose the complete characteristic mean satisfies `mu<=M` and `s>16M`.
The normalized zero product gives
`|C(z)|<=exp(16 M |z|^2)`. For `a=s+1,s+2`, `z=xi+iy`, this implies

    |exp(-a z^2) C(z)|
      <= exp(-(a-16M)xi^2 +(a+16M)y^2).

Set `q=s+1-16M>0`, `p=s+2+16M`, and shift the inverse-transform contour
to `y=t/(2p)`. Gaussian integration of the two heat terms gives

    |U(t)| <= (pi q)^(-1/2) exp(-t^2/(4p)),
    |U'(t)| <= pi^(-1)(q^(-1)+|t|/(2p)*sqrt(pi/q)) exp(-t^2/(4p)).

The vertical contours vanish by the `q>0` real-direction Gaussian margin.
Absorbing the polynomial derivative factor into half the Gaussian exponent
gives `|U|+|U'|<=C_(M,s) exp(-t^2/(8p))`. For `b=L/2`, `L>=1`,

    (b+t+kL)^2 >= b^2+t^2+k^2 L^2.

The periodized tail and its derivative therefore satisfy
`|tau(0)|+||tau'||_1 <= C_(M,s) exp(-L^2/(32p))`. Combining with the sine-tail
bound proves

    <phi_s(D)v,K phi_s(D)v>
       <= C_(M,s) L(H_00-E) exp(-L^2/(16p)),
    p=s+2+16M,

uniformly in the Fourier cutoff. The constants and exponent agree with
equation (39) of the draft. This finite estimate indeed uses no spectral gap.

## Arithmetic specialization and open hypotheses

For the arithmetic matrix, the source writes the form as the gamma term,
paired killed prime shifts, and two polar rank-one terms. The constant prime
diagonal is nonpositive; using `Lambda(n)<=log(n)<=L` and
`sum_(n<=x)n^(-1/2)<=2 sqrt(x)`, the prime operator norm is bounded by
`4L exp(L/2)`. The negative polar operator has norm
`2 sinh(L/2)-L <= exp(L/2)`. The gamma multiplier is bounded below by
`a0`: the digamma series gives
`Re psi(a+iy)-psi(a)=sum_(n>=0) y^2/((n+a)((n+a)^2+y^2))>=0` for `a=1/4`.
The constant-mode gamma sum and positive polar diagonal are at most
`2 sum_(k>=0) lambda_k^(-2)` and
`8 exp(L/2)/L`, respectively, with `lambda_k=2k+1/2`. These estimates give
the source's coarse bound

    0 <= H_00-E
       <= 2 sum_(k>=0) lambda_k^(-2)
          +(4L+1+8/L) exp(L/2).

Hence the paper's smoothed energy tends to zero along any family with
uniformly bounded complete mean and the assumed simple-even ground states.
This audit does not establish that such an unbounded arithmetic family
exists or has bounded mean. It also does not independently verify the
Appendix A passage from filtered finite equations to the whole-line current,
the Xi-zero retention theorem, or the formalization snapshot. Those premises
and arguments remain separate. In particular this conditional finite result
does not establish RH or an unconditional Hilbert–Pólya correspondence.

No numerical computation or Lean build was run. This is an independent
manual derivation of the finite algebra and bounds from the cited equations;
it is not external expert review or a novelty claim.

# B1-11 — RH-conditional subexponential logarithmic-dual bound

Date: 2026-11-27. Status: analytic deduction conditional on RH and a cited
logarithmic-derivative estimate; no full Weil-form positivity.

## Question

Can the exact B1-10 multiplier be bounded in the dual of the actual
logarithmic Fourier weight, uniformly over all frequencies, by shifting a
Mellin contour and separating the main pole from zeta-zero contributions?

## Prime-zeta representation and contour

Use B1-09's cutoff `η∈C_c^∞(ℝ)`, supported in `[-1,2L+1]` and equal to one
on `[0,2L]`. Define its bilateral Laplace transform

    η̃(s)=integral η(v) exp(sv) dv,

and the prime-zeta function `P(q)=Σ_p p^(−q)` for `Re(q)>1`. Its classical
Möbius formula, valid by absolute convergence for `Re(q)>1`, is

    P(q)=Σ_(k≥1) μ(k) log ζ(kq)/k,
    F(q):=−P'(q)=Σ_(k≥1) μ(k)(−ζ'/ζ)(kq).             (1)

The formula and its classical references are given in Hasegawa–Saito,
*On a prime zeta function of a graph*, Remark 6, which cites Glaisher,
Fröberg and Titchmarsh ([Pacific J. Math. 273 (2015), PDF](https://msp.org/pjm/2015/273-1/pjm-v273-n1-p.pdf)).
Differentiation in (1) cancels the factor `1/k` against the chain-rule
factor `k`.

Mellin inversion on a vertical line `Re(s)=c<−1/2`, where
`Re(1/2+iξ−s)>1`, is absolutely convergent and gives

    μ̂_h(ξ) = exp(iξh)/(2πi) integral_(c)
                 η̃(s) exp(−sh) F(1/2+iξ−s) ds.       (2)

Here `μ_h` is the prime measure in B1-09. The same formula for its smooth
main measure is

    ν̂_h(ξ)=exp(h/2) η̃(−1/2+iξ).                     (3)

Assume RH. Formula (1) continues `F(q)` meromorphically to `Re(q)>1/2`:
the `k=1` term is `−ζ'/ζ(q)`, while for `k≥2`, `Re(kq)>1` and the series
converges locally uniformly. In this half-plane its only pole is at `q=1`,
with residue `+1`; RH places the nontrivial zeros on the boundary
`Re(q)=1/2`. Therefore, for any fixed `0<δ<1/4`, shift (2) from
`c<−1/2` to `Re(s)=−δ`. The only crossed pole is
`s₀=−1/2+iξ`; as a function of `s`, the residue is
`−η̃(s₀)exp(−s₀h)`. The contour orientation consequently gives

    μ̂_h(ξ)=ν̂_h(ξ)+exp(iξh)/(2πi) integral_(−δ)
                         η̃(s)exp(−sh)F(1/2+iξ−s)ds.

Subtracting (3) yields the exact pole-removed formula

    Δ̂_h(ξ)=exp(iξh)/(2πi) integral_(−δ)
                         η̃(s)exp(−sh)F(1/2+iξ−s)ds.  (4)

The horizontal integrals vanish because `η̃` decays faster than every power
on fixed vertical strips and the continued logarithmic derivatives have
polynomial/logarithmic growth there. This argument uses RH for the
zero-free strip; it is not an unconditional contour shift.

## Frequency-uniform estimate

Chirre–Gonçalves, arXiv:2103.06237v2, §1, equation (1.1), gives under RH,
for fixed `0<δ<1/4` and `σ=1/2+δ`,

    |ζ'/ζ(σ+it)| ≪_δ (log(2+|t|))^(1−2δ).

Their stated uniform version follows from the classical RH estimate; see
[arXiv:2103.06237v2, §1](https://arxiv.org/html/2103.06237v2). The terms
`k≥2` in (1) are uniformly bounded on this line because `kσ>1`. Thus

    |F(1/2+δ+it)| ≪_δ (log(2+|t|))^(1−2δ).

On `Re(s)=−δ`, equation (4) has the factor `|exp(−sh)|=exp(δh)`. The
Schwartz decay of `η̃(−δ+it)` and the elementary logarithm inequality give

    |Δ̂_h(ξ)| ≪_(δ,η) exp(δh)
                    (log(2+|ξ|))^(1−2δ).              (5)

Consequently, for the B1-09 logarithmic-dual multiplier constant

    c_h=sup_ξ |Δ̂_h(ξ)|/log(2+|ξ|),

we obtain

    c_h ≪_(δ,η) exp(δh).                               (6)

For every `ε>0`, choose `0<δ<min(ε,1/4)`; hence, conditionally on RH,

    c_h = O_(ε,η)(exp(εh)) for every ε>0.               (7)

This is a subexponential-in-`h` bound, not a uniform-in-`h` constant. Pairing
Fourier inversion with `φ_hat=g_hat²` gives

    |integral (g*g)dΔ_h|
       ≤ c_h/(2π) integral log(2+|ξ|)|g_hat(ξ)|²dξ,

so it is uniform over bounded `H^log` profile families with a
subexponentially growing constant, under RH.

## Scope and falsification boundary

The proof critically assumes RH to continue `F` without poles in
`1/2<Re(q)<1` and to obtain the logarithmic-derivative estimate. It is not
an unconditional RH argument. It proves an upper bound, not a lower bound
for `c_h`; it neither establishes `c_h=O(1)` nor shows that `c_h` grows.
No sign of `Δ̂_h` is obtained. Higher prime powers, the other endpoint,
archimedean and continuous terms, and their cross-effects remain outside the
calculation. Thus this does not prove full-form positivity or the
RKHS coercivity criterion.

The contour step was checked by matching the pole residue to the exact
subtracted main measure (3). No numerical computation, Lean formalization,
or independent RH verification was performed. The prior-art investigation
was limited to the cited prime-zeta identity and logarithmic-derivative
bound; no novelty claim is made.

**Next question:** can the fixed-`δ` estimate be sharpened as `δ→0` with
controlled constants to obtain a polynomial bound in `h`, or can a rigorous
lower bound show that `c_h` is unbounded? Keep the RH-conditional result
separate from unconditional positivity.

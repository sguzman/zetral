# B5-12 — The endpoint Hamiltonian average has a rank-one limit

Date: 2026-11-27. Status: RH-conditional endpoint-average limit; no global
strong-resolvent conclusion.

## Question

B5-11 left open whether the trace-normalized Hamiltonian for
`m_0=-F'/F` has a Cesaro average limit at the initial endpoint. The
canonical high-energy theorem only directly covers a Weyl function with a
finite limit in the closed upper half-plane. Can a Weyl coordinate change
reduce this case to that theorem?

## Coordinate swap

Assume RH, so `m_0` is Herglotz and has its unique trace-normalized
Hamiltonian

    H_0(x) = [[a(x), b(x)], [b(x), c(x)]].

Define

    H_0^*(x) = [[c(x), -b(x)], [-b(x), a(x)]].

This is the canonical coordinate swap. In the convention
`JY'=zHY`, `J=[[0,-1],[1,0]]`, the substitution `Y^*=JY` gives
`H_0^*=-JH_0J` and sends the initial Weyl slope `m` to `-1/m`.
It preserves positivity and trace normalization. Thus `H_0^*` is the
trace-normalized Hamiltonian corresponding to

    m_0^*(z) = -1/m_0(z).

Stirling's formula, uniformly in closed sectors of `C+`, gives

    m_0(z) = (i/2)log((-iz)/(2 pi)) + O(1)

up to the harmless fixed shift in the xi argument. In particular
`|m_0(z)| -> infinity`, hence `m_0^*(z) -> 0`, as `z -> infinity` in
every closed sector of `C+`.

Theorem 3.1 and the constant-matrix formula (2.23) of
Eckhardt–Kostenko–Teschl now apply to `m_0^*`: a trace-normalized canonical
Hamiltonian whose Weyl function tends to zero has

    (1/x) integral_0^x H_0^*(t)dt -> [[0,0],[0,1]].

Swapping coordinates back proves

    (1/x) integral_0^x H_0(t)dt -> [[1,0],[0,0]]
       as x -> 0+.

This resolves the B5-11 dichotomy: the endpoint average does converge, and
it converges to the same rank-one matrix as the limit of the fixed-shift
endpoint averages.

## Commutation of the two endpoint averages

For every `omega>0`, B5-11 gives

    lim_(x->0) (1/x) integral_0^x H_omega(t)dt
       = diag(1/(1+omega^2), omega^2/(1+omega^2)).

This tends to `diag(1,0)` as `omega->0`. For each fixed `x>0`, B5-08 gives
convergence of the Hamiltonian primitives, hence

    (1/x) integral_0^x H_omega(t)dt
       -> (1/x) integral_0^x H_0(t)dt.

Taking `x->0` and using the result above gives the same iterated limit.
Therefore these Cesaro endpoint averages commute in the two limits. The
double-scaling Weyl asymptotic of B5-11 still shows that convergence is not
uniform at heights `|z|=exp(lambda/omega)`; equality of iterated endpoint
averages does not supply uniform tail control.

## Verification limits

The Weyl transformation was checked directly by conjugating the canonical
system with `J`; `-JHJ=[[c,-b],[-b,a]]`, and the initial vector `(1,m)` is
sent to `(-m,1)`, whose slope is `-1/m`. The limit `m_0^* -> 0` follows
from the xi logarithmic-derivative asymptotic already recorded in B5-07 and
B5-11. The canonical endpoint theorem is a cited classical result, not
independently reproved here. RH is required for the Herglotz realization.
No numerical zero data or formal proof is used. No conclusion about global
operator or strong-resolvent convergence follows.

References:

- J. Eckhardt, A. Kostenko, G. Teschl, *Spectral asymptotics for canonical
  systems*, Theorem 3.1 and equation (2.23),
  https://www.mat.univie.ac.at/~gerald/ftp/articles/AsymCS.pdf
- B5-08 and B5-11 in this repository for fixed-interval Hamiltonian
  convergence and finite-shift endpoint averages.

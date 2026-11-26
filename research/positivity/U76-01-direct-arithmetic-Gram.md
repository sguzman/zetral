# U76-01 — Direct arithmetic Gram reduction

Date: 2026-11-26. Status: exact symbolic reduction from the arithmetic Weil
functional; no numerical entry comparison or certificate yet.

## Conventions

Let a>0, L=2a, k_m=2 pi m/L=pi m/a, and

    chi_m(x) = L^(-1/2) exp(i k_m x) 1_[-a,a](x)
    G_mn = Q_W(chi_m,chi_n) = W(chi_m * tilde(chi_n)).

The Fourier transform convention is F[f](t)=integral f(x) exp(i t x) dx.
Box functions are used for convenient calculations; any transfer to the
admissible test-function domain needs the form-core/continuity justification.

For 0<=t<=L, direct integration over the overlap interval [-a+t,a] gives

    C_mn(t) = (chi_m * tilde(chi_n))(t)
            = (1-t/L) sinc((k_m-k_n)(L-t)/2) exp(i(k_m+k_n)t/2),

where sinc(u)=sin(u)/u and sinc(0)=1. Conjugation and index swap give
C_mn(-t)=conj(C_nm(t)). For this centered exponential basis,

    S_mn(t) = C_mn(t)+C_mn(-t) = 2 Re C_mn(t),  0<=t<=L,

and S vanishes outside [-L,L].

## Direct explicit-formula entry

Set K(t)=exp(t/2)/(exp(t)-exp(-t))=exp(-t/2)/(1-exp(-2t)), and
delta_mn=1 if m=n and zero otherwise. Substitution into Suzuki's arithmetic
definition of W yields

    G_mn = integral_0^L 2 cosh(t/2) S_mn(t) dt
           - sum_{2<=q<=exp(L)} Lambda(q)/sqrt(q) S_mn(log q)
           - (log(4 pi)+gamma_E) delta_mn
           - integral_0^L (S_mn(t)-2 exp(-t/2) delta_mn) K(t) dt
           - delta_mn log(tanh(L/2)).

The prime-power sum is finite and includes every q=p^r<=exp(L), with
Lambda(q)=log p. The final diagonal term is the tail of the subtraction:

    2 integral_L^infinity exp(-t/2) K(t) dt
      = 2 integral_L^infinity exp(-t)/(1-exp(-2t)) dt
      = 2 artanh(exp(-L))
      = -log(tanh(L/2)).

During the first audit pass I simplified K(t) incorrectly to
1/(2 sinh(t/2)), omitting exp(-t/2); this produced a false apparent
discrepancy in the tail. The corrected algebra agrees with the prior
repository derivation. Preserve this failed falsification to prevent its
recurrence.

## Parity polarization

For m,n>0 define normalized even and odd vectors

    chi_m^+ = (chi_m+chi_-m)/sqrt(2)
    chi_m^- = (chi_m-chi_-m)/(i sqrt(2)).

Reflection invariance gives exact identities

    Q_W(chi_m^+,chi_n^+) = G_mn + G_m,-n
    Q_W(chi_m^-,chi_n^-) = G_mn - G_m,-n.

The mixed parity block vanishes, and chi_0 occurs only in the even block.
These formulas expose parity and factor-of-two errors independently of the
compressed representation. They do not yet identify LXXV's every-other-
frequency ks arrays with these bases or match the common entry scaling.

## Disposition

The direct tail and parity polarization agree symbolically with the prior
arithmetic Gram derivation. This is not a numerical validation. Next evaluate
the chi_0 even entry and first nonzero odd diagonal independently, compare
against the compressed formulas, and resolve basis scaling and the
every-other-frequency support before scaling up.

Source: Suzuki, arXiv:2606.09096v4, §1.1 (arithmetic W and Q_W). This
source states that positivity of the original Weil form on all compactly
supported smooth tests is equivalent to RH. The present finite symbolic
reduction proves neither positivity nor RH.

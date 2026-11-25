# Arithmetic Gram entries: independent derivation

Status: informal derived formula, not yet numerically validated. Sources: Suzuki arXiv:2606.09096v4 §1.1 (https://arxiv.org/html/2606.09096v4); Suzuki arXiv:2610.32704v1 §6 (https://arxiv.org/html/2610.32704v1). Yoshida (5.15),(5.16) unavailable; no claim of direct equivalence to his printed formula until checked.

Use L=2a>0, k_m=2 pi m/L. The basis chi_m(x)=exp(i k_m x)/sqrt(L) on [-a,a], zero elsewhere; inner product linear in first argument and Fourier transform uses exp(+izx). Define C_mn(t)=(chi_m * tilde(chi_n))(t), tilde(f)(t)=conj(f(-t)).

For 0<=t<=L the overlap in the defining integral is y in [-a+t,a]. The integrand is exp(i(k_m-k_n)y+i k_n t)/L. Centering this interval at t/2 yields

    C_mn(t) = (1-t/L) sinc((k_m-k_n)(L-t)/2) exp(i(k_m+k_n)t/2).

Here sinc(u)=sin(u)/u, sinc(0)=1. C_mn(-t)=conj(C_nm(t)); the displayed expression is symmetric in m,n, so S_mn(t)=C_mn(t)+C_mn(-t)=2 Re C_mn(t) is real and symmetric. C_mn(0)=delta_mn. Both correlations vanish for |t|>=L.

With delta=delta_mn, K(t)=exp(t/2)/(exp(t)-exp(-t)), and Euler constant gamma_E, direct substitution into the arithmetic functional W of Suzuki v4 §1.1 gives:

    G_mn =
      integral_0^L 2 cosh(t/2) S_mn(t) dt
      - sum_{2<=q<=exp(L)} Lambda(q)/sqrt(q) S_mn(log q)
      - (log(4 pi)+gamma_E) delta
      - integral_0^L [S_mn(t)-2 exp(-t/2) delta] K(t) dt
      - delta log(tanh(L/2)).

The last term is the exact integral over t>L of the subtraction at zero: +delta integral_L^infinity csch(t) dt. It must not be dropped when truncating the quadrature. All prime powers use Lambda(p^r)=log p. No zero data enters. The functional extends to the piecewise smooth basis as used in the October paper; its correlation is Lipschitz and the subtracted integral is locally integrable.

## Stable evaluation
For diagonal, S=2(1-t/L)cos(k_m t). For d=m-n nonzero, S=2(-1)^(d+1) sin(pi d t/L)/(pi d) cos((k_m+k_n)t/2). The latter avoids subtractive cancellation near t=0. At t=0 the limit of [S-2exp(-t/2)delta]K is 1/2-1/L on the diagonal and (-1)^(d+1)/L otherwise. Derive by Taylor expansion and K~1/(2t). Use expm1 and small-angle formulas near zero; use arbitrary precision for ill-conditioned systems. Gram symmetry and G_{-m,-n}=G_mn are exact checks.

## R03 verification plan
Check the analytic correlation against independent direct overlap quadrature, test prime-free regime L<log 2 and equality at prime threshold, compare Gram values using the Fourier/digamma representation or Yoshida if accessible, and verify symmetry, positive definiteness under RH, and convergence across precision settings. Then solve Suzuki (6.3)–(6.4), not an eigenproblem for G itself. Do not treat the derived formula as numerically validated until these checks pass. Root comparisons must be external validation only. 

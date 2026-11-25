# R01 — Isolated spectral pole and arithmetic residue

25 November 2026. Conditional on RH, Suzuki's source theorems and the candidate identities in Campaign VIII. Internal analytic derivation, not human review, formal certification or established originality.

## 1. Setting and source check

Fix a distinct positive ordinate gamma=gamma_n with multiplicity m_gamma. Let t_a=t_(a,pi,n), and use the local form inner product q (linear first), local inverse C_a, global compression B_a=Pi_a C Pi_a, and evaluation vectors u_z=A_a^-1 exp(-izx), v=u_0, M_a=||v||, e_a=v/M_a. Write P_a for the normalized phase-pi characteristic and Delta for the canonical product over distinct positive ordinates.

Primary source actually retrieved this turn: Suzuki, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, Theorem 1.2 (1.2)–(1.3), §2.3 (2.8), §3.2 (3.3), Lemma 3.2 including the cardinal-function identity for W, Theorem 3.3 (3.5). Under RH these imports give t_a->gamma, P_a->Delta locally uniformly, simple local eigenvalues and inverse compression. By norm convergence B_a->C from Campaign VII, an isolated sufficiently small neighborhood of 1/gamma contains exactly one nonzero eigenvalue of B_a for large a, of multiplicity one (spectral projection convergence or the signed min–max comparison). Equivalently a small disk about gamma contains only t_a among phase-pi eigenvalues, by the canonical product convergence and Rouche. Delta'(gamma) is nonzero: all other factors are nonzero and the infinite tail converges absolutely at gamma. No simplicity of xi is assumed.

Use the candidate K01/K02 identities in research/kernels/campaign-08-kernel-limit.md, checked against that repository text this turn:

    (I-z C_a)u_z=P_a(z)v,
    u_t=-t P_a'(t) E_t v at a local simple eigenvalue t,
    j_a u_gamma=Pi_a g_gamma, ||g_gamma||^2=1/m_gamma,
    |P_a(gamma)| M_a <= gamma ||C|| delta_a(gamma),
    delta_a(gamma)=||(I-Pi_a)g_gamma|| ->0.

Here g_gamma is the weighted coordinate representer, E_t is the local orthogonal eigenspace projection at inverse eigenvalue 1/t, and M_a->infinity by L02. The inequality at gamma is obtained by applying (I-gamma B_a) to Pi_a g_gamma and using C g_gamma=g_gamma/gamma. It is not an imported Suzuki bound.

## 2. Distinguished shift on the microscopic scale

On a fixed sufficiently small real interval about gamma, Delta' has constant sign and modulus bounded below by a positive number. Local uniform convergence of P_a' follows from Cauchy's formula, so |P_a'| is bounded below there eventually. Both gamma and t_a lie in the interval. Since P_a(t_a)=0 and P_a is real entire, the mean value theorem gives

    M_a |t_a-gamma| <= c_gamma M_a |P_a(gamma)|
                     <= C_gamma delta_a(gamma) ->0.       (R01.1)

The same inequality holds trivially if t_a=gamma. In particular t_a-gamma=o(1/M_a). This is relative to the actual evaluation norm, not a quantitative upper bound on M_a or an asymptotic equivalent for t_a-gamma. It is compatible with the earlier RH-dependent monotone upper bound.

The entire vector estimate in K02 gives uniform boundedness of ||u_z/M_a|| on fixed compacts and thus, by Cauchy's integral formula, of ||u_z'/M_a|| on a slightly smaller compact. Integrate along the real segment from gamma to t_a. Equation (R01.1) yields

    ||u_(t_a)-u_gamma||_q <= C_gamma M_a |t_a-gamma|
                           <= C'_gamma delta_a(gamma) ->0.

It follows from the exact projection identity that

    ||j_a u_(t_a)-g_gamma||_H=O_gamma(delta_a(gamma)),
    ||u_(t_a)||_q^2 = 1/m_gamma+O_gamma(delta_a(gamma)).   (R01.2)

In particular the normalized real eigenfunction represented by u_(t_a) converges after embedding in norm to sqrt(m_gamma) g_gamma. This is consistent with the isolated spectral projection convergence of B_a. Neither conclusion asserts convergence of physical L2 representatives or uniformity over gamma.

## 3. Exact pole weight and its limit

Let beta_a^2=||E_(t_a)e_a||_q^2. The exact residue formula in K01 gives

    u_(t_a)=-t_a P_a'(t_a) M_a E_(t_a)e_a,
    M_a^2 beta_a^2=||u_(t_a)||_q^2/[t_a^2 |P_a'(t_a)|^2].

Every factor in the denominator is nonzero; u_(t_a) is nonzero, so beta_a^2>0. By (R01.2), t_a->gamma and P_a'(t_a)->Delta'(gamma), we conclude

    M_a^2 beta_a^2 -> L_gamma
       = 1/[m_gamma gamma^2 |Delta'(gamma)|^2] >0.       (R01.3)

In particular beta_a=O_gamma(1/M_a) and its scaled limit is sqrt(L_gamma), where beta_a denotes the nonnegative norm. The scalar resolvent m_a(z)=q((I-z C_a)^-1 e_a,e_a) has exact isolated pole contribution beta_a^2/(1-z/t_a), with residue -t_a beta_a^2. Hence

    M_a^2 Res_(z=t_a) m_a(z)
         -> -1/[m_gamma gamma |Delta'(gamma)|^2].

The sign is negative for the fixed positive ordinate and follows from 1-z/t_a=-(z-t_a)/t_a. The weight is a genuine spectral-measure mass; it is not a multiplicity of a finite-window root. The arithmetic multiplicity enters through the sampled coordinate norm, while Delta has distinct zeros.

## 4. A finite limiting kernel row at the moving eigenvalue

There is a useful exact cardinal identity, also consistent with Suzuki Lemma 3.2 (its W derivative formula). For z off the local spectrum, the exact evaluation resolvent and the residue give

    J_a(t_a,z) = ||u_(t_a)||_q^2 P_a(z)/[(z-t_a) P_a'(t_a)].  (R01.4)

To see this, u_(t_a) lies in the E_(t_a) eigenspace. Pair it with u_conj(z)=P_a(conj z)(I-conj(z) C_a)^-1 v, move the adjoint and use the expression in section 3; the scalar factor equals -t_a P_a'(t_a) M_a^2 beta_a^2 P_a(z)/(1-z/t_a). Divide by the residue norm formula to obtain (R01.4). Both sides are entire after the removable value at z=t_a. Consequently

    J_a(t_a,z) -> Delta(z)/[m_gamma (z-gamma) Delta'(gamma)]

locally uniformly on C with removable value 1/m_gamma at gamma. Uniform convergence away from gamma follows directly from the quotient, and maximum modulus on a larger circle avoiding gamma proves convergence across it. This finite cardinal row is for the moving distinguished local eigenvalue, not for the fixed sampled ordinate gamma. Although their embedded vectors differ by O(delta_a(gamma)), the norm of a generic evaluation at z can be O(M_a). Thus the difference of the corresponding unnormalized kernel rows is only bounded by O_K(M_a delta_a(gamma)) from these estimates; no finite limit at fixed gamma and off-ordinate z follows without additional rate information.

## 5. Next step and verification scope

R01 completes the isolated pole, microscopic center and residue objectives. In R02 remove the pole by defining r_a(z)=m_a(z)-beta_a^2/(1-z/t_a), holomorphic on a fixed small disk about gamma for all large a. The complement has a uniform spectral gap there; alternatively bound the pole-subtracted function on a surrounding circle and use maximum modulus. Off Gamma m_a->1 by K03, and beta_a^2=O(M_a^-2); hence r_a->1 and r_a'->0 uniformly on a smaller disk. For tau=tan(theta/2) near gamma, (K03.2) and cancellation of the simple factor of P_a give the exact local equation

    (z-t_a)(eta_a z r_a(z)-tau)-eta_a z t_a beta_a^2=0.

The suggested tuning is tau_a^0=eta_a t_a r_a(t_a). It tends to gamma but we have not bounded its discrepancy from gamma on the scale 1/M_a. At tau=tau_a^0+sigma/M_a, the expected scaled quadratic is y(y-sigma)-1/[m_gamma |Delta'(gamma)|^2], with y=M_a(z-t_a); rigorous two-root counting and detuning estimates belong to R02. No fixed-phase splitting result is asserted in R01.

Actual web source retrieval and repository note readback were performed in this turn. No numerical or Lean computation, no independent proof review of Campaign VIII/IX, no originality claim. K02-W04 branch lookup again returned 404, so no acknowledgment or audit findings. Earlier source/rerun assertions are not used as current verification evidence. No external submission.

# CZG02 — Zero-free-region carrier exclusion and necessary local geometry

2026-11-25. AI-assisted candidate deduction without RH. Uses CZG01, TPH01–02, the classical local zero count, and the Korobov–Vinogradov zero-free region. The latter was directly verified in this turn in the Analytic Number Theory Exponent Database, Theorem 13.9, https://teorth.github.io/expdb/blueprint/zerofree-chapter.html (HTML lines 205–212), as recorded in TPH04. This is an imported classical theorem; no proof or evaluated constant is claimed. No observed off-line zero, numerical experiment, independent verification or priority claim.

## 1. An unconditional growing excluded carrier regime

By the zero-free region, there is a constant c_0>0 such that every nontrivial zero rho=beta+i u satisfies
    1-beta >= c_0/[log(3+|u|)^(2/3) (log log(3+|u|))^(1/3)].
For sufficiently large |u| this is the classical theorem with harmless changes in the log arguments. For the remaining bounded |u|, there are finitely many zeros and none on beta=1, so the same inequality holds on reducing c_0. This does not supply an effective numerical c_0.

Let a->infinity, |omega|->infinity and set L_omega=log(2+|omega|). Fix a detecting test W in C_c^infty(0,infinity). Apply CZG01(4)–(5) with R=a^4 and any fixed integer p>=3. For a sequence with
    L_omega <= c_1 a^(3/2)/(log a)^2                     (1)
for some sufficiently small fixed c_1>0, the tail term
    C_p [L_omega+log(2+R)] (1+R)^(1-p)
tends to zero. For zeros in |u+omega|<=R we have log(3+|u|)<=L_omega+O(log a), so for all sufficiently large a the right side is bounded by 2c_1 a^(3/2)/(log a)^2. Its log is <=2log a. Hence for all such zeros
    a(1-beta) >= c_0 a /[(2c_1 a^(3/2)/(log a)^2)^(2/3) (2log a)^(1/3)]
                  = c_2 c_1^(-2/3) log a,
where c_2>0 depends only on c_0. Choose c_1 small enough that 2c_2 c_1^(-2/3)>3. The local weighted term in CZG01 is then bounded by C_p L_omega a^(-3), tending to zero. The pole term tends to zero because the carrier diverges, and the archimedean cross term is O_W(exp(-2a)).

Therefore
    int W(r) dmu_(a,omega)(r) ->0                         (2)
along every divergent-carrier sequence satisfying (1). Since the measures are uniformly bounded and tight, and every subsequential density is dominated by exp(-r/2)dr (no atom at r=0), compact smooth tests supported strictly in (0,infinity) determine the limit. Thus every attainable density along these sequences is identically zero. The same conclusion holds for log(2+|omega|)=o(a^(3/2)/(log a)^2) without specifying c_1.

This improves the previously available excluded band from PNT partial summation at the level of fixed-envelope/weak-measure limits. The new upper end is exp(c_1 a^(3/2)/(log a)^2), rather than exp(c a^(3/5)/(log a)^(1/5)). It is NOT a uniform operator-norm estimate for all physical states with frequency in this band, or an exclusion of every possible carrier at larger scales. The convergence constants for W and p are fixed-test constants. Bounded carriers have the different, canceled prime/pole limit as in TPH01 and are not included.

## 2. Nonzero phase limits force a nearby zero at a quantified distance from the right edge

Suppose (phi,tau) is attainable and phi is not zero, with realizing sequence (a_l,omega_l). Fix W compact smooth positive-side with integral against phi(r)exp(-r/2)dr nonzero; such W exists by density and absolute continuity. Fix any theta>0 and take
    R_l = [log(2+|omega_l|)]^theta.
Choose an integer p>1+1/theta. By CZG01(5) the zero tail beyond R_l tends to zero: its bound is O_p(L_omega^(1-theta(p-1))) up to a lower-order log R_l term. The pole and archimedean terms also tend to zero. The nonvanishing integral forces a positive lower bound on the near-carrier weighted zero sum for all sufficiently large l. The local count estimate in CZG01 then implies at least one zero rho_l=beta_l+i u_l with
    |u_l+omega_l| <= [log(2+|omega_l|)]^theta,
    2a_l(1-beta_l) <= log log(2+|omega_l|)+C_(W,p).       (3)
The zero can be chosen by maximizing beta on the finite near-carrier set. The constant is finite but not evaluated and depends on the detecting test and the chosen theta through p. To see the inequality, if every such zero had 1-beta greater than the asserted bound with sufficiently large C, the entire near-carrier weighted zero sum would be smaller than the positive lower bound. The sign u+omega follows from the project's Fourier convention; zeta reflection yields an equivalent statement around the opposite signed carrier.

Consequences:
- If limsup log log(2+|omega_l|)/a_l = kappa<1, then along the sequence the right-side real parts obey liminf beta_l>=1-kappa/2. In particular these are actual off-critical-line zeros IF the nonzero phase limit exists under this carrier-growth restriction. No such phase limit is exhibited.
- If log log(2+|omega_l|)=o(a_l), then beta_l->1. Thus existence of any nonzero attainable density with sub-double-exponential carrier growth forces the supremum of real parts of zeta zeros to be one, even if this supremum is not attained.
- If tau=0 (L_omega=o(exp(a_l))), then (3) gives
      2a_l(beta_l-1/2) >= log(exp(a_l)/L_omega)-C_(W,p) ->infinity.
  So even if log log |omega|/a tends to one, a zero-cost nonzero density requires an off-line zero with a_l times its deviation diverging. No fixed positive deviation is claimed in this last case.
- If tau>0, log log |omega|/a->1 and (3) alone need not imply an off-line zero, since critical-line zeros can contribute to cross traces. A model with norm>tau would instead give a negative Rayleigh trial by TPH01, for which the nonreal contribution is essential. CZG03 should treat that stronger premise directly rather than infer negativity from a complex cross term.

All zeros required by (3) have |u_l|->infinity because the polylogarithmic window is o(|omega_l|). For each fixed theta the estimate holds eventually; no single shrinking theta_l or uniform constant over all theta is asserted. The statement is a necessary local geometric condition, not a computational search method for zeros.

## 3. Relation to global deviation bounds

Let B=sup |Re rho-1/2|. If B<1/2, every delta_z>=1/2-B. The global weighted bound of CZG01 directly gives
    |int W dmu_(a,omega)|
       <=C_(W,p)[(1+|omega|)^(-p)+exp(-2a)
                         +exp(-(1-2B)a) log(2+|omega|)].
Hence any divergent carriers with log(2+|omega|)=o(exp((1-2B)a)) have zero limiting density. Equivalently a fixed nonzero detecting limit forces log(2+|omega|)>=c_W exp((1-2B)a) eventually. This is a zero-side analogue of earlier frequency-escape results, now for every nonzero twisted phase model regardless of its sign/cost contribution. It does not show that larger carriers are impossible.

CZG02 completes the classical-zero-free-region exclusion and localized necessary zero geometry. CZG03 should exploit actual negative modulated trials (rather than only cross identities) to obtain a sharper obstruction involving the nonreal zero pairs, and distinguish useful conditional ordinary consequences from the still unresolved double-exponential range. README unchanged.

# APM01 — Analytic pole vectors via Sobolev scale loss

2026-11-25. AI-assisted candidate deduction, unconditional in RH. The half-space indicator multiplier is a classical Shamir–Strichartz theorem, not a novelty claim. Actual search result this turn: *Pointwise multiplication by the characteristic function of the half-space on anisotropic vector-valued function spaces*, https://www.sciencedirect.com/science/article/abs/pii/S0019357722000209, HTML excerpt explicitly gives the Bessel-potential multiplier range 1/p-1<s<1/p and attributes it to Shamir and Strichartz. Only this scalar p=2 consequence is imported. No PDF inspected. All subsequent estimates derived here.

Fix I=(-a,a), E zero extension, Q=1_I on the full line. Let X_s be the closed subspace of H^s(R) supported on the closed interval, with the full-line Bessel norm, for 0<=s<=s0=1/4. The indicator Q is the product of two translated/reflected half-line indicators. The classical multiplier theorem gives a finite bound on H^s0; translation and reflection preserve this norm, so the bound is independent of a. Interpolating on the full-line Bessel scale between L² (norm 1) and H^s0 gives a common bound M>=1 for every 0<=s<=s0. We only restrict to X_s *after* this interpolation; no interpolation theorem for the support-constrained spaces is required.

Every supported vector in X_s for s>0 lies in the ordinary log form domain: shrink its support by inward dilation then convolve with a smooth compact mollifier, preserving interior support and converging in H^s, which dominates the log norm. Its full-line log multiplier alpha(D) is in L², and form representation gives E A_alpha f=Q alpha(D) Ef. Hence for positive s the operator domain includes X_s. For 0<delta<=s<=s0,
    ||Q alpha(D) v||_(s-delta) <= M C_alpha (1+delta^-1)||v||_s,
because |alpha(omega)|<=C_alpha[1+log sqrt(1+omega²)] and sup_(y>=0) y exp(-delta y)=1/(e delta). The bound uses the actual coefficient-one log growth, not a positive-order differential multiplier.

Each compressed shift is Q tau_h on supported functions and has H^s norm <=M, uniformly in h,s,a. Thus the finite prime sum has norm <=2M sum_(n<exp(2a)) Lambda(n)/sqrt n on X_s. The pole perturbation is bounded there as well: c and s_hyp (the hyperbolic sine, not the Sobolev index) have zero extensions in X_s0 by bounded variation and the 1/|omega| Fourier tail. Its two rank-one terms map X_s to X_s with a bound using their X_s0 and L² norms. These constants may grow with a; no uniform large-window analyticity radius is asserted.

Write B=T+sigma u tensor u in one parity sector, where sigma=0, +2 or -2 as appropriate and u=c or s_hyp. The preceding estimates give a fixed C_a>=1 such that for every 0<delta<=s<=s0,
    ||E B f||_(s-delta) <= (C_a/delta)||E f||_s.        (1)
For any v in X_s0 and any integer n>=1, use n successive losses delta=s0/n. Each input index is positive, so each iterate belongs to the operator domain needed for the next step. Equation (1) yields
    ||B^n v||_2 <= (C_a n/s0)^n ||v||_s0
                  <= (e C_a/s0)^n n! ||v||_s0.
The final inequality follows from n!>= (n/e)^n (integrate log x). Therefore every v in X_s0 is an analytic vector for B, with a positive fixed-window radius. This includes the pole vectors in both the restored and pole-free sectors. It does not imply that the semigroup is operator-norm analytic at time zero.

Set K=e C_a/s0. The spectral measure mu_v of B satisfies int |lambda|^n dmu_v <=||v||_2 ||B^n v||_2 <=||v||_2||v||_s0 K^n n! for n>=1, by spectral Cauchy–Schwarz. Consequently int exp(r |lambda|)dmu_v<infinity for each 0<=r<1/K, by Tonelli. The vector e^(-zB)v is holomorphic in norm for Re z>-1/(2K), by spectral calculus and local dominated differentiation, and the scalar heat g_B(z)=<e^(-zB)v,v> is holomorphic for Re z>-1/K. Its Taylor derivatives at zero are the signed moments. Conventions use the inner product linear in the first slot in this scalar expression. The analyticity bounds are constructive in terms of the classical multiplier norm and the arithmetic coefficients, but that norm has not been numerically enclosed. No actual numerical radius, eigenvalue, or pole capacity computed.

APM01 complete as candidate. Next derive all-order relative heat coefficients and invert them to recover the pole spectral moments. No RH proof, originality claim or independent review.

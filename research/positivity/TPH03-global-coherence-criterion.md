# TPH03 — Global coherence criterion for saturation of the ordinary coefficient

2026-11-25. AI-assisted candidate deduction, without RH. Uses TPH01–02 and classical PNT as inherited inputs. No fresh literature retrieval, actual spectral computation, observed off-line zero, independent verification or priority claim. In particular this is not a proof that the coherence condition below holds or fails for the primes.

## 1. Attainable-set symmetries and closure

Use the topology on densities phi given by weak convergence of the associated measures phi(r)exp(-r/2)dr against compact continuous tests on [0,infinity). On the unit ball |phi|<=1 this topology is metrizable by a countable dense family of tests (the uniform mass bound controls approximation); tightness gives convergence for bounded continuous tests.

For an attainable pair (phi,tau), any real beta and unit complex c yield the attainable pair
    (c exp(-i beta r) phi(r), tau).                         (1)
Indeed take a realizing sequence (a_l,omega_l) and replace the carrier by omega_l+beta+epsilon_l, where epsilon_l is chosen in [-pi/(2a_l),pi/(2a_l)] so that exp(2i a_l(beta+epsilon_l))=c. The measure is multiplied by c exp(-i(beta+epsilon_l)r), which converges uniformly on compact r-intervals to the stated factor. The carrier still diverges in absolute value and its normalized log cost is unchanged. Multiplication of phi by exp(-i beta r) gives K_new=M K_phi M on the half-line with M the unitary multiplication by exp(-i beta t), so its singular values are unchanged. A unit scalar also leaves them unchanged.

The attainable pairs with tau in a fixed bounded closed interval form a sequentially compact set in the product of this topology and the cost interval. To prove closedness, suppose attainable (phi_k,tau_k)->(phi,tau). For each k select one sufficiently late member of its realizing sequence with a>=k, |omega|>=k, cost within 1/k of tau_k and twisted integrals within 1/k of the first k test integrals for phi_k. This diagonal selection realizes (phi,tau). Sequential precompactness follows from the measure compactness in TPH01 and boundedness of tau. We do NOT infer that the norm of K_phi is continuous on this compact set. The strong operator convergence below only gives lower semicontinuity of norm; optimization of this norm need not attain its supremum without further argument.

For phi_k->phi in this topology, K_phi_k and their adjoints converge strongly. For compact smooth g and each t, the integral against phi_k uses a compact continuous test of r, exp(-r/2)g(r-t) (with g extended by zero), multiplied by the half-line restriction. Pointwise convergence and the bound |K_phi_k g(t)|<=exp(-t/2) int exp(-s/2)|g(s)|ds give dominated L2 convergence. Uniform operator bounds and density extend to all g; conjugate kernels give the adjoints. This applies to densities as opposed to the finite-window atomic measures in TPH01.

## 2. Exact norm-one Hankel kernels

For |phi|<=1 the Hilbert-Schmidt identity gives ||K_phi||<=||K_phi||_HS<=1. If ||K_phi||=1, all inequalities are equalities: K_phi is rank one (the sum of squares of its singular values equals the square of the largest), and |phi(r)|=1 almost everywhere since r exp(-r)>0 on the open half-line. Conversely
    phi(r)=c exp(i beta r), |c|=1, beta real,
gives a rank-one operator of norm one.

Here is a proof that these are the ONLY possibilities, including measurable densities. Write K=K_phi=g tensor h for nonzero L2 vectors, with (g tensor h)f=<f,h>g, inner product linear first. For x>=0 let L_x f(t)=f(t+x), so L_x* is right translation with zero extension. The Hankel kernel gives exactly L_x K=K L_x*. Therefore (L_x g) tensor h=g tensor (L_x h), and L_x g=c(x)g, L_x h=conj(c(x))h for a scalar c(x). Strong continuity of left translation makes c continuous with c(0)=1; the semigroup law gives c(x+y)=c(x)c(y). It cannot vanish, since otherwise repeated halving would contradict continuity at zero. The elementary continuous multiplicative Cauchy equation on the positive reals gives c(x)=exp(lambda x) for some complex lambda: apply the real logarithm to |c| and a continuous local argument at zero, then extend by the semigroup identity. In distributions on the open half-line the difference quotients (L_x g-g)/x converge to the weak derivative g', so g'=lambda g and g(t)=C exp(lambda t) almost everywhere. Likewise h(t)=C' exp(conj(lambda)t). Their rank-one kernel is therefore C conj(C') exp(lambda(t+s)). Equality of Hilbert-Schmidt kernels and |phi|=1 imply Re lambda=-1/2 and |C conj(C')|=1. This proves the claimed classification.

## 3. Near-norm-one sequences can be recentered

Suppose phi_k are attainable densities with ||K_phi_k||->1 and tau_k->0. A weak limit without recentering could be zero, so classification in section 2 alone is insufficient. We show that carrier recentering repairs this defect.

Set k_phi(r)=1_(r>=0) exp(-r/2)phi(r). On the half-line, K_phi is the compression of full-line convolution by k_phi applied to the reflected, zero-extended input. By Plancherel
    ||K_phi||<=sup_(xi real)|int_0^infinity exp(i xi r) k_phi(r)dr|.
Pick xi_k such that the last magnitude is >=1/2 for all sufficiently large k. By the symmetry (1), multiply phi_k by exp(i xi_k r) and a unit scalar so that the corresponding integral is positive real >=1/2. Call the modified attainable density psi_k. Its Hankel norm is unchanged and its cost remains tau_k. Extract a subsequence psi_k->psi. The integral against the constant test 1 converges by tightness and is >=1/2, so psi is not zero. By closedness (psi,0) is attainable. The operators K_k=K_psi_k and K_k* converge strongly to K=K_psi and K*, and K is nonzero (its squared Hilbert-Schmidt norm is the integral of r exp(-r)|psi(r)|^2).

Let s_k=||K_k||->1. A top singular-vector decomposition gives K_k=s_k u_k tensor v_k+E_k with unit vectors u_k,v_k and ||E_k||_HS^2=||K_k||_HS^2-s_k^2<=1-s_k^2->0. Choose fixed f with Kf !=0. From strong convergence, s_k <f,v_k>u_k->Kf in norm; the scalar magnitudes are bounded below for large k. Rotate u_k and v_k by the same unit phase (which leaves their tensor unchanged) so that <f,v_k> is nonnegative real. It follows u_k->u=Kf/||Kf|| strongly, with ||u||=1. Now K_k* u_k->K* u in norm by adjoint strong convergence and uniform boundedness. The singular-vector identity gives K_k* u_k=s_k v_k, so v_k->v=K*u strongly with ||v||=1. Hence K_k converges in Hilbert-Schmidt norm to u tensor v and K=u tensor v has norm one. By section 2 psi is a unit exponential. Applying (1) once more makes the density identically one while keeping cost zero.

Thus if the supremum in TPH02 equals one, a pair (1,0) is genuinely attainable. Indeed choose pairs with (norm-cost)->1; norm<=1 and cost>=0 force the hypotheses just used. Conversely (1,0) attainable gives S=1 by TPH01. This argument repairs precisely the potential nonattainment issue at the extreme coefficient one; it does not prove that the supremum is attained at arbitrary intermediate coefficients.

## 4. Equivalent global arithmetic condition

Write X=exp(2a) and W(X)=sum_(n<=X) Lambda(n)/sqrt(n). PNT and partial summation imply W(X)/sqrt(X)->2. By the preceding sections,
    S=1 iff there are X_l->infinity and |omega_l|->infinity
             with log(2+|omega_l|)=o(sqrt(X_l)) and
             |sum_(n<=X_l) Lambda(n)n^(i omega_l)/sqrt(n)| / W(X_l) ->1.    (2)

Forward: an attaining sequence for (1,0) has total complex normalized mass tending to 2 by tightness, and the positive normalized mass also tends to 2. Reverse: the ratio in (2) tends to one; after a subsequence, the argument of the complex mass converges to a unit scalar c. Normalize the positive weights to a probability distribution, and let z_n=n^(i omega). For the phase c_l of the weighted mean the exact mean-square identity is
    sum weights |z_n-c_l|^2 = 2(1-|sum weights z_n|).
It tends to zero. Hence the complex weighted measures differ from c_l times their positive measures by o(1) in total variation (Cauchy-Schwarz), and the limiting density is c with zero cost. Its Hankel norm is one. Proper prime powers may be removed: their total weight is O((log X)^2), since for squares sum_(p<=sqrt X) log p/p <= sum_(n<=sqrt X) log n/n=O((log X)^2), and for powers of exponent >=3 the sum over all p and k is bounded by a convergent sum dominated by C sum_(n>=2) log n/n^(3/2). Both are negligible compared with sqrt X. The same estimate bounds their complex contribution uniformly in omega.

This is stronger than the necessary local shrinking-interval coherence of WPR02: it is a necessary AND sufficient global weighted prime-coherence condition for saturation, subject to TPH02's candidate theorem. It does not imply that RH fails, since existence of these carrier sequences is unresolved; conversely their exclusion only gives S<1, not S=0 or a smaller exponential rate.

A weaker useful positivity implication follows directly from the same convolution norm estimate: if S>0, TPH02 produces an attainable pair with ||K_phi||>tau. There is a real xi with |int e^(i xi r) phi(r)e^(-r/2)dr|>tau. Carrier recentering realizes the corresponding nonzero global mean at the same cost. This is a necessary twisted-prime large-value condition, but not a sufficient one at that threshold: the convolution norm is an upper bound for the Hankel norm. No replacement of (4) in TPH02 by a scalar Fourier supremum is justified.

TPH03 completes the norm-one classification, recentered compactness at saturation, and global criterion. TPH04 next: audit and choose the next arithmetic-specific route. README unchanged.

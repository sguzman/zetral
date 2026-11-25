# K02 — Entire kernel convergence and the ordinate boundary layer

25 November 2026. Conditional on RH and the source imports and K01 identity. Internal candidate theorem, not human-reviewed, formally verified or established as original.

## 1. Notation and primary-source check

Use K01 conventions: u_z=A_a^-1 exp(-izx), v=u_0, M_a=||v||_q, e_a=v/M_a, h_a=j_a e_a, P_a=W(a,pi;z)/W(a,pi;0), Delta(z)=product over distinct positive gamma of (1-z^2/gamma^2). The form inner product is linear first; J_a(w,z)=q(u_conj(w),u_conj(z)). Distinguish P_a (scalar entire function) from Pi_a (global sample-space projection). In Suzuki arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, directly inspected §2.2 (2.3)–(2.7), §2.3 (2.8)–(2.9), including the weight m_gamma, kernel convention, isometric embedding and strong convergence of Pi_a. Also directly opened arXiv:2606.09096v4 §7.9 (7.7)–(7.8), including the proposed singularity of the local kernel. The following results are deductions, not attributed to those source passages. The normalized characteristic convergence is the Theorem 1.2 import recorded in K01.

## 2. Compact continuation

From K01, with d_a=||C_a e_a||_q->0, the H_a-valued entire function

    V_a(z)=u_z/M_a-P_a(z)e_a

is O_K(d_a) in norm on every compact disjoint from Gamma. Fix any R>0 and choose a larger radius R' such that the circle |z|=R' avoids Gamma; discreteness gives such a radius. The vector-valued maximum modulus principle bounds sup_(|z|<=R')||V_a(z)|| by its boundary supremum: pair against each unit vector in H_a and apply the scalar principle, then take the supremum. Therefore for every compact K in C,

    sup_K ||V_a||_q=O_K(d_a).

This argument takes place in each H_a separately, so variation of H_a causes no issue. By local uniform convergence P_a->Delta,

    u_z/M_a=Delta(z)e_a+o_K(1) in H_a.                (K02.1)

For every fixed nonnegative derivative order k, Cauchy's integral formula on a larger disk yields the same estimate for derivatives, with Delta replaced by Delta^(k). This includes derivatives at each ordinate.

The scalar entire function of two independent variables

    L_a(x,z)=q(u_x,u_conj(z))/M_a^2-P_a(x)P_a(z)

is O(d_a^2) on compact products avoiding Gamma by K01 reflection and the two-resolvent identity. For any pair of disks enclosing a requested compact product, choose larger circles avoiding Gamma. Apply scalar maximum modulus first in x at each fixed boundary z, then in z at each fixed interior x. Thus the quadratic estimate persists on every compact product, including all sampled points:

    J_a(w,z)/M_a^2=conj(P_a(w))P_a(z)+O_(K_w,K_z)(d_a^2).

In particular J_a(w,z)/J_a(0,0)->conj(Delta(w))Delta(z) locally uniformly on all C x C (antiholomorphic in w). This is an absolute normalized estimate, not a relative estimate at zeros. Derivatives in z and conj(w) also converge locally uniformly. It does not require uniform resolvent bounds at poles.

## 3. Exact sampled kernel and mixed scales

Identify H with ell2(Gamma,m). For gamma in Gamma define g_gamma by its coordinate at gamma equal to 1/m_gamma and zero elsewhere. Then <f,g_gamma>_H=f(gamma), ||g_gamma||^2=1/m_gamma. The local sampling identity holds on compact tests by (2.8) and on H_a by continuity in both local evaluation and the sequence coordinate. For real gamma, q(u,u_gamma)=F[u](gamma)=<j_a u,g_gamma>. Hence

    u_gamma=j_a* g_gamma, j_a u_gamma=Pi_a g_gamma.

This proves the exact bound J_a(gamma,gamma)<=1/m_gamma and, using Pi_a->I strongly,

    J_a(gamma,rho)->delta_(gamma,rho)/m_gamma          (K02.2)

for every pair of sampled real ordinates, with no normalization. The diagonal is monotone nondecreasing because the local subspaces are nested. This retains actual xi multiplicities, unlike Delta, which has a simple zero at each distinct ordinate. Define delta_a(gamma)=||(I-Pi_a)g_gamma||->0. Then J_a(gamma,gamma)=1/m_gamma-delta_a(gamma)^2 exactly, and the off-diagonal difference from the limit is bounded by delta_a(gamma)delta_a(rho) by orthogonal decomposition and Cauchy–Schwarz.

For a fixed sampled gamma and arbitrary z in a fixed compact, (K02.1) and weak escape h_a give J_a(gamma,z)/M_a->0 uniformly: the leading scalar product <Pi_a g_gamma,h_a>=<g_gamma,h_a> tends to zero, and the normalized error is O(d_a) relative to P_a. More explicitly |J_a(gamma,z)|/M_a <= |P_a(z)| |<g_gamma,h_a>| + O_K(d_a)/sqrt(m_gamma). By Hermitian symmetry the same holds in the other argument. Thus a mixed kernel is o(M_a), a stronger conclusion than the all-point rank-one normalization by M_a^2, but this does not establish its unnormalized finite limit or divergence.

A further exact rate constraint at sampled points follows from K01.1. Since C g_gamma=g_gamma/gamma and B_a=Pi_a C Pi_a,

    P_a(gamma) M_a h_a=(I-gamma B_a)Pi_a g_gamma
                       =gamma Pi_a C(I-Pi_a)g_gamma.

Consequently |P_a(gamma)| M_a <= |gamma| ||C|| delta_a(gamma), in particular P_a(gamma)=o(1/M_a). This uses the norm of the actual representer and the actual projection defect; no upper estimate for M_a or quantitative d_a is inferred.

## 4. The microscopic ordinate boundary layer

The normalization M_a^2 suppresses the finite diagonal at Gamma. There is nevertheless a nontrivial joint limit on the scale 1/M_a, established here without any additional rate assumption.

Fix gamma,rho in Gamma and complex parameters eta,zeta in arbitrary bounded sets. By (K02.1) for the first derivative at gamma and the uniform bound on the normalized second derivative on a fixed disk, Taylor's formula for the vector-valued analytic function gives

    u_(gamma+conj(eta)/M_a)
        =u_gamma+conj(eta) Delta'(gamma)e_a+o(1)

in H_a, uniformly in bounded eta. Indeed the linear term uses u'_gamma/M_a=Delta'(gamma)e_a+o(1); the second-order error after multiplying the normalized Taylor formula by M_a is O(1/M_a), which tends to zero by L02. The same holds at rho with zeta. Under j_a the two baseline vectors converge strongly to g_gamma and g_rho; h_a is unit and weakly tends to zero. Their cross terms with h_a tend to zero uniformly in bounded parameters. Taking the kernel inner product and using that Delta' is real on real points proves

    J_a(gamma+eta/M_a,rho+zeta/M_a)
       -> delta_(gamma,rho)/m_gamma
          + conj(eta) zeta Delta'(gamma) Delta'(rho).    (K02.3)

Convergence is uniform on bounded parameter products. In particular the diagonal at a single ordinate has the finite profile

    J_a(gamma+zeta/M_a,gamma+zeta/M_a)
       -> 1/m_gamma+|zeta|^2 |Delta'(gamma)|^2.

The canonical product has simple zeros at each distinct gamma, since the remaining product converges absolutely and has no zero there; Delta'(gamma)!=0. Hence this is a genuine nonconstant transition, even if xi has higher multiplicity. The sampling multiplicity survives in the constant term. This microscopic result is stronger than the leading normalized kernel statement and makes the scale explicit in terms of the actual evaluation norm, not an estimated exponential equivalent.

For additional clarity about the scale, if w_a=gamma+epsilon_a with epsilon_a->0 and M_a |epsilon_a|->infinity, the same Taylor argument (with the second derivative bounded after normalization) gives

    u_conj(w_a)/(M_a conj(epsilon_a)) - Delta'(gamma)e_a ->0.

Indeed the baseline bounded term divided by M_a conj(epsilon_a) tends to zero, and the quadratic error in the divided Taylor formula is O(|epsilon_a|). Therefore J_a(w_a,w_a)/(M_a^2 |epsilon_a|^2)->|Delta'(gamma)|^2 and the diagonal diverges. If M_a |epsilon_a|->0 the diagonal instead tends to 1/m_gamma. These statements are for a fixed gamma, not uniform over all ordinates. They resolve the transition in the diagonal and nearby two-point kernels; they do not determine the unnormalized mixed kernel for fixed nonzero separation.

## 5. Scope and next step

Source conventions and projections checked against the primary HTML noted in §1. The vector maximum modulus, projection identities, microscopic scaling and Taylor limit are new deductions within the project; no priority claim. L03-W03's completed worker audit has been inspected at pinned head 6fe1cdca1827b62450304bacdfb96cb84a069f2a; it concerns Campaign VII only, with no counterexample within its checked scope, not K01/K02. Lead acceptance separately recorded. No numerical or Lean verification in this milestone; no human review or full solution of Suzuki's general boundary-limit question. The actual magnitude of J_a(gamma,z) with fixed z off Gamma remains open beyond the sublinear bound above. No external submission.

K03: use K01 and the exact characteristic W(a,theta;z) to derive a compact-uniform normalized entire limit for arbitrary phases; phase zero requires a normalization not dividing by its zero characteristic at z=0. Candidate route: u_±i=P_a(i) R_a(±i)v, P_a even; apply K02 to J_a(±i,z)/M_a^2 and substitute in the boundary characteristic. Check common normalization and factor z cos(theta/2)-sin(theta/2) or equivalent phase combination explicitly, including the relative sign against Campaign VII's tan(theta/2) mode. No new result claimed here for K03.

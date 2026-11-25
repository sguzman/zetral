# R02 — Microscopic avoided crossing at a tuned phase

25 November 2026. Conditional on RH and the Suzuki compression and characteristic theorems, with the candidate deductions of Campaigns VII–VIII and R01. Internal analytic proof; no established novelty, human review or formal certification.

## 1. Setting and verified imports

Reopened the actual primary HTML in this turn: Suzuki, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, Theorems 1.1–1.2 (HTML lines 61–85), equation (3.3), Lemma 3.2 (lines 317–366), Theorem 3.3 (lines 367–377). Also opened arXiv:2606.09096v4, https://arxiv.org/html/2606.09096v4, Theorem 1.5 (lines 204–215). These establish the distinguished spectral convergence, phase characteristic and self-adjoint extension setting, not the tuned asymptotic below. Read the exact repository R01 and K03 notes. Their internal deductions are explicitly used as hypotheses here.

Fix a distinct positive ordinate gamma, multiplicity m_gamma. Write t=t_a=t_(a,pi,n)->gamma for its distinguished simple local eigenvalue, C_a=D_(a,pi)^(-1), M=M_a=||u_0||_q->infinity, e=e_a=u_0/M, E=E_(t_a) for the orthogonal projection onto the inverse eigenvalue 1/t. Put beta^2=||Ee||_q^2 and d_a=||C_a e||_q->0. R01 gives

    M(t-gamma)->0,
    M^2 beta^2 -> L_gamma=1/(m_gamma gamma^2 |Delta'(gamma)|^2)>0.

Here Delta is the canonical product over distinct positive ordinates, so Delta'(gamma)!=0 even if xi has a multiple zero. Define the positive coupling constant

    c_gamma=gamma sqrt(L_gamma)=1/(sqrt(m_gamma)|Delta'(gamma)|).

The symbols m_a(z)=q((I-z C_a)^(-1)e,e) and m_gamma (a positive integer) must not be confused.

## 2. Pole subtraction and the resonance center

Choose a fixed radius R>0 sufficiently small that the closed disk |z-gamma|<=2R contains no other global ordinate and excludes zero. For all sufficiently large a, P_a=W(a,pi;z)/W(a,pi;0) has precisely one zero in this disk, t, by uniform convergence to Delta and Rouche. The spectral theorem separates the simple local pole:

    m_a(z)=beta^2/(1-z/t)+r_a(z),

where r_a is holomorphic on the disk and real on its real diameter. It equals the scalar resolvent of C_a on E^perp against (I-E)e.

On the boundary of the disk, norm convergence of the global inverse compression gives uniformly bounded resolvents for all large a. Reflection, as in K03, gives m_a(z)-1=z^2 q((I-z C_a)^(-1) C_a e,C_a e)=O_gamma(d_a^2) there. The subtracted term is O_gamma(beta^2), since the circle is a fixed positive distance from t. Moreover beta^2/t^2<=d_a^2 by the spectral theorem. The maximum modulus principle applied to r_a-1 therefore gives

    sup_(|z-gamma|<=2R) |r_a(z)-1|=O_gamma(d_a^2).

Cauchy estimates on the smaller disk give r_a'=O_gamma(d_a^2) and r_a''=O_gamma(d_a^2). No claim is made that M d_a^2->0.

Define the real analytic function f_a(z)=eta_a z r_a(z), with eta_a=1+O(d_a^2) from L01. On |z-gamma|<=R,

    f_a(z)=z+O_gamma(d_a^2),
    f_a'(z)=1+O_gamma(d_a^2),
    f_a''(z)=O_gamma(d_a^2).

In particular the exact regular-part tuning is

    tau_a^0=f_a(t)=eta_a t r_a(t)>0 eventually,
    tau_a^0=t+O_gamma(d_a^2)->gamma.                 (R02.1)

For phases theta near 2 arctan(gamma), choose tau=tan(theta/2)>0, so theta=2 arctan(tau) in (0,pi). The phase cosine does not vanish. K03.2 gives the exact normalized characteristic

    F_(a,theta)(z)=cos(theta/2) P_a(z) [eta_a z m_a(z)-tau].

Since P_a has a simple zero at t and no other zeros on the disk, P_a(z)/(z-t) is holomorphic and nonvanishing there. Therefore the zeros of F on the disk, including their multiplicities, are exactly the zeros of

    G_a(z;tau)=(z-t)[f_a(z)-tau]-eta_a z t beta^2.    (R02.2)

This is an analytic equation with no pole; its value at t is -eta_a t^2 beta^2<0. The sign is essential: the two-root limit is an avoided crossing, not a complex pair. Equation R02.2 does not artificially add a root at t.

## 3. Uniform microscopic law

Let sigma be a real parameter in any fixed compact interval [-S,S] and tune the phase by

    tau=tau_a^0+sigma/M.
    theta_a(sigma)=2 arctan(tau).

With y=M(z-t), the exact equation becomes

    M^2 G_a(t+y/M;tau)
       = y [M(f_a(t+y/M)-f_a(t))-sigma]
           -eta_a (t+y/M)t M^2 beta^2.

On each bounded complex y disk, Taylor's formula and the uniform derivative estimates in section 2 give M(f_a(t+y/M)-f_a(t))=y+O_gamma(d_a^2)|y|+O_gamma(d_a^2)|y|^2/M. The final term tends to gamma^2 L_gamma=c_gamma^2 uniformly on the disk, by R01. Hence

    M^2 G_a(t+y/M;tau_a^0+sigma/M)
             -> y^2-sigma*y-c_gamma^2                (R02.3)

uniformly for bounded complex y and real |sigma|<=S. More explicitly the compact error is bounded by a constant depending on the compact and gamma times d_a^2+|t-gamma|+1/M+|M^2 beta^2-L_gamma|, which tends to zero. No unproved rate in a for these quantities is used.

The limiting polynomial has distinct real roots

    y_-(sigma)=(sigma-sqrt(sigma^2+4 c_gamma^2))/2<0,
    y_+(sigma)=(sigma+sqrt(sigma^2+4 c_gamma^2))/2>0.

Their separation is at least 2 c_gamma; for bounded sigma both are uniformly separated from zero. For any sufficiently small epsilon>0 (less than c_gamma and half the minimum distance to zero on [-S,S]), circles of radius epsilon about the two roots are disjoint. On either circle the product modulus of the limiting polynomial is at least epsilon(2 c_gamma-epsilon), uniformly in sigma. All circles lie in a fixed bounded y disk. R02.3 and Rouche show that each contains precisely one zero of the scaled analytic function for all sufficiently large a, uniformly in sigma. Its reality follows either from the real entire characteristic and uniqueness in a conjugation-invariant disk or from the local self-adjoint spectrum. The zeros are distinct and one is below t and one above t. To exclude additional zeros in the original fixed neighborhood, on |z-gamma|=R the unscaled equation R02.2 tends uniformly in bounded sigma to (z-gamma)^2, which is nonzero there. Rouche gives precisely two zeros in that disk. Thus the two just found account for the full local cluster.

Denote the corresponding ordered differentiation eigenvalues by z_(a,-)(sigma)<z_(a,+)(sigma). The preceding arbitrary epsilon argument proves

    M [z_(a,±)(sigma)-t] -> y_±(sigma)                (R02.4)

uniformly in real |sigma|<=S. Since M(t-gamma)->0, gamma can replace t in the centering in R02.4. At the tuned center sigma=0,

    z_(a,±)(0)=gamma ± c_gamma/M + o(1/M),
    z_(a,+)(0)-z_(a,-)(0) = 2 c_gamma/M + o(1/M).     (R02.5)

For all bounded sigma the scaled gap tends uniformly to sqrt(sigma^2+4 c_gamma^2), whose minimum is 2 c_gamma. In particular the minimum scaled gap over any fixed symmetric bounded detuning interval tends to 2 c_gamma, since uniform convergence permits taking infima and the interval contains zero. This is not a claim about the global minimum gap over all phases or all ordinates.

## 4. Phase coordinates, scale, and limits of the assertion

In the original angular coordinate the center is theta_a^0=2 arctan(tau_a^0). For bounded real k, a phase theta=theta_a^0+k/M gives M(tan(theta/2)-tau_a^0)->(1+gamma^2)k/2 uniformly on bounded k by Taylor's formula. Thus the same law holds with sigma=(1+gamma^2)k/2. The angular scale is also 1/M, with that conversion factor.

From L02's lower bound for M, with X=exp(2a), the tuned gap is O_gamma(X^(7/4) sqrt(log X) exp(-pi X)). The asymptotic equivalent is relative to M, not to this explicit bound in X. The lower bound for M does not yield a matching lower bound for the gap in X.

For the fixed resonant phase tau=gamma, the relevant detuning is sigma_a=M(gamma-tau_a^0). Equation R02.1 gives only |sigma_a|<=O_gamma(M d_a^2)+o(1). No result in this note establishes boundedness of M d_a^2, convergence of sigma_a, or sigma_a->0. If sigma_a tends to a finite sigma, R02.4 applies with that value; otherwise one must analyze the larger-detuning regime. Consequently it would be incorrect to identify the fixed phase tau=gamma with the tuned center or assert a fixed-phase symmetric gap. R03 will investigate that distinction and eigenvector mixing.

The square-root two-level law is standard in avoided-crossing theory; the specific coefficient c_gamma and tuning derived from the local Weil-form resolvent are the project's internal conditional deductions. No novelty claim. No actual numerical arithmetic eigenvalue solve or formal verification performed. The primary-source statements in section 1 were verified directly in the current tool results; earlier source-access and numerical-rerun descriptions are not treated as fresh evidence. K02-W04 branch lookup returned 404 again, with no worker evidence; no independent audit of VIII/IX is claimed. No external submission.

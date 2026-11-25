# RHI01 — Relative heat trace below the absolute trace threshold

2026-11-25. AI-assisted internal candidate deduction without RH, using the actual ordinary arithmetic operator and its pole-removed version. No independent review, numerical calculation or originality claim. The semigroup and finite-rank trace manipulations are standard; the application is the research target.

Fix a>0, I=(-a,a), L=2a, T=A_alpha-P, A=T+H as in AJP01. Let c=cosh(x/2), s=sinh(x/2), H=2 c tensor c-2 s tensor s. Both A,T are self-adjoint semibounded compact-resolvent operators on L²(I), with common operator domain since P,H bounded. Define
    F_a(t)=tr(e^(-t A)-e^(-t T)), t>0.

## 1. Exact absolute heat-trace threshold

For either B=A or T write its form as the compressed alpha multiplier plus bounded self-adjoint perturbation V. For a unit eigenvector f_j, lambda_j>=int alpha(omega)|Ff_j(omega)|² d omega/(2pi)-||V||. Jensen for the convex exponential therefore gives
    exp(-t lambda_j)<=exp(t||V||) int exp(-t alpha(omega)) |Ff_j(omega)|² d omega/(2pi).
By Parseval in the orthonormal eigenbasis of L²(I), sum_j |Ff_j(omega)|²=L for each omega (the plane wave restricted to I has squared norm L). Tonelli and alpha(omega)=log(2+|omega|)+O(1) show tr exp(-tB)<infinity for t>1.

Conversely let E_n be the span of the first n Dirichlet Laplacian eigenvectors on I. Zero extension of a unit f in E_n is in H¹(R) and ||f'||_2<=n pi/L. The upper symbol bound alpha<=C+(1/2)log(1+omega²) (adjust C) and concavity of log give
    q_B(f)<=C+||V||+(1/2)log(1+(n pi/L)²).
By min-max, lambda_n<=log n+C_a for all n>=1 with a fixed constant depending on a and B. Consequently sum_n exp(-t lambda_n) diverges for every 0<t<=1. This proves the exact threshold for each fixed nonzero window, for both ordinary operators, without assuming a Weyl law or RH. No assertion about the residue at the threshold.

## 2. Relative trace exists even for 0<t<=1

Duhamel's identity for a bounded perturbation, obtained by differentiating on the common operator domain and extending by density, is
    e^(-tA)-e^(-tT)=-int_0^t e^(-(t-r)A) H e^(-rT) dr.
The integrand is trace-class with norm <=||H||_1 exp(t C_a), where C_a=max(0,-inf sigma A,-inf sigma T). It is trace-norm continuous in r on the closed interval: expand the finite-rank H into its two rank-one terms and use strong continuity of the semigroups on the two vectors. Thus the integral exists in trace norm and
    ||e^(-tA)-e^(-tT)||_1<=t||H||_1 exp(t C_a).
In particular F_a(t) is defined for every t>0; at t<=1 it is the trace of the difference, NOT the subtraction of two infinite traces. Using real eigenvectors for H (orthogonality of c,s), its integrand trace is a signed sum of scalar products between e^(-rT)u and e^(-(t-r)A)u for u=c,s, with their respective coefficients +2,-2.

## 3. Rigorous second-order short-time expansion

The zero extensions of c and s have bounded variation and compact support at fixed a. Their Fourier transforms are bounded by C_a min(1,1/|omega|). Hence alpha times each transform lies in L², and they belong to the support log form domain by bounded-BV approximation (LBS01). The form representation then puts c,s in Dom A_alpha and the action is the compression of the full-line multiplier. Bounded P,H give c,s in Dom A=Dom T.

For such a vector u, strong differentiability at zero gives e^(-vB)u=u-v Bu+o(v) for B=A,T. Uniformly for 0<=r<=t, each remainder is o(t) by the definition of differentiability at zero. Inserting these expansions into the rank-one trace integrand yields
    tr[e^(-(t-r)A) H e^(-rT)]
      =tr H -(t-r) tr(AH)-r tr(TH)+o(t),
uniformly in r, using self-adjointness and real traces. Here AH,TH are bounded finite-rank operators, defined by the domain inclusion; no unbounded cyclic-trace maneuver is needed. Integrating gives the fixed-window expansion
    F_a(t)=-t tr H + (t²/2)[2 tr(TH)+tr(H²)] + o(t²).
In particular tr H=2(||c||²-||s||²)=4a=2L. The second coefficient is finite even though both absolute traces diverge at all sufficiently small positive times. This does not assume convergence of a higher power series or the existence of a differentiable family in a. RHI02 will evaluate the second coefficient entirely arithmetically and derive its threshold singularities.

No RH proof, actual off-line zero, ordinary anomaly, numerical run or independent review. README unchanged.

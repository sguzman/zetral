# RHI03 — Parity relative spectral shift and recovery of the pole capacity

2026-11-25. Internal candidate deduction, without RH. The general trace and perturbation determinant identities are classical Krein spectral-shift theory; fresh HTML search excerpts from *Spectral shift functions and Dirichlet-to-Neumann maps*, https://pmc.ncbi.nlm.nih.gov/articles/PMC6407858/, and *Spectra of rank-one perturbations of self-adjoint operators*, DOI 10.1016/j.laa.2020.09.027, explicitly identify the established trace and resolvent formulas. No claim of novelty for them. The following gives a direct proof in the fixed-window setting.

In either parity sector write B=T+sigma u tensor u, with sigma=+2,u=c for even and sigma=-2,u=s for odd. Write F(t)=tr(e^(-tB)-e^(-tT)). For real lambda let N_T(lambda), N_B(lambda) count eigenvalues <=lambda, with multiplicities. They vanish below a common lower bound. By the rank-one min-max principle their difference xi=N_T-N_B takes only values 0,1 in the even sector and 0,-1 in the odd sector, apart from the harmless eigenvalue endpoint convention.

## 1. Relative heat is a signed Laplace transform at every positive time

For t>1 absolute traces converge by RHI01 (also in each sector), and integration by parts of the discrete counting functions gives
    F(t)=-t int_R exp(-t lambda) xi(lambda) d lambda.
Indeed the boundary term at infinity vanishes, e.g. the difference of counts is bounded and one can integrate the difference directly via the eigenvalue counting measures; the lower boundary term is zero. Extend to all t>0 by analyticity: the difference for complex z with Re z>0 equals
    -z int_0^1 e^(-(1-r)z B) sigma(u tensor u) e^(-r z T) dr.
The formula follows first for positive real z and then by scalar analytic continuation of the bounded-operator Duhamel integral. On every compact subset of the open right half-plane the integrands are uniformly trace-norm bounded by semiboundedness and finite rank; for 0<r<1 they are holomorphic in trace norm by strong holomorphy on the rank-one vectors, and the endpoints have measure zero. Dominated integration (or Morera) proves trace-norm holomorphy. The bounded xi supported above a fixed lower bound makes its Laplace expression holomorphic on the same region, so the identity theorem gives the asserted extension. No subtraction of divergent heat traces occurs.

In particular F_e(t)<0 and F_o(t)>0 for every t>0. Strictness follows since xi has constant sign and cannot vanish a.e.: RHI01 gives F(t)/t -> -sigma||u||² !=0. Monotone convergence in the integral as t decreases to zero after shifting lambda by the common lower bound yields
    int |xi(lambda)| d lambda=|sigma| ||u||².
This is the classical rank-one spectral-shift mass rule, here also verified by the short-time coefficient.

The exact relative heat function for all t>0 determines xi a.e. by uniqueness of the Laplace transform: subtract two bounded candidates supported above a common lower bound, multiply by exp(-lambda) to obtain a finite signed measure, and push forward by x=exp(-(lambda-lower_bound)) to [0,1]. Vanishing Laplace values at positive integers imply all its polynomial moments vanish; polynomial density in continuous functions gives the zero measure. Since both counting functions are right-continuous step functions with locally finite jumps, the a.e. recovery determines their difference everywhere by right limits. It determines differences of multiplicities, not common eigenvalues that cancel.

## 2. Exact recovery of the scalar pole resolvent

For real z below both spectra the trace-norm Duhamel bound in RHI01 permits Laplace integration, giving
    int_0^infinity exp(tz) F(t) dt
       =tr[(B-z)^-1-(T-z)^-1].
The exact rank-one resolvent identity (verify by multiplying by B-z) gives for m(z)=<u,(T-z)^-1u> and d(z)=1+sigma m(z)
    tr[(B-z)^-1-(T-z)^-1]=-sigma m'(z)/d(z)=-d'(z)/d(z).
Here d>0 below both spectra, as follows either from monotone eigenvalue form comparison for sigma<0 or directly from the strictly positive conjugated rank-one form of B-z; and m'(z)=||(T-z)^-1u||². Since d(z)->1 as z->-infinity, integrate:
    log d(z)=-int_0^infinity exp(tz) F(t)/t dt.
Indeed integrate the first transform from -infinity to z; F(t)=O(t) near zero and the large-time bound from RHI01 guarantees absolute convergence for z below the common lower bound. Thus the complete relative heat trace uniquely determines m on that interval, and hence its meromorphic continuation by the identity theorem. This is the classical perturbation determinant relation specialized to the rank-one parity poles. On regular real z the recovered d gives AJP02's secular test; at singular z one must still account for uncoupled eigenvectors and nullity. In particular full positivity cannot follow from knowing just the signs of the two relative heat traces: those signs hold regardless of RH.

No new actual eigenvalue, numerical result, RH proof, or independent verification. RHI03 complete as candidate; RHI04 audit and assess higher-coefficient inverse information.

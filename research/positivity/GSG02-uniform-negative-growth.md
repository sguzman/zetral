# GSG02 — Uniform exponential negative-growth lower bound

2026-11-25. Internal candidate deduction, without RH, building on GSG01 (b0dfa41fdf915a28609f27b49d46da958e60e21a). No independent human review, numerical/formal verification or priority claim. Source import is the unconditional paired-zero identity and absolute convergence in GSG01, Suzuki arXiv:2606.09096v4 (3.1), not a fresh full-text reinspection. Current prior-art search returned NIST DLMF 25.10 for strip/symmetries; arXiv:2607.24830 abstract mentions exponential blow-up from an injected off-line zero in numerical residuals, not a proof of the all-window inequality below. Full comparison outstanding.

## Claim

Let Gamma consist of distinct complex ordinates z=(rho-1/2)/i with multiplicities m_z, and B=sup |Im z| in [0,1/2]. Define N(a)=max(0,-lambda_1(A_a)). We prove liminf_{a->infinity} log(1+N(a))/a >= 2B. In particular if RH fails, for every 0<eta<2B, N(a)>=exp(eta a) for all sufficiently large a. A matching upper bound for the full negative bottom remains GSG03.

If B=0 the lower bound is trivial. Otherwise fix a compact smooth test f supported strictly in (-b,b), L2 normalized, whose Fourier transform F[f](z)=int f(x)e^(izx)dx does not vanish at any z in Gamma. Existence follows from GSG01's countable dilation-exception argument. Set c_z=m_z F[f](z)conj(F[f](conj z)); sum |c_z| is finite and all c_z!=0. The correlation C(t)=q(T_t f,f)=sum c_z e^(itz) is continuous and |C(t)|<=||c||_1 exp(Bt) for t>=0. Its meromorphic Laplace transform has nonremovable poles at iz, so limsup log(1+|C(t)|)/t=B: a strictly smaller exponent would make the integral holomorphic past a pole. GSG01's two-translate Rayleigh matrix gives N(a)>=|C(t)|-q(f,f) for 2b<=t<=2(a-b). Monotonicity alone cannot upgrade a sparse subsequence to a uniform rate.

## Moving compact filter

Fix z0=u0-i d in Gamma with d>0, 0<epsilon<1, h>0. Choose 0<r<1 with (epsilon/h) log(1/r)>B-d. Let g(x)=exp(-iu0 x)/(2h) on [-h,h], zero elsewhere. Its L1 norm is one. F[g](z)=sinc(h(z-u0)); F[g](z0)=sinh(hd)/(hd)>=1. Uniformly in the strip |Im z|<=1/2, for |Re z-u0|>R we have |F[g](z)|<=exp(h/2)/(hR). Choose R large enough to make this <=r.

Gamma_R={z in Gamma: |Re z-u0|<=R} is finite. Choose compact smooth chi with F[chi](z0)!=0 and let p(z)=product_{w in Gamma_R excluding z0}(z-w). Set k0=p(i d/dx)chi/(p(z0)F[chi](z0)). Then F[k0](z0)=1, F[k0](w)=0 at all other w in Gamma_R. This complex-valued smooth kernel is supported in a fixed [-h0,h0], with finite L1 norm A>0. On the closed strip |F[k0](z)|<=A exp(h0/2)=M. The constants may be huge but do not depend on T or a.

For large T put n=floor(epsilon T/h) and k_T=k0*g^{*n}. It has L1 norm <=A and support inside [-h0-nh,h0+nh]. Local uniform convergence of C justifies termwise integration:

I_T=int k_T(x)C(T+x)dx = sum_z c_z e^(iTz) F[k0](z)F[g](z)^n.

The z0 contribution has modulus >=|c_z0| exp(dT). All other terms of Gamma_R vanish exactly. All remaining terms together are bounded by M||c||_1 exp(BT)r^n <= M||c||_1 r^-1 exp((B+(epsilon/h)log r)T)=o(exp(dT)). Therefore, for every sufficiently large T,

max_{|x|<=h0+nh}|C(T+x)| >= |I_T|/A >= |c_z0| exp(dT)/(2A).

This filter operates on the correlation, not on the original fixed trial f. It cancels finitely many zeros exactly and suppresses the rest, including zeros with deviation larger than d. It is a theoretical proof device depending on hypothetical zero information, not a practical independent zero-finding algorithm.

## Transfer to every large window

For sufficiently large a, choose T=(2(a-b)-h0)/(1+epsilon). Then T+h0+nh<=2(a-b), while T-h0-nh>=(1-epsilon)T-h0 tends to infinity and is eventually >=2b. A maximizing t exists by continuity. The two translates of f by +/-t/2 are orthonormal and supported strictly inside (-a,a), and their form matrix has diagonal q(f,f) and off-diagonal C(t),conj C(t). Thus N(a)>=|c_z0| exp(dT)/(2A)-q(f,f). For all sufficiently large a this is >=C exp(2d a/(1+epsilon)) for a positive constant C. Let epsilon decrease to zero and d approach B from below; liminf log(1+N(a))/a >=2B. No need for supremum attainment. For any eta<2B choose an intermediate exponent and absorb the constant to obtain N(a)>=exp(eta a) eventually.

The same filter and the fixed-f correlation upper bound give lim_{a->infinity} a^-1 log(1+max_{2b<=t<=2(a-b)} |C(t)|)=2B, including B=0. This is an exact rate for the restricted two-translate detector, NOT an upper estimate for the full operator bottom.

## Checkpoint

GSG02 mathematically complete as internal candidate. Next GSG03: matching upper rate for N(a), controlling the negative paired-zero contribution uniformly in arbitrary tests, rather than fixed-f estimates. GSG04 consolidate and pivot. No RH proof, independent human review, formal or numerical check. Current search: https://dlmf.nist.gov/25.10 and https://arxiv.org/abs/2607.24830 abstract. Main GSG02 write timed out, then readback returned 404. Other recovery and worker integration gaps remain; see COORDINATION.md. No repo rule changes. Resume from this proof if remote write fails; do not duplicate the mathematical milestone.

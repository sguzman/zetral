# B5-07 — Clark spectral model of the normalized endpoint space

Date: 2026-11-27. Status: RH-conditional model identification; no new
zero-independent operator.

Use B5-05's limiting inner function

    Theta_0=(1+i q)/(1-i q),
    q(z)=-F'(z)/F(z),  F(z)=xi(1/2-iz).

For Clark parameter `alpha=-1`, the positive-real-part function is

    C_(-1)(z) = (alpha+Theta_0(z))/(alpha-Theta_0(z)) = -i q(z).

Therefore `Re C_(-1)=Im q`. Under RH, `q` is Herglotz, and at every real
zero `r` of `F` of multiplicity `m_r`,

    q(z) = -m_r/(z-r) + holomorphic,
    Re C_(-1)(x+iy) has local Poisson atom
        m_r y/((x-r)^2+y^2).

There is no continuous measure component: `q` continues meromorphically
through every real interval away from the xi zero ordinates. There is no
linear mass at infinity either. At `z=iy`, `q(iy)=i xi'(1/2+y)/xi(1/2+y)
=O(log y)` by Stirling and the absolutely convergent logarithmic derivative
of zeta for real `s>1`, so the Herglotz linear coefficient
`lim_(y->infinity) Im q(iy)/y` is zero. Thus the Clark measure, in the
unnormalized Poisson-kernel convention `Re C(z)=integral Im(z)/|t-z|^2
dmu(t)`, is

    mu_0 = sum_(F(r)=0) m_r delta_r.

Clark's model theorem gives the corresponding model-space unitary extension
with this measure; after the Cayley transform, its self-adjoint spectral
model is multiplication by `t` on `L^2(mu_0)`. Its spectrum is the distinct
signed xi ordinates, with one-dimensional eigenspaces and weights `m_r` in
the cyclic spectral measure. This is precisely the zero-defined operator
model already present in B3-09/B3-10, now obtained from the normalized
de Branges endpoint pair. It is RH-conditional and not an independent
Hilbert-Pólya construction.

B5-06 shows the corresponding finite-shift Clark/Herglotz measures
`mu_omega` converge vaguely to `mu_0`. This identifies the limiting
spectral measure and the natural normalized model-space limit, but does not
identify the varying self-adjoint operators on a common domain. In
particular, vague convergence of measures and strong convergence of model
space projections do not by themselves prove strong-resolvent convergence.
Multiplicity fibers or another explicit unitary identification would still
be needed for that claim; B3-12 supplies a noncanonical spectral-basis
construction under RH.

## Literature and verification

Clark's unitary model for rank-one perturbations of restricted shifts is
prior art: D. N. Clark, *One-dimensional perturbations of restricted
shifts*, J. Analyse Math. 25 (1972), 169–191,
[DOI 10.1007/BF02790036](https://doi.org/10.1007/BF02790036). The half-plane
Herglotz normalization is stated explicitly above to fix the atom factor.
The algebra `C_(-1)=-iq`, residue sign, absence of a linear term, and
identification with the B3-09 zero measure were checked directly. No
numerical zero data or formal verification is used.

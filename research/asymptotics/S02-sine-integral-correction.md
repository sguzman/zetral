# S02 — Explicit positive sine-integral correction

25 November 2026. Unconditional candidate derivation using the established local-form and phase-pi extension imports documented in S01. No RH assumption; no claim of originality, independent human review, or formal verification. Fixed index n throughout.

## Result

Put s_n=(n-1/2)pi and ell=log(1/a). As a tends to zero through positive windows, the exact positive phase-pi differentiation eigenvalues obey

    a t_(a,n) = s_n + Si(2s_n)/(2 ell) + O_n(ell^(-2)),

where Si(z)=integral_0^z sin(t)/t dt. The coefficient is strictly positive for every n. This is a small-window local result, not a statement about global zeta ordinates. It improves S01's unspecified O(1/ell) error, with an explicit nonzero first correction and a second-order remainder.

## 1. Evaluate the characteristic correction

Retain S01's notation c=c(a)=-log(4pi)-gamma_E-log(tanh a), B the positive closed scaled shift operator, b_0=B1=log 2-(1/2)log(1-y^2), By=y(b_0+1). F_1[g](s)=(1/2)integral_(-1)^1 g(y)exp(isy)dy.

S01 derives the normalized entire characteristic C_a(s)=cos s-G(s)/c+o_K(1/c) on each complex compact K, where G=F_1[b_0]+is F_1[y(b_0+1)]. To evaluate it let H=F_1[b_0]. Since b_0 is even and equals -1/2 log((1-y)/2)-1/2 log((1+y)/2), parity and substitution t=1-y give

    H(s)=-(1/2) integral_0^2 log(t/2) cos(s(1-t)) dt.

For s!=0 integrate by parts with the primitive [sin s-sin(s(1-t))]/s anchored at t=0. The product with log(t/2) vanishes at 0 because the primitive is O(t); it also vanishes at 2. Thus

    s H(s)=(1/2) integral_0^2 [sin s-sin(s(1-t))] dt/t
          =(1/2)[sin s Cin(2s)+cos s Si(2s)],

where Cin(z)=integral_0^z (1-cos t)/t dt. Both special functions are entire by their power series (standard definitions, NIST DLMF §6.2, https://dlmf.nist.gov/6.2). These identities hold on the entire complex plane by removable extension and analytic continuation. Differentiating under the integral is justified by integrable endpoint logarithms and uniform boundedness of the exponential on compact s-sets. Now

    G(s)=(s H(s))'+s sinc'(s).

Using Cin'(2s) times 2=(1-cos(2s))/s and the corresponding derivative sin(2s)/s for Si, the differentiated cross terms sum to sin(s)/s. Since s sinc'(s)=cos s-sin(s)/s, they cancel. Therefore

    G(s)=cos s [1+(1/2)Cin(2s)]-(1/2)sin s Si(2s).   (S02.1)

At s=0 the formula gives G(0)=1, consistent with integral_0^1 b_0=1. At s_n, G(s_n)=-(1/2) sin(s_n) Si(2s_n) and cos'(s_n)=-sin(s_n); their ratio is positive Si(2s_n)/2. This checks the displacement sign using the characteristic convention from S01.

## 2. Second-order output bound without a B^2 domain assumption

The strong vector expansion in S01 has an o(1/c) remainder. For scalar Fourier outputs we can improve this to O(c^-2) without proving g in Dom B^2. Use the Hilbert inner product linear in its first argument, R_c=(cI+B)^(-1), and h_s(y)=exp(-i conjugate(s)y). Then 2F_1[g](s)=<g,h_s>.

For every complex compact K, h_s belongs to Dom B, with sup_(s in K)||B h_s||_2 finite. Indeed its zero extension has uniformly bounded L1 norm and variation, hence Fourier decay O_K(1/|z|) on the real axis. The logarithmic form norm and core property of S01 put h_s in the form domain. On (-1,1) its supremum and Lipschitz constant are bounded uniformly on K, respectively by exp(max_K|Im s|) and max_K|s| exp(max_K|Im s|). The shift difference satisfies

    ||(2I-S_h)h_s||_2 <= 2 Lip(h_s) h sqrt(2)+2 sup|h_s| sqrt(h).

Integrating dh/(2h) from 0 to 2 gives a finite uniform norm bound, and the form representation argument in S01 identifies the vector integral with B h_s. In particular the two scalar test vectors g=1,y and h=h_s are in Dom B; no claim about B^2g is needed.

For g,h in Dom B, self-adjointness, spectral calculus and cR_c contraction give the exact identity

    <cR_c g-g+Bg/c,h> = (1/c^2)<Bg,cR_c Bh>.

To see this, cR_c g-g=-R_c Bg and I-cR_c=R_c B on Dom B. Move the bounded self-adjoint I-cR_c to the second argument; (I-cR_c)h=R_c Bh. The modulus is at most ||Bg||_2 ||Bh||_2/c^2. This also shows that the rescaled scalar remainder converges to <Bg,Bh> as c tends to infinity, by strong cR_c->I. No uniform norm convergence or unbounded Neumann series is used.

From S01, the bounded perturbation E_a is O(a), hence ||cR_a-cR_c||=O(a/c), with R_a=(cI+B+E_a)^(-1). The scaled forcing errors cosh(ay)-1 and sinh(ay)/a-y are O(a^2) in L2. Since c=ell+O(1), both a/c and a^2 are o(c^-2). Thus applying the scalar identity to both outputs, including multiplication by is on compact K, yields

    C_a(s)=cos s-G(s)/c+O_K(c^-2).                  (S02.2)

This is a uniform scalar statement, not a second-order L2 vector expansion. The compact bounds on the test function derivatives above give explicit finite constants in principle; no numerical optimal constant is claimed.

## 3. Ordered root expansion and sign

Let z_n(a)=a t_(a,n), the nth positive real zero of C_a. S01's unconditional local spectral characterization and Rouché prefix counts identify this zero near s_n. By C04's compact estimate or S02.2, z_n-s_n=O_n(1/c) since cos has a simple isolated zero there. Taylor expand cos about s_n and G about s_n (G entire); then

    0=cos'(s_n)(z_n-s_n)-G(s_n)/c+O_n(c^-2).

Since cos'(s_n)!=0, substitution of S02.1 gives

    z_n(a)=s_n+Si((2n-1)pi)/(2c)+O_n(c^-2).

Replacing c by ell in the denominator changes the expression by O(ell^-2), since c=ell-log(4pi)-gamma_E+O(a^2). This proves the result stated above.

For positivity at the arguments of interest, split Si((2n-1)pi) into half-period integrals. The absolute integrals over [k pi,(k+1)pi] for k>=0 are strictly positive and strictly decreasing, by translating to [0,pi] and the denominator increasing. Signs alternate starting positive. Pair the first 2n-2 terms consecutively, each positive pair, and add the last positive term. Thus the coefficient is strictly positive for every n. In particular z_n(a)>s_n for all sufficiently small a depending on n; no all-window or uniform-in-n assertion. The first correction is dimensionless and independent of the arbitrary additive O(1) convention in the logarithmic scale. The eigenvalue itself has displacement of order 1/(a log(1/a)), not 1/log(1/a).

## 4. Independent algebraic/numerical check and prior art

An ordinary high-precision check of the integral identity (not a spectral solver or interval certificate) was run in the lead tool environment with mpmath 1.3.0, 40 decimal digits:

    python -c "import mpmath as m; m.mp.dps=40
    for n in range(1,5):
     s=(n-m.mpf('0.5'))*m.pi
     b=lambda y:m.log(2)-m.log(1-y*y)/2
     G=m.quad(lambda y:b(y)*m.cos(s*y)-s*y*(b(y)+1)*m.sin(s*y),[0,m.mpf('.5'),1]); d=-G/m.sin(s); ref=m.si(2*s)/2
     print(n,m.nstr(d,25),m.nstr(ref,25),m.nstr(abs(d-ref),5))"

Actual output (direct quadrature, special-function expression, absolute difference):
    1 0.9259685259912330851805267 0.9259685259912330851805267 0.0
    2 0.8373808994899806329742194 0.8373808994899806329742194 5.7397e-41
    3 0.8169824230514176066549809 0.8169824230514176066549809 5.7397e-41
    4 0.8080427587258219942962084 0.8080427587258219942962084 5.7397e-41

This supports the sign and coefficient normalization only. Zero rounded difference is not an exact error certificate; the proof is the integration by parts above. No known Riemann zeros, finite arithmetic solve, or independent worker results enter the derivation. S03-W01 is acknowledged on worker/s03-w01, handoff blob 71e56b3e61e6a6879a0510ed94b45d2b946a46a1, status IN_PROGRESS; no numerical results submitted in that handoff. The worker independently studies finite arithmetic roots, so no duplicate solver sweep was performed.

Source disposition: S01's exact local operator and phase imports retain their documented source references; no additional operator theorem is invoked. Targeted searches for small-window cosine/sine-integral differentiation asymptotics returned standard special-function definitions (NIST DLMF §6.2) and related Suzuki form-operator numerical studies (https://huggingface.co/datasets/VIDraft/riemann-zeta-sonification/blob/main/SUZUKI_technical_note.md), the latter an excerpt only, as well as Skelly's spectral-edge listing (https://www.alphaxiv.org/abs/2611.localized-weil-spectral-edge). No equivalent first-correction theorem identified in the returned excerpts. This is not exhaustive prior-art checking; S03/S04 must compare primary sources more carefully before any originality claim. No external review or new Lean check.

Next S03: independent worker finite-root diagnostics and source audit; quantify the O(c^-2) remainder if useful, or exploit the bilinear remainder limit for a second-order coefficient without B^2 domain assumptions. The latter is a possible analytical check, not a claimed evaluated root coefficient in this note.

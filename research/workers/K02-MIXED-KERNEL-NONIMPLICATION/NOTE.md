# Fixed-separation mixed kernels: what the K02 estimates do not imply

This is an abstract non-implication example for the estimates recorded in K02, not a counterexample to the arithmetic construction or its exact resolvent identity. It makes precise why the K02 note leaves the unnormalized fixed-separation mixed kernel open.

## Model

Let \(H=\ell^2(\mathbb N_0)\), with orthonormal basis \(b_0,b_1,\ldots\), and let \(H_n=\operatorname{span}\{b_0,\ldots,b_n\}\). Write \(\Pi_n\) for its orthogonal projection; these projections increase strongly to the identity. For \(n\ge2\), put
\[
r_n=n^{-1}b_0+\sqrt{1-n^{-2}}\,b_n,\qquad
v_n=n^2r_n+b_0,\qquad
M_n=\|v_n\|=\sqrt{n^4+2n+1},\qquad
e_n=v_n/M_n.
\]
Then \(\|r_n\|=\|e_n\|=1\), and both sequences converge weakly to zero.

Let \(C\) be the fixed compact self-adjoint operator
\[
Cb_0=0,\qquad Cb_j=j^{-1}b_j\quad(j\ge1),
\]
and set \(B_n=\Pi_n C\Pi_n\). With \(h_n=e_n\in H_n\),
\[
d_n:=\|B_nh_n\|=\frac{n\sqrt{1-n^{-2}}}{M_n}\sim n^{-1}\longrightarrow0.
\]

Take \(P(z)=1-z\) and the entire vector-valued family
\[
u_{n,z}=n^2P(z)r_n+b_0\in H_n.
\]
It has \(u_{n,0}=v_n\), so \(M_n=\|u_{n,0}\|\), and at the simple zero \(\gamma=1\), \(u_{n,1}=b_0\). Define the positive kernel \(J_n(w,z)=\langle u_{n,z},u_{n,w}\rangle\), taking the inner product linear in its first argument. The sampled vector is \(g_1=b_0\), of squared norm one (multiplicity one), and \(j_nu_{n,1}=\Pi_ng_1=g_1\).

## Estimates and divergent mixed value

The normalized vector approximation is explicit:
\[
\frac{u_{n,z}}{M_n}-P(z)e_n=\frac{z}{M_n}b_0.
\]
It is \(O_K(n^{-2})=O_K(d_n)\) on every compact set. Expanding the kernel gives, uniformly on compact products,
\[
\frac{J_n(w,z)}{M_n^2}-\overline{P(w)}P(z)=O_K(n^{-3})=O_K(d_n^2).
\]
Thus the compact vector estimate, compact two-variable normalized kernel estimate, weak escape, \(d_n\to0\), nested projections, and sampled diagonal \(J_n(1,1)=1=1/m_1\) all hold. Nevertheless, for every fixed \(z\ne1\),
\[
J_n(1,z)=\langle u_{n,z},b_0\rangle=n(1-z)+1,
\]
which is unbounded, while \(J_n(1,z)/M_n\to0\). These estimates alone imply neither a finite unnormalized mixed limit nor unnormalized boundedness.

## Scope and missing input

The construction does **not** satisfy or assert an exact resolvent identity of the K01 form \((I-zB_n)u_{n,z}=P(z)v_n\). It is an RKHS vector-kernel model showing that the K02 norm, compactness, weak-escape, and sampling estimates by themselves are insufficient. It is not an arithmetic counterexample and does not show that Suzuki's actual mixed kernel diverges.

Under the exact K01 resolvent identity and self-adjointness, one can reduce the actual mixed kernel to a scalar resolvent. For real sampled \(\gamma\), fixed \(z\ne\gamma\), and regular resolvents, set \(F_a(\zeta)=\langle (I-\zeta C_a)^{-1}v_a,v_a\rangle\). Spectral calculus and partial fractions give
\[
J_a(\gamma,z)=P_a(z)P_a(\gamma)\,\frac{\gamma F_a(\gamma)-zF_a(z)}{\gamma-z}.
\]
At removable poles this is interpreted by analytic continuation. Thus an unnormalized fixed-separation limit requires control of this rescaled scalar-resolvent combination. The K02 compact normalized-kernel estimates do not determine it.

For the actual problem, a finite unnormalized mixed limit needs finer control than \(d_a\to0\) and \(\langle g_\gamma,h_a\rangle\to0\). Pairing \(u_z/M_a=P_a(z)e_a+O_K(d_a)\) with the bounded sampled vector leaves an error of size \(O_K(M_ad_a)\), and the leading mixed coefficient also contains \(M_a\langle g_\gamma,h_a\rangle\). The present K02 imports give no limits for these rescaled quantities. No novelty or priority claim is made.

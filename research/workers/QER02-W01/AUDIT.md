# QER02-W01 — Spectral weights and cardinal interpolation

Date: 2026-11-26. Baseline: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2`.

## Scope and conclusion

Independently checked the exact sample weights, quotient gauge, differentiation identity, eigenfunction cardinal formula, and convergence claims in `research/positivity/QER02-quotient-sampling.md`. **No conjugation, sign, normalization, or convergence error was found in this scope**, assuming QER01's self-adjoint compact-resolvent conclusion and U04's description of the bottom-space Fourier image.

The decisive normalizations are

`q_T([f],v_t)=F[f](t)`, `||v_t||_T^2=kappa_t=<T^+e_t,e_t>_2>0`,

and, for the gauged transform,

`G_[f](z)=sum_t F[f](t) L_t(z)`, `L_t(z)=H_a(z)Q(z)/((z-t)H_a'(t)Q(t))`.

The series is locally uniformly absolutely convergent by Cauchy–Schwarz and bounded evaluation norms. No RH or zeta-ordinate identification is used in these local quotient identities.

## Exact weights

Take the inner product linear in its first argument, (F[f](z)=\int_I f(x)e^{izx}dx), and (e_t(x)=e^{-itx}), so (F[f](t)=\langle f,e_t\rangle_2). By U04, every (e\in E) has (F[e](z)=H_a(z)P(z)) with `deg P<m`; hence at every zero `t` of `H_a`, (F[e](t)=0) and (e_t\perp E).

Let `T^+` be zero on `E` and equal to the bounded inverse of `T` on `E^perp`; set `v_t=[T^+ e_t]`. The form representation of `T` gives for every class

`q_T([f],v_t)=<f,T T^+e_t>_2=<f,e_t>_2=F[f](t)`.

In particular the sample is independent of the representative because it vanishes on `E`. Positivity and the spectral gap imply

`kappa_t=q_T(v_t,v_t)=<T^+e_t,e_t>_2>0`.

For a compactly supported smooth test, integration by parts yields `F[if'](z)=zF[f](z)`. At a zero `t`,

`q_T(S_0[f],v_t)=F[if'](t)=tF[f](t)=q_T([f],t v_t)`.

Thus `v_t` belongs to the adjoint domain with adjoint eigenvalue `t`; QER01's self-adjointness gives `v_t in Dom(D)` and `Dv_t=t v_t`. Since QER01 supplies simple spectrum with these zeros and compact resolvent, the normalized vectors `v_t/sqrt(kappa_t)` are an orthonormal basis. Parseval then gives the exact sampling identity

`q_T([f],[g])=sum_t F[f](t) conj(F[g](t))/kappa_t`.

Every sequence `(a_t)` with `sum |a_t|^2/kappa_t<infinity` occurs: expand in the normalized eigenbasis with coefficients `a_t/sqrt(kappa_t)`. This confirms that the reciprocal weight in QER02 is correctly placed.

## Gauge and interpolation

Fix distinct nonreal nodes `w_1,...,w_m` and monic `Q(z)=prod_j(z-w_j)`. Since `H_a(w_j) != 0`, there is a unique polynomial `P_f` of degree `<m` interpolating `F[f](w_j)/H_a(w_j)`. If a representative is changed by `e in E`, U04 gives `F[e]=H_a P_e` with degree `<m`; uniqueness implies `P_(f+e)=P_f+P_e`. Therefore `G_[f]=F[f]-H_aP_f` is well defined on the quotient.

The gauge is bounded into the supported form domain: take the `L2`-orthogonal representative, use the gap to bound its `L2` norm by its quotient norm, then bound its finitely many evaluations at the fixed nodes. Finite-dimensional interpolation bounds the coefficients of `P_f`; the inverse map from `P_e` to `e in E` is bounded because `E` is finite dimensional and `F[E]=H_a P_{<m}`. Consequently `f-e_f` and its Fourier transform on any compact set are bounded in the form norm. This also proves locally uniform boundedness of the evaluation functionals `G_[f](z)`.

For a test `f`, `P_(S_0 f)` interpolates the values `w_jP_f(w_j)`. Since `zP_f(z)-c_fQ(z)` has degree `<m` (where `c_f` is the leading coefficient of `P_f`, with value zero if `deg P_f<m-1`), uniqueness gives

`P_(S_0f)=zP_f-c_fQ`, hence `G_(S_0f)(z)=zG_[f](z)+c_f H_a(z)Q(z)`.

For a graph-core sequence `f_n` converging to `u in Dom(D)`, both gauged transforms `G_[f_n]` and `G_[S_0 f_n]` converge locally uniformly by bounded evaluations. Fix `z_0` with `H_a(z_0)Q(z_0) != 0`; the identity itself expresses

`c_(f_n)=(G_[S_0f_n](z_0)-z_0G_[f_n](z_0))/(H_a(z_0)Q(z_0))`.

Thus the scalars converge and the identity extends to `Dom(D)` without assuming physical differentiation is defined on arbitrary quotient representatives.

For the normalized sample eigenvector `v_t`, use `Dv_t=t v_t`. The extended identity gives

`(t-z)G_[v_t](z)=c H_a(z)Q(z)`.

At the removable point `z=t`, `G_[v_t](t)=F[v_t](t)=kappa_t`; taking the limit gives `c=-kappa_t/(H_a'(t)Q(t))`. Therefore

`G_[v_t](z)=kappa_t L_t(z)`,

with QER02's formula for `L_t`. It has value one at `t` and zero at every other real spectral zero. Expanding an arbitrary class in the eigenbasis and applying the bounded gauge gives the cardinal expansion.

## Convergence and kernel

Parseval gives `sum |F[f](t)|^2/kappa_t = ||[f]||_H^2`. For every compact `K` in the complex plane, bounded evaluations give `sup_(z in K) ||ev_z|| < infinity`, equivalently `sup_(z in K) sum_t kappa_t |L_t(z)|^2 < infinity`. Hence

`sum_t |F[f](t)L_t(z)| <= ||[f]||_H ||ev_z||`

uniformly on `K`; the same estimate with the sample-norm tail proves locally uniform convergence of arbitrary exhausting finite partial sums. In the quotient Hilbert norm, the corresponding eigenvector series converges by Parseval.

With the convention `K(w,z)=<k_w,k_z>_H` for evaluation representers, the basis expansion gives

`K(w,z)=sum_t kappa_t conj(L_t(w)) L_t(z)`.

The series is locally uniformly absolutely convergent on compact products by Cauchy–Schwarz and the locally bounded evaluation norms. This verifies the multiplicity-free local weights are `kappa_t`; any external arithmetic multiplicity statement would require additional hypotheses and is outside this audit.

## Limits and provenance

Imported, not reproved here: QER01's deficiency/self-adjointness and compact-resolvent argument; U04's `F[E]=H_a P_{<m}` characterization; finiteness of the bottom eigenspace and positive gap. The primary Suzuki v4 source was directly retrieved in the preceding QER01 batch (arXiv:2606.09096v4 §§3.1, 4.1) to check the fixed-window logarithmic form domain; this QER02 audit adds no new primary-source claim. QER02 itself records no RH assumption or connection of these nodes to zeta ordinates.

Not checked: QER03/QER04, large-window limits, any RH-dependent sample formula, full prior art, or formal/human review. No numerical computation was needed. This is a scoped independent AI audit, not acceptance or a novelty claim.

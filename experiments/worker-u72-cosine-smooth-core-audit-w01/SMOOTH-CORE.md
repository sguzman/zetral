# Smooth-core approximation for truncated cosine modes

This supplies an explicit approximation argument for the finite cosine modes used in the U72 calculation. The primary-source identification `D(Q_W^a)=H^log(-a,a)` is Suzuki, *Weil’s quadratic form via the screw function*, arXiv:2606.09096v4, §3.1, equations around (3.3)–(3.4): https://arxiv.org/html/2606.09096v4.

## Membership in fractional Sobolev spaces

Let

\[
v_n(x)=c_n\cos(\omega_n x)\mathbf 1_{[-a,a]}(x),
\]

where `c_n` is any fixed normalization. Its zero extension is piecewise `C^1` with finite endpoint jumps. Integration by parts on `[-a,a]` gives, for `|t|>=1`,

\[
|\widehat v_n(t)|\leq\frac{|v_n(a)|+|v_n(-a)|+\int_{-a}^{a}|v_n'(x)|dx}{|t|}=:\frac{C_n}{|t|}.
\]

For all `t`, `|vhat_n(t)|<=||v_n||_1`. Therefore, for every `0<s<1/2`,

\[
\int_{\mathbb R}(1+|t|^2)^s|\widehat v_n(t)|^2dt<\infty,
\]

since the tail is bounded by a constant times `integral_1^infinity t^(2s-2)dt`. Thus `v_n` belongs to `H^s(R)` for every `s<1/2`. For a fixed such `s`, `1+log^+|t| <= C_s(1+|t|^2)^s`, so `H^s(R)` continuously embeds in the logarithmic Fourier space `H^log`.

## Interior smooth approximation

Fix `s in (0,1/2)` and choose `lambda_m<1` increasing to 1. Define the inward compression `v_{n,m}(x)=v_n(x/lambda_m)`. It is supported in `[-lambda_m a,lambda_m a]` and converges to `v_n` in `H^s(R)` as `lambda_m ->1`, by strong continuity of dilations in `H^s`.

For each `m`, take a standard compactly supported smooth mollifier `eta_epsilon` with `epsilon_m < (1-lambda_m)a/2`, chosen small enough that

\[
\|\eta_{\epsilon_m}*v_{n,m}-v_{n,m}\|_{H^s}<1/m.
\]

Then `w_m=eta_epsilon_m*v_{n,m}` belongs to `C_c^infinity(-a,a)` and `w_m -> v_n` in `H^s`, hence also in `H^log`. This directly places each cosine mode in the form-norm closure of the smooth core, without using the `H_0^1` derivative-kernel identity on a nonzero-boundary mode.

The same construction works for every finite linear combination of cosine modes, since it is again piecewise smooth with finite endpoint jumps.

## Consequence and limit

Using Suzuki's equality of the closed form domain with `H^log` and the equivalence of its form norm with the logarithmic Fourier norm, these approximants converge in the closed Weil-form norm. Thus the finite cosine span is admissible and can be evaluated by the continuous extension of the Fourier-form identity.

This is a domain/admissibility lemma only. It does not rederive Suzuki's full domain theorem, validate the finite cosine matrix entries, audit the high-mode comparison/tail, establish positivity, or imply RH. No formal verification or human review has been performed.

# QER01-W01 — Compact-resolvent step in the edge quotient

Date: 2026-11-26. Baseline: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2`.

## Question and conclusion

Does the graph-bounded Volterra argument establish compactness for the quotient differentiation operator in `research/positivity/QER01-edge-quotient.md`, despite the finite-dimensional bottom-space correction in

`(iD_x-i)f = g+e`, `g perpendicular to E`, `e in E`?

**Conclusion (scoped audit): yes, provided the imported form-domain equivalence and spectral gap stated in QER01 are in force.** The potentially delicate point is to bound the quotient class of `V_i e`, not the coefficient vector `e` itself. That class is bounded by subtracting the already-bounded terms `[f]` and `[V_i g]`; it lies in a fixed finite-dimensional subspace. Thus no separate bound on the physical `E` component is needed. QER03 §2 states this as “bounded (difference of bounded terms)”; the derivation below makes the estimate explicit. No counterexample or gap in this compactness implication was found.

## Setup and imported hypotheses

Fix a finite interval `I=(-a,a)`. Let `V` be the supported logarithmic form domain, `E` the finite-dimensional bottom eigenspace, and `H=V/E` with norm induced by `q_T`, where `T=A_a-lambda_1(a)I`. Use the `L2(I)`-orthogonal representative to identify each class with `V intersect E^perp`. The imported gap is

`q_T(u) >= g ||u||_2^2` for `u in V intersect E^perp`, with `g>0`.

The imported fixed-window form comparison identifies the form norm (after adding the `L2` term) with the supported `H^log` norm, whose Fourier weight is `1+log^+|xi|`. Finite-dimensional `E` lies in `V`. These are setup assumptions from QER01/U03 and Suzuki arXiv:2606.09096v4 §§3.1 and 4.1; this audit does not reprove the Weil-form domain theorem or the spectral gap. Suzuki v4 §3.1 defines `H^log(I)` using `(1+log^+|xi|)|fhat(xi)|^2`; Proposition 4.1 proves its compact embedding into `L2(I)`, a different embedding from the Volterra compactness used here.

Let `D` denote the closed operator obtained from `S_0[f]=[i f']` on compactly supported smooth functions, as in QER01. Compact smooth functions are a graph core by definition of this closure.

## Independent compactness derivation

Take a sequence `h_n` bounded in `Dom(D)` with graph norm. By graph-core density choose `f_n in C_c^infty(I)` so that

`||[f_n]-h_n||_H + ||[i f_n']-D h_n||_H <= 1/n`.

Thus `[f_n]` and `[i f_n']` are bounded in `H`; consequently `[k_n]` is bounded for `k_n=i f_n'-i f_n`. Decompose in physical `L2(I)`:

`k_n=g_n+e_n`, `g_n=(I-P_E)k_n`, `e_n=P_E k_n in E`.

Because `q_T` vanishes on `E`, `q_T(g_n)=q_T([k_n])` is bounded. The gap yields a uniform `L2` bound on `g_n`.

For `g in L2(I)`, let `V_i g` be the unique solution of `(iD_x-i)v=g` with left endpoint trace `v(-a)=0`:

`(V_i g)(x)=-i integral_{-a}^x exp(x-y) g(y) dy`.

The Volterra kernel is Hilbert–Schmidt on the finite triangle, so `V_i:L2(I)->L2(I)` is compact. Differentiating the formula gives `||V_i g||_{H^1(I)} <= C_a ||g||_2`. For the zero extension to the line, integration by parts, including both endpoint traces, gives

`|widehat{V_i g}(xi)| <= C_a ||g||_2/|xi|`, for `|xi|>=1`.

Hence its logarithmically weighted Fourier tail obeys

`integral_{|xi|>R} (1+log^+|xi|)|widehat{V_i g}(xi)|^2 dxi <= C_a ||g||_2^2 (1+log R)/R` for `R>=2`.

These two facts imply that `V_i` is compact from `L2(I)` into the supported `H^log` form norm: along an arbitrary bounded input sequence, first take an `L2`-convergent subsequence of outputs; its Fourier transform is Cauchy on each bounded frequency interval by Plancherel, while the displayed tail estimate is uniform and tends to zero. The imported form comparison then makes `[V_i g_n]` precompact in `H`.

Since `f_n` is compactly supported and solves the same left-initial-value equation,

`f_n=V_i(g_n+e_n)` and `[V_i e_n]=[f_n]-[V_i g_n]`.

The right-hand side is bounded in `H`: the first term is graph-bounded and the second is bounded by the Volterra estimate. Every `[V_i e_n]` lies in the fixed finite-dimensional image `[V_i E]`. A bounded subset of a finite-dimensional normed space is relatively compact. Therefore `[f_n]=[V_i g_n]+[V_i e_n]` is precompact in `H`. The graph-core approximation transfers this conclusion to `[h_n]`, proving compactness of the graph embedding `Dom(D)->H`.

Once the separately asserted self-adjointness of `D` is established, compact graph embedding implies compact resolvent: `(D-i)^{-1}` maps the unit ball of `H` into a graph-bounded subset of `Dom(D)`.

## Finding, limits, and unchecked claims

- The finite-dimensional term requires no coefficient bound for `e_n`; only boundedness of its quotient image is used, and this follows by the subtraction identity above.
- The endpoint jumps of `V_i g` under zero extension are allowed: the `O(|xi|^-1)` bound makes the `log^+|xi|` tail integrable. Requiring zero trace at both endpoints would be an unnecessary and generally unavailable condition.
- QER03 §2 contains the same argument and the phrase “bounded (difference of bounded terms).” This audit independently supplies the identity and form-norm tail estimate; it is not an independent audit of QER03's extension-domain or norm-resolvent conclusions.
- Not checked: QER01's deficiency-index/evaluation annihilator proof, the descent criterion using `F[E]`, the repeated-zero Jordan-chain argument, QER02, or any RH-dependent global identification. The result is conditional on the stated fixed-window form-domain equivalence, finite-dimensional bottom space and positive spectral gap. No RH, novelty, formal-verification, human-review, or Hilbert–Pólya construction claim is made.

## Source access and reproducibility

- Primary source retrieved directly on 2026-11-26: Suzuki, arXiv:2606.09096v4, `https://arxiv.org/html/2606.09096v4`, §§3.1 and 4.1. The local download was `/tmp/suzuki-v4-qer01.html`; §3.1 explicitly defines `H^log(I)` with Fourier weight `1+log^+|xi|`, and Proposition 4.1 states compactness `H^log(I) -> L2(I)`.
- Repository sources at the baseline: `research/positivity/QER01-edge-quotient.md`, `QER02-quotient-sampling.md`, `QER03-edge-limits.md`, and `U03-critical-inverse.md`.
- Exact checks performed: algebraic solution of the scalar ODE, boundedness/compactness estimates above, and comparison of the quotient correction with QER03 §2. No numerical script, external review API, or formal checker was run.

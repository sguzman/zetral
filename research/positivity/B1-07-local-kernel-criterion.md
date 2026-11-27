# B1-07 — Local RKHS kernel criterion and the coercivity bridge

Date: 2026-11-26. Status: primary-source theorem recorded; its application to
Zetral's certificates is not established.

## Precise question

Does the recent local Weil-form spectral construction provide a route from
Zetral's finite positive matrices to the full local operator coercivity needed
for a spectral correspondence, and ultimately to RH?

## Source result

Suzuki, *Local Weil formula and Riemann hypothesis*, arXiv:2611.33001v1,
submitted 2026-11-24, Theorems 1.1 and 1.3 and Corollary 3.1:
[abstract/version record](https://arxiv.org/abs/2611.33001),
[full text](https://arxiv.org/html/2611.33001). This is a source-reported
theorem, not an independent Zetral proof audit.

For a local Weil form that is strictly positive on its stated test space, the
paper constructs a closed local form and an associated reproducing-kernel
Hilbert space. Self-adjoint differentiation extensions have compact
resolvent, with real simple spectra and a local explicit formula. The paper's
Theorem 1.3 states RH equivalently as follows: for every R such that the local
forms are positive for all 0<a<R, the diagonal kernels J_a(t,t) are uniformly
bounded over 0<a<R and real t. Corollary 3.1 identifies this uniform bound,
under that positivity hypothesis, with strict positivity at the endpoint
length R. The converse proof uses the first loss of positivity when RH fails.

These hypotheses matter. The operator and spectral formula require local
positivity; the uniform-kernel criterion packages a uniform coercivity
question. It does not establish positivity from a finite compression. It
therefore gives a precise operator target but no new positivity proof by
itself. A valid full-space lower bound at length R would imply the useful
kernel estimate J_a(t,t) <= 2R/lambda_R in the paper's normalization, where
lambda_R is the lower form bound. Zetral's current direct source-form result
is only a positive 2-by-2 principal block at h=2.51; the full test-function
map and a full-space lower bound remain unproved (Campaign LXXVI).

## Falsification and limits

- A finite positive principal block only controls its finite-dimensional
  subspace. It cannot be substituted for lambda_R without a proved lower
  bound on the orthogonal complement and a verified map to the source form.
- The source theorem is not a proof that Zetral's candidate finite certificates
  satisfy its local positivity hypotheses.
- No RH conclusion or Hilbert–Pólya correspondence follows from the
  certificate. The local self-adjoint extensions have the theorem's stated
  local spectra; identification with the global nontrivial zeta zeros needs
  the additional hypotheses/identities explicitly distinguished in the
  source.
- This note records a recent equivalent criterion and a missing bridge. It
  makes no novelty claim and has not received independent or human review.

## Next mathematical question

Can the source-form decomposition be represented as a coercive operator plus
a compact or quantitatively controlled remainder, uniformly for a in a
nontrivial interval, with an explicit strictly positive lower bound? Start
with the exact local form/domain in Suzuki's paper and Zetral's direct
arithmetic functional, then test whether the prime-shift/archimedean
endpoint cancellation (B1-06) survives in operator norm on arbitrary
boundary profiles. A counterexample sequence of unit vectors with Rayleigh
quotient tending to zero would falsify any proposed uniform bound without
contradicting pointwise strict positivity.

Acceptance requires either a complete operator inequality with domains,
constants and all tails justified, or a reproducible counterexample to the
proposed uniform inequality. Finite matrix evidence is diagnostic only.

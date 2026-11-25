# V05 — Numerical certification checkpoint

Date: 2026-11-25 UTC. Status: verification scripts persisted, CI result pending. No interval certificate has yet been executed or verified in this session. Candidate theorem and its analytic constants remain conditional on RH and Suzuki's imported results.

## Exact cutoff versus numerical approximations

The exact target is t_(a,1), a positive eigenvalue of Suzuki's phase-pi operator at a=log(11)/2 (arithmetic cutoff X=11). The finite Fourier characteristic root computed at order N is a different quantity. A bound for t_(a,1)-gamma_1 cannot bound t_(a,1,N)-t_(a,1) without a further discretization estimate. Rigorous ball evaluation of the constants below is therefore an exact-cutoff enclosure conditional on the human-readable theorem, not certification of the finite solver or a zero-finding construction independent of known zeros.

V04 yields the explicit expression K_1=4 gamma_1 M H_(gamma_1)^2 with multiplicity one, and the threshold B_1 M H_(gamma_1)^2 X^(5/2) exp(-2 pi X) <= 1/(2 gamma_1). For this one index we can use rigorous indexed zero isolation to justify simplicity rather than assuming it.

## Ball-arithmetic plan and provenance

FLINT documentation, https://flintlib.org/doc/acb_dirichlet/index.html and https://flintlib.org/doc/acb_dirichlet/zeta-zeros.html , accessed 2026-11-25: the indexed zeta-zero routine isolates a zero and verifies its index by rigorous counting, and verifies simplicity for the zeros it handles. Python-FLINT wraps this interface as acb.zeta_zero(n); see https://python-flint.readthedocs.io/en/latest/acb.html and acb_series.html. These public documentation pages describe the method; they are not proof of a successful execution in Zetral. Release 0.8.0 (https://pypi.org/project/python-flint/0.8.0/) chosen for the verification job; no installed library was available locally and a direct pip installation failed (no matching distribution available in runtime).

The script computes a 256-bit ball for the indexed first zero, checks the exact real part, verifies the derivative ball excludes zero, and uses Taylor coefficients of xi(s) at the zero and at s=1/2. In particular A(z)=xi(1/2-iz) gives M=xi''(1/2)/xi(1/2) under RH. All constants, threshold comparisons, and the final requested error enclosure are then evaluated with ball arithmetic; a comparison must hold for the entire interval. No universal simplicity claim. Python is used for this independent Arb diagnostic only, not the production Rust implementation.

An independent non-certified local mpmath check at 60 decimal digits was actually executed during V05. It gives:
    gamma1 = 14.13472514173469379045725198356247027078
    |xi'(rho1)| = 0.001382719089216254176060807011124306906004
    M = 0.04620998623083794157786762086067802800676
    H = 182725073.3096351878524936564484147585785
    K = 87232734746183732.88721011602790962196503
    error bound estimate at X=11 = 0.00000000003371952251678408337110428477496291188028
These are diagnostic values, not certified interval bounds. The ball script seeks to establish error <4e-11 and exact eigenvalue between 14.134725141734693790457251983562 and 14.134725141775. The two claims must not be reported as certified until the actual ball job succeeds and its logs are inspected.

## Rust reproduction and unresolved discretization certificate

A separate CI job builds pinned Rust 1.85.0 and evaluates all twelve (X,N) in {3,5,7,11} x {14,16,18}, 384 bits, Gauss order 192, grid .01. It compares the 24 N=18 roots and 12 sixth-root values against durable reference data with absolute tolerance 1e-23, prints all 72 candidates, and saves an artifact. This is a numerical cross-check, not interval root isolation. Condition numbers are not recomputed by this Rust solver. No certified root-count, rigorous Gram integration remainder, verified linear solve enclosure, or bound on exact-local versus finite-Fourier error is supplied. To obtain one would need (1) certified coercivity/approximation or Riesz representer residual bound in the full form norm, (2) uniform analytic characteristic-function error on a suitable contour, and (3) validated root isolation/ordering, not just sign changes or precision refinement. These are explicit limitations under the bounded campaign.

## Persistence and resume

Draft PR #2: https://github.com/sguzman/zetral/pull/2 .
Branch verify/campaign-02-v05, head fa9f3f91222033bac8a1533f0e71c589322f8fa4. Three new files read back exactly: experiments/reference/v05_ball_certificate.py, experiments/reference/v05_compare_rust.py, .github/workflows/numerical-verification.yml. Research checks run 45626212991 observed in progress. Numerical verification run not yet returned in the first lookup. Check PR-head workflow runs and retrieve actual job logs; correct actionable failures within V05, verify the certificate and save verbatim evidence, then merge only if relevant checks pass. If tools unavailable after recheck, persist blocker and proceed to V06 without claiming success. Do not repeatedly poll or create more unrelated work.

## V05 follow-up (2026-11-25)

Re-executed the 60-digit mpmath n=1 diagnostic locally; all six displayed values above agree exactly at the reported precision. This remains non-certified. Local Python import inspection confirmed that python-flint is absent; no shared FLINT/Arb library was found in the checked system library directory. Rechecked FLINT zero-counting documentation and Python-FLINT series API; the proposed indexed zero and derivative calculation remains appropriate.

Initial standalone Numerical verification run was not returned by the PR-head lookup; Research checks run 45626212991 only showed bootstrap and ordinary Rust smoke jobs. Attempted reusable workflow invocation at 34f29fb448572b75f9fdd07d2d0097079d12d258; run 45626637618 concluded failure with zero jobs and no diagnostic details accessible via the connector. Cause unknown. Replaced the reusable invocation with directly embedded ball-certificate and rust-reproduction jobs in existing .github/workflows/ci.yml, on PRs and manual dispatch only. Removed the now-redundant standalone workflow from this draft branch (historical versions remain in Git); verified absence by 404 and read back the embedded workflow. New PR #2 head a2547ce44702c98262078becb6bf4447699c8b0b. No run returned on immediate lookup. No ball arithmetic or full twelve-case Rust outcome yet verified.

Next continuation: recheck the latest PR head once and inspect any available jobs/logs. Repair actual script errors if reported. If workflow remains unavailable or there is no usable diagnostic, record this as a V05 verification blocker and advance to V06; do not repeatedly redesign infrastructure or poll indefinitely. Keep PR unmerged unless relevant checks verified. The numerical target and comparison scripts are unchanged.

# CME03 benchmark reproduction and formula audit

2026-11-25. I independently reran both committed programs in a separate Node.js 24.22.3 process from the latest main checkout (`8069d10`). Both exited successfully and returned the exact endpoint arrays printed in `research/positivity/CME03-executed-arithmetic-moment-benchmark.md`. This closes the note's stated gap that the earlier V8 code-runtime execution had not also been reproduced through a Node process. It is a reproduction, not a line-by-line formal verification of every interval routine.

## Checks

- Physical test: the rerun returned the reported (m_1(Tu,u)) enclosure `[-1967432044961763352,-1942857542453534340] / 10^18`, positive restored expectation `A_m1=[69587316692976798,100083067360284392] / 10^18`, and the listed second moments and endpoint tails unchanged.
- Periodic test: the rerun returned the reported (N=8,16,32) rows unchanged. The restored (N=8) finite-cutoff first moment is negative, while the independently integrated physical first-moment interval is positive; this confirms the stated finite-cutoff sign artifact in the executed arithmetic.
- Independently checked the normalization of the constant seed on the length-four circle: (c_n=\sin(\pi n/4)/t_n), (c_0=1/2), and the support matrix has (Q_{ij}=\sin(\pi(i-j)/4)/(\pi(i-j))) off diagonal and (1/4) on diagonal. The physical second-moment matrix therefore requires (Q_N) between the two diagonal symbol factors, as implemented.

## Scope

The rerun verifies deterministic output reproduction only. I did not independently prove that each interval-program branch encloses its real target, establish a continuum error from the finite periodic cutoffs, or verify the operator-domain claims imported from earlier notes. In particular the published finite-cutoff values are not continuum moment enclosures; CME02's convergence estimate is much looser than their interval widths. No spectral conclusion about the full restored operator follows from the sign artifact.

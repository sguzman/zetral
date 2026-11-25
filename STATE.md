# Research state

Date: 2026-11-25 UTC.
Active campaign: IV — Exact-local spectral certification (research/CAMPAIGN-04.md).
Standing owner authorization: choose bounded productive in-scope mathematical campaigns autonomously; preserve durable checkpoints and select next direction without routine approval. See AGENTS.md. No background execution, external submission, new expenses, access changes or mission change authorized.

Campaigns I–III concluded. Historical states and closure reports in research/CAMPAIGN-0{1,2,3}-STATE.md and -CLOSURE.md. Historical manuscript v0.2 blob aabf597901969bd2ca9d32dcfff1c894f7bef7cf remains unchanged.

Campaign III consolidated candidate results (same RH and Suzuki sampling/coercivity/compression imports):
- D01: fixed-index exact upper error O_n(X^(7/2-2m_*) log X exp(-2 pi X)); general m_*>=1 gives power 3/2, saving log X/X over v0.2.
- D02: cumulative spectral error comparable on both sides to sum of first n coordinate projection defects squared; standard trace/Ky Fan argument. Upper equality example repaired in D04 to include second positive eigenvalue.
- D03: individual spectral lower comparison and finite interpolation dual bound, proving strict separation t_(a,n)>gamma_n for every finite a>0. No matching lower asymptotic in X; coefficient growth and coercivity uncontrolled.
- D04: consolidated note research/discovery/campaign-03-spectral-estimates.md and research/CAMPAIGN-03-CLOSURE.md verified by readback; no new numerical/formal checks. Originality and independent review unresolved. Site source and README updated; deployment unverified.

Campaign IV selected because reliable finite-arithmetic-to-exact-operator estimates are a central unresolved mathematical bottleneck. Zhu arXiv:2608.24827v2 Thms 1.1,1.4 gives a finite coercivity reduction but severe pointwise-envelope size barrier; parity/normalization and whole-space bounds must be checked. Recent spectral-edge listing reports related spectral-weight results, not independently audited. These are source leads, not imported conclusions.

- C01 READY: coercive residual/kernel-defect identities and enclosures.
- C02–C05 pending.

Inherited verification limits: only five scalar Lean lemmas and three Rust baseline tests/six-root X=3 smoke checked in Campaign II. Draft PR #2 ball/full Rust verification not established; finite Fourier certification absent. Situs canonical target unavailable, Nix incomplete, Pages unverified. No duplicate ontology. Do not repeat CI troubleshooting unless directly needed and bounded.

Resume on continue: execute C01. Derive rigorous residual enclosure for evaluation representers of the exact positive local form operator, distinguish operator-domain residual from form-dual residual and discrete residual, and connect to exact kernel diagonal/projection defect. Give proofs and counterexample to finite Galerkin residual sufficiency; identify measurable full-space residual inputs and domain requirements. Inspect primary sources as needed and distinguish standard residual estimates from any new application. Persist and verify. Then C02 will examine arithmetic coercivity and residual bounds. 

# Research state

Date: 2026-11-25 UTC.
Active campaign: V — Small-window spectral asymptotics (research/CAMPAIGN-05.md).
Standing owner authorization: choose productive bounded in-scope mathematical campaigns autonomously; preserve durable checkpoints and select next direction without routine approval. See AGENTS.md and COORDINATION.md. No external submission, new expenses, access changes or mission change authorized. ChatGPT operates during conversation turns, not continuously in the background.

Campaigns I–IV concluded. Historical states and closures in research/CAMPAIGN-0{1,2,3,4}-STATE.md and -CLOSURE.md. Historical manuscript v0.2 blob aabf597901969bd2ca9d32dcfff1c894f7bef7cf unchanged.

Campaign III: conditional fixed-index exact upper error O_n(X^(7/2-2m_*) log X exp(-2 pi X)), X=exp(2a), general power 3/2; cumulative two-sided projection-defect estimates, strict finite-cutoff separation t_(a,n)>gamma_n, finite interpolation lower bound but no matching asymptotic. research/discovery/campaign-03-spectral-estimates.md.

Campaign IV consolidated note research/certification/campaign-04-exact-local-certification.md, commit fc60e103500608b0482ac9a4854680985cf4d051; closure 7c77779503d9ffc75ca9d8026e286e093b4a6866; archived state 383df6fc6716bd37ee6219e6ea1a9efca3e81381. Five lead milestones complete:
- C01 corrected kernel and projection-defect residual identities.
- C02 bounded discrete Hilbert-transform commutator, full L2 Fourier residual tail, finite head/tail coercivity certificate.
- C03 residual-to-characteristic contour count and conditional finite-certificate existence via graph core.
- C04 direct prime-free coercivity, analytic residuals for 1 and x/a, cosine limit and analytic root enclosure 2^2049<t_(a,1)<2^2050 at a=2^-2049 (conditional on local form and phase-pi spectral imports). Fixed-n small-window rate a*t_(a,n)=(n-1/2)pi+O_n(1/log(1/a)). No realistic-window numerical certificate.
- C05 consolidated internal audit and selected next direction. Source comparison: Suzuki v4 Theorem 1.4 concerns L2 form bottom, Theorem 1.5 is unconditional local positive shifted-form spectral function; October v1 introduction separates unconditional local theory from RH-dependent global convergence. This motivates removing RH from the small-window theorem with careful phase/normalization proof. Skelly listing and Zhu source inspected within documented limits; novelty unestablished. README and site source updated, deployment unverified.

Campaign V:
- S01 READY (lead): scaled logarithmic limit operator, domain and first-order inverse expansion; check unconditional local characterization.
- S02–S04 pending.
- C04-W01 IN_PROGRESS (Codex, carried forward): last handoff on worker/c04-w01 blob ba0555cee65f50a30bb0c755f4a8417863886b44 unchanged at C05. Only worker branch found by branch search. Acknowledged assignment; Rust unavailable on PATH; no mathematical audit or numerical result submitted. Continue its original X=2 residual/audit package independently. After completion Codex may select nonconflicting S03 verification work. No acceptance or duplicate counting.

Inherited limits: only five scalar Lean lemmas and three Rust baseline tests/six-root X=3 smoke checked in Campaign II. Draft PR #2 ball/full Rust verification not established; practical finite Fourier certification absent. Situs canonical target unavailable, Nix incomplete, Pages unverified. No duplicate ontology. No repeated CI troubleshooting unless directly necessary and bounded. No independent human review or originality claim.

Resume on continue: inspect COORDINATION.md and worker handoff/branch list; review completed evidence if available. Execute S01: on y=x/a in (-1,1), use C04 prime-free shift representation to identify A_scaled=c(a)I+B_0+bounded O(a), B_0=(1/2)integral_0^2(2I-S_h)/h dh as positive closed form/operator. Prove common form/domain by bounded perturbation, establish 1,y in Dom B_0 and rigorous first-order inverse expansion using strong convergence of c(c+B_0)^(-1), not a norm Neumann series for unbounded B_0. Check Suzuki v4 Theorems 1.1,1.4,1.5 and §6 for unconditional phase-pi local characterization when A_a>0; derive absence of zero and root ordering as needed. Then S02 evaluate explicit first-order characteristic/root correction (candidate route via logarithmic functions and sine integral, not yet established). Preserve previous records. Worker remains independent. 

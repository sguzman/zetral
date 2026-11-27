# Zetral paper-candidate register

Updated: 2026-11-27. This is a triage list for possible mathematical
write-ups, not a novelty or publication claim. All items are AI-assisted
candidate work under human direction. “Paper-shaped” means the result has a
coherent question and a consolidated derivation; it does not mean proof
verification, originality, or journal readiness.

| Candidate | Mathematical result and scope | Current write-up state | Next requirements before external paper |
|---|---|---|---|
| Local small-window spectrum | Unconditional fixed-index two-term expansion for the phase-pi local Weil-form differentiation spectrum as the interval shrinks; it is not the ordinary L2 form spectrum or the zeta-zero spectrum. | Candidate manuscript v0.1 exists at [`campaign-05-small-window-spectrum.md`](asymptotics/campaign-05-small-window-spectrum.md). This is the most directly manuscript-shaped standalone result in the repository. | Independent expert proof audit; exact comparison with Suzuki's local expansions and nearby literature; clarify the precise form-domain inputs and all remainder quantifiers. No Lean formalization currently exists. |
| Sobolev parity trace and zero recovery | An H0^1 generalized trace has an exact exponential expansion whose meromorphic Laplace transform recovers the zero multiset; trace boundedness is RH-equivalent and the exponential growth rate identifies the maximal real displacement. Campaigns XXII–XXIII extend this to maximal groups and generalized negative-spectrum asymptotics. This is not ordinary L2 spectral correspondence. | Consolidated notes: [`STS02`](positivity/STS02-laplace-zero-recovery.md), [`STS04`](positivity/STS04-audit-volterra-inverse.md), [`SES04`](positivity/SES04-audit-and-metric-bridge.md), with individual derivations linked from those files. | Highest-value analytic synthesis candidate, but first audit the complete chain independently, compare carefully with classical explicit-formula and RH-equivalent criteria, and state the altered Sobolev metric prominently. No actual off-line zero or computed ordinary spectrum is involved. |
| Common Clark endpoint limit | Under RH, normalized scalar Clark models for the shifted xi family converge in strong resolvent sense on one Hardy space; a heat-family model has the same endpoint. The limit is not identified with Suzuki's original arithmetic Hamiltonian and does not give a finite-parameter intertwiner. | Two linked operator notes: [`B5-14`](operators/B5-14-clark-strong-resolvent-limit.md) and [`B5-15`](operators/B5-15-shift-heat-common-clark-limit.md). | Independent audit of the model-space embeddings, infinity-atom hypotheses and exact operator identification; search prior work on convergence of Clark models under inner-function limits. Present only as a conditional model-limit result unless the arithmetic identification is proved. |
| Fixed-width positivity criterion | Manual deduction that positivity on all translates of packets built from one fixed support width is equivalent to RH. It uses the classical Weil criterion and a Landau singularity argument; it is not an RH proof. | Detailed note at [`B1-24`](positivity/B1-24-fixed-width-positivity-RH-criterion.md). | Novelty and hypothesis comparison are unresolved. Do not prioritize a standalone paper until the exact relation to recent fixed-support and Weil-form criteria is checked by an independent analyst. |
| HP-02.3 random-window normalization | Almost-sure simultaneous sine separation for `L_N=N^2+U`; combined with Shi's interpolation product, this forces each fixed-low metric weight to grow and makes the known RH-conditioned fixed-pair `Delta G` tail vanish. It does not control `Delta K`, moving blocks, Schur coupling or spectral transfer. | Newly consolidated technical note: [`HP02-fixed-low-random-window.md`](operators/HP02-fixed-low-random-window.md). | Minor lemma/appendix material only. Needs a deterministic certified offset or a reason probabilistic existence suffices, and must be combined with prime-side moving-block estimates before it supports a Hilbert–Pólya paper. No novelty claim. |

## Immediate triage

1. For a standalone draft closest to presentable form, start from the local
   small-window manuscript, but obtain an independent mathematical audit and
   prior-art review before claiming an established contribution.
2. For an operator-focused paper, synthesize B5-08 through B5-15 only as a
   conditional theorem about normalized canonical/Clark models. The
   arithmetic Hilbert–Pólya construction remains unproved.
3. Keep HP-02.3 in the working research record; it is useful supporting
   progress, not an independent paper result.

No item in this register is Lean-verified. Formalization is not presently the
highest-value next step: the main gaps are analytic hypotheses, source-to-model
identification, independent proof audit, and prior art.

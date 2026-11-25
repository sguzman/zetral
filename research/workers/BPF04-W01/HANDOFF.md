# BPF04-W01 — Independent inverse-trace audit

Status: IN_PROGRESS

Baseline: `083fdc8` (Campaign XX active; BPF04 is complete).

## Question and scope

Independently audit the BPF04 parity-resolved trace identity and Cesàro Fourier recovery of signed ordinates and multiplicities from exact ordinary spectral curves. Check Fourier signs, Cauchy projection factors, growth-group indexing, and the separated-top-set qualification. Do not duplicate active QIR01 finite-window error analysis.

## Acceptance criteria

- Re-derive the finite parity trace coefficients and Cesàro extraction under the stated asymptotic hypotheses.
- Report any discrepancy or the precise scope that passed.
- Keep all imported operator results and non-practical limitations explicit; no actual zero, RH proof, human/formal review, or novelty claim.
- Bounded stopping condition: check the exact asymptotic identity and its uniqueness/recovery implications, then reconcile or report any mismatch.

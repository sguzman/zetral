# Handoff: LXX 47/4 witness checkpoint

Independent verification is in [AUDIT.md](AUDIT.md). The exact piecewise
proposal is `experiments/results/lxx-47-4-rational-witness.json`; reproduce
the audit with `experiments/worker-LXX/verify_47_4_witness.py`.

The endpoint lies beyond `exp(2.46)`, the cellwise witness bound is
`2897/1000`, and `lowCount=45` gives positive even and odd high guards at
modes 90 and 91 respectively. The witness optimizer is the existing source;
the pointwise inequality and guards were independently checked in Python.
Finite comparison work for h=2.46 remains separate.

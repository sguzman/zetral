# Handoff: independent odd T832 stored audit

See [AUDIT.md](AUDIT.md) and reproduce with
`experiments/worker-TC03/replay_odd_certificate.py`.

The 12 exact odd-mode chunks sum to the saved 6,100-mode finite total. Python
reconstruction from the staged assembled component intervals matches all
1,936 selected matrix entries and 44 radii; exact Bareiss pivots match, and
the fixed-energy margin is `131760/10^6` with the adjacent grid point failing
at the final pivot. This is a stored interval audit, not fresh component or
original-form regeneration.

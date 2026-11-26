# Handoff: LXX02 even baseline replay

See [AUDIT.md](AUDIT.md) and reproduce with
`experiments/worker-LXX/replay_even_baseline.py`.

The independent reconstruction matches the saved 45-dimensional baseline
matrix and radius corrections exactly. It verifies 45/45 positive upper
energies and confirms the baseline fails at the third leading minor. The
optimized allocation comparison remains pending.

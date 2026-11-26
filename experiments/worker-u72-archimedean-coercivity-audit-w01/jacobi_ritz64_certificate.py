#!/usr/bin/env python3
"""Exact N=64 Jacobi generalized-Ritz interval by rational LDL inertia."""
from fractions import Fraction as F
from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path

HERE = Path(__file__).resolve().parent


def load_local(name: str, filename: str):
    spec = spec_from_file_location(name, HERE / filename)
    module = module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(module)
    return module


trial = load_local("jacobi_trial56", "jacobi_trial64_certificate.py")
ritz = load_local("ritz_interval", "ritz_interval_certificates.py")
N = 64


def main() -> None:
    transform = [[F(0) for _ in range(N)] for _ in range(N)]
    for j in range(N):
        for i, value in enumerate(trial.jacobi_column(j)):
            transform[i][j] = value
    transform_t = [list(row) for row in zip(*transform)]
    mass = [[trial.mass_monomial(i, j) for j in range(N)] for i in range(N)]
    log_rat = [[mass[i][j] * trial.rational_log_moment(i, j)
                for j in range(N)] for i in range(N)]
    jacobi_mass = trial.matmul(trial.matmul(transform_t, mass), transform)
    jacobi_log = trial.matmul(trial.matmul(transform_t, log_rat), transform)

    expected_norm = F(1, 2)
    for j in range(N):
        assert jacobi_mass[j][j] == expected_norm
        assert all(jacobi_mass[i][j] == 0 for i in range(N) if i != j)
        expected_norm *= F(2 * j + 1, 2 * j + 2) ** 2

    lower = F(24971627723, 10**10)
    upper = F(24971627725, 10**10)
    trial_rayleigh = F(431037546492284428291349413855092357566402549355517411544191660844819194853300455011152566144379068543047315348783525537418036866776259829328387338932269283869,
        172610913176102317599207570431494360861475642482911084523054016026571206586097809392227816889834683279773318710076949198129947258978869894270203583973130552750)
    below = [[jacobi_log[i][j] - lower * jacobi_mass[i][j]
              for j in range(N)] for i in range(N)]
    above = [[jacobi_log[i][j] - upper * jacobi_mass[i][j]
              for j in range(N)] for i in range(N)]
    pivots_below = ritz.ldl_pivots(below)
    pivots_above = ritz.ldl_pivots(above)
    assert all(p > 0 for p in pivots_below)
    assert sum(p < 0 for p in pivots_above) == 1
    assert lower < trial_rayleigh < upper

    pi_a_lo, _ = ritz.atan_bounds(F(1, 5))
    _, pi_b_hi = ritz.atan_bounds(F(1, 239))
    pi_lo = 16 * pi_a_lo - 4 * pi_b_hi
    log2_lo = 2 * sum((F(1, 3) ** (2 * k + 1) / (2 * k + 1)
                       for k in range(100)), F(0))
    assert pi_lo > F(31415926535, 10**10)
    assert log2_lo > F(6931471805, 10**10)
    cap = upper - pi_lo / 2 - log2_lo
    assert cap < F(233220, 10**6)

    print("N=64 exact Jacobi Ritz certificate:")
    print("  diagonal mass Gram: verified exactly")
    print(f"  lambda_min in ({float(lower):.12f}, {float(upper):.12f})")
    print("  stored rational trial Rayleigh quotient lies in the same interval")
    print(f"  rho_64 upper: {float(cap):.12f} < 0.233220")
    print("  LDL inertia: 0 eigenvalues below lower; 1 below upper")


if __name__ == "__main__":
    main()

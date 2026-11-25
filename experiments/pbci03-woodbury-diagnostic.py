"""Exploratory float64 Schur/Woodbury scan for the PBCI03 research note.

This is a direct numerical diagnostic, not an interval certificate. Run with
python3 experiments/pbci03-woodbury-diagnostic.py
"""
import math
import json
import numpy as np
from scipy.linalg import eigvalsh, solve

GAMMA = 0.5772156649015328606
PI = math.pi
SHIFT = math.log(2.0)
PRIME_WEIGHT = SHIFT / math.sqrt(2.0)
ALPHA0 = -GAMMA - PI / 2 - 3 * math.log(2.0) - math.log(PI)


def sector_schur(h, low_max, high_max, rates, prime_included):
    low_all = np.arange(low_max + 1)
    high_all = np.arange(low_max + 1, high_max + 1)
    n_all = np.arange(high_max + 1)
    omega_all = n_all * PI / h
    eta_all = np.where(n_all % 2 == 0, 1.0, -1.0)
    k_all = np.full(high_max + 1, math.sqrt(2 / h))
    k_all[0] = 1 / math.sqrt(h)

    weights = np.empty(high_max + 1)
    weights[0] = ALPHA0
    weights[1:] = np.log(n_all[1:] / (2 * h)) - 3 * h * h / (
        2 * PI * PI * n_all[1:] ** 2
    )

    # Exact-formula pole coefficients (evaluated here in float64).
    c = k_all * np.where(eta_all == 1, math.sinh(h / 4), 0) / (
        omega_all**2 + 0.25
    )
    sh = k_all * (eta_all - 1) * math.cosh(h / 4) / 2 / (
        omega_all**2 + 0.25
    )

    # Form prime entries only in the retained low block and low/high cross block.
    p_low = np.zeros((low_max + 1, low_max + 1))
    p_cross = np.zeros((len(high_all), low_max + 1))
    prime_weight = PRIME_WEIGHT if prime_included else 0.0
    if prime_weight:
        for i in range(low_max + 1):
            wi = omega_all[i]
            for k in range(i, low_max + 1):
                if (i - k) % 2:
                    continue
                wk = omega_all[k]
                if i == k == 0:
                    integral = h - SHIFT
                elif i == k:
                    integral = (h - SHIFT) * math.cos(wi * SHIFT) / 2 - math.sin(wi * SHIFT) / (2 * wi)
                else:
                    integral = (wk * math.sin(wk * SHIFT) - wi * math.sin(wi * SHIFT)) / (wi * wi - wk * wk)
                p_low[i, k] = p_low[k, i] = 2 * prime_weight * k_all[i] * k_all[k] * integral
            for pos, k in enumerate(high_all):
                if (i - k) % 2:
                    continue
                wk = omega_all[k]
                if k == i:
                    integral = (h - SHIFT) * math.cos(wi * SHIFT) / 2 - math.sin(wi * SHIFT) / (2 * wi)
                else:
                    integral = (wk * math.sin(wk * SHIFT) - wi * math.sin(wi * SHIFT)) / (wi * wi - wk * wk)
                p_cross[pos, i] = 2 * prime_weight * k_all[i] * k_all[k] * integral

    result = []
    for parity in (0, 1):
        low = low_all[low_all % 2 == parity]
        high = high_all[high_all % 2 == parity]
        if len(high) == 0:
            continue
        v_low = np.empty((len(low), rates))
        v_high = np.empty((len(high), rates))
        for j in range(rates):
            r = 2 * j + 0.5
            q = math.exp(-r * h)
            d = 2 * (1 - (1 if parity == 0 else -1) * q)
            factor = math.sqrt(d)
            v_low[:, j] = factor * k_all[low] * r / (r * r + omega_all[low] ** 2)
            v_high[:, j] = factor * k_all[high] * r / (r * r + omega_all[high] ** 2)

        g = weights[high] - (PRIME_WEIGHT if prime_included else 0.0)
        odd_high_norm2 = 0.0
        if parity == 1:
            odd_high_norm2 = math.sinh(h / 2) - h / 2 - np.dot(sh[low_all[low_all % 2 == 1]], sh[low_all[low_all % 2 == 1]])
            g = g - 2 * odd_high_norm2
        if np.min(g) <= 0:
            return {"parity": parity, "min_high_weight": float(np.min(g)), "schur_min": None}

        pole_ll = 2 * np.outer(c[low], c[low]) - 2 * np.outer(sh[low], sh[low])
        pole_hl = 2 * np.outer(c[high], c[low]) - 2 * np.outer(sh[high], sh[low])
        r_hl = v_high @ v_low.T + pole_hl - p_cross[np.ix_(high - (low_max + 1), low)]
        a_ll = np.diag(weights[low]) + v_low @ v_low.T + pole_ll - p_low[np.ix_(low, low)]

        invg_r = r_hl / g[:, None]
        gram = np.eye(rates) + (v_high.T / g) @ v_high
        rhs = v_high.T @ invg_r
        y = solve(gram, rhs, assume_a="pos", check_finite=False)
        invg_r -= (v_high / g[:, None]) @ y
        schur = a_ll - r_hl.T @ invg_r
        # Explicit analytic tail majorant for omitted high rows. This is
        # reported as a float diagnostic, not an outward-rounded certificate.
        mode_m = high_max
        omega_next = (mode_m + 1) * PI / h
        g_next = math.log((mode_m + 1) / (2 * h)) - 3 * h * h / (
            2 * PI * PI * (mode_m + 1) ** 2
        ) - (PRIME_WEIGHT if prime_included else 0.0)
        if parity == 1:
            g_next -= 2 * odd_high_norm2
        pole_scale = math.sqrt(2 / h) * h * h / (PI * PI)
        rate_factors = np.empty(rates)
        for j in range(rates):
            r = 2 * j + 0.5
            q = math.exp(-r * h)
            d = 2 * (1 - (1 if parity == 0 else -1) * q)
            rate_factors[j] = math.sqrt(d) * math.sqrt(2 / h) * r * h * h / (PI * PI)
        if parity == 0:
            pole_factor = 2 * pole_scale * math.sinh(h / 4)
            pole_low = np.abs(c[low])
        else:
            pole_factor = 2 * pole_scale * math.cosh(h / 4)
            pole_low = np.abs(sh[low])
        rate_constants = np.sum(np.abs(v_low.T - y) * rate_factors[:, None], axis=0)
        constants = rate_constants + pole_factor * pole_low
        prime_tail = 8 * PRIME_WEIGHT / PI if prime_included else 0.0
        tail_bound = np.sum((
            constants / math.sqrt(3 * mode_m**3 * g_next)
            + prime_tail / math.sqrt(mode_m * g_next)
        ) ** 2)
        result.append({
            "parity": parity,
            "min_high_weight": float(np.min(g)),
            "schur_min": float(eigvalsh(schur)[0]),
            "omitted_tail_bound": float(tail_bound),
            "schur_min_after_tail": float(eigvalsh(schur)[0] - tail_bound),
        })
    return result


def run(h, low_max, high_max, rates, prime_included):
    out = sector_schur(h, low_max, high_max, rates, prime_included)
    return {
        "h": h,
        "low_max": low_max,
        "high_max": high_max,
        "rates": rates,
        "prime_included": prime_included,
        "sectors": out,
    }


if __name__ == "__main__":
    for args in [
        (0.5, 20, 1500, 512, False),
        (math.log(2) + 0.000853, 20, 1000, 512, True),
    ]:
        print(json.dumps(run(*args), sort_keys=True))

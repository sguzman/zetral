"""Independent exact-rational audit of DCV03 coefficient and trace tables."""
from fractions import Fraction as F
from math import factorial

Q = 10**6
ceil_div = lambda a, b: (a + b - 1) // b
B = []
for n in range(33):
    x = 576 * n * n
    b = -5_500_000
    if n == 0:
        b += Q  # H_0 >= 1
        for j in range(64):
            d = 4 * j + 1
            y = F(d, 8)
            t5 = sum(((-y) ** m) / factorial(m) for m in range(6))
            if t5 > 0:
                b += int(F(4 * Q, d) * t5)
    else:
        for j in range(64):
            d = 4 * j + 1
            E = 128 + 16 * d + d * d
            v = F(4 * (E * x - 128 * d * d), d * (d * d + x) * E)
            if v > 0:
                b += int(Q * v)
        b -= ceil_div(Q, 144 * n * n)
    B.append(b)

expected = [-339229,365628,1135233,1546200,1817749,2013524,2161355,
            2276194,2367187,2440367,2499942,2548944,2589633,2623693,
            2652441,2676874,2697774,2715771,2731353,2744930,2756813,
            2767267,2776506,2784700,2792006,2798541,2804411,2809695,
            2814473,2818790,2822731,2826319,2829596]
assert B == expected

rows = []
for d, k, l in [(2048,32,32),(128,16,18),(64,8,9),(32,4,5),(24,3,4),
                (16,2,2),(12,1,2),(9,1,1),(8,1,1)]:
    mu = B[k]
    U = sum((1 if n == 0 else 2) * (mu - B[n]) for n in range(k))
    trace = F(mu * d - 4 * U, d * Q)
    m = B[l]
    den = 147 * d**3
    even = 4 * 147 * d*d * (m - B[0])
    odd = 0
    for n in range(1, l):
        w = m - B[n]
        total = 8 * 147 * d*d
        odd_lower = 8 * 3136 * n*n if 8*n <= d else 0
        odd_upper = min(total, 8 * 7744 * n*n)
        even += w * (total - odd_lower)
        odd += w * odd_upper
    parity = F(m * den - max(even, odd), den * Q)
    assert trace > 0 and parity > 0
    rows.append((d, k, mu, U, trace, l, m, parity))

# Elementary enclosure arithmetic also uses exact fractions.
log2_lower = sum((F(2, (2*j+1) * 3**(2*j+1)) for j in range(4)), F(0))
log2_upper = log2_lower + F(1, 4 * 3**9)
assert F(693,1000) < log2_lower < log2_upper < F(694,1000)
assert F(3,5) + F(11,7) + F(2082,1000) + F(23,20) < F(11,2)

print("B0..B32 exact match:", B)
print("rows (d,k,Qmu,U,trace,l,Qmu_parity,parity_gap):")
for row in rows:
    print(*row)
print("log2 and -alpha(0) rational enclosure checks: PASS")

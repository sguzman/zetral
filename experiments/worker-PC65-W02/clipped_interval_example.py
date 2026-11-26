#!/usr/bin/env python3
"""Exact rational example distinguishing clipping from a two-sided enclosure."""
from fractions import Fraction as F

# The one-sided diagonal guarantee is d >= lo, not d <= hi.
lo, hi, d = F(1), F(3), F(5)
assert lo <= d
clip = min(d, hi)
assert lo <= clip <= hi and clip <= d

# A negative basis coefficient shows why the interval cannot be called a
# two-sided enclosure for the un-clipped exact diagonal.
coefficient = F(-2)
image = (min(coefficient * lo, coefficient * hi),
         max(coefficient * lo, coefficient * hi))
assert image == (F(-6), F(-2))
assert coefficient * d == -10 and not image[0] <= coefficient*d <= image[1]
assert coefficient * clip == -6 and image[0] <= coefficient*clip <= image[1]

# In a 2x2 congruence, interval arithmetic still contains the clipped form.
# D=diag(5,2), D_clip=diag(3,2), T=[[1,2],[-1,1]].
T=((F(1),F(2)),(F(-1),F(1)))
D=((d,F(0)),(F(0),F(2)))
Dc=((clip,F(0)),(F(0),F(2)))
def congruence(A):
    return tuple(tuple(sum(T[k][i]*A[k][l]*T[l][j]
                           for k in range(2) for l in range(2))
                       for j in range(2)) for i in range(2))
C, Cc = congruence(D), congruence(Dc)
assert C == ((F(7),F(8)),(F(8),F(22)))
assert Cc == ((F(5),F(4)),(F(4),F(14)))
# Their difference is T^t diag(2,0) T, hence PSD (rank-one outer product).
diff=tuple(tuple(C[i][j]-Cc[i][j] for j in range(2)) for i in range(2))
assert diff == ((F(2),F(4)),(F(4),F(8)))
assert diff[0][0] > 0 and diff[0][0]*diff[1][1]-diff[0][1]**2 == 0

# The entrywise interval products contain Cc and exclude C in entries that
# involve the coefficient signs; this illustrates the actual proof route.
intervals=(( (F(3),F(5)), (F(0),F(4)) ),
           ( (F(0),F(4)), (F(6),F(14)) ))
for i in range(2):
    for j in range(2):
        a,b=intervals[i][j]
        assert a <= Cc[i][j] <= b
assert not intervals[0][0][0] <= C[0][0] <= intervals[0][0][1]
assert not intervals[0][1][0] <= C[0][1] <= intervals[0][1][1]
print("interval excludes un-clipped congruence but contains the clipped congruence")
print("exact Loewner difference = [[2,4],[4,8]] is PSD")

# PGF01 — Exact finite prime graph fibers through physical length log 5

2026-11-25. AI-assisted candidate deduction without RH. Uses LPE01, ECR03 and DSC04. Classical direct integral and weighted Schur comparison, no originality claim or independent review.

## 1. Base rotation and exact finite fibers

Set h=log 5, s=log 2, t=log(3/2), eps=log(5/4), a=s-t+eps=log(5/3). Then h=2s+eps and 0<eps<t<s. At h=log 5 the shift log 5 itself vanishes a.e.; the only nonzero prime-power shifts are s, s+t, 2s with weights b2=log2/sqrt2, b3=log3/sqrt3, b4=log2/2. All higher shifts vanish a.e.

Write physical coordinates x=y+j s with y in (0,s), and j=0,1, plus j=2 if y<eps. This is a unitary decomposition of Lebesgue L² into fibers with 2 or 3 coordinates, up to null endpoints. The shifts s and 2s act within a base fiber as edges between successive j (weight b2), and between 0 and 2 if present (weight b4). Because h<s+(s+t)=log6, the positive log3 shift can originate only at j=0, and is allowed exactly when y<a. It joins vertex j=0 at base y to base R(y)=(y+t) mod s, at vertex j=1 if y<s-t, otherwise j=2. Reverse edges are adjoints.

Thus the base graph is a circle rotation with missing outgoing edges on the hole (a,s); incoming edges are missing on R((a,s))=(eps,t). The rotation is irrational since log(3/2)/log2 rational would imply a nontrivial integer power equality between 2 and 3. Every orbit meets an open hole in both forward and backward directions, by density of irrational rotations (or use the explicit cover below). Consequently every non-boundary base vertex belongs to a path with unique start y0 in (eps,t). The translates of the start subintervals along their allowed paths partition (0,s) up to null endpoints; they preserve Lebesgue measure. No double counting of reverse edges.

At h=log5 the start interval splits into exactly three cases:
- eps<y0<s-t=log(4/3). Then y1=y0+t>a and y1<s; path stops. Both fibers have size 2, target level 1.
- s-t<y0<2s-3t+eps=log(40/27). Then y1=y0+t-s lies in (0,eps); y2=y0+2t-s lies between t and a; y3=y0+3t-2s lies between 2t-s and eps; y4=y0+4t-2s lies above a and below s. Hence sizes (2,3,2,3,2) and target levels (2,1,2,1).
- 2s-3t+eps<y0<t. Then y1=y0+t-s lies below eps, y2=y0+2t-s lies above a and below s. Hence sizes (2,3,2), target levels (2,1).

The needed comparisons follow by monotonicity of log and rational inequalities, e.g. 5/4<4/3<40/27<3/2, 9/8<5/4, 5/3<27/16. In the middle case y4 ranges from 3t-s=log(27/16) to eps+t=log(15/8)<s, and at lower is 3t-s>a. In the third case y2<3t-s<s. This proves there are at most five base fibers per component. The full Hilbert space is the orthogonal direct sum over the three start intervals of L² of that interval with values in R^N (or C^N), N=4,12,7. Each prime operator fiber is the same finite real symmetric weighted adjacency matrix on that interval. The prime operator norm equals the maximum of the three finite adjacency norms, since every start interval has positive measure. All entries are nonnegative; for each symmetric matrix its norm equals its largest eigenvalue by the absolute-value Rayleigh comparison.

## 2. Executed rational upper bound

The following exact finite weighted Schur witness is enough for all shorter windows, without computing any eigenvalue. Use outward interval arithmetic for the prime weights to verify b2<=491/1000, b3<=635/1000, b4<=347/1000, and construct each finite adjacency matrix with these upper entries. For every graph choose the positive integer vector below, listing chain coordinates in base-path order, increasing j within each chain:
    sizes (2,2): [1000000,544218,544218,1000000]
    sizes (2,3,2): [655562,274178,1000000,836466,1000000,274178,655562]
    sizes (2,3,2,3,2): [536716,215850,1000000,750049,865019,869999,869999,865019,750049,1000000,215850,536716].
For the integer numerator adjacency A (denominator 1000), verify A w<=1221 w componentwise. The weighted Schur estimate (or weighted Cauchy on each edge) gives ||A/1000||<=1221/1000. The true adjacency has smaller nonnegative entries, hence the same upper bound. The smallest integer slack in the largest graph is 25294, positive. No floating point assumption is used to verify the witness.

Actual V8 execution: source experiments/pgf01-log5-prime-graph-witness.js commit ee9408018cb5a17686b875318ce13c9b5e4b469e, raw experiments/results/pgf01-log5-prime-graph-witness.json commit c348f131498e673a3fe17d289d638ea9826fa05d, both exactly read back. Reproduce: node experiments/pgf01-log5-prime-graph-witness.js. It verifies integer ordering comparisons, exact prime weight intervals (scale 10^24), every edge and integer weighted inequality. The witness vectors were suggested by exploratory floating power iteration, but all accepted inequalities are exact integer comparisons. No separate Node/Rust run. Full graph geometry is a mathematical derivation, not machine-checked.

For any h<=log5 the prime operator is exactly the compression of the h=log5 prime operator to the shorter physical interval by zero extension. Thus ||P_h||<=1.221. In particular this improves the independent tower sum bound in log4<h<=log5 (about 1.522). It can be used as the high comparison loss in the exact residual method. For h<=log4 use the earlier sharper bound where applicable. No extrapolation above log5, no new positivity certificate, no negative restored eigenvalue or RH proof. PGF02 next integrate all three exact shift matrices and tail terms, then execute a bounded test.

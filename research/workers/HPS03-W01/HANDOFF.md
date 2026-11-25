# HPS03 — Why scalar packet selection does not preserve indexed depth

Status: READY_FOR_REVIEW

AI-assisted negative result about the localization logic; no claim of an arithmetic counterexample. This uses only the finite-dimensional algebra of the packet decomposition described in FES01/TPH02. No source retrieval, numerical computation, or formal verification was performed.

## Obstruction

The TPH02 packet argument is scalar: the exact frame identity preserves the Rayleigh quotient after summing packet contributions, so a negative total guarantees at least one packet with negative penalized quotient. The same averaging alone does not guarantee that one packet preserves a (j)-dimensional negative subspace.

For (j=2), let the two localized Hermitian matrices on the original two-dimensional coefficient space be
\[
A_1=\begin{pmatrix}-2&0\\0&1\end{pmatrix},\qquad
A_2=\begin{pmatrix}1&0\\0&-2\end{pmatrix}.
\]
Their sum is (-I_2), with negative index two, whereas each summand has negative index one. Thus the total frame-averaged form can be strictly negative on every vector in a two-dimensional subspace even though no single packet carries two negative directions. This is the matrix analogue of the distinction between scalar packet selection and simultaneous indexed selection.

More generally, if a frame gives (Q=\sum_n Q_n) on a selected coefficient space, negativity of (Q\) implies that at least one (Q_n) has a negative direction, but need not imply any (Q_n\prec0). The scalar min–max selection therefore cannot be repeated (j) times without an additional matrix selection or packet orthogonality argument. The (2\times2) example only rules out that abstract inference; it is not shown to arise from the Weil form or from the specific FES01 frame.

## Consequence for an upper characterization

For an upper bound on (N_j\), a successful localization proof needs control of the *aggregate* negative index contributed by all packets, or a construction that preserves a common (j)-dimensional channel subspace. Counting one negative direction from each of (j) packet indices is not by itself legitimate: the packet outputs are components of one analysis map and need not correspond to (j) orthogonal vectors in the original (L^2\) space.

One possible route is a vector-valued packet estimate: localize an entire near-bottom (j)-dimensional eigenspace and prove that, after the moment penalty, a single packet has a negative-definite matrix on a fixed-dimensional subspace. The matrix example shows this cannot follow from the scalar average identity alone; it would require extra structure such as a common coercive margin and quantitative control of the packet Gram matrices. Another route is an upper bound on the sum of local negative indices with weights strong enough to be summable over packet centers. Neither estimate is supplied by TPH02's scalar moment bound.

## Limits

- This identifies a precise gap in the scalar selection strategy, not impossibility of a higher-index converse.
- No arithmetic countermodel, new Weil-form theorem, RH conclusion, or spectral computation is claimed.
- Any future proof must separately address packet aggregation or dimension preservation.

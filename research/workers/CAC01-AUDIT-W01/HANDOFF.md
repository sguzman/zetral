# CAC01 cell-complement bound audit

2026-11-25. I independently derived the cell-complement inequalities and replayed `node experiments/cac01-cell-complement-bound.js` in Node.js 24.22.3 from main commit `a234173`. It exited successfully and returned the exact reported interval endpoints. This checks the arithmetic program's reproducibility; the mathematical argument below is my own derivation of the bound it computes.

## Fourier–Jensen estimate

For a cell size (h=1/m) and (f) of mean zero on each cell, let (F) be the cellwise primitive, zero at both cell endpoints. Dirichlet Poincare gives ​\(\|F\|_2\le h\|f\|_2/\pi\), while \(\widehat f(\omega)=i\omega\widehat F(\omega)\). With probability density proportional to \(|\widehat f(\omega)|^2\), this implies \(\mathbb E(\omega^{-2})\le h^2/\pi^2\). Jensen for the concave logarithm yields
\[
 \frac{\int\log(|\omega|/(2\pi))|\widehat f(\omega)|^2d\omega}
 {\|f\|_2^2}
 \ge \log(1/(2h))=\log(m/2).
\]

The pointwise digamma estimate needed is \(\alpha(t)\ge\log(|t|/(2\pi))-3/2\). For (0<t\le1), the digamma series and its first positive term give
\[
 \alpha(t)-\log(t/(2\pi))\ge \alpha_0+\frac{16t^2}{1+4t^2}+\log(2\pi/t).
\]
The right side has its minimum at \(t_0=(\sqrt2-1)/2\) on (0<t\le1), with value \(\alpha_0+(2-\sqrt2)+\log(2\pi/t_0)\). The script encloses this value in `[-1.374005475754283860,-1.373997876046110964]`, strictly above (-3/2).

For (t\ge1), use the first-order digamma expansion at (z=1/4+it/2). The real logarithm contributes \(\tfrac12\log(1+1/(4t^2))\), the real (-1/(2z)) term is \(-2/(1+4t^2)\), and DLMF's sector remainder is at most (2\sqrt2/(3t^2)<1/t^2). Therefore the difference from \(\log(t/(2\pi))\) is at least (-2/5-1>-3/2). Together these establish the global lower bound used by the complement estimate.

## Arithmetic perturbations and executed threshold

On (I=(-1/2,1/2)), the two directed prime shifts have combined norm at most (2\log2/\sqrt2). For the negative rank-one pole term, write (d(x)=\sinh(x/2)). Cellwise mean-zero orthogonality and mean-zero Poincare give
\[
 2|\langle d,f\rangle|^2\le \frac{2h^2}{\pi^2}\|d'\|_2^2\|f\|_2^2
 =\frac{1/2+\sinh(1/2)}{2\pi^2m^2}\|f\|_2^2.
\]
The positive rank-one pole contribution may be dropped in a lower bound. Thus the computed full-operator complement lower bound is
\[
 \log(m/2)-3/2-2\log2/\sqrt2-
 \frac{1/2+\sinh(1/2)}{2\pi^2m^2}.
\]
The reproduced outward-rounded interval at (m=24) is strictly positive: `[0.004558698520004858,0.004558698520005133]`. (m=16) remains negative; (m=32,64) are positive with larger margins. This is a complement lower bound on a single length-one window, not a full positivity certificate: the finite cell-average block still needs its own certified Schur analysis.

No separate operator matrix was computed here, and no spectral or RH conclusion follows from this complement estimate alone.

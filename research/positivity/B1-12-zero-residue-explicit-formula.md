# B1-12 — Zero-residue formula and a uniform bound for the smoothed multiplier

Date: 2026-11-27. Status: conditional analytic deduction under RH; no
positivity conclusion.

## Question

Can the RH-conditional subexponential estimate in B1-11 be sharpened by
shifting the pole-removed Mellin integral to the other side of the critical
line and collecting its zero residues?

## Continuation and contour

Retain the notation of B1-11: \(F(q)=-P'(q)\),
\(\widetilde\eta(s)=\int\eta(v)e^{sv}dv\), and

\[
 \widehat\Delta_h(\xi)=\frac{e^{i\xi h}}{2\pi i}
 \int_{(-a)}\widetilde\eta(s)e^{-sh}
 F(1/2+i\xi-s)\,ds,
 \tag{1}
\]

where \(0<a<1/4\); (1) is B1-11's pole-removed formula. Assume RH.
Choose \(b\in(1/8,1/6)\) and shift the line in (1) to \(\Re s=b\).
In the corresponding q-strip \(1/2-b\leq\Re q\leq1/2+a\), the
Möbius expansion

\[
 F(q)=\sum_{k\geq1}\mu(k)(-\zeta'/\zeta)(kq)
\]

continues meromorphically: the k=1 term has the nontrivial zero poles
\(q=1/2+i\gamma\); the k=2 term has the pole at q=1/2; and the k≥3 tail
converges locally normally because \(3(1/2-b)>1\). The k=2 nontrivial
zeros are at real part 1/4 under RH and are outside this strip. The pole of
\(\zeta\) at q=1 is outside the strip as well. These facts establish that
the listed poles are all poles crossed.

At \(q=1/2+i\gamma\), the q-residue of \(-\zeta'/\zeta(q)\) is
\(-m_\gamma\), hence its s-residue is \(+m_\gamma\), where
\(s=i(\xi-\gamma)\). At q=1/2, the k=2 term is
\(-\mu(2)\zeta'/\zeta(2q)\); its q-residue is \(-1/2\), hence its
s-residue is \(+1/2\), at \(s=i\xi\). Shifting an upward vertical line
to the right gives old integral = new integral minus the residues. Thus

\[
 \widehat\Delta_h(\xi)= -\sum_\gamma m_\gamma e^{i\gamma h}
       \widetilde\eta(i(\xi-\gamma))
       -\frac12\widetilde\eta(i\xi)+R_{h,b}(\xi),
 \tag{2}
\]

where

\[
 R_{h,b}(\xi)=\frac{e^{i\xi h}}{2\pi i}
 \int_{(b)}\widetilde\eta(s)e^{-sh}
 F(1/2+i\xi-s)\,ds.
 \tag{3}
\]

The zero sum in (2) is absolutely convergent. Indeed, \(\widetilde\eta(iu)\)
is Schwartz, while the Riemann–von Mangoldt formula implies
\(N(T+1)-N(T)=O(\log(T+2))\), counting multiplicity. The latter local
consequence is stated, for example, in Titchmarsh's *The Theory of the
Riemann Zeta-Function*, as reproduced in the TIFR lecture notes, §9,
Corollary 1 ([PDF](https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr01.pdf)).
The same bound on unit intervals, summed against the Schwartz tail, gives

\[
 \sum_\gamma m_\gamma |\widetilde\eta(i(\xi-\gamma))|
 \ll_\eta \log(2+|\xi|).
 \tag{4}
\]

For \(q=1/2-b+it\), the functional equation and the RH fixed-strip
logarithmic-derivative bound used in B1-11 give
\(\zeta'/\zeta(q)\ll_b\log(2+|t|)\). For k=2,
\(2\Re q=1-2b=1/2+(1/2-2b)\), where
\(1/2-2b\in(1/6,1/4)\), so the same RH estimate gives
\(\zeta'/\zeta(2q)\ll_b\log(2+|t|)\). For k≥3,
\(k\Re q>1\), and the sum is absolutely bounded. Therefore
\(F(1/2-b+it)\ll_b\log(2+|t|)\). Since
\(|e^{-sh}|=e^{-bh}\) on (3), Schwartz decay yields

\[
 |R_{h,b}(\xi)|\ll_{b,\eta}e^{-bh}\log(2+|\xi|),\qquad h\geq0.
 \tag{5}
\]

For horizontal edges at height T, choose T in each unit interval at distance
\(\gg1/\log(T+2)\) from every zero ordinate there; this is possible by the
unit-interval count. The logarithmic derivative on the edge is then at most
polylogarithmic in T (by its local partial-fraction expansion and the
functional equation). The Schwartz transform dominates this growth, so the
horizontal integrals vanish. This justifies the limiting contour shift with
the residue sum interpreted as its absolutely convergent sum.

## Consequence and limits

Combining (2), (4), and (5), and bounding the isolated Schwartz term by a
constant times \(\log(2+|\xi|)\), proves

\[
 \sup_{h\geq0} c_h <\infty,\qquad
 c_h=\sup_{\xi\in\mathbb R}
 \frac{|\widehat\Delta_h(\xi)|}{\log(2+|\xi|)}
 \ll_\eta 1,
 \tag{6}
\]

conditional on RH. The bound is uniform in the endpoint parameter because
the zero residues have phases of modulus one and the shifted-contour term
decays as \(e^{-bh}\). No explicit numerical value for the implicit
constant is claimed.

This is a bound for the smoothed first-prime endpoint discrepancy only. It
does not give a sign, a lower bound, positivity of the full Weil form, or a
spectral correspondence. The identity is a smoothed explicit-formula
rearrangement of classical prime-zeta and zeta-zero data; no novelty claim is
made. Dependencies on RH, the classical logarithmic-derivative bound, the
Riemann–von Mangoldt local zero count, and contour limiting arguments are
explicit. No computation, Lean verification, or independent RH verification
was performed.

## Falsification audit

The k=2 correction cannot be omitted: it contributes the \(-\tfrac12
\widetilde\eta(i\xi)\) term in (2). The sign follows from both the chain
rule and the reversal \(q-1/2=-(s-i\xi)\). The zero residues are weighted
by analytic multiplicity and have phase \(e^{i\gamma h}\), not
\(e^{-i\gamma h}\). The estimate only needs their absolute sum, so phase
errors would not alter (6), but they would invalidate (2). No claim of
uniformity in the cutoff family \(\eta\) is made.

**Next:** update LXXX and the backlog with this RH-conditional boundedness
checkpoint, then pursue an independent alternative—an unconditional lower
bound/counterexample attempt for the multiplier or an analytic route that
incorporates the compensating archimedean contribution.

# PMA63-W01 — Prime-shift matrix normalization audit

Date: 2026-11-25 UTC. Baseline `02978d1a94e74f9ca44e22a708c8b2356c7a8a15`. This is a scoped analytic audit of the finite prime-shift block in `experiments/lpa01-log11-regimes.js`; it does not certify the full arithmetic form.

## Claim checked

On the single cell \([0,h]\), let
\[
e_n(x)=\frac{\nu_n}{\sqrt h}\cos(\omega_n x),\qquad
\omega_n=\pi n/h,\qquad \nu_0=1,\quad \nu_n=\sqrt2\ (n>0).
\]
These are orthonormal Neumann cosine modes. For a shift \(0<s<h\), define the zero-truncated translations
\[
(T_s f)(x)=\mathbf1_{[0,h-s]}(x)f(x+s),\qquad
(T_{-s}f)(x)=\mathbf1_{[s,h]}(x)f(x-s).
\]
The positive prime-shift magnitude \(w(T_s+T_{-s})\), with \(w>0\), has matrix entries
\[
P_{nk}(s)=\begin{cases}
\displaystyle\frac{2w\nu_n\nu_k}{h}I_{nk}(s),& n\equiv k\pmod 2,\\[4pt]
0,&n\not\equiv k\pmod 2,
\end{cases}
\quad
I_{nk}(s)=\int_0^{h-s}\cos(\omega_nx)\cos(\omega_k(x+s))\,dx.
\]
The arithmetic form subtracts this positive shift magnitude, matching the generator's `... - P(n,k)`.

## Derivation

The positive-shift matrix element is \((\nu_n\nu_k/h)I_{nk}(s)\). In the negative-shift element, change variables \(y=h-x\). The Neumann modes satisfy \(e_j(h-y)=(-1)^j e_j(y)\), so this element equals \((-1)^{n+k}(\nu_n\nu_k/h)I_{nk}(s)\). Adding the two translations therefore doubles the positive-shift integral in a fixed reflection parity and cancels it between opposite parities. This is why the calculation can be done separately on even and odd indices; the parity here is reflection about \(h/2\).

The integral has the following exact cases:

- \(n=k=0\): \(I_{00}=h-s\).
- \(n=k>0\): product-to-sum and \(\omega_nh=\pi n\) give
  \[
  I_{nn}=\frac{(h-s)\cos(\omega_ns)}2-\frac{\sin(\omega_ns)}{2\omega_n}.
  \]
- \(n\ne k\) of the same parity: for \(u(x)=\cos(\omega_nx)\), \(v(x)=\cos(\omega_k(x+s))\),
  \[
  \frac{d}{dx}(v'u-vu')=(\omega_n^2-\omega_k^2)uv.
  \]
  At \(x=h-s\), \(v'=0\) and \(u'=(-1)^n\omega_n\sin(\omega_ns)\); at \(x=0\), \(v'u-vu'=-\omega_k\sin(\omega_ks)\). Since \((-1)^{n+k}=1\), integration yields
  \[
  I_{nk}=\frac{\omega_k\sin(\omega_ks)-\omega_n\sin(\omega_ns)}{\omega_n^2-\omega_k^2}.
  \]
  This also covers one zero index and one nonzero index.

## Source mapping and scope

In `experiments/lpa01-log11-regimes.js` (blob `70803220ccfd44ee65ea1d13014e72798bacfe45`), `norm(n)` is \(\nu_n\); `om[n]` is \(\omega_n\); and `P(n,k)` sums `2*w*norm(n)*norm(k)*I/h` over the active shifts. Its diagonal, zero-mode, and off-diagonal branches match the formulas above, and `entry(n,k)` subtracts `P`. The active shifts at \(h=239/100<\log 11\) are \(\log 2,\log 3,\log 4,\log 5,\log 7,\log 8,\log 9\). Their weights are respectively \(\Lambda(m)/\sqrt m\): \(\log2/\sqrt2,\log3/\sqrt3,\log2/2,\log5/\sqrt5,\log7/\sqrt7,\log2/\sqrt8,\log3/3\). No \(\log 11\) term is present below its endpoint. After the audit began, main advanced through LB02, but the generator and PBCI02 blobs remained unchanged at `70803220ccfd44ee65ea1d13014e72798bacfe45` and `92749541d014e0198a65cf2b6137db30adf08b5e`; this audit does not duplicate or verify the resulting full comparison.

This verifies the truncated translation integral and its sign, parity cancellation, basis normalization, and prime-power weights for the prime block. It is consistent with PBCI02's exact overlap formula (main blob `92749541d014e0198a65cf2b6137db30adf08b5e`). It does not independently establish how the complete original Weil form is represented by this one-cell model, nor audit the archimedean, pole, high-mode, or residual blocks, the interval arithmetic, or any positivity result. No full candidate or RH claim follows. No numerical run was needed for this symbolic identity.

Reproduction/source inspection:

```sh
git show 02978d1a94e74f9ca44e22a708c8b2356c7a8a15:experiments/lpa01-log11-regimes.js | sed -n '350,385p'
git show 02978d1a94e74f9ca44e22a708c8b2356c7a8a15:research/positivity/PBCI02-parity-prime-exact-matrices.md | sed -n '1,60p'
```

Outcome: no flaw found in the finite prime-entry formula within the stated scope. Full campaign and operator audits remain with the lead.

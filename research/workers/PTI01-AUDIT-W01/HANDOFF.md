# PTI01-AUDIT-W01 — independent audit of prime-tower inverse

- **ID:** PTI01-AUDIT-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `db331c4` (Campaign XXXVII PTI01 checkpoint)
- **Scope:** Independently verify PTI01's finite-chain decomposition, inverse tridiagonal matrix, endpoint corrections, per-prime spectral bounds, and transport of the two pole exponentials. Do not infer a joint prime sum inverse or duplicate PTI02's joint-capacity task.
- **Acceptance question:** Do the fiberwise covariance inverse and endpoint transport identities hold for every fiber, including singleton fibers and shifts longer than the interval?

## Independent derivation

Fix a prime (p), (s=\log p), (r=e^{-s/2}), and (L=2a). Under the partition (x=-a+t+js), (0\le t<\min(s,L)), each fiber has (m(t)=\lceil(L-t)/s\rceil) points, modulo a null set. The compressed operator

\[
K_p=I+\sum_{k\ge1}r^k(T_{ks}+T_{-ks})
\]

therefore has fiber matrix (C_m=(r^{|i-j|})_{0\le i,j<m}). This follows directly because the (k)-shift joins exactly coordinates whose indices differ by (k); the sum is finite on each fixed interval.

For (m\ge2), let (B_m) have endpoint diagonal entries (1), interior diagonal entries (1+r^2), and neighboring entries (-r). For (m=1), set (B_1=1-r^2). Interior row (i) of (B_mC_m) has off-diagonal cancellation

\[
-r\,r^{|i-1-j|}+(1+r^2)r^{|i-j|}-r\,r^{|i+1-j|}=0\quad(j\ne i),
\]

and diagonal (1-r^2). At the first and last rows the two-term geometric cancellation gives the same result. In the singleton case (B_1C_1=1-r^2) directly. Thus (B_mC_m=(1-r^2)I) for every (m\ge1). Expanding squares independently gives

\[
\langle B_mv,v\rangle=(1-r^2)|v_0|^2+\sum_{j=1}^{m-1}|v_j-rv_{j-1}|^2,
\]

which verifies strict positivity, including (m=1). This confirms (C_m^{-1}=B_m/(1-r^2)) and the PTI01 physical endpoint corrections. The two endpoint indicators overlap on a singleton fiber and must both be counted; the resulting scalar is (1-r^2).

The full-line Fourier multiplier is

\[
1+2\sum_{k\ge1}r^k\cos(k s\xi)=\frac{1-r^2}{1-2r\cos(s\xi)+r^2}.
\]

Its range lies in ([(1-r)/(1+r),(1+r)/(1-r)]). Compression to (L^2(I)) preserves these quadratic-form bounds, so each individual (K_p) is strictly positive with the stated uniform-in-window bounds. The bounds are prime-dependent and do not imply a bound for the aggregate prime sum.

For (w_+(x)=e^{x/2}), each fiber satisfies (B_mw_+=(1-r^2)E_Rw_+): the interior recurrence vanishes, the left endpoint vanishes, and the right endpoint is the only nonzero row. Reflection gives (B_mw_-=(1-r^2)E_Lw_-). Consequently (K_p^{-1}w_+=E_Rw_+) and (K_p^{-1}w_-=E_Lw_-). This also holds for (m=1), where both endpoints coincide, and for (s\ge L), where (K_p=I) and both indicators equal one. The diagonal pole pairing is

\[
\langle w_+,K_p^{-1}w_+\rangle=\int_{\max(-a,a-s)}^ae^x\,dx=e^a(1-e^{-\min(s,L)}),
\]

and the mixed pairing is the length of the right endpoint strip, (\min(s,L)), as stated.

## Findings and boundaries

- No algebraic error found in PTI01's finite-chain inverse or per-prime pole transport, including the singleton and long-shift edge cases.
- The unique direct integral is over the residue coordinate (t\in[0,\min(s,L))); fibers at threshold endpoints are null sets. Rounding (m(t)) at such endpoints does not affect the operator.
- The prime tower inverse is individual to (p). Different primes induce different fiber decompositions and tridiagonal operators, so no joint inverse, summed capacity estimate, or conclusion about (T_e/T_o) follows here.
- The external teal-sea note suggestion remains a prior-art caveat, not a verified theorem source for the finite-interval correction. This audit uses only PTI01's explicit formulas and the standard finite geometric matrix algebra.

## Evidence

- Reviewed `research/positivity/PTI01-compressed-prime-tower-inverse.md` at `db331c4`.
- Exact repository command: `git show origin/main:research/positivity/PTI01-compressed-prime-tower-inverse.md`.
- No numerical or formal computation was run; the checks are symbolic matrix multiplication and direct fiber algebra.
- **Not checked:** PTI02 joint/local boundary comparisons, PTI03 cross-prime cancellation, or any Hilbert–Pólya/RH conclusion.

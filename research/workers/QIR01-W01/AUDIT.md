# QIR01-W01 — Independent finite-window extraction audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I checked the finite-window normalization/error inequality, the triangular-window kernel, the coefficient and grid-localization margins, the absolute-phase error, and the two-point log-slope estimate in `research/positivity/QIR01-finite-window-extraction.md`. I found no discrepancy in those calculations under the stated bounds and hypotheses.

The spectral remainder rate is conditional on BPF03's fixed-set pencil estimates and BPF01's operator comparison. Its constants are not evaluated. The resulting certificate therefore applies only when independent bounds for those constants, scale, amplitudes, and separation are supplied. This is not a finite computation on actual spectral data, nor a practical recovery guarantee.

## Calculation checks

- The normalized triangle has unit mass and is the convolution of two uniform densities on \([-T/4,T/4]\). Its Fourier transform is \(K_T(x)=\operatorname{sinc}^2(xT/4)\), with \(0\le K_T(x)\le\min(1,16/(T^2x^2))\). This gives exactly the off-frequency leakage bounds used in (3) and (4).
- For \(\delta=\widehat d-d\), direct normalization multiplies the true normalized trace and observation error by \(e^{-2\delta a}\). On \(a>0\), \(|e^{-2\delta a}|\le e^{2\eta a}\) and \(|e^{-2\delta a}-1|\le e^{2\eta a}-1\). Splitting model/noise error from the bounded signal \(M\) gives (2). Factoring out \(g=e^{-2\delta A}\) leaves \(|t|\le T/2\) and hence the gain-adjusted factor \(e^{\eta T}\). Absolute-amplitude calibration depends on \(\eta A\), whereas shape control depends on \(\eta T\), as stated.
- At a true frequency the own lobe is exactly one. Every other term is at least \(\Delta\) away, so the total cross term is bounded by \((M-|c_j|)\min(1,16/(T^2\Delta^2))\). For a grid node within \(h/2\), \(|x|=|\omega_j-\omega|T/4\le hT/8\le1\); squaring \(\sin x/x\ge1-x^2/6\) yields the lower lobe \(1-(hT/8)^2/3\). The stated \(L_{in}\) and \(U_{out}\) follow. If \(L_{in}>U_{out}\), every true frequency has a marked grid node, every mark is within \(r_0\) of a true frequency, same-frequency marked nodes have diameter at most \(2r_0\), and cross-frequency gaps exceed \(\Delta_{low}-2r_0>2r_0\). Thus splitting at gaps greater than \(2r_0\) recovers exactly one cluster per frequency under these sufficient conditions.
- In (4), the localized own term differs from \(c_j\) by at most \(|c_j|(|1-K_T|+|e^{i(\omega_j-\widehat\omega)A}-1|)\); the remaining terms use separation at least \(\Delta_{low}-r_0\). The dephasing bound \(\min(2,Ar_0)\) has the correct sign-independent form.
- If \(e^{-2da}N(a)\in[l,L]\) and relative observation errors are at most \(\nu<1\), then the ratio of two observed depths contributes a log-prefactor/error of magnitude at most \(\log(L(1+\nu)/(l(1-\nu)))\). Dividing by \(2(a_2-a_1)\) gives (5) without requiring a prefactor limit.

## Limitations

No synthetic data or numerical experiment was needed; these are deterministic inequalities. I did not independently establish BPF01–04's spectral asymptotics or the fixed-set remainder rate, and I did not verify availability of any required certified constants for zeta. Failure of the stated margin is inconclusive, and none of these bounds establishes an observed off-line zero. No human review, formal verification, or novelty claim is made.

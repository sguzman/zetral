# PC04 — Candidate positivity at h=241/100

Campaign LXV closed at h=2.41, under the inherited operator formulas and analytic certificate chain. The new exact endpoint witness at 56/5 has C=2776/1000 over 24627 refined cells (PC01). Both parities use J128 KEM20 M8192 T768 and 41 low modes.

## Odd sector

[Raw](../../experiments/results/pc02-241-100-odd-j128-em20.json) a1c835fd8acd032ce28357fa332b31c4e92c7e73, blob 72ca31e640ae60e009c410835f16b78d5fcc3720; full parsed blob readback, 2816216 bytes, 41 positive energy lower endpoints, 40 positive directional lower bounds, baseline fails first leading minor. [Factors](../../experiments/results/pc03-241-100-odd-constant-factors.json) 59ebd6d43af5512cadaad5f63b7b3b2ad48a3335, [joint](../../experiments/results/pc03-241-100-odd-constant-joint.json) d036ee60db6c8e23ffbea064e113f3fbefd20c06, [exact replay](../../experiments/results/pc03-241-100-odd-constant-replay.json) 2fd0396659cf37c87412403c0f0c4e6deb1cc60c. All eight allocations pass 41/41 exact minors; float allocation objective 0.8038467500752925 is only a search heuristic.

## Independent stored audit

[Source](../../experiments/pc04-constant-oscillatory-replay.js) 2dd07b3aa9f51404b15ae3cea12d077c968266ac and [results](../../experiments/results/pc04-241-100-independent-replay.json) 59303e7ebac23fa45e449c64ff05a3aaaf43a922. Independently reconstructed 3362 baseline entries, 3362 refined entries, 82 baseline weighted radii and all 82 positive leading determinants using separate integer row elimination. Fixed-energy normalized exact grid margins 11655/10^6 even, 196153/10^6 odd; next grid point fails each. Both sectors' factors and joint allocations regenerated exactly as parsed objects, all eight exact replay result objects match per sector. The even replay differs only in its descriptive scope string; odd replay entire parsed object matches. Source executed in cloud JS, not a Node CLI or CI run.

## Scoped analytic audit

For decreasing f(r)=(r^2+omega^2)^(-1), spacing two gives half the integral from 1/2 <= sum f(1/2+2j) <= that integral plus f(1/2). Relative to half the integral from zero, the lower deficit is at most f(0)/4 and the upper excess at most f(0). The exponential correction has absolute bound E_h f(0) in either parity. Hence A(n) differs from sqrt(2)/2 by at most (2 sqrt(2)h/pi^2)(1+E_h)/n. For n>M this yields the PC03 uniform epsilon. Expanding (a0+S)^2 gives the stated constant term, sine-square bound and cross term 2a0 sum p_s U(theta_s). Abel summation on parity progressions bounds the complex weighted sum by first weight / |sin theta|, with the inherited triangle fallback when the denominator is uncertified; all sine and cosine projections obey that bound. Weighted Minkowski then combines the constant-plus-sine estimate with epsilon sqrt(R_p). Dividing by positive CL^2 and taking the minimum with R_p preserves an upper bound on the positive scalar rank coefficient. Signed intervals are rescaled outward; the comparison is in Loewner order rather than entrywise. Constant numerator ranks and the eighth remainder retain the inherited geometric factors. No new EM formula was introduced; its earlier scoped audit applies unchanged.

The even margin is now thin (1.1655% of fixed energy); this is a motivation for a new guarded endpoint and tighter tail treatment, not a proof of failure at larger h.

Reproduce stored audit: node experiments/pc04-constant-oscillatory-replay.js experiments/results/pc02-241-100-even-j128-em20.json experiments/results/pc03-241-100-even-constant-replay.json experiments/results/pc02-241-100-odd-j128-em20.json experiments/results/pc03-241-100-odd-constant-replay.json

Candidate frontier 2.41. Full independent original-form normalization and evaluation, human/formal review, novelty assessment and RH remain unresolved.

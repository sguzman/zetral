# C04-W01 lead review — ACCEPTED as audit and diagnostic only

25 November 2026. Reviewed worker head 566a0a3ab2b35dd06e751a3f3f98126edfa7bdb1 against baseline 028a5133cb0a238ed365b80d6461c5416cd56725. Compare shows two commits, exactly four added files, no changes outside worker scope. Reviewed all four files at the pinned head. The worker's off-diagonal, sine-integral and tail estimates and finite-block comparison agree with C02; the negative feasibility outcome is valid supporting evidence. The diagnostic uses the actual X=2 arithmetic form (the q=2 contribution vanishes at the endpoint). The forcing is exp(-x), as stated. No known zeros enter. The worker's choice of a Python diagnostic is accepted as a bounded exception to the Rust preference because its cloud environment lacked Rust on PATH.

Lead rerun: copied the script's numerical body into /tmp/zetral_worker_check.py, adding only a version print and removing an extra blank line. Executed python /tmp/zetral_worker_check.py in the current tool environment. Python 3.13.5, NumPy 2.3.5, SciPy 1.17.0. All printed numeric results (four configurations, three off-diagonal checks) match the worker's archived display precision exactly. Raw output:

N=2 cond=421.86 sumabs_v=395.66734 residual_sq_|j|<=300=215.3899125 norm=14.676168 C02_tail_J512=4036.3377 tailnorm=63.532178 hmin=0.0030602385
N=4 cond=1091.2 sumabs_v=720.38668 residual_sq_|j|<=300=204.879642 norm=14.313617 C02_tail_J512=13426.725 tailnorm=115.87375 hmin=0.0017355291
N=8 cond=1790.4 sumabs_v=896.95729 residual_sq_|j|<=300=85.43664801 norm=9.2431947 C02_tail_J512=20978.225 tailnorm=144.83862 hmin=0.0014190248
N=12 cond=2143.3 sumabs_v=937.35053 residual_sq_|j|<=300=43.38956678 norm=6.5870757 C02_tail_J512=23093.065 tailnorm=151.96403 hmin=0.0013668486
offdiagonal direct-correlation checks:
(m,n)=(0,1) direct=-0.230963660959 divided_difference=-0.230963660959 difference=0
(m,n)=(1,2) direct=-0.00915174740803 divided_difference=-0.00915174740803 difference=1.73e-18
(m,n)=(2,-1) direct=-0.157026356442 divided_difference=-0.157026356442 difference=2.78e-17

Accepted as independent AI audit of C02 and reproducible nonvalidated numerical evidence of a practical barrier. Not independent human review, formal verification, interval validation, a proof of impracticality of all possible methods, or a root certificate. Imported Zhu certificate not independently executed. Original worker files integrated by content copy from the pinned commit; worker branch preserved. No campaign milestone double-counted. Next worker package: S03-W01, independent small-window arithmetic diagnostics and source/normalization audit, under updated coordination ledger; avoid duplicating S02 analytic correction derivation.

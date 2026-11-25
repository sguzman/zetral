# Campaign LXII — Approach the log-11 boundary

Opened 2026-11-25 after LXI. Candidate frontier 2.30 (both 32/32 full interval minors, separate exact stored replay). The even normalized comparison margin is 0.001788, odd 0.063256. The exact local witness at 21/2 has bound 2.632, checked across 6795 cells. Aim to investigate whether strict positivity comparisons can advance toward the next prime-power boundary without changing the operator.

- LPA01: integrate the endpoint-21/2 rational witness, exact guard h<log(21/2), and validate the source against the stored witness. Preserve all original guards and the 66-digit weighted interval arithmetic.
- LPA02: bounded even test at h=47/20, J4096, M6656, T576, initially 32 low modes. Record failure or success honestly. Odd only after an even pass.
- LPA03: if warranted by measured failure, target a residual or arithmetic improvement; do not assume positive midpoint certifies the full form. Explore correlated tail or larger support only when diagnostic evidence justifies it.
- LPA04: exact stored reconstruction, audit, close or pivot on evidence. Any larger candidate frontier requires both full parity comparisons.

Lead owns LPA01–04; worker scopes unchanged. No mission change, external submission, expense, RH proof or priority claim. README remains stable.

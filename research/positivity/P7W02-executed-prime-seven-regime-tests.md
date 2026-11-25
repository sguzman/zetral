# P7W02 — Executed four- and five-shift residual comparisons

2026-11-25. AI-assisted candidate computation; not independent mathematical or formal verification. No RH proof, actual negative restored eigenvalue or priority claim.

Source experiments/p7w02-prime-seven-certificate.js commit c5023dfffefcb94859875dd5b0706c84e3a81a0a; raw experiments/results/p7w02-prime-seven-certificate.json commit e3697c1b386a0179fc2c86c40cad2fc29c35986a. Actual V8 execution. Source read back exactly. The 1434587-character raw JSON exceeds the ordinary file-content response limit; direct Git blob readback (blob 2bbf92fd284237e0908cf6a03ca4a5976761975d) returned the full matching length and parsed all six result rows with matching sign outcomes, first pivots and relative diagnostics. A byte-for-byte comparison to the original in-memory output was not performed after this separate blob read. Reproduce: node experiments/p7w02-prime-seven-certificate.js. No separate Node/Rust reproduction.

The program embeds and reexecutes P7W01's two exact rational norm witnesses. For log6<h<log7 use the four actual shifts 2,3,4,5 and norm upper 1.792; for log7<h<log8 also include the actual shift 7 with weight log7/sqrt7 and norm upper 2.071. The actual prime weights are separately checked against the rational upper weights, and interval logarithms check the active regime. These norm bounds never replace the actual clipped Wronskian prime entries. Use respectively 12 or 18 low modes in each parity to ensure a positive high diagonal comparison (verified directly). The odd projected pole estimate uses sum_(n>2q)n^-4<=1/(3(2q)^3) with q low modes.

Retain T=192, J=2048, M=3072, S=97 and 10^42 main lattice from RRC03. High trials are selected by fixed-point midpoint LDL, low rational basis by integer Jacobi rotation (up to 5000 iterations), and basis invertibility is separately checked by its Gram. Every full upper form, finite residual Gram, three rank-one tail matrices, fourth directional remainder and row radius are enclosed by outward arithmetic. Exact integer principal minors test the lower comparison; all component intervals and exact trial coefficients are preserved. Approximate relative diagnostics use only diagonally scaled midpoint energies, not a verified generalized eigenvalue.

Actual outcomes:
| h | active shifts | even | odd |
| --- | --- | --- | --- |
| 9/5 | 2,3,4,5 | inconclusive | positive |
| 37/20 | 2,3,4,5 | inconclusive | inconclusive |
| 39/20 | 2,3,4,5,7 | inconclusive | inconclusive |

At h=9/5 the first even direction upper interval is [42990984030645442503,49993255508330593055]/10^42, finite residual upper 7742288385550100889/10^42, leading tail 926901122724416954/10^42, individual fourth remainder upper 6981721873875511003/10^42, fourth block allowance 83780662486506132026/10^42, and row radius 62198699601578082054/10^42. Its individual lower endpoint is positive, but the block fourth allowance and arithmetic radius individually exceed the near-null energy. At h=37/20 the first even upper interval includes zero, and at h=39/20 both first upper intervals include zero. There is no certified negative upper direction among these diagnostics. No full positivity improvement over h=1.78. The exact norm witnesses and actual prime-seven arithmetic integration are retained. The data justify a higher signed rational moment and more accurate scalar rate sums rather than merely increasing T. P7W02 complete as candidate.

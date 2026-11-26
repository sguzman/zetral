// Exact independent LDL check of the stored U75 lower matrix and adjacent grid.
function audit(c) {
  const A = c.lowerInteger.map(row => row.map(BigInt)), E = c.energyUpper.map(BigInt), n = A.length;
  const assert = (p, m) => { if (!p) throw Error(m); };
  const grid = BigInt(c.marginDenominator), m = BigInt(c.marginNumerator);
  assert(c.h === '251/100' && n === 52 && c.n === n && grid === 1000000n && m > 0n && E.length === n && E.every(v => v > 0n), 'regime');
  assert(A.every((row, i) => row.length === n && row.every((v, j) => v === A[j][i])), 'symmetry');
  function ld(k) {
    const B = A.map((row, i) => row.map((v, j) => k === null ? v : grid * v - (i === j ? k * E[i] : 0n)));
    let prev = 1n, minors = [];
    for (let j = 0; j < n; j++) {
      const p = B[j][j];
      if (p <= 0n) return {count: j, minors, failedPivot: String(p)};
      minors.push(String(p));
      for (let i = j + 1; i < n; i++) for (let l = i; l < n; l++) {
        const v = p * B[i][l] - B[j][i] * B[j][l];
        assert(v % prev === 0n, 'exact division'); B[i][l] = v / prev;
      }
      prev = p;
    }
    return {count: n, minors};
  }
  const baseline = ld(null), pass = ld(m), adjacent = ld(m + 1n);
  assert(baseline.count === n && c.principalMinors.length === n && baseline.minors.every((v, i) => v === c.principalMinors[i]), 'stored principal minors');
  assert(pass.count === n && adjacent.count < n, 'grid comparison');
  return {h: c.h, odd: c.odd, n, matchedPrincipalMinors: n,
    marginNumerator: String(m), marginDenominator: String(grid),
    passingGridPositiveMinors: pass.count, nextGridPositiveMinors: adjacent.count,
    nextGridFailedPivot: adjacent.failedPivot,
    scope: 'Stored matrix only; independent fraction-free LDL. Interval reconstruction and original-form evaluation are separate.'};
}
if (typeof module !== 'undefined') module.exports = audit;

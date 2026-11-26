// Independent exact reconstruction of the U75 odd residual aggregate.
function audit(readJson) {
  const Q = String(10n ** 66n), n = 52;
  const chunks = Array.from({length: 24}, (_, i) => readJson(
    `experiments/results/u75-251-100-odd-t1024-m24576-finite-${String(i + 1).padStart(3, '0')}.json`));
  const full = readJson('experiments/results/u75-251-100-odd-t1024-m24576-aggregate-105-24575.json');
  const halves = [
    readJson('experiments/results/u75-251-100-odd-t1024-m24576-aggregate-105-12391.json'),
    readJson('experiments/results/u75-251-100-odd-t1024-m24576-aggregate-12393-24575.json'),
  ];
  const zero = () => Array.from({length: n}, () => Array.from({length: n}, () => [0n, 0n]));
  const sum = zero(); let next = 105, count = 0;
  const add = (target, chunk) => {
    if (chunk.start !== next || chunk.end % 2 !== 1 || chunk.count !== (chunk.end - chunk.start) / 2 + 1 ||
        chunk.scale !== Q || chunk.finite.length !== n || chunk.finite.some(row => row.length !== n))
      throw Error(`chunk contract at ${chunk.start}`);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const [lo, hi] = chunk.finite[i][j].map(BigInt);
      if (lo > hi) throw Error('reversed interval');
      target[i][j][0] += lo; target[i][j][1] += hi;
    }
    next = chunk.end + 2; count += chunk.count;
  };
  const compare = (target, stored, label) => {
    let endpoints = 0;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) for (let e = 0; e < 2; e++) {
      if (target[i][j][e] !== BigInt(stored.finite[i][j][e])) throw Error(`${label} endpoint mismatch ${i},${j},${e}`);
      endpoints++;
    }
    return endpoints;
  };
  const fullSum = zero(), halfSums = [zero(), zero()]; let endpointTotal = 0;
  next = 105; count = 0;
  for (let i = 0; i < chunks.length; i++) {
    const c = chunks[i];
    add(fullSum, c);
    const k = i < 12 ? 0 : 1;
    // Reconstruct half sums independently without changing the full coverage cursor.
    for (let r = 0; r < n; r++) for (let s = 0; s < n; s++) {
      const [lo, hi] = c.finite[r][s].map(BigInt);
      halfSums[k][r][s][0] += lo; halfSums[k][r][s][1] += hi;
    }
  }
  if (next !== 24577 || count !== 12236 || full.start !== 105 || full.end !== 24575 || full.count !== count || full.scale !== Q)
    throw Error('full aggregate coverage');
  endpointTotal += compare(fullSum, full, 'full');
  const ranges = [[105, 12391], [12393, 24575]];
  for (let h = 0; h < 2; h++) {
    const [start, end] = ranges[h], subset = chunks.slice(h * 12, h * 12 + 12);
    const hcount = subset.reduce((a, c) => a + c.count, 0);
    if (halves[h].start !== start || halves[h].end !== end || halves[h].count !== hcount || halves[h].scale !== Q)
      throw Error(`half ${h + 1} metadata`);
    endpointTotal += compare(halfSums[h], halves[h], `half ${h + 1}`);
  }
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    if (fullSum[i][j][0] !== fullSum[j][i][0] || fullSum[i][j][1] !== fullSum[j][i][1])
      throw Error(`aggregate symmetry ${i},${j}`);
    if (i === j && fullSum[i][j][0] < 0n) throw Error(`negative lower diagonal ${i}`);
  }
  return {chunks: chunks.length, modes: count, matchedEndpoints: endpointTotal,
    matrixDimension: n, exactScale: Q, symmetric: true, nonnegativeLowerDiagonals: n,
    fullRange: [105, 24575], halfRanges: ranges,
    scope: 'Exact reconstruction from stored residual blocks; not independent per-mode evaluation.'};
}
if (typeof module !== 'undefined') module.exports = audit;

// Re-run bounded independent U75 closing audits on a GitHub Actions runner.
const fs = require('node:fs');
const cp = require('node:child_process');
const readText = p => fs.readFileSync(p, 'utf8');
const readJson = p => JSON.parse(readText(p));
const assert = (p, m) => { if (!p) throw Error(m); };

const aggregate = require('./u75-04-aggregate-audit.js')(readJson);
const cert = readJson('experiments/results/u75-251-100-odd-t1024-m24576-rank-replay.json');
const trialText = Array.from({length: 6}, (_, i) => readText(
  `experiments/results/u75-251-100-odd-t1024-m24576-trial-part${i + 1}.txt`)).join('');
const trial = JSON.parse(trialText);
const source = readText('experiments/tc01-post-log11-em.js');
const load = text => { const m = {exports: {}}; new Function('module', text)(m); return m.exports; };
const modules = {
  generator: source,
  staged: readText('experiments/u75-t1024-m24576-staged.js'),
  assemble: readText('experiments/u75-t1024-m24576-assemble.js'),
  osc: readText('experiments/pc03-constant-oscillatory-factors.js'),
  dy: readText('experiments/lb03-dyadic-tail-factors.js'),
  transform: readText('experiments/u75-t1024-m24576-transform.js'),
  tighten: readText('experiments/u73-t1024-even-rank-tightening.js'),
  audit: readText('experiments/u74-04-interval-only-audit.js')
    .replace('n===50', 'n===52').replace('r.h==="5/2"', 'r.h==="251/100"')
    .replace('r.M===20480', 'r.M===24576').replace('r.witnessWindow==="49/4"', 'r.witnessWindow==="62/5"'),
};
const matrixAuditSource = readText('experiments/u74-04-matrix-audit.js')
  .replace('{hn:5n,hd:2n,J:128,M:20480,T:1024,lowCount:50,KEM:20}',
           '{hn:251n,hd:100n,J:128,M:24576,T:1024,lowCount:52,KEM:20}');
assert(matrixAuditSource !== readText('experiments/u74-04-matrix-audit.js'), 'matrix audit adaptation');
const matrixAudit = load(matrixAuditSource);
const proposal = cert.proposal;
const matrix = matrixAudit(trial, readJson('experiments/results/u75-251-100-odd-t1024-m24576-aggregate-105-24575.json'),
  readJson('experiments/results/u75-251-100-odd-t1024-m24576-fraction-free.json'), cert, modules);
const ldl = require('./u75-04-stored-ldl-audit.js')(cert.replay);
assert(matrix.matchedEntries === 52 * 52 && matrix.matchedRadii === 52 &&
  matrix.narrowed.join(',') === cert.widths.map(x => x.narrowedEntries).join(','), 'matrix audit output');
assert(ldl.matchedPrincipalMinors === 52 && ldl.passingGridPositiveMinors === 52 &&
  ldl.nextGridPositiveMinors < 52, 'LDL output');

// Reconstruct current M=24576 trial and confirm its low-mode residual is
// byte-identical to the legacy M=20480 block before checking the tail extension.
const staged = load(modules.staged), paramsTrial = staged.trial(source, false);
const patch = readJson('experiments/results/u75-251-100-even-t1024-m24576-trial-patch.json');
const oldTrialText = Array.from({length: 6}, (_, i) => readText(`experiments/u75-even-trial-part-${i + 1}.txt`)).join('');
const oldTrial = JSON.parse(oldTrialText);
const patchedOldTrial = {...oldTrial, M: patch.M,
  tails: oldTrial.tails.map((t, i) => ({...t, C8: patch.C8[i]}))};
assert(patch.M === 24576 && patch.C8.length === 52 &&
  JSON.stringify(patchedOldTrial) === JSON.stringify(paramsTrial), 'M24576 trial patch reconstruction');
const oldBlock = readJson('experiments/u75-even-residual-001.json');
const rebuilt = staged.finite(source, paramsTrial, 104, 1126);
assert(JSON.stringify(rebuilt) === JSON.stringify(oldBlock), 'low residual changed under M extension');
const oldAggregate = readJson('experiments/results/u75-251-100-even-t1024-m20480-aggregate-104-20480.json');
const extendedAggregate = readJson('experiments/results/u75-251-100-even-t1024-m24576-aggregate-104-24576.json');
const extension = Array.from({length: 4}, (_, i) => readJson(
  `experiments/u75-even-m24576-extension-${String(i + 1).padStart(3, '0')}.json`));
let nextMode = 20482, extCount = 0;
for (const c of extension) {
  assert(c.start === nextMode && c.end % 2 === 0 && c.count === (c.end - c.start) / 2 + 1 && c.finite.length === 52, 'extension coverage');
  nextMode = c.end + 2; extCount += c.count;
}
assert(nextMode === 24578 && extCount === 2048, 'extension total');
for (let i = 0; i < 52; i++) for (let j = 0; j < 52; j++) for (let e = 0; e < 2; e++) {
  let add = BigInt(oldAggregate.finite[i][j][e]);
  for (const c of extension) add += BigInt(c.finite[i][j][e]);
  assert(add === BigInt(extendedAggregate.finite[i][j][e]), `extended aggregate ${i},${j},${e}`);
}
const cutoffReuse = {trialPatchRegenerated: true, oldTrialPatchFieldsMatched: true, lowResidualByteEquivalent: true,
  extensionChunks: extension.length, extensionModes: extCount,
  checkedAggregateEndpoints: 2 * 52 * 52, scope: 'Exact M cutoff reuse and extension sum; not independent arithmetic source evaluation.'};

// Regenerate witness and guards through the committed generator and compare
// with stored exact artifacts; all heavyweight evaluation remains on the runner.
const childOptions = {encoding: 'utf8', maxBuffer: 32 * 1024 * 1024};
const generatedWitness = cp.execFileSync(process.execPath, ['experiments/u75-witness-guard.js', '--witness'], childOptions);
const storedWitness = Array.from({length: 4}, (_, i) => readText(`experiments/u75-witness-part-${i + 1}.txt`)).join('');
assert(JSON.stringify(JSON.parse(generatedWitness)) === JSON.stringify(JSON.parse(storedWitness)), 'witness regeneration');
const generatedGuards = cp.execFileSync(process.execPath, ['experiments/u75-witness-guard.js'], childOptions);
const storedGuards = readJson('experiments/u75-guard-result.json');
assert(JSON.stringify(JSON.parse(generatedGuards)) === JSON.stringify(storedGuards), 'guard regeneration');
const guardRows = storedGuards.rows[0].guards;
for (const odd of [false, true]) {
  const at = low => guardRows.find(x => x.low === low && x.odd === odd);
  assert(at(51) && !at(51).positive && at(52) && at(52).positive, `low support threshold ${odd}`);
}
const witnesses = {regenerated: true, exactBoundNumerator: JSON.parse(generatedWitness).best.boundNumerator,
  checkedCells: JSON.parse(generatedWitness).best.checked, guardThresholds: '51 fails both parities; 52 passes both'};

const output = {campaign: 'LXXV U75-04 closing audit', candidateFrontier: '2.50',
  oddRankComparison: {positiveMinors: cert.replay.positiveMinors,
    margin: `${cert.replay.marginNumerator}/${cert.replay.marginDenominator}`,
    nextGridFails: cert.replay.nextGridFails}, aggregate, matrix, ldl, cutoffReuse, witnesses,
  limitations: ['Finite fixed-energy certificate only.', 'No independent evaluation of the original quadratic form.',
    'No RH proof or human/formal proof review.']};
const out = 'experiments/results/u75-04-closing-audit.json';
fs.writeFileSync(out, JSON.stringify(output, null, 2) + '\n');
console.log(JSON.stringify({out, aggregateModes: aggregate.modes, matchedEntries: matrix.matchedEntries,
  matchedRadii: matrix.matchedRadii, matchedMinors: ldl.matchedPrincipalMinors,
  cutoffExtensionModes: extCount, witnessCells: witnesses.checkedCells, bytes: fs.statSync(out).size}));

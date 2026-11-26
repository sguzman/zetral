// Generate one bounded odd residual block on a GitHub Actions runner.
// Usage: node experiments/u75-run-odd-block.js START END
const fs = require('node:fs');
const staged = require('./u75-t1024-m24576-staged.js');
const [startArg, endArg] = process.argv.slice(2);
const start = Number(startArg), end = Number(endArg);
const block = (start - 105) / 1024;
const expectedEnd = Math.min(start + 1022, 24575);
const expectedCount = (expectedEnd - start) / 2 + 1;
if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) ||
    !Number.isInteger(block) || block < 3 || block > 23 ||
    start % 2 !== 1 || end !== expectedEnd || expectedCount < 1 || expectedCount > 512)
  throw Error('invalid odd block');
const output = `experiments/results/u75-251-100-odd-t1024-m24576-finite-${String(block + 1).padStart(3, '0')}.json`;
const parts = Array.from({length: 6}, (_, i) =>
  fs.readFileSync(`experiments/results/u75-251-100-odd-t1024-m24576-trial-part${i + 1}.txt`, 'utf8')).join('');
const trial = JSON.parse(parts);
const source = fs.readFileSync('experiments/tc01-post-log11-em.js', 'utf8');
const result = staged.finite(source, trial, start, end);
if (result.start !== start || result.end !== end || result.count !== expectedCount ||
    result.finite.length !== 52 || result.finite.some(row => row.length !== 52))
  throw Error('residual output validation failed');
fs.writeFileSync(output, JSON.stringify(result) + '\n');
console.log(JSON.stringify({start, end, count: result.count, scale: result.scale,
  dimensions: [result.finite.length, result.finite[0].length], output}));

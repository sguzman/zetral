// Focused reproducibility check for the campaign's geometric tail factors.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../../../experiments');
const dyadic = require(path.join(root, 'lb03-dyadic-tail-factors.js'));
const source = fs.readFileSync(path.join(root, 'lpa01-log11-regimes.js'), 'utf8');
const params = { hn: 239n, hd: 100n, J: 4096, M: 8192, T: 768, lowCount: 41 };
for (const odd of [false, true]) {
  const actual = dyadic(source, params, odd);
  const sector = odd ? 'odd' : 'even';
  const stored = JSON.parse(fs.readFileSync(path.join(root,
    `results/lb03-239-100-geometric-tail-${sector}.json`), 'utf8')).factors;
  if (JSON.stringify(actual) !== JSON.stringify(stored)) throw new Error(`${sector} factors differ`);
  const Q = BigInt(actual.scale);
  if (actual.ratios.some(([, upper]) => BigInt(upper) >= Q)) throw new Error(`${sector} factor is not < 1`);
  console.log(`${sector}: eight factors exactly match stored intervals; all upper endpoints < 1`);
}

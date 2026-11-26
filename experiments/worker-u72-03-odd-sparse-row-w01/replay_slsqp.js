const fs=require('node:fs');
const p='experiments/results/u72-62-25-odd-sparse-row-w01/';
const raw=JSON.parse(fs.readFileSync(p+'raw-t832.json','utf8'));
const allocation=JSON.parse(fs.readFileSync(p+'slsqp-allocation.json','utf8'));
const transform=JSON.parse(fs.readFileSync(p+'transform.json','utf8'));
const replay=require('./source-u72-exact-replay.js');
const out=replay(raw,allocation,transform);
fs.writeFileSync(p+'slsqp-replay.json',JSON.stringify(out));
console.log(JSON.stringify({positiveMinors:out.positiveMinors,failedMinor:out.failedMinor,margin:out.marginNumerator}));

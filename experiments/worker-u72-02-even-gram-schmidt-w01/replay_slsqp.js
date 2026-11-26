const fs=require('node:fs'),p='experiments/results/u72-62-25-even-gram-schmidt-w01/';
const raw=JSON.parse(fs.readFileSync(p+'raw-t832.json','utf8')),allocation=JSON.parse(fs.readFileSync(p+'slsqp-allocation.json','utf8')),
 transform=JSON.parse(fs.readFileSync(p+'transform.json','utf8')),replay=require('./source-u72-exact-replay.js');
const out=replay(raw,allocation,transform);fs.writeFileSync(p+'slsqp-replay.json',JSON.stringify(out));
console.log(JSON.stringify({positiveMinors:out.positiveMinors,failedMinor:out.failedMinor,margin:out.marginNumerator}));

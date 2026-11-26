const fs=require('node:fs');
const exact=require('./source/u72-exact-replay-1024.js');
for(const sector of ['even','odd']){
 const p=`experiments/results/u72-t1024-trial-refinement-w01/${sector}-`;
 const raw=JSON.parse(fs.readFileSync(p+'raw.json','utf8'));
 const allocation=JSON.parse(fs.readFileSync(p+'slsqp-allocation.json','utf8'));
 const transform=JSON.parse(fs.readFileSync(p+'transform.json','utf8'));
 const out=exact(raw,allocation,transform);
 fs.writeFileSync(p+'slsqp-replay.json',JSON.stringify(out));
 console.log(JSON.stringify({sector,positiveMinors:out.positiveMinors,failedMinor:out.failedMinor,marginNumerator:out.marginNumerator}));
}

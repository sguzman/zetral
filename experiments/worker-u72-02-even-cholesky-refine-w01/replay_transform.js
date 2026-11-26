const fs=require('node:fs'),p='experiments/results/u72-62-25-even-cholesky-refine-w01/';
const raw=JSON.parse(fs.readFileSync(p+'raw-t832.json','utf8')),base=JSON.parse(fs.readFileSync(p+'base-allocation.json','utf8')),
 sel=JSON.parse(fs.readFileSync(p+'row-transform.json','utf8')),source=fs.readFileSync('experiments/tc01-post-log11-em.js','utf8'),
 extended=require('./source-u72-staged.js').extend(source),Rows=sel.rows.map(row=>row.map(([j,v])=>[j,BigInt(v)]));
const z=require('./source-u72-transform.js')(raw,base.factors,extended,Rows);fs.writeFileSync(p+'transform.json',JSON.stringify(z));
const exact=require('./source-u72-exact-replay.js'),seed=JSON.parse(fs.readFileSync(p+'seed-allocation.json','utf8')),
 sr=exact(raw,{...seed,factors:base.factors},z);fs.writeFileSync(p+'seed-replay.json',JSON.stringify(sr));
let proposal=null,pr=null,error=null;try{proposal=require('./lxx-full-energy-proposal.js')(raw,base.factors,z);pr=exact(raw,proposal,z);}catch(e){error=String(e)}
if(proposal)fs.writeFileSync(p+'float-allocation.json',JSON.stringify(proposal));if(pr)fs.writeFileSync(p+'float-replay.json',JSON.stringify(pr));
console.log(JSON.stringify({determinant:z.determinant,seed:{positiveMinors:sr.positiveMinors,margin:sr.marginNumerator,failed:sr.failedMinor},proposal:pr?{positiveMinors:pr.positiveMinors,margin:pr.marginNumerator,failed:pr.failedMinor}:null,error}));

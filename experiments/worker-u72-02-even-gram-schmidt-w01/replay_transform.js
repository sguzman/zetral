const fs=require('node:fs'),p='experiments/results/u72-62-25-even-gram-schmidt-w01/';
const raw=JSON.parse(fs.readFileSync(p+'raw-t832.json','utf8')),base=JSON.parse(fs.readFileSync(p+'base-allocation.json','utf8')),
 sel=JSON.parse(fs.readFileSync(p+'row-transform.json','utf8')),source=fs.readFileSync('experiments/tc01-post-log11-em.js','utf8'),
 extended=require('./source-u72-staged.js').extend(source),Rows=sel.rows.map(row=>row.map(([j,v])=>[j,BigInt(v)]));
const z=require('./source-u72-transform.js')(raw,base.factors,extended,Rows);fs.writeFileSync(p+'transform.json',JSON.stringify(z));
const exact=require('./source-u72-exact-replay.js'),seed=JSON.parse(fs.readFileSync(p+'seed-allocation.json','utf8')),
 seedReplay=exact(raw,{...seed,factors:base.factors},z);fs.writeFileSync(p+'seed-replay.json',JSON.stringify(seedReplay));
let proposal=null,floatReplay=null,floatError=null;try{proposal=require('./lxx-full-energy-proposal.js')(raw,base.factors,z);floatReplay=exact(raw,proposal,z);}catch(e){floatError=String(e)}
if(proposal)fs.writeFileSync(p+'float-allocation.json',JSON.stringify(proposal));if(floatReplay)fs.writeFileSync(p+'float-replay.json',JSON.stringify(floatReplay));
console.log(JSON.stringify({determinant:z.determinant,changedRows:z.changedRows,seed:{positiveMinors:seedReplay.positiveMinors,failedMinor:seedReplay.failedMinor,margin:seedReplay.marginNumerator},float:floatReplay?{positiveMinors:floatReplay.positiveMinors,failedMinor:floatReplay.failedMinor,margin:floatReplay.marginNumerator}:null,floatError}));

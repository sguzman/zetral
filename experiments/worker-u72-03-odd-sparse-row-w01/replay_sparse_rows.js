const fs=require('node:fs');
const root='experiments/results/u72-62-25-odd-sparse-row-w01/';
const raw=JSON.parse(fs.readFileSync(root+'raw-t832.json','utf8'));
const base=JSON.parse(fs.readFileSync(root+'base-allocation.json','utf8'));
const selection=JSON.parse(fs.readFileSync(root+'row-selection.json','utf8'));
const source=fs.readFileSync('experiments/tc01-post-log11-em.js','utf8');
const staged=require('./source-u72-staged.js');
const extended=staged.extend(source);
const rows=selection.rows.map(row=>row.map(([j,x])=>[j,BigInt(x)]));
const transformed=require('./source-u72-transform.js')(raw,base.factors,extended,rows);
fs.writeFileSync(root+'transform.json',JSON.stringify(transformed));
const exact=require('./source-u72-exact-replay.js');
const seed=JSON.parse(fs.readFileSync(root+'seed-allocation.json','utf8'));
const seedReplay=exact(raw,{...seed,factors:base.factors},transformed);
fs.writeFileSync(root+'seed-replay.json',JSON.stringify(seedReplay));
let proposal=null,floatReplay=null,floatError=null;
try { proposal=require('./lxx-full-energy-proposal.js')(raw,base.factors,transformed); floatReplay=exact(raw,proposal,transformed); }
catch(e) { floatError=String(e); }
if(proposal)fs.writeFileSync(root+'float-allocation.json',JSON.stringify(proposal));
if(floatReplay)fs.writeFileSync(root+'float-replay.json',JSON.stringify(floatReplay));
console.log(JSON.stringify({changedRows:transformed.changedRows,determinant:transformed.determinant,seed:{positiveMinors:seedReplay.positiveMinors,failedMinor:seedReplay.failedMinor,margin:seedReplay.marginNumerator},float:floatReplay?{positiveMinors:floatReplay.positiveMinors,failedMinor:floatReplay.failedMinor,margin:floatReplay.marginNumerator}:null,floatError}));

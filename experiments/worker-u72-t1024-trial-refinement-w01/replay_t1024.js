const fs=require('node:fs');
const root='experiments/results/u72-t1024-trial-refinement-w01/';
const staged=require('./source/u72-staged-1024.js');
const source=staged.extend(fs.readFileSync('experiments/tc01-post-log11-em.js','utf8'));
const params=staged.params;
const dyadic=require('../lb03-dyadic-tail-factors.js');
const osc=require('../pc03-constant-oscillatory-factors.js');
const propose=require('./source/lxx-full-energy-proposal.js');
const exact=require('./source/u72-exact-replay-1024.js');
for(const sector of ['even','odd']){
 const odd=sector==='odd',prefix=root+sector+'-';
 const raw=JSON.parse(fs.readFileSync(prefix+'raw.json','utf8'));
 const f0=dyadic(source,params,odd),f=osc(source,params,f0);
 fs.writeFileSync(prefix+'factors.json',JSON.stringify(f));
 const basis=JSON.parse(fs.readFileSync(root+`basis-${sector}.json`,'utf8'));
 const rows=basis.map(row=>row.map((x,j)=>[j,BigInt(x)]));
 const transform=require(`./source/u72-${sector}-transform-1024.js`)(raw,f,source,rows);
 fs.writeFileSync(prefix+'transform.json',JSON.stringify(transform));
 const seedPath=prefix+'t832-seed-allocation.json';
 const seed=JSON.parse(fs.readFileSync(seedPath,'utf8'));
 const seedProposal={weights:seed.weights,denominator:seed.denominator,factors:f};
 const seedReplay=exact(raw,seedProposal,transform);
 fs.writeFileSync(prefix+'seed-replay.json',JSON.stringify(seedReplay));
 let floatProposal=null,floatReplay=null,floatError=null;
 try {floatProposal=propose(raw,f,transform);floatReplay=exact(raw,floatProposal,transform);}
 catch(e){floatError=String(e)}
 if(floatProposal)fs.writeFileSync(prefix+'float-allocation.json',JSON.stringify(floatProposal));
 if(floatReplay)fs.writeFileSync(prefix+'float-replay.json',JSON.stringify(floatReplay));
 console.log(JSON.stringify({sector,seed:{positiveMinors:seedReplay.positiveMinors,failedMinor:seedReplay.failedMinor,marginNumerator:seedReplay.marginNumerator},float:floatReplay?{positiveMinors:floatReplay.positiveMinors,failedMinor:floatReplay.failedMinor,marginNumerator:floatReplay.marginNumerator}:null,floatError}));
}

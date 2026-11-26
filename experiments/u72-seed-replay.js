const fs=require('node:fs'),base=__dirname.replace(/\/experiments$/,'')+'/',read=p=>JSON.parse(fs.readFileSync(base+p,'utf8'));
const raw=read('experiments/results/u72-62-25-even-t832-raw.json'),z=read('experiments/results/u72-62-25-even-t832-transform.json'),proposal=read('experiments/results/u72-62-25-even-t832-allocation.json'),old=read('experiments/results/u71-247-100-even-t832-m16384-transformed-replay.json').proposal.weights.map(BigInt),D=10n**12n;
const weights=old.slice(0,7).concat([old[7]/2n,old[7]-old[7]/2n],old.slice(8));if(weights.length!==54||weights.reduce((a,b)=>a+b,0n)!==D)throw Error('seed allocation shape');
const seeded={...proposal,weights:weights.map(String)},exact=require(base+'experiments/u72-exact-replay.js'),baseline=exact(raw,seeded,null),transformed=exact(raw,seeded,z);
const out={baseline,transformed};fs.writeFileSync(base+'experiments/results/u72-62-25-even-t832-u71-seed-replay.json',JSON.stringify(out));
console.log(JSON.stringify({baseline:{positiveMinors:baseline.positiveMinors,failed:baseline.failedMinor},transformed:{positiveMinors:transformed.positiveMinors,failed:transformed.failedMinor}}));

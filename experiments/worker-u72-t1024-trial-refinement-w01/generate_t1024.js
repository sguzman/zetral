const fs=require('node:fs');
const staged=require('./source/u72-staged-1024.js');
const source=fs.readFileSync('experiments/tc01-post-log11-em.js','utf8');
const extended=staged.extend(source);
for(const sector of ['even','odd']){
 const odd=sector==='odd',prefix=`experiments/results/u72-t1024-trial-refinement-w01/${sector}-`;
 const trial=staged.trial(source,odd);
 fs.writeFileSync(prefix+'trial.json',JSON.stringify(trial));
 const first=94+Number(odd),last=16384-Number(odd),chunks=[];
 for(let start=first;start<=last;){let end=Math.min(start+1022,last);if(end%2!==Number(odd))end--;const c=staged.finite(source,trial,start,end);chunks.push(c);fs.writeFileSync(prefix+`finite-${start}-${end}.json`,JSON.stringify(c));console.log(`${sector} chunk ${start}-${end} count=${c.count}`);start=end+2;}
 const assembled=require('./source/u72-assemble-1024.js')(extended,trial,chunks);
 fs.writeFileSync(prefix+'raw.json',JSON.stringify(assembled));
 console.log(`${sector} raw assembled; modes=${chunks.reduce((a,c)=>a+c.count,0)}`);
}

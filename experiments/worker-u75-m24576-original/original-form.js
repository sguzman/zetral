const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
let joined='';
for(let i=1;i<=6;i++) joined+=fs.readFileSync(path.join(root,`u75-even-trial-part-${i}.txt`),'utf8');
const trial=JSON.parse(joined);
const patch=require(path.join(root,'results/u75-251-100-even-t1024-m24576-trial-patch.json'));
trial.M=patch.M;
trial.tails.forEach((tail,i)=>tail.C8=patch.C8[i]);
const aggregate=require(path.join(root,'results/u75-251-100-even-t1024-m24576-aggregate-104-24576.json'));
const rank=require(path.join(root,'results/u75-251-100-even-t1024-m24576-rank-tightened-replay.json'));
const source=fs.readFileSync(path.join(root,'tc01-post-log11-em.js'),'utf8');
const staged=require(path.join(root,'u75-t1024-m24576-staged.js'));
const assemble=require(path.join(root,'u75-t1024-m24576-assemble.js'));
const exact=require(path.join(root,'worker-u75-m24576-original/exact-replay-unit.js'));
const raw=assemble(staged.extend(source),trial,[aggregate]);
const proposal=JSON.parse(JSON.stringify(rank.proposal));
proposal.factors={...proposal.factors,ratios:Array.from({length:8},()=>[BigInt(raw.scale).toString(),BigInt(raw.scale).toString()])};
const result=exact(raw,proposal,null);
const out={
  baselineEntriesReproduced:result.baselineEntries===2704,
  baselineRadiusCorrectionsReproduced:result.baselineRadii===52,
  positiveMinors:result.positiveMinors,
  failedPivotSign:result.failedMinor===null?null:(BigInt(result.failedMinor)<0n?'negative':'nonpositive'),
  originalEnergyGridMarginNumerator:result.marginNumerator,
  energyGridDenominator:result.marginDenominator,
  nextGridFails:result.nextGridFails,
  transformedPositiveMinors:rank.replay.positiveMinors,
  transformedEnergyGridMarginNumerator:rank.replay.marginNumerator,
  transformedEnergyGridDenominator:rank.replay.marginDenominator,
  scope:'Exact replay of the stored finite intervals in original trial coordinates, using the stored allocation and unit direction factors. A finite certificate comparison only; not an analytic positivity proof or an RH/operator construction.'
};
console.log(JSON.stringify(out,null,2));

// U73-04: independent stored comparison reconstruction; inherited generator for eighth bounds.
function run(trial,aggregate,d,prior,cert,modules){
 const load=s=>{let m={exports:{}};new Function("module",s)(m);return m.exports},rep=(s,a,b)=>{if(!s.includes(a))throw Error("anchor "+a);return s.replace(a,b)},assert=(p,m)=>{if(!p)throw Error(m)};
 const params={hn:249n,hd:100n,J:128,M:20480,T:1024,lowCount:49,KEM:20},odd=trial.odd;
 const src=load(modules.staged).extend(modules.generator);
 const f=load(modules.osc)(src,params,load(modules.dy)(src,params,odd));
 assert(JSON.stringify(f)===JSON.stringify(prior.proposal.factors),"factor reproduction");
 let prep;
 if(odd){
  prep=load(rep(modules.oddDriver," const widths=load(modules.tighten)(raw,z,stored);"," return {raw,z,f};"));
 }else{
  const generator=rep(modules.generator,'rows.push({h:hn+"/"+hd,odd,J,M,S,','rows.push({rankFactors:[f1,f2,f3,f4,f5,f6,f7].map(x=>x.map(String)),h:hn+"/"+hd,odd,J,M,S,');
  prep=load(rep(modules.evenDriver," const proposal=load(ds)(raw,f,z,steps),replay=load(modules.replay)(raw,proposal,z);"," return {raw,z,f};"));
  modules={...modules,generator};
 }
 const {raw,z}=odd?prep(trial,aggregate,d,modules):prep(trial,aggregate,prior,d,modules);
 const keys=["transform","determinant","originalEighthMatches","unchangedEighthMatches"]; if(!odd)keys.push("newTails");
 for(const k of keys)assert(JSON.stringify(z[k])===JSON.stringify(prior[k]),"eighth/transform "+k);
 const result=load(modules.audit)(raw,f,{transform:d.transform,determinant:d.determinant,replay:cert.replay},trial,z.eighth);
 assert(result.narrowed.every((v,i)=>v===cert.widths[i].narrowedEntries),"narrowing counts");
 return {...result,factorsMatch:true,transformedEighthMatch:true,storedNewTailsCompared:!odd,originalEighthMatches:z.originalEighthMatches,unchangedEighthMatches:z.unchangedEighthMatches};
}
if(typeof module!=="undefined")module.exports=run;

// U73-02: reproduce the rank-tightened fixed-allocation comparison.
function run(stored,aggregate,prior,d,modules){
 const load=s=>{let m={exports:{}};new Function("module",s)(m);return m.exports},rep=(s,a,b)=>{if(!s.includes(a))throw Error("source anchor "+a);return s.replace(a,b)};
 const generator=rep(modules.generator,'rows.push({h:hn+"/"+hd,odd,J,M,S,','rows.push({rankFactors:[f1,f2,f3,f4,f5,f6,f7].map(x=>x.map(String)),h:hn+"/"+hd,odd,J,M,S,');
 const prepare=load(rep(modules.driver," const proposal=load(ds)(raw,f,z,steps),replay=load(modules.replay)(raw,proposal,z);"," return {raw,z};"));
 const {raw,z}=prepare(stored,aggregate,prior,d,{...modules,generator});
 const widths=load(modules.tighten)(raw,z,stored),replay=load(modules.replay)(raw,prior.proposal,z),attribution=load(modules.attribute)(raw,z,prior.proposal);
 return {scope:"Rank-aware interval intersections; same fixed allocation as fraction-free replay",widths,attribution,replay};
}
if(typeof module!=="undefined")module.exports=run;

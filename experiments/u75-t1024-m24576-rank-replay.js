// U75-02: parity-generic fixed-energy comparison at h=251/100.
function run(trial,aggregate,d,modules,steps=350){
 const load=s=>{let m={exports:{}};new Function("module",s)(m);return m.exports};
 const anchor='rows.push({h:hn+"/"+hd,odd,J,M,S,';
 if(!modules.generator.includes(anchor))throw Error("rank instrumentation anchor");
 const gen=modules.generator.replace(anchor,'rows.push({rankFactors:[f1,f2,f3,f4,f5,f6,f7].map(x=>x.map(String)),h:hn+"/"+hd,odd,J,M,S,');
 const src=load(modules.staged).extend(gen),params={hn:251n,hd:100n,J:128,M:24576,T:1024,lowCount:52,KEM:20};
 const raw=load(modules.assemble)(src,trial,[aggregate]),f=load(modules.osc)(src,params,load(modules.dy)(src,params,trial.odd));
 const z=load(modules.transform)(raw,f,src,d),widths=load(modules.tighten)(raw,z,trial);
 if(!modules.diagnostic.includes("/Math.sqrt(e[i]*e[j])"))throw Error("diagnostic anchor");
 const ds=modules.diagnostic.replace("/Math.sqrt(e[i]*e[j])","/Math.sqrt(e[i])/Math.sqrt(e[j])");
 const proposal=load(ds)(raw,f,z,steps),replay=load(modules.replay)(raw,proposal,z);
 if(!Number.isFinite(proposal.score))throw Error("score");
 return {scope:"Rank-aware exact stored interval comparison at h=251/100",transform:z.transform,determinant:z.determinant,originalEighthMatches:z.originalEighthMatches,unchangedEighthMatches:z.unchangedEighthMatches,newTails:z.newTails,widths,proposal,replay};
}
if(typeof module!=="undefined")module.exports=run;

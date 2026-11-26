// U74-04: independent interval reconstruction using inherited raw/eighth preparation.
function run(trial,aggregate,d,cert,modules){
 const load=s=>{let m={exports:{}};new Function("module",s)(m);return m.exports},assert=(p,m)=>{if(!p)throw Error(m)};
 const anchor='rows.push({h:hn+"/"+hd,odd,J,M,S,';
 assert(modules.generator.includes(anchor),"rank anchor");
 const gen=modules.generator.replace(anchor,'rows.push({rankFactors:[f1,f2,f3,f4,f5,f6,f7].map(x=>x.map(String)),h:hn+"/"+hd,odd,J,M,S,');
 const src=load(modules.staged).extend(gen),params={hn:5n,hd:2n,J:128,M:20480,T:1024,lowCount:50,KEM:20};
 const raw=load(modules.assemble)(src,trial,[aggregate]),f=load(modules.osc)(src,params,load(modules.dy)(src,params,trial.odd));
 assert(JSON.stringify(f)===JSON.stringify(cert.proposal.factors),"factors");
 const z=load(modules.transform)(raw,f,src,d);
 for(const k of ["transform","determinant","newTails","originalEighthMatches","unchangedEighthMatches"])assert(JSON.stringify(z[k])===JSON.stringify(cert[k]),"eighth/transform "+k);
 const result=load(modules.audit)(raw,f,{transform:d.transform,determinant:d.determinant,replay:cert.replay},trial,z.eighth);
 assert(result.narrowed.every((v,i)=>v===cert.widths[i].narrowedEntries),"narrowing counts");
 return {...result,factorsMatch:true,transformedEighthMatch:true,storedNewTailsCompared:true,originalEighthMatches:z.originalEighthMatches,unchangedEighthMatches:z.unchangedEighthMatches};
}
if(typeof module!=="undefined")module.exports=run;

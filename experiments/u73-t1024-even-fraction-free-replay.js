// U73-02: replay fraction-free transform with inherited exact interval and eighth-order machinery.
function run(stored,aggregate,prior,d,modules,steps=350){
 const assert=(p,m)=>{if(!p)throw Error(m)},load=(src)=>{const m={exports:{}};new Function("module",src)(m);return m.exports},rep=(s,a,b)=>{assert(s.includes(a),"source anchor "+a);return s.replace(a,b)};
 const ext=load(modules.staged).extend(modules.generator),raw=load(modules.assemble)(ext,stored,[aggregate]),f=prior.proposal.factors;
 let tr=modules.transform;
 const start=tr.indexOf(" B=[["),end=tr.indexOf(".map(row=>row.map((v,j)",start);
 assert(start>=0&&end>start,"matrix anchor");
 tr=tr.slice(0,start)+" B="+JSON.stringify(d.transform)+tr.slice(end);
 tr=rep(tr,"[1,2,3,4,5,6,7,8,10,11,12,14,18,26,28,33,34,35,37,39,45].includes(i)",JSON.stringify(d.selected)+".includes(i)");
 tr=rep(tr,"unchangedEighthMatches:n-21","unchangedEighthMatches:n-"+d.selected.length);
 tr=tr.replace(/determinant:"[0-9]+"/,'determinant:'+JSON.stringify(d.determinant));
 const z=load(tr)(raw,f,ext);
 assert(z.determinant===d.determinant&&JSON.stringify(z.transform)===JSON.stringify(d.transform),"transform");
 // The original normalization multiplies two energy diagonals before sqrt;
 // divide by their individual square roots to avoid overflow at scale 10^60.
 let ds=rep(modules.diagnostic,"/Math.sqrt(e[i]*e[j])","/Math.sqrt(e[i])/Math.sqrt(e[j])");
 const proposal=load(ds)(raw,f,z,steps),replay=load(modules.replay)(raw,proposal,z);
 assert(Number.isFinite(proposal.score)&&Number.isFinite(proposal.contributions.finite),"finite diagnostic");
 return {transform:z.transform,determinant:z.determinant,originalEighthMatches:z.originalEighthMatches,unchangedEighthMatches:z.unchangedEighthMatches,newTails:z.newTails,proposal,replay};
}
if(typeof module!=="undefined")module.exports=run;

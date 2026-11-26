// U73-03: parity-specific rank-aware exact replay.
function run(stored,aggregate,d,modules,steps=350){
 const load=s=>{let m={exports:{}};new Function("module",s)(m);return m.exports},rep=(s,a,b)=>{if(!s.includes(a))throw Error("anchor "+a);return s.replace(a,b)};
 const assert=(x,m)=>{if(!x)throw Error(m)};
 assert(stored.odd===true,"odd");
 const gen=rep(modules.generator,'rows.push({h:hn+"/"+hd,odd,J,M,S,','rows.push({rankFactors:[f1,f2,f3,f4,f5,f6,f7].map(x=>x.map(String)),h:hn+"/"+hd,odd,J,M,S,');
 const src=load(modules.staged).extend(gen),params={hn:249n,hd:100n,J:128,M:20480,T:1024,lowCount:49,KEM:20};
 const asm=rep(modules.assemble,"10192+Number(odd)","10192-Number(odd)");
 const raw=load(asm)(src,stored,[aggregate]);
 const f=load(modules.osc)(src,params,load(modules.dy)(src,params,true));
 let tr=modules.transform;const start=tr.indexOf(" B=[["),end=tr.indexOf(".map(row=>row.map((v,j)",start);
 assert(start>=0&&end>start,"matrix anchor");tr=tr.slice(0,start)+" B="+JSON.stringify(d.transform)+tr.slice(end);
 for(const [a,b] of [["r.odd===false","r.odd===true"],["Kmax!==T","Kmax!==T-Number(odd)"],["([false],{hn:249n","([true],{hn:249n"],["[1,2,3,4,5,6,7,8,10,11,12,14,18,26,28,33,34,35,37,39,45].includes(i)",JSON.stringify(d.selected)+".includes(i)"],["unchangedEighthMatches:n-21","unchangedEighthMatches:n-"+d.selected.length],["10n**80n/sqrt(row[i][1])","10n**180n/sqrt(row[i][1])"]])tr=rep(tr,a,b);
 tr=tr.replace(/determinant:"[0-9]+"/,'determinant:'+JSON.stringify(d.determinant));
 const z=load(tr)(raw,f,src);
 assert(z.determinant===d.determinant&&JSON.stringify(z.transform)===JSON.stringify(d.transform),"transform");
 const widths=load(modules.tighten)(raw,z,stored);
 const ds=rep(modules.diagnostic,"/Math.sqrt(e[i]*e[j])","/Math.sqrt(e[i])/Math.sqrt(e[j])");
 const proposal=load(ds)(raw,f,z,steps),replay=load(modules.replay)(raw,proposal,z);
 assert(Number.isFinite(proposal.score),"score");
 return {scope:"Odd rank-aware transformed comparison",transform:z.transform,determinant:z.determinant,originalEighthMatches:z.originalEighthMatches,unchangedEighthMatches:z.unchangedEighthMatches,widths,proposal,replay};
}
if(typeof module!=="undefined")module.exports=run;

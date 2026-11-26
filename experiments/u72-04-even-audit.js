// U72-04 even independent exact stored reconstruction; reusable parity audit.
function run({base,staged,asm,dy,osc,tr,audit,trial,aggregate,cert}){
 const fn=(s,name)=>new Function(s+"\n;return "+name)(),src=fn(staged,"extend")(base),odd=trial.odd;
 let a=asm;
 for(const [x,y] of [["n=45","n=47"],["123/50","62/25"],["12288","20480"],["90+Number(odd)","94+Number(odd)"],["12290-Number(odd)","20482-Number(odd)"],["6100-Number(odd)","10194-Number(odd)"],["hn:123n,hd:50n","hn:62n,hd:25n"],["lowCount:45","lowCount:47"]]){if(!a.includes(x))throw Error("anchor "+x);a=a.replaceAll(x,y)}
 const raw=fn(a,"assemble")(src,trial,[aggregate]),params={hn:62n,hd:25n,J:128,M:20480,T:832,lowCount:47,KEM:20};
 const factors=fn(osc,"oscillatory")(src,params,fn(dy,"dyadic")(src,params,odd));
 if(JSON.stringify(factors)!==JSON.stringify(cert.proposal.factors))throw Error("factor mismatch");
 const z=fn(tr,"transform")(raw,factors,src);
 for(const key of ["transform","determinant","newTails","originalEighthMatches","unchangedEighthMatches"])if(JSON.stringify(z[key])!==JSON.stringify(cert[key]))throw Error("transform mismatch "+key);
 const r=fn(audit,"audit")(raw,factors,cert);
 return {...r,factorsMatch:true,transformedEighthMatch:true,originalEighthMatches:z.originalEighthMatches,unchangedEighthMatches:z.unchangedEighthMatches};
}
if(typeof module!=="undefined")module.exports=run;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){
 const fs=require("node:fs"),read=p=>fs.readFileSync("experiments/"+p,"utf8"),json=p=>JSON.parse(read(p)),p="results/u72-62-25-even-t832-",q=p+"m16384-",s=p+"m20480-";
 const initial=JSON.parse([1,2,3].map(i=>read(q+"trial-part"+i+".txt")).join("")),refresh=json(s+"trial-refresh.json");
 console.log(JSON.stringify(run({base:read("tc01-post-log11-em.js"),staged:read("u72-m20480-staged.js"),asm:read("lxx-assemble.js"),dy:read("lb03-dyadic-tail-factors.js"),osc:read("pc03-constant-oscillatory-factors.js"),tr:read("u72-m20480-even-transform.js"),audit:read("u72-independent-reconstruction.js"),trial:{...initial,M:refresh.M,tails:refresh.tails},aggregate:json(s+"finite-total.json"),cert:json(s+"transformed-replay.json")})));
}

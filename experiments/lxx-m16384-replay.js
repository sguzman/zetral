// LXX02: reconstruct M16384 comparison from the original trial and five residual aggregates.
// Standalone use: node experiments/lxx-m16384-replay.js (repository root).
function run({base,staged,dy,osc,asm,tr,pr,ex,stored,chunks}){
 const fn=(s,name)=>new Function(s+";return "+name)(),src=fn(staged,"extend")(base);
 const params={hn:123n,hd:50n,J:128,M:16384,T:832,lowCount:45,KEM:20};
 const fac=fn(osc,"oscillatory")(src,params,fn(dy,"dyadic")(src,params,false));
 const transformNew=tr.replaceAll("12288","16384");
 const rebase=transformNew.replace("r.M===16384","r.M===12288").replace("f.M===r.M","f.M===16384").replace('assert(original.tails.every((z,i)=>z.C8===r.tails[i].C8&&z.eighthUpper===r.diagnostics[i].eighthUpper),"original eighth reproduction");','assert(original.tails.every((z,i)=>BigInt(z.C8)<=BigInt(r.tails[i].C8)),"monotone eighth"); assert(original.CL.join(",")===f.CL.join(","),"CL");return original.tails;');
 const stub={scale:stored.scale,rows:[{...stored,eightShift:true,tailShares:["9400","476","84","8","8","8","8","8"],tailShareDenominator:"10000"}]};
 const tails=fn(rebase,"transform")(stub,fac,src);
 const trial={...stored,M:16384,tails:stored.tails.map((t,i)=>({...t,C8:tails[i].C8}))};
 const a=asm.replaceAll("12288","16384").replace("12290-Number(odd)","16386-Number(odd)").replace("6100-Number(odd)","8148-Number(odd)");
 const raw=fn(a,"assemble")(src,trial,chunks),z=fn(transformNew,"transform")(raw,fac,src);
 const p=fn(pr,"propose")(raw,fac,z,350),r=fn(ex.replaceAll("12288","16384"),"exact")(raw,p,z);
 return {refresh:{fac,tails},result:{transform:z.transform,determinant:z.determinant,originalEighthMatches:z.originalEighthMatches,unchangedEighthMatches:z.unchangedEighthMatches,newTails:z.newTails,proposal:p,replay:r}};
}
if(typeof module!=="undefined")module.exports=run;
if(typeof require!=="undefined"&&require.main===module){
 const fs=require("node:fs"),read=p=>fs.readFileSync("experiments/"+p,"utf8"),json=p=>JSON.parse(read(p)),prefix="results/lxx-123-50-even-t832-";
 const out=run({base:read("tc01-post-log11-em.js"),staged:read("lxx-staged.js"),dy:read("lb03-dyadic-tail-factors.js"),osc:read("pc03-constant-oscillatory-factors.js"),asm:read("lxx-assemble.js"),tr:read("lxx-even-transform-four.js"),pr:read("lxx-full-energy-proposal.js"),ex:read("lxx-exact-replay.js"),stored:JSON.parse([1,2,3].map(i=>read(prefix+"trial-part"+i+".txt")).join("")),chunks:[json(prefix+"finite-total.json"),...Array.from({length:4},(_,i)=>json(prefix+"m16384-finite-"+(12290+1024*i)+"-"+(13312+1024*i)+".json"))]});
 console.log(JSON.stringify(out));
}

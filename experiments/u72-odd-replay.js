// U72-03 odd exact comparison, using fresh M20480 stored intervals.
function run({base,staged,asm,dy,osc,pr,ex,trial,aggregate,tr=null}){
 const fn=(s,name)=>new Function(s+"\n;return "+name)(),src=fn(staged,"extend")(base),odd=trial.odd;
 if(odd!==true)throw Error("odd regime");
 const edit=(s,pairs)=>{for(const [a,b] of pairs){if(!s.includes(a))throw Error("anchor "+a);s=s.replaceAll(a,b)}return s};
 const a=edit(asm,[["n=45","n=47"],["123/50","62/25"],["12288","20480"],["90+Number(odd)","94+Number(odd)"],["12290-Number(odd)","20482-Number(odd)"],["6100-Number(odd)","10194-Number(odd)"],["hn:123n,hd:50n","hn:62n,hd:25n"],["lowCount:45","lowCount:47"]]);
 const e=edit(ex,[["n===45","n===47"],["123/50","62/25"],["12288","20480"],["47/4","12/1"]]);
 const raw=fn(a,"assemble")(src,trial,[aggregate]),params={hn:62n,hd:25n,J:128,M:20480,T:832,lowCount:47,KEM:20};
 const factors=fn(osc,"oscillatory")(src,params,fn(dy,"dyadic")(src,params,odd));
 const z=tr?fn(tr,"transform")(raw,factors,src):null;
 const proposal=fn(pr,"propose")(raw,factors,z,350),replay=fn(e,"exact")(raw,proposal,z);
 return {...(z?Object.fromEntries(["transform","determinant","originalEighthMatches","unchangedEighthMatches","newTails"].map(k=>[k,z[k]])):{}),proposal,replay};
}
if(typeof module!=="undefined")module.exports=run;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){
 const fs=require("node:fs"),read=p=>fs.readFileSync("experiments/"+p,"utf8"),p="results/u72-62-25-odd-t832-m20480-";
 console.log(JSON.stringify(run({base:read("tc01-post-log11-em.js"),staged:read("u72-odd-m20480-staged.js"),asm:read("lxx-assemble.js"),dy:read("lb03-dyadic-tail-factors.js"),osc:read("pc03-constant-oscillatory-factors.js"),pr:read("lxx-full-energy-proposal.js"),ex:read("lxx-exact-replay.js"),trial:JSON.parse([1,2,3].map(i=>read(p+"trial-part"+i+".txt")).join("")),aggregate:JSON.parse(read(p+"finite-total.json")),tr:process.argv[2]?read(process.argv[2]):null})));
}

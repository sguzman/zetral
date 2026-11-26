// Independent LXX03 odd assembly, factor generation, proposal, and exact replay.
function run({base,oddStaged,dy,osc,asm,proposalSource,replaySource,trial,aggregate}){
 const fn=(s,name)=>new Function(s+";return "+name)();
 const extend=fn(oddStaged,"extend"),src=extend(base);
 const params={hn:123n,hd:50n,J:128,M:16384,T:832,lowCount:45,KEM:20};
 const dyadic=fn(dy,"dyadic")(src,params,true);
 const factors=fn(osc,"oscillatory")(src,params,dyadic);
 const assemblySource=asm.replaceAll("12288","16384")
  .replace("12290-Number(odd)","16386-Number(odd)")
  .replace("6100-Number(odd)","8148-Number(odd)");
 const raw=fn(assemblySource,"assemble")(src,trial,[aggregate]);
 const propose=fn(proposalSource,"propose");
 const exact=fn(replaySource.replaceAll("12288","16384"),"exact");
 const candidate=propose(raw,factors,null,350);
 const replay=exact(raw,candidate,null);
 return {
  parameters:{h:"123/50",odd:true,J:128,KEM:20,M:16384,T:832,lowCount:45},
  trial:{modes:trial.ks.length,directions:trial.basis.length,scale:trial.scale,witnessWindow:trial.witnessWindow},
  residual:{start:aggregate.start,end:aggregate.end,count:aggregate.count,scale:aggregate.scale},
  factors,proposal:candidate,replay,
  scope:"Exact replay of staged odd M=16384 intervals; not independent original-form evaluation."
 };
}

if(typeof module!=="undefined")module.exports=run;
if(typeof require!=="undefined"&&require.main===module){
 const fs=require("node:fs"),read=p=>fs.readFileSync("experiments/"+p,"utf8"),
  json=p=>JSON.parse(fs.readFileSync("experiments/results/"+p,"utf8")),
  prefix="lxx-123-50-odd-t832-m16384-";
 const trial=JSON.parse([1,2,3].map(i=>fs.readFileSync("experiments/results/"+prefix+"trial-part"+i+".txt","utf8")).join(""));
 const out=run({base:read("tc01-post-log11-em.js"),oddStaged:read("lxx-m16384-odd-staged.js"),
  dy:read("lb03-dyadic-tail-factors.js"),osc:read("pc03-constant-oscillatory-factors.js"),
  asm:read("lxx-assemble.js"),proposalSource:read("lxx-full-energy-proposal.js"),
  replaySource:read("lxx-exact-replay.js"),trial,
  aggregate:json(prefix+"finite-total.json")});
 console.log(JSON.stringify(out));
}

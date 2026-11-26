// U72-03 odd midpoint-integer decorrelation with exact interval acceptance.
function run({base,staged,asm,dy,osc,pr,ex,tr,trial,aggregate}){
 const fn=(s,name)=>new Function(s+"\n;return "+name)(),src=fn(staged,"extend")(base);
 const edit=(s,pairs)=>{for(const [a,b] of pairs){if(!s.includes(a))throw Error("anchor "+a);s=s.replaceAll(a,b)}return s};
 const a=edit(asm,[["n=45","n=47"],["123/50","62/25"],["12288","20480"],["90+Number(odd)","94+Number(odd)"],["12290-Number(odd)","20482-Number(odd)"],["6100-Number(odd)","10194-Number(odd)"],["hn:123n,hd:50n","hn:62n,hd:25n"],["lowCount:45","lowCount:47"]]);
 const e=edit(ex,[["n===45","n===47"],["123/50","62/25"],["12288","20480"],["47/4","12/1"]]);
 const raw=fn(a,"assemble")(src,trial,[aggregate]),r=raw.rows[0],n=r.ks.length,params={hn:62n,hd:25n,J:128,M:20480,T:832,lowCount:47,KEM:20};
 const fac=fn(osc,"oscillatory")(src,params,fn(dy,"dyadic")(src,params,true));
 const abs=x=>x<0n?-x:x,gcd=(a,b)=>{a=abs(a);b=abs(b);while(b){let t=a%b;a=b;b=t}return a};
 const U=r.componentIntervals.upper.map((row,i)=>row.map((v,j)=>v.map(BigInt).reduce((a,b)=>a+b,0n)+r.componentIntervals.upper[j][i].map(BigInt).reduce((a,b)=>a+b,0n)));
 const basis=[],dot=(a,b)=>a.reduce((s,x,i)=>s+x*b.reduce((t,y,j)=>t+y*U[i][j],0n),0n);
 const D=10n**12n,round=(a,b)=>a>=0n?(a+b/2n)/b:-((-a+b/2n)/b);
 for(let i=0;i<9;i++){let v=Array.from({length:i+1},(_,j)=>i===j?1n:0n);for(const w of basis){let d=dot(w,w),c=dot(v,w);if(d<=0n)throw Error("midpoint nonpositive");v=v.map((x,j)=>d*x-c*(w[j]??0n));let g=v.reduce(gcd,0n);v=v.map(x=>x/g)}if(v[i]<0n)v=v.map(x=>-x);basis.push(v)}
 let transform=edit(tr,[["r.odd===false","r.odd===true"],["Kmax!==T","Kmax!==T-1"],["([false],","([true],"],["function transform(raw,f,src)","function transform(raw,f,src,rows)"],["[1,2,3,4,5,7].includes(i)","rows[i][i]!==\"1\""],["unchangedEighthMatches:n-6","unchangedEighthMatches:rows.filter((row,j)=>row[j]===\"1\").length"],['determinant:"1000000000000000000000000000000000000000000000000000000000000000000000000"','determinant:String(rows.reduce((p,row,i)=>p*BigInt(row[i]),1n))'],["newTails:updated.tails.slice(0,8)","newTails:updated.tails.slice(0,9)"]]);
 const bStart=transform.indexOf("B=Array.from"),bEnd=transform.indexOf(";\n const full=",bStart);if(bStart<0||bEnd<bStart)throw Error("B anchor");
 transform=transform.slice(0,bStart)+"B=rows.map(row=>row.flatMap((v,j)=>BigInt(v)===0n?[]:[[j,BigInt(v)]]))"+transform.slice(bEnd);
 const attempts=[];let best=null,bestSource=null;
 for(const k of [4,6,8,9]){
  const rows=Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>String(i>0&&i<k&&j<=i?round(basis[i][j]*D,basis[i][i]):i===j?1n:0n)));
  try{const z=fn(transform,"transform")(raw,fac,src,rows),proposal=fn(pr,"propose")(raw,fac,z,350),replay=fn(e,"exact")(raw,proposal,z);attempts.push({k,score:proposal.score,pivot:proposal.smallestNormalizedPivot,positiveMinors:replay.positiveMinors,margin:replay.marginNumerator});if(!best||replay.positiveMinors>best.replay.positiveMinors||replay.positiveMinors===best.replay.positiveMinors&&BigInt(replay.marginNumerator??"-1")>BigInt(best.replay.marginNumerator??"-1")){best={transform:z.transform,determinant:z.determinant,originalEighthMatches:z.originalEighthMatches,unchangedEighthMatches:z.unchangedEighthMatches,newTails:z.newTails,proposal,replay,k};bestSource=transform.replace("function transform(raw,f,src,rows)","function transform(raw,f,src)").replace(" const assert="," const rows="+JSON.stringify(rows)+";\n const assert=")}if(replay.positiveMinors===n&&BigInt(replay.marginNumerator)>0n)break;}catch(error){attempts.push({k,error:String(error)})}
 }
 return {attempts,best,bestSource};
}
if(typeof module!=="undefined")module.exports=run;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){
 const fs=require("node:fs"),read=p=>fs.readFileSync("experiments/"+p,"utf8"),p="results/u72-62-25-odd-t832-m20480-";
 console.log(JSON.stringify(run({base:read("tc01-post-log11-em.js"),staged:read("u72-odd-m20480-staged.js"),asm:read("lxx-assemble.js"),dy:read("lb03-dyadic-tail-factors.js"),osc:read("pc03-constant-oscillatory-factors.js"),pr:read("lxx-full-energy-proposal.js"),ex:read("lxx-exact-replay.js"),tr:read("u72-m20480-even-transform.js"),trial:JSON.parse([1,2,3].map(i=>read(p+"trial-part"+i+".txt")).join("")),aggregate:JSON.parse(read(p+"finite-total.json"))})));
}

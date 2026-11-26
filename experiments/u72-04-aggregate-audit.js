// U72-04 independent aggregate checks in two stages.
function audit(chunks,total,start,end){
 const n=47,scale=String(10n**66n),sum=Array.from({length:n},()=>Array.from({length:n},()=>[0n,0n]));let at=start,count=0;
 for(const c of chunks){if(c.start!==at||c.end<c.start||c.end%2!==start%2||c.count!==(c.end-c.start)/2+1||c.scale!==scale||c.finite.length!==n||c.finite.some(r=>r.length!==n))throw Error("coverage");for(let i=0;i<n;i++)for(let j=0;j<n;j++){const [l,h]=c.finite[i][j].map(BigInt);if(l>h)throw Error("interval");sum[i][j][0]+=l;sum[i][j][1]+=h}at=c.end+2;count+=c.count}
 if(at!==end+2||count!==(end-start)/2+1||total.start!==start||total.end!==end||total.count!==count||total.scale!==scale||total.finite.length!==n||total.finite.some(r=>r.length!==n))throw Error("total coverage");
 let matched=0;for(let i=0;i<n;i++)for(let j=0;j<n;j++)for(let k=0;k<2;k++){if(sum[i][j][k]!==BigInt(total.finite[i][j][k]))throw Error("endpoint");matched++}return {count,chunks:chunks.length,matchedEndpoints:matched,start,end};
}
if(typeof module!=="undefined")module.exports=audit;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){
 const fs=require("node:fs"),read=p=>JSON.parse(fs.readFileSync(p,"utf8")),p="experiments/results/u72-62-25-even-t832-",q=p+"m16384-",s=p+"m20480-";
 const initial=read(q+"finite-total.json"),chunks=Array.from({length:16},(_,i)=>read(q+"finite-"+(94+1024*i)+"-"+Math.min(1116+1024*i,16384)+".json")),extension=Array.from({length:4},(_,i)=>read(s+"finite-"+(16386+1024*i)+"-"+(17408+1024*i)+".json"));
 console.log(JSON.stringify({initial:audit(chunks,initial,94,16384),extended:audit([initial,...extension],read(s+"finite-total.json"),94,20480)}));
}

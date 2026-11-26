// U72-04 independent aggregate checks in two stages.
function audit(chunks,total,start,end){
 const n=49,scale=String(10n**66n),sum=Array.from({length:n},()=>Array.from({length:n},()=>[0n,0n]));let at=start,count=0;
 for(const c of chunks){if(c.start!==at||c.end<c.start||c.end%2!==start%2||c.count!==(c.end-c.start)/2+1||c.scale!==scale||c.finite.length!==n||c.finite.some(r=>r.length!==n))throw Error("coverage");for(let i=0;i<n;i++)for(let j=0;j<n;j++){const [l,h]=c.finite[i][j].map(BigInt);if(l>h)throw Error("interval");sum[i][j][0]+=l;sum[i][j][1]+=h}at=c.end+2;count+=c.count}
 if(at!==end+2||count!==(end-start)/2+1||total.start!==start||total.end!==end||total.count!==count||total.scale!==scale||total.finite.length!==n||total.finite.some(r=>r.length!==n))throw Error("total coverage");
 let matched=0;for(let i=0;i<n;i++)for(let j=0;j<n;j++)for(let k=0;k<2;k++){if(sum[i][j][k]!==BigInt(total.finite[i][j][k]))throw Error("endpoint");matched++}return {count,chunks:chunks.length,matchedEndpoints:matched,start,end};
}
if(typeof module!=="undefined")module.exports=audit;

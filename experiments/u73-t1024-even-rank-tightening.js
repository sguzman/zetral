// U73-02: exploit rank-one structure before forming interval outer products.
function tighten(raw,z,stored){
 const r=raw.rows[0],Q=BigInt(raw.scale),n=r.ks.length,keys=["leading","second","third","fourth","fifth","sixth","seventh"],vecs=["S0","V2","S2","V4","S4","V6","S6"],B=z.transform.map(row=>row.map(BigInt)),assert=(p,m)=>{if(!p)throw Error(m)},floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b),min=(a,b)=>a<b?a:b,max=(a,b)=>a>b?a:b;
 assert(r.rankFactors.length===7&&stored.tails.length===n,"rank source");
 const mul=(a,b)=>{const p=a.flatMap(x=>b.map(y=>x*y));return [floor(p.reduce(min),Q),ceil(p.reduce(max),Q)]};
 const widths=[];
 for(let k=0;k<7;k++){
  const v=stored.tails.map(t=>t[vecs[k]].map(BigInt)),f=r.rankFactors[k].map(BigInt);
  // Same rank expression as generator; integer congruence commutes with the outer product.
  const tv=B.map(row=>row.reduce((s,x,j)=>[s[0]+x*v[j][x>=0n?0:1],s[1]+x*v[j][x>=0n?1:0]],[0n,0n]));
  let improved=0;
  z.componentIntervals[keys[k]]=z.componentIntervals[keys[k]].map((row,i)=>row.map((pair,j)=>{
   const [a,b]=pair.map(BigInt),[c,d]=mul(f,mul(tv[i],tv[j])),l=max(a,c),h=min(b,d);
   assert(l<=h,"rank interval disagreement "+k+" "+i+" "+j);
   if(h-l<b-a)improved++;
   return [String(l),String(h)];
  }));
  widths.push({key:keys[k],narrowedEntries:improved});
 }
 return widths;
}
if(typeof module!=="undefined")module.exports=tighten;

// ATM03: replay exact signed-tail allocation and weighted interval radii.
// Float heuristics select candidates only; the verification below is integer arithmetic.
function reallocate(data,candidates){
 const r=data.rows[0],n=r.ks.length,c=r.componentIntervals,Q=BigInt(data.scale);
 const keys=["leading","second","third","fourth","fifth","sixth","seventh"];
 const old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator),weights=r.radiusWeights.map(BigInt);
 const assert=(v,m)=>{if(!v)throw Error(m)};
 assert(weights.length===n&&weights.every(x=>x>0n)&&old.length===8&&old.every(x=>x>0n)&&old.reduce((s,x)=>s+x,0n)===D0,"source assumptions");
 const floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b),max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b;
 function lower(shares,den){
  assert(shares.length===8&&shares.every(x=>x>0n)&&shares.reduce((s,x)=>s+x,0n)===den,"shares");
  const mat=c.upper.map((row,i)=>row.map((b,j)=>{
   let l=BigInt(b[0])-BigInt(c.finite[i][j][1]),u=BigInt(b[1])-BigInt(c.finite[i][j][0]);
   for(let k=0;k<7;k++){const z=c[keys[k]][i][j],a=old[k]*den,d=shares[k]*D0;l-=ceil(BigInt(z[1])*a,d);u-=floor(BigInt(z[0])*a,d)}
   if(i===j){const t=ceil(BigInt(c.eighth[i])*old[7]*den,shares[7]*D0);l-=t;u-=t}return[l,u];
  }));
  const mid=mat.map((row,i)=>row.map((z,j)=>{const l=max(z[0],mat[j][i][0]),u=min(z[1],mat[j][i][1]);assert(l<=u,"symmetry");return(l+u)/2n}));
  const rad=mat.map((row,i)=>row.map((z,j)=>max(mid[i][j]-max(z[0],mat[j][i][0]),min(z[1],mat[j][i][1])-mid[i][j])));
  const penalties=rad.map((row,i)=>row.reduce((s,v,k)=>s+ceil(v*weights[k],weights[i]),0n));
  if(den===D0&&shares.every((v,i)=>v===old[i]))assert(penalties.every((v,i)=>String(v)===r.diagnostics[i].matrixRadius),'stored radius mismatch');
  return mid.map((row,i)=>row.map((x,j)=>x-(i===j?penalties[i]:0n)));
 }
 function pd(A){
  const B=A.map(x=>x.slice());let prev=1n;const minors=[];
  for(let k=0;k<n;k++){const p=B[k][k];minors.push(String(p));if(p<=0n)return{positive:false,minors};for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){const z=p*B[i][j]-B[i][k]*B[k][j];assert(z%prev===0n,"Bareiss exact division");B[i][j]=B[j][i]=z/prev}prev=p}
  return{positive:true,minors};
 }
 const base=lower(old,D0);assert(base.every((a,i)=>a.every((v,j)=>v===BigInt(r.lowerInteger[i][j]))),"baseline reconstruction");
 const baseline=pd(base);assert(baseline.minors.join()===r.principalMinors.join(),"baseline principal minors");
 const results=candidates.map(({shares,den})=>{
  shares=shares.map(BigInt);den=BigInt(den);const A=lower(shares,den),t=pd(A);
  return{shares:shares.map(String),denominator:String(den),certified:t.positive,positiveMinors:t.minors.filter(x=>BigInt(x)>0n).length,principalMinors:t.minors,lowerInteger:A.map(row=>row.map(String))};
 });
 return{h:r.h,odd:r.odd,scale:String(Q),dimension:n,baselineReconstructed:true,baselinePositiveMinors:baseline.minors.filter(x=>BigInt(x)>0n).length,results,scope:"exact reallocation of existing outward component enclosures; does not independently identify original form"};
}
const evenCandidates=[
 {shares:["944457","46601","5010","98","11","4","4","3815"],den:"1000000"},
 {shares:["900000","80000","18000","500","400","300","300","500"],den:"1000000"},
 {shares:["940000","53000","6000","200","200","100","100","400"],den:"1000000"},
 {shares:["955000","40000","4500","100","100","100","100","100"],den:"1000000"}
];
if(typeof module!=="undefined")module.exports={reallocate,evenCandidates};
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){const fs=require("node:fs");console.log(JSON.stringify(reallocate(JSON.parse(fs.readFileSync(process.argv[2],"utf8")),process.argv[3]?JSON.parse(fs.readFileSync(process.argv[3],"utf8")):evenCandidates),null,2));}

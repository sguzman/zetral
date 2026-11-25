// RDC03: exact rational reweighting of already enclosed signed moment matrices.
// No operator, trial, or interval generation is changed.
function compare(data){
 const r=data.rows[0],n=r.ks.length,c=r.componentIntervals,Q=BigInt(data.scale);
 const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
 assert(r.certified&&Q===10n**54n&&n===28&&r.h==="11/5","certificate input");
 const keys=["leading","second","third","fourth","fifth","sixth","seventh"];
 const old=[2n,4n,8n,16n,32n,64n,128n,128n],D=10000n;
 const floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b);
 const max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b;
 const updiag=c.upper.map((a,i)=>BigInt(a[i][1]));assert(updiag.every(x=>x>0n),"positive scale");
 const lower=(shares,den)=>{
  assert(shares.length===8&&shares.every(x=>x>0n)&&shares.reduce((s,x)=>s+x,0n)===den,"Cauchy shares");
  const mat=c.upper.map((a,i)=>a.map((b,j)=>{
   let l=BigInt(b[0])-BigInt(c.finite[i][j][1]),u=BigInt(b[1])-BigInt(c.finite[i][j][0]);
   for(let k=0;k<7;k++){
    const x=c[keys[k]][i][j],d=shares[k]*old[k];
    l-=ceil(BigInt(x[1])*den,d);u-=floor(BigInt(x[0])*den,d);
   }
   if(i===j){const t=ceil(BigInt(c.eighth[i])*den,shares[7]*old[7]);l-=t;u-=t}
   return [l,u];
  }));
  const mid=mat.map((a,i)=>a.map((b,j)=>{const l=max(b[0],mat[j][i][0]),u=min(b[1],mat[j][i][1]);assert(l<=u,"symmetry");return (l+u)/2n}));
  const rad=mat.map((a,i)=>a.map((b,j)=>max(mid[i][j]-max(b[0],mat[j][i][0]),min(b[1],mat[j][i][1])-mid[i][j])));
  return mid.map((a,i)=>a.map((x,j)=>x-(i===j?rad[i].reduce((s,v)=>s+v,0n):0n)));
 };
 function pd(A){
  const B=A.map(a=>a.slice());let prev=1n;const minors=[];
  for(let k=0;k<n;k++){const p=B[k][k];minors.push(String(p));if(p<=0n)return {positive:false,minors};for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){const z=p*B[i][j]-B[i][k]*B[k][j];assert(z%prev===0n,"Bareiss division");B[i][j]=B[j][i]=z/prev}prev=p;}
  return {positive:true,minors};
 }
 function margin(A){
  let lo=0n,hi=D;assert(pd(A).positive,"base PD");
  while(hi-lo>1n){const m=(lo+hi)/2n;const B=A.map((a,i)=>a.map((x,j)=>D*x-(i===j?m*updiag[i]:0n)));if(pd(B).positive)lo=m;else hi=m}
  return String(lo);
 }
 const baseline=lower([64n,32n,16n,8n,4n,2n,1n,1n],128n);
 assert(baseline.every((a,i)=>a.every((x,j)=>x===BigInt(r.lowerInteger[i][j]))),"baseline reconstruction");
 const candidates=[
  [8000n,1500n,400n,40n,20n,10n,10n,20n],
  [9000n,800n,180n,5n,4n,3n,3n,5n],
  [9400n,530n,60n,2n,2n,1n,1n,4n],
  [9500n,450n,45n,1n,1n,1n,1n,1n],
  [9550n,400n,45n,1n,1n,1n,1n,1n],
  [9600n,350n,45n,1n,1n,1n,1n,1n]
 ];
 const baselineMargin=margin(baseline),rows=[];
 let best=null;
 for(const shares of candidates){
  const A=lower(shares,D),p=pd(A),m=p.positive?margin(A):null;
  const row={shares:shares.map(String),positive:p.positive,firstMinor:p.minors[0],positiveMinors:p.minors.filter(x=>BigInt(x)>0n).length,marginNumerator:m};
  rows.push(row);
  if(m!==null&&(!best||BigInt(m)>BigInt(best.summary.marginNumerator)))best={summary:row,lowerInteger:A.map(a=>a.map(String)),principalMinors:p.minors};
 }
 return {h:r.h,odd:r.odd,scale:String(Q),marginDenominator:String(D),baselineMargin,baselineFirstMinor:r.principalMinors[0],candidates:rows,best,scope:"exact stored-interval reweighting; relative to fixed positive diagonal of upper-energy upper endpoints, not ordinary spectral gap"};
}
if(typeof module!=="undefined")module.exports=compare;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){const fs=require("node:fs");console.log(JSON.stringify(process.argv.slice(2).map(p=>compare(JSON.parse(fs.readFileSync(p,"utf8")))),null,2));}

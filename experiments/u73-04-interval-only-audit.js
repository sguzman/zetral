// U73-04 independent stored interval reconstruction only; determinant audit split out.
function audit(raw,f,stored,trial,eighthAll){
 const cert=stored.replay;
 const r=raw.rows[0],n=r.ks.length,Q=BigInt(raw.scale),keys=["leading","second","third","fourth","fifth","sixth","seventh"],assert=(x,m)=>{if(!x)throw Error(m)};
 assert(n===49&&Q===10n**66n&&r.h==="249/100"&&r.M===20480&&r.T===1024&&r.J===128&&r.KEM===20&&r.witnessWindow==="121/10"&&cert.odd===r.odd&&cert.h===r.h,"regime");
 assert(f.h===r.h&&f.odd===r.odd&&f.M===r.M&&f.primeNormUpper===r.primeNormUpper&&BigInt(f.scale)===Q,"factors");
 const D=BigInt(cert.denominator),w=cert.weights.map(BigInt),old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator),rat=f.ratios.map(z=>BigInt(z[1]));
 assert(w.length===n+7&&w.every(z=>z>0n)&&w.reduce((a,b)=>a+b,0n)===D&&old.length===8&&old.every(z=>z>0n)&&old.reduce((a,b)=>a+b,0n)===D0&&rat.length===8&&rat.every(z=>z>0n&&z<Q),"shares");
 const mat=fn=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>fn(i,j)));
 const max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b,abs=x=>x<0n?-x:x;
 const floor=(a,b)=>{assert(b>0n,"divisor");const q=a/b;return a%b<0n?q-1n:q},ceil=(a,b)=>-floor(-a,b);
 function isqrt(x){assert(x>0n,"positive root");let l=0n,h=1n<<BigInt(Math.ceil(x.toString(2).length/2)+1);while(h-l>1n){const m=(l+h)/2n;if(m*m<=x)l=m;else h=m}return l}
 const B=stored.transform.map(row=>row.map(BigInt));assert(B.length===n&&B.every((row,i)=>row.length===n&&row[i]>0n&&row.slice(i+1).every(x=>x===0n)),"triangular transform");
 const det=B.reduce((a,row,i)=>a*row[i],1n);assert(String(det)===stored.determinant,"determinant");
 function congruence(m){
   const v=mat((i,j)=>{let low=0n,high=0n;for(let k=0;k<n;k++)if(B[i][k])for(let l=0;l<n;l++)if(B[j][l]){const p=B[i][k]*B[j][l],a=BigInt(m[k][l][0]),b=BigInt(m[k][l][1]);low+=min(p*a,p*b);high+=max(p*a,p*b)}return[low,high]});return v;
 }
 const u=congruence(r.componentIntervals.upper),fin=congruence(r.componentIntervals.finite),rank=keys.map(k=>congruence(r.componentIntervals[k]));
 const vecNames=["S0","V2","S2","V4","S4","V6","S6"],narrowed=[];
 for(let k=0;k<7;k++){
  const v=trial.tails.map(t=>t[vecNames[k]].map(BigInt)),f=r.rankFactors[k].map(BigInt);
  const tv=B.map(row=>{let lo=0n,hi=0n;for(let j=0;j<n;j++){let a=row[j]*v[j][0],b=row[j]*v[j][1];lo+=min(a,b);hi+=max(a,b)}return[lo,hi]});
  let count=0;
  for(let i=0;i<n;i++)for(let j=0;j<n;j++){
   let products=tv[i].flatMap(x=>tv[j].map(y=>x*y)),p=[floor(products.reduce(min),Q),ceil(products.reduce(max),Q)];
   products=p.flatMap(x=>f.map(y=>x*y));let lo=floor(products.reduce(min),Q),hi=ceil(products.reduce(max),Q);
   const old=rank[k][i][j],l=max(old[0],lo),h=min(old[1],hi);assert(l<=h,"rank intersection");
   if(h-l<old[1]-old[0])count++;rank[k][i][j]=[l,h];
  }narrowed.push(count);
 }
 assert(eighthAll.length===n,"eighth count");
 const E=u.map((row,i)=>row[i][1]);assert(E.every((v,i)=>v>0n&&u[i][i][0]>0n&&String(v)===cert.energyUpper[i]),"energy");
 const ds=E.map(e=>10n**180n/isqrt(e));
 const W=w.slice(7).reduce((a,b)=>a+b,0n),eighth=eighthAll.map(BigInt);
 const delta=eighth.map((e,i)=>ceil(ceil(ceil(e*W,w[i+7])*rat[7],Q)*old[7]*D,W*D0));
 const bounds=mat((i,j)=>{
  const lowLoss=[fin[i][j][0]],highLoss=[fin[i][j][1]];
  for(let k=0;k<7;k++){lowLoss.push(floor(floor(rank[k][i][j][0]*rat[k],Q)*old[k]*D,w[k]*D0));highLoss.push(ceil(ceil(rank[k][i][j][1]*rat[k],Q)*old[k]*D,w[k]*D0))}
  const d=i===j?delta[i]:0n;
  return[u[i][j][0]-highLoss.reduce((a,b)=>a+b,d),u[i][j][1]-lowLoss.reduce((a,b)=>a+b,d)];
 });
 const mids=mat(()=>0n),rad=mat(()=>0n);
 for(let i=0;i<n;i++)for(let j=i;j<n;j++){const l=max(bounds[i][j][0],bounds[j][i][0]),h=min(bounds[i][j][1],bounds[j][i][1]);assert(l<=h,"symmetric intersection");const m=(h+l)/2n;mids[i][j]=mids[j][i]=m;rad[i][j]=rad[j][i]=max(h-m,m-l)}
 const radii=rad.map((row,i)=>row.reduce((a,v,j)=>a+ceil(v*ds[j],ds[i]),0n));
 const lower=mat((i,j)=>mids[i][j]-(i===j?radii[i]:0n));
 assert(radii.every((x,i)=>String(x)===cert.radii[i]),"radius comparison");
 assert(lower.every((row,i)=>row.every((x,j)=>String(x)===cert.lowerInteger[i][j])),"matrix comparison");
 return {h:r.h,odd:r.odd,n,narrowed,matchedEntries:n*n,matchedRadii:n,scope:"Independent stored interval reconstruction only; determinant checks performed separately. Not independent original-form evaluation."};
}
if(typeof module!=='undefined')module.exports=audit;

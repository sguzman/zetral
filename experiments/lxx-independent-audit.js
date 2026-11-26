// LXX LXX04 independent reconstruction and row-elimination audit.
function audit(raw,f,pack,z){
 const cert=pack.replay;
 const r=raw.rows[0],n=r.ks.length,Q=BigInt(raw.scale),keys=["leading","second","third","fourth","fifth","sixth","seventh"],assert=(x,m)=>{if(!x)throw Error(m)};
 assert(n===45&&Q===10n**66n&&r.h==="123/50"&&r.M===16384&&r.T===832&&r.J===128&&r.KEM===20&&r.witnessWindow==="47/4"&&cert.odd===r.odd&&cert.h===r.h,"regime");
 assert(f.h===r.h&&f.odd===r.odd&&f.M===r.M&&f.primeNormUpper===r.primeNormUpper&&BigInt(f.scale)===Q,"factors");
 const D=BigInt(cert.denominator),w=cert.weights.map(BigInt),old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator),rat=f.ratios.map(z=>BigInt(z[1]));
 assert(w.length===n+7&&w.every(z=>z>0n)&&w.reduce((a,b)=>a+b,0n)===D&&old.length===8&&old.every(z=>z>0n)&&old.reduce((a,b)=>a+b,0n)===D0&&rat.length===8&&rat.every(z=>z>0n&&z<Q),"shares");
 const mat=fn=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>fn(i,j)));
 const max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b,abs=x=>x<0n?-x:x;
 const floor=(a,b)=>{assert(b>0n,"divisor");const q=a/b;return a%b<0n?q-1n:q},ceil=(a,b)=>-floor(-a,b);
 function isqrt(x){assert(x>0n,"positive root");let l=0n,h=1n<<BigInt(Math.ceil(x.toString(2).length/2)+1);while(h-l>1n){const m=(l+h)/2n;if(m*m<=x)l=m;else h=m}return l}
 const B=pack.transform.map(row=>row.map(BigInt));assert(B.length===n&&B.every((row,i)=>row.length===n&&row[i]>0n&&row.slice(i+1).every(v=>v===0n)),"triangular transform");assert(B.reduce((p,row,i)=>p*row[i],1n)===BigInt(pack.determinant),"determinant");assert(JSON.stringify(z.transform)===JSON.stringify(pack.transform)&&z.originalEighthMatches===n&&z.unchangedEighthMatches===(r.odd?44:42),"fresh tail matches");
 function congruence(m){
   const v=mat((i,j)=>{let low=0n,high=0n;for(let k=0;k<n;k++)if(B[i][k])for(let l=0;l<n;l++)if(B[j][l]){const p=B[i][k]*B[j][l],a=BigInt(m[k][l][0]),b=BigInt(m[k][l][1]);low+=min(p*a,p*b);high+=max(p*a,p*b)}return[low,high]});return v;
 }
 const u=congruence(r.componentIntervals.upper),fin=congruence(r.componentIntervals.finite),rank=keys.map(k=>congruence(r.componentIntervals[k]));
 const E=u.map((row,i)=>row[i][1]);assert(E.every((v,i)=>v>0n&&u[i][i][0]>0n&&String(v)===cert.energyUpper[i]),"energy");
 const ds=E.map(e=>10n**80n/isqrt(e));assert(ds.every((v,i)=>String(v)===z.radiusWeights[i]),"radius weights");
 const W=w.slice(7).reduce((a,b)=>a+b,0n),eighth=z.eighth.map(BigInt);
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
 const gcd=(a,b)=>{a=abs(a);b=abs(b);while(b){const t=a%b;a=b;b=t}return a};
 const rational=(a,b)=>{assert(b>0n,"rational denominator");const g=gcd(a,b);return[a/g,b/g]};
 function eliminate(A){
  const scale=Array.from({length:n},()=>[1n,1n]),minors=[];let det=[1n,1n];
  for(let k=0;k<n;k++){
    const p=A[k][k];if(p<=0n)return{count:k,failedPivot:String(p),minors};
    det=rational(det[0]*p*scale[k][1],det[1]*scale[k][0]);assert(det[1]===1n,"integer leading determinant");minors.push(String(det[0]));
    for(let i=k+1;i<n;i++){
      const a=A[i][k],g=gcd(p,a),m=p/g,t=a/g;let common=0n;
      for(let j=k+1;j<n;j++){A[i][j]=m*A[i][j]-t*A[k][j];common=gcd(common,A[i][j])}
      if(common===0n)common=1n;for(let j=k+1;j<n;j++)A[i][j]/=common;A[i][k]=0n;
      scale[i]=rational(scale[i][0]*m,scale[i][1]*common);
    }
  }return{count:n,minors};
 }
 const result=eliminate(lower.map(row=>row.slice()));assert(result.count===n&&result.minors.every((v,i)=>v===cert.principalMinors[i]),"all independent determinants");
 const grid=BigInt(cert.marginDenominator),m=BigInt(cert.marginNumerator),gridMatrix=k=>mat((i,j)=>grid*lower[i][j]-(i===j?k*E[i]:0n));
 assert(grid===1000000n&&m>0n,"grid");
 const passing=eliminate(gridMatrix(m)),failing=eliminate(gridMatrix(m+1n));assert(passing.count===n&&failing.count<n,"grid boundary");
 return{h:r.h,odd:r.odd,n,matchedEntries:n*n,matchedRadii:n,matchedDeterminants:n,marginNumerator:String(m),marginDenominator:String(grid),nextGridFailureIndex:failing.count,scope:"Independent stored interval reconstruction, gcd-scaled rational row elimination, and adjacent fixed-energy grid tests; not independent original-form evaluation."};
}
if(typeof module!=='undefined')module.exports=audit;

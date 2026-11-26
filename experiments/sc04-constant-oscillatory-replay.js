// RC04: independent constant-oscillatory-scaled matrix reconstruction and integer row elimination.
// Run: node experiments/qc04-constant-oscillatory-replay.js EVEN_RAW EVEN_GEOMETRIC ODD_RAW ODD_GEOMETRIC
function replay(data,geometric){
 const r=data.rows[0],n=r.ks.length,c=r.componentIntervals,ds=r.radiusWeights.map(BigInt),old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator);
 const picked=geometric.results[0],shares=picked.shares.map(BigInt),den=BigInt(picked.denominator); const ratio=geometric.factors.ratios.map(a=>BigInt(a[1])),Q=BigInt(data.scale); const weights=picked.weights.map(BigInt),dw=weights.slice(7),W=dw.reduce((s,x)=>s+x,0n);
 const assert=(x,m)=>{if(!x)throw Error(m)};
 const max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b;
 const floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b);
 assert(BigInt(data.scale)===10n**66n&&r.h==='61/25'&&r.witnessWindow==='23/2'&&r.eightShift===true&&r.J===128&&r.KEM===20&&r.M===12288&&r.T===768&&n===43&&ds.length===n&&ds.every(x=>x>0n),'input');
 assert(old.length===8&&shares.length===8&&old.every(x=>x>0n)&&shares.every(x=>x>0n)&&old.reduce((s,x)=>s+x,0n)===D0&&shares.reduce((s,x)=>s+x,0n)===den,'shares');
 assert(weights.length===n+7&&weights.every(x=>x>0n)&&weights.reduce((s,x)=>s+x,0n)===den&&W===shares[7]&&shares.slice(0,7).every((x,i)=>x===weights[i]),'joint weights');
 assert(geometric.factors.h===r.h&&geometric.factors.odd===r.odd&&geometric.factors.M===r.M&&geometric.factors.primeNormUpper===r.primeNormUpper&&BigInt(geometric.factors.scale)===Q&&ratio.length===8&&ratio.every(x=>x>0n&&x<Q),'factor regime');
 const diag=dw.map((w,i)=>ceil(ceil(BigInt(r.diagnostics[i].eighthUpper)*W,w)*ratio[7],Q));assert(diag.every((x,i)=>String(x)===picked.directionDiagonal[i]),'direction diagonal');
 const keys=['leading','second','third','fourth','fifth','sixth','seventh'];
 const interval=(i,j,ss,dd,refined)=>{
  const [u0,u1]=c.upper[i][j].map(BigInt),[f0,f1]=c.finite[i][j].map(BigInt);
  let l=u0-f1,h=u1-f0;
  for(let k=0;k<7;k++){let [a,b]=c[keys[k]][i][j].map(BigInt);if(refined){a=floor(a*ratio[k],Q);b=ceil(b*ratio[k],Q)}const p=old[k]*dd,q=ss[k]*D0;l-=ceil(b*p,q);h-=floor(a*p,q);}
  if(i===j){const x=ceil((refined?diag[i]:BigInt(c.eighth[i]))*old[7]*dd,ss[7]*D0);l-=x;h-=x;}return[l,h];
 };
 function matrix(ss,dd,refined=false){
  const m=Array.from({length:n},()=>Array(n).fill(0n)),rad=m.map(x=>x.slice());
  for(let i=0;i<n;i++)for(let j=0;j<=i;j++){
   const a=interval(i,j,ss,dd,refined),b=interval(j,i,ss,dd,refined),l=max(a[0],b[0]),h=min(a[1],b[1]);assert(l<=h,'intersection');
   const v=(l+h)/2n; m[i][j]=m[j][i]=v;rad[i][j]=rad[j][i]=max(v-l,h-v);
  }
  const radii=rad.map((row,i)=>row.reduce((s,v,j)=>s+ceil(v*ds[j],ds[i]),0n));
  return{radii,A:m.map((row,i)=>row.map((v,j)=>v-(i===j?radii[i]:0n)))};
 }
 const baseline=matrix(old,D0);assert(baseline.A.every((row,i)=>row.every((x,j)=>String(x)===r.lowerInteger[i][j])),'baseline matrix');
 assert(baseline.radii.every((x,i)=>String(x)===r.diagnostics[i].matrixRadius),'baseline radii');
 const {A,radii}=matrix(shares,den,true),expected=picked;assert(A.every((row,i)=>row.every((x,j)=>String(x)===expected.lowerInteger[i][j])),'selected matrix');
 // Nonsymmetric integer row elimination with tracked rational row scales.
 const abs=x=>x<0n?-x:x;
 const gcd=(a,b)=>{a=abs(a);b=abs(b);while(b){let t=a%b;a=b;b=t}return a};
 const rat=(a,b)=>{assert(b>0n,'denominator');const g=gcd(a,b);return[a/g,b/g]};
 function eliminate(B){
  const scales=Array.from({length:n},()=>[1n,1n]),minors=[];let det=[1n,1n];
  for(let k=0;k<n;k++){
   const p=B[k][k];assert(p>0n,'nonpositive pivot');det=rat(det[0]*p*scales[k][1],det[1]*scales[k][0]);assert(det[1]===1n,'noninteger determinant');minors.push(String(det[0]));
   for(let i=k+1;i<n;i++){const a=B[i][k],g=gcd(p,a),m=p/g,t=a/g;let common=0n;
    for(let j=k+1;j<n;j++){B[i][j]=m*B[i][j]-t*B[k][j];common=gcd(common,B[i][j]);}
    if(common===0n)common=1n;for(let j=k+1;j<n;j++)B[i][j]/=common;
    B[i][k]=0n;scales[i]=rat(scales[i][0]*m,scales[i][1]*common);
   }
  }return minors;
 }
 const minors=eliminate(A.map(row=>row.slice()));assert(expected.principalMinors.length===n&&minors.every((x,i)=>x===expected.principalMinors[i]),'determinants');
 // Fixed-energy normalized lower margin by exact integer test.
 const E=c.upper.map((row,i)=>BigInt(row[i][1]));assert(E.every(x=>x>0n),'energy');
 const D=1000000n;function pass(m){const B=A.map((row,i)=>row.map((x,j)=>D*x-(i===j?m*E[i]:0n)));let prev=1n;
  for(let k=0;k<n;k++){const p=B[k][k];if(p<=0n)return false;for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){const z=p*B[i][j]-B[i][k]*B[k][j];assert(z%prev===0n,'division');B[i][j]=B[j][i]=z/prev;}prev=p;}return true;
 }
 let lo=0n,hi=D;assert(pass(lo),'base');if(pass(hi))lo=hi;else while(hi-lo>1n){const m=(lo+hi)/2n;if(pass(m))lo=m;else hi=m;}
 return{h:r.h,odd:r.odd,n,baselineEntries:n*n,baselineRadiusMatches:n,selectedEntries:n*n,exactMinorMatches:n,marginNumerator:String(lo),marginDenominator:String(D),nextGridFails:lo<D?!pass(lo+1n):null,firstRadius:String(radii[0]),shares:shares.map(String),denominator:String(den),scope:'stored interval reconstruction and independent integer row elimination; not independent operator evaluation'};
}
if(typeof module!=='undefined')module.exports=replay;
if(typeof require!=='undefined'&&typeof module!=='undefined'&&require.main===module){const fs=require('node:fs'),read=p=>JSON.parse(fs.readFileSync(p,'utf8'));console.log(JSON.stringify([replay(read(process.argv[2]),read(process.argv[3])),replay(read(process.argv[4]),read(process.argv[5]))],null,2));}

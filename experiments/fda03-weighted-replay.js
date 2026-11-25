// FDA03/04: independent exact stored weighted interval reconstruction.
function replay(data){
const r=data.rows[0],n=r.ks.length,c=r.componentIntervals,D=1000000n,ds=r.radiusWeights.map(BigInt);
if(ds.length!==n||ds.some(x=>x<=0n)||BigInt(data.scale)!==10n**66n)throw Error("input");
const keys=["finite","leading","second","third","fourth","fifth","sixth","seventh"];
const max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b,ceil=(a,b)=>(a+b-1n)/b;
const E=c.upper.map((row,i)=>BigInt(row[i][1]));
const intervals=c.upper.map((row,i)=>row.map((a,j)=>{
 let l=BigInt(a[0]),u=BigInt(a[1]);for(const k of keys){l-=BigInt(c[k][i][j][1]);u-=BigInt(c[k][i][j][0]);}
 if(i===j){l-=BigInt(c.eighth[i]);u-=BigInt(c.eighth[i]);}return[l,u];
}));
const mid=intervals.map((row,i)=>row.map((a,j)=>{let l=max(a[0],intervals[j][i][0]),u=min(a[1],intervals[j][i][1]);if(l>u)throw Error("intersection");return(l+u)/2n}));
const rad=intervals.map((row,i)=>row.map((a,j)=>max(mid[i][j]-max(a[0],intervals[j][i][0]),min(a[1],intervals[j][i][1])-mid[i][j])));
const radii=rad.map((row,i)=>row.reduce((s,v,j)=>s+ceil(v*ds[j],ds[i]),0n));
const A=mid.map((row,i)=>row.map((v,j)=>v-(i===j?radii[i]:0n)));
if(!A.every((row,i)=>row.every((x,j)=>String(x)===r.lowerInteger[i][j])))throw Error("lower matrix mismatch");
if(!radii.every((x,i)=>String(x)===r.diagnostics[i].matrixRadius))throw Error("radius mismatch");
// Independent nonsymmetric integer row elimination with explicit rational row scales.
const abs=a=>a<0n?-a:a;
const gcd=(a,b)=>{a=abs(a);b=abs(b);while(b){let z=a%b;a=b;b=z}return a};
const rat=(a,b)=>{if(b<=0n)throw Error("denominator");const g=gcd(a,b);return[a/g,b/g]};
function eliminate(B){
 const scales=Array.from({length:n},()=>[1n,1n]),minors=[];let det=[1n,1n];
 for(let k=0;k<n;k++){
  const p=B[k][k];if(p<=0n)return {pass:k,minors};
  det=rat(det[0]*p*scales[k][1],det[1]*scales[k][0]);
  if(det[1]!==1n)throw Error("noninteger minor");minors.push(String(det[0]));
  for(let i=k+1;i<n;i++){
   const a=B[i][k],g=gcd(p,a),m=p/g,t=a/g;
   let common=0n;for(let j=k+1;j<n;j++){B[i][j]=m*B[i][j]-t*B[k][j];common=gcd(common,B[i][j]);}
   if(common===0n)common=1n;
   for(let j=k+1;j<n;j++)B[i][j]/=common;
   B[i][k]=0n;scales[i]=rat(scales[i][0]*m,scales[i][1]*common);
  }
 }return {pass:n,minors};
}
const result=eliminate(A.map(row=>row.slice()));if(result.pass!==n||result.minors.some((v,i)=>v!==r.principalMinors[i]))throw Error("minor mismatch");
function pd(B){let prev=1n;for(let k=0;k<n;k++){const p=B[k][k];if(p<=0n)return false;for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){const z=p*B[i][j]-B[i][k]*B[k][j];if(z%prev)throw Error("division");B[i][j]=B[j][i]=z/prev;}prev=p;}return true;}
if(E.some(x=>x<=0n))throw Error("energy");let lo=0n,hi=D;const test=m=>pd(A.map((row,i)=>row.map((v,j)=>D*v-(i===j?m*E[i]:0n))));
if(!test(lo))throw Error("base");if(test(hi))lo=hi;else while(hi-lo>1n){let m=(lo+hi)/2n;if(test(m))lo=m;else hi=m;}
return {h:r.h,odd:r.odd,n,entries:n*n,exactRadiusMatches:n,exactMinorMatches:n,marginNumerator:String(lo),marginDenominator:String(D),nextGridFails:lo<D?!test(lo+1n):null,firstRadius:String(radii[0]),scope:"stored components and exact row elimination; not independent operator evaluation"};
}
if(typeof module!=="undefined")module.exports=replay;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module)console.log(JSON.stringify(process.argv.slice(2).map(p=>replay(JSON.parse(require("node:fs").readFileSync(p,"utf8")))),null,2));

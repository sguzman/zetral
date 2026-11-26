// U73-02: fraction-free common-denominator backsolve and exact interval diagnostic.
function diagnose(t,a){
 const n=t.ks.length,assert=(p,m)=>{if(!p)throw Error(m)},abs=x=>x<0n?-x:x,mat=f=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>f(i,j))),S=10n**60n;
 assert(n===49&&t.T===1024&&t.h==="249/100"&&a.start===98&&a.end===20480&&a.count===10192&&a.scale===t.scale,"regime");
 const E=t.upper.map(row=>row.map(z=>z.map(BigInt))),F=a.finite.map(row=>row.map(z=>z.map(BigInt)));
 const G=mat((i,j)=>(E[i][j][0]+E[i][j][1]+E[j][i][0]+E[j][i][1])/4n);
 const U=G.map(r=>r.slice());let prev=1n;
 const B=mat(()=>0n),selected=[];
 for(let i=0;i<n;i++){
  const p=U[i][i];assert(p>0n,"nonpositive midpoint pivot "+i);
  const d=prev;
  if(i>0&&p*1000n<999n*d*G[i][i]){
   const x=Array(i).fill(0n);
   for(let j=i-1;j>=0;j--){let v=-d*U[j][i];for(let k=j+1;k<i;k++)v-=U[j][k]*x[k];assert(v%U[j][j]===0n,"backsolve division");x[j]=v/U[j][j]}
   for(let j=0;j<i;j++){let v=d*G[j][i];for(let k=0;k<i;k++)v+=G[j][k]*x[k];assert(v===0n,"exact orthogonality")}
   for(let j=0;j<i;j++)B[i][j]=(x[j]<0n?-1n:1n)*((abs(x[j])*S+d/2n)/d);
   B[i][i]=S;selected.push(i);
  }else B[i][i]=1n;
  for(let j=i+1;j<n;j++)for(let k=j;k<n;k++){let v=p*U[j][k]-U[j][i]*U[i][k];assert(v%d===0n,"Bareiss division");U[j][k]=U[k][j]=v/d}
  prev=p;
 }
 const sum=(terms)=>{let l=0n,h=0n;for(const [z,[a,b]] of terms){l+=z*(z>=0n?a:b);h+=z*(z>=0n?b:a)}return[l,h]};
 const congr=m=>{let temp=mat((i,j)=>sum(B[i].map((z,k)=>[z,m[k][j]])));return mat((i,j)=>sum(B[j].map((z,k)=>[z,temp[i][k]])))};
 const e=congr(E),f=congr(F);
 const sqrt=x=>{assert(x>0n,"sqrt");let y=1n<<BigInt(Math.ceil(x.toString(2).length/2));for(;;){let z=(y+x/y)/2n;if(z>=y)return y;y=z}};
 const diag=e.map((r,i)=>r[i]);let positive=diag.filter(z=>z[0]>0n).length;
 const max=(a,b)=>a>b?a:b,ceil=(a,b)=>(a+b-1n)/b,scale=10n**12n;
 const mid=mat((i,j)=>B[i].reduce((v,x,k)=>v+x*B[j].reduce((w,y,l)=>w+y*G[k][l],0n),0n));
 const midOff=mid.map((r,i)=>r.reduce((v,x,j)=>i===j?v:v+ceil(abs(x)*scale,sqrt(r[i]*mid[j][j])),0n));
 const radii=diag.map((z,i)=>z[0]<=0n?null:String(ceil((z[1]-z[0])*scale,z[0])));
 const intervalOff=positive===n?e.map((r,i)=>String(r.reduce((v,z,j)=>i===j?v:v+ceil(max(abs(z[0]),abs(z[1]))*scale,sqrt(diag[i][0]*diag[j][0])),0n))):null;
 const ratios=diag.map((z,i)=>z[1]>0n&&f[i][i][0]>=0n?String(f[i][i][0]*scale/z[1]):null);
 return {scope:"Exact midpoint and interval congruence diagnostic, not full allocation or original-form evaluation",scale:String(scale),roundingScale:String(S),selected,determinant:String(S**BigInt(selected.length)),positiveEnergyDiagonals:positive,maxMidpointNormalizedRowOffUpper:String(midOff.reduce(max,0n)),relativeEnergyWidthsUpper:radii,intervalNormalizedRowOffUpper:intervalOff,finiteLossRatioLower:ratios,transform:B.map(r=>r.map(String))};
}
if(typeof module!=="undefined")module.exports=diagnose;

// LXIX TC03: exact reconstruction, rational allocation replay and energy-grid margin.
function exact(raw,proposal,z=null){
 const r=raw.rows[0],n=r.ks.length,keys=["leading","second","third","fourth","fifth","sixth","seventh"],Q=BigInt(raw.scale),old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator),f=proposal.factors,rat=f.ratios.map(z=>BigInt(z[1])),c=r.componentIntervals;
 const assert=(x,m)=>{if(!x)throw Error(m)},floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b),max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b;
 assert(n===52&&r.h==="251/100"&&r.M===24576&&r.T===1024&&r.J===128&&r.KEM===20&&r.witnessWindow==="62/5"&&Q===10n**66n,"regime");
 assert(f.h===r.h&&f.odd===r.odd&&f.M===r.M&&f.primeNormUpper===r.primeNormUpper&&BigInt(f.scale)===Q&&rat.length===8&&rat.every(x=>x>0n&&x<=Q),"factors");
 assert(old.length===8&&old.every(x=>x>0n)&&old.reduce((a,b)=>a+b,0n)===D0,"baseline shares");
 const ww=proposal.weights.map(BigInt),D=BigInt(proposal.denominator),W=ww.slice(7).reduce((a,b)=>a+b,0n);
 assert(ww.length===n+7&&ww.every(x=>x>0n)&&ww.reduce((a,b)=>a+b,0n)===D,"shares");
 const E=(z?.componentIntervals??c).upper.map((row,i)=>BigInt(row[i][1]));
 assert(E.every(x=>x>0n),"energy");
 const diag=r.diagnostics.map((a,i)=>ceil(ceil(BigInt(z?.eighth[i]??a.eighthUpper)*W,ww[7+i])*rat[7],Q)),mat=fn=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>fn(i,j)));
 function matrix(refined){
 const c=refined&&z?z.componentIntervals:r.componentIntervals,ds=(refined&&z?z.radiusWeights:r.radiusWeights).map(BigInt);assert(ds.every(x=>x>0n)&&c.upper.every((row,i)=>BigInt(row[i][0])>0n),"energy");
 const ss=refined?ww.slice(0,7).concat(W):old,den=refined?D:D0;
 const interval=(i,j)=>{let l=BigInt(c.upper[i][j][0])-BigInt(c.finite[i][j][1]),h=BigInt(c.upper[i][j][1])-BigInt(c.finite[i][j][0]);for(let k=0;k<7;k++){let [a,b]=c[keys[k]][i][j].map(BigInt);if(refined){a=floor(a*rat[k],Q);b=ceil(b*rat[k],Q)}l-=ceil(b*old[k]*den,ss[k]*D0);h-=floor(a*old[k]*den,ss[k]*D0)}if(i===j){let v=ceil((refined?diag[i]:BigInt(c.eighth[i]))*old[7]*den,ss[7]*D0);l-=v;h-=v}return[l,h]};
 const A=mat(()=>0n),rad=mat(()=>0n);for(let i=0;i<n;i++)for(let j=0;j<=i;j++){const a=interval(i,j),b=interval(j,i),l=max(a[0],b[0]),h=min(a[1],b[1]);assert(l<=h,"intersection");const m=(l+h)/2n;A[i][j]=A[j][i]=m;rad[i][j]=rad[j][i]=max(m-l,h-m)}
 const radii=rad.map((row,i)=>row.reduce((a,b,j)=>a+ceil(b*ds[j],ds[i]),0n));for(let i=0;i<n;i++)A[i][i]-=radii[i];return {A,radii};
 }
 const baseline=matrix(false);assert(baseline.A.every((row,i)=>row.every((v,j)=>String(v)===r.lowerInteger[i][j]))&&baseline.radii.every((v,i)=>String(v)===r.diagnostics[i].matrixRadius),"baseline reproduction");
 const {A,radii}=matrix(true);
 function minors(B){let prev=1n,vals=[];for(let k=0;k<n;k++){const p=B[k][k];if(p<=0n)return{count:k,vals,failed:String(p)};vals.push(String(p));for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){const z=p*B[i][j]-B[i][k]*B[k][j];assert(z%prev===0n,"Bareiss division");B[i][j]=B[j][i]=z/prev}prev=p}return {count:n,vals}}
 const res=minors(A.map(row=>row.slice())),grid=1000000n;
 let lo=null,hi=null;if(res.count===n){function pass(m){return minors(mat((i,j)=>grid*A[i][j]-(i===j?m*E[i]:0n))).count===n}lo=0n;hi=grid;assert(!pass(hi),"grid upper");while(hi-lo>1n){const m=(lo+hi)/2n;if(pass(m))lo=m;else hi=m}assert(pass(lo)&&!pass(hi),"grid margin")}
 return {h:r.h,odd:r.odd,n,M:r.M,T:r.T,baselineEntries:n*n,baselineRadii:n,weights:ww.map(String),denominator:String(D),energyUpper:E.map(String),radii:radii.map(String),lowerInteger:A.map(row=>row.map(String)),principalMinors:res.vals,positiveMinors:res.count,failedMinor:res.failed??null,marginNumerator:lo===null?null:String(lo),marginDenominator:String(grid),nextGridFails:hi===null?null:true,transformed:!!z,scope:"Exact replay of staged stored intervals and optional recomputed transformed eighth bounds; not independent original-form evaluation."};
}
if(typeof module!=="undefined")module.exports=exact;

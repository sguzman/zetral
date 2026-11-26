// Reconstruct U75 h=251/100 M20480 even inputs and replay the allocation in
// original trial coordinates with exact integer interval arithmetic.
const fs=require('node:fs');
const staged=require('../u75-t1024-m20480-staged.js');
const assemble=require('../u75-t1024-assemble.js');
const floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b);
const max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b;
const assert=(v,m)=>{if(!v)throw Error(m);};
function rawInput(){
 const src=staged.extend(fs.readFileSync('experiments/tc01-post-log11-em.js','utf8'));
 const p='experiments/u75-even-trial-part-';
 const trial=JSON.parse([1,2,3,4,5,6].map(k=>fs.readFileSync(p+k+'.txt','utf8')).join(''));
 const aggregate=JSON.parse(fs.readFileSync('experiments/results/u75-251-100-even-t1024-m20480-aggregate-104-20480.json','utf8'));
 return assemble(src,trial,[aggregate]);
}
function construct(raw,proposal){
 const r=raw.rows[0],c=r.componentIntervals,n=r.ks.length,Q=BigInt(raw.scale),old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator),w=proposal.weights.map(BigInt),D=BigInt(proposal.denominator),W=w.slice(7).reduce((a,b)=>a+b,0n),keys=['leading','second','third','fourth','fifth','sixth','seventh'];
 assert(n===52&&r.h==='251/100'&&r.T===1024&&r.M===20480&&r.J===128&&r.KEM===20&&Q===10n**66n,'regime');
 assert(w.length===n+7&&w.every(x=>x>0n)&&w.reduce((a,b)=>a+b,0n)===D,'proposal allocation');
 const E=c.upper.map((row,i)=>BigInt(row[i][1]));
 function matrix(refined){
  const shares=refined?w.slice(0,7).concat(W):old,den=refined?D:D0;
  const interval=(i,j)=>{
   let lo=BigInt(c.upper[i][j][0])-BigInt(c.finite[i][j][1]);
   let hi=BigInt(c.upper[i][j][1])-BigInt(c.finite[i][j][0]);
   for(let k=0;k<7;k++){
    const [a,b]=c[keys[k]][i][j].map(BigInt);
    lo-=ceil(b*old[k]*den,shares[k]*D0);
    hi-=floor(a*old[k]*den,shares[k]*D0);
   }
   if(i===j){
    const e=refined?BigInt(r.diagnostics[i].eighthUpper):BigInt(c.eighth[i]);
    const diag=refined?ceil(e*W,w[7+i]):e;
    const v=ceil(diag*old[7]*den,shares[7]*D0);
    lo-=v;hi-=v;
   }
   return[lo,hi];
  };
  const A=Array.from({length:n},()=>Array(n).fill(0n)),rad=Array.from({length:n},()=>Array(n).fill(0n));
  for(let i=0;i<n;i++)for(let j=0;j<=i;j++){
   const [al,ah]=interval(i,j),[bl,bh]=interval(j,i),lo=max(al,bl),hi=min(ah,bh);assert(lo<=hi,'empty symmetric interval');
   const m=(lo+hi)/2n;A[i][j]=A[j][i]=m;rad[i][j]=rad[j][i]=max(m-lo,hi-m);
  }
  const ds=r.radiusWeights.map(BigInt),radii=rad.map((row,i)=>row.reduce((s,x,j)=>s+ceil(x*ds[j],ds[i]),0n));
  for(let i=0;i<n;i++)A[i][i]-=radii[i];
  return{A,radii};
 }
 function minors(input){
  const B=input.map(row=>row.slice()),pivots=[];let prev=1n;
  for(let k=0;k<n;k++){const p=B[k][k];if(p<=0n)return{count:k,firstFailure:k+1,failedPivotNegative:true,pivots};pivots.push(String(p));for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){const z=p*B[i][j]-B[i][k]*B[k][j];assert(z%prev===0n,'nonexact Bareiss division');B[i][j]=B[j][i]=z/prev;}prev=p;}
  return{count:n,firstFailure:null,failedPivotNegative:null,pivots};
 }
 const baseline=matrix(false),candidate=matrix(true),b=minors(baseline.A),p=minors(candidate.A);
 assert(baseline.A.every((row,i)=>row.every((x,j)=>String(x)===r.lowerInteger[i][j])),'baseline entries mismatch');
 assert(baseline.radii.every((x,i)=>String(x)===r.diagnostics[i].matrixRadius),'baseline radii mismatch');
 return{regime:{h:r.h,parity:r.odd?'odd':'even',n,J:r.J,KEM:r.KEM,T:r.T,M:r.M},baseline:{entries:n*n,radii:n,matchedStored:true,positiveLeadingMinors:b.count,firstFailure:b.firstFailure},proposalOriginalCoordinates:{positiveLeadingMinors:p.count,firstFailure:p.firstFailure,failedPivotNegative:p.failedPivotNegative},transformedStoredReplay:{positiveLeadingMinors:proposal.replay.positiveMinors,firstFailure:proposal.replay.positiveMinors===n?null:proposal.replay.positiveMinors+1,scope:proposal.replay.scope},interpretation:'A finite comparison check only. Failure in this basis does not refute analytic positivity or the transformed candidate.'};
}
const raw=rawInput(),stored=JSON.parse(fs.readFileSync('experiments/results/u75-251-100-even-t1024-m20480-rank-tightened-replay.json','utf8'));
console.log(JSON.stringify(construct(raw,{...stored.proposal,replay:stored.replay}),null,2));

// Trace-minimizing positive shares followed by an exact untransformed replay.
const fs=require('node:fs');
const staged=require('../u74-t1024-m20480-staged.js');
const assemble=require('../u74-t1024-assemble.js');
const floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b), ceil=(a,b)=>-floor(-a,b);
const max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b;
const assert=(v,m)=>{if(!v)throw Error(m);};
function rawInput(){
 const src=staged.extend(fs.readFileSync('experiments/tc01-post-log11-em.js','utf8'));
 const p='experiments/results/u74-5-2-even-t1024-m20480-';
 const trial=JSON.parse([1,2,3,4,5].map(k=>fs.readFileSync(p+'trial-part'+k+'.txt','utf8')).join(''));
 const aggregate=JSON.parse(fs.readFileSync(p+'aggregate-100-20480.json','utf8'));
 return assemble(src,trial,[aggregate]);
}
function allocation(raw,denominator,fixedMass=null){
 const r=raw.rows[0],c=r.componentIntervals,old=r.tailShares.map(BigInt),oldDen=BigInt(r.tailShareDenominator);
 const keys=['leading','second','third','fourth','fifth','sixth','seventh'];
 // For trace minimization, tr-loss terms are alpha/(1-S)+beta/S, where S is
 // the total eighth-share mass. This gives rank shares proportional to sqrt
 // (old_k*tr(R_k)) and eighth shares proportional to cube-root(old_7*e_i).
 const rankC=keys.map((k,j)=>{
  let tr=0n;for(let i=0;i<50;i++)tr+=BigInt(c[k][i][i][1]);
  return Number(old[j]*tr);
 });
 const diagC=Array.from({length:50},(_,i)=>Number(old[7]*BigInt(r.diagnostics[i].eighthUpper)));
 const rankRoot=rankC.map(Math.sqrt),rankSum=rankRoot.reduce((a,b)=>a+b,0);
 const diagRoot=diagC.map(Math.cbrt),diagSum=diagRoot.reduce((a,b)=>a+b,0);
 const alpha=rankSum*rankSum,beta=diagSum*diagSum*diagSum;
 const S=fixedMass===null?Math.sqrt(beta)/(Math.sqrt(alpha)+Math.sqrt(beta)):fixedMass;
 const probs=rankRoot.map(x=>(1-S)*x/rankSum).concat(diagRoot.map(x=>S*x/diagSum));
 const D=BigInt(denominator),weights=probs.map(p=>BigInt(Math.floor(p*Number(D))));
 for(let i=0;i<weights.length;i++)if(weights[i]<1n)weights[i]=1n;
 let delta=D-weights.reduce((a,b)=>a+b,0n);
 const order=probs.map((p,i)=>({i,frac:p*Number(D)-Math.floor(p*Number(D))})).sort((a,b)=>b.frac-a.frac);
 for(let k=0;delta>0n;k++,delta--)weights[order[k%order.length].i]++;
 if(delta<0n){const rev=[...order].reverse();for(let k=0;delta<0n;k++){const i=rev[k%rev.length].i;if(weights[i]>1n){weights[i]--;delta++;}}}
 assert(weights.length===57&&weights.every(x=>x>0n)&&weights.reduce((a,b)=>a+b,0n)===D,'share allocation');
 return{weights,denominator:D.toString(),traceModel:{diagMass:S,rankAlpha:alpha,eighthBeta:beta,rankTrace:rankC.map(String),eighthTrace:diagC.map(String)}};
}
function buildMatrix(raw,shares){
 const r=raw.rows[0],c=r.componentIntervals,n=50,old=r.tailShares.map(BigInt),oldDen=BigInt(r.tailShareDenominator),w=shares.weights,D=BigInt(shares.denominator),W=w.slice(7).reduce((a,b)=>a+b,0n);
 const keys=['leading','second','third','fourth','fifth','sixth','seventh'];
 const directed=(i,j)=>{
  let lo=BigInt(c.upper[i][j][0])-BigInt(c.finite[i][j][1]);
  let hi=BigInt(c.upper[i][j][1])-BigInt(c.finite[i][j][0]);
  for(let k=0;k<7;k++){
   const [a,b]=c[keys[k]][i][j].map(BigInt);
   lo-=ceil(b*old[k]*D,w[k]*oldDen);hi-=floor(a*old[k]*D,w[k]*oldDen);
  }
  if(i===j){const e=BigInt(r.diagnostics[i].eighthUpper),diag=ceil(e*W,w[7+i]);lo-=ceil(diag*old[7]*D,w[7+i]*oldDen);hi-=floor(diag*old[7]*D,w[7+i]*oldDen);}
  return[lo,hi];
 };
 const A=Array.from({length:n},()=>Array(n).fill(0n)),rad=Array.from({length:n},()=>Array(n).fill(0n));
 for(let i=0;i<n;i++)for(let j=0;j<=i;j++){
  const [al,ah]=directed(i,j),[bl,bh]=directed(j,i),lo=max(al,bl),hi=min(ah,bh);assert(lo<=hi,'empty symmetric interval');
  const m=(lo+hi)/2n;A[i][j]=A[j][i]=m;rad[i][j]=rad[j][i]=max(m-lo,hi-m);
 }
 const ds=r.radiusWeights.map(BigInt),radii=rad.map((row,i)=>row.reduce((s,x,j)=>s+ceil(x*ds[j],ds[i]),0n));
 for(let i=0;i<n;i++)A[i][i]-=radii[i];
 return{A,radii,energy:r.componentIntervals.upper.map((row,i)=>BigInt(row[i][1]))};
}
function minors(input){const B=input.map(row=>row.slice()),vals=[];let prev=1n;for(let k=0;k<B.length;k++){const p=B[k][k];if(p<=0n)return{count:k,firstFailure:k+1,failedPivot:String(p),vals};vals.push(String(p));for(let i=k+1;i<B.length;i++)for(let j=i;j<B.length;j++){const z=p*B[i][j]-B[i][k]*B[k][j];assert(z%prev===0n,'Bareiss exact division');B[i][j]=B[j][i]=z/prev;}prev=p;}return{count:B.length,firstFailure:null,failedPivot:null,vals};}
function gridMargin(A,E){const G=1000000n,n=A.length,grid=m=>A.map((row,i)=>row.map((x,j)=>G*x-(i===j?m*E[i]:0n)));let lo=0n,hi=G;if(minors(grid(hi)).count===n)return{allGridPass:true};while(hi-lo>1n){const m=(hi+lo)/2n;if(minors(grid(m)).count===n)lo=m;else hi=m;}return{pass:String(lo),fail:String(hi)};}
const raw=rawInput(),stored=JSON.parse(fs.readFileSync('experiments/results/u74-5-2-even-t1024-m20480-rank-tightened-replay.json','utf8'));
const share=allocation(raw,stored.proposal.denominator),{A,radii,energy}=buildMatrix(raw,share),p=minors(A);
const scan=[];for(const s of [0.00000000005,0.000000001,0.00000001,0.0000001,0.000001,0.00001,0.0001,0.001,0.01,0.025,0.05,0.1,0.2,0.35,0.5,0.7,0.85,0.95]){const a=allocation(raw,stored.proposal.denominator,s),m=buildMatrix(raw,a),q=minors(m.A);scan.push({diagMass:s,positiveLeadingMinors:q.count,firstFailure:q.firstFailure,failedPivotNegative:q.failedPivot===null?null:q.failedPivot.startsWith('-'),weights:a.weights.map(String)});}
const best=scan.reduce((a,b)=>b.positiveLeadingMinors>a.positiveLeadingMinors?b:a,scan[0]);
console.log(JSON.stringify({regime:{h:'5/2',parity:'even',n:50,J:128,KEM:20,T:1024,M:20480},traceOptimum:{allocation:{denominator:share.denominator,weights:share.weights.map(String),traceModel:share.traceModel},exactReplay:{positiveLeadingMinors:p.count,firstFailure:p.firstFailure,failedPivotNegative:p.failedPivot===null?null:p.failedPivot.startsWith('-'),gridMargin:p.count===50?gridMargin(A,energy):null}},diagMassScan:{tested:scan.length,allPositive:scan.some(x=>x.positiveLeadingMinors===50),best:{diagMass:best.diagMass,positiveLeadingMinors:best.positiveLeadingMinors,firstFailure:best.firstFailure,weights:best.weights},gridMargin:null,values:scan.map(({weights,...x})=>x)},scope:'Original-coordinate finite comparison only; trace minimization/mass scan are heuristics and only exact replay certifies a pass/failure.'},null,2));

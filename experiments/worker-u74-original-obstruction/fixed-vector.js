// Exact fixed-vector test for allocation-independent failure in original
// LXXIV coordinates. The stored floating relativeDirection is used only to
// nominate a rational direction; every final form and inequality is BigInt.
const fs=require('node:fs');
const staged=require('../u74-t1024-m20480-staged.js');
const assemble=require('../u74-t1024-assemble.js');
const floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b);
const ceil=(a,b)=>-floor(-a,b);
const max=(a,b)=>a>b?a:b, min=(a,b)=>a<b?a:b;
const abs=a=>a<0n?-a:a;
const gcd=(a,b)=>b===0n?abs(a):gcd(b,a%b);
const lcm=(a,b)=>abs(a/gcd(a,b)*b);
const isqrt=n=>{if(n<0n)throw Error('sqrt negative');if(n<2n)return n;let x=1n<<BigInt(Math.ceil(n.toString(2).length/2));for(;;){const y=(x+n/x)>>1n;if(y>=x)return x;x=y;}};
const rat=(n,d=1n)=>{if(d===0n)throw Error('zero denominator');if(d<0n){n=-n;d=-d;}const g=gcd(n,d);return[n/g,d/g];};
const add=(x,y)=>rat(x[0]*y[1]+y[0]*x[1],x[1]*y[1]);
const neg=x=>[-x[0],x[1]], sub=(x,y)=>add(x,neg(y));
const mul=(x,y)=>rat(x[0]*y[0],x[1]*y[1]);
const div=(x,y)=>rat(x[0]*y[1],x[1]*y[0]);

function reconstruct(){
 const src=staged.extend(fs.readFileSync('experiments/tc01-post-log11-em.js','utf8'));
 const p='experiments/results/u74-5-2-even-t1024-m20480-';
 const trial=JSON.parse([1,2,3,4,5].map(k=>fs.readFileSync(p+'trial-part'+k+'.txt','utf8')).join(''));
 const aggregate=JSON.parse(fs.readFileSync(p+'aggregate-100-20480.json','utf8'));
 return assemble(src,trial,[aggregate]);
}
function candidateMatrix(raw,proposal){
 const r=raw.rows[0],c=r.componentIntervals,n=50,Q=BigInt(raw.scale),old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator),w=proposal.weights.map(BigInt),D=BigInt(proposal.denominator),W=w.slice(7).reduce((a,b)=>a+b,0n);
 const keys=['leading','second','third','fourth','fifth','sixth','seventh'];
 const interval=(i,j)=>{
  let lo=BigInt(c.upper[i][j][0])-BigInt(c.finite[i][j][1]);
  let hi=BigInt(c.upper[i][j][1])-BigInt(c.finite[i][j][0]);
  for(let k=0;k<7;k++){
   const [a,b]=c[keys[k]][i][j].map(BigInt);
   lo-=ceil(b*old[k]*D,w[k]*D0); hi-=floor(a*old[k]*D,w[k]*D0);
  }
  if(i===j){
   const e=BigInt(r.diagnostics[i].eighthUpper), diag=ceil(e*W,w[7+i]);
   lo-=ceil(diag*old[7]*D,w[7+i]*D0); hi-=floor(diag*old[7]*D,w[7+i]*D0);
  }
  return[lo,hi];
 };
 const A=Array.from({length:n},()=>Array(n).fill(0n)),rad=Array.from({length:n},()=>Array(n).fill(0n));
 for(let i=0;i<n;i++)for(let j=0;j<=i;j++){
  const [al,ah]=interval(i,j),[bl,bh]=interval(j,i),lo=max(al,bl),hi=min(ah,bh);
  if(lo>hi)throw Error('empty interval intersection');
  const m=(lo+hi)/2n;A[i][j]=A[j][i]=m;rad[i][j]=rad[j][i]=max(m-lo,hi-m);
 }
 const ds=r.radiusWeights.map(BigInt),radii=rad.map((row,i)=>row.reduce((s,x,j)=>s+ceil(x*ds[j],ds[i]),0n));
 for(let i=0;i<n;i++)A[i][i]-=radii[i];
 return A;
}
function failingDirection(A,k){
 // Solve B u=-b exactly in Q, where B is the positive leading k block.
 const M=Array.from({length:k},(_,i)=>Array.from({length:k+1},(_,j)=>j===k?rat(-A[i][k]):rat(A[i][j])));
 for(let j=0;j<k;j++){
  let p=j;while(p<k&&M[p][j][0]===0n)p++;
  if(p===k)throw Error('singular leading block');[M[j],M[p]]=[M[p],M[j]];
  const z=M[j][j];for(let l=j;l<=k;l++)M[j][l]=div(M[j][l],z);
  for(let i=0;i<k;i++)if(i!==j){const c=M[i][j];for(let l=j;l<=k;l++)M[i][l]=sub(M[i][l],mul(c,M[j][l]));}
 }
 const u=M.map(row=>row[k]);let L=1n;for(const x of u)L=lcm(L,x[1]);
 const v=Array(50).fill(0n);for(let i=0;i<k;i++)v[i]=u[i][0]*(L/u[i][1]);v[k]=L;
 let schur=rat(A[k][k]);for(let i=0;i<k;i++)schur=add(schur,mul(rat(A[k][i]),u[i]));
 if(schur[0]>=0n)throw Error('selected pivot not negative');
 return {v,schur};
}
function form(intervals,x,lower){let s=0n;for(let i=0;i<50;i++)for(let j=0;j<50;j++){
 const z=x[i]*x[j],a=BigInt(intervals[i][j][0]),b=BigInt(intervals[i][j][1]);s+=z*(lower?(z>=0n?a:b):(z>=0n?b:a));
 }return s;}
function audit(raw,proposal,x){
 const r=raw.rows[0],c=r.componentIntervals,old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator),keys=['leading','second','third','fourth','fifth','sixth','seventh'];
 const energyIntervals=c.upper.map((row,i)=>row.map((z,j)=>[
  String(BigInt(z[0])-BigInt(c.finite[i][j][1])),
  String(BigInt(z[1])-BigInt(c.finite[i][j][0]))
 ]));
 const E=form(energyIntervals,x,false);
 if(E<=0n)return{E:String(E),obstruction:true,reason:'nonpositive energy upper bound'};
 const rankLower=keys.map(k=>form(c[k],x,true));
 const a=rankLower.map((q,k)=>old[k]*(q>0n?q:0n));
 for(let i=0;i<50;i++)a.push(old[7]*BigInt(r.diagnostics[i].eighthUpper)*x[i]*x[i]);
 const S=10n**30n,L=a.reduce((sum,z)=>sum+isqrt(z*S*S),0n),lhs=L*L,rhs=S*S*D0*E;
 return{Eupper:String(E),rankQuadraticLower:rankLower.map(String),positiveLossTerms:a.filter(z=>z>0n).length,rootScale:String(S),allAllocationLowerNumerator:String(lhs),comparisonRightNumerator:String(rhs),strictObstruction:lhs>rhs,ratioLog10:Number((lhs===0n?-1e9:Math.log(Number(lhs.toString().slice(0,15)))+lhs.toString().length-15)-(Math.log(Number(rhs.toString().slice(0,15)))+rhs.toString().length-15)),
 direction:x.map(String),
 proof:'For each original rank outer-product term and each eighth diagonal share, the comparison loss is at least a_j/(D0 p_j), where p_j>0 are all normalized shares with sum 1. Cauchy gives sum_j a_j/p_j >= (sum_j sqrt(a_j))^2. The stored rank components are f*r*r^T with f>0; their interval quadratic lower bounds are clamped only at 0 using this PSD fact. The eighth diagonal contributions are nonnegative. The interval energy form is bounded above by Eupper. If strictObstruction is true, every positive allocation fails this fixed-direction comparison. The row-radius subtraction is nonnegative and was omitted, so it cannot weaken an obstruction.'};
}
function boundedDirectionSearch(raw,proposal){
 const base=raw.rows[0].relativeDirection,scale0=Math.max(...base.map(Math.abs)),b=base.map(v=>v/scale0);
 let seed=1847351;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 let tested=0,passes=0,best=null;
 for(const alpha of [.01,.03,.1,.25,.5,1,2])for(let t=0;t<200;t++){
  const x=b.map(v=>BigInt(Math.round((v+alpha*(2*rand()-1))*1e9))),z=audit(raw,proposal,x);tested++;if(z.strictObstruction)passes++;
  if(!best||z.ratioLog10>best.ratioLog10)best={alpha,ratioLog10:z.ratioLog10,strictObstruction:z.strictObstruction,positiveLossTerms:z.positiveLossTerms,direction:x.map(String)};
 }
 return{method:'seeded uniform perturbations of relativeDirection, normalized by max coordinate, alpha in {.01,.03,.1,.25,.5,1,2}, 200 each; integer scale 10^9',seed:1847351,tested,strictObstructions:passes,best};
}
const raw=reconstruct(),proposal=JSON.parse(fs.readFileSync('experiments/results/u74-5-2-even-t1024-m20480-rank-tightened-replay.json','utf8')).proposal;
const A=candidateMatrix(raw,proposal),witness=failingDirection(A,7),exact=audit(raw,proposal,witness.v);
const heuristic=raw.rows[0].relativeDirection.map(v=>BigInt(Math.round(v*1e12)));
const other=audit(raw,proposal,heuristic);
const search=boundedDirectionSearch(raw,proposal);
console.log(JSON.stringify({regime:{h:'5/2',parity:'even',n:50},candidateFirstFailurePivot:8,negativeSchur:witness.schur.map(String),derivedDirectionDigits:Math.max(...witness.v.map(v=>abs(v).toString().length)),candidateNegativeDirection:exact,relativeDirectionProbe:{strictObstruction:other.strictObstruction,ratioLog10:other.ratioLog10,rankQuadraticLower:other.rankQuadraticLower},search},null,2));

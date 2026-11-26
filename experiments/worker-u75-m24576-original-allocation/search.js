const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
let joined='';for(let i=1;i<=6;i++)joined+=fs.readFileSync(path.join(root,`u75-even-trial-part-${i}.txt`),'utf8');
const trial=JSON.parse(joined),patch=require(path.join(root,'results/u75-251-100-even-t1024-m24576-trial-patch.json'));trial.M=patch.M;trial.tails.forEach((t,i)=>t.C8=patch.C8[i]);
const aggregate=require(path.join(root,'results/u75-251-100-even-t1024-m24576-aggregate-104-24576.json'));
const rank=require(path.join(root,'results/u75-251-100-even-t1024-m24576-rank-tightened-replay.json'));
const source=fs.readFileSync(path.join(root,'tc01-post-log11-em.js'),'utf8');
const staged=require(path.join(root,'u75-t1024-m24576-staged.js')),assemble=require(path.join(root,'u75-t1024-m24576-assemble.js')),exact=require(path.join(root,'worker-u75-m24576-original/exact-replay-unit.js'));
const raw=assemble(staged.extend(source),trial,[aggregate]),r=raw.rows[0],c=r.componentIntervals,n=52,Q=BigInt(raw.scale),D=BigInt(rank.proposal.denominator),old=r.tailShares.map(BigInt),oldD=BigInt(r.tailShareDenominator),keys=['leading','second','third','fourth','fifth','sixth','seventh'];
const floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b),max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b;
function shares(S,rankExp=0.5,diagExp=1/3){
 const rankCosts=keys.map((k,j)=>{let tr=0n;for(let i=0;i<n;i++)tr+=BigInt(c[k][i][i][1]);return Number(old[j]*tr)});
 const diagCosts=Array.from({length:n},(_,i)=>Number(old[7]*BigInt(r.diagnostics[i].eighthUpper)));
 const rr=rankCosts.map(x=>Math.pow(x,rankExp)),rs=rr.reduce((a,b)=>a+b,0),dd=diagCosts.map(x=>Math.pow(x,diagExp)),ds=dd.reduce((a,b)=>a+b,0);
 const probs=rr.map(x=>(1-S)*x/rs).concat(dd.map(x=>S*x/ds));
 const dn=Number(D),w=probs.map(p=>BigInt(Math.floor(p*dn)));for(let i=0;i<w.length;i++)if(w[i]<1n)w[i]=1n;let delta=D-w.reduce((a,b)=>a+b,0n);
 const order=probs.map((p,i)=>({i,frac:p*dn-Math.floor(p*dn)})).sort((a,b)=>b.frac-a.frac);
 for(let k=0;delta>0n;k++,delta--)w[order[k%order.length].i]++;
 for(let k=0;delta<0n;k++){const i=order[order.length-1-(k%order.length)].i;if(w[i]>1n){w[i]--;delta++;}}
 if(w.some(x=>x<1n)||w.reduce((a,b)=>a+b,0n)!==D)throw Error('shares');return w;
}
function matrix(w){
 const W=w.slice(7).reduce((a,b)=>a+b,0n),A=Array.from({length:n},()=>Array(n).fill(0n)),rad=Array.from({length:n},()=>Array(n).fill(0n));
 const interval=(i,j)=>{let lo=BigInt(c.upper[i][j][0])-BigInt(c.finite[i][j][1]),hi=BigInt(c.upper[i][j][1])-BigInt(c.finite[i][j][0]);for(let k=0;k<7;k++){const [a,b]=c[keys[k]][i][j].map(BigInt);lo-=ceil(b*old[k]*D,w[k]*oldD);hi-=floor(a*old[k]*D,w[k]*oldD);}if(i===j){const e=BigInt(r.diagnostics[i].eighthUpper),dg=ceil(e*W,w[7+i]);lo-=ceil(dg*old[7]*D,W*oldD);hi-=floor(dg*old[7]*D,W*oldD);}return[lo,hi];};
 for(let i=0;i<n;i++)for(let j=0;j<=i;j++){const a=interval(i,j),b=interval(j,i),lo=max(a[0],b[0]),hi=min(a[1],b[1]);if(lo>hi)throw Error('interval');const m=(lo+hi)/2n;A[i][j]=A[j][i]=m;rad[i][j]=rad[j][i]=max(m-lo,hi-m);}
 const ds=r.radiusWeights.map(BigInt);for(let i=0;i<n;i++){for(let j=0;j<n;j++)A[i][i]-=ceil(rad[i][j]*ds[j],ds[i]);}
 return{A,E:c.upper.map((row,i)=>BigInt(row[i][1]))};
}
function chol(A,E,alpha=0){
 const q=Number(Q),B=A.map((row,i)=>row.map((v,j)=>Number(v)/q-(i===j?alpha*Number(E[i])/q:0))),L=Array.from({length:n},()=>Array(n).fill(0));let minPivot=Infinity;
 for(let i=0;i<n;i++){let v=B[i][i];for(let k=0;k<i;k++)v-=L[i][k]*L[i][k];if(!(v>0)||!Number.isFinite(v))return{pass:false,minPivot:v};L[i][i]=Math.sqrt(v);minPivot=Math.min(minPivot,v);for(let j=i+1;j<n;j++){let u=B[j][i];for(let k=0;k<i;k++)u-=L[j][k]*L[i][k];L[j][i]=u/L[i][i];}}
 return{pass:true,minPivot};
}
const masses=[1e-10,1e-8,1e-6,1e-4,.001,.005,.01,.02,.035,.05,.075,...Array.from({length:81},(_,i)=>0.1+i*0.01),.95];
function exactPos(A){const B=A.map(row=>row.slice());let prev=1n;for(let k=0;k<n;k++){const p=B[k][k];if(p<=0n)return k;for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){const z=p*B[i][j]-B[i][k]*B[k][j];if(z%prev!==0n)throw Error('Bareiss divisibility');B[i][j]=B[j][i]=z/prev;}prev=p;}return n;}
const storedWeights=rank.proposal.weights.map(BigInt),storedCount=exactPos(matrix(storedWeights).A),refine=process.argv.includes('--refine');
const scan=[];
if(!refine){for(const S of masses){const w=shares(S),{A,E}=matrix(w),positive=exactPos(A),base=chol(A,E,0);scan.push({family:'trace-root',eighthMass:S,rankExponent:0.5,diagonalExponent:1/3,positiveMinors:positive,approximatePass:base.pass,approximateMinPivot:base.minPivot,weights:w.map(String)});}
for(const S of [.15,.3,.45,.6,.75])for(const rankExp of [0,.25,.5,.75,1])for(const diagExp of [0,.2,1/3,.5,1]){if(rankExp===.5&&diagExp===1/3)continue;const w=shares(S,rankExp,diagExp),{A,E}=matrix(w),positive=exactPos(A),base=chol(A,E,0);scan.push({family:'exponent-grid',eighthMass:S,rankExponent:rankExp,diagonalExponent:diagExp,positiveMinors:positive,approximatePass:base.pass,approximateMinPivot:base.minPivot,weights:w.map(String)});}}
else {for(const S of [.15,.3,.45,.6,.75,.9])for(const rankExp of [.15,.2,.225,.25,.275,.3,.35])for(const diagExp of [0,.025,.05,.075]){const w=shares(S,rankExp,diagExp),{A,E}=matrix(w),positive=exactPos(A),base=chol(A,E,0);scan.push({family:'fine-exponent-grid',eighthMass:S,rankExponent:rankExp,diagonalExponent:diagExp,positiveMinors:positive,approximatePass:base.pass,approximateMinPivot:base.minPivot,weights:w.map(String)});}}
scan.sort((a,b)=>b.positiveMinors-a.positiveMinors || b.approximateMinPivot-a.approximateMinPivot);
const selected=scan.sort((a,b)=>b.positiveMinors-a.positiveMinors || b.approximateMinPivot-a.approximateMinPivot)[0],proposal={...rank.proposal,weights:selected.weights,denominator:D.toString(),factors:{...rank.proposal.factors,ratios:Array.from({length:8},()=>[BigInt(raw.scale).toString(),BigInt(raw.scale).toString()])}};
const replay=exact(raw,proposal,null);
const out={storedAllocationPositiveMinors:storedCount,heuristic:'Trace-based positive-share allocation scans plus a rank/diagonal exponent grid. Exact Bareiss leading-minor signs are computed for every candidate; Number Cholesky is diagnostic only.',scan:scan.map(({weights,...x})=>x),selectedMass:selected.eighthMass,selectedAllocation:selected.weights,exactReplay:{positiveMinors:replay.positiveMinors,failedPivotSign:replay.failedMinor===null?null:(BigInt(replay.failedMinor)<0n?'negative':'nonpositive'),marginNumerator:replay.marginNumerator,marginDenominator:replay.marginDenominator,nextGridFails:replay.nextGridFails,baselineEntries:replay.baselineEntries,baselineRadii:replay.baselineRadii},scope:'Finite grid search over the listed positive allocation families; no global optimality claim.'};
fs.writeFileSync(path.join(__dirname,refine?'refine-result.json':'result.json'),JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify(out,null,2));

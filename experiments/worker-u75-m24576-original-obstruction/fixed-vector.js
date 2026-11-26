// Exact fixed-direction all-allocation obstruction search for the U75 even M24576 original form.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const staged=require(path.join(root,'u75-t1024-m24576-staged.js'));
const assemble=require(path.join(root,'u75-t1024-m24576-assemble.js'));
const floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b),max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b,abs=a=>a<0n?-a:a;
const gcd=(a,b)=>b===0n?abs(a):gcd(b,a%b),lcm=(a,b)=>abs(a/gcd(a,b)*b);
const rat=(n,d=1n)=>{if(d===0n)throw Error('zero denominator');if(d<0n){n=-n;d=-d;}const g=gcd(n,d);return[n/g,d/g];};
const add=(x,y)=>rat(x[0]*y[1]+y[0]*x[1],x[1]*y[1]),neg=x=>[-x[0],x[1]],sub=(x,y)=>add(x,neg(y)),mul=(x,y)=>rat(x[0]*y[0],x[1]*y[1]),div=(x,y)=>rat(x[0]*y[1],x[1]*y[0]);
function reconstruct(){
 let joined='';for(let i=1;i<=6;i++)joined+=fs.readFileSync(path.join(root,`u75-even-trial-part-${i}.txt`),'utf8');
 const trial=JSON.parse(joined),patch=require(path.join(root,'results/u75-251-100-even-t1024-m24576-trial-patch.json'));trial.M=patch.M;trial.tails.forEach((t,i)=>t.C8=patch.C8[i]);
 const aggregate=require(path.join(root,'results/u75-251-100-even-t1024-m24576-aggregate-104-24576.json'));
 const source=fs.readFileSync(path.join(root,'tc01-post-log11-em.js'),'utf8');return assemble(staged.extend(source),trial,[aggregate]);
}
function candidateMatrix(raw,w,den){
 const r=raw.rows[0],c=r.componentIntervals,n=52,old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator),D=BigInt(den),W=w.slice(7).reduce((a,b)=>a+b,0n),keys=['leading','second','third','fourth','fifth','sixth','seventh'];
 const interval=(i,j)=>{let lo=BigInt(c.upper[i][j][0])-BigInt(c.finite[i][j][1]),hi=BigInt(c.upper[i][j][1])-BigInt(c.finite[i][j][0]);for(let k=0;k<7;k++){const [a,b]=c[keys[k]][i][j].map(BigInt);lo-=ceil(b*old[k]*D,w[k]*D0);hi-=floor(a*old[k]*D,w[k]*D0);}if(i===j){const e=BigInt(r.diagnostics[i].eighthUpper),diag=ceil(e*W,w[7+i]);lo-=ceil(diag*old[7]*D,W*D0);hi-=floor(diag*old[7]*D,W*D0);}return[lo,hi];};
 const A=Array.from({length:n},()=>Array(n).fill(0n)),rad=Array.from({length:n},()=>Array(n).fill(0n));for(let i=0;i<n;i++)for(let j=0;j<=i;j++){const a=interval(i,j),b=interval(j,i),lo=max(a[0],b[0]),hi=min(a[1],b[1]);if(lo>hi)throw Error('empty symmetric interval');const m=(lo+hi)/2n;A[i][j]=A[j][i]=m;rad[i][j]=rad[j][i]=max(m-lo,hi-m);}const ds=r.radiusWeights.map(BigInt);for(let i=0;i<n;i++)for(let j=0;j<n;j++)A[i][i]-=ceil(rad[i][j]*ds[j],ds[i]);return A;
}
function failingDirection(A,k){
 // Fraction-free Bareiss solve of B u=-b, with B the positive leading block.
 const M=Array.from({length:k},(_,i)=>Array.from({length:k+1},(_,j)=>j===k?-A[i][k]:A[i][j]));let prev=1n;
 for(let j=0;j<k-1;j++){const p=M[j][j];if(p===0n)throw Error('singular leading block');for(let i=j+1;i<k;i++){const mik=M[i][j];for(let l=j+1;l<=k;l++){const z=p*M[i][l]-mik*M[j][l];if(z%prev!==0n)throw Error('Bareiss division');M[i][l]=z/prev;}M[i][j]=0n;}prev=p;}
 const u=Array(k);for(let i=k-1;i>=0;i--){let z=rat(M[i][k]);for(let j=i+1;j<k;j++)z=sub(z,mul(rat(M[i][j]),u[j]));u[i]=div(z,rat(M[i][i]));}
 let L=1n;for(const x of u)L=lcm(L,x[1]);const v=Array(52).fill(0n);for(let i=0;i<k;i++)v[i]=u[i][0]*(L/u[i][1]);v[k]=L;let schur=rat(A[k][k]);for(let i=0;i<k;i++)schur=add(schur,mul(rat(A[k][i]),u[i]));if(schur[0]>=0n)throw Error('selected Schur pivot not negative');return{v,schur};
}
function form(intervals,x,lower){let s=0n;for(let i=0;i<52;i++)for(let j=0;j<52;j++){const z=x[i]*x[j],[a,b]=intervals[i][j].map(BigInt);s+=z*(lower?(z>=0n?a:b):(z>=0n?b:a));}return s;}
function audit(raw,x){
 const r=raw.rows[0],c=r.componentIntervals,old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator),keys=['leading','second','third','fourth','fifth','sixth','seventh'];
 const energy=c.upper.map((row,i)=>row.map((z,j)=>[String(BigInt(z[0])-BigInt(c.finite[i][j][1])),String(BigInt(z[1])-BigInt(c.finite[i][j][0]))]));
 const E=form(energy,x,false);if(E<=0n)return{strictObstruction:true,reason:'directional energy upper bound is nonpositive',E:String(E)};
 const rank=keys.map(k=>form(c[k],x,true)),terms=rank.map((q,k)=>old[k]*(q>0n?q:0n));for(let i=0;i<52;i++)terms.push(old[7]*BigInt(r.diagnostics[i].eighthUpper)*x[i]*x[i]);
 const S=10n**40n,L=terms.reduce((sum,a)=>sum+isqrt(a*S*S),0n),lhs=L*L,rhs=S*S*D0*E;
 return{Eupper:String(E),positiveLossTerms:terms.filter(a=>a>0n).length,rootScale:String(S),lossLowerNumerator:String(lhs),energyUpperNumerator:String(rhs),strictObstruction:lhs>rhs,ratioLog10:log10ratio(lhs,rhs),rankQuadraticLower:rank.map(String),direction:x.map(String),proof:'For normalized positive share fractions p_j with sum 1, fixed-direction diagonal/rank losses are at least a_j/(D0 p_j). Cauchy gives sum a_j/p_j >= (sum sqrt(a_j))^2. Each rank component is a positive Gram form, so a negative interval lower endpoint is safely clamped to zero; the eighth diagonal losses are nonnegative. Row-radius subtraction is nonnegative and omitted, which only raises the upper bound. A strict comparison proves all allocations fail for this vector.'};
}
function isqrt(n){if(n<0n)throw Error('negative root');if(n<2n)return n;let x=1n<<BigInt(Math.ceil(n.toString(2).length/2));for(;;){const y=(x+n/x)>>1n;if(y>=x)return x;x=y;}}
function log10ratio(a,b){if(a===0n)return-Infinity;const f=x=>{const s=x.toString();return Math.log10(Number(s.slice(0,15)))+s.length-15;};return f(a)-f(b);}
function normalize(v){const M=v.reduce((a,b)=>a>abs(b)?a:abs(b),0n);return v.map(x=>BigInt(Math.round(Number(x*1000000000n/M))));}
function search(raw,base){let seed=20261126;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};let best=null,obstructions=0,tested=0;for(const alpha of [.01,.03,.1,.25,.5,1,2])for(let t=0;t<100;t++){const x=base.map(v=>BigInt(Math.round((Number(v)/1e9+alpha*(2*rand()-1))*1e9))),z=audit(raw,x);tested++;if(z.strictObstruction)obstructions++;if(!best||z.ratioLog10>best.ratioLog10)best={alpha,strictObstruction:z.strictObstruction,ratioLog10:z.ratioLog10,positiveLossTerms:z.positiveLossTerms,direction:x.map(String)};}return{method:'Seeded uniform perturbations of exact failing-pivot direction normalized to max coordinate 10^9; alpha grid {.01,.03,.1,.25,.5,1,2}; 100 directions each.',seed:20261126,tested,strictObstructions:obstructions,best};}
const raw=reconstruct(),rank=require(path.join(root,'results/u75-251-100-even-t1024-m24576-rank-tightened-replay.json'));
const alloc=require(path.join(root,'worker-u75-m24576-original-allocation/result.json'));
const w=alloc.selectedAllocation.map(BigInt),D=BigInt(rank.proposal.denominator),A=candidateMatrix(raw,w,D),base=failingDirection(A,50),primary=audit(raw,base.v),relative=raw.rows[0].relativeDirection.map(v=>BigInt(Math.round(v*1e12))),relativeAudit=audit(raw,relative),random=search(raw,normalize(base.v));
const out={regime:{h:'251/100',parity:'even',n:52,J:128,KEM:20,T:1024,M:24576},selectedAllocation:{source:'U75 original allocation scan result.json',denominator:String(D),eighthMass:alloc.selectedMass,rankExponent:alloc.scan[0].rankExponent,diagonalExponent:alloc.scan[0].diagonalExponent},candidatePivotCount:50,negativeSchur:base.schur.map(String),pivotDirectionAudit:primary,relativeDirectionAudit:{strictObstruction:relativeAudit.strictObstruction,ratioLog10:relativeAudit.ratioLog10,positiveLossTerms:relativeAudit.positiveLossTerms},randomDirectionSearch:random,scope:'Exact fixed-direction Cauchy tests for this finite original-coordinate comparison only; no claim over untested directions or the underlying Weil form.'};
fs.writeFileSync(path.join(__dirname,'result.json'),JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({candidatePivotCount:out.candidatePivotCount,negativeSchur:out.negativeSchur,directionObstruction:primary.strictObstruction,ratioLog10:primary.ratioLog10,positiveLossTerms:primary.positiveLossTerms,relativeObstruction:out.relativeDirectionAudit.strictObstruction,randomDirectionSearch:random},null,2));

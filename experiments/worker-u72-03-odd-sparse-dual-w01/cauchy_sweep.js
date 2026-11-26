const fs=require('node:fs'),p='experiments/results/u72-62-25-odd-sparse-dual-w01/',
 raw=JSON.parse(fs.readFileSync(p+'raw-t832.json')),z=JSON.parse(fs.readFileSync(p+'transform.json')),
 allocation=JSON.parse(fs.readFileSync(p+'base-allocation.json')),r=raw.rows[0],c=z.componentIntervals,
 Q=BigInt(raw.scale),D0=BigInt(r.tailShareDenominator),old=r.tailShares.map(BigInt),
 rat=allocation.factors.ratios.map(v=>BigInt(v[1])),keys=['leading','second','third','fourth','fifth','sixth','seventh'];
function sqrt(a){if(a<=0n)return 0n;let x=1n<<BigInt(Math.ceil(a.toString(2).length/2));for(;;){const y=(x+a/x)/2n;if(y>=x)return x;x=y;}}
function quad(A,support,side){let sum=0n;for(const [i,xi] of support)for(const [j,xj] of support){const q=xi*xj,[lo,hi]=A[i][j].map(BigInt);sum+=q*(side==='upper'?(q>=0n?hi:lo):(q>=0n?lo:hi));}return sum;}
function evalDirection(support){
 const E=quad(c.upper,support,'upper'),F=quad(c.finite,support,'lower');
 const rank=keys.map((k,i)=>quad(c[k],support,'lower')*old[i]*rat[i]);
 const eighth=support.reduce((a,[i,x])=>a+BigInt(z.eighth[i])*x*x*old[7]*rat[7],0n), costs=rank.concat(eighth);
 if(E<=0n||F<=0n||costs.some(x=>x<=0n))return null;
 // For positive allocation shares with sum one, Cauchy gives sum(cost_i/p_i) >= (sum sqrt(cost_i))^2.
 const S=costs.reduce((a,b)=>a+sqrt(b),0n),N=F*D0*Q+S*S,den=E*D0*Q;
 return {ratioFloorMillion:N*1000000n/den,strictObstruction:N>den,energy:String(E),finite:String(F),rank:rank.map(String),eighth:String(eighth)};
}
let best=null,positive=0,checked=0,strict=[];const dirs=[];
for(let i=0;i<47;i++)dirs.push([[i,1n]]);
for(let i=0;i<47;i++)for(let j=i+1;j<47;j++)for(const s of [-1n,1n])dirs.push([[i,1n],[j,s]]);
for(const d of dirs){checked++;const v=evalDirection(d);if(!v)continue;positive++;const row={support:d.map(([i,x])=>[i,String(x)]),...v};if(!best||v.ratioFloorMillion>best.ratioFloorMillion)best=row;if(v.strictObstruction)strict.push({support:row.support,ratioFloorMillion:String(v.ratioFloorMillion)});}
const out={basis:'U72 odd sparse correlation-selected basis, 12 modified rows',tested:'all 47 coordinate and 2,162 signed two-coordinate directions',checkedDirections:checked,positiveConservativeDirections:positive,best:best&&{support:best.support,ratioFloorMillion:String(best.ratioFloorMillion),strictObstruction:best.strictObstruction},strictObstructionFound:strict.length>0,strictObstructionExamples:strict.slice(0,8),formula:'For fixed direction x, lower-bound q(x) over positive simplex shares by F(x)D0Q + (sum sqrt(R_i(x) old_i ratio_i))^2; compare to E_upper(x)D0Q. Every calculation uses integer interval endpoints and floor square roots.',scope:'A strict ratio above 1 proves failure for every positive allocation only along that tested direction and this fixed basis. No larger-support/global claim.'};
fs.writeFileSync(p+'cauchy-sweep.json',JSON.stringify(out,null,2));console.log(JSON.stringify(out));

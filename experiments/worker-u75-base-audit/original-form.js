// Rebuild Campaign LXXIV h=5/2 inputs, then independently replay the
// untransformed-coordinate interval comparison with the persisted allocation.
const fs = require('node:fs');
const staged = require('../u74-t1024-m20480-staged.js');
const assemble = require('../u74-t1024-assemble.js');
const source = staged.extend(fs.readFileSync('experiments/tc01-post-log11-em.js', 'utf8'));
const keys = ['leading','second','third','fourth','fifth','sixth','seventh'];
const floor = (a,b) => a >= 0n ? a/b : -((-a+b-1n)/b);
const ceil = (a,b) => -floor(-a,b);
const max = (a,b) => a > b ? a : b;
const min = (a,b) => a < b ? a : b;
const assert = (ok, why) => { if (!ok) throw Error(why); };

function positiveMinors(input) {
  const B = input.map(row => row.slice());
  let prev = 1n;
  const pivots = [];
  for (let k=0; k<B.length; ++k) {
    const p = B[k][k];
    if (p <= 0n) return {count:k, firstFailure:k+1, pivot:String(p), pivots};
    pivots.push(String(p));
    for (let i=k+1; i<B.length; ++i) for (let j=i; j<B.length; ++j) {
      const numerator = p*B[i][j] - B[i][k]*B[k][j];
      assert(numerator % prev === 0n, 'non-exact Bareiss division');
      B[i][j] = B[j][i] = numerator/prev;
    }
    prev = p;
  }
  return {count:B.length, firstFailure:null, pivot:null, pivots};
}

function construct(raw, storedReplay) {
  const r = raw.rows[0], rp = storedReplay.replay, proposal = storedReplay.proposal;
  const n = r.ks.length, Q = BigInt(raw.scale), old = r.tailShares.map(BigInt), D0 = BigInt(r.tailShareDenominator);
  const shares = proposal.weights.map(BigInt), D = BigInt(proposal.denominator), W = shares.slice(7).reduce((a,b)=>a+b,0n);
  // The persisted direction factors use transformed coordinates. For the
  // original-coordinate replay, set each component multiplier to exactly 1.
  const ratios = Array(8).fill(Q);
  assert(n===50 && r.h==='5/2' && r.M===20480 && r.T===1024 && r.J===128 && r.KEM===20,'regime');
  assert(shares.length===n+7 && shares.every(x=>x>0n) && shares.reduce((a,b)=>a+b,0n)===D,'allocation');
  assert(ratios.length===8,'factor ratios');
  const E = r.componentIntervals.upper.map((row,i)=>BigInt(row[i][1]));
  const ds = r.radiusWeights.map(BigInt);

  function matrix(refined, margin=null) {
    const ss = refined ? shares.slice(0,7).concat(W) : old;
    const den = refined ? D : D0;
    const interval = (i,j) => {
      const upper = r.componentIntervals.upper[i][j].map(BigInt);
      const finite = r.componentIntervals.finite[i][j].map(BigInt);
      let lo = upper[0]-finite[1], hi = upper[1]-finite[0];
      for (let k=0;k<7;k++) {
        let [a,b] = r.componentIntervals[keys[k]][i][j].map(BigInt);
        if (refined) { a=floor(a*ratios[k],Q); b=ceil(b*ratios[k],Q); }
        lo -= ceil(b*old[k]*den,ss[k]*D0);
        hi -= floor(a*old[k]*den,ss[k]*D0);
      }
      if (i===j) {
        // The archived eighth bound is for the original, untransformed row.
        const e = BigInt(r.diagnostics[i].eighthUpper);
        const v = refined ? ceil(e*W,shares[7+i]) : BigInt(r.componentIntervals.eighth[i]);
        lo -= ceil(v*old[7]*den,ss[7]*D0);
        hi -= floor(v*old[7]*den,ss[7]*D0);
      }
      return [lo,hi];
    };
    const A=Array.from({length:n},()=>Array(n).fill(0n));
    const rad=Array.from({length:n},()=>Array(n).fill(0n));
    for(let i=0;i<n;i++) for(let j=0;j<=i;j++) {
      const [al,ah]=interval(i,j), [bl,bh]=interval(j,i);
      const lo=max(al,bl), hi=min(ah,bh);
      assert(lo<=hi,`empty symmetric interval ${i},${j}`);
      const m=(lo+hi)/2n;
      A[i][j]=A[j][i]=m;
      rad[i][j]=rad[j][i]=max(m-lo,hi-m);
    }
    const radii=rad.map((row,i)=>row.reduce((s,x,j)=>s+ceil(x*ds[j],ds[i]),0n));
    for(let i=0;i<n;i++) {
      A[i][i]-=radii[i];
    }
    if (margin!==null) for(let i=0;i<n;i++) for(let j=0;j<n;j++) A[i][j]*=1000000n;
    if (margin!==null) for(let i=0;i<n;i++) A[i][i]-=margin*E[i];
    return {A,radii};
  }
  const original=matrix(true,0n), origSPD=positiveMinors(original.A);
  const storedBase=matrix(false), storedSPD=positiveMinors(storedBase.A);
  // The raw untransformed baseline must reconstruct byte-for-byte at the
  // integer matrix / radii layer before interpreting candidate margins.
  assert(storedBase.A.every((row,i)=>row.every((x,j)=>String(x)===r.lowerInteger[i][j])),'baseline integer matrix mismatch');
  assert(storedBase.radii.every((x,i)=>String(x)===r.diagnostics[i].matrixRadius),'baseline radius mismatch');
  function marginSearch() {
    if(origSPD.count!==n) return null;
    let lo=0n,hi=1000000n;
    assert(positiveMinors(matrix(true,hi).A).count<n,'expected grid upper bound to fail');
    while(hi-lo>1n){const m=(lo+hi)/2n;if(positiveMinors(matrix(true,m).A).count===n)lo=m;else hi=m;}
    return {pass:String(lo),fail:String(hi)};
  }
  return {
    parity:r.odd?'odd':'even', h:r.h, n, M:r.M,T:r.T,
    independentConstruction:'untransformed componentIntervals; no row congruence or transformed eighth bounds',
    baselineReconstruction:{matrixEntries:n*n,radii:n,matchesStored:true,positiveLeadingMinors:storedSPD.count,firstFailure:storedSPD.firstFailure,failedPivotNegative:storedSPD.pivot===null?null:storedSPD.pivot.startsWith('-')},
    proposalOriginalCoordinates:{positiveLeadingMinors:origSPD.count,firstFailure:origSPD.firstFailure,failedPivotNegative:origSPD.pivot===null?null:origSPD.pivot.startsWith('-'),marginGrid:marginSearch()},
    transformedReplay:{positiveLeadingMinors:rp.positiveMinors,marginNumerator:rp.marginNumerator,marginDenominator:rp.marginDenominator},
    interpretation:'Finite comparison only. A failure here would show the proposal needs its row transform for this certificate; it would not refute the underlying analytic inequality or imply an operator consequence.'
  };
}

function run(odd) {
  const tag=odd?'odd':'even';
  const base=`experiments/results/u74-5-2-${tag}-t1024-m20480-`;
  const stored=JSON.parse([1,2,3,4,5].map(k=>fs.readFileSync(`${base}trial-part${k}.txt`,'utf8')).join(''));
  const chunk=JSON.parse(fs.readFileSync(`${base}aggregate-${odd?'101-20479':'100-20480'}.json`,'utf8'));
  const raw=assemble(source,stored,[chunk]);
  const cert=JSON.parse(fs.readFileSync(`${base}rank-tightened-replay.json`,'utf8'));
  return construct(raw,cert);
}
if(require.main===module) console.log(JSON.stringify([run(false),run(true)],null,2));

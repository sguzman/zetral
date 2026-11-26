// U73-02: exact weighted component half-width attribution.
function attribute(raw,z,proposal){
 const r=raw.rows[0],n=r.ks.length,Q=BigInt(raw.scale),D=BigInt(proposal.denominator),D0=BigInt(r.tailShareDenominator),w=proposal.weights.map(BigInt),old=r.tailShares.map(BigInt),rat=proposal.factors.ratios.map(v=>BigInt(v[1])),ds=z.radiusWeights.map(BigInt),keys=["upper","finite","leading","second","third","fourth","fifth","sixth","seventh"],E=z.componentIntervals.upper.map((r,i)=>BigInt(r[i][1])),floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b),S=10n**12n;
 const widths=Object.fromEntries(keys.map((k,h)=>[k,z.componentIntervals[k].map((row,i)=>{let sum=0n;for(let j=0;j<n;j++){let [a,b]=row[j].map(BigInt);if(h>=2){let k=h-2;a=floor(a*rat[k],Q);b=ceil(b*rat[k],Q);a=floor(a*old[k]*D,w[k]*D0);b=ceil(b*old[k]*D,w[k]*D0)}sum+=ceil((b-a)*ds[j],2n*ds[i]);}return String(ceil(sum*S,E[i]))})]));
 return {scope:"Per-component weighted half-width upper estimates before symmetric intersection, rounded upward; not an exact additive decomposition of the intersected replay radius.",scale:String(S),widths};
}
if(typeof module!=="undefined")module.exports=attribute;

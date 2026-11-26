function obstruction(raw,fac,z,x){
 const r=raw.rows[0],c=z.componentIntervals,Q=BigInt(raw.scale),D0=BigInt(r.tailShareDenominator),old=r.tailShares.map(BigInt),rat=fac.ratios.map(v=>BigInt(v[1]));
 if(x.length!==r.ks.length)throw Error('direction length');x=x.map(BigInt);
 const quad=(A,side)=>{let s=0n;for(let i=0;i<x.length;i++)for(let j=0;j<x.length;j++){const q=x[i]*x[j],[lo,hi]=A[i][j].map(BigInt);s+=q*(side==='upper'?(q>=0n?hi:lo):(q>=0n?lo:hi));}return s};
 const keys=['leading','second','third','fourth','fifth','sixth','seventh'],E=quad(c.upper,'upper'),F=quad(c.finite,'lower'),rank=keys.map((k,i)=>quad(c[k],'lower')*old[i]*rat[i]),e=z.eighth.reduce((s,v,i)=>s+BigInt(v)*x[i]**2n*old[7]*rat[7],0n);
 const sqrt=a=>{if(a<=0n)return 0n;let q=1n<<BigInt(Math.ceil(a.toString(2).length/2));for(;;){const w=(q+a/q)/2n;if(w>=q)return q;q=w;}};
 const costs=rank.concat(e);if(E<=0n||F<=0n||costs.some(v=>v<=0n))return {strictObstruction:false,reason:'nonpositive conservative quadratic term',energyUpper:String(E),finiteLower:String(F),rankNumerators:rank.map(String),eighthNumerator:String(e)};
 const S=costs.reduce((a,b)=>a+sqrt(b),0n),N=F*D0*Q+S*S,den=E*D0*Q;
 return {integerDirection:x.map(String),energyUpper:String(E),finiteLower:String(F),rankNumerators:rank.map(String),eighthNumerator:String(e),commonDenominator:String(D0*Q),sumFloorRoots:String(S),lossLowerNumerator:String(N),energyUpperNumerator:String(den),strictObstruction:N>den,ratioFloorMillion:String(N*1000000n/den)};
}
if(typeof module!=='undefined')module.exports=obstruction;

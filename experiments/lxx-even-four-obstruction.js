// LXX02 fixed four-direction comparison: exact all-allocation obstruction.
// Assumes the seven inherited rank majorants are positive semidefinite.
// Does not assert failure of the underlying arithmetic form.
function obstruction(raw,fac,z){
 const x=["-1000000000000000000","217570950358402","19313879543858196","216517224694437","364061727000","-736370699","3580380","18172","-200","-2",...Array(35).fill("0")].map(BigInt),c=z.componentIntervals,r=raw.rows[0],Q=BigInt(raw.scale),D0=BigInt(r.tailShareDenominator),old=r.tailShares.map(BigInt),rat=fac.ratios.map(v=>BigInt(v[1]));
 if(x.length!==r.ks.length||z.determinant!=="100000000000000"||z.originalEighthMatches!==45||z.unchangedEighthMatches!==42)throw Error("regime");
 const quad=(A,upper)=>{let s=0n;for(let i=0;i<x.length;i++)for(let j=0;j<x.length;j++){let q=x[i]*x[j];s+=q*BigInt(A[i][j][upper===(q>=0n)?1:0])}return s};
 const keys=["leading","second","third","fourth","fifth","sixth","seventh"],E=quad(c.upper,true),F=quad(c.finite,false),rank=keys.map((k,i)=>quad(c[k],false)*old[i]*rat[i]),e=z.eighth.map((v,i)=>BigInt(v)*x[i]**2n*old[7]*rat[7]);
 const sqrt=a=>{if(a<=0n)return 0n;let x=1n<<BigInt(Math.ceil(a.toString(2).length/2));for(;;){const y=(x+a/x)/2n;if(y>=x){if(x*x>a||(x+1n)**2n<=a)throw Error("sqrt");return x}x=y}};
 // Cauchy: sum_i cost_i/p_i >= (sum_i sqrt(cost_i))^2, p_i>0, sum p_i=1.
 // Lower bound negative rank intervals by zero using PSD; floor integer roots outward.
 const S=rank.concat(e).reduce((a,b)=>a+sqrt(b),0n),N=F*D0*Q+S*S,den=E*D0*Q;
 if(E<=0n||F<=0n||N<=den)throw Error("no obstruction");
 return {integerDirection:x.map(String),energyUpper:String(E),finiteLower:String(F),rankNumerators:rank.map(String),eighthNumerators:e.map(String),commonDenominator:String(D0*Q),sumFloorRoots:String(S),lossLowerNumerator:String(N),energyUpperNumerator:String(den),strictObstruction:N>den,ratioFloorMillion:String(N*1000000n/den),finiteRatioFloorMillion:String(F*1000000n/E)};
}
if(typeof module!=="undefined")module.exports=obstruction;

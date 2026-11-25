// Exact outward stored-interval reallocation and weighted row-radius deduction.
// node experiments/atm03-scaled-radius-reweight.js experiments/results/atm03-23-10-even.json
function compare(data){
 const r=data.rows[0],n=r.ks.length,c=r.componentIntervals,Q=BigInt(data.scale),D=10000n;
 if(r.h!=="23/10"||r.odd||n!==32||Q!==10n**54n)throw Error("input");
 const keys=["leading","second","third","fourth","fifth","sixth","seventh"];
 const old=r.tailShares.map(BigInt),od=BigInt(r.tailShareDenominator);
 const floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b),max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b;
 function sqrt(a){if(a<1n)throw Error("nonpositive scale");let y=1n<<BigInt(Math.ceil(a.toString(2).length/2));for(;;){let z=(y+a/y)/2n;if(z>=y)return y;y=z}}
 const energy=c.upper.map((a,i)=>BigInt(a[i][1]));
 const ds=energy.map(e=>10n**60n/sqrt(e));
 function construct(shares,scaled){
  if(shares.length!==8||shares.some(x=>x<=0n)||shares.reduce((a,b)=>a+b,0n)!==D)throw Error("shares");
  const mat=c.upper.map((a,i)=>a.map((b,j)=>{
   let l=BigInt(b[0])-BigInt(c.finite[i][j][1]),u=BigInt(b[1])-BigInt(c.finite[i][j][0]);
   for(let k=0;k<7;k++){
    const x=c[keys[k]][i][j],num=old[k]*D,den=shares[k]*od;
    l-=ceil(BigInt(x[1])*num,den);u-=floor(BigInt(x[0])*num,den);
   }
   if(i===j){const t=ceil(BigInt(c.eighth[i])*old[7]*D,shares[7]*od);l-=t;u-=t}
   return [l,u];
  }));
  const mid=mat.map((a,i)=>a.map((b,j)=>{const l=max(b[0],mat[j][i][0]),u=min(b[1],mat[j][i][1]);if(l>u)throw Error("symmetry");return (l+u)/2n}));
  const rad=mat.map((a,i)=>a.map((b,j)=>max(mid[i][j]-max(b[0],mat[j][i][0]),min(b[1],mat[j][i][1])-mid[i][j])));
  const radii=rad.map((a,i)=>a.reduce((s,v,j)=>s+(scaled?ceil(v*ds[j],ds[i]):v),0n));
  return {mid,radii,A:mid.map((a,i)=>a.map((x,j)=>x-(i===j?radii[i]:0n)))};
 }
 function pd(A){const B=A.map(a=>a.slice());let prev=1n;const minors=[];for(let k=0;k<n;k++){const p=B[k][k];minors.push(String(p));if(p<=0n)return {pass:k,minors};for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){let z=p*B[i][j]-B[i][k]*B[k][j];if(z%prev)throw Error("Bareiss");B[i][j]=B[j][i]=z/prev;}prev=p;}return {pass:n,minors}}
 const baseline=construct(old,false);if(!baseline.A.every((a,i)=>a.every((v,j)=>v===BigInt(r.lowerInteger[i][j]))))throw Error("baseline mismatch");
 const scaled=construct(old,true),baseMid=pd(baseline.mid),baseScaled=pd(scaled.A);
 // Floating normalized LDL ranks candidates only; exact Bareiss adjudicates selected matrices.
 function score(A){const B=A.map((row,i)=>row.map((x,j)=>Number(x)/Math.sqrt(Number(energy[i])*Number(energy[j]))));let low=Infinity;for(let k=0;k<n;k++){const p=B[k][k];low=Math.min(low,p);if(p<=0)return {count:k,score:p};for(let i=k+1;i<n;i++)for(let j=i;j<n;j++)B[i][j]=B[j][i]=B[i][j]-B[i][k]*B[j][k]/p;}return {count:n,score:low}}
 const candidates=new Map(),put=a=>{if(a.every(x=>x>0n)&&a.reduce((s,x)=>s+x,0n)===D)candidates.set(a.join(","),a)};
 put(old);for(let p=8500n;p<=9900n;p+=100n)for(const frac of [65n,75n,85n,95n])for(const tail of [1n,3n,8n]){const rest=D-p-5n*tail,b=rest*frac/100n;put([p,b,rest-b,tail,tail,tail,tail,tail]);}
 const ranked=[...candidates.values()].map(shares=>{const z=construct(shares,true);return {shares,...score(z.A),midScore:score(z.mid)}}).sort((a,b)=>b.count-a.count||b.score-a.score);
 const exact=ranked.slice(0,12).map(({shares,count,score})=>{const z=construct(shares,true),p=pd(z.A),m=pd(z.mid);return {shares:shares.map(String),heuristicCount:count,heuristicScore:score,pass:p.pass,midPass:m.pass,firstMinor:p.minors[0],firstRadius:String(z.radii[0]),...(p.pass===n?{matrix:z.A.map(a=>a.map(String)),minors:p.minors}: {})}});
 return {h:r.h,n,baselineMidPass:baseMid.pass,scaledBaselinePass:baseScaled.pass,oldRadius:String(baseline.radii[0]),scaledRadius:String(scaled.radii[0]),candidates:candidates.size,exact,scaleWeights:ds.map(String),scope:"stored component enclosures, exact positive rational rescaling and outward weighted radius; floating scores select candidates only"};
}
if(typeof module!=="undefined")module.exports=compare;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module)console.log(JSON.stringify(compare(JSON.parse(require("node:fs").readFileSync(process.argv[2],"utf8"))),null,2));

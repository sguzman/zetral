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
const shares=[9400n,476n,84n,8n,8n,8n,8n,8n],z=construct(shares,true);const zero=z.A.map(row=>row.slice());zero[0][0]+=z.radii[0];const pass0=pd(zero);let lo=0n,hi=z.radii[0];if(pass0.pass===n){while(hi-lo>1n){const m=(lo+hi)/2n,B=zero.map(row=>row.slice());B[0][0]-=m;if(pd(B).pass===n)lo=m;else hi=m;}}return {shares:shares.map(String),fullPass:pd(z.A).pass,zeroFirstRadiusPass:pass0.pass,firstRadius:String(z.radii[0]),maxTestedSafeFirstRadius:pass0.pass===n?String(lo):null,firstEnergyUpper:String(energy[0]),otherRadiusRetained:true,scope:"counterfactual diagnostic, not a certificate"};
}
if(typeof module!=="undefined")module.exports=compare;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module)console.log(JSON.stringify(compare(JSON.parse(require("node:fs").readFileSync(process.argv[2],"utf8"))),null,2));

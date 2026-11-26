// LXIX TC02: exact two-coordinate obstruction to the inherited diagonal eighth allocation.
// Run from repository root: node experiments/tc02-t832-allocation-obstruction.js
// This is a comparison-method obstruction, not a statement about the underlying operator.
function obstruction(raw,f){
 const assert=(v,m)=>{if(!v)throw Error(m)},r=raw.rows[0],c=r.componentIntervals,Q=BigInt(raw.scale),D=BigInt(r.tailShareDenominator),old=r.tailShares.map(BigInt),rat=f.ratios.map(a=>BigInt(a[1])),keys=["leading","second","third","fourth","fifth","sixth","seventh"],x=[390867n,-100000n];
 assert(r.h==="49/20"&&!r.odd&&r.J===128&&r.KEM===20&&r.M===12288&&r.T===832&&r.ks.length===44&&r.witnessWindow==="58/5","raw regime");
 assert(f.h===r.h&&f.odd===r.odd&&f.M===r.M&&f.primeNormUpper===r.primeNormUpper&&BigInt(f.scale)===Q&&rat.length===8&&rat.every(a=>a>0n&&a<=Q),"factor regime");
 assert(old.length===8&&old.every(a=>a>0n)&&old.reduce((a,b)=>a+b,0n)===D,"old shares");
 function form(m){let lo=0n,hi=0n;for(let i=0;i<2;i++)for(let j=0;j<2;j++){let [l,h]=m[i][j].map(BigInt),[ll,hh]=m[j][i].map(BigInt);l=l>ll?l:ll;h=h<hh?h:hh;assert(l<=h,"symmetric intersection");const v=x[i]*x[j];lo+=v*(v>=0n?l:h);hi+=v*(v>=0n?h:l)}return[lo,hi]}
 const u=form(c.upper),finite=form(c.finite),rank=keys.map(k=>form(c[k])[0]);
 assert(u[0]>0n&&finite[0]>=0n&&rank.every(a=>a>=0n),"direction signs");
 const eighth=x.map((v,i)=>v*v*BigInt(r.diagnostics[i].eighthUpper)*old[7]*rat[7]/(D*Q));
 const loss=eighth[0]+eighth[1],gap=loss-u[1];assert(gap>0n,"strict obstruction");
 return {h:r.h,T:r.T,direction:x.map(String),upper:u.map(String),finite:finite.map(String),rankLower:rank.map(String),eighthLower:eighth.map(String),eighthSum:String(loss),gap:String(gap),scope:"All positive joint shares in the inherited fixed diagonal eighth comparison; not a lower bound on physical tail loss."};
}
if(typeof module!=='undefined')module.exports=obstruction;
if(typeof require!=='undefined'&&require.main===module){const fs=require('node:fs'),p='experiments/results/tc02-49-20-even-m12288-t832-';const s=Array.from({length:6},(_,i)=>fs.readFileSync(p+'raw-part'+(i+1)+'.txt','utf8')).join('');if(s.length!==3204173)throw Error('raw length');console.log(JSON.stringify(obstruction(JSON.parse(s),JSON.parse(fs.readFileSync(p+'constant-factors.json','utf8'))),null,2));}

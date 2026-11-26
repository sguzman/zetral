// LXIX TC02: exact rational congruence, fresh eighth tail coefficient, exact replay.
// Run from repository root: node experiments/tc02-t832-transformed-certificate.js
function certificate(raw, f, src){
 const assert=(x,m)=>{if(!x)throw Error(m)},r=raw.rows[0],n=r.ks.length,keys=["leading","second","third","fourth","fifth","sixth","seventh"],Q=BigInt(raw.scale),old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator),rat=f.ratios.map(z=>BigInt(z[1]));
 assert(raw.rows.length===1&&Q===10n**66n&&r.h==="49/20"&&r.odd===false&&r.J===128&&r.KEM===20&&r.M===12288&&r.T===832&&n===44&&r.witnessWindow==="58/5"&&r.eightShift===true,"raw regime");
 assert(f.h===r.h&&f.odd===r.odd&&f.M===r.M&&f.primeNormUpper===r.primeNormUpper&&BigInt(f.scale)===Q&&rat.length===8&&rat.every(x=>x>0n&&x<Q),"factor regime");
 assert(old.length===8&&old.every(x=>x>0n)&&old.reduce((a,b)=>a+b,0n)===D0,"old shares");
 const mat=fn=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>fn(i,j))), B=Array.from({length:n},(_,i)=>i===1?[[0,-390867n],[1,100000n]]:[[i,1n]]);
 const full=mat((i,j)=>B[i].find(z=>z[0]===j)?.[1]??0n);
 // Determinant of this integer row transform is exactly 100000, hence invertible.
 const anchor=" const A=ks.map",at=src.indexOf(anchor);
 assert(at>0&&src.slice(0,at).split("length:M+2").length===3,"source anchors");
 const pre=src.slice(0,at).replaceAll("length:M+2","length:T+2");
 const body=`
 const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(BigInt(3*(2*lowCount)**3)),square(square(pi))))):ZERO;
 const g=n=>sub(sub(weight(n),primeBound),poleLoss);
 const ts=stored.ts,all=ks.concat(ts),Kmax=Math.max(...all);
 if(ks.join(',')!==stored.ks.join(',')||ts.some((k,i)=>k!==ks[ks.length-1]+2*(i+1))||Kmax!==T)throw Error('support');
 const m=R(BigInt(M+1)),gm=g(M+1),den=sub(ONE,square(div(R(BigInt(Kmax)),m)));
 const ak=div(mul(mul(TWO,sqrt2),h),square(pi)),p=psum,eh=add(ONE,E_h);
 const CL=add(add(div(sqrt2,TWO),p),div(mul(ak,eh),m));
 const delta=div(square(h),mul(R(4n),square(pi)));
 const polecoef=div(mul(mul(R(BigInt(2*eta)),sqrt2),mul(odd?neg(ch):sh,h)),square(pi));
 const dj=all.map(k=>add(mul(div(mul(TWO,sqrt2),h),mul(R(BigInt(k*k)),F[k])),shifts.reduce((a,z)=>add(a,mul(z.p,mul(R(BigInt(k)),z.sn[k]))),ZERO)));
 const coeff=stored.basis.map((row,i)=>row.map(BigInt).concat(stored.trial[i].map(v=>-BigInt(v))));
 const source=transform.map(row=>all.map((_,j)=>row.reduce((a,b,i)=>a+b*coeff[i][j],0n)));
 const tails=source.map(row=>{
  let r8=ZERO,rd=ZERO,pc=ZERO;
  for(let j=0;j<all.length;j++){
   const k=all[j],raw=[row[j],row[j]],k2=R(BigInt(k*k)),k4=square(k2),k6=mul(k2,k4),k8=square(k4);
   const a=mul(norm(k),raw),aa=[0n,absup(a)],ad=mul(a,dj[j]);
   r8=add(r8,mul(aa,k8));rd=add(rd,mul([0n,absup(ad)],k6));pc=add(pc,mul(raw,pole(k)));
  }
  const ph=mul(polecoef,pc),C8=add(div(add(mul(div(CL,m),r8),rd),den),mul(mul(square(delta),delta),[0n,absup(ph)]));
  const mm15=R(BigInt(M-1)**15n), factor=R(BigInt(stored.tailShareDenominator),2n*BigInt(stored.tailShares[7])),c=[C8[1]+1n,C8[1]+1n];
  return {C8:String(C8[1]),eighthUpper:String(div(mul(factor,square(c)),mul(mul(R(15n),mm15),gm))[1])};
 });
 return {tails,gm:gm.map(String),CL:CL.map(String)};
 }
 }
 }return primePowerCertificate;`;
 const calc=transform=>new Function("stored","transform",pre+body)(r,transform)([false],{hn:49n,hd:20n,J:128,M:12288,T:832,lowCount:44,KEM:20});
 const original=calc(mat((i,j)=>i===j?1n:0n)),updated=calc(full);
 assert(original.tails.every((z,i)=>z.C8===r.tails[i].C8&&z.eighthUpper===r.diagnostics[i].eighthUpper),"original eighth reproduction");
 assert(updated.tails.every((z,i)=>i===1||z.C8===original.tails[i].C8&&z.eighthUpper===original.tails[i].eighthUpper),"untouched eighth reproduction");
 assert(updated.CL.join(",")===f.CL.join(",")&&original.CL.join(",")===f.CL.join(","),"CL reproduction");
 const c={};for(const k of ["upper","finite",...keys])c[k]=mat((i,j)=>{let lo=0n,hi=0n;for(const [u,x] of B[i])for(const [v,y] of B[j]){const z=x*y,[a,b]=r.componentIntervals[k][u][v].map(BigInt);lo+=z*(z>=0n?a:b);hi+=z*(z>=0n?b:a)}return[lo,hi]});
 const e=updated.tails.map(z=>BigInt(z.eighthUpper));
 const floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b),max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b;
 function isqrt(x){if(x<2n)return x;let a=1n<<BigInt(Math.ceil(x.toString(2).length/2));for(;;){let b=(a+x/a)/2n;if(b>=a)return a;a=b}}
 assert(c.upper.every((row,i)=>row[i][0]>0n),"positive energy");
 const ds=c.upper.map((row,i)=>10n**80n/isqrt(row[i][1]));
 const D=1000000000000n,ww=[425566646320n,58819279102n,1516622533n,80569907n,1251818n,55309n,1359n,778743876n,513233530710n,3275555n,19468n,143n,...Array(n+7-12).fill(100n)];
 assert(ww.length===n+7&&ww.every(x=>x>0n)&&ww.reduce((a,b)=>a+b,0n)===D,"weights");
 const W=ww.slice(7).reduce((a,b)=>a+b,0n),diag=e.map((x,i)=>ceil(ceil(x*W,ww[7+i])*rat[7],Q));
 const interval=(i,j)=>{let l=c.upper[i][j][0]-c.finite[i][j][1],h=c.upper[i][j][1]-c.finite[i][j][0];for(let k=0;k<7;k++){const [a,b]=c[keys[k]][i][j];l-=ceil(ceil(b*rat[k],Q)*old[k]*D,ww[k]*D0);h-=floor(floor(a*rat[k],Q)*old[k]*D,ww[k]*D0)}if(i===j){let v=ceil(diag[i]*old[7]*D,W*D0);l-=v;h-=v}return[l,h]};
 const A=mat(()=>0n),rad=mat(()=>0n);for(let i=0;i<n;i++)for(let j=0;j<=i;j++){const a=interval(i,j),b=interval(j,i),l=max(a[0],b[0]),h=min(a[1],b[1]);assert(l<=h,"asym");const m=(l+h)/2n;A[i][j]=A[j][i]=m;rad[i][j]=rad[j][i]=max(m-l,h-m)}
 const radii=rad.map((row,i)=>row.reduce((a,b,j)=>a+ceil(b*ds[j],ds[i]),0n));for(let i=0;i<n;i++)A[i][i]-=radii[i];
 const E=c.upper.map((row,i)=>row[i][1]),grid=1000000n;
 function minors(B){let prev=1n,vals=[];for(let k=0;k<n;k++){const p=B[k][k];if(p<=0n)return{count:k,vals,failed:String(p)};vals.push(String(p));for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){const z=p*B[i][j]-B[i][k]*B[k][j];assert(z%prev===0n,"Bareiss division");B[i][j]=B[j][i]=z/prev}prev=p}return {count:n,vals}}
 const exact=minors(A.map(row=>row.slice()));assert(exact.count===n,"positive minors");
 function pass(m){return minors(mat((i,j)=>grid*A[i][j]-(i===j?m*E[i]:0n))).count===n}
 let lo=0n,hi=grid;assert(!pass(hi),"grid upper");while(hi-lo>1n){const m=(lo+hi)/2n;if(pass(m))lo=m;else hi=m}
 assert(pass(lo)&&!pass(lo+1n),"margin grid");
 return {h:r.h,odd:r.odd,M:r.M,T:r.T,n,transform:{row:1,coefficients:["-390867","100000"],determinant:"100000"},originalEighthMatches:n,unchangedEighthMatches:n-1,changedTail:updated.tails[1],oldTail:original.tails[1],energyUpper:E.map(String),weights:ww.map(String),denominator:String(D),radii:radii.map(String),lowerInteger:A.map(row=>row.map(String)),principalMinors:exact.vals,positiveMinors:exact.count,marginNumerator:String(lo),marginDenominator:String(grid),nextGridFails:true,scope:"Stored interval congruence and recomputed tail coefficient on exact transformed rational trial; no independent original-form evaluation."};
}
if(typeof module!=='undefined')module.exports=certificate;
if(typeof require!=='undefined'&&typeof module!=='undefined'&&require.main===module){const fs=require('node:fs'),p='experiments/results/tc02-49-20-even-m12288-t832-';const s=Array.from({length:6},(_,i)=>fs.readFileSync(p+'raw-part'+(i+1)+'.txt','utf8')).join('');if(s.length!==3204173)throw Error('raw length');console.log(JSON.stringify(certificate(JSON.parse(s),JSON.parse(fs.readFileSync(p+'constant-factors.json','utf8')),fs.readFileSync('experiments/tc01-post-log11-em.js','utf8')),null,2));}

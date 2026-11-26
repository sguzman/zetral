// U72-02: exact rational congruence and fresh eighth tail coefficients.
// Pass the extended tc01 generator as src; reconstruct raw from the seven stored parts.
function transform(raw,f,src,d){
 const assert=(x,m)=>{if(!x)throw Error(m)},r=raw.rows[0],n=r.ks.length,keys=["leading","second","third","fourth","fifth","sixth","seventh"],Q=BigInt(raw.scale),old=r.tailShares.map(BigInt),D0=BigInt(r.tailShareDenominator),rat=f.ratios.map(z=>BigInt(z[1]));
 assert(raw.rows.length===1&&Q===10n**66n&&r.h==="5/2"&&typeof r.odd==="boolean"&&r.J===128&&r.KEM===20&&r.M===20480&&r.T===1024&&n===50&&r.witnessWindow==="49/4"&&r.eightShift===true,"raw regime");
 assert(f.h===r.h&&f.odd===r.odd&&f.M===r.M&&f.primeNormUpper===r.primeNormUpper&&BigInt(f.scale)===Q&&rat.length===8&&rat.every(x=>x>0n&&x<Q),"factor regime");
 assert(old.length===8&&old.every(x=>x>0n)&&old.reduce((a,b)=>a+b,0n)===D0,"old shares");
 const mat=fn=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>fn(i,j))), B=d.transform.map(row=>row.map((v,j)=>[j,BigInt(v)]).filter(z=>z[1]!==0n));
 const full=mat((i,j)=>B[i].find(z=>z[0]===j)?.[1]??0n);
 assert(full.every((row,i)=>row.length===n&&row[i]>0n&&row.slice(i+1).every(v=>v===0n)),"triangular");
 assert(String(full.reduce((p,row,i)=>p*row[i],1n))===d.determinant,"determinant");
 const anchor=" const A=ks.map",at=src.indexOf(anchor);
 assert(at>0&&src.slice(0,at).split("length:M+2").length===3,"source anchors");
 const pre=src.slice(0,at).replaceAll("length:M+2","length:T+2");
 const body=`
 const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(BigInt(3*(2*lowCount)**3)),square(square(pi))))):ZERO;
 const g=n=>sub(sub(weight(n),primeBound),poleLoss);
 const ts=stored.ts,all=ks.concat(ts),Kmax=Math.max(...all);
 if(ks.join(',')!==stored.ks.join(',')||ts.some((k,i)=>k!==ks[ks.length-1]+2*(i+1))||Kmax!==T-Number(odd))throw Error('support');
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
 const calc=transform=>new Function("stored","transform",pre+body)(r,transform)([r.odd],{hn:5n,hd:2n,J:128,M:20480,T:1024,lowCount:50,KEM:20});
 const original=calc(mat((i,j)=>i===j?1n:0n)),updated=calc(full);
 assert(original.tails.every((z,i)=>z.C8===r.tails[i].C8&&z.eighthUpper===r.diagnostics[i].eighthUpper),"original eighth reproduction");
 assert(updated.tails.every((z,i)=>d.selected.includes(i)||z.C8===original.tails[i].C8&&z.eighthUpper===original.tails[i].eighthUpper),"untouched eighth reproduction");
 assert(updated.CL.join(",")===f.CL.join(",")&&original.CL.join(",")===f.CL.join(","),"CL reproduction");
 const c={};for(const k of ["upper","finite",...keys])c[k]=mat((i,j)=>{let lo=0n,hi=0n;for(const [u,x] of B[i])for(const [v,y] of B[j]){const z=x*y,[a,b]=r.componentIntervals[k][u][v].map(BigInt);lo+=z*(z>=0n?a:b);hi+=z*(z>=0n?b:a)}return[lo,hi]});
 const e=updated.tails.map(z=>BigInt(z.eighthUpper));
 const sqrt=x=>{if(x<1n)throw Error("sqrt");let a=1n<<BigInt(Math.ceil(x.toString(2).length/2));for(;;){const b=(a+x/a)/2n;if(b>=a)return a;a=b}};
 assert(c.upper.every((row,i)=>row[i][0]>0n),"positive transformed energy");
 const radiusWeights=c.upper.map((row,i)=>String(10n**180n/sqrt(row[i][1])));
 const componentIntervals=Object.fromEntries(Object.entries(c).map(([k,m])=>[k,m.map(row=>row.map(z=>z.map(String)))]));
 return {transform:full.map(row=>row.map(String)),determinant:d.determinant,originalEighthMatches:n,unchangedEighthMatches:n-d.selected.length,oldTails:original.tails.slice(0,8),newTails:updated.tails.slice(0,8),componentIntervals,radiusWeights,eighth:e.map(String)};
}
if(typeof module!=="undefined")module.exports=transform;

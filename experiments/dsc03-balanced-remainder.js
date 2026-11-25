// Reproduce: node experiments/dsc03-balanced-remainder.js
function balancedRemainder(){
const Q=10n**24n, floor=(n,d)=>{if(d<0n){n=-n;d=-d}return n>=0n?n/d:-((-n+d-1n)/d)},ceil=(n,d)=>-floor(-n,d);
const R=(n,d=1n)=>[floor(n*Q,d),ceil(n*Q,d)], add=(a,b)=>[a[0]+b[0],a[1]+b[1]],neg=a=>[-a[1],-a[0]],sub=(a,b)=>add(a,neg(b));
const min=a=>a.reduce((x,y)=>x<y?x:y),max=a=>a.reduce((x,y)=>x>y?x:y);
const mul=(a,b)=>{let p=a.flatMap(x=>b.map(y=>x*y));return[floor(min(p),Q),ceil(max(p),Q)]};
const div=(a,b)=>{if(b[0]<=0n&&b[1]>=0n)throw Error("zero divisor");let pairs=a.flatMap(x=>b.map(y=>[floor(x*Q,y),ceil(x*Q,y)]));return[min(pairs.map(x=>x[0])),max(pairs.map(x=>x[1]))]};
const square=a=>{if(a[0]>=0n)return mul(a,a);if(a[1]<=0n)return mul(neg(a),neg(a));return[0n,ceil(max([a[0]*a[0],a[1]*a[1]]),Q)]};
const ONE=R(1n),ZERO=R(0n),TWO=R(2n);
function logUnit(x){let r=div(sub(x,ONE),add(x,ONE)),p=r,r2=mul(r,r),s=ZERO;for(let j=0;j<24;j++){s=add(s,div(p,R(BigInt(2*j+1))));p=mul(p,r2)}const tail=div(mul(TWO,p),mul(R(49n),sub(ONE,r2)));return add(mul(TWO,s),[0n,max([0n,tail[1]])])}
const ln2=logUnit(TWO);
function logPoint(x){let a=[x,x],k=0;while(a[0]<Q){a=mul(a,TWO);k--}while(a[0]>=2n*Q){a=div(a,TWO);k++}if(a[0]<Q||a[1]>2n*Q+2n)throw Error("log scaling");return add(logUnit(a),mul(R(BigInt(k)),ln2))}
function log(a){if(a[0]<=0n)throw Error("log domain");return[logPoint(a[0])[0],logPoint(a[1])[1]]}
function atan(a){let p=a,a2=mul(a,a),s=ZERO;for(let j=0;j<24;j++){let term=div(p,R(BigInt(2*j+1)));s=add(s,j%2?neg(term):term);p=mul(p,a2)}let next=div(p,R(49n));return[s[0],s[1]+next[1]]}
const pi=sub(mul(R(16n),atan(R(1n,5n))),mul(R(4n),atan(R(1n,239n))));
let H=ZERO;for(let j=1n;j<=4096n;j++)H=add(H,R(1n,j));
const gamma=sub(add(sub(sub(H,mul(R(12n),ln2)),R(1n,8192n)),R(1n,12n*4096n**2n)),[0n,R(1n,120n*4096n**4n)[1]]);
const alpha=neg(add(add(gamma,div(pi,TWO)),add(mul(R(3n),ln2),log(pi))));
function expneg(x){let s=ONE,p=ONE;for(let j=1;j<=20;j++){p=div(mul(p,x),R(BigInt(j)));s=add(s,j%2?neg(p):p)}let next=div(mul(p,x),R(21n));return[s[0]-next[1],s[1]]}



const sqrt2=[1414213562373095048801688n,1414213562373095048801690n];
if(sqrt2[0]**2n>2n*Q*Q||sqrt2[1]**2n<2n*Q*Q)throw Error("sqrt2");
function expAny(x){
 let k=0;while(x[1]>Q/2n){x=div(x,TWO);k++}
 let e=expneg(x);for(let i=0;i<k;i++)e=square(e);
 return [max([0n,e[0]]),min([Q,e[1]])];
}
function sinh(x){const e=expAny(x);return div(sub(div(ONE,e),e),TWO)}

const rows=[],J=512,M=1024,S=49,T=96;
const absup=a=>max([a[1],-a[0]]),mid=a=>Number(a[0]+a[1])/2e24;
function trig(x,sine){
 const k=(x[0]+x[1])/(4n*pi[0]),y=sub(x,mul(R(2n*k),pi)),yy=square(y);
 let term=sine?y:ONE,sum=term;
 for(let j=1;j<=40;j++){term=neg(div(mul(term,yy),R(BigInt(sine?(2*j)*(2*j+1):(2*j-1)*(2*j)))));sum=add(sum,term)}
 const err=absup(div(mul(term,yy),R(BigInt(sine?82*83:81*82))));
 return [sum[0]-err,sum[1]+err];
}
function atanSmall(a){let p=a,a2=square(a),s=ZERO;for(let j=0;j<30;j++){let term=div(p,R(BigInt(2*j+1)));s=add(s,j%2?neg(term):term);p=mul(p,a2)}const next=absup(div(p,R(61n)));return[s[0]-next,s[1]+next]}
function atanPos(a){if(a[0]<0n)throw Error("atanPos");if(a[0]>=Q)return sub(div(pi,TWO),atanNear(div(ONE,a)));return atanNear(a)}
function atanNear(a){if(a[1]<=Q/2n)return atanSmall(a);const x=div(sub(a,ONE),add(a,ONE));if(absup(x)>Q/2n)throw Error("atan range");return add(div(pi,R(4n)),atanSmall(x))}
const widen=(x,e)=>[x[0]-e[1],x[1]+e[1]];
const b=div(ln2,sqrt2),ln3=log(R(3n)),sqrt3=[1732050807568877293527446n,1732050807568877293527447n];
if(sqrt3[0]**2n>3n*Q*Q||sqrt3[1]**2n<3n*Q*Q)throw Error("sqrt3");
const b3=div(ln3,sqrt3),normBound=R(91n,100n),check=sub(mul(TWO,normBound),b3);
if(check[0]<=0n||square(check)[0]<=add(mul(R(4n),square(b)),square(b3))[1])throw Error("prime norm bound");
if(mul(TWO,sub(ln3,ln2))[0]<=ln2[1])throw Error("chain length");
for(const [hn,hd] of [[27n,20n],[11n,8n],[69n,50n]]){
 const h=R(hn,hd),prime=h[0]>ln2[1];
 if(!prime&&h[1]>=ln2[0])throw Error("threshold");
 if(h[1]>=2n*ln2[0])throw Error("strip exchange");
 const twoPrime=h[0]>ln3[1];if(!twoPrime&&h[1]>=ln3[0])throw Error("prime3 threshold");
 const primeBound=twoPrime?normBound:b;
 const sh=sinh(div(h,R(4n))),ee=expAny(div(h,R(4n))),ch=div(add(div(ONE,ee),ee),TWO);
 // Use unnormalized cosine basis scaled by sqrt(h): k_n sqrt(h)=1 or sqrt2.
 // Entries retain common 1/h, so no sqrt(h) is needed.
 const rate=Array.from({length:J},(_,j)=>R(BigInt(4*j+1),2n));
 const rate2=rate.map(square),q=rate.map(r=>expAny(mul(r,h)));
 const om=Array.from({length:M+2},(_,n)=>div(mul(pi,R(BigInt(n))),h)),om2=om.map(square);
 const norm=n=>n===0?ONE:sqrt2;
 const R0=R(BigInt(4*J-1),2n),R02=square(R0),R03=mul(R0,R02);
 const E_h=div(q[0],sub(ONE,expAny(mul(TWO,h))));
 const rJ=R(BigInt(4*J+1),2n);
 const Et=div(expAny(mul(rJ,h)),mul(sub(ONE,expAny(mul(TWO,h))),square(rJ)));
 const R05=mul(R03,R02),R06=square(R03);
 const Ferror=add(div(R(3n),mul(TWO,R05)),Et),Derror=Ferror;
 const sums=Array.from({length:M+2},(_,n)=>{
  const x=om2[n],I=n===0?div(ONE,R0):div(atanPos(div(om[n],R0)),om[n]);
  let base=ZERO,exp=ZERO,bd=ZERO,ed=ZERO,da=ZERO;
  for(let j=0;j<J;j++){
   const f=div(ONE,add(rate2[j],x));
   base=add(base,f);exp=add(exp,mul(q[j],f));
   if(n<2*S){const d=mul(rate2[j],square(f));bd=add(bd,d);ed=add(ed,mul(q[j],d));
    if(n>0)da=add(da,div(mul(TWO,mul(x,f)),rate[j]));}
  }
  const den0=add(R02,x),den02=square(den0);
  base=sub(add(base,div(I,TWO)),div(R0,mul(R(6n),den02)));
  bd=add(add(bd,div(add(I,div(R0,den0)),R(4n))),div(mul(R0,sub(x,R02)),mul(R(6n),mul(den02,den0))));
  const diag=n===0?alpha:widen(sub(add(add(alpha,da),div(log(add(ONE,div(x,R02))),TWO)),div(mul(x,add(mul(R(3n),R02),x)),mul(R(6n),mul(R02,den02)))),div(mul(R(15n),x),mul(TWO,R06)));
  return {base,exp,bd,ed,diag};
 });
 const shifts=(twoPrime?[[ln2,b],[ln3,b3]]:[[ln2,b]]).map(([s,w])=>({s,w,p:div(mul(mul(TWO,w),sqrt2),pi),sn:om.map(x=>trig(mul(x,s),true)),cs:om.map(x=>trig(mul(x,s),false))}));
 const psum=shifts.reduce((a,z)=>add(a,z.p),ZERO);
 function P(n,k){
  let ans=ZERO;
  for(const {s,w,sn,cs} of shifts){
   let I;
   if(n===k)I=n===0?sub(h,s):div(sub(mul(sub(h,s),cs[n]),div(sn[n],om[n])),TWO);
   else I=div(sub(mul(om[k],sn[k]),mul(om[n],sn[n])),sub(om2[n],om2[k]));
   ans=add(ans,div(mul(mul(TWO,w),mul(mul(norm(n),norm(k)),I)),h));
  }
  return ans;
 }
 function weight(n){return sub(log(div(R(BigInt(n)),mul(TWO,h))),div(mul(R(3n),square(h)),mul(R(BigInt(2*n*n)),square(pi))))}

 for(const odd of [false,true]){
  const ks=odd?[1,3,5,7,9,11]:[0,2,4,6,8,10],eta=odd?-1:1;
  const pole=n=>div(mul(norm(n),odd?neg(ch):sh),add(om2[n],R(1n,4n)));
  const F=sums.map(a=>widen(odd?add(a.base,a.exp):sub(a.base,a.exp),Ferror));
  const D=sums.map(a=>widen(odd?add(a.bd,a.ed):sub(a.bd,a.ed),Derror));
  const memo=new Map();
  function K(n,k){
   const key=Math.min(n,k)+":"+Math.max(n,k);if(memo.has(key))return memo.get(key);
   let v;if(n===k){if(n>=2*S)throw Error("diagonal not evaluated");v=D[n];}
   else v=div(sub(mul(om2[n],F[n]),mul(om2[k],F[k])),sub(om2[n],om2[k]));
   v=mul(div(mul(mul(TWO,norm(n)),norm(k)),h),v);memo.set(key,v);return v;
  }
  function entry(n,k){
   let r=sub(add(K(n,k),div(mul(R(BigInt(2*eta)),mul(pole(n),pole(k))),h)),P(n,k));
   return n===k?add(r,sums[n].diag):r;
  }
  const A=ks.map(k=>ks.map(l=>entry(k,l)));
  const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(5184n),square(square(pi))))):ZERO;
  function g(n){return sub(sub(weight(n),primeBound),poleLoss)}
  const ns=[];for(let n=ks[ks.length-1]+2;n<=M;n+=2)ns.push(n);
  if(g(ns[0])[0]<=0n){rows.push({h:hn+"/"+hd,odd,failed:"high weight"});continue}
  const ts=ns.filter(n=>n<=T),dim=ts.length,all=ks.concat(ts),Kmax=Math.max(...all);
  const rr=ns.map(n=>ks.map(k=>entry(n,k)));
  const Crows=ns.map(n=>ts.map(k=>entry(n,k)));
  const weights=ns.map(g);
  // Finite exact-complement matrix; Float64 chooses a rational trial only.
  const gram=Crows.slice(0,dim).map(row=>row.map(mid));
  const L=gram.map(row=>row.map(()=>0));
  for(let i=0;i<dim;i++)for(let j=0;j<=i;j++){let v=gram[i][j];for(let k=0;k<j;k++)v-=L[i][k]*L[j][k];if(i===j){if(v<=0)throw Error("trial Cholesky");L[i][j]=Math.sqrt(v)}else L[i][j]=v/L[j][j]}
  const X=ks.map((_,k)=>{
   const rhs=rr.slice(0,dim).map(row=>mid(row[k])),t=rhs.slice(),y=rhs.slice();
   for(let i=0;i<dim;i++){for(let j=0;j<i;j++)t[i]-=L[i][j]*t[j];t[i]/=L[i][i]}
   for(let i=dim-1;i>=0;i--){y[i]=t[i];for(let j=i+1;j<dim;j++)y[i]-=L[j][i]*y[j];y[i]/=L[i][i]}
   return y.map(x=>R(BigInt(Math.round(x*1e12)),10n**12n));
  });
  // Use approximate symmetric Jacobi eigenvectors of the upper Schur matrix
  // to select rational low directions. The eigenvectors are NOT trusted.
  const CX0=Crows.slice(0,dim).map(row=>X.map(x=>row.reduce((s,v,j)=>add(s,mul(v,x[j])),ZERO)));
  const dlow=ks.length;
  const U0=A.map((row,k)=>row.map((a,l)=>{let u=a;
   for(let j=0;j<dim;j++)u=add(u,sub(mul(X[k][j],CX0[j][l]),add(mul(rr[j][k],X[l][j]),mul(X[k][j],rr[j][l]))));
   return u;
  }));
  const jf=U0.map((row,i)=>row.map((a,j)=>(mid(a)+mid(U0[j][i]))/2));
  const vf=Array.from({length:dlow},(_,i)=>Array.from({length:dlow},(_,j)=>i===j?1:0));
  for(let it=0;it<200;it++){
   let i=0,j=1;for(let a=0;a<dlow;a++)for(let b=a+1;b<dlow;b++)if(Math.abs(jf[a][b])>Math.abs(jf[i][j])){i=a;j=b}
   if(Math.abs(jf[i][j])<1e-15)break;
   const theta=.5*Math.atan2(2*jf[i][j],jf[j][j]-jf[i][i]),c=Math.cos(theta),s=Math.sin(theta);
   const a=jf[i][i],b=jf[j][j],r=jf[i][j];
   for(let k=0;k<dlow;k++)if(k!==i&&k!==j){const x=jf[k][i],y=jf[k][j];jf[k][i]=jf[i][k]=c*x-s*y;jf[k][j]=jf[j][k]=s*x+c*y}
   jf[i][i]=c*c*a-2*c*s*r+s*s*b;jf[j][j]=s*s*a+2*c*s*r+c*c*b;jf[i][j]=jf[j][i]=0;
   for(let k=0;k<dlow;k++){const x=vf[k][i],y=vf[k][j];vf[k][i]=c*x-s*y;vf[k][j]=s*x+c*y}
  }
  const order=Array.from({length:dlow},(_,i)=>i).sort((i,j)=>jf[i][i]-jf[j][j]);
  const V=order.map(j=>vf.map(row=>R(BigInt(Math.round(row[j]*1e12)),10n**12n)));
  const dot=(a,b)=>a.reduce((s,x,i)=>add(s,mul(x,b[i])),ZERO);
  // Strict diagonal dominance of V^t V proves invertibility exactly.
  for(let i=0;i<dlow;i++){const diag=dot(V[i],V[i]);let off=0n;for(let j=0;j<dlow;j++)if(i!==j)off+=absup(dot(V[i],V[j]));if(diag[0]<=off)throw Error("singular rational basis");}
  const XT=V.map(v=>ts.map((_,j)=>R(BigInt(Math.round(v.reduce((s,x,k)=>s+mid(x)*mid(X[k][j]),0)*1e12)),10n**12n)));
  const coeff=V.map((v,i)=>v.concat(XT[i].map(neg)));
  const brows=all.map(n=>all.map(k=>entry(n,k)));
  const bu=brows.map(row=>coeff.map(c=>dot(row,c)));
  const upper=coeff.map(c=>coeff.map((_,j)=>dot(c,bu.map(row=>row[j]))));
  const residues=ns.map((n,i)=>coeff.map(c=>dot(rr[i].concat(Crows[i]),c)));
  const finite=ks.map((_,k)=>ks.map((_,l)=>{
   let a=ZERO;for(let i=0;i<ns.length;i++)a=add(a,div(mul(residues[i][k],residues[i][l]),weights[i]));return a;
  }));
  const m=R(BigInt(M+1)),mm=R(BigInt(M-1)),gm=g(M+1);
  const den=sub(ONE,square(div(R(BigInt(Kmax)),m)));
  const ak=div(mul(mul(TWO,sqrt2),h),square(pi)),p=psum,eh=add(ONE,E_h);
  const CL=add(add(div(sqrt2,TWO),p),div(mul(ak,eh),m));
  const fc=add(div(h,R(4n)),div(mul(eh,square(h)),mul(square(pi),m)));
  const polecoef=div(mul(mul(R(BigInt(2*eta)),sqrt2),mul(odd?neg(ch):sh,h)),square(pi));
  const s0=[],v2=[],tails=[];let third=ZERO;
  for(let i=0;i<ks.length;i++){
   let bl=ZERO,bs=ZERO,br1=ZERO,br2=ZERO,ps=ZERO,pr=ZERO,pc=ZERO;
   for(let j=0;j<all.length;j++){
    const k=all[j],raw=coeff[i][j];
    const c=mul(norm(k),raw),a=[0n,absup(c)];
    bl=add(bl,c);bs=add(bs,mul(c,mul(om2[k],F[k])));
    br1=add(br1,mul(a,om2[k]));br2=add(br2,mul(a,mul(square(om2[k]),F[k])));
    ps=add(ps,shifts.reduce((a,z)=>add(a,mul(z.p,mul(c,mul(R(BigInt(k)),z.sn[k])))),ZERO));
    pr=add(pr,mul(mul(a,R(BigInt(k*k))),add(ONE,div(R(BigInt(k)),m))));
    pc=add(pc,mul(raw,pole(k)));
   }
   const pv=mul(polecoef,pc),V=add(sub(neg(mul(ak,bs)),ps),pv);
   const C3=add(add(div(mul(ak,add(mul(fc,br1),div(mul(square(h),br2),mul(square(pi),m)))),den),div(mul(p,pr),den)),div(mul([0n,absup(pv)],square(h)),mul(mul(R(4n),square(pi)),m)));
   third=add(third,square(C3));s0.push(bl);v2.push(V);tails.push({S0:bl.map(String),V:V.map(String),C3:String(C3[1])});
  }
  const f1=div(square(CL),mul(mm,gm)),f2=div(TWO,mul(mul(R(3n),mul(square(mm),mm)),gm));
  // Direction-specific third-order remainder from weighted Cauchy.
  const thirdC=tails.map(t=>BigInt(t.C3)+1n),sumC=thirdC.reduce((a,b)=>a+b,0n);
  const thirdDiag=thirdC.map(c=>div(mul(R(BigInt(2*ks.length)),square([c,c])),mul(mul(R(5n),mul(square(square(mm)),mm)),gm)));
  const lead=ks.map((_,i)=>ks.map((_,j)=>mul(f1,mul(s0[i],s0[j]))));
  const second=ks.map((_,i)=>ks.map((_,j)=>mul(f2,mul(v2[i],v2[j]))));
  const mat=upper.map((row,i)=>row.map((a,j)=>sub(sub(sub(sub(a,finite[i][j]),lead[i][j]),second[i][j]),i===j?[thirdDiag[i][1],thirdDiag[i][1]]:ZERO)));
  const n=ks.length,midpoints=Array.from({length:n},()=>Array(n).fill(0n)),radii=Array.from({length:n},()=>Array(n).fill(0n));
  for(let i=0;i<n;i++)for(let j=0;j<=i;j++){
   const lo=max([mat[i][j][0],mat[j][i][0]]),hi=min([mat[i][j][1],mat[j][i][1]]);
   if(lo>hi)throw Error("asymmetry");const m=(lo+hi)/2n,rad=max([m-lo,hi-m]);midpoints[i][j]=midpoints[j][i]=m;radii[i][j]=radii[j][i]=rad;
  }
  const errors=radii.map(row=>row.reduce((a,b)=>a+b,0n));
  const G=midpoints.map((row,i)=>row.map((x,j)=>{let v=x-(i===j?errors[i]:0n);return[v,v]}));
  // Individual directional bounds use only that column's remainder (not block trace).
  const diagnostics=ks.map((_,i)=>{
   const c=[thirdC[i],thirdC[i]],t3=div(mul(TWO,square(c)),mul(mul(R(5n),mul(square(square(mm)),mm)),gm));
   const low=sub(sub(sub(sub(upper[i][i],finite[i][i]),lead[i][i]),second[i][i]),[t3[1],t3[1]]);
   return {upper:upper[i][i].map(String),finite:finite[i][i].map(String),leading:lead[i][i].map(String),second:second[i][i].map(String),thirdUpper:String(t3[1]),directionLower:String(low[0]),matrixRadius:String(errors[i]),norm:dot(V[i],V[i]).map(String)};
  });
  const pivots=[];let certified=true;
  for(let k=0;k<n;k++){
   const p=G[k][k];pivots.push(p.map(String));
   if(p[0]<=0n){certified=false;break}
   for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){
    G[i][j]=sub(G[i][j],div(mul(G[i][k],G[j][k]),p));G[j][i]=G[i][j];
   }
  }
  rows.push({h:hn+"/"+hd,odd,J,M,S,prime,twoPrime,primeNormUpper:String(primeBound[1]),ks,ts,T,highWeight:g(ns[0]).map(String),pivots,diagnostics,certified,tails,basis:V.map(y=>y.map(x=>String(x[0]))),trial:XT.map(y=>y.map(x=>String(x[0])))});
 }
}
return {scale:String(Q),rows};
}
console.log(JSON.stringify(balancedRemainder(),null,2));

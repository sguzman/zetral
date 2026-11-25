// Reproduce: node experiments/ecr02-exact-complement-residual.js
function exactComplement(){
const Q=10n**18n, floor=(n,d)=>{if(d<0n){n=-n;d=-d}return n>=0n?n/d:-((-n+d-1n)/d)},ceil=(n,d)=>-floor(-n,d);
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
let H=ZERO;for(let j=1n;j<=256n;j++)H=add(H,R(1n,j));
const gamma=sub(add(sub(sub(H,mul(R(8n),ln2)),R(1n,512n)),R(1n,12n*256n**2n)),[0n,R(1n,120n*256n**4n)[1]]);
const alpha=neg(add(add(gamma,div(pi,TWO)),add(mul(R(3n),ln2),log(pi))));
function expneg(x){let s=ONE,p=ONE;for(let j=1;j<=20;j++){p=div(mul(p,x),R(BigInt(j)));s=add(s,j%2?neg(p):p)}let next=div(mul(p,x),R(21n));return[s[0]-next[1],s[1]]}



const sqrt2=[1414213562373095048n,1414213562373095050n];
if(sqrt2[0]**2n>2n*Q*Q||sqrt2[1]**2n<2n*Q*Q)throw Error("sqrt2");
function expAny(x){
 let k=0;while(x[1]>Q/2n){x=div(x,TWO);k++}
 let e=expneg(x);for(let i=0;i<k;i++)e=square(e);
 return [max([0n,e[0]]),min([Q,e[1]])];
}
function sinh(x){const e=expAny(x);return div(sub(div(ONE,e),e),TWO)}

const rows=[],J=192,M=512,S=25,T=48;
const absup=a=>max([a[1],-a[0]]),mid=a=>Number(a[0]+a[1])/2e18;
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
const b=div(ln2,sqrt2);
for(const [hn,hd] of [[4n,5n],[17n,20n],[9n,10n],[19n,20n],[1n,1n]]){
 const h=R(hn,hd),prime=h[0]>ln2[1];
 if(!prime&&h[1]>=ln2[0])throw Error("threshold");
 if(h[1]>=2n*ln2[0])throw Error("strip exchange");
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
 const Ferror=add(div(ONE,mul(TWO,R03)),Et),Derror=add(div(R(13n),mul(R(6n),R03)),Et);
 const sums=Array.from({length:M+2},(_,n)=>{
  const x=om2[n],I=n===0?div(ONE,R0):div(atanPos(div(om[n],R0)),om[n]);
  let base=ZERO,exp=ZERO,bd=ZERO,ed=ZERO,da=ZERO;
  for(let j=0;j<J;j++){
   const f=div(ONE,add(rate2[j],x));
   base=add(base,f);exp=add(exp,mul(q[j],f));
   if(n<2*S){const d=mul(rate2[j],square(f));bd=add(bd,d);ed=add(ed,mul(q[j],d));
    if(n>0)da=add(da,div(mul(TWO,mul(x,f)),rate[j]));}
  }
  base=add(base,div(I,TWO));bd=add(bd,div(add(I,div(R0,add(R02,x))),R(4n)));
  const diag=n===0?alpha:widen(add(add(alpha,da),div(log(add(ONE,div(x,R02))),TWO)),div(mul(R(3n),x),mul(TWO,square(R02))));
  return {base,exp,bd,ed,diag};
 });
 const sn=prime?om.map(x=>trig(mul(x,ln2),true)):[],cs=prime?om.map(x=>trig(mul(x,ln2),false)):[];
 function P(n,k){
  if(!prime)return ZERO;
  let I;
  if(n===k)I=n===0?sub(h,ln2):div(sub(mul(sub(h,ln2),cs[n]),div(sn[n],om[n])),TWO);
  else I=div(sub(mul(om[k],sn[k]),mul(om[n],sn[n])),sub(om2[n],om2[k]));
  return div(mul(mul(TWO,b),mul(mul(norm(n),norm(k)),I)),h);
 }
 function weight(n){return sub(log(div(R(BigInt(n)),mul(TWO,h))),div(mul(R(3n),square(h)),mul(R(BigInt(2*n*n)),square(pi))))}

 for(const odd of [false,true]){
  const ks=odd?[1,3,5,7]:[0,2,4,6],eta=odd?-1:1;
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
  const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(1536n),square(square(pi))))):ZERO;
  function g(n){return sub(sub(weight(n),prime?b:ZERO),poleLoss)}
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
  const CX=Crows.map(row=>X.map(x=>row.reduce((s,v,j)=>add(s,mul(v,x[j])),ZERO)));
  const residues=rr.map((row,i)=>row.map((r,k)=>sub(r,CX[i][k])));
  const cost=ks.map((_,k)=>ks.map((_,l)=>{
   let a=ZERO;
   for(let j=0;j<dim;j++){
    a=add(a,sub(add(mul(rr[j][k],X[l][j]),mul(X[k][j],rr[j][l])),mul(X[k][j],CX[j][l])));
   }
   for(let i=0;i<ns.length;i++)a=add(a,div(mul(residues[i][k],residues[i][l]),weights[i]));
   return a;
  }));
  let tail=ZERO;const tails=[];
  for(let i=0;i<ks.length;i++){
   const Mp1=R(BigInt(M+1)),denom=sub(ONE,square(div(R(BigInt(Kmax)),Mp1)));
   let bl=ZERO,bs=ZERO,br1=ZERO,br2=ZERO,ps=ZERO,pr=ZERO,pc=ZERO;
   const Fupper=add(div(pi,mul(R(4n),om[M+1])),div(add(ONE,E_h),om2[M+1]));
   for(let j=0;j<all.length;j++){
    const k=all[j],raw=j<ks.length?(k===ks[i]?ONE:ZERO):neg(X[i][j-ks.length]);
    const c=mul(norm(k),raw),a=[0n,absup(c)];
    bl=add(bl,c);bs=add(bs,mul(c,mul(om2[k],F[k])));
    br1=add(br1,mul(a,om2[k]));
    br2=add(br2,mul(a,mul(square(om2[k]),F[k])));
    ps=add(ps,mul(c,mul(R(BigInt(k)),sn[k])));
    pr=add(pr,mul(mul(a,R(BigInt(k*k))),add(div(ONE,Mp1),div(R(BigInt(k)),square(Mp1)))));
    pc=add(pc,mul(raw,pole(k)));
   }
   const Cb1=mul(div(sqrt2,TWO),[0n,absup(bl)]);
   const Cb2=mul(div(mul(mul(TWO,sqrt2),h),square(pi)),add(add(mul(add(ONE,E_h),[0n,absup(bl)]),[0n,absup(bs)]),div(add(mul(Fupper,br1),div(br2,om2[M+1])),denom)));
   const Cpole=div(mul(mul(div(TWO,h),[0n,absup(pc)]),mul(mul(sqrt2,odd?ch:sh),square(h))),square(pi));
   const fac=div(mul(mul(TWO,b),sqrt2),pi);
   const C1=add(Cb1,mul(fac,[0n,absup(bl)]));
   const C2=add(add(Cb2,Cpole),mul(fac,add([0n,absup(ps)],div(pr,denom))));
   const Mm1=R(BigInt(M-1));
   const coltail=div(add(add(div(square(C1),mul(TWO,Mm1)),div(mul(C1,C2),mul(TWO,square(Mm1)))),div(square(C2),mul(R(6n),mul(square(Mm1),Mm1)))),g(M+1));
   tail=add(tail,coltail);tails.push({C1: String(C1[1]),C2:String(C2[1]),tail:String(coltail[1])});
  }
  const mat=A.map((row,i)=>row.map((a,j)=>sub(sub(a,cost[i][j]),i===j?[tail[1],tail[1]]:ZERO)));
  // Replace each interval matrix by a single exact rational lower matrix.
  // Midpoints rounded to fixed-point integers; radius row sum covers all error.
  const n=ks.length,midpoints=Array.from({length:n},()=>Array(n).fill(0n)),radii=Array.from({length:n},()=>Array(n).fill(0n));
  for(let i=0;i<n;i++)for(let j=0;j<=i;j++){
   const lo=max([mat[i][j][0],mat[j][i][0]]),hi=min([mat[i][j][1],mat[j][i][1]]);
   if(lo>hi)throw Error("asymmetry");
   const m=(lo+hi)/2n,rad=max([m-lo,hi-m]);
   midpoints[i][j]=midpoints[j][i]=m;radii[i][j]=radii[j][i]=rad;
  }
  const error=max(radii.map(row=>row.reduce((a,b)=>a+b,0n)));
  const G=midpoints.map((row,i)=>row.map((x,j)=>{let v=x-(i===j?error:0n);return[v,v]}));
  const pivots=[];let certified=true;
  for(let k=0;k<n;k++){
   const p=G[k][k];pivots.push(p.map(String));
   if(p[0]<=0n){certified=false;break}
   for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){
    G[i][j]=sub(G[i][j],div(mul(G[i][k],G[j][k]),p));G[j][i]=G[i][j];
   }
  }
  rows.push({h:hn+"/"+hd,odd,J,M,S,prime,ks,ts,T,highWeight:g(ns[0]).map(String),pivots,entryErrorUpper:String(error),tailUpper:String(tail[1]),certified,tails,trial:X.map(y=>y.map(x=>String(x[0])))});
 }
}
return {scale:String(Q),rows};
}
console.log(JSON.stringify(exactComplement(),null,2));

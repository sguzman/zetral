// Reproduce: node experiments/pbci03-positive-complement.js
function complementCertificate(){
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
const gamma=sub(sub(H,mul(R(8n),ln2)),[R(1n,514n)[0],R(1n,512n)[1]]);
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

const rows=[],J=256,M=256,S=24;
const absup=a=>max([a[1],-a[0]]),mid=a=>Number(a[0]+a[1])/2e18;
function trig(x,sine){
 const k=(x[0]+x[1])/(4n*pi[0]),y=sub(x,mul(R(2n*k),pi)),yy=square(y);
 let term=sine?y:ONE,sum=term;
 for(let j=1;j<=40;j++){term=neg(div(mul(term,yy),R(BigInt(sine?(2*j)*(2*j+1):(2*j-1)*(2*j)))));sum=add(sum,term)}
 const err=absup(div(mul(term,yy),R(BigInt(sine?82*83:81*82))));
 return [sum[0]-err,sum[1]+err];
}
const b=div(ln2,sqrt2);
for(const [hn,hd] of [[1n,2n],[9n,16n],[5n,8n],[11n,16n],[7n,10n],[3n,4n]]){
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
  const k=odd?1:0,eta=odd?-1:1;
  const d=q.map(x=>mul(TWO,odd?add(ONE,x):sub(ONE,x)));
  const pole=n=>div(mul(norm(n),odd?neg(ch):sh),add(om2[n],R(1n,4n)));
  const v=(n,j)=>div(mul(norm(n),rate[j]),add(rate2[j],om2[n]));
  const low=rate.map((_,j)=>v(k,j));
  let diag=alpha;
  if(k!==0)for(let j=0;j<J;j++)diag=add(diag,div(mul(TWO,om2[k]),mul(rate[j],add(rate2[j],om2[k]))));
  let K=ZERO;for(let j=0;j<J;j++)K=add(K,mul(d[j],square(low[j])));
  const Hkk=div(mul(R(BigInt(2*eta)),square(pole(k))),h);
  const A=sub(add(add(diag,div(K,h)),Hkk),P(k,k));
  // All retained columns use coefficients d/h with unnormalized sqrt(h) overlaps.
  const dc=d.map(x=>div(x,h));
  const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(24n),square(square(pi))))):ZERO;
  function g(n){return sub(sub(weight(n),prime?b:ZERO),poleLoss)}
  const ns=[];for(let n=k+2;n<=M;n+=2)ns.push(n);
  if(g(ns[0])[0]<=0n){rows.push({h:hn+"/"+hd,odd,failed:"high weight"});continue}
  const selected=Array.from({length:S},(_,i)=>i);
  const Dsel=selected.map(j=>dc[j]);
  if(!odd)Dsel.push(div(TWO,h));
  const high=[],rr=[],weights=[];
  for(const n of ns){
   const vv=rate.map((_,j)=>v(n,j));
   let r=ZERO;for(let j=0;j<J;j++)r=add(r,mul(dc[j],mul(vv[j],low[j])));
   r=sub(add(r,div(mul(R(BigInt(2*eta)),mul(pole(n),pole(k))),h)),P(n,k));
   const vvsel=selected.map(j=>vv[j]);if(!odd)vvsel.push(pole(n));
   high.push(vvsel);rr.push(r);weights.push(g(n));
  }
  // Floating point only chooses rational trial coefficients; all verification below is interval.
  const Afloat=high.map(row=>row.map(mid)), rf=rr.map(mid),gf=weights.map(mid),df=Dsel.map(mid);
  const y=df.map(()=>0),res=rf.slice();
  for(let it=0;it<80;it++)for(let j=0;j<y.length;j++){
   let den=1/df[j],num=-y[j]/df[j];
   for(let i=0;i<ns.length;i++){const a=Afloat[i][j];den+=a*a/gf[i];num+=a*res[i]/gf[i]}
   const dy=num/den;y[j]+=dy;for(let i=0;i<ns.length;i++)res[i]-=Afloat[i][j]*dy;
  }
  const Y=y.map(x=>R(BigInt(Math.round(x*1e12)),10n**12n));
  let cost=ZERO;for(let j=0;j<Y.length;j++)cost=add(cost,div(square(Y[j]),Dsel[j]));
  for(let i=0;i<ns.length;i++){
   let r=rr[i];for(let j=0;j<Y.length;j++)r=sub(r,mul(high[i][j],Y[j]));
   cost=add(cost,div(square(r),weights[i]));
  }
  let C=ZERO;
  for(let j=0;j<J;j++){
   let c=mul(dc[j],low[j]);if(j<S)c=sub(c,Y[j]);
   C=add(C,mul([0n,absup(c)],mul(sqrt2,rate[j])));
  }
  let pc=div(mul(R(BigInt(2*eta)),pole(k)),h);if(!odd)pc=sub(pc,Y[S]);
  C=add(C,mul([0n,absup(pc)],mul(sqrt2,odd?ch:sh)));
  C=div(mul(C,square(h)),square(pi));
  // sqrt-free Minkowski bound: (a+b)^2 <= 2(a²+b²), or exact bound when no prime.
  const tailBase=div(square(C),mul(R(BigInt(3*M**3)),g(M+1)));
  const tailPrime=prime?div(square(div(mul(R(8n),b),pi)),mul(R(BigInt(M)),g(M+1))):ZERO;
  const tail=prime?mul(TWO,add(tailBase,tailPrime)):tailBase;
  const margin=sub(A,add(cost,[0n,tail[1]]));
  rows.push({h:hn+"/"+hd,odd,J,M,S,prime,low:A.map(String),cost:cost.map(String),tailUpper:String(tail[1]),margin:margin.map(String),certified:margin[0]>0n,trial:Y.map(x=>String(x[0]))});
 }
}
return {scale:String(Q),rows};
}
console.log(JSON.stringify(complementCertificate(),null,2));

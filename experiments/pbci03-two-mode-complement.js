// Reproduce: node experiments/pbci03-two-mode-complement.js
function twoModeCertificate(){
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
for(const [hn,hd] of [[9n,16n],[5n,8n],[11n,16n],[7n,10n],[3n,4n]]){
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
  const ks=odd?[1,3]:[0,2],eta=odd?-1:1;
  const d=q.map(x=>mul(TWO,odd?add(ONE,x):sub(ONE,x))),dc=d.map(x=>div(x,h));
  const pole=n=>div(mul(norm(n),odd?neg(ch):sh),add(om2[n],R(1n,4n)));
  const v=(n,j)=>div(mul(norm(n),rate[j]),add(rate2[j],om2[n]));
  const low=ks.map(k=>rate.map((_,j)=>v(k,j)));
  const diag=k=>{let a=alpha;if(k)for(let j=0;j<J;j++)a=add(a,div(mul(TWO,om2[k]),mul(rate[j],add(rate2[j],om2[k]))));return a};
  function entry(n,k,vn,vk){
   let r=ZERO;for(let j=0;j<J;j++)r=add(r,mul(dc[j],mul(vn[j],vk[j])));
   r=sub(add(r,div(mul(R(BigInt(2*eta)),mul(pole(n),pole(k))),h)),P(n,k));
   return n===k?add(r,diag(n)):r;
  }
  const A=ks.map((k,i)=>ks.map((l,j)=>entry(k,l,low[i],low[j])));
  const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(192n),square(square(pi))))):ZERO;
  function g(n){return sub(sub(weight(n),prime?b:ZERO),poleLoss)}
  const ns=[];for(let n=ks[1]+2;n<=M;n+=2)ns.push(n);
  if(g(ns[0])[0]<=0n){rows.push({h:hn+"/"+hd,odd,failed:"high weight"});continue}
  const selected=Array.from({length:S},(_,i)=>i),Dsel=selected.map(j=>dc[j]);if(!odd)Dsel.push(div(TWO,h));
  const high=[],rr=[],weights=[];
  for(const n of ns){
   const vv=rate.map((_,j)=>v(n,j));
   rr.push(ks.map((k,i)=>entry(n,k,vv,low[i])));
   const vvsel=selected.map(j=>vv[j]);if(!odd)vvsel.push(pole(n));
   high.push(vvsel);weights.push(g(n));
  }
  const Af=high.map(row=>row.map(mid)),gf=weights.map(mid),df=Dsel.map(mid);
  const Y=ks.map((_,k)=>{
   const y=df.map(()=>0),res=rr.map(x=>mid(x[k]));
   for(let it=0;it<80;it++)for(let j=0;j<y.length;j++){
    let den=1/df[j],num=-y[j]/df[j];
    for(let i=0;i<ns.length;i++){const a=Af[i][j];den+=a*a/gf[i];num+=a*res[i]/gf[i]}
    const dy=num/den;y[j]+=dy;for(let i=0;i<ns.length;i++)res[i]-=Af[i][j]*dy;
   }
   return y.map(x=>R(BigInt(Math.round(x*1e12)),10n**12n));
  });
  const residues=rr.map((row,i)=>row.map((r,k)=>{for(let j=0;j<Y[k].length;j++)r=sub(r,mul(high[i][j],Y[k][j]));return r}));
  const cost=ks.map((_,k)=>ks.map((_,l)=>{
   let a=ZERO;for(let j=0;j<Y[k].length;j++)a=add(a,div(mul(Y[k][j],Y[l][j]),Dsel[j]));
   for(let i=0;i<ns.length;i++)a=add(a,div(mul(residues[i][k],residues[i][l]),weights[i]));
   return a;
  }));
  let tail=ZERO;
  for(let i=0;i<ks.length;i++){
   let C=ZERO;for(let j=0;j<J;j++){
    let c=mul(dc[j],low[i][j]);if(j<S)c=sub(c,Y[i][j]);
    C=add(C,mul([0n,absup(c)],mul(sqrt2,rate[j])));
   }
   let pc=div(mul(R(BigInt(2*eta)),pole(ks[i])),h);if(!odd)pc=sub(pc,Y[i][S]);
   C=add(C,mul([0n,absup(pc)],mul(sqrt2,odd?ch:sh)));
   C=div(mul(C,square(h)),square(pi));
   const tailBase=div(square(C),mul(R(BigInt(3*M**3)),g(M+1)));
   const tailPrime=prime?div(square(div(mul(R(8n),b),pi)),mul(R(BigInt(M)),g(M+1))):ZERO;
   tail=add(tail,prime?mul(TWO,add(tailBase,tailPrime)):tailBase);
  }
  const mat=A.map((row,i)=>row.map((a,j)=>sub(sub(a,cost[i][j]),i===j?[0n,tail[1]]:ZERO)));
  // Use both independent entry enclosures: the true exact lower matrix is symmetric.
  const off=[max([mat[0][1][0],mat[1][0][0]]),min([mat[0][1][1],mat[1][0][1]])];
  if(off[0]>off[1])throw Error("asymmetry");
  const det=sub(mul(mat[0][0],mat[1][1]),square(off));
  const certified=mat[0][0][0]>0n&&det[0]>0n;
  rows.push({h:hn+"/"+hd,odd,J,M,S,prime,highWeight:g(ns[0]).map(String),lowerMatrix:[mat[0][0].map(String),off.map(String),mat[1][1].map(String)],det:det.map(String),tailUpper:String(tail[1]),certified,trial:Y.map(y=>y.map(x=>String(x[0])))});
 }
}
return {scale:String(Q),rows};
}
console.log(JSON.stringify(twoModeCertificate(),null,2));

// Reproduce: node experiments/lpe03-localized-prime-complement.js
function localizedCertificate(){
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

const rows=[],J=256,M=512,S=24;
const absup=a=>max([a[1],-a[0]]),mid=a=>Number(a[0]+a[1])/2e18;
function trig(x,sine){
 const k=(x[0]+x[1])/(4n*pi[0]),y=sub(x,mul(R(2n*k),pi)),yy=square(y);
 let term=sine?y:ONE,sum=term;
 for(let j=1;j<=40;j++){term=neg(div(mul(term,yy),R(BigInt(sine?(2*j)*(2*j+1):(2*j-1)*(2*j)))));sum=add(sum,term)}
 const err=absup(div(mul(term,yy),R(BigInt(sine?82*83:81*82))));
 return [sum[0]-err,sum[1]+err];
}
const b=div(ln2,sqrt2);
for(const [hn,hd] of [[3n,4n],[4n,5n],[17n,20n],[9n,10n],[1n,1n]]){
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
  const ks=odd?[1,3,5,7]:[0,2,4,6],eta=odd?-1:1;
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
  const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(1536n),square(square(pi))))):ZERO;
  function g(n){return sub(sub(weight(n),prime?b:ZERO),poleLoss)}
  const ns=[];for(let n=ks[ks.length-1]+2;n<=M;n+=2)ns.push(n);
  if(g(ns[0])[0]<=0n){rows.push({h:hn+"/"+hd,odd,failed:"high weight"});continue}
  const selected=Array.from({length:S},(_,i)=>i),Dsel=selected.map(j=>dc[j]);if(!odd)Dsel.push(div(TWO,h));
  const nb=Dsel.length,wp=Array.from({length:8},(_,i)=>2*i+(odd?1:0));
  const Z=(n,k)=>sub(n===k?b:ZERO,P(n,k));
  const Gp=wp.map(n=>wp.map(k=>Z(n,k)));
  const penalty=Array.from({length:nb+wp.length},(_,i)=>Array.from({length:nb+wp.length},(_,j)=>i<nb&&j<nb?(i===j?div(ONE,Dsel[i]):ZERO):i>=nb&&j>=nb?Gp[i-nb][j-nb]:ZERO));
  const high=[],rr=[],weights=[];
  for(const n of ns){
   const vv=rate.map((_,j)=>v(n,j));
   rr.push(ks.map((k,i)=>entry(n,k,vv,low[i])));
   const vvsel=selected.map(j=>vv[j]);if(!odd)vvsel.push(pole(n));
   high.push(vvsel.concat(wp.map(k=>Z(n,k))));weights.push(g(n));
  }
  const Af=high.map(row=>row.map(mid)),gf=weights.map(mid),pf=penalty.map(row=>row.map(mid));
  const Y=ks.map((_,k)=>{
   const y=pf.map(()=>0),res=rr.map(x=>mid(x[k]));
   for(let it=0;it<80;it++)for(let j=0;j<y.length;j++){
    let den=pf[j][j],num=-pf[j].reduce((s,x,l)=>s+x*y[l],0);
    for(let i=0;i<ns.length;i++){const a=Af[i][j];den+=a*a/gf[i];num+=a*res[i]/gf[i]}
    const dy=num/den;y[j]+=dy;for(let i=0;i<ns.length;i++)res[i]-=Af[i][j]*dy;
   }
   return y.map(x=>R(BigInt(Math.round(x*1e12)),10n**12n));
  });
  const residues=rr.map((row,i)=>row.map((r,k)=>{for(let j=0;j<Y[k].length;j++)r=sub(r,mul(high[i][j],Y[k][j]));return r}));
  const cost=ks.map((_,k)=>ks.map((_,l)=>{
   let a=ZERO;for(let j=0;j<Y[k].length;j++)for(let p=0;p<Y[l].length;p++)a=add(a,mul(mul(Y[k][j],Y[l][p]),penalty[j][p]));
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
   let leading=ZERO,remainder=ZERO;
   const Kp=Math.max(...wp),Mp1=R(BigInt(M+1)),fac=div(mul(mul(TWO,b),sqrt2),pi);
   for(let j=0;j<wp.length;j++){
    const k=wp[j],ak=sub(Y[i][nb+j],k===ks[i]?ONE:ZERO);
    const an=mul(ak,norm(k));leading=add(leading,an);
    remainder=add(remainder,mul([0n,absup(an)],add(R(BigInt(k)),div(R(BigInt(k*k)),Mp1))));
   }
   const C1=mul(fac,[0n,absup(leading)]);
   const Cp=div(mul(fac,remainder),sub(ONE,square(div(R(BigInt(Kp)),Mp1))));
   const C2=add(C,Cp),Mm1=R(BigInt(M-1));
   const coltail=div(add(add(div(square(C1),mul(TWO,Mm1)),div(mul(C1,C2),mul(TWO,square(Mm1)))),div(square(C2),mul(R(6n),mul(square(Mm1),Mm1)))),g(M+1));
   tail=add(tail,coltail);
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
  rows.push({h:hn+"/"+hd,odd,J,M,S,prime,ks,wp,highWeight:g(ns[0]).map(String),pivots,entryErrorUpper:String(error),tailUpper:String(tail[1]),certified,trial:Y.map(y=>y.map(x=>String(x[0])))});
 }
}
return {scale:String(Q),rows};
}
console.log(JSON.stringify(localizedCertificate(),null,2));

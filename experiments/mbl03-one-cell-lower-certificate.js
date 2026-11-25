// Reproduce with Node.js: node experiments/mbl03-one-cell-lower-certificate.js
function lowerCertificate(){
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
const rows=[],J=512,N=64;
for(const [hn,hd] of [[1n,4n],[3n,8n],[7n,16n],[1n,2n]]){
 const h=R(hn,hd);
 if(h[1]>=ln2[0])throw Error("not prime free");
 const sh=sinh(div(h,R(4n))),sh2=square(sh);
 const H00=div(mul(R(32n),sh2),h);
 const D0=div(mul(TWO,sqrt2),h),poleFactor=div(mul(mul(R(8n),sqrt2),sh2),h);
 const rates=[],qdiff=[];
 let K00=ZERO;
 for(let j=0;j<J;j++){
  const r=R(BigInt(4*j+1),2n),r2=square(r);
  const q=sub(ONE,expAny(mul(r,h)));
  rates.push(r2);qdiff.push(q);
  K00=add(K00,div(q,r2));
 }
 K00=div(mul(TWO,K00),h);
 const H=add(add(alpha,K00),H00);
 function weight(n){return sub(log(div(R(BigInt(n)),mul(TWO,h))),div(mul(R(3n),square(h)),mul(R(BigInt(2*n*n)),square(pi))))}
 let correction=ZERO;
 for(let n=2;n<=N;n+=2){
  const omega=div(mul(pi,R(BigInt(n))),h),omega2=square(omega);
  let z=ZERO;
  for(let j=0;j<J;j++)z=add(z,div(qdiff[j],add(rates[j],omega2)));
  const r=add(mul(D0,z),div(poleFactor,add(omega2,R(1n,4n))));
  const w=weight(n);if(w[0]<=0n)throw Error("nonpositive even weight");
  correction=add(correction,div(square(r),w));
 }
 const A0=div(sqrt2,TWO),B0=div(mul(mul(TWO,sqrt2),mul(h,add(ONE,mul(R(4n),sh2)))),square(pi));
 const tail=div(square(add(A0,div(B0,R(BigInt(N+1))))),mul(R(BigInt(N)),weight(N+1)));
 const L=sub(H,add(correction,[0n,tail[1]]));
 const odd=sub(weight(1),mul(TWO,sub(sinh(div(h,TWO)),div(h,TWO))));
 rows.push({h:hn.toString()+"/"+hd.toString(),J,N,H00:H.map(String),evenCorrection:correction.map(String),tailUpper:String(tail[1]),evenSchurLower:L.map(String),oddComplement:odd.map(String),certified:L[0]>0n&&odd[0]>0n});
}
return {scale:String(Q),rows};
}
console.log(JSON.stringify(lowerCertificate(),null,2));

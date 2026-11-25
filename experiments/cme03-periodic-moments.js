// Reproduce with Node.js: node experiments/cme03-periodic-moments.js
function benchmarkFourier(){
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

// Sharp cutoff |s|<=1, circle length 4, physical interval (-1/2,1/2).
// The cutoff is constant near the singular origin; its discontinuities are away
// from all compact test correlations, so the compressed distribution is exact.
const sqrt2=[1414213562373095048n,1414213562373095050n];
if(sqrt2[0]**2n>2n*Q*Q||sqrt2[1]**2n<2n*Q*Q)throw Error("sqrt");
const halfsqrt=div(sqrt2,TWO),prime=div(ln2,sqrt2);
const sineQuarter=[ZERO,halfsqrt,ONE,halfsqrt,ZERO,neg(halfsqrt),neg(ONE),neg(halfsqrt)];
const sinQ=n=>sineQuarter[((n%8)+8)%8];
const E=expneg(R(1n,2n)),E2=square(square(E)),sinh=div(sub(div(ONE,E),E),TWO),cosh=div(add(div(ONE,E),E),TWO);
function cosReal(x){
 const k=(x[0]+x[1])/(4n*pi[0]); // integer truncation of midpoint/(2*pi)
 const y=sub(x,mul(R(2n*k),pi)); // bounded by 2*pi (plus tiny enclosure)
 const y2=square(y);let term=ONE,sum=ONE;
 for(let j=1;j<=40;j++){term=div(mul(term,y2),R(BigInt((2*j-1)*(2*j))));sum=add(sum,j%2?neg(term):term)}
 const tail=div(mul(term,y2),R(81n*82n));return[sum[0]-tail[1],sum[1]];
}
const J=256;
const exps=[];let e=E;
for(let j=0;j<=J;j++){exps.push(e);e=mul(e,E2)}
function symbol(n,restored){
 const t=mul(R(BigInt(n),2n),pi),tt=square(t),ct=sinQ(2*n+2),st=sinQ(2*n);
 let val=alpha;
 for(let j=0;j<J;j++){
  const r=R(BigInt(4*j+1),2n),den=add(square(r),tt);
  const main=div(tt,mul(r,den)),cross=div(mul(exps[j],sub(mul(r,ct),mul(t,st))),den);
  val=add(val,mul(TWO,add(main,cross)));
 }
 const rJ=R(BigInt(4*J+1),2n);
 const expTail=div(mul(TWO,exps[J]),mul(rJ,sub(ONE,E2)));
 const powerTail=div(tt,R(8n*BigInt(J-1)**2n));
 val=add(val,[-expTail[1],powerTail[1]+expTail[1]]);
 val=sub(val,mul(TWO,mul(prime,cosReal(mul(t,ln2)))));
 if(restored){
  const pole=div(mul(R(4n),add(mul(R(1n,2n),mul(sinh,ct)),mul(t,mul(cosh,st)))),add(R(1n,4n),tt));
  val=add(val,pole);
 }
 return val;
}
function coeff(n){return n===0?R(1n,2n):div(sinQ(n),mul(R(BigInt(n),2n),pi))}
function proj(k){return k===0?R(1n,4n):div(sinQ(k),mul(R(BigInt(k)),pi))}
const maxN=32, coeffs={}, symbols=[{},{}], projCache={};
for(let n=-2*maxN;n<=2*maxN;n++)projCache[n]=proj(n);
for(let n=-maxN;n<=maxN;n++){coeffs[n]=coeff(n);symbols[0][n]=symbol(Math.abs(n),false);symbols[1][n]=symbol(Math.abs(n),true)}
const rows=[];
for(const N of [8,16,32])for(const restored of [false,true]){
 const d=symbols[restored?1:0],v={};let m1=ZERO,m2=ZERO;
 for(let n=-N;n<=N;n++){v[n]=mul(d[n],coeffs[n]);m1=add(m1,mul(v[n],coeffs[n]))}
 for(let n=-N;n<=N;n++)for(let j=-N;j<=N;j++)m2=add(m2,mul(mul(v[n],v[j]),projCache[n-j]));
 rows.push({N,restored,m1:m1.map(String),m2:m2.map(String)});
}
return {scale:String(Q),J,rows};
}
console.log(JSON.stringify(benchmarkFourier(),null,2));

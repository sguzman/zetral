// Reproduce with Node.js: node experiments/cme03-pole-free-moments.js
// All numerical enclosures use integer outward rounding at scale 10^18.
function benchmark(){
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
function F(d){let y=expneg(div(d,TWO)),a=div(sub(log(add(ONE,y)),log(sub(ONE,y))),TWO),b=sub(div(pi,R(4n)),atan(div(sub(ONE,y),add(ONE,y))));return add(a,b)}
const sqrt2=[1414213562373095048n,1414213562373095050n];if(sqrt2[0]**2n>2n*Q*Q||sqrt2[1]**2n<2n*Q*Q)throw Error("sqrt");
const prime=div(ln2,sqrt2),threshold=sub(ONE,ln2);
const N=2048n, h=R(1n,N);
const cache=new Map();function at(j){let k=j.toString();if(!cache.has(k))cache.set(k,F(R(j,N)));return cache.get(k)}
let first=ZERO,second=ZERO,restored1=ZERO,restored2=ZERO,uncertain=0;
const expQuarter=expneg(R(1n,4n));
const poleFactor=mul(R(4n),sub(div(ONE,expQuarter),expQuarter));
function pole(d){const z=div(sub(R(1n,2n),d),TWO),e=expneg(z);return mul(div(poleFactor,TWO),add(e,div(ONE,e)))}
for(let j=1n;j<N/2n;j++){
 const l=R(j,N),r=R(j+1n,N),a=at(j),b=at(j+1n),c=at(N-j),d=at(N-j-1n);
 let p=ZERO;if(r[1]<threshold[0])p=prime;else if(l[0]<threshold[1]){p=[0n,prime[1]];uncertain++}
 let val=sub(add(alpha,add([b[0],a[1]],[c[0],d[1]])),p);
 first=add(first,mul(h,val));second=add(second,mul(h,square(val)));
 const pl=pole(l),pr=pole(r),av=add(val,[pr[0],pl[1]]);
 restored1=add(restored1,mul(h,av));restored2=add(restored2,mul(h,square(av)));
}
const logN=mul(R(11n),ln2),B=R(1n,2n);
// For 0<d<=1/N, T1>=-6 and T1<=0.5 log(1/d).
// A1=T1+pole, 0<=pole<=3: A1>=-6 and A1<=3+0.5 log(1/d).
// Therefore integrate the majorants 6+B log(1/d) and 36+B^2 log^2(1/d);
// for A use 6+3+B log and 36+(3+B log)^2.
const logInt=add(logN,ONE),logSqInt=add(add(square(logN),mul(TWO,logN)),TWO);
const tail1=mul(h,add(R(6n),mul(B,logInt)));
const tail2=mul(h,add(R(36n),mul(square(B),logSqInt)));
const aTail1=mul(h,add(R(9n),mul(B,logInt)));
const aTail2=mul(h,add(R(45n),add(mul(R(3n),logInt),mul(square(B),logSqInt))));
first=mul(TWO,add(first,[-tail1[1],tail1[1]]));second=mul(TWO,add(second,[0n,tail2[1]]));
restored1=mul(TWO,add(restored1,[-aTail1[1],aTail1[1]]));restored2=mul(TWO,add(restored2,[0n,aTail2[1]]));
let out={scale:Q.toString(),N:N.toString(),alpha:alpha.map(String),prime:prime.map(String),threshold:threshold.map(String),uncertain,m1:first.map(String),m2:second.map(String),A_m1:restored1.map(String),A_m2:restored2.map(String),tail1:tail1.map(String),tail2:tail2.map(String),A_tail1:aTail1.map(String),A_tail2:aTail2.map(String),poleMax:pole(ZERO).map(String)};
if(first[0]>first[1]||second[0]>second[1]||second[0]<0n)throw Error("invalid");return out;
}
console.log(JSON.stringify(benchmark(),null,2));

// Minimal replay of the source's 10^66 interval primitives and expneg/expAny
// for the LXIII h=239/100 denominator and J=4096 exponential tail.
const Q=10n**66n;
const floor=(n,d)=>{if(d<0n){n=-n;d=-d}return n>=0n?n/d:-((-n+d-1n)/d)};
const ceil=(n,d)=>-floor(-n,d);
const R=(n,d=1n)=>[floor(n*Q,d),ceil(n*Q,d)];
const add=(a,b)=>[a[0]+b[0],a[1]+b[1]],neg=a=>[-a[1],-a[0]],sub=(a,b)=>add(a,neg(b));
const min=a=>a.reduce((x,y)=>x<y?x:y),max=a=>a.reduce((x,y)=>x>y?x:y);
const mul=(a,b)=>{if(a[0]>=0n&&b[0]>=0n)return[floor(a[0]*b[0],Q),ceil(a[1]*b[1],Q)];if(a[1]<=0n&&b[0]>=0n)return[floor(a[0]*b[1],Q),ceil(a[1]*b[0],Q)];if(b[1]<=0n&&a[0]>=0n)return[floor(a[1]*b[0],Q),ceil(a[0]*b[1],Q)];if(a[1]<=0n&&b[1]<=0n)return[floor(a[1]*b[1],Q),ceil(a[0]*b[0],Q)];const p=a.flatMap(x=>b.map(y=>x*y));return[floor(min(p),Q),ceil(max(p),Q)]};
const div=(a,b)=>{if(b[0]>0n&&a[0]>=0n)return[floor(a[0]*Q,b[1]),ceil(a[1]*Q,b[0])];if(b[0]>0n&&a[1]<=0n)return[floor(a[0]*Q,b[0]),ceil(a[1]*Q,b[1])];if(b[0]<=0n&&b[1]>=0n)throw Error('zero divisor');const p=a.flatMap(x=>b.map(y=>[floor(x*Q,y),ceil(x*Q,y)]));return[min(p.map(x=>x[0])),max(p.map(x=>x[1]))]};
const square=a=>{if(a[0]>=0n)return mul(a,a);if(a[1]<=0n)return mul(neg(a),neg(a));return[0n,ceil(max([a[0]*a[0],a[1]*a[1]]),Q)]};
const ONE=R(1n),TWO=R(2n);
function expneg(x){let s=ONE,p=ONE;for(let j=1;j<=50;j++){p=div(mul(p,x),R(BigInt(j)));s=add(s,j%2?neg(p):p)}const next=div(mul(p,x),R(51n));return[s[0]-next[1],s[1]]}
function expAny(x){let k=0;while(x[1]>Q/2n){x=div(x,TWO);k++}let e=expneg(x);for(let i=0;i<k;i++)e=square(e);return[max([0n,e[0]]),min([Q,e[1]])]}
const h=R(239n,100n),q=expAny(mul(TWO,h)),den=sub(ONE,q),rJ=R(4n*4096n+1n,2n);
const Et=div(expAny(mul(rJ,h)),mul(den,square(rJ)));
if(den[0]<=0n)throw Error('computed denominator lower bound is not positive');
console.log(JSON.stringify({Q:String(Q),expMinusTwiceH:q.map(String),oneMinusExp:[String(den[0]),String(den[1])],Et:Et.map(String)}));

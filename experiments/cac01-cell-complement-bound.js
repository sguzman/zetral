// Reproduce with Node.js: node experiments/cac01-cell-complement-bound.js
function complement(){
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
const t0=div(sub(sqrt2,ONE),TWO);
const minimum=add(add(alpha,sub(TWO,sqrt2)),log(div(mul(TWO,pi),t0)));
if(minimum[0]<=R(-3n,2n)[1])throw Error("digamma lower constant");
const prime=div(ln2,sqrt2),e=expneg(R(1n,2n)),cnorm=add(div(sub(div(ONE,e),e),TWO),R(1n,2n));
const rows=[];
for(const m of [16,24,32,64]){
 const even=sub(sub(log(R(BigInt(m),2n)),R(3n,2n)),mul(TWO,prime));
 const pole=div(cnorm,mul(R(BigInt(2*m*m)),square(pi)));
 const odd=sub(even,pole);
 rows.push({m,even:even.map(String),full:odd.map(String),positive:odd[0]>0n});
}
if(!rows.find(x=>x.m===24).positive)throw Error("24 cell complement");
return {scale:String(Q),lowFrequencyMinimum:minimum.map(String),rows};
}
console.log(JSON.stringify(complement(),null,2));

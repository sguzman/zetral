// Outward-rounded BigInt enclosures for the FBC02 scalar full-rate entries.
const Q=10n**18n, floor=(n,d)=>{if(d<0n){n=-n;d=-d}return n>=0n?n/d:-((-n+d-1n)/d)},ceil=(n,d)=>-floor(-n,d);
const R=(n,d=1n)=>[floor(n*Q,d),ceil(n*Q,d)],add=(a,b)=>[a[0]+b[0],a[1]+b[1]],neg=a=>[-a[1],-a[0]],sub=(a,b)=>add(a,neg(b));
const min=a=>a.reduce((x,y)=>x<y?x:y),max=a=>a.reduce((x,y)=>x>y?x:y);
const mul=(a,b)=>{const p=a.flatMap(x=>b.map(y=>x*y));return[floor(min(p),Q),ceil(max(p),Q)]};
const div=(a,b)=>{if(b[0]<=0n&&b[1]>=0n)throw Error('zero divisor');const p=a.flatMap(x=>b.map(y=>[floor(x*Q,y),ceil(x*Q,y)]));return[min(p.map(x=>x[0])),max(p.map(x=>x[1]))]};
const sqr=a=>{if(a[0]>=0n)return mul(a,a);if(a[1]<=0n)return mul(neg(a),neg(a));return[0n,ceil(max([a[0]*a[0],a[1]*a[1]]),Q)]};
const O=R(1n),T=R(2n),Z=R(0n);
function atanSmall(x){let p=x,s=Z,x2=mul(x,x);for(let j=0;j<40;j++){const v=div(p,R(BigInt(2*j+1)));s=add(s,j%2?neg(v):v);p=mul(p,x2)}const next=div(p,R(81n));return[s[0],s[1]+next[1]]}
const pi=sub(mul(R(16n),atanSmall(R(1n,5n))),mul(R(4n),atanSmall(R(1n,239n))));
function expneg(x){let p=O,s=O;for(let j=1;j<=20;j++){p=div(mul(p,x),R(BigInt(j)));s=add(s,j%2?neg(p):p)}const next=div(mul(p,x),R(21n));return[s[0]-next[1],s[1]]}
function expAny(x){let k=0;while(x[1]>Q/2n){x=div(x,T);k++}let e=expneg(x);for(let i=0;i<k;i++)e=sqr(e);return[e[0]<0n?0n:e[0],e[1]>Q?Q:e[1]]}
function atanPositive(x){if(x[0]<0n)throw Error('atan domain');if(x[1]<=Q)return atanSmall(x);return sub(div(pi,T),atanSmall(div(O,x)))}
const h=R(4n,5n),h2=sqr(h),J=4096,rJ=R(4n*BigInt(J)+1n,2n),exp2h=expAny(mul(T,h)),oneMinusExp2h=sub(O,exp2h);
const sqrt2=[1414213562373095048n,1414213562373095050n];if(sqrt2[0]**2n>2n*Q*Q||sqrt2[1]**2n<2n*Q*Q)throw Error('sqrt2');
function ratesumF(x,eta){let partial=Z;for(let j=0;j<J;j++){const r=R(BigInt(4*j+1),2n),q=expAny(mul(r,h)),w=sub(O,eta===1?q:neg(q));partial=add(partial,div(w,add(sqr(r),x)))}
 let f0tail,expTail;
 if(x[1]===0n){f0tail=[div(O,mul(T,rJ))[0],add(div(O,mul(T,rJ)),div(O,sqr(rJ)))[1]]}
 else {const om=[sqrt2[0],sqrt2[1]]; // omega is supplied through x; sqrt interval from omega^2 below
   const omega=sqrtI(x), z=div(omega,rJ), ar=atanPositive(z), integ=div(ar,mul(T,omega));
   f0tail=[integ[0],add(integ,div(O,add(sqr(rJ),x)))[1]];
 }
 const qJ=expAny(mul(rJ,h));expTail=div(qJ,mul(add(sqr(rJ),x),oneMinusExp2h));
 const tail=eta===1?[f0tail[0]-expTail[1],f0tail[1]]:[f0tail[0],f0tail[1]+expTail[1]];
 return {value:add(partial,tail),tail,partial};}
function isqrt(n){if(n<0n)throw Error('sqrt negative');if(n<2n)return n;let x=1n<<BigInt((n.toString(2).length+1)>>1);for(;;){const y=(x+n/x)>>1n;if(y>=x)return x;x=y}}
function sqrtI(a){const lo=isqrt(a[0]*Q);let hi=isqrt(a[1]*Q);if(hi*hi<a[1]*Q)hi++;return[lo,hi]}
function diagTail(x){const omega=sqrtI(x);if(rJ[0]<=omega[1])throw Error('rate cutoff below frequency');let halfIntegral;
 if(x[1]===0n)halfIntegral=div(O,mul(T,rJ));
 else {const ar=atanPositive(div(omega,rJ));const a=div(ar,mul(R(4n),omega));const b=div(rJ,mul(R(4n),add(sqr(rJ),x)));halfIntegral=add(a,b)}
 const g0=div(sqr(rJ),sqr(add(sqr(rJ),x)));const base=[halfIntegral[0],add(halfIntegral,g0)[1]];
 const qJ=expAny(mul(rJ,h));const expUpper=div(qJ,mul(add(sqr(rJ),x),oneMinusExp2h));return {base,tail:eta=>eta===1?[base[0]-expUpper[1],base[1]]:[base[0],base[1]+expUpper[1]]};}
// sqrt interval for omega=sqrt(x), including exact endpoint verification.
function sqrtI(a){const lo=isqrt(a[0]*Q);let hi=isqrt(a[1]*Q);if(hi*hi<a[1]*Q)hi++;return[lo,hi]}
const modes=[0,1,4,16,64,256,512], Fs={};
for(const eta of [1,-1])for(const n of modes){const omega=div(mul(R(BigInt(n)),pi),h),x=sqr(omega),f=ratesumF(x,eta);Fs[`${eta}:${n}`]={F:f.value.map(String),Ftail:f.tail.map(String)};}
const diagonals={};for(const eta of [1,-1])for(const n of modes){const omega=div(mul(R(BigInt(n)),pi),h),x=sqr(omega),a=diagTail(x),tail=a.tail(eta);let partial=Z;for(let j=0;j<J;j++){const r=R(BigInt(4*j+1),2n),q=expAny(mul(r,h)),w=sub(O,eta===1?q:neg(q)),term=div(mul(w,sqr(r)),sqr(add(sqr(r),x)));partial=add(partial,term)}const nu=n===0?O:sqrt2,scale=div(mul(R(2n),sqr(nu)),h);diagonals[`${eta}:${n}`]=mul(scale,add(partial,tail)).map(String)}
const pairs=[[0,2],[0,8],[1,5],[2,10],[8,32],[64,256]];const offdiagonal={};
for(const eta of [1,-1])for(const [n,k] of pairs){if(n%2!==k%2)continue;const xn=sqr(div(mul(R(BigInt(n)),pi),h)),xk=sqr(div(mul(R(BigInt(k)),pi),h));const fn=ratesumF(xn,eta).value,fk=ratesumF(xk,eta).value;const ratio=div(sub(mul(xn,fn),mul(xk,fk)),sub(xn,xk));const nun=n===0?O:sqrt2,nuk=k===0?O:sqrt2;const entry=mul(div(mul(R(2n),mul(nun,nuk)),h),ratio);offdiagonal[`${eta}:${n},${k}`]=entry.map(String)}
console.log(JSON.stringify({scale:String(Q),h:'4/5',J,rJ:rJ.map(String),pi:pi.map(String),Fs,diagonalEntries:diagonals,offdiagonalEntries:offdiagonal},null,2));

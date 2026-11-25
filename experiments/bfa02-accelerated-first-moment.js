// Reproduce with Node.js: node experiments/bfa02-accelerated-first-moment.js
function accelerated(){
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

// Finite-cutoff intervals are from the actual executed CME03 periodic benchmark.
// Decimal endpoints are integers over Q. All correction operations round outward.
const rows=[
[8,false,"-2044507611349689734","-2044485013252720483"],
[8,true,"-3486622954787174","-3464024857817669"],
[16,false,"-2011804710142091674","-2011766544920273217"],
[16,true,"30078662151846886","30116827373665597"],
[32,false,"-1992826122830055322","-1992757104493327059"],
[32,true,"49172531293172340","49241549629900859"]];
const continuum={false:[-1967432044961763352n,-1942857542453534340n],true:[69587316692976798n,100083067360284392n]};
const pref=div(R(4n),square(pi));
const output=[];
for(const [N,restored,lo,hi] of rows){
 const n=R(BigInt(N)),ln=log(R(BigInt(N),4n));
 const corr=div(mul(pref,add(ln,ONE)),n);
 const error=div(mul(pref,add(add(mul(R(3n),ln),R(14n)),div(ONE,n))),square(n));
 const v=add(add([BigInt(lo),BigInt(hi)],corr),[-error[1],error[1]]);
 const truth=continuum[restored],intersection=[max([v[0],truth[0]]),min([v[1],truth[1]])];
 if(intersection[0]>intersection[1])throw Error("disjoint certificates");
 output.push({N,restored,correction:corr.map(String),errorUpper:String(error[1]),accelerated:v.map(String),intersection:intersection.map(String),strictPositive:v[0]>0n});
}
if(!output.find(r=>r.N===16&&r.restored).strictPositive||!output.find(r=>r.N===32&&r.restored).strictPositive)throw Error("expected strict sign");
return {scale:String(Q),rows:output};
}
console.log(JSON.stringify(accelerated(),null,2));

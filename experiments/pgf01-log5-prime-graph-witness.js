// Reproduce: node experiments/pgf01-log5-prime-graph-witness.js
function primeGraphWitness(){
const Q=10n**24n, floor=(n,d)=>{if(d<0n){n=-n;d=-d}return n>=0n?n/d:-((-n+d-1n)/d)},ceil=(n,d)=>-floor(-n,d);
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
let H=ZERO;for(let j=1n;j<=4096n;j++)H=add(H,R(1n,j));
const gamma=sub(add(sub(sub(H,mul(R(12n),ln2)),R(1n,8192n)),R(1n,12n*4096n**2n)),[0n,R(1n,120n*4096n**4n)[1]]);
const alpha=neg(add(add(gamma,div(pi,TWO)),add(mul(R(3n),ln2),log(pi))));

const sqrt2=[1414213562373095048801688n,1414213562373095048801690n],sqrt3=[1732050807568877293527446n,1732050807568877293527447n];
for(const [n,a] of [[2n,sqrt2],[3n,sqrt3]])if(a[0]**2n>n*Q*Q||a[1]**2n<n*Q*Q)throw Error("sqrt");
const exactWeights=[div(ln2,sqrt2),div(log(R(3n)),sqrt3),div(ln2,TWO)];
const upper=[491n,635n,347n];
for(let i=0;i<3;i++)if(exactWeights[i][1]>R(upper[i],1000n)[0])throw Error("prime weight upper");
const lt=(a,b,c,d)=>{if(a*d>=c*b)throw Error("fiber ordering");};
lt(5n,4n,4n,3n);lt(4n,3n,40n,27n);lt(40n,27n,3n,2n);
lt(9n,8n,5n,4n);lt(5n,3n,27n,16n);lt(5n,4n,3n,2n);
const shapes=[
 {ms:[2,2],wrap:[1],w:[1000000,544218,544218,1000000]},
 {ms:[2,3,2],wrap:[2,1],w:[655562,274178,1000000,836466,1000000,274178,655562]},
 {ms:[2,3,2,3,2],wrap:[2,1,2,1],w:[536716,215850,1000000,750049,865019,869999,869999,865019,750049,1000000,215850,536716]}
];
const rows=[];
for(const {ms,wrap,w} of shapes){
 const off=ms.map((_,i)=>ms.slice(0,i).reduce((a,b)=>a+b,0)),N=ms.reduce((a,b)=>a+b,0);
 if(w.length!==N||w.some(x=>x<=0))throw Error("weight vector");
 const A=Array.from({length:N},()=>Array(N).fill(0n));
 function edge(i,j,v){if(i===j||A[i][j]!==0n)throw Error("invalid edge");A[i][j]=A[j][i]=v;}
 for(let i=0;i<ms.length;i++){
  for(let j=0;j<ms[i]-1;j++)edge(off[i]+j,off[i]+j+1,upper[0]);
  if(ms[i]===3)edge(off[i],off[i]+2,upper[2]);
  if(i<wrap.length)edge(off[i],off[i+1]+wrap[i],upper[1]);
 }
 const sum=A.map(r=>r.reduce((s,a,j)=>s+a*BigInt(w[j]),0n));
 const slack=sum.map((a,i)=>1221n*BigInt(w[i])-a);
 if(slack.some(x=>x<0n))throw Error("weighted Schur bound");
 rows.push({chainSizes:ms,wrap,dimension:N,vector:w,rowNumerators:sum.map(String),slack:slack.map(String)});
}
return {scale:String(Q),primeWeightIntervals:exactWeights.map(a=>a.map(String)),weightUpperNumerators:upper.map(String),weightDenominator:"1000",normUpper:"1221/1000",rows};
}
console.log(JSON.stringify(primeGraphWitness(),null,2));

// Reproduce with Node.js: node experiments/bsl03-two-cell-parity-moments.js
function parityMoments(){
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


const M=2048,N=32,degree=30;
const absup=a=>max([a[1],-a[0]]);
const widen=(a,b)=>[a[0]-b,a[1]+b];
const sqrt2=[1414213562373095048n,1414213562373095050n];
if(sqrt2[0]**2n>2n*Q*Q||sqrt2[1]**2n<2n*Q*Q)throw Error("sqrt2");
const prime=div(ln2,sqrt2),threshold=sub(ONE,ln2),C=neg(add(add(gamma,ln2),log(pi)));
const sinQ=n=>[ZERO,div(sqrt2,TWO),ONE,div(sqrt2,TWO),ZERO,neg(div(sqrt2,TWO)),neg(ONE),neg(div(sqrt2,TWO))][((n%8)+8)%8];
// cos(pi*k/(4*M)), exact integer symmetry reduction to [0,pi/2].
const cosCache=new Map();
function cosGrid(k){
 k=((k%(8*M))+8*M)%(8*M);if(k>4*M)k=8*M-k;
 let sign=1;if(k>2*M){k=4*M-k;sign=-1}
 if(k===2*M)return ZERO;
 if(!cosCache.has(k)){let x=mul(pi,R(BigInt(k),BigInt(4*M))),xx=square(x),p=ONE,s=ONE;
 for(let j=1;j<=16;j++){p=div(mul(p,xx),R(BigInt((2*j-1)*(2*j))));s=add(s,j%2?neg(p):p)}
 const tail=div(mul(p,xx),R(33n*34n));cosCache.set(k,[s[0]-tail[1],s[1]])}
 let c=cosCache.get(k);return sign===1?c:neg(c);
}
function fact(n){let f=1n;for(let j=2n;j<=BigInt(n);j++)f*=j;return f}
const g=[ONE];for(let m=1;m<=degree+1;m++){
 let v=R(1n,2n**BigInt(m)*fact(m));
 for(let k=2;k<=m;k+=2)v=sub(v,mul(g[m-k],R(1n,fact(k+1))));
 g.push(v);
}
const jcoef=g.slice(1).map(x=>div(x,TWO)),jerr=R(5n,2n**BigInt(degree));
function jval(x){let y=ZERO;for(let k=degree;k>=0;k--)y=add(jcoef[k],mul(x,y));return widen(y,jerr[1])}
let jprime=R(5n*BigInt(degree+2),2n**BigInt(degree));
for(let m=1;m<=degree;m++)jprime=add(jprime,mul(R(BigInt(m)),[0n,absup(jcoef[m])]));
const Jbound=mul(TWO,add([0n,absup(jval(ONE))],jprime));
if(Jbound[1]>4n*Q)throw Error('kernel bound');
const samples=Array.from({length:M},(_,i)=>jval(R(BigInt(2*i+1),BigInt(2*M))));
const coeff=[],symbols=[],a=[];
for(let n=0;n<=N;n++){
 let t=mul(pi,R(BigInt(n),2n)),sum=ZERO;
 for(let i=0;i<M;i++)sum=add(sum,mul(samples[i],cosGrid(n*(2*i+1))));
 const derivative=add(add(R(20n),mul(TWO,t)),square(t));
 const err=div(derivative,R(BigInt(12*M*M)));
 const rr=widen(mul(R(-2n,BigInt(M)),sum),err[1]);symbols.push(rr);
 coeff[n]=n===0?R(1n,2n):div(sinQ(n),t);
 a[n]=mul(rr,coeff[n]); // action polynomial: a0/2 + sum_{n>=1} a_n cos(t_n*x)
}
const ep=expneg(R(1n,4n)),poleFactor=mul(R(4n),sub(div(ONE,ep),ep));
function pole(d){const z=div(sub(R(1n,2n),d),TWO),e=expneg(z);return mul(div(poleFactor,TWO),add(e,div(ONE,e)))}
function primitive(i){
 if(i===0)return [ZERO,ZERO];
 let d=R(BigInt(i),BigInt(M)),l=neg(log(d));
 return [mul(div(d,TWO),add(l,ONE)),mul(div(d,R(4n)),add(add(square(l),mul(TWO,l)),TWO))];
}
const moments=Array.from({length:M/2+1},(_,i)=>primitive(i));
const h=R(1n,BigInt(M));
function isqrt(x){if(x<0n)throw Error("negative sqrt");if(x<2n)return x;let y=1n<<BigInt(Math.ceil(x.toString(2).length/2));for(;;){let z=(y+x/y)/2n;if(z>=y)return y;y=z}}
function sqrtI(a){let lo=max([0n,a[0]]),hi=max([0n,a[1]]),l=isqrt(lo*Q),u=isqrt(hi*Q);return[l,u*u===hi*Q?u:u+1n]}

const oddA=[ZERO];
for(let n=1;n<=N;n++)oddA[n]=mul(symbols[n],div(sub(ONE,cosGrid(n*M)),mul(pi,R(BigInt(n),2n))));
const poleOddFactor=mul(R(8n),sub(div(add(ep,div(ONE,ep)),TWO),ONE));
function poleOdd(d){
 const z=div(sub(R(1n,2n),d),TWO),e=expneg(z);
 return neg(mul(div(poleOddFactor,TWO),sub(div(ONE,e),e)));
}
function primLog(i,factor){
 if(i===0)return [ZERO,ZERO];
 let d=R(BigInt(i),BigInt(M)),l=neg(log(d));
 return [mul(mul(d,factor),add(l,ONE)),
         mul(mul(d,square(factor)),add(add(square(l),mul(TWO,l)),TWO))];
}
const oddMoments=Array.from({length:M/4+1},(_,i)=>primLog(i,ONE));
const rows=[];
for(const odd of [false,true]){
 const amplitudes=odd?oddA:a;
 let lips=ZERO;for(let n=1;n<=N;n++)lips=add(lips,mul([0n,absup(amplitudes[n])],mul(pi,R(BigInt(n),2n))));
 const radius=mul(lips,div(h,TWO))[1];
 let s=[ZERO,ZERO],m1=[ZERO,ZERO],uncertain=0;
 for(let i=0;i<M/2;i++){
  const l=R(BigInt(i),BigInt(M)),r=R(BigInt(i+1),BigInt(M));
  let trig=odd?ZERO:div(a[0],TWO);
  for(let n=1;n<=N;n++){
   const k=n*(2*i+1-M);
   trig=add(trig,mul(amplitudes[n],odd?neg(cosGrid(2*M-k)):cosGrid(k)));
  }
  trig=widen(trig,radius);
  let p=ZERO;if(r[1]<threshold[0])p=prime;else if(l[0]<threshold[1]){p=[0n,prime[1]];uncertain++}
  const lr=neg(div(log(sub(ONE,r)),TWO)),ll=neg(div(log(sub(ONE,l)),TWO));
  let base,pl,pr,L1,L2;
  if(!odd){
   base=sub(add(add(C,[ll[0],lr[1]]),trig),p);
   pl=pole(l);pr=pole(r);
   L1=sub(moments[i+1][0],moments[i][0]);L2=sub(moments[i+1][1],moments[i][1]);
  }else{
   base=add(add(sub(C,[ll[0],lr[1]]),trig),p);
   // On d<1/4 integrate 0.5 log(1/d) exactly. On d>=1/4
   // integrate log(1/(1/2-d)) exactly, reversing the cell coordinate.
   if(i<M/4){
    const regL=neg(log(sub(R(1n,2n),l))),regR=neg(log(sub(R(1n,2n),r)));
    base=add(base,[regL[0],regR[1]]);
    L1=sub(moments[i+1][0],moments[i][0]);L2=sub(moments[i+1][1],moments[i][1]);
   }else{
    const regL=neg(div(log(l),TWO)),regR=neg(div(log(r),TWO));
    base=add(base,[regR[0],regL[1]]);
    let j=M/2-i;
    L1=sub(oddMoments[j][0],oddMoments[j-1][0]);L2=sub(oddMoments[j][1],oddMoments[j-1][1]);
   }
   // odd pole is increasing on the left half.
   pl=poleOdd(r);pr=poleOdd(l);
  }
  for(let b=0;b<2;b++){
   let v=b?add(base,[pr[0],pl[1]]):base;
   m1[b]=add(m1[b],add(L1,mul(h,v)));
   s[b]=add(s[b],add(add(L2,mul(TWO,mul(v,L1))),mul(h,square(v))));
  }
 }
 const eps=sqrtI(div(mul(R(odd?128n:32n),square(Jbound)),mul(R(BigInt(3*N**3)),square(square(pi)))))[1];
 for(let b=0;b<2;b++){
  let first=widen(mul(TWO,m1[b]),eps),lifted=mul(TWO,s[b]),norm=sqrtI(lifted);
  let second=square([max([0n,norm[0]-eps]),norm[1]+eps]);
  // Choose exact rational midpoint lambda of first enclosure and enclose its true residual.
  const lambda=(first[0]+first[1])/2n,L=[lambda,lambda];
  const res2=add(sub(second,mul(TWO,mul(L,first))),square(L));
  const residual=sqrtI(res2);
  rows.push({parity:odd?"odd":"even",restored:!!b,first:first.map(String),second:second.map(String),
             lambda:String(lambda),residualUpper:String(residual[1]),epsilonUpper:String(eps),uncertain});
 }
}
return {scale:String(Q),M,N,degree,Jupper:String(Jbound[1]),rows};
}
console.log(JSON.stringify(parityMoments(),null,2));

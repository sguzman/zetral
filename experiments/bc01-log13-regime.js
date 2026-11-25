// BC01: dedicated post-log(11) guarded generator. Inherited LPA01 interval arithmetic; eight shifts.
function rationalElevenWitness(num=111n,den=10n){
if(den<=0n||num<=11n*den||num>=13n*den)throw Error('window outside eleven regime');
const N=13n;
const Q=10n**30n, floor=(n,d)=>{if(d<0n){n=-n;d=-d}return n>=0n?n/d:-((-n+d-1n)/d)},ceil=(n,d)=>-floor(-n,d);
const R=(n,d=1n)=>[floor(n*Q,d),ceil(n*Q,d)], add=(a,b)=>[a[0]+b[0],a[1]+b[1]],neg=a=>[-a[1],-a[0]],sub=(a,b)=>add(a,neg(b));
const min=a=>a.reduce((x,y)=>x<y?x:y),max=a=>a.reduce((x,y)=>x>y?x:y);
const mul=(a,b)=>{let p=a.flatMap(x=>b.map(y=>x*y));return[floor(min(p),Q),ceil(max(p),Q)]};
const div=(a,b)=>{if(b[0]<=0n&&b[1]>=0n)throw Error("zero divisor");let pairs=a.flatMap(x=>b.map(y=>[floor(x*Q,y),ceil(x*Q,y)]));return[min(pairs.map(x=>x[0])),max(pairs.map(x=>x[1]))]};
const square=a=>{if(a[0]>=0n)return mul(a,a);if(a[1]<=0n)return mul(neg(a),neg(a));return[0n,ceil(max([a[0]*a[0],a[1]*a[1]]),Q)]};
const ONE=R(1n),ZERO=R(0n),TWO=R(2n);
function logUnit(x){let r=div(sub(x,ONE),add(x,ONE)),p=r,r2=mul(r,r),s=ZERO;for(let j=0;j<40;j++){s=add(s,div(p,R(BigInt(2*j+1))));p=mul(p,r2)}const tail=div(mul(TWO,p),mul(R(81n),sub(ONE,r2)));return add(mul(TWO,s),[0n,max([0n,tail[1]])])}
const ln2=logUnit(TWO);
function logPoint(x){let a=[x,x],k=0;while(a[0]<Q){a=mul(a,TWO);k--}while(a[0]>=2n*Q){a=div(a,TWO);k++}if(a[0]<Q||a[1]>2n*Q+2n)throw Error("log scaling");return add(logUnit(a),mul(R(BigInt(k)),ln2))}
function log(a){if(a[0]<=0n)throw Error("log domain");return[logPoint(a[0])[0],logPoint(a[1])[1]]}

function isqrt(x){if(x<2n)return x;let y=1n<<BigInt(Math.ceil(x.toString(2).length/2));for(;;){let z=(y+x/y)/2n;if(z>=y)return y;y=z}}
const root=n=>{let l=isqrt(n*Q*Q);if(l*l>n*Q*Q||(l+1n)**2n<n*Q*Q)throw Error("sqrt");return[l,l+1n]};
const shifts=[2n,3n,4n,5n,7n,8n,9n,11n],weights=[491n,635n,347n,720n,736n,246n,367n,724n];
const actual=[div(ln2,root(2n)),div(log(R(3n)),root(3n)),div(ln2,TWO),div(log(R(5n)),root(5n))];
actual.push(div(log(R(7n)),root(7n)),div(ln2,root(8n)));
actual.push(div(log(R(3n)),R(3n)),div(log(R(11n)),root(11n)));
for(let i=0;i<shifts.length;i++)if(actual[i][1]>R(weights[i],1000n)[0])throw Error("weight upper");

const gcd=(a,b)=>{while(b){const t=a%b;a=b;b=t}return a};
const rat=(a,b=1n)=>{const d=gcd(a,b);return[a/d,b/d]};
const cmp=(a,b)=>a[0]*b[1]<b[0]*a[1]?-1:a[0]*b[1]>b[0]*a[1]?1:0;
const key=a=>a.join("/");
const lo=rat(1n),hi=rat(num,den);
const times=(a,m)=>rat(a[0]*m,a[1]),over=(a,m)=>rat(a[0],a[1]*m);
function midrat(a,b){return rat(a[0]*b[1]+b[0]*a[1],2n*a[1]*b[1])}
function value(part,x){
 if(cmp(x,lo)<=0||cmp(x,hi)>=0)return 0n;
 let a=0,b=part.points.length-1;
 while(b-a>1){let m=(a+b)>>1;if(cmp(x,part.points[m])<0)b=m;else a=m}
 return part.values[a];
}
function refine(part){
 const map=new Map(part.points.map(x=>[key(x),x]));
 for(const x of part.points)for(const m of shifts)for(const y of [times(x,m),over(x,m)])if(cmp(y,lo)>0&&cmp(y,hi)<0)map.set(key(y),y);
 const points=[...map.values()].sort(cmp),cells=[];
 for(let i=0;i<points.length-1;i++){
  const x=midrat(points[i],points[i+1]),w=value(part,x);
  if(w<=0n)throw Error("nonpositive witness");
  const p=shifts.reduce((s,m,j)=>s+weights[j]*(value(part,times(x,m))+value(part,over(x,m))),0n);
  cells.push({w,p});
 }
 return {points,cells};
}
function verify(part){
 const {points,cells}=refine(part);
 let worst=0n,worstIndex=0;
 for(let i=0;i<cells.length;i++){
  const {w,p}=cells[i],r=(p+w-1n)/w;
  if(r>worst){worst=r;worstIndex=i;}
 }
 for(const {w,p} of cells)if(p>worst*w)throw Error("witness inequality");
 return {bound:worst,cells:cells.length,worstCell:[key(points[worstIndex]),key(points[worstIndex+1])],data:{points,cells}};
}
const scale=1000000000n;
let part={points:[lo,hi],values:[scale]},best=null,history=[];
for(let step=0;step<=16;step++){
 const v=verify(part);
 history.push({step,cells:part.values.length,checked:v.cells,boundNumerator:String(v.bound)});
 if(!best||v.bound<best.bound)best={step,bound:v.bound,part,checked:v.cells,worstCell:v.worstCell};
 if(step===16)break;
 const raw=v.data.cells.map(({w,p})=>p+1000n*w),mx=max(raw);
 const vals=raw.map(x=>max([1n,(scale*x+mx/2n)/mx]));
 const points=[v.data.points[0]],values=[];
 for(let i=0;i<vals.length;i++){if(i===0||vals[i]!==vals[i-1]){if(i>0)points.push(v.data.points[i]);values.push(vals[i])}}
 points.push(hi);part={points,values};
}
const check=verify(best.part);
if(check.bound!==best.bound||check.cells!==best.checked)throw Error("replay");
return {window:key(hi),weightDenominator:"1000",weightNumerators:weights.map(String),actualWeightIntervals:actual.map(a=>a.map(String)),intervalScale:String(Q),history,best:{step:best.step,boundNumerator:String(best.bound),checked:best.checked,worstCell:best.worstCell,points:best.part.points.map(key),values:best.part.values.map(String)}};
}

// PPW03: tenth-order rate tails, 10^54 interval lattice, coupled primitive truncation lengths.


function primePowerCertificate(parities=[false,true],params={hn:12n,hd:5n,J:4096,M:8192,T:768,lowCount:45}){
const Q=10n**66n, floor=(n,d)=>{if(d<0n){n=-n;d=-d}return n>=0n?n/d:-((-n+d-1n)/d)},ceil=(n,d)=>-floor(-n,d);
const R=(n,d=1n)=>[floor(n*Q,d),ceil(n*Q,d)], add=(a,b)=>[a[0]+b[0],a[1]+b[1]],neg=a=>[-a[1],-a[0]],sub=(a,b)=>add(a,neg(b));
const min=a=>a.reduce((x,y)=>x<y?x:y),max=a=>a.reduce((x,y)=>x>y?x:y);
const mul=(a,b)=>{if(a[0]>=0n&&b[0]>=0n)return[floor(a[0]*b[0],Q),ceil(a[1]*b[1],Q)];if(a[1]<=0n&&b[0]>=0n)return[floor(a[0]*b[1],Q),ceil(a[1]*b[0],Q)];if(b[1]<=0n&&a[0]>=0n)return[floor(a[1]*b[0],Q),ceil(a[0]*b[1],Q)];if(a[1]<=0n&&b[1]<=0n)return[floor(a[1]*b[1],Q),ceil(a[0]*b[0],Q)];let p=a.flatMap(x=>b.map(y=>x*y));return[floor(min(p),Q),ceil(max(p),Q)]};
const div=(a,b)=>{if(b[0]>0n&&a[0]>=0n)return[floor(a[0]*Q,b[1]),ceil(a[1]*Q,b[0])];if(b[0]>0n&&a[1]<=0n)return[floor(a[0]*Q,b[0]),ceil(a[1]*Q,b[1])];if(b[0]<=0n&&b[1]>=0n)throw Error("zero divisor");let pairs=a.flatMap(x=>b.map(y=>[floor(x*Q,y),ceil(x*Q,y)]));return[min(pairs.map(x=>x[0])),max(pairs.map(x=>x[1]))]};
const square=a=>{if(a[0]>=0n)return mul(a,a);if(a[1]<=0n)return mul(neg(a),neg(a));return[0n,ceil(max([a[0]*a[0],a[1]*a[1]]),Q)]};
const ONE=R(1n),ZERO=R(0n),TWO=R(2n);
function logUnit(x){let r=div(sub(x,ONE),add(x,ONE)),p=r,r2=mul(r,r),s=ZERO;for(let j=0;j<80;j++){s=add(s,div(p,R(BigInt(2*j+1))));p=mul(p,r2)}const tail=div(mul(TWO,p),mul(R(161n),sub(ONE,r2)));return add(mul(TWO,s),[0n,max([0n,tail[1]])])}
const ln2=logUnit(TWO);
function logPoint(x){let a=[x,x],k=0;while(a[0]<Q){a=mul(a,TWO);k--}while(a[0]>=2n*Q){a=div(a,TWO);k++}if(a[0]<Q||a[1]>2n*Q+2n)throw Error("log scaling");return add(logUnit(a),mul(R(BigInt(k)),ln2))}
function log(a){if(a[0]<=0n)throw Error("log domain");return[logPoint(a[0])[0],logPoint(a[1])[1]]}
function atan(a){let p=a,a2=mul(a,a),s=ZERO;for(let j=0;j<80;j++){let term=div(p,R(BigInt(2*j+1)));s=add(s,j%2?neg(term):term);p=mul(p,a2)}let next=div(p,R(161n));return[s[0],s[1]+next[1]]}
const pi=sub(mul(R(16n),atan(R(1n,5n))),mul(R(4n),atan(R(1n,239n))));
let H=ZERO;for(let j=1n;j<=8192n;j++)H=add(H,R(1n,j));
const N=8192n;
let gamma=sub(sub(H,mul(R(13n),ln2)),R(1n,2n*N));
for(const [k,num,den] of [[2n,1n,12n],[4n,-1n,120n],[6n,1n,252n],[8n,-1n,240n],[10n,1n,132n],[12n,-691n,32760n],[14n,1n,12n],[16n,-3617n,8160n]])gamma=add(gamma,R(num,den*N**k));
gamma=add(gamma,[0n,R(43867n,14364n*N**18n)[1]]);
const alpha=neg(add(add(gamma,div(pi,TWO)),add(mul(R(3n),ln2),log(pi))));
function expneg(x){let s=ONE,p=ONE;for(let j=1;j<=50;j++){p=div(mul(p,x),R(BigInt(j)));s=add(s,j%2?neg(p):p)}let next=div(mul(p,x),R(51n));return[s[0]-next[1],s[1]]}



function isqrt(x){if(x<2n)return x;let y=1n<<BigInt(Math.ceil(x.toString(2).length/2));for(;;){let z=(y+x/y)/2n;if(z>=y)return y;y=z}}
const rootI=n=>{let l=isqrt(n*Q*Q);return[l,l+1n]};
const sqrt2=rootI(2n);
if(sqrt2[0]**2n>2n*Q*Q||sqrt2[1]**2n<2n*Q*Q)throw Error("sqrt2");
function expAny(x){
 let k=0;while(x[1]>Q/2n){x=div(x,TWO);k++}
 let e=expneg(x);for(let i=0;i<k;i++)e=square(e);
 return [max([0n,e[0]]),min([Q,e[1]])];
}
function sinh(x){const e=expAny(x);return div(sub(div(ONE,e),e),TWO)}

const rows=[],{J,M,T}=params,S=Math.floor(T/2)+1; if(!Number.isSafeInteger(J)||!Number.isSafeInteger(M)||!Number.isSafeInteger(T)||M<=T||J<=0)throw Error('cutoffs');
const absup=a=>max([a[1],-a[0]]),mid=a=>Number(a[0]+a[1])/(2*Number(Q));
function trig(x,sine){
 const k=(x[0]+x[1])/(4n*pi[0]),y=sub(x,mul(R(2n*k),pi)),yy=square(y);
 let term=sine?y:ONE,sum=term;
 for(let j=1;j<=64;j++){term=neg(div(mul(term,yy),R(BigInt(sine?(2*j)*(2*j+1):(2*j-1)*(2*j)))));sum=add(sum,term)}
 const err=absup(div(mul(term,yy),R(BigInt(sine?130*131:129*130))));
 return [sum[0]-err,sum[1]+err];
}
function atanSmall(a){let p=a,a2=square(a),s=ZERO;for(let j=0;j<120;j++){let term=div(p,R(BigInt(2*j+1)));s=add(s,j%2?neg(term):term);p=mul(p,a2)}const next=absup(div(p,R(241n)));return[s[0]-next,s[1]+next]}
function atanPos(a){if(a[0]<0n)throw Error("atanPos");if(a[0]>=Q)return sub(div(pi,TWO),atanNear(div(ONE,a)));return atanNear(a)}
function atanNear(a){if(a[1]<=Q/2n)return atanSmall(a);const x=div(sub(a,ONE),add(a,ONE));if(absup(x)>Q/2n)throw Error("atan range");return add(div(pi,R(4n)),atanSmall(x))}
const widen=(x,e)=>[x[0]-e[1],x[1]+e[1]];
const ln13=log(R(13n)),b11=div(log(R(11n)),rootI(11n));
const b=div(ln2,sqrt2),ln3=log(R(3n)),sqrt3=rootI(3n),sqrt5=rootI(5n),sqrt7=rootI(7n);
const b3=div(ln3,sqrt3),b4=div(ln2,TWO),ln4=mul(TWO,ln2),ln5=log(R(5n)),b5=div(ln5,sqrt5),ln7=log(R(7n)),ln8=mul(R(3n),ln2),b7=div(ln7,sqrt7),ln9=mul(TWO,ln3),ln11=log(R(11n)),b8=div(ln2,rootI(8n)),b9=div(ln3,R(3n));
for(const [w,up] of [[b,491n],[b3,635n],[b4,347n],[b5,720n],[b7,736n],[b8,246n],[b9,367n],[b11,724n]])if(w[1]>R(up,1000n)[0])throw Error("weight upper");
for(const [hn,hd] of [[params.hn,params.hd]]){
 const h=R(hn,hd),prime=true,twoPrime=true,threeShift=true,fourShift=true;
 if(h[0]<=ln11[1]||h[1]>=ln13[0]||h[1]>=log(R(111n,10n))[0])throw Error('eleven window regime');
 const fiveShift=true,sixShift=true,sevenShift=true,eightShift=true;
 const witness=rationalElevenWitness(111n,10n);
 const boundNumerator=2762n,witnessWindow='111/10';
 if(witness.best.checked!==33139||witness.best.boundNumerator!==String(boundNumerator)||witness.weightDenominator!=='1000'||witness.window!==witnessWindow)throw Error('witness mismatch');
 const primeBound=R(boundNumerator,1000n),lowCount=params.lowCount;
 if(2*lowCount>=T)throw Error('low support');
 const sh=sinh(div(h,R(4n))),ee=expAny(div(h,R(4n))),ch=div(add(div(ONE,ee),ee),TWO);
 // Use unnormalized cosine basis scaled by sqrt(h): k_n sqrt(h)=1 or sqrt2.
 // Entries retain common 1/h, so no sqrt(h) is needed.
 const rate=Array.from({length:J},(_,j)=>R(BigInt(4*j+1),2n));
 const rate2=rate.map(square),q=rate.map(r=>expAny(mul(r,h)));
 const om=Array.from({length:M+2},(_,n)=>div(mul(pi,R(BigInt(n))),h)),om2=om.map(square);
 const norm=n=>n===0?ONE:sqrt2;
 const R0=R(BigInt(4*J-1),2n),R02=square(R0),R03=mul(R0,R02);
 const E_h=div(q[0],sub(ONE,expAny(mul(TWO,h))));
 const rJ=R(BigInt(4*J+1),2n);
 const Et=div(expAny(mul(rJ,h)),mul(sub(ONE,expAny(mul(TWO,h))),square(rJ)));
 const R05=mul(R03,R02),R06=square(R03);
 const R07=mul(R05,R02),R08=square(square(R02));
 const R09=mul(R07,R02),R010=mul(R08,R02);
 const R011=mul(R09,R02),R012=mul(R010,R02);
 const R013=mul(R011,R02),R014=mul(R012,R02);
 const Ferror=add(div(R(2831718n,2730n),R013),Et),Derror=Ferror;
 const sums=Array.from({length:M+2},(_,n)=>{
  const x=om2[n],I=n===0?div(ONE,R0):div(atanPos(div(om[n],R0)),om[n]);
  let base=ZERO,exp=ZERO,bd=ZERO,ed=ZERO,da=ZERO;
  for(let j=0;j<J;j++){
   const f=div(ONE,add(rate2[j],x));
   base=add(base,f);exp=add(exp,mul(q[j],f));
   if(n<2*S){const d=mul(rate2[j],square(f));bd=add(bd,d);ed=add(ed,mul(q[j],d));
    if(n>0)da=add(da,div(mul(TWO,mul(x,f)),rate[j]));}
  }
  const den0=add(R02,x),den02=square(den0);
  base=sub(add(base,div(I,TWO)),div(R0,mul(R(6n),den02)));
  bd=add(add(bd,div(add(I,div(R0,den0)),R(4n))),div(mul(R0,sub(x,R02)),mul(R(6n),mul(den02,den0))));
  const den04=square(den02),den05=mul(den04,den0);
  const f3=div(mul(mul(R(24n),R0),sub(x,R02)),den04);
  const fd3=div(mul(mul(R(24n),R0),sub(sub(mul(R(5n),mul(R02,x)),mul(TWO,square(x))),square(R02))),den05);
  base=sub(base,mul(R(7n,720n),f3));bd=sub(bd,mul(R(7n,720n),fd3));
  const fa3=sub(div(mul(R(6n),sub(add(square(R02),square(x)),mul(R(6n),mul(R02,x)))),den04),div(R(6n),square(R02)));
  const den06=mul(den05,den0),den07=mul(den06,den0),u=R02,u2=square(u),u3=mul(u2,u),x2=square(x),x3=mul(x2,x);
  const f5=div(mul(mul(R(-240n),R0),add(sub(mul(R(3n),u2),mul(R(10n),mul(u,x))),mul(R(3n),x2))),den06);
  const fd5=div(mul(mul(R(-240n),R0),sub(add(sub(mul(R(3n),u3),mul(R(35n),mul(u2,x))),mul(R(49n),mul(u,x2))),mul(R(9n),x3))),den07);
  base=add(base,mul(R(31n,30240n),f5));bd=add(bd,mul(R(31n,30240n),fd5));
  const fa5=sub(div(mul(R(120n),sub(add(sub(u3,mul(R(15n),mul(u2,x))),mul(R(15n),mul(u,x2))),x3)),den06),div(R(120n),R06));
  // Exact seventh derivatives via polynomial recurrence documented in PPW03.
  const den08=square(den04),den09=mul(den08,den0),u4=square(u2),x4=square(x2);
  const poly=(terms)=>terms.reduce((a,[c,v])=>add(a,mul(R(BigInt(c)),v)),ZERO);
  const f7=div(mul(mul(R(-40320n),R0),poly([[1,u3],[-7,mul(u2,x)],[7,mul(u,x2)],[-1,x3]])),den08);
  const fd7=div(mul(mul(R(-40320n),R0),poly([[1,u4],[-21,mul(u3,x)],[63,mul(u2,x2)],[-39,mul(u,x3)],[4,x4]])),den09);
  const fa7=sub(div(mul(R(5040n),poly([[1,u4],[-28,mul(u3,x)],[70,mul(u2,x2)],[-28,mul(u,x3)],[1,x4]])),den08),div(R(5040n),R08));
  base=sub(base,mul(R(127n,1209600n),f7));bd=sub(bd,mul(R(127n,1209600n),fd7));
  const den010=mul(den09,den0),den011=mul(den010,den0),u5=mul(u4,u),x5=mul(x4,x);
  const f9=div(mul(mul(R(-725760n),R0),poly([[5,u4],[-60,mul(u3,x)],[126,mul(u2,x2)],[-60,mul(u,x3)],[5,x4]])),den010);
  const fd9=div(mul(mul(R(-725760n),R0),poly([[5,u5],[-165,mul(u4,x)],[858,mul(u3,x2)],[-1122,mul(u2,x3)],[385,mul(u,x4)],[-25,x5]])),den011);
  const fa9=sub(div(mul(R(362880n),poly([[1,u5],[-45,mul(u4,x)],[210,mul(u3,x2)],[-210,mul(u2,x3)],[45,mul(u,x4)],[-1,x5]])),den010),div(R(362880n),R010));
  base=add(base,mul(R(511n,47900160n),f9));bd=add(bd,mul(R(511n,47900160n),fd9));
  const diag=n===0?alpha:widen(add(sub(add(sub(sub(add(add(alpha,da),div(log(add(ONE,div(x,R02))),TWO)),div(mul(x,add(mul(R(3n),R02),x)),mul(R(6n),mul(R02,den02)))),mul(R(7n,360n),fa3)),mul(R(31n,15120n),fa5)),mul(R(127n,604800n),fa7)),mul(R(511n,23950080n),fa9)),div(mul(R(36812334n,2730n),x),R014));
  return {base,exp,bd,ed,diag};
 });
 const shifts=[[ln2,b],[ln3,b3],[ln4,b4],[ln5,b5]].concat([[ln7,b7]],sixShift?[[ln8,b8]]:[],sevenShift?[[ln9,b9]]:[],[[ln11,b11]]).map(([s,w])=>({s,w,p:div(mul(mul(TWO,w),sqrt2),pi),sn:om.map(x=>trig(mul(x,s),true)),cs:om.map(x=>trig(mul(x,s),false))}));
 const psum=shifts.reduce((a,z)=>add(a,z.p),ZERO);
 function P(n,k){
  let ans=ZERO;
  for(const {s,w,sn,cs} of shifts){
   let I;
   if(n===k)I=n===0?sub(h,s):div(sub(mul(sub(h,s),cs[n]),div(sn[n],om[n])),TWO);
   else I=div(sub(mul(om[k],sn[k]),mul(om[n],sn[n])),sub(om2[n],om2[k]));
   ans=add(ans,div(mul(mul(TWO,w),mul(mul(norm(n),norm(k)),I)),h));
  }
  return ans;
 }
 function weight(n){return sub(log(div(R(BigInt(n)),mul(TWO,h))),div(mul(R(3n),square(h)),mul(R(BigInt(2*n*n)),square(pi))))}

 for(const odd of parities){
  const ks=Array.from({length:lowCount},(_,i)=>2*i+(odd?1:0)),eta=odd?-1:1;
  const pole=n=>div(mul(norm(n),odd?neg(ch):sh),add(om2[n],R(1n,4n)));
  const F=sums.map(a=>widen(odd?add(a.base,a.exp):sub(a.base,a.exp),Ferror));
  const D=sums.map(a=>widen(odd?add(a.bd,a.ed):sub(a.bd,a.ed),Derror));
  const memo=new Map();
  function K(n,k){
   const key=Math.min(n,k)+":"+Math.max(n,k);if(memo.has(key))return memo.get(key);
   let v;if(n===k){if(n>=2*S)throw Error("diagonal not evaluated");v=D[n];}
   else v=div(sub(mul(om2[n],F[n]),mul(om2[k],F[k])),sub(om2[n],om2[k]));
   v=mul(div(mul(mul(TWO,norm(n)),norm(k)),h),v);memo.set(key,v);return v;
  }
  function entry(n,k){
   let r=sub(add(K(n,k),div(mul(R(BigInt(2*eta)),mul(pole(n),pole(k))),h)),P(n,k));
   return n===k?add(r,sums[n].diag):r;
  }
  const A=ks.map(k=>ks.map(l=>entry(k,l)));
  const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(BigInt(3*(2*lowCount)**3)),square(square(pi))))):ZERO;
  function g(n){return sub(sub(weight(n),primeBound),poleLoss)}
  const ns=[];for(let n=ks[ks.length-1]+2;n<=M;n+=2)ns.push(n);
  if(g(ns[0])[0]<=0n){rows.push({h:hn+"/"+hd,odd,failed:"high weight"});continue}
  const ts=ns.filter(n=>n<=T),dim=ts.length,all=ks.concat(ts),Kmax=Math.max(...all);
  const rr=ns.map(n=>ks.map(k=>entry(n,k)));
  const Crows=ns.map(n=>ts.map(k=>entry(n,k)));
  const weights=ns.map(g);
  // Finite exact-complement matrix; Float64 chooses a rational trial only.
  // High-precision midpoint LDL selects an arbitrary rational trial; no
  // claim of a certified solve is needed for the residual identity.
  const mp=a=>(a[0]+a[1])/2n,prod=(a,b)=>a*b/Q,quot=(a,b)=>a*Q/b;
  const L=Array.from({length:dim},()=>Array(dim).fill(0n)),Dtrial=[];
  for(let i=0;i<dim;i++){
   L[i][i]=Q;
   for(let j=0;j<i;j++){let z=mp(Crows[i][j]);for(let k=0;k<j;k++)z-=prod(prod(L[i][k],L[j][k]),Dtrial[k]);L[i][j]=quot(z,Dtrial[j]);}
   let d=mp(Crows[i][i]);for(let k=0;k<i;k++)d-=prod(prod(L[i][k],L[i][k]),Dtrial[k]);if(d<=0n)throw Error("trial LDL");Dtrial.push(d);
  }
  const X=ks.map((_,k)=>{
   const t=rr.slice(0,dim).map(row=>mp(row[k]));
   for(let i=0;i<dim;i++)for(let j=0;j<i;j++)t[i]-=prod(L[i][j],t[j]);
   for(let i=0;i<dim;i++)t[i]=quot(t[i],Dtrial[i]);
   for(let i=dim-1;i>=0;i--)for(let j=i+1;j<dim;j++)t[i]-=prod(L[j][i],t[j]);
   return t.map(x=>[x,x]);
  });
  // Use approximate symmetric Jacobi eigenvectors of the upper Schur matrix
  // to select rational low directions. The eigenvectors are NOT trusted.
  const CX0=Crows.slice(0,dim).map(row=>X.map(x=>row.reduce((s,v,j)=>add(s,mul(v,x[j])),ZERO)));
  const dlow=ks.length;
  const U0=A.map((row,k)=>row.map((a,l)=>{let u=a;
   for(let j=0;j<dim;j++)u=add(u,sub(mul(X[k][j],CX0[j][l]),add(mul(rr[j][k],X[l][j]),mul(X[k][j],rr[j][l]))));
   return u;
  }));
  // Fixed-point Jacobi rotation selects the rational basis, never certifies it.
  const fm=(a,b)=>a*b/Q,ab=a=>a<0n?-a:a;
  const jf=U0.map((row,i)=>row.map((a,j)=>(a[0]+a[1]+U0[j][i][0]+U0[j][i][1])/4n));
  const vf=Array.from({length:dlow},(_,i)=>Array.from({length:dlow},(_,j)=>i===j?Q:0n));
  for(let it=0;it<5000;it++){
   let i=0,j=1;for(let a=0;a<dlow;a++)for(let b=a+1;b<dlow;b++)if(ab(jf[a][b])>ab(jf[i][j])){i=a;j=b}
   const a=jf[i][i],b=jf[j][j],r=jf[i][j];if(ab(r)<=100n)break;
   const d=b-a,rad=isqrt(d*d+4n*r*r),t=2n*r*Q/(d>=0n?d+rad:d-rad);
   const c=Q*Q/isqrt(Q*Q+t*t),s=fm(t,c),cc=fm(c,c),ss=fm(s,s),cs=fm(c,s);
   for(let k=0;k<dlow;k++)if(k!==i&&k!==j){const x=jf[k][i],y=jf[k][j];jf[k][i]=jf[i][k]=fm(c,x)-fm(s,y);jf[k][j]=jf[j][k]=fm(s,x)+fm(c,y)}
   jf[i][i]=fm(cc,a)-2n*fm(cs,r)+fm(ss,b);jf[j][j]=fm(ss,a)+2n*fm(cs,r)+fm(cc,b);jf[i][j]=jf[j][i]=0n;
   for(let k=0;k<dlow;k++){const x=vf[k][i],y=vf[k][j];vf[k][i]=fm(c,x)-fm(s,y);vf[k][j]=fm(s,x)+fm(c,y)}
  }
  const order=Array.from({length:dlow},(_,i)=>i).sort((i,j)=>jf[i][i]<jf[j][j]?-1:jf[i][i]>jf[j][j]?1:0);
  const V=order.map(j=>vf.map(row=>[row[j],row[j]]));
  const dot=(a,b)=>a.reduce((s,x,i)=>add(s,mul(x,b[i])),ZERO);
  // Strict diagonal dominance of V^t V proves invertibility exactly.
  for(let i=0;i<dlow;i++){const diag=dot(V[i],V[i]);let off=0n;for(let j=0;j<dlow;j++)if(i!==j)off+=absup(dot(V[i],V[j]));if(diag[0]<=off)throw Error("singular rational basis");}
  const XT=V.map(v=>ts.map((_,j)=>{const z=dot(v,X.map(x=>x[j])),m=(z[0]+z[1])/2n;return[m,m]}));
  const coeff=V.map((v,i)=>v.concat(XT[i].map(neg)));
  const brows=all.map(n=>all.map(k=>entry(n,k)));
  const bu=brows.map(row=>coeff.map(c=>dot(row,c)));
  const upper=coeff.map(c=>coeff.map((_,j)=>dot(c,bu.map(row=>row[j]))));
  const residues=ns.map((n,i)=>coeff.map(c=>dot(rr[i].concat(Crows[i]),c)));
  const finite=ks.map((_,k)=>ks.map((_,l)=>{
   let a=ZERO;for(let i=0;i<ns.length;i++)a=add(a,div(mul(residues[i][k],residues[i][l]),weights[i]));return a;
  }));
  const m=R(BigInt(M+1)),mm=R(BigInt(M-1)),gm=g(M+1);
  const den=sub(ONE,square(div(R(BigInt(Kmax)),m)));
  const ak=div(mul(mul(TWO,sqrt2),h),square(pi)),p=psum,eh=add(ONE,E_h);
  const CL=add(add(div(sqrt2,TWO),p),div(mul(ak,eh),m));
  const delta=div(square(h),mul(R(4n),square(pi)));
  const polecoef=div(mul(mul(R(BigInt(2*eta)),sqrt2),mul(odd?neg(ch):sh,h)),square(pi));
  const dj=all.map(k=>add(mul(div(mul(TWO,sqrt2),h),mul(R(BigInt(k*k)),F[k])),shifts.reduce((a,z)=>add(a,mul(z.p,mul(R(BigInt(k)),z.sn[k]))),ZERO)));
  const s0=[],s2=[],s4=[],s6=[],v2=[],v4=[],v6=[],tails=[];
  for(let i=0;i<ks.length;i++){
   let b0=ZERO,b2=ZERO,b4=ZERO,b6=ZERO,d0=ZERO,d2=ZERO,d4=ZERO,r8=ZERO,rd=ZERO,pc=ZERO;
   for(let j=0;j<all.length;j++){
    const k=all[j],raw=coeff[i][j],k2=R(BigInt(k*k)),k4=square(k2),k6=mul(k2,k4),k8=square(k4);
    const a=mul(norm(k),raw),aa=[0n,absup(a)],ad=mul(a,dj[j]);
    b0=add(b0,a);b2=add(b2,mul(a,k2));b4=add(b4,mul(a,k4));b6=add(b6,mul(a,k6));
    d0=add(d0,ad);d2=add(d2,mul(ad,k2));d4=add(d4,mul(ad,k4));
    r8=add(r8,mul(aa,k8));rd=add(rd,mul([0n,absup(ad)],k6));pc=add(pc,mul(raw,pole(k)));
   }
   const ph=mul(polecoef,pc),V2=sub(ph,d0),V4=sub(neg(mul(delta,ph)),d2),V6=sub(mul(square(delta),ph),d4);
   const C8=add(div(add(mul(div(CL,m),r8),rd),den),mul(mul(square(delta),delta),[0n,absup(ph)]));
   s0.push(b0);s2.push(b2);s4.push(b4);s6.push(b6);v2.push(V2);v4.push(V4);v6.push(V6);
   tails.push({S0:b0.map(String),S2:b2.map(String),S4:b4.map(String),S6:b6.map(String),V2:V2.map(String),V4:V4.map(String),V6:V6.map(String),C8:String(C8[1])});
  }
  const mm2=square(mm),mm3=mul(mm2,mm),mm5=mul(mm3,mm2),mm7=mul(mm5,mm2),mm9=mul(mm7,mm2),mm11=mul(mm9,mm2),mm13=mul(mm11,mm2),mm15=mul(mm13,mm2);
  const oldShares=[64n,32n,16n,8n,4n,2n,1n,1n],defaultShares=odd?[9550n,400n,45n,1n,1n,1n,1n,1n]:[9400n,476n,84n,8n,8n,8n,8n,8n];
  const shares=params.oldAllocation?oldShares:defaultShares,shareDen=params.oldAllocation?128n:10000n;
  if(shares.some(x=>x<=0n)||shares.reduce((a,b)=>a+b,0n)!==shareDen)throw Error("tail shares");
  const factor=i=>R(shareDen,2n*shares[i]);
  const f1=div(mul(factor(0),square(CL)),mul(mm,gm)),f2=div(factor(1),mul(mul(R(3n),mm3),gm)),f3=div(mul(factor(2),square(CL)),mul(mul(R(5n),mm5),gm)),f4=div(factor(3),mul(mul(R(7n),mm7),gm)),f5=div(mul(factor(4),square(CL)),mul(mul(R(9n),mm9),gm)),f6=div(factor(5),mul(mul(R(11n),mm11),gm)),f7=div(mul(factor(6),square(CL)),mul(mul(R(13n),mm13),gm));
  const eighthC=tails.map(t=>BigInt(t.C8)+1n),eighthDiag=eighthC.map(c=>div(mul(mul(R(BigInt(ks.length)),factor(7)),square([c,c])),mul(mul(R(15n),mm15),gm)));
  const rank=(f,r)=>ks.map((_,i)=>ks.map((_,j)=>mul(f,mul(r[i],r[j]))));
  const lead=rank(f1,s0),second=rank(f2,v2),third=rank(f3,s2),fourth=rank(f4,v4),fifth=rank(f5,s4),sixth=rank(f6,v6),seventh=rank(f7,s6);
  const ranks=[lead,second,third,fourth,fifth,sixth,seventh];
  const mat=upper.map((row,i)=>row.map((a,j)=>sub(ranks.reduce((v,r)=>sub(v,r[i][j]),sub(a,finite[i][j])),i===j?[eighthDiag[i][1],eighthDiag[i][1]]:ZERO)));
  const n=ks.length,midpoints=Array.from({length:n},()=>Array(n).fill(0n)),radii=Array.from({length:n},()=>Array(n).fill(0n));
  for(let i=0;i<n;i++)for(let j=0;j<=i;j++){
   const lo=max([mat[i][j][0],mat[j][i][0]]),hi=min([mat[i][j][1],mat[j][i][1]]);
   if(lo>hi)throw Error("asymmetry");const m=(lo+hi)/2n,rad=max([m-lo,hi-m]);midpoints[i][j]=midpoints[j][i]=m;radii[i][j]=radii[j][i]=rad;
  }
  const energyUpper=upper.map((row,i)=>row[i][1]);
  // Positive exact diagonal scaling; a failed energy guard uses unweighted radius.
  const radiusWeights=energyUpper.every(e=>e>0n)?energyUpper.map(e=>10n**80n/isqrt(e)):energyUpper.map(()=>1n);
  if(radiusWeights.some(d=>d<=0n))throw Error("radius scale");
  const errors=radii.map((row,i)=>row.reduce((a,b,j)=>a+ceil(b*radiusWeights[j],radiusWeights[i]),0n));
  const G=midpoints.map((row,i)=>row.map((x,j)=>{let v=x-(i===j?errors[i]:0n);return[v,v]}));
  const diagnostics=ks.map((_,i)=>{
   const c=[eighthC[i],eighthC[i]],t8=div(mul(factor(7),square(c)),mul(mul(R(15n),mm15),gm));
   const low=sub(ranks.reduce((v,r)=>sub(v,r[i][i]),sub(upper[i][i],finite[i][i])),[t8[1],t8[1]]);
   return {upper:upper[i][i].map(String),finite:finite[i][i].map(String),rankTerms:ranks.map(r=>r[i][i].map(String)),eighthUpper:String(t8[1]),eighthBlockUpper:String(eighthDiag[i][1]),directionLower:String(low[0]),matrixRadius:String(errors[i]),norm:dot(V[i],V[i]).map(String)};
  });
  // Bareiss fraction-free elimination on the exact integer lower matrix.
  const lowerInteger=G.map(row=>row.map(a=>{if(a[0]!==a[1])throw Error("nonexact lower");return a[0]}));
  const B=lowerInteger.map(row=>row.slice()),pivots=[],principalMinors=[];let prev=1n,certified=true;
  for(let k=0;k<n;k++){
   const p=B[k][k];principalMinors.push(String(p));pivots.push([String(floor(p,prev)),String(ceil(p,prev))]);
   if(p<=0n){certified=false;break}
   for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){
    const num=p*B[i][j]-B[i][k]*B[k][j];
    if(num%prev!==0n)throw Error("Bareiss division");
    B[i][j]=B[j][i]=num/prev;
   }
   prev=p;
  }
  const enc=a=>a.map(row=>row.map(x=>x.map(String)));
  // Approximate relative diagnostics only; retain exact unscaled component intervals.
  const energy=upper.map((row,i)=>mid(row[i]));
  const relative=finite.map((row,i)=>row.map((a,j)=>mid(ranks.reduce((v,r)=>add(v,r[i][j]),a))/Math.sqrt(energy[i]*energy[j])+(i===j?Number(eighthDiag[i][1])/Number(Q)/energy[i]:0)));
  let rv=Array(n).fill(1/Math.sqrt(n)),lambda=0;
  for(let k=0;k<100;k++){const z=relative.map(row=>row.reduce((s,x,j)=>s+x*rv[j],0)),r=Math.hypot(...z);if(!Number.isFinite(r)||!r)break;rv=z.map(x=>x/r);lambda=r;}
  const componentIntervals={upper:enc(upper),finite:enc(finite),leading:enc(lead),second:enc(second),third:enc(third),fourth:enc(fourth),fifth:enc(fifth),sixth:enc(sixth),seventh:enc(seventh),eighth:eighthDiag.map(x=>String(x[1]))};
  rows.push({h:hn+"/"+hd,odd,J,M,S,prime,twoPrime,threeShift,fourShift,fiveShift,sixShift,sevenShift,eightShift,primeNormUpper:String(primeBound[1]),witnessWindow,tailShares:shares.map(String),tailShareDenominator:String(shareDen),ks,ts,T,highWeight:g(ns[0]).map(String),pivots,principalMinors,relativeEstimate:lambda,relativeDirection:rv,componentIntervals,radiusWeights:radiusWeights.map(String),lowerInteger:lowerInteger.map(r=>r.map(String)),diagnostics,certified,tails,basis:V.map(y=>y.map(x=>String(x[0]))),trial:XT.map(y=>y.map(x=>String(x[0])))});
 }
}
return {scale:String(Q),rows};
}
if(typeof module!=="undefined")module.exports=primePowerCertificate;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){const args=process.argv.slice(2),p={hn:BigInt(args[1]||"12"),hd:BigInt(args[2]||"5"),J:Number(args[3]||4096),M:Number(args[4]||8192),T:Number(args[5]||768),lowCount:Number(args[6]||45),oldAllocation:args.includes('--old-allocation')};console.log(JSON.stringify(primePowerCertificate(args[0]==="--odd"?[true]:[false],p),null,2));}

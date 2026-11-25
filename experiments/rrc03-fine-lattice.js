// Reproduce: node experiments/rrc03-fine-lattice.js
function primeWitness(){
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
const shifts=[2n,3n,4n,5n],weights=[491n,635n,347n,720n];
const actual=[div(ln2,root(2n)),div(log(R(3n)),root(3n)),div(ln2,TWO),div(log(R(5n)),root(5n))];
for(let i=0;i<4;i++)if(actual[i][1]>R(weights[i],1000n)[0])throw Error("weight upper");
if((1780n-347n)**2n<=347n**2n+8n*491n**2n)throw Error("tower bound");
const gcd=(a,b)=>{while(b){const t=a%b;a=b;b=t}return a};
const rat=(a,b=1n)=>{const d=gcd(a,b);return[a/d,b/d]};
const cmp=(a,b)=>a[0]*b[1]<b[0]*a[1]?-1:a[0]*b[1]>b[0]*a[1]?1:0;
const key=a=>a.join("/");
const lo=rat(1n),hi=rat(6n);
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
for(let step=0;step<=32;step++){
 const v=verify(part);
 history.push({step,cells:part.values.length,checked:v.cells,boundNumerator:String(v.bound)});
 if(!best||v.bound<best.bound)best={step,bound:v.bound,part,checked:v.cells,worstCell:v.worstCell};
 if(step===32)break;
 const raw=v.data.cells.map(({w,p})=>p+1000n*w),mx=max(raw);
 const vals=raw.map(x=>max([1n,(scale*x+mx/2n)/mx]));
 const points=[v.data.points[0]],values=[];
 for(let i=0;i<vals.length;i++){if(i===0||vals[i]!==vals[i-1]){if(i>0)points.push(v.data.points[i]);values.push(vals[i])}}
 points.push(hi);part={points,values};
}
const check=verify(best.part);
if(check.bound!==best.bound||check.cells!==best.checked)throw Error("replay");
return {window:"6",weightDenominator:"1000",weightNumerators:weights.map(String),actualWeightIntervals:actual.map(a=>a.map(String)),intervalScale:String(Q),history,best:{step:best.step,boundNumerator:String(best.bound),checked:best.checked,worstCell:best.worstCell,points:best.part.points.map(key),values:best.part.values.map(String)}};
}

function relativeFineLattice(){
const Q=10n**42n, floor=(n,d)=>{if(d<0n){n=-n;d=-d}return n>=0n?n/d:-((-n+d-1n)/d)},ceil=(n,d)=>-floor(-n,d);
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
function atan(a){let p=a,a2=mul(a,a),s=ZERO;for(let j=0;j<24;j++){let term=div(p,R(BigInt(2*j+1)));s=add(s,j%2?neg(term):term);p=mul(p,a2)}let next=div(p,R(81n));return[s[0],s[1]+next[1]]}
const pi=sub(mul(R(16n),atan(R(1n,5n))),mul(R(4n),atan(R(1n,239n))));
let H=ZERO;for(let j=1n;j<=4096n;j++)H=add(H,R(1n,j));
const gamma=add(sub(add(sub(sub(H,mul(R(12n),ln2)),R(1n,8192n)),R(1n,12n*4096n**2n)),R(1n,120n*4096n**4n)),[0n,R(1n,252n*4096n**6n)[1]]);
const alpha=neg(add(add(gamma,div(pi,TWO)),add(mul(R(3n),ln2),log(pi))));
function expneg(x){let s=ONE,p=ONE;for(let j=1;j<=30;j++){p=div(mul(p,x),R(BigInt(j)));s=add(s,j%2?neg(p):p)}let next=div(mul(p,x),R(31n));return[s[0]-next[1],s[1]]}



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

const rows=[],J=2048,M=3072,S=97,T=192;
const absup=a=>max([a[1],-a[0]]),mid=a=>Number(a[0]+a[1])/2e42;
function trig(x,sine){
 const k=(x[0]+x[1])/(4n*pi[0]),y=sub(x,mul(R(2n*k),pi)),yy=square(y);
 let term=sine?y:ONE,sum=term;
 for(let j=1;j<=40;j++){term=neg(div(mul(term,yy),R(BigInt(sine?(2*j)*(2*j+1):(2*j-1)*(2*j)))));sum=add(sum,term)}
 const err=absup(div(mul(term,yy),R(BigInt(sine?82*83:81*82))));
 return [sum[0]-err,sum[1]+err];
}
function atanSmall(a){let p=a,a2=square(a),s=ZERO;for(let j=0;j<48;j++){let term=div(p,R(BigInt(2*j+1)));s=add(s,j%2?neg(term):term);p=mul(p,a2)}const next=absup(div(p,R(97n)));return[s[0]-next,s[1]+next]}
function atanPos(a){if(a[0]<0n)throw Error("atanPos");if(a[0]>=Q)return sub(div(pi,TWO),atanNear(div(ONE,a)));return atanNear(a)}
function atanNear(a){if(a[1]<=Q/2n)return atanSmall(a);const x=div(sub(a,ONE),add(a,ONE));if(absup(x)>Q/2n)throw Error("atan range");return add(div(pi,R(4n)),atanSmall(x))}
const widen=(x,e)=>[x[0]-e[1],x[1]+e[1]];
const witness=primeWitness();
if(witness.best.boundNumerator!=="1547"||witness.weightDenominator!=="1000"||witness.window!=="6")throw Error("prime witness mismatch");
const b=div(ln2,sqrt2),ln3=log(R(3n)),sqrt3=rootI(3n),sqrt5=rootI(5n);
const b3=div(ln3,sqrt3),b4=div(ln2,TWO),ln4=mul(TWO,ln2),ln5=log(R(5n)),b5=div(ln5,sqrt5),ln6=log(R(6n)),normBound=R(1547n,1000n);
for(const [w,up] of [[b,491n],[b3,635n],[b4,347n],[b5,720n]])if(w[1]>R(up,1000n)[0])throw Error("weight upper");
for(const [hn,hd] of [[7n,4n],[89n,50n]]){
 const h=R(hn,hd),prime=true,twoPrime=true,threeShift=true,fourShift=true;
 if(h[0]<=ln5[1]||h[1]>=ln6[0])throw Error("prime five regime");
 const primeBound=normBound;
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
 const Ferror=add(div(R(19n),mul(TWO,R07)),Et),Derror=Ferror;
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
  const diag=n===0?alpha:widen(sub(sub(add(add(alpha,da),div(log(add(ONE,div(x,R02))),TWO)),div(mul(x,add(mul(R(3n),R02),x)),mul(R(6n),mul(R02,den02)))),mul(R(7n,360n),fa3)),div(mul(R(133n),x),mul(TWO,R08)));
  return {base,exp,bd,ed,diag};
 });
 const shifts=[[ln2,b],[ln3,b3],[ln4,b4],[ln5,b5]].map(([s,w])=>({s,w,p:div(mul(mul(TWO,w),sqrt2),pi),sn:om.map(x=>trig(mul(x,s),true)),cs:om.map(x=>trig(mul(x,s),false))}));
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

 for(const odd of [false,true]){
  const ks=odd?[1,3,5,7,9,11,13,15,17,19]:[0,2,4,6,8,10,12,14,16,18],eta=odd?-1:1;
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
  const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(24000n),square(square(pi))))):ZERO;
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
  for(let it=0;it<1000;it++){
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
  const s0=[],s2=[],v2=[],tails=[];
  for(let i=0;i<ks.length;i++){
   let b0=ZERO,b2=ZERO,d0=ZERO,r4=ZERO,rd=ZERO,pc=ZERO;
   for(let j=0;j<all.length;j++){
    const k=all[j],raw=coeff[i][j],k2=R(BigInt(k*k));
    const a=mul(norm(k),raw),aa=[0n,absup(a)];
    b0=add(b0,a);b2=add(b2,mul(a,k2));d0=add(d0,mul(a,dj[j]));
    r4=add(r4,mul(aa,square(k2)));
    rd=add(rd,mul([0n,absup(mul(a,dj[j]))],k2));
    pc=add(pc,mul(raw,pole(k)));
   }
   const ph=mul(polecoef,pc),V2=sub(ph,d0);
   const C4=add(div(add(mul(div(CL,m),r4),rd),den),mul(delta,[0n,absup(ph)]));
   s0.push(b0);s2.push(b2);v2.push(V2);tails.push({S0:b0.map(String),S2:b2.map(String),V:V2.map(String),C4:String(C4[1])});
  }
  const mm2=square(mm),mm3=mul(mm2,mm),mm5=mul(mm3,mm2),mm7=mul(mm5,mm2);
  const f1=div(square(CL),mul(mm,gm)),f2=div(TWO,mul(mul(R(3n),mm3),gm));
  const f3=div(mul(R(4n),square(CL)),mul(mul(R(5n),mm5),gm));
  const fourthC=tails.map(t=>BigInt(t.C4)+1n);
  const fourthDiag=fourthC.map(c=>div(mul(R(BigInt(4*ks.length)),square([c,c])),mul(mul(R(7n),mm7),gm)));
  const lead=ks.map((_,i)=>ks.map((_,j)=>mul(f1,mul(s0[i],s0[j]))));
  const second=ks.map((_,i)=>ks.map((_,j)=>mul(f2,mul(v2[i],v2[j]))));
  const third=ks.map((_,i)=>ks.map((_,j)=>mul(f3,mul(s2[i],s2[j]))));
  const mat=upper.map((row,i)=>row.map((a,j)=>sub(sub(sub(sub(sub(a,finite[i][j]),lead[i][j]),second[i][j]),third[i][j]),i===j?[fourthDiag[i][1],fourthDiag[i][1]]:ZERO)));
  const n=ks.length,midpoints=Array.from({length:n},()=>Array(n).fill(0n)),radii=Array.from({length:n},()=>Array(n).fill(0n));
  for(let i=0;i<n;i++)for(let j=0;j<=i;j++){
   const lo=max([mat[i][j][0],mat[j][i][0]]),hi=min([mat[i][j][1],mat[j][i][1]]);
   if(lo>hi)throw Error("asymmetry");const m=(lo+hi)/2n,rad=max([m-lo,hi-m]);midpoints[i][j]=midpoints[j][i]=m;radii[i][j]=radii[j][i]=rad;
  }
  const errors=radii.map(row=>row.reduce((a,b)=>a+b,0n));
  const G=midpoints.map((row,i)=>row.map((x,j)=>{let v=x-(i===j?errors[i]:0n);return[v,v]}));
  const diagnostics=ks.map((_,i)=>{
   const c=[fourthC[i],fourthC[i]],t4=div(mul(R(4n),square(c)),mul(mul(R(7n),mm7),gm));
   const low=sub(sub(sub(sub(sub(upper[i][i],finite[i][i]),lead[i][i]),second[i][i]),third[i][i]),[t4[1],t4[1]]);
   return {upper:upper[i][i].map(String),finite:finite[i][i].map(String),leading:lead[i][i].map(String),second:second[i][i].map(String),third:third[i][i].map(String),fourthUpper:String(t4[1]),fourthBlockUpper:String(fourthDiag[i][1]),directionLower:String(low[0]),matrixRadius:String(errors[i]),norm:dot(V[i],V[i]).map(String)};
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
  const relative=finite.map((row,i)=>row.map((a,j)=>mid(add(add(add(a,lead[i][j]),second[i][j]),third[i][j]))/Math.sqrt(energy[i]*energy[j])+(i===j?Number(fourthDiag[i][1])/Number(Q)/energy[i]:0)));
  let rv=Array(n).fill(1/Math.sqrt(n)),lambda=0;
  for(let k=0;k<100;k++){const z=relative.map(row=>row.reduce((s,x,j)=>s+x*rv[j],0)),r=Math.hypot(...z);if(!Number.isFinite(r)||!r)break;rv=z.map(x=>x/r);lambda=r;}
  const componentIntervals={upper:enc(upper),finite:enc(finite),leading:enc(lead),second:enc(second),third:enc(third),fourth:fourthDiag.map(x=>String(x[1]))};
  rows.push({h:hn+"/"+hd,odd,J,M,S,prime,twoPrime,threeShift,fourShift,primeNormUpper:String(primeBound[1]),ks,ts,T,highWeight:g(ns[0]).map(String),pivots,principalMinors,relativeEstimate:lambda,relativeDirection:rv,componentIntervals,lowerInteger:lowerInteger.map(r=>r.map(String)),diagnostics,certified,tails,basis:V.map(y=>y.map(x=>String(x[0]))),trial:XT.map(y=>y.map(x=>String(x[0])))});
 }
}
return {scale:String(Q),rows};
}
console.log(JSON.stringify(relativeFineLattice(),null,2));

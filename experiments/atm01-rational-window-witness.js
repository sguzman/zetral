// Reproduce: node experiments/ppw01-prime-power-witness.js
function rationalNineWitness(num=19n,den=2n){
if(den<=0n||num<=9n*den||num>11n*den)throw Error('window outside nine regime');
const N=11n;
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
const shifts=N===9n?[2n,3n,4n,5n,7n,8n]:[2n,3n,4n,5n,7n,8n,9n],weights=N===9n?[491n,635n,347n,720n,736n,246n]:[491n,635n,347n,720n,736n,246n,367n];
const actual=[div(ln2,root(2n)),div(log(R(3n)),root(3n)),div(ln2,TWO),div(log(R(5n)),root(5n))];
actual.push(div(log(R(7n)),root(7n)),div(ln2,root(8n)));
if(N===11n)actual.push(div(log(R(3n)),R(3n)));
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
if(typeof module!=="undefined")module.exports=rationalNineWitness;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module)console.log(JSON.stringify(rationalNineWitness(),null,2));

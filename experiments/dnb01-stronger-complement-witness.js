// Reproduce: node experiments/dnb01-stronger-complement-witness.js
function strongerSchur(){
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



const absup=a=>max([a[1],-a[0]]),widen=(a,b)=>[a[0]-b,a[1]+b];
function fact(n){let f=1n;for(let i=2n;i<=BigInt(n);i++)f*=i;return f}
const degree=30, g=[ONE];
for(let m=1;m<=degree+1;m++){
 let v=R(1n,2n**BigInt(m)*fact(m));
 for(let k=2;k<=m;k+=2)v=sub(v,mul(g[m-k],R(1n,fact(k+1))));
 g.push(v)
}
const jcoef=g.slice(1).map(x=>div(x,TWO));
// w(s)=2cosh(s/2)-j(s), uniform power-series remainder <=5*2^-30 + 10^-30.
const wcoef=jcoef.map((x,k)=>sub(k%2?ZERO:R(2n,2n**BigInt(k)*fact(k)),x));
const werr=add(R(5n,2n**BigInt(degree)),R(1n,10n**30n));
const sqrt2=[1414213562373095048n,1414213562373095050n];
if(sqrt2[0]**2n>2n*Q*Q||sqrt2[1]**2n<2n*Q*Q)throw Error("sqrt");
const prime=div(ln2,sqrt2),C=neg(add(add(gamma,ln2),log(pi)));
const e=expneg(R(1n,2n)),cnorm=add(div(sub(div(ONE,e),e),TWO),R(1n,2n));
function pow(a,k){let b=ONE;for(let i=0;i<k;i++)b=mul(b,a);return b}
function kernelPrimitive(x){
 let p=ZERO;for(let k=degree;k>=0;k--)p=add(div(wcoef[k],R(BigInt((k+1)*(k+2)))),mul(x,p));
 return mul(square(x),p)
}
function positive(a){return[max([0n,a[0]]),max([0n,a[1]])]}
function absI(a){return a[0]>=0n?a:a[1]<=0n?neg(a):[0n,absup(a)]}
function bump(x){return positive(sub(ONE,absI(x)))}
function cellMatrix(m){
 const h=R(1n,BigInt(m)), shift=mul(R(BigInt(m)),ln2),tail=mul(h,werr)[1];
 const prim=Array.from({length:m+1},(_,r)=>kernelPrimitive(R(BigInt(r),BigInt(m))));
 const xlog=Array.from({length:m+1},(_,r)=>r===0?ZERO:mul(R(BigInt(r)),log(R(BigInt(r)))));
 const d=[];
 for(let r=0;r<m;r++){
  const arch=r===0?add(add(C,ONE),log(R(BigInt(m)))):neg(div(add(sub(xlog[r+1],mul(TWO,xlog[r])),xlog[r-1]),TWO));
  const regular=widen(div(r===0?mul(TWO,prim[1]):add(sub(prim[r+1],mul(TWO,prim[r])),prim[r-1]),h),tail);
  const shiftterm=mul(prime,add(bump(sub(R(BigInt(r)),shift)),bump(add(R(BigInt(r)),shift))));
  d.push(sub(add(arch,regular),shiftterm));
 }
 return d
}
const midpoint=a=>Number(a[0]+a[1])/2e18;
function approxMin(H){
 const n=H.length, A=H.map(x=>x.slice()), U=Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>i===j?1:0));
 for(let sweep=0;sweep<30;sweep++){
  let big=0;for(let p=0;p<n;p++)for(let q=p+1;q<n;q++){
   const apq=A[p][q];big=Math.max(big,Math.abs(apq));if(Math.abs(apq)<1e-12)continue;
   const tau=(A[q][q]-A[p][p])/(2*apq),t=(tau>=0?1:-1)/(Math.abs(tau)+Math.sqrt(1+tau*tau)),c=1/Math.sqrt(1+t*t),s=t*c;
   for(let j=0;j<n;j++)if(j!==p&&j!==q){const x=A[j][p],y=A[j][q];A[j][p]=A[p][j]=c*x-s*y;A[j][q]=A[q][j]=s*x+c*y}
   A[p][p]-=t*apq;A[q][q]+=t*apq;A[p][q]=A[q][p]=0;
   for(let j=0;j<n;j++){const x=U[j][p],y=U[j][q];U[j][p]=c*x-s*y;U[j][q]=s*x+c*y}
  }if(big<1e-10)break;
 }
 let j=0;for(let i=1;i<n;i++)if(A[i][i]<A[j][j])j=i;
 return {value:A[j][j],v:U.map(row=>row[j])};
}
const rows=[];
for(const m of [6,8,16,24,32,64,128]){
 const d=cellMatrix(2*m),H=[],G=[];
 for(let i=0;i<m;i++){let h=[],g=[];for(let j=0;j<m;j++){
  const a=d[Math.abs(2*i-2*j)],b=d[Math.abs(2*i-2*j-1)],c=d[Math.abs(2*i+1-2*j)],e=d[Math.abs(2*i-2*j)];
  h.push(div(add(add(a,b),add(c,e)),TWO));
  g.push(div(sub(add(a,b),add(c,e)),TWO));
 }H.push(h);G.push(g)}
 const delta=sub(sub(log(R(BigInt(m),2n)),mul(TWO,prime)),div(add(R(3n),cnorm),mul(R(BigInt(2*m*m)),square(pi))));
 if(delta[0]<=0n)throw Error("complement");
 const d0=[delta[0],delta[0]],hn=H.map(row=>row.map(midpoint)),gn=G.map(row=>row.map(midpoint)),dn=midpoint(d0);
 const lower=hn.map((row,i)=>row.map((x,j)=>x-gn.reduce((s,r)=>s+r[i]*r[j],0)/dn));
 const test=approxMin(lower);
 const weights=test.v.map(x=>BigInt(Math.round(x*1e9)));
 const v=weights.map(x=>R(x,1000000000n));
 function apply(M,v){return M.map(row=>row.reduce((s,x,i)=>add(s,mul(x,v[i])),ZERO))}
 const hv=apply(H,v),gv=apply(G,v),norm=v.reduce((s,x)=>add(s,square(x)),ZERO);
 const q=v.reduce((s,x,i)=>add(s,mul(x,hv[i])),ZERO),rho=gv.reduce((s,x)=>add(s,square(x)),ZERO);
 const upper=sub(q,div(rho,d0));
 const ret={m,delta:delta.map(String),numericCandidate:test.value,weights:weights.map(String),norm:norm.map(String),ritz:div(q,norm).map(String),refinedResidualSquared:div(rho,norm).map(String),criterionUpper:div(upper,norm).map(String),failure:upper[1]<0n};
 rows.push(ret);
}
return {scale:String(Q),degree,weightScale:"1000000000",rows};
}
console.log(JSON.stringify(strongerSchur(),null,2));

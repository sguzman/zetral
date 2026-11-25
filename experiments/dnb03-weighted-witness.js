// Reproduce: node experiments/dnb03-weighted-witness.js
function weighted(){
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




const witnesses=[{"m":6,"weights":["409170212","168105178","-551652415","-551652415","168105178","409170212"],"norm":["1000000000467737706","1000000000467737706"],"ritz":["290987724223147809","290995331844333370"]},{"m":8,"weights":["-318474945","-512650442","87245536","357982473","357982473","87245536","-512650442","-318474945"],"norm":["1000000001605342828","1000000001605342828"],"ritz":["304200338980084743","304207946274268844"]},{"m":16,"weights":["-21178667","-111882524","-233586899","-338429559","-380760641","-337535253","-229088374","-80908364","80908364","229088374","337535253","380760641","338429559","233586899","111882524","21178667"],"norm":["1000000000243006818","1000000000243006818"],"ritz":["47069095838159732","47076702541991599"]},{"m":24,"weights":["-10921682","-50161791","-107976232","-174550030","-238138202","-286744924","-310246395","-301887812","-263012628","-203321362","-128361896","-43868048","43868048","128361896","203321362","263012628","301887812","310246395","286744924","238138202","174550030","107976232","50161791","10921682"],"norm":["1000000000226408052","1000000000226408052"],"ritz":["24938181497667152","24945788176989061"]},{"m":32,"weights":["13419125","37570947","69856174","108067787","148981336","188799293","223578620","249655020","264050201","264760897","250044261","221676117","183207525","136750791","84439987","28548510","-28548510","-84439986","-136750791","-183207525","-221676117","-250044261","-264760897","-264050201","-249655020","-223578620","-188799293","-148981336","-108067787","-69856174","-37570947","-13419125"],"norm":["999999999575796065","999999999575796065"],"ritz":["14125996721321914","14133603551968671"]}];
const J=1024,K=4;
const sqrt2=[1414213562373095048n,1414213562373095050n];
if(sqrt2[0]**2n>2n*Q*Q||sqrt2[1]**2n<2n*Q*Q)throw Error("sqrt");
const prime=div(ln2,sqrt2),e=expneg(R(1n,2n));
const sinh=div(sub(div(ONE,e),e),TWO),cnorm=add(sinh,R(1n,2n)),snorm=sub(sinh,R(1n,2n));
function isqrt(n){if(n<0n)throw Error("sqrt");if(n<2n)return n;let x=1n<<BigInt(Math.ceil(n.toString(2).length/2));for(;;){let y=(x+n/x)/2n;if(y>=x)return x;x=y}}
function root(a){const lo=max([0n,a[0]]),hi=max([0n,a[1]]),l=isqrt(lo*Q),u=isqrt(hi*Q);return[l,u*u===hi*Q?u:u+1n]}
function expScaled(x){let k=0;while(x[1]>Q/2n){x=div(x,TWO);k++}let q=expneg(x);for(let i=0;i<k;i++)q=square(q);return[max([0n,q[0]]),min([Q,q[1]])]}
function sinSmall(x){
 let xx=square(x),p=x,s=x;
 for(let j=1;j<=24;j++){p=div(mul(p,xx),R(BigInt((2*j)*(2*j+1))));s=add(s,j%2?neg(p):p)}
 let next=div(mul(p,xx),R(50n*51n));return[s[0]-next[1],s[1]];
}
function sinPi(x){let k=floor(x[0],Q);if(floor(x[1],Q)!==k)throw Error("sin reduction");let y=sinSmall(mul(pi,sub(x,R(k))));return k%2n?neg(y):y}
function norm2(v){return v.reduce((s,x)=>add(s,square(x)),ZERO)}
const results=[];
for(const w of witnesses){
 const m=w.m,h=R(1n,BigInt(m)),v=w.weights.map(x=>R(BigInt(x),1000000000n));
 const vnorm2=norm2(v),vnorm=root(vnorm2),omega2=Array.from({length:K},(_,i)=>square(mul(pi,R(BigInt((i+1)*m)))));
 const arch=Array.from({length:K},()=>Array.from({length:m},()=>ZERO));
 for(let j=0;j<J;j++){
  const r=R(BigInt(4*j+1),2n),q=expScaled(mul(r,h)),omq=sub(ONE,q),rr=square(r);
  let L=Array(m),U=Array(m);L[0]=ZERO;U[m-1]=ZERO;
  for(let i=1;i<m;i++)L[i]=add(v[i-1],mul(q,L[i-1]));
  for(let i=m-2;i>=0;i--)U[i]=add(v[i+1],mul(q,U[i+1]));
  for(let n=1;n<=K;n++){
   let eta=n%2?-1n:1n;
   const factor=div(mul(div(sqrt2,h),sub(ONE,mul(R(eta),q))),add(rr,omega2[n-1]));
   for(let i=0;i<m;i++){
    const br=sub(mul(R(1n+eta),v[i]),mul(omq,add(L[i],mul(R(eta),U[i]))));
    arch[n-1][i]=add(arch[n-1][i],mul(factor,br));
   }
  }
 }
 const rJ=R(BigInt(4*J+1),2n),rateErr=mul(div(mul(R(4n),sqrt2),h),add(div(ONE,square(rJ)),div(ONE,mul(TWO,rJ))));
 const s=mul(R(BigInt(m)),ln2),kk=floor(s[0],Q);
 if(floor(s[1],Q)!==kk)throw Error("prime shift");
 const frac=sub(s,R(kk)),k=Number(kk),get=i=>i<0||i>=m?ZERO:v[i];
 let total=ZERO;const modes=[];
 for(let n=1;n<=K;n++){
  const npi=mul(R(BigInt(n)),pi),fac=neg(div(mul(mul(prime,sqrt2),sinPi(mul(R(BigInt(n)),frac))),npi));
  const rp=arch[n-1].map((x,i)=>add(x,mul(fac,add(mul(R(n%2?1n:-1n),sub(get(i+k),get(i+k+1))),sub(get(i-k-1),get(i-k))))));
  const norm=root(norm2(rp)),poleErr=div(mul(mul(TWO,h),root(mul(cnorm,snorm))),npi);
  const err=mul(add(rateErr,poleErr),vnorm);
  const lo=max([0n,norm[0]-err[1]]),rho=div(square([lo,lo]),vnorm2);
  const weight=sub(sub(log(R(BigInt(n*m),2n)),mul(TWO,prime)),div(add(R(3n,BigInt(n*n)),cnorm),mul(R(BigInt(2*m*m)),square(pi))));
  if(weight[0]<=0n)throw Error("positive weight");
  const fixedWeight=[weight[0],weight[0]];
  total=add(total,div([rho[0],rho[0]],fixedWeight));
  modes.push({n,weightLower:String(weight[0]),rhoLower:String(rho[0]),ratePlusPoleErrorUpper:String(err[1])});
 }
 const upper=sub(w.ritz.map(BigInt),[total[0],total[0]]);
 results.push({m,K,J,ritz:w.ritz,weightedCorrectionLower:String(total[0]),criterionUpper:String(upper[1]),failure:upper[1]<0n,modes});
}
return {scale:String(Q),witnessSource:"dnb01-stronger-complement-witness.json",results};
}
console.log(JSON.stringify(weighted(),null,2));

// AIR01: independent exact rational reference for Machin and elementary primitives.
// Reference arithmetic uses unreduced rational products with gcd normalization.
function audit(source){
 const start=source.indexOf("const Q=10n**66n"),end=source.indexOf("const bounds=",start);
 if(start<0||end<0)throw Error("source markers");
 const p=new Function('const params={J:4096,M:5120,T:448};'+source.slice(start,end)+";return {Q,R,pi,atan,atanPos,log,expAny,trig,rootI,gamma,alpha}")();
 const Q=p.Q,abs=x=>x<0n?-x:x,gcd=(a,b)=>b?gcd(b,a%b):abs(a);
 const rat=(n,d=1n)=>{if(d===0n)throw Error("zero denominator");if(d<0n){n=-n;d=-d}const g=gcd(n,d);return[n/g,d/g]};
 const add=(a,b)=>rat(a[0]*b[1]+b[0]*a[1],a[1]*b[1]),neg=a=>[-a[0],a[1]],sub=(a,b)=>add(a,neg(b)),mul=(a,b)=>rat(a[0]*b[0],a[1]*b[1]),div=(a,b)=>rat(a[0]*b[1],a[1]*b[0]),cmp=(a,b)=>a[0]*b[1]-b[0]*a[1];
 const contains=(I,l,u)=>cmp(rat(I[0],Q),l)<=0n&&cmp(rat(I[1],Q),u)>=0n;
 const assert=(x,msg)=>{if(!x)throw Error(msg)};
 function atanRef(x){let s=rat(0n),a=x,z=mul(x,x);for(let j=0;j<180;j++){const t=div(a,rat(BigInt(2*j+1)));s=add(s,j%2?neg(t):t);a=mul(a,z)}return [s,add(s,div(a,rat(361n)))]}
 function logRef(x){let r=div(sub(x,rat(1n)),add(x,rat(1n))),z=mul(r,r),a=r,s=rat(0n);for(let j=0;j<180;j++){s=add(s,div(a,rat(BigInt(2*j+1))));a=mul(a,z)}s=mul(rat(2n),s);const t=div(mul(rat(2n),a),mul(rat(361n),sub(rat(1n),z)));return[s,add(s,t)]}
 function expRef(x){let t=rat(1n),s=t;for(let j=1;j<=120;j++){t=div(mul(t,x),rat(BigInt(j)));s=add(s,j%2?neg(t):t)}return[sub(s,div(mul(t,x),rat(121n))),s]}
 function trigRef(x,sine){let t=sine?x:rat(1n),s=t,z=mul(x,x);for(let j=1;j<=80;j++){t=neg(div(mul(t,z),rat(BigInt(sine?2*j*(2*j+1):(2*j-1)*2*j))));s=add(s,t)}let err=div(mul(t,z),rat(BigInt(sine?162*163:161*162)));err=rat(abs(err[0]),err[1]);return[sub(s,err),add(s,err)]}
 const tests=[];
 function check(name,I,b){assert(contains(I,b[0],b[1]),name);tests.push(name)}
 const a=atanRef(rat(1n,5n)),b=atanRef(rat(1n,239n));
 const pi=[sub(mul(rat(16n),a[0]),mul(rat(4n),b[1])),sub(mul(rat(16n),a[1]),mul(rat(4n),b[0]))];
 check("Machin pi",p.pi,pi);check("atan 1/5",p.atan(p.R(1n,5n)),a);check("atan 1/239",p.atan(p.R(1n,239n)),b);
 for(const [n,d] of [[1n,8n],[1n,2n],[3n,4n],[1n,1n],[3n,2n],[4n,1n]]){
  const x=rat(n,d);let ref;if(n<=d/2n)ref=atanRef(x);else if(n>=2n*d){const q=atanRef(rat(d,n));ref=[sub(div(pi[0],rat(2n)),q[1]),sub(div(pi[1],rat(2n)),q[0])]}else{const z=div(sub(x,rat(1n)),add(x,rat(1n)));const sign=z[0]<0n?-1:1, t=atanRef(rat(abs(z[0]),z[1])),q=sign<0?[neg(t[1]),neg(t[0])]:t;ref=[add(div(pi[0],rat(4n)),q[0]),add(div(pi[1],rat(4n)),q[1])]}check("atanPos "+n+"/"+d,p.atanPos(p.R(n,d)),ref)
 }
 for(const [n,d] of [[1n,1n],[9n,8n],[3n,2n],[2n,1n],[3n,1n],[7n,1n],[8n,1n]]){let x=rat(n,d),k=0;while(x[0]>=2n*x[1]){x=div(x,rat(2n));k++}const t=logRef(x),l2=logRef(rat(2n));check("log "+n+"/"+d,p.log(p.R(n,d)),[add(t[0],mul(rat(BigInt(k)),l2[0])),add(t[1],mul(rat(BigInt(k)),l2[1]))])}
 for(const [n,d] of [[0n,1n],[1n,8n],[1n,2n],[1n,1n],[3n,1n],[8n,1n]]){check("expneg "+n+"/"+d,p.expAny(p.R(n,d)),expRef(rat(n,d)))}
 for(const n of [0n,1n,3n,6n])for(const sine of [false,true])check((sine?"sin ":"cos ")+n,p.trig(p.R(n),sine),trigRef(rat(n),sine));
 for(const n of [2n,3n,5n,7n]){const x=p.rootI(n);assert(x[0]*x[0]<=n*Q*Q&&x[1]*x[1]>=n*Q*Q,"sqrt");tests.push("sqrt "+n)}
 // Show an actual failure of the obsolete 24-term/81 implementation at 10^66.
 const old=new Function('const params={J:4096,M:5120,T:448};'+source.slice(start,end).replace("j<80;j++){let term=div(p,R(BigInt(2*j+1)));s=add(s,j%2?neg(term):term);p=mul(p,a2)}let next=div(p,R(161n))","j<24;j++){let term=div(p,R(BigInt(2*j+1)));s=add(s,j%2?neg(term):term);p=mul(p,a2)}let next=div(p,R(81n))")+";return {pi,atan,R}")();
 assert(cmp(rat(old.atan(old.R(1n,5n))[1],Q),a[0])<0n,"old atan upper not falsified");
 assert(cmp(rat(old.pi[1],Q),pi[0])<0n,"old pi upper not falsified");
 return {checks:tests,passed:tests.length,oldAtanUpperBelowReference:true,oldPiUpperBelowReference:true,correctedPi:p.pi.map(String),oldPi:old.pi.map(String),scale:String(Q),scope:"finite exact rational reference tests; not exhaustive interval proof"};
}
if(typeof module!=="undefined")module.exports=audit;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){const fs=require("node:fs");console.log(JSON.stringify(audit(fs.readFileSync(process.argv[2],"utf8")),null,2))}

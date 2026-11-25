// FDA02 independent stored integer-matrix replay and derivative arithmetic samples.
// Exact positive-scaled Schur elimination, with gcd normalization; not Bareiss.
const abs=x=>x<0n?-x:x;
function gcd(a,b){a=abs(a);b=abs(b);while(b){[a,b]=[b,a%b]}return a}
function rat(a,b){if(b<=0n)throw Error("denominator");const g=gcd(a,b);return[a/g,b/g]}
function auditMatrix(A,expected){
 let B=A.map(row=>row.map(BigInt)),s=[1n,1n],det=[1n,1n],minors=[];
 if(B.some((row,i)=>row.length!==B.length||row.some((x,j)=>x!==B[j][i])))throw Error("symmetry");
 while(B.length){
  const p=B[0][0];if(p<=0n)throw Error("nonpositive Schur pivot");
  det=rat(det[0]*s[0]*p,det[1]*s[1]);if(det[1]!==1n)throw Error("nonintegral determinant");minors.push(String(det[0]));
  if(B.length===1)break;
  const C=B.slice(1).map((row,i)=>row.slice(1).map((x,j)=>p*x-B[i+1][0]*B[0][j+1]));
  let g=0n;for(const row of C)for(const x of row)g=gcd(g,x);
  if(!g)throw Error("zero Schur");
  B=C.map(row=>row.map(x=>x/g));s=rat(s[0]*g,s[1]*p);
 }
 if(minors.join()!==expected.join())throw Error("stored determinant mismatch");
 return minors;
}
function basisAudit(r){
 const V=r.basis.map(row=>row.map(BigInt)),n=V.length;
 if(n!==r.ks.length||V.some(row=>row.length!==n)||r.trial.length!==n||r.trial.some(row=>row.length!==r.ts.length))throw Error("trial dimensions");
 const G=V.map(a=>V.map(b=>a.reduce((s,x,i)=>s+x*b[i],0n)));
 if(!G.every((row,i)=>row[i]>row.reduce((s,x,j)=>s+(i===j?0n:abs(x)),0n)))throw Error("basis Gram not strictly diagonally dominant");
 return n;
}
function primitiveAudit(){
 const Q=10n**54n,ceil=(a,b)=>(a+b-1n)/b,R=(a,b=1n)=>[a*Q/b,ceil(a*Q,b)],add=(a,b)=>[a[0]+b[0],a[1]+b[1]],mul=(a,b)=>[a[0]*b[0]/Q,ceil(a[1]*b[1],Q)],div=(a,b)=>[a[0]*Q/b[1],ceil(a[1]*Q,b[0])];
 let checked=0,improved=0,largestRatio=0n,examples=[];
 for(const j of [0n,1n,31n,511n,3071n,6143n,12287n])for(const [xn,xd] of [[0n,1n],[1n,3n],[17n,2n],[576n**2n,7n],[6656n**2n,3n]]){
  const rn=(4n*j+1n)**2n,rd=4n,rr=R(rn,rd),x=R(xn,xd),z=add(rr,x),f=div(R(1n),z),old=mul(rr,mul(f,f)),stable=div(rr,mul(z,z));
  const a=rn*rd*xd*xd,b=(rn*xd+xn*rd)**2n;
  for(const v of [old,stable])if(v[0]*b>a*Q||v[1]*b<a*Q)throw Error("exact primitive outside enclosure");
  const w=old[1]-old[0],v=stable[1]-stable[0];checked++;if(v<w)improved++;
  if(v>0n&&w/v>largestRatio)largestRatio=w/v;
  if(j===12287n&&xn===0n)examples.push({j:String(j),x:"0",oldWidth:String(w),stableWidth:String(v)});
 }
 return{checked,improved,largestIntegerWidthRatio:String(largestRatio),examples};
}
function audit(even,reweighted,odd){
 const e=even.rows[0],o=odd.rows[0],r=reweighted.results[0];
 if(!r.certified||!o.certified||e.h!=="23/10"||o.h!==e.h||e.odd||!o.odd||even.scale!==odd.scale||even.scale!==reweighted.scale)throw Error("certificate metadata");
 const em=auditMatrix(r.lowerInteger,r.principalMinors),om=auditMatrix(o.lowerInteger,o.principalMinors);
 return{h:e.h,evenMinors:em.length,oddMinors:om.length,basisDimensions:[basisAudit(e),basisAudit(o)],allStoredDeterminantsMatch:true,primitiveAudit:primitiveAudit(),scope:"independent stored integer matrices and rational derivative samples only; not a full operator verifier"};
}
if(typeof module!=="undefined")module.exports=audit;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){const fs=require("node:fs");console.log(JSON.stringify(audit(...process.argv.slice(2).map(p=>JSON.parse(fs.readFileSync(p,"utf8")))),null,2));}

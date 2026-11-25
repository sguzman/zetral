// Joint positive Cauchy shares across seven rank terms and each eighth-tail direction.
// Float dual-density iteration proposes rational shares; exact integer replay decides.
function joint(data,source){
 const r=data.rows[0],n=r.ks.length,old=r.tailShares.map(Number),den0=Number(r.tailShareDenominator),c=r.componentIntervals;
 const keys=["leading","second","third","fourth","fifth","sixth","seventh"];
 const E=r.diagnostics.map(a=>Number(a.upper[0]));if(E.some(e=>!(e>0)))throw Error("energy");
 const mid=a=>(Number(a[0])+Number(a[1]))/2;
 const norm=(a,i,j)=>mid(a)/Math.sqrt(E[i]*E[j]);
 const F=c.finite.map((row,i)=>row.map((a,j)=>norm(a,i,j)));
 const R=keys.map((k,t)=>c[k].map((row,i)=>row.map((a,j)=>norm(a,i,j)*old[t]/den0)));
 const q=r.diagnostics.map((a,i)=>Number(a.eighthUpper)/E[i]*old[7]/den0);
 const quad=(A,v)=>A.reduce((s,row,i)=>s+v[i]*row.reduce((z,a,j)=>z+a*v[j],0),0);
 function eig(p,start){
  const A=F.map((row,i)=>row.map((a,j)=>R.reduce((s,B,k)=>s+B[i][j]/p[k],a)+(i===j?q[i]/p[7+i]:0)));
  let v=start.slice(),lambda=0;
  for(let t=0;t<80;t++){const z=A.map(row=>row.reduce((s,a,j)=>s+a*v[j],0));const len=Math.hypot(...z);v=z.map(a=>a/len);lambda=len}
  return {v,lambda};
 }
 const costs=v=>R.map(A=>Math.max(0,quad(A,v))).concat(q.map((a,i)=>a*v[i]**2));
 const alloc=a=>{const b=a.map(x=>Math.max(1e-9,Math.sqrt(Math.max(0,x))));const s=b.reduce((x,y)=>x+y,0);return b.map(x=>x/s)};
 let avg=R.map(A=>Math.max(0,A.reduce((s,row,i)=>s+row[i],0))/n).concat(q.map(x=>x/n));
 let p=alloc(avg),v=Array(n).fill(1/Math.sqrt(n)),best=Infinity,candidates=[],history=[];
 for(let t=0;t<400;t++){
  const e=eig(p,v);v=e.v;const a=costs(v);let dual=quad(F,v)+a.reduce((s,x)=>s+Math.sqrt(x),0)**2;
  if(e.lambda<best){best=e.lambda;if(t%5===0||candidates.length===0)candidates.push({p:p.slice(),score:best,t});}
  if(t%50===0)history.push({t,lambda:e.lambda,rankOneDual:dual});
  const step=2/(t+3);avg=avg.map((x,i)=>(1-step)*x+step*a[i]);p=alloc(avg);
 }
 candidates.push({p,score:eig(p,v).lambda,t:400});
 candidates.sort((a,b)=>a.score-b.score);const selected=candidates.slice(0,8);
 const ceil=(a,b)=>(a+b-1n)/b;
 const a="function reallocate(data,candidates){",b="function lower(shares,den){",cc="BigInt(c.eighth[i])*old[7]",d="const A=lower(shares,den),t=pd(A);";
 for(const x of [a,b,cc,d])if(!source.includes(x))throw Error("source anchor");
 const patch=source.replace(a,"function reallocate(data,candidates,directionDiagonal){").replace(b,"function lower(shares,den,direction=false){").replace(cc,"(direction?directionDiagonal[i]:BigInt(c.eighth[i]))*old[7]").replace(d,"const A=lower(shares,den,true),t=pd(A);").replace('if(den===D0&&shares.every','if(!direction&&den===D0&&shares.every');
 const replay=new Function(patch+"\nreturn reallocate;")();
 const results=[];
 for(const cand of selected){
  const D=1000000000000,weights=cand.p.map(x=>Math.max(1,Math.round(x*D)));weights[0]+=D-weights.reduce((a,b)=>a+b,0);
  if(weights.some(x=>x<=0))throw Error("weights");
  const w=weights.slice(7).map(BigInt),W=w.reduce((a,b)=>a+b,0n);
  const diagonal=r.diagnostics.map((x,i)=>ceil(BigInt(x.eighthUpper)*W,w[i]));
  const shares=weights.slice(0,7).map(String).concat(String(W));
  const out=replay(data,[{shares,den:String(D)}],diagonal);
  results.push({score:cand.score,t:cand.t,weights:weights.map(String),directionDiagonal:diagonal.map(String),result:out.results[0]});
 }
 return {h:r.h,odd:r.odd,baselineReconstructed:true,history,best,results,scope:"joint rational Cauchy allocation of inherited stored bounds, no independent original-form audit"};
}
if(typeof module!=="undefined")module.exports=joint;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){
 const fs=require("node:fs"),path=require("node:path");
 console.log(JSON.stringify(joint(JSON.parse(fs.readFileSync(process.argv[2],"utf8")),fs.readFileSync(path.join(__dirname,"lpa03-weighted-reallocation.js"),"utf8")),null,2));
}

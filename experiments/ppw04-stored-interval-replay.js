// PPW04: independent integer-only replay of eight-term stored comparison intervals.
function verify(data){
 const Q=BigInt(data.scale),r=data.rows[0],n=r.ks.length;
 const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
 assert(Q===10n**54n&&((r.h==="43/20"&&n===24&&r.J===4096&&r.M===5120&&r.T===448&&r.S===225)||(r.h==="11/5"&&n===28&&r.J===4096&&r.M===6144&&r.T===512&&r.S===257)),"parameters");
 assert(r.ks.every((x,i)=>x===2*i+Number(r.odd))&&r.ts.every((x,i)=>x===2*(i+n)+Number(r.odd))&&r.ts[r.ts.length-1]===r.T-Number(r.odd),"mode list");
 assert(BigInt(r.highWeight[0])>0n&&BigInt(r.primeNormUpper)===(r.h==='43/20'?2303n:2378n)*Q/1000n,"saved high bound");
 const V=r.basis.map(a=>a.map(BigInt)),X=r.trial.map(a=>a.map(BigInt)),abs=x=>x<0n?-x:x;
 assert(V.length===n&&V.every(a=>a.length===n)&&X.length===n&&X.every(a=>a.length===r.ts.length),"trial shape");
 const gram=V.map(a=>V.map(b=>a.reduce((s,x,i)=>s+x*b[i],0n)));
 assert(gram.every((a,i)=>a[i]>a.reduce((s,x,j)=>s+(j===i?0n:abs(x)),0n)),"basis invertibility");
 const c=r.componentIntervals,keys=["upper","finite","leading","second","third","fourth","fifth","sixth","seventh"];
 for(const k of keys)assert(c[k].length===n&&c[k].every(a=>a.length===n&&a.every(b=>b.length===2&&BigInt(b[0])<=BigInt(b[1]))),"interval shape "+k);
 const mat=c.upper.map((a,i)=>a.map((b,j)=>{let l=BigInt(b[0]),u=BigInt(b[1]);for(const k of keys.slice(1)){l-=BigInt(c[k][i][j][1]);u-=BigInt(c[k][i][j][0])}if(i===j){const d=BigInt(c.eighth[i]);assert(d>=0n,"eighth");l-=d;u-=d}return[l,u]}));
 const max=(a,b)=>a>b?a:b,min=(a,b)=>a<b?a:b;
 const mids=mat.map((a,i)=>a.map((b,j)=>{const l=max(b[0],mat[j][i][0]),u=min(b[1],mat[j][i][1]);assert(l<=u,"symmetry");return (l+u)/2n}));
 const radii=mat.map((a,i)=>a.map((b,j)=>max(mids[i][j]-max(b[0],mat[j][i][0]),min(b[1],mat[j][i][1])-mids[i][j])));
 const lower=mids.map((a,i)=>a.map((x,j)=>x-(i===j?radii[i].reduce((s,v)=>s+v,0n):0n)));
 assert(lower.every((a,i)=>a.every((x,j)=>x===BigInt(r.lowerInteger[i][j]))),"lower reconstruction");
 const A=lower.map(a=>a.slice());let prev=1n;const dets=[];
 for(let k=0;k<n;k++){const p=A[k][k];assert(p>0n,"nonpositive minor "+k);dets.push(p.toString());for(let i=k+1;i<n;i++)for(let j=k+1;j<n;j++){const z=p*A[i][j]-A[i][k]*A[k][j];assert(z%prev===0n,"nonexact division");A[i][j]=z/prev}prev=p;}
 assert(dets.every((x,i)=>x===r.principalMinors[i]),"minor mismatch");
 return {h:r.h,odd:r.odd,dimension:n,trialColumns:r.ts.length,firstMinor:dets[0],positiveMinors:dets.length,allStoredMinorsMatch:true,allLowerEntriesMatch:true,exactBasisInvertible:true,scope:"stored intervals only; not their analytic generation"};
}
if(typeof module!=="undefined")module.exports=verify;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){const fs=require("node:fs");console.log(JSON.stringify(process.argv.slice(2).map(p=>verify(JSON.parse(fs.readFileSync(p,"utf8")))),null,2));}

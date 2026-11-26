// Assemble verified disjoint residual chunks with exact interval addition.
function assemble(source,stored,chunks){
 const n=44,Q=10n**66n,assert=(x,m)=>{if(!x)throw Error(m)};
 assert(stored.scale===String(Q)&&stored.h==="49/20"&&stored.odd===true&&stored.T===832&&stored.M===12288&&stored.ks.length===n,"trial regime");
 const sum=Array.from({length:n},()=>Array.from({length:n},()=>[0n,0n]));let start=89,count=0;
 for(const c of chunks){assert(c.start===start&&c.end%2===1&&c.count===(c.end-c.start)/2+1&&c.scale===String(Q)&&c.finite.length===n&&c.finite.every(row=>row.length===n),"chunk coverage");for(let i=0;i<n;i++)for(let j=0;j<n;j++){const [l,h]=c.finite[i][j].map(BigInt);assert(l<=h,"interval");sum[i][j][0]+=l;sum[i][j][1]+=h}start=c.end+2;count+=c.count}
 assert(start===12289&&count===6100,"complete residual range");
 const at=source.indexOf("  const A=ks.map"),tail=source.indexOf("  const mm2=square(mm)"),end=source.indexOf('if(typeof module!=="undefined")');
 assert(at>0&&tail>at&&end>tail,"source anchors");
 const pre=source.slice(0,at).replaceAll("length:M+2","length:T+2");
 const inject=`
 const ns=[89],ts=stored.ts,upper=stored.upper.map(row=>row.map(x=>x.map(BigInt))),finite=sum;
 const V=stored.basis.map(row=>row.map(x=>[BigInt(x),BigInt(x)])),XT=stored.trial.map(row=>row.map(x=>[BigInt(x),BigInt(x)]));
 const dot=(a,b)=>a.reduce((s,x,i)=>add(s,mul(x,b[i])),ZERO);
 for(let i=0;i<ks.length;i++){const diag=dot(V[i],V[i]);let off=0n;for(let j=0;j<ks.length;j++)if(i!==j)off+=absup(dot(V[i],V[j]));if(diag[0]<=off)throw Error("singular basis");}
 const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(BigInt(3*(2*lowCount)**3)),square(square(pi))))):ZERO;
 const g=n=>sub(sub(weight(n),primeBound),poleLoss);
 const m=R(BigInt(M+1)),mm=R(BigInt(M-1)),gm=g(M+1),ak=div(mul(mul(TWO,sqrt2),h),square(pi)),p=psum,eh=add(ONE,E_h),CL=add(add(div(sqrt2,TWO),p),div(mul(ak,eh),m));
 const tails=stored.tails,s0=tails.map(t=>t.S0.map(BigInt)),s2=tails.map(t=>t.S2.map(BigInt)),s4=tails.map(t=>t.S4.map(BigInt)),s6=tails.map(t=>t.S6.map(BigInt)),v2=tails.map(t=>t.V2.map(BigInt)),v4=tails.map(t=>t.V4.map(BigInt)),v6=tails.map(t=>t.V6.map(BigInt));
 `;
 return new Function("stored","sum",pre+inject+source.slice(tail,end)+"\nreturn primePowerCertificate;")(stored,sum)([true],{hn:49n,hd:20n,J:128,M:12288,T:832,lowCount:44,KEM:20});
}
if(typeof module!=="undefined")module.exports=assemble;
if(typeof require!=="undefined"&&require.main===module){const fs=require("node:fs"),base="experiments/results/tc03-49-20-odd-t832-",read=p=>fs.readFileSync(p,"utf8"),stored=JSON.parse([1,2,3].map(i=>read(base+"trial-part"+i+".txt")).join("")),chunks=Array.from({length:12},(_,i)=>JSON.parse(read(base+"finite-"+(89+1024*i)+"-"+Math.min(1111+1024*i,12287)+".json")));console.log(JSON.stringify(assemble(read("experiments/tc01-post-log11-em.js"),stored,chunks)));}

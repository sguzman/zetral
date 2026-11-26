// Assemble verified disjoint residual chunks with exact interval addition.
function assemble(source,stored,chunks){
 const odd=stored.odd;if(typeof odd!=="boolean")throw Error("parity");
 const n=47,Q=10n**66n,assert=(x,m)=>{if(!x)throw Error(m)};
 assert(stored.scale===String(Q)&&stored.h==="62/25"&&stored.T===832&&stored.M===16384&&stored.ks.length===n,"trial regime");
 const sum=Array.from({length:n},()=>Array.from({length:n},()=>[0n,0n]));let start=94+Number(odd),count=0;
 for(const c of chunks){assert(c.start===start&&c.end%2===Number(odd)&&c.count===(c.end-c.start)/2+1&&c.scale===String(Q)&&c.finite.length===n&&c.finite.every(row=>row.length===n),"chunk coverage");for(let i=0;i<n;i++)for(let j=0;j<n;j++){const [l,h]=c.finite[i][j].map(BigInt);assert(l<=h,"interval");sum[i][j][0]+=l;sum[i][j][1]+=h}start=c.end+2;count+=c.count}
 assert(start===16386-Number(odd)&&count===8146-Number(odd),"complete residual range");
 const at=source.indexOf("  const A=ks.map"),tail=source.indexOf("  const mm2=square(mm)"),end=source.indexOf('if(typeof module!=="undefined")');
 assert(at>0&&tail>at&&end>tail,"source anchors");
 const pre=source.slice(0,at).replaceAll("length:M+2","length:T+2");
 const inject=`
 const ns=[90+Number(odd)],ts=stored.ts,upper=stored.upper.map(row=>row.map(x=>x.map(BigInt))),finite=sum;
 const V=stored.basis.map(row=>row.map(x=>[BigInt(x),BigInt(x)])),XT=stored.trial.map(row=>row.map(x=>[BigInt(x),BigInt(x)]));
 const dot=(a,b)=>a.reduce((s,x,i)=>add(s,mul(x,b[i])),ZERO);
 for(let i=0;i<ks.length;i++){const diag=dot(V[i],V[i]);let off=0n;for(let j=0;j<ks.length;j++)if(i!==j)off+=absup(dot(V[i],V[j]));if(diag[0]<=off)throw Error("singular basis");}
 const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(BigInt(3*(2*lowCount)**3)),square(square(pi))))):ZERO;
 const g=n=>sub(sub(weight(n),primeBound),poleLoss);
 const m=R(BigInt(M+1)),mm=R(BigInt(M-1)),gm=g(M+1),ak=div(mul(mul(TWO,sqrt2),h),square(pi)),p=psum,eh=add(ONE,E_h),CL=add(add(div(sqrt2,TWO),p),div(mul(ak,eh),m));
 const tails=stored.tails,s0=tails.map(t=>t.S0.map(BigInt)),s2=tails.map(t=>t.S2.map(BigInt)),s4=tails.map(t=>t.S4.map(BigInt)),s6=tails.map(t=>t.S6.map(BigInt)),v2=tails.map(t=>t.V2.map(BigInt)),v4=tails.map(t=>t.V4.map(BigInt)),v6=tails.map(t=>t.V6.map(BigInt));
 `;
 return new Function("stored","sum",pre+inject+source.slice(tail,end)+"\nreturn primePowerCertificate;")(stored,sum)([odd],{hn:62n,hd:25n,J:128,M:16384,T:832,lowCount:47,KEM:20});
}
if(typeof module!=="undefined")module.exports=assemble;
if(typeof require!=="undefined"&&require.main===module){const fs=require("node:fs"),{extend}=require("./u72-staged.js"),read=p=>fs.readFileSync(p,"utf8"),odd=process.argv.includes("--odd"),base="experiments/results/u72-62-25-"+(odd?"odd":"even")+"-",start=94+Number(odd),last=16384-Number(odd),stored=JSON.parse(read("experiments/results/u72-62-25-even-t832-trial.json")),chunks=Array.from({length:16},(_,i)=>JSON.parse(read(base+"finite-"+(start+1024*i)+"-"+Math.min(start+1024*i+1022,last)+".json")));console.log(JSON.stringify(assemble(extend(read("experiments/tc01-post-log11-em.js")),stored,chunks)));}

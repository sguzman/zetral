// Assemble verified disjoint residual chunks with exact interval addition.
function assemble(source,stored,chunks){
 const odd=stored.odd;if(typeof odd!=="boolean")throw Error("parity");
 const n=45,Q=10n**66n,assert=(x,m)=>{if(!x)throw Error(m)};
 assert(stored.scale===String(Q)&&stored.h==="123/50"&&stored.T===832&&stored.M===12288&&stored.ks.length===n,"trial regime");
 const sum=Array.from({length:n},()=>Array.from({length:n},()=>[0n,0n]));let start=90+Number(odd),count=0;
 for(const c of chunks){assert(c.start===start&&c.end%2===Number(odd)&&c.count===(c.end-c.start)/2+1&&c.scale===String(Q)&&c.finite.length===n&&c.finite.every(row=>row.length===n),"chunk coverage");for(let i=0;i<n;i++)for(let j=0;j<n;j++){const [l,h]=c.finite[i][j].map(BigInt);assert(l<=h,"interval");sum[i][j][0]+=l;sum[i][j][1]+=h}start=c.end+2;count+=c.count}
 assert(start===12290-Number(odd)&&count===6100-Number(odd),"complete residual range");
 const at=source.indexOf("  const A=ks.map"),tail=source.indexOf("  const mm2=square(mm)"),end=source.indexOf('if(typeof module!=="undefined")module.exports=assemble;
if(typeof require!=="undefined"&&require.main===module){const fs=require("node:fs"),{extend}=require("./lxx-staged.js"),read=p=>fs.readFileSync(p,"utf8"),odd=process.argv.includes("--odd"),base="experiments/results/lxx-123-50-"+(odd?"odd":"even")+"-t832-",start=90+Number(odd),last=12288-Number(odd),stored=JSON.parse([1,2,3].map(i=>read(base+"trial-part"+i+".txt")).join("")),chunks=Array.from({length:12},(_,i)=>JSON.parse(read(base+"finite-"+(start+1024*i)+"-"+Math.min(start+1024*i+1022,last)+".json")));console.log(JSON.stringify(assemble(extend(read("experiments/tc01-post-log11-em.js")),stored,chunks)));}

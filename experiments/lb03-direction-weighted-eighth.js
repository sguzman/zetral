// LXIII: weighted Cauchy diagonal for the eighth-order tail.
// If ||v_i||^2 <= q_i, then ||sum x_i v_i||^2 <= sum q_i*x_i^2/p_i
// for positive p_i summing to one. q_i are the existing individual
// outward eighthUpper bounds (before the uniform dimension multiplier).
function directionReplay(data,source){
 const r=data.rows[0],n=r.ks.length,Q=10n**30n;
 const ceil=(a,b)=>(a+b-1n)/b;
 const q=r.diagnostics.map(x=>BigInt(x.eighthUpper));
 const e=r.diagnostics.map(x=>BigInt(x.upper[0]));
 if(q.some(x=>x<0n)||e.some(x=>x<=0n))throw Error("direction assumptions");
 const w=q.map((x,i)=>{const a=ceil(x*Q,e[i]);return a>0n?a:1n});
 const W=w.reduce((a,b)=>a+b,0n);
 const diagonal=q.map((x,i)=>ceil(x*W,w[i]));
 if(diagonal.some((v,i)=>v*w[i]<q[i]*W))throw Error("outward direction allocation");
 const a="function reallocate(data,candidates){",b="function lower(shares,den){",c="BigInt(c.eighth[i])*old[7]",d="const A=lower(shares,den),t=pd(A);";
 for(const x of [a,b,c,d])if(!source.includes(x))throw Error("source anchor");
 const patch=source.replace(a,"function reallocate(data,candidates,directionDiagonal){").replace(b,"function lower(shares,den,direction=false){").replace(c,"(direction?directionDiagonal[i]:BigInt(c.eighth[i]))*old[7]").replace(d,"const A=lower(shares,den,true),t=pd(A);").replace('if(den===D0&&shares.every','if(!direction&&den===D0&&shares.every');
 const f=new Function(patch+"\nreturn reallocate;")();
 const candidates=[];
 for(const tail of [10000,20000,30000,50000,75000,100000,150000,200000,300000,400000]){
   for(const [second,third] of [[40000,4500],[50000,5000],[80000,10000]]){
    const shares=[1000000-tail-second-third-87,second,third,79,3,4,1,tail].map(String);
    candidates.push({shares,den:"1000000"});
   }
 }
 const out=f(data,candidates,diagonal);
 return {...out,directionWeights:w.map(String),directionDenominator:String(W),individualEighth:q.map(String),directionDiagonal:diagonal.map(String),scope:"exact stored outward components; weighted Cauchy eighth remainder; baseline original uniform comparison reconstructed; no independent original-form identification"};
}
if(typeof module!=="undefined")module.exports=directionReplay;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){
 const fs=require("node:fs"),path=require("node:path");
 console.log(JSON.stringify(directionReplay(JSON.parse(fs.readFileSync(process.argv[2],"utf8")),fs.readFileSync(path.join(__dirname,"lpa03-weighted-reallocation.js"),"utf8")),null,2));
}

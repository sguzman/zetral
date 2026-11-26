function extend(source){
for(const [a,b] of [
["h[1]>=log(R(58n,5n))[0]","h[1]>=log(R(119n,10n))[0]"],
[" const witness=previous?"," const beyond=h[1]>=log(R(58n,5n))[0];\n const beyond70=h[1]>=log(R(47n,4n))[0];\n const witness=beyond70?rationalElevenWitness(119n,10n):beyond?rationalElevenWitness(47n,4n):previous?"],
["const boundNumerator=previous?","const boundNumerator=beyond70?2923n:beyond?2897n:previous?"],
["witnessWindow=previous?","witnessWindow=beyond70?'119/10':beyond?'47/4':previous?"],
["witness.best.checked!==(previous?","witness.best.checked!==(beyond70?58855:beyond?55613:previous?"]]){
if(!source.includes(a))throw Error("source anchor "+a);source=source.replace(a,b);}
return source;
}
// U71-02: M16384 parity-aware trial and finite residual stages.
const params={hn:247n,hd:100n,J:128,M:16384,T:832,lowCount:46,KEM:20};
function trial(source,odd=false){
 source=extend(source);
 const at=source.indexOf("  const residues=ns.map"), tail=source.indexOf("  const m=R(BigInt(M+1))"), end=source.indexOf("  const mm2=square(mm)");
 if(at<0||tail<at||end<tail)throw Error("anchors");
 const pre=source.slice(0,at).replaceAll("length:M+2","length:T+2").replace("n<=M;n+=2","n<=T;n+=2");
 const body=source.slice(tail,end)+`
 return {h:hn+"/"+hd,odd,J,M,T,KEM,lowCount:ks.length,scale:String(Q),ks,ts,primeNormUpper:String(primeBound[1]),witnessWindow,highWeight:g(ns[0]).map(String),basis:V.map(y=>y.map(x=>String(x[0]))),trial:XT.map(y=>y.map(x=>String(x[0]))),upper:upper.map(row=>row.map(x=>x.map(String))),tails};
 }
 }
 }return primePowerCertificate;`;
 return new Function(pre+body)()([odd],params);
}
function finite(source,stored,start,end){
 source=extend(source);const odd=stored.odd;if(typeof odd!=="boolean")throw Error("parity");
 if(!Number.isInteger(start)||!Number.isInteger(end)||start<92+Number(odd)||end>params.M||start>end||start%2!==Number(odd)||end%2!==Number(odd))throw Error("chunk");
 if(stored.h!=="247/100"||stored.T!==params.T||stored.M!==params.M||stored.ks.length!==46)throw Error("stored regime");
 const at=source.indexOf("  const A=ks.map");if(at<0)throw Error("anchor");
 // Arrays contain only requested mode indices, plus all low/trial support.
 const pre=source.slice(0,at).replace("const om=Array.from({length:M+2},(_,n)=>div(mul(pi,R(BigInt(n))),h)),om2=om.map(square);",`
 const needed=new Set(stored.ks.concat(stored.ts));for(let n=start;n<=end;n+=2)needed.add(n);
 const om=Array(M+2);for(const n of needed)om[n]=div(mul(pi,R(BigInt(n))),h);
 const om2=om.map(square);`).replace("const sums=Array.from({length:M+2},(_,n)=>{","const sums=om.map((_,n)=>{");
 if(!pre.includes("const needed=new Set")||!pre.includes("const sums=om.map"))throw Error("sparse anchors");
 const body=`
 const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(BigInt(3*(2*lowCount)**3)),square(square(pi))))):ZERO;
 const g=n=>sub(sub(weight(n),primeBound),poleLoss);
 const all=ks.concat(stored.ts),coeff=stored.basis.map((row,i)=>row.map(x=>[BigInt(x),BigInt(x)]).concat(stored.trial[i].map(x=>[-BigInt(x),-BigInt(x)])));
 if(ks.join(",")!==stored.ks.join(",")||all.length!==coeff[0].length||coeff.length!==ks.length)throw Error("support");
 const dot=(a,b)=>a.reduce((s,x,i)=>add(s,mul(x,b[i])),ZERO);
 const ns=[];for(let n=start;n<=end;n+=2)ns.push(n);
 const residues=ns.map(n=>{const row=all.map(k=>entry(n,k));return coeff.map(c=>dot(row,c))});
 const weights=ns.map(g);if(weights.some(x=>x[0]<=0n))throw Error("guard");
 const finite=ks.map((_,k)=>ks.map((_,l)=>{let a=ZERO;for(let i=0;i<ns.length;i++)a=add(a,div(mul(residues[i][k],residues[i][l]),weights[i]));return a.map(String)}));
 return {start,end,count:ns.length,finite,scale:String(Q)};
 }
 }
 }return primePowerCertificate;`;
 return new Function("stored","start","end",pre+body)(stored,start,end)([odd],params);
}
if(typeof module!=="undefined")module.exports={trial,finite,params,extend};
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){const fs=require("node:fs"),source=fs.readFileSync("experiments/tc01-post-log11-em.js","utf8");const [mode,...args]=process.argv.slice(2);if(mode==="trial")console.log(JSON.stringify(trial(source,args[0]==="odd")));else if(mode==="finite"){const stored=JSON.parse(fs.readFileSync(args[0],"utf8"));console.log(JSON.stringify(finite(source,stored,Number(args[1]),Number(args[2]))));}else throw Error("mode");}

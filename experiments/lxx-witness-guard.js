// Campaign LXX: exact witness and guards, using the inherited LXIX arithmetic.
const fs=require("node:fs"),p=require("node:path");
const s=fs.readFileSync(p.join(__dirname,"tc01-post-log11-em.js"),"utf8");
const witness=new Function(s.slice(0,s.indexOf("// PPW03:"))+"\nreturn rationalElevenWitness;")()(47n,4n);
if(witness.best.boundNumerator!=="2897"||witness.best.checked!==55613)throw Error("witness mismatch");
if(process.argv.includes("--witness")){process.stdout.write(JSON.stringify(witness));}else{
const anchor=" const rate=Array.from";
let prefix=s.slice(0,s.indexOf(anchor));
for(const [a,b] of [
["h[1]>=log(R(58n,5n))[0]","h[1]>=log(R(47n,4n))[0]"],
[" const witness=previous?"," const beyond=h[1]>=log(R(58n,5n))[0];\n const witness=beyond?rationalElevenWitness(47n,4n):previous?"],
["const boundNumerator=previous?","const boundNumerator=beyond?2897n:previous?"],
["witnessWindow=previous?","witnessWindow=beyond?'47/4':previous?"],
["witness.best.checked!==(previous?","witness.best.checked!==(beyond?55613:previous?"]]){
if(!prefix.includes(a))throw Error("source anchor "+a);prefix=prefix.replace(a,b);}
const tail=`
 const guards=[];for(let low=44;low<=50;low++)for(const odd of parities){const n=2*low+(odd?1:0);const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(BigInt(3*(2*low)**3)),square(square(pi))))):ZERO;const g=sub(sub(sub(log(div(R(BigInt(n)),mul(TWO,h))),div(mul(R(3n),square(h)),mul(R(2n*BigInt(n)**2n),square(pi)))),primeBound),poleLoss);guards.push({low,odd,n,g:g.map(String),positive:g[0]>0n});}rows.push({witnessWindow,guardSlack11:String(h[0]-ln11[1]),guardSlackEndpoint:String(log(R(47n,4n))[0]-h[1]),guardSlack13:String(ln13[0]-h[1]),guards});}return {scale:String(Q),rows};}return primePowerCertificate;`;
const result=new Function(prefix+tail)()([false,true],{hn:123n,hd:50n,J:128,M:12288,T:832,lowCount:45,KEM:20});
console.log(JSON.stringify(result,null,2));}

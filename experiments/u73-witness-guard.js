// Campaign LXXIII: exact witness and guards, using the inherited LXIX arithmetic.
const fs=require("node:fs"),p=require("node:path");
const s=fs.readFileSync(p.join(__dirname,"tc01-post-log11-em.js"),"utf8");
const witness=new Function(s.slice(0,s.indexOf("// PPW03:"))+"\nreturn rationalElevenWitness;")()(121n,10n);
if(witness.best.boundNumerator!=="2971"||witness.best.checked!==41549)throw Error("witness mismatch");
if(process.argv.includes("--witness")){process.stdout.write(JSON.stringify(witness));}else{
const anchor=" const rate=Array.from";
let prefix=s.slice(0,s.indexOf(anchor));
for(const [a,b] of [
["h[1]>=log(R(58n,5n))[0]","h[1]>=log(R(121n,10n))[0]"],
[" const witness=previous?"," const beyond=h[1]>=log(R(58n,5n))[0];\n const beyond70=h[1]>=log(R(47n,4n))[0];\n const beyond71=h[1]>=log(R(119n,10n))[0];\n const beyond72=h[1]>=log(R(12n,1n))[0];\n const witness=beyond72?rationalElevenWitness(121n,10n):beyond71?rationalElevenWitness(12n,1n):beyond70?rationalElevenWitness(119n,10n):beyond?rationalElevenWitness(47n,4n):previous?"],
["const boundNumerator=previous?","const boundNumerator=beyond72?2971n:beyond71?2930n:beyond70?2923n:beyond?2897n:previous?"],
["witnessWindow=previous?","witnessWindow=beyond72?'121/10':beyond71?'12/1':beyond70?'119/10':beyond?'47/4':previous?"],
["witness.best.checked!==(previous?","witness.best.checked!==(beyond72?41549:beyond71?29897:beyond70?58855:beyond?55613:previous?"]]){
if(!prefix.includes(a))throw Error("source anchor "+a);prefix=prefix.replace(a,b);}
const tail=`
 const guards=[];for(let low=44;low<=55;low++)for(const odd of parities){const n=2*low+(odd?1:0);const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(BigInt(3*(2*low)**3)),square(square(pi))))):ZERO;const g=sub(sub(sub(log(div(R(BigInt(n)),mul(TWO,h))),div(mul(R(3n),square(h)),mul(R(2n*BigInt(n)**2n),square(pi)))),primeBound),poleLoss);guards.push({low,odd,n,g:g.map(String),positive:g[0]>0n});}rows.push({witnessWindow,guardSlack11:String(h[0]-ln11[1]),guardSlackEndpoint:String(log(R(121n,10n))[0]-h[1]),guardSlack13:String(ln13[0]-h[1]),guards});}return {scale:String(Q),rows};}return primePowerCertificate;`;
const result=new Function(prefix+tail)()([false,true],{hn:249n,hd:100n,J:128,M:20480,T:832,lowCount:45,KEM:20});
console.log(JSON.stringify(result,null,2));}

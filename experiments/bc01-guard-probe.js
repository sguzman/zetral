// Guard-only exact probe, no operator-matrix certificate.
const fs=require('node:fs'),p=require('node:path');
const src=fs.readFileSync(p.join(__dirname,'bc01-log13-regime.js'),'utf8');
const anchor=" const rate=Array.from";if(!src.includes(anchor))throw Error("probe anchor");
const f=new Function(src.slice(0,src.indexOf(anchor))+" \n const guards=[];\n for(const low of [41,42,43,44,45,46,47,48,49,50]){\n for(const odd of parities){\n const n=2*low+(odd?1:0);\n const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(BigInt(3*(2*low)**3)),square(square(pi))))):ZERO;\n const g=sub(sub(sub(log(div(R(BigInt(n)),mul(TWO,h))),div(mul(R(3n),square(h)),mul(R(2n*BigInt(n)**2n),square(pi)))),primeBound),poleLoss);\n guards.push({low,odd,n,g:g.map(String),positive:g[0]>0n});\n }}\n rows.push({guardSlack11:String(h[0]-ln11[1]),guardSlack1110:String(log(R(111n,10n))[0]-h[1]),guardSlack13:String(ln13[0]-h[1]),guards});\n }\n return {scale:String(Q),rows};\n }\n return primePowerCertificate;")();
console.log(JSON.stringify(f([false,true],{hn:12n,hd:5n,J:4096,M:8192,T:768,lowCount:45}),null,2));

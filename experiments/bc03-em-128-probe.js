// Compare J128 KEM20 with J256 KEM16, selected modes only.
const fs=require("node:fs"),p=require("node:path");const indices=[0,1,2,40,80,127,256,768,1024,4096,8192];
const src=fs.readFileSync(p.join(__dirname,"bc03-general-em.js"),"utf8");
const fn=new Function("indices",src.slice(0,src.indexOf(" const shifts=")).replace("const sums=Array.from({length:M+2},(_,n)=>{","const sums=indices.map(n=>{")+" const out=sums.map((a,i)=>({n:indices[i],F:widen(a.base,Ferror).map(String),D:indices[i]<2*S?widen(a.bd,Derror).map(String):null,diag:indices[i]<2*S?a.diag.map(String):null}));return {scale:String(Q),errF:errF.map(String),errA:errA.map(String),out};\n }\n }\n return primePowerCertificate;")(indices);
const a=fn([false],{hn:12n,hd:5n,J:128,M:8192,T:768,lowCount:41,KEM:20}),b=fn([false],{hn:12n,hd:5n,J:256,M:8192,T:768,lowCount:41,KEM:16});
const tests=[];for(let i=0;i<indices.length;i++)for(const k of ["F","D","diag"]){if(!a.out[i][k])continue;const [l,h]=a.out[i][k].map(BigInt),[m,n]=b.out[i][k].map(BigInt);tests.push({n:indices[i],kind:k,overlap:l<=n&&m<=h,width128:String(h-l),width256:String(n-m)});}
console.log(JSON.stringify({J128:a,J256:b,tests},null,2));

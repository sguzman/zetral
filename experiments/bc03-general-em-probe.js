// Compare generalized EM with inherited expressions at two cutoffs. No full operator certificate.
const fs=require("node:fs"),p=require("node:path");const indices=[0,1,2,40,80,127,256,768,1024,4096,8192];
const snippet=" const out=sums.map((a,i)=>({n:indices[i],F:widen(a.base,Ferror).map(String),D:indices[i]<2*S?widen(a.bd,Derror).map(String):null,diag:indices[i]<2*S?a.diag.map(String):null}));return {scale:String(Q),out};\n }\n }\n return primePowerCertificate;";
function probe(file,J,KEM){let src=fs.readFileSync(p.join(__dirname,file),"utf8");let s=src.slice(0,src.indexOf(" const shifts="));s=s.replace("const sums=Array.from({length:M+2},(_,n)=>{","const sums=indices.map(n=>{");return new Function("indices",s+snippet)(indices)([false],{hn:12n,hd:5n,J,M:8192,T:768,lowCount:41,KEM});}
const a=probe("bc01-log13-regime.js",2048,5),b=probe("bc03-general-em.js",256,16),c=probe("bc01-log13-regime.js",256,5);
const tests=[];for(let i=0;i<indices.length;i++){for(const k of ["F","D","diag"]){if(!a.out[i][k])continue;let [al,ah]=a.out[i][k].map(BigInt),[bl,bh]=b.out[i][k].map(BigInt),[cl,ch]=c.out[i][k].map(BigInt);tests.push({n:indices[i],kind:k,referenceOverlap:al<=bh&&bl<=ah,oldOverlap:cl<=bh&&bl<=ch,newWidth:String(bh-bl),oldWidth:String(ch-cl),referenceWidth:String(ah-al)});}}
console.log(JSON.stringify({indices,old256:c,old2048:a,new256:b,tests},null,2));

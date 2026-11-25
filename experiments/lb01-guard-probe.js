// Guard-only probe of the inherited LPA01 generator. Does not certify a comparison matrix.
const fs = require("node:fs"), p = require("node:path");
const source = fs.readFileSync(p.join(__dirname,"lpa01-log11-regimes.js"),"utf8");
const a="  const A=ks.map(k=>ks.map(l=>entry(k,l)));", b="  const ts=ns.filter(n=>n<=T)";
if(!source.includes(a)||!source.includes(b))throw Error("probe anchor");
const probe=source.replace(a,"").replace(b,"  rows.push({odd,lowCount,n:ns[0],highWeight:g(ns[0]).map(String),guardSlack:String(ln11[0]-h[1]),witnessWindow});continue;\n"+b);
const f=new Function(probe+"\nreturn primePowerCertificate;")();
console.log(JSON.stringify(f([false,true],{hn:239n,hd:100n,J:4096,M:8192,T:768,lowCount:41}),null,2));

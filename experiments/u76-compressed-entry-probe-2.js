// Extract a 2x2 exact interval comparator from the shared compressed routine.
// This remains a comparator, not an independent source-form evaluation.
const fs = require("node:fs");
const source0 = fs.readFileSync("experiments/tc01-post-log11-em.js", "utf8");
const source = require("./u75-t1024-m24576-staged.js").extend(source0);
const anchor = "  const A=ks.map(k=>ks.map(l=>entry(k,l)));";
if (!source.includes(anchor)) throw new Error("compressed entry anchor missing");
const instrumented = source.replace(
  anchor,
  anchor + "\n  return {h:hn+'/'+hd,odd,scale:String(Q),ks,A:A.map(row=>row.map(x=>x.map(String)))};"
);
const probe = new Function("require", "module", instrumented + "\nreturn primePowerCertificate;")(require, {});
const params = { hn: 251n, hd: 100n, J: 128, M: 6, T: 5, lowCount: 2, KEM: 20 };
const output = [probe([false], params), probe([true], params)];
const result = {
  status: "exact interval comparator from shared compressed implementation; not independent source-form evaluation",
  runtime: process.version,
  parameters: { h: "251/100", J: 128, M: 6, T: 5, lowCount: 2, KEM: 20 },
  output,
};
const serialized = JSON.stringify(result, null, 2) + "\n";
fs.writeFileSync("experiments/results/u76-compressed-entry-probe-2.json", serialized);
console.log(serialized);

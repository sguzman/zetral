// Exact interval aggregation for U75 odd residual blocks.
// CLI: node experiments/u75-aggregate-odd.js [prefix-block-count=24]
// Writes only to stdout; partial prefixes are diagnostics, not certificates.
const SCALE = "1" + "0".repeat(66);
const DIM = 52, FIRST = 105, LAST = 24575, N = 24;
function aggregate(blocks, { requireComplete = true } = {}) {
  if (!Array.isArray(blocks) || blocks.length < 1 || blocks.length > N ||
      (requireComplete && blocks.length !== N)) throw Error("block count");
  const sum = Array.from({length:DIM}, () => Array.from({length:DIM}, () => [0n,0n]));
  let count = 0, end = FIRST - 2;
  const integer = x => typeof x === "string" && /^-?(0|[1-9][0-9]*)$/.test(x) && x !== "-0";
  for (let b=0;b<blocks.length;b++) {
    const block=blocks[b], start=FIRST+1024*b, stop=Math.min(start+1022,LAST);
    if (!block || block.start!==start || block.end!==stop || block.count!==(stop-start)/2+1 ||
        block.start!==end+2 || block.scale!==SCALE || !Array.isArray(block.finite) ||
        block.finite.length!==DIM || block.finite.some(row=>!Array.isArray(row)||row.length!==DIM))
      throw Error("block metadata "+(b+1));
    for (let i=0;i<DIM;i++) for (let j=0;j<DIM;j++) {
      const v=block.finite[i][j], w=block.finite[j][i];
      if (!Array.isArray(v)||v.length!==2||!v.every(integer)||!Array.isArray(w)||w.length!==2||
          v[0]!==w[0]||v[1]!==w[1]) throw Error("invalid/symmetric interval "+(b+1)+":"+i+","+j);
      const lo=BigInt(v[0]), hi=BigInt(v[1]);
      if (lo>hi || (i===j && lo<0n)) throw Error("interval order/diagonal "+(b+1)+":"+i+","+j);
      sum[i][j][0]+=lo; sum[i][j][1]+=hi;
    }
    end=stop; count+=block.count;
  }
  if (count!==(end-FIRST)/2+1 || (requireComplete && (end!==LAST || count!==12236)))
    throw Error("coverage");
  return {start:FIRST,end,count,finite:sum.map(row=>row.map(v=>v.map(String))),scale:SCALE};
}
if(typeof module!=="undefined")module.exports={aggregate};
if(typeof require!=="undefined" && typeof module!=="undefined" && require.main===module){
  const fs=require("node:fs");
  const n=process.argv.length===2?N:Number(process.argv[2]);
  if(!Number.isInteger(n)||n<1||n>N)throw Error("prefix count");
  const blocks=Array.from({length:n},(_,i)=>JSON.parse(fs.readFileSync(
    "experiments/results/u75-251-100-odd-t1024-m24576-finite-"+String(i+1).padStart(3,"0")+".json","utf8")));
  console.log(JSON.stringify(aggregate(blocks,{requireComplete:n===N})));
}

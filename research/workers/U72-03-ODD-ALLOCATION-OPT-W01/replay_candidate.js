const fs=require('node:fs');
const [rawPath, proposalPath, transformPath, replayPath]=process.argv.slice(2);
const raw=JSON.parse(fs.readFileSync(rawPath,'utf8'));
const proposal=JSON.parse(fs.readFileSync(proposalPath,'utf8'));
const transform=JSON.parse(fs.readFileSync(transformPath,'utf8'));
const replay=require(replayPath);
const out=replay(raw,proposal,transform);
console.log(JSON.stringify({positiveMinors:out.positiveMinors,failedMinor:out.failedMinor,marginNumerator:out.marginNumerator,nextGridFails:out.nextGridFails}));
fs.writeFileSync('research/workers/U72-03-ODD-ALLOCATION-OPT-W01/slsqp-exact-replay.json',JSON.stringify(out,null,2));

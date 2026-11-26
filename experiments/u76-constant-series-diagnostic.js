// U76 independent constant-even entry from the paired analytic series.
// IEEE-754 diagnostic only; this does not provide a rigorous enclosure.
const fs = require("node:fs");
const h = 2.51;
const pi = Math.PI;
const ln2 = Math.log(2);
const catalan = 0.91596559417721901505;
const eulerGamma = 0.5772156649015328606;
const tailTerms = 100;
const q = Math.exp(-2 * h);
let remainder = 0;
for (let j = 0; j < tailTerms; j++) {
  const a = 2 * j + 0.5;
  const b = 2 * j + 1;
  remainder += Math.exp(-h * a) / (h * a * a) + Math.exp(-h * b) / b;
}
const remainderBound = (
  Math.exp(-h * (2 * tailTerms + 0.5)) / (h * (2 * tailTerms + 0.5) ** 2)
  + Math.exp(-h * (2 * tailTerms + 1)) / (2 * tailTerms + 1)
) / (1 - q);
const subtractedKernel = 2 * (
  pi / 4 + ln2 / 2 - (pi * pi + 8 * catalan) / (4 * h) + remainder
);
const archimedean = 16 * (Math.cosh(h / 2) - 1) / h;

function primePowerTerms(limit) {
  const terms = [];
  for (let p = 2; p <= limit; p++) {
    let prime = true;
    for (let d = 2; d * d <= p; d++) if (p % d === 0) { prime = false; break; }
    if (!prime) continue;
    for (let q0 = p; q0 <= limit; q0 *= p) terms.push({ q: q0, p });
  }
  return terms.sort((a, b) => a.q - b.q);
}
const endpoint = Math.floor(Math.exp(h));
const primePowers = primePowerTerms(endpoint);
const primeTerm = primePowers.reduce((sum, { q: q0, p }) => {
  return sum + 2 * Math.log(p) / Math.sqrt(q0) * (1 - Math.log(q0) / h);
}, 0);
const pole = Math.log(4 * pi) + eulerGamma;
const hyperbolicTail = -Math.log(Math.tanh(h / 2));
const entry = archimedean - primeTerm - pole - subtractedKernel + hyperbolicTail;

const probe = JSON.parse(fs.readFileSync("experiments/results/u76-compressed-entry-probe.json", "utf8"));
const compressed = probe.output.find(x => !x.odd).A[0][0];
const scale = Number(probe.output.find(x => !x.odd).scale);
const compressedInterval = compressed.map(x => Number(BigInt(x)) / scale);
const result = {
  runtime: process.version,
  status: "exploratory IEEE-754 evaluation of an independently derived scalar series; no rigorous enclosure",
  parameters: { h: "251/100", seriesTerms: tailTerms, primePowers: primePowers.map(x => x.q) },
  formula: "G00 = archimedean - prime - pole - subtracted-kernel + hyperbolic-tail",
  components: { archimedean, primeTerm, pole, subtractedKernel, hyperbolicTail, exponentialRemainder: remainder, exponentialRemainderBound: remainderBound },
  entry,
  sharedCompressedInterval: compressedInterval,
  distanceToCompressedInterval: entry < compressedInterval[0]
    ? compressedInterval[0] - entry
    : entry > compressedInterval[1] ? entry - compressedInterval[1] : 0,
};
const serialized = JSON.stringify(result, null, 2) + "\n";
fs.writeFileSync("experiments/results/u76-constant-series-diagnostic.json", serialized);
console.log(serialized);

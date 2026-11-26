// Rigorous fixed-point interval evaluation of the independent G_00 identity.
// All interval endpoints are integer multiples of 10^-70, rounded outward.
const fs = require("node:fs");
const Q = 10n ** 70n;
const ZERO = [0n, 0n];
const ONE = [Q, Q];
const floorDiv = (n, d) => {
  if (d < 0n) { n = -n; d = -d; }
  return n >= 0n ? n / d : -((-n + d - 1n) / d);
};
const ceilDiv = (n, d) => -floorDiv(-n, d);
const rat = (n, d = 1n) => {
  if (d < 0n) { n = -n; d = -d; }
  return [floorDiv(n * Q, d), ceilDiv(n * Q, d)];
};
const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
const sub = (a, b) => [a[0] - b[1], a[1] - b[0]];
const neg = a => [-a[1], -a[0]];
function mul(a, b) {
  const p = [a[0] * b[0], a[0] * b[1], a[1] * b[0], a[1] * b[1]];
  return [floorDiv(p.reduce((x, y) => x < y ? x : y), Q),
          ceilDiv(p.reduce((x, y) => x > y ? x : y), Q)];
}
function divI(a, b) {
  if (b[0] <= 0n) throw new Error("interval division requires positive denominator");
  const p = [
    [a[0] * Q, b[0]], [a[0] * Q, b[1]],
    [a[1] * Q, b[0]], [a[1] * Q, b[1]],
  ];
  return [p.reduce((m, x) => { const v = floorDiv(x[0], x[1]); return v < m ? v : m; }, floorDiv(p[0][0], p[0][1])),
          p.reduce((m, x) => { const v = ceilDiv(x[0], x[1]); return v > m ? v : m; }, ceilDiv(p[0][0], p[0][1]))];
}
const scale = (a, n, d = 1n) => mul(a, rat(n, d));
const widenUpper = (a, e) => [a[0], a[1] + e];

function atanSeries(x, terms) {
  const x2 = mul(x, x);
  let power = x;
  let sum = ZERO;
  for (let j = 0; j < terms; j++) {
    const term = divI(power, rat(BigInt(2 * j + 1)));
    sum = j % 2 ? sub(sum, term) : add(sum, term);
    power = mul(power, x2);
  }
  const next = divI(power, rat(BigInt(2 * terms + 1)));
  return terms % 2 ? [sum[0] - next[1], sum[1]] : [sum[0], sum[1] + next[1]];
}
const pi = sub(scale(atanSeries(rat(1n, 5n), 80), 16n),
               scale(atanSeries(rat(1n, 239n), 80), 4n));

function atanhLogSeries(y, terms) {
  if (y[0] < 0n || y[1] >= Q) throw new Error("atanh argument outside [0,1)");
  const y2 = mul(y, y);
  let power = y;
  let sum = ZERO;
  for (let k = 0; k < terms; k++) {
    sum = add(sum, divI(power, rat(BigInt(2 * k + 1))));
    power = mul(power, y2);
  }
  const denom = sub(ONE, y2);
  const remainder = divI(divI(power, rat(BigInt(2 * terms + 1))), denom);
  return [scale(sum, 2n)[0], scale(sum, 2n)[1] + 2n * remainder[1]];
}
const ln2 = atanhLogSeries(rat(1n, 3n), 160);

function logPoint(x) {
  if (x <= 0n) throw new Error("log domain");
  let k = 0;
  while (x >= 2n * Q * (2n ** BigInt(k))) k++;
  const divisor = 2n ** BigInt(k);
  const z = [floorDiv(x, divisor), ceilDiv(x, divisor)];
  const y = divI(sub(z, ONE), add(z, ONE));
  return add(scale(ln2, BigInt(k)), atanhLogSeries(y, 160));
}
function logInterval(x) {
  return [logPoint(x[0])[0], logPoint(x[1])[1]];
}

function isqrt(n) {
  if (n < 2n) return n;
  let x = 1n << BigInt(Math.ceil(n.toString(2).length / 2));
  for (;;) {
    const y = (x + n / x) >> 1n;
    if (y >= x) return x;
    x = y;
  }
}

// Enclose exp(-x) for a nonnegative fixed-point point x, using alternating
// Taylor bounds after range reduction to 0 <= x/2^m <= 1/2.
function expNegPoint(x) {
  if (x < 0n) throw new Error("expNegPoint domain");
  let m = 0;
  while (x > (Q / 2n) * (2n ** BigInt(m))) m++;
  const divisor = 2n ** BigInt(m);
  const r = [floorDiv(x, divisor), ceilDiv(x, divisor)];
  let term = ONE;
  let sum = ONE;
  for (let n = 1; n <= 80; n++) {
    term = divI(mul(term, r), rat(BigInt(n)));
    sum = n % 2 ? sub(sum, term) : add(sum, term);
  }
  const next = divI(mul(term, r), rat(81n));
  let value = [sum[0] - next[1], sum[1]]; // 80th partial sum is an upper bound.
  for (let j = 0; j < m; j++) value = mul(value, value);
  return value;
}
function expNeg(x) {
  if (x[0] < 0n) throw new Error("expNeg interval domain");
  return [expNegPoint(x[1])[0], expNegPoint(x[0])[1]];
}

// Euler transform for Catalan's alternating beta(2) series. The finite
// differences are intervals; the transformed tail is bounded by 2^-N using
// a_n = integral_0^1 x^(2n)(-log x) dx and 0 <= (1-x^2)^k <= 1.
function catalanInterval(terms) {
  let row = Array.from({ length: terms }, (_, j) => rat(1n, BigInt((2 * j + 1) ** 2)));
  let sum = ZERO;
  for (let k = 0; k < terms; k++) {
    sum = add(sum, divI(row[0], rat(2n ** BigInt(k + 1))));
    row = row.slice(0, -1).map((x, j) => sub(x, row[j + 1]));
  }
  const tail = rat(1n, 2n ** BigInt(terms));
  return widenUpper(sum, tail[1]);
}
const catalan = catalanInterval(280);

// Euler-Maclaurin enclosure for Euler's constant, with the first omitted
// positive Bernoulli term bounding the alternating remainder at N=64.
const gammaN = 64n;
let harmonic = ZERO;
for (let j = 1n; j <= gammaN; j++) harmonic = add(harmonic, rat(1n, j));
let gamma = sub(sub(harmonic, scale(ln2, 6n)), rat(1n, 2n * gammaN));
for (const [power, numerator, denominator] of [
  [2n, 1n, 12n], [4n, -1n, 120n], [6n, 1n, 252n], [8n, -1n, 240n],
  [10n, 1n, 132n], [12n, -691n, 32760n], [14n, 1n, 12n], [16n, -3617n, 8160n],
]) gamma = add(gamma, rat(numerator, denominator * gammaN ** power));
const gammaRemainder = rat(43867n, 14364n * gammaN ** 18n);
gamma = widenUpper(gamma, gammaRemainder[1]);

const h = rat(251n, 100n);
const hHalf = scale(h, 1n, 2n);
const ehHalf = expNeg(hHalf);
const ePositiveHalf = divI(ONE, ehHalf);
const coshHalf = scale(add(ePositiveHalf, ehHalf), 1n, 2n);
const archimedean = divI(scale(sub(coshHalf, ONE), 16n), h);

function sqrtIntegerInterval(n) {
  const lo = isqrt(n * Q * Q);
  return [lo, lo * lo === n * Q * Q ? lo : lo + 1n];
}
const primePowers = [
  { q: 2n, p: 2n }, { q: 3n, p: 3n }, { q: 4n, p: 2n },
  { q: 5n, p: 5n }, { q: 7n, p: 7n }, { q: 8n, p: 2n },
  { q: 9n, p: 3n }, { q: 11n, p: 11n },
];
const logCache = new Map();
function logInteger(n) {
  const key = n.toString();
  if (!logCache.has(key)) logCache.set(key, logInterval([n * Q, n * Q]));
  return logCache.get(key);
}
let primeTerm = ZERO;
for (const { q, p } of primePowers) {
  const lp = logInteger(p);
  const lq = scale(lp, q === 4n ? 2n : q === 8n ? 3n : q === 9n ? 2n : 1n);
  const invsqrt = divI(ONE, sqrtIntegerInterval(q));
  const cosineFactor = sub(ONE, divI(lq, h));
  primeTerm = add(primeTerm, scale(mul(mul(lp, invsqrt), cosineFactor), 2n));
}

const catalanTerm = divI(add(mul(pi, pi), scale(catalan, 8n)), scale(h, 4n));
const expStep = expNeg(scale(h, 2n));
const expTailDenominator = sub(ONE, expStep);
const remainderTerms = 60;
let exponentialRemainder = ZERO;
for (let j = 0; j < remainderTerms; j++) {
  const a = rat(BigInt(4 * j + 1), 2n);
  const b = rat(BigInt(2 * j + 1));
  const ha = mul(h, a);
  const hb = mul(h, b);
  exponentialRemainder = add(exponentialRemainder,
    add(divI(expNeg(ha), mul(h, mul(a, a))), divI(expNeg(hb), b)));
}
const jTail = remainderTerms;
const aTail = rat(BigInt(4 * jTail + 1), 2n);
const bTail = rat(BigInt(2 * jTail + 1));
const tailNumerator = add(
  divI(expNeg(mul(h, aTail)), mul(h, mul(aTail, aTail))),
  divI(expNeg(mul(h, bTail)), bTail),
);
const exponentialTail = divI(tailNumerator, expTailDenominator);
exponentialRemainder = widenUpper(exponentialRemainder, exponentialTail[1]);
const kernelBase = sub(add(scale(pi, 1n, 4n), scale(ln2, 1n, 2n)), catalanTerm);
const subtractedKernel = scale(add(kernelBase, exponentialRemainder), 2n);

const logFourPi = logInterval(scale(pi, 4n));
const pole = add(logFourPi, gamma);
const hExp = expNeg(h);
const hyperbolicTail = atanhLogSeries(hExp, 80);
const entry = add(sub(sub(sub(archimedean, primeTerm), pole), subtractedKernel), hyperbolicTail);

function decimal(x) {
  const negative = x < 0n;
  const a = negative ? -x : x;
  const digits = a.toString().padStart(71, "0");
  return `${negative ? "-" : ""}${digits.slice(0, -70)}.${digits.slice(-70)}`;
}
const compressed = JSON.parse(fs.readFileSync("experiments/results/u76-compressed-entry-probe.json", "utf8"))
  .output.find(x => !x.odd);
const compressedScale = BigInt(compressed.scale);
const compressedInterval = compressed.A[0][0].map(x => BigInt(x) * (Q / compressedScale));
const overlap = entry[0] <= compressedInterval[1] && compressedInterval[0] <= entry[1];
const result = {
  status: "outward-rounded fixed-point interval evaluation of independently derived G00 formula",
  precision: { decimalDigits: 70, endpointRounding: "floor lower / ceil upper" },
  parameters: { h: "251/100", catalanEulerTerms: 280, exponentialRemainderTerms: remainderTerms, primePowers: primePowers.map(x => Number(x.q)) },
  intervals: {
    archimedean: archimedean.map(decimal),
    primeTerm: primeTerm.map(decimal),
    pole: pole.map(decimal),
    subtractedKernel: subtractedKernel.map(decimal),
    hyperbolicTail: hyperbolicTail.map(decimal),
    fullEntry: entry.map(decimal),
    compressedSharedInterval: compressedInterval.map(decimal),
  },
  overlapWithSharedCompressedInterval: overlap,
  caveat: "The direct arithmetic formula is evaluated independently; the comparator is the existing shared compressed interval. Euler-Maclaurin bounds for Euler's constant and the alternating/geometric tails are explicitly included.",
};
const serialized = JSON.stringify(result, null, 2) + "\n";
fs.writeFileSync("experiments/results/u76-constant-series-interval.json", serialized);
console.log(serialized);

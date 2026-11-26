// U76-02 exploratory direct Weil-form quadrature.
// IEEE-754 midpoint convergence only: this is diagnostic, not an interval certificate.
const a = 2.51;
const L = 2 * a;
const endpoint = Math.floor(Math.exp(L));
const primes = [];
for (let p = 2; p <= endpoint; p++) {
  let prime = true;
  for (let d = 2; d * d <= p; d++) if (p % d === 0) { prime = false; break; }
  if (prime) primes.push(p);
}
const primePowers = [];
for (const p of primes) {
  let q = p;
  while (q <= endpoint) {
    primePowers.push({ q, lambda: Math.log(p) });
    if (q > Math.floor(endpoint / p)) break;
    q *= p;
  }
}
primePowers.sort((x, y) => x.q - y.q);

const kernels = {
  even0: { delta: 1, S: t => 2 * (1 - t / L) },
  even1: { delta: 1, S: t => 2 * (1 - t / L) * Math.cos(2 * Math.PI * t / L) },
  cross1: { delta: 0, S: t => -Math.sin(2 * Math.PI * t / L) / Math.PI },
};

function midpointIntegral(fn, n) {
  const step = L / n;
  let sum = 0;
  for (let j = 0; j < n; j++) sum += fn((j + 0.5) * step);
  return step * sum;
}

function entry(kernel, n) {
  const { delta, S } = kernel;
  const arch = midpointIntegral(t => 2 * Math.cosh(t / 2) * S(t), n);
  let prime = 0;
  for (const { q, lambda } of primePowers) {
    const t = Math.log(q);
    prime += lambda / Math.sqrt(q) * S(t);
  }
  const smooth = midpointIntegral(t => {
    const numerator = S(t) - 2 * Math.exp(-t / 2) * delta;
    const K = Math.exp(t / 2) / (2 * Math.sinh(t));
    return numerator * K;
  }, n);
  const pole = delta * (Math.log(4 * Math.PI) + 0.5772156649015329);
  const tail = delta * Math.log(Math.tanh(L / 2));
  return arch - prime - pole - smooth - tail;
}

const rows = [];
for (const n of [2 ** 12, 2 ** 14, 2 ** 16, 2 ** 18, 2 ** 20]) {
  const e0 = entry(kernels.even0, n);
  const g11 = entry(kernels.even1, n);
  const g1m1 = entry(kernels.cross1, n);
  rows.push({ n, G00: e0, G11: g11, G1minus1: g1m1, oddFirstDiagonal: g11 - g1m1 });
}
const result = {
  method: "composite midpoint quadrature, IEEE-754 double",
  status: "exploratory only; no rigorous error enclosure",
  runtime: process.version,
  a: "2.51", L: "5.02", primePowerEndpoint: endpoint,
  primePowers: primePowers.map(x => x.q),
  rows,
};
const serialized = JSON.stringify(result, null, 2) + "\n";
require("node:fs").writeFileSync("experiments/results/u76-direct-diagnostic.json", serialized);
console.log(serialized);

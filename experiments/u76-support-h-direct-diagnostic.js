// U76 direct arithmetic-form diagnostic on [0,h].
// Composite midpoint quadrature in IEEE-754 double: exploratory, not certified.
const h = 2.51;
const endpoint = Math.floor(Math.exp(h));
function primePowerTerms(limit) {
  const primes = [];
  for (let p = 2; p <= limit; p++) {
    let prime = true;
    for (let d = 2; d * d <= p; d++) if (p % d === 0) { prime = false; break; }
    if (prime) primes.push(p);
  }
  const terms = [];
  for (const p of primes) {
    let q = p;
    while (q <= limit) {
      terms.push({ q, lambda: Math.log(p) });
      if (q > Math.floor(limit / p)) break;
      q *= p;
    }
  }
  return terms.sort((x, y) => x.q - y.q);
}
const primePowers = primePowerTerms(endpoint);
const omega = n => Math.PI * n / h;
function S(n, t) {
  if (n === 0) return 2 * (1 - t / h);
  const w = omega(n);
  const I = (h - t) * Math.cos(w * t) / h - Math.sin(w * t) / (h * w);
  return 2 * I;
}
function midpointIntegral(fn, N) {
  const step = h / N;
  let sum = 0;
  for (let j = 0; j < N; j++) sum += fn((j + 0.5) * step);
  return step * sum;
}
function entry(n, N) {
  const arch = midpointIntegral(t => 2 * Math.cosh(t / 2) * S(n, t), N);
  let prime = 0;
  for (const { q, lambda } of primePowers) prime += lambda / Math.sqrt(q) * S(n, Math.log(q));
  const smooth = midpointIntegral(t => {
    const numerator = S(n, t) - 2 * Math.exp(-t / 2);
    const K = Math.exp(t / 2) / (2 * Math.sinh(t));
    return numerator * K;
  }, N);
  const pole = Math.log(4 * Math.PI) + 0.5772156649015329;
  const tail = Math.log(Math.tanh(h / 2));
  return arch - prime - pole - smooth - tail;
}
const rows = [];
for (const N of [2 ** 12, 2 ** 14, 2 ** 16, 2 ** 18, 2 ** 20, 2 ** 22]) {
  rows.push({ N, even0: entry(0, N), odd1: entry(1, N) });
}
const result = {
  runtime: process.version,
  support: "[0,h], h=2.51",
  basis: "phi_0=1/sqrt(h); phi_n=sqrt(2/h) cos(pi*n*x/h) for n>0",
  method: "composite midpoint quadrature, IEEE-754 double; no rigorous error enclosure",
  primePowerEndpoint: endpoint,
  primePowers: primePowers.map(x => x.q),
  rows,
};
const serialized = JSON.stringify(result, null, 2) + "\n";
require("node:fs").writeFileSync("experiments/results/u76-support-h-direct-diagnostic.json", serialized);
console.log(serialized);

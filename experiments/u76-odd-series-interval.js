// Rigorous fixed-point interval evaluation of the independent G_00 identity.
// All interval endpoints are integer multiples of 10^-70, rounded outward.
const fs = require("node:fs");
const Q = 10n ** 90n;
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
// positive Bernoulli term bounding the alternating remainder at N=8192.
const gammaN = 8192n;
let harmonic = ZERO;
for (let j = 1n; j <= gammaN; j++) harmonic = add(harmonic, rat(1n, j));
let gamma = sub(sub(harmonic, scale(ln2, 13n)), rat(1n, 2n * gammaN));
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
  const places = Q.toString().length - 1;
  const digits = a.toString().padStart(places + 1, "0");
  return `${negative ? "-" : ""}${digits.slice(0, -places)}.${digits.slice(-places)}`;
}
const compressed = JSON.parse(fs.readFileSync("experiments/results/u76-compressed-entry-probe.json", "utf8"))
  .output.find(x => !x.odd);
const compressedScale = BigInt(compressed.scale);
const compressedInterval = compressed.A[0][0].map(x => BigInt(x) * (Q / compressedScale));
const overlap = entry[0] <= compressedInterval[1] && compressedInterval[0] <= entry[1];
const contained = entry[0] >= compressedInterval[0] && entry[1] <= compressedInterval[1];
const result = {
  status: "outward-rounded fixed-point interval evaluation of independently derived G00 formula",
  precision: { decimalDigits: 90, endpointRounding: "floor lower / ceil upper" },
  parameters: { h: "251/100", catalanEulerTerms: 280, eulerGammaHarmonicCutoff: Number(gammaN), exponentialRemainderTerms: remainderTerms, primePowers: primePowers.map(x => Number(x.q)) },
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
  directIntervalContainedInSharedCompressedInterval: contained,
  containmentMargins: [decimal(entry[0] - compressedInterval[0]), decimal(compressedInterval[1] - entry[1])],
  caveat: "The direct arithmetic formula is evaluated independently; the comparator is the existing shared compressed interval. Euler-Maclaurin bounds for Euler's constant and the alternating/geometric tails are explicitly included.",
};

// Odd-diagonal endpoint expansion. Bernoulli coefficients are generated as
// exact reduced rationals, then all analytic evaluation is outward-rounded.
function gcd(a, b) { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a; }
function frac(n, d = 1n) {
  if (d < 0n) { n = -n; d = -d; }
  const g = gcd(n, d); return [n / g, d / g];
}
const fadd = (a,b) => frac(a[0]*b[1]+b[0]*a[1],a[1]*b[1]);
const fsub = (a,b) => frac(a[0]*b[1]-b[0]*a[1],a[1]*b[1]);
const fmul = (a,b) => frac(a[0]*b[0],a[1]*b[1]);
const fdiv = (a,b) => frac(a[0]*b[1],a[1]*b[0]);
const fint = n => [BigInt(n),1n];
function fpow(x,n) { let y=frac(1n),b=x,k=n; while(k){if(k%2)y=fmul(y,b);k=Math.floor(k/2);if(k)b=fmul(b,b);}return y; }
const fracInterval = a => rat(a[0],a[1]);
const factorial = n => { let x=1n; for(let j=2n;j<=BigInt(n);j++) x*=j; return x; };
function bernoulliNumbers(nmax) {
  const A=Array(nmax+1);
  const B=Array(nmax+1);
  for(let m=0;m<=nmax;m++) {
    A[m]=frac(1n,BigInt(m+1));
    for(let j=m;j>=1;j--) A[j-1]=fmul(fint(j),fsub(A[j-1],A[j]));
    B[m]=A[0];
  }
  return B;
}
const bernoulli=bernoulliNumbers(160);
const emDebug=[];
function hurwitzZetaInterval(s, startNumerator=5n) {
  let prefix=ZERO;
  for(let n=0;n<128;n++) {
    prefix=add(prefix,fracInterval(fpow(frac(4n,BigInt(4*n)+startNumerator),s)));
  }
  const xNumerator=4n*128n+startNumerator;
  let tail=add(fracInterval(frac(4n**BigInt(s-1),BigInt(s-1)*xNumerator**BigInt(s-1))),
               fracInterval(frac(4n**BigInt(s),2n*xNumerator**BigInt(s))));
  for(let m=1;m<=80;m++) {
    const rising=risingFactorial(BigInt(s),2*m-1);
    const coefficient=fdiv(bernoulli[2*m],frac(factorial(2*m)));
    const exponent=s+2*m-1;
    const xreciprocal=frac(4n**BigInt(exponent),xNumerator**BigInt(exponent));
    const emTerm=fmul(fmul(coefficient,rising),xreciprocal);
    if(s===2 && [1,2,40,79,80].includes(m)) emDebug.push({m,coefficient:fracInterval(coefficient).map(decimal),rising:fracInterval(rising).map(decimal),xreciprocal:fracInterval(xreciprocal).map(decimal),term:fracInterval(emTerm).map(decimal)});
    tail=add(tail,fracInterval(emTerm));
  }
  const r=160;
  const risingBound=risingFactorial(BigInt(s),r-1);
  const twoPiPower=powI(scale(pi,2n),r);
  const exponent=s+r-1;
  const rationalRemainder=frac(4n*risingBound[0]*4n**BigInt(exponent),xNumerator**BigInt(exponent));
  const remainder=divI(fracInterval(rationalRemainder),twoPiPower);
  const raw=add(prefix,tail);
  return [raw[0]-remainder[1],raw[1]+remainder[1]];
}
function risingFactorial(s,n) { let v=1n; for(let j=0;j<n;j++) v*=s+BigInt(j); return frac(v); }
function powI(x,n) { let y=ONE,b=x,k=n; while(k){if(k%2)y=mul(y,b);k=Math.floor(k/2);if(k)b=mul(b,b);}return y; }
function trigTaylor(x, cosine) {
  const x2=mul(x,x); let term=cosine?ONE:x, sum=term;
  const terms=48;
  for(let n=1;n<terms;n++) {
    const d=cosine?BigInt((2*n-1)*(2*n)):BigInt((2*n)*(2*n+1));
    term=divI(mul(term,x2),rat(d));
    sum=n%2?sub(sum,term):add(sum,term);
  }
  const n=terms, d=cosine?BigInt((2*n-1)*(2*n)):BigInt((2*n)*(2*n+1));
  const next=divI(mul(term,x2),rat(d));
  return [sum[0]-next[1],sum[1]+next[1]];
}
const hOdd=rat(251n,100n), wOdd=divI(pi,hOdd), expHalf=expNeg(scale(hOdd,1n,2n));
function endpointDerivative(n, atH) {
  if(n===0) return atH?neg(expHalf):ZERO;
  const wn=powI(wOdd,n), wprev=powI(wOdd,n-1);
  const cN=[1,0,-1,0][n%4], sN=[0,1,0,-1][n%4];
  const cPrev=[1,0,-1,0][(n+3)%4], sAtH=[0,-1,0,1][n%4];
  const expSign=BigInt((-1)**(n+1));
  const termExp=scale(atH?mul(expHalf,rat(expSign)):rat(expSign),1n,2n**BigInt(n));
  if(!atH) return add(sub(sub(scale(wn,BigInt(cN)),scale(divI(mul(rat(BigInt(n)),wprev),hOdd),BigInt(cPrev))),scale(divI(wn,pi),BigInt(sN))),termExp);
  const cH=[-1,0,1,0][(n+3)%4];
  return add(sub(neg(scale(divI(mul(rat(BigInt(n)),wprev),hOdd),BigInt(cH))),scale(divI(wn,pi),BigInt(sAtH))),termExp);
}
function laplaceA(a) {
  const ah=mul(a,hOdd), e=a[0]<0n?divI(ONE,expNeg(neg(ah))):expNeg(ah);
  const den=add(mul(a,a),mul(wOdd,wOdd));
  const C=divI(mul(a,add(ONE,e)),den);
  const S=divI(mul(wOdd,add(ONE,e)),den);
  const T=divI(add(mul(add(ONE,e),sub(mul(a,a),mul(wOdd,wOdd))),mul(mul(mul(a,hOdd),e),den)),mul(den,den));
  return sub(sub(C,divI(T,hOdd)),divI(S,pi));
}
const archOdd=scale(add(laplaceA(rat(-1n,2n)),laplaceA(rat(1n,2n))),2n);
let oddPrime=ZERO;
for(const {q,p} of primePowers) {
  const lq=logInteger(q), x=mul(wOdd,lq), c=trigTaylor(x,true), s=trigTaylor(x,false);
  const F=sub(mul(sub(ONE,divI(lq,hOdd)),c),divI(s,pi));
  oddPrime=add(oddPrime,scale(mul(mul(logInteger(p),divI(ONE,sqrtIntegerInterval(q))),F),2n));
}
const Nodd=220;
const zeta=new Map(); for(let r=2;r<=Nodd+1;r++) zeta.set(r,scale(hurwitzZetaInterval(r),1n,2n**BigInt(r)));
const zeta22=new Map(); for(let r=2;r<=Nodd+1;r++) zeta22.set(r,scale(hurwitzZetaInterval(r,9n),1n,2n**BigInt(r)));
let endpointZero=ZERO, endpointH=ZERO;
const E=new Map();
for(let r=1;r<=Nodd;r++) {
  let es=ZERO;
  for(let j=1;j<40;j++) { const a=rat(BigInt(4*j+1),2n); es=add(es,divI(expNeg(mul(hOdd,a)),powI(a,r))); }
  const a40=rat(161n,2n), first=divI(expNeg(mul(hOdd,a40)),powI(a40,r));
  const etail=divI(first,sub(ONE,expNeg(scale(hOdd,2n))));
  E.set(r,[es[0],es[1]+etail[1]]);
}
const E22=new Map();
for(let r=1;r<=Nodd;r++) {
  let es=ZERO;
  for(let j=2;j<=40;j++) { const a=rat(BigInt(4*j+1),2n); es=add(es,divI(expNeg(mul(hOdd,a)),powI(a,r))); }
  const a41=rat(165n,2n), first=divI(expNeg(mul(hOdd,a41)),powI(a41,r));
  const etail=divI(first,sub(ONE,expNeg(scale(hOdd,2n))));
  E22.set(r,[es[0],es[1]+etail[1]]);
}
for(let k=1;k<Nodd;k++) endpointZero=add(endpointZero,mul(endpointDerivative(k,false),zeta.get(k+1)));
for(let k=0;k<Nodd;k++) endpointH=add(endpointH,mul(endpointDerivative(k,true),E.get(k+1)));
let oddKernel=add(scale(laplaceMHalf(),2n),sub(scale(endpointZero,2n),scale(endpointH,2n)));
function laplaceMHalf() {
  const a=rat(1n,2n), A=laplaceA(a);
  const Esub=sub(ONE,expNeg(hOdd));
  return sub(A,Esub);
}
const cn=add(powI(wOdd,Nodd),add(divI(scale(powI(wOdd,Nodd-1),BigInt(Nodd+1)),hOdd),rat(1n,2n**BigInt(Nodd))));
const remainderBound=scale(mul(cn,zeta.get(Nodd+1)),2n);
oddKernel=[oddKernel[0]-remainderBound[1],oddKernel[1]+remainderBound[1]];
const oddEntry=add(sub(sub(sub(archOdd,oddPrime),pole),oddKernel),hyperbolicTail);
const compressedOdd=JSON.parse(fs.readFileSync("experiments/results/u76-compressed-entry-probe.json","utf8")).output.find(x=>x.odd);
const oddScale=BigInt(compressedOdd.scale), oddCompressed=compressedOdd.A[0][0].map(x=>BigInt(x)*(Q/oddScale));
result.status="outward-rounded fixed-point interval evaluation of independent G00, G11, and G02 formulas";
result.parameters.oddIntegrationByParts=Nodd; result.parameters.hurwitzTailTerms=80; result.parameters.hurwitzPrefix=128; result.parameters.exponentialEndpointTerms=39;
result.intervals.oddArchimedean=archOdd.map(decimal); result.intervals.oddPrimeTerm=oddPrime.map(decimal); result.intervals.oddSubtractedKernel=oddKernel.map(decimal); result.intervals.oddFullEntry=oddEntry.map(decimal); result.intervals.oddCompressedSharedInterval=oddCompressed.map(decimal); result.intervals.oddTailBound= remainderBound.map(decimal);
result.intervals.zeta2=zeta.get(2).map(decimal); result.intervals.zeta221=zeta.get(221).map(decimal); result.intervals.endpointZero=endpointZero.map(decimal); result.intervals.endpointH=endpointH.map(decimal); result.intervals.E1=E.get(1).map(decimal); result.intervals.E220=E.get(220).map(decimal);
result.debugHurwitzS2=emDebug;
result.oddIntervalOverlapsSharedCompressedInterval=oddEntry[0]<=oddCompressed[1]&&oddCompressed[0]<=oddEntry[1];
result.oddDirectIntervalContainedInSharedCompressedInterval=oddEntry[0]>=oddCompressed[0]&&oddEntry[1]<=oddCompressed[1];
result.oddContainmentMargins=[decimal(oddEntry[0]-oddCompressed[0]),decimal(oddCompressed[1]-oddEntry[1])];
result.caveat="The direct arithmetic formulas are evaluated independently; comparators come from the shared compressed implementation. All finite arithmetic is fixed-point outward-rounded; Hurwitz-zeta uses the stated Euler-Maclaurin integral-remainder majorant.";

// First even off-diagonal G_02, with no diagonal subtraction term.
const sqrtTwo=sqrtIntegerInterval(2n), w02=scale(wOdd,2n), coeff02=neg(divI(sqrtTwo,pi));
function sineLaplace(a) {
  const ah=mul(a,hOdd),e=a[0]<0n?divI(ONE,expNeg(neg(ah))):expNeg(ah);
  return divI(mul(w02,sub(ONE,e)),add(mul(a,a),mul(w02,w02)));
}
const arch02=mul(coeff02,add(sineLaplace(rat(-1n,2n)),sineLaplace(rat(1n,2n))));
let prime02=ZERO;
for(const {q,p} of primePowers) {
  const x=mul(w02,logInteger(q)), si=trigTaylor(x,false);
  prime02=add(prime02,mul(mul(mul(logInteger(p),divI(ONE,sqrtIntegerInterval(q))),coeff02),si));
}
let sineSeries=sineLaplace(rat(1n,2n));
 sineSeries=add(sineSeries,sineLaplace(rat(5n,2n)));
for(let k=1;k<Nodd;k+=2) {
  const derivative=scale(powI(w02,k),BigInt(k%4===1?1:-1));
  sineSeries=add(sineSeries,mul(derivative,sub(zeta22.get(k+1),E22.get(k+1))));
}
const sineRemainder=mul(powI(w02,Nodd),zeta22.get(Nodd+1));
sineSeries=[sineSeries[0]-sineRemainder[1],sineSeries[1]+sineRemainder[1]];
const kernel02=mul(coeff02,sineSeries), entry02=sub(sub(arch02,prime02),kernel02);
const compressedEven2=JSON.parse(fs.readFileSync("experiments/results/u76-compressed-entry-probe-2.json","utf8")).output.find(x=>!x.odd);
const scale02=BigInt(compressedEven2.scale), compressed02=compressedEven2.A[0][1].map(x=>BigInt(x)*(Q/scale02));
result.parameters.evenOffDiagonalIsolatedRates=["1/2","5/2"]; result.parameters.evenOffDiagonalTailStart="9/2";
result.intervals.evenOffDiagonalArchimedean=arch02.map(decimal); result.intervals.evenOffDiagonalPrimeTerm=prime02.map(decimal); result.intervals.evenOffDiagonalSubtractedKernel=kernel02.map(decimal); result.intervals.evenOffDiagonalTailBound=sineRemainder.map(decimal); result.intervals.evenOffDiagonalFullEntry=entry02.map(decimal); result.intervals.evenOffDiagonalCompressedSharedInterval=compressed02.map(decimal);
result.evenOffDiagonalOverlap=entry02[0]<=compressed02[1]&&compressed02[0]<=entry02[1];
result.evenOffDiagonalContained=entry02[0]>=compressed02[0]&&entry02[1]<=compressed02[1];
result.evenOffDiagonalMargins=[decimal(entry02[0]-compressed02[0]),decimal(compressed02[1]-entry02[1])];
const serialized = JSON.stringify(result, null, 2) + "\n";
fs.writeFileSync("experiments/results/u76-odd-series-interval.json", serialized);
console.log(serialized);
if(oddEntry[1]-oddEntry[0]>Q/10n**50n) throw new Error("odd-entry interval is wider than 10^-50; inspect saved interval components");
if(entry02[1]-entry02[0]>Q/10n**50n) throw new Error("G02 interval is wider than 10^-50; inspect saved interval components");
if(!result.evenOffDiagonalContained) throw new Error("direct G02 interval is not contained in the shared compressed interval");

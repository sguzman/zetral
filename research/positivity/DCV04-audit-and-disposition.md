# DCV04 — Arithmetic audit, scope comparison and campaign disposition

2026-11-25. AI-assisted scoped lead review, not independent human review or formal verification. No RH assumption, no actual off-line zeros, and no priority claim.

## 1. Mathematical audit of the endpoint certificate

DCV01/DCV03 periodize a compact distribution supported on [-L,L], with L=1/4. For A=L/2=1/8 the compact smooth test autocorrelation is supported strictly inside (-L,L), so translated copies do not meet it. Sharp cutoff multiplication is defined by subtracting the locally ordinary integrable kernel outside [-L,L], not by an undefined product at its singularity. The prime sum is absent because L<log 2. The exact symbol series follows from k(x)=sum_(j>=0) exp(-(2j+1/2)x), with nonnegative integrals 2 int_0^L k(x)(1-cos(tx)) and 2 int_L^infty k(x). For lattice t=pi*n/L, the cos endpoint equals (-1)^n. The pole transform is 2(-1)^n sinh(L/2)/(t^2+1/4). These signs and factors match DCV01.

For d=4j+1, x=4t^2, the jth archimedean summand equals 4[x+(-1)^n d^2 exp(-d/8)]/[d(d^2+x)]. Bounding exp(-d/8) above by 128/(128+16d+d^2) and x below by 576n^2 produces the DCV03 lower bound because (x-c)/(d^2+x) is increasing for c>=0. The true summand is nonnegative, so the positive part of the lower bound is valid. The retained lower bound is nondecreasing for integer n>=1, including the negative pole correction -1/(144n^2). The rounded lower sequence is therefore nondecreasing by directed rounding, not by numerical sampling. At n=0 the odd-degree Taylor polynomial T5 is a lower bound for exp(-d/8) by the integral remainder; the positive part remains a lower bound. H_0>=1 follows from sinh(1/8)>=1/8. The DCV03 rational constants give -alpha(0)<4728/875<11/2 (using Euler gamma <=H32-log32 and the displayed series bounds). No inverse Gram computation was needed.

Thus B0=-339229, B1=365628 at Q=10^6 are lower bounds for the first two coefficients; for every |n|>=1 the symbol is >=B1/Q. For unit f, periodic Parseval and Cauchy-Schwarz give |c0|^2<=A/L=1/2. Therefore
    q_A(f)>= B1/Q - (B1-B0)/(2Q)
           =(B0+B1)/(2Q)=26399/2000000.
The extension to the closed form follows by the compact smooth form core. This is a rank-one constant-baseline sufficient comparison, not the exact eigenvalue and not a numerical inverse-Gram certificate. The parity estimates in DCV03 follow from sin^2(y)<=y^2 and, for |y|<=pi/2, sin^2(y)>=(2y/pi)^2. No new sign error was found in this scoped audit. The DCV03 state summary said eight comparisons; its raw table actually has nine rows (including 1/8). Corrected here.

## 2. Executed exact cross-check

Independent implementation of the unrounded rational lower sums (not simply replaying the rounded loop). Executed in the JavaScript BigInt runtime this turn:
```js
const gcd=(a,b)=>{while(b){[a,b]=[b,a%b]}return a<0n?-a:a};
const F=(a,b=1n)=>{let g=gcd(a,b);return[a/g,b/g]};
const add=([a,b],[c,d])=>F(a*d+b*c,b*d);
const mul=([a,b],[c,d])=>F(a*c,b*d);
const le=([a,b],[c,d])=>a*d<=b*c;
const Q=1000000n;let z=F(-9n,2n),one=F(-11n,2n);
for(let j=0n;j<64n;j++){
 let d=4n*j+1n;let p=F(1n),term=F(1n);
 for(let m=1n;m<=5n;m++){term=mul(term,F(-d,8n*m));p=add(p,term)}
 if(p[0]>0n)z=add(z,mul(F(4n,d),p));
 let E=128n+16n*d+d*d;
 let v=F(4n*(576n*E-128n*d*d),d*(d*d+576n)*E);
 if(v[0]>0n)one=add(one,v)
}
one=add(one,F(-1n,144n));
let b0=F(-339229n,Q),b1=F(365628n,Q);
if(!le(b0,z)||!le(b1,one))throw Error("enclosure failed");
let gap=mul(F(1n,2n),add(b0,b1));
if(gap[0]!==26399n||gap[1]!==2000000n)throw Error("gap mismatch");
console.log(gap.map(String)); // ["26399","2000000"]
```
Actual exact comparisons passed; the tool additionally attempted approximate conversion of the large first-mode rational to Number, which returned null from overflow/nonfinite conversion. That display-only conversion was not used in any comparison or in the certificate. The exact fraction checks and exact reduced gap are the relevant outputs. No independent human or formal proof check.

Actual container probe this turn:
```sh
command -v rustc || true
command -v cargo || true
rustc --version
```
Result: no paths, bash: line 1: rustc: command not found, status 127. This independently establishes the current runtime limitation; the previously described probes are not needed as evidence. DCV02 Rust source remains uncompiled. No CI or successful build claim. No new code or infrastructure needed for this audit.

## 3. Comparison to earlier work and literature

Directly read research/certification/campaign-04-exact-local-certification.md (blob 62546cd4ba2515bda9f6f9c07855dd26fd0b11f6), section 4: a conservative analytic prime-free lower bound and an extreme small-window example a=2^(-2049) for the local differentiation spectrum, not a like-for-like large-window positivity record. Read U01 (blob 1f7dc3bdfcedfcc59e4ec8f4e41cdb28c574e4ca): strict ordinary-bottom monotonicity and positivity transition, importing small-window positivity. Neither supplies a basis to advertise a new positivity range here.

Fresh web search this turn returned Zhu, arXiv:2608.24827v2, https://arxiv.org/abs/2608.24827v2, abstract and indexed HTML excerpt, which report classical Yoshida/Connes–Consani positivity for 2A<=log 2 and a certified lower bound at A=0.8 (support length 1.6). These are source-reported results, not independently reproduced in this project. The A=1/8 rational certificate lies well within the classical range. It is an elementary reproducible regression benchmark for our particular discrete method, not a new positivity-range record or claim of priority. No PDF full text analyzed. No comparisons of numerical margins across differently normalized operators.

Provenance caution: earlier campaign notes contain some statements of fresh source inspection whose underlying tool returns are not available in the retained conversation record, notably NIR01–03. Treat those as inherited source leads, not verified new inspections, unless separately documented. The mathematical arguments are candidate derivations, and novelty remains unresolved. This audit does not retroactively certify those notes.

## 4. Closure and next direction

DCV01 (92d8e9ff0cebcb6a6dba64cfd713041342a2b2c1): seven candidate deficit modes, integer-only baseline certificate. DCV02 (64a594251a86f4e7c3ac2614e5b186ad4f48ae06 and e94b6ce03f9006925437f362f850015f2959a71c): standalone Rust source and independent exact fraction check; Rust unavailable. DCV03 (995dbb3d3a01e549521b0997c21fda299de8bc41): improved rational coefficient bounds and nine exact trace/parity rows, endpoint A=1/8. DCV04: audit, exact unrounded checks, and comparison. Campaign XVIII closes with executed arithmetic validation, not formal verification, no practical prime-inclusive certificate or inverse-Gram run. Extending these already-known small windows with the same elementary method is not a strong use of the mission.

Pivot to Campaign XIX — Boundary profiles and spectral prefactors. The earlier NIR/GSG growth results determine logarithmic exponents, but not finite-scale leading coefficients or spatial profiles. Investigate the finite-off-line-pair hypothesis (explicitly conditional) and leading maximal-deviation group via rescaled left/right endpoint exponentials. The phase factors exp(-2iua) may cause oscillatory singular values; do not presume prefactor convergence. First milestone BPF01: derive the leading finite-rank off-diagonal matrix and uniform spectral asymptotic for the finite off-line case, controlling the positive real-zero form on fixed smooth boundary trial profiles. Then explore parity, limiting/oscillating constants, lower-deviation groups and the conditions needed for generalization. This returns to structural spectral mathematics instead of competing on a positivity range already exceeded in the literature. No RH proof, observed off-line zeros or novelty claim. README unchanged.

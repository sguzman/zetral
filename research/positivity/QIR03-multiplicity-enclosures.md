# QIR03 — Phase-free integer multiplicity enclosures

2026-11-25. AI-assisted internal candidate; conditional on the selected-group model, QIR02's verified node/amplitude enclosures and BPF03–04's spectral asymptotics. No actual zeta off-line zero data, RH proof, priority claim, fresh literature inspection or independent human/formal proof verification. Section 4 records an executed exact-rational synthetic interval test, not actual spectral measurements or an executed full Hankel solver.

## 1. Eliminate absolute phase

Use alpha_j=d+iu_j, beta_j=prod_(h faster)(alpha_j-alpha_h)/(alpha_j+conj(alpha_h)), and write B_j=|beta_j|^2. The measured centered coefficient of QIR02 is
    b_j=c_j exp(2(d-d0)a0+i omega_j a0), omega_j=2u_j.
Hence the exact identity
    m_j^2=4(d^2+u_j^2)|b_j|^2 / [G B_j^2],
    G=exp(4(d-d0)a0).                                    (1)
The multiplicity m_j is a positive integer. For known d=d0, G=1. No absolute phase recovery, complex logarithm branch or dephasing factor a0*frequency error occurs in (1). Joint radius estimation still leaves gain sensitivity through G, and the geometry must be enclosed.

Given a verified complex coefficient error |bhat_j-b_j|<=e_j, the squared modulus is enclosed by
    max(0,|bhat_j|-e_j)^2 <= |b_j|^2 <= (|bhat_j|+e_j)^2.
Bounds on |bhat_j| itself must include numerical error if computed. Equivalently use any directly verified squared-modulus interval. If a0>=0 and d in [dlo,dhi], then G lies in [exp(4(dlo-d0)a0),exp(4(dhi-d0)a0)]; round outward if evaluating these transcendental endpoints. The ratio of the two gain bounds is exp(4 a0 (dhi-dlo)); even narrow scale uncertainty may therefore be amplified. For unknown a0 or normalization convention this formula cannot be used without adjustment.

## 2. Recursive Cauchy geometry with real intervals

All required attenuation factors are positive real rationals of the real coordinates:
    B_j=prod_(h faster) [ (d-d_h)^2+(u_j-u_h)^2 ]
                         /[ (d+d_h)^2+(u_j-u_h)^2 ].     (2)
The sum of squares in each denominator is positive since deviations are positive. Each true factor lies strictly between zero and one for distinct alpha's and positive real parts. Faster multiplicities do not enter (2): uncertainty propagates through the faster *locations* and through possible missing faster pairs, not through integer rounding of their multiplicities. The entire faster signed set must have been identified, not merely one ordinate from each symmetric pair.

Let d,u_j and all faster d_h,u_h be enclosed in finite real intervals. Use outward interval operations: interval addition/subtraction by endpoints; square an interval [l,r] with lower endpoint zero if it contains zero and otherwise min(l^2,r^2), upper max(l^2,r^2). For each factor obtain numerator N_h=[nlo,nhi] and denominator D_h=[qlo,qhi] by these operations. If qlo>0, then factor lies in [nlo/qhi,nhi/qlo], optionally intersect with [0,1]. Multiply nonnegative interval endpoints to get B_j in [Blo,Bhi]. A certified positive deviation gap d_h-d>=g_h>0 gives nlo>=g_h^2, which can improve an interval that otherwise contains zero. Positivity of all d also gives qlo>0 when their lower bounds are positive. For the fastest group the empty product is one. There is no requirement to evaluate any complex beta phase, and interval dependence can only weaken this enclosure, not invalidate it.

For an error sensitivity estimate, suppose a positive reference value fhat_h of each individual factor has certified relative enclosure f_h/fhat_h in [1-eta_h,1+eta_h], 0<=eta_h<1. Then
    prod_h(1-eta_h) <= B_j/Bhat_j <= prod_h(1+eta_h).
In the log domain the absolute logarithmic error is <=sum_h -log(1-eta_h). The effect on 1/B_j^2 is at most twice this log error. Thus many uncertain faster groups or small geometric separations can produce a large multiplicative ambiguity, even if each location enclosure looks individually narrow. No uniform lower bound for B_j over arbitrary finite configurations is claimed.

## 3. Exact integer test and gain-independent ratios

Let [Alo,Ahi] enclose d^2+u_j^2, [Clo,Chi] enclose |b_j|^2, [Glo,Ghi] enclose G, and [Blo,Bhi] enclose B_j. If Glo>0 and Blo>0, then
    L=4 Alo Clo/(Ghi Bhi^2) <= m_j^2
      <= U=4 Ahi Chi/(Glo Blo^2).                        (3)
Use certified outward endpoints. With a positive integer candidate m, the strict comparisons
    (m-1)^2 < L <= m^2 <= U < (m+1)^2
are sufficient to certify m uniquely. More generally intersect [L,U] with the positive integer squares; a singleton certifies that multiplicity conditional on the input model; an empty intersection contradicts at least one hypothesis/enclosure, and multiple possibilities mean unresolved, not a failed RH test. This can be done with exact rational comparisons, without square roots or nearest-integer rounding. When m=1, the strict lower comparison is conservative, since zero is already excluded.

If the common gain G is not tightly known, define J_j=4(d^2+u_j^2)|b_j|^2/B_j^2=G m_j^2. For two distinct current-group indices i,j, the ratio J_i/J_j equals (m_i/m_j)^2 and cancels the gain. Using the interval operations above, enclose this ratio and intersect it with ratios of integer squares if an independent finite upper bound on multiplicities is given. Jointly consistent integer vectors can then be intersected with any common-gain interval using J_j/m_j^2 for each j. Exact ratios alone in general cannot distinguish a primitive integer vector from a common positive integer multiple: multiplying every m by k and dividing G by k^2 preserves these magnitude data. This is an ambiguity of the magnitude model, not a claim that arbitrary integer vectors correspond to actual zeta zeros or that the complete ordinary eigenvalue curves have this ambiguity. Additional gain, absolute scale or integer information is necessary.

## 4. Executed exact rational synthetic test

Synthetic geometry (not zeta zeros): current d=1/4,u=1, faster d_h=3/8,u_h=+2,-2, current multiplicity m=2, true gain G=1. Equation (2) gives B=37505/53489; the true |b|^2 from (1) is 22506000400/48638243057. Enclose each coordinate by ±1/1000. Test A supplies a squared-amplitude interval ±1% of the exact synthetic value and G in [99/100,101/100]. Test B widens these to ±40% and G in [1/2,2]. These are assumed observation enclosures for this unit test, not outputs of QIR02 or evidence that actual spectral errors of this size are available.

The following code was executed using exact BigInt rational arithmetic in the connector runtime. Every comparison and interval operation uses integers; decimals are display only.
```js
const gcd=(a,b)=>{while(b){[a,b]=[b,a%b]}return a<0n?-a:a};
const f=(n,d=1n)=>{if(d<0n){n=-n;d=-d}let g=gcd(n,d);return[n/g,d/g]};
const add=(a,b)=>f(a[0]*b[1]+b[0]*a[1],a[1]*b[1]);
const sub=(a,b)=>add(a,f(-b[0],b[1]));
const mul=(a,b)=>f(a[0]*b[0],a[1]*b[1]);
const div=(a,b)=>{if(!b[0])throw Error("zero denominator");return mul(a,f(b[1],b[0]))};
const cmp=(a,b)=>a[0]*b[1]-b[0]*a[1];
const I=(n,d=1n)=>[f(n,d),f(n,d)];
const plus=(a,b)=>[add(a[0],b[0]),add(a[1],b[1])];
const minus=(a,b)=>[sub(a[0],b[1]),sub(a[1],b[0])];
const times=(a,b)=>{if(a[0][0]<0n||b[0][0]<0n)throw Error("not nonnegative");return[mul(a[0],b[0]),mul(a[1],b[1])]};
const quot=(a,b)=>{if(b[0][0]<=0n||a[0][0]<0n)throw Error("not positive divisor");return[div(a[0],b[1]),div(a[1],b[0])]};
const sq=a=>{let lo=mul(a[0],a[0]),hi=mul(a[1],a[1]);return [a[0][0]<=0n&&a[1][0]>=0n?f(0n):cmp(lo,hi)<0n?lo:hi,cmp(lo,hi)>0n?lo:hi]};
const box=(n,d,err)=>{let c=f(n,d);return[sub(c,err),add(c,err)]};
function attenuation(d,u,fast){
 let b=I(1n);
 for(const [dh,uh] of fast){
  let du=sq(minus(u,uh));let n=plus(sq(minus(d,dh)),du),den=plus(sq(plus(d,dh)),du);
  b=times(b,quot(n,den))
 }return b;
}
const exactB=attenuation(I(1n,4n),I(1n),[[I(3n,8n),I(2n)],[I(3n,8n),I(-2n)]])[0];
const c2=div(mul(exactB,exactB),add(f(1n,16n),f(1n)));
const err=f(1n,1000n),d=box(1n,4n,err),u=box(1n,1n,err);
const fast=[[box(3n,8n,err),box(2n,1n,err)],[box(3n,8n,err),box(-2n,1n,err)]];
const B=attenuation(d,u,fast);
function calc(pct,gain){
 const amp=[mul(c2,f(100n-pct,100n)),mul(c2,f(100n+pct,100n))];
 return quot(times(times(I(4n),plus(sq(d),sq(u))),amp),times(sq(B),gain))
}
const precise=calc(1n,[f(99n,100n),f(101n,100n)]);
const wide=calc(40n,[f(1n,2n),f(2n)]);
const ints=a=>Array.from({length:10},(_,i)=>i+1).filter(i=>cmp(f(BigInt(i*i)),a[0])>=0n&&cmp(f(BigInt(i*i)),a[1])<=0n);
if(ints(precise).join()!=="2"||ints(wide).length<2)throw Error("unexpected");
console.log(JSON.stringify({B:B.map(a=>a.map(String)),precise:precise.map(a=>a.map(String)),wide:wide.map(a=>a.map(String)),intsA:ints(precise),intsB:ints(wide)}));
```

Actual exact interval endpoints:
- B lower 9103364879689/13140221683689; upper 9209896401689/12977815097689.
- A: L=9846049184127830184232738012685364776958/2578501486239754542722529934503880060625; U=116110903059577027975306366943188228170738/27711145712737253441748271201926973166875. Display approximately [3.8185160,4.1900434]; only square 4, multiplicity 2.
- B: L=15067438902983497706174341504260937007163/12892507431198772713612649672519400303125; U=144851225599076292325629725097442740094188/12595975323971478837158305091784987803125. Display approximately [1.1686973,11.4998023]; candidate squares 4,9, multiplicities 2,3. Larger integers are excluded by upper endpoint <16; no inference of actual nonuniqueness beyond this sufficient interval test.
The exact comparisons passed. No Rust build or actual eigenvalue computation was attempted.

QIR03 complete as candidate: recursive phase-free interval geometry, exact integer certification, gain/ratio ambiguity, and executed synthetic interval validation. QIR04 should audit the full conditional chain and distinguish stability of the signal model from the unavailable certified arithmetic observation stage. README unchanged.

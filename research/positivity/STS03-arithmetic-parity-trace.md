# STS03 — Arithmetic-side parity trace, explicit smoothing and certified prime-inclusive benchmark

2026-11-25. AI-assisted internal candidate, without RH or a finite off-line-set assumption. Uses STS01–02 and the paired/arithmetic Weil form. Fresh primary-source verification: Suzuki, arXiv:2606.09096v4, https://arxiv.org/html/2606.09096v4, HTML (1.3), (2.8), (2.9)–(2.11), (3.1), §§2.4–2.5 and 3.1: the screw distribution, digamma/prime coefficients, logarithmic form domain and paired zero sum. Differentiating its elementary pole term in (1.3) gives 2cosh(s/2) in the negative second derivative. Search also returned Connes–Consani, *Spectral triples and zeta-cycles*, DOI 10.4171/lem/1049 (abstract), and material on classical smoothed explicit formulas. These are related frameworks, not a verified priority comparison. No PDF analyzed. Section 4 records an actual executed exact-rational arithmetic-only trace enclosure, not a zero-sum calculation, ordinary operator positivity result, or independent human/formal verification. No actual off-line zero or RH proof.

## 1. Exact reflected Dirichlet Green correlation

Set L=2a and write D=-d^2/dx^2+1 on (-a,a) with Dirichlet boundary conditions, Green kernel
    G_a(x,y)=sinh(a+min(x,y)) sinh(a-max(x,y))/sinh L.
For the zero-extended shift T_s f(x)=f(x+s), define
    K_a(s)=int_(x in (-a,a), s-x in (-a,a)) G_a(s-x,x) dx.
This is the reflected trace of T_s D^-1. To justify the diagonal trace without a general kernel trace theorem, use the Dirichlet L2 orthonormal basis phi_n(x)=a^(-1/2) sin(n pi(x+a)/L), with inverse-D eigenvalues (1+(n pi/L)^2)^-1. The Green expansion converges uniformly absolutely because |phi_n|<=a^-1/2 and the inverse eigenvalues are summable. Thus the trace of R T_s D^-1 equals the displayed integral by termwise summation. Equivalently the H0^1 orthonormal basis is phi_n/sqrt(1+(n pi/L)^2), so this is exactly the reflection-weighted trace of the bounded shift form in the Sobolev metric.

For 0<=s<=L, substitute x=s/2+r, |r|<=a-s/2. The product of hyperbolic sines becomes
    [cosh(L-2|r|)-cosh s]/2.
Integrating gives the closed even kernel
    K_a(s)=[sinh L-sinh |s|-(L-|s|)cosh s]/(2 sinh L), |s|<=L,
    K_a(s)=0, |s|>L.                                    (1)
In particular K_a(0)=(1-L/sinh L)/2, 0<=K_a(s)<=K_a(0)<1/2, and for 0<s<L,
    K_a'(s)=-(L-s)sinh s/(2 sinh L).
The derivative is zero at both endpoints of this half-interval; K_a is globally C^1, nonnegative and compactly supported. These properties do not imply positivity of the ordinary Weil form.

## 2. Arithmetic-only formula

Let alpha0=psi(1/4)-log pi=-gamma-pi/2-3log 2-log pi and
    k(s)=exp(-s/2)/(1-exp(-2s)), s>0.
The digamma series gives alpha(t)-alpha0=2 int_0^infinity k(s)(1-cos(ts))ds. In the arithmetic form, this is an integral of the positive forms ||f||^2-Re<T_s f,f>. Reflection commutes with their symmetrized shift operators. To justify the signed trace integration, split into even/odd subspaces and use Tonelli on the positive terms in their Sobolev orthonormal Dirichlet bases. Both integrals of the traces are finite: on the zero extension of each phi_n, the difference norm squared is <=min(s^2 (n pi/L)^2,4), by its H1 translation bound and L2 norm one. Divide by the inverse-basis normalization denominator 1+(n pi/L)^2; since k(s)=O(1/s) near zero and decays at infinity, the resulting integral is O([1+log(2+n pi/L)]/[1+(n pi/L)^2]), summable. Thus subtraction of the parity traces is legitimate.

The prime shifts are a finite sum on each support. The pole form with kernel 2cosh((x-y)/2) gives reflected trace int_(I x I) 2cosh((x+y)/2) G_a(x,y)dxdy, again by the uniformly convergent Green expansion. Substitute s=x+y to obtain its integral against K_a. Altogether
    P(a)=alpha0 K_a(0)
       +2 int_0^infinity k(s)[K_a(0)-K_a(s)]ds
       -2 sum_(n<=exp L) Lambda(n)/sqrt(n) K_a(log n)
       +4 int_0^L cosh(s/2) K_a(s)ds.                   (2)
This is STS01's tr(R Q_S(a)) from the arithmetic form alone; no zeta-zero inputs occur in its evaluation. Values at n=exp L exactly have K=0. The pole contribution is positive in this reflection trace even though the ordinary pole form is indefinite.

For practical scalar evaluation, expand k(s)=sum_(j>=0) exp(-r_j s), r_j=2j+1/2. Since K_a(0)-K_a(s)>=0, Tonelli and integration by parts give
    I_j=int_0^infinity exp(-r_j s)[K_a(0)-K_a(s)]ds
       =[F(r_j-1,L)-F(r_j+1,L)]/(4 r_j sinh L),
    F(c,L)=int_0^L (L-s)exp(-c s)ds
          =L/c-(1-exp(-cL))/c^2 for c!=0,
          =L^2/2 for c=0.
Indeed I_j=(1/r_j)int_0^L exp(-r_j s)(-K_a'(s))ds. The archimedean correction is 2 sum I_j. Since sinh s<=s cosh L on [0,L], I_j<=L coth L/(2 r_j^3). Retaining j=0,...,J-1, J>=2, gives the rigorous one-sided tail
    0<=2 sum_(j>=J) I_j <= L coth L/[16(J-1)^2].          (3)
Use r_j>=2j and the integral comparison of sum j^-3. No oscillatory quadrature or zeta evaluation is required.

The pole integral can also be evaluated exactly by integration by parts using K_a':
    4 int_0^L cosh(s/2)K_a(s)ds
      =[F(-3/2,L)+F(3/2,L)-F(-1/2,L)-F(1/2,L)]/sinh L.  (4)
Use F(-c)+F(c)=(2cosh(cL)-2)/c^2. The arithmetic computation still enumerates primes or prime powers up to exp L, so its worst-case cost grows exponentially in the physical window. A scalar formula is not a practical large-window algorithm by itself.

## 3. Relationship to a classical smoothed prime sum

As L->infinity, K_a(0)->1/2 and K_a(s)->1/2 for every fixed s>=0. The archimedean correction tends to zero by dominated convergence: on 0<s<=1 the derivative formula gives K_a(0)-K_a(s)<=C s^2 uniformly for large L, and otherwise the difference is <=1/2. Equation (4) gives the pole contribution (8/9)exp(L/2)+O(exp(-L/2)). Put X=exp L. The prime weight 2K_a(log n) equals
    1-[n(1+log(X/n))+n^-1(log(X/n)-1)]/(X-X^-1).
Replace it by W(n/X), W(t)=1-t(1-log t) for 0<t<=1, zero for t>1. The difference in the weighted prime sum is O(log X/X): the n^-1 term uses the absolute convergence of sum Lambda(n)/n^(3/2) (Lambda<=log n), while replacing (X-X^-1)^-1 by X^-1 costs O(X^-2) times sum Lambda(n)/sqrt(n)=O(sqrt X) by Chebyshev; the factor (n/X)(1+log(X/n)) is <=1. Thus with
    S(X)=sum_(n<=X) Lambda(n)/sqrt(n) W(n/X),
we have
    P((log X)/2)=alpha0/2+(8/9)sqrt X-S(X)+o(1).          (5)
Combining with STS02 gives RH iff S(X)-(8/9)sqrt X stays bounded as X->infinity, but this is a smoothed explicit-formula criterion, not a fundamentally new independent RH strategy.

In fact direct integration for Re s>1/2 (absolute convergence) gives
    int_1^infinity S(X) X^(-s-1)dX
      =[-zeta'/zeta(s+1/2)]/[s(s+1)^2].
Here int_0^1 W(t)t^(s-1)dt=1/s-1/(s+1)-1/(s+1)^2=1/[s(s+1)^2], and the Euler Dirichlet series supplies -zeta'/zeta. This identifies precisely the classical Mellin kernel behind the STS02 pole-residue identity. It is important to record this limitation: STS01 provides an operator trace realization of the smoothing, not a new arithmetic source of zero information beyond the explicit formula. The direct Mellin identity explains why the global inverse works; it does not solve the analytic continuation problem from finite data.

## 4. Executed exact arithmetic benchmark at a=log 2

Choose L=log 4=2log 2. Then sinh L=15/8 and coth L=17/15. The prime terms n=2,3 contribute, while n=4 lies at the support boundary and contributes zero. For each half-integer c=k/2, exp(-cL)=2^-k exactly, so F(c,L) is rational affine in L; (4) becomes 52/135 exactly. Retain J=64 archimedean terms with (3).

All transcendental input intervals below are generated by rational series, not floating-point constants. For x>1, r=(x-1)/(x+1), the first N terms of 2 sum r^(2j+1)/(2j+1) give a lower bound on log x; the omitted tail is <=2 r^(2N+1)/[(2N+1)(1-r^2)]. Use Machin's pi identity 16 atan(1/5)-4 atan(1/239), with alternating rational series and the first omitted term as enclosure (identity follows by the tangent addition formula and angle range). For Euler gamma, write
    H_N-log N-gamma=sum_(k>=N) [log(1+1/k)-1/(k+1)].
The bracket equals int_k^(k+1) (k+1-x)/(x(k+1))dx and lies between 1/[2(k+1)^2] and 1/[2k(k+1)]. Summing gives 1/[2(N+1)]<=H_N-log N-gamma<=1/(2N). Use N=256 and log N=8log 2. The sqrt intervals are checked by squaring endpoints. Every interval operation uses exact rational endpoints; intermediate outward rounding only where indicated. No zero data used.

Actual executed JavaScript BigInt calculation, reproducible in an ordinary JS runtime without dependencies:
```js
const gcd=(a,b)=>{while(b){[a,b]=[b,a%b]}return a<0n?-a:a};
const F=(n,d=1n)=>{if(!d)throw Error("zero denominator");if(d<0n){n=-n;d=-d}let g=gcd(n,d);return[n/g,d/g]};
const A=(x,y)=>F(x[0]*y[1]+y[0]*x[1],x[1]*y[1]);
const N=x=>F(-x[0],x[1]),S=(x,y)=>A(x,N(y)),M=(x,y)=>F(x[0]*y[0],x[1]*y[1]),D=(x,y)=>M(x,F(y[1],y[0]));
const cmp=(x,y)=>x[0]*y[1]-y[0]*x[1];
const min=xs=>xs.reduce((x,y)=>cmp(x,y)<0n?x:y),max=xs=>xs.reduce((x,y)=>cmp(x,y)>0n?x:y);
const I=x=>[x,x],ia=(x,y)=>[A(x[0],y[0]),A(x[1],y[1])],is=(x,y)=>[S(x[0],y[1]),S(x[1],y[0])];
const im=(x,y)=>{let v=x.flatMap(a=>y.map(b=>M(a,b)));return[min(v),max(v)]};
const id=(x,y)=>{if(cmp(y[0],F(0n))<=0n&&cmp(y[1],F(0n))>=0n)throw Error("interval zero");return im(x,[D(F(1n),y[1]),D(F(1n),y[0])])};
const Q=10n**12n;
const floor=x=>{let n=x[0]*Q,d=x[1];return n>=0n?n/d:-((-n+d-1n)/d)};
const ceil=x=>-floor(N(x));const outward=x=>[F(floor(x[0]),Q),F(ceil(x[1]),Q)];
function logBound(x,n){
 let r=D(S(x,F(1n)),A(x,F(1n))),r2=M(r,r),p=r,t=F(0n);
 if(r[0]<0n)throw Error("x<1");
 for(let k=0;k<n;k++){t=A(t,D(M(F(2n),p),F(BigInt(2*k+1))));p=M(p,r2)}
 let tail=D(M(F(2n),p),M(F(BigInt(2*n+1)),S(F(1n),r2)));return[t,A(t,tail)]
}
function atanBound(x,n){
 let p=x,x2=M(x,x),s=F(0n);
 for(let k=0;k<n;k++){let term=D(p,F(BigInt(2*k+1)));s=A(s,k%2?N(term):term);p=M(p,x2)}
 let t=D(p,F(BigInt(2*n+1))),other=A(s,n%2?N(t):t);
 return[min([s,other]),max([s,other])]
}
const l2=outward(logBound(F(2n),16)),l3=outward(logBound(F(3n),24));
const pi=outward(is(im(I(F(16n)),atanBound(F(1n,5n),12)),im(I(F(4n)),atanBound(F(1n,239n),6))));
const lpi=outward([logBound(pi[0],28)[0],logBound(pi[1],28)[1]]);
let H=F(0n);for(let i=1n;i<=256n;i++)H=A(H,F(1n,i));
const gamma=outward(is(is(I(H),im(I(F(8n)),l2)),[F(1n,514n),F(1n,512n)]));
const alpha=is(I(F(0n)),ia(ia(gamma,im(I(F(1n,2n)),pi)),ia(im(I(F(3n)),l2),lpi)));
const L=im(I(F(2n)),l2),sinh=F(15n,8n),den=F(15n,4n);
const K0=id(is(I(sinh),L),I(den));
const K2=id(is(is(I(sinh),I(F(3n,4n))),im(is(L,l2),I(F(5n,4n)))),I(den));
const K3=id(is(is(I(sinh),I(F(4n,3n))),im(is(L,l3),I(F(5n,3n)))),I(den));
const sqrt2=[F(1414213562373n,Q),F(1414213562374n,Q)],sqrt3=[F(1732050807568n,Q),F(1732050807569n,Q)];
for(const [s,n] of [[sqrt2,2n],[sqrt3,3n]])if(cmp(M(s[0],s[0]),F(n))>0n||cmp(M(s[1],s[1]),F(n))<0n)throw Error("sqrt");
const prime=im(I(F(-2n)),ia(im(id(l2,sqrt2),K2),im(id(l3,sqrt3),K3)));
function Fn(k){const c=F(BigInt(k),2n),ec=k>=0?F(1n,2n**BigInt(k)):F(2n**BigInt(-k));return is(id(L,I(c)),I(D(S(F(1n),ec),M(c,c))))}
let arch=I(F(0n));
for(let j=0;j<64;j++){let r=F(BigInt(4*j+1),2n);arch=ia(arch,id(is(Fn(4*j-1),Fn(4*j+3)),I(M(F(2n),M(r,sinh)))))}
const tail=id(im(L,I(F(17n,15n))),I(F(16n*63n**2n)));
const archAll=ia(arch,[F(0n),tail[1]]);
const pole=I(F(52n,135n)),trace=ia(ia(im(alpha,K0),archAll),ia(prime,pole));
const disp=x=>[String(floor(x[0])),String(ceil(x[1]))];
const output={denominator:String(Q),log2:disp(l2),log3:disp(l3),pi:disp(pi),logPi:disp(lpi),gamma:disp(gamma),alpha0:disp(alpha),K0:disp(K0),K2:disp(K2),K3:disp(K3),arch64:disp(arch),tailUpper:String(ceil(tail[1])),prime:disp(prime),pole:disp(pole),trace:disp(trace)};
if(cmp(trace[1],F(0n))>=0n)throw Error("no strict sign");console.log(JSON.stringify(output));
```

Actual returned output (all endpoints integers over 10^12, tailUpper is an upper bound):
```json
{"denominator":"1000000000000","log2":["693147180559","693147180560"],"log3":["1098612288668","1098612288669"],"pi":["3141592653589","3141592653590"],"logPi":["1144729885849","1144729885850"],"gamma":["577214393337","577221993054"],"alpha0":["-5372189747379","-5372182147657"],"K0":["130321503701","130321503702"],"K2":["68950939813","68950939814"],"K3":["16585745576","16585745579"],"arch64":["403267617613","403267617617"],"tailUpper":"24740704","prime":["-88629869687","-88629869683"],"pole":["385185185185","385185185186"],"trace":["-288912938","-263181818"]}
```
The exact comparisons passed and give the strict arithmetic certificate
    -288912938/10^12 <= P(log 2) <= -263181818/10^12 <0.
The sign is the difference of full even/odd Sobolev eigenvalue sums, not the sign of an eigenvalue or the ordinary form. Preliminary floating-point exploration selected this benchmark, but no floating values enter the interval certificate. No actual zeta-zero computation, inverse-Gram solve, Rust execution or independent human/formal review. This is a bounded reproducible scalar calculation with genuine prime contributions; its feasibility says nothing about exponential-scale windows or RH.

STS03 complete as candidate: independent arithmetic parity trace, elementary archimedean tail, exact prime-inclusive rational benchmark, and explicit reduction to a classical Mellin smoothing. STS04 next: scoped audit, clarify what is structurally new versus inherited, and assess a more useful direction. README unchanged.

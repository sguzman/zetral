# DCV03 — Larger-window rational certificate and parity comparison

2026-11-25. AI-assisted internal candidate, without RH or zero data. Uses DCV01's exact sharp-cutoff periodic symbol at L=1/4, and improves the elementary coefficient lower bounds. Exact integer validation executed this turn in JavaScript BigInt; no fresh literature retrieval, Rust execution, exact inverse-Gram evaluation, independent human or formal verification, or priority claim. In particular no claim of improvement over published or earlier project small-window results other than the specifically compared CPC03/DCV01 benchmarks.

## 1. Improved rational coefficient bounds

The sharp-cutoff symbol in DCV01 is independent of the physical half-window A when 0<A<=L/2=1/8. At equality each compact smooth test has autocorrelation supported strictly inside (-L,L); periodization therefore remains exact on the core and extends by closure. No prime shifts occur since L<log 2.

Improve alpha(0)>-6 to alpha(0)>-11/2. The identity alpha(0)=-gamma-pi/2-3log 2-log pi is imported from CPC03. Elementary enclosures:
- gamma <= H_32-log 32; the directed integer sum sum_(j=1)^32 ceil(10^6/j)=4058509 gives gamma<593509/10^6<3/5 using log 2>693/1000.
- log 2 lies between 693/1000 and 694/1000: the first four terms of 2 sum_(j>=0) (1/3)^(2j+1)/(2j+1) sum to 53056/76545, and the remaining positive tail is <=1/(4*3^9), giving the upper enclosure 1910051/2755620.
- pi<22/7 and log pi<23/20: the first six terms of exp(23/20) sum to 1211276443/384000000>22/7.
The upper bound on -alpha(0) is consequently 3/5+11/7+3(694/1000)+23/20=4728/875<11/2. These rational comparisons were actually checked in the arithmetic run.

Write Q=10^6, d_j=4j+1, r_j=d_j/2, x_n=576 n^2. For |n|>=1 use t_n^2>=144 n^2 and
    exp(-r_j L)=exp(-d_j/8)<=128/(128+16d_j+d_j^2)
by the first three terms of the positive exponential series. Write E_j=128+16d_j+d_j^2. The DCV01 nonnegative individual summands then give the sharper uniform lower bound
    B_n = -11Q/2
       + sum_(j=0)^63 floor(Q*max(0,4(E_j x_n-128 d_j^2))/(d_j(d_j^2+x_n)E_j))
       - ceil(Q/(144 n^2)),
    S_n >= B_|n|/Q.
The pole loss bound is unchanged from DCV01. Each positive-part summand is nondecreasing in n>=1 (the rational function of x has positive derivative); flooring and the negative ceiling loss preserve monotonicity. Thus B_k>=Q*mu guarantees S_n>=mu for every |n|>=k, not merely the enumerated ones.

At n=0, use the degree-five Taylor polynomial T_5(y)=sum_(m=0)^5 (-y)^m/m! as a lower bound for exp(-y) for every y>=0 (positive integral remainder). The n=0 archimedean summands are 4 exp(-d_j/8)/d_j, and H_0=8 sinh(1/8)>=1. Thus
    B_0=-11Q/2+Q+sum_(j=0)^63 floor(4Q max(0,T_5(d_j/8))/d_j).
All floors are of nonnegative rational terms; infinite positive tails are discarded. No transcendental numerical evaluations are used.

## 2. Trace and parity certificate

For mu=B_k/Q>0 and fixed k>=1, define integer weights w_n=max(0,B_k-B_n), 0<=n<k. At A=1/d, d>=8, the exact periodic Parseval identity gives
    A_A >= [B_k/Q - 4 U/(d Q)] I,
    U=w_0+2 sum_(n=1)^(k-1) w_n.
This is DCV01's constant-baseline comparison, not an inverse-Gram computation. The size is fixed by k, independent of A in the stated range.

For a parity improvement restrict the same finite comparison to even and odd sectors. In the periodic normalization e_n=exp(-it_n x)/sqrt(2L), the zero-mode trace is (4/d)w_0/Q in the even sector only. For n>=1, the sum of the even and odd trace contributions of ±n before multiplication by w_n/Q is 2A/L=8/d. The odd contribution equals (1/L) integral_(-A)^A sin^2(t_n x)dx. The upper bound sin^2(y)<=y^2 and pi<22/7 give
    odd_n <= min(8/d, 8*7744*n^2/(147*d^3)).
When 8n<=d, |t_n x|<=pi/2, so sin^2(y)>=(2y/pi)^2 gives
    odd_n >= 8*3136*n^2/(147*d^3).
Otherwise use zero as the lower bound. Hence even_n<=8/d-odd_lower_n. These sector trace bounds yield A_A>= [mu-max(trace_even,trace_odd)] I; no assumption about which parity realizes the actual bottom.

## 3. Executed exact arithmetic

The following script reproduces all coefficient and certificate calculations. JS BigInt is used because the actual container invocation of rustc --version in this turn again exited 127 with "bash: line 1: rustc: command not found"; no Rust binary was built. The code uses only exact integers, with directed rounding as specified. The chosen baseline indices were selected from a finite scan of 1..32; no globally optimal baseline claim.

```js
const Q=1000000n,cd=(a,b)=>(a+b-1n)/b;
const gcd=(a,b)=>{while(b){[a,b]=[b,a%b]}return a<0n?-a:a};
const add=([a,b],[c,d])=>{let x=a*d+b*c,y=b*d,g=gcd(x,y);return[x/g,y/g]};
const lt=([a,b],[c,d])=>a*d<b*c;
let loglo=[0n,1n];for(let j=0n;j<4n;j++)loglo=add(loglo,[2n,(2n*j+1n)*3n**(2n*j+1n)]);
let loghi=add(loglo,[1n,4n*3n**9n]);
if(!lt([693n,1000n],loglo)||!lt(loghi,[694n,1000n]))throw Error("log2 enclosure");
let ex=[1n,1n],term=[1n,1n];for(let j=1n;j<=5n;j++){term=[term[0]*23n,term[1]*20n*j];ex=add(ex,term)}
if(!lt([22n,7n],ex))throw Error("log pi enclosure");
let H=0n;for(let i=1n;i<=32n;i++)H+=cd(Q,i);
if(H-5n*693000n>=600000n)throw Error("gamma bound");
let total=[3n,5n];for(const t of [[11n,7n],[2082n,1000n],[23n,20n]])total=add(total,t);
if(!lt(total,[11n,2n]))throw Error("alpha bound");
let B0=-5500000n+Q,zterms=[];
for(let j=0n;j<64n;j++){
 let d=4n*j+1n,den=120n*8n**5n;
 let num=den-120n*8n**4n*d+60n*8n**3n*d**2n-20n*8n**2n*d**3n+5n*8n*d**4n-d**5n;
 if(num>0n){let v=Q*4n*num/(d*den);B0+=v;zterms.push(String(v));}
}
let B=[B0];
for(let n=1n;n<=32n;n++){
 let b=-5500000n,x=576n*n*n;
 for(let j=0n;j<64n;j++){
  let d=4n*j+1n,d2=d*d,E=128n+16n*d+d2,top=4n*(E*x-128n*d2),bot=d*(d2+x)*E;
  if(top>0n)b+=Q*top/bot;
 }
 b-=cd(Q,144n*n*n);
 if(b<B[B.length-1])throw Error("sample ordering");B.push(b);
}
let rows=[];
for(let [d,k,l] of [[2048n,32,32],[128n,16,18],[64n,8,9],[32n,4,5],[24n,3,4],[16n,2,2],[12n,1,2],[9n,1,1],[8n,1,1]]){
 let mu=B[k],U=B.slice(0,k).reduce((s,b,n)=>s+(n?2n:1n)*(mu-b),0n);
 let num=mu*d-4n*U,den=d*Q,m=B[l],D=147n*d**3n;
 let even=4n*147n*d*d*(m-B[0]),odd=0n;
 for(let n=1;n<l;n++){
  let nn=BigInt(n),w=m-B[n],tot=8n*147n*d*d;
  let lo=8n*nn<=d?8n*3136n*nn*nn:0n,hi=8n*7744n*nn*nn;
  even+=w*(tot-lo);odd+=w*(hi>tot?tot:hi);
 }
 let pnum=m*D-(even>odd?even:odd),pden=D*Q;
 if(num<=0n||pnum<=0n)throw Error("no positivity");
 rows.push({d:String(d),k,mu:String(mu),U:String(U),trace:`${num}/${den}`,l,parityMu:String(m),even:String(even),odd:String(odd),parity:`${pnum}/${pden}`});
}
console.log(JSON.stringify({loglo:loglo.map(String),loghi:loghi.map(String),expLo:ex.map(String),gammaUpper:String(H-3465000n),alphaAbsUpper:total.map(String),zterms,B:B.map(String),rows}));
```

Actual returned coefficient list B_0..B_32:
```
-339229,365628,1135233,1546200,1817749,2013524,2161355,2276194,2367187,2440367,2499942,2548944,2589633,2623693,2652441,2676874,2697774,2715771,2731353,2744930,2756813,2767267,2776506,2784700,2792006,2798541,2804411,2809695,2814473,2818790,2822731,2826319,2829596
```
Zero-mode retained rounded terms: 3529987,428148,143214,54232,5190. Raw certificate rows (all integers, no floating-point rounding):
| d=1/A | k | Q*mu | U | trace lower gap | parity k | parity Q*mu | even numerator | odd numerator | parity lower gap |
|---:|---:|---:|---:|---|---:|---:|---:|---:|---|
|2048|32|2829596|26249689|5690013852/2048000000|32|2829596|64720427773929984|44171079845376|3508268122808440320/1262720385024000000|
|128|16|2697774|20540295|263153892/128000000|18|2731353|202288021297152|16498928894976|639737152481280/308281344000000|
|64|8|2367187|13215268|98638896/64000000|9|2440367|33350665513984|3639566627840|60689286812672/38535168000000|
|32|4|1817749|6969350|30290568/32000000|5|2013524|4943651213312|774361341952|4755284488192/4816896000000|
|24|3|1546200|5068507|16834772/24000000|4|1817749|2194198963712|410501757952|1499699676160/2032128000000|
|16|2|1135233|3013672|6109040/16000000|2|1135233|434334168576|47678568960|249203243520/602112000000|
|12|1|365628|704857|1568108/12000000|2|1135233|235865785344|47678568960|52501560384/254016000000|
|9|1|365628|704857|471224/9000000|1|365628|33570929196|0|5610864168/107163000000|
|8|1|365628|704857|105596/8000000|1|365628|26525178624|0|993447168/75264000000|

Even/odd trace numerators have common denominator 147*d^3*Q. At d=8 choose k=1: only the zero mode can have a deficit below mu=365628/Q. The lower gap is 105596/8000000=26399/2000000=0.0131995. The exact periodic identity on the compact smooth core at equality A=L/2, and its extension by closed-form approximation, give
    A_(1/8) >= (26399/2000000) I.
This is 256 times DCV01's benchmark half-window and improves DCV01's lower gap at A=1/2048 from 0.48050865625 to 2.778327076171875 by the trace comparison. Monotonicity of physical-window minmax also transfers the 1/8 bound to smaller windows. Parity improves the comparison at intermediate windows, e.g. A=1/12 from 0.130675666... to 0.206686037... with the chosen baselines. These are comparisons to the specified recent project benchmarks, not claims of novelty, best available bounds or exact eigenvalue estimates.

## 4. Scope and disposition

The largest window tested uses a single candidate deficit mode, because the positive baseline is deliberately low. Evaluating the 33 lower bounds costs at most 32*64 rational-term operations plus the zero-mode computation; no timing benchmark was performed. The test only covers this fixed prime-free auxiliary period, not windows past its endpoint. There is no evidence of scalability into the prime-shift regime and no actual inverse-Gram computation. Rust execution remains blocked; only the exact BigInt arithmetic was run. DCV03 complete as a mathematical candidate with executed finite integer checks. DCV04 audit the derivation, compare to earlier project results before any stronger claims, preserve the actual limitations and decide a justified next route. README unchanged.

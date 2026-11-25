# DCV02 — Implementation and validation record

2026-11-25. AI-assisted; no RH assumption or zero data. Arithmetic validation only; the underlying DCV01 mathematical derivation is an internal candidate without independent human or formal verification.

## Rust source
`research/positivity/dcv/dcv02.rs`, commit 64a594251a86f4e7c3ac2614e5b186ad4f48ae06, blob 4c686bd2d57065b062897e3d39113d85a63e6ccc, exact remote readback. Dependency-free, checked i128 arithmetic. Reproduction from repository root:

```sh
rustc --edition=2021 -C overflow-checks=yes -O research/positivity/dcv/dcv02.rs -o /tmp/zetral-dcv02
/tmp/zetral-dcv02
```

These build/run commands are provided for a Rust-enabled environment, NOT claimed executed. Actual container probe:

```sh
command -v rustc || true
command -v cargo || true
ls -d "$HOME"/.rustup/toolchains/* /opt/rust* /usr/local/cargo/bin /root/.cargo/bin /home/oai/.cargo/bin 2>/dev/null || true
rustc --version
```

Observed stdout/stderr: `bash: line 1: rustc: command not found`. Exit 127. No paths returned. No compilation, Rust test, CI or installation attempted; no new infrastructure or expenses.

## Independent exact fraction cross-check executed in JavaScript runtime
Unlike simply repeating DCV01's rounded sum, the following also accumulates the exact unrounded rational lower bounds and verifies outward rounding by integer cross multiplication. For each mode the floor/ceiling loss is less than the number of retained positive terms plus two scaled integer units. The exact rational series bound is still conditional on DCV01's analytic inequalities, not an independent validation of them.

```js
const gcd=(a,b)=>{a=a<0n?-a:a;b=b<0n?-b:b;while(b){let t=a%b;a=b;b=t}return a};
const add=([a,b],[c,d])=>{let x=a*d+b*c,y=b*d,g=gcd(x,y);return[x/g,y/g]};
const Q=1000000n;let U=0n;let logs=[];
let expected=[-6000000n,-681065n,17413n,423868n,711898n];
for(let n=0n;n<=4n;n++){
 let rat=[-6n,1n],B=-6n*Q,terms=0n;
 if(n){
  let x=576n*n*n;
  for(let j=0n;j<64n;j++){
   let d=4n*j+1n;
   if(x>d*d){let a=4n*(x-d*d),b=d*(d*d+x);
    rat=add(rat,[a,b]);B+=Q*a/b;terms++}
  }
  let den=144n*n*n;rat=add(rat,[-1n,den]);B-=(Q+den-1n)/den;
 }
 let error=rat[0]*Q-B*rat[1];
 if(error<0n||error>=(terms+2n)*rat[1])throw Error("rounding enclosure");
 if(B!==expected[Number(n)])throw Error("row mismatch");
 let w=Q/2n>B?Q/2n-B:0n;U+=(n?2n:1n)*w;
 logs.push({n:String(n),B:String(B),w:String(w),
 positiveTerms:String(terms),roundingErrorBelowUnits:String(terms+2n)})
}
let den=512n*Q,num=den/2n-U;
if(U!==9979568n||num*25n<=den*12n)throw Error("certificate failure");
console.log(JSON.stringify({rows:logs,U:String(U),gap:`${num}/${den}`,
 reduced:`${num/gcd(num,den)}/${den/gcd(num,den)}`,
 crossMultiplyMargin:String(num*25n-den*12n),pass:true}));
```

Actual returned values:
```json
{"rows":[{"n":"0","B":"-6000000","w":"6500000","positiveTerms":"0","roundingErrorBelowUnits":"2"},{"n":"1","B":"-681065","w":"1181065","positiveTerms":"6","roundingErrorBelowUnits":"8"},{"n":"2","B":"17413","w":"482587","positiveTerms":"12","roundingErrorBelowUnits":"14"},{"n":"3","B":"423868","w":"76132","positiveTerms":"18","roundingErrorBelowUnits":"20"},{"n":"4","B":"711898","w":"0","positiveTerms":"24","roundingErrorBelowUnits":"26"}],"U":"9979568","gap":"246020432/512000000","reduced":"15376277/32000000","crossMultiplyMargin":"6510800","pass":true}
```

The DCV01 monotonicity lemma controls all higher modes and was not inferred from sampling. The integer result is reproducible and exact, not an approximate floating-point eigenvalue. DCV02 complete with explicit Rust runtime limitation. Next DCV03: use the validated rational comparison to assess a modest larger physical window, improve baseline/trace via parity or bounds if justified, and compare to prior benchmark; do not present it as an inverse-Gram computation. No novelty claim or RH proof. README unchanged.

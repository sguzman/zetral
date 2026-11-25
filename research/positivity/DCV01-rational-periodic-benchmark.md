# DCV01 — Rational periodic benchmark with seven candidate deficit modes

2026-11-25. AI-assisted internal candidate derivation. No RH assumption, zero data, novelty claim, formal or independent human verification. Uses CPC04's periodization and CPC03's analytic benchmark, with a sharp cutoff variant justified below. No fresh literature retrieval; no new external theorem imported. Exact integer arithmetic for the finite table was executed in the connector's JavaScript runtime (BigInt); no Rust execution yet.

## 1. Benchmark and exact symbol

Fix A=1/2048, L=1/4, threshold s=0 and positive baseline mu=1/2. The physical differences satisfy 2A<L<log 2, so no prime shift contributes. In CPC04 choose the cutoff chi=1_{[-L,L]}, which is not smooth at its endpoints. This variant is valid: define chi D_alpha as D_alpha minus the ordinary integrable function 1_{|x|>L} D_alpha(x), using D_alpha(x)=-k(|x|) off zero. The product is thereby defined without multiplying a distribution by a nonsmooth function at a singularity. Its support is [-L,L], and the cutoff pole kernel is integrable. Endpoint values do not matter for these locally ordinary kernels. Periodization with period 2L is valid as a compactly supported distribution; translated copies cannot intersect the physical autocorrelation support [-2A,2A], since 2A<L. Thus CPC04's exact diagonal form identity applies with t_n=4pi n and c_n=F[f](t_n)/sqrt(2L). The symbol at each integer mode is
    S_n=alpha(0)+2 sum_(j>=0) [1/r_j - r_j(1-(-1)^n exp(-r_j L))/(r_j^2+t_n^2)] + H_n,
    r_j=2j+1/2,
    H_n=2(-1)^n sinh(L/2)/(t_n^2+1/4).
Indeed k(x)=sum_j exp(-r_j x) for x>0, and the corrected archimedean symbol equals
    alpha(0)+2 integral_0^L k(x)(1-cos(t_n x))dx +2 integral_L^infinity k(x)dx.
Every summand in the expansion of these two integrals is nonnegative; interchange follows by monotone convergence. Integrating the exponential cosine over [0,L] gives r_j(1-(-1)^n exp(-r_j L))/(r_j^2+t_n^2), using t_n L=pi n. The pole term H_n follows by integrating 4 cosh(x/2) cos(t_n x) on [0,L]. No prime terms occur. This series exactly represents the corrected symbol, not merely an approximation.

## 2. Rational lower bounds uniform in the mode index

The same elementary quarter-digamma bound in CPC03 gives alpha(0)>-6. For n=0 the summands and H_0 are nonnegative, so S_0>=-6. For |n|>=1 use t_n^2>=144 n^2 (pi>3), 1-(-1)^n exp(-r_j L)<=2, and nonnegativity of each true summand. Write d_j=4j+1=2r_j. Then
    S_n >= -6 + sum_(j=0)^63 max(0,4(576 n^2-d_j^2)/(d_j(d_j^2+576 n^2))) - 1/(144 n^2).
Here the last term bounds H_n from below, since 2 sinh(1/8)<1 (e.g. sinh(1/8)<= (1/8)cosh(1)<1/4). Every term of the lower bound is nondecreasing as a function of |n|>=1, including the pole error. Discarding the infinite positive tail is rigorous. All operations in the lower estimate are rational, and no exponential or digamma numerical evaluation is required.

For Q=1000000 define integer B_0=-6Q and for integer n>=1
    B_n=-6Q
      +sum_(j=0)^63 floor(Q*max(0,4(576 n^2-d_j^2))/(d_j(d_j^2+576 n^2)))
      -ceil(Q/(144 n^2)).
Then S_n>=B_|n|/Q. Each floor/ceiling is evaluated with nonnegative integer division, and monotonicity survives rounding. Exact BigInt evaluation (DCV01) gives:

| |n| | B_n | upper deficit Q*(mu-S_n)_+ |
|---:|---:|---:|
| 0 | -6000000 | 6500000 |
| 1 | -681065 | 1181065 |
| 2 | 17413 | 482587 |
| 3 | 423868 | 76132 |
| 4 | 711898 | 0 |

Since B_4>Q/2, monotonicity proves all |n|>=4 have S_n>=mu, with no further enumeration. The candidate set J={-3,-2,-1,0,1,2,3} contains the entire true deficit set; actual positivity or negativity of the seven individual coefficients is not claimed. The bound does not depend on a doubly exponential ceiling.

## 3. Exact trace certificate

For all compact smooth physical tests, q_A(f)=sum_n S_n |c_n|^2. Parseval gives sum |c_n|^2=||f||^2, and |c_n|^2<= (A/L)||f||^2 by Cauchy-Schwarz. Thus
    q_A(f)>=mu||f||^2 - sum_(n in J) (mu-S_n)_+ |c_n|^2
           >=[mu-(A/L) sum_(n in J) (mu-B_|n|/Q)_+]||f||^2.
The exact weighted integer deficit sum is
    U=6500000+2(1181065+482587+76132)=9979568.
At A/L=1/512,
    q_A(f)>=[1/2-9979568/(512*1000000)]||f||^2
           = (246020432/512000000)||f||^2
           = 0.48050865625 ||f||^2 > (12/25)||f||^2.
The bound extends by the compact smooth form core. The trace test does not need the inverse of P; it is a sufficient constant-baseline comparison within CPC04, not an evaluation of its exact inverse Gram matrix. This is stronger than CPC03's conservative 1/3 bound at this same very small window, not a claim of improvement over earlier small-window campaigns. The lower gap is rational exactly; no floating rounding is involved. With L fixed the same symbol estimates apply for any 0<2A<L, but the comparison loss scales linearly in A; larger-window benchmark selection belongs to DCV03.

## 4. Reproducibility and next milestone

Exact finite evaluation in this batch was performed with JavaScript BigInt as follows (also evaluated n=5..21, unnecessary after monotonicity):

```js
const Q=1000000n;
let U=0n;
for(let n=0n;n<=4n;n++){
  let B=-6n*Q;
  if(n>0n){
    for(let j=0n;j<64n;j++){
      const d=4n*j+1n, x=576n*n*n;
      const top=4n*(x-d*d), bot=d*(d*d+x);
      if(top>0n) B+=Q*top/bot;
    }
    const den=144n*n*n;
    B-=(Q+den-1n)/den;
  }
  const w=B<Q/2n?Q/2n-B:0n;
  U+=(n===0n?1n:2n)*w;
  console.log(n.toString(),B.toString(),w.toString());
}
console.log(U.toString()); // 9979568
```

The suffix n in JavaScript integer literals is BigInt syntax, so e.g. 576n*n*n is 576 times the square of the loop index. The Rust implementation in DCV02 should use checked integer operations (i128 or u128 after clamping the numerator), verify B_4>=Q/2, evaluate the exact gap inequality by cross multiplication, and emit the above coefficient table and rational gap. No dependencies or new infrastructure needed. Runtime probe in this batch: command -v rustc and command -v cargo both produced no output in the container; Rust execution is not yet established. DCV02 should attempt toolchain discovery and actual execution if available; otherwise persist source, explicit failed invocation and exact alternative integer validation, with no claim of Rust execution. No actual numerical inverse-Gram certificate executed, no RH proof or independent review. README unchanged.

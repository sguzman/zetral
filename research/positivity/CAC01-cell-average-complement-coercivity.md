# CAC01 — Certified logarithmic coercivity on a cell-average complement

2026-11-25. AI-assisted candidate deduction without RH, and executed scalar interval arithmetic. Classical Poincare, Fourier and Jensen inequalities are not originality claims. No full positivity certificate or independent review.

Let I=(-a,a) and partition it into finitely many cells of lengths at most h>0. Let V be the space of cellwise constant functions, and E=V^perp in ordinary L²(I). Use the actual archimedean multiplier alpha(t)=Re psi(1/4+it/2)-log pi.

## 1. An explicit global lower symbol bound

For all t!=0,
    alpha(t)>=log(|t|/(2pi))-3/2.                          (1)
For |t|>=1, use the classical digamma expansion and complex remainder from NIST DLMF §5.11.2 and §5.11(ii), actual HTML inspected this turn https://dlmf.nist.gov/5.11#ii line 239. With z=1/4+it/2, the remainder after log z-1/(2z) is bounded by sec^3(arg(z)/2)/(12|z|²)<=2sqrt(2)/(3t²). Also log|z|>=log(|t|/2) and Re(1/(2z))<=1/(2t²). Thus the negative error is bounded by (1/2+2sqrt(2)/3)/t²<3/2. This only uses the classical source bound, not a zeta-zero assumption.

For 0<t<=1 the positive digamma difference series gives
    alpha(t)>=alpha0+4t²/(t²+1/4)
by retaining its j=0 term; alpha0=-gamma-pi/2-3log 2-log pi. Subtract log(t/(2pi)). The derivative is 2t/(t²+1/4)²-1/t, negative before t0=(sqrt(2)-1)/2 and positive from t0 to 1 (the second stationary point is (sqrt(2)+1)/2>1). The minimum lower expression equals
    alpha0+2-sqrt(2)+log(2pi/t0).
The integer interval computation below encloses it strictly above -3/2, establishing (1) over the remaining range. Evenness handles t<0. This is a conservative global lower bound, not a sharp minimization of the true symbol.

## 2. The zero-cell-average primitive controls the log energy

For f in E, extend by zero and define the primitive F(x)=int_(-infty)^x f(s)ds. It vanishes at every cell boundary and outside I, because each cell average of f is zero. It is H¹ with F'=f. Dirichlet Poincare on each cell gives
    ||F||² <= (h/pi)² ||f||².
For a unit f in the actual log form domain define the probability measure dnu(t)=|Fhat_f(t)|² dt/(2pi) (Fhat_f denotes the Fourier transform of f, not of the primitive). Plancherel gives
    int t^-2 dnu(t)=||F||² <= h²/pi².
The positive logarithmic moment is finite on the form domain, and its negative part near zero is integrable by the inverse-square estimate. Jensen applied to log(t^-2) yields
    int log|t| dnu(t)>= -0.5 log(int t^-2 dnu(t)) >= log(pi/h).
Together with (1), the archimedean quadratic form on E is at least log(1/(2h))-3/2. This is a direct bound for the full complement, not merely for a discrete Fourier tail.

## 3. Exact arithmetic perturbation and parity

Let S_a=sum_(n<exp(2a)) Lambda(n)/sqrt n. The prime operator norm is <=2S_a by the truncated shift contraction. For the restored operator A=T+H, H=2c tensor c-2s tensor s, with c=cosh(x/2), s=sinh(x/2). On E the negative pole term is bounded below by -2||proj_E s||²||f||². The mean-zero Neumann Poincare estimate on each cell applied to s minus its cell average gives
    ||proj_E s||²<= (h/pi)²||s'||²
                 =h²(sinh a+a)/(4pi²).
Hence for every f in the actual form domain intersected with E,
    q_A(f)>=delta_a(h)||f||²,
    delta_a(h)=log(1/(2h))-3/2-2 S_a-h²(sinh a+a)/(2pi²). (2)
For T omit the final pole term. For A on the even sector omit it as well if the partition is reflection symmetric, since the odd pole vanishes there. A sharper exact pole loss can use the explicitly integrated cell averages instead of the Poincare bound. No approximate support projection was used. Since the right side grows like log(1/h) as h decreases at fixed a, there is a finite partition giving a positive complement bound for every fixed window, independent of RH. The number of cells may be enormous as a grows: the sufficient bound requires h exponentially small in S_a. No scale improvement over earlier exponential arithmetic barriers is asserted.

## 4. Executed scalar threshold at a=1/2

Only prime 2 contributes and S_a=log 2/sqrt 2. Use m equal cells of length h=1/m. The script experiments/cac01-cell-complement-bound.js, commit a2341731ac9a744fe70b44b453578c1286990f1a, was executed in V8 and exactly read back. Its outward-rounded BigInt interval constants (scale 10^18) use the already described CME03 log, Machin pi, harmonic gamma and alternating exp bounds, and checked integer square root bounds. Actual output:
```json
{"scale":"1000000000000000000","lowFrequencyMinimum":["-1374005475754283860","-1373997876046110964"],"rows":[{"m":16,"even":["-400816601788711368","-400816601788711139"],"full":["-401018669337469691","-401018669337469461"],"positive":false},{"m":24,"even":["4648506319453002","4648506319453276"],"full":["4558698520004858","4558698520005133"],"positive":true},{"m":32,"even":["292330578771233922","292330578771234202"],"full":["292280061884044341","292280061884044622"],"positive":true},{"m":64,"even":["985477759331179212","985477759331179543"],"full":["985465130109381816","985465130109382148"],"positive":true}]}
```
In particular 24 equal cells certify q_A>=0.004558698520004858 ||f||² on their entire infinite-dimensional orthogonal complement; 32 cells give >=0.292280061884044341. The negative lower bound at 16 cells is merely inconclusive, not evidence of a negative mode. These values are bounds on a complement only, not on the entire restored operator. Node reproduction: node experiments/cac01-cell-complement-bound.js. No separate Node process replay or Rust execution claimed.

CAC01 complete as candidate. CAC02 derives the exact finite Schur inertia with this complement and the sufficient residual criterion. No RH proof or originality claim.

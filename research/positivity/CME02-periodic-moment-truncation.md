# CME02 — Certified periodic Fourier moment truncation with intermediate support

2026-11-25. AI-assisted candidate deduction without RH. Uses CPC04's corrected periodic symbol and CME01. No numerical spectrum or priority claim. All constants here are conservative.

Let the physical interval be I=(-a,a), circle length 2L with L>2a, Q=1_I, normalized Fourier basis e_n with t_n=pi n/L. Let D be the diagonal operator with CPC04's real symbol S_chi(t_n), and R_N the orthogonal Fourier projection |n|<=N. Write X_s for supported circle H^s, whose norm squared is sum (1+t_n²)^s |vhat_n|². On X_s, s>0, the actual operator B acts by QD, with pole term omitted in the symbol for T. To justify domain membership, approximate a supported H^s vector by inward dilation and mollification: its zero extension to the line is H^s by localizing with a smooth cutoff equal to one on I (the circle and line fractional difference norms are equivalent on this fixed compact support). The exact CPC04 identity on tests then extends by log-norm convergence, and Dv is L² by its logarithmic symbol bound. The same identity follows by form representation on the circle. No projection is dropped between powers.

## 1. Explicit periodic multiplier estimate

For a periodic smooth f define D_per(f)=int over one period dx int_R |f(x+h)-f(x)|²/|h|^(3/2) dh. Plancherel gives D_per=C_* sum |t_n|^(1/2)|vhat_n|², where C_*=int_R |exp(i h)-1|²/|h|^(3/2)dh>1/4 (restrict to h in [1,2], use cos 1<0.6 and 2^(3/2)<3). For either oriented endpoint, let J=int_0^L |f(x0+x)|² x^-1/2 dx. Repeat CME01's averaging over [16x,32x] only for x<L/32. Its difference term is <=24 D_per because both points lie in an arc of length L, and its second term is <=J/2 by the same interchange of integrals. The remaining x>=L/32 contributes <=sqrt(32/L)||f||². Thus J<=48 D_per+2sqrt(32/L)||f||²; reflection gives the reverse orientation.

For Qf, split pairs into both inside and cross pairs, with x in one period and h in R. The inside contribution is <=D_per(f). By symmetry of the periodized kernel the ordered cross contributions equal twice the integral with x in I. For such x, all h with x+h in the periodic complement lie outside the unwrapped interval I, so the h integral is <=2[(x+a)^-1/2+(a-x)^-1/2]. As 2a<L, each endpoint integral is bounded by the J estimate. Hence
    D_per(Qf)<=385 D_per(f)+16sqrt(32/L)||f||².
The inequality and Fourier identity extend by smooth approximation and lower semicontinuity; they also apply directly to the measurable Qf via Tonelli. It follows
    ||Q||_(H^1/4)^2 <=386+64sqrt(32/L).
Interpolate with its L² norm one. Choose M_L>=sqrt(386+64sqrt(32/L)); then ||Q||_(H^s)<=M_L for 0<=s<=1/4. This is a new explicit circle bound, not an unjustified transfer of the real-line constant 20.

## 2. Truncation of each supported power

Choose C>=1 such that |S_chi(t)|<=C[1+log sqrt(1+t²)]; CME01 plus CPC04's bounded correction, finite prime weights and pole integral give an explicit C. Define B_N=QD R_N restricted to supported vectors. It is bounded self-adjoint there (the input is supported). Both B and B_N obey
    ||B^{(*)}v||_(s-delta)<=K/delta ||v||_s,
    K=2 M_L C,  0<delta<=s<=1/4,
using sup y exp(-delta y)<=1/(e delta). For the tail,
    ||(B-B_N)v||_(s-2delta)
       <= (K/delta) (1+t_(N+1)^2)^(-delta/2)||v||_s
for 2delta<=s: spend one delta on logarithm and one on the Fourier tail, then Q at output order. For a fixed integer k>=1 choose delta=1/[4(k+1)]. Telescope B^k-B_N^k into k terms B^(k-1-j)(B-B_N)B_N^j. Assign delta to each ordinary factor and 2delta to the tail factor. Every input index is positive, and the final index is zero. Thus
    ||(B^k-B_N^k)v||_2
      <= k (K/delta)^k (1+t_(N+1)^2)^(-delta/2)||v||_(1/4).
This proves convergence for each fixed degree, with explicit albeit weak error, and gives the corresponding moment error after multiplying by the L² norm of the other seed. Sharper computable a posteriori bounds can use the actual Fourier tails. The stated rate deteriorates rapidly with degree; no joint limit N,k->infinity is asserted.

## 3. Finite matrix implementation

For a supported seed v let c_N=R_N v in Fourier coordinates, D_N=diag(S_chi(t_n)), and Q_N=R_N Q R_N. Its entries are exact:
    (Q_N)_(ij)=a/L if i=j,
               sin((t_i-t_j)a)/(L(t_i-t_j)) otherwise.
For k>=1,
    <B_N^k v,w>=<D_N (Q_N D_N)^(k-1)c_N, R_N w>
with inner product linear in first slot. This follows by inserting Q between every two D_N factors and using Qw=w at the final pairing. In particular k=2 uses D_N Q_N D_N, not D_N². The seed moment k=0 is its physical inner product, not its truncated Fourier inner product. The formula is finite and can use certified symbol/seed intervals. A symbol evaluation error epsilon in operator norm changes B_N by at most epsilon; a k-power error is at most k epsilon max(||B_N||,||B_N_approx||)^(k-1). Interval propagation also covers Q_N and seeds. The conservative analytic tail is likely impractical for large k or a.

CME02 complete as candidate. CME03 will use an independently enclosed physical-space second moment with actual prime contributions as a bounded benchmark, and compare a finite Fourier approximation if possible; distinguish the two computations. No executed numerical result yet.

# HPS02 — Indexed harmonic lower bounds and simultaneous saturation

2026-11-25. AI-assisted candidate deduction without RH. Uses HPS01's finite-channel convergence, TPH03's global saturation criterion and PBC02's sharp coarse bound. No actual phase-alignment sequence, nonreal zero, numerical spectrum, independent proof verification or priority claim. These are ordinary L2 spectral statements, conditional on attaining phase models.

## 1. Finite-channel negative depth counting

Let (phi_k)_(k in Z),tau be a joint harmonic family realized by a_l,omega_l as in HPS01. For c>0 and a finite set F of distinct nonzero integer harmonics, define
    r_k(c)=#{j: sigma_j(K_(phi_k))>tau+c}.
These counts are finite because each Hankel model is Hilbert-Schmidt. If R_F=sum_(k in F) r_k(c)>0, choose the positive eigenvectors of each D_(phi_k) whose eigenvalues exceed tau+c. Their spans are finite-dimensional and have a strictly positive extra margin above tau+c when the finite set of selected eigenvalues is nonempty. Approximate their orthonormal bases by fixed compact smooth positive-side endpoint envelopes, with errors small enough to retain that margin under the perturbed Gram. This is possible by density and boundedness of D_(phi_k). Use HPS01's physical modulations of all chosen envelopes to form a joint trial span.

By HPS01(1), its ordinary Gram tends to the direct sum of the profile Grams, hence is positive for large l and the span has dimension exactly R_F. Its scaled Weil form converges to the direct sum of tau I-D_(phi_k) in those Grams, and is <=-c times the ordinary Gram for all large l. Ordinary minmax then gives
    N_(R_F)(a_l) >= c exp(a_l) eventually.              (1)
This is a dimension argument on actual independent physical trial functions, not a count of frequency packets in an auxiliary direct sum.

In particular, for every fixed j, form the multiset
    { sigma_i(K_(phi_k))-tau : k!=0, i>=1,
                                      sigma_i(K_(phi_k))>tau }.
For a threshold c>0 let C(c) be the number of its elements strictly greater than c (possibly infinity). Whenever C(c)>=j, finitely many harmonics already provide j such elements; (1) gives liminf exp(-a_l) N_j(a_l)>=c. Taking the supremum over such c, with empty supremum zero, gives an indexed lower bound even if this countable multiset does not admit a decreasing enumeration. This bound concerns one common realizing sequence; it is not obtained by mixing unrelated subsequences.

## 2. Parity-resolved counts

For each positive harmonic k choose its fixed smooth envelope basis as above. Reflect every physical modulated trial using the exact physical involution R. HPS01 identifies the reflected span with harmonic -k and swapped profiles; the within-channel form and Gram are exactly preserved by R. The two carrier signs are asymptotically orthogonal by (1) of HPS01, and all cross terms between distinct absolute harmonics vanish. Replace each selected physical basis vector f by
    f_even=(f+Rf)/sqrt(2), f_odd=(f-Rf)/sqrt(2).
They have exact reflection parity, respectively, and their limiting Gram/form matrices in each parity equal those of the original positive harmonic channel: the two equal within-channel contributions add and the cross-sign terms tend to zero. This proves for either parity p and any finite set F_+ of positive harmonics
    N_(p,R_+)(a_l) >= c exp(a_l) eventually,
    R_+=sum_(k in F_+) r_k(c).
There is no assumption that a single carrier channel has definite parity. In the full space, selecting both signs gives 2R_+ independent trials. The same countable-threshold convention as in section 1 supplies parity lower bounds. We do not assert a matching upper bound at intermediate coefficients, or equality of ordinary even/odd eigenvalues at finite a.

## 3. Saturation at every fixed ordinary index on the same windows

Let S=limsup exp(-a) N_1(a). If S=1, TPH03 proves attainability of (phi,tau)=(1,0), not just arbitrarily close norms. Choose its realizing sequence a_l,omega_l. Since the positive untwisted total mass tends to 2, the twisted measure with density limit one has total complex mass tending to 2. The weighted probability average of |exp(i omega_l log n)-1|^2 therefore tends to zero by the elementary unit-circle identity. For every fixed integer k,
    |z^k-1| <= |k| |z-1|, |z|=1,
so the analogous mean-square error for k omega_l also tends to zero. Cauchy-Schwarz gives convergence of the harmonic twisted measures to the same positive untwisted limit in the weak sense (their difference from the finite-window positive measure has total variation tending to zero). Thus phi_k=1 for every fixed k, all on the original realizing sequence, and the nonzero harmonic costs remain zero.

Each K_(phi_k) is then the rank-one operator h tensor h, h(t)=exp(-t/2) of unit norm, with a single positive singular value one. For any c<1, every positive harmonic provides one negative trial channel in either parity by section 2. Selecting j positive harmonics gives
    liminf exp(-a_l) N_(even,j)(a_l) >= c,
    liminf exp(-a_l) N_(odd,j)(a_l) >= c.
The full-space lower bound follows as well (indeed both signs provide 2j trials). PBC02's ordinary global upper bound supplies limsup <=1 for each of these depths. Let c tend to one. We conclude along ONE common sequence a_l,
    exp(-a_l) N_j(a_l) ->1,
    exp(-a_l) N_(even,j)(a_l) ->1,
    exp(-a_l) N_(odd,j)(a_l) ->1                         (2)
for every fixed j>=1. The same sequence works for all j because the harmonic convergence is already valid for every fixed k and each j uses only a finite family. No diagonal re-selection of windows for each j is needed. In particular S=1 implies infinitely many hypothetical off-line pairs by the global negative-index bound of GSG04; if only finitely many existed the negative index would be uniformly bounded. This is a consequence of the saturation premise, not evidence that it holds.

For a slightly more general statement, if a joint harmonic family has infinitely many channels with ||K_(phi_k)||>tau+c for a fixed c>0, then every fixed ordinary negative index has liminf scaled depth >=c along that family's realizing windows, with the corresponding parity conclusion using positive k and conjugation. The first-moment density alone does not guarantee infinitely many nonzero higher moments (e.g. a nonnegative phase-circle density with only the zeroth and first Fourier coefficients), so this is an explicit extra condition, not an inference from S>0.

HPS02 completes actual finite-channel dimension transfer, parity bounds and the simultaneous ordinary saturation theorem. A converse for general j is still missing; HPS03 should investigate a legitimate localization/profile argument, not assume the FES packet count itself transfers dimension. README unchanged.

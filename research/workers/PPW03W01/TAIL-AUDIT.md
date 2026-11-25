# PPW03W01 — independent tenth-order tail audit

## Finding

For the implemented domain `x>=0`, `R>0`, the PPW03 seventh-derivative correction formulas and tenth-derivative remainder bounds are correct. The exact midpoint Euler–Maclaurin remainder coefficient in the note yields `855/11 R^-11` for each of the unweighted F and D kernels. For the alpha kernel, the same argument gives `855/2 x R^-12` per copy; the code's `855 x R^-12` allowance is twice this, matching the factor 2 in its `da` series. The exponential tail `Et` remains a separate term in `Ferror`/`Derror`.

## Exact derivative checks

`experiments/ppw03w01-tenth-tail-audit.py` uses a sparse integer polynomial recurrence, independently differentiating numerators of rational functions. It reproduces the three seventh-derivative formulas in PPW03 and the three tenth derivatives. For the alpha kernel, it writes

```
f_a(r,x) = 1/r - r/(r^2+x) = x/[r(r^2+x)]
```

and differentiates the two rational terms separately before combining over a common denominator. The `da` code uses `2x/[r(r^2+x)] = 2 f_a`, so its factor-two error allowance is accounted for.

With `y=x/r^2`, the tenth derivatives reduce to

```
f^(10)   = 10! r^-12 P_f(y)/(1+y)^11,
P_f = 11 -165y +462y^2 -330y^3 +55y^4 -y^5;

g^(10)   = 10! r^-12 P_g(y)/(1+y)^12,
P_g = 11 -440y +2871y^2 -5016y^3 +2585y^4 -336y^5 +5y^6;

f_a^(10) = 10! x r^-13 P_a(y)/(1+y)^11,
P_a = 66 -275y +627y^2 +165y^3 +473y^4 +462y^5
      +330y^6 +165y^7 +55y^8 +11y^9 +y^10.
```

The script checks exact recurrence equality. It also supplies elementary polynomial certificates for

```
|P_f(y)| <= 11(1+y)^11,
|P_g(y)| <= 11(1+y)^12,
|P_a(y)| <= 66(1+y)^11      (y>=0).
```

For `P_f`, the lower difference has nonnegative coefficients; the upper difference's only negative coefficient is handled by the positive quadratic `22-44y+1067y^2`. For `P_g`, the lower difference's `572y-2145y^2+7436y^3` is nonnegative by its negative-discriminant quadratic. In the upper difference, `22-308y+3597y^2` has negative discriminant; split at `y=1/3` to absorb `-2596y^3` either into that quadratic (below) or with `+8030y^4` (above). Both alpha differences have nonnegative coefficients.

## Exact constants

Using `||B10||_infinity <= 5/66` and the A1-A2 midpoint remainder coefficient from PPW03, the adopted remainder constant is

```
c = 2(1+2^9)(5/66)/10! = 855/(11*10!).
```

Integrating the bounds gives

```
int_R^infinity 11! r^-12 dr = 10! R^-11,
int_R^infinity (12!/2) x r^-13 dr = (11!/2) x R^-12.
```

Therefore `c` times the F/D derivative integral is exactly `855/11 R^-11`; for one alpha copy it is `855/2 x R^-12`; the code's factor-two `da` allowance is exactly `855 x R^-12`. The B8 correction coefficient is `-(2^7-1)/(30*8!) = -127/1209600`, matching the implemented coefficients after the factor two for `da`.

The geometric exponential tail is `Et = exp(-h r_J)/(r_J^2(1-exp(-2h)))`. For `h>0`, `x>=0`, and `r_j>=r_J>0`, both `1/(r_j^2+x)` and `r_j^2/(r_j^2+x)^2` are at most `1/r_j^2`; summing the geometric majorant gives this `Et`. The PPW03 source adds it to both F and D errors. This audit did not rerun the entire spectral certificate or independently check every interval primitive.

## Reproduction

Command:

```
python experiments/ppw03w01-tenth-tail-audit.py
```

Output:

```
PASS: exact recurrence matches all f7, fd7, fa7 correction numerators
PASS: exact recurrence matches f10, fd10, fa10 remainder numerators
PASS: nonnegative polynomial certificates prove |f10|, |fd10| <= 11! r^-12
PASS: nonnegative polynomial certificates prove |fa10| <= (12!/2) x r^-13
PASS: B8 correction = -127/1209600 = -127/1209600
PASS: B10 EM coefficient = 19/887040; F/D R^-11 coefficient = 855/11 = 855/11
PASS: alpha direct tail = 855/2 x R^-12; source's factor 2 gives 855 x R^-12
```

All polynomial and constant checks use Python integers or `Fraction`; no floating-point comparison is used. The audit is not a proof-assistant result, does not independently verify the source's Euler–Maclaurin identity or original Weil normalization, and claims no RH result, actual negative eigenvalue, priority, or human review. AI-assisted.

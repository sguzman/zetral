# Independent stability audit — finite-window trace inversion

Status: READY_FOR_REVIEW

Baseline: `ea9f794` (Campaign XXIII active). This bounded follow-up audits the practical conditioning of STS02's exact meromorphic inverse; it does not overlap Campaign XXIII's endpoint-spectrum derivations.

## Result: a uniform high-ordinate invisibility bound

STS02 writes the exact trace as a normally convergent exponential series with `lambda_z=2 Im(z)-2i Re(z)` and `C_z=2/[lambda_z(1+lambda_z/2)^2]`. Consider adding one symmetric orbit of ordinates `z=±u±id`, where `u>0` and `0<d<=1/2`, with multiplicity one at each point. Assume these points do not already occur in the comparison multiset. The orbit respects `z -> -z`, conjugation, and the strip condition. Its trace difference is

`Delta P(a)=sum_{z in {±u±id}} C_z exp(lambda_z a)`.

For each orbit point, `|lambda_z|=2|z|>=2u`, `|1+lambda_z/2|=|1+d-iu|>=u`, and `Re(lambda_z)<=2d<=1`. Thus `|C_z|<=u^-3` and for `1<=a<=A`, `|exp(lambda_z a)|<=exp(A)`. Consequently

`sup_(1<=a<=A) |Delta P(a)| <= 4 exp(A)/u^3`.       (S.1)

This is an exact analytic upper bound, not an asymptotic estimate. It follows that for any absolute sup-norm error tolerance `epsilon>0`, every

`u >= (4 exp(A)/epsilon)^(1/3)`

makes this added orbit indistinguishable from its absence by trace observations on `[1,A]` at precision `epsilon` (and therefore also by any finite set of samples from that interval). This is a worst-case conditioning obstruction for the class of symmetric discrete strip multisets obeying the STS02 coefficient model. It does not assert that either comparison multiset is the zeta zero set; adding a single orbit preserves a local `O(log(2+|u|))` counting upper bound after adjusting its constant.

The exact-data uniqueness statement is not contradicted: if the trace is known exactly as a function on an open interval and the stated analytic continuation hypotheses hold, analytic uniqueness still determines its poles. Bound (S.1) instead shows that this inverse is not uniformly stable against finite-precision trace errors, with the resolvable ordinate range growing at most on the scale `(exp(A)/epsilon)^(1/3)` under this elementary argument. The residue of the corresponding Laplace pole is the same `C_z` and also decays as `O(u^-3)`.

## Derivation check

From `lambda=-2iz` and `z=u+id`, `lambda=2d-2iu`; hence `1+lambda/2=1+d-iu`. The modulus estimates above apply equally to all four signs. The triangle inequality gives (S.1). No zero ordinates, numerical calculations, RH assumption, or extra analytic continuation theorem are used.

## Scope and limits

This is a conditioning bound for the abstract symmetric strip-multiset exponential model used in STS02, not a lower bound on the error of every possible reconstruction algorithm and not a claim about actual zeta data. It leaves open whether arithmetic constraints on the zeta multiset improve stability. It supplies no RH result, actual off-line zero, or finite-window recovery algorithm. AI-assisted; no independent human or formal verification.

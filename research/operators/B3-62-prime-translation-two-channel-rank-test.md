# B3-62 — Prime-translation two-channel rank test

Date: 2026-11-28. Status: exact falsification of two natural two-channel
constructions in the scalar spectral representation. This is an algebraic
test under the positive scalar measure, not a matrix differential operator
or a novelty claim.

## Question

Can a pair of arithmetic channels obtained by translating one test function
by a prime logarithm create the rank needed to represent analytic zero
multiplicity, while remaining tied to the scalar Weil form?

## Scalar spectral form

Assume the scalar Weyl measure is positive atomic,
`mu=sum_gamma m_gamma delta_gamma`, as under RH for Suzuki's global scalar
model. For a test function `f` with Fourier transform
`Ff(gamma)=int f(x) exp(i gamma x) dx`, the scalar spectral quadratic form
is

    Q(f) = sum_gamma m_gamma |Ff(gamma)|^2.

Fix a prime `p` and `h=log(p)`. Use the translation
`tau_h f(x)=f(x-h)`, whose Fourier transform is
`F(tau_h f)(gamma)=exp(i h gamma) Ff(gamma)`.

## Candidate A: one state observed in two prime-shifted channels

Use the feature vector

    v_gamma = Ff(gamma) (1, exp(i h gamma))^T.

Its positive matrix atom is

    W_gamma = m_gamma vhat_gamma vhat_gamma^*,
    vhat_gamma = (1, exp(i h gamma))^T.

The determinant vanishes identically and `rank(W_gamma)=1` for every zero,
because both channels are bounded observations of the same scalar eigenspace.
The prime phase changes the direction of the rank-one matrix with `gamma`,
but cannot increase its rank. This fails to encode `m_gamma` whenever that
multiplicity exceeds one.

## Candidate B: two independent scalar copies

Take the direct sum of two scalar Weil spaces and normalize its measure by
one half so that its matrix trace remains `mu`:

    Sigma_2(B) = (1/2) mu(B) I_2.

This is positive and has `tr Sigma_2=mu`, but at every atom
`Sigma_2({gamma})=(m_gamma/2)I_2` has rank exactly two. It therefore gives
constant multiplicity two, irrespective of the arithmetic values
`m_gamma`; it fails at every simple zero and at every zero of multiplicity
greater than two. The unnormalized direct sum has trace `2 mu` and the same
constant rank issue.

## Result and falsification

The two most direct prime-shift choices fail in opposite ways: one scalar
state with multiple observations has rank one; independent scalar copies
have fixed rank two. The phase `exp(i gamma log p)` is prime-defined and
zero-independent, but it only rotates the observation vector. The conclusion
is a direct rank computation, not a claim that every arithmetic matrix
construction must fail.

The analysis uses the scalar spectral representation to test the candidate;
it does not prove global positivity of the prime-side form. To obtain
variable atom rank, the form must carry genuinely independent internal
degrees of freedom whose dimension changes with the spectral atom, or another
arithmetic mechanism that proves the correct matrix rank. Neither prime
translation nor taking scalar direct sums supplies that mechanism.

## Next design

Test a genuinely different local feature: a two-component arithmetic form
whose channels are not two observations of a scalar test function and are
not independent copies. Candidate ingredients must be defined before
evaluating at zero ordinates (for example, a prime-power convolution
operator acting internally on the channel space), preserve positivity or
have a controlled self-adjoint realization, and admit an explicit matrix
Weil formula. First derive the finite-window matrix kernel from such a
convolution and determine whether its residue rank can vary; attempt to
falsify positivity and rank matching before extending the construction.

## Verification and prior-art boundary

Both candidate ranks are checked by exact outer-product and identity-matrix
calculations. B3-38 already proves the general rank-at-most-one statement
for bounded observations of a scalar multiplicity-one operator; Candidate A
is its explicit prime-translation instance. The direct-sum constant-rank
failure is the familiar spectral multiplicity of a finite direct sum. This
note records the specific arithmetic-channel test and makes no novelty claim.

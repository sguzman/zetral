# B4-03 — Quantitative finite Pick-matrix obstruction

Date: 2026-11-27. Status: rigorous generic matrix perturbation result.

Fix distinct sample points `z_1,...,z_n` in the upper half-plane and use
the unnormalized Pick kernel. For `h_0(z)=z+i`, its matrix

    P_0[i,j] = 1 + 2i/(z_i-conjugate(z_j))

is positive definite, since it is the sum of the constant kernel and twice
the Hardy kernel. Let `lambda_0>0` be its least eigenvalue. Choose
`p=a+ib` in the upper half-plane, outside the sample set, with `b` unequal
to every sample height; set `g(z)=1/(p-z)` and form

    B[i,j] = (g(z_i)-conjugate(g(z_j)))/(z_i-conjugate(z_j)),
    C = ||B||_2.

The matrix `B` is Hermitian and its diagonal has
`B[i,i]=Im(g(z_i))/Im(z_i) != 0`, so `C>0`. The perturbed meromorphic
function `h_epsilon=h_0+epsilon*g`, for real `epsilon`, has Pick matrix
`P_epsilon=P_0+epsilon*B`. Weyl's eigenvalue inequality gives

    lambda_min(P_epsilon) >= lambda_0 - |epsilon| C.

Therefore every `0<|epsilon|<lambda_0/(2C)` preserves strict positivity of
the finite sample matrix, while `h_epsilon` has an unsampled pole at `p`
and is not a Pick function. Dividing all matrices by `pi` leaves the same
threshold. This quantitatively rules out global Pick positivity from any
single finite matrix alone.

This is a result for general meromorphic functions. The perturbation is not
of xi-log-derivative form, and it proves no xi-specific finite-sample
impossibility theorem. Additional arithmetic or global analytic bounds could
exclude the perturbations used here.

## Verification

The base strict positivity is the strict positive definiteness of the Hardy
kernel on distinct points. The perturbation formula follows by linearity of
the Pick kernel, and the eigenvalue estimate is the finite-dimensional
operator-norm bound. No numerical values, computation, or external zero data
are used.

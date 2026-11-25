# RDC01W01 — restricted-correction algebra audit

## Finding

The RDC01 correction identities survive an independent derivation without a commutation assumption on (C) and (G). The singular-H range claim also holds under the stated finite correction-space hypotheses. Exact `Fraction` examples verify the full restricted expansion for noncommuting matrices and the pseudoinverse compatibility in a singular case.

## Derivation

Assume (0<g_*Ile Gle C) with positive self-adjoint (G,C), so order reversal gives (D=G^{-1}-C^{-1}ge0). For (X_*=C^{-1}R), set (E=X-X_*). Then (F=R-CX=-CE), and direct expansion gives

```
U(X) = S + E* C E,
F* G^-1 F = E* C G^-1 C E,
L(X) = S - E* C(G^-1-C^-1)C E.
```

This is an identity of quadratic forms on vectors for which (CX) is defined; it does not require (C) and (G) to commute. The positive remainder follows from (Dge0).

For a finite correction (YZ), direct expansion yields

```
L(X+YZ)-L(X)
  = Z* [Y*C G^-1 F-Y*F]
    + [Y*C G^-1 F-Y*F]* Z
    - Z* [Y*C G^-1 C Y-Y*C Y] Z.
```

Thus the stated (B) and (H) are correct with the displayed factor order. In particular, (H=Y*C D C Y=T*T), where (T=D^(1/2) C Y). If (zin\ker H), then (Tz=0), and

```
z*B = (D^(1/2) C Y z)* D^(1/2) F = 0.
```

Since (H) is finite-dimensional self-adjoint, (operatorname{ran}H=(\ker H)^\perp), so every column of (B) lies in (operatorname{ran}H). This supplies the solvability condition for the (H^\dagger B) correction in the singular case.

## Exact checks

The checker `experiments/rdc01w01-exact-matrix-audit.py` performs exact rational matrix operations and verifies:

1. The Schur-complement completion identity for a genuinely noncommuting positive definite pair (C,G), with (D>0).
2. The restricted (L(X+YZ)) expansion for noncommuting (C,G), including a nontrivial rectangular (Y), arbitrary (X,R,Z), and (H>0).
3. A noncommuting singular example (G=\operatorname{diag}(1,2)), (C=\begin{psmallmatrix}2&1\\1&3\end{psmallmatrix}), (Y=I), where (D) and (H) have rank one and an exact kernel vector of (H) annihilates (B).
4. The published example: (L=-1/10), (B=1), (H=8), and the (Z=1/8) correction gives (L=1/40).

Command:

```
python experiments/rdc01w01-exact-matrix-audit.py
```

Output:

```
PASS: exact Schur-complement completion identity in noncommuting C,G example
PASS: exact restricted correction expansion in noncommuting C,G example
PASS: singular H example has ker(H) orthogonal to range(B)
PASS: published 2D high-block example gives L=-1/10, B=1, H=8, corrected L=1/40
```

## Scope

This independently checks the algebraic identities in finite dimensions and gives the short operator-order argument above. It does not audit RDC02's finite surrogate, verify the original spectral block normalization, prove a result for the restored arithmetic operator, or establish positivity of a corrected physical trial. AI-assisted; no Lean proof or human review. No RH or priority claim.

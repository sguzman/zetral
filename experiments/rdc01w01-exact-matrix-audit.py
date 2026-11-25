#!/usr/bin/env python3
"""Exact Fraction checks of RDC01 finite-dimensional identities."""
from fractions import Fraction as F


def mat(rows): return [[F(x) for x in row] for row in rows]
def shape(A): return len(A), len(A[0])
def tr(A): return [list(r) for r in zip(*A)]
def add(A,B):
    assert shape(A)==shape(B)
    return [[x+y for x,y in zip(a,b)] for a,b in zip(A,B)]
def neg(A): return [[-x for x in r] for r in A]
def sub(A,B): return add(A,neg(B))
def scale(q,A): return [[q*x for x in row] for row in A]
def mul(A,B):
    assert len(A[0])==len(B)
    return [[sum((A[i][k]*B[k][j] for k in range(len(B))),F(0))
             for j in range(len(B[0]))] for i in range(len(A))]
def ident(n): return [[F(i==j) for j in range(n)] for i in range(n)]
def inv(A):
    n=len(A); M=[list(A[i])+ident(n)[i] for i in range(n)]
    for j in range(n):
        p=next((i for i in range(j,n) if M[i][j]),None)
        assert p is not None
        M[j],M[p]=M[p],M[j]
        q=M[j][j]; M[j]=[x/q for x in M[j]]
        for i in range(n):
            if i!=j:
                q=M[i][j]; M[i]=[x-q*y for x,y in zip(M[i],M[j])]
    return [r[n:] for r in M]
def eq(A,B): assert A==B,(A,B)
def minors2(A): return A[0][0], A[0][0]*A[1][1]-A[0][1]*A[1][0]

def forms(A,R,C,G,X):
    Gi=inv(G); Ci=inv(C)
    U=add(sub(sub(A,mul(tr(R),X)),mul(tr(X),R)),mul(mul(tr(X),C),X))
    Fm=sub(R,mul(C,X))
    L=sub(U,mul(mul(tr(Fm),Gi),Fm))
    S=sub(A,mul(mul(tr(R),Ci),R))
    K=sub(mul(mul(C,Gi),C),C)
    Xstar=mul(Ci,R)
    rhs=sub(S,mul(mul(tr(sub(X,Xstar)),K),sub(X,Xstar)))
    eq(L,rhs)
    return L,Fm

# A genuinely noncommuting positive definite example, with D=G^-1-C^-1>0.
G=mat([[1,0,0],[0,2,0],[0,0,3]])
W=mat([[1,0,1],[1,1,0],[0,1,1]])
C=add(G,mul(tr(W),W))
D=sub(inv(G),inv(C))
assert D[0][1] != 0 and mul(C,G)!=mul(G,C)
assert minors2([row[:2] for row in D[:2]])[0]>0
# Exact Sylvester positivity of D (3x3).
def det3(A):
    return (A[0][0]*(A[1][1]*A[2][2]-A[1][2]*A[2][1])
           -A[0][1]*(A[1][0]*A[2][2]-A[1][2]*A[2][0])
           +A[0][2]*(A[1][0]*A[2][1]-A[1][1]*A[2][0]))
assert D[0][0]>0
assert D[0][0]*D[1][1]-D[0][1]*D[1][0]>0
assert det3(D)>0
Y=mat([[1,0],[0,1],[1,1]])
H=sub(mul(mul(mul(tr(Y),C),inv(G)),mul(C,Y)),mul(mul(tr(Y),C),Y))
assert minors2(H)[0]>0 and minors2(H)[1]>0
A=mat([[5,1],[1,4]])
R=mat([[1,2],[0,1],[2,-1]])
X=mat([[F(1,3),F(-1,4)],[F(2,5),F(1,7)],[F(-1,6),F(3,8)]])
Z=mat([[F(2,9),F(-1,5)],[F(1,4),F(1,6)]])
L,Fm=forms(A,R,C,G,X)
B=sub(mul(mul(mul(tr(Y),C),inv(G)),Fm),mul(tr(Y),Fm))
H=sub(mul(mul(mul(tr(Y),C),inv(G)),mul(C,Y)),mul(mul(tr(Y),C),Y))
X2=add(X,mul(Y,Z))
L2,_=forms(A,R,C,G,X2)
expansion=add(add(sub(L,mul(mul(tr(Z),H),Z)),mul(mul(tr(Z),B),ident(2))),mul(mul(tr(B),Z),ident(2)))
eq(L2,expansion)

# Singular noncommuting case: G<=C, D has rank one, H is singular, and ker(H) B=0.
Gs=mat([[1,0],[0,2]])
Cs=mat([[2,1],[1,3]])
Ds=sub(inv(Gs),inv(Cs))
assert Cs!=Gs and Ds[0][0]>0 and Ds[0][1]**2==Ds[0][0]*Ds[1][1]
Ys=ident(2)
Hs=sub(mul(mul(mul(tr(Ys),Cs),inv(Gs)),mul(Cs,Ys)),mul(mul(tr(Ys),Cs),Ys))
Fs=mat([[2,1],[3,-1]])
Bs=sub(mul(mul(mul(tr(Ys),Cs),inv(Gs)),Fs),mul(tr(Ys),Fs))
assert Hs[0][0]*Hs[1][1]-Hs[0][1]*Hs[1][0]==0
kernel=[-Hs[0][1],Hs[0][0]]
assert all(sum(kernel[i]*Hs[i][j] for i in range(2))==0 for j in range(2))
assert all(sum(kernel[i]*Bs[i][j] for i in range(2))==0 for j in range(2))
# The range inclusion is exactly the finite-dimensional pseudoinverse solvability condition.

# RDC01's one-direction example, with all values exact.
A0=mat([[F(9,10)]])
R0=mat([[1],[1]])
C0=mat([[2,1],[1,2]])
G0=mat([[F(1,2),0],[0,F(1,2)]])
X0=mat([[F(1,2)],[0]])
Y0=mat([[1],[0]])
L0,F0=forms(A0,R0,C0,G0,X0)
B0=sub(mul(mul(mul(tr(Y0),C0),inv(G0)),F0),mul(tr(Y0),F0))
H0=sub(mul(mul(mul(tr(Y0),C0),inv(G0)),mul(C0,Y0)),mul(mul(tr(Y0),C0),Y0))
assert L0==mat([[F(-1,10)]]) and B0==mat([[1]]) and H0==mat([[8]])
X1=add(X0,mul(Y0,mat([[F(1,8)]])))
L1,_=forms(A0,R0,C0,G0,X1)
assert L1==mat([[F(1,40)]])

print("PASS: exact Schur-complement completion identity in noncommuting C,G example")
print("PASS: exact restricted correction expansion in noncommuting C,G example")
print("PASS: singular H example has ker(H) orthogonal to range(B)")
print("PASS: published 2D high-block example gives L=-1/10, B=1, H=8, corrected L=1/40")

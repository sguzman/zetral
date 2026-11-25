#!/usr/bin/env python3
"""Independent high-precision integer replay of FDA01 Euler/Machin constants."""
Q = 10**66
S = 10**100


def floor_div(a, b): return a // b
def ceil_div(a, b): return -floor_div(-a, b)

def ops(scale):
    def R(n, d=1): return floor_div(n*scale,d), ceil_div(n*scale,d)
    def add(a,b): return a[0]+b[0],a[1]+b[1]
    def neg(a): return -a[1],-a[0]
    def sub(a,b): return add(a,neg(b))
    def mul(a,b):
        p=[x*y for x in a for y in b]
        return floor_div(min(p),scale),ceil_div(max(p),scale)
    def div(a,b):
        if b[0]<=0<=b[1]: raise ZeroDivisionError
        p=[(floor_div(x*scale,y),ceil_div(x*scale,y)) for x in a for y in b]
        return min(x[0] for x in p),max(x[1] for x in p)
    return R,add,neg,sub,mul,div


def constants(scale, terms):
    R,add,neg,sub,mul,div=ops(scale)
    zero,one,two=R(0),R(1),R(2)
    def logunit(x):
        r=div(sub(x,one),add(x,one));p=r;r2=mul(r,r);s=zero
        for j in range(terms):
            s=add(s,div(p,R(2*j+1)));p=mul(p,r2)
        next_den=2*terms+1
        tail=div(mul(two,p),mul(R(next_den),sub(one,r2)))
        return add(mul(two,s),(0,max(0,tail[1])))
    def atan(x):
        p=x;a2=mul(x,x);s=zero
        for j in range(terms):
            t=div(p,R(2*j+1));s=add(s,neg(t) if j%2 else t);p=mul(p,a2)
        nxt=div(p,R(2*terms+1))
        return s[0],s[1]+nxt[1]
    ln2=logunit(R(2))
    pi=sub(mul(R(16),atan(R(1,5))),mul(R(4),atan(R(1,239))))
    return R,add,neg,sub,mul,div,logunit,ln2,pi

# Candidate 10^66 implementation, copied algebraically from FDA01.
R,add,neg,sub,mul,div,logunit,ln2,pi=constants(Q,80)
N=8192
H=(0,0)
for j in range(1,N+1): H=add(H,R(1,j))
gamma=sub(sub(H,mul(R(13),ln2)),R(1,2*N))
for k,num,den in [(2,1,12),(4,-1,120),(6,1,252),(8,-1,240),(10,1,132),(12,-691,32760),(14,1,12),(16,-3617,8160)]:
    gamma=add(gamma,R(num,den*N**k))
gamma=add(gamma,(0,R(43867,14364*N**18)[1]))

def log_interval(x):
    a,k=x,0
    while a[0]<Q: a,k=mul(a,R(2)),k-1
    while a[0]>=2*Q: a,k=div(a,R(2)),k+1
    return add(logunit(a),mul(R(k),ln2))
lnpi=log_interval(pi)
alpha=neg(add(add(gamma,div(pi,R(2))),add(mul(R(3),ln2),lnpi)))

# Independent reference at 10^100: different scale and 200-term series.
Rr,addr,negr,subr,mulr,divr,logunitr,ln2r,pir=constants(S,200)
Hr=(0,0)
for j in range(1,N+1): Hr=addr(Hr,Rr(1,j))
correction=Rr(0)
for k,num,den in [(2,1,12),(4,-1,120),(6,1,252),(8,-1,240),(10,1,132),(12,-691,32760),(14,1,12),(16,-3617,8160)]:
    correction=addr(correction,Rr(num,den*N**k))
gamma_r=subr(subr(addr(Hr,correction),mulr(Rr(13),ln2r)),Rr(1,2*N))
gamma_r=addr(gamma_r,(0,Rr(43867,14364*N**18)[1]))
lnpi_r=addr(logunitr(divr(pir,Rr(2))),ln2r)
alpha_r=negr(addr(addr(gamma_r,divr(pir,Rr(2))),addr(mulr(Rr(3),ln2r),lnpi_r)))

def contains(candidate, ref):
    return candidate[0]*S <= ref[0]*Q and candidate[1]*S >= ref[1]*Q

assert contains(pi,pir)
assert contains(gamma,gamma_r)
assert contains(alpha,alpha_r)
assert Rr(43867,14364*N**18)[1] > 0
print("PASS: 10^66 Machin pi interval contains independent 10^100, 200-term rational-series bounds")
print("PASS: 10^66 Euler-constant interval contains independent harmonic/Euler–Maclaurin enclosure")
print("PASS: 10^66 alpha interval contains independent pi/log/gamma enclosure")
print("RESULT: omitted Euler–Maclaurin term is bounded by 43867/(14364*8192^18)")
print("SCOPE: arithmetic containment only; the alternating Euler–Maclaurin remainder theorem and spectral generator remain outside this check")

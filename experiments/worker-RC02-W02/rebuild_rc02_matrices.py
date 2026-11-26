import json
from pathlib import Path
P=Path('experiments/results')
raw=json.loads(''.join((P/f'rc02-243-100-even-m10240-raw-part{i}.txt').read_text() for i in range(1,6)))
r=raw['rows'][0]; c=r['componentIntervals']; Q=int(raw['scale']); n=len(r['ks'])
old=list(map(int,r['tailShares'])); D0=int(r['tailShareDenominator']); ds=list(map(int,r['radiusWeights']))
factors=json.loads((P/'rc02-243-100-even-m10240-constant-factors.json').read_text())
ratios=[int(a[1]) for a in factors['ratios']]
assert len(ratios)==8 and factors['h']==r['h'] and factors['odd']==r['odd']
joint=json.loads((P/'rc02-243-100-even-m10240-constant-joint.json').read_text())
replay=json.loads((P/'rc02-243-100-even-m10240-constant-replay.json').read_text())
assert len(joint['results'])==len(replay['results'])==8

def ceil(a,b): return -((-a)//b)
def trunc2(a): return a//2 if a>=0 else -((-a)//2)
def maxint(a,b):return a if a>b else b
def minint(a,b):return a if a<b else b
keys=['leading','second','third','fourth','fifth','sixth','seventh']
def matrix(shares,den,weights,direction,refined):
    W=sum(weights[7:]);
    if refined:
      diag=[ceil(int(r['diagnostics'][i]['eighthUpper'])*W,weights[7+i]) for i in range(n)]
      # Directional eighth allowance uses selected diagonal multiplied by constant-tail factor ratio.
      diag=[ceil(x*ratios[7],Q) for x in diag]
      
      if not all(str(x)==direction[i] for i,x in enumerate(diag)):
       ii=next(j for j,x in enumerate(diag) if str(x)!=direction[j]);print('diag mismatch',ii,diag[ii],direction[ii],W,weights[7+ii],r['diagnostics'][ii]['eighthUpper'],ratios[7]);raise AssertionError
    else: diag=list(map(int,c['eighth']))
    L=[[0]*n for _ in range(n)]; rad=[[0]*n for _ in range(n)]
    def interval(i,j):
        u0,u1=map(int,c['upper'][i][j]); f0,f1=map(int,c['finite'][i][j]); lo=u0-f1; hi=u1-f0
        for k,key in enumerate(keys):
            a,b=map(int,c[key][i][j])
            if refined: a=(a*ratios[k])//Q; b=ceil(b*ratios[k],Q)
            p=old[k]*den; q=shares[k]*D0
            lo-=ceil(b*p,q); hi-= (a*p)//q
        if i==j:
            allowance=diag[i] if refined else int(c['eighth'][i])
            lo-=ceil(allowance*old[7]*den,shares[7]*D0); hi-=ceil(allowance*old[7]*den,shares[7]*D0)
        return lo,hi
    for i in range(n):
      for j in range(i+1):
        a=interval(i,j); b=interval(j,i); lo=maxint(a[0],b[0]); hi=minint(a[1],b[1]); assert lo<=hi
        v=trunc2(lo+hi); L[i][j]=L[j][i]=v
        rad[i][j]=rad[j][i]=maxint(v-lo,hi-v)
    radii=[sum(ceil(rad[i][j]*ds[j],ds[i]) for j in range(n)) for i in range(n)]
    A=[[L[i][j]-(radii[i] if i==j else 0) for j in range(n)] for i in range(n)]
    return A,radii

def bareiss(A):
    B=[row[:] for row in A]; prev=1; out=[]
    for k in range(len(B)):
      p=B[k][k]; out.append(p); assert p>0
      for i in range(k+1,len(B)):
       for j in range(i,len(B)):
        z=p*B[i][j]-B[i][k]*B[k][j]
        assert z%prev==0
        B[i][j]=B[j][i]=z//prev
       B[i][k]=B[k][i]=0
      prev=p
    return list(map(str,out))
base,base_radii=matrix(old,D0,old,[str(int(c['eighth'][i])) for i in range(n)],False)
assert all(str(base[i][j])==r['lowerInteger'][i][j] for i in range(n) for j in range(n))
assert all(str(base_radii[i])==r['diagnostics'][i]['matrixRadius'] for i in range(n))
assert [str(sum(ceil(maxint(0,0),1) for _ in [])) for i in []]==[]
summary=[]
for i,(selected,saved) in enumerate(zip(joint['results'],replay['results'])):
  shares=list(map(int,saved['shares'])); den=int(saved['denominator']);weights=list(map(int,saved['weights'])); direction=saved['directionDiagonal']
  A,rad=matrix(shares,den,weights,direction,True)
  assert all(str(A[x][y])==saved['lowerInteger'][x][y] for x in range(n) for y in range(n)), f'matrix {i}'
  dets=bareiss(A); assert dets==saved['principalMinors'],f'dets {i}'
  assert all(x>0 for x in map(int,dets))
  summary.append((i,len(A)*len(A),len(dets),min(map(int,dets))))
print('baseline matrix entries and weighted radii exact:',n*n,n)
print('selected reconstruction and exact minors (index, entries, minors, smallest determinant):')
for x in summary:print(*x)
print('total selected entries:',sum(x[1] for x in summary),'total determinant matches:',sum(x[2] for x in summary))

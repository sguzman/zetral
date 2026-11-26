#!/usr/bin/env python3
"""Select top correlation-ranked odd sparse row shears exactly."""
import json
from fractions import Fraction
p='experiments/results/u72-62-25-odd-sparse-row-w01/'
raw=json.load(open(p+'raw-t832.json'))
r=raw['rows'][0]; c=r['componentIntervals']['upper']; n=len(r['ks'])
def mid(pair): return Fraction(int(pair[0])+int(pair[1]),2)
G=[[mid(c[i][j]) for j in range(n)] for i in range(n)]
choices=[]
for i in range(13,n):
    j=max(range(i),key=lambda j:(G[i][j]**2)/(G[i][i]*G[j][j]))
    rho2=G[i][j]**2/(G[i][i]*G[j][j]); alpha=-G[i][j]/G[j][j]
    choices.append((rho2,i,j,alpha))
choices.sort(reverse=True); selected=choices[:12]; D=10**8
def nearest(x):
    sign=-1 if x<0 else 1; x=abs(x); q,r=divmod(x.numerator,x.denominator)
    return sign*(q+(2*r>=x.denominator))
rows=[]; chosen={i:(j,alpha,rho2) for rho2,i,j,alpha in selected}
for i in range(n):
    if i in chosen:
        j,alpha,rho2=chosen[i]; rows.append([[i,str(D)],[j,str(nearest(D*alpha))]])
    else: rows.append([[i,'1']])
out={'method':'top 12 non-leading targets ranked by exact squared midpoint correlation; one strongest earlier parent each; lower-triangular integer shear','scale':str(D),'rows':rows,'selected':[{'target':i,'parent':j,'rho2':f'{rho2.numerator}/{rho2.denominator}','alpha':f'{alpha.numerator}/{alpha.denominator}','integer_offdiag':str(nearest(D*alpha))} for rho2,i,j,alpha in selected]}
json.dump(out,open(p+'row-selection.json','w'),indent=2)
print(json.dumps(out['selected'],indent=2))

#!/usr/bin/env python3
"""Choose sparse row shears by exact total squared midpoint correlation."""
import json
from fractions import Fraction
p='experiments/results/u72-62-25-even-sum-corr-w01/'
raw=json.load(open(p+'raw-t832.json'))
r=raw['rows'][0]; c=r['componentIntervals']['upper']; n=len(r['ks'])
def mid(x): return Fraction(int(x[0])+int(x[1]),2)
G=[[mid(c[i][j]) for j in range(n)] for i in range(n)]
choices=[]
for i in range(13,n):
    correlations=[(G[i][j]**2/(G[i][i]*G[j][j]),j) for j in range(i)]
    burden=sum((x for x,j in correlations),Fraction(0))
    strongest,parent=max(correlations)
    choices.append((burden,i,parent,strongest,-G[i][parent]/G[parent][parent]))
choices.sort(reverse=True); selected=choices[:12]; D=10**8
def nearest(x):
    sign=-1 if x<0 else 1; x=abs(x); q,r=divmod(x.numerator,x.denominator)
    return sign*(q+(2*r>=x.denominator))
rows=[]; selected_by_i={i:(j,alpha) for burden,i,j,strongest,alpha in selected}
for i in range(n):
    if i in selected_by_i:
        j,alpha=selected_by_i[i]; rows.append([[i,str(D)],[j,str(nearest(D*alpha))]])
    else: rows.append([[i,'1']])
out={'method':'top 12 non-leading target rows ranked by exact sum of squared midpoint correlations with all earlier rows; each target sheared against its strongest earlier parent; lower-triangular integer transform','scale':str(D),'rows':rows,'selected':[{'target':i,'parent':j,'sum_rho2':f'{burden.numerator}/{burden.denominator}','parent_rho2':f'{strongest.numerator}/{strongest.denominator}','alpha':f'{alpha.numerator}/{alpha.denominator}','integer_offdiag':str(nearest(D*alpha))} for burden,i,j,strongest,alpha in selected]}
json.dump(out,open(p+'row-selection.json','w'),indent=2)
print(json.dumps(out['selected'],indent=2))

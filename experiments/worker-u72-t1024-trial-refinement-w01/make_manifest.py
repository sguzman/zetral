#!/usr/bin/env python3
"""Verify chunk coverage and write hashes for the exact T=1024 artifacts."""
import glob, hashlib, json, os, re
root='experiments/results/u72-t1024-trial-refinement-w01/'
manifest={'T':1024,'M':16384,'J':128,'KEM':20,'lowCount':47,'sectors':{}}
for sector in ['even','odd']:
    prefix=root+sector+'-'
    trial=json.load(open(prefix+'trial.json'))
    paths=glob.glob(prefix+'finite-*.json')
    paths.sort(key=lambda p:int(re.search(r'finite-(\d+)-',p).group(1)))
    start=94 if sector=='even' else 95
    last=16384 if sector=='even' else 16383
    chunks=[]; total=0
    for path in paths:
        data=json.load(open(path))
        assert data['start']==start, (path,data['start'],start)
        assert data['end']%2==(1 if sector=='odd' else 0)
        assert data['count']==(data['end']-data['start'])//2+1
        blob=open(path,'rb').read()
        chunks.append({'file':os.path.basename(path),'start':data['start'],'end':data['end'],'count':data['count'],'bytes':len(blob),'sha256':hashlib.sha256(blob).hexdigest()})
        total+=data['count']; start=data['end']+2
    expected=8145 if sector=='odd' else 8146
    assert start==last+2 and total==expected and len(chunks)==16
    raw_data=json.load(open(prefix+'raw.json'))
    row=raw_data['rows'][0]
    assert row['T']==1024 and row['M']==16384 and row['odd']==(sector=='odd')
    seed=json.load(open(prefix+'seed-replay.json'))
    slsqp=json.load(open(prefix+'slsqp-replay.json'))
    def hash_file(name):
        b=open(prefix+name,'rb').read(); return {'file':name,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()}
    manifest['sectors'][sector]={
        'trial_modes':len(trial['ts']),'residual_modes':total,'chunks':chunks,
        'artifacts':[hash_file(x) for x in ['trial.json','raw.json','factors.json','transform.json','seed-replay.json','slsqp-allocation.json','slsqp-replay.json']],
        'seed_positive_minors':seed['positiveMinors'],'slsqp_positive_minors':slsqp['positiveMinors'],'slsqp_margin':slsqp['marginNumerator']}
json.dump(manifest,open(root+'manifest.json','w'),indent=2)
print(json.dumps({s:{k:v for k,v in d.items() if k not in ['chunks','artifacts']} for s,d in manifest['sectors'].items()},indent=2))

#!/usr/bin/env python3
"""Rebuild directional interval sums behind the LXX four-obstruction blob."""
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
BASE = "lxx-123-50-even-t832-"
RESULTS = ROOT / "experiments/results"


def reconstruct():
    # Recompute the staged raw comparison, then apply the committed four-row
    # transform. The potentially large interval object stays in memory.
    js = r"""
const fs=require('node:fs');
const {extend}=require('./experiments/lxx-staged.js');
const assemble=require('./experiments/lxx-assemble.js');
const transform=require('./experiments/lxx-even-transform-four.js');
const read=p=>fs.readFileSync(p,'utf8');
const base='experiments/results/lxx-123-50-even-t832-';
const trial=JSON.parse([1,2,3].map(i=>read(base+'trial-part'+i+'.txt')).join(''));
const chunks=Array.from({length:12},(_,i)=>JSON.parse(read(base+'finite-'+(90+1024*i)+'-'+Math.min(90+1024*i+1022,12288)+'.json')));
const src=extend(read('experiments/tc01-post-log11-em.js'));
const raw=assemble(src,trial,chunks);
const factors=JSON.parse(read(base+'constant-factors.json'));
const z=transform(raw,factors,src);
process.stdout.write(JSON.stringify({componentIntervals:z.componentIntervals,eighth:z.eighth,tailShares:raw.rows[0].tailShares,tailShareDenominator:raw.rows[0].tailShareDenominator,scale:raw.scale,factors:factors.ratios}));
"""
    return json.loads(subprocess.check_output(["node", "-e", js], cwd=ROOT))


def quadratic(interval, vector, upper):
    total = 0
    for i, xi in enumerate(vector):
        for j, xj in enumerate(vector):
            product = xi * xj
            lo, hi = map(int, interval[i][j])
            choose_upper = (product >= 0) if upper else (product < 0)
            total += product * (hi if choose_upper else lo)
    return total


def main():
    evidence = json.loads((RESULTS / (BASE + "four-obstruction.json")).read_text())
    z = reconstruct()
    x = list(map(int, evidence["integerDirection"]))
    shares = list(map(int, z["tailShares"]))
    ratios = [int(pair[1]) for pair in z["factors"]]
    assert len(x) == 45 and len(shares) == len(ratios) == 8
    components = z["componentIntervals"]

    energy = quadratic(components["upper"], x, upper=True)
    finite = quadratic(components["finite"], x, upper=False)
    ranks = [quadratic(components[key], x, upper=False) * shares[i] * ratios[i]
             for i, key in enumerate(["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"])]
    eighth = [int(z["eighth"][i]) * x[i]**2 * shares[7] * ratios[7] for i in range(45)]
    assert energy == int(evidence["energyUpper"])
    assert finite == int(evidence["finiteLower"])
    assert ranks == list(map(int, evidence["rankNumerators"]))
    assert eighth == list(map(int, evidence["eighthNumerators"]))
    assert int(z["tailShareDenominator"]) * int(z["scale"]) == int(evidence["commonDenominator"])
    print("directional energy, finite, seven rank, and 45 eighth terms all match evidence exactly")
    print("transformed interval source replayed from the stored trial and all 12 finite chunks")


if __name__ == "__main__":
    main()

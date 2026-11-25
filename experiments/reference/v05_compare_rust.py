"""Reproduction check only; decimal comparisons do not certify numerical roots."""
from pathlib import Path
from decimal import Decimal, localcontext
import csv
import subprocess
import sys

repo = Path(__file__).resolve().parents[2]
binary = repo / "experiments/target/release/precision"
with (repo/"experiments/results/n18-precision.csv").open() as f:
    reference = {(int(r["X"]),int(r["j"])):Decimal(r["root_100dps_q192"]) for r in csv.DictReader(f)}
with (repo/"experiments/results/table2-reproduction.csv").open() as f:
    sixth = {(int(r["X"]),int(r["N"])):Decimal(r["root6"]) for r in csv.DictReader(f)}
assert len(reference)==24 and len(sixth)==12
out=csv.writer(sys.stdout)
out.writerow(["X","N","j","root","reference_abs_difference"])
with localcontext() as ctx:
    ctx.prec=70
    for X in (3,5,7,11):
        for N in (14,16,18):
            raw=subprocess.check_output([str(binary),str(X),str(N),"384","192","100"],text=True)
            rows=list(csv.DictReader(raw.splitlines()))
            assert len(rows)==6 and [int(r["j"]) for r in rows]==list(range(1,7))
            for row in rows:
                j=int(row["j"])
                root=Decimal(row["root"])
                target=reference.get((X,j)) if N==18 else sixth.get((X,N)) if j==6 else None
                diff="" if target is None else abs(root-target)
                if target is not None:
                    assert diff<Decimal("1e-23"), (X,N,j,root,target,diff)
                out.writerow([X,N,j,root,diff])
            assert abs(Decimal(rows[-1]["root"])-sixth[X,N])<Decimal("1e-23")
print("PASS: all 24 N=18 roots and 12 sixth-root values agree within 1e-23; not interval-certified.",file=sys.stderr)

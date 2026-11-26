const fs=require('node:fs');
const read=p=>fs.readFileSync(p,'utf8');
const base=__dirname.replace(/\/experiments$/,'')+'/';
const raw=JSON.parse(read(base+'experiments/results/u72-62-25-even-t832-raw.json'));
const Q=BigInt(raw.scale),n=raw.rows[0].ks.length,U=raw.rows[0].componentIntervals.upper.map(row=>row.map(pair=>Number((BigInt(pair[0])+BigInt(pair[1]))/2n)/Number(Q)));
const C=U.map((row,i)=>row.map((x,j)=>x/Math.sqrt(U[i][i]*U[j][j])));
function solve(A,b){const n=A.length,M=A.map((row,i)=>row.slice().concat([b[i]]));for(let j=0;j<n;j++){let p=j;for(let i=j+1;i<n;i++)if(Math.abs(M[i][j])>Math.abs(M[p][j]))p=i;if(Math.abs(M[p][j])<1e-13)throw Error('singular correlation pivot '+j);[M[j],M[p]]=[M[p],M[j]];const d=M[j][j];for(let k=j;k<=n;k++)M[j][k]/=d;for(let i=0;i<n;i++)if(i!==j){const q=M[i][j];for(let k=j;k<=n;k++)M[i][k]-=q*M[j][k]}}return M.map(row=>row[n])}
const rows=Array.from({length:n},(_,i)=>[[i,1n]]);
for(let i=1;i<=4;i++){const z=solve(C.slice(0,i).map(row=>row.slice(0,i)),C.slice(0,i).map(row=>row[i])),d=i===4?100000000:1000000000;
 rows[i]=z.map((v,j)=>[j,BigInt(Math.round(-d*Math.sqrt(U[i][i]/U[j][j])*v))]);rows[i].push([i,BigInt(d)]);
}
console.log('rows',JSON.stringify(rows.map(row=>row.map(([j,x])=>[j,String(x)]))));
const src=require(base+'experiments/u72-staged.js').extend(read(base+'experiments/tc01-post-log11-em.js'));
const factorsBase=require(base+'experiments/lb03-dyadic-tail-factors.js')(src,{hn:62n,hd:25n,J:128,M:16384,T:832,lowCount:47,KEM:20},false);
const factors=require(base+'experiments/pc03-constant-oscillatory-factors.js')(src,{hn:62n,hd:25n,J:128,M:16384,T:832,lowCount:47,KEM:20},factorsBase);
const transformed=require(base+'experiments/u72-even-transform.js')(raw,factors,src,rows);
fs.writeFileSync(base+'experiments/results/u72-62-25-even-t832-transform.json',JSON.stringify(transformed));

// Independent exact Taylor-coefficient audit of ATM03 ninth derivatives.
// node experiments/atm03-rate-algebra-audit.js
function audit(){
const factorial=n=>{let x=1n;for(let i=2n;i<=BigInt(n);i++)x*=i;return x};
const rows=[];
for(const r of [1n,2n,5n,17n])for(const x of [0n,1n,3n,11n,100n]){
 const d=r*r+x,u=r*r,fac=factorial(9);
 // f(r+t)=sum P_n t^n / d^(n+1), exact coefficient recurrence.
 let P=[1n];for(let n=1;n<=9;n++)P.push(-2n*r*P[n-1]-(n>=2?d*P[n-2]:0n));
 const conv=n=>n<0?0n:P.slice(0,n+1).reduce((a,p,j)=>a+p*P[n-j],0n);
 const refF=fac*P[9],refD=fac*(u*conv(9)+2n*r*d*conv(8)+d*d*conv(7));
 const refA=-fac*d**10n-fac*(r*P[9]+d*P[8])*r**10n;
 const f=-725760n*r*(5n*u**4n-60n*u**3n*x+126n*u*u*x*x-60n*u*x**3n+5n*x**4n);
 const fd=-725760n*r*(5n*u**5n-165n*u**4n*x+858n*u**3n*x*x-1122n*u*u*x**3n+385n*u*x**4n-25n*x**5n);
 const fa=362880n*(u**5n-45n*u**4n*x+210n*u**3n*x*x-210n*u*u*x**3n+45n*u*x**4n-x**5n)*r**10n-362880n*d**10n;
 if(f!==refF||fd!==refD||fa!==refA)throw Error('ninth derivative mismatch');
 rows.push({r:String(r),x:String(x),f:true,fd:true,fa:true});
}
const eNum=2n*(1n+2n**11n)*691n,eDen=2730n;
if(eNum!==2831718n||13n*eNum!==36812334n)throw Error('constant');
return {cases:rows,checks:3*rows.length,rateNumerator:String(eNum),rateDenominator:String(eDen),alphaNumerator:String(13n*eNum)};
}
if(typeof module!=='undefined')module.exports=audit;
if(typeof require!=='undefined'&&typeof module!=='undefined'&&require.main===module)console.log(JSON.stringify(audit(),null,2));

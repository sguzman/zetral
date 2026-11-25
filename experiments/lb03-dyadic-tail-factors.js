// Bound parity sums by intervals [n-2,n] and geometric blocks.
// Monotone g(n)>0; n>=x and n>=M+1 on every integration cell.
// Normalize integrals by the old constant-g bound.
function dyadic(source,params,odd=false){
 const anchor=" const rate=Array.from";
 if(!source.includes(anchor))throw Error("source anchor");
 const pre=source.slice(0,source.indexOf(anchor));
 const body=`
 const poleLoss=odd?div(mul(R(4n),mul(square(ch),square(square(h)))),mul(h,mul(R(BigInt(3*(2*lowCount)**3)),square(square(pi))))):ZERO;
 function g(n){return sub(sub(sub(log(div(R(BigInt(n)),mul(TWO,h))),div(mul(R(3n),square(h)),mul(R(2n*BigInt(n)**2n),square(pi)))),primeBound),poleLoss)}
 const M0=params.M,mm=BigInt(M0-1),gm=g(M0+1);
 if(gm[0]<=0n)throw Error("tail guard");
 const ratios=[];
 for(const power of [2,4,6,8,10,12,14,16]){
  const t=BigInt(power-1);let total=ZERO,from=mm;
  for(let k=0;k<64;k++){
   const to=(from*9n+7n)/8n, lower=k===0?gm:g(Number(from));
   if(lower[0]<=0n)throw Error("block guard");
   total=add(total,div(sub(R(mm**t,from**t),R(mm**t,to**t)),lower));from=to;
  }
  total=add(total,div(R(mm**t,from**t),g(Number(from))));
  const ratio=mul(total,gm);
  if(ratio[0]<=0n||ratio[1]>=Q)throw Error("no strict improvement");
  ratios.push(ratio.map(String));
 }
 return {scale:String(Q),ratios,odd,M:M0,h:hn+"/"+hd,primeNormUpper:String(primeBound[1])};
 }
 }
 return primePowerCertificate;`;
 const f=new Function("odd",pre+body)(odd);
 return f([odd],params);
}
if(typeof module!=="undefined")module.exports=dyadic;

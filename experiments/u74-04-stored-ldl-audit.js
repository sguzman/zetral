// U74-04: exact symmetric fraction-free LDL audit of the stored lower matrix.
// Does not establish interval reconstruction or independent original-form evaluation.
function audit(c) {
 const A=c.lowerInteger.map(row=>row.map(BigInt)), E=c.energyUpper.map(BigInt),n=A.length;
 const assert=(p,m)=>{if(!p)throw Error(m)};
 const grid=BigInt(c.marginDenominator),m=BigInt(c.marginNumerator);
 assert(c.h==="5/2"&&n===50&&c.n===n&&grid===1000000n&&m>0n&&E.length===n&&E.every(v=>v>0n),"regime");
 assert(A.every((row,i)=>row.length===n&&row.every((v,j)=>v===A[j][i])),"symmetry");
 function ld(k){
  const B=A.map((row,i)=>row.map((v,j)=>k===null?v:grid*v-(i===j?k*E[i]:0n)));
  let prev=1n,minors=[];
  for(let j=0;j<n;j++){
   const p=B[j][j];if(p<=0n)return {count:j,minors,failedPivot:String(p)};
   minors.push(String(p));
   for(let i=j+1;i<n;i++)for(let l=i;l<n;l++){
    const v=p*B[i][l]-B[j][i]*B[j][l];assert(v%prev===0n,"exact division");B[i][l]=v/prev;
   }
   prev=p;
  }return {count:n,minors};
 }
 const a=ld(null),b=ld(m),d=ld(m+1n);
 assert(a.count===n&&c.principalMinors.length===n&&a.minors.every((v,i)=>v===c.principalMinors[i]),"stored minors");
 assert(b.count===n&&d.count<n,"adjacent grid");
 return {h:c.h,odd:c.odd,n,matchedPrincipalMinors:n,marginNumerator:String(m),marginDenominator:String(grid),passingGridPositiveMinors:b.count,nextGridPositiveMinors:d.count,nextGridFailedMinorSign:d.failedPivot.startsWith("-")?-1:0,scope:"Stored integer matrix only; symmetric fraction-free LDL with exact division. Interval reconstruction and original-form evaluation not established."};
}
if(typeof module!=="undefined")module.exports=audit;

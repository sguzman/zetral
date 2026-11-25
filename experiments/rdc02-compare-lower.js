// RDC02: exact fixed-point comparison of independently certified lower matrices.
function compare(oldData,newData){
 const a=oldData.rows[0],b=newData.rows[0],Q=BigInt(oldData.scale),n=a.ks.length;
 const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
 assert(newData.scale===oldData.scale&&a.h===b.h&&a.odd===b.odd&&a.certified&&b.certified,"input certificate");
 for(const k of ["ks","ts","basis","J","M","S","T","primeNormUpper"])assert(JSON.stringify(a[k])===JSON.stringify(b[k]),"mismatch "+k);
 assert(JSON.stringify(a.trial)===JSON.stringify(b.correction.initialTrial),"baseline trial mismatch");
 const delta=b.lowerInteger.map((r,i)=>r.map((x,j)=>BigInt(x)-BigInt(a.lowerInteger[i][j])));
 const ds=delta.map((r,i)=>r[i]),B=delta.map(r=>r.slice());let prev=1n,positive=true,stop=null;
 for(let k=0;k<n;k++){
 const p=B[k][k];if(p<=0n){positive=false;stop=k;break}
 for(let i=k+1;i<n;i++)for(let j=i;j<n;j++){const t=p*B[i][j]-B[i][k]*B[k][j];assert(t%prev===0n,"bareiss");B[i][j]=B[j][i]=t/prev}prev=p;
 }
 return {h:a.h,odd:a.odd,scale:String(Q),identicalBasis:true,identicalOriginalTrial:true,correctionModes:b.correction.indices.length,oldFirstMinor:a.principalMinors[0],newFirstMinor:b.principalMinors[0],firstDelta:String(ds[0]),positiveDiagonalChanges:ds.filter(x=>x>0n).length,negativeDiagonalChanges:ds.filter(x=>x<0n).length,strictLoewnerImprovement:positive,firstNonpositiveDifferenceMinor:stop,oldRelative:a.relativeEstimate,newRelative:b.relativeEstimate,scope:"difference of conservative lower matrices, not difference of exact Schur complements"};
}
function synthetic(){
 // For C=[[2,1],[1,2]], G=I/2, R=(1,1), x=a/b, L=9/10-2x+2x²-2[(1-2x)²+(1-x)²].
 const lower=(a,b)=>[9n*b*b-20n*a*b+20n*a*a-20n*((b-2n*a)**2n+(b-a)**2n),10n*b*b];
 const old=lower(1n,2n),updated=lower(5n,8n);
 if(old[0]*10n!==-old[1]||updated[0]*40n!==updated[1])throw Error("synthetic");
 return {old:"-1/10",new:"1/40",exactSchur:"7/30",H:"8",B:"1",update:"1/8",gain:"1/8"};
}
if(typeof module!=="undefined")module.exports={compare,synthetic};
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module){const fs=require("node:fs"),paths=process.argv.slice(2);console.log(JSON.stringify({synthetic:synthetic(),comparisons:Array.from({length:paths.length/2},(_,i)=>compare(JSON.parse(fs.readFileSync(paths[2*i],"utf8")),JSON.parse(fs.readFileSync(paths[2*i+1],"utf8"))))},null,2))}

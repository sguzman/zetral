// Exact replay with geometric tail factors and the joint Cauchy weights.
function geometricReplay(data,joint,factors,source){
 const r=data.rows[0],Q=BigInt(factors.scale),n=r.ks.length;
 if(factors.h!==r.h||factors.odd!==r.odd||factors.M!==r.M||factors.primeNormUpper!==r.primeNormUpper)throw Error("regime mismatch");
 const ratio=factors.ratios.map(a=>BigInt(a[1]));
 if(ratio.length!==8||ratio.some(a=>a<=0n||a>=Q))throw Error("ratios");
 const floor=(a,b)=>a>=0n?a/b:-((-a+b-1n)/b),ceil=(a,b)=>-floor(-a,b);
 const a="function reallocate(data,candidates){",b="function lower(shares,den){",c="const z=c[keys[k]][i][j],a=old[k]*den,d=shares[k]*D0;",d="BigInt(c.eighth[i])*old[7]",e="const A=lower(shares,den),t=pd(A);";
 for(const x of [a,b,c,d,e])if(!source.includes(x))throw Error("source anchor");
 const patch=source.replace(a,"function reallocate(data,candidates,directionDiagonal){").replace(b,"function lower(shares,den,direction=false){").replace(c,"const raw=c[keys[k]][i][j],z=direction?[floor(BigInt(raw[0])*ratio[k],Q),ceil(BigInt(raw[1])*ratio[k],Q)]:raw,a=old[k]*den,d=shares[k]*D0;").replace(d,"(direction?directionDiagonal[i]:BigInt(c.eighth[i]))*old[7]").replace(e,"const A=lower(shares,den,true),t=pd(A);").replace('if(den===D0&&shares.every','if(!direction&&den===D0&&shares.every');
 const f=new Function("ratio","Q",patch+"\nreturn reallocate;")(ratio,Q);
 const results=[];
 for(const cand of joint.results){
  const diagonal=cand.directionDiagonal.map(x=>ceil(BigInt(x)*ratio[7],Q));
  const t=f(data,[{shares:cand.result.shares,den:cand.result.denominator}],diagonal);
  results.push({weights:cand.weights,directionDiagonal:diagonal.map(String),...t.results[0]});
 }
 return {h:r.h,odd:r.odd,factors,baselineReconstructed:true,results,scope:"geometric high-weight integration with inherited moment/remainder bounds; original baseline reconstructed; exact outward rescaling and minors"};
}
if(typeof module!=="undefined")module.exports=geometricReplay;

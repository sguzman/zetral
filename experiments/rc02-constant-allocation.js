// RC02: reproducible constant-oscillatory allocation with original baseline intact.
const fs=require('node:fs'),path=require('node:path');
const read=p=>fs.readFileSync(p,'utf8');
const prefix=process.argv[2],count=Number(process.argv[3]);
const data=JSON.parse(Array.from({length:count},(_,i)=>read(prefix+'-raw-part'+(i+1)+'.txt')).join(''));
const factors=JSON.parse(read(prefix+'-constant-factors.json'));
const a=read(path.join(__dirname,'lpa03-weighted-reallocation.js')),j=read(path.join(__dirname,'pc03-oscillatory-joint-allocation.js'));
const patch=a.replace("const z=c[keys[k]][i][j],a=old[k]*den,d=shares[k]*D0;","const zz=c[keys[k]][i][j],z=direction?[floor(BigInt(zz[0])*ratio[k],Q),ceil(BigInt(zz[1])*ratio[k],Q)]:zz,a=old[k]*den,d=shares[k]*D0;");
const jointSrc=j.replace("\"(direction?directionDiagonal[i]:BigInt(c.eighth[i]))*old[7]\"","\"(direction?ceil(directionDiagonal[i]*ratio[7],Q):BigInt(c.eighth[i]))*old[7]\"").replace("const replay=new Function(patch+\"\\nreturn reallocate;\")();","const replay=new Function(\"ratio\",patch+\"\\nreturn reallocate;\")(factors.ratios.map(x=>BigInt(x[1])));");
if(patch===a||jointSrc===j)throw Error('source anchor');
const joint=new Function(jointSrc.slice(0,jointSrc.lastIndexOf("if(typeof module"))+"\nreturn joint")()(data,patch,factors);
const Q=BigInt(data.scale),rat=factors.ratios.map(x=>BigInt(x[1])),ceil=(a,b)=>(a+b-1n)/b,r=data.rows[0];
const replay={h:r.h,odd:r.odd,factors,results:joint.results.map(x=>({...x.result,weights:x.weights,directionDiagonal:x.directionDiagonal.map(v=>String(ceil(BigInt(v)*rat[7],Q))),score:x.score}))};
console.log(JSON.stringify({joint,replay}));

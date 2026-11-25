// AIR03: exact polynomial differentiation and rational coefficient audit.
// Monomial keys are (r degree, x degree); all coefficients are integers.
function audit(){
 const P=terms=>new Map(terms.map(([r,x,c])=>[r+","+x,BigInt(c)]));
 const add=(a,b)=>{const c=new Map(a);for(const [k,v] of b)c.set(k,(c.get(k)||0n)+v);for(const [k,v] of c)if(v===0n)c.delete(k);return c};
 const scale=(a,c)=>new Map([...a].map(([k,v])=>[k,v*BigInt(c)]));
 const shift=(a,r,x)=>new Map([...a].map(([k,v])=>{const [i,j]=k.split(",").map(Number);return[(i+r)+","+(j+x),v]}));
 const dr=a=>new Map([...a].map(([k,v])=>{const[i,j]=k.split(",").map(Number);return [i+","+j,v]}).filter(([k])=>Number(k.split(",")[0])>0).map(([k,v])=>{const[i,j]=k.split(",").map(Number);return[(i-1)+","+j,v*BigInt(i)]}));
 const derive=(a,k,n)=>{for(let i=0;i<n;i++){const b=dr(a);a=add(add(shift(b,2,0),shift(b,0,1)),scale(shift(a,1,0),-2*(k+i)))}return a};
 const equal=(a,b)=>a.size===b.size&&[...a].every(([k,v])=>b.get(k)===v);
 const tests=[];
 function check(name,a,b){if(!equal(a,b))throw Error(name);tests.push(name)}
 const f=P([[0,0,1]]),fd=P([[2,0,1]]),g=P([[1,0,1]]);
 check("f first",derive(f,1,1),P([[1,0,-2]]));
 check("fd first",derive(fd,2,1),P([[1,1,2],[3,0,-2]]));
 check("f third",derive(f,1,3),P([[1,1,24],[3,0,-24]]));
 check("fd third",derive(fd,2,3),P([[3,1,120],[1,2,-48],[5,0,-24]]));
 check("f fifth",derive(f,1,5),P([[5,0,-720],[3,1,2400],[1,2,-720]]));
 check("fd fifth",derive(fd,2,5),P([[7,0,-720],[5,1,8400],[3,2,-11760],[1,3,2160]]));
 check("g third",derive(g,1,3),P([[4,0,-6],[2,1,36],[0,2,-6]]));
 check("g fifth",derive(g,1,5),P([[6,0,-120],[4,1,1800],[2,2,-1800],[0,3,120]]));
 const gcd=(a,b)=>b?gcd(b,a%b):a<0n?-a:a;
 const rat=(a,b)=>{let g=gcd(a,b);return[a/g,b/g]};
 const mul=(a,b)=>rat(a[0]*b[0],a[1]*b[1]);const str=a=>a.join("/");
 const c=rat(2n*(1n+2n**7n),30n*40320n);
 if(c[0]*320n>=c[1])throw Error("not sharper");
 const coeffs=[rat(2n-1n,6n*2n),rat(-(8n-1n),30n*24n),rat(32n-1n,42n*720n)];
 if(coeffs.map(str).join(",")!=="1/12,-7/720,31/30240")throw Error("midpoint coefficients");
 return {polynomialChecks:tests,midpointCoefficients:coeffs.map(str),emErrorConstant:str(c),FerrorCoefficient:str(mul(c,[40320n,1n])),alphaErrorCoefficient:str(mul(c,[362880n,1n])),scope:"algebra only; analytic proof in AIR03"};
}
if(typeof module!=="undefined")module.exports=audit;
if(typeof require!=="undefined"&&typeof module!=="undefined"&&require.main===module)console.log(JSON.stringify(audit(),null,2));

const Q=10n**18n;
const floor=(n,d)=>{if(d<0n){n=-n;d=-d}return n>=0n?n/d:-((-n+d-1n)/d)};
const ceil=(n,d)=>-floor(-n,d);
const I=(lo,hi=lo)=>[lo,hi];
const rat=(n,d=1n)=>[floor(n*Q,d),ceil(n*Q,d)];
const add=(a,b)=>[a[0]+b[0],a[1]+b[1]];
const neg=a=>[-a[1],-a[0]];
const sub=(a,b)=>add(a,neg(b));
const min=a=>a.reduce((x,y)=>x<y?x:y),max=a=>a.reduce((x,y)=>x>y?x:y);
const mul=(a,b)=>{const p=a.flatMap(x=>b.map(y=>x*y));return[floor(min(p),Q),ceil(max(p),Q)]};
const div=(a,b)=>{if(b[0]<=0n&&b[1]>=0n)throw Error('zero divisor');const p=a.flatMap(x=>b.flatMap(y=>[[floor(x*Q,y),ceil(x*Q,y)]]));return[min(p.map(x=>x[0])),max(p.map(x=>x[1]))]};
const sqr=a=>{if(a[0]>=0n)return mul(a,a);if(a[1]<=0n)return mul(neg(a),neg(a));return[0n,ceil(max([a[0]*a[0],a[1]*a[1]]),Q)]};
const absup=a=>max([a[0]<0n?-a[0]:a[0],a[1]<0n?-a[1]:a[1]]);
function isqrt(n){if(n<0n)throw Error('sqrt negative');if(n<2n)return n;let x=1n<<BigInt((n.toString(2).length+1)>>1);for(;;){const y=(x+n/x)>>1n;if(y>=x)return x;x=y}}
function sqrtI(a){if(a[0]<0n)throw Error('sqrt interval negative');const lo=isqrt(a[0]*Q);let hi=isqrt(a[1]*Q);if(hi*hi<a[1]*Q)hi++;if(lo*lo>a[0]*Q||(lo+1n)*(lo+1n)<=a[0]*Q||hi*hi<a[1]*Q||hi>0n&&((hi-1n)*(hi-1n)>=a[1]*Q))throw Error('sqrt endpoint');return[lo,hi]}
const Z=rat(0n),O=rat(1n),T=rat(2n);
function logUnit(x){const r=div(sub(x,O),add(x,O));let p=r,s=Z;const r2=mul(r,r);for(let j=0;j<24;j++){s=add(s,div(p,rat(BigInt(2*j+1))));p=mul(p,r2)}const tail=div(mul(T,p),mul(rat(49n),sub(O,r2)));return add(mul(T,s),[0n,tail[1]])}
const ln2=logUnit(T);
function logPoint(x){let a=I(x),k=0;while(a[0]<Q){a=mul(a,T);k--}while(a[0]>=2n*Q){a=div(a,T);k++}return add(logUnit(a),mul(rat(BigInt(k)),ln2))}
function log(a){if(a[0]<=0n)throw Error('log domain');return[logPoint(a[0])[0],logPoint(a[1])[1]]}
function atan(a){let p=a,s=Z,a2=mul(a,a);for(let j=0;j<24;j++){const t=div(p,rat(BigInt(2*j+1)));s=add(s,j%2?neg(t):t);p=mul(p,a2)}const next=div(p,rat(49n));return[s[0],s[1]+next[1]]}
const pi=sub(mul(rat(16n),atan(rat(1n,5n))),mul(rat(4n),atan(rat(1n,239n))));
function expneg(x){let p=O,s=O;for(let j=1;j<=20;j++){p=div(mul(p,x),rat(BigInt(j)));s=add(s,j%2?neg(p):p)}const next=div(mul(p,x),rat(21n));return[s[0]-next[1],s[1]]}
function expAny(x){let k=0;while(x[1]>Q/2n){x=div(x,T);k++}let e=expneg(x);for(let i=0;i<k;i++)e=sqr(e);return[e[0]<0n?0n:e[0],e[1]>Q?Q:e[1]]}
function sinh(x){const e=expAny(x);return div(sub(div(O,e),e),T)}
function cosh(x){const e=expAny(x);return div(add(div(O,e),e),T)}
function fixed(s){let negv=s[0]==='-';if(negv)s=s.slice(1);let [a,b='']=s.split('.');const den=10n**BigInt(b.length),num=BigInt(a+b);return rat(negv?-num:num,den)}
let H=Z;for(let j=1n;j<=256n;j++)H=add(H,rat(1n,j));
const gamma=sub(sub(H,mul(rat(8n),ln2)),[rat(1n,514n)[0],rat(1n,512n)[1]]);
const alpha0=neg(add(add(gamma,div(pi,T)),add(mul(rat(3n),ln2),log(pi))));
const h=rat(37n,64n), h2=sqr(h), h4=div(h,rat(4n)), sh4=sinh(h4), ch4=cosh(h4), kHi=sqrtI(div(T,h)), kZero=sqrtI(div(O,h));
const omega=n=>div(mul(rat(BigInt(n)),pi),h);
function w(n){if(n===0)return alpha0;return sub(log(div(rat(BigInt(n)),mul(T,h))),div(mul(rat(3n),h2),mul(rat(2n*BigInt(n*n)),sqr(pi))))}
const K=8,M=300,J=16;
const ys={0:[
 ['0.00000342','0.00000282','0.00000162','0.00000099','0.00000065'],
 ['0.00005199','0.00004292','0.00002466','0.00001508','0.00000988'],
 ['0.00011296','0.00009326','0.00005358','0.00003277','0.00002146'],
 ['0.00017118','0.00014134','0.00008119','0.00004967','0.00003252'],
 ['0.00022585','0.00018648','0.00010713','0.00006553','0.00004291'],
 ['0.00027782','0.00022940','0.00013179','0.00008061','0.00005279'],
 ['0.00032762','0.00027053','0.00015542','0.00009507','0.00006226'],
 ['0.00037541','0.00031001','0.00017810','0.00010895','0.00007135'],
 ['0.00042114','0.00034779','0.00019982','0.00012223','0.00008005'],
 ['0.00046474','0.00038382','0.00022052','0.00013490','0.00008834'],
 ['0.00050611','0.00041801','0.00024017','0.00014692','0.00009622'],
 ['0.00054517','0.00045031','0.00025874','0.00015828','0.00010366'],
 ['0.00058188','0.00048067','0.00027619','0.00016896','0.00011065'],
 ['0.00061623','0.00050908','0.00029253','0.00017896','0.00011720'],
 ['0.00064821','0.00053554','0.00030775','0.00018828','0.00012331'],
 ['0.00067785','0.00056008','0.00032187','0.00019692','0.00012896']],
1:[
 ['0.00003877','0.00002157','0.00001271','0.00000804'],
 ['0.00013672','0.00007607','0.00004481','0.00002833'],
 ['0.00021299','0.00011851','0.00006981','0.00004414'],
 ['0.00029111','0.00016198','0.00009542','0.00006034'],
 ['0.00037130','0.00020660','0.00012171','0.00007696'],
 ['0.00045116','0.00025105','0.00014790','0.00009352'],
 ['0.00052896','0.00029436','0.00017342','0.00010966'],
 ['0.00060371','0.00033597','0.00019794','0.00012516'],
 ['0.00067481','0.00037557','0.00022127','0.00013992'],
 ['0.00074195','0.00041296','0.00024331','0.00015386'],
 ['0.00080490','0.00044803','0.00026399','0.00016693'],
 ['0.00086358','0.00048073','0.00028326','0.00017913'],
 ['0.00091795','0.00051104','0.00030113','0.00019043'],
 ['0.00096803','0.00053897','0.00031760','0.00020085'],
 ['0.00101390','0.00056456','0.00033270','0.00021040'],
 ['0.00105569','0.00058788','0.00034646','0.00021910']]};
function intervalLDL(A){const n=A.length,L=Array.from({length:n},()=>Array(n).fill(Z)),D=Array(n).fill(Z),piv=[];for(let i=0;i<n;i++){L[i][i]=O;let d=A[i][i];for(let k=0;k<i;k++)d=sub(d,mul(sqr(L[i][k]),D[k]));if(d[0]<=0n)throw Error('LDL pivot nonpositive '+i+' '+Number(d[0])/1e18);D[i]=d;piv.push(d.map(String));for(let j=i+1;j<n;j++){let x=A[j][i];for(let k=0;k<i;k++)x=sub(x,mul(mul(L[j][k],L[i][k]),D[k]));L[j][i]=div(x,D[i])}}return piv}
function sector(parity){const lows=[];for(let n=parity;n<=K;n+=2)lows.push(n);const highs=[];for(let n=K+1;n<=M;n++)if(n%2===parity)highs.push(n);const yl=ys[parity].map(row=>row.map(fixed));
 const d=[],vlow=[],vhigh=[];for(let j=0;j<J;j++){const r=rat(BigInt(4*j+1),2n),q=expAny(mul(r,h)),dd=mul(T,sub(O,parity===0?q:neg(q)));d.push(dd);const vl=[],vh=[];for(const n of lows){const kn=n===0?kZero:kHi,om=omega(n);vl.push(div(mul(mul(kn,r),O),add(sqr(r),sqr(om))))}for(const n of highs){const kn=kHi,om=omega(n);vh.push(div(mul(kn,r),add(sqr(r),sqr(om))))}vlow.push(vl);vhigh.push(vh)}
 const cn=[],sn=[];for(const n of lows){const kn=n===0?kZero:kHi,om=omega(n),den=add(sqr(om),rat(1n,4n));cn.push(parity===0?div(mul(kn,sh4),den):Z);sn.push(parity===1?neg(div(mul(kn,ch4),den)):Z)}
 const A=Array.from({length:lows.length},()=>Array(lows.length).fill(Z));
 for(let a=0;a<lows.length;a++)for(let b=0;b<lows.length;b++){let x=a===b?w(lows[a]):Z;for(let j=0;j<J;j++)x=add(x,mul(d[j],mul(vlow[j][a],vlow[j][b])));x=add(x,sub(mul(T,mul(cn[a],cn[b])),mul(T,mul(sn[a],sn[b]))));A[a][b]=x}
 const R=Array.from({length:highs.length},()=>Array(lows.length).fill(Z)),G=[];
 for(let i=0;i<highs.length;i++){const n=highs[i],om=omega(n),den=add(sqr(om),rat(1n,4n));let gn=w(n);if(parity===1){let norm2=sub(sinh(div(h,T)),div(h,T));for(let a=0;a<lows.length;a++)norm2=sub(norm2,sqr(sn[a]));gn=sub(gn,mul(T,norm2))}if(gn[0]<=0n)throw Error('nonpositive high diagonal comparison at n='+n);G.push(gn);const kn=kHi,cc=parity===0?div(mul(kn,sh4),den):Z,ss=parity===1?neg(div(mul(kn,ch4),den)):Z;for(let a=0;a<lows.length;a++){let x=sub(mul(T,mul(cc,cn[a])),mul(T,mul(ss,sn[a])));for(let j=0;j<J;j++)x=add(x,mul(d[j],mul(vhigh[j][i],vlow[j][a])));R[i][a]=x}}
 let S=A.map(row=>row.slice());for(let a=0;a<lows.length;a++)for(let b=0;b<lows.length;b++){let penalty=Z;for(let j=0;j<J;j++)penalty=add(penalty,div(mul(yl[j][a],yl[j][b]),d[j]));for(let i=0;i<highs.length;i++){let ea=R[i][a],eb=R[i][b];for(let j=0;j<J;j++){ea=sub(ea,mul(vhigh[j][i],yl[j][a]));eb=sub(eb,mul(vhigh[j][i],yl[j][b]))}penalty=add(penalty,div(mul(ea,eb),G[i]))}S[a][b]=sub(S[a][b],penalty)}
 // Residual tail for rates plus pole. G is increasing; use M+1 lower endpoint.
 let gnext=w(M+1);if(parity===1){let norm2=sub(sinh(div(h,T)),div(h,T));for(let a=0;a<lows.length;a++)norm2=sub(norm2,sqr(sn[a]));gnext=sub(gnext,mul(T,norm2))}
 if(gnext[0]<=0n)throw Error('nonpositive omitted-tail weight');const coeff=[];for(let a=0;a<lows.length;a++){let cr=Z;for(let j=0;j<J;j++){const r=rat(BigInt(4*j+1),2n),q=expAny(mul(r,h)),dd=mul(T,sub(O,parity===0?q:neg(q)));const delta=sub(mul(dd,vlow[j][a]),yl[j][a]);const c=div(mul(mul(mul(kHi,r),h2),delta),sqr(pi));cr=add(cr,absInterval(c))}const cp=parity===0?div(mul(mul(mul(rat(2n),kHi),h2),mul(sh4,absInterval(cn[a]))),sqr(pi)):div(mul(mul(mul(rat(2n),kHi),h2),mul(ch4,absInterval(sn[a]))),sqr(pi));coeff.push(add(cr,cp))}
 const tail=Z;let tailSum=Z;for(const c of coeff)tailSum=add(tailSum,div(sqr(c),mul(rat(3n*BigInt(M)**3n),gnext)));for(let a=0;a<lows.length;a++)S[a][a]=sub(S[a][a],tailSum);
 const piv=intervalLDL(S);return {parity,lows,highCount:highs.length,minG:G[0].map(String),tail:tailSum.map(String),pivots:piv.map(p=>p.map(String))};}
function absInterval(a){return[0n,absup(a)]}
console.log(JSON.stringify({h:'37/64',scale:String(Q),pi:pi.map(String),ln2:ln2.map(String),alpha0:alpha0.map(String),kHi:kHi.map(String),kZero:kZero.map(String),rows:[sector(0),sector(1)]},null,2));

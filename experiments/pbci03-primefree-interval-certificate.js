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
const sqrt2=I(1414213562373095048n,1414213562373095050n);
if(sqrt2[0]**2n>2n*Q*Q||sqrt2[1]**2n<2n*Q*Q)throw Error('sqrt2 enclosure');
const h=rat(1n,2n), h2=sqr(h), sh4=sinh(rat(1n,8n)), ch4=cosh(rat(1n,8n));
function w(n){if(n===0)return alpha0;return sub(log(rat(BigInt(n))),div(mul(rat(3n),h2),mul(rat(2n*BigInt(n*n)),sqr(pi))))}
const K=8,M=300,J=16;
const ys={0:[
 ['0.00000199','0.00000153','0.00000082','0.00000048','0.00000031'],
 ['0.00003205','0.00002459','0.00001320','0.00000773','0.00000493'],
 ['0.00007214','0.00005536','0.00002972','0.00001740','0.00001110'],
 ['0.00011150','0.00008557','0.00004594','0.00002690','0.00001715'],
 ['0.00014871','0.00011413','0.00006127','0.00003587','0.00002288'],
 ['0.00018409','0.00014128','0.00007585','0.00004441','0.00002832'],
 ['0.00021805','0.00016736','0.00008985','0.00005260','0.00003355'],
 ['0.00025081','0.00019250','0.00010335','0.00006051','0.00003859'],
 ['0.00028241','0.00021677','0.00011638','0.00006814','0.00004345'],
 ['0.00031286','0.00024014','0.00012894','0.00007548','0.00004814'],
 ['0.00034209','0.00026259','0.00014099','0.00008254','0.00005264'],
 ['0.00037007','0.00028408','0.00015253','0.00008930','0.00005695'],
 ['0.00039676','0.00030458','0.00016355','0.00009575','0.00006107'],
 ['0.00042211','0.00032407','0.00017401','0.00010188','0.00006497'],
 ['0.00044613','0.00034252','0.00018393','0.00010768','0.00006868'],
 ['0.00046879','0.00035994','0.00019328','0.00011316','0.00007217']],
1:[
 ['0.00002540','0.00001306','0.00000728','0.00000445'],
 ['0.00009171','0.00004715','0.00002628','0.00001606'],
 ['0.00014137','0.00007268','0.00004051','0.00002476'],
 ['0.00019091','0.00009816','0.00005471','0.00003344'],
 ['0.00024208','0.00012447','0.00006938','0.00004241'],
 ['0.00029383','0.00015108','0.00008421','0.00005147'],
 ['0.00034504','0.00017741','0.00009890','0.00006045'],
 ['0.00039499','0.00020310','0.00011322','0.00006920'],
 ['0.00044322','0.00022791','0.00012705','0.00007766'],
 ['0.00048945','0.00025170','0.00014031','0.00008576'],
 ['0.00053351','0.00027436','0.00015295','0.00009349'],
 ['0.00057527','0.00029586','0.00016494','0.00010081'],
 ['0.00061467','0.00031614','0.00017625','0.00010773'],
 ['0.00065168','0.00033519','0.00018687','0.00011422'],
 ['0.00068628','0.00035301','0.00019681','0.00012030'],
 ['0.00071850','0.00036960','0.00020607','0.00012596']]};
function intervalLDL(A){const n=A.length,L=Array.from({length:n},()=>Array(n).fill(Z)),D=Array(n).fill(Z),piv=[];for(let i=0;i<n;i++){L[i][i]=O;let d=A[i][i];for(let k=0;k<i;k++)d=sub(d,mul(sqr(L[i][k]),D[k]));if(d[0]<=0n)throw Error('LDL pivot nonpositive '+i+' '+Number(d[0])/1e18);D[i]=d;piv.push(d.map(String));for(let j=i+1;j<n;j++){let x=A[j][i];for(let k=0;k<i;k++)x=sub(x,mul(mul(L[j][k],L[i][k]),D[k]));L[j][i]=div(x,D[i])}}return piv}
function sector(parity){const lows=[];for(let n=parity;n<=K;n+=2)lows.push(n);const highs=[];for(let n=K+1;n<=M;n++)if(n%2===parity)highs.push(n);const yl=ys[parity].map(row=>row.map(fixed));
 const d=[],vlow=[],vhigh=[];for(let j=0;j<J;j++){const r=rat(BigInt(4*j+1),2n),q=expAny(mul(r,h)),dd=mul(T,sub(O,parity===0?q:neg(q)));d.push(dd);const vl=[],vh=[];for(const n of lows){const kn=n===0?sqrt2:rat(2n),om=mul(rat(BigInt(2*n)),pi);vl.push(div(mul(mul(kn,r),O),add(sqr(r),sqr(om))))}for(const n of highs){const kn=rat(2n),om=mul(rat(BigInt(2*n)),pi);vh.push(div(mul(kn,r),add(sqr(r),sqr(om))))}vlow.push(vl);vhigh.push(vh)}
 const cn=[],sn=[];for(const n of lows){const kn=n===0?sqrt2:rat(2n),om=mul(rat(BigInt(2*n)),pi),den=add(sqr(om),rat(1n,4n));cn.push(parity===0?div(mul(kn,sh4),den):Z);sn.push(parity===1?neg(div(mul(kn,ch4),den)):Z)}
 const A=Array.from({length:lows.length},()=>Array(lows.length).fill(Z));
 for(let a=0;a<lows.length;a++)for(let b=0;b<lows.length;b++){let x=a===b?w(lows[a]):Z;for(let j=0;j<J;j++)x=add(x,mul(d[j],mul(vlow[j][a],vlow[j][b])));x=add(x,sub(mul(T,mul(cn[a],cn[b])),mul(T,mul(sn[a],sn[b]))));A[a][b]=x}
 const R=Array.from({length:highs.length},()=>Array(lows.length).fill(Z)),G=[];
 for(let i=0;i<highs.length;i++){const n=highs[i],om=mul(rat(BigInt(2*n)),pi),den=add(sqr(om),rat(1n,4n));let gn=w(n);if(parity===1){let norm2=sub(sub(sinh(rat(1n,4n)),rat(1n,4n)),Z);for(let a=0;a<lows.length;a++)norm2=sub(norm2,sqr(sn[a]));gn=sub(gn,mul(T,norm2))}if(gn[0]<=0n)throw Error('nonpositive high diagonal comparison at n='+n);G.push(gn);const kn=rat(2n),cc=parity===0?div(mul(kn,sh4),den):Z,ss=parity===1?neg(div(mul(kn,ch4),den)):Z;for(let a=0;a<lows.length;a++){let x=sub(mul(T,mul(cc,cn[a])),mul(T,mul(ss,sn[a])));for(let j=0;j<J;j++)x=add(x,mul(d[j],mul(vhigh[j][i],vlow[j][a])));R[i][a]=x}}
 let S=A.map(row=>row.slice());for(let a=0;a<lows.length;a++)for(let b=0;b<lows.length;b++){let penalty=Z;for(let j=0;j<J;j++)penalty=add(penalty,div(mul(yl[j][a],yl[j][b]),d[j]));for(let i=0;i<highs.length;i++){let ea=R[i][a],eb=R[i][b];for(let j=0;j<J;j++){ea=sub(ea,mul(vhigh[j][i],yl[j][a]));eb=sub(eb,mul(vhigh[j][i],yl[j][b]))}penalty=add(penalty,div(mul(ea,eb),G[i]))}S[a][b]=sub(S[a][b],penalty)}
 // Residual tail for rates plus pole. G is increasing; use M+1 lower endpoint.
 let gnext=w(M+1);if(parity===1){let norm2=sub(sub(sinh(rat(1n,4n)),rat(1n,4n)),Z);for(let a=0;a<lows.length;a++)norm2=sub(norm2,sqr(sn[a]));gnext=sub(gnext,mul(T,norm2))}
 if(gnext[0]<=0n)throw Error('nonpositive omitted-tail weight');const coeff=[];for(let a=0;a<lows.length;a++){let cr=Z;for(let j=0;j<J;j++){const r=rat(BigInt(4*j+1),2n),q=expAny(mul(r,h)),dd=mul(T,sub(O,parity===0?q:neg(q)));const delta=sub(mul(dd,vlow[j][a]),yl[j][a]);const c=div(mul(mul(mul(rat(2n),r),h2),delta),sqr(pi));cr=add(cr,absInterval(c))}const cp=parity===0?div(mul(mul(rat(4n),h2),mul(sh4,absInterval(cn[a]))),sqr(pi)):div(mul(mul(rat(4n),h2),mul(ch4,absInterval(sn[a]))),sqr(pi));coeff.push(add(cr,cp))}
 const tail=Z;let tailSum=Z;for(const c of coeff)tailSum=add(tailSum,div(sqr(c),mul(rat(3n*BigInt(M)**3n),gnext)));for(let a=0;a<lows.length;a++)S[a][a]=sub(S[a][a],tailSum);
 const piv=intervalLDL(S);return {parity,lows,highCount:highs.length,minG:G[0].map(String),tail:tailSum.map(String),pivots:piv.map(p=>p.map(String))};}
function absInterval(a){return[0n,absup(a)]}
console.log(JSON.stringify({scale:String(Q),pi:pi.map(String),ln2:ln2.map(String),alpha0:alpha0.map(String),rows:[sector(0),sector(1)]},null,2));

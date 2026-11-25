// Exploratory Float64 only. No continuum or roundoff certification.
function exploratory(){
  // Float64 exploratory only: midpoint quadrature omits log endpoint values.
  const gamma=0.5772156649015329,alpha=-gamma-Math.PI/2-3*Math.log(2)-Math.log(Math.PI);
  const s=Math.log(2),b=s/Math.sqrt(2);
  function F(d){const y=Math.exp(-d/2);return Math.atanh(y)+Math.atan(y)}
  function jacobi(A){
    const n=A.length;let a=A.map(x=>x.slice());
    for(let sweep=0;sweep<50;sweep++){
      let mx=0;
      for(let p=0;p<n;p++)for(let q=p+1;q<n;q++){
        let z=a[p][q];mx=Math.max(mx,Math.abs(z));if(Math.abs(z)<1e-12)continue;
        const theta=(a[q][q]-a[p][p])/(2*z);
        const t=Math.sign(theta||1)/(Math.abs(theta)+Math.hypot(1,theta)),c=1/Math.hypot(1,t),u=t*c;
        const x=a[p][p],y=a[q][q];a[p][p]=x-t*z;a[q][q]=y+t*z;a[p][q]=a[q][p]=0;
        for(let k=0;k<n;k++)if(k!==p&&k!==q){let ap=a[k][p],aq=a[k][q];a[k][p]=a[p][k]=c*ap-u*aq;a[k][q]=a[q][k]=u*ap+c*aq}
      }
      if(mx<1e-10)break;
    }
    return a.map((row,i)=>row[i]).sort((a,b)=>a-b)
  }
  const rows=[];
  for(const m of [24,32,64,128]){
    const K=256,M=m*K,h=1/m;
    const H=Array.from({length:m},()=>new Float64Array(m)),G=Array.from({length:m},()=>new Float64Array(m));
    const C=[],S=[];
    for(let i=0;i<m;i++){const l=i*h-.5,r=l+h;C.push(2*(Math.sinh(r/2)-Math.sinh(l/2)));S.push(2*(Math.cosh(r/2)-Math.cosh(l/2)))}
    // tabulate F at every half-grid distance
    const fs=Array.from({length:M},(_,i)=>F((i+.5)/M));
    const v=new Float64Array(m);
    for(let k=0;k<M;k++){
      const x=(k+.5)/M-.5,cell=Math.floor(k/K),cp=Math.cosh(x/2),sp=Math.sinh(x/2);
      for(let i=0;i<m;i++){
        const l=i*K,r=l+K;
        let a=k<l?-fs[l-k-1]+fs[r-k-1]:k>=r?-fs[k-r]+fs[k-l]:alpha+fs[k-l]+fs[r-k-1];
        const li=i*h-.5,ri=li+h;
        if(x+s>=li&&x+s<ri)a-=b;
        if(x-s>=li&&x-s<ri)a-=b;
        v[i]=a+2*(C[i]*cp-S[i]*sp);
        H[cell][i]+=v[i]/K;
      }
      for(let i=0;i<m;i++)for(let j=0;j<=i;j++)G[i][j]+=v[i]*v[j]/K;
    }
    for(let i=0;i<m;i++)for(let j=0;j<i;j++){G[j][i]=G[i][j];H[i][j]=H[j][i]=(H[i][j]+H[j][i])/2}
    const R=Array.from({length:m},(_,i)=>Array.from({length:m},(_,j)=>G[i][j]-H[i].reduce((sum,v,k)=>sum+v*H[k][j],0)));
    const d=Math.log(m/2)-1.5-b-h*h*(Math.sinh(.5)+.5)/(2*Math.PI**2);
    const Slo=Array.from({length:m},(_,i)=>Array.from({length:m},(_,j)=>H[i][j]-R[i][j]/d));
    const e=jacobi(H.map(r=>Array.from(r))),r=jacobi(R),sl=jacobi(Slo);
    rows.push({m,K,delta:d,ritzMin:e[0],couplingMax:r[m-1],schurLowerMin:sl[0],schurLowerSecond:sl[1]});
  }
  return rows
}
console.log(JSON.stringify(exploratory(),null,2));

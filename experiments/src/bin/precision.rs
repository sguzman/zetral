//! MPFR numerical experiment. Precision/refinement agreement is not interval certification.
use rug::{Float as F, float::Constant};
use zetral_experiments::prime_powers;

fn f(p:u32,x:i32)->F { F::with_val(p,x) }
fn add(a:&F,b:&F)->F { F::with_val(a.prec(),a+b) }
fn sub(a:&F,b:&F)->F { F::with_val(a.prec(),a-b) }
fn mul(a:&F,b:&F)->F { F::with_val(a.prec(),a*b) }
fn div(a:&F,b:&F)->F { F::with_val(a.prec(),a/b) }
fn sq(a:&F)->F { mul(a,a) }
fn parity(k:i32)->i32 { if k.rem_euclid(2)==0 {1} else {-1} }
fn legendre(p:u32,n:usize,z:&F)->(F,F) {
    let mut a=f(p,1); let mut b=z.clone();
    for k in 2..=n {
        let v=(mul(z,&b)*(2*k-1) as i32-a*(k-1) as i32)/k as i32;
        a=b; b=v;
    }
    let derivative=(mul(z,&b)-a)*n as i32/(sq(z)-1);
    (b,derivative)
}
fn nodes(p:u32,n:usize,pi:&F)->Vec<(F,F)> {
    assert!(n>=2 && n%2==0 && n<=1024);
    let mut out=Vec::with_capacity(n);
    let tol=F::with_val(p,1)>> (p-8);
    for j in 1..=n/2 {
        let mut z=(pi.clone()*(4*j-1) as i32/(4*n+2) as i32).cos();
        let mut ok=false;
        for _ in 0..40 {
            let (v,d)=legendre(p,n,&z); let dz=div(&v,&d);
            z-= &dz;
            if dz.abs()<tol {ok=true;break;}
        }
        assert!(ok,"Gauss node Newton iteration did not converge");
        let (_,d)=legendre(p,n,&z);
        let w=f(p,1)/((f(p,1)-sq(&z))*sq(&d));
        out.push(((f(p,1)-&z)/2,w.clone()));
        out.push(((f(p,1)+&z)/2,w));
    }
    out
}
fn matrix(p:u32,x:u64,n:i32,rule:&[(F,F)],pi:&F)->(F,Vec<Vec<F>>) {
    let l=F::with_val(p,x).ln();
    let mut h=vec![f(p,0);n as usize+1];let mut d=h.clone();
    for (u,w) in rule {
        let t=mul(&l,u); let half=t.clone()/2;
        let k=half.clone().exp()/(t.clone().sinh()*2);
        let a=half.clone().cosh()*2;
        let c=(-half).exp();
        let wl=mul(w,&l);
        for j in 0..=n as usize {
            let ang=mul(pi,u)*2*j as i32;
            let s=ang.clone().sin();let co=ang.cos();
            let sdiag=(f(p,1)-u)*2*co;
            h[j]+=mul(&wl,&mul(&sub(&a,&k),&s));
            d[j]+=mul(&wl,&(mul(&a,&sdiag)-mul(&k,&(sdiag-c.clone()*2))));
        }
    }
    for (q,prime) in prime_powers(x) {
        let u=F::with_val(p,q).ln()/&l;
        let weight=F::with_val(p,prime).ln()/F::with_val(p,q).sqrt();
        for j in 0..=n as usize {
            let ang=mul(pi,&u)*2*j as i32;
            h[j]-=mul(&weight,&ang.clone().sin());
            d[j]-=mul(&weight,&((f(p,1)-&u)*2*ang.cos()));
        }
    }
    let offset=(pi.clone()*4).ln()+F::with_val(p,Constant::Euler)+(l.clone()/2).tanh().ln();
    for v in &mut d {*v-= &offset;}
    let signed=|j:i32| h[j.unsigned_abs() as usize].clone()*j.signum();
    let g=(-n..=n).map(|i|(-n..=n).map(|j|
        if i==j {d[i.unsigned_abs() as usize].clone()} else {
            (signed(i)-signed(j))*parity(i-j+1)/(pi.clone()*(i-j))
        }).collect()).collect();
    (l,g)
}
fn chol(p:u32,g:&[Vec<F>])->Vec<Vec<F>> {
    let n=g.len();let mut l=vec![vec![f(p,0);n];n];
    for i in 0..n {for j in 0..=i {
        let mut v=g[i][j].clone();
        for k in 0..j {v-=mul(&l[i][k],&l[j][k]);}
        l[i][j]=if i==j {assert!(v>0,"nonpositive pivot {i}");v.sqrt()} else {div(&v,&l[j][j])};
    }}
    l
}
fn solve(l:&[Vec<F>],rhs:&[F])->Vec<F> {
    let n=rhs.len(); let mut y=rhs.to_vec();
    for i in 0..n { let mut v=y[i].clone(); for j in 0..i {v-=mul(&l[i][j],&y[j]);} y[i]=div(&v,&l[i][i]);}
    for i in (0..n).rev() {let mut v=y[i].clone();for j in i+1..n {v-=mul(&l[j][i],&y[j]);}y[i]=div(&v,&l[i][i]);}
    y
}
fn coefficients(p:u32,l:&F,pi:&F,n:i32,g:&[Vec<F>])->(Vec<F>,Vec<F>) {
    let factor=l.clone().sqrt()*(l.clone()/2).sinh()*2;
    let mut re=Vec::new();let mut im=Vec::new();
    for k in -n..=n {
        let v=pi.clone()*2*k;let den=sq(&v)+sq(l);
        let a=factor.clone()*parity(k)/den;
        re.push(mul(&a,l)); im.push(mul(&a,&v));
    }
    let ch=chol(p,g);
    (solve(&ch,&re),solve(&ch,&im))
}
fn characteristic(p:u32,t:&F,l:&F,pi:&F,n:i32,re:&[F],im:&[F])->F {
    let tl=mul(t,l)/2;
    let mut r=f(p,0);let mut i=f(p,0);
    for k in -n..=n {
        let arg=tl.clone()+pi.clone()*k;
        let sinc=if arg==0 {f(p,1)} else {div(&arg.clone().sin(),&arg)};
        let j=(k+n) as usize;
        r+=mul(&sinc,&re[j]);i+=mul(&sinc,&im[j]);
    }
    // Omitted common nonzero sqrt(L) and factor 2.
    mul(t,&i)-r
}
fn roots(p:u32,l:&F,pi:&F,n:i32,re:&[F],im:&[F],steps_per_unit:u32)->Vec<F> {
    let w=|t:&F|characteristic(p,t,l,pi,n,re,im);
    let mut out=Vec::new();let mut left=f(p,0);let mut fl=w(&left);
    assert!(fl!=0,"unexpected zero at origin");
    for j in 1..=40*steps_per_unit {
        let right=F::with_val(p,j)/steps_per_unit;let fr=w(&right);
        let root=if fr==0 {Some(right.clone())} else if (fl>0 && fr<0)||(fl<0 && fr>0) {
            let(mut a,mut b,mut fa)=(left.clone(),right.clone(),fl.clone());
            for _ in 0..(p.min(180)-8) {
                let m=add(&a,&b)/2;let fm=w(&m);
                if fm==0 {a=m.clone();b=m;break;}
                if (fa>0 && fm>0)||(fa<0 && fm<0) {a=m;fa=fm;}else{b=m;}
            }
            Some(add(&a,&b)/2)
        } else {None};
        if let Some(t)=root {
            // All basis transforms vanish at outside-band Fourier-grid points.
            let grid=mul(&t,l)/(pi.clone()*2);let nearest=grid.clone().round();
            let tol=F::with_val(p,1)>> (p.min(180)-24);
            if !(nearest.clone().abs()>n && sub(&grid,&nearest).abs()<tol) {out.push(t);}
            if out.len()==6 {break;}
        }
        left=right;fl=fr;
    }
    out
}
fn main() {
    let a:Vec<_>=std::env::args().collect();
    if a.len()!=6 {eprintln!("usage: precision X N bits quadrature_order steps_per_unit");std::process::exit(2);}
    let x:u64=a[1].parse().unwrap();let n:i32=a[2].parse().unwrap();
    let p:u32=a[3].parse().unwrap();let q:usize=a[4].parse().unwrap();let step:u32=a[5].parse().unwrap();
    assert!((2..=100000).contains(&x)&&(0..=100).contains(&n)&&(128..=4096).contains(&p)&&(1..=10000).contains(&step));
    let pi=F::with_val(p,Constant::Pi);let rule=nodes(p,q,&pi);
    let (l,g)=matrix(p,x,n,&rule,&pi);
    let (re,im)=coefficients(p,&l,&pi,n,&g);
    let roots=roots(p,&l,&pi,n,&re,&im,step);
    println!("X,N,bits,order,steps_per_unit,j,root");
    for (j,t) in roots.iter().enumerate() {println!("{x},{n},{p},{q},{step},{},{:.40}",j+1,t);}
    assert_eq!(roots.len(),6,"six roots not found by scan (not a certified counting algorithm)");
}

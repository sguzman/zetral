//! Binary64 diagnostic baseline, not a certified spectral computation.
//! Arithmetic formula: literature/gram-quadrature.md.
use std::f64::consts::PI;
const EULER: f64 = 0.5772156649015329;
const NODES: [f64; 8] = [0.09501250983763744,0.2816035507792589,0.4580167776572274,0.6178762444026438,0.755404408355003,0.8656312023878318,0.9445750230732326,0.9894009349916499];
const WEIGHTS: [f64; 8] = [0.1894506104550685,0.1826034150449236,0.16915651939500254,0.14959598881657673,0.12462897125553387,0.09515851168249278,0.06225352393864789,0.027152459411754095];

pub fn correlation_sum(m: i32, n: i32, l: f64, t: f64) -> f64 {
    let t = t.abs();
    if t >= l { return 0.0; }
    if m == n { return 2.0 * (1.0 - t/l) * (2.0*PI*f64::from(m)*t/l).cos(); }
    let d = f64::from(m-n);
    let parity = if (m-n).rem_euclid(2) == 0 { -1.0 } else { 1.0 };
    2.0 * parity * (PI*d*t/l).sin()/(PI*d) * (PI*f64::from(m+n)*t/l).cos()
}
fn integrand(m: i32, n: i32, l: f64, t: f64) -> f64 {
    let s = correlation_sum(m,n,l,t);
    let diff = if m == n {
        let u = PI*f64::from(m)*t/l;
        2.0*(-2.0*u.sin().powi(2) - t/l*(2.0*u).cos() - (-t/2.0).exp_m1())
    } else { s };
    2.0*(t/2.0).cosh()*s - diff*(t/2.0).exp()/(2.0*t.sinh())
}
fn quadrature(f: impl Fn(f64)->f64, l: f64, panels: usize) -> f64 {
    let half = l/(2.0*panels as f64);
    let mut result=0.0;
    for j in 0..panels {
        let mid=(2.0*j as f64+1.0)*half;
        for (&x,&w) in NODES.iter().zip(WEIGHTS.iter()) {
            result += half*w*(f(mid-half*x)+f(mid+half*x));
        }
    }
    result
}
pub fn prime_powers(x: u64) -> Vec<(u64,u64)> {
    let mut out=Vec::new();
    for p in 2..x {
        if (2..).take_while(|d| *d<=p / *d).any(|d| p%d==0) {continue;}
        let mut q=p;
        while q<x {
            out.push((q,p));
            match q.checked_mul(p) { Some(v)=>q=v, None=>break }
        }
    }
    out.sort_unstable();
    out
}
pub fn gram(x: u64, n: i32, panels: usize) -> Vec<Vec<f64>> {
    assert!((2..=100_000).contains(&x) && (0..=100).contains(&n) && panels>0);
    let l=(x as f64).ln();
    let powers=prime_powers(x);
    let size=(2*n+1) as usize;
    let mut g=vec![vec![0.0;size];size];
    for i in 0..size { for j in 0..=i {
        let m=i as i32-n; let k=j as i32-n;
        let mut v=quadrature(|t| integrand(m,k,l,t),l,panels);
        for &(q,p) in &powers {
            v-=(p as f64).ln()/(q as f64).sqrt()*correlation_sum(m,k,l,(q as f64).ln());
        }
        if m==k {v-=(4.0*PI).ln()+EULER+(l/2.0).tanh().ln();}
        g[i][j]=v;g[j][i]=v;
    }}
    g
}
/// Fail closed on non-positive pivots; successful factorization is not a proof of positivity.
pub fn cholesky(g: &[Vec<f64>]) -> Result<Vec<Vec<f64>>,String> {
    let n=g.len(); let mut l=vec![vec![0.0;n];n];
    for i in 0..n {
        for j in 0..=i {
            let v=g[i][j]-(0..j).map(|k| l[i][k]*l[j][k]).sum::<f64>();
            if i==j {
                if !v.is_finite() || v<=0.0 {return Err(format!("nonpositive pivot {i}: {v:e}"));}
                l[i][j]=v.sqrt();
            } else {l[i][j]=v/l[j][j];}
        }
    }
    Ok(l)
}
#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn cutoff() {
        assert_eq!(prime_powers(2),vec![]);
        assert_eq!(prime_powers(5),vec![(2,2),(3,3),(4,2)]);
        assert_eq!(correlation_sum(1,2,1.0,1.0),0.0);
    }
    #[test] fn direct_overlap() {
        let l=3.0_f64.ln();
        for m in -4..=4 { for n in -4..=4 { for f in [0.0,0.07,0.25,0.5,0.92] {
            let t=l*f;let lo=-l/2.0+t;let hi=l/2.0;
            // Independent midpoint quadrature of the original overlap integrand.
            let steps=8192;
            let h=(hi-lo)/steps as f64;
            let v=2.0*h/l*(0..steps).map(|j| {
                let y=lo+(j as f64+0.5)*h;
                (2.0*PI*(f64::from(m-n)*y+f64::from(n)*t)/l).cos()
            }).sum::<f64>();
            assert!((v-correlation_sum(m,n,l,t)).abs()<1e-6);
        }}}
    }
    #[test] fn gram_checks_x3() {
        let g=gram(3,18,32);let h=gram(3,18,64);
        for i in 0..37 {for j in 0..37 {
            assert_eq!(g[i][j],g[j][i]);
            assert!((g[i][j]-g[36-i][36-j]).abs()<1e-12);
            assert!((g[i][j]-h[i][j]).abs()<1e-12);
        }}
        assert!(cholesky(&g).is_ok());
    }
}

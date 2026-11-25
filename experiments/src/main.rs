use zetral_experiments::{gram,cholesky};
fn main() {
    let args:Vec<_>=std::env::args().collect();
    if args.len()!=4 {eprintln!("usage: zetral-experiments X N panels");std::process::exit(2);}
    let x:u64=args[1].parse().expect("integer X");
    let n:i32=args[2].parse().expect("integer N");
    let panels:usize=args[3].parse().expect("integer panels");
    let g=gram(x,n,panels);
    eprintln!("binary64 diagnostic only; X={x} N={n} panels={panels}");
    match cholesky(&g) {
        Ok(l)=>eprintln!("Cholesky completed; minimum diagonal factor={:e}",(0..l.len()).map(|i|l[i][i]).fold(f64::INFINITY,f64::min)),
        Err(e)=>eprintln!("Cholesky failed: {e}")
    }
    for row in g {println!("{}",row.iter().map(|x|format!("{x:.17e}")).collect::<Vec<_>>().join(","));}
}

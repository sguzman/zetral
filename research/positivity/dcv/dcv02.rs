//! DCV02: standalone integer checker for the DCV01 rational certificate.
//! Build: rustc --edition=2021 -C overflow-checks=yes -O dcv02.rs -o dcv02
//! Run: ./dcv02
//! No external dependencies, floating point, or zeta-zero input.
const Q: i128 = 1_000_000;
const TERMS: i128 = 64;
const LAST: i128 = 4;
const A_OVER_L_DEN: i128 = 512;

fn add(a: i128, b: i128) -> i128 { a.checked_add(b).expect("addition overflow") }
fn sub(a: i128, b: i128) -> i128 { a.checked_sub(b).expect("subtraction overflow") }
fn mul(a: i128, b: i128) -> i128 { a.checked_mul(b).expect("multiplication overflow") }
fn ceil_div(a: i128, b: i128) -> i128 {
    assert!(a >= 0 && b > 0);
    add(a / b, if a % b == 0 { 0 } else { 1 })
}
fn lower_bound(n: i128) -> i128 {
    assert!((0..=LAST).contains(&n));
    let mut b = mul(-6, Q);
    if n == 0 { return b; }
    let n2 = mul(n, n);
    let x = mul(576, n2);
    for j in 0..TERMS {
        let d = add(mul(4, j), 1);
        let d2 = mul(d, d);
        let top = mul(4, sub(x, d2));
        let bottom = mul(d, add(d2, x));
        assert!(bottom > 0);
        if top > 0 { b = add(b, mul(Q, top) / bottom); }
    }
    sub(b, ceil_div(Q, mul(144, n2)))
}
fn main() {
    let mut total = 0_i128;
    let mut previous = i128::MIN;
    let expected = [-6_000_000, -681_065, 17_413, 423_868, 711_898];
    println!("DCV02: A=1/2048 L=1/4 mu=1/2 Q={Q} terms={TERMS}");
    println!("n,B_n,deficit_upper_scaled");
    for n in 0..=LAST {
        let b = lower_bound(n);
        assert_eq!(b, expected[n as usize]);
        assert!(b >= previous);
        previous = b;
        let w = sub(Q / 2, b).max(0);
        total = add(total, mul(if n == 0 { 1 } else { 2 }, w));
        println!("{n},{b},{w}");
    }
    // The analytic monotonicity lemma (DCV01) supplies the infinite tail.
    assert!(lower_bound(LAST) >= Q / 2);
    assert_eq!(total, 9_979_568);
    let denominator = mul(A_OVER_L_DEN, Q);
    let numerator = sub(denominator / 2, total);
    assert!(mul(25, numerator) > mul(12, denominator));
    assert_eq!(numerator, 246_020_432);
    println!("deficit_sum={total}");
    println!("gap_lower={numerator}/{denominator}");
    println!("PASS: gap_lower > 12/25; all arithmetic checks passed");
}

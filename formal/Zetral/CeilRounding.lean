import Mathlib.Algebra.Order.Floor.Div

/-! Exact natural-number ceiling-division facts for positive integer radii.

These lemmas formalize the arithmetic majorant used by integer row-radius
rounding. They do not verify any particular JavaScript or BigInt program. -/

namespace Zetral

/-- Mathlib's natural ceiling division is the usual positive-numerator
quotient ceiling formula. -/
theorem nat_ceil_div_formula (n d : ℕ) :
    n ⌈/⌉ d = (n + d - 1) / d := by
  exact Nat.ceilDiv_eq_add_pred_div n d

/-- For a positive denominator, ceiling division multiplied by the
denominator is an integer upper bound for the numerator. -/
theorem nat_ceil_div_majorizes (n d : ℕ) (hd : 0 < d) :
    n ≤ d * (n ⌈/⌉ d) := by
  simpa [nsmul_eq_mul] using
    (le_smul_ceilDiv (α := ℕ) (β := ℕ) (a := d) (b := n) hd)

/-- Summing rounded entries preserves a common-denominator majorant. This is
the exact integer statement behind row accumulation: if each numerator is
rounded upward over the same positive row weight `d`, then the sum of the
unrounded numerators is at most `d` times the sum of the rounded quotients. -/
theorem nat_sum_ceil_div_majorizes {ι : Type*} (s : Finset ι)
    (numerator : ι → ℕ) (d : ℕ) (hd : 0 < d) :
    (∑ i ∈ s, numerator i) ≤ d * (∑ i ∈ s, (numerator i ⌈/⌉ d)) := by
  calc
    (∑ i ∈ s, numerator i) ≤
        ∑ i ∈ s, d * (numerator i ⌈/⌉ d) := by
          apply Finset.sum_le_sum
          intro i hi
          exact nat_ceil_div_majorizes (numerator i) d hd
    _ = d * (∑ i ∈ s, (numerator i ⌈/⌉ d)) := by
          simp only [Finset.mul_sum]

end Zetral

#print axioms Zetral.nat_ceil_div_formula
#print axioms Zetral.nat_ceil_div_majorizes
#print axioms Zetral.nat_sum_ceil_div_majorizes

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

end Zetral

#print axioms Zetral.nat_ceil_div_formula
#print axioms Zetral.nat_ceil_div_majorizes

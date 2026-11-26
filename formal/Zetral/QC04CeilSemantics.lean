import Zetral.CeilRounding
import Init.Omega

/-! Exact arithmetic correspondence for the positive-input branch of QC04's
signed BigInt ceiling helper. This specifies the source formula over `Int`;
it does not execute or validate JavaScript. -/

namespace Zetral

/-- The signed floor helper used by QC04: truncating division on a
nonnegative numerator and the corrected negative-numerator branch otherwise. -/
def qc04Floor (a b : ℤ) : ℤ :=
  if 0 ≤ a then a / b else -((-a + b - 1) / b)

/-- QC04 defines ceiling division by negating its signed floor helper. -/
def qc04Ceil (a b : ℤ) : ℤ := -qc04Floor (-a) b

/-- For nonnegative natural numerators and positive denominators, the signed
BigInt helper equals Mathlib's natural ceiling division after coercion. -/
theorem qc04Ceil_nat_eq_ceilDiv (n d : ℕ) (hd : 0 < d) :
    qc04Ceil (n : ℤ) (d : ℤ) = ((n ⌈/⌉ d : ℕ) : ℤ) := by
  cases n with
  | zero =>
      simp [qc04Ceil, qc04Floor, Nat.ceilDiv_eq_add_pred_div, hd]
  | succ n =>
      have hcond : ¬ (n : ℤ) ≤ -1 := by omega
      simp [qc04Ceil, qc04Floor, hcond, Nat.ceilDiv_eq_add_pred_div,
        Int.ofNat_sub, Int.ofNat_add, Int.ofNat_ediv, hd]
      have hnum : (n : ℤ) + 1 + (d : ℤ) - 1 = ((n + d : ℕ) : ℤ) := by
        omega
      rw [hnum, ← Int.ofNat_ediv, ← Int.ofNat_ediv]
      exact_mod_cast Nat.add_div_right n hd

/-- Finite accumulation of QC04's BigInt helper agrees exactly with the
corresponding natural-number row sum. -/
theorem qc04Ceil_sum_eq_natCeil_sum {ι : Type*} (s : Finset ι)
    (numerator : ι → ℕ) (d : ℕ) (hd : 0 < d) :
    (∑ i ∈ s, qc04Ceil (numerator i : ℤ) (d : ℤ)) =
      ((∑ i ∈ s, (numerator i ⌈/⌉ d) : ℕ) : ℤ) := by
  calc
    (∑ i ∈ s, qc04Ceil (numerator i : ℤ) (d : ℤ)) =
        ∑ i ∈ s, ((numerator i ⌈/⌉ d : ℕ) : ℤ) := by
          apply Finset.sum_congr rfl
          intro i hi
          exact qc04Ceil_nat_eq_ceilDiv (numerator i) d hd
    _ = ((∑ i ∈ s, (numerator i ⌈/⌉ d) : ℕ) : ℤ) := by norm_cast

end Zetral

#print axioms Zetral.qc04Ceil_nat_eq_ceilDiv
#print axioms Zetral.qc04Ceil_sum_eq_natCeil_sum

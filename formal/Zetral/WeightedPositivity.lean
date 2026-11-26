import Zetral.WeightedRadius
import Mathlib.Tactic.Linarith
import Mathlib.Algebra.Order.Floor.Div

/-! Positivity criterion obtained by combining diagonal lower bounds with the
weighted symmetric row-radius estimate. This is an abstract finite-dimensional
certificate; it does not validate a numerical matrix enclosure. -/

namespace Zetral.WeightedRadius

open scoped BigOperators

variable {ι : Type*} [Fintype ι] [DecidableEq ι]

/-- The natural-number row allowance formed from upward-rounded weighted
entries, as in an integer radius implementation. -/
def natRoundedRowAllowance (radius : ι → ι → ℕ) (weight : ι → ℕ)
    (i : ι) : ℕ :=
  ∑ j : ι, (radius i j * weight j) ⌈/⌉ weight i

/-- Every natural-number rounded row allowance dominates the corresponding
exact real weighted row allowance after the integer data is embedded in an
ordered field. -/
theorem real_row_allowance_le_nat_rounded {α : Type*} [Field α]
    [LinearOrder α] [IsStrictOrderedRing α]
    (radius : ι → ι → ℕ) (weight : ι → ℕ) (i : ι)
    (hweight : ∀ i, 0 < weight i) :
    rowAllowance (fun i j => (radius i j : α))
        (fun i => (weight i : α)) i ≤
      (natRoundedRowAllowance radius weight i : α) := by
  unfold rowAllowance natRoundedRowAllowance
  calc
    (∑ j : ι, (radius i j : α) * ((weight j : α) / (weight i : α))) ≤
        ∑ j : ι, (((radius i j * weight j) ⌈/⌉ weight i : ℕ) : α) := by
          apply Finset.sum_le_sum
          intro j hj
          have hd : (0 : α) < (weight i : α) := by exact_mod_cast hweight i
          have hmajor : radius i j * weight j ≤
              weight i * ((radius i j * weight j) ⌈/⌉ weight i) := by
            simpa [nsmul_eq_mul] using
              (le_smul_ceilDiv (α := ℕ) (β := ℕ)
                (a := weight i) (b := radius i j * weight j) (hweight i))
          have hcast : ((radius i j * weight j : ℕ) : α) ≤
              (weight i : α) *
                (((radius i j * weight j) ⌈/⌉ weight i : ℕ) : α) := by
            exact_mod_cast hmajor
          have hcast' : ((radius i j * weight j : ℕ) : α) ≤
              (((radius i j * weight j) ⌈/⌉ weight i : ℕ) : α) *
                (weight i : α) := by
            exact le_trans hcast (le_of_eq (mul_comm _ _))
          have hdiv := (div_le_iff₀ hd).2 hcast'
          calc
            (radius i j : α) * ((weight j : α) / (weight i : α)) =
                (((radius i j * weight j : ℕ) : α) / (weight i : α)) := by
                  field_simp [ne_of_gt hd]
            _ ≤ (((radius i j * weight j) ⌈/⌉ weight i : ℕ) : α) := by
                  simpa [Nat.cast_mul] using hdiv
    _ = (∑ j : ι, (radius i j * weight j) ⌈/⌉ weight i : ℕ) := by
          simp only [Nat.cast_sum]

/-- A symmetric entrywise perturbation of a diagonal form is positive
semidefinite whenever every diagonal entry dominates its weighted row
allowance. -/
theorem weighted_row_dominance_psd {α : Type*} [Field α] [LinearOrder α]
    [IsStrictOrderedRing α]
    (error radius : ι → ι → α) (diagonal weight x : ι → α)
    (hsymm : ∀ i j, radius i j = radius j i)
    (hradius : ∀ i j, 0 ≤ radius i j)
    (hweight : ∀ i, 0 < weight i)
    (herror : ∀ i j, |error i j| ≤ radius i j)
    (hdiag : ∀ i, rowAllowance radius weight i ≤ diagonal i) :
    0 ≤ (∑ i : ι, diagonal i * x i ^ 2) +
      (∑ i : ι, ∑ j : ι, error i j * x i * x j) := by
  have hrows :
      (∑ i : ι, rowAllowance radius weight i * x i ^ 2) ≤
        ∑ i : ι, diagonal i * x i ^ 2 := by
    apply Finset.sum_le_sum
    intro i hi
    exact mul_le_mul_of_nonneg_right (hdiag i) (sq_nonneg (x i))
  have herr := symmetric_entry_error_row_bound error radius weight x
    hsymm hradius hweight herror
  linarith

/-- Integer upward-rounded weighted row sums suffice for the weighted
diagonal-dominance positivity certificate over any linearly ordered field.
This connects exact natural ceiling division directly to the abstract
quadratic-form theorem. -/
theorem nat_rounded_row_dominance_psd {α : Type*} [Field α]
    [LinearOrder α] [IsStrictOrderedRing α]
    (error : ι → ι → α) (radius : ι → ι → ℕ) (weight : ι → ℕ)
    (diagonal x : ι → α)
    (hsymm : ∀ i j, radius i j = radius j i)
    (hweight : ∀ i, 0 < weight i)
    (herror : ∀ i j, |error i j| ≤ (radius i j : α))
    (hdiag : ∀ i,
      (natRoundedRowAllowance radius weight i : α) ≤ diagonal i) :
    0 ≤ (∑ i : ι, diagonal i * x i ^ 2) +
      (∑ i : ι, ∑ j : ι, error i j * x i * x j) := by
  apply weighted_row_dominance_psd error
    (fun i j => (radius i j : α)) diagonal (fun i => (weight i : α)) x
  · intro i j
    exact_mod_cast hsymm i j
  · intro i j
    exact_mod_cast Nat.zero_le (radius i j)
  · intro i
    exact_mod_cast hweight i
  · exact herror
  · intro i
    exact le_trans (real_row_allowance_le_nat_rounded radius weight i hweight)
      (hdiag i)

end Zetral.WeightedRadius

#print axioms Zetral.WeightedRadius.weighted_row_dominance_psd
#print axioms Zetral.WeightedRadius.real_row_allowance_le_nat_rounded
#print axioms Zetral.WeightedRadius.nat_rounded_row_dominance_psd

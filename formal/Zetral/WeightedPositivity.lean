import Zetral.WeightedRadius
import Mathlib.Tactic.Linarith

/-! Positivity criterion obtained by combining diagonal lower bounds with the
weighted symmetric row-radius estimate. This is an abstract finite-dimensional
certificate; it does not validate a numerical matrix enclosure. -/

namespace Zetral.WeightedRadius

open scoped BigOperators

variable {ι : Type*} [Fintype ι] [DecidableEq ι]

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

end Zetral.WeightedRadius

#print axioms Zetral.WeightedRadius.weighted_row_dominance_psd

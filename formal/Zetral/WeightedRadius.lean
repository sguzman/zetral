import Mathlib.Algebra.Order.Field.Basic
import Mathlib.Tactic.FieldSimp
import Mathlib.Tactic.Ring

/-! Scalar inequalities underlying the weighted row-radius lower bound.

These lemmas do not verify a campaign's interval radii, matrix symmetry, or
the finite summation and reindexing used to assemble a full certificate. -/

namespace Zetral.WeightedRadius

/-- Weighted AM-GM for an absolute cross product, with unequal positive
weights. This is the scalar inequality used to distribute a symmetric entry
radius between two diagonal row errors. -/
theorem weighted_abs_cross {α : Type*} [Field α] [LinearOrder α] [IsStrictOrderedRing α]
    (a b wi wj : α) (hwi : 0 < wi) (hwj : 0 < wj) :
    2 * |a * b| ≤ (wj / wi) * a ^ 2 + (wi / wj) * b ^ 2 := by
  rw [abs_mul]
  have hcrossAbs :
      2 * (|a| * |b|) ≤ (wj / wi) * |a| ^ 2 + (wi / wj) * |b| ^ 2 := by
    have hden : 0 < wi * wj := mul_pos hwi hwj
    have hsq : 0 ≤ (wj * |a| - wi * |b|) ^ 2 := sq_nonneg _
    have hfrac : 0 ≤ (wj * |a| - wi * |b|) ^ 2 / (wi * wj) :=
      div_nonneg hsq (le_of_lt hden)
    have halg :
        (wj / wi) * |a| ^ 2 + (wi / wj) * |b| ^ 2 -
            2 * (|a| * |b|) =
          (wj * |a| - wi * |b|) ^ 2 / (wi * wj) := by
      field_simp [ne_of_gt hwi, ne_of_gt hwj]
      rw [← sq_abs a, ← sq_abs b]
      ring
    have hgap : 0 ≤ (wj / wi) * |a| ^ 2 + (wi / wj) * |b| ^ 2 -
        2 * (|a| * |b|) := by
      rw [halg]
      exact hfrac
    exact sub_nonneg.mp hgap
  simpa only [sq_abs] using hcrossAbs

/-- A nonnegative radius scales the weighted cross-product estimate. -/
theorem weighted_radius_cross {α : Type*} [Field α] [LinearOrder α] [IsStrictOrderedRing α]
    (radius a b wi wj : α) (hradius : 0 ≤ radius)
    (hwi : 0 < wi) (hwj : 0 < wj) :
    radius * |a * b| ≤ (radius / 2) *
      ((wj / wi) * a ^ 2 + (wi / wj) * b ^ 2) := by
  have hcross := weighted_abs_cross a b wi wj hwi hwj
  have hscale : 0 ≤ radius / 2 := div_nonneg hradius (by norm_num)
  have hmul := mul_le_mul_of_nonneg_left hcross hscale
  calc
    radius * |a * b| = (radius / 2) * (2 * |a * b|) := by ring
    _ ≤ (radius / 2) *
        ((wj / wi) * a ^ 2 + (wi / wj) * b ^ 2) := hmul

/-- A signed entry error bounded in absolute value by `radius` cannot reduce
the quadratic form by more than its weighted row-radius share. -/
theorem signed_entry_error_lower {α : Type*} [Field α] [LinearOrder α] [IsStrictOrderedRing α]
    (error a b radius wi wj : α) (hradius : 0 ≤ radius)
    (hwi : 0 < wi) (hwj : 0 < wj) (herror : |error| ≤ radius) :
    -(radius / 2) * ((wj / wi) * a ^ 2 + (wi / wj) * b ^ 2) ≤
      error * a * b := by
  have hab_nonneg : 0 ≤ |a * b| := abs_nonneg _
  have herror_scale := mul_le_mul_of_nonneg_right herror hab_nonneg
  have hradius_scale := weighted_radius_cross radius a b wi wj hradius hwi hwj
  calc
    -(radius / 2) * ((wj / wi) * a ^ 2 + (wi / wj) * b ^ 2) =
        -((radius / 2) * ((wj / wi) * a ^ 2 + (wi / wj) * b ^ 2)) := by ring
    _ ≤
        -(radius * |a * b|) := neg_le_neg hradius_scale
    _ ≤ -(|error| * |a * b|) := neg_le_neg herror_scale
    _ = -|error * a * b| := by simp only [abs_mul]; ring
    _ ≤ error * a * b := neg_abs_le _

end Zetral.WeightedRadius

#print axioms Zetral.WeightedRadius.weighted_abs_cross
#print axioms Zetral.WeightedRadius.weighted_radius_cross
#print axioms Zetral.WeightedRadius.signed_entry_error_lower

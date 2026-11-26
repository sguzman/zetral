import Mathlib.Algebra.Order.Field.Basic
import Mathlib.Algebra.BigOperators.Group.Finset.Basic
import Mathlib.Algebra.BigOperators.Ring.Finset
import Mathlib.Algebra.Order.BigOperators.Group.Finset
import Mathlib.Tactic.FieldSimp
import Mathlib.Tactic.Ring

/-! Scalar inequalities underlying the weighted row-radius lower bound.

These lemmas do not verify a campaign's interval radii, matrix symmetry, or
the finite summation and reindexing used to assemble a full certificate. -/

namespace Zetral.WeightedRadius

open scoped BigOperators

variable {ι : Type*}

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

/-- The row allowance produced by the weighted radius method. -/
def rowAllowance {α : Type*} [Fintype ι] [DecidableEq ι] [Field α]
    (radius : ι → ι → α) (weight : ι → α) (i : ι) : α :=
  ∑ j : ι, radius i j * (weight j / weight i)

/-- Symmetric radii split equally between their two weighted diagonal rows sum
to the usual weighted row allowance. -/
theorem symmetric_share_eq_row {α : Type*} [Fintype ι] [DecidableEq ι]
    [Field α] [LinearOrder α] [IsStrictOrderedRing α]
    (radius : ι → ι → α) (weight x : ι → α)
    (hsymm : ∀ i j, radius i j = radius j i) :
    (∑ i : ι, ∑ j : ι, (radius i j / 2) *
      ((weight j / weight i) * x i ^ 2 +
       (weight i / weight j) * x j ^ 2)) =
      ∑ i : ι, rowAllowance radius weight i * x i ^ 2 := by
  let first : α := ∑ i : ι, ∑ j : ι,
    (radius i j / 2) * ((weight j / weight i) * x i ^ 2)
  let second : α := ∑ i : ι, ∑ j : ι,
    (radius i j / 2) * ((weight i / weight j) * x j ^ 2)
  let rows : α := ∑ i : ι, rowAllowance radius weight i * x i ^ 2
  have hswap : second = first := by
    dsimp [second, first]
    calc
      (∑ i : ι, ∑ j : ι, (radius i j / 2) *
          ((weight i / weight j) * x j ^ 2)) =
        ∑ j : ι, ∑ i : ι, (radius i j / 2) *
          ((weight i / weight j) * x j ^ 2) := by rw [Finset.sum_comm]
      _ = ∑ i : ι, ∑ j : ι, (radius j i / 2) *
          ((weight j / weight i) * x i ^ 2) := rfl
      _ = ∑ i : ι, ∑ j : ι, (radius i j / 2) *
          ((weight j / weight i) * x i ^ 2) := by
        apply Finset.sum_congr rfl
        intro i hi
        apply Finset.sum_congr rfl
        intro j hj
        rw [← hsymm i j]
  have hfirst : first = (1 / 2) * rows := by
    dsimp [first, rows, rowAllowance]
    calc
      (∑ i : ι, ∑ j : ι, (radius i j / 2) *
          ((weight j / weight i) * x i ^ 2)) =
        ∑ i : ι, ∑ j : ι, (1 / 2) *
          (radius i j * (weight j / weight i) * x i ^ 2) := by
          apply Finset.sum_congr rfl
          intro i hi
          apply Finset.sum_congr rfl
          intro j hj
          ring
      _ = ∑ i : ι, (1 / 2) *
          (∑ j : ι, radius i j * (weight j / weight i) * x i ^ 2) := by
          apply Finset.sum_congr rfl
          intro i hi
          rw [← Finset.mul_sum]
      _ = ∑ i : ι, (1 / 2) *
          ((∑ j : ι, radius i j * (weight j / weight i)) * x i ^ 2) := by
          apply Finset.sum_congr rfl
          intro i hi
          rw [Finset.sum_mul]
      _ = (1 / 2) *
          (∑ i : ι, (∑ j : ι, radius i j *
            (weight j / weight i)) * x i ^ 2) := by
          rw [← Finset.mul_sum]
  calc
    (∑ i : ι, ∑ j : ι, (radius i j / 2) *
        ((weight j / weight i) * x i ^ 2 +
         (weight i / weight j) * x j ^ 2)) = first + second := by
      simp only [mul_add, Finset.sum_add_distrib]
      dsimp [first, second]
    _ = rows := by rw [hswap, hfirst]; ring

/-- Full finite-matrix version of the weighted-radius perturbation bound.
For symmetric radii and entrywise errors within those radii, subtracting the
weighted row allowance from the diagonal controls every real quadratic form. -/
theorem symmetric_entry_error_row_bound {α : Type*} [Fintype ι] [DecidableEq ι]
    [Field α] [LinearOrder α] [IsStrictOrderedRing α]
    (error radius : ι → ι → α) (weight x : ι → α)
    (hsymm : ∀ i j, radius i j = radius j i)
    (hradius : ∀ i j, 0 ≤ radius i j)
    (hweight : ∀ i, 0 < weight i)
    (herror : ∀ i j, |error i j| ≤ radius i j) :
    -(∑ i : ι, rowAllowance radius weight i * x i ^ 2) ≤
      ∑ i : ι, ∑ j : ι, error i j * x i * x j := by
  have hpair :
      (∑ i : ι, ∑ j : ι, -(radius i j / 2) *
        ((weight j / weight i) * x i ^ 2 +
         (weight i / weight j) * x j ^ 2)) ≤
        ∑ i : ι, ∑ j : ι, error i j * x i * x j := by
    apply Finset.sum_le_sum
    intro i hi
    apply Finset.sum_le_sum
    intro j hj
    exact signed_entry_error_lower (error i j) (x i) (x j) (radius i j)
      (weight i) (weight j) (hradius i j) (hweight i) (hweight j) (herror i j)
  have hnegative :
      -(∑ i : ι, ∑ j : ι, (radius i j / 2) *
        ((weight j / weight i) * x i ^ 2 +
         (weight i / weight j) * x j ^ 2)) ≤
        ∑ i : ι, ∑ j : ι, error i j * x i * x j := by
    simpa only [neg_mul, Finset.sum_neg_distrib] using hpair
  rw [symmetric_share_eq_row radius weight x hsymm] at hnegative
  exact hnegative

end Zetral.WeightedRadius

#print axioms Zetral.WeightedRadius.weighted_abs_cross
#print axioms Zetral.WeightedRadius.weighted_radius_cross
#print axioms Zetral.WeightedRadius.signed_entry_error_lower
#print axioms Zetral.WeightedRadius.symmetric_share_eq_row
#print axioms Zetral.WeightedRadius.symmetric_entry_error_row_bound

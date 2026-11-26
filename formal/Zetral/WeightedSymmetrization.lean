import Zetral.WeightedPositivity

/-! Symmetrizing nonsymmetric entrywise error radii before applying the
weighted quadratic-form bound. The quadratic form sees only the symmetric
part of an error matrix. -/

namespace Zetral.WeightedRadius

open scoped BigOperators

variable {ι : Type*} [Fintype ι] [DecidableEq ι]

/-- Symmetric average of a possibly nonsymmetric radius matrix. -/
def averagedRadius {α : Type*} [Field α]
    (radius : ι → ι → α) (i j : ι) : α :=
  (radius i j + radius j i) / 2

/-- Symmetric part of an entry error matrix. -/
def symmetricPart {α : Type*} [Field α]
    (error : ι → ι → α) (i j : ι) : α :=
  (error i j + error j i) / 2

omit [Fintype ι] [DecidableEq ι] in
theorem averagedRadius_symmetric {α : Type*} [Field α]
    (radius : ι → ι → α) (i j : ι) :
    averagedRadius radius i j = averagedRadius radius j i := by
  simp [averagedRadius, add_comm]

omit [Fintype ι] [DecidableEq ι] in
theorem averagedRadius_nonneg {α : Type*} [Field α] [LinearOrder α]
    [IsStrictOrderedRing α] (radius : ι → ι → α)
    (hradius : ∀ i j, 0 ≤ radius i j) (i j : ι) :
    0 ≤ averagedRadius radius i j := by
  unfold averagedRadius
  exact div_nonneg (add_nonneg (hradius i j) (hradius j i)) (by norm_num)

omit [Fintype ι] [DecidableEq ι] in
theorem symmetricPart_radius_bound {α : Type*} [Field α] [LinearOrder α]
    [IsStrictOrderedRing α] (error radius : ι → ι → α)
    (herror : ∀ i j, |error i j| ≤ radius i j)
    (i j : ι) :
    |symmetricPart error i j| ≤ averagedRadius radius i j := by
  have hsum : |error i j + error j i| ≤ radius i j + radius j i := by
    exact (abs_add_le _ _).trans (add_le_add (herror i j) (herror j i))
  unfold symmetricPart averagedRadius
  rw [abs_div, abs_of_pos (by norm_num : (0 : α) < 2)]
  exact div_le_div_of_nonneg_right hsum (by norm_num)

omit [DecidableEq ι] in
theorem symmetricPart_quadratic_eq {α : Type*} [Field α]
    [LinearOrder α] [IsStrictOrderedRing α]
    (error : ι → ι → α) (x : ι → α) :
    (∑ i : ι, ∑ j : ι, symmetricPart error i j * x i * x j) =
      ∑ i : ι, ∑ j : ι, error i j * x i * x j := by
  have hswap :
      (∑ i : ι, ∑ j : ι, error j i * x i * x j) =
        ∑ i : ι, ∑ j : ι, error i j * x i * x j := by
    calc
      (∑ i : ι, ∑ j : ι, error j i * x i * x j) =
          ∑ j : ι, ∑ i : ι, error j i * x i * x j := by rw [Finset.sum_comm]
      _ = ∑ i : ι, ∑ j : ι, error i j * x j * x i := rfl
      _ = ∑ i : ι, ∑ j : ι, error i j * x i * x j := by
          apply Finset.sum_congr rfl
          intro i hi
          apply Finset.sum_congr rfl
          intro j hj
          ring
  have hfactor (f : ι → ι → α) :
      (∑ i : ι, ∑ j : ι, (1 / 2) * f i j) =
        (1 / 2) * (∑ i : ι, ∑ j : ι, f i j) := by
    calc
      (∑ i : ι, ∑ j : ι, (1 / 2) * f i j) =
          ∑ i : ι, (1 / 2) * (∑ j : ι, f i j) := by
            apply Finset.sum_congr rfl
            intro i hi
            rw [← Finset.mul_sum]
      _ = (1 / 2) * (∑ i : ι, ∑ j : ι, f i j) := by
            rw [← Finset.mul_sum]
  calc
    (∑ i : ι, ∑ j : ι, symmetricPart error i j * x i * x j) =
        ∑ i : ι, ∑ j : ι,
          ((1 / 2) * (error i j * x i * x j) +
            (1 / 2) * (error j i * x i * x j)) := by
          apply Finset.sum_congr rfl
          intro i hi
          apply Finset.sum_congr rfl
          intro j hj
          simp [symmetricPart]
          ring
    _ = (1 / 2) * (∑ i : ι, ∑ j : ι, error i j * x i * x j) +
        (1 / 2) * (∑ i : ι, ∑ j : ι, error j i * x i * x j) := by
          calc
            _ = (∑ i : ι, ∑ j : ι, (1 / 2) * (error i j * x i * x j)) +
                (∑ i : ι, ∑ j : ι, (1 / 2) * (error j i * x i * x j)) := by
                  simp only [Finset.sum_add_distrib]
            _ = _ := by rw [hfactor, hfactor]
    _ = ∑ i : ι, ∑ j : ι, error i j * x i * x j := by
          rw [hswap]
          field_simp

/-- Weighted lower bound for arbitrary nonnegative radius matrices. Replacing
the entry errors and radii by their symmetric parts preserves the quadratic
form while making the radius symmetry hypothesis explicit and automatic. -/
theorem nonsymmetric_radius_row_bound {α : Type*} [Field α]
    [LinearOrder α] [IsStrictOrderedRing α]
    (error radius : ι → ι → α) (weight x : ι → α)
    (hradius : ∀ i j, 0 ≤ radius i j)
    (hweight : ∀ i, 0 < weight i)
    (herror : ∀ i j, |error i j| ≤ radius i j) :
    -(∑ i : ι, rowAllowance (averagedRadius radius) weight i * x i ^ 2) ≤
      ∑ i : ι, ∑ j : ι, error i j * x i * x j := by
  have h := symmetric_entry_error_row_bound
    (symmetricPart error) (averagedRadius radius) weight x
    (averagedRadius_symmetric radius) (averagedRadius_nonneg radius hradius)
    hweight (symmetricPart_radius_bound error radius herror)
  rw [symmetricPart_quadratic_eq error x] at h
  exact h

/-- Symmetric natural-number envelope of an arbitrary natural radius matrix. -/
def natSymmetricRadius (radius : ι → ι → ℕ) (i j : ι) : ℕ :=
  max (radius i j) (radius j i)

/-- Integer ceiling rows built from pairwise maximum radii certify the same
quantitative form bound even when the original natural radius array is not
symmetric. -/
theorem nat_max_radius_dominance_gap {α : Type*} [Field α]
    [LinearOrder α] [IsStrictOrderedRing α]
    (error : ι → ι → α) (radius : ι → ι → ℕ) (weight : ι → ℕ)
    (diagonal x : ι → α) (gap : α)
    (hweight : ∀ i, 0 < weight i)
    (herror : ∀ i j, |error i j| ≤ (radius i j : α))
    (hdiag : ∀ i,
      (natRoundedRowAllowance (natSymmetricRadius radius) weight i : α) +
        gap ≤ diagonal i) :
    gap * (∑ i : ι, x i ^ 2) ≤
      (∑ i : ι, diagonal i * x i ^ 2) +
        (∑ i : ι, ∑ j : ι, error i j * x i * x j) := by
  apply nat_rounded_row_dominance_gap error (natSymmetricRadius radius)
    weight diagonal x gap
  · intro i j
    simp [natSymmetricRadius, max_comm]
  · exact hweight
  · intro i j
    have hle : radius i j ≤ natSymmetricRadius radius i j := by
      exact Nat.le_max_left _ _
    have hcast : (radius i j : α) ≤ (natSymmetricRadius radius i j : α) := by
      exact_mod_cast hle
    exact le_trans (herror i j) hcast
  · exact hdiag

end Zetral.WeightedRadius

#print axioms Zetral.WeightedRadius.averagedRadius_symmetric
#print axioms Zetral.WeightedRadius.averagedRadius_nonneg
#print axioms Zetral.WeightedRadius.symmetricPart_radius_bound
#print axioms Zetral.WeightedRadius.symmetricPart_quadratic_eq
#print axioms Zetral.WeightedRadius.nonsymmetric_radius_row_bound
#print axioms Zetral.WeightedRadius.nat_max_radius_dominance_gap

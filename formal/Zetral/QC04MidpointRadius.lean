import Zetral.QC04CeilSemantics
import Init.Omega
import Mathlib.Tactic.Linarith

/-! Exact interval coverage for QC04's integer midpoint and max-distance
radius construction. The midpoint helper uses BigInt truncation toward zero. -/

namespace Zetral

/-- Truncating division by two, written using only nonnegative integer
divisions as in the BigInt semantics. -/
def qc04Half (z : ℤ) : ℤ :=
  if 0 ≤ z then z / 2 else -((-z) / 2)

/-- Truncating half differs from its rational midpoint by at most half a unit. -/
theorem qc04Half_bounds (z : ℤ) :
    2 * qc04Half z - 1 ≤ z ∧ z ≤ 2 * qc04Half z + 1 := by
  unfold qc04Half
  split_ifs with hz
  · omega
  · omega

/-- The BigInt midpoint `(l+h)/2` lies in an ordered integer interval. -/
theorem qc04Midpoint_mem_interval (l h : ℤ) (hlh : l ≤ h) :
    l ≤ qc04Half (l + h) ∧ qc04Half (l + h) ≤ h := by
  have hb := qc04Half_bounds (l + h)
  omega

/-- Every integer in `[l,h]` is within the larger endpoint distance of the
truncating integer midpoint. -/
theorem qc04MaxEndpointRadius_covers (l h x : ℤ) (hlh : l ≤ h)
    (hxlow : l ≤ x) (hxhigh : x ≤ h) :
    |x - qc04Half (l + h)| ≤
      max (qc04Half (l + h) - l) (h - qc04Half (l + h)) := by
  have hv := qc04Midpoint_mem_interval l h hlh
  apply abs_le.mpr
  constructor
  · have hleft : -(max (qc04Half (l + h) - l) (h - qc04Half (l + h))) ≤
        -(qc04Half (l + h) - l) := neg_le_neg (le_max_left _ _)
    have hright : -(qc04Half (l + h) - l) ≤ x - qc04Half (l + h) := by omega
    exact le_trans hleft hright
  · have hleft : x - qc04Half (l + h) ≤ h - qc04Half (l + h) := by omega
    exact le_trans hleft (le_max_right _ _)

/-- Scaled real-interval form of the same enclosure: any real entry within
`[l/Q,h/Q]` is covered by the stored integer midpoint and endpoint radius,
each divided by the positive scale `Q`. -/
theorem qc04ScaledMidpointRadius_covers {α : Type*} [Field α]
    [LinearOrder α] [IsStrictOrderedRing α]
    (l h : ℤ) (Q : α) (hQ : 0 < Q) (x : α)
    (hlh : l ≤ h) (hxlow : (l : α) / Q ≤ x) (hxhigh : x ≤ (h : α) / Q) :
    |x - (qc04Half (l + h) : α) / Q| ≤
      max ((qc04Half (l + h) : α) / Q - (l : α) / Q)
          ((h : α) / Q - (qc04Half (l + h) : α) / Q) := by
  have hv := qc04Midpoint_mem_interval l h hlh
  have hvlow : (l : α) / Q ≤ (qc04Half (l + h) : α) / Q := by
    apply (div_le_div_iff₀ hQ hQ).2
    exact mul_le_mul_of_nonneg_right (by exact_mod_cast hv.1) hQ.le
  have hvhigh : (qc04Half (l + h) : α) / Q ≤ (h : α) / Q := by
    apply (div_le_div_iff₀ hQ hQ).2
    exact mul_le_mul_of_nonneg_right (by exact_mod_cast hv.2) hQ.le
  apply abs_le.mpr
  constructor
  · have hleft : -(max
        ((qc04Half (l + h) : α) / Q - (l : α) / Q)
        ((h : α) / Q - (qc04Half (l + h) : α) / Q)) ≤
          -((qc04Half (l + h) : α) / Q - (l : α) / Q) :=
      neg_le_neg (le_max_left _ _)
    have hright : -((qc04Half (l + h) : α) / Q - (l : α) / Q) ≤
        x - (qc04Half (l + h) : α) / Q := by linarith
    exact le_trans hleft hright
  · have hleft : x - (qc04Half (l + h) : α) / Q ≤
        (h : α) / Q - (qc04Half (l + h) : α) / Q := by linarith
    exact le_trans hleft (le_max_right _ _)

end Zetral

#print axioms Zetral.qc04Half_bounds
#print axioms Zetral.qc04Midpoint_mem_interval
#print axioms Zetral.qc04MaxEndpointRadius_covers
#print axioms Zetral.qc04ScaledMidpointRadius_covers

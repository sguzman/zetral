import Mathlib

/-! Scalar consequences of the trial-space and reciprocal estimates.
    These lemmas do not formalize the spectral theorem, Fourier estimates,
    or Suzuki's operator. The CI build and axiom report must be inspected
    before any machine-verification claim. -/

namespace Zetral

/-- Transfer a positive inverse-eigenvalue error to the reciprocal spectrum. -/
theorem reciprocal_transfer {lam mu err : ℝ}
    (hlam : 0 < lam) (herr : 0 ≤ err)
    (hhalf : err ≤ lam / 2) (hlow : lam - err ≤ mu)
    (hhigh : mu ≤ lam) :
    0 ≤ 1 / mu - 1 / lam ∧
      1 / mu - 1 / lam ≤ 2 * err / lam ^ 2 := by
  have hmu : 0 < mu := by linarith
  have hgap : 0 ≤ lam - mu := sub_nonneg.mpr hhigh
  have hden : 0 < mu * lam := mul_pos hmu hlam
  have htwice : 0 ≤ 2 * mu - lam := by linarith
  have hprod : lam ^ 2 ≤ 2 * (mu * lam) := by
    nlinarith [mul_nonneg htwice hlam.le]
  have hid : 1 / mu - 1 / lam = (lam - mu) / (mu * lam) := by
    field_simp [ne_of_gt hmu, ne_of_gt hlam] <;> ring
  rw [hid]
  constructor
  · exact div_nonneg hgap hden.le
  · apply (div_le_div_iff₀ hden (pow_pos hlam 2)).2
    calc
      (lam - mu) * lam ^ 2 ≤ err * lam ^ 2 :=
        mul_le_mul_of_nonneg_right (by linarith) (sq_nonneg lam)
      _ ≤ 2 * err * (mu * lam) := by
        calc
          err * lam ^ 2 ≤ err * (2 * (mu * lam)) :=
            mul_le_mul_of_nonneg_left hprod herr
          _ = 2 * err * (mu * lam) := by ring

/-- Scalar leakage bound used for the direct trial-vector proof.
    u,v,w represent norms; the geometric estimates are hypotheses. -/
theorem trial_leakage {eps u v w : ℝ}
    (he0 : 0 ≤ eps) (he : eps ≤ 1 / 2)
    (hu : 0 ≤ u) (hw : w ≤ eps * u)
    (hv : (1 - eps) * u ≤ v) :
    w ≤ 2 * eps * v := by
  have hu' : u ≤ 2 * v := by
    have he' : 0 ≤ 1 - 2 * eps := by linarith
    nlinarith [mul_nonneg he' hu]
  calc
    w ≤ eps * u := hw
    _ ≤ eps * (2 * v) := mul_le_mul_of_nonneg_left hu' he0
    _ = 2 * eps * v := by ring

/-- Squared leakage from the same geometric hypotheses. -/
theorem trial_leakage_sq {eps u v w : ℝ}
    (he0 : 0 ≤ eps) (he : eps ≤ 1 / 2)
    (hu : 0 ≤ u) (hw0 : 0 ≤ w) (hw : w ≤ eps * u)
    (hv : (1 - eps) * u ≤ v) :
    w ^ 2 ≤ 4 * eps ^ 2 * v ^ 2 := by
  have h := trial_leakage he0 he hu hw hv
  calc
    w ^ 2 = w * w := by ring
    _ ≤ (2 * eps * v) * (2 * eps * v) :=
      mul_le_mul h h hw0 (le_trans hw0 h)
    _ = 4 * eps ^ 2 * v ^ 2 := by ring

/-- Rayleigh lower bound from an orthogonal decomposition and leakage bound.
    The spectral lower bounds and decomposition are explicit hypotheses. -/
theorem rayleigh_defect {lam lo q r total defect energy : ℝ}
    (hlo : lo ≤ lam) (hdecomp : total = q + r)
    (hdef : r ≤ defect * total)
    (henergy : lam * q + lo * r ≤ energy) :
    (lam - (lam - lo) * defect) * total ≤ energy := by
  calc
    (lam - (lam - lo) * defect) * total =
        lam * total - (lam - lo) * (defect * total) := by ring
    _ ≤ lam * total - (lam - lo) * r :=
      sub_le_sub_left (mul_le_mul_of_nonneg_left hdef (sub_nonneg.mpr hlo)) _
    _ = lam * q + lo * r := by rw [hdecomp]; ring
    _ ≤ energy := henergy

/-- Final scalar consequence once min-max has supplied the Ritz error. -/
theorem direct_ritz_transfer {lam lo mu eps : ℝ}
    (hlam : 0 < lam) (hlo : lo ≤ lam)
    (hhalf : 4 * (lam - lo) * eps ^ 2 ≤ lam / 2)
    (hminmax : lam - 4 * (lam - lo) * eps ^ 2 ≤ mu)
    (hupper : mu ≤ lam) :
    0 ≤ 1 / mu - 1 / lam ∧
      1 / mu - 1 / lam ≤ 8 * (lam - lo) * eps ^ 2 / lam ^ 2 := by
  have he : 0 ≤ 4 * (lam - lo) * eps ^ 2 :=
    mul_nonneg (mul_nonneg (by norm_num) (sub_nonneg.mpr hlo)) (sq_nonneg eps)
  have h := reciprocal_transfer hlam he hhalf hminmax hupper
  refine ⟨h.1, ?_⟩
  calc
    1 / mu - 1 / lam ≤ 2 * (4 * (lam - lo) * eps ^ 2) / lam ^ 2 := h.2
    _ = 8 * (lam - lo) * eps ^ 2 / lam ^ 2 := by ring

end Zetral

#print axioms Zetral.reciprocal_transfer
#print axioms Zetral.trial_leakage
#print axioms Zetral.trial_leakage_sq
#print axioms Zetral.rayleigh_defect
#print axioms Zetral.direct_ritz_transfer

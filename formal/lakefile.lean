import Lake
open Lake DSL

package zetral

require "leanprover-community" / "mathlib" @ git "c44e0c8ee63ca166450922a373c7409c5d26b00b"

@[default_target]
lean_lib Zetral

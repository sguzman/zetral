# Spectral construction — two pathways

This schematic describes Suzuki 2610.32704v1 under RH. It is an explanatory research artifact, not the Situs ontology.

```mermaid
flowchart TD
    P["Prime powers q ≤ exp(2a) + archimedean data"] --> Q["Localized Weil form Q"]
    Q --> A["Form operator A_a on ordinary L²"]
    A --> H["Form Hilbert space H_a = Dom square root A_a"]
    H --> T["Minimal i d/dx on smooth test functions"]
    H --> R["Riesz evaluation vectors at ±i"]
    R --> W["Characteristic function W_a"]
    T --> L["Phase-π self-adjoint extension"]
    W --> Z["Simple paired eigenvalues ±t_a,n"]
    L --> Z
    G["Global Weil completion H_W"] --> S["Weighted sampling space on distinct zero ordinates"]
    S --> D["Global self-adjoint D"]
    D --> C["Compact inverse C"]
    H --> J["Isometric embedding j_a into H_W"]
    J --> B["Compression j_a* C j_a"]
    C --> B
    B --> I["Inverse of compression = phase-π extension"]
    I --> L
    Z --> K["t_a,n decreases to γ_n as a grows"]
    W --> F["Normalized W_a converges to distinct-zero product"]
```

Left path: arithmetic construction requires no supplied zeros. Right path: the proof uses a global spectral representation involving zeros. The form operator A_a and local differentiation extension are different operators. The global limit records distinct ordinates, not zeta-zero multiplicities. See research/reconstruction.md.

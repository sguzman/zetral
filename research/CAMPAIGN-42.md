# Campaign XLII — Boundary-driven Fourier moment acceleration

Opened 2026-11-25 after CME04. The executed length-one benchmark showed a finite-cutoff sign artifact and slow second-moment convergence. Use the actual arithmetic symbol and explicit boundary jumps to remove leading truncation errors, rather than treating a narrow finite matrix enclosure as a continuum certificate.

- BFA01: derive first-moment tail asymptotics for piecewise smooth supported seeds, including the exact prime-shift resonance terms and logarithmic boundary coefficient.
- BFA02: derive quantitative finite-cutoff remainder bounds and test an accelerated first-moment estimate against CME03's independent continuum enclosure.
- BFA03: investigate second-moment boundary singularities and the support projection, with a reproducible bounded test if feasible. Do not replace the physical moment by a full-circle multiplier square.
- BFA04: audit, check related work and assess practical implications or the next mathematically justified direction.

No RH proof, actual negative restored eigenvalue, unverified numerical certificate, expenses, external submission or priority claim. Lead owns BFA01–04; worker scopes unchanged. README unchanged.

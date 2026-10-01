---
"@brandsync/wc": minor
"@brandsync/react": minor
"@brandsync/angular": minor
---

Fix several reported bugs:

- `bs-composer`: `value` prop now reliably syncs with the input (previously stayed stale while typing and could cause typed text to reappear after being cleared); added Enter-to-send (Shift+Enter still inserts a newline); `state` prop now reflects to the host attribute.
- `bs-data-table`: added a select-all checkbox to the header (checked/indeterminate/unchecked based on row selection); added a `clearSelection()` method to reset selection from outside without remounting the table; cell padding is now exposed via `--bs-data-table-cell-padding-x`/`-y` custom properties instead of only being overridable via `::part()`.
- `bs-chip-filter`: `selected` is now a properly controlled prop — clicking emits a change request instead of mutating its own state, so a parent that doesn't accept the change no longer gets out of sync with the chip's display.
- `bs-navigation-drawer` / `bs-navigation-header`: added responsive behavior at narrow viewports (≤768px) — the drawer collapses to its existing icon-only rail treatment, and the header wraps its actions below the logo instead of overlapping.

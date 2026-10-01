# @brandsync/react

## 1.5.4

### Patch Changes

- c842222: No user-facing change -- re-triggering a clean release cycle to verify the direct `claude` CLI invocation (replacing `claude-code-action`, which doesn't support push-triggered events).
- Updated dependencies [c842222]
  - @brandsync/wc@1.5.4

## 1.5.3

### Patch Changes

- 1db8ce3: No user-facing change -- re-triggering a clean release cycle to verify the `claude-code-action` fix (`mode: automation`, needed for its push-triggered CI invocation).
- Updated dependencies [1db8ce3]
  - @brandsync/wc@1.5.3

## 1.5.2

### Patch Changes

- 5a321e2: No user-facing change -- this changeset exists solely to trigger a clean release cycle verifying the CI pipeline fixes (publish.sh's git-tag creation and 409-tolerance) and the new AI story-authoring step for `bs-accordion`.
- Updated dependencies [5a321e2]
  - @brandsync/wc@1.5.2

## 1.5.1

### Patch Changes

- 0726bd9: Fix `bs-accordion` visual issues found after the initial release: hover/pressed/focus-visible background now spans the whole item (header + content together), the trailing caret now sits in a 64px box matching the leading icon's spacing instead of crowding the edge, and a corner-radius seam between the header and content (visible when both are tinted together) is fixed.
- Updated dependencies [0726bd9]
  - @brandsync/wc@1.5.1

## 1.5.0

### Minor Changes

- 7c6b1cf: Add `bs-accordion` component: a collapsible section with an optional leading icon, label, and trailing caret, a controlled `expanded` prop (`bsToggle` event, consumer echoes the change back), `medium`/`large` sizes, and a single-line CSS preview of the body content while collapsed.

### Patch Changes

- Updated dependencies [7c6b1cf]
  - @brandsync/wc@1.5.0

## 1.4.0

### Minor Changes

- e1a540d: Fix several reported bugs:

  - `bs-composer`: `value` prop now reliably syncs with the input (previously stayed stale while typing and could cause typed text to reappear after being cleared); added Enter-to-send (Shift+Enter still inserts a newline); `state` prop now reflects to the host attribute.
  - `bs-data-table`: added a select-all checkbox to the header (checked/indeterminate/unchecked based on row selection); added a `clearSelection()` method to reset selection from outside without remounting the table; cell padding is now exposed via `--bs-data-table-cell-padding-x`/`-y` custom properties instead of only being overridable via `::part()`.
  - `bs-chip-filter`: `selected` is now a properly controlled prop — clicking emits a change request instead of mutating its own state, so a parent that doesn't accept the change no longer gets out of sync with the chip's display.
  - `bs-navigation-drawer` / `bs-navigation-header`: added responsive behavior at narrow viewports (≤768px) — the drawer collapses to its existing icon-only rail treatment, and the header wraps its actions below the logo instead of overlapping.

### Patch Changes

- Updated dependencies [e1a540d]
  - @brandsync/wc@1.4.0

## 1.3.0

### Minor Changes

- ffc919b: Add `bs-progress` (circular progress indicator) and `bs-progress-linear` (linear progress bar) components, each with `determinate`/`indeterminate` states, size variants, and reduced-motion-aware animations.

### Patch Changes

- Updated dependencies [ffc919b]
  - @brandsync/wc@1.3.0

## 1.2.0

### Minor Changes

- a09e85a: Add `bs-toast` component: a transient status message with `info`/`success`/`warning`/`error` states, each with its own icon, a message slot, and a dismiss button.

### Patch Changes

- Updated dependencies [a09e85a]
  - @brandsync/wc@1.2.0

## 1.1.0

### Minor Changes

- ec84fd5: Add the bs-chip component family: bs-chip-filter (selectable toggle chip, optional dropdown caret), bs-chip-input (removable tag/entry chip with a separate remove button, optional avatar/icon), and bs-chip-informative (static, non-interactive status/category chip with color and icon options).

### Patch Changes

- Updated dependencies [ec84fd5]
  - @brandsync/wc@1.1.0

# bs-chip-filter



<!-- Auto Generated Below -->


## Overview

A pill-shaped, selectable toggle used to filter a list or dataset (e.g. a "Filter chip" row
above a table or search results), optionally paired with a leading icon and/or a dropdown caret
that signals it opens a menu of further options.

## When to use
- Letting a user toggle a filter on/off, or open a menu of filter options (pair `dropdown` with
  your own `bs-menu` -- this component only renders the caret affordance, it doesn't manage a
  menu itself).

## When not to use
- A static, non-interactive status/category label -- use `bs-badge` instead.
- A single primary action -- use `bs-button`.

## Properties

| Property    | Attribute    | Description                                                                                                                                                                                                                                        | Type           | Default |
| ----------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------- |
| `ariaLabel` | `aria-label` | Accessible name override. The visible label (default slot) already gives the native button an accessible name, so this is only needed if that text isn't sufficient on its own (e.g. it doesn't convey that activating the chip toggles a filter). | `string`       | `null`  |
| `disabled`  | `disabled`   | Disables the chip: sets the native `disabled` attribute, suppresses hover/focus/pressed styling, and prevents toggling.                                                                                                                            | `boolean`      | `false` |
| `dropdown`  | `dropdown`   | Shows a trailing dropdown caret, signaling this chip opens a menu of further options. Purely a visual affordance -- wire up the actual menu (e.g. `bs-menu`) yourself.                                                                             | `boolean`      | `false` |
| `selected`  | `selected`   | Whether the chip reads as toggled on. Mutable so clicking it toggles directly, and reflected so consumers can target `bs-chip-filter[selected]` via CSS.                                                                                           | `boolean`      | `false` |
| `size`      | `size`       | Sizing scale. Controls the chip's height only -- icon size, gap, and font size stay constant across sizes, matching the Figma spec exactly.                                                                                                        | `"lg" \| "md"` | `'lg'`  |


## Events

| Event      | Description                                                               | Type                   |
| ---------- | ------------------------------------------------------------------------- | ---------------------- |
| `bsChange` | Emitted when `selected` changes via user interaction, with the new value. | `CustomEvent<boolean>` |


## Slots

| Slot     | Description                                       |
| -------- | ------------------------------------------------- |
|          | Default slot: the chip's label content.           |
| `"icon"` | Optional leading icon, rendered before the label. |


## Shadow Parts

| Part      | Description                                                 |
| --------- | ----------------------------------------------------------- |
| `"caret"` | The dropdown caret wrapper element, when `dropdown` is set. |
| `"icon"`  | The icon wrapper element.                                   |
| `"label"` | The text label element.                                     |


## CSS Custom Properties

| Name                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--bs-chip-filter-font-size`            | Aliased to --bs-font-size-sm.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--bs-chip-filter-font-weight`          | Aliased to --bs-font-weight-regular. Color (background/text per selected/hover/focus/pressed/disabled state) comes directly from brandsync-tokens' own pre-built chip token set (--bs-chip-bg-..., --bs-chip-text-..., --bs-chip-border-...) below -- those are shared across the whole bs-chip family, not local to this component, so they're consumed directly rather than re-aliased under a bs-chip-filter-specific name. |
| `--bs-chip-filter-gap`                  | Gap between icon/label/caret. Aliased to --bs-spacing-50.                                                                                                                                                                                                                                                                                                                                                                      |
| `--bs-chip-filter-height-lg`            | Height at size="lg". Aliased to --bs-spacing-400.                                                                                                                                                                                                                                                                                                                                                                              |
| `--bs-chip-filter-height-md`            | Height at size="md". Aliased to --bs-spacing-300.                                                                                                                                                                                                                                                                                                                                                                              |
| `--bs-chip-filter-icon-size`            | Icon/caret glyph size. 16px, matching Figma exactly -- constant across both sizes, only the chip's own height changes.                                                                                                                                                                                                                                                                                                         |
| `--bs-chip-filter-line-height`          | Aliased to --bs-line-height-body-sm.                                                                                                                                                                                                                                                                                                                                                                                           |
| `--bs-chip-filter-padding-x-glyph-side` | Horizontal padding on an edge adjacent to the icon or the caret. Aliased to --bs-spacing-100.                                                                                                                                                                                                                                                                                                                                  |
| `--bs-chip-filter-padding-x-plain-side` | Horizontal padding on a label-only edge, when the opposite edge has a glyph. Aliased to --bs-spacing-150.                                                                                                                                                                                                                                                                                                                      |
| `--bs-chip-filter-padding-x-text-only`  | Horizontal padding on both edges, when neither has a glyph. Aliased to --bs-spacing-200 -- deliberately not the same as --bs-chip-filter-padding-x-plain-side; verified against Figma that a plain-text chip (no icon, no dropdown) uses a bigger value on both sides rather than the smaller one-sided compensating value used when only one edge lacks a glyph.                                                              |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

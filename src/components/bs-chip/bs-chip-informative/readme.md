# bs-chip-informative



<!-- Auto Generated Below -->


## Overview

A pill-shaped, non-interactive label for conveying a category or status at a glance, optionally
paired with a leading icon. Unlike `bs-chip-filter`/`bs-chip-input`, this is purely informational
-- no click/select/remove behavior, no hover/focus/pressed states.

## When to use
- Conveying a category or status inline with other content, with more color options and an
  optional icon than `bs-badge` offers.

## When not to use
- Anything clickable/selectable -- use `bs-chip-filter`.
- A short, fixed status label with no color/icon needs -- `bs-badge` is the simpler choice.

## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                     | Type                                                       | Default     |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |
| `color`    | `color`    | Semantic color. Maps directly to the brandsync-tokens `--bs-chip-bg-*-container`/ `--bs-chip-text-*` sets. Ignored (in favor of the disabled token set) when `disabled` is set -- same override relationship `bs-stepper-step`'s `error`/`disabled` props have. | `"error" \| "info" \| "neutral" \| "success" \| "warning"` | `'neutral'` |
| `disabled` | `disabled` | Overrides `color` with the disabled token set, regardless of its value. Reflected so `:host([disabled])` can apply it in CSS.                                                                                                                                   | `boolean`                                                  | `false`     |
| `size`     | `size`     | Sizing scale. Controls height and font-size/line-height together -- unlike `bs-chip-filter`/`bs-chip-input`, Figma specs a distinct (smaller) font at `size="sm"`, not just a shorter pill.                                                                     | `"lg" \| "md" \| "sm"`                                     | `'lg'`      |


## Slots

| Slot     | Description                             |
| -------- | --------------------------------------- |
|          | Default slot: the chip's label content. |
| `"icon"` | Optional leading icon.                  |


## Shadow Parts

| Part      | Description               |
| --------- | ------------------------- |
| `"icon"`  | The icon wrapper element. |
| `"label"` | The text label element.   |


## CSS Custom Properties

| Name                                               | Description                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--bs-chip-informative-font-size`                  | Aliased to --bs-font-size-sm (size="md"/"lg").                                                                                                                                                                                                                                                                        |
| `--bs-chip-informative-font-size-sm`               | Aliased to --bs-font-size-xs (size="sm" only -- every other size uses --bs-chip-informative-font-size below).                                                                                                                                                                                                         |
| `--bs-chip-informative-font-weight`                | Aliased to --bs-font-weight-regular. Color (background/text per color/disabled) comes directly from brandsync-tokens' own pre-built chip token set below -- shared across the whole bs-chip family, not local to this component, consumed directly rather than re-aliased under a bs-chip-informative-specific name.  |
| `--bs-chip-informative-gap`                        | Gap between icon and label. Aliased to --bs-spacing-50.                                                                                                                                                                                                                                                               |
| `--bs-chip-informative-height-lg`                  | Height at size="lg". Aliased to --bs-spacing-400.                                                                                                                                                                                                                                                                     |
| `--bs-chip-informative-height-md`                  | Height at size="md". Aliased to --bs-spacing-300.                                                                                                                                                                                                                                                                     |
| `--bs-chip-informative-height-sm`                  | Height at size="sm". Aliased to --bs-spacing-250.                                                                                                                                                                                                                                                                     |
| `--bs-chip-informative-icon-size`                  | Icon glyph size. 16px, matching Figma exactly -- constant across all sizes, only the chip's own height/font changes.                                                                                                                                                                                                  |
| `--bs-chip-informative-line-height`                | Aliased to --bs-line-height-body-sm (size="md"/"lg").                                                                                                                                                                                                                                                                 |
| `--bs-chip-informative-line-height-sm`             | Aliased to --bs-line-height-caption-sm (size="sm" only).                                                                                                                                                                                                                                                              |
| `--bs-chip-informative-padding-right-icon-variant` | Right-edge padding specifically when there's a leading icon (the label-only edge in that case). Aliased to --bs-spacing-150.                                                                                                                                                                                          |
| `--bs-chip-informative-padding-x-glyph-side`       | Left-edge padding when there's a leading icon. Aliased to --bs-spacing-100.                                                                                                                                                                                                                                           |
| `--bs-chip-informative-padding-x-plain-side`       | Both edges' padding when there's no leading icon. Aliased to --bs-spacing-200 -- deliberately not the icon variant's own right-edge value (--bs-spacing-150) below; verified against Figma that the no-icon variant uses a bigger value on both sides rather than reusing the icon variant's smaller one-sided value. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

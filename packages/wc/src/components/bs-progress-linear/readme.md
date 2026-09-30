# bs-progress-linear



<!-- Auto Generated Below -->


## Overview

A linear (horizontal) progress indicator -- either a static bar showing a percentage fill
(`type="determinate"`) or a continuously sliding bar signaling in-progress work with no known
completion percentage (`type="indeterminate"`).

## When to use
- Showing the progress of a task with a known, quantifiable completion percentage (`determinate`),
  e.g. a file upload.
- Signaling that work is happening in the background with no meaningful percentage to report
  (`indeterminate`), e.g. while waiting on a network response.

## When not to use
- For a compact, ring-shaped progress indicator -- use `bs-progress` (circular) instead.
- For a percentage that's better expressed as plain text, without the reserved space and visual
  weight of a bar.

## Properties

| Property    | Attribute    | Description                                                                                                                                                                       | Type                               | Default         |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --------------- |
| `showLabel` | `show-label` | Shows the slotted label below the bar. When `false`, or when no content is slotted, the label wrapper isn't rendered at all. Defaults to `true`.                                  | `boolean`                          | `true`          |
| `size`      | `size`       | Bar height: `small` (4px) or `large` (8px).                                                                                                                                       | `"large" \| "small"`               | `'large'`       |
| `type`      | `type`       | `determinate` renders a static fill reflecting `value`; `indeterminate` renders a continuously sliding gradient bar and ignores `value`.                                          | `"determinate" \| "indeterminate"` | `'determinate'` |
| `value`     | `value`      | Progress percentage, `0`-`100`. Only meaningful for `type="determinate"` -- ignored (and never rendered) for `type="indeterminate"`. Out-of-range values are clamped defensively. | `number`                           | `0`             |


## Slots

| Slot | Description                                                                                                                                                                                                                                                |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      | Free-form label content rendered below the bar (e.g. "Uploading..."), gated by `showLabel`. Unlike `bs-progress`'s label, this is not a computed `${value}%` string -- it's consumer-supplied content, per the Figma spec's free-text "Label" placeholder. |


## Shadow Parts

| Part          | Description                                                                            |
| ------------- | -------------------------------------------------------------------------------------- |
| `"container"` | The outer wrapper (bar + optional label).                                              |
| `"fill"`      | The colored progress/sliding fill bar.                                                 |
| `"label"`     | The label wrapper (only rendered when `showLabel` is true and slotted content exists). |
| `"track"`     | The background track bar.                                                              |


## CSS Custom Properties

| Name                                       | Description                                                                                                                                                                     |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--bs-progress-linear-fill`                | Determinate fill / indeterminate comet color. Aliased to --bs-color-primary-default (the same brand-blue accent bs-progress's arc and bs-button's primary variant already use). |
| `--bs-progress-linear-gap`                 | Gap between the bar and the label. Aliased to --bs-spacing-100.                                                                                                                 |
| `--bs-progress-linear-height-lg`           | Bar height, size="large". Fixed at 8px per the Figma spec.                                                                                                                      |
| `--bs-progress-linear-height-sm`           | Bar height, size="small". Fixed at 4px per the Figma spec.                                                                                                                      |
| `--bs-progress-linear-label-color`         | Label text color. Aliased to --bs-text-default.                                                                                                                                 |
| `--bs-progress-linear-label-font-size`     | Label font size (body/md). Aliased to --bs-fontsize-body-md.                                                                                                                    |
| `--bs-progress-linear-label-line-height`   | Label line height (body/md). Aliased to --bs-line-height-body-md.                                                                                                               |
| `--bs-progress-linear-radius`              | Track/fill border-radius (full pill). A fixed 120px, matching the Figma spec's "rounded-full" treatment.                                                                        |
| `--bs-progress-linear-slide-duration`      | Indeterminate comet slide duration. Aliased to --bs-duration-slower if defined by brandsync-tokens, otherwise a plain 1.6s fallback.                                            |
| `--bs-progress-linear-track`               | Track bar background color. Aliased to --bs-surface-container (matches the Figma spec's `--color/surface/container` token exactly).                                             |
| `--bs-progress-linear-transition-duration` | Determinate fill width transition. Aliased to --bs-duration-default if defined by brandsync-tokens, otherwise a plain 0.3s fallback.                                            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

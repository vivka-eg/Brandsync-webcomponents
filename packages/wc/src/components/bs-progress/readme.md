# bs-progress



<!-- Auto Generated Below -->


## Overview

A circular progress indicator -- either a static ring showing a percentage sweep
(`type="determinate"`) or a continuously spinning ring signaling in-progress work with no known
completion percentage (`type="indeterminate"`).

## When to use
- Showing the progress of a task with a known, quantifiable completion percentage (`determinate`).
- Signaling that work is happening in the background with no meaningful percentage to report
  (`indeterminate`), e.g. while waiting on a network response.

## When not to use
- For a horizontal, bar-shaped progress indicator -- this component is a ring, not a bar.
- For a percentage that's better expressed as plain text, without the reserved space and visual
  weight of a ring.

## Properties

| Property      | Attribute      | Description                                                                                                                                                                                                                 | Type                               | Default         |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --------------- |
| `showLabel`   | `show-label`   | Shows the `${value}%` label below the ring. Only takes effect for `type="determinate"` -- `indeterminate` never shows a label regardless of this prop, since there's no percentage to show. Defaults to `true`.             | `boolean`                          | `true`          |
| `size`        | `size`         | Overall diameter: `small` (44px), `medium` (48px), or `large` (64px).                                                                                                                                                       | `"large" \| "medium" \| "small"`   | `'small'`       |
| `strokeWidth` | `stroke-width` | Ring stroke width in px -- `4` or `8`, matching Figma's two stroke-width variants. A number, not the Figma label's literal `"4 px"` string.                                                                                 | `4 \| 8`                           | `4`             |
| `type`        | `type`         | `determinate` renders a static arc sweep reflecting `value` (with an optional percentage label); `indeterminate` renders a continuously spinning ring and never shows a label, since there's no known percentage to report. | `"determinate" \| "indeterminate"` | `'determinate'` |
| `value`       | `value`        | Progress percentage, `0`-`100`. Only meaningful for `type="determinate"` -- ignored (and never rendered) for `type="indeterminate"`. Out-of-range values are clamped defensively.                                           | `number`                           | `0`             |


## Shadow Parts

| Part          | Description                                              |
| ------------- | -------------------------------------------------------- |
| `"arc"`       | The colored progress/spinner arc circle.                 |
| `"container"` | The outer wrapper (ring + optional label).               |
| `"label"`     | The percentage label (`determinate` + `showLabel` only). |
| `"track"`     | The background track circle.                             |


## CSS Custom Properties

| Name                                 | Description                                                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `--bs-progress-arc`                  | Arc/spinner circle color. Aliased to --bs-color-primary-default (the same brand-blue accent bs-button's primary variant uses). |
| `--bs-progress-gap`                  | Gap between the ring and the label. Aliased to --bs-spacing-100.                                                               |
| `--bs-progress-label-color`          | Percentage label text color. Aliased to --bs-color-primary-default.                                                            |
| `--bs-progress-label-font-size-lg`   | Label font size, size="large". Aliased to --bs-fontsize-body-md.                                                               |
| `--bs-progress-label-font-size-sm`   | Label font size, size="small"/"medium". Aliased to --bs-fontsize-caption-md.                                                   |
| `--bs-progress-label-font-weight`    | Label font weight. Aliased to --bs-font-weight-medium.                                                                         |
| `--bs-progress-label-line-height-lg` | Label line height, size="large". Aliased to --bs-line-height-body-md.                                                          |
| `--bs-progress-label-line-height-sm` | Label line height, size="small"/"medium". Aliased to --bs-line-height-caption-md.                                              |
| `--bs-progress-spin-duration`        | Indeterminate spin duration. Aliased to --bs-duration-slower if defined by brandsync-tokens, otherwise a plain 1.4s fallback.  |
| `--bs-progress-track`                | Track circle color (background ring). Aliased to --bs-neutral-200.                                                             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

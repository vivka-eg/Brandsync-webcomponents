# bs-accordion



<!-- Auto Generated Below -->


## Overview

A single collapsible section -- a clickable header (optional leading icon, label, trailing
caret) that reveals or hides a body content area.

This component renders exactly one section. A consumer stacks multiple `bs-accordion` elements
(optionally managing which one(s) are expanded, e.g. "only one open at a time") themselves --
there's no accordion-group wrapper here, matching Figma's component which only specs the single
section, not a group behavior.

## Properties

| Property      | Attribute      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Type                  | Default    |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------- |
| `disabled`    | `disabled`     | Disables the header: suppresses hover/focus/pressed styling, prevents toggling via click or keyboard, and removes it from the tab order.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `boolean`             | `false`    |
| `expanded`    | `expanded`     | Whether the section is expanded. This is the single source of truth for the component's visual state -- a controlled component, like a controlled `<input>`. Clicking (or keyboard-activating) the header never mutates this prop itself; it only emits `bsToggle` with the requested new value. If the consumer doesn't echo the change back via this prop (e.g. some validation rejects it), the rendering stays exactly as `expanded` says, rather than drifting into an internally-tracked truth -- same lesson as bs-chip-filter's `selected` prop. Reflected so consumers can target `bs-accordion[expanded]` via CSS. NOT `mutable: true`. | `boolean`             | `false`    |
| `showIcon`    | `show-icon`    | Shows the leading icon area (default Plus glyph, or the `icon` slot's content). When `false`, no icon box is reserved and the header/body padding tighten to the left edge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `boolean`             | `true`     |
| `showPreview` | `show-preview` | When collapsed, renders the body content truncated to a single line (pure CSS truncation of the same slotted content, not different content) instead of rendering nothing. Has no effect while expanded -- the full content always renders then, regardless of this prop.                                                                                                                                                                                                                                                                                                                                                                         | `boolean`             | `true`     |
| `size`        | `size`         | Sizing scale. Controls the leading icon box's dimensions and the header's vertical padding -- the body content area's padding stays constant across sizes, matching the Figma spec.                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `"large" \| "medium"` | `'medium'` |


## Events

| Event      | Description                                                                                                                                                    | Type                   |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `bsToggle` | Emitted when the header is activated (click, or Enter/Space while focused), with the REQUESTED new expanded value (`!expanded`). Never fires while `disabled`. | `CustomEvent<boolean>` |


## Slots

| Slot      | Description                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
|           | Default slot: the body/content area, shown below the header when expanded (and, unless `showPreview` is `false`, truncated to one line when collapsed). |
| `"icon"`  | Optional leading icon, overriding the default Plus glyph. Only rendered when `showIcon` is `true`.                                                      |
| `"label"` | The header's title text.                                                                                                                                |


## Shadow Parts

| Part          | Description                 |
| ------------- | --------------------------- |
| `"caret"`     | The trailing caret wrapper. |
| `"container"` | The outer wrapper.          |
| `"content"`   | The body content wrapper.   |
| `"header"`    | The clickable header row.   |
| `"icon"`      | The leading icon wrapper.   |
| `"label"`     | The label wrapper.          |


## CSS Custom Properties

| Name                                          | Description                                                                                                                                              |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--bs-accordion-bg-disabled`                  | Header/content background, disabled. Aliased to --bs-surface-action-disabled.                                                                            |
| `--bs-accordion-bg-hover`                     | Header background, hover/active/focus-visible (Figma renders hover and pressed identically). Aliased to --bs-surface-hover.                              |
| `--bs-accordion-content-padding-bottom`       | Body content bottom padding. Aliased to --bs-spacing-150.                                                                                                |
| `--bs-accordion-content-padding-left`         | Body content left padding, Icon=Yes (aligns under the label, past the icon box). Aliased to --bs-spacing-800.                                            |
| `--bs-accordion-content-padding-left-no-icon` | Body content left padding, Icon=No. Aliased to --bs-spacing-200.                                                                                         |
| `--bs-accordion-content-padding-right`        | Body content right padding. Aliased to --bs-spacing-200.                                                                                                 |
| `--bs-accordion-focus-ring`                   | Focus-visible outer ring color. Aliased to --bs-border-neutral-focus.                                                                                    |
| `--bs-accordion-font-size`                    | Label font size. Aliased to --bs-font-size-md.                                                                                                           |
| `--bs-accordion-font-weight`                  | Label font weight. Aliased to --bs-font-weight-semibold.                                                                                                 |
| `--bs-accordion-header-padding-x`             | Header horizontal padding (both edges, Icon=Yes). Aliased to --bs-spacing-200.                                                                           |
| `--bs-accordion-header-padding-y-large`       | Header vertical padding, size="large". Aliased to --bs-spacing-250.                                                                                      |
| `--bs-accordion-header-padding-y-medium`      | Header vertical padding, size="medium". Aliased to --bs-spacing-150.                                                                                     |
| `--bs-accordion-icon-height-medium`           | Leading icon box height, size="medium". Not square -- 48px, no 150-scale token matches exactly so this is set directly in px, matching Figma's own spec. |
| `--bs-accordion-icon-size-large`              | Leading icon box width/height, size="large" (square). Aliased to --bs-spacing-800.                                                                       |
| `--bs-accordion-icon-width-medium`            | Leading icon box width, size="medium". Aliased to --bs-spacing-800.                                                                                      |
| `--bs-accordion-line-height`                  | Label line height. Aliased to --bs-line-height-body-md.                                                                                                  |
| `--bs-accordion-radius`                       | Corner radius of the whole component. Aliased to --bs-border-radius-100.                                                                                 |
| `--bs-accordion-text-default`                 | Label/content color, enabled. Aliased to --bs-text-default.                                                                                              |
| `--bs-accordion-text-disabled`                | Label/content color, disabled. Aliased to --bs-text-on-disabled.                                                                                         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

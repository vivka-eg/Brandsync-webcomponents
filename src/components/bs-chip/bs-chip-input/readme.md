# bs-chip-input



<!-- Auto Generated Below -->


## Overview

A pill-shaped, removable representation of a discrete piece of user-entered data (e.g. a tag,
a selected filter value, an invited email address), optionally paired with a leading icon or
avatar. Unlike `bs-chip-filter`, this is a compound control -- the body toggles `selected`, and
a separate trailing button removes the chip entirely.

## When to use
- Representing one entry in a list the user built themselves (tags, recipients, multi-select
  values) that they need to be able to remove individually.

## When not to use
- A single toggleable filter, with no removal affordance -- use `bs-chip-filter`.
- A static, non-interactive status/category label -- use `bs-badge`.

## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                | Type           | Default |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------- |
| `disabled` | `disabled` | Disables both the body and the remove button, and reflected so `:host([disabled])` can apply the disabled token set (a plain CSS pseudo-class can't target the host itself here, since :host isn't a native form control). | `boolean`      | `false` |
| `selected` | `selected` | Whether the chip reads as toggled on. Mutable so clicking the body toggles directly, and reflected so consumers can target `bs-chip-input[selected]` via CSS.                                                              | `boolean`      | `false` |
| `size`     | `size`     | Sizing scale. Controls the chip's height only -- icon size, gap, and font size stay constant across sizes, matching the Figma spec exactly.                                                                                | `"lg" \| "md"` | `'lg'`  |


## Events

| Event      | Description                                                                                                                                                                                                                                                                                                                                | Type                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| `bsChange` | Emitted when `selected` changes via clicking the body, with the new value.                                                                                                                                                                                                                                                                 | `CustomEvent<boolean>` |
| `bsRemove` | Emitted when the remove button is clicked. No payload -- unlike bs-input's own chip-entry mode (which tracks a `chips: string[]` array internally and can identify which string was removed), a standalone chip doesn't know its own "value" to a consumer; whatever's rendering a list of these already has that context via closure/key. | `CustomEvent<void>`    |


## Slots

| Slot     | Description                                                                                                                                                                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          | Default slot: the chip's label content.                                                                                                                                                                                                                 |
| `"icon"` | Optional leading visual. Defaults to 16px (a plain icon), except a `<bs-avatar size="xs">` specifically keeps its own natural 24px sizing instead -- Figma specs a plain icon and an avatar (with its own existing border ring) at two different sizes. |


## Shadow Parts

| Part       | Description                         |
| ---------- | ----------------------------------- |
| `"body"`   | The button that toggles `selected`. |
| `"icon"`   | The icon wrapper element.           |
| `"label"`  | The text label element.             |
| `"remove"` | The trailing remove button.         |


## CSS Custom Properties

| Name                                   | Description                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--bs-chip-input-font-size`            | Aliased to --bs-font-size-sm.                                                                                                                                                                                                                                                                                                                                                                            |
| `--bs-chip-input-font-weight`          | Aliased to --bs-font-weight-regular. Color (background/text per selected/hover/focus/pressed/disabled state) comes directly from brandsync-tokens' own pre-built chip token set (--bs-chip-bg-..., --bs-chip-text-..., --bs-chip-border-...) below -- shared across the whole bs-chip family, not local to this component, consumed directly rather than re-aliased under a bs-chip-input-specific name. |
| `--bs-chip-input-gap`                  | Gap between icon/label/remove. Aliased to --bs-spacing-50.                                                                                                                                                                                                                                                                                                                                               |
| `--bs-chip-input-height-lg`            | Height at size="lg". Aliased to --bs-spacing-400.                                                                                                                                                                                                                                                                                                                                                        |
| `--bs-chip-input-height-md`            | Height at size="md". Aliased to --bs-spacing-300.                                                                                                                                                                                                                                                                                                                                                        |
| `--bs-chip-input-line-height`          | Aliased to --bs-line-height-body-sm.                                                                                                                                                                                                                                                                                                                                                                     |
| `--bs-chip-input-padding-x-glyph-side` | Horizontal padding on an edge adjacent to a glyph (the icon on the left, or the remove button on the right, which is always present). Aliased to --bs-spacing-100.                                                                                                                                                                                                                                       |
| `--bs-chip-input-padding-x-plain-side` | Left-edge padding when there's no leading icon. Aliased to --bs-spacing-150.                                                                                                                                                                                                                                                                                                                             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

# bs-toast



<!-- Auto Generated Below -->


## Overview

A transient status message for confirming the result of an action (e.g. "Files uploaded
successfully.") -- a state-specific icon, a message, and a close button.

This component only renders the toast itself -- it doesn't manage its own visibility, timing, or
stacking. A consumer (typically a small "toast manager" utility) creates one per message and
removes it from the DOM again, whether on a timer or on `bsDismiss`. Figma's spec doesn't show
auto-dismiss timing at all (it's a static visual spec), so this deliberately doesn't invent one.

## Properties

| Property | Attribute | Description                                                                                                          | Type                                          | Default  |
| -------- | --------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------- |
| `state`  | `state`   | Semantic state. Each state has its own icon and matching container/text tokens -- there is no neutral/default state. | `"error" \| "info" \| "success" \| "warning"` | `'info'` |


## Events

| Event       | Description                                                                                                                                                              | Type                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| `bsDismiss` | Fires when the close button is clicked. This component doesn't remove itself from the DOM -- the consumer is expected to do that (or hide it) in response to this event. | `CustomEvent<void>` |


## Slots

| Slot | Description                     |
| ---- | ------------------------------- |
|      | Default slot: the message text. |


## Shadow Parts

| Part          | Description               |
| ------------- | ------------------------- |
| `"close"`     | The close button.         |
| `"container"` | The outer toast.          |
| `"icon"`      | The leading icon wrapper. |
| `"message"`   | The message text wrapper. |


## CSS Custom Properties

| Name                           | Description                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| `--bs-toast-actions-padding-x` | Right padding of the actions area (the toast's own right edge). Aliased to --bs-spacing-100. |
| `--bs-toast-actions-padding-y` | Top/bottom padding of the actions area. Aliased to --bs-spacing-50.                          |
| `--bs-toast-close-radius`      | Corner radius of the close button. Aliased to --bs-border-radius-100.                        |
| `--bs-toast-content-gap`       | Gap between the icon and the message. Aliased to --bs-spacing-150.                           |
| `--bs-toast-content-padding-x` | Left padding of the content area (the toast's own left edge). Aliased to --bs-spacing-200.   |
| `--bs-toast-content-padding-y` | Top/bottom padding of the content area. Aliased to --bs-spacing-200.                         |
| `--bs-toast-font-size`         | Message font size. Aliased to --bs-font-size-md.                                             |
| `--bs-toast-line-height`       | Message line height. Aliased to --bs-line-height-body-md.                                    |
| `--bs-toast-radius`            | Corner radius of the toast. Aliased to --bs-border-radius-100.                               |
| `--bs-toast-shadow`            | Elevation shadow, since a toast floats above page content. Aliased to --bs-shadow-md.        |
| `--bs-toast-surface-error`     | Toast background, state="error". Aliased to --bs-color-error-container.                      |
| `--bs-toast-surface-info`      | Toast background, state="info". Aliased to --bs-color-info-container.                        |
| `--bs-toast-surface-success`   | Toast background, state="success". Aliased to --bs-color-success-container.                  |
| `--bs-toast-surface-warning`   | Toast background, state="warning". Aliased to --bs-color-warning-container.                  |
| `--bs-toast-text-error`        | Icon/message/close color, state="error". Aliased to --bs-text-error.                         |
| `--bs-toast-text-info`         | Icon/message/close color, state="info". Aliased to --bs-text-info.                           |
| `--bs-toast-text-success`      | Icon/message/close color, state="success". Aliased to --bs-text-success.                     |
| `--bs-toast-text-warning`      | Icon/message/close color, state="warning". Aliased to --bs-text-warning.                     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

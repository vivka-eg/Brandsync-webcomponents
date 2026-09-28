import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';

export type BsChipInputSize = 'md' | 'lg';

/**
 * A pill-shaped, removable representation of a discrete piece of user-entered data (e.g. a tag,
 * a selected filter value, an invited email address), optionally paired with a leading icon or
 * avatar. Unlike `bs-chip-filter`, this is a compound control -- the body toggles `selected`, and
 * a separate trailing button removes the chip entirely.
 *
 * ## When to use
 * - Representing one entry in a list the user built themselves (tags, recipients, multi-select
 *   values) that they need to be able to remove individually.
 *
 * ## When not to use
 * - A single toggleable filter, with no removal affordance -- use `bs-chip-filter`.
 * - A static, non-interactive status/category label -- use `bs-badge`.
 *
 * @slot - Default slot: the chip's label content.
 * @slot icon - Optional leading visual. Defaults to 16px (a plain icon), except a
 *   `<bs-avatar size="xs">` specifically keeps its own natural 24px sizing instead -- Figma specs
 *   a plain icon and an avatar (with its own existing border ring) at two different sizes.
 * @part body - The button that toggles `selected`.
 * @part icon - The icon wrapper element.
 * @part label - The text label element.
 * @part remove - The trailing remove button.
 */
@Component({
  tag: 'bs-chip-input',
  styleUrl: 'bs-chip-input.css',
  // delegatesFocus so calling .focus() on the <bs-chip-input> host reaches the first focusable
  // element inside (the body button) -- see bs-button/bs-switch/bs-input for why. The CSS state
  // styling itself relies on :focus-within (see bs-chip-input.css), not on delegatesFocus's own
  // :focus passthrough, since either the body OR the remove button can hold focus and both need
  // the same whole-pill treatment.
  shadow: { delegatesFocus: true },
})
export class BsChipInput {
  @Element() el: HTMLElement;

  /** Sizing scale. Controls the chip's height only -- icon size, gap, and font size stay
   * constant across sizes, matching the Figma spec exactly. */
  @Prop() size: BsChipInputSize = 'lg';

  /** Whether the chip reads as toggled on. Mutable so clicking the body toggles directly, and
   * reflected so consumers can target `bs-chip-input[selected]` via CSS. */
  @Prop({ mutable: true, reflect: true }) selected = false;

  /** Disables both the body and the remove button, and reflected so `:host([disabled])` can
   * apply the disabled token set (a plain CSS pseudo-class can't target the host itself here,
   * since :host isn't a native form control). */
  @Prop({ reflect: true }) disabled = false;

  /** Tracks whether the `icon` slot has assigned content, so the icon/label gap and left-edge
   * padding only apply when there's actually a leading icon/avatar. */
  @State() hasIcon = false;

  /** The label's current text content, read from the default slot -- used to build the remove
   * button's accessible name ("Remove {label}"), same reasoning as bs-input's identical
   * `Remove ${chip}` pattern for its own inline chip-entry mode. */
  @State() labelText = '';

  /** Emitted when `selected` changes via clicking the body, with the new value. */
  @Event() bsChange: EventEmitter<boolean>;

  /** Emitted when the remove button is clicked. No payload -- unlike bs-input's own chip-entry
   * mode (which tracks a `chips: string[]` array internally and can identify which string was
   * removed), a standalone chip doesn't know its own "value" to a consumer; whatever's rendering
   * a list of these already has that context via closure/key. */
  @Event() bsRemove: EventEmitter<void>;

  componentWillLoad() {
    this.hasIcon = this.hasSlottedContent('icon');
    this.labelText = this.getLabelText();
  }

  private hasSlottedContent(slotName: string): boolean {
    return Array.from(this.el.childNodes).some(node => node.nodeType === Node.ELEMENT_NODE && (node as Element).getAttribute('slot') === slotName);
  }

  private getLabelText(): string {
    return Array.from(this.el.childNodes)
      .filter(node => !(node.nodeType === Node.ELEMENT_NODE && (node as Element).hasAttribute('slot')))
      .map(node => node.textContent)
      .join('')
      .trim();
  }

  private onIconSlotchange = (ev: Event) => {
    this.hasIcon = (ev.target as HTMLSlotElement).assignedNodes().length > 0;
  };

  private onLabelSlotchange = () => {
    this.labelText = this.getLabelText();
  };

  private onBodyClick = () => {
    this.selected = !this.selected;
    this.bsChange.emit(this.selected);
  };

  private onRemoveClick = () => {
    this.bsRemove.emit();
  };

  render() {
    const paddingVariant = this.hasIcon ? 'icon' : 'text';

    return (
      <Host class={`bs-chip-input bs-chip-input--${this.size} bs-chip-input--${paddingVariant}`}>
        <button type="button" part="body" class="bs-chip-input__body" disabled={this.disabled} aria-pressed={String(this.selected)} onClick={this.onBodyClick}>
          <span part="icon" class={`bs-chip-input__icon ${this.hasIcon ? 'bs-chip-input__icon--visible' : ''}`}>
            <slot name="icon" onSlotchange={this.onIconSlotchange}></slot>
          </span>
          <span part="label" class="bs-chip-input__label">
            <slot onSlotchange={this.onLabelSlotchange}></slot>
          </span>
        </button>
        <button type="button" part="remove" class="bs-chip-input__remove" disabled={this.disabled} aria-label={`Remove ${this.labelText}`} onClick={this.onRemoveClick}>
          <CloseIcon />
        </button>
      </Host>
    );
  }
}

// Same icon already established for this exact purpose in bs-dialog -- reused verbatim rather
// than pulling in Figma's own X asset, per this library's existing icon for this purpose.
const CloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12.5 3.5L3.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.5 12.5L3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

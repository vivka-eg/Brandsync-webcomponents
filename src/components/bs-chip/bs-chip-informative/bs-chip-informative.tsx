import { Component, Element, Host, Prop, State, h } from '@stencil/core';

export type BsChipInformativeColor = 'neutral' | 'warning' | 'success' | 'info' | 'error';
export type BsChipInformativeSize = 'sm' | 'md' | 'lg';

/**
 * A pill-shaped, non-interactive label for conveying a category or status at a glance, optionally
 * paired with a leading icon. Unlike `bs-chip-filter`/`bs-chip-input`, this is purely informational
 * -- no click/select/remove behavior, no hover/focus/pressed states.
 *
 * ## When to use
 * - Conveying a category or status inline with other content, with more color options and an
 *   optional icon than `bs-badge` offers.
 *
 * ## When not to use
 * - Anything clickable/selectable -- use `bs-chip-filter`.
 * - A short, fixed status label with no color/icon needs -- `bs-badge` is the simpler choice.
 *
 * @slot - Default slot: the chip's label content.
 * @slot icon - Optional leading icon.
 * @part icon - The icon wrapper element.
 * @part label - The text label element.
 */
@Component({
  tag: 'bs-chip-informative',
  styleUrl: 'bs-chip-informative.css',
  shadow: true,
})
export class BsChipInformative {
  @Element() el: HTMLElement;

  /** Semantic color. Maps directly to the brandsync-tokens `--bs-chip-bg-*-container`/
   * `--bs-chip-text-*` sets. Ignored (in favor of the disabled token set) when `disabled` is
   * set -- same override relationship `bs-stepper-step`'s `error`/`disabled` props have. */
  @Prop() color: BsChipInformativeColor = 'neutral';

  /** Sizing scale. Controls height and font-size/line-height together -- unlike
   * `bs-chip-filter`/`bs-chip-input`, Figma specs a distinct (smaller) font at `size="sm"`, not
   * just a shorter pill. */
  @Prop() size: BsChipInformativeSize = 'lg';

  /** Overrides `color` with the disabled token set, regardless of its value. Reflected so
   * `:host([disabled])` can apply it in CSS. */
  @Prop({ reflect: true }) disabled = false;

  /** Tracks whether the `icon` slot has assigned content, so the icon/label gap and left-edge
   * padding only apply when there's actually a leading icon. */
  @State() hasIcon = false;

  componentWillLoad() {
    this.hasIcon = this.hasSlottedContent('icon');
  }

  private hasSlottedContent(slotName: string): boolean {
    return Array.from(this.el.childNodes).some(node => node.nodeType === Node.ELEMENT_NODE && (node as Element).getAttribute('slot') === slotName);
  }

  private onIconSlotchange = (ev: Event) => {
    this.hasIcon = (ev.target as HTMLSlotElement).assignedNodes().length > 0;
  };

  render() {
    const paddingVariant = this.hasIcon ? 'icon' : 'text';

    return (
      <Host class={`bs-chip-informative bs-chip-informative--${this.color} bs-chip-informative--${this.size} bs-chip-informative--${paddingVariant}`}>
        <span part="icon" class={`bs-chip-informative__icon ${this.hasIcon ? 'bs-chip-informative__icon--visible' : ''}`}>
          <slot name="icon" onSlotchange={this.onIconSlotchange}></slot>
        </span>
        <span part="label" class="bs-chip-informative__label">
          <slot></slot>
        </span>
      </Host>
    );
  }
}

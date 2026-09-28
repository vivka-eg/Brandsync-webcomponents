import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core';

export type BsChipFilterSize = 'md' | 'lg';

/**
 * A pill-shaped, selectable toggle used to filter a list or dataset (e.g. a "Filter chip" row
 * above a table or search results), optionally paired with a leading icon and/or a dropdown caret
 * that signals it opens a menu of further options.
 *
 * ## When to use
 * - Letting a user toggle a filter on/off, or open a menu of filter options (pair `dropdown` with
 *   your own `bs-menu` -- this component only renders the caret affordance, it doesn't manage a
 *   menu itself).
 *
 * ## When not to use
 * - A static, non-interactive status/category label -- use `bs-badge` instead.
 * - A single primary action -- use `bs-button`.
 *
 * @slot - Default slot: the chip's label content.
 * @slot icon - Optional leading icon, rendered before the label.
 * @part icon - The icon wrapper element.
 * @part label - The text label element.
 * @part caret - The dropdown caret wrapper element, when `dropdown` is set.
 */
@Component({
  tag: 'bs-chip-filter',
  styleUrl: 'bs-chip-filter.css',
  // delegatesFocus so calling .focus() on the <bs-chip-filter> host reaches the native button
  // inside -- see bs-button/bs-switch for why.
  shadow: { delegatesFocus: true },
})
export class BsChipFilter {
  @Element() el: HTMLElement;

  /** Sizing scale. Controls the chip's height only -- icon size, gap, and font size stay
   * constant across sizes, matching the Figma spec exactly. */
  @Prop() size: BsChipFilterSize = 'lg';

  /** Whether the chip reads as toggled on. Mutable so clicking it toggles directly, and
   * reflected so consumers can target `bs-chip-filter[selected]` via CSS. */
  @Prop({ mutable: true, reflect: true }) selected = false;

  /** Shows a trailing dropdown caret, signaling this chip opens a menu of further options.
   * Purely a visual affordance -- wire up the actual menu (e.g. `bs-menu`) yourself. */
  @Prop() dropdown = false;

  /** Disables the chip: sets the native `disabled` attribute, suppresses hover/focus/pressed
   * styling, and prevents toggling. */
  @Prop() disabled = false;

  /**
   * Accessible name override. The visible label (default slot) already gives the native button
   * an accessible name, so this is only needed if that text isn't sufficient on its own (e.g. it
   * doesn't convey that activating the chip toggles a filter).
   */
  @Prop() ariaLabel: string | null = null;

  /** Tracks whether the `icon` slot has assigned content, so the icon/label gap only applies
   * when there's actually a leading icon. */
  @State() hasIcon = false;

  /** Emitted when `selected` changes via user interaction, with the new value. */
  @Event() bsChange: EventEmitter<boolean>;

  /** Same reasoning as bs-button's identical method: computes the initial state directly from
   * the host's light DOM children, since a slot that starts (and stays) empty never fires
   * `slotchange`. */
  componentWillLoad() {
    this.hasIcon = this.hasSlottedContent('icon');
  }

  private hasSlottedContent(slotName: string): boolean {
    return Array.from(this.el.childNodes).some(node => node.nodeType === Node.ELEMENT_NODE && (node as Element).getAttribute('slot') === slotName);
  }

  private onIconSlotchange = (ev: Event) => {
    this.hasIcon = (ev.target as HTMLSlotElement).assignedNodes().length > 0;
  };

  private onClick = () => {
    this.selected = !this.selected;
    this.bsChange.emit(this.selected);
  };

  render() {
    // Matches the four Icon x Dropdown combinations verified against Figma (node 1905:9151):
    // whichever edge is adjacent to a glyph (icon and/or caret) gets tighter padding, and a
    // label-only edge gets more -- except when NEITHER edge has a glyph, where both edges use a
    // third, larger value rather than the label-only one (see bs-chip-filter.css's own comment).
    const paddingVariant = this.hasIcon && this.dropdown ? 'icon-dropdown' : this.hasIcon ? 'icon-only' : this.dropdown ? 'dropdown-only' : 'text-only';

    return (
      <button
        type="button"
        class={`bs-chip-filter bs-chip-filter--${this.size} bs-chip-filter--${paddingVariant} ${this.selected ? 'bs-chip-filter--selected' : ''}`}
        disabled={this.disabled}
        aria-pressed={String(this.selected)}
        aria-label={this.ariaLabel}
        onClick={this.onClick}
      >
        <span part="icon" class={`bs-chip-filter__icon ${this.hasIcon ? 'bs-chip-filter__icon--visible' : ''}`}>
          <slot name="icon" onSlotchange={this.onIconSlotchange}></slot>
        </span>
        <span part="label" class="bs-chip-filter__label">
          <slot></slot>
        </span>
        {this.dropdown && (
          <span part="caret" class="bs-chip-filter__caret" aria-hidden="true">
            <ChevronDownIcon />
          </span>
        )}
      </button>
    );
  }
}

// Same icon already established for this exact "expand/collapse" affordance in
// bs-navigation-drawer-item -- reused verbatim rather than pulling in Figma's own CaretDown
// asset, per this library's existing icon for this purpose.
const ChevronDownIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

export type BsAccordionSize = 'medium' | 'large';

/**
 * A single collapsible section -- a clickable header (optional leading icon, label, trailing
 * caret) that reveals or hides a body content area.
 *
 * This component renders exactly one section. A consumer stacks multiple `bs-accordion` elements
 * (optionally managing which one(s) are expanded, e.g. "only one open at a time") themselves --
 * there's no accordion-group wrapper here, matching Figma's component which only specs the single
 * section, not a group behavior.
 *
 * @slot - Default slot: the body/content area, shown below the header when expanded (and, unless
 * `showPreview` is `false`, truncated to one line when collapsed).
 * @slot label - The header's title text.
 * @slot icon - Optional leading icon, overriding the default Plus glyph. Only rendered when
 * `showIcon` is `true`.
 * @part container - The outer wrapper.
 * @part header - The clickable header row.
 * @part icon - The leading icon wrapper.
 * @part label - The label wrapper.
 * @part caret - The trailing caret wrapper.
 * @part content - The body content wrapper.
 */
@Component({
  tag: 'bs-accordion',
  styleUrl: 'bs-accordion.css',
  shadow: true,
})
export class BsAccordion {
  /** Whether the section is expanded. This is the single source of truth for the component's
   * visual state -- a controlled component, like a controlled `<input>`. Clicking (or
   * keyboard-activating) the header never mutates this prop itself; it only emits `bsToggle` with
   * the requested new value. If the consumer doesn't echo the change back via this prop (e.g.
   * some validation rejects it), the rendering stays exactly as `expanded` says, rather than
   * drifting into an internally-tracked truth -- same lesson as bs-chip-filter's `selected` prop.
   * Reflected so consumers can target `bs-accordion[expanded]` via CSS. NOT `mutable: true`. */
  @Prop({ reflect: true }) expanded = false;

  /** Sizing scale. Controls the leading icon box's dimensions and the header's vertical padding --
   * the body content area's padding stays constant across sizes, matching the Figma spec. */
  @Prop() size: BsAccordionSize = 'medium';

  /** Disables the header: suppresses hover/focus/pressed styling, prevents toggling via click or
   * keyboard, and removes it from the tab order. */
  @Prop() disabled = false;

  /** Shows the leading icon area (default Plus glyph, or the `icon` slot's content). When
   * `false`, no icon box is reserved and the header/body padding tighten to the left edge. */
  @Prop() showIcon = true;

  /** When collapsed, renders the body content truncated to a single line (pure CSS truncation of
   * the same slotted content, not different content) instead of rendering nothing. Has no effect
   * while expanded -- the full content always renders then, regardless of this prop. */
  @Prop() showPreview = true;

  /** Emitted when the header is activated (click, or Enter/Space while focused), with the
   * REQUESTED new expanded value (`!expanded`). Never fires while `disabled`. */
  @Event() bsToggle: EventEmitter<boolean>;

  private onActivate = () => {
    if (this.disabled) return;
    this.bsToggle.emit(!this.expanded);
  };

  render() {
    // A native <button> wraps the whole header row (icon + label + caret) rather than a
    // `<div role="button">`: it gets click, keyboard activation (Enter/Space), focus-visible
    // styling, and `disabled` semantics (not focusable, no events) for free, and flexbox handles
    // laying out its children as easily as a <div>'s -- no layout reason to hand-roll any of that.
    return (
      <div part="container" class={`bs-accordion bs-accordion--${this.size} ${this.disabled ? 'bs-accordion--disabled' : ''}`}>
        <button
          type="button"
          part="header"
          class={`bs-accordion__header bs-accordion__header--${this.size} ${this.showIcon ? '' : 'bs-accordion__header--no-icon'}`}
          disabled={this.disabled}
          aria-expanded={String(this.expanded)}
          onClick={this.onActivate}
        >
          {this.showIcon && (
            <span part="icon" class={`bs-accordion__icon bs-accordion__icon--${this.size}`} aria-hidden="true">
              <slot name="icon">
                <PlusIcon />
              </slot>
            </span>
          )}
          <span part="label" class="bs-accordion__label">
            <slot name="label"></slot>
          </span>
          <span part="caret" class="bs-accordion__caret" aria-hidden="true">
            {this.expanded ? <CaretUpIcon /> : <CaretDownIcon />}
          </span>
        </button>
        {(this.expanded || this.showPreview) && (
          <div
            part="content"
            class={`bs-accordion__content ${this.showIcon ? '' : 'bs-accordion__content--no-icon'} ${this.expanded ? 'bs-accordion__content--expanded' : 'bs-accordion__content--collapsed'}`}
          >
            <slot></slot>
          </div>
        )}
      </div>
    );
  }
}

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 5V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5 12H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const CaretDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 9.75L12 15.75L18 9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const CaretUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 14.25L12 8.25L18 14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

import { Component, Element, Prop, State, h } from '@stencil/core';

export type BsProgressLinearType = 'determinate' | 'indeterminate';
export type BsProgressLinearSize = 'small' | 'large';

/**
 * A linear (horizontal) progress indicator -- either a static bar showing a percentage fill
 * (`type="determinate"`) or a continuously sliding bar signaling in-progress work with no known
 * completion percentage (`type="indeterminate"`).
 *
 * ## When to use
 * - Showing the progress of a task with a known, quantifiable completion percentage (`determinate`),
 *   e.g. a file upload.
 * - Signaling that work is happening in the background with no meaningful percentage to report
 *   (`indeterminate`), e.g. while waiting on a network response.
 *
 * ## When not to use
 * - For a compact, ring-shaped progress indicator -- use `bs-progress` (circular) instead.
 * - For a percentage that's better expressed as plain text, without the reserved space and visual
 *   weight of a bar.
 *
 * @slot - Free-form label content rendered below the bar (e.g. "Uploading..."), gated by
 *   `showLabel`. Unlike `bs-progress`'s label, this is not a computed `${value}%` string -- it's
 *   consumer-supplied content, per the Figma spec's free-text "Label" placeholder.
 * @part container - The outer wrapper (bar + optional label).
 * @part track - The background track bar.
 * @part fill - The colored progress/sliding fill bar.
 * @part label - The label wrapper (only rendered when `showLabel` is true and slotted content exists).
 */
@Component({
  tag: 'bs-progress-linear',
  styleUrl: 'bs-progress-linear.css',
  shadow: true,
})
export class BsProgressLinear {
  @Element() el!: HTMLElement;

  /** Whether the default slot currently has any real (non-whitespace) content -- the label
   * wrapper is only rendered when `showLabel` is true AND slotted content exists, so an empty
   * label never reserves visual space/line-height for nothing. Recomputed on `slotchange`. */
  @State() private hasLabelContent = false;

  /** `determinate` renders a static fill reflecting `value`; `indeterminate` renders a
   * continuously sliding gradient bar and ignores `value`. */
  @Prop() type: BsProgressLinearType = 'determinate';

  /** Bar height: `small` (4px) or `large` (8px). */
  @Prop() size: BsProgressLinearSize = 'large';

  /** Progress percentage, `0`-`100`. Only meaningful for `type="determinate"` -- ignored (and
   * never rendered) for `type="indeterminate"`. Out-of-range values are clamped defensively. */
  @Prop() value = 0;

  /** Shows the slotted label below the bar. When `false`, or when no content is slotted, the
   * label wrapper isn't rendered at all. Defaults to `true`. */
  @Prop() showLabel = true;

  private get clampedValue(): number {
    return Math.min(100, Math.max(0, this.value));
  }

  render() {
    const isDeterminate = this.type === 'determinate';
    const value = this.clampedValue;

    return (
      <div part="container" class="bs-progress-linear">
        <div
          part="track"
          class={`bs-progress-linear__track bs-progress-linear__track--${this.size}`}
          role="progressbar"
          // Determinate: standard progressbar-with-a-known-value pattern (aria-valuenow/min/max).
          // Indeterminate: aria-valuenow is intentionally omitted (there is no known percentage to
          // report) and aria-busy="true" signals ongoing work instead -- the standard
          // progressbar-without-a-known-value pattern, rather than e.g. faking a 0 value.
          aria-valuemin={isDeterminate ? '0' : undefined}
          aria-valuemax={isDeterminate ? '100' : undefined}
          aria-valuenow={isDeterminate ? String(value) : undefined}
          aria-busy={isDeterminate ? undefined : 'true'}
        >
          {isDeterminate ? (
            <div part="fill" class="bs-progress-linear__fill" style={{ width: `${value}%` }}></div>
          ) : (
            // Figma's indeterminate bar is a soft "comet" gradient segment (transparent -> blue ->
            // transparent) sliding left-to-right across the track's full width in a loop -- the
            // same fade concept as bs-progress's indeterminate ring's conic-gradient comet tail,
            // but along a straight line via a linear-gradient + `transform: translateX(...)`
            // keyframe animation instead of a rotating conic-gradient.
            <div part="fill" class="bs-progress-linear__fill bs-progress-linear__fill--indeterminate"></div>
          )}
        </div>
        {this.showLabel && this.hasLabelContent && (
          <span part="label" class="bs-progress-linear__label">
            <slot />
          </span>
        )}
      </div>
    );
  }

  // The default slot's assigned content lives in the host's light DOM regardless of whether a
  // <slot> is currently rendered in the shadow tree, so this can be computed directly from the
  // host's childNodes -- no need to render an always-present hidden <slot> just to observe it.
  componentWillLoad() {
    this.updateLabelVisibility();
    this.mutationObserver = new MutationObserver(() => this.updateLabelVisibility());
    this.mutationObserver.observe(this.el, { childList: true, characterData: true, subtree: true });
  }

  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }

  private mutationObserver?: MutationObserver;

  private updateLabelVisibility() {
    this.hasLabelContent = Array.from(this.el.childNodes).some(node => {
      if (node.nodeType === Node.TEXT_NODE) return (node.textContent ?? '').trim().length > 0;
      if (node.nodeType === Node.ELEMENT_NODE) return true;
      return false;
    });
  }
}

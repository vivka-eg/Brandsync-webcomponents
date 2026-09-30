import { Component, Prop, h } from '@stencil/core';

export type BsProgressType = 'determinate' | 'indeterminate';
export type BsProgressSize = 'small' | 'medium' | 'large';
export type BsProgressStrokeWidth = 4 | 8;

// Diameter in px per `size` -- matches the Figma spec's three fixed sizes exactly.
const DIAMETERS: Record<BsProgressSize, number> = {
  small: 44,
  medium: 48,
  large: 64,
};

// How much of the ring the indeterminate sweep covers before fading back to transparent -- the
// remainder (to 360deg) is the visible "gap" in the ring. Matches the Figma mock's proportions.
const INDETERMINATE_SWEEP_DEGREES = 300;

/**
 * A circular progress indicator -- either a static ring showing a percentage sweep
 * (`type="determinate"`) or a continuously spinning ring signaling in-progress work with no known
 * completion percentage (`type="indeterminate"`).
 *
 * ## When to use
 * - Showing the progress of a task with a known, quantifiable completion percentage (`determinate`).
 * - Signaling that work is happening in the background with no meaningful percentage to report
 *   (`indeterminate`), e.g. while waiting on a network response.
 *
 * ## When not to use
 * - For a horizontal, bar-shaped progress indicator -- this component is a ring, not a bar.
 * - For a percentage that's better expressed as plain text, without the reserved space and visual
 *   weight of a ring.
 *
 * @part container - The outer wrapper (ring + optional label).
 * @part track - The background track circle.
 * @part arc - The colored progress/spinner arc circle.
 * @part label - The percentage label (`determinate` + `showLabel` only).
 */
@Component({
  tag: 'bs-progress',
  styleUrl: 'bs-progress.css',
  shadow: true,
})
export class BsProgress {
  /** `determinate` renders a static arc sweep reflecting `value` (with an optional percentage
   * label); `indeterminate` renders a continuously spinning ring and never shows a label, since
   * there's no known percentage to report. */
  @Prop() type: BsProgressType = 'determinate';

  /** Overall diameter: `small` (44px), `medium` (48px), or `large` (64px). */
  @Prop() size: BsProgressSize = 'small';

  /** Ring stroke width in px -- `4` or `8`, matching Figma's two stroke-width variants. A number,
   * not the Figma label's literal `"4 px"` string. */
  @Prop() strokeWidth: BsProgressStrokeWidth = 4;

  /** Progress percentage, `0`-`100`. Only meaningful for `type="determinate"` -- ignored (and
   * never rendered) for `type="indeterminate"`. Out-of-range values are clamped defensively. */
  @Prop() value = 0;

  /** Shows the `${value}%` label below the ring. Only takes effect for `type="determinate"` --
   * `indeterminate` never shows a label regardless of this prop, since there's no percentage to
   * show. Defaults to `true`. */
  @Prop() showLabel = true;

  private get clampedValue(): number {
    return Math.min(100, Math.max(0, this.value));
  }

  private get diameter(): number {
    return DIAMETERS[this.size];
  }

  private get radius(): number {
    return (this.diameter - this.strokeWidth) / 2;
  }

  private get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  render() {
    const diameter = this.diameter;
    const radius = this.radius;
    const circumference = this.circumference;
    const isDeterminate = this.type === 'determinate';
    const value = this.clampedValue;
    const dashOffset = circumference * (1 - value / 100);

    return (
      <div part="container" class="bs-progress">
        <div
          class="bs-progress__box"
          style={{ width: `${diameter}px`, height: `${diameter}px` }}
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
            <svg class="bs-progress__ring" width={diameter} height={diameter} viewBox={`0 0 ${diameter} ${diameter}`}>
              <circle
                part="track"
                class="bs-progress__track"
                cx={diameter / 2}
                cy={diameter / 2}
                r={radius}
                stroke-width={this.strokeWidth}
                fill="none"
              />
              <circle
                part="arc"
                class="bs-progress__arc"
                cx={diameter / 2}
                cy={diameter / 2}
                r={radius}
                stroke-width={this.strokeWidth}
                fill="none"
                stroke-linecap="round"
                stroke-dasharray={circumference}
                stroke-dashoffset={dashOffset}
              />
            </svg>
          ) : (
            // Figma's indeterminate ring is a fading "comet tail" (transparent -> solid color),
            // not a flat-colored partial arc -- SVG has no angular/conic gradient primitive, so a
            // CSS conic-gradient (color varying by angle) + a radial-gradient mask (carving the
            // gradient disc down to a ring of exactly `strokeWidth`) is used instead of the
            // stroke-dasharray technique the determinate ring uses.
            <div
              part="arc"
              class="bs-progress__spinner"
              style={{
                '--bs-progress-spinner-stroke-width': `${this.strokeWidth}px`,
                '--bs-progress-spinner-sweep': `${INDETERMINATE_SWEEP_DEGREES}deg`,
              }}
            ></div>
          )}
        </div>
        {isDeterminate && this.showLabel && (
          <span part="label" class={`bs-progress__label bs-progress__label--${this.size}`}>
            {value}%
          </span>
        )}
      </div>
    );
  }
}

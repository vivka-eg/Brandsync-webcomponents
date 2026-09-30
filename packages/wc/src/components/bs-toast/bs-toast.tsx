import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

export type BsToastState = 'info' | 'success' | 'warning' | 'error';

/**
 * A transient status message for confirming the result of an action (e.g. "Files uploaded
 * successfully.") -- a state-specific icon, a message, and a close button.
 *
 * This component only renders the toast itself -- it doesn't manage its own visibility, timing, or
 * stacking. A consumer (typically a small "toast manager" utility) creates one per message and
 * removes it from the DOM again, whether on a timer or on `bsDismiss`. Figma's spec doesn't show
 * auto-dismiss timing at all (it's a static visual spec), so this deliberately doesn't invent one.
 *
 * @slot - Default slot: the message text.
 * @part container - The outer toast.
 * @part icon - The leading icon wrapper.
 * @part message - The message text wrapper.
 * @part close - The close button.
 */
@Component({
  tag: 'bs-toast',
  styleUrl: 'bs-toast.css',
  shadow: true,
})
export class BsToast {
  /** Semantic state. Each state has its own icon and matching container/text tokens -- there is
   * no neutral/default state. */
  @Prop() state: BsToastState = 'info';

  /** Fires when the close button is clicked. This component doesn't remove itself from the DOM --
   * the consumer is expected to do that (or hide it) in response to this event. */
  @Event() bsDismiss: EventEmitter<void>;

  private onDismiss = () => {
    this.bsDismiss.emit();
  };

  render() {
    return (
      <div
        part="container"
        class={`bs-toast bs-toast--${this.state}`}
        role="status"
        // Errors interrupt (assertive); everything else is announced politely without cutting off
        // whatever the screen reader is already saying -- standard toast a11y convention, not
        // something Figma's static visual spec addresses one way or the other.
        aria-live={this.state === 'error' ? 'assertive' : 'polite'}
      >
        <div class="bs-toast__content">
          <span part="icon" class="bs-toast__icon" aria-hidden="true">
            <StateIcon state={this.state} />
          </span>
          <span part="message" class="bs-toast__message">
            <slot></slot>
          </span>
        </div>
        <div class="bs-toast__actions">
          <button part="close" type="button" class="bs-toast__close" aria-label="Dismiss" onClick={this.onDismiss}>
            <CloseIcon />
          </button>
        </div>
      </div>
    );
  }
}

const StateIcon = ({ state }: { state: BsToastState }) => {
  switch (state) {
    case 'success':
      return <CheckCircleIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'error':
      return <XCircleIcon />;
    case 'info':
    default:
      return <InfoIcon />;
  }
};

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M12 11V16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 8.25V7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8.25 12.75L10.5 15L15.75 9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const WarningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M10.4384 4.42212C11.1155 3.22528 12.8845 3.22528 13.5616 4.42212L20.6023 16.8508C21.2627 18.0182 20.4022 19.5 19.0407 19.5H4.95933C3.5978 19.5 2.73734 18.0182 3.39773 16.8508L10.4384 4.42212Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 16.25V16.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const XCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9.75 9.75L14.25 14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.25 9.75L9.75 14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18.75 5.25L5.25 18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.75 18.75L5.25 5.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

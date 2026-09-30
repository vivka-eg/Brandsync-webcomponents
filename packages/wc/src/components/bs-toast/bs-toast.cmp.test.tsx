import { render, h, describe, it, expect } from '@stencil/vitest';

describe('bs-toast', () => {
  it('defaults to the "info" state', async () => {
    const { root } = await render(<bs-toast>Files uploaded successfully.</bs-toast>);
    const container = root.shadowRoot.querySelector('[part="container"]');
    expect(container).toHaveClass('bs-toast--info');
  });

  (['info', 'success', 'warning', 'error'] as const).forEach(state => {
    it(`applies the "${state}" state class`, async () => {
      const { root } = await render(<bs-toast state={state}>Message</bs-toast>);
      const container = root.shadowRoot.querySelector('[part="container"]');
      expect(container).toHaveClass(`bs-toast--${state}`);
    });
  });

  it('renders the slotted message', async () => {
    const { root } = await render(<bs-toast>Files uploaded successfully.</bs-toast>);
    expect(root).toHaveTextContent('Files uploaded successfully.');
  });

  describe('icon per state', () => {
    it('renders an icon for the info state', async () => {
      const { root } = await render(<bs-toast state="info">Message</bs-toast>);
      const icon = root.shadowRoot.querySelector('[part="icon"]');
      expect(icon.querySelector('svg')).not.toBeNull();
    });

    it('renders a different icon markup per state', async () => {
      const renders = await Promise.all(
        (['info', 'success', 'warning', 'error'] as const).map(async state => {
          const { root } = await render(<bs-toast state={state}>Message</bs-toast>);
          return root.shadowRoot.querySelector('[part="icon"]').innerHTML;
        }),
      );
      expect(new Set(renders).size).toBe(renders.length);
    });
  });

  describe('close button', () => {
    it('always renders a close button with an accessible name', async () => {
      const { root } = await render(<bs-toast>Message</bs-toast>);
      const close = root.shadowRoot.querySelector('[part="close"]');
      expect(close).not.toBeNull();
      expect(close).toEqualAttribute('aria-label', 'Dismiss');
    });

    it('emits bsDismiss when the close button is clicked', async () => {
      const { root, spyOnEvent } = await render(<bs-toast>Message</bs-toast>);
      const dismissSpy = spyOnEvent('bsDismiss');
      (root.shadowRoot.querySelector('[part="close"]') as HTMLButtonElement).click();
      expect(dismissSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('aria-live', () => {
    it('uses aria-live="polite" for non-error states', async () => {
      const { root } = await render(<bs-toast state="success">Message</bs-toast>);
      const container = root.shadowRoot.querySelector('[part="container"]');
      expect(container).toEqualAttribute('aria-live', 'polite');
    });

    it('uses aria-live="assertive" for the error state', async () => {
      const { root } = await render(<bs-toast state="error">Message</bs-toast>);
      const container = root.shadowRoot.querySelector('[part="container"]');
      expect(container).toEqualAttribute('aria-live', 'assertive');
    });
  });
});

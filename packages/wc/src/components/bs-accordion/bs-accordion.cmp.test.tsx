import { render, h, describe, it, expect } from '@stencil/vitest';

describe('bs-accordion', () => {
  (['medium', 'large'] as const).forEach(size => {
    it(`renders collapsed, size="${size}"`, async () => {
      const { root } = await render(
        <bs-accordion size={size}>
          <span slot="label">Title</span>
          Body content
        </bs-accordion>,
      );
      const header = root.shadowRoot.querySelector('[part="header"]');
      expect(header).toEqualAttribute('aria-expanded', 'false');
    });

    it(`renders expanded, size="${size}"`, async () => {
      const { root } = await render(
        <bs-accordion size={size} expanded>
          <span slot="label">Title</span>
          Body content
        </bs-accordion>,
      );
      const header = root.shadowRoot.querySelector('[part="header"]');
      expect(header).toEqualAttribute('aria-expanded', 'true');
    });
  });

  describe('caret direction', () => {
    it('shows CaretDown when collapsed', async () => {
      const { root } = await render(<bs-accordion>Body</bs-accordion>);
      const caret = root.shadowRoot.querySelector('[part="caret"]');
      expect(caret.innerHTML).toContain('9.75L12 15.75');
    });

    it('shows CaretUp when expanded', async () => {
      const { root } = await render(<bs-accordion expanded>Body</bs-accordion>);
      const caret = root.shadowRoot.querySelector('[part="caret"]');
      expect(caret.innerHTML).toContain('14.25L12 8.25');
    });
  });

  describe('controlled expanded prop', () => {
    it('emits bsToggle with the requested value without self-mutating expanded', async () => {
      const { root, spyOnEvent } = await render(<bs-accordion>Body</bs-accordion>);
      const toggleSpy = spyOnEvent('bsToggle');
      const header = root.shadowRoot.querySelector('[part="header"]') as HTMLButtonElement;
      header.click();
      expect(toggleSpy).toHaveReceivedEventDetail(true);

      // Parent "rejects" the change by not echoing it back -- the rendered state must stay
      // exactly as the original `expanded` prop says, not drift to an internally-tracked value.
      const headerAfter = root.shadowRoot.querySelector('[part="header"]');
      expect(headerAfter).toEqualAttribute('aria-expanded', 'false');
      expect(root).not.toHaveAttribute('expanded');
    });

    it('emits false when collapsing an expanded accordion', async () => {
      const { root, spyOnEvent } = await render(<bs-accordion expanded>Body</bs-accordion>);
      const toggleSpy = spyOnEvent('bsToggle');
      (root.shadowRoot.querySelector('[part="header"]') as HTMLButtonElement).click();
      expect(toggleSpy).toHaveReceivedEventDetail(false);
    });
  });

  describe('keyboard activation', () => {
    it('emits bsToggle on Enter', async () => {
      const { root, spyOnEvent } = await render(<bs-accordion>Body</bs-accordion>);
      const toggleSpy = spyOnEvent('bsToggle');
      const header = root.shadowRoot.querySelector('[part="header"]') as HTMLButtonElement;
      header.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      header.click(); // native <button> fires `click` for Enter/Space -- this simulates that.
      expect(toggleSpy).toHaveReceivedEventTimes(1);
    });
  });

  describe('disabled', () => {
    it('does not emit bsToggle on click', async () => {
      const { root, spyOnEvent } = await render(<bs-accordion disabled>Body</bs-accordion>);
      const toggleSpy = spyOnEvent('bsToggle');
      (root.shadowRoot.querySelector('[part="header"]') as HTMLButtonElement).click();
      expect(toggleSpy).toHaveReceivedEventTimes(0);
    });

    it('is not focusable', async () => {
      const { root } = await render(<bs-accordion disabled>Body</bs-accordion>);
      const header = root.shadowRoot.querySelector('[part="header"]') as HTMLButtonElement;
      expect(header.disabled).toBe(true);
    });
  });

  describe('showIcon', () => {
    it('renders the icon area by default', async () => {
      const { root } = await render(<bs-accordion>Body</bs-accordion>);
      expect(root.shadowRoot.querySelector('[part="icon"]')).not.toBeNull();
    });

    it('omits the icon area when showIcon is false', async () => {
      const { root } = await render(<bs-accordion showIcon={false}>Body</bs-accordion>);
      expect(root.shadowRoot.querySelector('[part="icon"]')).toBeNull();
      const header = root.shadowRoot.querySelector('[part="header"]');
      expect(header).toHaveClass('bs-accordion__header--no-icon');
      const content = root.shadowRoot.querySelector('[part="content"]');
      expect(content).toHaveClass('bs-accordion__content--no-icon');
    });
  });

  describe('showPreview', () => {
    it('renders no body content when collapsed and showPreview is false', async () => {
      const { root } = await render(<bs-accordion showPreview={false}>Body content</bs-accordion>);
      expect(root.shadowRoot.querySelector('[part="content"]')).toBeNull();
    });

    it('still renders full content when expanded, even if showPreview is false', async () => {
      const { root } = await render(
        <bs-accordion expanded showPreview={false}>
          Body content
        </bs-accordion>,
      );
      const content = root.shadowRoot.querySelector('[part="content"]');
      expect(content).not.toBeNull();
      expect(content).toHaveClass('bs-accordion__content--expanded');
    });

    it('truncates collapsed content via CSS class when showPreview is true', async () => {
      const { root } = await render(<bs-accordion>Body content</bs-accordion>);
      const content = root.shadowRoot.querySelector('[part="content"]');
      expect(content).toHaveClass('bs-accordion__content--collapsed');
    });
  });

  describe('icon slot', () => {
    it('renders the default Plus icon when nothing is slotted', async () => {
      const { root } = await render(<bs-accordion>Body</bs-accordion>);
      const icon = root.shadowRoot.querySelector('[part="icon"]');
      expect(icon.querySelector('svg')).not.toBeNull();
    });

    it('renders custom slotted icon content instead of the default Plus glyph', async () => {
      const { root } = await render(
        <bs-accordion>
          <span slot="icon" data-testid="custom-icon">
            *
          </span>
          Body
        </bs-accordion>,
      );
      expect(root.querySelector('[data-testid="custom-icon"]')).not.toBeNull();
    });
  });
});

import { render, h, describe, it, expect } from '@stencil/vitest';

describe('bs-chip-informative', () => {
  it('defaults to color="neutral" and size="lg"', async () => {
    const { root } = await render(<bs-chip-informative>Label</bs-chip-informative>);
    expect(root).toHaveClass('bs-chip-informative--neutral');
    expect(root).toHaveClass('bs-chip-informative--lg');
  });

  (['neutral', 'warning', 'success', 'info', 'error'] as const).forEach(color => {
    it(`renders color="${color}" with the matching modifier class`, async () => {
      const { root } = await render(<bs-chip-informative color={color}>Label</bs-chip-informative>);
      expect(root).toHaveClass(`bs-chip-informative--${color}`);
    });
  });

  (['sm', 'md', 'lg'] as const).forEach(size => {
    it(`renders size="${size}" with the matching modifier class`, async () => {
      const { root } = await render(<bs-chip-informative size={size}>Label</bs-chip-informative>);
      expect(root).toHaveClass(`bs-chip-informative--${size}`);
    });
  });

  it('reflects disabled to the host attribute regardless of color', async () => {
    const { root } = await render(
      <bs-chip-informative color="error" disabled>
        Label
      </bs-chip-informative>,
    );
    expect(root).toEqualAttribute('disabled', '');
    // The color class is still applied -- CSS source order makes the [disabled] rule win, not JS.
    expect(root).toHaveClass('bs-chip-informative--error');
  });

  describe('icon slot and padding variant', () => {
    it('has no icon and the text padding variant by default', async () => {
      const { root } = await render(<bs-chip-informative>Label</bs-chip-informative>);
      expect(root.shadowRoot.querySelector('[part="icon"]')).not.toHaveClass('bs-chip-informative__icon--visible');
      expect(root).toHaveClass('bs-chip-informative--text');
    });

    it('marks the icon visible and picks the icon padding variant when the icon slot has content', async () => {
      const { root, waitForChanges } = await render(
        <bs-chip-informative>
          <svg slot="icon"></svg>
          Label
        </bs-chip-informative>,
      );
      await waitForChanges();
      expect(root.shadowRoot.querySelector('[part="icon"]')).toHaveClass('bs-chip-informative__icon--visible');
      expect(root).toHaveClass('bs-chip-informative--icon');
    });
  });

  it('renders label slot content', async () => {
    const { root } = await render(<bs-chip-informative>Active</bs-chip-informative>);
    expect(root).toHaveTextContent('Active');
  });
});

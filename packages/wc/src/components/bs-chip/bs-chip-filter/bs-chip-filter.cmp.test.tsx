import { render, h, describe, it, expect } from '@stencil/vitest';

describe('bs-chip-filter', () => {
  it('renders an unselected chip by default', async () => {
    const { root } = await render(<bs-chip-filter>Label</bs-chip-filter>);
    const button = root.shadowRoot.querySelector('button');
    expect(button).toEqualAttribute('aria-pressed', 'false');
    expect(button).not.toHaveClass('bs-chip-filter--selected');
  });

  it('reflects the selected prop to the host attribute and the button', async () => {
    const { root } = await render(<bs-chip-filter selected>Label</bs-chip-filter>);
    expect(root).toEqualAttribute('selected', '');
    const button = root.shadowRoot.querySelector('button');
    expect(button).toEqualAttribute('aria-pressed', 'true');
    expect(button).toHaveClass('bs-chip-filter--selected');
  });

  it('clicking emits bsChange with the requested new value, without mutating selected itself', async () => {
    const { root, waitForChanges, spyOnEvent } = await render(<bs-chip-filter>Label</bs-chip-filter>);
    const bsChangeSpy = spyOnEvent('bsChange');
    const button = root.shadowRoot.querySelector('button') as HTMLButtonElement;

    button.click();
    await waitForChanges();

    expect(bsChangeSpy).toHaveReceivedEventTimes(1);
    expect(bsChangeSpy).toHaveReceivedEventDetail(true);
    // The chip is controlled: it never flips its own `selected` prop on click.
    expect((root as HTMLElement & { selected: boolean }).selected).toBe(false);
  });

  it('is a controlled component: if the parent does not update selected in response to bsChange, the chip stays at its current prop value', async () => {
    const { root, waitForChanges, spyOnEvent } = await render(<bs-chip-filter selected={false}>Label</bs-chip-filter>);
    const bsChangeSpy = spyOnEvent('bsChange');
    const button = root.shadowRoot.querySelector('button') as HTMLButtonElement;

    button.click();
    await waitForChanges();

    // Event requests the change...
    expect(bsChangeSpy).toHaveReceivedEventDetail(true);
    // ...but since the "parent" never updated the selected prop (simulating a rejected change),
    // the chip's rendered/visual state must still match the prop, not drift into its own truth.
    expect((root as HTMLElement & { selected: boolean }).selected).toBe(false);
    expect(button).toEqualAttribute('aria-pressed', 'false');
    expect(button).not.toHaveClass('bs-chip-filter--selected');

    // Only an explicit prop update (what a real controlled parent would do) changes the display.
    (root as HTMLElement & { selected: boolean }).selected = true;
    await waitForChanges();
    expect(button).toEqualAttribute('aria-pressed', 'true');
    expect(button).toHaveClass('bs-chip-filter--selected');
  });

  describe('disabled', () => {
    it('sets the disabled attribute on the native button', async () => {
      const { root } = await render(<bs-chip-filter disabled>Label</bs-chip-filter>);
      const button = root.shadowRoot.querySelector('button');
      expect(button).toHaveAttribute('disabled');
    });

    it('prevents toggling via click', async () => {
      const { root, waitForChanges, spyOnEvent } = await render(<bs-chip-filter disabled>Label</bs-chip-filter>);
      const bsChangeSpy = spyOnEvent('bsChange');
      const button = root.shadowRoot.querySelector('button') as HTMLButtonElement;

      button.click();
      await waitForChanges();

      expect(bsChangeSpy).toHaveReceivedEventTimes(0);
    });
  });

  (['md', 'lg'] as const).forEach(size => {
    it(`renders size="${size}" with the matching modifier class`, async () => {
      const { root } = await render(<bs-chip-filter size={size}>Label</bs-chip-filter>);
      const button = root.shadowRoot.querySelector('button');
      expect(button).toHaveClass(`bs-chip-filter--${size}`);
    });
  });

  describe('dropdown caret', () => {
    it('does not render a caret by default', async () => {
      const { root } = await render(<bs-chip-filter>Label</bs-chip-filter>);
      expect(root.shadowRoot.querySelector('[part="caret"]')).toBeNull();
    });

    it('renders a caret when dropdown is set', async () => {
      const { root } = await render(<bs-chip-filter dropdown>Label</bs-chip-filter>);
      expect(root.shadowRoot.querySelector('[part="caret"]')).not.toBeNull();
    });
  });

  describe('icon slot and padding variant', () => {
    it('has no icon and the text-only padding variant by default', async () => {
      const { root } = await render(<bs-chip-filter>Label</bs-chip-filter>);
      const button = root.shadowRoot.querySelector('button');
      expect(root.shadowRoot.querySelector('[part="icon"]')).not.toHaveClass('bs-chip-filter__icon--visible');
      expect(button).toHaveClass('bs-chip-filter--text-only');
    });

    it('marks the icon visible and picks the icon-only padding variant when the icon slot has content', async () => {
      const { root, waitForChanges } = await render(
        <bs-chip-filter>
          <svg slot="icon"></svg>
          Label
        </bs-chip-filter>,
      );
      await waitForChanges();
      const button = root.shadowRoot.querySelector('button');
      expect(root.shadowRoot.querySelector('[part="icon"]')).toHaveClass('bs-chip-filter__icon--visible');
      expect(button).toHaveClass('bs-chip-filter--icon-only');
    });

    it('picks the dropdown-only padding variant with a caret but no icon', async () => {
      const { root } = await render(<bs-chip-filter dropdown>Label</bs-chip-filter>);
      const button = root.shadowRoot.querySelector('button');
      expect(button).toHaveClass('bs-chip-filter--dropdown-only');
    });

    it('picks the icon-dropdown padding variant with both an icon and a caret', async () => {
      const { root, waitForChanges } = await render(
        <bs-chip-filter dropdown>
          <svg slot="icon"></svg>
          Label
        </bs-chip-filter>,
      );
      await waitForChanges();
      const button = root.shadowRoot.querySelector('button');
      expect(button).toHaveClass('bs-chip-filter--icon-dropdown');
    });
  });

  it('reflects ariaLabel to the native button', async () => {
    const { root } = await render(<bs-chip-filter ariaLabel="Filter by status">Label</bs-chip-filter>);
    const button = root.shadowRoot.querySelector('button');
    expect(button).toEqualAttribute('aria-label', 'Filter by status');
  });

  it('renders label slot content', async () => {
    const { root } = await render(<bs-chip-filter>Active users</bs-chip-filter>);
    expect(root).toHaveTextContent('Active users');
  });
});

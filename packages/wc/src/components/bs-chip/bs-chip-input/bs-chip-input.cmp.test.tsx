import { render, h, describe, it, expect } from '@stencil/vitest';

describe('bs-chip-input', () => {
  it('renders an unselected chip by default', async () => {
    const { root } = await render(<bs-chip-input>Label</bs-chip-input>);
    const body = root.shadowRoot.querySelector('[part="body"]');
    expect(body).toEqualAttribute('aria-pressed', 'false');
    expect(root).not.toEqualAttribute('selected', '');
  });

  it('reflects the selected prop to the host attribute and the body button', async () => {
    const { root } = await render(<bs-chip-input selected>Label</bs-chip-input>);
    expect(root).toEqualAttribute('selected', '');
    const body = root.shadowRoot.querySelector('[part="body"]');
    expect(body).toEqualAttribute('aria-pressed', 'true');
  });

  it('clicking the body toggles selected and emits bsChange with the new value', async () => {
    const { root, waitForChanges, spyOnEvent } = await render(<bs-chip-input>Label</bs-chip-input>);
    const bsChangeSpy = spyOnEvent('bsChange');
    const body = root.shadowRoot.querySelector('[part="body"]') as HTMLButtonElement;

    body.click();
    await waitForChanges();

    expect((root as HTMLElement & { selected: boolean }).selected).toBe(true);
    expect(bsChangeSpy).toHaveReceivedEventTimes(1);
    expect(bsChangeSpy).toHaveReceivedEventDetail(true);

    body.click();
    await waitForChanges();

    expect((root as HTMLElement & { selected: boolean }).selected).toBe(false);
    expect(bsChangeSpy).toHaveReceivedEventTimes(2);
    expect(bsChangeSpy).toHaveReceivedEventDetail(false);
  });

  it('clicking the remove button emits bsRemove and does not affect selected', async () => {
    const { root, waitForChanges, spyOnEvent } = await render(<bs-chip-input selected>Label</bs-chip-input>);
    const bsRemoveSpy = spyOnEvent('bsRemove');
    const bsChangeSpy = spyOnEvent('bsChange');
    const removeButton = root.shadowRoot.querySelector('[part="remove"]') as HTMLButtonElement;

    removeButton.click();
    await waitForChanges();

    expect(bsRemoveSpy).toHaveReceivedEventTimes(1);
    expect(bsChangeSpy).toHaveReceivedEventTimes(0);
    expect((root as HTMLElement & { selected: boolean }).selected).toBe(true);
  });

  it('sets the remove button accessible name from the slotted label text', async () => {
    const { root } = await render(<bs-chip-input>Active users</bs-chip-input>);
    const removeButton = root.shadowRoot.querySelector('[part="remove"]');
    expect(removeButton).toEqualAttribute('aria-label', 'Remove Active users');
  });

  describe('disabled', () => {
    it('sets the disabled attribute on both the body and remove buttons', async () => {
      const { root } = await render(<bs-chip-input disabled>Label</bs-chip-input>);
      expect(root.shadowRoot.querySelector('[part="body"]')).toHaveAttribute('disabled');
      expect(root.shadowRoot.querySelector('[part="remove"]')).toHaveAttribute('disabled');
    });

    it('prevents toggling selected via click', async () => {
      const { root, waitForChanges, spyOnEvent } = await render(<bs-chip-input disabled>Label</bs-chip-input>);
      const bsChangeSpy = spyOnEvent('bsChange');
      const body = root.shadowRoot.querySelector('[part="body"]') as HTMLButtonElement;

      body.click();
      await waitForChanges();

      expect((root as HTMLElement & { selected: boolean }).selected).toBe(false);
      expect(bsChangeSpy).toHaveReceivedEventTimes(0);
    });

    it('prevents removal via click', async () => {
      const { root, waitForChanges, spyOnEvent } = await render(<bs-chip-input disabled>Label</bs-chip-input>);
      const bsRemoveSpy = spyOnEvent('bsRemove');
      const removeButton = root.shadowRoot.querySelector('[part="remove"]') as HTMLButtonElement;

      removeButton.click();
      await waitForChanges();

      expect(bsRemoveSpy).toHaveReceivedEventTimes(0);
    });
  });

  (['md', 'lg'] as const).forEach(size => {
    it(`renders size="${size}" with the matching modifier class`, async () => {
      const { root } = await render(<bs-chip-input size={size}>Label</bs-chip-input>);
      expect(root).toHaveClass(`bs-chip-input--${size}`);
    });
  });

  describe('icon slot and padding variant', () => {
    it('has no icon and the text padding variant by default', async () => {
      const { root } = await render(<bs-chip-input>Label</bs-chip-input>);
      expect(root.shadowRoot.querySelector('[part="icon"]')).not.toHaveClass('bs-chip-input__icon--visible');
      expect(root).toHaveClass('bs-chip-input--text');
    });

    it('marks the icon visible and picks the icon padding variant when the icon slot has content', async () => {
      const { root, waitForChanges } = await render(
        <bs-chip-input>
          <svg slot="icon"></svg>
          Label
        </bs-chip-input>,
      );
      await waitForChanges();
      expect(root.shadowRoot.querySelector('[part="icon"]')).toHaveClass('bs-chip-input__icon--visible');
      expect(root).toHaveClass('bs-chip-input--icon');
    });
  });

  it('renders label slot content', async () => {
    const { root } = await render(<bs-chip-input>Active users</bs-chip-input>);
    expect(root).toHaveTextContent('Active users');
  });
});

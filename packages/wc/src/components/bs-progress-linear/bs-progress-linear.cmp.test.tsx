import { render, h, describe, it, expect } from '@stencil/vitest';

describe('bs-progress-linear', () => {
  describe('size/type combinations', () => {
    (['small', 'large'] as const).forEach(size => {
      it(`renders size="${size}" type="determinate"`, async () => {
        const { root } = await render(<bs-progress-linear size={size} type="determinate" value={40}></bs-progress-linear>);
        expect(root.shadowRoot.querySelector(`.bs-progress-linear__track--${size}`)).not.toBeNull();
        expect(root.shadowRoot.querySelector('[part="track"]')).not.toBeNull();
        expect(root.shadowRoot.querySelector('[part="fill"]')).not.toBeNull();
      });

      it(`renders size="${size}" type="indeterminate"`, async () => {
        const { root } = await render(<bs-progress-linear size={size} type="indeterminate"></bs-progress-linear>);
        expect(root.shadowRoot.querySelector('.bs-progress-linear__fill--indeterminate')).not.toBeNull();
        expect(root.shadowRoot.querySelector('[part="fill"]')).not.toBeNull();
      });
    });
  });

  describe('fill width', () => {
    [0, 50, 100].forEach(value => {
      it(`sets fill width to ${value}% for value=${value}`, async () => {
        const { root } = await render(<bs-progress-linear value={value}></bs-progress-linear>);
        const fill = root.shadowRoot.querySelector('[part="fill"]') as HTMLElement;
        expect(fill.style.width).toBe(`${value}%`);
      });
    });

    it('produces a larger width for a larger value', async () => {
      const { root: rootLow } = await render(<bs-progress-linear value={10}></bs-progress-linear>);
      const { root: rootHigh } = await render(<bs-progress-linear value={90}></bs-progress-linear>);
      const lowFill = rootLow.shadowRoot.querySelector('[part="fill"]') as HTMLElement;
      const highFill = rootHigh.shadowRoot.querySelector('[part="fill"]') as HTMLElement;
      expect(parseFloat(highFill.style.width)).toBeGreaterThan(parseFloat(lowFill.style.width));
    });
  });

  describe('value clamping', () => {
    it('clamps a value above 100 down to 100', async () => {
      const { root } = await render(<bs-progress-linear value={150}></bs-progress-linear>);
      const fill = root.shadowRoot.querySelector('[part="fill"]') as HTMLElement;
      expect(fill.style.width).toBe('100%');
      const track = root.shadowRoot.querySelector('[part="track"]');
      expect(track).toEqualAttribute('aria-valuenow', '100');
    });

    it('clamps a negative value up to 0', async () => {
      const { root } = await render(<bs-progress-linear value={-10}></bs-progress-linear>);
      const fill = root.shadowRoot.querySelector('[part="fill"]') as HTMLElement;
      expect(fill.style.width).toBe('0%');
      const track = root.shadowRoot.querySelector('[part="track"]');
      expect(track).toEqualAttribute('aria-valuenow', '0');
    });
  });

  describe('label', () => {
    it('renders slotted content when showLabel is true (default)', async () => {
      const { root } = await render(<bs-progress-linear value={42}>Uploading...</bs-progress-linear>);
      const label = root.shadowRoot.querySelector('[part="label"]');
      expect(label).not.toBeNull();
      // `label.textContent` only reflects a <slot>'s own fallback content, not its assigned
      // (projected) nodes -- the projected text lives on the host itself.
      expect(root.textContent.trim()).toBe('Uploading...');
    });

    it('omits the label when showLabel is false', async () => {
      const { root } = await render(<bs-progress-linear value={42} showLabel={false}>Uploading...</bs-progress-linear>);
      expect(root.shadowRoot.querySelector('[part="label"]')).toBeNull();
    });

    it('omits the label when showLabel is true but there is no slotted content', async () => {
      const { root } = await render(<bs-progress-linear value={42}></bs-progress-linear>);
      expect(root.shadowRoot.querySelector('[part="label"]')).toBeNull();
    });

    it('omits the label when slotted content is only whitespace', async () => {
      const { root } = await render(<bs-progress-linear value={42}> </bs-progress-linear>);
      expect(root.shadowRoot.querySelector('[part="label"]')).toBeNull();
    });
  });

  describe('aria attributes', () => {
    it('sets aria-valuemin/max/now for determinate', async () => {
      const { root } = await render(<bs-progress-linear type="determinate" value={65}></bs-progress-linear>);
      const track = root.shadowRoot.querySelector('[part="track"]');
      expect(track).toEqualAttribute('role', 'progressbar');
      expect(track).toEqualAttribute('aria-valuemin', '0');
      expect(track).toEqualAttribute('aria-valuemax', '100');
      expect(track).toEqualAttribute('aria-valuenow', '65');
      expect(track.hasAttribute('aria-busy')).toBe(false);
    });

    it('omits aria-valuenow and sets aria-busy for indeterminate', async () => {
      const { root } = await render(<bs-progress-linear type="indeterminate"></bs-progress-linear>);
      const track = root.shadowRoot.querySelector('[part="track"]');
      expect(track).toEqualAttribute('role', 'progressbar');
      expect(track.hasAttribute('aria-valuenow')).toBe(false);
      expect(track.hasAttribute('aria-valuemin')).toBe(false);
      expect(track.hasAttribute('aria-valuemax')).toBe(false);
      expect(track).toEqualAttribute('aria-busy', 'true');
    });
  });
});

import { render, h, describe, it, expect } from '@stencil/vitest';

// Same math as the component's own private `circumference`/`dashOffset` getters, for computing an
// expected stroke-dashoffset independently of the implementation.
const expectedDashOffset = (diameter: number, strokeWidth: number, value: number) => {
  const radius = (diameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, value));
  return circumference * (1 - clamped / 100);
};

describe('bs-progress', () => {
  describe('size/type combinations', () => {
    (['small', 'medium', 'large'] as const).forEach(size => {
      it(`renders size="${size}" type="determinate"`, async () => {
        const { root } = await render(<bs-progress size={size} type="determinate" value={40}></bs-progress>);
        expect(root.shadowRoot.querySelector('.bs-progress__ring')).not.toBeNull();
        expect(root.shadowRoot.querySelector('[part="track"]')).not.toBeNull();
        expect(root.shadowRoot.querySelector('[part="arc"]')).not.toBeNull();
      });

      it(`renders size="${size}" type="indeterminate"`, async () => {
        const { root } = await render(<bs-progress size={size} type="indeterminate"></bs-progress>);
        expect(root.shadowRoot.querySelector('.bs-progress__spinner')).not.toBeNull();
        expect(root.shadowRoot.querySelector('[part="arc"]')).not.toBeNull();
      });
    });
  });

  describe('arc sweep', () => {
    [0, 50, 100].forEach(value => {
      it(`computes stroke-dashoffset for value=${value} at default size/stroke-width`, async () => {
        const { root } = await render(<bs-progress value={value}></bs-progress>);
        const arc = root.shadowRoot.querySelector('[part="arc"]');
        const expected = expectedDashOffset(44, 4, value);
        expect(Number(arc.getAttribute('stroke-dashoffset'))).toBeCloseTo(expected, 5);
      });
    });

    it('produces a smaller (non-zero) dashoffset for a larger value', async () => {
      const { root: rootLow } = await render(<bs-progress value={10}></bs-progress>);
      const { root: rootHigh } = await render(<bs-progress value={90}></bs-progress>);
      const lowOffset = Number(rootLow.shadowRoot.querySelector('[part="arc"]').getAttribute('stroke-dashoffset'));
      const highOffset = Number(rootHigh.shadowRoot.querySelector('[part="arc"]').getAttribute('stroke-dashoffset'));
      expect(highOffset).toBeLessThan(lowOffset);
    });
  });

  describe('value clamping', () => {
    it('clamps a value above 100 down to 100', async () => {
      const { root } = await render(<bs-progress value={150}></bs-progress>);
      const label = root.shadowRoot.querySelector('[part="label"]');
      expect(label.textContent).toBe('100%');
      const arc = root.shadowRoot.querySelector('[part="arc"]');
      expect(Number(arc.getAttribute('stroke-dashoffset'))).toBeCloseTo(0, 5);
    });

    it('clamps a negative value up to 0', async () => {
      const { root } = await render(<bs-progress value={-10}></bs-progress>);
      const label = root.shadowRoot.querySelector('[part="label"]');
      expect(label.textContent).toBe('0%');
      const arc = root.shadowRoot.querySelector('[part="arc"]');
      const expected = expectedDashOffset(44, 4, 0);
      expect(Number(arc.getAttribute('stroke-dashoffset'))).toBeCloseTo(expected, 5);
    });
  });

  describe('label', () => {
    it('renders "${value}%" when determinate and showLabel is true (default)', async () => {
      const { root } = await render(<bs-progress value={42}></bs-progress>);
      const label = root.shadowRoot.querySelector('[part="label"]');
      expect(label).not.toBeNull();
      expect(label.textContent).toBe('42%');
    });

    it('omits the label when showLabel is false', async () => {
      const { root } = await render(<bs-progress value={42} showLabel={false}></bs-progress>);
      expect(root.shadowRoot.querySelector('[part="label"]')).toBeNull();
    });

    it('omits the label when type is indeterminate, even with showLabel true', async () => {
      const { root } = await render(<bs-progress type="indeterminate" showLabel={true}></bs-progress>);
      expect(root.shadowRoot.querySelector('[part="label"]')).toBeNull();
    });
  });

  describe('aria attributes', () => {
    it('sets aria-valuemin/max/now for determinate', async () => {
      const { root } = await render(<bs-progress type="determinate" value={65}></bs-progress>);
      const box = root.shadowRoot.querySelector('.bs-progress__box');
      expect(box).toEqualAttribute('role', 'progressbar');
      expect(box).toEqualAttribute('aria-valuemin', '0');
      expect(box).toEqualAttribute('aria-valuemax', '100');
      expect(box).toEqualAttribute('aria-valuenow', '65');
      expect(box.hasAttribute('aria-busy')).toBe(false);
    });

    it('omits aria-valuenow and sets aria-busy for indeterminate', async () => {
      const { root } = await render(<bs-progress type="indeterminate"></bs-progress>);
      const box = root.shadowRoot.querySelector('.bs-progress__box');
      expect(box).toEqualAttribute('role', 'progressbar');
      expect(box.hasAttribute('aria-valuenow')).toBe(false);
      expect(box.hasAttribute('aria-valuemin')).toBe(false);
      expect(box.hasAttribute('aria-valuemax')).toBe(false);
      expect(box).toEqualAttribute('aria-busy', 'true');
    });
  });
});

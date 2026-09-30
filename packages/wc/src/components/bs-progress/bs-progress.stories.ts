import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { componentDescription, propDescription } from '../../stories-utils';
import type { BsProgressType, BsProgressSize, BsProgressStrokeWidth } from './bs-progress';

const types: BsProgressType[] = ['determinate', 'indeterminate'];
const sizes: BsProgressSize[] = ['small', 'medium', 'large'];
const strokeWidths: BsProgressStrokeWidth[] = [4, 8];

interface BsProgressArgs {
  type: BsProgressType;
  size: BsProgressSize;
  strokeWidth: BsProgressStrokeWidth;
  value: number;
  showLabel: boolean;
}

const meta: Meta<BsProgressArgs> = {
  title: 'Components/bs-progress/Circular',
  parameters: { docs: { description: { component: componentDescription('bs-progress') } } },
  render: args => html`
    <bs-progress
      type=${args.type}
      size=${args.size}
      stroke-width=${args.strokeWidth}
      value=${args.value}
      show-label=${args.showLabel}
    ></bs-progress>
  `,
  argTypes: {
    type: { control: { type: 'select' }, options: types, description: propDescription('bs-progress', 'type') },
    size: { control: { type: 'select' }, options: sizes, description: propDescription('bs-progress', 'size') },
    strokeWidth: {
      control: { type: 'select' },
      options: strokeWidths,
      description: propDescription('bs-progress', 'stroke-width'),
    },
    value: { control: { type: 'range', min: 0, max: 100 }, description: propDescription('bs-progress', 'value') },
    showLabel: { control: 'boolean', description: propDescription('bs-progress', 'show-label') },
  },
  args: {
    type: 'determinate',
    size: 'small',
    strokeWidth: 4,
    value: 50,
    showLabel: true,
  },
};

export default meta;
type Story = StoryObj<BsProgressArgs>;

export const Default: Story = {};

// One instance per size, side by side, at a fixed mid-range value.
export const Sizes: Story = {
  name: 'Sizes',
  render: () => html`
    <div style="display: flex; align-items: flex-end; gap: 24px;">
      ${sizes.map(size => html`<bs-progress size=${size} value="50"></bs-progress>`)}
    </div>
  `,
};

// One instance per stroke width, at a fixed size/value, to compare ring thickness directly.
export const StrokeWidths: Story = {
  name: 'Stroke widths',
  render: () => html`
    <div style="display: flex; align-items: flex-end; gap: 24px;">
      ${strokeWidths.map(strokeWidth => html`<bs-progress size="large" stroke-width=${strokeWidth} value="50"></bs-progress>`)}
    </div>
  `,
};

// A few sample values across the range, illustrating the arc sweep from empty to full.
export const Values: Story = {
  name: 'Values',
  render: () => html`
    <div style="display: flex; align-items: flex-end; gap: 24px;">
      ${[0, 25, 50, 75, 100].map(value => html`<bs-progress value=${value}></bs-progress>`)}
    </div>
  `,
};

export const WithoutLabel: Story = {
  name: 'Without label',
  args: { showLabel: false },
};

export const Indeterminate: Story = {
  args: { type: 'indeterminate' },
};

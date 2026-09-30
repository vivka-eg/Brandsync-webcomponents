import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { componentDescription, propDescription } from '../../stories-utils';
import type { BsProgressLinearType, BsProgressLinearSize } from './bs-progress-linear';

const types: BsProgressLinearType[] = ['determinate', 'indeterminate'];
const sizes: BsProgressLinearSize[] = ['small', 'large'];

interface BsProgressLinearArgs {
  type: BsProgressLinearType;
  size: BsProgressLinearSize;
  value: number;
  showLabel: boolean;
  label: string;
}

const meta: Meta<BsProgressLinearArgs> = {
  title: 'Components/bs-progress/Linear',
  parameters: { docs: { description: { component: componentDescription('bs-progress-linear') } } },
  render: args => html`
    <bs-progress-linear type=${args.type} size=${args.size} value=${args.value} show-label=${args.showLabel}>
      ${args.label}
    </bs-progress-linear>
  `,
  argTypes: {
    type: { control: { type: 'select' }, options: types, description: propDescription('bs-progress-linear', 'type') },
    size: { control: { type: 'select' }, options: sizes, description: propDescription('bs-progress-linear', 'size') },
    value: { control: { type: 'range', min: 0, max: 100 }, description: propDescription('bs-progress-linear', 'value') },
    showLabel: { control: 'boolean', description: propDescription('bs-progress-linear', 'show-label') },
    label: { control: 'text', description: 'Slotted label content (default slot).' },
  },
  args: {
    type: 'determinate',
    size: 'large',
    value: 40,
    showLabel: true,
    label: 'Label',
  },
};

export default meta;
type Story = StoryObj<BsProgressLinearArgs>;

export const Default: Story = {};

// One instance per size, stacked, at a fixed mid-range value.
export const Sizes: Story = {
  name: 'Sizes',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; width: 320px;">
      ${sizes.map(size => html`<bs-progress-linear size=${size} value="40">Label</bs-progress-linear>`)}
    </div>
  `,
};

// A few sample values across the range, illustrating the fill from empty to full.
export const Values: Story = {
  name: 'Values',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; width: 320px;">
      ${[0, 25, 50, 75, 100].map(value => html`<bs-progress-linear value=${value}>${value}%</bs-progress-linear>`)}
    </div>
  `,
};

export const WithoutLabel: Story = {
  name: 'Without label',
  args: { showLabel: false },
  render: args => html`
    <div style="width: 320px;">
      <bs-progress-linear type=${args.type} size=${args.size} value=${args.value} show-label=${args.showLabel}>
        ${args.label}
      </bs-progress-linear>
    </div>
  `,
};

export const Indeterminate: Story = {
  args: { type: 'indeterminate' },
  render: args => html`
    <div style="width: 320px;">
      <bs-progress-linear type=${args.type} size=${args.size} show-label=${args.showLabel}> ${args.label} </bs-progress-linear>
    </div>
  `,
};

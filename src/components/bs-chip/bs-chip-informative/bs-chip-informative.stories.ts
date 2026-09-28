import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { componentDescription, propDescription } from '../../../stories-utils';
import type { BsChipInformativeColor, BsChipInformativeSize } from './bs-chip-informative';

interface BsChipInformativeArgs {
  color: BsChipInformativeColor;
  size: BsChipInformativeSize;
  disabled: boolean;
  label: string;
}

const colors: BsChipInformativeColor[] = ['neutral', 'warning', 'success', 'info', 'error'];

const meta: Meta<BsChipInformativeArgs> = {
  title: 'Components/bs-chip/bs-chip-informative',
  parameters: { docs: { description: { component: componentDescription('bs-chip-informative') } } },
  render: args => html` <bs-chip-informative color=${args.color} size=${args.size} ?disabled=${args.disabled}>${args.label}</bs-chip-informative> `,
  argTypes: {
    color: { control: { type: 'select' }, options: colors, description: propDescription('bs-chip-informative', 'color') },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'], description: propDescription('bs-chip-informative', 'size') },
    disabled: { control: 'boolean', description: propDescription('bs-chip-informative', 'disabled') },
    label: { control: 'text', description: 'Slotted label content (not a real attribute -- see the default slot).' },
  },
  args: {
    color: 'neutral',
    size: 'lg',
    disabled: false,
    label: 'Label',
  },
};

export default meta;
type Story = StoryObj<BsChipInformativeArgs>;

export const Neutral: Story = {};

export const Warning: Story = {
  args: { color: 'warning' },
};

export const Success: Story = {
  args: { color: 'success' },
};

export const Info: Story = {
  args: { color: 'info' },
};

export const Error: Story = {
  args: { color: 'error' },
};

export const WithIcon: Story = {
  name: 'With icon',
  render: args => html`
    <bs-chip-informative color=${args.color} size=${args.size} ?disabled=${args.disabled}>
      <svg slot="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 3.5V12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M3.5 8H12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
      ${args.label}
    </bs-chip-informative>
  `,
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Medium: Story = {
  args: { size: 'md' },
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => html`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <bs-chip-informative color="neutral">Neutral</bs-chip-informative>
      <bs-chip-informative color="warning">Warning</bs-chip-informative>
      <bs-chip-informative color="success">Success</bs-chip-informative>
      <bs-chip-informative color="info">Info</bs-chip-informative>
      <bs-chip-informative color="error">Error</bs-chip-informative>
      <bs-chip-informative disabled>Disabled</bs-chip-informative>
      <bs-chip-informative size="md">Medium</bs-chip-informative>
      <bs-chip-informative size="sm">Small</bs-chip-informative>
    </div>
  `,
};

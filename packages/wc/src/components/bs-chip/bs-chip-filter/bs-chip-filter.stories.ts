import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { componentDescription, propDescription } from '../../../stories-utils';
import type { BsChipFilterSize } from './bs-chip-filter';

interface BsChipArgs {
  size: BsChipFilterSize;
  selected: boolean;
  dropdown: boolean;
  disabled: boolean;
  label: string;
}

const meta: Meta<BsChipArgs> = {
  title: 'Components/bs-chip/bs-chip-filter',
  parameters: { docs: { description: { component: componentDescription('bs-chip-filter') } } },
  render: args => html`
    <bs-chip-filter size=${args.size} ?selected=${args.selected} ?dropdown=${args.dropdown} ?disabled=${args.disabled}>${args.label}</bs-chip-filter>
  `,
  argTypes: {
    size: { control: { type: 'select' }, options: ['md', 'lg'], description: propDescription('bs-chip-filter', 'size') },
    selected: { control: 'boolean', description: propDescription('bs-chip-filter', 'selected') },
    dropdown: { control: 'boolean', description: propDescription('bs-chip-filter', 'dropdown') },
    disabled: { control: 'boolean', description: propDescription('bs-chip-filter', 'disabled') },
    label: { control: 'text', description: 'Slotted label content (not a real attribute -- see the default slot).' },
  },
  args: {
    size: 'lg',
    selected: false,
    dropdown: false,
    disabled: false,
    label: 'Label',
  },
};

export default meta;
type Story = StoryObj<BsChipArgs>;

export const Default: Story = {};

export const Selected: Story = {
  args: { selected: true },
};

export const WithDropdown: Story = {
  name: 'With dropdown caret',
  args: { dropdown: true },
};

export const WithIcon: Story = {
  name: 'With icon',
  render: args => html`
    <bs-chip-filter size=${args.size} ?selected=${args.selected} ?dropdown=${args.dropdown} ?disabled=${args.disabled}>
      <svg slot="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="currentColor" stroke-width="1.5" />
        <path d="M7 12H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
      ${args.label}
    </bs-chip-filter>
  `,
};

export const WithIconAndDropdown: Story = {
  name: 'With icon and dropdown caret',
  args: { dropdown: true },
  render: args => html`
    <bs-chip-filter size=${args.size} ?selected=${args.selected} ?dropdown=${args.dropdown} ?disabled=${args.disabled}>
      <svg slot="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="currentColor" stroke-width="1.5" />
        <path d="M7 12H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
      ${args.label}
    </bs-chip-filter>
  `,
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Medium: Story = {
  args: { size: 'md' },
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => html`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <bs-chip-filter>Label</bs-chip-filter>
      <bs-chip-filter selected>Label</bs-chip-filter>
      <bs-chip-filter dropdown>Label</bs-chip-filter>
      <bs-chip-filter selected dropdown>Label</bs-chip-filter>
      <bs-chip-filter disabled>Label</bs-chip-filter>
      <bs-chip-filter size="md">Label</bs-chip-filter>
    </div>
  `,
};

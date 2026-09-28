import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { componentDescription, propDescription } from '../../../stories-utils';
import type { BsChipInputSize } from './bs-chip-input';

const PLACEHOLDER_PHOTO = 'https://i.pravatar.cc/256?img=68';

interface BsChipInputArgs {
  size: BsChipInputSize;
  selected: boolean;
  disabled: boolean;
  label: string;
}

const meta: Meta<BsChipInputArgs> = {
  title: 'Components/bs-chip/bs-chip-input',
  parameters: { docs: { description: { component: componentDescription('bs-chip-input') } } },
  render: args => html` <bs-chip-input size=${args.size} ?selected=${args.selected} ?disabled=${args.disabled}>${args.label}</bs-chip-input> `,
  argTypes: {
    size: { control: { type: 'select' }, options: ['md', 'lg'], description: propDescription('bs-chip-input', 'size') },
    selected: { control: 'boolean', description: propDescription('bs-chip-input', 'selected') },
    disabled: { control: 'boolean', description: propDescription('bs-chip-input', 'disabled') },
    label: { control: 'text', description: 'Slotted label content (not a real attribute -- see the default slot).' },
  },
  args: {
    size: 'lg',
    selected: false,
    disabled: false,
    label: 'Label',
  },
};

export default meta;
type Story = StoryObj<BsChipInputArgs>;

export const Default: Story = {};

export const Selected: Story = {
  args: { selected: true },
};

export const WithIcon: Story = {
  name: 'With icon',
  render: args => html`
    <bs-chip-input size=${args.size} ?selected=${args.selected} ?disabled=${args.disabled}>
      <svg slot="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="currentColor" stroke-width="1.5" />
        <path d="M7 12H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
      ${args.label}
    </bs-chip-input>
  `,
};

export const WithAvatar: Story = {
  name: 'With avatar',
  render: args => html`
    <bs-chip-input size=${args.size} ?selected=${args.selected} ?disabled=${args.disabled}>
      <bs-avatar slot="icon" size="xs" type="image" src=${PLACEHOLDER_PHOTO} alt="Sam Lee"></bs-avatar>
      ${args.label}
    </bs-chip-input>
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
      <bs-chip-input>Label</bs-chip-input>
      <bs-chip-input selected>Label</bs-chip-input>
      <bs-chip-input disabled>Label</bs-chip-input>
      <bs-chip-input size="md">Label</bs-chip-input>
      <bs-chip-input>
        <bs-avatar slot="icon" size="xs" type="image" src=${PLACEHOLDER_PHOTO} alt="Sam Lee"></bs-avatar>
        Label
      </bs-chip-input>
    </div>
  `,
};

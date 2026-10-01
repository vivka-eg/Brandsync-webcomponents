import type { Meta, StoryObj } from '@storybook/angular';
import { BsSwitch } from '@brandsync/angular';

const meta: Meta<BsSwitch> = {
  title: 'Components/BsSwitch',
  component: BsSwitch,
  parameters: {
    docs: {
      description: {
        component:
          'A toggle switch for an on/off setting that takes effect immediately (no explicit form ' +
          'submission required).\n\n' +
          '**When to use:** a binary setting that applies right away (e.g. "Enable notifications", ' +
          '"Dark mode").\n\n' +
          '**When not to use:** a binary choice that\'s part of a form submitted later, or one item ' +
          'within a group of independent choices — use `BsCheckbox` instead; a single ' +
          'mutually-exclusive choice from a set — use a radio group.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name for the switch. Required whenever the default (label) slot is empty (e.g. ' +
        'a bare "enabled" switch in a table row).',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the switch is on. Mutable so clicking the label/input toggles it directly.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch and prevents toggling.',
    },
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: 'Sizing scale. Controls the track\'s width/height and the knob\'s diameter.',
    },
  },
  args: {
    checked: false,
    disabled: false,
    size: 'lg',
  },
};

export default meta;
type Story = StoryObj<BsSwitch>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-switch [checked]="checked" [disabled]="disabled" [size]="size">Enable notifications</bs-switch>`,
  }),
};

export const Checked: Story = {
  args: { checked: true },
  render: args => ({
    props: args,
    template: `<bs-switch [checked]="checked" [size]="size">Dark mode</bs-switch>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-switch [disabled]="disabled" [size]="size">Enable notifications</bs-switch>`,
  }),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <bs-switch size="md" [checked]="true">Medium</bs-switch>
        <bs-switch size="lg" [checked]="true">Large</bs-switch>
      </div>
    `,
  }),
};

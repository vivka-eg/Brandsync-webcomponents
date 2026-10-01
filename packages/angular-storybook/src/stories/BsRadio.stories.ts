import type { Meta, StoryObj } from '@storybook/angular';
import { BsRadio } from '@brandsync/angular';

const meta: Meta<BsRadio> = {
  title: 'Components/BsRadio',
  component: BsRadio,
  parameters: {
    docs: {
      description: {
        component:
          'A single radio button with its label, for one mutually-exclusive choice within a group.\n\n' +
          '**When to use:** one option within a set of mutually-exclusive choices, where all ' +
          'options should stay visible (a radio group).\n\n' +
          '**When not to use:** an independent, non-exclusive binary choice, or one item in a set of ' +
          'independent choices — use `BsCheckbox` instead; an on/off setting that takes effect ' +
          'immediately — use `BsSwitch`.\n\n' +
          'Note: because each `bs-radio` renders its own shadow root, native same-`name` grouping ' +
          'does NOT extend across separate instances — a consumer wiring up a group must set ' +
          '`checked = false` on the others itself in response to `bsChange`.',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the radio is checked. Mutable so clicking the label/input sets it directly.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the radio and prevents toggling.',
    },
    name: {
      control: 'text',
      description:
        'The native radio input\'s `name` attribute. Does not natively group across separate ' +
        '`bs-radio` instances — see the class doc above.',
    },
    value: {
      control: 'text',
      description: 'The native radio input\'s `value` attribute.',
    },
  },
  args: {
    checked: false,
    disabled: false,
    name: 'room-type',
    value: 'standard',
  },
};

export default meta;
type Story = StoryObj<BsRadio>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-radio [checked]="checked" [disabled]="disabled" [name]="name" [value]="value">Standard room</bs-radio>`,
  }),
};

export const Checked: Story = {
  args: { checked: true },
  render: args => ({
    props: args,
    template: `<bs-radio [checked]="checked" [name]="name" [value]="value">Standard room</bs-radio>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-radio [disabled]="disabled" [name]="name" [value]="value">Suite (unavailable)</bs-radio>`,
  }),
};

export const RadioGroup: Story = {
  name: 'Radio group',
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <bs-radio name="room-type" value="standard" [checked]="true">Standard room</bs-radio>
        <bs-radio name="room-type" value="deluxe">Deluxe room</bs-radio>
        <bs-radio name="room-type" value="suite">Suite</bs-radio>
      </div>
    `,
  }),
};

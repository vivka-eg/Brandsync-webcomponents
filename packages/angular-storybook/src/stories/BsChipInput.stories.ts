import type { Meta, StoryObj } from '@storybook/angular';
import { BsChipInput } from '@brandsync/angular';

const meta: Meta<BsChipInput> = {
  title: 'Components/BsChipInput',
  component: BsChipInput,
  parameters: {
    docs: {
      description: {
        component:
          'A pill-shaped, removable representation of a discrete piece of user-entered data (e.g. a ' +
          'tag, a selected filter value, an invited email address). Unlike `BsChipFilter`, this is a ' +
          'compound control — the body toggles `selected`, and a separate trailing button removes ' +
          'the chip entirely.\n\n' +
          '**When to use:** representing one entry in a list the user built themselves (tags, ' +
          'recipients, multi-select values) that they need to be able to remove individually.\n\n' +
          '**When not to use:** a single toggleable filter, with no removal affordance — use ' +
          '`BsChipFilter`; a static, non-interactive status/category label — use `BsBadge`.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables both the body and the remove button.',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the chip reads as toggled on. Mutable so clicking the body toggles directly.',
    },
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: 'Sizing scale. Controls the chip\'s height only.',
    },
  },
  args: {
    disabled: false,
    selected: false,
    size: 'lg',
  },
};

export default meta;
type Story = StoryObj<BsChipInput>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-chip-input [selected]="selected" [disabled]="disabled" [size]="size">design@brandsync.com</bs-chip-input>`,
  }),
};

export const Selected: Story = {
  args: { selected: true },
  render: args => ({
    props: args,
    template: `<bs-chip-input [selected]="selected" [size]="size">design@brandsync.com</bs-chip-input>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-chip-input [disabled]="disabled" [size]="size">design@brandsync.com</bs-chip-input>`,
  }),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <bs-chip-input size="md">Medium</bs-chip-input>
        <bs-chip-input size="lg">Large</bs-chip-input>
      </div>
    `,
  }),
};

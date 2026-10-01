import type { Meta, StoryObj } from '@storybook/angular';
import { BsCheckbox } from '@brandsync/angular';

const meta: Meta<BsCheckbox> = {
  title: 'Components/BsCheckbox',
  component: BsCheckbox,
  parameters: {
    docs: {
      description: {
        component:
          'A single checkbox with its label, for a binary choice or one item within a group of ' +
          'independent choices.\n\n' +
          '**When to use:** a single standalone binary setting (e.g. "Remember me", "I agree to the ' +
          'terms"); one item within a set of independent, non-exclusive choices (a checkbox ' +
          'group/list); `indeterminate` for a "select all" checkbox representing a partially-selected ' +
          'group.\n\n' +
          '**When not to use:** a single mutually-exclusive choice from a set — use a radio group ' +
          'instead; an on/off setting that takes effect immediately (no explicit form submission) — ' +
          'use `BsSwitch`.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name for the checkbox. Required whenever the default (label) slot is empty ' +
        '(e.g. a bare "select row" checkbox in a table).',
    },
    checked: {
      control: 'boolean',
      description:
        'Whether the checkbox is checked. When `indeterminate` is also true, `indeterminate` wins ' +
        'visually (shows the minus icon) regardless of this value.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox and prevents toggling.',
    },
    error: {
      control: 'boolean',
      description: 'Applies the error border/label-color treatment.',
    },
    indeterminate: {
      control: 'boolean',
      description:
        'Whether the checkbox is in the indeterminate ("partially selected") state — shows a minus ' +
        'icon instead of a check, and takes visual precedence over `checked`.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description:
        'Sizing scale. Controls the box\'s width/height and border width; corner radius is constant ' +
        'across all sizes.',
    },
  },
  args: {
    checked: false,
    disabled: false,
    error: false,
    indeterminate: false,
    size: 'lg',
  },
};

export default meta;
type Story = StoryObj<BsCheckbox>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-checkbox [checked]="checked" [disabled]="disabled" [error]="error" [indeterminate]="indeterminate" [size]="size">Remember me</bs-checkbox>`,
  }),
};

export const Checked: Story = {
  args: { checked: true },
  render: args => ({
    props: args,
    template: `<bs-checkbox [checked]="checked" [size]="size">I agree to the terms</bs-checkbox>`,
  }),
};

export const Indeterminate: Story = {
  args: { indeterminate: true },
  render: args => ({
    props: args,
    template: `<bs-checkbox [indeterminate]="indeterminate" [size]="size">Select all</bs-checkbox>`,
  }),
};

export const ErrorState: Story = {
  name: 'Error',
  args: { error: true },
  render: args => ({
    props: args,
    template: `<bs-checkbox [error]="error" [size]="size">I agree to the terms</bs-checkbox>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-checkbox [disabled]="disabled" [size]="size">Remember me</bs-checkbox>`,
  }),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <bs-checkbox size="sm" [checked]="true">Small</bs-checkbox>
        <bs-checkbox size="md" [checked]="true">Medium</bs-checkbox>
        <bs-checkbox size="lg" [checked]="true">Large</bs-checkbox>
      </div>
    `,
  }),
};

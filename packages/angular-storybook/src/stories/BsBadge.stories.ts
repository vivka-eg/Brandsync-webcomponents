import type { Meta, StoryObj } from '@storybook/angular';
import { BsBadge } from '@brandsync/angular';

const meta: Meta<BsBadge> = {
  title: 'Components/BsBadge',
  component: BsBadge,
  parameters: {
    docs: {
      description: {
        component:
          'A small status or category pill, usually paired with a label or list item.\n\n' +
          '**When to use:** communicating a short, fixed status (e.g. "Active", "On leave") or category label.\n\n' +
          '**When not to use:** as an interactive/clickable element — a badge is a label, not a control ' +
          '(use a button or chip component if it needs to be clickable), or for long text — badges are sized ' +
          'for one or two words.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'info', 'error', 'neutral', 'inverse'],
      description: 'Maps directly to the brandsync-tokens `--bs-badge-bg-*` / `--bs-badge-text-*` sets.',
    },
  },
  args: {
    variant: 'primary',
  },
};

export default meta;
type Story = StoryObj<BsBadge>;

export const Primary: Story = {
  render: args => ({
    props: args,
    template: `<bs-badge [variant]="variant">New</bs-badge>`,
  }),
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <bs-badge variant="default">Default</bs-badge>
        <bs-badge variant="primary">Primary</bs-badge>
        <bs-badge variant="success">Active</bs-badge>
        <bs-badge variant="warning">Pending</bs-badge>
        <bs-badge variant="info">Info</bs-badge>
        <bs-badge variant="error">Failed</bs-badge>
        <bs-badge variant="neutral">Archived</bs-badge>
      </div>
    `,
  }),
};

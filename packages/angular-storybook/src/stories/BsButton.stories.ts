import type { Meta, StoryObj } from '@storybook/angular';
import { BsButton } from '@brandsync/angular';

const meta: Meta<BsButton> = {
  title: 'Components/BsButton',
  component: BsButton,
  parameters: {
    docs: {
      description: {
        component:
          'A clickable action element for the single most important action in a given context.\n\n' +
          '**When to use:** the primary call to action on a screen or within a card/modal (e.g. "Book room", ' +
          '"Confirm"); secondary, lower-emphasis actions alongside it (`variant="neutral"`); `variant="error"` ' +
          'for destructive/irreversible actions (e.g. "Delete account") — per BrandSync guidance, destructive ' +
          'actions should always use the error variant, never `neutral`.\n\n' +
          '**When not to use:** for navigation between pages — use a link/nav component instead; for more than ' +
          'one primary-emphasis action in the same view — pick one, demote the rest to `neutral`; `error` purely ' +
          'for visual emphasis — reserve it for actions that actually delete/revoke/undo something.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'error', 'subtle', 'outlined', 'success', 'warning', 'info'],
      description:
        'Visual style. Maps directly to the brandsync-tokens `--bs-button-*` semantic set. `error` is for destructive/irreversible actions, not a stronger emphasis alternative to `primary`.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Sizing scale.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button and applies the disabled token set.',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Native `<button>` type.',
    },
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name for the button. Required for icon-only usage (no visible label text via the default slot) so screen readers still announce what the button does.',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<BsButton>;

export const Primary: Story = {
  render: args => ({
    props: args,
    template: `<bs-button [variant]="variant" [size]="size" [disabled]="disabled">Book room</bs-button>`,
  }),
};

export const Neutral: Story = {
  args: { variant: 'neutral' },
  render: args => ({
    props: args,
    template: `<bs-button [variant]="variant" [size]="size" [disabled]="disabled">Cancel</bs-button>`,
  }),
};

export const Outlined: Story = {
  args: { variant: 'outlined' },
  render: args => ({
    props: args,
    template: `<bs-button [variant]="variant" [size]="size" [disabled]="disabled">View details</bs-button>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-button [variant]="variant" [size]="size" [disabled]="disabled">Book room</bs-button>`,
  }),
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <bs-button variant="primary">Primary</bs-button>
        <bs-button variant="neutral">Neutral</bs-button>
        <bs-button variant="error">Error</bs-button>
        <bs-button variant="subtle">Subtle</bs-button>
        <bs-button variant="outlined">Outlined</bs-button>
        <bs-button variant="success">Success</bs-button>
        <bs-button variant="warning">Warning</bs-button>
        <bs-button variant="info">Info</bs-button>
      </div>
    `,
  }),
};

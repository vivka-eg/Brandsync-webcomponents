import type { Meta, StoryObj } from '@storybook/angular';
import { BsIconButton } from '@brandsync/angular';

const meta: Meta<BsIconButton> = {
  title: 'Components/BsIconButton',
  component: BsIconButton,
  parameters: {
    docs: {
      description: {
        component:
          'A clickable, icon-only action element — the icon-only sibling of `BsButton`, sharing ' +
          'the same 8 visual variants and color language, but always rendering just a single icon, ' +
          'never a label.\n\n' +
          '**When to use:** a compact action where the icon alone is unambiguous (e.g. a ' +
          'close/dismiss control, a toolbar action) and adding a text label would take up more space ' +
          'than the context allows.\n\n' +
          '**When not to use:** when the action isn\'t self-evident from the icon alone — use ' +
          '`BsButton` with a visible label instead; for navigation between pages — use a link/nav ' +
          'component instead.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name for the button. Required — this component is always icon-only, so there\'s ' +
        'no visible label text for screen readers to fall back on.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button and applies the disabled token set.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description:
        '`xs` (16px, an 8px icon) is a distinct, much smaller tier meant for compact chip/tag ' +
        '"remove" controls, not just a smaller toolbar button.',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Native `<button>` type.',
    },
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'error', 'subtle', 'outlined', 'success', 'warning', 'info'],
      description:
        'Visual style. Maps to the same semantic token families as `BsButton`\'s `variant`. `error` ' +
        'is for destructive/irreversible actions, never a stronger emphasis alternative to `primary`.',
    },
  },
  args: {
    ariaLabel: 'Close',
    disabled: false,
    size: 'md',
    type: 'button',
    variant: 'primary',
  },
};

export default meta;
type Story = StoryObj<BsIconButton>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-icon-button [ariaLabel]="ariaLabel" [size]="size" [variant]="variant" [disabled]="disabled" [type]="type"></bs-icon-button>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-icon-button [ariaLabel]="ariaLabel" [size]="size" [variant]="variant" [disabled]="disabled"></bs-icon-button>`,
  }),
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <bs-icon-button ariaLabel="Primary" variant="primary"></bs-icon-button>
        <bs-icon-button ariaLabel="Neutral" variant="neutral"></bs-icon-button>
        <bs-icon-button ariaLabel="Error" variant="error"></bs-icon-button>
        <bs-icon-button ariaLabel="Subtle" variant="subtle"></bs-icon-button>
        <bs-icon-button ariaLabel="Outlined" variant="outlined"></bs-icon-button>
        <bs-icon-button ariaLabel="Success" variant="success"></bs-icon-button>
        <bs-icon-button ariaLabel="Warning" variant="warning"></bs-icon-button>
        <bs-icon-button ariaLabel="Info" variant="info"></bs-icon-button>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <bs-icon-button ariaLabel="Extra small" size="xs"></bs-icon-button>
        <bs-icon-button ariaLabel="Small" size="sm"></bs-icon-button>
        <bs-icon-button ariaLabel="Medium" size="md"></bs-icon-button>
        <bs-icon-button ariaLabel="Large" size="lg"></bs-icon-button>
      </div>
    `,
  }),
};

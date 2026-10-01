import type { Meta, StoryObj } from '@storybook/angular';
import { BsSnackbar } from '@brandsync/angular';

const meta: Meta<BsSnackbar> = {
  title: 'Components/BsSnackbar',
  component: BsSnackbar,
  parameters: {
    docs: {
      description: {
        component:
          'A transient status bar for confirming the result of an action (e.g. "Files uploaded ' +
          'successfully.") — an icon (or loading spinner), a message, an optional action, and a ' +
          'close button. This component only renders the bar itself — it doesn\'t manage its own ' +
          'visibility, timing, or stacking; a consumer (typically a toast manager) owns that.\n\n' +
          '**When to use:** confirming the result of a user action, e.g. after a save/upload/delete.\n\n' +
          '**When not to use:** a message tied specifically to `BsComposer` — use ' +
          '`BsComposerStatusBanner` instead.',
      },
    },
  },
  argTypes: {
    actionLabel: {
      control: 'text',
      description:
        'Label for the optional action button (e.g. "Undo", "Retry"). Omit entirely to render no ' +
        'action button — its presence, not a boolean flag, is what shows it.',
    },
    loading: {
      control: 'boolean',
      description:
        'Replaces the checkmark icon with a spinning loading indicator, for in-progress work ' +
        'rather than a completed result.',
    },
    variant: {
      control: 'select',
      options: ['default', 'info', 'warning', 'success', 'error'],
      description:
        '`default` is the neutral (dark, inverse-surface) bar; `info`/`warning`/`success`/`error` ' +
        'use their matching container/text tokens.',
    },
  },
  args: {
    loading: false,
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<BsSnackbar>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-snackbar [variant]="variant" [loading]="loading" style="display: block; max-width: 360px;">Files uploaded successfully.</bs-snackbar>`,
  }),
};

export const WithAction: Story = {
  name: 'With action',
  args: { actionLabel: 'Undo', variant: 'success' },
  render: args => ({
    props: args,
    template: `<bs-snackbar [variant]="variant" [actionLabel]="actionLabel" style="display: block; max-width: 360px;">File deleted.</bs-snackbar>`,
  }),
};

export const Loading: Story = {
  args: { loading: true },
  render: args => ({
    props: args,
    template: `<bs-snackbar [loading]="loading" style="display: block; max-width: 360px;">Uploading files...</bs-snackbar>`,
  }),
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px; max-width: 360px;">
        <bs-snackbar variant="default">Default message.</bs-snackbar>
        <bs-snackbar variant="info">Informational message.</bs-snackbar>
        <bs-snackbar variant="warning">Warning message.</bs-snackbar>
        <bs-snackbar variant="success">Success message.</bs-snackbar>
        <bs-snackbar variant="error">Error message.</bs-snackbar>
      </div>
    `,
  }),
};

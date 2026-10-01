import type { Meta, StoryObj } from '@storybook/angular';
import { BsComposerStatusBanner, BsComposer } from '@brandsync/angular';

const meta: Meta<BsComposerStatusBanner> = {
  title: 'Components/BsComposerStatusBanner',
  component: BsComposerStatusBanner,
  parameters: {
    docs: {
      description: {
        component:
          'A full-width status banner for use directly above `BsComposer`, surfacing a message ' +
          'about the composer\'s current state (e.g. a send failure, an informational notice) with ' +
          'an optional "Continue"-style action button and an optional close button.\n\n' +
          '**When to use:** a message tied to the composer itself (send failed, rate-limited, draft ' +
          'restored, etc.) that needs to sit directly above it.\n\n' +
          '**When not to use:** a toast/snackbar notification unrelated to the composer — this ' +
          'component is not self-dismissing and has no positioning of its own.',
      },
    },
  },
  argTypes: {
    actionLabel: {
      control: 'text',
      description: 'Label for the action button, only rendered when `showButton` is true.',
    },
    allowClose: {
      control: 'boolean',
      description: 'Whether the close button is rendered.',
    },
    message: {
      control: 'text',
      description: 'The message text.',
    },
    showButton: {
      control: 'boolean',
      description: 'Whether the "Continue"-style action button is rendered.',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether the leading icon (default: clock) is rendered.',
    },
    type: {
      control: 'select',
      options: ['error', 'info', 'neutral', 'warning'],
      description:
        'Which severity/style to render. Drives background, text/icon color, and the action ' +
        'button\'s color.',
    },
  },
  args: {
    actionLabel: 'Continue',
    allowClose: true,
    message: 'This is a message',
    showButton: false,
    showIcon: true,
    type: 'error',
  },
};

export default meta;
type Story = StoryObj<BsComposerStatusBanner>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-composer-status-banner [message]="message" [type]="type" [showIcon]="showIcon" [allowClose]="allowClose" [showButton]="showButton" [actionLabel]="actionLabel"></bs-composer-status-banner>`,
  }),
};

export const WithAction: Story = {
  name: 'With action button',
  args: { type: 'warning', message: 'Your draft was restored.', showButton: true },
  render: args => ({
    props: args,
    template: `<bs-composer-status-banner [message]="message" [type]="type" [showButton]="showButton" [actionLabel]="actionLabel"></bs-composer-status-banner>`,
  }),
};

export const AboveComposer: Story = {
  name: 'Above a composer',
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsComposer] },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px; max-width: 480px;">
        <bs-composer-status-banner [message]="message" [type]="type" [allowClose]="allowClose"></bs-composer-status-banner>
        <bs-composer ariaLabel="Message"></bs-composer>
      </div>
    `,
  }),
};

export const AllTypes: Story = {
  name: 'All types',
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px; max-width: 480px;">
        <bs-composer-status-banner type="error" message="Message failed to send."></bs-composer-status-banner>
        <bs-composer-status-banner type="warning" message="You're approaching your rate limit."></bs-composer-status-banner>
        <bs-composer-status-banner type="info" message="Genie may occasionally produce inaccurate information."></bs-composer-status-banner>
        <bs-composer-status-banner type="neutral" message="Draft restored from your last session."></bs-composer-status-banner>
      </div>
    `,
  }),
};

import type { Meta, StoryObj } from '@storybook/angular';
import { BsComposer } from '@brandsync/angular';

const meta: Meta<BsComposer> = {
  title: 'Components/BsComposer',
  component: BsComposer,
  parameters: {
    docs: {
      description: {
        component:
          'A chat composer input for Genie AI-style conversational interfaces: a text field plus an ' +
          'attach button, a mic/voice-recording toggle, and a single primary action button whose ' +
          'icon and behavior change with `state` (send, stop generating, or confirm a voice ' +
          'recording).\n\n' +
          '**When to use:** the message-entry bar for an AI chat/assistant or human support ' +
          'conversation.\n\n' +
          '**When not to use:** a general-purpose text field — use `BsInput` instead; this ' +
          'component\'s layout and states are purpose-built for a chat composer, not a generic form ' +
          'field.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name for the text field. This component has no visible `<label>`, so this is ' +
        'the only way a consumer gives the textbox an accessible name — set it in every real usage.',
    },
    placeholder: {
      control: 'text',
      description: 'Overrides the variant\'s default placeholder.',
    },
    state: {
      control: 'select',
      options: ['idle', 'generating', 'disabled', 'recording'],
      description:
        'Which of the four mutually-exclusive composer states to render: `idle` (send, enabled), ' +
        '`generating` (stop, while the AI is responding), `disabled` (send, but not interactive), ' +
        'or `recording` (voice input in progress).',
    },
    value: {
      control: 'text',
      description:
        'Current text value. Re-dispatched as a `bsInput` custom event since native `input` events ' +
        'don\'t cross the Shadow DOM boundary.',
    },
    variant: {
      control: 'select',
      options: ['ai', 'human'],
      description:
        'Which flavor of composer this is: changes the default placeholder text and renders the ' +
        'container border dashed instead of solid for `human`.',
    },
  },
  args: {
    ariaLabel: 'Message',
    state: 'idle',
    value: '',
    variant: 'ai',
  },
};

export default meta;
type Story = StoryObj<BsComposer>;

export const Idle: Story = {
  render: args => ({
    props: args,
    template: `<bs-composer [ariaLabel]="ariaLabel" [state]="state" [value]="value" [variant]="variant" style="display: block; max-width: 480px;"></bs-composer>`,
  }),
};

export const Generating: Story = {
  args: { state: 'generating' },
  render: args => ({
    props: args,
    template: `<bs-composer [ariaLabel]="ariaLabel" [state]="state" [variant]="variant" style="display: block; max-width: 480px;"></bs-composer>`,
  }),
};

export const Recording: Story = {
  args: { state: 'recording' },
  render: args => ({
    props: args,
    template: `<bs-composer [ariaLabel]="ariaLabel" [state]="state" [variant]="variant" style="display: block; max-width: 480px;"></bs-composer>`,
  }),
};

export const HumanSupport: Story = {
  name: 'Human support variant',
  args: { variant: 'human' },
  render: args => ({
    props: args,
    template: `<bs-composer [ariaLabel]="ariaLabel" [state]="state" [variant]="variant" style="display: block; max-width: 480px;"></bs-composer>`,
  }),
};

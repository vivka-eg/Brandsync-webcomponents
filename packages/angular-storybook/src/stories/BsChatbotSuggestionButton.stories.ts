import type { Meta, StoryObj } from '@storybook/angular';
import { BsChatbotSuggestionButton } from '@brandsync/angular';

const meta: Meta<BsChatbotSuggestionButton> = {
  title: 'Components/BsChatbotSuggestionButton',
  component: BsChatbotSuggestionButton,
  parameters: {
    docs: {
      description: {
        component:
          'A pill-shaped clickable suggestion chip for a Genie AI chat panel (e.g. "How can I help ' +
          'you?"). One instance renders one chip — to show several suggestion prompts side by side, ' +
          'render multiple instances inside a plain flex-wrap container.\n\n' +
          '**When to use:** quick-reply/starter prompts shown above or alongside `BsComposer` in a ' +
          'Genie AI chat panel.\n\n' +
          '**When not to use:** as a general-purpose button — use `BsButton` instead, this ' +
          'component\'s pill shape and tonal color treatment are specific to Genie chat suggestion ' +
          'prompts.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the button and applies a reduced-opacity treatment.',
    },
  },
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<BsChatbotSuggestionButton>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-chatbot-suggestion-button [disabled]="disabled">What can you help me with?</bs-chatbot-suggestion-button>`,
  }),
};

export const SuggestionRow: Story = {
  name: 'Suggestion row',
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <bs-chatbot-suggestion-button>What can you help me with?</bs-chatbot-suggestion-button>
        <bs-chatbot-suggestion-button>Summarize this document</bs-chatbot-suggestion-button>
        <bs-chatbot-suggestion-button>Draft an email</bs-chatbot-suggestion-button>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-chatbot-suggestion-button [disabled]="disabled">What can you help me with?</bs-chatbot-suggestion-button>`,
  }),
};

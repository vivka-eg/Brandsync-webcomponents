import type { Meta, StoryObj } from '@storybook/angular';
import { BsChatbotResponseAction } from '@brandsync/angular';

const meta: Meta<BsChatbotResponseAction> = {
  title: 'Components/BsChatbotResponseAction',
  component: BsChatbotResponseAction,
  parameters: {
    docs: {
      description: {
        component:
          'The row of action buttons that appears below an AI response message in a Genie chat ' +
          'panel: like, dislike, copy, regenerate, and more-options icon buttons, plus an optional ' +
          '"N sources" button.\n\n' +
          '**When to use:** directly below an AI-generated response message in a Genie chat panel.\n\n' +
          '**When not to use:** below a user\'s own message — these actions (regenerate, ' +
          'like/dislike a response, etc.) only make sense for AI-generated content.',
      },
    },
  },
  argTypes: {
    menuOpen: {
      control: 'boolean',
      description:
        'Whether the "more options" popup menu (the `menu` slot) is currently open. Mutable + ' +
        'reflected so the component can track/close itself, while still emitting `bsMenuOpen`.',
    },
    sourcesCount: {
      control: { type: 'number', min: 0 },
      description:
        'Number of sources backing the response. When set to a positive number, renders the "N ' +
        'sources" button. When unset or `0`, the button is not rendered at all.',
    },
  },
  args: {
    menuOpen: false,
  },
};

export default meta;
type Story = StoryObj<BsChatbotResponseAction>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-chatbot-response-action [menuOpen]="menuOpen"></bs-chatbot-response-action>`,
  }),
};

export const WithSources: Story = {
  name: 'With sources',
  args: { sourcesCount: 3 },
  render: args => ({
    props: args,
    template: `<bs-chatbot-response-action [sourcesCount]="sourcesCount"></bs-chatbot-response-action>`,
  }),
};

import type { Meta, StoryObj } from '@storybook/angular';
import { BsAiThinking } from '@brandsync/angular';

const meta: Meta<BsAiThinking> = {
  title: 'Components/BsAiThinking',
  component: BsAiThinking,
  parameters: {
    docs: {
      description: {
        component:
          'A small inline status indicator for Genie AI surfaces: the colorful Genie mark next to a ' +
          'label (e.g. "Retrieving", "Thinking", "Searching") whose text shimmers with a moving ' +
          'highlight band while an operation is in progress.\n\n' +
          '**When to use:** inline in a Genie AI chat transcript to show what the assistant is ' +
          'currently doing while a response is being generated (retrieving context, searching, ' +
          'thinking).\n\n' +
          '**When not to use:** a blocking/full-panel loading state — this is a small inline ' +
          'indicator, not a spinner overlay.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The status text shown next to the icon, e.g. "Retrieving", "Thinking", "Searching".',
    },
  },
  args: {
    label: 'Thinking',
  },
};

export default meta;
type Story = StoryObj<BsAiThinking>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-ai-thinking [label]="label"></bs-ai-thinking>`,
  }),
};

export const Retrieving: Story = {
  args: { label: 'Retrieving' },
  render: args => ({
    props: args,
    template: `<bs-ai-thinking [label]="label"></bs-ai-thinking>`,
  }),
};

export const Searching: Story = {
  args: { label: 'Searching' },
  render: args => ({
    props: args,
    template: `<bs-ai-thinking [label]="label"></bs-ai-thinking>`,
  }),
};

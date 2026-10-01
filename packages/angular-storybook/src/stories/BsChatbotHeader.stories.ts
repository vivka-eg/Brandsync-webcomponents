import type { Meta, StoryObj } from '@storybook/angular';
import { BsChatbotHeader } from '@brandsync/angular';

const meta: Meta<BsChatbotHeader> = {
  title: 'Components/BsChatbotHeader',
  component: BsChatbotHeader,
  parameters: {
    docs: {
      description: {
        component:
          'The header bar that sits above `BsComposer` in a Genie AI chat panel: the Genie brand ' +
          'mark on the left and four fixed actions (new chat, history, expand, close) on the right.\n\n' +
          '**When to use:** the top bar of a Genie AI chat panel, directly above a `BsComposer`.\n\n' +
          '**When not to use:** a generic app/page header — this component\'s layout and actions are ' +
          'purpose-built for the Genie chat panel, not a general navigation bar.',
      },
    },
  },
  argTypes: {
    expanded: {
      control: 'boolean',
      description:
        'Whether the chat panel is currently expanded. This component only tracks/reflects the ' +
        'toggle state and emits `bsExpand` — the consuming app resizes its own chat panel container.',
    },
    heading: {
      control: 'text',
      description: 'Accessible label for the header landmark, and alt text context for the logo image.',
    },
  },
  args: {
    expanded: false,
    heading: 'Genie',
  },
};

export default meta;
type Story = StoryObj<BsChatbotHeader>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-chatbot-header [expanded]="expanded" [heading]="heading" style="display: block; max-width: 400px;"></bs-chatbot-header>`,
  }),
};

export const Expanded: Story = {
  args: { expanded: true },
  render: args => ({
    props: args,
    template: `<bs-chatbot-header [expanded]="expanded" [heading]="heading" style="display: block; max-width: 400px;"></bs-chatbot-header>`,
  }),
};

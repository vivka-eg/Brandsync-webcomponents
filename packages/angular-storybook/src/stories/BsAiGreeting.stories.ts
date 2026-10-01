import type { Meta, StoryObj } from '@storybook/angular';
import { BsAiGreeting } from '@brandsync/angular';

const meta: Meta<BsAiGreeting> = {
  title: 'Components/BsAiGreeting',
  component: BsAiGreeting,
  parameters: {
    docs: {
      description: {
        component:
          'The centered welcome heading shown at the top of an empty Genie AI chat panel, e.g. ' +
          '"Hi. I\'m Genie, your AI assistant." + "How can I help you with [product] today?"\n\n' +
          '**When to use:** the empty/initial state of a Genie AI chat panel, before the user has ' +
          'sent a message.\n\n' +
          '**When not to use:** once a conversation has started — this is a one-time empty-state ' +
          'greeting, not a persistent header (see `BsChatbotHeader` for that).',
      },
    },
  },
  argTypes: {
    assistantName: {
      control: 'text',
      description: 'The assistant\'s name, used in the heading ("Hi. I\'m {assistantName},").',
    },
    productName: {
      control: 'text',
      description:
        'The product name mentioned in the subtext. Omit to use a product-agnostic "How can I help ' +
        'you today?" subtext.',
    },
  },
  args: {
    assistantName: 'Genie',
  },
};

export default meta;
type Story = StoryObj<BsAiGreeting>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-ai-greeting [assistantName]="assistantName"></bs-ai-greeting>`,
  }),
};

export const WithProductName: Story = {
  name: 'With product name',
  args: { productName: 'BrandSync' },
  render: args => ({
    props: args,
    template: `<bs-ai-greeting [assistantName]="assistantName" [productName]="productName"></bs-ai-greeting>`,
  }),
};

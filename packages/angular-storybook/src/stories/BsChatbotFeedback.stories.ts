import type { Meta, StoryObj } from '@storybook/angular';
import { BsChatbotFeedback } from '@brandsync/angular';

const meta: Meta<BsChatbotFeedback> = {
  title: 'Components/BsChatbotFeedback',
  component: BsChatbotFeedback,
  parameters: {
    docs: {
      description: {
        component:
          'A star-rating feedback card shown at the end of a Genie AI chat: a heading/subtitle, a ' +
          '5-star rating, an optional comment, and either "Submit feedback" + "Start new chat" ' +
          '(before submitting) or just "Start new chat" (after).\n\n' +
          '**When to use:** prompting for feedback on a Genie response or chat session, typically ' +
          'after the user ends or restarts a conversation.\n\n' +
          '**When not to use:** a generic star-rating input elsewhere in the product — this ' +
          'component\'s copy and layout are purpose-built for the Genie feedback flow, not a reusable ' +
          'rating control.',
      },
    },
  },
  argTypes: {
    comment: {
      control: 'text',
      description: 'The comment text.',
    },
    heading: {
      control: 'text',
      description:
        'Overrides the computed heading. Before submitting it\'s always "How was your experience..."; ' +
        'after submitting it\'s derived from `rating`.',
    },
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'Current star rating, 0-5. 0 means no rating has been given yet.',
    },
    submitted: {
      control: 'boolean',
      description:
        'Whether feedback has been submitted. Switches the card from the editable form to the ' +
        'read-only "thanks" view.',
    },
    subtitle: {
      control: 'text',
      description: 'Overrides the computed subtitle.',
    },
  },
  args: {
    comment: '',
    rating: 0,
    submitted: false,
  },
};

export default meta;
type Story = StoryObj<BsChatbotFeedback>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-chatbot-feedback [comment]="comment" [rating]="rating" [submitted]="submitted" style="display: block; max-width: 400px;"></bs-chatbot-feedback>`,
  }),
};

export const Rated: Story = {
  args: { rating: 4 },
  render: args => ({
    props: args,
    template: `<bs-chatbot-feedback [rating]="rating" style="display: block; max-width: 400px;"></bs-chatbot-feedback>`,
  }),
};

export const Submitted: Story = {
  args: { rating: 5, submitted: true },
  render: args => ({
    props: args,
    template: `<bs-chatbot-feedback [rating]="rating" [submitted]="submitted" style="display: block; max-width: 400px;"></bs-chatbot-feedback>`,
  }),
};

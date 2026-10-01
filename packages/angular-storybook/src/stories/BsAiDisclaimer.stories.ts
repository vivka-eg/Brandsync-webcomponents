import type { Meta, StoryObj } from '@storybook/angular';
import { BsAiDisclaimer } from '@brandsync/angular';

const meta: Meta<BsAiDisclaimer> = {
  title: 'Components/BsAiDisclaimer',
  component: BsAiDisclaimer,
  parameters: {
    docs: {
      description: {
        component:
          'A centered caption disclaimer for Genie AI surfaces, e.g. "AI can make mistakes. Please ' +
          'verify important information."\n\n' +
          '**When to use:** below or above `BsComposer` in a Genie AI chat panel, to remind users AI ' +
          'output can be wrong.\n\n' +
          '**When not to use:** a general-purpose caption/helper text — use plain text or `BsInput`\'s ' +
          'description for non-AI-related helper copy.\n\n' +
          'The default slot (rather than a fixed prop) is intentional: some consuming apps link out to ' +
          'a policy/help page from this copy, so a slot supports that without inventing an unconfirmed ' +
          '`href`/link prop.',
      },
    },
  },
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<BsAiDisclaimer>;

export const Default: Story = {
  render: () => ({
    template: `<bs-ai-disclaimer>AI can make mistakes. Please verify important information.</bs-ai-disclaimer>`,
  }),
};

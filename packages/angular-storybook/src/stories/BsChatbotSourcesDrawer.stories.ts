import type { Meta, StoryObj } from '@storybook/angular';
import { BsChatbotSourcesDrawer, BsSourceLink } from '@brandsync/angular';

const meta: Meta<BsChatbotSourcesDrawer> = {
  title: 'Components/BsChatbotSourcesDrawer',
  component: BsChatbotSourcesDrawer,
  parameters: {
    docs: {
      description: {
        component:
          'The "Sources" panel shown alongside a Genie AI chat response — a header with a title, a ' +
          'count badge, and a collapse chevron, above a stack of `BsSourceLink` citation rows.\n\n' +
          '**When to use:** displaying the documents/sources a Genie response cited, typically ' +
          'opened from a "view sources" action on a `BsChatbotResponseAction` bar.\n\n' +
          '**When not to use:** a generic list container — this component\'s header (title + count + ' +
          'collapse) is purpose-built for the sources use case.',
      },
    },
  },
  argTypes: {
    count: {
      control: { type: 'number', min: 0 },
      description:
        'Overrides the auto-detected count badge. By default the badge reflects the number of ' +
        'slotted `BsSourceLink` children, so most consumers don\'t need to set this.',
    },
    heading: {
      control: 'text',
      description: 'The panel title.',
    },
  },
  args: {
    heading: 'Sources',
  },
};

export default meta;
type Story = StoryObj<BsChatbotSourcesDrawer>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsSourceLink] },
    template: `
      <bs-chatbot-sources-drawer [heading]="heading" style="display: block; max-width: 360px;">
        <bs-source-link fileName="Employee-handbook.pdf" sourceName="HoltePortalen" version="v3.2" href="https://example.com/handbook.pdf"></bs-source-link>
        <bs-source-link fileName="Onboarding-checklist.docx" sourceName="SharePoint"></bs-source-link>
      </bs-chatbot-sources-drawer>
    `,
  }),
};

export const WithCountOverride: Story = {
  name: 'With count override',
  args: { count: 5 },
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsSourceLink] },
    template: `
      <bs-chatbot-sources-drawer [heading]="heading" [count]="count" style="display: block; max-width: 360px;">
        <bs-source-link fileName="Employee-handbook.pdf" sourceName="HoltePortalen"></bs-source-link>
      </bs-chatbot-sources-drawer>
    `,
  }),
};

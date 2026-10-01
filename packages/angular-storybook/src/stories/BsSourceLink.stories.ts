import type { Meta, StoryObj } from '@storybook/angular';
import { BsSourceLink } from '@brandsync/angular';

const meta: Meta<BsSourceLink> = {
  title: 'Components/BsSourceLink',
  component: BsSourceLink,
  parameters: {
    docs: {
      description: {
        component:
          'A single citation row inside `BsChatbotSourcesDrawer` — a file icon + filename on the ' +
          'first line, the originating system and version on the second, and a trailing "open" ' +
          'arrow.\n\n' +
          '**When to use:** one row per source Genie cited in a response, slotted into ' +
          '`BsChatbotSourcesDrawer`.\n\n' +
          '**When not to use:** outside the sources drawer context — this is a purpose-built ' +
          'citation row, not a generic link/list-item component.',
      },
    },
  },
  argTypes: {
    fileName: {
      control: 'text',
      description: 'The cited document\'s filename.',
    },
    href: {
      control: 'text',
      description:
        'If set, renders the row as a link that opens this URL; otherwise as a button that only ' +
        'emits `bsOpen`.',
    },
    sourceName: {
      control: 'text',
      description: 'The system/app the document came from (e.g. "HoltePortalen").',
    },
    target: {
      control: 'text',
      description: '`target` used when `href` is set.',
    },
    version: {
      control: 'text',
      description: 'The document\'s version label (e.g. "v3.2"). Omit if the source has no version.',
    },
  },
  args: {
    fileName: 'Source',
    target: '_blank',
  },
};

export default meta;
type Story = StoryObj<BsSourceLink>;

export const Default: Story = {
  args: {
    fileName: 'Employee-handbook.pdf',
    sourceName: 'HoltePortalen',
    version: 'v3.2',
    href: 'https://example.com/employee-handbook.pdf',
  },
  render: args => ({
    props: args,
    template: `<bs-source-link [fileName]="fileName" [sourceName]="sourceName" [version]="version" [href]="href" [target]="target"></bs-source-link>`,
  }),
};

export const WithoutHref: Story = {
  name: 'Without href (button)',
  args: { fileName: 'Internal-notes.docx', sourceName: 'SharePoint' },
  render: args => ({
    props: args,
    template: `<bs-source-link [fileName]="fileName" [sourceName]="sourceName"></bs-source-link>`,
  }),
};

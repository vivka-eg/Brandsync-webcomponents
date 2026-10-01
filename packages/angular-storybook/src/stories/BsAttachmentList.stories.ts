import type { Meta, StoryObj } from '@storybook/angular';
import { BsAttachmentList, BsAttachment } from '@brandsync/angular';

const PLACEHOLDER_IMAGE = 'https://picsum.photos/seed/bsattachmentlist/200';

const meta: Meta<BsAttachmentList> = {
  title: 'Components/BsAttachmentList',
  component: BsAttachmentList,
  parameters: {
    docs: {
      description: {
        component:
          'A horizontally-scrolling row wrapper for one or more `BsAttachment` previews, for slotting ' +
          'into `BsComposer`\'s `attachments` slot when a Genie AI chat message has file attachments.\n\n' +
          '**When to use:** wrapping any number of `BsAttachment` elements the user has attached to a ' +
          'message, so they lay out in a single row and scroll horizontally instead of ' +
          'wrapping/overflowing once there are more than fit the available width.\n\n' +
          '**When not to use:** a single attachment on its own — just render `BsAttachment` directly, ' +
          'this wrapper\'s scroll/fade affordance only matters once there\'s more content than fits.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the scrollable region.',
    },
  },
  args: {
    ariaLabel: 'Attachments',
  },
};

export default meta;
type Story = StoryObj<BsAttachmentList>;

export const Default: Story = {
  render: args => ({
    props: { ...args, src: PLACEHOLDER_IMAGE },
    moduleMetadata: { imports: [BsAttachment] },
    template: `
      <bs-attachment-list [ariaLabel]="ariaLabel">
        <bs-attachment type="image" [imageSrc]="src" imageAlt="Preview"></bs-attachment>
        <bs-attachment type="pdf" fileName="Q3-report.pdf"></bs-attachment>
        <bs-attachment type="document" fileName="Meeting-notes.docx"></bs-attachment>
      </bs-attachment-list>
    `,
  }),
};

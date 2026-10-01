import type { Meta, StoryObj } from '@storybook/angular';
import { BsAttachment } from '@brandsync/angular';

const PLACEHOLDER_IMAGE = 'https://picsum.photos/seed/bsattachment/200';

const meta: Meta<BsAttachment> = {
  title: 'Components/BsAttachment',
  component: BsAttachment,
  parameters: {
    docs: {
      description: {
        component:
          'A single file attachment preview for `BsComposer` — an image thumbnail, or a filename card ' +
          'with a colored file-type badge (PDF/Document), with an optional upload-in-progress spinner ' +
          'and a hover/focus-revealed remove button.\n\n' +
          '**When to use:** rendered by the consuming app for each file a user has attached to a ' +
          'Genie AI chat message, typically alongside or inside `BsComposer`/`BsAttachmentList`.\n\n' +
          '**When not to use:** a generic file-upload control — this is a preview-only presentational ' +
          'component. The consuming app owns the actual file picker/upload logic and drives `loading` ' +
          'from that state.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['image', 'pdf', 'document'],
      description: 'Which kind of attachment preview to render.',
    },
    fileName: {
      control: 'text',
      description: 'The filename shown on the card. Only used when `type` is "pdf" or "document".',
    },
    imageSrc: {
      control: 'text',
      description: 'The thumbnail image URL. Only used when `type` is "image".',
    },
    imageAlt: {
      control: 'text',
      description: 'Accessible alt text for the image thumbnail. Only used when `type` is "image".',
    },
    loading: {
      control: 'boolean',
      description:
        'Shows an upload-in-progress spinner (blurred + overlaid for images, in the badge for files).',
    },
    removable: {
      control: 'boolean',
      description: 'Whether the hover/focus-revealed remove button is rendered at all.',
    },
  },
  args: {
    type: 'image',
    fileName: 'Attachment',
    imageAlt: '',
    loading: false,
    removable: true,
  },
};

export default meta;
type Story = StoryObj<BsAttachment>;

export const Image: Story = {
  args: { imageSrc: PLACEHOLDER_IMAGE, imageAlt: 'Preview thumbnail' },
  render: args => ({
    props: args,
    template: `<bs-attachment [type]="type" [imageSrc]="imageSrc" [imageAlt]="imageAlt" [removable]="removable"></bs-attachment>`,
  }),
};

export const Pdf: Story = {
  args: { type: 'pdf', fileName: 'Q3-report.pdf' },
  render: args => ({
    props: args,
    template: `<bs-attachment [type]="type" [fileName]="fileName" [removable]="removable"></bs-attachment>`,
  }),
};

export const Document: Story = {
  args: { type: 'document', fileName: 'Meeting-notes.docx' },
  render: args => ({
    props: args,
    template: `<bs-attachment [type]="type" [fileName]="fileName" [removable]="removable"></bs-attachment>`,
  }),
};

export const Loading: Story = {
  args: { type: 'pdf', fileName: 'Uploading.pdf', loading: true },
  render: args => ({
    props: args,
    template: `<bs-attachment [type]="type" [fileName]="fileName" [loading]="loading" [removable]="removable"></bs-attachment>`,
  }),
};

export const AllTypes: Story = {
  name: 'All types',
  render: () => ({
    props: { src: PLACEHOLDER_IMAGE },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <bs-attachment type="image" [imageSrc]="src" imageAlt="Preview"></bs-attachment>
        <bs-attachment type="pdf" fileName="Q3-report.pdf"></bs-attachment>
        <bs-attachment type="document" fileName="Meeting-notes.docx"></bs-attachment>
      </div>
    `,
  }),
};

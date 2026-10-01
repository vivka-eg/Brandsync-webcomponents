import type { Meta, StoryObj } from '@storybook/angular';
import { BsCard, BsButton } from '@brandsync/angular';

const meta: Meta<BsCard> = {
  title: 'Components/BsCard',
  component: BsCard,
  parameters: {
    docs: {
      description: {
        component:
          'A bounded surface for grouping related content — a summary, a form section, a list ' +
          'item. Supports optional `image`, `header`, and `footer` slots around the default body ' +
          'slot.\n\n' +
          '**When to use:** grouping a self-contained piece of content that needs visual separation ' +
          'from the page background (e.g. a booking summary, a settings section).\n\n' +
          '**When not to use:** as the only structural element on a page — cards group content, ' +
          'they don\'t replace layout; for a dismissible/transient message — use a modal or a ' +
          'dedicated notification component.',
      },
    },
  },
  argTypes: {
    surface: {
      control: 'select',
      options: ['base', 'raised', 'container'],
      description:
        'Maps to the brandsync-tokens `--bs-paper-bg-*` set — Brandsync\'s tokens don\'t have a ' +
        'dedicated "card" component yet, so this reuses the existing Paper surface tokens.',
    },
  },
  args: {
    surface: 'raised',
  },
};

export default meta;
type Story = StoryObj<BsCard>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsButton] },
    template: `
      <bs-card [surface]="surface" style="max-width: 320px; display: block;">
        <div slot="header" style="font-weight: 600;">Booking summary</div>
        Room 204, 2 nights, breakfast included.
        <div slot="footer"><bs-button variant="primary" size="sm">Confirm</bs-button></div>
      </bs-card>
    `,
  }),
};

export const WithImage: Story = {
  name: 'With image',
  render: args => ({
    props: args,
    template: `
      <bs-card [surface]="surface" style="max-width: 320px; display: block;">
        <img slot="image" src="https://picsum.photos/seed/bscard/320/160" alt="" />
        <div slot="header" style="font-weight: 600;">Deluxe Room</div>
        Spacious room with a king bed and city view.
      </bs-card>
    `,
  }),
};

export const AllSurfaces: Story = {
  name: 'All surfaces',
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <bs-card surface="base" style="width: 200px; display: block;">Base surface</bs-card>
        <bs-card surface="raised" style="width: 200px; display: block;">Raised surface</bs-card>
        <bs-card surface="container" style="width: 200px; display: block;">Container surface</bs-card>
      </div>
    `,
  }),
};

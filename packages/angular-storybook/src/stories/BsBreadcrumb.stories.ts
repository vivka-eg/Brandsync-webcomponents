import type { Meta, StoryObj } from '@storybook/angular';
import { BsBreadcrumb, BsBreadcrumbs } from '@brandsync/angular';

const meta: Meta<BsBreadcrumb> = {
  title: 'Components/BsBreadcrumb',
  component: BsBreadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          'A single crumb within a `BsBreadcrumbs` trail: a leading separator icon plus either a ' +
          'link, plain text, or the current-page label, depending on `current`/`href`. Follows the ' +
          'W3C ARIA breadcrumb pattern — the current page is marked `aria-current="page"` and is ' +
          'never a link, even if `href` is also set.\n\n' +
          '**When to use:** as one crumb inside a `BsBreadcrumbs` trail.\n\n' +
          '**When not to use:** standalone, outside a `BsBreadcrumbs` wrapper — its `<ol>`/`<nav>` ' +
          'context and first-child-aware separator hiding depend on that parent structure.',
      },
    },
  },
  argTypes: {
    href: {
      control: 'text',
      description: 'Destination for a non-current crumb. Ignored when `current` is true.',
    },
    current: {
      control: 'boolean',
      description:
        'Whether this crumb is the current page. Renders as plain (non-link) text marked ' +
        '`aria-current="page"`.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description:
        'Size variant. Normally set automatically by a parent `BsBreadcrumbs[size]` — can also be ' +
        'set directly on a standalone crumb.',
    },
  },
  args: {
    current: false,
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<BsBreadcrumb>;

export const Default: Story = {
  args: { href: '/bookings' },
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsBreadcrumbs] },
    template: `
      <bs-breadcrumbs label="Breadcrumb">
        <bs-breadcrumb href="/">Home</bs-breadcrumb>
        <bs-breadcrumb [href]="href" [size]="size">Bookings</bs-breadcrumb>
        <bs-breadcrumb [current]="true" [size]="size">Room 204</bs-breadcrumb>
      </bs-breadcrumbs>
    `,
  }),
};

export const CurrentPage: Story = {
  name: 'Current page',
  args: { current: true },
  render: args => ({
    props: args,
    template: `<bs-breadcrumb [current]="current" [size]="size">Room 204</bs-breadcrumb>`,
  }),
};

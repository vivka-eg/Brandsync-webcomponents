import type { Meta, StoryObj } from '@storybook/angular';
import { BsBreadcrumbOverflow, BsBreadcrumbs, BsBreadcrumb } from '@brandsync/angular';

const meta: Meta<BsBreadcrumbOverflow> = {
  title: 'Components/BsBreadcrumbOverflow',
  component: BsBreadcrumbOverflow,
  parameters: {
    docs: {
      description: {
        component:
          'A manually-placed collapsed-items disclosure for a `BsBreadcrumbs` trail: a leading ' +
          'separator plus an icon-only ellipsis button that reveals a popup listing every hidden ' +
          'crumb. This component does no collapsing logic itself — the consumer decides which ' +
          'crumbs to hide and places this element wherever they want the disclosure.\n\n' +
          '**When to use:** inside a `BsBreadcrumbs` trail, wherever the consumer wants an ' +
          'interactive disclosure for crumbs they\'ve chosen not to render directly.\n\n' +
          '**When not to use:** as an automatic collapsing mechanism — there is none; the consumer ' +
          'decides what\'s hidden.',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description:
        'Array prop — must be set as a JS property, not an HTML attribute. The hidden crumbs ' +
        'reachable via this disclosure (each `{ label: string; href?: string }`); no collapsing ' +
        'logic here, the consumer decides what goes in this list.',
    },
    overflowLabel: {
      control: 'text',
      description: 'Accessible name (`aria-label`) for the icon-only ellipsis trigger button.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description:
        'Size variant. Normally set automatically by a parent `BsBreadcrumbs[size]`; can also be ' +
        'set directly on a standalone instance.',
    },
  },
  args: {
    items: [
      { label: 'Bookings', href: '/bookings' },
      { label: 'Rooms', href: '/bookings/rooms' },
    ],
    overflowLabel: 'Show hidden breadcrumbs',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<BsBreadcrumbOverflow>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsBreadcrumbs, BsBreadcrumb] },
    template: `
      <bs-breadcrumbs label="Breadcrumb">
        <bs-breadcrumb href="/">Home</bs-breadcrumb>
        <bs-breadcrumb-overflow [items]="items" [overflowLabel]="overflowLabel" [size]="size"></bs-breadcrumb-overflow>
        <bs-breadcrumb [current]="true">Room 204</bs-breadcrumb>
      </bs-breadcrumbs>
    `,
  }),
};

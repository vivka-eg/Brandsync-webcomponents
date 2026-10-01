import type { Meta, StoryObj } from '@storybook/angular';
import { BsBreadcrumbs, BsBreadcrumb, BsBreadcrumbOverflow } from '@brandsync/angular';

const meta: Meta<BsBreadcrumbs> = {
  title: 'Components/BsBreadcrumbs',
  component: BsBreadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          'A breadcrumb trail container: a real `<nav>` landmark wrapping an `<ol>`, meant to be ' +
          'populated with slotted `BsBreadcrumb` (and, where the consumer wants a collapsed-items ' +
          'disclosure, `BsBreadcrumbOverflow`) children. This component is intentionally thin: it ' +
          'owns only the `<nav>` landmark and list semantics, and propagates `size` to every slotted ' +
          'child — there is no automatic collapsing, the consumer decides what\'s visible.\n\n' +
          '**When to use:** showing a user\'s current location within a hierarchical page structure, ' +
          'with a path back to its ancestors.\n\n' +
          '**When not to use:** primary in-app navigation — use `BsNavigationDrawer`/' +
          '`BsNavigationHeader` instead; a flat set of unrelated pages with no hierarchy — ' +
          'breadcrumbs imply ancestry, not just history.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Accessible name for the `<nav>` landmark, via `aria-label`.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description:
        'Size variant, propagated as a JS property to every slotted `BsBreadcrumb`/' +
        '`BsBreadcrumbOverflow` child.',
    },
  },
  args: {
    label: 'Breadcrumb',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<BsBreadcrumbs>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsBreadcrumb] },
    template: `
      <bs-breadcrumbs [label]="label" [size]="size">
        <bs-breadcrumb href="/">Home</bs-breadcrumb>
        <bs-breadcrumb href="/bookings">Bookings</bs-breadcrumb>
        <bs-breadcrumb [current]="true">Room 204</bs-breadcrumb>
      </bs-breadcrumbs>
    `,
  }),
};

export const WithOverflow: Story = {
  name: 'With overflow disclosure',
  render: args => ({
    props: {
      ...args,
      hiddenItems: [
        { label: 'Bookings', href: '/bookings' },
        { label: 'Rooms', href: '/bookings/rooms' },
      ],
    },
    moduleMetadata: { imports: [BsBreadcrumb, BsBreadcrumbOverflow] },
    template: `
      <bs-breadcrumbs [label]="label" [size]="size">
        <bs-breadcrumb href="/">Home</bs-breadcrumb>
        <bs-breadcrumb-overflow [items]="hiddenItems" [size]="size"></bs-breadcrumb-overflow>
        <bs-breadcrumb [current]="true">Room 204</bs-breadcrumb>
      </bs-breadcrumbs>
    `,
  }),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    moduleMetadata: { imports: [BsBreadcrumb] },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <bs-breadcrumbs label="Breadcrumb" size="sm">
          <bs-breadcrumb href="/">Home</bs-breadcrumb>
          <bs-breadcrumb [current]="true">Room 204</bs-breadcrumb>
        </bs-breadcrumbs>
        <bs-breadcrumbs label="Breadcrumb" size="md">
          <bs-breadcrumb href="/">Home</bs-breadcrumb>
          <bs-breadcrumb [current]="true">Room 204</bs-breadcrumb>
        </bs-breadcrumbs>
      </div>
    `,
  }),
};

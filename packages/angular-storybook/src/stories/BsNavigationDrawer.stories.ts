import type { Meta, StoryObj } from '@storybook/angular';
import { BsNavigationDrawer, BsNavigationDrawerItem } from '@brandsync/angular';

const meta: Meta<BsNavigationDrawer> = {
  title: 'Components/BsNavigationDrawer',
  component: BsNavigationDrawer,
  parameters: {
    docs: {
      description: {
        component:
          'A left-side persistent navigation sidebar: the BrandSync logo, a "Main Menu" title with ' +
          'a collapse toggle, a reserved slot for a search field, and a scrollable list of nav ' +
          'items.\n\n' +
          '**When to use:** the primary in-app navigation, shown alongside `BsNavigationHeader` ' +
          '(typically that header\'s `with-navigation-drawer` alignment, which omits its own logo ' +
          'since this component already renders one).\n\n' +
          '**When not to use:** the top navigation bar itself — use `BsNavigationHeader` instead.',
      },
    },
  },
  argTypes: {
    collapsed: {
      control: 'boolean',
      description:
        'Narrows the drawer to a 96px icon-only rail. Mutable + reflected — clicking the collapse ' +
        'toggle toggles this directly, and keeps every child `BsNavigationDrawerItem`\'s own ' +
        '`collapsed` prop synced to match.',
    },
    collapsible: {
      control: 'boolean',
      description:
        'Whether this drawer can be collapsed at all. `false` renders no collapse toggle/chevron ' +
        '— a "fixed" side nav that\'s always fully expanded.',
    },
    heading: {
      control: 'text',
      description:
        'Heading text shown next to the collapse toggle, and used as the `<nav>` landmark\'s ' +
        '`aria-label`.',
    },
    logoBackground: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description: 'Forwarded straight to both internal `BsLogo` elements\' own `background` prop.',
    },
    showLogo: {
      control: 'boolean',
      description: 'Whether to render the BrandSync logo at all.',
    },
  },
  args: {
    collapsed: false,
    collapsible: true,
    heading: 'Main Menu',
    logoBackground: 'auto',
    showLogo: true,
  },
};

export default meta;
type Story = StoryObj<BsNavigationDrawer>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsNavigationDrawerItem] },
    template: `
      <bs-navigation-drawer [collapsed]="collapsed" [collapsible]="collapsible" [heading]="heading" [showLogo]="showLogo" style="display: block; max-width: 280px;">
        <bs-navigation-drawer-item [selected]="true">Dashboard</bs-navigation-drawer-item>
        <bs-navigation-drawer-item>Bookings</bs-navigation-drawer-item>
        <bs-navigation-drawer-item>Settings</bs-navigation-drawer-item>
      </bs-navigation-drawer>
    `,
  }),
};

export const Collapsed: Story = {
  args: { collapsed: true },
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsNavigationDrawerItem] },
    template: `
      <bs-navigation-drawer [collapsed]="collapsed" [heading]="heading" style="display: block; max-width: 100px;">
        <bs-navigation-drawer-item [selected]="true" [collapsed]="collapsed">Dashboard</bs-navigation-drawer-item>
        <bs-navigation-drawer-item [collapsed]="collapsed">Bookings</bs-navigation-drawer-item>
      </bs-navigation-drawer>
    `,
  }),
};

export const NotCollapsible: Story = {
  name: 'Not collapsible',
  args: { collapsible: false },
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsNavigationDrawerItem] },
    template: `
      <bs-navigation-drawer [collapsible]="collapsible" [heading]="heading" style="display: block; max-width: 280px;">
        <bs-navigation-drawer-item [selected]="true">Dashboard</bs-navigation-drawer-item>
        <bs-navigation-drawer-item>Bookings</bs-navigation-drawer-item>
      </bs-navigation-drawer>
    `,
  }),
};

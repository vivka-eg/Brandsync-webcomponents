import type { Meta, StoryObj } from '@storybook/angular';
import { BsNavigationDrawerItem, BsNavigationDrawer } from '@brandsync/angular';

const meta: Meta<BsNavigationDrawerItem> = {
  title: 'Components/BsNavigationDrawerItem',
  component: BsNavigationDrawerItem,
  parameters: {
    docs: {
      description: {
        component:
          'A single row within a `BsNavigationDrawer`\'s item list — either a plain leaf nav item, ' +
          'or an `expandable` group header that discloses nested `BsNavigationDrawerItem` children.\n\n' +
          '**When to use:** every row inside a `BsNavigationDrawer`\'s default slot.\n\n' +
          '**When not to use:** a standalone action outside a navigation drawer — use ' +
          '`BsButton`/`BsMenuItem` instead.\n\n' +
          'Click behavior is mutually exclusive, based on `expandable`: a plain leaf item only ' +
          'emits `bsSelect` (NOT self-toggling `selected`); an `expandable` group header ' +
          'self-toggles `expanded` and emits `bsToggle` instead.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Optional accessible name override.',
    },
    collapsed: {
      control: 'boolean',
      description:
        'Switches this row to the compact icon-above-caption column layout used when its parent ' +
        '`BsNavigationDrawer` is `collapsed`.',
    },
    expandable: {
      control: 'boolean',
      description:
        'Renders this row as a disclosure/group header (trailing chevron, self-toggling ' +
        '`expanded`, `bsToggle` instead of `bsSelect` on click) instead of a plain navigable leaf.',
    },
    expanded: {
      control: 'boolean',
      description:
        'Whether an `expandable` row\'s `children` slot is shown. Mutable and reflected. Ignored ' +
        'when `expandable` is false.',
    },
    nested: {
      control: 'boolean',
      description:
        'Marks this as a child row nested under an `expandable` parent (via `slot="children"`).',
    },
    selected: {
      control: 'boolean',
      description:
        'Tints the row to indicate it\'s the current destination. NOT self-toggling. Ignored when ' +
        '`expandable` is true.',
    },
  },
  args: {
    collapsed: false,
    expandable: false,
    expanded: false,
    nested: false,
    selected: false,
  },
};

export default meta;
type Story = StoryObj<BsNavigationDrawerItem>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsNavigationDrawer] },
    template: `
      <bs-navigation-drawer heading="Main Menu" style="display: block; max-width: 280px;">
        <bs-navigation-drawer-item [selected]="selected" [collapsed]="collapsed">Dashboard</bs-navigation-drawer-item>
        <bs-navigation-drawer-item>Bookings</bs-navigation-drawer-item>
      </bs-navigation-drawer>
    `,
  }),
};

export const Expandable: Story = {
  args: { expandable: true, expanded: true },
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsNavigationDrawer] },
    template: `
      <bs-navigation-drawer heading="Main Menu" style="display: block; max-width: 280px;">
        <bs-navigation-drawer-item [expandable]="expandable" [expanded]="expanded">
          Settings
          <bs-navigation-drawer-item slot="children" [nested]="true">General</bs-navigation-drawer-item>
          <bs-navigation-drawer-item slot="children" [nested]="true">Billing</bs-navigation-drawer-item>
        </bs-navigation-drawer-item>
      </bs-navigation-drawer>
    `,
  }),
};

export const Selected: Story = {
  args: { selected: true },
  render: args => ({
    props: args,
    template: `<bs-navigation-drawer-item [selected]="selected">Dashboard</bs-navigation-drawer-item>`,
  }),
};

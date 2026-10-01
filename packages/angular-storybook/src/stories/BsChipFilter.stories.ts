import type { Meta, StoryObj } from '@storybook/angular';
import { BsChipFilter } from '@brandsync/angular';

const meta: Meta<BsChipFilter> = {
  title: 'Components/BsChipFilter',
  component: BsChipFilter,
  parameters: {
    docs: {
      description: {
        component:
          'A pill-shaped, selectable toggle used to filter a list or dataset (e.g. a "Filter chip" ' +
          'row above a table or search results), optionally paired with a leading icon and/or a ' +
          'dropdown caret that signals it opens a menu of further options.\n\n' +
          '**When to use:** letting a user toggle a filter on/off, or open a menu of filter options ' +
          '(pair `dropdown` with your own `BsMenu` — this component only renders the caret ' +
          'affordance, it doesn\'t manage a menu itself).\n\n' +
          '**When not to use:** a static, non-interactive status/category label — use `BsBadge` ' +
          'instead; a single primary action — use `BsButton`.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name override. The visible label already gives the native button an accessible ' +
        'name, so this is only needed if that text doesn\'t convey that activating the chip toggles ' +
        'a filter.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the chip and prevents toggling.',
    },
    dropdown: {
      control: 'boolean',
      description:
        'Shows a trailing dropdown caret, signaling this chip opens a menu of further options. ' +
        'Purely a visual affordance — wire up the actual menu (e.g. `BsMenu`) yourself.',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the chip reads as toggled on. Mutable so clicking it toggles directly.',
    },
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: 'Sizing scale. Controls the chip\'s height only.',
    },
  },
  args: {
    disabled: false,
    dropdown: false,
    selected: false,
    size: 'lg',
  },
};

export default meta;
type Story = StoryObj<BsChipFilter>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-chip-filter [selected]="selected" [disabled]="disabled" [dropdown]="dropdown" [size]="size">Availability</bs-chip-filter>`,
  }),
};

export const Selected: Story = {
  args: { selected: true },
  render: args => ({
    props: args,
    template: `<bs-chip-filter [selected]="selected" [size]="size">Availability</bs-chip-filter>`,
  }),
};

export const WithDropdown: Story = {
  name: 'With dropdown caret',
  args: { dropdown: true },
  render: args => ({
    props: args,
    template: `<bs-chip-filter [dropdown]="dropdown" [size]="size">Price range</bs-chip-filter>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-chip-filter [disabled]="disabled" [size]="size">Availability</bs-chip-filter>`,
  }),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <bs-chip-filter size="md">Medium</bs-chip-filter>
        <bs-chip-filter size="lg">Large</bs-chip-filter>
      </div>
    `,
  }),
};

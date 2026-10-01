import type { Meta, StoryObj } from '@storybook/angular';
import { BsInlineTab, BsTabs } from '@brandsync/angular';

const meta: Meta<BsInlineTab> = {
  title: 'Components/BsInlineTab',
  component: BsInlineTab,
  parameters: {
    docs: {
      description: {
        component:
          'A pill-shaped tab button — an optional leading icon plus a text label, rendered as a ' +
          'real `<button>`. Unlike `BsTab`\'s underline indicator, selection here is communicated ' +
          'entirely by the pill\'s background fill color.\n\n' +
          '**When to use:** as one button within a segmented-control-style tab bar, where exactly ' +
          'one tab is selected/active at a time. Wrap in `BsTabs type="bs-inline-tab"`, which owns ' +
          '`role="tablist"` and coordinates selection for you.\n\n' +
          '**When not to use:** as a standalone action button — use `BsButton` instead. `selected` ' +
          'is NOT self-toggling: clicking only emits `bsSelect`.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name for the tab. Required for icon-only usage so screen readers still ' +
        'announce what the tab does.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the tab and prevents clicking from emitting `bsSelect`.',
    },
    selected: {
      control: 'boolean',
      description:
        'Whether this tab is the currently active one. NOT mutable/self-toggling — still reflected ' +
        'as an attribute so consumers/CSS can target `bs-inline-tab[selected]`.',
    },
  },
  args: {
    disabled: false,
    selected: false,
  },
};

export default meta;
type Story = StoryObj<BsInlineTab>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsTabs] },
    template: `
      <bs-tabs type="bs-inline-tab">
        <bs-inline-tab [selected]="selected" [disabled]="disabled">Overview</bs-inline-tab>
        <bs-inline-tab>Amenities</bs-inline-tab>
        <bs-inline-tab>Reviews</bs-inline-tab>
      </bs-tabs>
    `,
  }),
};

export const Selected: Story = {
  args: { selected: true },
  render: args => ({
    props: args,
    template: `<bs-inline-tab [selected]="selected">Overview</bs-inline-tab>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-inline-tab [disabled]="disabled">Reviews</bs-inline-tab>`,
  }),
};

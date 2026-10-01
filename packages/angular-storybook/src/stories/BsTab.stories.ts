import type { Meta, StoryObj } from '@storybook/angular';
import { BsTab, BsTabs } from '@brandsync/angular';

const meta: Meta<BsTab> = {
  title: 'Components/BsTab',
  component: BsTab,
  parameters: {
    docs: {
      description: {
        component:
          'A single tab button — an optional icon plus a text label, rendered as a real `<button>` ' +
          'so it participates correctly in tab order and native click/keyboard activation.\n\n' +
          '**When to use:** as one button within a tab bar, where exactly one tab is selected/active ' +
          'at a time. Wrap in `BsTabs type="bs-tab"`, which owns `role="tablist"` and coordinates ' +
          'selection for you.\n\n' +
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
    iconPosition: {
      control: 'select',
      options: ['start', 'top'],
      description:
        'Where the icon sits relative to the label, when both `icon` and the default slot are ' +
        'populated.',
    },
    selected: {
      control: 'boolean',
      description:
        'Whether this tab is the currently active one. NOT mutable/self-toggling — still reflected ' +
        'as an attribute so consumers/CSS can target `bs-tab[selected]`.',
    },
  },
  args: {
    disabled: false,
    iconPosition: 'start',
    selected: false,
  },
};

export default meta;
type Story = StoryObj<BsTab>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsTabs] },
    template: `
      <bs-tabs type="bs-tab">
        <bs-tab [selected]="selected" [disabled]="disabled" [iconPosition]="iconPosition">Overview</bs-tab>
        <bs-tab>Amenities</bs-tab>
        <bs-tab>Reviews</bs-tab>
      </bs-tabs>
    `,
  }),
};

export const Selected: Story = {
  args: { selected: true },
  render: args => ({
    props: args,
    template: `<bs-tab [selected]="selected">Overview</bs-tab>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-tab [disabled]="disabled">Reviews</bs-tab>`,
  }),
};

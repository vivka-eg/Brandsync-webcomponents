import type { Meta, StoryObj } from '@storybook/angular';
import { BsChipInformative } from '@brandsync/angular';

const meta: Meta<BsChipInformative> = {
  title: 'Components/BsChipInformative',
  component: BsChipInformative,
  parameters: {
    docs: {
      description: {
        component:
          'A pill-shaped, non-interactive label for conveying a category or status at a glance, ' +
          'optionally paired with a leading icon. Unlike `BsChipFilter`/`BsChipInput`, this is purely ' +
          'informational — no click/select/remove behavior, no hover/focus/pressed states.\n\n' +
          '**When to use:** conveying a category or status inline with other content, with more ' +
          'color options and an optional icon than `BsBadge` offers.\n\n' +
          '**When not to use:** anything clickable/selectable — use `BsChipFilter`; a short, fixed ' +
          'status label with no color/icon needs — `BsBadge` is the simpler choice.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['neutral', 'warning', 'success', 'info', 'error'],
      description:
        'Semantic color. Maps directly to the brandsync-tokens `--bs-chip-bg-*-container`/ ' +
        '`--bs-chip-text-*` sets. Ignored (in favor of the disabled token set) when `disabled` is set.',
    },
    disabled: {
      control: 'boolean',
      description: 'Overrides `color` with the disabled token set, regardless of its value.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description:
        'Sizing scale. Controls height and font-size/line-height together — unlike ' +
        '`BsChipFilter`/`BsChipInput`, `size="sm"` uses a distinct (smaller) font, not just a ' +
        'shorter pill.',
    },
  },
  args: {
    color: 'neutral',
    disabled: false,
    size: 'lg',
  },
};

export default meta;
type Story = StoryObj<BsChipInformative>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-chip-informative [color]="color" [disabled]="disabled" [size]="size">Category</bs-chip-informative>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-chip-informative [disabled]="disabled" [size]="size">Category</bs-chip-informative>`,
  }),
};

export const AllColors: Story = {
  name: 'All colors',
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <bs-chip-informative color="neutral">Neutral</bs-chip-informative>
        <bs-chip-informative color="warning">Warning</bs-chip-informative>
        <bs-chip-informative color="success">Success</bs-chip-informative>
        <bs-chip-informative color="info">Info</bs-chip-informative>
        <bs-chip-informative color="error">Error</bs-chip-informative>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <bs-chip-informative size="sm">Small</bs-chip-informative>
        <bs-chip-informative size="md">Medium</bs-chip-informative>
        <bs-chip-informative size="lg">Large</bs-chip-informative>
      </div>
    `,
  }),
};

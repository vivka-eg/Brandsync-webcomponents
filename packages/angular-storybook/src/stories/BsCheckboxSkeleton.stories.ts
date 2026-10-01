import type { Meta, StoryObj } from '@storybook/angular';
import { BsCheckboxSkeleton } from '@brandsync/angular';

const meta: Meta<BsCheckboxSkeleton> = {
  title: 'Components/BsCheckboxSkeleton',
  component: BsCheckboxSkeleton,
  parameters: {
    docs: {
      description: {
        component:
          'A shape-matched loading placeholder for `BsCheckbox`, shown while the real label text ' +
          'isn\'t known yet (e.g. still being fetched from an API). Renders a small square (matching ' +
          'the checkbox\'s own box) beside a text-bar placeholder standing in for the label, both ' +
          'pulsing together.\n\n' +
          '**When to use:** in place of a `BsCheckbox` whose label/checked state depends on data ' +
          'that hasn\'t loaded yet.\n\n' +
          '**When not to use:** while a checkbox\'s own change handler is running (e.g. a save ' +
          'request in flight) — render the real `BsCheckbox` itself; this is not a saving-in-progress ' +
          'spinner.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description:
        'Sizing scale, matching the `BsCheckbox` size it stands in for. Defaults to `lg`, the same ' +
        '(unusual) default `BsCheckbox` itself uses.',
    },
  },
  args: {
    size: 'lg',
  },
};

export default meta;
type Story = StoryObj<BsCheckboxSkeleton>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-checkbox-skeleton [size]="size"></bs-checkbox-skeleton>`,
  }),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <bs-checkbox-skeleton size="sm"></bs-checkbox-skeleton>
        <bs-checkbox-skeleton size="md"></bs-checkbox-skeleton>
        <bs-checkbox-skeleton size="lg"></bs-checkbox-skeleton>
      </div>
    `,
  }),
};

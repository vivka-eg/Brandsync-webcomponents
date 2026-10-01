import type { Meta, StoryObj } from '@storybook/angular';
import { BsButtonSkeleton } from '@brandsync/angular';

const meta: Meta<BsButtonSkeleton> = {
  title: 'Components/BsButtonSkeleton',
  component: BsButtonSkeleton,
  parameters: {
    docs: {
      description: {
        component:
          'A shape-matched loading placeholder for `BsButton`, shown while the real label/action ' +
          'isn\'t known yet (e.g. still being fetched from an API). Sized to match `BsButton`\'s ' +
          '`sm`/`md`/`lg` heights so layout doesn\'t shift once the real button renders.\n\n' +
          '**When to use:** in place of a `BsButton` whose label/visibility depends on data that ' +
          'hasn\'t loaded yet.\n\n' +
          '**When not to use:** while a button\'s own click handler is running (e.g. a submit request ' +
          'in flight) — render the real `BsButton` and show its own busy/spinner state instead. ' +
          'This is not a submit-in-progress spinner.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Sizing scale, matching the `BsButton` size it stands in for.',
    },
  },
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<BsButtonSkeleton>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-button-skeleton [size]="size"></bs-button-skeleton>`,
  }),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <bs-button-skeleton size="sm"></bs-button-skeleton>
        <bs-button-skeleton size="md"></bs-button-skeleton>
        <bs-button-skeleton size="lg"></bs-button-skeleton>
      </div>
    `,
  }),
};

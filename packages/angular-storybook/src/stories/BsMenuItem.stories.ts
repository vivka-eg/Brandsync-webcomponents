import type { Meta, StoryObj } from '@storybook/angular';
import { BsMenuItem, BsMenu } from '@brandsync/angular';

const meta: Meta<BsMenuItem> = {
  title: 'Components/BsMenuItem',
  component: BsMenuItem,
  parameters: {
    docs: {
      description: {
        component:
          'A single selectable row inside a `BsMenu`: an optional icon plus a text label, rendered ' +
          'as a real `<button>` for correct keyboard/click semantics.\n\n' +
          '**When to use:** as a child of `BsMenu`, one per selectable action/option.\n\n' +
          '**When not to use:** outside of `BsMenu` — this component\'s sizing/hover treatment is ' +
          'designed to sit inside the menu\'s rounded, padded list box.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'Disables the item: no hover/pressed/focus styling, not reachable by keyboard tabbing, and ' +
        'clicking it does not emit `bsSelect`.',
    },
  },
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<BsMenuItem>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsMenu] },
    template: `
      <bs-menu style="display: inline-block; max-width: 200px;">
        <bs-menu-item [disabled]="disabled">Edit</bs-menu-item>
        <bs-menu-item>Duplicate</bs-menu-item>
        <bs-menu-item>Delete</bs-menu-item>
      </bs-menu>
    `,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-menu-item [disabled]="disabled">Archive</bs-menu-item>`,
  }),
};

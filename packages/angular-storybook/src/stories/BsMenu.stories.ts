import type { Meta, StoryObj } from '@storybook/angular';
import { BsMenu, BsMenuItem } from '@brandsync/angular';

const meta: Meta<BsMenu> = {
  title: 'Components/BsMenu',
  component: BsMenu,
  parameters: {
    docs: {
      description: {
        component:
          'A generic dropdown/popup menu container: a rounded, elevated list of items (typically ' +
          '`BsMenuItem` elements).\n\n' +
          '**When to use:** a popup list of actions/options triggered by another control (e.g. a ' +
          '"more options" kebab button), such as `BsChatbotResponseAction`\'s `menu` slot.\n\n' +
          '**When not to use:** a persistent, always-visible list of options — this component is ' +
          'purpose-built as a popup surface (rounded corners, elevation shadow), not a plain list.',
      },
    },
  },
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<BsMenu>;

export const Default: Story = {
  render: () => ({
    moduleMetadata: { imports: [BsMenuItem] },
    template: `
      <bs-menu style="display: inline-block; max-width: 200px;">
        <bs-menu-item>Edit</bs-menu-item>
        <bs-menu-item>Duplicate</bs-menu-item>
        <bs-menu-item [disabled]="true">Archive</bs-menu-item>
        <bs-menu-item>Delete</bs-menu-item>
      </bs-menu>
    `,
  }),
};

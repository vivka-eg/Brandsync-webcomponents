import type { Meta, StoryObj } from '@storybook/angular';
import { BsTooltip } from '@brandsync/angular';

const meta: Meta<BsTooltip> = {
  title: 'Components/BsTooltip',
  component: BsTooltip,
  parameters: {
    docs: {
      description: {
        component:
          'A dark tooltip bubble with a pointer arrow, used to surface a short hint of extra ' +
          'information next to a trigger element. Purely presentational — like `BsMenu`, it does ' +
          'not manage its own visibility, hover/focus triggering, or positioning relative to a ' +
          'trigger element; the consuming app owns showing/hiding and positioning it.\n\n' +
          '**When to use:** a short, contextual hint of extra information shown next to a trigger ' +
          'element on hover/focus, where the host app owns the show/hide and positioning logic.\n\n' +
          '**When not to use:** a component that manages its own trigger interaction or positioning ' +
          '— this is a bare bubble only.',
      },
    },
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top'],
      description:
        'Which edge of the bubble the arrow points from. `top` is the only value implemented — the ' +
        'only variant confirmed from the Figma "EG Tooltip" component.',
    },
  },
  args: {
    placement: 'top',
  },
};

export default meta;
type Story = StoryObj<BsTooltip>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="position: relative; display: inline-block; padding-top: 40px;">
        <bs-tooltip [placement]="placement" style="position: absolute; top: 0; left: 0;">Save changes</bs-tooltip>
      </div>
    `,
  }),
};

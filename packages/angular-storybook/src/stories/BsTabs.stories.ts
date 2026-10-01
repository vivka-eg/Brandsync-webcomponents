import type { Meta, StoryObj } from '@storybook/angular';
import { BsTabs, BsTab, BsInlineTab } from '@brandsync/angular';

const meta: Meta<BsTabs> = {
  title: 'Components/BsTabs',
  component: BsTabs,
  parameters: {
    docs: {
      description: {
        component:
          'A tab-group wrapper: owns `role="tablist"` and coordinates selection across its ' +
          'slotted `BsTab` or `BsInlineTab` children (listening for `bsSelect` and setting ' +
          '`selected`/`false` across siblings), so consumers don\'t have to hand-roll that ' +
          'coordination themselves.\n\n' +
          '**When to use:** wrapping a set of `BsTab` (underline style) or `BsInlineTab` (pill ' +
          'style) elements that represent mutually-exclusive views.\n\n' +
          '**When not to use:** using `BsTab`/`BsInlineTab` standalone, outside this wrapper — ' +
          '`selected` won\'t self-toggle and a consumer would need to coordinate it manually.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description:
        'Layout direction of the tab bar itself. Sets `aria-orientation` on the internal wrapper ' +
        'and switches `flex-direction`.',
    },
    type: {
      control: 'select',
      options: ['bs-tab', 'bs-inline-tab'],
      description:
        'Which tab-button family this group wraps. Governs the wrapper\'s own visual treatment ' +
        '(gap-only for `bs-tab`, a filled pill bar for `bs-inline-tab`).',
    },
  },
  args: {
    orientation: 'horizontal',
    type: 'bs-tab',
  },
};

export default meta;
type Story = StoryObj<BsTabs>;

export const Underline: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsTab] },
    template: `
      <bs-tabs [orientation]="orientation" type="bs-tab">
        <bs-tab [selected]="true">Overview</bs-tab>
        <bs-tab>Amenities</bs-tab>
        <bs-tab>Reviews</bs-tab>
      </bs-tabs>
    `,
  }),
};

export const InlinePills: Story = {
  name: 'Inline pills',
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsInlineTab] },
    template: `
      <bs-tabs [orientation]="orientation" type="bs-inline-tab">
        <bs-inline-tab [selected]="true">Overview</bs-inline-tab>
        <bs-inline-tab>Amenities</bs-inline-tab>
        <bs-inline-tab>Reviews</bs-inline-tab>
      </bs-tabs>
    `,
  }),
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsTab] },
    template: `
      <bs-tabs [orientation]="orientation" type="bs-tab">
        <bs-tab [selected]="true">Overview</bs-tab>
        <bs-tab>Amenities</bs-tab>
        <bs-tab>Reviews</bs-tab>
      </bs-tabs>
    `,
  }),
};

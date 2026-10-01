import type { Meta, StoryObj } from '@storybook/angular';
import { BsSlider } from '@brandsync/angular';

const meta: Meta<BsSlider> = {
  title: 'Components/BsSlider',
  component: BsSlider,
  parameters: {
    docs: {
      description: {
        component:
          'A slider for picking a single numeric value (`type="default"`), a value snapped to ' +
          'evenly spaced ticks (`type="segmented"`), or a min/max pair (`type="range"`) from within ' +
          'a bounded `min`/`max` range.\n\n' +
          '**When to use:** a numeric value that\'s easiest to reason about relative to its bounds ' +
          '(volume, brightness, a price range) rather than typed digit-by-digit; `segmented` for a ' +
          'fixed number of discrete stops; `range` for a min/max pair with two thumbs.\n\n' +
          '**When not to use:** a precise value where mis-dragging by a pixel matters more than the ' +
          'at-a-glance bounds — use `BsInput type="number"` instead.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name for the slider\'s native range input(s). Required whenever `showLabel` is ' +
        '`false`.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the slider and prevents interaction.',
    },
    label: {
      control: 'text',
      description: 'Label text shown above the track when `showLabel` is set.',
    },
    max: {
      control: 'number',
      description: 'Maximum selectable value, for all `type`s.',
    },
    min: {
      control: 'number',
      description: 'Minimum selectable value, for all `type`s.',
    },
    segments: {
      control: { type: 'number', min: 1 },
      description: 'Number of equal divisions marked by tick lines along the track, `type="segmented"` only.',
    },
    showLabel: {
      control: 'boolean',
      description:
        'Shows/hides the "Label" text and editable percentage field(s) above the track, and the ' +
        'static min/max bound labels.',
    },
    step: {
      control: 'number',
      description: 'Step size between selectable values.',
    },
    type: {
      control: 'select',
      options: ['default', 'segmented', 'range'],
      description:
        'Which slider shape to render. `range` uses two thumbs (`valueStart`/`valueEnd`); ' +
        '`default`/`segmented` use one thumb (`value`).',
    },
    value: {
      control: 'number',
      description: 'Current value for `type="default"`/`type="segmented"`. Ignored for `type="range"`.',
    },
    valueStart: {
      control: 'number',
      description: 'Lower thumb\'s value for `type="range"`. Defaults to `min` when unset.',
    },
    valueEnd: {
      control: 'number',
      description: 'Upper thumb\'s value for `type="range"`. Defaults to `max` when unset.',
    },
  },
  args: {
    disabled: false,
    label: 'Label',
    max: 100,
    min: 0,
    segments: 10,
    showLabel: true,
    step: 1,
    type: 'default',
    value: 40,
  },
};

export default meta;
type Story = StoryObj<BsSlider>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-slider [type]="type" [label]="label" [min]="min" [max]="max" [step]="step" [value]="value" [showLabel]="showLabel" [disabled]="disabled"></bs-slider>`,
  }),
};

export const Segmented: Story = {
  args: { type: 'segmented', segments: 5, value: 40 },
  render: args => ({
    props: args,
    template: `<bs-slider [type]="type" [label]="label" [min]="min" [max]="max" [segments]="segments" [value]="value"></bs-slider>`,
  }),
};

export const Range: Story = {
  args: { type: 'range', valueStart: 20, valueEnd: 80, label: 'Price range' },
  render: args => ({
    props: args,
    template: `<bs-slider [type]="type" [label]="label" [min]="min" [max]="max" [valueStart]="valueStart" [valueEnd]="valueEnd"></bs-slider>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-slider [type]="type" [label]="label" [value]="value" [disabled]="disabled"></bs-slider>`,
  }),
};

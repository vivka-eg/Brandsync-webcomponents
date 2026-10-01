import type { Meta, StoryObj } from '@storybook/angular';
import { BsStepper, BsStepperStep } from '@brandsync/angular';

const meta: Meta<BsStepper> = {
  title: 'Components/BsStepper',
  component: BsStepper,
  parameters: {
    docs: {
      description: {
        component:
          'A sequence of named steps showing overall progress through a multi-step flow (e.g. a ' +
          'checkout, an onboarding wizard) — each step reads as enabled, current, done, error, or ' +
          'disabled, connected by a rail between them. This container is intentionally thin: it ' +
          'renders a slot for `BsStepperStep` children and propagates `currentStep`/`direction`/' +
          '`showDescription` down to them.\n\n' +
          '**When to use:** showing where a user is in a multi-step flow with a known, fixed number ' +
          'of steps.\n\n' +
          '**When not to use:** an interactive control — this is a static status display, not ' +
          'clickable.',
      },
    },
  },
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 0 },
      description:
        '0-indexed: which step is current. Every step before this index reads as "done" (unless ' +
        'overridden), every step after reads as "enabled".',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description:
        '`horizontal` (icon above name/description) or `vertical` (icon beside name/description). ' +
        'Propagated to every slotted `BsStepperStep`.',
    },
    showDescription: {
      control: 'boolean',
      description: 'Whether each step\'s description renders at all. Propagated to every slotted step.',
    },
  },
  args: {
    currentStep: 1,
    direction: 'horizontal',
    showDescription: true,
  },
};

export default meta;
type Story = StoryObj<BsStepper>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsStepperStep] },
    template: `
      <bs-stepper [currentStep]="currentStep" [direction]="direction" [showDescription]="showDescription">
        <bs-stepper-step name="Account" description="Create your account"></bs-stepper-step>
        <bs-stepper-step name="Details" description="Add your details"></bs-stepper-step>
        <bs-stepper-step name="Confirm" description="Review and confirm"></bs-stepper-step>
      </bs-stepper>
    `,
  }),
};

export const Vertical: Story = {
  args: { direction: 'vertical' },
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsStepperStep] },
    template: `
      <bs-stepper [currentStep]="currentStep" [direction]="direction" [showDescription]="showDescription">
        <bs-stepper-step name="Account" description="Create your account"></bs-stepper-step>
        <bs-stepper-step name="Details" description="Add your details"></bs-stepper-step>
        <bs-stepper-step name="Confirm" description="Review and confirm"></bs-stepper-step>
      </bs-stepper>
    `,
  }),
};

export const WithError: Story = {
  name: 'With an error step',
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsStepperStep] },
    template: `
      <bs-stepper [currentStep]="currentStep" [direction]="direction">
        <bs-stepper-step name="Account" description="Create your account"></bs-stepper-step>
        <bs-stepper-step name="Details" description="Payment failed" [error]="true"></bs-stepper-step>
        <bs-stepper-step name="Confirm" description="Review and confirm"></bs-stepper-step>
      </bs-stepper>
    `,
  }),
};

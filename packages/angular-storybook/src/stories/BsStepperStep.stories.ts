import type { Meta, StoryObj } from '@storybook/angular';
import { BsStepperStep, BsStepper } from '@brandsync/angular';

const meta: Meta<BsStepperStep> = {
  title: 'Components/BsStepperStep',
  component: BsStepperStep,
  parameters: {
    docs: {
      description: {
        component:
          'A single step within a `BsStepper` sequence: an icon/indicator plus a name and optional ' +
          'description, connected to the next step by a trailing rail. `computedState` is set ' +
          'automatically by the parent `BsStepper` based on this step\'s position relative to its ' +
          '`currentStep`; this step\'s own `error`/`disabled` props override that computed value.\n\n' +
          '**When to use:** as a child of `BsStepper`, one per step in the flow.\n\n' +
          '**When not to use:** standalone outside a `BsStepper` — though `computedState` can be set ' +
          'directly for a standalone step if genuinely needed.',
      },
    },
  },
  argTypes: {
    computedState: {
      control: 'select',
      options: ['enabled', 'current', 'done'],
      description:
        'Set automatically by the parent `BsStepper` from this step\'s position relative to its ' +
        '`currentStep`. Can be set directly for a standalone step.',
    },
    description: {
      control: 'text',
      description:
        'Optional supporting text below the name. Only rendered when `showDescription` ' +
        '(propagated from the parent) is also true.',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Set automatically by the parent `BsStepper`, propagated to every slotted step.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Shows the disabled treatment for this step, regardless of its `computedState`. Takes ' +
        'priority over `error` if both are set.',
    },
    error: {
      control: 'boolean',
      description: 'Shows the error treatment for this step, regardless of its `computedState`.',
    },
    name: {
      control: 'text',
      description: 'This step\'s name/title.',
    },
    showDescription: {
      control: 'boolean',
      description: 'Set automatically by the parent `BsStepper`, propagated to every slotted step.',
    },
  },
  args: {
    computedState: 'enabled',
    direction: 'horizontal',
    disabled: false,
    error: false,
    name: 'Account',
    showDescription: true,
  },
};

export default meta;
type Story = StoryObj<BsStepperStep>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsStepper] },
    template: `
      <bs-stepper [currentStep]="0">
        <bs-stepper-step [name]="name" description="Create your account"></bs-stepper-step>
        <bs-stepper-step name="Details" description="Add your details"></bs-stepper-step>
      </bs-stepper>
    `,
  }),
};

export const ErrorState: Story = {
  name: 'Error',
  args: { error: true },
  render: args => ({
    props: args,
    template: `<bs-stepper-step [name]="name" description="Payment failed" [error]="error"></bs-stepper-step>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-stepper-step [name]="name" [disabled]="disabled"></bs-stepper-step>`,
  }),
};

export const AllStates: Story = {
  name: 'All states',
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px;">
        <bs-stepper-step name="Done" computedState="done"></bs-stepper-step>
        <bs-stepper-step name="Current" computedState="current"></bs-stepper-step>
        <bs-stepper-step name="Enabled" computedState="enabled"></bs-stepper-step>
        <bs-stepper-step name="Error" [error]="true"></bs-stepper-step>
        <bs-stepper-step name="Disabled" [disabled]="true"></bs-stepper-step>
      </div>
    `,
  }),
};

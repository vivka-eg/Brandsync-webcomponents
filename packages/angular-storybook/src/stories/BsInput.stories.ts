import type { Meta, StoryObj } from '@storybook/angular';
import { BsInput } from '@brandsync/angular';

const meta: Meta<BsInput> = {
  title: 'Components/BsInput',
  component: BsInput,
  parameters: {
    docs: {
      description: {
        component:
          'A single-line text field with an optional label, description, and error state. Also ' +
          'covers a range of related "field" shapes (number stepper, password reveal, date, ' +
          'dropdown trigger, select, textarea, chip input, initials, country, and pin) via the ' +
          '`type` prop, since they all share the same label/description/error/icon-slot chrome.\n\n' +
          '**When to use:** collecting a single line of free-text, email, password, or numeric ' +
          'input, or any of the other supported `type`s; pair with `error` for inline validation ' +
          'feedback.\n\n' +
          '**When not to use:** a fixed set of choices best served by a dedicated radio/checkbox ' +
          'group rather than a single field.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'search',
        'date',
        'dropdown',
        'select',
        'textarea',
        'chip',
        'initials',
        'country',
        'pin',
      ],
      description: 'Which field shape to render.',
    },
    value: {
      control: 'text',
      description:
        'Current value. Re-dispatched as `bsInput`/`bsChange` custom events since native events ' +
        'don\'t cross the Shadow DOM boundary.',
    },
    label: {
      control: 'text',
      description: 'The field label.',
    },
    description: {
      control: 'text',
      description: 'Helper text shown below the field.',
    },
    error: {
      control: 'text',
      description: 'Error message. Its presence (not a boolean) is what shows the error state.',
    },
    placeholder: {
      control: 'text',
      description: 'Native placeholder text.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the field.',
    },
    required: {
      control: 'boolean',
      description:
        'Marks the field as required: renders a red `*` after the label and sets ' +
        '`aria-required="true"`. Applies regardless of `type`.',
    },
    rows: {
      control: { type: 'number', min: 1 },
      description: 'Number of visible rows for `type="textarea"`.',
    },
    min: {
      control: 'number',
      description: 'Minimum value for `type="number"`\'s stepper buttons.',
    },
    max: {
      control: 'number',
      description: 'Maximum value for `type="number"`\'s stepper buttons.',
    },
    step: {
      control: 'number',
      description: 'Step size for `type="number"`\'s increment/decrement stepper buttons.',
    },
    length: {
      control: { type: 'number', min: 1 },
      description: 'Number of cells for `type="pin"`.',
    },
    options: {
      control: 'object',
      description:
        'Options for `type="select"`/`type="dropdown"`, each `{ label, value }`. JS-property-only.',
    },
    chips: {
      control: 'object',
      description: 'Current chips for `type="chip"`. JS-property-only.',
    },
  },
  args: {
    type: 'text',
    label: 'Full name',
    placeholder: 'Enter your name',
    disabled: false,
    required: false,
    rows: 3,
    length: 4,
  },
};

export default meta;
type Story = StoryObj<BsInput>;

export const Text: Story = {
  render: args => ({
    props: args,
    template: `<bs-input [type]="type" [label]="label" [placeholder]="placeholder" [disabled]="disabled" [required]="required"></bs-input>`,
  }),
};

export const WithDescriptionAndError: Story = {
  name: 'With description and error',
  args: { description: 'We\'ll never share your email.', error: 'This field is required.', type: 'email', label: 'Email' },
  render: args => ({
    props: args,
    template: `<bs-input [type]="type" [label]="label" [description]="description" [error]="error"></bs-input>`,
  }),
};

export const Textarea: Story = {
  args: { type: 'textarea', label: 'Notes', rows: 4 },
  render: args => ({
    props: args,
    template: `<bs-input [type]="type" [label]="label" [rows]="rows"></bs-input>`,
  }),
};

export const NumberStepper: Story = {
  name: 'Number stepper',
  args: { type: 'number', label: 'Guests', min: 1, max: 10, step: 1, value: '1' },
  render: args => ({
    props: args,
    template: `<bs-input [type]="type" [label]="label" [min]="min" [max]="max" [step]="step" [value]="value"></bs-input>`,
  }),
};

export const Select: Story = {
  args: {
    type: 'select',
    label: 'Room type',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Deluxe', value: 'deluxe' },
      { label: 'Suite', value: 'suite' },
    ],
  },
  render: args => ({
    props: args,
    template: `<bs-input [type]="type" [label]="label" [options]="options"></bs-input>`,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => ({
    props: args,
    template: `<bs-input [type]="type" [label]="label" [disabled]="disabled"></bs-input>`,
  }),
};

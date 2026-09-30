import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { componentDescription, propDescription } from '../../stories-utils';
import type { BsToastState } from './bs-toast';

const states: BsToastState[] = ['info', 'success', 'warning', 'error'];

interface BsToastArgs {
  state: BsToastState;
  message: string;
}

// Demonstrates a real consumer reaction to bsDismiss -- the component itself doesn't remove or
// hide anything on dismiss (see the class JSDoc: that's deliberately left to the consumer). Without
// this, clicking the close button visibly does nothing in the story, which reads as "the button
// doesn't work" even though the click handler did fire (see the bsDismiss test coverage).
const hideOnDismiss = (ev: Event) => {
  (ev.currentTarget as HTMLElement).style.display = 'none';
};

const meta: Meta<BsToastArgs> = {
  title: 'Components/bs-toast',
  parameters: { docs: { description: { component: componentDescription('bs-toast') } } },
  render: args => html`
    <bs-toast state=${args.state} @bsDismiss=${hideOnDismiss}>${args.message}</bs-toast>
  `,
  argTypes: {
    state: { control: { type: 'select' }, options: states, description: propDescription('bs-toast', 'state') },
    message: { control: 'text', description: 'Slotted message content (not a real attribute -- see the default slot).' },
  },
  args: {
    state: 'info',
    message: 'Files uploaded successfully.',
  },
};

export default meta;
type Story = StoryObj<BsToastArgs>;

export const Default: Story = {};

// One instance per state, side by side, matching the Figma spec's column layout.
export const AllStates: Story = {
  name: 'All states',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      ${states.map(state => html` <bs-toast state=${state} @bsDismiss=${hideOnDismiss}>Files uploaded successfully.</bs-toast> `)}
    </div>
  `,
};

export const Overflow: Story = {
  args: { message: 'Your changes were saved, but some fields may fail.' },
};

import type { Meta, StoryObj } from '@storybook/angular';
import { BsDialog, BsButton } from '@brandsync/angular';

const meta: Meta<BsDialog> = {
  title: 'Components/BsDialog',
  component: BsDialog,
  parameters: {
    docs: {
      description: {
        component:
          'An overlay dialog that interrupts the current flow for a focused task or confirmation. ' +
          'Closes itself on backdrop click, Escape, or its own close button, and emits `bsClose`.\n\n' +
          '**When to use:** confirming a consequential action (e.g. "Confirm booking") before it ' +
          'takes effect; a short, focused task that doesn\'t warrant navigating to a new page.\n\n' +
          '**When not to use:** for non-blocking status messages — use a toast/notification instead ' +
          'of interrupting the user; for a long, multi-step flow — a full page or a dedicated route ' +
          'is usually a better fit.',
      },
    },
  },
  argTypes: {
    centered: {
      control: 'boolean',
      description:
        'Switches to the "Icon Centered" layout: heading/body text centered, the `icon` slot ' +
        'rendered above the heading, and the close button floating top-right.',
    },
    heading: {
      control: 'text',
      description: 'The dialog heading text.',
    },
    open: {
      control: 'boolean',
      description:
        'Mutable + reflected so the component can close itself (backdrop click, Escape, close ' +
        'button), while still emitting `bsClose` for the consumer to react to.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Dialog width.',
    },
  },
  args: {
    centered: false,
    heading: 'Confirm booking',
    // Defaults to closed, not open. bs-dialog registers a page-wide `focusin` listener that
    // redirects focus back into itself whenever `open` is true (its focus trap) -- and Storybook's
    // autodocs page mounts every story's canvas on one page at once. If more than one story here
    // defaulted to `open: true`, every one of them would be an open dialog simultaneously on that
    // single Docs page, each fighting the others' focus trap in an infinite synchronous
    // redirect loop -- which is what was hanging the tab. Each story below opens itself via an
    // explicit "Open dialog" trigger button instead, so at most one dialog is ever open, and only
    // as a result of a real click.
    open: false,
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<BsDialog>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsButton] },
    template: `
      <bs-button variant="primary" (click)="open = true">Open dialog</bs-button>
      <bs-dialog [heading]="heading" [open]="open" [size]="size" (bsClose)="open = false">
        Are you sure you want to confirm this booking for Room 204?
        <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
          <bs-button variant="neutral" size="sm" (click)="open = false">Cancel</bs-button>
          <bs-button variant="primary" size="sm" (click)="open = false">Confirm</bs-button>
        </div>
      </bs-dialog>
    `,
  }),
};

export const Centered: Story = {
  args: { centered: true, heading: 'Booking confirmed' },
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsButton] },
    template: `
      <bs-button variant="primary" (click)="open = true">Open dialog</bs-button>
      <bs-dialog [heading]="heading" [open]="open" [centered]="centered" [size]="size" (bsClose)="open = false">
        Your booking for Room 204 has been confirmed.
        <div slot="footer" style="display: flex; justify-content: center;">
          <bs-button variant="primary" size="sm" (click)="open = false">Done</bs-button>
        </div>
      </bs-dialog>
    `,
  }),
};

export const Small: Story = {
  args: { size: 'sm', heading: 'Small' },
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsButton] },
    template: `
      <bs-button variant="primary" (click)="open = true">Open dialog</bs-button>
      <bs-dialog [heading]="heading" [open]="open" [size]="size" (bsClose)="open = false">
        Small dialog body.
        <div slot="footer" style="display: flex; justify-content: flex-end;">
          <bs-button variant="primary" size="sm" (click)="open = false">OK</bs-button>
        </div>
      </bs-dialog>
    `,
  }),
};

export const Large: Story = {
  args: { size: 'lg', heading: 'Large' },
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsButton] },
    template: `
      <bs-button variant="primary" (click)="open = true">Open dialog</bs-button>
      <bs-dialog [heading]="heading" [open]="open" [size]="size" (bsClose)="open = false">
        Large dialog body.
        <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
          <bs-button variant="neutral" size="sm" (click)="open = false">Cancel</bs-button>
          <bs-button variant="primary" size="sm" (click)="open = false">OK</bs-button>
        </div>
      </bs-dialog>
    `,
  }),
};

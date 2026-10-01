import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { componentDescription, propDescription } from '../../stories-utils';
import type { BsAccordionSize } from './bs-accordion';

const sizes: BsAccordionSize[] = ['medium', 'large'];

interface BsAccordionArgs {
  expanded: boolean;
  size: BsAccordionSize;
  disabled: boolean;
  showIcon: boolean;
  showPreview: boolean;
  label: string;
  content: string;
}

// Demonstrates a real consumer echoing the change back -- the component itself never mutates
// `expanded` (see the class JSDoc: it's a controlled prop). Without this, clicking the header
// would visibly do nothing in the story even though `bsToggle` did fire.
const echoToggle = (ev: CustomEvent<boolean>) => {
  (ev.currentTarget as HTMLElement).toggleAttribute('expanded', ev.detail);
};

const meta: Meta<BsAccordionArgs> = {
  title: 'Components/bs-accordion',
  parameters: { docs: { description: { component: componentDescription('bs-accordion') } } },
  render: args => html`
    <!-- Figma's spec is a fixed 486px-wide component -- matching that width here (instead of
    letting it stretch to the full canvas) is what makes the collapsed state's single-line
    ellipsis truncation actually visible; at full canvas width the preview text never overflows,
    so collapsed and expanded look identical even though the truncation CSS is correctly wired. -->
    <div style="max-width: 486px;">
      <bs-accordion
        ?expanded=${args.expanded}
        size=${args.size}
        ?disabled=${args.disabled}
        ?show-icon=${args.showIcon}
        ?show-preview=${args.showPreview}
        @bsToggle=${echoToggle}
      >
        <span slot="label">${args.label}</span>
        ${args.content}
      </bs-accordion>
    </div>
  `,
  argTypes: {
    expanded: { control: 'boolean', description: propDescription('bs-accordion', 'expanded') },
    size: { control: { type: 'select' }, options: sizes, description: propDescription('bs-accordion', 'size') },
    disabled: { control: 'boolean', description: propDescription('bs-accordion', 'disabled') },
    showIcon: { control: 'boolean', description: propDescription('bs-accordion', 'show-icon') },
    showPreview: { control: 'boolean', description: propDescription('bs-accordion', 'show-preview') },
    label: { control: 'text', description: 'Slotted header title (not a real attribute -- see the `label` slot).' },
    content: { control: 'text', description: 'Slotted body content (not a real attribute -- see the default slot).' },
  },
  args: {
    expanded: false,
    size: 'medium',
    disabled: false,
    showIcon: true,
    showPreview: true,
    label: 'Section title',
    content: 'This is the body content shown when the section is expanded, or truncated to one line as a preview while collapsed.',
  },
};

export default meta;
type Story = StoryObj<BsAccordionArgs>;

export const Default: Story = {};

export const Expanded: Story = {
  args: { expanded: true },
};

export const Large: Story = {
  args: { size: 'large' },
};

export const NoIcon: Story = {
  name: 'No icon',
  args: { showIcon: false },
};

export const NoPreview: Story = {
  name: 'No preview',
  args: { showPreview: false },
};

export const Disabled: Story = {
  args: { disabled: true },
};

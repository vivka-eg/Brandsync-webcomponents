import { useEffect, useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsAccordion } from '@brandsync/react';

const LABEL = 'Section title';
const CONTENT =
  'This is the body content shown when the section is expanded, or truncated to one line as a preview while collapsed.';

// `expanded` is a controlled prop -- the component only emits `bsToggle` with the requested value
// and never flips it itself, so the consumer has to echo it back for the click to do anything.
const ControlledAccordion = ({ expanded: initial = false, ...rest }: ComponentProps<typeof BsAccordion>) => {
  const [expanded, setExpanded] = useState(initial);
  useEffect(() => setExpanded(initial), [initial]);
  return (
    // Matches Figma's fixed 486px width so the collapsed single-line ellipsis is actually visible.
    <div style={{ maxWidth: 486 }}>
      <BsAccordion {...rest} expanded={expanded} onBsToggle={ev => setExpanded(ev.detail)}>
        <span slot="label">{LABEL}</span>
        {CONTENT}
      </BsAccordion>
    </div>
  );
};
// Without this, the production build's minifier strips this wrapper's name, and Storybook's
// "Show code" panel (which reads the rendered element's runtime name/displayName, not the
// original source text) ends up showing a mangled single-letter name instead of something
// meaningful.
ControlledAccordion.displayName = 'BsAccordion';

const meta: Meta<typeof BsAccordion> = {
  title: 'Components/BsAccordion',
  component: BsAccordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A single collapsible section -- a clickable header (optional leading icon, label, trailing caret) ' +
          'that reveals or hides a body content area.\n\n' +
          'This component renders exactly one section. Stack multiple `BsAccordion` elements yourself ' +
          '(optionally managing which one(s) are expanded, e.g. "only one open at a time") -- there is no ' +
          'accordion-group wrapper.\n\n' +
          '**When to use:** a section of content the user can choose to reveal or hide, especially when several ' +
          'such sections are stacked together (FAQ, settings groups).\n\n' +
          '**When not to use:** a single modal decision or confirmation -- use `bs-dialog`; tabbed content where ' +
          'only one panel is ever meaningful at a time and switching replaces (rather than stacks) content -- ' +
          'use `bs-tabs`.\n\n' +
          '**Slots:** default (body content), `label` (header title), `icon` (overrides the default Plus glyph; ' +
          'only rendered when `showIcon` is `true`).',
      },
    },
  },
  argTypes: {
    expanded: {
      control: 'boolean',
      description:
        "Whether the section is expanded. This is the single source of truth for the component's visual state -- a controlled component, like a controlled `<input>`. Clicking (or keyboard-activating) the header never mutates this prop itself; it only emits `bsToggle` with the requested new value. If the consumer doesn't echo the change back via this prop, the rendering stays exactly as `expanded` says. Reflected so consumers can target `bs-accordion[expanded]` via CSS.",
    },
    size: {
      control: 'select',
      options: ['medium', 'large'],
      description:
        "Sizing scale. Controls the leading icon box's dimensions and the header's vertical padding -- the body content area's padding stays constant across sizes, matching the Figma spec.",
    },
    disabled: {
      control: 'boolean',
      description:
        'Disables the header: suppresses hover/focus/pressed styling, prevents toggling via click or keyboard, and removes it from the tab order.',
    },
    showIcon: {
      control: 'boolean',
      description:
        "Shows the leading icon area (default Plus glyph, or the `icon` slot's content). When `false`, no icon box is reserved and the header/body padding tighten to the left edge.",
    },
    showPreview: {
      control: 'boolean',
      description:
        'When collapsed, renders the body content truncated to a single line (pure CSS truncation of the same slotted content, not different content) instead of rendering nothing. Has no effect while expanded -- the full content always renders then, regardless of this prop.',
    },
    onBsToggle: {
      description:
        'Emitted when the header is activated (click, or Enter/Space while focused), with the REQUESTED new expanded value (`!expanded`). Never fires while `disabled`.',
    },
  },
  args: {
    expanded: false,
    size: 'medium',
    disabled: false,
    showIcon: true,
    showPreview: true,
  },
  render: args => <ControlledAccordion {...args} />,
};

export default meta;
type Story = StoryObj<typeof BsAccordion>;

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

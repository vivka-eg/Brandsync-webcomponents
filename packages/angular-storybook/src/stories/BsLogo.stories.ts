import type { Meta, StoryObj } from '@storybook/angular';
import { BsLogo } from '@brandsync/angular';

const meta: Meta<BsLogo> = {
  title: 'Components/BsLogo',
  component: BsLogo,
  parameters: {
    docs: {
      description: {
        component:
          'The BrandSync brand mark, as its own standalone component — shared by ' +
          '`BsNavigationHeader` and `BsNavigationDrawer`.\n\n' +
          '**When to use:** anywhere the BrandSync logo/icon needs to render: a navigation header, ' +
          'a nav drawer, etc.\n\n' +
          '**When not to use:** the Genie AI chat panel\'s own brand mark — that\'s a different logo ' +
          '(`BsChatbotHeader`\'s own inline Genie asset), not this one.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['full', 'mark', 'custom'],
      description:
        'How much of the logo to render. `full` is the icon + "EG BrandSync" wordmark; `mark` is ' +
        'just the icon, no wordmark; `custom` renders a consumer-supplied image via `src`/`alt`.',
    },
    background: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description:
        'Which pre-built asset to use for `variant="full"`. `auto` (default) follows the ambient ' +
        '`[data-theme="dark"]` state via CSS. Set `light`/`dark` explicitly to pin one regardless of ' +
        'ambient theme. Has no effect on `variant="mark"`.',
    },
    src: {
      control: 'text',
      description: '`variant="custom"` only: the image URL to render. Ignored for `full`/`mark`.',
    },
    alt: {
      control: 'text',
      description:
        '`variant="custom"` only: accessible alt text for the image. Ignored for `full`/`mark` ' +
        '(those already carry their own fixed `aria-label="BrandSync"`).',
    },
  },
  args: {
    variant: 'full',
    background: 'auto',
  },
};

export default meta;
type Story = StoryObj<BsLogo>;

export const Full: Story = {
  render: args => ({
    props: args,
    template: `<bs-logo [variant]="variant" [background]="background"></bs-logo>`,
  }),
};

export const Mark: Story = {
  args: { variant: 'mark' },
  render: args => ({
    props: args,
    template: `<bs-logo [variant]="variant"></bs-logo>`,
  }),
};

export const Custom: Story = {
  args: {
    variant: 'custom',
    src: 'https://picsum.photos/seed/bslogo/64',
    alt: 'Acme Corp',
  },
  render: args => ({
    props: args,
    template: `<bs-logo [variant]="variant" [src]="src" [alt]="alt"></bs-logo>`,
  }),
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <bs-logo variant="full"></bs-logo>
        <bs-logo variant="mark"></bs-logo>
      </div>
    `,
  }),
};

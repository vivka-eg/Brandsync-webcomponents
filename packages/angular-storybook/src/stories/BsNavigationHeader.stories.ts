import type { Meta, StoryObj } from '@storybook/angular';
import { BsNavigationHeader, BsButton } from '@brandsync/angular';

const meta: Meta<BsNavigationHeader> = {
  title: 'Components/BsNavigationHeader',
  component: BsNavigationHeader,
  parameters: {
    docs: {
      description: {
        component:
          'The top-level navigation bar for a page: the BrandSync logo plus two consumer-provided ' +
          'slots (`left`/`right`) for menu/action content.\n\n' +
          '**When to use:** the persistent top bar of an application, above the page content.\n\n' +
          '**When not to use:** the header of a Genie AI chat panel — use `BsChatbotHeader` ' +
          'instead, which is purpose-built for that narrower layout.\n\n' +
          '`alignment` controls both whether the logo renders and how the two slots are laid out: ' +
          '`default` (logo left, `left` slot after it, `right` slot pushed far right), `center` ' +
          '(logo and `right` slot both grow equally, centering `left`), `with-navigation-drawer` ' +
          '(omits the logo, since a paired `BsNavigationDrawer` already renders one).',
      },
    },
  },
  argTypes: {
    alignment: {
      control: 'select',
      options: ['default', 'center', 'with-navigation-drawer'],
      description:
        'Controls whether the logo renders and how the `left`/`right` slots are laid out.',
    },
    ariaLabel: {
      control: 'text',
      description:
        'Accessible label for the header landmark, useful when a page has more than one `<header>`.',
    },
    logoBackground: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description: 'Forwarded straight to the internal `BsLogo`\'s own `background` prop.',
    },
    skipToContentHref: {
      control: 'text',
      description:
        'Fragment/URL to jump to when the "Skip to main content" link is activated. Unset by ' +
        'default — the link is opt-in rather than pointing at a guessed default id.',
    },
    skipToContentLabel: {
      control: 'text',
      description: 'Link text for the skip-to-content link. Only rendered when `skipToContentHref` is set.',
    },
  },
  args: {
    alignment: 'default',
    skipToContentLabel: 'Skip to main content',
  },
};

export default meta;
type Story = StoryObj<BsNavigationHeader>;

export const Default: Story = {
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsButton] },
    template: `
      <bs-navigation-header [alignment]="alignment" style="display: block;">
        <bs-button slot="right" variant="neutral" size="sm">Sign out</bs-button>
      </bs-navigation-header>
    `,
  }),
};

export const Centered: Story = {
  args: { alignment: 'center' },
  render: args => ({
    props: args,
    moduleMetadata: { imports: [BsButton] },
    template: `
      <bs-navigation-header [alignment]="alignment" style="display: block;">
        <span slot="left">Dashboard</span>
        <bs-button slot="right" variant="neutral" size="sm">Sign out</bs-button>
      </bs-navigation-header>
    `,
  }),
};

export const WithNavigationDrawer: Story = {
  name: 'With navigation drawer',
  args: { alignment: 'with-navigation-drawer' },
  render: args => ({
    props: args,
    template: `<bs-navigation-header [alignment]="alignment" style="display: block;"></bs-navigation-header>`,
  }),
};

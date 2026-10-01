import type { Meta, StoryObj } from '@storybook/angular';
import { BsPagination } from '@brandsync/angular';

const meta: Meta<BsPagination> = {
  title: 'Components/BsPagination',
  component: BsPagination,
  parameters: {
    docs: {
      description: {
        component:
          'A numbered page control — previous/next chevrons, page-number buttons, and `...` ' +
          'overflow for large page counts. `totalPages`/`currentPage` drive everything — this ' +
          'computes which page numbers to show and where to collapse into `...` itself.\n\n' +
          '**When to use:** paging through a large, ordered result set (a table, a search results ' +
          'list) where jumping directly to a specific page number is useful.\n\n' +
          '**When not to use:** infinite-scroll or "load more" patterns — those don\'t have a fixed, ' +
          'addressable page number.',
      },
    },
  },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description:
        'The active page (1-indexed). Mutable + reflected so clicking a page button updates it ' +
        'directly, while `bsPageChange` still fires for the consumer to react to.',
    },
    nextLabel: {
      control: 'text',
      description: 'Accessible name for the next-page button.',
    },
    previousLabel: {
      control: 'text',
      description: 'Accessible name for the previous-page button.',
    },
    siblingCount: {
      control: { type: 'number', min: 0 },
      description:
        'How many page numbers to show on each side of the current page before collapsing the ' +
        'rest into `...`.',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages. Must be a positive integer.',
    },
  },
  args: {
    currentPage: 1,
    nextLabel: 'Next page',
    previousLabel: 'Previous page',
    siblingCount: 1,
    totalPages: 12,
  },
};

export default meta;
type Story = StoryObj<BsPagination>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-pagination [currentPage]="currentPage" [totalPages]="totalPages" [siblingCount]="siblingCount"></bs-pagination>`,
  }),
};

export const MiddlePage: Story = {
  name: 'Middle page',
  args: { currentPage: 6 },
  render: args => ({
    props: args,
    template: `<bs-pagination [currentPage]="currentPage" [totalPages]="totalPages"></bs-pagination>`,
  }),
};

export const FewPages: Story = {
  name: 'Few pages (no overflow)',
  args: { totalPages: 4, currentPage: 2 },
  render: args => ({
    props: args,
    template: `<bs-pagination [currentPage]="currentPage" [totalPages]="totalPages"></bs-pagination>`,
  }),
};

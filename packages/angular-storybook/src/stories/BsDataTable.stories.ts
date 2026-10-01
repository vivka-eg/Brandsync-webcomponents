import type { Meta, StoryObj } from '@storybook/angular';
import { BsDataTable } from '@brandsync/angular';

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'room', label: 'Room', sortable: true },
  { key: 'status', label: 'Status' },
];

const rows = [
  { id: 1, name: 'Sam Lee', room: '204', status: 'Checked in' },
  { id: 2, name: 'Jamie Fox', room: '112', status: 'Reserved' },
  { id: 3, name: 'Alex Kim', room: '318', status: 'Checked out' },
];

const meta: Meta<BsDataTable> = {
  title: 'Components/BsDataTable',
  component: BsDataTable,
  parameters: {
    docs: {
      description: {
        component:
          'A sortable, optionally row-selectable table for tabular data.\n\n' +
          '**When to use:** comparing structured records across the same set of fields (a list of ' +
          'people, bookings, etc.).\n\n' +
          '**When not to use:** loosely-structured or free-form content — use `BsCard`s instead; a ' +
          'small, fixed number of fields better served by a simple list.\n\n' +
          '`columns`, `rows`, and `cellRenderer` are JS-property-only — HTML attributes can only ' +
          'carry strings, so arrays/objects/functions must be set via `[columns]`/`[rows]` property ' +
          'bindings, not plain attributes.',
      },
    },
  },
  argTypes: {
    cellRenderer: {
      control: false,
      description:
        'Optional custom cell renderer `(row, column) => string`, e.g. for an actions column. ' +
        'Falls back to the raw cell value. JS-property-only.',
    },
    columns: {
      control: 'object',
      description: 'Array of `{ key, label, sortable? }` column definitions. JS-property-only.',
    },
    rows: {
      control: 'object',
      description: 'Array of row objects, each with a unique `id: string | number`. JS-property-only.',
    },
    selectable: {
      control: 'boolean',
      description: 'Whether rows render a selection checkbox.',
    },
    sortColumn: {
      control: 'text',
      description: 'The column `key` currently sorted by.',
    },
    sortDirection: {
      control: 'select',
      options: ['asc', 'desc'],
      description: 'Current sort direction for `sortColumn`.',
    },
  },
  args: {
    columns,
    rows,
    selectable: false,
    sortDirection: 'asc',
  },
};

export default meta;
type Story = StoryObj<BsDataTable>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `<bs-data-table [columns]="columns" [rows]="rows" [selectable]="selectable" [sortColumn]="sortColumn" [sortDirection]="sortDirection"></bs-data-table>`,
  }),
};

export const Sorted: Story = {
  args: { sortColumn: 'name', sortDirection: 'asc' },
  render: args => ({
    props: args,
    template: `<bs-data-table [columns]="columns" [rows]="rows" [sortColumn]="sortColumn" [sortDirection]="sortDirection"></bs-data-table>`,
  }),
};

export const Selectable: Story = {
  args: { selectable: true },
  render: args => ({
    props: args,
    template: `<bs-data-table [columns]="columns" [rows]="rows" [selectable]="selectable"></bs-data-table>`,
  }),
};

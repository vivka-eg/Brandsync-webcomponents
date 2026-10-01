import { render, h, describe, it, expect } from '@stencil/vitest';

type DataTableElement = HTMLElement & { clearSelection(): Promise<void> };

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' },
];

const rows = [
  { id: 1, name: 'Amelia', status: 'Active' },
  { id: 2, name: 'Noah', status: 'Active' },
  { id: 3, name: 'Priya', status: 'On leave' },
];

describe('bs-data-table', () => {
  describe('select-all checkbox', () => {
    it('renders a select-all checkbox in the header when selectable', async () => {
      const { root } = await render(<bs-data-table selectable columns={columns} rows={rows} />);
      const selectAll = root.shadowRoot.querySelector('thead input[type="checkbox"]') as HTMLInputElement;
      expect(selectAll).not.toBeNull();
      expect(selectAll.checked).toBe(false);
      expect(selectAll.indeterminate).toBe(false);
    });

    it('does not render a select-all checkbox when not selectable', async () => {
      const { root } = await render(<bs-data-table columns={columns} rows={rows} />);
      expect(root.shadowRoot.querySelector('thead input[type="checkbox"]')).toBeNull();
    });

    it('becomes indeterminate when some but not all rows are selected', async () => {
      const { root, waitForChanges } = await render(<bs-data-table selectable columns={columns} rows={rows} />);
      const rowCheckbox = root.shadowRoot.querySelector('tbody input[type="checkbox"]') as HTMLInputElement;
      rowCheckbox.checked = true;
      rowCheckbox.dispatchEvent(new Event('change'));
      await waitForChanges();

      const selectAll = root.shadowRoot.querySelector('thead input[type="checkbox"]') as HTMLInputElement;
      expect(selectAll.indeterminate).toBe(true);
      expect(selectAll.checked).toBe(false);
    });

    it('is checked when every row is selected', async () => {
      const { root, waitForChanges } = await render(<bs-data-table selectable columns={columns} rows={rows} />);
      const rowCheckboxes = Array.from(root.shadowRoot.querySelectorAll('tbody input[type="checkbox"]')) as HTMLInputElement[];
      for (const checkbox of rowCheckboxes) {
        checkbox.checked = true;
        checkbox.dispatchEvent(new Event('change'));
      }
      await waitForChanges();

      const selectAll = root.shadowRoot.querySelector('thead input[type="checkbox"]') as HTMLInputElement;
      expect(selectAll.checked).toBe(true);
      expect(selectAll.indeterminate).toBe(false);
    });

    it('selects all rows and emits bsRowSelect for each row when clicked', async () => {
      const { root, waitForChanges, spyOnEvent } = await render(<bs-data-table selectable columns={columns} rows={rows} />);
      const selectSpy = spyOnEvent('bsRowSelect');
      const selectAll = root.shadowRoot.querySelector('thead input[type="checkbox"]') as HTMLInputElement;
      selectAll.checked = true;
      selectAll.dispatchEvent(new Event('change'));
      await waitForChanges();

      expect(selectSpy).toHaveReceivedEventTimes(3);
      const rowCheckboxes = Array.from(root.shadowRoot.querySelectorAll('tbody input[type="checkbox"]')) as HTMLInputElement[];
      expect(rowCheckboxes.every(checkbox => checkbox.checked)).toBe(true);
    });

    it('deselects all rows when unchecked', async () => {
      const { root, waitForChanges, spyOnEvent } = await render(<bs-data-table selectable columns={columns} rows={rows} />);
      const selectAll = root.shadowRoot.querySelector('thead input[type="checkbox"]') as HTMLInputElement;
      selectAll.checked = true;
      selectAll.dispatchEvent(new Event('change'));
      await waitForChanges();

      const selectSpy = spyOnEvent('bsRowSelect');
      selectAll.checked = false;
      selectAll.dispatchEvent(new Event('change'));
      await waitForChanges();

      expect(selectSpy).toHaveReceivedEventTimes(3);
      const rowCheckboxes = Array.from(root.shadowRoot.querySelectorAll('tbody input[type="checkbox"]')) as HTMLInputElement[];
      expect(rowCheckboxes.every(checkbox => !checkbox.checked)).toBe(true);
    });
  });

  describe('clearSelection()', () => {
    it('resets selection state and emits bsRowSelect for previously selected rows', async () => {
      const { root, waitForChanges, spyOnEvent } = await render(<bs-data-table selectable columns={columns} rows={rows} />);
      const rowCheckbox = root.shadowRoot.querySelector('tbody input[type="checkbox"]') as HTMLInputElement;
      rowCheckbox.checked = true;
      rowCheckbox.dispatchEvent(new Event('change'));
      await waitForChanges();

      const selectSpy = spyOnEvent('bsRowSelect');
      await (root as DataTableElement).clearSelection();
      await waitForChanges();

      expect(selectSpy).toHaveReceivedEventTimes(1);
      expect(selectSpy).toHaveReceivedEventDetail({ id: 1, selected: false });

      const checkboxesAfterClear = Array.from(root.shadowRoot.querySelectorAll('tbody input[type="checkbox"]')) as HTMLInputElement[];
      expect(checkboxesAfterClear.every(checkbox => !checkbox.checked)).toBe(true);
    });

    it('emits no event when nothing was selected', async () => {
      const { root, spyOnEvent } = await render(<bs-data-table selectable columns={columns} rows={rows} />);
      const selectSpy = spyOnEvent('bsRowSelect');
      await (root as DataTableElement).clearSelection();
      expect(selectSpy).toHaveReceivedEventTimes(0);
    });
  });

  describe('cellRenderer', () => {
    it('renders default cell values as escaped text, never interpreted as HTML', async () => {
      const maliciousRows = [{ id: 1, name: '<img src=x onerror="window.__xss = true">', status: 'Active' }];
      const { root } = await render(<bs-data-table columns={columns} rows={maliciousRows} />);
      const cell = root.shadowRoot.querySelector('tbody td') as HTMLElement;
      expect(cell.querySelector('img')).toBeNull();
      expect(cell.textContent).toBe('<img src=x onerror="window.__xss = true">');
    });

    it('still allows cellRenderer to render trusted custom HTML when explicitly supplied', async () => {
      const { root } = await render(<bs-data-table columns={columns} rows={rows} cellRenderer={() => '<button type="button">Edit</button>'} />);
      const cell = root.shadowRoot.querySelector('tbody td') as HTMLElement;
      expect(cell.querySelector('button')).not.toBeNull();
    });
  });
});

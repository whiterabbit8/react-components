import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Pagination from './Pagination';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const PAGE_QUANTITY = 20;

const PaginationPage = () => {
  return (
    <MemoryRouter>
      <Provider store={store}>
        <Pagination pageQuantity={PAGE_QUANTITY} />
      </Provider>
    </MemoryRouter>
  );
};

describe('Tests Pagination component', () => {
  test('Component updates URL query parameter when clicking next page', () => {
    render(<PaginationPage />);

    expect(screen.getByText('>')).toBeDefined();

    fireEvent.click(screen.getByText('>'));

    waitFor(() => {
      const searchParams = new URLSearchParams(window.location.search);
      expect(searchParams.get('page')).toBe('2');
    });
  });
  test('Component updates URL query parameter when clicking last page', () => {
    render(<PaginationPage />);

    expect(screen.getByText('>>')).toBeDefined();

    fireEvent.click(screen.getByText('>>'));

    waitFor(() => {
      const searchParams = new URLSearchParams(window.location.search);
      expect(searchParams.get('page')).toBe(`${PAGE_QUANTITY}`);
    });
  });
  test('Component updates URL query parameter when clicking prev page', () => {
    render(<PaginationPage />);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', '2');

    expect(screen.getByText('<')).toBeDefined();

    fireEvent.click(screen.getByText('<'));

    waitFor(() => {
      const newSearchParams = new URLSearchParams(window.location.search);
      expect(newSearchParams.get('page')).toBe('1');
    });
  });
});

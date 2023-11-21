import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Pagination from './Pagination';

const PAGE_QUANTITY = 20;

describe('Tests Pagination component', () => {
  test('Component updates URL query parameter when page changes', () => {
    render(
      <MemoryRouter>
        <Pagination pageQuantity={PAGE_QUANTITY} />
      </MemoryRouter>
    )

    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get('page');

    const nextBtn = screen.getByText('>>');
    fireEvent.click(nextBtn);

    waitFor(() => {
      const nextPage = searchParams.get('page');
      expect(Number(nextPage)).toBe(Number(page) + 1)
    })
  })
})
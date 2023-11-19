import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import DetailedCard from './DetailedCard';

describe('Test Detailed Card component', () => {
  test('A loading indicator is displayed while fetching data', () => {
    render(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>
    );

    expect(screen.getByAltText('loader')).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import SearchResults from './SearchResults';
import { SearchContext } from '../../utilities/context';
import {
  mockResultData,
  mockEmptyResultData,
} from '../../utilities/mockResultData';

describe('Test SearcResults component', () => {
  test('Component renders the specified number of cards', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchContext.Provider
          value={{
            query: '',
            setQuery: jest.fn(),
            resultData: mockResultData,
            setResultData: jest.fn(),
          }}
        >
          <SearchResults
            loadPage={jest.fn()}
            isLoading={false}
            success={true}
          />
        </SearchContext.Provider>
      </MemoryRouter>
    );

    const cards = container.getElementsByClassName('character');
    expect(cards.length).toBe(mockResultData.results.length);
  });

  test('Appropriate message is displayed if no cards are present', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchContext.Provider
          value={{
            query: '',
            setQuery: jest.fn(),
            resultData: mockEmptyResultData,
            setResultData: jest.fn(),
          }}
        >
          <SearchResults
            loadPage={jest.fn()}
            isLoading={false}
            success={false}
          />
        </SearchContext.Provider>
      </MemoryRouter>
    );

    const message = container.querySelector('.not-found-container');
    expect(message).toBeInTheDocument();
  });
});

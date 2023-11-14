import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { SearchContext } from '../../utilities/context';
import SearchResults from './SearchResults';
import {
  mockResultData,
  mockEmptyResultData,
} from '../../utilities/mockResultData';

describe('Test SearcResults component', () => {
  test('Component renders the specified number of cards', () => {
    const { container } = render(
      <BrowserRouter>
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
            resultData={mockResultData}
            success={true}
          />
        </SearchContext.Provider>
      </BrowserRouter>
    );

    const cards = container.getElementsByClassName('character');
    expect(cards.length).toBe(mockResultData.results.length);
  });

  test('Appropriate message is displayed if no cards are present', () => {
    const { container } = render(
      <BrowserRouter>
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
            resultData={mockEmptyResultData}
            success={false}
          />
        </SearchContext.Provider>
      </BrowserRouter>
    );

    const message = container.querySelector('.not-found-container');
    expect(message).toBeInTheDocument();
  });
});

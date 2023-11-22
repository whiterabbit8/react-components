import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { HttpResponse, http } from 'msw';
import { Provider } from 'react-redux';
import SearchResults from './SearchResults';
import { store } from '../../store/store';
import {
  mockEmptyResultData,
  mockResultData,
} from '../../test/api/mockResultData';
import { server } from '../../test/api/server';
import { baseUrl } from '../../utilities/api';

const Results = () => {
  return (
    <MemoryRouter>
      <Provider store={store}>
        <SearchResults />
      </Provider>
    </MemoryRouter>
  );
};

describe('Test SearcResults component', () => {
  test('Component renders the specified number of cards', async () => {
    const { container } = render(<Results />);

    waitFor(() => {
      const cards = container.getElementsByClassName('character');
      expect(cards.length).toBe(mockResultData.results.length);
    });
  });

  test('Appropriate message is displayed if no cards are present', async () => {
    server.use(
      http.get(
        `${baseUrl}/*`,
        () => {
          return HttpResponse.json(mockEmptyResultData);
        },
        { once: true }
      )
    );

    const { container } = render(<Results />);

    waitFor(() => {
      const message = container.getElementsByClassName('not-found-container');
      expect(message).toBeInTheDocument();
    });
  });
});

import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import SearchResults from './SearchResults';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { mockEmptyResultData, mockResultData } from '../../test/api/mockResultData';
import { server } from '../../test/api/server';
import { HttpResponse, http } from 'msw';
import { baseUrl } from '../../utilities/api';

const Results = () => {
  return (
    <MemoryRouter>
      <Provider store={store}>
        <SearchResults />
      </Provider>
    </MemoryRouter>
  )
}

describe('Test SearcResults component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    server.close();
  });
  test('Component renders the specified number of cards', async () => {
    const { container } = render(<Results />);

    await waitFor(() => {
      waitFor(() => {
        const cards = container.getElementsByClassName('character');
        expect(cards.length).toBe(mockResultData.results.length);
      })
    })
  });

  test('Appropriate message is displayed if no cards are present',  async () => {
    server.use(
      http.get(`${baseUrl}/*`, () => {
          return HttpResponse.json(mockEmptyResultData)
      }, { once: true })
    )

    const { container } = render(<Results />);

    await waitFor(() => {
      waitFor(() => {
        const message = container.getElementsByClassName('not-found-container');
        expect(message).toBeInTheDocument();
      })
    })
  });
});
